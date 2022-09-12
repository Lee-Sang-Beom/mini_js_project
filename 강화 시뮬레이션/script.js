// 현 강화상태를 저장하는 변수
let current_reinforcement_level = document.getElementById('current_figure');

// 현 강화상태에서 성공 | 실패확률을 표현하는 변수
let sucess_rate_figure = document.getElementById('sucess_rate_figure');
let fail_rate_figure = document.getElementById('fail_rate_figure');

// '강화하기' 버튼
const try_btn = document.getElementById('try_btn');

// '리셋하기' 버튼
const reset_btn = document.getElementById('reset_btn');

// 단계별 성공확률
const suceess_rate_array = [100,95,90,85,80,75,70,60,50,40,35,30,25,20,15,10,5,2,1,1];

// 현재 강화단계
let current_level = 0;

// table 내, 강화시도 횟수 기록변수
let try_zero_to_one= document.getElementById('try_zero_to_one');
let try_one_to_two =document.getElementById('try_one_to_two');
let try_two_to_three = document.getElementById('try_two_to_three');
let try_three_to_four = document.getElementById('try_three_to_four');
let try_four_to_five = document.getElementById('try_four_to_five');
let try_five_to_six = document.getElementById('try_five_to_six');
let try_six_to_seven = document.getElementById('try_six_to_seven');
let try_seven_to_eight = document.getElementById('try_seven_to_eight');
let try_eight_to_nine = document.getElementById('try_eight_to_nine');
let try_nine_to_ten = document.getElementById('try_nine_to_ten');
let try_ten_to_eleven = document.getElementById('try_ten_to_eleven');
let try_eleven_to_twelve = document.getElementById('try_eleven_to_twelve');
let try_twelve_to_thirteen = document.getElementById('try_twelve_to_thirteen');
let try_thirteen_to_fourteen = document.getElementById('try_thirteen_to_fourteen');
let try_fourteen_to_fifteen = document.getElementById('try_fourteen_to_fifteen');
let try_fifteen_to_sixteen = document.getElementById('try_fifteen_to_sixteen');
let try_sixteen_to_seventeen = document.getElementById('try_sixteen_to_seventeen');
let try_seventeen_to_eighteen = document.getElementById('try_seventeen_to_eighteen');
let try_eighteen_to_nineteen = document.getElementById('try_eighteen_to_nineteen');
let try_nineteen_to_twenty = document.getElementById('try_nineteen_to_twenty');

function try_upgrade(){

    // 성공 시도하고자 하는 확률상태
    const suceess_try_rate =  suceess_rate_array[current_level];

    // 1~100 까지의 숫자 (확률)
    const random_value = Math.floor(Math.random()*100)+1;
    
    if(random_value >= 1 && random_value <= suceess_try_rate){
        // 강화 성공조건 : random_value가 sucess_try_rate 이하의 값을 가지는 경우
        if(parseInt(current_reinforcement_level.innerHTML) < 20){
            current_reinforcement_level.innerHTML = parseInt(current_reinforcement_level.innerHTML)+1;
            alert("강화 성공");
            current_level++;
        } else{
            alert("최대강화 상태입니다.");
        }
    } else{
        // 강화 실패조건 : random_value가 sucess_try_rate 초과의 값을 가지는 경우
        alert("강화 실패");

    }

    
}

function try_reset(){
    current_reinforcement_level.innerHTML = 0;
    current_level = 0;
    
}
/*add eventListener*/
try_btn.addEventListener('click',try_upgrade);
reset_btn.addEventListener('click',try_reset);