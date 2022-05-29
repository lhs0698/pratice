const element = document.querySelector("#oneButton");
const elements = document.querySelector("#btn");

element.onclick = function(event){
    console.log(event);
    // alert(new Date());

    elements.innerHTML = new Date();
    
}

const click = document.querySelector(".click");
const clicks = document.querySelector(".click_event");

function event_click(){
    // alert("picture");
    // console.log("blue");
    // const img = document.querySelector(".upload_img");
    const time = new Date();
    const second = time.getSeconds();
    clicks.innerHTML = second;

    setInterval(event_click,1000); //1초마다 카운트

    if(second > 30){
        console.log(second);
    }
}
