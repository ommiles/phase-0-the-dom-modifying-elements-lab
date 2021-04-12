const main = document.getElementById(`main`)
main.remove()

const newHeader = document.createElement(`h1`)
document.body.appendChild(newHeader)

newHeader.setAttribute(`id`, `victory`)

const node = document.createTextNode(`Miles is the champion`+`!`)
newHeader.appendChild(node)