/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

const convertBtn = document.getElementById("convert")
const inputField = document.getElementById("input")
const metersEl = document.getElementById("p-meters")

//let inputValue = inputField.value
//.textContent = "0 Feet = 0.000 Meters | 0 Meters = 0.000 Feet"
let conversion;


addEventListener("click", function() {
    let inputValue = inputField.value
    conversion = convertFunction(inputValue)
    metersEl.textContent = `${inputValue} Feet = ${conversion} Meters`
})

function convertFunction(inputValue) {
    const conversionFactors = {
        feet: 0.3048,
        meters: 3.28084,
        miles: 0.000189394
    }

    const results = {}

    for (const [unit, factor] of Object.entries(conversionFactors))
    {
        results[unit] = value * factor
    }

    return results
}

/* 

```javascript
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
```

This function takes a `value` parameter and returns an object containing the converted values for feet, meters, and miles. You can call this function with a value and then access the converted values like this:

```javascript
const conversions = convertUnits(10)
console.log(conversions.feet) // Output: 32.8084
console.log(conversions.meters) // Output: 3.048
console.log(conversions.miles) // Output: 0.00189394
```
*/