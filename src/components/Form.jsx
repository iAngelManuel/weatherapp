import useWeather from "../hooks/useWeather"
import Alert from "./Alert"

export default function Form() {

  const { busqueda, datosBusqueda, consultarClima, alerta, setAlerta } = useWeather()
  const { city, country } = busqueda
  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(busqueda).includes('')) {
      return setAlerta('Todos los campos son obligatorios')
    }
    consultarClima(busqueda)
  }
  return (
    <div className="py-5 md:p-0 mt-5 lg:mt-3 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="p-5 bg-white rounded-2xl shadow-2xl"
        >
        {alerta && <Alert alerta={alerta} />}
        <div className="mb-8">
          <label htmlFor="city" className="block mb-2 text-sm font-bold text-gray-700 uppercase">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Ciudad"
            value={city}
            onChange={datosBusqueda}
            className="w-full p-5 border-l leading-tight text-gray-700 rounded-lg shadow-lg appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="country" className="block mb-2 text-sm font-bold text-gray-700 uppercase">País</label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={datosBusqueda}
            className="w-full p-5 border-l leading-tight text-gray-700 rounded-lg shadow-lg appearance-none focus:outline-none focus:shadow-outline"
          >
            <option value="">--Seleccione un país--</option>
            <option value="US">Estados Unidos</option>
            <option value="CO">Colombia</option>
            <option value="AR">Argentina</option>
            <option value="MX">México</option>
            <option value="CR">Costa Rica</option>
            <option value="PE">Perú</option>
            <option value="ES">España</option>
          </select>
        </div>
        <div className="flex mt-3 w-full justify-end">
          <input
            type="submit"
            value="Buscar clima"
            className="w-full md:w-auto p-2 font-bold text-white bg-indigo-600 rounded-lg shadow-lg uppercase cursor-pointer hover:bg-indigo-700 hover:shadow-none"
          />
        </div>
      </form>
    </div>
  )
}
