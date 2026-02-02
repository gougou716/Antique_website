document.addEventListener("DOMContentLoaded", () => {
  const targetBook = document.getElementById("target-book");
  const modal = document.getElementById("book-modal");
  const closeModal = document.querySelector(".close-modal");

  if (targetBook && modal) {
    // 點擊圖片打開視窗
    targetBook.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"; // 禁止背景捲動
    });

    // 點擊關閉按鈕
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    // 點擊視窗外部區域關閉
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  // 分類按鈕的切換效果 (視覺回饋)
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
