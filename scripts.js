// Tab Switching
const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.tab

    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabContents.forEach((content) => content.classList.remove("active"))

    button.classList.add("active")
    document.getElementById(tabId).classList.add("active")
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');

      header.addEventListener('click', function() {
          // Luk andre åbne dropdowns
          const section = accordion.closest('.logbog-section');
          const sectionAccordions = section.querySelectorAll('.accordion');

          sectionAccordions.forEach(item => {
              if (item !== accordion) {
                  item.classList.remove('active');
                  const itemContent = item.querySelector('.accordion-content');
                  itemContent.style.height = "0px";
                  itemContent.style.opacity = "0";
              }
          });

          // Toggle den aktuelle accordion
          if (accordion.classList.contains('active')) {
              accordion.classList.remove('active');
              content.style.height = "0px";
              content.style.opacity = "0";
          } else {
              accordion.classList.add('active');
              content.style.height = content.scrollHeight + "px"; // Dynamisk højde efter indhold
              content.style.opacity = "1";
          }
      });
  });
});




