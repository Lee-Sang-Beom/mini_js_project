let curPos = 0; // 현재 보여지고 있는 이미지의 인덱스 번호 : 0~3
let positionValue = 0; // images 태그의 위치값을 지정할 변수
const IMAGE_WIDTH = 600; // 한 번 이동할 때마다 이만큼 이동

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");
// images.style.transition = `all 0.5s`; - 트랜지션 효과를 의미

function init(){ // 초기화 함수
    // 첫 활성화는, 첫번째 사진이 보여지니 prevBtn는 비활성화시킴
    prevBtn.setAttribute('disabled', 'true');

    prevBtn.addEventListener('click',prev);
    nextBtn.addEventListener('click',next);
}

function next(){ // 다음 버튼을 눌렀을 때

    // 다음으로 갈 수 있도록 해야함.
    // 이미지는 3장이므로, 최대 curPos 값은 2임
    if (curPos < 2){
        nextBtn.removeAttribute('disabled');
        prevBtn.removeAttribute('disabled');
        console.log(nextBtn);
        console.log(images.style);

        // 사진이 오른쪽에 있다가 왼쪽으로 이동하는 모션이 나와야 함
        positionValue -= IMAGE_WIDTH;

        // x축으로 얼마나 이동하게 할 지 : 0 ~1200px
        // 렌더링된 원래 위치에서 어느정도 이동했는지 최종적으로 보여줌 
        images.style.transform = `translateX(${positionValue}px)`;
        curPos += 1;
    }

    if (curPos >= 2){
        nextBtn.setAttribute('disabled', 'true');
    }
}

function prev(){ // 이전 버튼을 눌렀을 때

    // 이전으로 갈 수 있도록 해야함.
    // 이미지는 3장이므로, 최소 curPos 값은 0임
    if (curPos > 0){
        nextBtn.removeAttribute('disabled');
        prevBtn.removeAttribute('disabled');

        // 사진이 왼쪽에 있다가 오른쪽으로 이동하는 모션이 나와야 함
        positionValue += IMAGE_WIDTH;

        // x축으로 얼마나 이동하게 할 지 : 1200px ~ 0px
        // 렌더링된 원래 위치에서 어느정도 이동했는지 최종적으로 보여줌 
        images.style.transform = `translateX(${positionValue}px)`;

        curPos-= 1;
    }

    if (curPos <= 0){
        prevBtn.setAttribute('disabled', 'true');
    }
}

init();
