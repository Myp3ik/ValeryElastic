function onLoad() {
    setLang(0); //Englsh
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

var scenes = ["scene-iguana.html", "scene-pierrot.html", "scene-joker.html", "scene-tarzan.html"];

function prevScene(current) {
    window.location.href = scenes[(scenes.length + current - 1) % scenes.length];
}

function nextScene(current) {
    window.location.href = scenes[(scenes.length + current + 1) % scenes.length];
}