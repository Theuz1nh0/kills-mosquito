function gameStart() {
    const level = document.querySelector('#level').value

    if (level === '') {
        const checkAlert = document.querySelector('#checkAlert');

        if (checkAlert) {
            return;
        }

        showAlert('Selecione um nível para iniciar o jogo', 'danger')
        return;
    }

    window.location.href = `app.html?${level}`
}

const alertContainer = document.querySelector('#alertContainer');
function appenAlert(message, type) {
    const wrapper = document.createElement('div');
    wrapper.className = 'col';
    wrapper.id = 'checkAlert'
    wrapper.innerHTML = [
        `<div class="d-flex justify-content-center">`,
        `   <div class="alert alert-${type} position-absolute roll-down" role="alert">`,
        `       <div>${message}</div>`,
        `   </div>`,
        `</div>`
    ].join('')

    alertContainer.append(wrapper)
}

function showAlert(message, type) {
    appenAlert(message, type);

    const checkAlert = document.querySelector('#checkAlert');
    setTimeout(() => {
        checkAlert.remove()
    }, 2000)
}