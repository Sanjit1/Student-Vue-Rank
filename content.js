window.addEventListener('load', function () {
    var hiddenShit = document.getElementsByClassName("hide");
    var hiddenShitList = [].slice.call(hiddenShit);
    hiddenShitList.forEach(function (entry) {
        entry.classList.remove("hide");
    });
    var hiddenShit = document.getElementsByClassName("hidden");
    var hiddenShitList = [].slice.call(hiddenShit);
    hiddenShitList.forEach(function (entry) {
        entry.classList.remove("hidden");
    });
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://sanjit.wtf/pics/stuVueIcon.png';
    document.head.appendChild(link);
    footer = document.getElementById("ctl00_ctl00_PXPFooter");
    systemLinksUl = footer.getElementsByClassName("action-bar")[0].getElementsByClassName("system-links")[0];
    sanjitWtfA = document.createElement("a");
    sanjitWtfA.href = "https://www.sanjit.wtf/";
    sanjitWtfA.id = "sanjitSaysCheese";
    sanjitWtfA.innerHTML = "Messed around by Sanjit";
    sanjitWtfLi = document.createElement("li");
    sanjitWtfLi.appendChild(sanjitWtfA);
    systemLinksUl.appendChild(sanjitWtfLi);
})

