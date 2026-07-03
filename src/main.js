import * as bootstrap from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const triggerTabList = [].slice.call(
    document.querySelectorAll("#pills-tab button"),
  );
  let activeIndex = 0;

  const showNextTab = () => {
    // 次のインデックスを計算
    activeIndex = (activeIndex + 1) % triggerTabList.length;

    // BootstrapのTabインスタンスを取得して表示
    const tab = new bootstrap.Tab(triggerTabList[activeIndex]);
    tab.show();
  };

  // 4秒ごとに切り替え
  setInterval(showNextTab, 4000);
});

window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("fade-out");

    loader.addEventListener("transitionend", () => {
      loader.style.display = "none";
    });
  }, 1000);
});

window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
