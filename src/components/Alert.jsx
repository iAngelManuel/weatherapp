export default function Alert({ alerta }) {
  return (
    <div className="w-full border-l-8 border-red-600 bg-red-200 p-2 rounded mb-3">
      <p className="text-gray-600 text-center font-bold">{alerta}</p>
    </div>
  )
}
