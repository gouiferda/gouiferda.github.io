function test(){
    document.getElementById("content").innerHTML = 'what';
    document.title = 'title test 0';
    window.history.pushState({"html":'NONE',"pageTitle":'title test 1'},"", 'index.html?dd=dd');
}

window.onpopstate = function(e){
    if(e.state){
        // document.getElementById("content").innerHTML = e.state.html;
        // document.title = e.state.pageTitle;
        console.log( e.state);
    }
};