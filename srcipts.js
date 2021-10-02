let modal = null;
let modalOverlay = null;
let close = null;

let form = null;

const btnModal = document.getElementById("btnModal");

function handleClose() {
  disposeModal();
}

function handleSubmit(ev) {
  console.log(ev);
  ev.preventDefault();
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
        <div class="modal__body">
          <form class='form' id='form'>
            <div class='form__field-group'>
              <div class='form__field-group__label'>
                Start at:
              </div>
              <div class='form__field-group__control'>
                <input name='statAt' type='number' />
              </div>
            </div>
            <div class='form__button-group'>
              <button class='form__button-group--default' type='submit'>
                Ok
              </button>
              <button class='form__button-group--default'>
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div class="modal__footer hide">Footer</div>
    `;

  modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  document.body.append(modalOverlay);
  document.body.append(modal);

  close = document.querySelector(".modal__header__close");
  close.addEventListener("click", handleClose);

  form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);
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
