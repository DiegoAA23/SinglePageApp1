import menues from './menu.json';
import './header.css';
const Header = ()=>{
    const menuesUx = menues.map((menu)=>{
        return (
            <li key={menu.id}><a href={menu.link}>{menu.label}</a></li>
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