import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Categories from "./components/Main/Categories/Categories";
import ContactUs from "./components/Main/Contact/ContactUs";
import Slider from "./components/Main/Slider/Slider";
import Latest from "./components/Main/Latest/Latest";

function App() {
  const itemsRef = useRef(null);
  const catsRef = useRef(null);
  const contactUsRef = useRef(null);

  const itemsRefScroll = () => itemsRef.current.scrollIntoView();
  const catsRefScroll = () => catsRef.current.scrollIntoView();
  const contactUsRefScroll = () => contactUsRef.current.scrollIntoView();

  return (
    <>
      <Slider />
      <Header
        itemsRefScroll={itemsRefScroll}
        catsRefScroll={catsRefScroll}
        contactUsRefScroll={contactUsRefScroll}
      />
      <main aria-label="primary-navigation">
        <div className="px-[10px]">
          <Latest itemsRef={itemsRef} />

          <Categories catsRef={catsRef} />

          <ContactUs contactUsRef={contactUsRef} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
