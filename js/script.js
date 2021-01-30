const img = document.querySelector('#image')
const text = document.querySelector('#text')
const header = document.querySelector('h1')
const inputDate = document.querySelector('input')
const button = document.querySelector('button')
const iframe = document.querySelector('iframe')
const date = new Date()
const maxDate = date.toJSON().slice(0,10) //get the current date as a string to set the maximum date value

inputDate["max"] = maxDate

inputDate.addEventListener('change', setImage)

function setImage(){
	fetch(`https://api.nasa.gov/planetary/apod?date=${inputDate.value}&api_key=fktZNPFrExJcH19jEStMyRclbN3Aa19vKvzkjpFI`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        header.classList.remove('hide')
    	if (data.url.includes('embed')){
            img.classList.add('hide')
            iframe.classList.remove('hide')
            iframe.src = data.url
        } else {
            iframe.classList.add('hide')
            img.classList.remove('hide')
            img.src = data.url
        }
    	header.innerText = data.title
      	text.innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}