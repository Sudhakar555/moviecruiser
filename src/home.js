import { renderhtml1 } from './renderhtml1.js';
import { search as search1 } from './search.js';
import {display} from './display';
export function home(search) {
    search.html(renderhtml1);
    $("#submitbutton").click(function() {
        var a = search1($("#inputbar").val(), (err, result) => {
            display(result,$("#display"));
        });
    });
}