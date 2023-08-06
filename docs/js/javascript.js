var list = 'alpha,bravo,charlie'.split(',');
for (var i in list) {
    var e = document.createElement('div');
    e.id = list[i];
    e.className = "customClass";
    e.innerHTML = list[i];
    document.body.appendChild(e);
}