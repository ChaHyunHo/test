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
  *  숫자 Number
  *  문자열 String
  *  불리언 Boolean
  *  null
  *  undefined
  *  심볼(token ES6 도입)
  * 
  * 원시타입은 불변임(변하지 않음) 단. 변수 값이 바뀔 수 없다는 뜻은 아님
  * ex) let str = "hello";
  * str = "world";
  * 
  * 
  * 2.객체 
  * Array
  * Date
  * RegExp
  * Map , WeakMap
  * Set, WeakSet
  * 
  * 객체는 여러 가지 형태와 값을 가질 수 있음
  * 커스텀 데이터 타입을 만들 때 객체를 많이 이용
  */

// 이스케이프
  const dialog = "Sam looked up, and said \"hello, old friend!\", as Max walked in.";
  console.log(dialog);


/**
 * 템플릿 문자열
 * 값을 문자열 안에 써야 하는 일이 아주 많은데 이때 문자열 병합을 통해 변수나 상수를 
 * 문자열 안에 쓸 수 있음.
 */ 
let currentTemp = 19.5;
// 00b0은 온도를 나타내는 유니코드 코드 포인트
const message = "The current temperature is " + currentTemp + "\u00b0C"; // 기존에 사용하던 문자열 병합
console.log(message);

const message_es6 = `The current temperature is ${currentTemp}\u00b0C`; // ES6에는 백틱을 사용하여 변수를  ${}안에다 담음
console.log(message_es6);

// 여러줄 문자열 줄바꿈 (백틱 사용)
const multiline = "line1\n\
line2";

 const multiline_es6 = `line1
line2
line3`;
 console.log(multiline);
 console.log(multiline_es6);

 const multiline_1 =   "line1\n" // 선호방법
                     + "line2\n"
                     + "line3\n"; 
console.log(multiline_1);

/**
 * 심볼 
 * 유일한 토큰을 나타내기 위해 ES6에서 도입한 새 데이터 타입
 * 심볼은 객체와 유사
 * 생성자를 통해 만듬
 */
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
console.log(RED === ORANGE) // false: 심볼은 모두 서로 다르다.

/**
 * null , undefined
 * 둘다 자신의 유일한 값을 가지고 있음
 * 이 둘은 모두 존재하지 않는 것을 나타냄
 * null => 프로그래머에게 허용된 데이터 타입
 * undefined는 자바스크립트 자체에서 사용함.
 * 프로그래머도 undefined를 사용할 수 있지만 꼭 필요할대만 사용권장 
 * undefined를 할당하는 경우는, 아직 값이 주어지지 않은 변수의 동작을
 * 고의로 흉내 내야 할 때뿐임. 값이 없거나 주어지지않은 경우 보통 null을 사용하는것을 권장
 */

 /**
  * 객체
  * 원시 타입은 하나의 값만 나타낼 수 있음
  * 객체는 여러가지 값이나 복잡한 값을 나타낼 수 있음
  * 객체의 본질은 컨테이너임 내용물은 시간이 지나면 바뀔 수 있지만
  * 내용물이 바뀐다고 컨테이너가 바뀌는건 아님
  * 즉 여전히 같은 객체라는 소리. 객체에도 중괄호 {} 를 사용하는 리터럴 문법이
  * 있는데 중괄호는 한 쌍이므로 객체가 어디에서 시작하고 끝나는지 알 수 있음
  */

const obj = {};

obj.color = "yellow";
obj["not an identifier"] = 3;


console.log(obj);

// 객체의 컨텐츠는 프로퍼티 또는 멤버로 불림 ex)
const student = {
    name : "차현호" // 멤버
};
console.log(student.name);
console.log(student["name"]); // 위와 같은 값

// 심볼 프로퍼티에 접근할 때도 대괄호
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj);

// 선언과 동시에 프로퍼티 값 셋팅 가능
const sam1 = {
  name : 'SAM',
  age  : 4,
};
console.log(sam1);

// 프로퍼티에도 또다른 객체를 선택 할 수 있음.
const sam2 = {
    name : 'SAM2',
    age  : 20,
    school : {
      elementarySchool : "sangsin",
      middleSchool : "hwaseong"
    }
}
console.log(sam2.school.elementarySchool);
console.log(sam2.school["elementarySchool"]);

sam2.speak = function() {return "말하는 함수입니다."};
let k =  sam2.speak();
console.log(k);

delete sam2.age; // age 트리 전체가 삭제됨
console.log(sam2.age); // age가 존재하지 않으므로 undefined가 뜸

// Number, String, Boolean 객체

const str_hello_1 = "hello1"; // 원시문자열 타입이지만 자바스크립트는 일시적으로 String 객체를 만들어줌
var str_temp_1 = str_hello_1.toUpperCase();
console.log(str_temp_1);


const str_hello_2 = "hello2";
str_hello_2.member = 3; // 일시적인 String 객체이므로 프로퍼티를 할당하게 되면 undefined
console.log(str_hello_2.member);

// 배열
// 자바스크립트 배열이 C 언어의 효율적인 배열과 더 강력한 동적 배열, 링크드 리스트를 혼합한 것임을 알 수 있음
/**
 * 자바스크립트 배열의 특징
 * 1. 배열 크기는 고정되지 않는다. 언제든 요소를 추가하거나 제거할 수 있다.
 * 2. 요소의 데이터 타입을 가리지 않는다. 즉, 문자열만 쓸 수 있는 배열이라던가 숫자만 쓸 수 있는 배열 같은 개념이 아예 없다.
 * 3. 배열 요서는 0으로 시작한다.
 */

const a1 = [1, 2, 3 , 4]              // 숫자로만 구성된있는 배열
const a2 = [1, 'two', 3, null];       // 여러가지 타입으로 구성된 배열
const a3 = [                          // 여러 줄로 정의한 배열
    "What the hammer? What the chain?",
    "In What furnace was tht brain?",
    "What the anvil? What dread grasp",
];
const a4 = [                          // 객체가 들어있는 배열
  {name : "Ruby", hardness: 9},
  {name : "Diamond", hardness: 10},
  {name : "Topaz", hardness: 8},
]
const a5 = [                          // 배열이 들어있는 배열
  [1,3,5],
  [2,4,6]
]
for(let i = 0; i < a5.length; i++) {
  console.log(a5[i][0]);
}

 // 배열을 덮어쓸 때는 새 값을 할당하면 됨
 const arr = [1, 2, 'c', 4, 5];
 arr[2] = 3; 
 console.log(arr);

/**
 * a4 변수를보면 객체 배열에서 마지막 콤마가 존재하게 되는데 이런 마지막 
 * 쉼표를 trailing comma, dangling comma, terminal comma 라고 부름
 * 이책의 저자는 배열과 객체에서 잘라내고 붙여넣는 일이 많고 , 객체 마지막에 
 * 프로퍼티를 추가하는 일이 많으므로 마지막 쉼표를 사용한다고함
 * 하지만 스타일 가이드나 마지막 쉼표를 쓰지 않겠다고 정했다면 그것에 맞춰하는것이
 * 맞음
 * 
 *  JSON에서는 마지막 쉼표를 허용하지 않음. 
 */


 // 날짜 (Date 객체)

 const date1 = new Date();
 console.log(date1);

 let year  = date1.getFullYear();
 let month = date1.getMonth();
 let day   = date1.getDay(); 
  
 if(day.length <= 1) {
    day = "0" + day;  
 }

console.log('현재' + year + month + day)

const halloween = new Date(2016, 9, 31);
console.log(halloween);

// 데이터 타입 변환 

// 숫자로 바꾸기
const numStr = "33.3";
const num = Number(numStr); // 숫자 값을 만듬 , Number 객체의 인스턴스가 아님
console.log(typeof num);
console.log(num);

const parse_a = parseInt("16 volts", 10); // volts는 무시됨,  10진수 16임
console.log(parse_a);
const parse_b = parseInt("3a", 16) // 16진수 3a를 10진수로 바꿈
console.log(parse_b);
const d = new Date();


