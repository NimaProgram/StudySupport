const maximam_button = document.getElementById("div-button");

let n_max = 0; //maximize()に使う変数

const maximize = () => { //最大化ボタンの処理(オンクリック)
    if (n_max % 2 == 0){
        document.body.requestFullscreen();
    }else if (n_max % 2 == 1){
        document.exitFullscreen();
    }
    n_max ++;
}

let n_hid_max = 0; //hidingMaxim()に使う変数

const hidingMaxim = () => { //最大化ボタンを隠す処理(オンクリック)
    if (n_hid_max % 2 == 0){
        maximam_button.style.opacity = 0;
    }else if (n_hid_max % 2 == 1){
        maximam_button.style.opacity = 1;
    }
    n_hid_max ++;
}

