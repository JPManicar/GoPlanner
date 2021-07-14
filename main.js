
//declaration of global variable

let myVar = {};
var myCount = {};

myVar.tempStart;
myVar.tempFinish;
myCount.tempCount = 0;


myVar.tt = [];
myVar.st = [];
myVar.ft = [];
myVar.cat = [];


myVar.hoursStart = [];
myVar.minutesStart = [];
myVar.ampmStart = [];
myVar.militaryhoursStart = [];
myVar.militarytimeStart = [];


myVar.hoursFinish = [];
myVar.minutesFinish = [];
myVar.ampmFinish = [];
myVar.militaryhoursFinish = [];
myVar.militarytimeFinish = [];

//declaration of global variable end


//function to open modal add tasks

function openAddTasks() {

	document.getElementById('popup').style.display='block';

}

//function to open modal add tasks END


//function for the close button to close add tasks modal

function closeAddTasks() {

	document.getElementById('popup').style.display='none';

}

//function for the close button to close add tasks modal END


// Function that lets you add task.

function addTasks() {


	// First condition to get the values from the first input.
	
	if (myCount.tempCount == 0) {


	// Count is the size of the input. Count is equals to 1 for the first input.

	myCount.count = 1;
	myCount.tempCount = myCount.count;


	// Here the values inputted is saved in the array.

	myVar.tt[(myCount.tempCount) - 1] = document.getElementById("tasktitle").value;
	myVar.st[(myCount.tempCount) - 1] = document.getElementById("starttime").value;
	myVar.ft[(myCount.tempCount) - 1] = document.getElementById("finishtime").value;
	myVar.cat[(myCount.tempCount) - 1] = document.getElementById("category").value;


	// Here is a temporary var to get the last two digit values of Start time and Finish time.

	myVar.tempStart = myVar.st[myCount.tempCount - 1].substring(myVar.st[myCount.tempCount - 1].length - 2);
	myVar.tempFinish = myVar.ft[myCount.tempCount - 1].substring(myVar.ft[myCount.tempCount - 1].length - 2);


		// Condition to check if the input time is in standard form.

		if ((myVar.tempStart == ("AM") || myVar.tempStart == ("PM")) && (myVar.tempFinish == ("AM") || myVar.tempFinish == ("PM"))) {

		
			// If in standard time, task will be successfully saved.

			alert("Task has been added successfully.");


			// Function to show the task added.

			showTask();

		}


		else {

			// If not in standard time, count value will be 0 and go back to the first condition to get first input again.
			// Input won't be saved.

			myCount.count = 0;
			myCount.tempCount = myCount.count;


			// Error message if time not in standard time.

			alert("Time should be in standard format.");

		}

	}


	// Second condition to get the values of the next input.

	else if (myCount.tempCount == 1 || (myCount.tempCount > 1 && myCount.tempCount != 15)) {

	// Count is added by 1.

	myCount.count += 1;
	myCount.tempCount = myCount.count;


	// Saves the inputted values in array.

	myVar.tt[(myCount.tempCount) - 1] = document.getElementById("tasktitle").value;
	myVar.st[(myCount.tempCount) - 1] = document.getElementById("starttime").value;
	myVar.ft[(myCount.tempCount) - 1] = document.getElementById("finishtime").value;
	myVar.cat[(myCount.tempCount) - 1] = document.getElementById("category").value;


	// Temporary var to get last two digit values of Start time and Finish time.

	myVar.tempStart = myVar.st[myCount.tempCount - 1].substring(myVar.st[myCount.tempCount - 1].length - 2);
	myVar.tempFinish = myVar.ft[myCount.tempCount - 1].substring(myVar.ft[myCount.tempCount - 1].length - 2);


	// Condition to check if the input time is in standard form.

	if ((myVar.tempStart == ("AM") || myVar.tempStart == ("PM")) && (myVar.tempFinish == ("AM") || myVar.tempFinish == ("PM"))) {


		// If in standard form, task will be saved.
		
			alert("Task has been added successfully.");


		// Function to show the task added.

			showTask();

		}

	else {


		// If not in standard form, count value will be reduced by 1 and go back to second condition to input again.
		// Input won't be saved.

		myCount.count -= 1;
		myCount.tempCount = myCount.count;

		alert("Time should be in standard format.");

	}

}

	// Third condition to set maximum number of inputs

	else {

	alert("You have reached the maximum tasks allowed.");

	}

}

// Function that lets you add task END


// Function that shows task added

function showTask() {


	// First condition to show the first task added

	if (myCount.tempCount == 1) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle1").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime1").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime1").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category1").value = myVar.cat[(myCount.tempCount) - 1];


		// Hides the text that says "There are no tasks added yet".

		document.getElementById('notask').style.display='none';


		// Shows the div with id "tasks1".

		document.getElementById('tasks1').style.display='block';
		
	}


	// Second condition to show the second task added

	else if (myCount.tempCount == 2) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle2").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime2").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime2").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category2").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks2".

		document.getElementById('tasks2').style.display='block';
		
	}


	// Third condition to show the third task added

	else if (myCount.tempCount == 3) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle3").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime3").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime3").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category3").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks3".

		document.getElementById('tasks3').style.display='block';
		
	}


	// Fourth condition to show the fourth task added

	else if (myCount.tempCount == 4) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle4").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime4").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime4").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category4").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks4".

		document.getElementById('tasks4').style.display='block';
		
	}


	// Fifth condition to show the fifth task added

	else if (myCount.tempCount == 5) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle5").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime5").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime5").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category5").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks5".

		document.getElementById('tasks5').style.display='block';
		
	}


	// Sixth condition to show the sixth task added

	else if (myCount.tempCount == 6) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle6").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime6").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime6").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category6").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks6".

		document.getElementById('tasks6').style.display='block';
		
	}


	// Seventh condition to show the seventh task added

	else if (myCount.tempCount == 7) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle7").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime7").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime7").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category7").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks7".

		document.getElementById('tasks7').style.display='block';
		
	}


	// Eighth condition to show the eighth task added

	else if (myCount.tempCount == 8) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle8").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime8").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime8").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category8").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks8".

		document.getElementById('tasks8').style.display='block';
		
	}


	// Ninth condition to show the ninth task added

	else if (myCount.tempCount == 9) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle9").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime9").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime9").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category9").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks9".

		document.getElementById('tasks9').style.display='block';
		
	}


	// Tenth condition to show the tenth task added

	else if (myCount.tempCount == 10) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle10").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime10").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime10").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category10").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks10".

		document.getElementById('tasks10').style.display='block';
		
	}


	// Eleventh condition to show the eleventh task added

	else if (myCount.tempCount == 11) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle11").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime11").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime11").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category11").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks11".

		document.getElementById('tasks11').style.display='block';
		
	}


	// Twelfth condition to show the twelfth task added

	else if (myCount.tempCount == 12) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle12").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime12").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime12").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category12").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks12".

		document.getElementById('tasks12').style.display='block';
		
	}

	// Thirteenth condition to show the thirteenth task added

	else if (myCount.tempCount == 13) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle13").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime13").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime13").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category13").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks13".

		document.getElementById('tasks13').style.display='block';
		
	}

	// Fourteenth condition to show the fourteenth task added

	else if (myCount.tempCount == 14) {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle14").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime14").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime14").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category14").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks14".

		document.getElementById('tasks14').style.display='block';
		
	}

	// Last condition to show the fifteenth task added

	else {


		// Reflects the value inputted to the corresponding readonly text inputs.

		document.getElementById("tasktitle15").value = myVar.tt[(myCount.tempCount) - 1];
		document.getElementById("starttime15").value = myVar.st[(myCount.tempCount) - 1];
		document.getElementById("finishtime15").value = myVar.ft[(myCount.tempCount) - 1];
		document.getElementById("category15").value = myVar.cat[(myCount.tempCount) - 1];


		// Shows the div with id "tasks15".

		document.getElementById('tasks15').style.display='block';
		
	}

}

// Function that shows task added END


// Function to remove colon of START TIME and split string so it can be converted to military time

function formattingStart() {

	for (var i = 0; i < myCount.count; i++) {


		// Create a temporary variable to store the value of start time

		let temp = myVar.st[i];


		// Replaces the colon symbol in to a space

		temp = temp.replace(':', ' ');


		// Condition to check if hours > 9

		if (temp.length == 8) {


			// Gets the value of 1st and 2nd index of the string

			myVar.hoursStart[i] = temp.substring(0, 2);


			// Gets the value of 4th and 5th index of the string

			myVar.minutesStart[i] = temp.substring(3, 5);


			// Gets the value of 7th and 8th index of the string

			myVar.ampmStart[i] = temp.substring(6, 8);

		}


		// Condition to check if hours < 10

		else {


			// Gets the value of 1st index of the string

			myVar.hoursStart[i] = temp.substring(0, 1);


			// Gets the value of 3rd and 4th index of the string

			myVar.minutesStart[i] = temp.substring(2, 4);


			// Gets the value of 6th and 7th index of the string

			myVar.ampmStart[i] = temp.substring(5, 7);
		}

	}

}

// Function to remove colon of START TIME and split string so it can be converted to military time END


// Function to remove colon of FINISH TIME and split string so it can be converted to military time

function formattingFinish() {

	for (var i = 0; i < myCount.count; i++) {


		// Create a temporary variable to store the value of finish time

		let temp2 = myVar.ft[i];


		// Replaces the colon symbol in to a space

		temp2 = temp2.replace(':', ' ');


		// Condition to check if hours > 9

		if (temp2.length == 8) {


			// Gets the value of 1st and 2nd index of the string

			myVar.hoursFinish[i] = temp2.substring(0, 2);


			// Gets the value of 4th and 5th index of the string

			myVar.minutesFinish[i] = temp2.substring(3, 5);


			// Gets the value of 7th and 8th index of the string

			myVar.ampmFinish[i] = temp2.substring(6, 8);

		}


		// Condition to check if hours < 9

		else {


			// Gets the value of 1st index of the string

			myVar.hoursFinish[i] = temp2.substring(0, 1);


			// Gets the value of 3rd and 4th index of the string

			myVar.minutesFinish[i] = temp2.substring(2, 4);


			// Gets the value of 6th and 7th index of the string

			myVar.ampmFinish[i] = temp2.substring(5, 7);
		}

	}

}

// Function to remove colon of FINISH TIME and split string so it can be converted to military time END


// Function to convert START TIME to military format

function toMilitaryStart() {

	for (var i = 0; i < myCount.count; i++) {


		// Gets the value of hoursStart and parse it into integer

		myVar.militaryhoursStart[i] = parseInt(myVar.hoursStart[i])


		// Condition to check if the input START TIME is in AM

		if (myVar.ampmStart[i] == ("AM")) {


			// Condition to check if the hour input in START TIME is 12

			if (myVar.militaryhoursStart[i] == 12) {

				// If true, set the military start time hours to 00

				myVar.hoursStart[i] = "00";
			}
		}


		// Condition to check if the input START TIME is in PM

		else {


			// Condition to check if the hour input in START TIME is 12

			if (myVar.militaryhoursStart[i] == 12) {

				// If true, set the military start time hours to 12

				myVar.hoursStart[i] = "12";
			}


			// Condition to check if the hour input in START TIME is not equals to 12

			else {


				// If true, 12 is added to the variable militaryhoursStart

				myVar.militaryhoursStart[i] += 12;


				// Gets the value of militaryhoursStart and turns it to string

				myVar.hoursStart[i] = myVar.militaryhoursStart[i].toString(); 
			}

		}


		// Concatenates the hoursStart and minutesStart and parses its value to integer

		myVar.militarytimeStart[i] = parseInt(myVar.hoursStart[i].concat(myVar.minutesStart[i]))

	}

}

// Function to convert START TIME to military format END


// Function to convert FINISH TIME to military format

function toMilitaryFinish() {

	for (var i = 0; i < myCount.count; i++) {


		// Gets the value of hoursFinish and parse it into integer

		myVar.militaryhoursFinish[i] = parseInt(myVar.hoursFinish[i])


		// Condition to check if the input FINISH TIME is in AM

		if (myVar.ampmFinish[i] == ("AM")) {


			// Condition to check if the hour input in FINISH TIME is 12

			if (myVar.militaryhoursFinish[i] == 12) {


				// If true, set the military finish time hours to 00

				myVar.hoursFinish[i] = "00";
			}
		}


		// Condition to check if the input FINISH TIME is in PM

		else {


			// Condition to check if the hour input in FINISH TIME is 12

			if (myVar.militaryhoursFinish[i] == 12) {


				// If true, set the military finish time hours to 12

				myVar.hoursFinish[i] = "12";
			}


			// Condition to check if the hour input in FINISH TIME is not equals to 12
			else {


				// If true, 12 is added to the variable militaryhoursFinish

				myVar.militaryhoursFinish[i] += 12;


				// Gets the value of militaryhoursFinish and turns it to string

				myVar.hoursFinish[i] = myVar.militaryhoursFinish[i].toString(); 
			}

		}


		// Concatenates the hoursFinish and minutesFinish and parses its value to integer

		myVar.militarytimeFinish[i] = parseInt(myVar.hoursFinish[i].concat(myVar.minutesFinish[i]))

	}

}

// Function to convert FINISH TIME to military format END


// Function to sort tasks according to finish time (Bubble Sort)

function sortTasks() {

	for (var i = 0; i < myCount.count-1; i++) {
		for (var j = 0; j < myCount.count-i-1; j++) {

			if (myVar.militarytimeFinish[j] > myVar.militarytimeFinish[j+1]) {


				// Temporary variables are created to store input values

				var tempMF = myVar.militarytimeFinish[j];
				var tempMS = myVar.militarytimeStart[j];
				var tempT = myVar.tt[j];
				var tempS = myVar.st[j];
				var tempF = myVar.ft[j];
				var tempCAT = myVar.cat[j];


				// Swaps the value of input[j] and input[j+1]

				myVar.militarytimeFinish[j] = myVar.militarytimeFinish[j+1];
				myVar.militarytimeStart[j] = myVar.militarytimeStart[j+1];
				myVar.tt[j] = myVar.tt[j+1];
				myVar.st[j] = myVar.st[j+1];
				myVar.ft[j] = myVar.ft[j+1];
				myVar.cat[j] = myVar.cat[j+1];

				myVar.militarytimeFinish[j+1] = tempMF;
				myVar.militarytimeStart[j+1] = tempMS;
				myVar.tt[j+1] = tempT;
				myVar.st[j+1] = tempS;
				myVar.ft[j+1] = tempF;
				myVar.cat[j+1] = tempCAT; 

			}
		}
	}
}

// Function to sort tasks according to finish time (Bubble Sort) END


// Function to print a maximum set of activities the can be done in a single person, one at a time. (Greedy Algorithm)

function printMaxActivities () {

	// Creates the "My Schedule" header.

	document.write('<link rel="stylesheet" type="text/css" href="bootstrap/bootstrap-theme.min.css">');

	document.write('<link rel="stylesheet" type="text/css" href="bootstrap/bootstrap.min.css">');

	document.write('<section class="container-fluid" style="width: 100vh;height: 100vh;background: white;position: relative;width: 100%;padding: 5px;">');

		document.write('<div class="row" style="margin-top: 10px;padding-left: 0px;position:relative;box-shadow: 0 0 35px 9px #87adfe;">');

			document.write('<div style="top: 0;left: 0;position: absolute;width: 100%;height: 100%;background:linear-gradient(to right, #87adfe, #ff77cd);">' + '</div>');

				document.write('<button type="button" style="cursor:default;padding: 17px 595px;background: transparent;border:0;outline: none;position: relative;">' + '<p style="padding-top: 6px;font-weight:bold;font-size: 29px;">' + "My Schedule" + '</p>' + '</button>');

		document.write('</div>');		

		document.write('<br>');

		



	for (var day = 1; day <= 7; day++) {


		// Create Temporary Arrays for storage

		myVar.tempT = [];
		myVar.tempS = [];
		myVar.tempF = [];
		myVar.tempCAT = [];
		myVar.tempMF = [];
		myVar.tempMS = [];

		document.write('<div style="padding: 2px 20px;border-bottom: solid 1px #c3c3c3;" class="row border-bottom">');


		// Prints the day number

		document.write('<center>' + '<p style="font-size: 27px;font-weight: bold;">' + "Day " + day + '</p>' + '</center>' + '<br>');

		var i = 0;


		// Creates a div row

		document.write('<div class="row">');


		// Prints the header "Activity", "Time", "Activity Type"

		document.write('<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px;font-weight:bold;">' + "Activity: " + '</p>' +'</div>' + '</center>' + '<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px;font-weight:bold;">' + "Time: " + '</p>' + '</div>' + '</center>' + '<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px;font-weight:bold;">' + "Activity Type" + '</p>' + '</div>' + '</center>' +'<br>' + '<br>');


		// Prints the first activity. (The first activity always gets selected.)

		document.write('<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px">' + myVar.tt[i] + '</p>' +'</div>' + '</center>' + '<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px">' + myVar.st[i] + " - " + myVar.ft[i] + '</p>' + '</div>' + '</center>' + '<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px">' +  myVar.cat[i] + '</p>' + '</div>' + '</center>' +'<br>' + '<br>' + '<br>');

		document.write('</div>');


		// Consider the rest of the activities

		for (var j = 1; j < myCount.count; j++) {

			if (myVar.militarytimeStart[j] >= myVar.militarytimeFinish[i]) {


				// Creates a div row

				document.write('<div class="row">');


				// Prints the next activity

				document.write('<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px">' + myVar.tt[j] + '</p>' +'</div>' + '</center>' + '<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px">' + myVar.st[j] + " - " + myVar.ft[j] + '</p>' + '</div>' + '</center>' + '<center>' + '<div class="col-sm-4">' + '<p style="font-size: 25px">' + myVar.cat[j] + '</p>' + '</div>' + '</center>' +'<br>' + '<br>' + '<br>');
				i = j;

				document.write('</div>');

			}


			// If overlapping, gets put in the temporary storage

			else {

				myVar.tempT.push(myVar.tt[j]);
				myVar.tempS.push(myVar.st[j]);
				myVar.tempF.push(myVar.ft[j]);
				myVar.tempCAT.push(myVar.cat[j]);
				myVar.tempMS.push(myVar.militarytimeStart[j]);
				myVar.tempMF.push(myVar.militarytimeFinish[j]);

			}

		}

		// Temporary storage is put to the main arrays to be selected again

		myVar.tt = myVar.tempT;
		myVar.st = myVar.tempS;
		myVar.ft = myVar.tempF;
		myVar.cat = myVar.tempCAT;
		myVar.militarytimeStart = myVar.tempMS;
		myVar.militarytimeFinish = myVar.tempMF;
		myCount.count = myVar.tt.length;


		document.write('</div>');

		document.write('<br>');


		// If no more tasks, end the loop.

		if (myCount.count == 0) {
			break;
		}

		

	}



	document.write('</section>');

}

// Function to print a maximum set of activities the can be done in a single person, one at a time. (Greedy Algorithm) END


// Function for the Create Schedule button

function createSchedule() {

	formattingStart();
	formattingFinish();
	toMilitaryStart();
	toMilitaryFinish();
	sortTasks();
	printMaxActivities();
	
}

// Function for the Create Schedule button END
