console.log("This is my script")

let result =
{
    "tag": "",
    "free": true,
    "role": false,
    "user": "tushargulabsharma18",
    "email": "tushargulabsharma18@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click",async (e) => {
    e.preventDefault()
    console.log("clicked!");
    resultCont.innerHTML= `<img width="120" src="img/loader.svg" alt="">`

    let key = "ema_live_1pNjsNI9OdwD3iOcAdxvYkP1Wjk6plBq97jLUz4L"

    let email = document.getElementById("username").value
    
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let  res = await fetch(url)
    let result = await res.json()
    

    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !=="" && result[key] !==" "){        
        str = str + `<div>${key}: ${result[key]}</div>`

    }
    }

    console.log(str);
    resultCont.innerHTML = str;
})

resetBtn.addEventListener("click", ()=>{
      
})



const cursorDot=  document.querySelector("[data-cursor-dot]");
const cursorOutline= document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){
    const posX=e.clientX;
    const posY= e.clientY;

    cursorDot.style.left=`${posX}px`;
    cursorDot.style.top=`${posY}px`;

    cursorOutline.style.left=`${posX}px`;
    cursorOutline.style.top=`${posY}px`;

})