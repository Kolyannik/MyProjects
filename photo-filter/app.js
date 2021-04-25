const full = document.getElementById('fullscreen')
const blurr = document.getElementsByName("blur")
const invert = document.getElementsByName("invert")
const sepia = document.getElementsByName("sepia")
const saturate = document.getElementsByName("saturate")
const hue = document.getElementsByName("hue")
const filters = document.getElementsByName("result")
const reset = document.getElementById("reset")
const img = document.getElementsByTagName("img")
const next = document.getElementById("next")
const input = document.getElementById("btnInput")
const save = document.getElementById("save")
const canvas = document.querySelector('canvas')
let date = new Date
let timeOfDay
let i = 1
let x
// Объявленные стили сбрасываются присваиванием значения null
// img[0].style = "--blur: 0px;"
blurr[0].oninput = () => {filters[0].value = blurr[0].value; 
    img[0].style = `
    --blur: ${blurr[0].value}px;
    --invert: ${invert[0].value}%;
    --sepia: ${sepia[0].value}%;
    --saturate: ${saturate[0].value}%;
    --hue: ${hue[0].value}deg;`}
invert[0].oninput = () => {filters[1].value = invert[0].value;
    img[0].style = `
    --blur: ${blurr[0].value}px;
    --invert: ${invert[0].value}%;
    --sepia: ${sepia[0].value}%;
    --saturate: ${saturate[0].value}%;
    --hue: ${hue[0].value}deg;`}
sepia[0].oninput = () => {filters[2].value = sepia[0].value;
    img[0].style = `
    --blur: ${blurr[0].value}px;
    --invert: ${invert[0].value}%;
    --sepia: ${sepia[0].value}%;
    --saturate: ${saturate[0].value}%;
    --hue: ${hue[0].value}deg;`}
saturate[0].oninput = () => {filters[3].value = saturate[0].value;
    img[0].style = `
    --blur: ${blurr[0].value}px;
    --invert: ${invert[0].value}%;
    --sepia: ${sepia[0].value}%;
    --saturate: ${saturate[0].value}%;
    --hue: ${hue[0].value}deg;`}
hue[0].oninput = () => {filters[4].value = hue[0].value;
    img[0].style = `
    --blur: ${blurr[0].value}px;
    --invert: ${invert[0].value}%;
    --sepia: ${sepia[0].value}%;
    --saturate: ${saturate[0].value}%;
    --hue: ${hue[0].value}deg;`}
full.onclick = () => {
    if (document.fullscreen == false){
        document.documentElement.requestFullscreen()
    }
    else if (document.fullscreen == true){
        document.exitFullscreen()
    }
}
reset.onclick = () => {
    filters[0].value = blurr[0].attributes[5].value
    blurr[0].value = blurr[0].attributes[5].value
    filters[1].value = invert[0].attributes[5].value
    invert[0].value = invert[0].attributes[5].value
    filters[2].value = sepia[0].attributes[5].value
    sepia[0].value = sepia[0].attributes[5].value
    filters[3].value = saturate[0].attributes[5].value
    saturate[0].value = saturate[0].attributes[5].value
    filters[4].value = hue[0].attributes[5].value
    hue[0].value = hue[0].attributes[5].value
    img[0].style = null
}
if (date.getHours() >= 0 && date.getHours() < 6){timeOfDay = "night"}
else if (date.getHours() >= 6 && date.getHours() < 12){timeOfDay = "morning"}
else if (date.getHours() >= 12 && date.getHours() < 18){timeOfDay = "day"}
else if (date.getHours() >= 18 && date.getHours() < 24){timeOfDay = "evening"}
next.onclick = () => {
    img[0].crossOrigin = "anonymous"
    i++
    if (i > 20){i = 1}
    if (i < 10){
        img[0].src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/0${i}.jpg`}
    else {
        img[0].src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${i}.jpg`}
}
input.onchange = () => {
    const fileInput = document.querySelector('input[type=file]')
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        img[0].src = reader.result
    }
    if (file) {
    reader.readAsDataURL(file)
    fileInput.value = null;
    }
}
save.onclick = () => {
    const img2 = new Image
    img2.setAttribute('crossOrigin', 'anonymous');
    img2.src = img[0].src
    img2.onload = () =>{
        const ctx = canvas.getContext("2d")
        canvas.width = img2.width
        canvas.height = img2.height
        if (img[0].naturalWidth/img[0].width > img[0].naturalHeight/img[0].height){x = img[0].naturalWidth/img[0].width}
        else {x = img[0].naturalHeight/img[0].height}
        if (x < 1){x = 1}
        ctx.filter = `
            blur(${blurr[0].value * x}px)
            invert(${invert[0].value}%)
            sepia(${sepia[0].value}%)
            saturate(${saturate[0].value}%)
            hue-rotate(${hue[0].value}deg)`
        console.log(ctx.filter)
        ctx.drawImage(img2, 0, 0);
        const link = document.createElement('a');
        link.download = 'download.png';
        link.href = canvas.toDataURL();
        link.click();
        link.delete;
    }
}