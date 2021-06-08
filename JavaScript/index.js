function hide(id) {
    var e = document.getElementById(id);
    e.style.display = 'none';
}

function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none') {
        e.style.display = 'block';
    }
    else {
        e.style.display = 'none';
    }
    // could also be expressed like this: 
    //e.style.display = e.style.display === 'none' ? 'block' : 'none'; 
}