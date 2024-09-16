// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
const butt = document.getElementById("getUserButton");
let userCity = document.getElementById("userCity");

butt.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const userName = document.getElementById("userNameInput").value;
       data.forEach(user => {
       console.log(userName);
        //console.log(user.name === userName);
        if(user.name === userName) {
            console.log("Into if block")
            userCity.textContent = user.address.city;
        }
       });
    })
})
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js