const para = document.getElementById('para')
const btn = document.getElementById("btn");

let count = 0;
btn.addEventListener('click',()=>{
    count++
    para.textContent = count
})