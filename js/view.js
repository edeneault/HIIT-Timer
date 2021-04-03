/// HIIT Timer Views ///
function showTimerHome() {
    const homeTimer = document.createElement("div");
    homeTimer.classList.add("card","p-2", "col-md-8", "offset-md-2", "bg-dark");
    homeTimer.innerHTML = `

                            <form class="form-control bg-dark border-dark" method="post">
                                    <div class="form-group row ">
                                       
                                        <div class="input-group col-md-6 m-1 ">
                                            <label class="input-group-text col-12 col-sm-3 col-form-label bg-secondary text-light" for="exercise">Exercise:</label>
                                            <input class="form-control col-12 col-sm-3 bg-dark text-light" type="number" name="exercise" id="exercise" value="10"/>
                                            <span class="input-group-text col-12 col-sm-3 bg-secondary text-light"><small>seconds</small></span>
                                        </div>
                                        
                                        <div class="input-group col-md-6 m-1">
                                            <label class="input-group-text col-12 col-sm-3 col-form-label bg-secondary text-light" for="rest">Rest:</label>
                                            <input class="form-control col-12 col-sm-3 bg-dark text-light" type="number" name="rest" id="rest" value="5"/>
                                            <span class="input-group-text col-12 col-sm-3 bg-secondary text-light"><small>seconds</small></span>
                                        </div>
                                        <div class="input-group col-md-6 m-1">
                                            <label class="input-group-text col-12 col-sm-3 col-form-label bg-secondary text-light" for="sets">Sets:</label>
                                            <input class="form-control col-12 col-sm-3 bg-dark text-light" type="number" name="sets" id="sets" value="3"/>
                                            <span class="input-group-text col-12 col-sm-3 bg-secondary text-light"><small>default-3</small></span>
                                        </div>    
                                        <div class="text-center m-1">
                                            <button class="btn btn-secondary" type="submit" id="startBtn">Start!</button>
                                        </div>
                                    </div>    
                            </form>`
    homeView.append(homeTimer);  
}

function showTimerExercise() {
    const exerciseTimer = document.createElement("div");
    exerciseTimer.classList.add("card", "p-2", "col-md-8", "offset-md-2", "bg-success");

    exerciseTimer.innerHTML = ` <h2 class="display-1 text-center text-light">Exercise</h2>
                                <h1 class="display-1 timer text-light" id="timer">${ exercise } </h1>
                                <h5 class=" text-center text-light" id="set">Sets left: ${sets} </h5>
                                <progress max="${ exercise }" value="${ exercise}" class="progress progress--rest" id="progressBar"></progress> `                           
    exerciseView.append(exerciseTimer);     
}

function showTimerRest() {
    const exerciseTimer = document.createElement("div");
    exerciseTimer.classList.add("card", "p-2", "col-md-8", "offset-md-2", "bg-danger");

    exerciseTimer.innerHTML = ` <h2 class="display-1 text-center text-light">Rest</h2>
                            <span class="display-1 timer text-light" id="timer">${ rest } </span>
                            <h5 class="text-center text-light" id="set"> Sets left: ${sets} </h5>
                            <progress max="${ rest}" value="${ rest}" class="progress progress--set" id="progressBar"></progress> `
    exerciseView.append(exerciseTimer);
   
}

function showTimerComplete(totalSets) {
    const completeTimer = document.createElement("div");
    completeTimer.classList.add("card", "p-2", "col-md-8", "offset-md-2", "bg-dark");
    completeTimer.innerHTML = ` <h2 class="display-1 text-center text-light">Congratulations</h2>
                                <span class="u-center-text text-light">You've completed ${ totalSets} sets.</span> `
    completeView.append(completeTimer);
}


                                