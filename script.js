const hour_value = document.getElementById("hour__num");
const min_value = document.getElementById("min__num");
const sec_value = document.getElementById("sec__num");

const bgc = document.getElementById("main");

let rd = [8, 40, 0] //読書開始時間 reading
let rdt = [0, 10, 0] //読書している時間 reading_time

let lst = [0, 50, 0] // 授業時間
let rtt = [0, 10, 0] // 休憩時間
let lct = [0, 45, 0] // 昼食時間

let ls1     = [9, 0, 0]     // 一時間目開始時間 lesson1
let rest1   = [9, 50, 0]    // 一時間目後休憩
let ls2     = [10, 0, 0]    // 二時間目開始時間 lesson2
let rest2   = [10, 50, 0]   // 二時間目後休憩
let ls3     = [11, 0, 0]    // 三時間目開始時間 lesson3
let rest3   = [11, 50, 0]   // 三時間目後休憩
let ls4     = [12, 0, 0]    // 四時間目開始時間 lesson4
let lunch   = [12, 50, 0]   // 昼食
let ls5     = [13, 35, 0]   // 五時間目開始時間 lesson5
let rest5   = [14, 25, 0]   // 五時間目後休憩
let ls6     = [14, 35, 0]   // 六時間目開始時間 lesson6
let ft      = [15, 25, 0]   // 自由時間 free_time

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i = 0;
let j = 0;
let k = 0;
let l = 0;
let m = 0;

const main = () => {
    // 現在のローカル時間が格納された、Date オブジェクトを作成する
    let date_obj = new Date();
    let hours = date_obj.getHours();
    let minutes = date_obj.getMinutes();
    let seconds = date_obj.getSeconds();

    let timer_hours = 0;
    let timer_minutes = 0;
    let timer_seconds = 0;

    let nt = [hours, minutes, seconds]; // 今の時間(配列) now_time
    
    let sum_nt = 0;
    sum_nt = nt[0]*3600+nt[1]*60+nt[2]; // 一日の経過秒数 sum_now_time

    // 8:40から朝読書開始。
    let sum_rd = 0; // 朝読書:一日経過秒数
    sum_rd = rd[0]*3600+rd[1]*60+rd[2]; // 31,200(秒)


    let sum_ls1 = 0; // 授業1:一日経過秒数
    sum_ls1 = ls1[0]*3600+ls1[1]*60+ls1[2];

    let sum_ls2 = 0; // 授業2:一日経過秒数
    sum_ls2 = ls2[0]*3600+ls2[1]*60+ls2[2];

    let sum_ls3 = 0; // 授業3:一日経過秒数
    sum_ls3 = ls3[0]*3600+ls3[1]*60+ls3[2];

    let sum_ls4 = 0; // 授業4:一日経過秒数
    sum_ls4 = ls4[0]*3600+ls4[1]*60+ls4[2];

    let sum_ls5 = 0; // 授業5:一日経過秒数
    sum_ls5 = ls5[0]*3600+ls5[1]*60+ls5[2];

    let sum_ls6 = 0; // 授業6:一日経過秒数
    sum_ls6 = ls6[0]*3600+ls6[1]*60+ls6[2];


    let sum_rest1 = 0; // 休憩時間1:一日経過秒数
    sum_rest1 = rest1[0]*3600+rest1[1]*60+rest1[2];
    let sum_rest2 = 0; // 休憩時間2:一日経過秒数
    sum_rest2 = rest2[0]*3600+rest2[1]*60+rest2[2];
    let sum_rest3 = 0; // 休憩時間3:一日経過秒数
    sum_rest3 = rest3[0]*3600+rest3[1]*60+rest3[2];
    let sum_rest5 = 0; // 休憩時間5:一日経過秒数
    sum_rest5 = rest5[0]*3600+rest5[1]*60+rest5[2];

    let sum_lunch = 0; // 昼食:一日経過秒数
    sum_lunch = lunch[0]*3600+lunch[1]*60+lunch[2];

    let sum_ft = 0; // 自由時間:一日経過秒数
    sum_ft = ft[0]*3600+ft[1]*60+ft[2];

    let result_hours = 0
    let result_minutes = 0
    let result_seconds = 0

    if (sum_rd <= sum_nt && sum_nt < sum_ls1){ // 朝読書
        result_hours = nt[0] - rd[0];
        result_minutes = rtt[1] - nt[1];
        result_seconds = sum_nt % 3600 % 60;
    }//ok

    if (sum_ls1 <= sum_nt && sum_nt < sum_rest1){ // １校時
        result_hours = lst[0] - (nt[0] - ls1[0]);
        result_minutes = lst[1] - ((sum_nt - 3600 * (ls1[0] + result_hours) - sum_nt%3600%60) / 60 - ls1[1]);
        result_seconds = sum_nt % 3600 % 60;
    }//ok

    if (sum_rest1 <= sum_nt && sum_nt < sum_ls2){ // 休憩１
        result_hours = lst[0] - (nt[0] - rest1[0]);
        result_minutes = rtt[1] - ((sum_nt - 3600 * (rest1[0] + result_hours) - sum_nt%3600%60) / 60 - rest1[1]);
        result_seconds = sum_nt % 3600 % 60;
    }//ok

    if (sum_ls2 <= sum_nt && sum_nt < sum_rest2){ // ２校時
        result_hours = lst[0] - (nt[0] - ls2[0]);
        result_minutes = lst[1] - ((sum_nt - 3600 * (ls2[0] + result_hours) - sum_nt%3600%60) / 60 - ls2[1]);
        result_seconds = sum_nt % 3600 % 60;
    }//ok

    if (sum_rest2 <= sum_nt && sum_nt < sum_ls3){ // 休憩２
        result_hours = lst[0] - (nt[0] - rest2[0]);
        result_minutes = rtt[1] - ((sum_nt - 3600 * (rest2[0] + result_hours) - sum_nt%3600%60) / 60 - rest2[1]);
        result_seconds = sum_nt % 3600 % 60;
    }//ok

    if (sum_ls3 <= sum_nt && sum_nt < sum_rest3){ // ３校時
        result_hours = lst[0] - (nt[0] - ls3[0]);
        result_minutes = lst[1] - ((sum_nt - 3600 * (ls3[0] + result_hours) - sum_nt%3600%60) / 60 - ls3[1]);
        result_seconds = sum_nt % 3600 % 60;
    }

    if (sum_rest3 <= sum_nt && sum_nt < sum_ls4){ // 休憩３
        result_hours = lst[0] - (nt[0] - rest3[0]);
        result_minutes = rtt[1] - ((sum_nt - 3600 * (rest3[0] + result_hours) - sum_nt%3600%60) / 60 - rest3[1]);
        result_seconds = sum_nt % 3600 % 60;
    }

    if (sum_ls4 <= sum_nt && sum_nt < sum_lunch){ // ４校時
        result_hours = lst[0] - (nt[0] - ls4[0]);
        result_minutes = lst[1] - ((sum_nt - 3600 * (ls4[0] + result_hours) - sum_nt%3600%60) / 60 - ls4[1]);
        result_seconds = sum_nt % 3600 % 60;
    }

    if (sum_lunch <= sum_nt && sum_nt < sum_ls5){ // 昼食
        result_hours = Math.floor((sum_nt - sum_lunch) / 3600);
        if (nt[1] < lunch[1]) {
            result_minutes = (lct[1] - ( 60 - lunch[1] )) - nt[1]; // 35
        }else {
            result_minutes = lct[1] - ( nt[1] - lunch[1] ); // 45 - ( 56 - 50 )
        }
        result_seconds = sum_nt % 3600 % 60;
    }

    if (sum_ls5 <= sum_nt && sum_nt < sum_rest5){ // ５校時
        result_hours = lst[0] - (nt[0] - ls5[0]);
        result_minutes = lst[1] - ((sum_nt - 3600 * (ls5[0] + result_hours) - sum_nt%3600%60) / 60 - ls5[1]);
        result_seconds = sum_nt % 3600 % 60;
    }

    if (sum_rest5 <= sum_nt && sum_nt < sum_ls6){ // 休憩５
        result_hours = (sum_nt - sum_nt % 3600) / 3600 - rest5[0];
        result_minutes = rtt[1] - ((sum_nt - 3600 * (rest5[0] + result_hours) - sum_nt%3600%60) / 60 - rest5[1]);
        result_seconds = sum_nt % 3600 % 60;
    }

    if (sum_ls6 <= sum_nt && sum_nt < sum_ft){ // ６校時
        result_hours = (sum_nt - sum_nt % 3600) / 3600 - ls6[0];
        result_minutes = lst[1] - ((sum_nt - 3600 * (ls6[0] + result_hours) - sum_nt%3600%60) / 60 - ls6[1]);
        result_seconds = sum_nt % 3600 % 60;
    }

    if (sum_ft <= sum_nt){ // 自由時間
        result_hours =  24 - ft[0] + rd[0] - ((sum_nt - sum_nt % 3600) / 3600 - ft[0]) - 1;
        result_minutes = rd[1] - ft[1] - ((sum_nt - 3600 * (ft[0] + ((sum_nt - sum_nt % 3600) / 3600 - ft[0])) - sum_nt%3600%60) / 60 - ft[1]);
        result_seconds = sum_nt % 3600 % 60;
    }
    
    if (0 <= sum_nt && sum_nt < sum_rd){
        result_hours = (rd[0] - nt[0])
        result_minutes = (rd[1] - nt[1])
        result_seconds = (nt[2])
    }

    // result_hours = (sum_nt - sum_nt % 3600) / 3600 - rd[0];
    // result_minutes = (sum_nt - 3600 * (rd[0] + result_hours) - sum_nt%3600%60) / 60 - rd[1];
    // result_seconds = sum_nt % 3600 % 60;

    // sum_nt / 3600 = x + 余った時間
    // x = sum_nt / 3600 - 余った時間
    // x * 3600 = sum_nt - 余った時間*3600

    // result_hours = nt[0] - rd[0]
    // result_minutes = nt[1] - rd[1]
    // result_seconds = nt[2] - rd[2]

    if (sum_rd <= sum_nt && sum_nt < sum_ls1 && a == 0 ){
        bgc.style.background = "linear-gradient(40deg,#37562f, #ffffff, #205093)";
        a ++;
    }

    if (sum_ls1 <= sum_nt && sum_nt < sum_rest1 && b == 0){
        bgc.style.background = "linear-gradient(40deg,#450b0b, #841723, #140303)";
        b ++;
    }

    if (sum_rest1 <= sum_nt && sum_nt < sum_ls2 && c == 0){
        bgc.style.background = "linear-gradient(40deg,#142919, #1a492d, #093a35)";
        c ++;
    }

    if (sum_ls2 <= sum_nt && sum_nt < sum_rest2 && d == 0){
        bgc.style.background = "linear-gradient(40deg,#450b0b, #841723, #140303)";
        d ++;
    }

    if (sum_rest2 <= sum_nt && sum_nt < sum_ls3 && e == 0){
        bgc.style.background = "linear-gradient(40deg,#142919, #1a492d, #093a35)";
        e ++;
    }

    if (sum_ls3 <= sum_nt && sum_nt < sum_rest3 && f == 0){
        bgc.style.background = "linear-gradient(40deg,#450b0b, #841723, #140303)";
        f ++;
    }

    if (sum_rest3 <= sum_nt && sum_nt < sum_ls4 && g == 0){
        bgc.style.background = "linear-gradient(40deg,#142919, #1a492d, #093a35)";
        g ++;
    }

    if (sum_ls4 <= sum_nt && sum_nt < sum_lunch && h == 0){
        bgc.style.background = "linear-gradient(40deg,#450b0b, #841723, #140303)";
        h ++;
        console.log("lunch")
    }

    if (sum_lunch <= sum_nt && sum_nt < sum_ls5 && i == 0){
        bgc.style.background = "linear-gradient(40deg,#85cdee, #3683ff, #ffa348)";
        i ++;
    }

    if (sum_ls5 <= sum_nt && sum_nt < sum_rest5 && j == 0){
        bgc.style.background = "linear-gradient(40deg,#450b0b, #841723, #140303)";
        j ++;
    }

    if (sum_rest5 <= sum_nt && sum_nt < sum_ls6 && k == 0){
        bgc.style.background = "linear-gradient(40deg,#142919, #1a492d, #093a35)";
        k ++;
    }

    if (sum_ls6 <= sum_nt && sum_nt < sum_ft && l == 0) {
        bgc.style.background = "linear-gradient(40deg,#450b0b, #841723, #140303)";
    }
    
    if (sum_ft <= sum_nt || sum_nt < sum_rd && m == 0){
        bgc.style.background = "linear-gradient(40deg,#142919, #1a492d, #093a35)";
        m ++;
    }




    if (result_minutes < 0){result_minutes += 60}





    hour_value.textContent = result_hours;
    min_value.textContent = result_minutes - 1;
    sec_value.textContent = 59 - result_seconds;
}

setInterval(main,1000/60)