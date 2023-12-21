//replace text selection vscode setting option thing :3
var pipe = document.getElementById("pipe");
var gap = document.getElementById("gap");
var bird = document.getElementById("bird");
var bounce = 0;
var counter = 0;


function updateTop(){
    var randomVertical = -((Math.random() * 300) + 150);
    gap.style.top = randomVertical + "px";
}

updateTop();
//function rune everytime animation runs
gap.addEventListener('animationiteration',() => {
    updateTop();
    counter ++;
});


//gravity effect
setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top")); //returns 100 (as set in css)
    if(bounce==0){
        //faster gravity
        bird.style.top= (birdTop + 4)+ "px";
        //slowed down
        // bird.style.top= (birdTop + 3)+ "px";
    } 
    var pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top")); //returns 100 (as set in css)
    var btop= -(520-birdTop);
    if((birdTop>480)||((pipeLeft<20)&&(pipeLeft>-50)&&((btop<gapTop)||(btop>gapTop+130)))){
        if(counter === 0){
            alert(`game over, Score : ${counter}`);
        }else{
            alert(`game over, Score : ${counter-1}`);
        }
        
        bird.style.top = 100 +"px";
        counter= 0;
    }  
},10);//every 10ms

function bbounce(){
    bounce = 1;
    let bounceCount = 0;
    var bounceInterval = setInterval(function(){
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top")); 
        if((birdTop>6)&&(bounceCount<15)){
            bird.style.top=(birdTop - 5)+ "px";
        }        
        if(bounceCount>20){
            clearInterval(bounceInterval);
            bounce= 0;
            bounceCount = 0;

        }
        bounceCount ++;
    },10);
}

//hhotkey 'spacebar'
document.addEventListener('keydown', function(event) {
    if (event.key==" ") {
        bbounce();
    }
});


//shows div--working,just cant click when alert so > display alert elsewhere on screen.
// function showSettings(){
//     alert('clicked');
//    var menuDiv= document.getElementById("cmod");
//    if(menuDiv.style.display === "none" || menuDiv.style.display === ""){
//     menuDiv.style.display = "block";
//    }else{
//     menuDiv.style.display = "none"
//    }
//     }

//     function blue() {
//         alert("blue");
//         document.getElementById("birdIcon").src="https://freepngimg.com/thumb/logo/109933-logo-bird-flappy-png-download-free.png";
//     }
    
//     function red() {
//         document.getElementById("birdIcon").src ="https://art.pixilart.com/cd28182159871b6.png";
//     }
    
//     function yellow() {
//         document.getElementById("birdIcon").style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAACuCAMAAABOUkuQAAABPlBMVEX///8AAAD/9wD/mQD/MwDo6Oj8/Pz/+wD/mgBFDQDs7OySHQBjY2PvLwCgoKDe3t5bW1seBgDlLQCpIgCTWAAgICCrpQDAwMCZWwD/+WjJyclOTk7y8vJ9fX1MSgD/rQCurq4kFgA8PDzFvgD37wD2kwApKSkAAAj+/eF1dXVOOwDAcwPu4wD/+519GQDdhACTk5POyAARERFoZQDe1wCvnw3RKgBUMgBuQQAzCgAPAAA9JQgXDgD//c4wLgD///NOTjWkoDQVFQD//L3/+ogiHwDrjQBERETPzrzTz1yCg4uZmZmGhn3w79ako4o7OAAiIitraRwlIwCSjySln2jPzI+3swyObgBxAAD/+VyroSP58jxPJwDAwQBISDtJSCd+XgDGighBRQdcRwAtAAAADABzGwBZPDm3bgNvOQBIs6AEAAAFDklEQVR4nO3daVsSURjGcUZjIDQgMzEWmxQ1ggrTjGzX1PY923fbvv8XyLar85wrzjMcnlkY7v8bXgjDzI8zxJxmIJUKpJwTdQ03mC2TqhE1kOMUojYwV4vaB0IQghCEovaBEIQgBKGofSAEIQgNhVC61L1GcVyk4hmy1Qum+25ToTxZoWoEQNVZwws4XsiJVCBPcqZmuGs1bxpR6QiE0qYVagi9ZjlNyHRfD0IQ+k8Q4oIQF4S4IMQFIS4IcUGIC0JcEOISE8rJrE9PGf9rftxayCWl6eFx2/RIo1Dedn16qlopKjVK5e7dOGLbzVttNY8s1jjnkyZ39Ra014yse1BC5CkrppMrLo1YlpkjT3LYeh6sYJqccW7bLtYcFSqGIbQQkFBAOx2EuCDEBSEuCHFBiAtCXBDighAXhLggxOWSJwnluKwPIe3INRghN1dVazfU7tw93r0NKaEynQ4xrW21oFaukbWdDUZIm3GhB8TWCD0JldJqxlknurYVOmemna4Dob23STrvmmChHIQYIYwhTghjiBPCGOKEMIY4IYwhTghjCEIQgtC/FiG0l6seHqfz65fV7l1RG1KhcbKc+ztzai1yCsKLcIRi9q89nSNzZpYCURhkoZQulIlcKG57mSbUghAnFDbQ4AlhDDFCeB/ihFbCBho4IbwPcUIxGEP4PMQJxXwMxUAIY2jAheoZ24SEHpSr5Jr6uAndn7LNevBllpbVHt7Jq5Vdw3kOJfINDm2qGZCQfcsyn8YzrRNksTWyz/VyvQ+EhlVoJMlCIkAYQxCCkEFIAijZQhhDEOpXSAJITshNqlCiPw/hEyMrlBkRONKnQouKUC4qocMiPVheaanVrYVmNpUe1ciFCYWq/7SfNvB6MSHdLsjkXSVZT4bUV0iPt0kV/xmvg6HpX51B/1qyHn208iJZ7Jz9fkam5a75384+0uad6B89KSH6baX2QnREXaPwAaVtC4SSJDQCISaMIQj1HYQg1GfYy9ggBCEIBSH0d/7k13FZ9EJPTqptXPFvskEe+VToyLW+M7Xzr6lnYyH0nP6whiZ0lszkvDjuX+g6ed2XHBGhTOvEutqpfSG0qo2ouAuR5UAIQj0HISaMIQj1K4S9jAtjCEIQCloI70MDKaRuS+RCMdzLXtbVXt11fXedPHLpwjml12/8XxBCFlNvdfarjR0IIV2InpGwOUN66//UgXfkge+35reUjvrvw0d1OZ9W1XWfGNsfQruURNtXHKE6o1m1Ud9lm2RmaXeC7ABjUutnzPhuIvUknfkeVAxC54nQAQgNlZAd0DAJYQyZwxjighAXhLggxIV3ai4IcSVWyOUf7i8poUiOy4y/6FBamFXSTvXvTPuuaf1OfXpSXc6kdtbBIZlOHSMbRje6l+sSSmQ5a9P+x4XlCNIfmd26oK7BZ6kZtNXzZMvsr")';
//     }



//to mute audio
/*if(hotkey==m){
    document.getElementBylassName("sound1").audio.volume="0"; || audio.remove() ??
}*/