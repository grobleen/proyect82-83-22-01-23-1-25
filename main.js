canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var evento = "empty";
var ultimaposisionx, ultimaposisiony;
color = "black";
var ancholinea = 1;
canvas.addEventListener ("mousedown",mine_mousedown);
function mine_mousedown(e){
evento = "mouseDown";   
}
canvas.addEventListener ("mouseup",mine_mouseup);
function mine_mouseup(e){
evento = "mouseUp";    
}
canvas.addEventListener ("mouseleave",mine_mouseleave);
function mine_mouseleave(e){
evento = "mouseleave";    
}
canvas.addEventListener ("mousemove",mine_mousemove);
function mine_mousemove(e){
actualizarposisionx = e.clientX-canvas.offsetLeft;
actualizarposisiony = e.clientY-canvas.offsetTop;    
if(evento == "mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = ancholinea;
ctx.moveTo(ultimaposisionx, ultimaposisiony);
ctx.lineTo(actualizarposisionx, actualizarposisiony);
ctx.stroke();

}
ultimaposisionx = actualizarposisionx;
ultimaposisiony = actualizarposisiony;
}