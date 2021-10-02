let modal = null;
let modalOverlay = null;
const btnModal = document.getElementById("btnModal");

function createModal() {
  modal = document.createElement("div");
  modal.className = "modal modal--sm";
  // NOTE: Using innerHTML is vulnerable to security attacks
  // Prefer using template engine
  modal.innerHTML = `
        <div class="modal__header">Header</div>
        <div class="modal__body">Body</div>
        <div class="modal__footer">Footer</div>
    `;

  modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  document.body.append(modalOverlay);
  document.body.append(modal);
}

function disposeModal() {
  if (modal) {
    modal.remove();
    modal = null;
  }
  if (modalOverlay) {
    modalOverlay.remove();
    modalOverlay = null;
  }
}

btnModal.addEventListener("click", () => {
  if (!modal && !modalOverlay) {
    createModal();
  }
});
