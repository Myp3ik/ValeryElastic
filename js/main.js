function onLoad() {
    setLang(0); //English
}

function setLang(langId) {
    if (langId === 0) {
        $("#lang0").hide();
        $("#lang1").show();
        $("#lang2").show();
    } else if (langId === 1) {
        $("#lang0").show();
        $("#lang1").hide();
        $("#lang2").show();
    } else if (langId === 2) {
        $("#lang0").show();
        $("#lang1").show();
        $("#lang2").hide();
    }
}

var scenes = [
    "scene-iguana.html",
    "scene-grinch.html",
    "scene-romantic.html",
    "scene-pierrot.html",
    "scene-bourgeois.html",
    "scene-joker.html",
    "scene-tarzan.html"
];

function prevScene() {
    var pageName = window.location.pathname.split("/").pop();

    window.location.href = scenes[(scenes.length + scenes.indexOf(pageName) - 1) % scenes.length];
}

function nextScene() {
    var pageName = window.location.pathname.split("/").pop();

    window.location.href = scenes[(scenes.length + scenes.indexOf(pageName) + 1) % scenes.length];
}