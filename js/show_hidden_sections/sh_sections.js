
const boton_next2 = document.getElementById('boton_next2')

const section_none_box = document.getElementById('none-box')
const section_add_name = document.getElementById('add-name')
const section_select_symbols = document.getElementById('select-symbols')

const input_name_playerone = document.getElementById('name_playerone')
const input_name_playertwo = document.getElementById('name_playertwo')
const txt_information_name = document.getElementById('information_name')

const info_playerone = document.getElementById('info_playerone')
const info_playertwo = document.getElementById('info_playertwo')

const symbol_x1 = document.getElementById('symbol-x1')
const symbol_x2 = document.getElementById('symbol-x2')
const symbol_o1 = document.getElementById('symbol-o1')
const symbol_o2 = document.getElementById('symbol-o2')

const player_nametwo_symbol = document.getElementById('player_nametwo_symbol')

const hidden_modal = document.querySelector('.hidden-modal')

const botonend_play = document.getElementById('botonend_play')
const playing_starting = document.getElementById('hidden-playing')
const hidden_nav_playing = document.getElementById('hidden_nav_playing')
const body = document.querySelector('.body')
const hidden__welcome = document.getElementById('hidden__welcome')

const time_wait = document.getElementById('time_wait')

const content_alertinfo = document.querySelector('.content_alertinfo')
const time_delete = document.querySelector('.time_delete')


// ----------------------------------------------------------------------------------------------------------

export function VerificarInputs() {
    input_name_playerone.addEventListener('keyup', () => {
        if (input_name_playerone.value.length >= 1) {
            txt_information_name.classList.remove('mensaje_erroneo')
            txt_information_name.textContent = '¡Nombre del jugador 1 registrado! Ahora ingresa el nombre del jugador 2.';
            txt_information_name.classList.add('mensaje_correcto')
        } else {
            txt_information_name.textContent = 'Oops..., el nombre del Jugador 1 no puede estar vacío.';
            txt_information_name.classList.add('mensaje_erroneo')
        } 
    });

    input_name_playerone.addEventListener('keyup', () => {
        if (input_name_playerone.value.length >= 1 && input_name_playertwo.value.length >= 1) {
            txt_information_name.textContent = '¡Nombre del jugador 1 registrado!.';
            txt_information_name.classList.add('mensaje_correcto')
        } 
    });

    input_name_playertwo.addEventListener('keyup', () => {
        if (input_name_playertwo.value.length >= 1) {
            txt_information_name.classList.remove('mensaje_erroneo')
            txt_information_name.textContent = '¡Nombre del jugador 2 registrado! Ahora ingresa el nombre del jugador 1.';
            txt_information_name.classList.add('mensaje_correcto')
        } else {
            txt_information_name.textContent = 'Oops..., el nombre del Jugador 2 no puede estar vacío.';
            txt_information_name.classList.add('mensaje_erroneo')
        }
    });

    input_name_playertwo.addEventListener('keyup', () => {
        if (input_name_playertwo.value.length >= 1 && input_name_playerone.value.length >= 1) {
            txt_information_name.textContent = '¡Nombre del jugador 2 registrado!.';
            txt_information_name.classList.add('mensaje_correcto')
        } 
    });
}

export function ShowHiddenSections2() {
    boton_next2.addEventListener('click', () => {
        if (input_name_playerone.value.length >= 1 && input_name_playertwo.value.length >= 1) {
            section_add_name.style.display = 'none';
            section_select_symbols.style.display = 'block';
        } else {
            txt_information_name.innerText = 'Los campos no pueden estar vacios.'
            txt_information_name.classList.add('mensaje_erroneo')
        }
    });
}

export function replaceTextSymbols() {
    boton_next2.addEventListener('click', () => {
        info_playerone.innerHTML = `${input_name_playerone.value}, por favor selecciona tu símbolo.`;
    })
}

export function selectSymbols(){
    symbol_x1.addEventListener('click', () => {
        symbol_x1.classList.add('back_select')
        symbol_o2.classList.add('back_select')

        symbol_x2.classList.add('back_no_select')
        symbol_o1.classList.add('back_no_select')

        info_playerone.innerHTML = `${input_name_playerone.value}, tu símbolo es: `;
        info_playertwo.innerHTML = `${input_name_playertwo.value}, tu símbolo es: `;

        player_nametwo_symbol.style.display = 'block'
        
        let seconds = 5;
        let time = 6;

        const combinedInterval = setInterval(() => {
            if (seconds >= 0) {
                time_wait.textContent = `Espera ${seconds} seg...`;
                seconds--;
            }

            if (time > 0) {
                time--;
            } else {
                hidden_modal.style.display = 'inline-flex';
            }

            if (seconds < 0 && time === 0) {
                clearInterval(combinedInterval);
                time_wait.innerHTML = '';
                hidden_modal.style.display = 'inline-flex';
            }
        }, 1000);
    })

    symbol_o1.addEventListener('click', () => {
        symbol_o1.classList.add('back_select')
        symbol_x2.classList.add('back_select')

        symbol_o2.classList.add('back_no_select')
        symbol_x1.classList.add('back_no_select')

        info_playerone.innerHTML = `${input_name_playerone.value}, tu símbolo es: `;
        info_playertwo.innerHTML = `${input_name_playertwo.value}, tu símbolo es: `;

        player_nametwo_symbol.style.display = 'block'
        
        let seconds = 5;
        let time = 6;

        const combinedInterval = setInterval(() => {
            if (seconds >= 0) {
                time_wait.textContent = `Espera ${seconds} seg...`;
                seconds--;
            }

            if (time > 0) {
                time--;
            } else {
                hidden_modal.style.display = 'inline-flex';
            }

            if (seconds < 0 && time === 0) {
                clearInterval(combinedInterval);
                time_wait.innerHTML = '';
                hidden_modal.style.display = 'inline-flex';
            }
        }, 1000);
    })
}

export function ShowPlayStart() {

    let seconds_info = 10

    botonend_play.addEventListener('click', () => {
        section_select_symbols.style.display = 'none';
        hidden__welcome.style.display = 'none';
        hidden_modal.style.display = 'none';
        playing_starting.style.display = 'block';
        playing_starting.style.position = 'absolute';
        body.style.backgroundColor = '#1e1e2c';
        hidden_nav_playing.style.display = 'inline-flex';
        content_alertinfo.style.display = 'block'

        setInterval(() => {
            if (seconds_info > 0){
                time_delete.innerHTML = `${seconds_info}`
                body.classList.add('none_cursor')
                seconds_info--
            } else {
                content_alertinfo.style.display = 'none'
                body.classList.remove('none_cursor')
            }
        }, 1000)
    });
}


