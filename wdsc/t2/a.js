let time = 5
let intervalId;
function kaiten() {
    document.getElementById("body").style.transform = " rotate(360deg)"
    document.getElementById("body").style.transition = " all 5s"
    document.querySelector('.img').style.transform = " rotate(360000deg)"
    document.querySelector('.img').style.transition = " all 5s"
    document.querySelector('.con').style.transform = " rotate(-360000deg)"
    document.querySelector('.con').style.transition = " all 5s"
    document.querySelector('.footer').style.transform = " rotate(360000deg)"
    document.querySelector('.footer').style.transition = " all 5s"
    document.querySelector('.mo').style.transform = " rotate(-360000deg)"
    document.querySelector('.mo').style.transition = " all 5s"

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
