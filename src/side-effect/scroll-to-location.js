// LICENSE : MIT
"use strict";
export function scrollToLocationHash(id) {
    if (!id) {
        return;
    }
    var element = document.getElementById(id);
    element.scrollIntoView();
}