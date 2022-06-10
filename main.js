var canvas=new fabric.Canvas("myCanvas")
playerx=10;
playery=10;

blockwidth=30;
blockheight=30;

playerobject="";
blockobject="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top : playery,left:playerx
        });
        canvas.add(playerobject)
        
    }) 
}
player_update()

function new_image(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        blockobject=Img
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top : playery,left:playerx
        });
        canvas.add(blockobject)
        
    }) 
}
new_image("ground.png")
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypress=e.keyCode
    console.log(keypress)

if (e.shiftKey==true && keypress=="80") {
    blockwidth=blockwidth+10 
    blockheight=blockheight+10
    document.getElementById("current_width").innerHTML=blockwidth
    document.getElementById("current_height").innerHTML=blockheight
}
if (e.shifhtKey==true && keypress=="77") {
    blockwidth=blockwidth-10
    blockheight=blockheight-10
    document.getElementById("current_width").innerHTML=blockwidth
    document.getElementById("current_height").innerHTML=blockheight
}




    if (keypress=="37") {
        left()
    }
    if (keypress=="38") {
        up()
    }
    if (keypress=="39") {
        right()
    }
    if (keypress=="40") {
        down()
    }
    if (keypress=="67") {
        new_image("cloud.jpg")
    }
    if (keypress=="68") {
        new_image("dark_green.png")
    }
    if (keypress=="71") {
        new_image("ground.png")
    }
    if (keypress=="76") {
        new_image("light_green.png")
    }
    if (keypress=="82") {
        new_image("roof.jpg")
    }
    if (keypress=="84") {
        new_image("trunk.jpg")
    }
    if (keypress=="85") {
        new_image("unique.png")
    }
    if (keypress=="87") {
        new_image("wall.jpg")
    }
    if (keypress=="89") {
        new_image("yellow_wall.png")
    }
    }  
    function up(){
        if (playery>=0) {
            playery=playery-blockheight
            canvas.remove(playerobject)
            player_update()
        }
    }
    function down(){
        if (playery<=500) {
            playery=playery+blockheight
            canvas.remove(playerobject)
            player_update()
        }
    }
    function left(){
        if (playerx>=0) {
            playerx=playerx-blockwidth
            canvas.remove(playerobject)
            player_update()
        }
    }
    function right(){
        if (playerx<=900) {
            playerx=playerx+blockwidth
            canvas.remove(playerobject)
            player_update()
        }
    }

       




 

