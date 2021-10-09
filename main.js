var canvas=document.getElementById("myCanvas");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	var img_image= "numkey"
	img_imgTag.onload = uploadimg; 
	img_imgTag.onload;
	img_imgTag.src = img_image;   
	uploadimg();
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		
		Aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed a aplhabet key";

		numberkey();
		document.getElementById("d1").innerHTML="You pressed a number key";

		arrowkey();
		document.getElementById("d1").innerHTML="You pressed a arrow key";

		specialkey();
		document.getElementById("d1").innerHTML="You pressed a special key";
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add(); 

}
function numberkey()
{
	img_image="numkey.png";
	add();	
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
