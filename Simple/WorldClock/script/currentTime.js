//get time
//return current time (hours minutes seconds)(month year timezone)
window.addEventListener("load", () => {
currentTime();
    function currentTime() {
        const datenow = new Date();

        //time components
        let hr = datenow.getHours();
        let minutes = datenow.getMinutes();
        let sec = datenow.getSeconds();

        hr = checkTime(hr);
        minutes = checkTime(minutes);
        sec = checkTime(sec);

        let mm = datenow.getMonth();
        let dd = datenow.getDate();
        let yyyy = datenow.getFullYear();

        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        const date = dd + " " + months[mm] + ", " + yyyy;
        const time = hr + ":" + minutes + ":" + sec;

        document.getElementById('digital-clock').innerHTML =  time;
        document.getElementById('digital-date').innerHTML =  date;

        let hrRotatePos;
        let minRotatePos;
        let secRotatePos;
  
        let hourHandPos = document.getElementById('location-local').querySelector("#hour-hand");
        let minuteHandPos = document.getElementById('location-local').querySelector("#minute-hand");
        let secHandPos = document.getElementById('location-local').querySelector("#seconds-hand");
  
        hrRotatePos = ((hr / 12) * 360) + ((minutes/60)*30);
        minRotatePos = ((minutes / 60) * 360) + ((sec/60)*6);
        secRotatePos = ((sec / 60) * 360);
  
        hourHandPos.style.transform = `rotate(${hrRotatePos}deg)`;
        minuteHandPos.style.transform = `rotate(${minRotatePos}deg)`;
        secHandPos.style.transform = `rotate(${secRotatePos}deg)`;

        setTimeout(currentTime, 1000);
    }
    function checkTime(i) {
    // add zero in front of numbers < 10
    if (i < 10) {
        i = "0" + i
    };  
    return i;
    }
});