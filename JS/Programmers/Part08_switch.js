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
