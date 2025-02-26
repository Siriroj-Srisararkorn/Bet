//chudjenbet.com
//JAVA SCRIPTS ONLY
/********************************/

var day = "27";
var month = "2";
var year = "2025";

var hours = "1";
var minute = "10";
var second = "59";
var milliseconds = "750";

/********************************/
//#1 = 970
/********************************
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
/********************************/
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
  
      ClickRandomNumberButton();
      ShotButton(shoot_current);
  
    }
  
  }

//---------------------[ Random ]---------------------//
  function ClickRandomNumberButton(){
    //Click button random number
    window.document.getElementById("padRandom").click();
  }


//---------------------[ Click ]---------------------//
   function ShotButton(time_shot){

    var milliseconds_delay = (time_shot - new Date());

    window.setTimeout(function(){
      window.document.getElementById("padAdd").click();
    }, (time_shot - new Date()));

    var wait_delay = milliseconds_delay / 1000;
    wait_delay = wait_delay + 5;


  }
undefined
