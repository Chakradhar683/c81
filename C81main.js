canvas= document.getElementById("myCanvas")
color="red";
ctx= canvas.getContext("2d")
ctx.beginpath()
ctx.strokeStyle= color;
ctx.lineWidth= 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

 //addition Mouse function
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    //taking color//
    color= document.ge
    tElementById("color").Value;
    console.log(color)
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   