
//JAVA SCRIPTS ONLY
var day = "27";
var month = "2";
var year = "2025";

var hours = "0";
var minute = "05";
var second = "58";
var milliseconds = "500";

/******************************* */

var date_time_shoot = new Date();
date_time_shoot.setFullYear(year);
date_time_shoot.setMonth(month-1);
date_time_shoot.setDate(day);
date_time_shoot.setHours(hours);
date_time_shoot.setMinutes(minute);
date_time_shoot.setSeconds(second);
date_time_shoot.setMilliseconds(milliseconds);

/******************************* */

var total_shoot_arr = [];
total_shoot_arr.push(date_time_shoot);
Play_Shot(total_shoot_arr);

/******************************* 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/

function Play_Shot(shoot_array){

    for(var count = 0; count < shoot_array.length; count++){
  
      var shoot_current = new Date(shoot_array[count]);
  
      //ClickRandomNumberButton();
      ShotButton(shoot_current);
  
    }
  
  }

//---------------------[ Random ]---------------------//
  function ClickRandomNumberButton(){
    //Click button random number
    window.document.getElementsByClassName("text-white text-[14px] lg:text-[22px]")[1].click();
  }


//---------------------[ Click ]---------------------//
   function ShotButton(time_shot){

    var milliseconds_delay = (time_shot - new Date());

    window.setTimeout(function(){
      document.getElementsByClassName("btn btn-block btn-play")[9].click();
    }, (time_shot - new Date()));

    var wait_delay = milliseconds_delay / 1000;
    wait_delay = wait_delay + 5;


  }
