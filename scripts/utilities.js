export { attachValidator, markInvalid, markValid };

function markValid(...elements) {
  elements.forEach((element) => {
    element.classList.remove("is-invalid");
  });
}

function markInvalid(...elements) {
  elements.forEach((element) => {
    element.classList.add("is-invalid");
  });
}

function attachValidator() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const inputs = document.querySelectorAll("input");
  // Loop over them and prevent submission
  Array.from(inputs).forEach((input) => {
    input.addEventListener(
      "change",
      (event) => {
        if (!input.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          input.classList.add("is-invalid");
        } else {
          input.classList.remove("is-invalid");
        }
      },
      false
    );
  });
}
