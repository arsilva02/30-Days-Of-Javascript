console.log('Exercises 2 - day 21')

//Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
allPara.forEach((para)=>{
    para.style.color = 'teal'
    para.style.background = 'black'
    para.style.border = 'red'
    para.style.fontFamily = 'Arial'
    para.style.fontSize = '30px'
})

//Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allPara.forEach((para,i)=>{
    para.style.fontSize = '24px' //change font to 24
    if(i%2===0){
        para.style.color = 'red'
    } else{para.style.color='green'
}
})


//Set text content, id and class to each paragraph
//already did this