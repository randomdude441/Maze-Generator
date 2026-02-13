
var grid = document.createElement('div');
var boxWidth=25
var width=40
var height=20
var widthpx=width*boxWidth
var heightpx=height*boxWidth
grid.style.width = widthpx+'px';
grid.style.height = heightpx+'px';
grid.style.border = '1px solid black';
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
var pathColor='white'
var wallColor='black'
var solveColor='green'
var changed=false;
var waitTime=10;
for (var i = 0; i < width*height; i++) {
  var box = document.createElement('div');
  box.style.width = boxWidth+'px';
  box.style.height = boxWidth+'px';
//  box.style.border = '1px solid black';
  box.style.backgroundColor=wallColor;
//  box.addEventListener('mouseover',function(){this.style.backgroundColor=pathColor})   
  //box.addEventListener('click',function(){this.style.backgroundColor=wallColor})
 
  grid.appendChild(box);
}
document.body.appendChild(grid);
var s=0
var arr=grid.children

//arr[s].style.backgroundColor = pathColor;
var previousMoves=[s];
var previousCounts=[2]
//for(let i=0;i<200;i++){   

//}

 //console.log((!arr[a+(width-1)]||a%width<1||arr[a+(width-1)].style.backgroundColor==wallColor))      
var findFirst=true
var arrow=true;
var solving=false;
//console.log(!window.findFirst)
    function find(s,w,h,color){
      var solve2=solve
      solve=false;
      if(findFirst==true){
        findFirst=false;
        //console.log("find first "+findFirst)
        return s-h*width+w;
      }
      

     // return s-h*width+width
     // console.log('find')
      var s3 = s-h*width+w;
      if(w<=0){
        if(arr[s3]&&s%width-s3%width>=0){
        //  console.log(arr[s2].style.backgroundColor)
         // console.log(color)
          //console.log(arr[s3].style.backgroundColor)
          
          return arr[s3].style.backgroundColor==color||((color==pathColor)?arr[s3].style.backgroundColor==solveColor||arr[s3].style.backgroundColor=='blue':false)
          
        }
        else{
          return solve2?false:!solving
        }
      }
      if(w>0){
        if(arr[s3]&&s%width-s3%width<=0){
        //  console.log(arr[s2].style.backgroundColor)
         // console.log(color)
          return arr[s3].style.backgroundColor==color||((color==pathColor)? arr[s3].style.backgroundColor==solveColor:false)
        }
        else{
          return solve2?false:!solving
        }
      }
      
     // return s-h*width+width
    }

function up(){
  solving=false
  console.log('up')
   solveDirection=0
      for(let i=0;i<height;i++){
         solve=true
        //console.log(find(s2,0,1,pathColor))
          if(arr[s2-width]&&arr[s2-width].style.backgroundColor=='blue'){
            times.push(time.toFixed(2))
            time=0;
            deleteFunc()
            enter()
            return 1;
          }
        if(find(s2,0,1,pathColor)&&(i==0||find(s2,-1,0,wallColor)&&find(s2,1,0,wallColor))){
      arr[s2].style.backgroundColor='green'
      arr[s2-width].style.backgroundColor='lightgreen'
          s2-=width
        }
          else{
            break;}
      }
  if(arrow&&find(s2,0,1,wallColor)){
  solving=true
  if(find(s2,1,0,pathColor)!=find(s2,-1,0,pathColor)){
  if(find(s2,1,0,pathColor)){
    setTimeout(right,waitTime);
  }
  else if(find(s2,-1,0,pathColor)){
    setTimeout(left,waitTime);
  }
}
  solving=false
  }
}
function down(){
  solving=false
  console.log('down')
  solveDirection=2
      for(let i=0;i<height;i++){
         solve=true
      //  console.log(s2)
        //console.log(find(s2,0,-1,pathColor))
       // console.log(i==0||find(s2,-1,0,wallColor)&&find(s2,1,0,wallColor))
        if(arr[s2+width]&&arr[s2+width].style.backgroundColor=='blue'){
            times.push(time.toFixed(2))
            time=0;
            deleteFunc()
            enter()
          return 1;
          }
        if(find(s2,0,-1,pathColor)&&(i==0||find(s2,-1,0,wallColor)&&find(s2,1,0,wallColor))){
          arr[s2].style.backgroundColor='green'
          
      arr[s2+width].style.backgroundColor='lightgreen'
          s2+=width
        }
          else{break;}
      }
  if(arrow&&find(s2,0,-1,wallColor)){
  solving=true
  if(find(s2,1,0,pathColor)!=find(s2,-1,0,pathColor)){
  if(find(s2,1,0,pathColor)){
    setTimeout(right,waitTime);
  }
  else if(find(s2,-1,0,pathColor)){
    setTimeout(left,waitTime);
  }
}
  solving=false
  }
}
function left(){
  solving=false
console.log('left')
   solveDirection=3
      for(let i=0;i<width;i++){
          solve=true
       // console.log(i==0||find(s2,0,1,wallColor)&&find(s2,0,-1,wallColor))
          if(arr[s2-1]&&arr[s2-1].style.backgroundColor=='blue'){
            times.push(time.toFixed(2))
            time=0;
            deleteFunc()
            enter()
            return 1;
          }
        
        if(find(s2,-1,0,pathColor)&&(i==0||find(s2,0,1,wallColor)&&find(s2,0,-1,wallColor))){
          arr[s2].style.backgroundColor='green'
      arr[s2-1].style.backgroundColor='lightgreen'
          s2-=1
        }
          else{
            break;}
      }
  if(arrow&&find(s2,-1,0,wallColor)){
  solving=true
 if(find(s2,0,1,pathColor)!=find(s2,0,-1,pathColor)){
  if(find(s2,0,1,pathColor)){
    setTimeout(up,waitTime);
  }
  else if(find(s2,0,-1,pathColor)){
    setTimeout(down,waitTime);
  }
}
  solving=false
  }
}
function right(){
  solving=false
  console.log('right')
  // console.log("ran");
      solveDirection=1
      //console.log(find(s2,0,0,'green'))
     // console.log(find(s2,-1,-1,wallColor))
     // console.log(find(s2,-1,1,wallColor))
      for(let i=0;i<width;i++){
         solve=true
       // console.log(i==0||find(s2,0,-1,wallColor)&&find(s2,0,1,wallColor))
          if(arr[s2+1]&&arr[s2+1].style.backgroundColor=='blue'){
            times.push(time.toFixed(2))
            time=0;
            deleteFunc()
            enter()
            return 1;
          }
        if(find(s2,1,0,pathColor)&&(i==0||find(s2,0,-1,wallColor)&&find(s2,0,1,wallColor))){
      arr[s2].style.backgroundColor='green'
      arr[s2+1].style.backgroundColor='lightgreen'
          s2+=1
        }
          else{break;}
      }
  if(arrow&&find(s2,1,0,wallColor)){
  solving=true
  if(find(s2,0,1,pathColor)!=find(s2,0,-1,pathColor)){
  if(find(s2,0,1,pathColor)){
    setTimeout(up,waitTime);
  }
  else if(find(s2,0,-1,pathColor)){
    setTimeout(down,waitTime);
  }
}
  solving=false
}
}
   // console.log(find(16,-1,-1,wallColor))
function deleteFunc(){
  solving=false
  console.log('reset')
      for(let i=0;i<arr.length;i++){
        arr[i].style.backgroundColor=wallColor;
      }
      select=-1;
        count=2;
        s=0;
      s2=0
     // arr[s].style.backgroundColor = pathColor;
        previousMoves=[s]
        previousCounts=[2]
        currentDirection=Math.floor(Math.random()*2+1)
      console.log(currentDirection)
  solve=false
}
function enter(){
  solving=false
  console.log("enter")
  changed=false
    oneMore=true;
    for(let i=0;i<10000;i++){
      if(previousMoves.length)
     // if(!changed)                  
    gen();
      else{
        if(oneMore){
      gen();
          oneMore=false;
        }
      }
     // }
     // else{break}    
    }
}
var solve=false;
var s2=0;
  document.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
  if (event.keyCode === 13) {
    enter()
    /*
    changed=false
    oneMore=true;
    for(let i=0;i<10000;i++){
      if(previousMoves.length)
     // if(!changed)                  
    gen();
      else{
        if(oneMore){
      gen();
          oneMore=false;
        }
      }
     // }
     // else{break}    
    }
    */
  }
    
    
    
    var solveDirection=0
    
    if(event.keyCode == 8){
      deleteFunc();
      enter()
      /*
      console.log('reset')
      for(let i=0;i<arr.length;i++){
        arr[i].style.backgroundColor=wallColor;
      }
      select=-1;
        count=2;
        s=0;
      s2=0
     // arr[s].style.backgroundColor = pathColor;
        previousMoves=[s]
        previousCounts=[2]
        currentDirection=Math.floor(Math.random()*2+1)
      console.log(currentDirection)
   */
   }
    
    if(event.keyCode == 37){
      arrow=true
      left();
      /*
      solveDirection=3
      for(let i=0;i<width;i++){
          solve=true
       // console.log(i==0||find(s2,0,1,wallColor)&&find(s2,0,-1,wallColor))
          if(arr[s2-1]&&arr[s2-1].style.backgroundColor=='blue'){
            deleteFunc()
            enter()
            break;
          }
        if(find(s2,-1,0,pathColor)&&(i==0||find(s2,0,1,wallColor)&&find(s2,0,-1,wallColor))){
          arr[s2].style.backgroundColor='green'
      arr[s2-1].style.backgroundColor='lightgreen'
          s2-=1
        }
          else{
            break;}
      }
      */
    }
    if(event.keyCode == 38){
      arrow=true
      up();
      /*
      solveDirection=0
      for(let i=0;i<height;i++){
         solve=true
        //console.log(find(s2,0,1,pathColor))
          if(arr[s2-width]&&arr[s2-width].style.backgroundColor=='blue'){
            deleteFunc()
           // deleteFunc()
            enter()
            break;
          }
        if(find(s2,0,1,pathColor)&&(i==0||find(s2,-1,0,wallColor)&&find(s2,1,0,wallColor))){
      arr[s2].style.backgroundColor='green'
      arr[s2-width].style.backgroundColor='lightgreen'
          s2-=width
        }
          else{
            break;}
      }
      */
    }
    if(event.keyCode == 39){
      arrow=true
      right()
      /*
     // console.log("ran");
      solveDirection=1
      //console.log(find(s2,0,0,'green'))
     // console.log(find(s2,-1,-1,wallColor))
     // console.log(find(s2,-1,1,wallColor))
      for(let i=0;i<width;i++){
         solve=true
       // console.log(i==0||find(s2,0,-1,wallColor)&&find(s2,0,1,wallColor))
          if(arr[s2+1]&&arr[s2+1].style.backgroundColor=='blue'){
            deleteFunc()
            enter()
            break;
          break;
          }
        if(find(s2,1,0,pathColor)&&(i==0||find(s2,0,-1,wallColor)&&find(s2,0,1,wallColor))){
      arr[s2].style.backgroundColor='green'
      arr[s2+1].style.backgroundColor='lightgreen'
          s2+=1
        }
          else{break;}
      }
      */
    }
    if(event.keyCode == 40){
      arrow=true
      down();
     /*
      solveDirection=2
      for(let i=0;i<height;i++){
         solve=true
      //  console.log(s2)
        //console.log(find(s2,0,-1,pathColor))
       // console.log(i==0||find(s2,-1,0,wallColor)&&find(s2,1,0,wallColor))
        if(arr[s2+width]&&arr[s2+width].style.backgroundColor=='blue'){
            deleteFunc()
            enter()
            break;
          break;
          }
        if(find(s2,0,-1,pathColor)&&(i==0||find(s2,-1,0,wallColor)&&find(s2,1,0,wallColor))){
          arr[s2].style.backgroundColor='green'
          
      arr[s2+width].style.backgroundColor='lightgreen'
          s2+=width
        }
          else{break;}
      }
      */
    }
    if(event.keyCode == 65){
      arrow=false
      left()
    }
    if(event.keyCode == 68){
      arrow=false
      right()
    }
    if(event.keyCode == 83){
      arrow=false
      down()
    }
    if(event.keyCode == 87){
      arrow=false
      up()
    }
});
//console.log(arr[s-width])
var select=-1;
var currentDirection=Math.floor(Math.random()*2+1)
var count=2;
// arr[width*(height-1)-2].style.backgroundColor = pathColor; 
function gen(){
  //changed=true;
  if(previousMoves.length){
  var avalabledirections=[];
    var avalabledirections2=[]
    var add=false;
  //console.log(arr[-1].style.backgroundColor)    
  
  if(s!=width&&(select==-2||((s-s%width)/width)!=1)&&(currentDirection==0||count%2==1)&&s!=(width*height-2)&&s>=width&&find(s,1,1,wallColor)&&find(s,-1,1,wallColor)&&find(s,-1,2,wallColor)&&find(s,0,2,wallColor)&&find(s,1,2,wallColor)){
/*    if(((!arr[s-(width+2)]||s%width<2||arr[s-(width+2)].style.backgroundColor==pathColor)||(!arr[s-(width-2)]||s%width>=(width-2)||arr[s-(width-2)].style.backgroundColor==pathColor))){
    avalabledirections2.push(0);  
     // add=true; 
    }*/
    avalabledirections.push(0);
  }
    //console.log(count)
    if((select==-2||((s-s%width)/width)!=(height-2)||s==width*(height-1)-2)&&(currentDirection==2||count%2==1)&&s<(width*(height-1))&&find(s,-1,-1,wallColor)&&find(s,-1,-2,wallColor)&&find(s,0,-2,wallColor)&&find(s,1,-2,wallColor)&&find(s,1,-1,wallColor)){
     /* if(((!arr[s+(width+2)]||s%width>=(width-2)||arr[s+(width+2)].style.backgroundColor==pathColor)||(!arr[s+(width-2)]||s%width<2||arr[s+(width-2)].style.backgroundColor==pathColor))){
    avalabledirections2.push(2);        
      }*/
    avalabledirections.push(2);
  }
    //fix this
  if((select==-2||s%width!=(width-2)||s==width*(height-1)-2)&&(currentDirection==1||count%2==1)&&s%width!=(width-1)&&find(s,1,-1,wallColor)&&find(s,2,-1,wallColor)&&find(s,2,0,wallColor)&&find(s,2,1,wallColor)&&find(s,1,1,wallColor)){
   /* if(((!arr[s+(2*width+1)]||s%width>=(width-1)||arr[s+(2*width+1)].style.backgroundColor==pathColor)||(!arr[s-(2*width-1)]||s%width>=(width-1)||arr[s-(2*width-1)].style.backgroundColor==pathColor))){
      avalabledirections2.push(1);
    }*/
    avalabledirections.push(1);
  }
    if(s!=1&&(select==-2||s%width!=1)&&(currentDirection==3||count%2==1)&&s!=((width-1)*height-1)&&s%width!=0&&find(s,-1,1,wallColor)&&find(s,-2,1,wallColor)&&find(s,-2,0,wallColor)&&find(s,-2,-1,wallColor)&&find(s,-1,-1,wallColor)){
     /* if(((!arr[s-(2*width+1)]||s%width<1||arr[s-(2*width+1)].style.backgroundColor==pathColor)||(!arr[s+(2*width-1)]||s%width<1||arr[s+(2*width-1)].style.backgroundColor==pathColor))){
        avalabledirections2.push(3);
      }*/
    avalabledirections.push(3);
  }
  /*
  if(arr[s+1]&&(!arr[s+2]||arr[s+2].style.backgroundColor==wallColor)){
    avalabledirections.push(1);
  } 
  */
  
  /*
  if(arr[s+10]&&(!arr[s+width]||arr[s+width].style.backgroundColor==wallColor)){
    avalabledirections.push(2);
  }
  */
  /*
  if(arr[s-1]&&(!arr[s-2]||arr[s-2].style.backgroundColor==wallColor)){
    avalabledirections.push(3); 
  }
  */
  
  
  //console.log(avalabledirections)   
    //console.log(s%width)
 // console.log("s="+s); 
  var direction=avalabledirections[Math.floor(Math.random()*avalabledirections.length)];
  //  console.log(direction)
  if(direction==0){
    s-=width
  }
  if(direction==2){
    s+=width
  }
  if(direction==1){
    s+=1
  }
  if(direction==3){
    s-=1
  }
    //console.log(s)
   // console.log(avalabledirections)
    if(currentDirection==direction){
      count++
    }
    else{
      count=2;
      currentDirection=direction
    }
  
   // console.log(avalabledirections2)
   // if(avalabledirections2.length){ 
  arr[s].style.backgroundColor = pathColor;
   //}
  if(avalabledirections.length){//&&avalabledirections2.length){
  previousMoves.push(s);
  previousCounts.push(count)
  changed=true;
    select=-2;
  }
  else {//if(!avalabledirections2.length){
    if(select!=-1){
      if(!avalabledirections2.length){
      previousMoves.splice(select,1);
      previousCounts.splice(select,1);
    }
    }
    select=Math.floor(Math.random()*previousMoves.length)
    s=previousMoves[select];
    count=previousCounts[select];
    //console.log(previousMoves);
   // console.log(select);
  }
  //  select=Math.floor(Math.random()*previousMoves.length)
  //  s=previousMoves[select];
    /*else{
    previousMoves.push(s); 
    select=Math.floor(Math.random()*previousMoves.length)  
    s=previousMoves[select];
    }*/
}
  else{
    console.log('done');
    arr[0].style.backgroundColor = "lightgreen";
    arr[width*height-1].style.backgroundColor = "blue";
    //changed=true;
  }
  
}

//console.log((!arr[a+(width-1)]||a%width<1||arr[a+(width-1)].style.backgroundColor==wallColor))
//console.log(find(a,-1,-1,wallColor))
changed=false
    oneMore=true;
    for(let i=0;i<1000;i++){
      if(previousMoves.length)
     // if(!changed)                  
    gen();
      else{
        if(oneMore){
      gen();
          oneMore=false;
        }
      }
     // }
     // else{break}      
    }
//var a1=16;
//console.log(a1+(width-1))
//console.log(find(a1,-1,-1,wallColor))
//console.log(find(a1,-1,-1,wallColor))
//for(let a=width;a<width*(height-1);a++){
//console.log((!arr[a+(width+1)]||a%width>=width-1||arr[a+(width+1)].style.backgroundColor==wallColor)==find(a,1,-1,wallColor))
//}
//      
var times=[]
var time = 0;
var total=0
var scoreText = document.createElement('div');
//scoreText.style.position = 'absolute';
//scoreText.style.right = '0px';
//scoreText.style.top = '0px';
//scoreText.style.color="red"
scoreText.style.fontSize = '50px';
scoreText.innerHTML = 'Score: ' + time;
document.body.appendChild(scoreText);
function updateScore() { 
 time+=.01;
  scoreText.innerHTML =''
  var n=1
  total=0
  for(let i=0;i<times.length;i++){
    scoreText.innerHTML += n+':'+times[i]+', '
    //console.log(times)
    total+=Number(times[i])
    n++
  }
  total+=Number(time)
  total=total.toFixed(2);
 scoreText.innerHTML += n+':' + time.toFixed(2)+', '+'total:'+total
   if(times.length>0){
     scoreText.innerHTML += ', average:'+Math.round((total/times.length)*1000)/1000;
   }
}
setInterval(updateScore, 10);
