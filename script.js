let fullness = 0;
let cruelty = 0;

const titleScreen = document.getElementById("titleScreen");
const gameScreen = document.getElementById("gameScreen");
const statusBar = document.getElementById("statusBar");

const storyText = document.getElementById("storyText");
const choices = document.getElementById("choices");
const sceneImage = document.getElementById("sceneImage");
const fullnessBar = document.getElementById("fullnessBar");
const crueltyBar = document.getElementById("crueltyBar");

const startBtn = document.getElementById("startBtn");

/* 상태바 업데이트 */
function updateBars() {
  fullnessBar.innerHTML = "";
  crueltyBar.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const f = document.createElement("div");
    if (i < fullness / 10) f.classList.add("filled");
    fullnessBar.appendChild(f);

    const c = document.createElement("div");
    if (i < cruelty / 10) c.classList.add("filled");
    crueltyBar.appendChild(c);
  }
}

/* 장면 표시 */
function showScene(text, image, options) {
  storyText.textContent = text;
  sceneImage.src = image || "";
  choices.innerHTML = "";

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = opt.action;
    choices.appendChild(btn);
  });

  updateBars();
}

/* 게임 시작 */
startBtn.onclick = () => {
  titleScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  statusBar.classList.remove("hidden");

  showScene(
    "옛날옛날에, 엄마는 시장에 가기 위해 산을 넘고 있었어요.\n그때 호랑이를 만났습니다.",
    "",
    [
      {
        text: "엄마를 잡아먹는다",
        action: () => {
          fullness += 10;
          cruelty += 10;
          showScene(
            "호랑이는 엄마를 잡아먹고 그녀로 변장했습니다.\n초가집으로 향합니다.",
            "",
            []
          );
        }
      },
      {
        text: "잡아먹지 않는다",
        action: () => {
          storyText.style.color = "red";
          storyText.style.fontSize = "2em";
          showScene(
            "GAME OVER\n호랑이는 굴로 돌아가 후회하다 굶어 죽었습니다.",
            "",
            []
          );
        }
      }
    ]
  );
};
