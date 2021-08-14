function hoist(){
    for (let i = 60; i > 0; i--) {
        let timer = (60 - i) * (30)
        setTimeout(() => {
            console.log(timer, i)
            document.querySelector("#flag").style.top = i + "vh";
        }, timer)
    }
}
function unHoist() {
    document.querySelector("#flag").style.top = "60vh"
}