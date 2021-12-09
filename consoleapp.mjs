import { Temperature, TemperatureScale } from "temp-test-package";



let t = new Temperature(36, TemperatureScale.Celcius);

console.log(` Temperatura ${t.degrees} ${t.scale} a Farenheit es ${t.ToF()} `)
console.log(` Temperatura ${t.degrees} ${t.scale} a Kelvin es ${t.ToK()} `)
