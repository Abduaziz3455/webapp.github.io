// WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);


let tg = window.Telegram.WebApp;

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Siz Abduraxmonov Abduazizga ovoz berdingiz!");
		item = "user1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Siz Axtamov Akbarga ovoz berdingiz!");
		item = "user2";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    tg.sendData(`${data.ip} ${item}`);
  });
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 
