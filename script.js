const days = document.getElementById("day-input");
const month = document.getElementById("month-input");
const year = document.getElementById("year-input");
const calculateButton = document.getElementById("age-calculate");
const inputs = document.querySelectorAll(".input")
const totalYear = document.getElementById("total-year");
const totalMonth = document.getElementById("total-months");
const totalDays = document.getElementById("total-days");
const form = document.getElementById("form");


const date = new Date();
let currentDay = date.getDate();
console.log(currentDay);
let currentMonth = date.getMonth() + 1;
console.log(currentMonth);
let currentYear = date.getFullYear();
console.log(currentYear);
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


inputs.forEach((i) => {
        i.addEventListener("input", () => {
                if(!i.value){
                        i.nextElementSibling.classList.remove("hidden");
                        i.nextElementSibling.innerText = "this field is required";
                        i.classList.remove("focus:outline-purple500");
                        i.classList.add("focus:outline-red400");
                        i.classList.remove("border-grey200");
                        i.classList.add("border-red400");
                }
               else if(month.value > 12){
                        month.nextElementSibling.classList.remove("hidden");
                        month.nextElementSibling.innerText = "must be valid month";
                        month.classList.remove("focus:outline-purple500");
                        month.classList.add("focus:outline-red400");
                        month.classList.remove("border-grey200");
                        month.classList.add(border-red400);
                }
               else  if(days.value > 31){
                        days.nextElementSibling.classList.remove("hidden");
                        days.nextElementSibling.innerText = "must be valid day";
                        days.classList.remove("focus:outline-purple500");
                        days.classList.add("focus:outline-red400");
                        days.classList.remove("border-grey200");
                        days.classList.add(border-red400);
                }
                 else if(year.value > currentYear){
                        year.nextElementSibling.classList.remove("hidden");
                        year.nextElementSibling.innerText = "must be valid year";
                        year.classList.remove("focus:outline-purple500");
                        year.classList.add("focus:outline-red400");
                        year.classList.remove("border-grey200");
                        year.classList.add(border-red400);
                } else {
                        i.nextElementSibling.classList.add("hidden");
                        i.classList.remove("focus:outline-red400");
                        i.classList.add("focus:outline-purple500");
                        i.classList.remove("border-red400");
                        i.classList.add("border-grey200");
                }
        })
})


form.addEventListener('submit', (e) => {
    e.preventDefault();


    const inputDay = parseInt(days.value, 10);
    const inputMonth = parseInt(month.value, 10);
    const inputYear = parseInt(year.value, 10);

    let calcDay = currentDay;
    let calcMonth = currentMonth;
    let calcYear = currentYear;

    if (inputDay > calcDay) {
        calcDay += months[inputMonth - 1];
        calcMonth -= 1;
    }
    if (inputMonth > calcMonth) {
        calcMonth += 12;
        calcYear -= 1;
    }

    totalDays.innerHTML = calcDay - inputDay;
    totalMonth.innerHTML = calcMonth - inputMonth;
    totalYear.innerHTML = calcYear - inputYear;
});


