const shape = document.getElementById("morph-shape");
const section = document.getElementById("morph-section");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const viewHeight = window.innerHeight;

  // 計算當前區塊進入視窗的比例 (0 到 1)
  let progress = (viewHeight - rect.top) / (viewHeight + rect.height);
  progress = Math.max(0, Math.min(1, progress));

  // 設定變形參數
  // 增加倍率讓圓角變化更快、更明顯
  const insetVal = progress * 25;
  const radiusVal = Math.min(50, progress * 100); // 讓它更快達到 50% 的正圓狀態

  shape.style.clipPath = `inset(${insetVal}% round ${radiusVal}%)`;
});
