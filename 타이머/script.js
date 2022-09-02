const toDayDiv = document.getElementById('today');
const timeDiv = document.getElementById('time');

function getTime(){
    // new 생성자 함수 호출 시, 생성자 함수가 갖는 기능을 포함한 객체가 만들어짐
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth()+1) < 10 ? `0${now.getMonth()}` : now.getMonth() ; // 달은 +1해줘야함 (0때문에)
    let date = now.getDate() < 10 ? `0${now.getDate()}` :  now.getDate();
    let hour = now.getHours()  < 10 ? `0${now.getHours()}` :  now.getHours();
    let minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` :  now.getMinutes();
    let second = now.getSeconds() < 10 ? `0${now.getSeconds()}` :  now.getSeconds();

    toDayDiv.textContent = `${year}년 ${month}월 ${date}일`;
    timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
    
}

// 첫 1초가 지나기 전에는 아래 setInterval이 실행되지 않음.
getTime();

// getTime을 1초마다 호출하는 함수 : setInterval
setInterval(getTime, 1000); 

