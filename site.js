//dj;fjas;dklfjkasjdf;kljas;kldfj;kasjdf;kjthtiehs;akdk;fjds;
/*

hey, im sorry i write crappy code.
let me explain what is happening here.

*/


//we need get our hero div
var hero = document.getElementById('hero');
//create variable to hold frame number/name
var currentFrame = "stand";
function updateFrame(){
    if(currentFrame == "stand"){ //change frame from stand to step
        //update background-position
        hero.style.backgroundPositionX = '-115px';
        hero.style.backgroundPositionY = '355px'; 
        //if using different images, use hero.style.backgroundImage = "sprint2.png";

        //update currentFrame to new frame name
        currentFrame = "step";
    }
    else{ //else currentFrame == "step"
        //update background-position
        hero.style.backgroundPositionX = '-115px';
        hero.style.backgroundPositionY = '325px';

        //update currentFrame to new frame name
        currentFrame = "stand";
    }
}

/* for a game */
setInterval(updateFrame, 170);
