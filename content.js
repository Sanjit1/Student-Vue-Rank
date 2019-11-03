window.addEventListener('load', function () {
    var hiddenShit = document.getElementsByClassName("hide");
    var hiddenShitList = [].slice.call(hiddenShit);
    hiddenShitList.forEach(function (entry) {
        entry.classList.remove("hide");
    });
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = './icon.png';
    document.head.appendChild(link);
})

