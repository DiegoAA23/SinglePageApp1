import {Asignatura} from './Asignatura';
export const Bloque = ({ bloque }) => {
    const asignaturas = bloque.Carreras[0].asignaturas.map((asignatura) => {
        return (<Asignatura key={asignatura.clacod} asignatura={asignatura} />)
    });
    return (
        <section key={bloque.BloqueNom} className='flex flex-row flex-wrap justify-between'>
            <section className="bg-gray-200 p-4 self-center">
                <h3 className="text-2xl font-bold">{bloque.BloqueNom}</h3>
            </section>
            <section className="flex flex-row flex-wrap justify-between">
                {asignaturas}
            </section>
        </section>
    )
}