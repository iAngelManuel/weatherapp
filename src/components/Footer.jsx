export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white text-center py-4 fixed md:fixed bottom-0 w-full">
      <div>
        <p className="text-center text-white text-sm">Todos los derechos reservados &copy; {new Date().getFullYear()} By Angel M</p>
      </div>
    </footer>
  )
}
