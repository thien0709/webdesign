const change = document.querySelectorAll("#box h6");
const change1 = document.querySelector(".change");
for(let i =0;i<change.length;i++){
    change[i].onclick = function(){
        change1.classList.toggle("active");
    }
}