const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");



function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsdegree = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsdegree}deg)`;


    const minute = now.getMinutes();
    const minutedegree = ((minute/60)*360) +90;
    minuteHand.style.transform = `rotate(${minutedegree}deg)`;


    const hour = now.getHours();
    const hourdegree = ((hour/12)*360) + 90;
    hourHand.style.transform = `rotate(${hourdegree}deg)`;
    
}



//for working everysecond we use set interval 
setInterval(setDate,1000);
setDate();
