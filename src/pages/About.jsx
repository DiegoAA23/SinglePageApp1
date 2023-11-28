import { useState } from 'react';
import Page from "./Page";
import './About.css';

export const About = () => {
    // useState  return [value, setterFunction]
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const onClickHandler = (e) => {
        e.preventDefault();
        //Validaciones
        console.log(name, email, comment);
    }

    return (
        <Page title="About">
            <form className="form">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input type="email" name="email" id="email" value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="comment">Comentario</label><br />
                    <textarea value={comment} id="comment" name="comment"
                        onChange={(e) => { setComment(e.target.value) }}></textarea>
                </div>
                <div>
                    <button type="submit" onClick={onClickHandler}>Enviar</button>
                </div>
            </form>
        </Page>
    );
}