console.log('main loaded')

const addToScoreboard = (userInfo) =>{
    let first = userInfo[0]
    let last = userInfo[1]
    let country = userInfo[2]
    let score = userInfo[3]

    const newScoreboard = document.createElement('div')
    newScoreboard.classList.add('main-scoreboard')

    newScoreboard.innerHTML = `
    <div>
        <p class="name">${first} ${last}</p>
    </div>
        <p class="country">${country}</p>
        <p class="player-score">${score}</p>
        <div class="score-buttons">
            <button>&#x1f5d1;</button>
            <button>+5</button>
            <button>-5</button>
        </div>
        `

    scoreboardDiv.appendChild(newScoreboard)
}


const sortData = (data) => {
    scoreboardDiv.innerHTML = ''
    data.sort((a,b)=>{ //sort desc
        if(a[3] > b[3]) return -1
        if(a[3] < b[3]) return 1
        return 0
    })
    return data
}

const generateScoreboard = (data) => {
    data = sortData(data)
    for(user of data){
        addToScoreboard(user)
    }
    scoreButtons()

}

const scoreButtons = () => {
    const allButtons = document.querySelectorAll('.score-buttons')
    for(button of allButtons){
        button.addEventListener('click',(e)=>{
            const textContent = e.target.textContent
            const scoreOfPlayer = e.target.parentElement.parentElement.children[2]
            const playerName = e.target.parentElement.parentElement.children[0].innerText.split(' ')

            let playerIndex = 0 
            for (player of playerData) {
                if (playerName[0] === player[0] && playerName[1] === player[1]) break
                playerIndex ++ 
            }

            if(textContent.length > 2) return
    
    
            if(textContent === '🗑') {
                playerData.splice(playerIndex,1)
                return e.target.parentElement.parentElement.remove()}

            scoreOfPlayer.textContent = parseInt(scoreOfPlayer.textContent) + parseInt(textContent)
            playerData[playerIndex][3] = (scoreOfPlayer.innerText)

            generateScoreboard(playerData)

        })
        }
}


//select html

const submitButton = document.querySelector('.submit')
const errorPrompt = document.querySelector('.error-prompt')
const scoreboardDiv = document.querySelector('.scoreboard-wrapper')

generateScoreboard(playerData)
scoreButtons()

//verify
submitButton.addEventListener('click',(e)=>{
    const inputFirstName = document.querySelector('.first-name').value
    const inputLastName = document.querySelector('.last-name').value
    const inputCountry = document.querySelector('.country').value
    const inputNumber = document.querySelector('.number').value

    if(inputFirstName === '' || inputLastName === '' || inputCountry ==='' || inputNumber ==='') 
    {errorPrompt.textContent = 'Please enter a value in all fields'}

    else{
        let newUser = [inputFirstName,inputLastName,inputCountry, Number(inputNumber)]
        playerData.push(newUser)
        generateScoreboard(playerData)
        scoreButtons()
    }
    
})