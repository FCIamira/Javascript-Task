var inputName = document.getElementById("inputName");
var inputAge = document.getElementById("inputAge");
var spanName = document.getElementById("spanName");
var spanAge = document.getElementById("spanAge");
var twoInput = document.getElementsByClassName("tow");
var spanGender = document.getElementById("spanGender");
var genderRadios = document.getElementsByName("Gender");
for (var i = 0; i < twoInput.length; i++) {
    twoInput[i].addEventListener("focus", function () {
        this.style.border = "1px solid blue";
    });
    twoInput[i].addEventListener("blur", function () {
        this.style.border = "1px solid gray";
    });
}
function submitbut(event) {
    event.preventDefault();

    var genderRadios = document.getElementsByName("Gender");
    if (inputName.value.length < 3) {
        inputName.style.border = "1px solid red";
        spanName.textContent = "Name must be at least 3 characters.";
        spanName.style.display = "block";
        return;
    } else {
        inputName.style.border = "1px solid blue";
        spanName.style.display = "none";
    }

    if (inputAge.value === "" || inputAge.value < 18) {
        inputAge.style.border = "1px solid red";
        spanAge.textContent = "Age must be >18.";
        spanAge.style.display = "block";
        return;
    } else {
        inputAge.style.border = "1px solid blue";
        spanAge.style.display = "none";
    }

    var genderSelected = false;
    var genderImage = "";
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            genderSelected = genderRadios[i].value;
            genderImage = genderSelected === "female" ? "./img/1.jpg" : "./img/2.jpg";
            break;
        }
    }

    if (!genderSelected) {
        spanGender.textContent = "Please select a gender.";
        spanGender.style.display = "block";
        return;
    } else {
        spanGender.style.display = "none";
    }

    var userData = {
        name: inputName.value,
        age: inputAge.value,
        gender: genderSelected,
        genderImage: genderImage 
    };

    Cookies.set('userData', JSON.stringify(userData), { expires: 7, path: '' });

    window.location.href = "./cookies.html"; 
}


window.onload = function () {
    var storedUserData = Cookies.get('userData');
    var genderRadios = document.getElementsByName("Gender");
    
    if (storedUserData) {
        var user = JSON.parse(storedUserData);
        var ul = document.getElementById("ul");

        var genderImage = user.gender === "female" ? "./img/1.jpg" : "./img/2.jpg";

        var content = `<li style="display:flex;">
                       <div>
                        <strong>Gender:</strong> <img src="${genderImage}" 
                        alt="${user.gender}" width="400">
                        </div>
                        <div>
                        <strong>your Name is</strong> ${user.name}, 
                        <strong>&& your Age is</strong> ${user.age}, 
                        </div>
                    </li>`;
        
        ul.innerHTML = content; 
    } else {
        ul.innerHTML = "<li>No user data found.</li>";
    }
};
