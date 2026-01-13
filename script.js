document.addEventListener("DOMContentLoaded", () => {

  let fullness = 0;
  let cruelty = 0;

  const fullnessBar = document.getElementById("fullnessBar");
  const crueltyBar = document.getElementById("crueltyBar");
  const story = document.getElementById("story");
  const choices = document.getElementById("choices");
  const sceneImage = document.getElementById("sceneImage");
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

  function showScene(text, image, options = []) {
    story.className = "";
    story.textContent = text;
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

  startBtn.onclick = () => {
    startBtn.style.display = "none";

    showScene(
      "옛날옛날에,\n엄마와 오누이는 초가집에 살고 있었어요.\n\n어느 날 엄마는 시장에 가다 산에서 호랑이를 만납니다.",
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
            story.classList.add("gameover");
            showScene(
              "GAME OVER\n\n흥, 이번만 봐주지.\n호랑이는 굴로 돌아가 후회하다 굶어 죽었습니다.",
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
