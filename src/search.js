export function search(x, cb) {
        var myData;
        var req = new XMLHttpRequest();
        req.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=d4b6a7a60118da99b67c2a169611ace6&language=en-US&query=' + x + '&page=1&include_adult=false');
        req.onload = function() {
            myData = JSON.parse(req.responseText);
        	cb(null, myData);
        };
        req.send();
}