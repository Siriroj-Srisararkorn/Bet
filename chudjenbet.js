
//chudjenbet.com
//JAVA SCRIPTS ONLY
/********************************/

var day = "27";
var month = "2";
var year = "2025";

var hours = "16";
var minute = "10";
var second = "59";
var milliseconds = "940";

/********************************/
//#1 = 970,960, 940
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
	Log("Waiting... " + formatMilliseconds(milliseconds_delay));
    window.setTimeout(function(){
      window.document.getElementById("padAdd").click();
	Log("Complete");
    }, (time_shot - new Date()));

    var wait_delay = milliseconds_delay / 1000;
    wait_delay = wait_delay + 5;


  }
  
  function Log(text){
    console.log('%c '+ text + " ", 'background: #7EBA53; color: #025B8E; font-weight: bold');
  }

	function formatMilliseconds(milliseconds) {

  var log = "";

    if(milliseconds > 0){

      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const remainingHours = hours % 24;
      const remainingMinutes = minutes % 60;
      const remainingSeconds = seconds % 60;
      const remainingMilliseconds = milliseconds % 1000;

      let formattedTime = '';

      if (days > 0) {
        formattedTime += `${days} วัน `;
      }

      if (remainingHours > 0) {
        formattedTime += `${remainingHours} ชั่วโมง `;
      }

      if (remainingMinutes > 0) {
        formattedTime += `${remainingMinutes} นาที `;
      }

      if (remainingSeconds > 0) {
        formattedTime += `${remainingSeconds} วินาที `;
      }

      if (remainingMilliseconds > 0 && days === 0 && hours === 0 && minutes === 0) {
        formattedTime += `${remainingMilliseconds} มิลลิวินาที`;
      }

      log = formattedTime.trim().toString();

    }else{
      log = "0";

    }



	  return log;
	}

