import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './page.css';
const Page = ( {title, children} )=>{
    return (
        <>
            <Header />
            <main>
                <h1>{title}</h1>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Page;