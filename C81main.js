canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(p)
{
  color=document.getElementById("color").value;
  mouse_x=p.clientX - canvas.offsetLeft;
  mouse_y=p.clientY - canvas.offsetTop;
  circle(mouse_x,mouse_y);


}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

















