import './App.css'

import { CardGallery } from './components/CardsGallery/CardsGallery';
import Page from './pages/Page';

import cardData from './data/bakery.json';
import productos from './data/products.json';

function App() {
  return (
    <>
      <Page title="Home Page">
        <section>
          <h2 className="m-4 p-4 bg-blue-400 text-red-400">Seccion XyZ</h2>
          <CardGallery cards={cardData}/>
          <hr/>
          <CardGallery cards={productos}/>
        </section>
      </Page>
    </>
  )
}

export default App
