// 현 강화상태를 저장하는 변수
let current_reinforcement_level = document.getElementById('current_figure');

// 현 강화상태에서 성공 | 실패확률을 표현하는 변수
let sucess_rate_figure = document.getElementById('sucess_rate_figure');
let fail_rate_figure = document.getElementById('fail_rate_figure');

// 최대강화레벨
const MAX_LEVEL = 20;

// '강화하기' 버튼
const try_btn = document.getElementById('try_btn');

// '리셋하기' 버튼
const reset_btn = document.getElementById('reset_btn');

// 단계별 성공확률
const suceess_rate_array = [100,95,90,85,80,75,70,60,50,40,35,30,25,20,15,10,5,3,2,1];

// 시도횟수 저장 배열
const try_count_array = Array.from(new Array(20), (v,k)=>{
    return 0;
})

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

function overallSwitchTable(current_level){

    if(current_level < 20){
        switch(current_level){
            case 0:
                try_zero_to_one.innerText = try_count_array[current_level];
                return;
            case 1:
                try_one_to_two.innerText = try_count_array[current_level];
                return;
            case 2:
                try_two_to_three.innerText = try_count_array[current_level];
                return;
            case 3:
                try_three_to_four.innerText = try_count_array[current_level];
                return;
            case 4:
                try_four_to_five.innerText = try_count_array[current_level];
                return;
            case 5:
                try_five_to_six.innerText = try_count_array[current_level];
                return;
            case 6:
                try_six_to_seven.innerText = try_count_array[current_level];
                return;
            case 7:
                try_seven_to_eight.innerText = try_count_array[current_level];
                return;
            case 8:
                try_eight_to_nine.innerText = try_count_array[current_level];
                return;
            case 9:
                try_nine_to_ten.innerText = try_count_array[current_level];
                return;
            case 10:
                try_ten_to_eleven.innerText = try_count_array[current_level];
                return;
            case 11:
                try_eleven_to_twelve.innerText = try_count_array[current_level];
                return;
            case 12:
                try_twelve_to_thirteen.innerText = try_count_array[current_level];
                return;
            case 13:
                try_thirteen_to_fourteen.innerText = try_count_array[current_level];
                return;
            case 14:
                try_fourteen_to_fifteen.innerText = try_count_array[current_level];
                return;
            case 15:
                try_fifteen_to_sixteen.innerText = try_count_array[current_level];
                return;
            case 16:
                try_sixteen_to_seventeen.innerText = try_count_array[current_level];
                return;
            case 17:
                try_seventeen_to_eighteen.innerText = try_count_array[current_level];
                return;
            case 18:
                try_eighteen_to_nineteen.innerText = try_count_array[current_level];
                return;
            case 19:
                try_nineteen_to_twenty.innerText = try_count_array[current_level];
                return;
            default:
                return;
        }
    } else{
        return;
    }
    
}

function resetTable(){
    try_zero_to_one.innerText = 0; 
    try_one_to_two.innerText.innerText = 0; 
    try_two_to_three.innerText.innerText = 0; 
    try_three_to_four.innerText .innerText = 0; 
    try_four_to_five.innerText = 0; 
    try_five_to_six.innerText = 0;
    try_six_to_seven.innerText = 0;
    try_seven_to_eight.innerText
    try_eight_to_nine.innerText = 0; 
    try_nine_to_ten.innerText = 0; 
    try_ten_to_eleven.innerText = 0; 
    try_eleven_to_twelve.innerText = 0; 
    try_twelve_to_thirteen.innerText = 0; 
    try_thirteen_to_fourteen.innerText = 0; 
    try_fourteen_to_fifteen.innerText = 0; 
    try_fifteen_to_sixteen.innerText = 0; 
    try_sixteen_to_seventeen.innerText = 0; 
    try_seventeen_to_eighteen.innerText = 0; 
    try_eighteen_to_nineteen.innerText = 0; 
    try_nineteen_to_twenty.innerText = 0; 
}

function printPercentage(current_level){
    sucess_rate_figure.textContent = suceess_rate_array[current_level];
    fail_rate_figure.textContent = 100-suceess_rate_array[current_level];
}

function try_upgrade(){

    // 성공 시도하고자 하는 확률상태
    const suceess_try_rate =  suceess_rate_array[current_level];

    // 1~100 까지의 숫자 (확률)
    const random_value = Math.floor(Math.random()*100)+1;
    
    if(random_value >= 1 && random_value <= suceess_try_rate){
        // 강화 성공조건 : random_value가 sucess_try_rate 이하의 값을 가지는 경우
        if(parseInt(current_reinforcement_level.innerText) < MAX_LEVEL){
            current_reinforcement_level.innerText = parseInt(current_reinforcement_level.innerText)+1;
            // alert("강화 성공");
            // current_level -> current_level + 1 의 시도도, 시도횟수로 사용
            try_count_array[current_level] += 1;

            // 테이블 시도횟수 갱신
            overallSwitchTable(current_level);
            current_level++;

            // 증가된 강화상태에 대한 확률 표기 변경
            printPercentage(current_level);

            if(current_level === MAX_LEVEL){
                // MAX_LEVEL 달성 시, 사용자가 버튼 클릭을 하지 못하도록 변경 
                alert(`최대 강화 레벨을 당설하셨습니다.`);
                try_btn.disabled = true;

                // current_level === 20 일때, 확률표기
                sucess_rate_figure.textContent = 0;
                fail_rate_figure.textContent = 0;
                
            }
        } else{
            // btn을 disabled 처리한 것으로, else문 대신
        }
    } else{
        // 강화 실패조건 : random_value가 sucess_try_rate 초과의 값을 가지는 경우
        // alert("강화 실패");

        // current_level의 배열위치에 시도횟수 증가
        try_count_array[current_level] += 1;
        overallSwitchTable(current_level);

        // 초기화되므로, 강화버튼 사용 복구
        try_btn.disabled = false;

    }
}

function try_reset(){
    current_reinforcement_level.innerText = 0;
    current_level = 0;
    try_count_array.fill(0);
    resetTable();

    // 초기화된 강화상태에 대한 확률 표기 변경
    printPercentage(current_level);
    alert("초기화되었습니다!");
}

/*add eventListener*/
try_btn.addEventListener('click',try_upgrade);
reset_btn.addEventListener('click',try_reset);

// 최초실행
printPercentage(current_level);