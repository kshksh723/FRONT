/*
반복문(loop)은 특정 조건을 만족하는 동안 일정한 코드를 반복해서 실행한다

 */
// 카페 메뉴를 출력하는 코드는 동일
console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var count = 0;
// 횟수를 셀 변수를 선언하고 초기화

// while 반복문을 이용해서 count가 3미만일 동안만 수행하도록 설정

while (count < 3) {
  // while 반복문을 적고 소괄호 안에 조건식을 적는다
  /*
  while 반복문은 조건식을 만족하면 중괄호로 둘러싸인 코드를 반복해서 실행한다 코드를 한 번다 실행하고 나면 
  다시 while 반복문의 조건을 계산하고 반복할지 말지를 결정한다
  
  */
  var choice = parseInt(propmt("메뉴를 선택해주세요"));

  console.log(choice + "번 메뉴를 선택하셨습니다.");
  switch (choice) {
    case 1:
      console.log("아이스 아메리카노는 1500원입니다");
      break;
    case 2:
      console.log("카페라떼는 1800원입니다.");
      break;
    case 3:
      console.log("카푸치노는 2000원입니다.");
      break;
    case 4:
      console.log("죄송합니다. 그런 메뉴는 없습니다");
      break;
  }
  count++; // 반복문을 마치기 전에 count를 증가

  /*
  반복문을 실행하는 동안 count가 1씩 늘어난다 count가 3이 되면 count < 3이라는 while 반복문의 조건식을 만족하지 않으므로 더이상 반복하지 않고 종료 한다
  즉, 반복문은 총 세 번 실행된다
 */
}
console.log("안녕히가십시오"); // 반복문이 끝나면 메시지를 출력
//////////////////////////////////////////////////////////////////////////////////////////////////

var count = 0; // 틀린 개수를 저장할 count 변수 선언

while (true) {
  // 조건식에 true를 입력하면 반복문이 계속 실행됨

  var ans;
  ans = parseInt(propmt("1+1=?")); //사용자에게 정답을 입력받기

  if (ans != 2) {
    console.log(++count + "번 틀렸습니다. 다시 도전하세요");
  }
}
