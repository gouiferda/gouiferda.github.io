var contentBlock = document.getElementById('content');
var navItems = document.getElementById('navItems');
var pagesLinks = document.getElementById('pagesLinks');
var socialLinks = document.getElementById('socialLinks');


//routing

//get page url from outside
var pageGet = findGetParameter('p')
setPage(pageGet)

//load menues
loadMenus();
loadSocialLinks();



//var post = new Post('1','Title here','Content here','1','Nov 10');
//contentBlock.innerHTML = getSinglePostMin(post);
