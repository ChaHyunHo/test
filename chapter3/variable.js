console.log("")
console.log("################################")
console.log("#리터럴과 변수,상수, 데이터 타입")
console.log("################################")
/*
 let 키워드는 ES6에서 생김. ES6이전에는 var 키워드만 사용할 수 있음.
*/

console.log("====================== 상수")

let currentTempC = 22; // 섭씨온도
console.log(currentTempC); 

let targetTempC; // undefined; 와 같음 
console.log(targetTempC);

// let 문 하나에 변수 여러개 선언 가능
let a , room1 = "a_room", room2 = "b_room";
console.log(a);
console.log(room1); // 문자열 변수 
console.log(room2); // 문자열 변수


console.log("====================== 상수")

/*
 상수는 ES6에서 새로 생겼음. 상수도 변수와 마찬가지로 값을 할당받을 수 있음. 
 한 번 할당한 값을 바꿀 수는 없음.  상수도 여러개 동시에 선언가능
 값이 자주 바뀌는 상황이 아니라 고정적인 값을 사용한다면 상수를 이용하는것이 맞음
*/
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
// 상수 
console.log(ROOM_TEMP_C);
console.log(MAX_TEMP_C); 

/**
 * 리터럴이라는 단어는 값을 프로그램 안에서 직접 지정 한다는 의미
 * 리터럴은 값을 만드는 방법임, 자바스크립트는 내가 제공한 리터럴 값을 받아 데이터를 만듬
 * 리터럴과 식별자의 차이는 ex) let room1 = "c_room_a" => room1은 변수를 가리키는 식별자
 * c_room_a는 문자열 리터럴인 동시에 room1의 값
 * 자바스크립트는 ""를 통해서 리터럴과 식별자를 구별함
 */

 /**
  * 1.원시 타입
  *  숫자
  *  문자열
  *  불리언
  *  null
  *  undefined
  *  심볼  
  * 
  * 원시타입은 불변임(변하지 않음) 단. 변수 값이 바뀔 수 없다는 뜻은 아님
  * 
  */




