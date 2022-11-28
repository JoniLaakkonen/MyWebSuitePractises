//get time
//return current time (hours minutes seconds)(month year timezone)
window.addEventListener("load", () => {
  tokyoTime();
    function tokyoTime() {
      const datenow = new Date();
      //Getting gmt time using current time and atting it's offset value as milliseconds to create wanted gmt time.
      const gmtDateTimeMS = datenow.getTime() + (datenow.getTimezoneOffset() * 60000); //getTimeOffset comes in minutes so multiplying by 60000 makes it ms
      const GMTDateTime = new Date(gmtDateTimeMS); //now making gmt into date object
      let mm = GMTDateTime.getMonth();
      let dd = GMTDateTime.getDate();
      let yyyy = GMTDateTime.getFullYear();
      let hr = GMTDateTime.getHours() + (9);
      let minutes = GMTDateTime.getMinutes();
      let sec = GMTDateTime.getSeconds();


      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      //lengt of months and checking if it is a leap year
      const monthDays = new Array("31","28","31","30","31","30","31","31","30","31","30","31");
      //lenght of months on a leap year
      if (yyyy % 4 == 0) {
        monthDays = new Array("31","29","31","30","31","30","31","31","30","31","30","31");
      }
      //proving that the year is not a leap year
      if (yyyy % 100 == 0 && yyyy % 400 != 0) {
        monthDays = new Array("31","28","31","30","31","30","31","31","30","31","30","31");
      }
      minutes = checkTime(minutes);
      sec = checkTime(sec);
      if (hr >= 24) {
        hr = hr - 24;
        dd = dd-(-1);
      }
      if (hr < 0) {
        hr -= -24;
        dd = dd-1;
      }
      
      if (dd <= 0) {
        if (mm == 0) {
          mm = 11;
          yyyy -= 1;
        } else {
          mm = mm - 1;
        }
        dd = monthDays[mm];
      }
      if (dd > monthDays[mm]) {
        dd = 1;
        if (mm == 11) {
          mm = 0;
          yyyy -= -1;
        } else {
          mm -= -1;
        }
      }
      const date = dd + " " + months[mm] + ", " + yyyy;
      const time = hr + ":" + minutes + ":" + sec;
      document.getElementById('location-tokyo').querySelector("#digital-clock").innerHTML = time;
      document.getElementById('location-tokyo').querySelector("#digital-date").innerHTML = date;

      let hrRotatePos;
      let minRotatePos;
      let secRotatePos;

      let hourHandPos = document.getElementById('location-tokyo').querySelector("#hour-hand");
      let minuteHandPos = document.getElementById('location-tokyo').querySelector("#minute-hand");
      let secHandPos = document.getElementById('location-tokyo').querySelector("#seconds-hand");

      hrRotatePos = ((hr / 12) * 360) + ((minutes/60)*30);
      minRotatePos = ((minutes / 60) * 360) + ((sec/60)*6);
      secRotatePos = ((sec / 60) * 360);

      hourHandPos.style.transform = `rotate(${hrRotatePos}deg)`;
      minuteHandPos.style.transform = `rotate(${minRotatePos}deg)`;
      secHandPos.style.transform = `rotate(${secRotatePos}deg)`;


      setTimeout(tokyoTime, 1000);
    }
    function checkTime(i) {
      // add zero in front of numbers < 10
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
});