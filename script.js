const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const miliseconds = document.querySelector('.miliseconds')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')	
const reset = document.querySelector('.reset')

let timeMs = 0
let timeS = 1
let timeM = 1
	

start.addEventListener('click', () => {

	let int = setInterval(add60, 1000/60)

	stop.addEventListener('click', () => {
		clearInterval(int)
	})

	reset.addEventListener('click', () => {
		if (timeMs > 0) {
			minutes.innerText = '00'
			miliseconds.innerText = '00'
			seconds.innerText = '00'
			timeM = 0
			timeS = 1
			timeMs = 1
		}
		clearInterval(int)
	})
	
})

/*function zero(){
		return (timeMs < 10)? miliseconds.innerText = '0' + timeMs : timeMs
		return (timeS < 10)? seconds.innerText = '0' + timeS : timeS
		return (timeM < 10)? timeM = '0' + timeM : timeM
	}  */

function add60() {
	timeMs++
	if (timeMs > 60) {
		timeMs = 0
		return (timeS < 10)? seconds.innerText = '0' + timeS++ : seconds.innerText = timeS++
	} else if (timeS > 60){
		timeS = 0
		return (timeM < 10)? minutes.innerText = '0' + timeM++ : minutes.innerText = timeS++
		}	else {
		return (timeMs < 10)? miliseconds.innerText = '0' + timeMs : miliseconds.innerText = timeMs	
	}
}

/*function add60() {
	timeMs++
	if(timeMs < 10){
		miliseconds.innerText = '0' + timeMs
	} else if (timeMs > 60) {
		timeMs = 0
		return seconds.innerText = timeS++
	} else if (timeS > 60){
		timeS = 0
		return minutes.innerText = timeM++
		}	else if (timeMs > 10 && timeMs < 60) {
		return miliseconds.innerText = timeMs	
	}
} */