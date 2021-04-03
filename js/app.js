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
let totalSets = sets.value;
let timerCompleted = false;



// Click Event Handler //
function handleClick(e) {
    e.preventDefault();
    submitBtn.disabled = true;
    console.log(sets.value);

  
   
    exercise = document.querySelector("#exercise").value;
    rest = document.querySelector("#rest").value;
    sets = document.querySelector("#sets").value;
    showTimerExercise();
    startTimer();
}


// Timer LOGIC //
function startTimer() {
    const timerElement = document.querySelector("#timer");
    const progressBar = document.getElementById("progressBar");
    let timerCounter = progressBar.max;
   

    if (timerCompleted === true) {
        completeView.removeChild(completeView.childNodes[0]);
        timerCompleted = false;
      
    }

    const interval = setInterval(() => {
        if (timerCounter === 0) {   
            clearInterval(interval);
            exerciseView.removeChild(exerciseView.childNodes[0]);

        if (sets <= 0) {
            showTimerComplete(totalSets);
            submitBtn.disabled = false;
            sets.value = 3;
            timerCompleted = true;
        }
        else if (currView === "exercise") {
            showTimerRest();
            startTimer();
            currView = "rest"
            sets--;

            
        }
        else if (currView === "rest") {
            showTimerExercise();
            startTimer()
            currView = "exercise"
            // sets--;
           
        }  
        }
        timerCounter = timerCounter - 1;
        
        timerElement.innerText = timerCounter + "s";
        progressBar.value = timerCounter;
    }, 1000);

}



