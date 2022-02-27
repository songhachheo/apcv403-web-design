/*
Modify this JavaScript program to display time in the following format:
Today is: 3 rd Day of the Week
Current Time: 10: 30: 38 PM
*/

var today = new Date();
var day = today.getDay();
var nDay = day + 1;
var daylist = ["st", "nd", "rd", "th"];

if (nDay < 4) {
    console.log("Today is: " + nDay + " " + daylist[day] + " Day of the Week");
} else if (nDay > 3 && nDay < 8) {
    console.log("Today is: " + nDay + " " + daylist[3] + " Day of the Week");
}

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === " PM ") {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = " Noon";
    } else {
        hour = 12;
        prepand = " PM";
    }
}
if (hour === 0 && prepand === " AM ") {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = " Midnight";
    } else {
        hour = 12;
        prepand = " AM";
    }
}

console.log(
    "Current Time: " + hour + ": " + minute + ": " + second + prepand
);