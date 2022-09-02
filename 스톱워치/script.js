let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const span_minute = document.getElementById("minute");
const span_second = document.getElementById("second");
const span_tenMillis = document.getElementById("tenMillis");
const btn_start = document.getElementById("btn_start");
const btn_stop = document.getElementById("btn_stop");
const btn_reset = document.getElementById("btn_reset");

// 10ms마다 수행 : 타이머 증가
function operTimer(){

    // ms값 증가 (0~99)표시
    tenMillis++;
    span_tenMillis.textContent = tenMillis < 10 ? `0${tenMillis}`: tenMillis;

    // 10*100ms = 1s : ms단위를 00으로 초기화하고, second값을 증가시킴
    if(tenMillis > 99){
        tenMillis = 0;
        span_tenMillis.textContent = `0${tenMillis}`;

        seconds++;
        span_second.textContent=seconds < 10 ? `0${seconds}`: seconds;
    }

    // 60s = 1m : second값을 00으로 초기화하고, minute값을 증가시킴
    if(seconds > 59){
        seconds = 0;
        span_second.textContent = `0${seconds}`;

        minutes++;
        span_minute.textContent = minutes < 10 ? `0${minutes}`: minutes;
    }
}

btn_start.addEventListener("click", () => {
  // 10ms마다 특정 1번째 인자의 함수가 동작하도록 한다.
  setInterval(operTimer, 10);
});
