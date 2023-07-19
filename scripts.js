// var 재선언 가능
// let 재선언 불가
// const 상수 선언

let input = document.getElementById('formula');
let result = document.getElementById('result')
// function b1(){
//     input.value += '1';

// }


// function inputNum(num){
//     input.value += num;
// }


function inputNum2(obj){
    input.value += obj.innerHTML;
}



function clearInput(){
    input.value = '';
    result.value = '';
}

// 문자열을 수식으로서 계산하는 함수
function formulaResult(){
    result.value = eval(input.value);
}

// 백스페이스함수
function backspace(){
    let str = input.value;
    if(str != ''){
        input.value = str.substring(0, str.length - 1);
    }
}

// 부호를 바꾸는 함수
function plusMinus(){
    input.value = '-(' + input.value + ')';
}
