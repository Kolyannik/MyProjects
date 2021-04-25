let isActive
const x = document.querySelectorAll('.piano-key')
x.forEach((item) => {
    item.addEventListener('mousedown', () =>{
        isActive=true; 
        new Audio (`./assets/audio/${item.dataset.note}.mp3`).play()
        item.classList.add("piano-key-active-pseudo")
        item.classList.add("piano-key-active")
        item.addEventListener('mouseout', () => {
            item.classList.remove("piano-key-active")
            item.classList.remove("piano-key-active-pseudo")
        }) 
        x.forEach((i) => {
            i.addEventListener('mouseover', () =>{
                isActive &&  new Audio (`./assets/audio/${i.dataset.note}.mp3`).play()
                isActive && i.classList.add("piano-key-active-pseudo")
                isActive && i.classList.add("piano-key-active")
                    i.addEventListener('mouseout', () => {
                        i.classList.remove("piano-key-active")
                        i.classList.remove("piano-key-active-pseudo")
                    })
            })       
        });
    })
})
document.addEventListener('mouseup', () => {isActive=false})
x.forEach((item) => {
    item.addEventListener('mouseup', () => {
        item.classList.remove("piano-key-active");
        item.classList.remove("piano-key-active-pseudo");
        x.forEach((i) => {  
        })
    })
})

let m = new Map()
m.set("KeyD", {note: "c", index: 0, isPressedBefore: false})
m.set("KeyR", {note:"c♯", index: 7, isPressedBefore: false})
m.set("KeyF", {note:"d", index: 1, isPressedBefore: false})
m.set("KeyT", {note:"d♯", index: 8, isPressedBefore: false})
m.set("KeyG", {note:"e", index: 2, isPressedBefore: false})
m.set("KeyH", {note:"f", index: 3, isPressedBefore: false})
m.set("KeyU", {note:"f♯", index: 10, isPressedBefore: false})
m.set("KeyJ", {note:"g", index: 4, isPressedBefore: false})
m.set("KeyI", {note:"g♯", index: 11, isPressedBefore: false})
m.set("KeyK", {note:"a", index: 5, isPressedBefore: false})
m.set("KeyO", {note:"a♯", index: 12, isPressedBefore: false})
m.set("KeyL", {note:"b", index: 6, isPressedBefore: false})

document.addEventListener('keydown', (e) => {
    if (m.has(e.code)) {
        let m_var = m.get(e.code)
        if (!m_var.isPressedBefore) {
            m_var.isPressedBefore = true
            new Audio (`./assets/audio/${m_var.note}.mp3`).play();
            x[m_var.index].classList.add("piano-key-active-pseudo");
            x[m_var.index].classList.add("piano-key-active");
        }
    }})
document.addEventListener('keyup', (e) => {
    if (m.has(e.code)) {
    let m_var = m.get(e.code)
    x[m_var.index].classList.remove("piano-key-active-pseudo");
    x[m_var.index].classList.remove("piano-key-active");
    m_var.isPressedBefore = false
    }
})
const y1 = document.getElementById('letters')
const y2 = document.getElementById('notes')
y1.onclick = () => {y1.classList.add("btn-active"); y2.classList.remove("btn-active"); x.forEach((item) => {
    item.classList.add("piano-key-letter")
})} 
y2.onclick = () => {y2.classList.add("btn-active"); y1.classList.remove("btn-active"); x.forEach((item) => {
    item.classList.remove("piano-key-letter")
})}

const full = document.getElementById('fullscreen')
full.onclick = () => {
    if (document.fullscreen == false){
        document.documentElement.requestFullscreen()
    }
    else if (document.fullscreen == true){
        document.exitFullscreen()
    }
}