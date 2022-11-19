import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Slider from "./components/Main/Slider/Slider";

function App() {
  const itemsRef = useRef(null);
  const categoriesRef = useRef(null);
  const contactUsRef = useRef(null);

  const itemsRefScroll = () => itemsRef.current.scrollIntoView();
  const categoriesRefScroll = () => categoriesRef.current.scrollIntoView();
  const contactUsRefScroll = () => contactUsRef.current.scrollIntoView();

  return (
    <div className="flex flex-col justify-center">
      <Header
        itemsRefScroll={itemsRefScroll}
        categoriesRefScroll={categoriesRefScroll}
        contactUsRefScroll={contactUsRefScroll}
      />
      <Slider />
      <div className="px-[10px]">
        <Main
          itemsRef={itemsRef}
          categoriesRef={categoriesRef}
          contactUsRef={contactUsRef}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
