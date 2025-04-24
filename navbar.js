document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuPanel = document.getElementById("menuPanel");
  const overlay = document.getElementById("overlay");
  const menuLinks = document.querySelectorAll(".menu-link");

  let isMenuOpen = false;

  const updateMenu = () => {
    if (isMenuOpen) {
      menuPanel.classList.remove("hidden");
      void menuPanel.offsetWidth; // 強制觸發 reflow 讓動畫生效
      menuPanel.classList.add("show");
      overlay.classList.remove("hidden");
      overlay.classList.add("show");
      menuBtn.textContent = "Close";
    } else {
      menuPanel.classList.remove("show");
      overlay.classList.remove("show");
      menuBtn.textContent = "Menu";

      setTimeout(() => {
        if (!isMenuOpen) {
          menuPanel.classList.add("hidden");
          overlay.classList.add("hidden");
        }
      }, 800); // 要和 CSS transition 時間一致
    }
  };

  menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    updateMenu();
  });

  overlay.addEventListener("click", () => {
    isMenuOpen = false;
    updateMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false;
      updateMenu();
    });
  });
});

// footer
// 滾動回到頁面頂端的功能
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// 綁定點擊事件
const backToTopBtn = document.getElementById("backToTopBtn");
backToTopBtn.addEventListener("click", scrollToTop);
