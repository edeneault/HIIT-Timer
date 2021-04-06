/// HIIT Timer Views ///
function showTimerHome() {
    const homeTimer = document.createElement("div");
    // homeTimer.classList.add("row");
    homeTimer.innerHTML = `

                            <div class="form-goup"  method="post">
                                  
                                       
                                        <div class="input-group row col-md-8 offset-md-2 mx-auto">
                                            <label class="input-group-text col-4 col-sm-2 col-form-label bg-secondary text-light" for="exercise">Exercise:</label>
                                            <input class="form-control col-4 col-sm-2 bg-dark text-light" type="number" name="exercise" id="exercise" value="10"/>
                                            <span class="input-group-text col-4 col-sm-2 bg-secondary text-light"><small>seconds</small></span>
                                        </div>
                                        
                                        <div class="input-group row col-md-8 offset-md-2 mx-auto">
                                            <label class="input-group-text col-4 col-sm-2 col-form-label bg-secondary text-light" for="rest">Rest:</label>
                                            <input class="form-control col-4 col-sm-2 bg-dark text-light" type="number" name="rest" id="rest" value="5"/>
                                            <span class="input-group-text col-4 col-sm-2 bg-secondary text-light"><small>seconds</small></span>
                                        </div>
                                        <div class="input-group row col-md-8 offset-md-2 mx-auto">
                                            <label class="input-group-text col-4 col-sm-2 col-form-label bg-secondary text-light" for="sets">Sets:</label>
                                            <input class="form-control col-4 col-sm-2 bg-dark text-light" type="number" name="sets" id="sets" value="3"/>
                                            <span class="input-group-text col-4 col-sm-2 bg-secondary text-light"><small>default-3</small></span>
                                        </div>    
                                        <div class="text-center m-3">
                                            <button class="btn btn-secondary col-md-2 p-3" type="submit" id="startBtn">Start!</button>
                                        </div>
                               
                            </div>`
    homeView.append(homeTimer);
    const submitBtn = document.querySelector("#startBtn");
    submitBtn.addEventListener("click", handleClick);
}

function showTimerExercise() {
    const exerciseTimer = document.createElement("div");
    exerciseTimer.classList.add("container-fluid", "main", "exercise-color");

    exerciseTimer.innerHTML = ` <p class="btn btn-outline-light col-2 col-md-1 m-3 fullscreen"><i class="fas fa-expand-arrows-alt fa-2x"></i></p>
                                <h2 class="display-1 text-center text-light mb-5 pb-5">Exercise</h2>
                                <h1 class="display-1 timer text-light mb-5" id="timer">${ exercise } </h1>
                                <h5 class=" text-center text-light my-5 py-5 " id="set">Sets left: ${sets} </h5>
                                <progress max="${ exercise}" value="${exercise}" class="progress progress--rest" id="progressBar"></progress>
                                `
    exerciseView.append(exerciseTimer);  
     
    const fullscreenBtn = document.querySelector(".fullscreen"); 
    fullscreenBtn.addEventListener("click", () => {
        toggleFullScreen();
    });
}

function showTimerRest() {
    const exerciseTimer = document.createElement("div");
    exerciseTimer.classList.add("container-fluid",  "main", "rest-color");

    exerciseTimer.innerHTML = ` <p class="btn btn-outline-light col-2 col-md-1 m-2 fullscreen"><i class="fas fa-expand-arrows-alt fa-2x"></i></p> 
                                <h2 class="display-1 text-center text-light mb-5 pb-5">Rest</h2>
                                <span class="display-1 timer text-light my-5" id="timer">${ rest } </span>
                                <h5 class="text-center text-light my-5 py-5" id="set"> Sets left: ${sets} </h5>
                                <progress max="${ rest}" value="${ rest}" class="progress progress--set" id="progressBar"></progress>`
    exerciseView.append(exerciseTimer);
    const fullscreenBtn = document.querySelector(".fullscreen");
    fullscreenBtn.addEventListener("click", () => {
        toggleFullScreen();
    });
}

function showTimerComplete(totalSets) {
    const completeTimer = document.createElement("div");
    completeTimer.classList.add("card", "p-2", "col-md-8", "offset-md-2", "bg-dark");
    completeTimer.innerHTML = ` <h2 class="display-1 text-center text-light">Congratulations</h2>
                                <span class="u-center-text text-light">You've completed ${ totalSets} sets.</span> `
    completeView.append(completeTimer);
}


                                