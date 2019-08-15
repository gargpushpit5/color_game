var numcolors=6;
var colors = generaterandomarray(numcolors);
   
var squares = document.querySelectorAll(".square");
var pickedcolor=pickcolor();          //the correct color to be picked

var colordisplay=document.getElementById("display");//to change color in heading
colordisplay.textContent=pickedcolor;

var messagedisplay = document.getElementById("message");
var h1=document.getElementById("main");

var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");
easybtn.addEventListener("click",function(){
  easybtn.classList.add("selected");
      hardbtn.classList.remove("selected");
    numcolors=3;
    colors = generaterandomarray(numcolors);
    pickedcolor=pickcolor(); 
     colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
        {
            if(colors[i])
                {
                    squares[i].style.background=colors[i];
                }
            else
                squares[i].style.display="none";
        }
     messagedisplay.textContent="";
})

hardbtn.addEventListener("click",function(){
  easybtn.classList.remove("selected");
      hardbtn.classList.add("selected");
    numcolors=6;
    colors = generaterandomarray(numcolors);
      pickedcolor=pickcolor(); 
     colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
        {
                    squares[i].style.background=colors[i]; 
             squares[i].style.display="block";
        }
     messagedisplay.textContent="";
})

var resetbutton=document.getElementById("reset");
resetbutton.addEventListener("click",function(){           //to make new game on clicking button chnage (colors)
    //chnage colors array
    colors = generaterandomarray(numcolors);
    //change picked color
    pickedcolor=pickcolor();
    
    this.textContent="NEW COLORS";
    // to change color in heading
    colordisplay.textContent=pickedcolor;
    //to chnge square colors
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=colors[i];}
    
    h1.style.background="rgb(70,130,180)";
     messagedisplay.textContent="";
    
})
for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=colors[i];
        
        squares[i].addEventListener("click",function(){
            //to select the color of clicked square
            var clickedcolor=this.style.background;
           // console.log(clickedcolor+"   "+pickedcolor);
        //compare color picke with answer
        if(clickedcolor === pickedcolor)                                         
           { messagedisplay.textContent="CORRECT";
            for(var j=0;j<squares.length;j++)         //to make all square same on right click
                squares[j].style.background=pickedcolor;
           h1.style.background=pickedcolor; 
            resetbutton.textContent="PLAY AGAIN!";
           }
            else
            {    this.style.background="rgb(0,0,0)"; //background black
            messagedisplay.textContent="WRONG";}
        })
    }


function pickcolor(){
    var random=Math.floor(Math.random() * colors.length);//to get no. less the 6
    return colors[random];
} //function for random color

function generaterandomarray(num)         //to create color array
{
    var arr=[];
    for(var i=0;i<num;i++)
        {
            arr.push(randomcolor()); 
        }
    return arr;
}
function randomcolor()
{
var r= Math.floor(Math.random() * 256);       //to generate r g b different random values values 
var g= Math.floor(Math.random() * 256);
var b= Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")"; //spaces to be added after ,
}




