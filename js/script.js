const img = document.querySelector('#image')
const text = document.querySelector('#text')
const header = document.querySelector('h1')
const inputDate = document.querySelector('input')
const button = document.querySelector('button')
const video = document.querySelector('#video')
const date = new Date()
const maxDate = date.toJSON().slice(0,10) //get the current date to set the maximum date value

inputDate["max"] = maxDate

inputDate.addEventListener('change', setImage)
// inputDate.addEventListener('change', logEvent)

function logEvent(){
	// console.log(inputDate.value)
}

function setImage(){
	fetch(`https://api.nasa.gov/planetary/apod?date=${inputDate.value}&api_key=fktZNPFrExJcH19jEStMyRclbN3Aa19vKvzkjpFI`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

    	if (data.url.includes('youtube')){
    		text.innerText = "This one's invalid. Try another date"
    		return
    	}

    	// console.log(data)
    	img.src = data.url
    	header.innerText = data.title
      	text.innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}