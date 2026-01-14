let fullness = 0;
let cruelty = 0;

const mainMenu = document.getElementById("mainMenu");
const game = document.getElementById("game");
const startBtn = document.getElementById("startBtn");

const sceneImage = document.getElementById("sceneImage");
const story = document.getElementById("story");
const choices = document.getElementById("choices");
const ending = document.getElementById("ending");

const fullnessBar = document.getElementById("fullnessBar");
const crueltyBar = document.getElementById("crueltyBar");

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

function showScene(image, text) {
  sceneImage.src = "images/" + image;
  story.textContent = text;
  choices.innerHTML = "";
  updateBars();
}

function nextButton(action) {
  const btn = document.createElement("button");
  btn.textContent = "다음";
  btn.onclick = action;
  choices.appendChild(btn);
}

/* ===== 게임 시작 ===== */

startBtn.onclick = () => {
  mainMenu.classList.add("hidden");
  game.classList.remove("hidden");

  /* 1️⃣ 첫 장면 */
  showScene(
    "brother_and_sister.png",
    "옛날옛날 어느 산골 오두막에,\n오누이가 어머니와 함께 살았어요."
  );

  nextButton(() => {

    /* 2️⃣ 엄마 + 호랑이 만남 */
    showScene(
      "tinger_mom.png",
      "그런데 어느날 어머니는 시장에 가다가\n호랑이(player)를 마주쳤어요!"
    );

    nextButton(() => {

      /* 3️⃣ 어머니의 부탁 */
      showScene(
        "tinger_mom.png",
        "오누이의 어머니는 호랑이(player)한테 빌었어요.\n“아이고 호랑이님! 집에 저만 기다리고 있는 아이들이 있어요.. 살려주세요!”"
      );

      nextButton(() => {

        /* 4️⃣ 고민하는 호랑이 */
        showScene(
          "tiger.png",
          "호랑이(player)는 고민에 잠겼어요.\n‘어흥..어떻게 할까? 마침 배고프긴한데..’"
        );

        /* 선택지 */
        const options = [
          {
            text: "잡아먹는다",
            action: () => {
              fullness += 10;
              cruelty += 10;

              showScene(
                "yummy.png",
                "호랑이는 배고픔에 오누이의 어머니를 잡아먹었어요!\n\n호랑이(player) : “으음 맛있군 ㅎㅎ”\n잔혹함 +10, 포만감 +10"
              );
            }
          },
          {
            text: "불쌍하니까 보내준다",
            action: () => {
              ending.style.display = "block";
              ending.textContent = "GAME OVER";
            }
          },
          {
            text: "떡 하나만 주면 안잡아먹는다",
            action: () => {

              showScene(
                "stone_dduk.png",
                "어머니 : ”떡이요? 제가 돌떡 구워드릴게요 이리와보세요.“\n호랑이(player) : ”돌떡? 그게뭐냐?“"
              );

              nextButton(() => {
                showScene(
                  "stone_dduk.png",
                  "어머니 : ”이렇게 불에다가 돌을 올리고 시뻘게지면 얼른 꿀떡 삼켜야해요! 이게 얼마나 별미게요?“"
                );

                nextButton(() => {
                  showScene(
                    "stone_dduk.png",
                    "드디어 돌이 시뻘게졌어요!\n호랑이(player)는 냉큼 달궈진 돌을 삼켰고 그 길로 내장이 다 타버려 죽었답니다!"
                  );

                  nextButton(() => {
                    showScene(
                      "happy_ending.png",
                      "어머니는 호랑이 가죽을 벗겨 시장에 가 호피를 팔았고,\n그 돈으로 고기를 사들고 집에 돌아갔답니다!"
                    );

                    nextButton(() => {
                      ending.style.display = "block";
                      ending.textContent = "Happy Ending";
                    });
                  });
                });
              });
            }
          }
        ];

        choices.innerHTML = "";
        options.forEach(opt => {
          const b = document.createElement("button");
          b.textContent = opt.text;
          b.onclick = opt.action;
          choices.appendChild(b);
        });

      });
    });
  });
};

updateBars();
