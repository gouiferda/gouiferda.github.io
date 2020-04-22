function issetObj(val) {
    return (val != null && (typeof val !== 'undefined'));
}

function issetElem(elemId) {
    return issetObj(document.getElementById(elemId));
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function readFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function loadMenus() {
    readFile("app/data/pages.json", function (text) {
        var data = JSON.parse(text);
        var outputNav = '';
        var outputPages = '';
        var link = '';
        var page = null;
        var inr = '';
        var idElem = '';
        for (var i = 0; i < data.length; i++) {
            page = data[i];
            (page.url != '') ? link = 'index.html?p=' + page.url : link = 'index.html'
            idElem =  (page.url != '') ? page.url : 'home'
            inr = 'id="' + idElem + '"  onclick=\'setPage("' + page.url + '")\'>' + page.title
            outputPages += '<li><a class="text-muted link" '+ inr + '</a></li>';
            if (page.url == 'contact') continue;
            outputNav += '<a class="p-2 text-dark link" '+ inr  + '</a>';
        }
        navItems.innerHTML = outputNav;
        pagesLinks.innerHTML = outputPages;
    });
}

function addClass(el,className)
{
    var element = document.getElementById(el.id);
    element.classList.add(className);
}

function removeClass(el,className)
{
    var element = document.getElementById(el.id);
    element.classList.remove(className);
}

function loadSocialLinks() {
    readFile("app/data/social-links.json", function (text) {
        var data = JSON.parse(text);
        var output = '';
        var link = '';
        for (var i = 0; i < data.length; i++) {
            link = data[i];
            output += '<li><a class="text-muted" href="' + link.url + '" target="_blank">' + link.title + '</a></li>';
        }
        socialLinks.innerHTML = output;
    });
}

function setPage(pageUrl) {
    readFile("app/data/pages.json", function (text) {
        if (pageUrl == null) pageUrl = ''
        var data = JSON.parse(text);
        var pageFound = null;
        var currentPage = null;
        var defaultPage = null;
        for (var i = 0; i < data.length; i++) {
            currentPage = data[i]
            if (currentPage.url == ''){
                defaultPage= currentPage;
            }
            if (pageUrl == currentPage.url) {
                pageFound = currentPage;
                break;
            }
        }
        if (!issetObj(defaultPage)) return;
        if (!issetObj(pageFound)) pageFound = defaultPage
        var title = pageFound.title
        var link = pageFound.url
        if (pageUrl != '') {link = 'index.html?p=' + pageUrl}
        else{ link = 'index.html'}
        contentBlock.innerHTML = getFormatedPageContent(pageFound);
        document.title = title;
        window.history.pushState({
            "pageUrl": pageUrl
        }, title, link);
    })

}

window.onpopstate = function(e){
    var pageUrlGotNavig = null
    if(e.state){
        pageUrlGotNavig = e.state;
        if (!issetObj(pageUrlGotNavig)) return
        setPage(pageUrlGotNavig.pageUrl)
    }
};

