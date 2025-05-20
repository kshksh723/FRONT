// if 조건문을 사용하면 조건을 검사하고 조건이 참일 때 특정 코드가 실행되도록 할 수 있다
var a = 1;
var b = 2;

var c = a + b;
/*
if(Boolean type 조건){
    // 조건이 참일 때만 
    // 코드 실행
}
    */

if (true) {
  // 항상 조건식이 참이므로 중괄호 안의 코드가 실행됨
  console.log("이 구문은 실행된다");
}
if (false) {
  // 항상 조건식이 거짓이므로 중괄호 안의 코드가 실행되지 않음
  console.log("이 구문은 실행되지않습니다.");
}

if (true) {
  console.log("1");
} else {
  // else 구문은 바로 위에 작성한 if 조건문의 블록이 실행되지 않았을 때만 실행되는 구문으로 if 조건문과 짝을 이룬다
  console.log("2");
}

if (true) {
  console.log("1");
} else if (true) {
  console.log("2");
} else if (true) {
  // else if 조건문은 if 조건문과 else 구문 사이에 몇 개든 사오간없이 작성할 수 있다
  // 이 코드에서는 else if 조건문을 두 개작성했습니다
  // else if 조건문은 else if 조건문 위에 있는 if 조건문이 실행되지 않았을 때 조건을 검사하고 그 조건이 참이면
  // 중괄호 안에 있는 명령을 실행한다
  console.log("3");
} else {
  console.log("4");
}
