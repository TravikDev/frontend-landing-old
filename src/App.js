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
  const categoriesRef = useRef(null);
  const contactUsRef = useRef(null);

  const itemsRefScroll = () => itemsRef.current.scrollIntoView();
  const categoriesRefScroll = () => categoriesRef.current.scrollIntoView();
  const contactUsRefScroll = () => contactUsRef.current.scrollIntoView();

  return (
    <>
      <Header
        itemsRefScroll={itemsRefScroll}
        categoriesRefScroll={categoriesRefScroll}
        contactUsRefScroll={contactUsRefScroll}
      />
      <Slider />
      <div className="px-[10px]">
        <Latest itemsRef={itemsRef} />

        <Categories categoriesRef={categoriesRef} />

        <ContactUs contactUsRef={contactUsRef} />
      </div>
      <Footer />
    </>
  );
}

export default App;
