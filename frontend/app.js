const modal = document.getElementById("diaryModal");
const modalDate = document.getElementById("modalDate");
const diaryText = document.getElementById("diaryText");
const saveBtn = document.getElementById("saveDiary");

let selectedDate = null;
let selectedEmoji = "";

document.querySelectorAll("button").forEach(btn => {

btn.addEventListener("click", ()=>{

alert(btn.innerText + " 준비중!");

});

});

document
.querySelectorAll(".emoji")
.forEach(btn=>{

  btn.addEventListener("click",()=>{

    selectedEmoji = btn.textContent;

  });

});