//easy

function add(num1, num2){
    return num1 + num2
}
console.log(add(3,5));

function hoursToSeconds(hours){
    return hours * 60 * 60
}
console.log(hoursToSeconds(3));

function calcPerimeter(length, width){
    return  2 * (length + width)
}
console.log(calcPerimeter(10, 20));

function calcTriangleArea(base, height){
    return  0.5 * base * height
}
console.log(calcTriangleArea(3, 2));

function appendFrontend(word){
    return word + `Frontend`
}
console.log(appendFrontend(`Apple`));

function sumGreaterThan100(num1, num2){
    return num1 + num2 > 100
}
console.log(sumGreaterThan100(20, 40));

function lessThanOrEqualTo100(num){
    return num <= 0
}
console.log(lessThanOrEqualTo100(-1));

function oppositeBool(bool){
    return !bool
}
console.log(oppositeBool(false));

function notZero(num){
    return num !== 0
}
console.log(notZero(0));

function remainder(num1, num2){
    return num1 % num2
}
console.log(remainder(10, 4));

function isOdd(num){
    return num % 2 !== 0
}
console.log(isOdd(7));

function boolInt(num){
    return num % 2 === 0 ? 1 : -1
}
console.log(boolInt(7));

function isLogAndSub(str1, str2){
    return (str1 === `LOGGED_IN`) && (str2 === `SUBSCRIBED`)
}
console.log(isLogAndSub(`LOGGED_IN`, `SUBSCRIBED`));

function isLogOrSub(str1, str2){
    return (str1 === `LOGGED_IN`) || (str2 === `SUBSCRIBED`)
}
console.log(isLogOrSub(`LOGGED_IN`, `NOT_SUBSCRIBED`));

// Medium

function filterOutFalsy(val1, val2){
    return !val1 ? val1 : val2
}
console.log(filterOutFalsy(true, `dog`));

function arrLength(arr){
    return arr.length
}
console.log(arrLength([`a`, `b`, `c`]));

function lastElem(arr){
    return arr[arr.length - 1]
}
console.log(lastElem([`a`, `b`, `c`]));

function arrSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(arrSum([1, 2, 3]))

function progressiveSum(num){
    let sum = 0
    for(let i = 0; i < num; i++){
        sum += i + 1
    }
    return sum
}
console.log(progressiveSum(4))

//this one is needed to study
function calcTime(seconds){
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if(timerMinutes.toString().length === 1){
        timerMinutes = `0` + timerMinutes;
    }

    if(timerSeconds.toString().length === 1){
        timerSeconds = timerSeconds + `0`
    }

    return timerMinutes + `:` + timerSeconds
}
console.log(calcTime(300))

function getMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max) max = arr[i];
    }
    return max;
}
console.log(getMax([-11, -30, -16, -4]))

//this one is needed to study
function reverseString(str){
    /*let reversed = ``;
    for(let i = 0; i < str.length; i++){
        reversed = str[i] + reversed
    }
    return reversed;*/

    //turn string to array use split(with an empty string)
    //then you can reverse, and turn back into string with join(``)
    return str.split(``).reverse().join(``)
}
console.log(reverseString(`cat`))

function convertToZeros(arr){
    //return new Array(arr.length).fill(0);

    //.map converts each element in an array
    return arr.map(i => 0);
}
console.log(convertToZeros([11, 30, 16, 4]))

function removeApples(arr){
    /*let noApple = []
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] !== `apple`){
            noApple.push(arr[i])
        }
    }
    return noApple*/

    //only add to array is not an apple
    return arr.filter(i => i !== `apple`)
}
console.log(removeApples([`banana`, `apple`, `orange`]))

//this one is needed to study
function filterFalsy(arr){
    //convert to truthy bool, check if is true
    return arr.filter(i => !!i === true)
}
console.log(filterFalsy([``, `apple`, false, 0, 1]))

function convertToBool(arr){
    return arr.map(i => !!i)
}
console.log(convertToBool([`cat`, 0, 7, false, 13]))

// Hard

//this one is needed to study
function showRating(rating){
    let ratingStr = ``
    for(let i = 0; i < Math.floor(rating); ++i){
        ratingStr += `*`
        if(i < rating - 1){
            ratingStr += ` `
        }
    }
    if(!Number.isInteger(rating)){
        ratingStr += `.`
    }
    return ratingStr
}
console.log(showRating(4.5));

function sortLowToHigh(arr){
    return arr.sort((a, b) => a - b); //you just need this to sort nums correctly
}
console.log(sortLowToHigh([8, 5, 10, 3, 4, 2]));

function sortHighToLow(arr){
    return arr.sort((a, b) => b.price - a.price);
}
console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 0},
    {id: 3, price: 500}
]));

//API hard hard section important to understand

async function postsByUser(uid){ //async need to be here for await to work
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts`); //get promise from fetch api, and wait till you have it
    
    const result = await promise.json(); //convert from backend to json so frontend can read it, and wait for it to be done

    const posts = result.filter(i => i.userId === uid) //we have results, now filter it by userId

    console.log(posts)
}

postsByUser(4);

async function firstSixIncomplete(){
    const promise = await fetch(`https://jsonplaceholder.typicode.com/todos`);

    const result = await promise.json();

    const incompleted = result.filter(i => !i.completed).slice(0, 6); //slice(0, 6) gets the first 6

    console.log(incompleted)
}
firstSixIncomplete()