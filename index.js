// Week 3 Coding Assignment
//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
function firstMinusLast (ageArray){
    
    let firstAge = ageArray[0];
    let lastAgeK = ageArray.length - 1;
    let lastAge = ageArray[lastAgeK];

    let resultAge = lastAge - firstAge;

    return resultAge;
}

let subAge1 = firstMinusLast(ages); 
console.log(subAge1); // Print the result to the console


ages.push(56); // Add a new age to your array and repeat the step above
let subAge2 = firstMinusLast(ages);
console.log(subAge2);

// Use a loop to iterate through the array and calculate the average age.
let sumAge = 0;
for(let age of ages){

    sumAge = age + sumAge;

}

numAges = ages.length; // Number of values to use in averaging.

avgAge = sumAge / numAges; // Take the sum of values and divide by the number of values.
console.log(avgAge); // Print result.

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let sumLength = 0;
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
for(name of names){
    sumLength += name.length;
}
let avgLength = sumLength / names.length;
console.log(avgLength);
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let catNames = '';
for(nameK in names){
    catNames += names[nameK];
    if(nameK < names.length){
        catNames += ' ';
    }
}
console.log(catNames);

// Last element of an array: lastElement = array.length - 1;
// First element of an array: firstElement = array[0];

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.


let nameLengths = [];
for(name of names){
    nameLengths.push(name.length);
}
console.log('Name length array: ' + nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sumNameLengths = 0;
for(nameLength of nameLengths){
    sumNameLengths += nameLength;
}
console.log('Name lengths sum: ' + sumNameLengths);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function wordCat(word, n){
    let newWord = '';
    for(i = 0; i < n; i++) {
        newWord = newWord + word;
    }
    return newWord;
}
console.log(wordCat('cat', 5));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log('Peter', 'Pumkineater');

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumOver100(numArray){
    let sumNumArray = numArray.reduce(function(accNum, curNum){
        return accNum + curNum;
    })
    console.log(sumNumArray);
    return sumNumArray > 100;   
}
numsLessThan100 = [12, 18, 24];
numsGreaterThan100 = [26, 42, 89];
console.log('Greater than 100? ' + sumOver100(numsLessThan100)); // Eval False
console.log('Greater than 100? ' + sumOver100(numsGreaterThan100)); // Eval True

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avgNumArray(numArray){
    let sumNumArray = numArray.reduce(function (acc, curr){
        return acc + curr;
    })
    return sumNumArray / numArray.length;
}
numArrayTest1 = [10, 20, 30, 40, 50];
console.log('numArrayTest1 Avg: ' + avgNumArray(numArrayTest1));

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareArrays(numArray1, numArray2){
    let arrVal1 = avgNumArray(numArray1);
    let arrVal2 = avgNumArray(numArray2);
    if(arrVal1 > arrVal2){
        return true;
    } else {
        return false;
    }
}
numArrayTest2 = [10, 11, 12];
numArrayTest3 = [8, 9, 10];
console.log('True: ' + compareArrays(numArrayTest2, numArrayTest3)); //Eval True
console.log('False: ' + compareArrays(numArrayTest3, numArrayTest2)); //Eval False

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}

console.log('True: ' + willBuyDrink(true, 50)); //Eval True
console.log('False: ' + willBuyDrink(false, 50)); //Eval False
console.log('False: ' + willBuyDrink(true, 5)); //Eval False
// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Take order from chinese restaurant customer and store it as an array.
function takeOrder(){
    order = [];
    do {
        order.push(window.prompt("What combo plate do you want? (1, 2, 3, 4, 5, 6)"));
        moreOrder = window.confirm("Press OK to order. Press Cancel to finish order.");
    } while (moreOrder == true)
    return order;
}

order1 = takeOrder();
console.log(order1);