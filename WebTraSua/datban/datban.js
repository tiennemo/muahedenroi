let x=0;
let nguoi=0;
document.getElementsByClassName("giam")[0].onclick = function() {
    if(x>0){  
    x -= 1;
    }
    document.getElementsByClassName("a")[0].textContent = x;
    document.getElementsByClassName("a1")[0].innerHTML=x;
  };
  
  document.getElementsByClassName("tang")[0].onclick = function() {
    x += 1;
    document.getElementsByClassName("a")[0].textContent = x;
    document.getElementsByClassName("a1")[0].innerHTML = x;
  };

let a=0;
let ngay=0;
document.getElementsByClassName("giam1")[0].onclick = function() {
  if(x>0){  
  x -= 1;
  }
  document.getElementsByClassName("b")[0].textContent = x;
  document.getElementsByClassName("ngay")[0].innerHTML=x;
};
document.getElementsByClassName("tang1")[0].onclick = function() {
  if(x<=30){
  x += 1;
  }
  document.getElementsByClassName("b")[0].textContent = x;
  document.getElementsByClassName("ngay")[0].innerHTML = x;
};

let b=0;
let thang=0;
document.getElementsByClassName("giam2")[0].onclick = function() {
  if(b>0){  
  b -= 1;
  }
  document.getElementsByClassName("c")[0].textContent = b;
  document.getElementsByClassName("thang")[0].innerHTML=b;
};
document.getElementsByClassName("tang2")[0].onclick = function() {
  if(b<=11){
  b += 1;
  }
  document.getElementsByClassName("c")[0].textContent = b;
  document.getElementsByClassName("thang")[0].innerHTML = b;
};

let c=0;
let nam=2000;
document.getElementsByClassName("giam3")[0].onclick=function(){
  if(c>0){
    c -=1;
  }
  document.getElementsByClassName("d")[0].textContent=c;
  document.getElementsByClassName("nam")[0].innerHTML=c+nam;
}
document.getElementsByClassName("tang3")[0].onclick=function(){
  c+=1;
  document.getElementsByClassName("d")[0].textContent=c;
  document.getElementsByClassName("nam")[0].innerHTML=c+nam;
}