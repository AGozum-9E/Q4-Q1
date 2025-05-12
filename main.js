function bmi() {

	var height= document.getElementById('h-value').value;
	

	var weight= document.getElementById('w-value').value;
	

	var bmi = document.getElementById('finalBmi').innerHTML= 'BMI : '+ bmi;
	(weight / ((height*height))/10000).toFixed(2);
	
}
