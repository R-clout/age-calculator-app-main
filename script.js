const days = document.getElementById("day-input");
const month = document.getElementById("month-input");
const year = document.getElementById("year-input");
const calculateButton = document.getElementById("age-calculate");
const inputs = document.querySelectorAll(".input")

function calculateage(){
   
}

inputs.forEach(input => input.addEventListener('input', () => {
     if(input.value == ""){
          input.parentElement.classList.remove("text-grey500");
          input.parentElement.classList.add("text-red400");
          input.classList.remove("border-grey200");
          input.classList.add("border-red400");
          input.classList.remove("focus:outline-purple500")
          input.classList.add("focus:outline-red400")
          input.nextElementSibling.classList.remove("hidden");
        } else {
            input.parentElement.classList.remove("text-red400");
          input.parentElement.classList.add("text-grey500");
          input.classList.remove("border-red400");
          input.classList.add("border-grey200");
          input.classList.remove("focus:outline-red400")
          input.classList.add("focus:outline-purple500");
          input.nextElementSibling.classList.add("hidden");
        }

        console.log(input)
}))




calculateButton.addEventListener("click", calculateage);