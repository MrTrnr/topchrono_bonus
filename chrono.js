	function chrono(){

let refMonth = 2; /*en javascript janvier = 0, février = 1 donc mars = 2 */
let refDay = 23;
let refHour = 0;
let refMinute = 0;
let refSecond = 0;

 






// alert("execution boucle");
let d = new Date();
let currentMonth = d.getMonth(); 
let currentDay = d.getDate();
let currentHour = d.getHours();
let currentMinute = d.getMinutes();
let currentSecond = d.getSeconds();



// document.getElementById("demo1").innerHTML = d.getFullYear();
// document.getElementById("demo2").innerHTML = currentMonth + 1+"ème mois";
// document.getElementById("demo3").innerHTML = currentDay + "ème jour";
// document.getElementById("demo4").innerHTML = currentHour + " H";
// document.getElementById("demo5").innerHTML = currentMinute + " M";
// document.getElementById("demo6").innerHTML = currentSecond + " S";


let remainingSecond = refSecond - currentSecond;

if (remainingSecond < 0){
	remainingSecond=remainingSecond+60;
	currentMinute=currentMinute+1;
};

let remainingMinute = refMinute - currentMinute;

if (remainingMinute < 0){
	remainingMinute=remainingMinute+60;
	currentHour=currentHour+1;
};

let remainingHour = refHour - currentHour;

if (remainingHour < 0){
	remainingHour=remainingHour+24;
	currentDay=currentDay+1;
};

let remainingDay = refDay - currentDay;



if (remainingDay < 0 && currentMonth == 1){ /*mois à 28 jours février(index=1)*/
	remainingDay=remainingDay+28; 
	currentMonth=currentMonth+1;
};

if (remainingDay < 0 && (currentMonth == 8 || currentMonth == 10)){/*mois à 30 jours septembre(index=8), novembre(index=10)*/
	remainingDay=remainingDay+30;
	currentMonth=currentMonth+1;
};

if (remainingDay < 0 && (currentMonth == 0 || currentMonth == 2 || currentMonth == 9 || currentMonth == 11)){/*mois à 31 jours janvier(index=0), mars(index=2), octobre(index=9), décembre(index=11)*/
	remainingDay=remainingDay+31; 
	currentMonth=currentMonth+1;
};


let remainingMonth = refMonth - currentMonth;

if (remainingMonth < 0){remainingMonth=remainingMonth+12};









// document.getElementById("demo").innerHTML += "<br/>";
document.getElementById("month").innerHTML = remainingMonth ; //+ " mois restants"
document.getElementById("day").innerHTML = remainingDay ;//+ " jours restants"
document.getElementById("hour").innerHTML = remainingHour ;//+ " heures restantes"
document.getElementById("minute").innerHTML = remainingMinute ;//+ " minutes restantes"
document.getElementById("second").innerHTML = remainingSecond ;//+ " secondes restantes"



};

setInterval(chrono,100);