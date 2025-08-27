const days = document.getElementById("day-input");
const calculateButton = document.getElementById("age-calculate");
const inputs = document.querySelectorAll(".input")

function calculateage(){
    inputs.forEach(input => {
        if(input.value == ""){
          input.parentElement.classList.remove("text-grey500");
          input.parentElement.classList.add("text-red400");
          input.classList.remove("border-grey200");
          input.classList.add("border-red400");
          input.nextElementSibling.classList.remove("hidden");
        }
    })

    console.log(days.value)
}



calculateButton.addEventListener("click", calculateage);