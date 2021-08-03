// 과제를 하는 도중에 간단한 몇가지 예외상황들을 생각해보고 기능을 추가해보았습니다.

const number_max = document.querySelector("#number_max");
const number_user = document.querySelector("#number_user");
const result_number = document.querySelector("#result_number");
const result_game = document.querySelector("#result_game");
const play = document.querySelector("#play");

play.addEventListener("click", check);

function check(event) {
  event.preventDefault();
  const number_machine = Math.ceil(Math.random() * number_max.value);
  const number_machine_max = parseInt(number_max.value);
  const number_user_pick = parseInt(number_user.value);
  result_number.innerHTML = `Your chose: ${number_user_pick}, the machine chose: ${number_machine_max}`;
   if (number_user_pick <= 0) {
    result_game.innerHTML = "0 이하 값을 입력할 수 없습니다.";
  } else if (number_user_pick > number_machine_max) {
    result_game.innerHTML = "최댓값을 초과할 수 없습니다.";
  } else if (number_user_pick === number_machine) {
    result_game.innerHTML = "You Win";
  } else {
    result_game.innerHTML = "You Lose";
  }
}
