var canvas=new fabric.Canvas('myCanvas')
playerx=10
playery=10
blockimagewidth=30
blockimageheight=30
playerobject=""
blockimageobject=""
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img
        playerobject.scaleToWidth(150)
        playerobject.scaleToHeight(140)
        playerobject.set({
            top:playery,
            left:playerx
        })
        canvas.add(playerobject)
    })
}
function newimage(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        blockimageobject=Img
       blockimageobject.scaleToWidth(blockimagewidth)
        blockimageobject.scaleToHeight(blockimageheight)
       blockimageobject.set({
            top:playery,
            left:playerx
        })
        canvas.add(blockimageobject)
    })
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if(e.shiftKey && keypressed=='80'){
        console.log("P&shiftpresstogeather")
        blockimagewidth=blockimagewidth+10
        blockimageheight=blockimageheight+10
        document.getElementById("currrent_width").innerHTML=blockimagewidth
        document.getElementById("currrent_height").innerHTML=blockimageheight


    }
    if(e.shiftKey && keypressed=='77'){
        console.log("m&shiftpresstogeather")
        blockimagewidth=blockimagewidth-10
        blockimageheight=blockimageheight-10
        document.getElementById("currrent_width").innerHTML=blockimagewidth
        document.getElementById("currrent_height").innerHTML=blockimageheight


    }
    if(keypressed=='38'){
        up()
        console.log("up")
    }
    if(keypressed=='40'){
        down()
        console.log("down")
    }
    if(keypressed=='37'){
        left()
        console.log("left")
    }
    if(keypressed=='39'){
        right()
        console.log("right")
    }
    if(keypressed=='70')
    {
        newimage('ironman_face.png')
        console.log("f")
    }
    if(keypressed=='66')
    {
        newimage('ironman_body.png')
        console.log("b")
    }
    if(keypressed=='76')
    {
        newimage('spiderman_legs.png')
        console.log("s")
    }
    if(keypressed=='84')
    {
        newimage('captain_america_left_hand.png')
        console.log("c")
    }
    
}
function down(){
    if(playery<=500){
        playery=playery+blockimageheight
        console.log(blockimageheight)
        console.log("when down arrow is pressed,x="+playerx+",y="+playery)
        canvas.remove(playerobject)
        playerupdate()
    }
}
function left(){
    if(playerx>=0){
        playerx=playerx-blockimagewidth
        console.log(blockimagewidth)
        console.log("when left arrow is pressed,x="+playerx+",y="+playery)
        canvas.remove(playerobject)
        playerupdate()
    }
}
function right(){
    if(playerx<=850){
        playerx=playerx+blockimagewidth
        console.log(blockimagewidth)
        console.log("when right arrow is pressed,x="+playerx+",y="+playery)
        canvas.remove(playerobject)
        playerupdate()
    }
}