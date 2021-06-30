var weight = [35,38,42,45,43,34,36,41,48,32];
function weightaverage(){
  var sum=0
  for (let i = 0; i < weight.length; i++) {
    sum =sum+ weight[i];
    }
  var avg=sum/weight.length
  console.log(avg)
}

function setup() {
  createCanvas(400,400);
  weightaverage();
}

function draw() 
{
  background(30);
}

 

