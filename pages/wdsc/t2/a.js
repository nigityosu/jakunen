let time = 5
let intervalId;
function kaiten() {
    document.getElementById("body").style.transform = " rotate(360000000deg)"
    document.getElementById("body").style.transition = " all 100000000s"
    document.querySelector('.img').style.transform = " rotate(36000000000deg)"
    document.querySelector('.img').style.transition = " all 10000000000s"
    document.querySelector('.con').style.transform = " rotate(-36000000000900deg)"
    document.querySelector('.con').style.transition = " all 10000000000s"
    document.querySelector('.footer').style.transform = " rotate(36000000000deg)"
    document.querySelector('.footer').style.transition = " all 1000000000s"
    document.querySelector('.mo').style.transform = " rotate(-3600000000000deg)"
    document.querySelector('.mo').style.transition = " all 1000000000000s"

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        time--;
        console.log(time);
        if (time <= 0) {
            clearInterval(intervalId);
        }
    }, 1000);
    if (time == 0) {
        // キャッシュを無視してページを強制的にリロードします
        location.reload(true);
    }
}
