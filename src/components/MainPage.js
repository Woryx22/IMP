

import Contact from "./Contact"
import Header from "./Header"
import Introduction from "./Introduction"
import Main from "./Main"
import FamilyPhotos from "./FamilyPhotos"
import WeddingPhotos from "./WeddingPhotos"
import PairPhotos from "./PairPhotos"
import HorsePhotos from "./HorsePhotos"
import CookieConsent from "./CookieConsent"
import Pricing from "./Pricing"
import GalleryView from "./GalleryView"


const MainPage = () => {
  return (
    <div>
          <Header />
          <Main />
          <Introduction />
          <FamilyPhotos />
          <WeddingPhotos/>
          <PairPhotos/>
          <HorsePhotos/>
          <Pricing/>
          <Contact />
          <CookieConsent/>
          <GalleryView/>

      </div>

  )
}


export default MainPage