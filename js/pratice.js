const element = document.querySelector("#oneButton");
const elements = document.querySelector("#btn");

element.onclick = function(event){
    console.log(event);
    // alert(new Date());

    elements.innerHTML = new Date();
    
}

const click = document.querySelector(".click");
const clicks = document.querySelector(".click_event");

function event_click(event){

    const img = document.querySelector(".upload_img");

    // alert("picture");
    // console.log("blue");
    clicks.innerHTML = new Date();
}