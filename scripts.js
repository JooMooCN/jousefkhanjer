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

document.addEventListener('DOMContentLoaded', function () {
  const detailsElements = document.querySelectorAll('details');

  detailsElements.forEach((details) => {
    details.addEventListener('toggle', function () {
      if (details.open) {
        detailsElements.forEach((otherDetails) => {
          if (otherDetails !== details) {
            otherDetails.removeAttribute('open');
          }
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const resourceItems = document.querySelectorAll('.resource-item');

    resourceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'none';
        });
    });
});

const images = [
  "images/logbog-images/app-uge9-10-screenshot.png",
  "images/logbog-images/spil-uge10-11-screenshot.png",
  "images/logbog-images/app-uge9-10-screenshot.png",
  "images/logbog-images/spil-uge10-11-screenshot.png"
];
let currentImageIndex = 0;

function openModal(index) {
  currentImageIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentImageIndex];
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentImageIndex];
}

// Close modal when clicking outside the image
document.addEventListener("click", (event) => {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeModal();
  }
});




