console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var choice = parseInt(propt("메뉴를 선택해주세요"));

console.log(choice + "번 메뉴를 선택하셨습니다");

if (choice == 1) {
  console.log("아이스아메리카노는 1500원입니다");
} else if (choice == 2) {
  console.log("카페 라떼는 1800원입니다.");
} else if (choice == 4) {
  console.log("홍차는 1300원입니다.");
} else {
  console.log("죄송합니다. 그런메뉴는 없습니다");
}

// switch 조건문을 활용하면 이러한 코드를 효과적으로 줄일 수 있다
console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappucino");
console.log("4. Tea");

var choice = parseInt(prompt("메뉴를 선택해 주세요"));
/*
parseInt를 왜 썼고 그냥 prompt만 쓰면 안되는 지
prompt만 쓰게 된다면 출력을 string 으로 하게 된다
그럼 switch(choice)에 들어갈 choice는 1,2,3,4 같은 숫자가 아닌 string이기 때문에 결과값이 항상 default로 나오게 된다
그래서 이 string을 switch문이 인식할 수 있게 만들어줘야 하는데 그 때 쓰이는 게 parseInt이다
parseInt로 prompt에 입력된 글자가 숫자일 경우 숫자로 변환해주고, 숫자로 변환된 값을 switch로 넣어주게 되면 case 1이나 case 2와 같이 숫자로 된 case가 정상적으로 표시되게 된다


*/
console.log(choice + "번 메뉴를 선택하셨습니다.");

switch (choice) {
  case 1:
    console.log("아이스 아메리카노는 1500원 입니다");
    break;
  case 2:
    console.log("카페 라떼는 1800원입니다.");
    break;
  case 3:
    console.log("카푸치노는 2000원입니다.");
    break;
  case 4:
    console.log("홍차는 1300원입니다.");
    break;
  default:
    console.log("죄송합니다. 그런 메뉴는 없습니다");
    break;
}

// switch 조건문은 break 키워드를 사용하지 않으면 코드가 계속 실행된다는 특징이 있다

/*
switch  조건문은 break 키워드르 사용하지 않으면 코드가 계속 실행된다는 특징이 있따

- switch 조건문은 조건에 따라 프로그램의 흐름을 분기해서 특정 코드가 실행되도록 한다
- switch 조건문은 break 키워드를 만나면 switch case 조건문의 마지막 중괄호를 빠져나온다
- switch 조건문은 break 키워드를 사용하지 않으면 switch 조건문을 빠져나오지 않고 다음 case에 해당하는 코드까지 실행한다


*/
