import planDeEstudioData from './if01002.json';
import {Bloque} from './Bloque';

export const PlanDeEstudio = () => {
    const bloques = planDeEstudioData.Bloques.map((bloque) => {
        return (<Bloque key={bloque.CrCBloque} bloque={bloque} />)
    });
    return (
        <>
            {bloques}
        </>
    );
}