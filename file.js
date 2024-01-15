const settingimg=document.querySelector(".img-icon");
const settingcontent=document.querySelector(".setting-content");
const clickme=document.querySelector(".click")
let isdobopen=false;
const intialel=document.querySelector(".intial-text");
const afterdobbutton=document.querySelector(".afterdob-button")
const dobinput=document.querySelector("#dobinput")
const dobbutton=document.querySelector(".dobbutton")
let dateofbirth;

const yearel=document.querySelector(".year")
const monthel=document.querySelector(".month")
const hourel=document.querySelector(".hour")
const miniteel=document.querySelector(".minite")
const secandel=document.querySelector(".secand")


    const maketoditgiNumber=(number)=>{
            return number > 9 ? number:`0${number}`
    }



const toogledathofbirth=()=>{
    if(isdobopen){
        settingcontent.classList.add("hide")
    }else{
        settingcontent.classList.remove("hide")
    }
    isdobopen =! isdobopen;
    console.log("toggle",isdobopen);
}
const updateage=()=>{
    const currentDate=new Date();
    const datedifference=currentDate-dateofbirth;
    const year=Math.floor(datedifference/(1000 * 60 * 60 * 24 * 365))
    const month=Math.floor(datedifference/(1000 * 60 * 60 * 24 * 365)%12)
    const day=Math.floor(datedifference/(1000 * 60 * 60 * 24)%30)
    const hour=Math.floor(datedifference/(1000 * 60 * 60)%24)
    const minite=Math.floor(datedifference/(1000 * 60)%60)
    const secand=Math.floor(datedifference/(1000)%60)
  
    yearel.innerHTML=maketoditgiNumber(year);
    monthel.innerHTML=maketoditgiNumber(month);
    hourel.innerHTML=maketoditgiNumber(hour);
    miniteel.innerHTML=maketoditgiNumber(minite);
    secandel.innerHTML=maketoditgiNumber(secand);
}



const setdob =()=>{
    const datestring=dobinput.value;
    dateofbirth = datestring ? new Date(datestring): null;
    // console.log(dateofbirth);
    if(dateofbirth){
        intialel.classList.add("hide")
        afterdobbutton.classList.remove("hide")
         setInterval(()=> updateage())
    }else{
        intialel.classList.remove("hide")
        afterdobbutton.classList.add("hide")
    }
}

setdob();






settingimg.addEventListener("click", toogledathofbirth)
dobbutton.addEventListener("click", setdob)