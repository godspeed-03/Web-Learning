const date1 = new Date()

// Request a weekday along with a long date
const options1 = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
};




const dateTimeFormat2 = new Intl.DateTimeFormat('en-GB', options1);
console.log(dateTimeFormat2.format(date1, "DD-MM"));
// Expected output: "Friday, 1 June 2012"
// "Thursday, December 20, 2012, GMT"



