// Theme Switching
const themeSwitch = document.querySelector(".theme-switch")
const lightLogo = document.querySelector(".light-logo")
const darkLogo = document.querySelector(".dark-logo")

function toggleTheme() {
  document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark"
  updateLogo()
}

function updateLogo() {
  const isDark = document.body.dataset.theme === "dark"
  lightLogo.style.display = isDark ? "none" : "block"
  darkLogo.style.display = isDark ? "block" : "none"
}

themeSwitch.addEventListener("click", toggleTheme)

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

// Sprint Boxes Generation
const appSprints = document.getElementById("app-sprints")
const unitySprints = document.getElementById("unity-sprints")
const modal = document.querySelector(".modal")
const modalTitle = document.getElementById("modal-title")
const modalContent = document.getElementById("modal-content")
const closeModal = document.querySelector(".close-modal")

// Sample sprint data
const sprintData = {
  app: [
    {
      week: 1,
      title: "Introduktion til App Udvikling",
      content: "Første uge med fokus på grundlæggende app-udvikling og setup af udviklingsmiljø.",
    },
    { week: 2, title: "UI Design", content: "Arbejde med brugergrænseflader og design principper." },
  ],
  unity: [
    { week: 1, title: "Unity Basics", content: "Introduktion til Unity engine og basic gameplay mekanikker." },
    { week: 2, title: "2D Game Development", content: "Udvikling af simple 2D spil og sprite animation." },
  ],
}

// Generate sprint boxes
function createSprintBox(sprint, container) {
  const box = document.createElement("div")
  box.className = "sprint-box"

  // Add week image
  const img = document.createElement("img")
  img.src = `images/week-${sprint.week}.jpeg`
  img.alt = `Uge ${sprint.week}`
  box.appendChild(img)

  // Add week number
  const title = document.createElement("h3")
  title.textContent = `Uge ${sprint.week}`
  box.appendChild(title)

  // Add click instruction
  const instruction = document.createElement("p")
  instruction.textContent = "Klik på mig for at se mere"
  box.appendChild(instruction)

  box.addEventListener("click", () => showModal(sprint))
  container.appendChild(box)
}

// Generate sprint boxes if on the logbog page
if (appSprints && unitySprints) {
  sprintData.app.forEach((sprint) => createSprintBox(sprint, appSprints))
  sprintData.unity.forEach((sprint) => createSprintBox(sprint, unitySprints))
}

// Modal functionality
function showModal(sprint) {
  modalTitle.textContent = sprint.title
  modalContent.textContent = sprint.content
  modal.style.display = "flex"
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
  })
}

// Contact form handling
const contactForm = document.querySelector(".contact-form")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  // Add your form submission logic here
  alert("Tak for din besked! Jeg vender tilbage hurtigst muligt.")
  contactForm.reset()
})

// Update the contact tab click handler
document.querySelector('[data-tab="kontakt"]').addEventListener("click", (e) => {
  e.preventDefault()
  // Switch to Om mig tab and scroll to contact form
  document.querySelector('[data-tab="om-mig"]').click()
  document.getElementById("kontakt-sektion").scrollIntoView({ behavior: "smooth" })
})

// Active nav link
const currentPage = window.location.pathname.split("/").pop()
const navLinks = document.querySelectorAll("nav a")

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active")
  }
})

