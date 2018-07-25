var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");
var year = prompt('Сколько тебе лет?', '');

if (year < 18) {
  alert( 'Ты еще слишком мал!Доступ на сайт закрыт' );
  var index = window.location.href = 'index.html';
}

else if (year > 18) {
	var pass = prompt('Вы подписаны на рассылку?', '');
	  if (pass == 'да') {
    alert( 'Добро пожаловать!' );
  } else if (pass = "нет") {

  var dis = prompt  ('Вы согласны подписаться на рассылку?', '');
	  if (dis == 'да') {
    alert( 'Добро пожаловать!' );
  }
  else if (pass = "нет"){
  	alert( 'Вход запрещен!' )
  }
  } 
} 


function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}

function delItem(){
	myList.removeChild(story[0]);

	if(story.length == 0){
		popup.style.display = "block";
	}
}

function closePopupe() {
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopupe);