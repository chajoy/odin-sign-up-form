const input_fields = document.querySelectorAll(`input`);

input_fields.forEach(input => {
    input.addEventListener(`blur`, () => {
        validateInput(input);
    })

    input.addEventListener(`input`, () => {
        validateInput(input);
    })
})

const validateInput = function (input) {
    if (!input.validity.valid) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
}