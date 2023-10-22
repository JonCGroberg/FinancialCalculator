export { attachValidator, validify };

function validify(...inputs) {
  inputs.forEach((input) => {
    if (input.checkValidity()) {
      input.classList.remove("is-invalid");
    } else {
      input.classList.add("is-invalid");
    }
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
        if (input.checkValidity()) {
          input.classList.remove("is-invalid");
        } else {
          input.classList.add("is-invalid");
          event.preventDefault();
          event.stopPropagation();
        }
      },
      false
    );
  });
}
