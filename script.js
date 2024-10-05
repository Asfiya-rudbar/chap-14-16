// Quetion1
var studentNames = [];

// Quetion2
 var studentNames = new Array();

// Quetion3
 var studentNames = ["Alice", "Bob", "Charlie", "David", "Eva"];

// Quetion4
 var numbersArray = [10, 20, 30, 40, 50];

//Quetion5
 var booleanArray = [true, false, true, false, true];

//Quetion6
 var mixedArray = ["Alice", 25, true, null, { key: "value" }, [1, 2, 3]];

// Quetion7
 var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

 var ul = document.createElement("ul");

 educationQualifications.forEach(function(qualification) {
     var li = document.createElement("li");
     li.textContent = qualification;
     ul.appendChild(li);
 });

 document.body.appendChild(ul);

//Quetion8
 var studentNames = ["Michael", "John", "Tony"];
 var studentScores = [320, 230, 480]; // Assume scores out of 500 for each student

 const totalMarks = 500;
 studentNames.forEach((name, index) => {
    var score = studentScores[index];
    var percentage = (score / totalMarks) * 100;
    document.write(`Score of ${name} is ${score}. Percentage: ${percentage.toFixed(2)}% <br>`);
});

//Quetion9:
 var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
 alert(colors);

 function displayArray(arr) {
     console.log("Current colors:", arr);
 }

//  Ask the user what color they wants to add to the beginning 
 var colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:");
 if (colorToAddAtBeginning) {
       colors.unshift(colorToAddAtBeginning);

    displayArray(colors);
 }
//  Ask the user what color they want to add to the end

 var colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
 if (colorToAddAtEnd) {
     colors.push(colorToAddAtEnd);
     displayArray(colors);
 }

//  Add two more colors to the beginning

 colors.unshift("Orange", "Pink");
 displayArray(colors);

// Delete the first color in the array

 colors.shift();
 displayArray(colors);

//  Delete the last color in the array

 colors.pop();
 displayArray(colors);

//  Ask the user at which index they want to add a color & color name

 var colorToAddAtIndex = prompt("Enter the color to add at the specified index:");
 if (Number.isInteger(indexToAdd) && colorToAddAtIndex) {
 var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
     colors.splice(indexToAdd, 0, colorToAddAtIndex);
     displayArray(colors);
 }

// Ask the user at which index they want to delete color(s) & how many colors to delete
 var numberToDelete = parseInt(prompt("Enter the number of colors to delete:"));
 if (Number.isInteger(indexToDelete) && Number.isInteger(numberToDelete)) {
 var indexToDelete = parseInt(prompt("Enter the index at which you want to delete color(s):"));
    colors.splice(indexToDelete, numberToDelete);
    displayArray(colors);
}

// Quetion10
 var studentScores = [320, 230, 480, 120];

studentScores.sort((a, b) => a - b);

 document.write("Ordered Scores of Students:", studentScores);

//Quetion11
 var cities = ["karachi, Lahore, Islamabad, Quetta, Peshawar"];

//  Copy 3 elements from cities array to selectedCities array
 var selectedCities = cities.slice(0, 3);

 // Display the arrays
 document.write("Cities array:", cities, "<br>");
 document.write("Selected cities array:", selectedCities);

// Quetion12
 var arr = ["This ", " is ", " my ", " cat"];
 var result = arr.join('');
 console.log(result);

// Quetion13
 var fifoArray = [];
 fifoArray.push('First');
 fifoArray.push('Second');
 fifoArray.push('Third');

 console.log(fifoArray.shift()); //First
 console.log(fifoArray.shift()); //Second
 console.log(fifoArray.shift()); //Third

// Quetion14
 var lifoArray = [];
 lifoArray.push('First');
 lifoArray.push('Second');
 lifoArray.push('Third' + '<br></br>'
 );

 console.log(lifoArray.pop()); // Third
 console.log(lifoArray.pop()); // Second
 console.log(lifoArray.pop()); // First

// Quetion15
 var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write('<select name="phones">');
 for (var i = 0; i < manufacturers.length; i++) {
     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
 }
 document.write('</select>');