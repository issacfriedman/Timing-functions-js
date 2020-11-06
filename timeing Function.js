//============================================//
//
//timing functions 


function getMinutesBtHr(sTime,eTime){

	function getMinutesFromTime(time){
		let timeStr = time.toString();
		timeArr = [...timeStr];
		let minutes = parseInt(timeArr.splice(timeArr.length - 2,2).join(""));
		let hours = parseInt(timeArr.join(""));
		let sum = (hours * 60) + minutes;
		return sum;
	
	}

	let sTimeMin = getMinutesFromTime(sTime);
	let eTimeMin = getMinutesFromTime(eTime); 
	return eTimeMin - sTimeMin; 


	
}



// pass a amount of minutes it will return in hour minute format


function minToHr(min){
	let a  = min / 60;
	let hour = Math.floor(a) * 100;
	let b = (a % 1).toFixed(10);
	let minute = 60 * b;
	
	let sum = hour + minute;
	return Math.round(sum); 
	
}





//============================================//