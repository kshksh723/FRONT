// 문자열
// 문자열의 길이를 알아내려면 문자열의 길이 속성(length property)에 접근할 수 있어야한다

var str = "Hello"; // 문자열 초기화
// < undefined
str.length; // 마침표를 사용해서 문자열 길이에 접근
// 5 -> Hello 문자열의 길이는 5
// str은 객체라고 생각하고 마침표(.)를 사용해서  str.length 형식의 str의 length 속성에 접근하면 된다
// 객체 속성에 접근할 때는 마침표뿐만 아니라 대괄호([])를 이용해서 접근할 수도 있다

str["length"]; // 대괄호를 사용해서 문자열 길이에 접근
// 5

var str2 = "World"; // 문자열 초기화
// < undefined
str.concat(str2); // concat() 명령으로 두 문자열 연결
// "HelloWorld" --> 연결된 문자열 반환
// concat : 연결하다 concaterate를 줄여쓴 단어

var str3 = str.concat(str2); // str3에 str과 str2를 붙인 문자열을 저장
// undefined
str3;
// "HelloWorld"

// 문자열을 이어붙이고 싶다면
str.concat(str2).concat("!");
// "HelloWorld!"

// concat() 명령의 소괄호 안에는 변수 뿐만 아니라 문자열을 넣을 수 있고
// concat() 명령 앞에 str과 같은 변수 이름이 아닌 문자열을 바로 작성할 수 있다

"Hello".concat("World").concat("!");
// "HelloWorld!"

"hello".length;
// 5

// 문자열을 이어 붙이는 더 쉬운 방법 --> + 연산자를 활용하기
str + str2; // 문자열이 저장된 변수 더하기
// "HellWorld"
"Hello" + "World"; // 두 문자열을 바로 더하기
// "HelloWorld"
"Pi is " + 3.14; // 문자열과 숫자 더하기
//"Pi is 3.14" // 숫자가 문자열로 변환되어 출력됨
3.14 + " is Pi"; //  숫자에 문자열 더하기
// "3.14 is Pi"

// charAt() 명령 -> 문자열의 특정 위치에 있는 한 문자에 접근하고 싶을 때 사용함
var str = "abcdeabcde";
// < undefined
str.charAt(0); // 첫 번째 문자열 (인덱스 0)에 접근
// < "a"
str.length; // 변수의 길이 확인
//  < 10
str.charAt(9); // 열번째 문자열(인덱스 9)에 접근
// < "e"
str.charAt(10); // 열한번째 문자열은 없으므로
// < "" // 빈 문자열 반환
str.charAt(-1);
//< "" // 빈 문자열 반환

// 문자열의 인덱스는 0부터 시작한다

/*
    문자열 뒤에 마침표(,)를 찍고 charAt() 명령을 적은 다음 소괄호 안에 접근하고 싶은 문자의 인덱스(숫자)를 넣습니다
    
    예를 들어, charAt()에 0을 입력하면 문자열의 첫번째 문자인 a가 반환된다 
    또한 문자열의 범위를 넘어서거나 음수를 입력한 경우에는 문자열이 반환된다
    
    문자열의 특정 위치에 있는 특정 문자에 접근할 때는 charAt() 명령을 사용해도 되지만 더 쉬운 방법이 있다
    대괄호([])를 이용하는 방법이다
*/
str[1]; // 대괄호 안에 접근하고 싶은 위치(인덱스) 입력
// "b"
str[10]; // 문자열의 범위를 벗어난 값을 입력하면
// undefined --> 빈 문자열이 아닌 undefined가 반환됨
str[-1];
// undefined

// 뒤에서 n 번째 문자열을 알아내려면
str = "abcdeabcde";
str.charAt(str.length - 5);
// "a"

// 부분 문자열을구할 수 있는 subString()과 substr() 명령도 있다
// 둘 다 소괄호 안에 두 개의 인수를 받는다
str.substring(2, 4);
// "cd"
// 문자열 인덱스가 2(세 번째 문자열)인 c 부터 인덱스가 4(다섯번째 문자열)
str.substr(2, 4);
// "cdea"
