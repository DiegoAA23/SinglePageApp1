import menues from './menu.json';
import {Link} from 'react-router-dom';
import './header.css';
const Header = ()=>{
    const menuesUx = menues.map((menu)=>{
        return (
            <li key={menu.id}><Link to={menu.link}>{menu.label}</Link></li>
        );
    });
    return (
        <header>
            <h1>Ejemplo SPA con React</h1>
            <nav>
                <ul>
                    {menuesUx}
                </ul>
            </nav>
        </header>
    );
}

export default Header;