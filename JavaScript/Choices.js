
function addIntro() {
    var node = document.createElement('img');
    node.src="images/cartonhouse.png";
    node.height =300;
    node.width = 375;
    document.getElementById("seconddiv").appendChild(node);
    let currentdiv =document.getElementById("threediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/Intro.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They go Outside to play in the forest";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They stay inside to play in the attic";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice1a);
    choice2.addEventListener("click",addChoice2b);

}
function addChoice1a(){
    var node = document.createElement('img');
    node.src="images/cabininthewoods.jpg";
    node.height =300;
    node.width = 375;
    document.getElementById("fourdiv").appendChild(node);
    let currentdiv =document.getElementById("fivediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/PlayInTheForest1a.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They go inside the cabin to inspect it";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They turn back to their home to play in the attic";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice2a);
    choice2.addEventListener("click",addChoice2bspecial);
}

function addChoice2a(){
    var node = document.createElement('img');
    node.src="images/dino-footprint-full-width.jpg";
    node.height =300;
    node.width = 375;
    document.getElementById("sixdiv").appendChild(node);
let currentdiv =document.getElementById("sevendiv");
currentdiv.className="Text_Class";
currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/cabinInspection2a.html" height="350px" width="460px" ></object>';
let choice1 =document.createElement("button");
choice1.innerHTML="They go back to the cabin";
choice1.className ="Button_Choice_1";
let choice2 =document.createElement("button");
choice2.className ="Button_Choice_2";
choice2.innerHTML="They follow the footprints";
currentdiv.appendChild(choice1);
currentdiv.appendChild(choice2);

choice1.addEventListener("click",addChoice3a);
choice2.addEventListener("click",addChoice3b);
}

function addChoice3a(){
    var node = document.createElement('img');
    node.src="images/vulcanoerruption.gif";
    node.height =300;
    node.width = 375;
    document.getElementById("eightdiv").appendChild(node);
    let currentdiv =document.getElementById("ninediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/backToTheCabin3aEnd.html" height="420px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Try Again!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice3b(){
    var node = document.createElement('img');
    node.src="images/river.gif";
    node.height =300;
    node.width = 375;
    document.getElementById("eightdiv").appendChild(node);
    let currentdiv =document.getElementById("ninediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/followFootprints3b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They take the liana to swing over the river";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They swim trough the river";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice4a);
    choice2.addEventListener("click",addChoice4b);
}
function addChoice4a(){
    var node = document.createElement('img');
    node.src="images/crocodile.jpg";
    node.height =300;
    node.width = 375;
    document.getElementById("tendiv").appendChild(node);
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/LianaSwing4aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Try Again!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice4b(){
    var node = document.createElement('img');
    node.src="images/raptor.gif";
    node.height =300;
    node.width = 375;
    document.getElementById("tendiv").appendChild(node);
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/SwimThroughRiver4b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They run away";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They hide in a tree";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice5a);
    choice2.addEventListener("click",addChoice5b);
}

function addChoice5a(){
    var node = document.createElement('img');
    node.src="images/vulcanoerruption.gif";
    node.height =300;
    node.width = 375;
    document.getElementById("twelvediv").appendChild(node);
    let currentdiv =document.getElementById("thirteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/RunAway5aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Wann Start from the Beginning?";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}
function addChoice5b(){
    let currentdiv =document.getElementById("thirteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/HideInTree5b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They stay in the tree and wait";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They jump on the neck of a Brachiosaurus which is eating leaves off their tree";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice6a);
    choice2.addEventListener("click",addChoice6b);
}
function addChoice6a(){
    let currentdiv =document.getElementById("fifthteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/StayInTheTree6aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Try Again!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}
function addChoice6b(){
    let currentdiv =document.getElementById("fifthteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/NeckOfBrachiosaurus6bEnd.html" height="400px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice2b(){
    let currentdiv =document.getElementById("fivediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/StayInsidetheAttic2b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They approach the Brachiosauruses";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They run away ";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice7a);
    choice2.addEventListener("click",addChoice7b);
}
function addChoice7a(){
    let currentdiv =document.getElementById("sevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/ApproachBrachiosauruses7a.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Stay";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="Leave ";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice8a);
    choice2.addEventListener("click",addChoice8b);
}
function addChoice8a(){
    let currentdiv =document.getElementById("ninediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/Stay8a.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They take the liana to swing over the river";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They swim trough the river";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice4a);
    choice2.addEventListener("click",addChoice4b);
}

function addChoice8b(){
    let currentdiv =document.getElementById("ninediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/Leave8bEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice7b(){
    let currentdiv =document.getElementById("sevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/RunAway7b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They go back to the Brachiosauruses";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They hide in the grass";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice9a);
    choice2.addEventListener("click",addChoice9b);
}

function addChoice9a(){
    let currentdiv =document.getElementById("ninediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/backToBrachiosaurus9aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice9b(){
    let currentdiv =document.getElementById("ninediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/HideInGrass9b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Hide in the cave";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="Look for another place";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice10a);
    choice2.addEventListener("click",addChoice10b);
}
function addChoice10a(){
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/HideIncave10aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice10b(){
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/HideInGrass9b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Rip the book out of the Dinosaurs mouth and run";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="Leave the book with the baby Dinosaur and loose the last chance of getting home";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice11a);
    choice2.addEventListener("click",addChoice11b);
}
function addChoice11a(){
    let currentdiv =document.getElementById("thirteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/RipBookoutOfMouth11aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}
function addChoice11b(){
    let currentdiv =document.getElementById("thirteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/leaveWithbabyDinosuar11bEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}


function addChoice3bspecial(){
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/followFootprints3b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They take the liana to swing over the river";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They swim trough the river";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice4aspecial);
    choice2.addEventListener("click",addChoice4bspecial);
}
function addChoice4aspecial(){
    let currentdiv =document.getElementById("thirteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/LianaSwing4aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Try Again!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice4bspecial(){
    let currentdiv =document.getElementById("thirteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/SwimThroughRiver4b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They run away";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They hide in a tree";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice5aspecial);
    choice2.addEventListener("click",addChoice5bspecial);
}

function addChoice5aspecial(){
    let currentdiv =document.getElementById("fifthteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/RunAway5aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Try Again!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}
function addChoice5bspecial(){
    let currentdiv =document.getElementById("fifthteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/HideInTree5b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They stay in the tree and wait";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They jump on the neck of a Brachiosaurus which is eating leaves off their tree";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice6aspecial);
    choice2.addEventListener("click",addChoice6bspecial);
}
function addChoice6aspecial(){
    let currentdiv =document.getElementById("seventeendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/StayInTheTree6aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Try Again!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}
function addChoice6bspecial(){
    let currentdiv =document.getElementById("seventeendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/NeckOfBrachiosaurus6bEnd.html" height="400px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice2bspecial(){
    let currentdiv =document.getElementById("sevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/StayInsidetheAttic2b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They approach the Brachiosauruses";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They run away ";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice7aspecial);
    choice2.addEventListener("click",addChoice7bspecial);
}
function addChoice7aspecial(){
    let currentdiv =document.getElementById("ninediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/ApproachBrachiosauruses7a.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Stay";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="Leave ";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice8aspecial);
    choice2.addEventListener("click",addChoice8bspecial);
}
function addChoice8aspecial(){
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/Stay8a.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They take the liana to swing over the river";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They swim trough the river";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice4aspecial);
    choice2.addEventListener("click",addChoice4bspecial);
}

function addChoice8bspecial(){
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/Leave8bEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice7bspecial(){
    let currentdiv =document.getElementById("ninediv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/RunAway7b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="They go back to the Brachiosauruses";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="They hide in the grass";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice9aspecial);
    choice2.addEventListener("click",addChoice9bspecial);
}

function addChoice9aspecial(){
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/backToBrachiosaurus9aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice9bspecial(){
    let currentdiv =document.getElementById("elevendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/HideInGrass9b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Hide in the cave";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="Look for another place";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice10aspecial);
    choice2.addEventListener("click",addChoice10bspecial);
}
function addChoice10aspecial(){
    let currentdiv =document.getElementById("thirteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/HideIncave10aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function addChoice10bspecial(){
    let currentdiv =document.getElementById("thirteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/HideInGrass9b.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Rip the book out of the Dinosaurs mouth and run";
    choice1.className ="Button_Choice_1";
    let choice2 =document.createElement("button");
    choice2.className ="Button_Choice_2";
    choice2.innerHTML="Leave the book with the baby Dinosaur and loose the last chance of getting home";
    currentdiv.appendChild(choice1);
    currentdiv.appendChild(choice2);

    choice1.addEventListener("click",addChoice11aspecial);
    choice2.addEventListener("click",addChoice11bspecial);
}
function addChoice11aspecial(){
    let currentdiv =document.getElementById("fifthteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/RipBookoutOfMouth11aEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}
function addChoice11bspecial(){
    let currentdiv =document.getElementById("fifthteendiv");
    currentdiv.className="Text_Class";
    currentdiv.innerHTML = '<object class="story_text" type="text/html" data="HTML_Pages/leaveWithbabyDinosuar11bEnd.html" height="350px" width="460px" ></object>';
    let choice1 =document.createElement("button");
    choice1.innerHTML="Start from the beginning!";
    choice1.className ="Button_Choice_1";
    currentdiv.appendChild(choice1);
    choice1.addEventListener("click",endStory);
}

function endStory() {
location.reload(true);
}

function nextPage(){
    var keyboardEvent = document.createEvent("KeyboardEvent");
    var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

    keyboardEvent[initMethod](
        "keydown", // event type: keydown, keyup, keypress
        true,      // bubbles
        true,      // cancelable
        window,    // view: should be window
        false,     // ctrlKey
        false,     // altKey
        false,     // shiftKey
        false,     // metaKey
        39,        // keyCode: unsigned long - the virtual key code, else 0
        0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
    );
    document.dispatchEvent(keyboardEvent);
}/*
//vulcano erruption
<div class="tenor-gif-embed" data-postid="14780743" data-share-method="host" data-width="100%" data-aspect-ratio="1.930232558139535"><a href="https://tenor.com/view/fortnite-volcano-eruption-fortnite-volcano-fortnite-volcano-volcano-eruption-gif-14780743"></a> from <a href="https://tenor.com/search/fortnitevolcanoeruption-gifs">Fortnitevolcanoeruption GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
//river
 <div class="tenor-gif-embed" data-postid="11111063" data-share-method="host" data-width="100%" data-aspect-ratio="1.7412587412587412"><a href="https://tenor.com/view/washington-state-north-cascades-river-nature-majestic-gif-11111063"></a> from <a href="https://tenor.com/search/washingtonstate-gifs">Washingtonstate GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
//raptor
 <div class="tenor-gif-embed" data-postid="16077471" data-share-method="host" data-width="100%" data-aspect-ratio="1.930232558139535"><a href="https://tenor.com/view/rawr-hi-hello-dinosaur-raptor-gif-16077471"></a> from <a href="https://tenor.com/search/rawr-gifs">Rawr GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    https://tenor.com/view/rawr-hi-hello-dinosaur-raptor-gif-16077471
    */
    function addPicture() {
    var node = document.createElement('img');
    node.src="images/landscape.jpg";
    node.height =300;
    node.width = 400;
    document.getElementById("seconddiv").appendChild(node);
}

function addDiv() {
    var divElement = document.createElement("div");
    var element = document.getElementsByClassName("b-load")
    element.appendChild(divElement);
}
