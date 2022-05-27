const element = document.querySelector("#oneButton");
const elements = document.querySelector("#btn");

element.onclick = function(event){
    console.log(event);
    // alert(new Date());

    elements.innerHTML = new Date();
}
