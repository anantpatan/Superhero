var canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
block_width=30;
block_height=30;
player_object="";
block_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:playerY,
    left:playerX 
    });
    canvas.add(player_object);
    });
}
function new_image(getblock_img){
    fabric.Image.fromURL(getblock_img, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
   keycode=e.keyCode;
   console.log(keycode);
   if(keycode=="37"){
       console.log("left");
       left();
   }
   else if(keycode=="38"){
       console.log("up");
       up();
   }
   else if(keycode=="39"){
       console.log("right");
       right();
   }
   else if(keycode=="40"){
       console.log("down");
       down();
   }
   if(e.shiftKey==true&&keycode=="80"){
       console.log("shift+P");
       block_width=block_width+10;
       block_height=block_height+10;
       document.getElementById("current_width").innerHTML=block_width;
       document.getElementById("current_height").innerHTML=block_height;
   }
   else if(e.shiftKey==true&&keycode=="77"){
       console.log("shift+M");
       block_width=block_width-10;
       block_height=block_height-10;
       document.getElementById("current_width").innerHTML=block_width;
       document.getElementById("current_height").innerHTML=block_height;
   }
   if(keycode=="70"){
       console.log("F");
       new_image('thor_face.png');
   }
   if(keycode=="66"){
       console.log("B");
       new_image('ironman_body.png');
   }
   if(keycode=="76"){
       console.log("L");
           new_image('spiderman_legs.png'); 
   }
   if(keycode=="82"){
       console.log("R");
       new_image('hulk_right_hand.png');
   }
   if(keycode=="72"){
       console.log("H");
       new_image('captain_america_left_hand.png');
   }
}

function up(){
    if(playerY>=0){
        playerY=playerY-block_height;
        console.log("block height"+block_height);
        console.log("X="+playerX+" Y="+playerY);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(playerY<=450){
        playerY=playerY+block_height;
        console.log("block height"+block_height);
        console.log("X="+playerX+" Y="+playerY);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(playerX>=0){
        playerX=playerX-block_width;
        console.log("block width"+block_width);
        console.log("X="+playerX+" Y="+playerY);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(playerX<=850){
        playerX=playerX+block_width;
        console.log("block width"+block_width);
        console.log("X="+playerX+" Y="+playerY);
        canvas.remove(player_object);
        player_update();
    }
}