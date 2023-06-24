import { useState, createContext } from 'react'
import axios from "axios"

export const WeatherContext = createContext()
const WeatherProvider = ({ children }) => {
  const [ busqueda, setBusqueda ] = useState({
    city: '',
    country: ''
  })
  const [ resultado, setResultado ] = useState({})
  const [ alerta, setAlerta ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ noResult, setNoResult ] = useState(false)

  const datosBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }
  const consultarClima = async datos => {
    setAlerta('')
    setLoading(true)
    setNoResult(false)
    try {
      const { city, country } = datos
      const appId = import.meta.env.VITE_API_KEY
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=${1}&appid=${appId}`
      const { data } = await axios(url)
      const { lat, lon } = data[0]
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      const { data: dataWeather } = await axios(urlClima)
      setResultado(dataWeather)
    } catch (err) {
      setNoResult('No se encontraron resultados')
    } finally {
      setLoading(false)
    }
  }
  return (
    <WeatherContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        alerta,
        setAlerta,
        resultado,
        loading,
        noResult
      }}
    >{children}</WeatherContext.Provider>
  )
}
export default WeatherProvider
