/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert")
const inputField = document.getElementById("input")
const metersEl = document.getElementById("p-meters")
let conversion;

addEventListener("click", function() {
    conversion = convertToMeters(inputField.value)
    metersEl.textContent = `${inputField.value} Feet = ${conversion} Meters`
})

function convertToMeters (input) {
    input = input * 0.3048
    return Math.floor(input * 1000) / 1000
}
