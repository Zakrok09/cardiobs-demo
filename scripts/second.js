let buttondeinost1 = document.getElementById("deinost-pregledi-button");
let buttondeinost2 = document.getElementById("deinost-konsultaciq-button");
let buttondeinost3 = document.getElementById("deinost-diagnostika-button");
let infoboxdeinost = document.getElementById("deinost-infromation-box");

buttondeinost1.addEventListener('click', function() {
    buttondeinost1.style.backgroundColor = "#c4dcdd";
    buttondeinost2.style.backgroundColor = "#eff8f8";
    buttondeinost3.style.backgroundColor = "#eff8f8";

    infoboxdeinost.innerHTML = "<ul><li>Амбулаторни прегледи</li><li>Предоперативни прегледи</li><li>Прегледи, включващи:<ul><li>ЕКГ</li><li>Ехокардиография</li><li>Работна ЕКГ проба, определяща коронарен резерв и функционален капацитет</li><li>Холтер ЕКГ 24-48 часов;</li><li>Холтер ЕКГ за дългосрочно, самостоятелно ползване и възможност за дистанционно разчитане на резултатите</li></ul></li></ul>";
})

buttondeinost2.addEventListener('click', function() {
    buttondeinost1.style.backgroundColor = "#eff8f8";
    buttondeinost2.style.backgroundColor = "#c4dcdd";
    buttondeinost3.style.backgroundColor = "#eff8f8";

    infoboxdeinost.innerHTML = "<ul><li>Преценка необходимостта от провеждане на коронарография</li><li>Оценка на клапни пороци</li><li>Преценка необходимостта от кардиохирургично лечение</li><li>Други Консултации</li></ul>";
})

buttondeinost3.addEventListener('click', function() {
    buttondeinost1.style.backgroundColor = "#eff8f8";
    buttondeinost2.style.backgroundColor = "#eff8f8";
    buttondeinost3.style.backgroundColor = "#c4dcdd";

    infoboxdeinost.innerHTML = "<ul><li>Диагностика, проследяване и лечение на ритъмни и проводни нарушения</li></ul>";
})

//#deobfuscated code lmao