export default function Header() {
  return (
    <>
      <nav className="flex justify-between items-center fixed top-0 w-full bg-indigo-600 p-5">
        <div className="flex row items-center">
          <img
            src="../../public/img/logo.png"
            alt="logo"
            className="w-12 cursor-pointer"
          />
          <p className="text-white font-bold cursor-pointer">WeatherApp</p>
        </div>
        <div className="mr-5">
          <p className="text-white text-center font-bold cursor-pointer">By Angel M</p>
        </div>
      </nav>
    </>
  )
}
