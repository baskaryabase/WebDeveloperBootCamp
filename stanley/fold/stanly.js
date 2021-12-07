function myFunction() {
    document.getElementById('ptag').innerHTML = Date()
    document.getElementById('ptag').style.color = 'green'
    document.getElementById('img').src = 'https://picsum.photos/300'
}
setInterval(function () {
    let color;
    let bodyColor = document.body.style.background;
    if (bodyColor === 'red') {
        color = 'green'
    } else if (bodyColor === 'green') {
        color = 'orange'
    } else {
        color = 'red'
    }
    document.body.style.background = color
}, 1000)