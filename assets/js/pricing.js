// pricing tabs js

const pricingTabs = document.querySelectorAll("[data-view]");

pricingTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    pricingTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    $("[data-content]").removeClass("active");
    $(`[data-content="${tab.dataset.view}"]`).addClass("active");
    tab.classList.add("active");
  });
});