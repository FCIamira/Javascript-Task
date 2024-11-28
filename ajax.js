document.getElementById("getUsers").addEventListener("click", getAllUsers);

function getAllUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            const tableBody = document.querySelector("#userTable tbody");
            tableBody.innerHTML = ""; 
            users.forEach(function(user) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td><button onclick="viewDetails(${user.id})">View Details</button></td>
                `;
                tableBody.appendChild(row);
            });
        }
    };
}

function viewDetails(userId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var user = JSON.parse(xhr.responseText);
            document.getElementById("name").textContent = user.name;
            document.getElementById("email").textContent = user.email;
            document.getElementById("website").textContent = user.website;
            document.getElementById("address").textContent = `${user.address.street}, ${user.address.city}`;
        }
    };
}
