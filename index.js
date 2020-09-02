const userName = document.getElementById("userName")
const userAge = document.getElementById("userAge")
const attentionString = document.getElementById("string")
const date = document.getElementById("date")
const woman = document.getElementById("woman")
const man = document.getElementById("man")
const education = document.getElementById("education")
const selectForm = document.getElementById("select")
const modalWindow = document.getElementById("window")
const mnemonic = document.getElementById("mnemonic")
console.log(mnemonic);
let gender

function getGender() {
    woman.checked ? gender = 'женщина' : gender = 'мужчина'; 
    return gender
}

userAge.addEventListener("keyup", () =>{
    if (!Number(userAge.value)){
        userAge.style.border = "2px solid red"
    } else {
        userAge.style.border = "2px solid green"}
})


selectForm.addEventListener("click", () =>{
    getGender()

    if (userName.value === ""){
        userName.style.border = "2px solid red";
        attentionString.style.display = "block";
    } else {
        modalWindow.style.display = "block"
        modalWindow.innerHTML += 
        `<p>
        Ваше ФИО: ${userName.value}<br/>
        Вы родились ${date.value}<br/>
        Вы ${gender}<br/>
        У вас ${education.value} образование
        </p>`
    }
});

mnemonic.addEventListener("click", () =>{
    modalWindow.style.display = "none"
})

