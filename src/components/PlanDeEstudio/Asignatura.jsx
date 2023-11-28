export const Asignatura = ({ asignatura }) => {
    return (
        <section className="bg-gray-200 p-3 self-center w-36 mx-2 shadow-md">
            <h3 className="text-sm font-bold">{asignatura.clacod} ({asignatura.Creditos})</h3>
            <p className="text-gray-700 text-xs">{asignatura.clanom}</p>
        </section>
    )
}