
const play_alone = document.getElementById('play_alone')
const play_people = document.getElementById('play_people')
const loading = document.getElementById('loading')
const select_name = document.getElementById('add-name')
const options_plays = document.getElementById('options_plays')

export function show_loading(){
    play_alone.addEventListener('click', () => {
        let seconds_loading = 5

        setInterval(() => {
            if(seconds_loading > 0){
                loading.style.display = 'block'
                seconds_loading--
            } else {
                loading.style.display = 'none'
                options_plays.style.display = 'none'
            }             
        }, 1000)
    })
    
    play_people.addEventListener('click', () => {        
        let seconds_loading = 5

        setInterval(() => {
            if(seconds_loading > 0){
                loading.style.display = 'block'
                seconds_loading--
            } else {
                loading.style.display = 'none'
                options_plays.style.display = 'none'
                select_name.style.display = 'block'
            }
        }, 1000)
    })
}

