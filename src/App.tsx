import './App.css'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { LatestArticle } from './latest-article/LatestArticle'
import { Navigation } from './navigation/Navigation'
import { Offers } from './offers/Offers'
import { Services } from './services/Services'
import SliderApp from './slider/Slider'

function App() {
  return (
    <>
    <Navigation />
    <Header />
    <Services/>
    <Offers />
    <SliderApp />
    <LatestArticle />
    <Footer />
    </>
  )
}

export default App
