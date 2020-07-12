//dj;fjas;dklfjkasjdf;kljas;kldfj;kasjdf;kjthtiehs;akdk;fjds;
/*

hey, im sorry i write crappy code.
let me explain what is happening here.

*/

//we need to get our hero container
var heroContainer = document.getElementById('hero-container');
//we need get our hero div
// var heroes = document.getElementsByClassName('hero');
var hero = document.getElementById('hero');
//create variable to hold frame number/name
var currentFrame = "stand";
var counter = 0;
var leftPosition = 0;

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

    // if(counter == 6){
        moveCharacter();
        //do something
    //     counter = 0;
    // }
    // else{
    //     counter++;
    // }
}

function moveCharacter(){
    //check if moving right
    // if(movingRight)
    // {
        leftPosition = leftPosition + 1;
        hero.style.left = leftPosition + "px";
    // }
    // else if (movingLeft){
        //check if moving left
        // leftPosition = leftPosition - 25;
        // hero.style.left = leftPosition + "px";
    // } else if (movingUp)
    // {
    //     //check if moving up 
    //     leftPosition = leftPosition - 25;
    //     hero.style.top = leftPosition + "px";
    // }
}


function updateMultipleFrames(){
    if(currentFrame == "stand"){ //change frame from stand to step
        //update background-position
        for(var i = 0; i < heroes.length; i++)
        {
            var hero = heroes[i];
            hero.style.backgroundPositionX = '-115px';
            hero.style.backgroundPositionY = '355px'; 
        }

        // hero.style.backgroundPositionX = '-115px';
        // hero.style.backgroundPositionY = '355px'; 
        //if using different images, use hero.style.backgroundImage = "sprint2.png";

        //update currentFrame to new frame name
        currentFrame = "step";
    }
    else{ //else currentFrame == "step"
        //update background-position
        for(var i = 0; i < heroes.length; i++)
        {
            var hero = heroes[i];
            hero.style.backgroundPositionX = '-115px';
            hero.style.backgroundPositionY = '325px';
        }

        //update currentFrame to new frame name
        currentFrame = "stand";
    }

    if(counter == 6)
    {
        growBody();
        counter = 0;
    }
    else{
        counter++;
        // counter = counter + 1;
    }
}

/* for a game */
setInterval(updateFrame, 170);

function growBody(){
    var newHero = document.createElement("div");
    newHero.className = "hero";
    heroContainer.appendChild(newHero);
}