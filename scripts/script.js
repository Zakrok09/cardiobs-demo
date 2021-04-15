let button1 = document.getElementById("button-appointment");
let button2 = document.getElementById("button-doctors");
let button3 = document.getElementById("button-covid19");
let infobox = document.getElementById("information-box-text");

button1.addEventListener('click', function() {
    button1.style.backgroundColor = "#E63946";
    button2.style.backgroundColor = "#528cb1";
    button3.style.backgroundColor = "#528cb1";

    infobox.style.textAlign = "center";
    infobox.innerText = "За да запишете час се обадете на 0876/999-539"
});

button2.addEventListener('click', function() {
    button1.style.backgroundColor = "#528cb1";
    button2.style.backgroundColor = "#E63946";
    button3.style.backgroundColor = "#528cb1";

    infobox.style.textAlign = "left";
    infobox.innerHTML = "Д-р Мартина Стоянова Ралева <br> Д-р Живомир Кирилов Панайотов <br> Д-р Едуард Ованес Мекенян";
});

button3.addEventListener('click', function() {
    button1.style.backgroundColor = "#528cb1";
    button2.style.backgroundColor = "#528cb1";
    button3.style.backgroundColor = "#E63946";
    
    infobox.style.textAlign = "justify";
    infobox.innerText = "Прегледите в Кардиологичен Център Бургас са разпределени през голям интервал, осигуряващ възможност за проветряване и дезинфекция на помещенията и апаратурата след всеки преглед, както и избягване засичането на пациентите един с друг."
});

