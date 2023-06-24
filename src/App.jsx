import WeatherProvider from "./context/WeatherProvider"
import AppWeather from "./components/AppWeather"

export default function App() {
  return (
    <WeatherProvider>
      <AppWeather />
    </WeatherProvider>
  )
}
