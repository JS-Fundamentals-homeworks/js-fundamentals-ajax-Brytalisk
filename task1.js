// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    const ulList = document.querySelector(".usersList"); // Вибір списку за класом
    //ulList.innerHTML = ""; 
    data.forEach(user => {
        const li = document.createElement("li"); 
        li.textContent = user.name; 
        ulList.appendChild(li); 
    });
})
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 
