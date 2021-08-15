function hoist() {
    for (let i = 60; i >= 0; i--) {
        let timer = (60 - i) * (30)
        setTimeout(() => {
            console.log({ i })
            document.querySelector("#flag").style.top = i + "vh";
            if (i == 0) {

                setTimeout(() => {
                    document.getElementById('root').innerHTML = ""
                    document.getElementById('root').setAttribute("style", "background-image: url(" + "./independance.jpeg" + ");background-repeat: no-repeat;background-size:cover;width:100vw;height:100vh;");

                }, 2000)
            }
        }, timer)
    }
}

function unHoist() {
    document.querySelector("#flag").style.top = "60vh"
}