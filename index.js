/*
Length (Feet/Meters)
1 foot = 0.3048 meters
1 meter = 3.28084 feet

Weight (Pounds/Kilograms)
1 pound = 0.45359237 kilograms
1 kilogram = 2.20462262 pounds

Volume (Gallons/Liters)
1 gallon = 3.78541178 liters
1 liter = 0.26417205 gallons
*/

const darkModeToggle = document.getElementById("switch")
const convertBtn = document.getElementById("convert")
const inputField = document.getElementById("input")
const metersEl = document.getElementById("p-meters")
const poundsEl = document.getElementById("p-pounds")
const gallonsEl = document.getElementById("p-gallons")

convertBtn.addEventListener("click", function() {
    let value = inputField.value
    const conversions = convertUnits(value)
    metersEl.textContent = `${value} Feet = ${conversions.feet} Meters | ${value} Meters = ${conversions.meters} Feet`
    poundsEl.textContent = `${value} Pounds = ${conversions.pounds} Kilograms | ${value} Kilograms = ${conversions.kilograms} Pounds`
    gallonsEl.textContent = `${value} Gallons = ${conversions.gallons} Liters | ${value} Liters = ${conversions.liters} Gallons`
})

function convertUnits(value) {
    const conversionFactors = {
        feet: 0.3048,
        meters: 3.28084,
        pounds: 0.45359237,
        gallons: 3.78541178,
        liters: 0.26417205,
        kilograms: 2.20462262
    }

    const results = {}

    for (const [unit, factor] of Object.entries(conversionFactors))
    {
        results[unit] = Math.floor(value * factor * 1000) / 1000
    }

    return results
}

darkModeToggle.addEventListener("click", () => {

})

/* 

function convertUnits(value) {
    const conversionFactors = {
        feet: 0.3048,
        meters: 3.28084,
        miles: 0.000189394
    }

    const results = {}

    for (const [unit, factor] of Object.entries(conversionFactors)) {
        results[unit] = value * factor
    }

    return results
}


const conversions = convertUnits(10)
console.log(conversions.feet) // Output: 32.8084
console.log(conversions.meters) // Output: 3.048
console.log(conversions.miles) // Output: 0.00189394
*/