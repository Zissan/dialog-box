let modal = null;
let modalOverlay = null;
let close = null;
const btnModal = document.getElementById("btnModal");

function handleClose() {
  disposeModal();
}

function createModal() {
  modal = document.createElement("div");
  modal.className = "modal modal--sm";
  // NOTE: Using innerHTML is vulnerable to security attacks
  // Prefer using template engine
  modal.innerHTML = `
        <div class="modal__header">
          Header
          <div class='modal__header__close'>X</div>
        </div>
        <div class="modal__body">Body</div>
        <div class="modal__footer">Footer</div>
    `;

  modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  document.body.append(modalOverlay);
  document.body.append(modal);

  close = document.querySelector(".modal__header__close");
  close.addEventListener("click", handleClose);
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
  if (close) {
    close.removeEventListener("click", handleClose);
    close = null;
  }
}

function handleOpen() {
  if (!modal && !modalOverlay) {
    createModal();
  }
}

btnModal.addEventListener("click", handleOpen);
