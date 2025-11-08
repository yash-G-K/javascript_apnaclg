document.querySelectorAll("button");

for(let btn of buttons){
    btn.addEventListener("click", function(){
        let color = this.getAttribute("data-color");
        document.body.style.backgroundColor = color;
    });
}