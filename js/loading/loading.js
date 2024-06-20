
const play_alone = document.getElementById('play_alone')
const play_people = document.getElementById('play_people')
const loading = document.getElementById('loading')

const not_show_play = document.querySelector('.not_show_play')
const loading_text = document.querySelector('.loading_text')

const select_name = document.getElementById('add-name')
const options_plays = document.getElementById('options_plays')

const write_name = document.getElementById('write_name')
const input_name_alone = document.querySelector('.input_name_alone')
const text_alone = document.querySelector('.text_alone')
const boton_next_alone = document.querySelector('.boton_next_alone')

const playing_starting = document.getElementById('hidden-playing')
const hidden_nav_playing = document.getElementById('hidden_nav_playing')
const hidden__welcome = document.getElementById('hidden__welcome')

export function show_loading(){
    play_alone.addEventListener('click', () => {
        let seconds_loading = 5;
    
        const intervalId = setInterval(() => {
            if (seconds_loading > 0) {
                loading.style.display = 'block';
                not_show_play.style.display = 'block'
                loading_text.style.display = 'none'
                seconds_loading--;
            } else {
                clearInterval(intervalId); 
                loading.style.display = 'none';
            }
        }, 1000);
    });
    
    play_people.addEventListener('click', () => {        
        let seconds_loading = 5

        setInterval(() => {
            if(seconds_loading > 0){
                loading.style.display = 'block'
                not_show_play.style.display = 'none'
                loading_text.style.display = 'block'
                seconds_loading--
            } else {
                loading.style.display = 'none'
                options_plays.style.display = 'none'
                select_name.style.display = 'block'
            }
        }, 1000)
    })
}


input_name_alone.addEventListener('keyup', () => {
    if(input_name_alone.value.length > 3){
        text_alone.style = 'color: #228049'
        text_alone.innerText = 'Nombre ingresado correctamente'
    } else {
        text_alone.style = 'color: #c43a3a'
        text_alone.innerText = 'Oops..., debes ingresar tu nombre'
    }
})


export function ShowPlayStartAlone(){
    boton_next_alone.addEventListener('click', () => {
        if(input_name_alone.value.length >= 3){
            write_name.style.display = 'none'
            hidden__welcome.style.display = 'none';
            playing_starting.style.display = 'block'
            hidden_nav_playing.style.display = 'block'
        } else {
            text_alone.style = 'color: #c43a3a'
            text_alone.innerText = 'El campo no debe de estar vacio'
        }
    })
}
