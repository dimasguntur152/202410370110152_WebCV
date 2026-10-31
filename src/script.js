const menuButton = document.getElementById("menuButton");
const menuPopup = document.getElementById("menuPopup");
const contactButton = document.getElementById("contactButton");
const contactPopup = document.getElementById("contactPopup");

menuButton.addEventListener("click", event => {
    event.stopPropagation();
    menuPopup.classList.toggle("active");
    contactPopup.classList.remove("active");
});

if (contactButton) {
    contactButton.addEventListener("click", event => {
        event.stopPropagation();
        contactPopup.classList.toggle("active");
        menuPopup.classList.remove("active");
    });
}

document.querySelectorAll(".menu-popup a").forEach(link => {
    link.addEventListener("click", () => {
        menuPopup.classList.remove("active");
    });
});

document.querySelectorAll(".contact-popup a").forEach(link => {
    link.addEventListener("click", () => {
        contactPopup.classList.remove("active");
    });
});

document.addEventListener("click", event => {
    if (!menuPopup.contains(event.target) && !menuButton.contains(event.target)) {
        menuPopup.classList.remove("active");
    }
    if (!contactPopup.contains(event.target) && (!contactButton || !contactButton.contains(event.target))) {
        contactPopup.classList.remove("active");
    }
});

// Modal Sertifikat
const modal = document.getElementById("certificateModal");
const modalClose = document.getElementById("modalClose");
const certificateImage = document.getElementById("certificateImage");
const certificateInfo = document.getElementById("certificateInfo");
const certificateTitle = document.getElementById("certificateTitle");
const certificateDescription = document.getElementById("certificateDescription");

document.querySelectorAll(".achievement-card, .training-card").forEach(card => {
    card.addEventListener("click", () => {
        certificateImage.src = card.dataset.certificate || "";
        certificateTitle.textContent = card.dataset.title || "";
        certificateInfo.textContent = card.dataset.info || "";
        certificateDescription.textContent = card.dataset.description || "";
        modal.classList.add("active");
    });
});

function closeModal() {
    modal.classList.remove("active");
    certificateImage.src = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
    }
});