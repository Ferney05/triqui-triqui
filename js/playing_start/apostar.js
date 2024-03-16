
const display_sect = document.getElementById('none_apuestas')
const apostar_boton = document.getElementById('apostar_boton')
const input__apuestas = document.getElementById('input__apuestas')
const desblock_modal = document.getElementById('desblock_modal')

const win_lose = document.querySelector('.win_lose')
const apostaron= document.querySelector('.apostaron')

export function add_event_modal(){
    input__apuestas.addEventListener('keyup', () => {
        if(input__apuestas.value.length >= 3){
            apostar_boton.style.display = 'block'
        } else {
            apostar_boton.style.display = 'none'
        }
    })
    
    apostar_boton.addEventListener('click', () => {
        display_sect.style.display = 'none'
    })

    desblock_modal.addEventListener('click', () => {
        display_sect.style.display = 'block'
    })
}




