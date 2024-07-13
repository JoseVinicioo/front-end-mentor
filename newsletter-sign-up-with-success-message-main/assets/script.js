const button = document.querySelector('#botao');
button.addEventListener('click', function () {
    const input = document.querySelector('input')
    const Email = document.querySelector('#emailCampo').value;
    const main = document.querySelector('main')
    const pagSucess = document.querySelector('#pagSucess')
    const dynamicEmail = document.querySelector('#dynamicText')
    for (let i = 0; i < Email.length; i++) {
        if (Email[i] === '@') {
            if (Email.includes('company.com')) {
                input.style.borderColor = 'black'
                main.style.display = 'none'
                pagSucess.style.display = 'block'
                dynamicEmail.innerHTML = `
      A confirmation email has been sent to <strong>${Email}</strong>.
      Please open it and click the button inside to confirm your subscription.`
                body.style.justifyContent = 'center'
            }
            break;
        } else {
            input.style.borderColor = 'red'
        }
    }
    const dispensarButton = document.querySelector('#buttonDispense')
    dispensarButton.addEventListener('click', function () {
        main.style.display = 'flex'
        pagSucess.style.display = 'none'
        input.value = ''
        input.focus()
    })
});
