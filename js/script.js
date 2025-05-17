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


let menuBtn = document.querySelectorAll('.menu-btn');
let menuList = document.querySelectorAll('.navbar__menu');

menuBtn.forEach(menu => (
  menu.addEventListener('click', ()=> {
    menuList.forEach(list => (
      list.classList.toggle('active')
    ))
    menu.classList.toggle('active');
  })
))