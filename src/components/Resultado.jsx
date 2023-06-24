import useWeather from "../hooks/useWeather"

export default function Resultado() {
  const { resultado } = useWeather()
  const { name, main } = resultado
  const kelvinToCelsius = grados => parseInt(grados - 273.15)
  return (
    <section className="py-5 md:p-0 mt-5 lg:mt-3 mx-auto mb-16">
      <main className="py-10 md:py-20 bg-white rounded-2xl shadow-2xl">
        <div className="flex justify-center">
          <img src="../../public/img/weather.png" alt="weather img" className="w-14 md:w-20 mb-5" />
        </div>
        <div className="row">
          <h3 className="text-center text-2xl mb-10">El Clima en <span className="font-bold">{name}</span></h3>
          <div className="w-full">
            <p className="text-xl text-center font-bold">Temperatura Actual</p>
            <p className="text-center text-3xl font-bold mb-2">{kelvinToCelsius(main.temp)}<span className="font-extrabold">&#x2103;</span></p>
          </div>
          <div className="flex justify-center gap-6">
            <div className="w-full">
              <p className="text-center font-bold mb-2 text-sm lg:text-xl">Mínima:</p>
              <p className="text-center font-extrabold text-xl lg:text-3xl">{kelvinToCelsius(main.temp_min)}<span className="font-extrabold">&#x2103;</span></p>
            </div>
            <div className="w-full">
              <p className="text-center font-bold mb-2 text-sm lg:text-xl">Máxima:</p>
              <p className="text-center font-extrabold text-xl lg:text-3xl">{kelvinToCelsius(main.temp_max)}<span className="font-extrabold">&#x2103;</span></p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className="w-full mt-6">
            <p className="text-center font-bold mb-2 text-sm lg:text-xl">Humedad:</p>
            <p className="text-center font-extrabold text-xl lg:text-3xl">{main.humidity}<span className="font-extrabold">%</span></p>
          </div>
          <div className="w-full mt-6">
            <p className="text-center font-bold mb-2 text-sm lg:text-xl">Sensación Térmica:</p>
            <p className="text-center font-extrabold text-xl lg:text-3xl">{kelvinToCelsius(main.feels_like)}<span className="font-extrabold">&#x2103;</span></p>
          </div>
        </div>
      </main>
    </section>
  )
}
