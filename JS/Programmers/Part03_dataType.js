// 변수에 저장할 수 있는 값의 종류(Type,데이터타입)를 '데이터타입' 혹은 '자료형'
// 이라고 부른다
/*
- true와 false는 어떤 명제의 참과 거짓을 나타낼 때 사용하는 데이터 타입으로 boolean type이라고 부른다 
- typeof는 소괄호(()) 안에 들어 있는 변수가 어떤 데이터타입인지알려주는 명령


*/
var a = 100,
  b = 3.14; // number type
var c = "안녕하세요",
  d = "a"; // string type
var e = true,
  f = false; // boolean type

console.log(a, typeof a);
console.log(c, typeof c);
console.log(e, typeof e);
/*
키를 묻는 상황에서는 사용자가 입력한 값을 숫자로 활용해야 한다
대표적인 명령이 parseInt()와 parseFloat()이다 
= parseInt() 명령은 문자열의 앞부분에서 정수 부분을 추출할 수 있다
= parseFloat() 명령은 문자열의 앞부분에서 실수 부분을 추출할 수 있다

* 64비트로 실수와 정수를 모두 표현할 수 있다
*/

var height_int = parseInt(hegiht); // 입력받은 키 값을 정수로 변환
console.log(height_int, typeof height_int); // height_int 값과 데이터 타입을 출력

var hegiht_float = parseFloat(hegiht); // 키 값을 다시 실수로 변환
console.log(hegiht_float, typeof hegiht_float); // hegiht_float값과 데이터 타입 출력

// 181.3이라는 값이 바르게 인식되지 않고 NaN으로 표시 될 경우
/*
NaN은 Not a Number의 약자로 '숫자가 아니다'라는 뜻이다(하지만 NaN은 숫자형이다)
parseInt()와 parseFloat() 명령은 숫자형만 인식
자바스크립트의 숫자형은 허수(i)를 지원하지 않는다
제곱근을 계산하는 명령인 Math.sqrt()의 인수에 -1을 입력하면 NaN이 출력된다


NaN 외에도 숫자형의 특수한 종류에는 Infinity가 있다


*/
var a = 1 / 0;
// < undefined

a;
// infinity
// 0 나누기같은 수학적 오류가있는 구문이 실행되거나 너무 큰 값을 계산하는 경우 무한대를 나타내는 Infinity가 나온다

var a = "문자열은 작은따옴표로 둘러싸면 됩니다";
var b = "큰따옴표로도 문자열을 표현할 수 있습니다";

/*
문자열에는 큰따옴표(" ")와 작은따옴표('') 둘 중 무엇이든  사용할 수 있다
문자열은 큰 따옴표나 작은 따옴표로 감싸서 표현할 수 있지만 둘을 섞어 쓸 수는 없다
*/

/*
큰따옴표로 시작한 문자열에는 작은따옴표를 사용해 중간에 다른 문자열을 쓸 수 있고 작은 따옴표로 시작한 문자열에는 큰따옴표를 
사용해 중간에 다른 문자열을 쓸 수 있다
*/
var c = "큰따옴표 문자열에는 작은따옴표'을 사용할 수 있습니다.";
var d = '작은따옴표 문자열에는 큰따옴표 "를 사용할 수 있습니다.';
