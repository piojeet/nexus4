document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  // Open the first FAQ by default
  faqItems[0].classList.add("active");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active"); // Toggle only clicked item
    });
  });
});
