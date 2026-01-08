document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const arrow = item.querySelector(".arrow");

    question.addEventListener("click", () => {
      item.classList.toggle("active");

      const isOpen = item.classList.contains("active");
      arrow.textContent = isOpen ? "⌃" : "⌄";
    });
  });
});
