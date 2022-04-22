const page_list = ["#home", "#king", "#queen", "#jack", "#ace", "#two-three", "#joker", "#pre-deck-1", "#pre-deck-2", "#deck", "#post-deck"];
const max_pages = page_list.length;
var current_page = 0;

function init(){
    for(let i=1; i<max_pages; ++i)
        document.querySelector(page_list[i]).style.transform="translateX(2000px)";
}
function goNext(){
    if(current_page===max_pages-1) return;
    document.querySelector(page_list[current_page]).style.transform="translateX(-2000px)";
    current_page++;
    document.querySelector(page_list[current_page]).style.transform="translateX(0)";
}
function goPrevious(){
    if(current_page===0) return;
    document.querySelector(page_list[current_page]).style.transform="translateX(2000px)";
    current_page--;
    document.querySelector(page_list[current_page]).style.transform="translateX(0)";
}

init();