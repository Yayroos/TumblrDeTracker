import('node-fetch');


function unTrack(url){
    fetch(url)
    .then(response => {
        //console.log(response);
        return response.text();
    })
    .then(body => {
        //console.log(body);
        let url = body.match(/"(https:\/\/www\.tumblr\.com\/.*?)"/g);
        url = url[0];
        url = url.substring(1, url.indexOf('?'));
        console.log(url);
        let [ https, blank, tumblrcom, username, postID, postText] = url.split("/");
        //[0]https: [1] [2]www.tumblr.com [3]username [4]postID [5]postText
        let newURL = https + "//" + username + ".tumblr.com/" + postID + "/" + postText;
        console.log(newURL);
        return newURL;
    });
}