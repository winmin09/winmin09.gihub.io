document.addEventListener("DOMContentLoaded", () => {

  let fullness = 0;
  let cruelty = 0;

  const fullnessBar = document.getElementById("fullnessBar");
  const crueltyBar = document.getElementById("crueltyBar");
  const story = document.getElementById("story");
  const choices = document.getElementById("choices");
  const character = document.getElementById("character");
  const startBtn = document.getElementById("startBtn");

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

  function show(text, charImg, options = []) {
    story.className = "";
    story.textContent = text;
    character.src = charImg || "";
    choices.innerHTML = "";

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.onclick = opt.action;
      choices.appendChild(btn);
    });

    updateBars();
  }

  startBtn.onclick = () => {
    startBtn.style.display = "none";

    show(
      "옛날옛날에,\n엄마는 시장에 가기 위해\n산을 넘고 있었어요.\n\n그때 호랑이를 만났습니다.",
      "images/tiger.png",
      [
        {
          text: "엄마를 잡아먹는다",
          action: () => {
            fullness += 10;
            cruelty += 10;
            show(
              "호랑이는 엄마를 잡아먹고\n엄마로 변장했습니다.\n초가집으로 향합니다.",
              "images/mother.png",
              []
            );
          }
        },
        {
          text: "잡아먹지 않는다",
          action: () => {
            story.classList.add("gameover");
            show(
              "GAME OVER\n\n흥, 이번만 봐주지.\n호랑이는 굴로 돌아가\n후회하다 굶어 죽었습니다.",
              "",
              []
            );
          }
        }
      ]
    );
  };

  updateBars();
});
