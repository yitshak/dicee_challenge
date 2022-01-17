function RollDice() {
  return Math.floor(Math.random()*6)+1;
}

function IntToDiceImg(number) {
  return "images/dice"+number+".png"
}

var dice_1 = RollDice()
var dice_2 = RollDice()

var dice_1_img = IntToDiceImg(dice_1)
var dice_2_img = IntToDiceImg(dice_2)

document.getElementsByClassName("img1")[0].setAttribute("src",dice_1_img)
document.getElementsByClassName("img2")[0].setAttribute("src",dice_2_img)

if (dice_1 > dice_2) {
  win_string = "🚩 Player 1 wins"
} else if (dice_2 > dice_1) {
  win_string = "🚩 Player 2 wins"
} else {
  win_string = "Draw!!"
}

document.querySelector("h1").textContent = win_string
