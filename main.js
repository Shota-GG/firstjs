let click = document.querySelector("button")
let mainDiv = document.querySelector("div")
click.addEventListener("click", function onClick(){
    document.body.style.backgroundColor =  'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
})