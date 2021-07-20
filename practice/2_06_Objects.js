// 2_06_01 여러 변수를 선언해 구성한 player
const playerName="nico";
const playerPoints=121212;
const playerHandsome=false;
const playerFat="littel bit";

// 2_06_02 Array를 선언해 구성한 player
const player_array=["nico",121212, false, "little bit"];

// 2_06_03 Objects를 선언해 구성한 player
const player_object={
    name: "nico",
    points: 10,
    fat: true,
};

// 2_06_03_01 Objects의 Member 일부 출력, 전체 출력
console.log("member varialbe의 출력 방식")
console.log(player_object);
console.log(player_object.name);
console.log(player_object["name"]);

// 2_06_03_02 Ojbects의 Member 일부 수정, 전체 출력
console.log("member variable의 수정 및 출력");
console.log(player_object);
player_object.fat=false;
console.log(player_object);

// const는 수정이 불가능하다, 그런데 어떻게 위 명령어는 Error가 없을까?
/* 해설(const 와 object의 member_variable 관계) 결론(무관)
위 구문에서 const 가 수식하고 있는 대상은 object인 player_object 이다.
player_object 의 member_variable 인 {name, points, fat,}은 const 는
const가 수식하고 있지 않다.

const 가 수식한 대상            : player_object
const 가 수식 하지 않은 대상    : player_object.name, .points, .fat,

따라서 player_obejct 의 memeber_variable 은 수정이 가능하다.
*/

// 2_06_03_03 Ojbect의 Member 일부 추가, 전체 출력
console.log("member variable의 추가 및 출력");
console.log(player_object);
player_object.last_name="potato";
console.log(player_object);

// 2_06_03_04 Object의 Member 일부 수정(방식 1), 전체 출력
console.log("member variable의 수정 및 출력");
console.log(player_object);
player_object.points=player_object.points+15;
console.log(player_object);

// Object.A=Object.A+10; 이 아니라 Object.A+=10; 은 가능할까?
/* 해설(Java 식 사칙연산의 가능성) 결론(불가)
가능한 방식     : player_object.points=player_object.points+15;
불가능한 방식   : player_object.points+=15;
*/
/* 실행구문 예제

// 2-06_03_04 Object의 Member 일부 수정
console.log("member variable의 수정 및 출력");
console.log(player_object);
player_object=10;
player_object.points=+15;
console.log(player_object);
*/


