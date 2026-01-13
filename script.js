document.addEventListener("DOMContentLoaded", () => {

  let fullness = 0;
  let cruelty = 0;

  const story = document.getElementById("story");
  const choices = document.getElementById("choices");

  function show(text, options = []) {
    story.textContent = text;
    choices.innerHTML = "";

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.onclick = opt.action;
      choices.appendChild(btn);
    });
  }

  document.getElementById("startBtn").onclick = () => {
    show(
      "옛날옛날에, 엄마는 시장에 가다 산에서 호랑이를 만났어요.",
      [
        {
          text: "엄마를 잡아먹는다",
          action: () => {
            fullness += 10;
            cruelty += 10;
            show("호랑이는 엄마를 잡아먹고 엄마로 변장했습니다.");
          }
        },
        {
          text: "잡아먹지 않는다",
          action: () => {
            show("GAME OVER\n호랑이는 후회하다 굶어 죽었습니다.");
          }
        }
      ]
    );
  };

});
