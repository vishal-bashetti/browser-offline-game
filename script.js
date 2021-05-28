var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump()
{
    if(character.classList!="animate")
    {
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate"); //to perform multiple jumps as animate class can't be added multiple times
    },500);
}
var checkdead = setInterval(function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); //To get the top position of the character from window and convert it to int 

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    //condition to check for death
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }


},10); //check every 10sec
