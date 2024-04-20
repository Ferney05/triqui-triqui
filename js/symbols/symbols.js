const boton_next2 = document.getElementById('boton_next2')

const input_name_playerone = document.getElementById('name_playerone')
const input_name_playertwo = document.getElementById('name_playertwo')
const txt_information_name = document.getElementById('information_name')
const section_select_symbols = document.getElementById('select-symbols')

const section_add_name = document.querySelector('.add-name')

export function ShowHiddenSections2() {
    boton_next2.addEventListener('click', () => {
        if (input_name_playerone.value.length >= 3 && input_name_playertwo.value.length >= 3) {
            section_add_name.style.display = 'none';
            section_select_symbols.style.display = 'block';
        } else {
            txt_information_name.innerText = 'Los campos no pueden estar vacios.'
            txt_information_name.classList.add('mensaje_erroneo')
        }
    });
}