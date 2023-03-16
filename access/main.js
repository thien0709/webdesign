const btn = document.querySelectorAll(".login button");
const heart = document.querySelectorAll(".pic .heart");
const count = document.querySelectorAll(".heart h6");
let arr = [10];
for(let i = 0;i<10;i++){
    arr[i]=0;
}
for(let i=0;i<heart.length;i++){
    heart[i].onclick = function(){
        arr[i]++;
        count[i].innerHTML = arr[i];
    }
}