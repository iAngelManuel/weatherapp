import useWeather from "../hooks/useWeather"
import Header from "./Header"
import Form from "./Form"
import Resultado from "./Resultado"
import Loading from "./Loading"
import Footer from "./Footer"

export default function AppWeather() {
  const { resultado, loading, noResult } = useWeather()
  return (
    <>
    <header className="w-full">
      <Header />
    </header>
    <h1 className="text-2xl text-center font-bold text-gray-700 my-10">Busca el clima en tu ciudad</h1>
    <main className="row gap-10 px-5 md:px-10 w-full">
      <div className="md:w-2/4 mx-auto md:mb-10">
        <Form />
      </div>
      <div className="md:w-2/4 mx-auto md:mb-10">
        {loading ? <Loading /> : resultado?.name ? <Resultado /> : noResult ? <p>{noResult}</p> : null }
      </div>
    </main>
      <Footer />
    </>
  )
}
