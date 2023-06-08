const ApiKey = "61c95a90dd733830fe0a6c4c94662fcc"
const WeatherData = document.getElementById("weather_data")
const GetInput = document.getElementById('city-input')

const FormEl = document.querySelector('form')

FormEl.addEventListener('submit', (event) => {
    event.preventDefault()
    const Getvalue = GetInput.value
    GetWeatherData(Getvalue)
})

const GetWeatherData = async (Getvalue) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Getvalue}&appid=${ApiKey}&units=metric`)
        if (!response.ok) {
            throw new Error('la respuesta no fue ok')
        }

        const data = await response.json()
        const temperature = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels Like: ${data.main.feels_like}`,
            `Humidity: ${data.main.humidity}`,
            `Wind Speed: ${data.wind.speed}`
        ]
        WeatherData.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png"/>`
    } catch (error) {
        
    }
}