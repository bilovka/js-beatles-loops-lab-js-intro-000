// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr=[];
  for(var i=0;i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
var a=0;
var arr=[];
while(a<facts.length){
  arr.push(`${facts[a]}!!!`);
  a++;
}
return arr;
}

function iLoveTheBeatles(num){
  var arr=[];
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while(num<15);
  return arr;
}