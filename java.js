// WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);


let tg = window.Telegram.WebApp;
let user = tg.WebAppUser.id;

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

tg.expand();

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Siz Abduraxmonov Abduazizga ovoz berdingiz!");
		item = "user1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function () {
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Siz Axtamov Akbarga ovoz berdingiz!");
		item = "user2";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
	fetch('https://api.ipify.org?format=json', {
		method:"GET"})
		.then(response => response.json())
		.then(data => {
			tg.sendData(`${data.ip} ${item} ${user}`);
		});
});

let usercard = document.getElementById("usercard");
// let src = document.getElementById("image");

let p = document.createElement("p");
// let img = document.createElement("img");


p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

// img.src = user.photo_url


usercard.appendChild(p);
// src.appendChild(img);
