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

// Instanciate Sound Objects and set volume property //
const snd = new Audio("Boxing_BELL_One_ring.mp3"); // buffers automatically when created
const snd1 = new Audio("Boxing_BELL_three_rings.mp3"); // buffers automatically when created
snd.volume = 0.4;
snd1.volume = 0.5;

// Click Event Handler //
function handleClick(e) {
    e.preventDefault();
    submitBtn.disabled = true; 
    exercise = document.querySelector("#exercise").value;
    rest = document.querySelector("#rest").value;
    sets = document.querySelector("#sets").value;
    showTimerExercise();
    startTimer();
    snd.play(); 
   
}


// Timer LOGIC //
function startTimer() {
    const timerElement = document.querySelector("#timer");
    const progressBar = document.getElementById("progressBar");
    let timerCounter = progressBar.max;
   

    if (timerCompleted === true) {
        completeView.removeChild(completeView.childNodes[0]);
        timerCompleted = false;
        currView = "exercise";
      
    }

    const interval = setInterval(() => {
        if (timerCounter === 0) {   
            clearInterval(interval);
            exerciseView.removeChild(exerciseView.childNodes[0]);

            if (sets <= 0) {
            snd1.play();  
            showTimerComplete(totalSets);
            submitBtn.disabled = false;
            sets.value = 3;
            timerCompleted = true;
        }
        else if (currView === "exercise") {
            snd.play();  
            showTimerRest();
            startTimer();
            currView = "rest"
            sets--;
            
            
        }
        else if (currView === "rest") {
            snd.play();  
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



