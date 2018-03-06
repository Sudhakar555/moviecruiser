export function display(myData, displayelem) {
    displayelem.html('');
        
    for (let i = 0; i < myData.results.length; i++) {
        if (i % 4 == 0)
            displayelem.append(`<div class="row">\n`);
        let text2 = `<div class="col-sm-3">\n<div class="card">\n<div class="card-image waves-effect waves-block waves-light">\n<img class="activator" src="https://image.tmdb.org/t/p/w300` +
            myData.results[i].poster_path + `">\n<a class="btn halfway-fab modal-trigger waves-effect waves-light yellow" href="#modal4" id="` + myData.results[i].title + `"><i class="material-icons" id="` + myData.results[i].title + `">add</i></a></div>\n<div class="card-content">\n<span class="card-title activator grey-text text-darken-4">` + myData.results[i].title + `<i class="material-icons right">
            more_vert</i></span></div><div class="card-reveal">\n
            <span class="card-title grey-text text-darken-4">` + myData.results[i].title + `<i class="material-icons right">close</i></span>
            <p><br>` + myData.results[i].overview + `<br><br>Rating: ` + myData.results[i].vote_average + `/10</p>\n
            </div>`;
        text2 += "</div>\n</div>\n";
        displayelem.append(text2);
        if (i % 4 == 3)
            displayelem.append(`</div>\n`);
            
    }
}