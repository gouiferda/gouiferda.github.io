function getBlock(className, content) {
    var res = '';
    res += '<div class=\"' + className + '\">';
    res += content;
    res += '</div>';
    return res;
}

function getSinglePostMin(post) {
    var contentText = '';
    contentText += getBlock('row mb-2',
        getBlock('col-md-12',
            getBlock('row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative',
                getBlock('col p-4 d-flex flex-column position-static',
                    '<strong class="d-inline-block mb-2 text-primary">Tag</strong><h3 class="mb-0">'+post.title+'</h3><div class="mb-1 text-muted">'+post.datetime+'</div><p class="card-text mb-auto">'+post.content+'</p><a href="#" class="stretched-link">Continue reading</a>'
                )
                +
                getBlock('col-auto d-none d-lg-block',
                    '<svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>'
                )
            )
        )
    );
    return contentText;
}

function getFormatedPageContent(pageFound){
    var contentText = '';
    contentText += getBlock('pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center',
        getBlock('display-5',
        '<h1 class="display-5">'+pageFound.title+'</h1>'+
        ' <p class="lead">'+pageFound.content+'</p>'
        )
    );
    return contentText;
}