const userName = document.getElementById("userName")
const attentionString = document.getElementById("string")
const date = document.getElementById("date")
const woman = document.getElementById("woman")
const man = document.getElementById("man")
const education = document.getElementById("education")
const selectForm = document.getElementById("select")
const modalWindow = document.getElementById("window")
let gender

function getGender() {
    woman.checked ? gender = 'женщина' : gender = 'мужчина'; 
    return gender
}


selectForm.addEventListener("click", () =>{
    getGender()

    if (userName.value === ""){
        userName.style.border = "2px solid red";
        attentionString.style.display = "block";
    } else {
        modalWindow.style.display = "block"
        modalWindow.innerHTML = 
        `<p>
        Ваше ФИО: ${userName.value}<br/>
        Вы родились ${date.value}<br/>
        Вы ${gender}<br/>
        У вас ${education.value} образование
        </p>`
    }
});


