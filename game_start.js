// function to check if the level was selected 
function gameStart() {
    const level = document.querySelector('#level').value

    if (level === '') {
        const checkAlert = document.querySelector('#checkAlert');

        // if there is already an alert being shown on the screen, return
        if (checkAlert) {
            return;
        }

        showAlert('Selecione um nível para iniciar o jogo', 'danger')
        return;
    }

    // run the game
    window.location.href = `app.html?${level}`
}

// create the alert
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

// show and remove the alert
function showAlert(message, type) {
    appenAlert(message, type);

    const checkAlert = document.querySelector('#checkAlert');
    setTimeout(() => {
        checkAlert.remove()
    }, 2000)
}