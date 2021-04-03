/// TIMERS APP ///

//  HIIT TIMER //

// Variable INIT and TIMER FORM VIEW TO DOM //
const exerciseView = document.querySelector("#timers-exercise");
const completeView = document.querySelector("#timers-complete");
const homeView = document.querySelector("#timers-home");
const setsElement = document.querySelector("#sets");

showTimerHome();
const submitBtn = document.querySelector("#startBtn");
submitBtn.addEventListener("click", handleClick);

let currView = "exercise";
let setsVal = document.querySelector("#sets");
let timerCompleted = false;



// Click Event Handler //
function handleClick(e) {
    e.preventDefault();
    submitBtn.disabled = true;
    console.log(sets.value);

  
   
    exercise.value = document.querySelector("#exercise").value;
    rest.value = document.querySelector("#rest").value;
    sets.value = document.querySelector("#sets").value;
    showTimerExercise();
    startTimer();
}


// Timer LOGIC //
function startTimer() {
    const timerElement = document.querySelector("#timer");
    const progressBar = document.getElementById("progressBar");
    let timerCounter = progressBar.max;
    let totalSets = setsVal.value;

    if (timerCompleted === true) {
        completeView.removeChild(completeView.childNodes[0]);
        timerCompleted = false;
      
    }

    const interval = setInterval(() => {
        if (timerCounter === 0) {   
            clearInterval(interval);
            exerciseView.removeChild(exerciseView.childNodes[0]);

        if (setsVal.value <= 0) {
            showTimerComplete(totalSets);
            submitBtn.disabled = false;
            setsVal.value = 3;
            timerCompleted = true;
        }
        else if (currView === "exercise") {
            showTimerRest();
            startTimer();
            currView = "rest"
            setsVal.value--;
            
        }
        else if (currView === "rest") {
            showTimerExercise();
            startTimer()
            currView = "exercise"
           
           
        }  
        }
        timerCounter = timerCounter - 1;
        
        timerElement.innerText = timerCounter + "s";
        progressBar.value = timerCounter;
    }, 1000);

}



