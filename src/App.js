import { useRef } from "react";
import { Categories } from "./components/Categories";
import { Contact } from "./components/Contact";
import { Latest } from "./components/Latest/";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  const itemsRef = useRef(null);
  const catsRef = useRef(null);
  const contactUsRef = useRef(null);

  const itemsRefScroll = () =>
    itemsRef.current.scrollIntoView({ behavior: "smooth" });
  const catsRefScroll = () =>
    catsRef.current.scrollIntoView({ behavior: "smooth" });
  const contactUsRefScroll = () =>
    contactUsRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Header up, slider down */}
      <Layout
        itemsRefScroll={itemsRefScroll}
        catsRefScroll={catsRefScroll}
        contactUsRefScroll={contactUsRefScroll}
      >
        <Main />
        <div className="mx-[10px]">
          <Latest itemsRef={itemsRef} />
          <Categories catsRef={catsRef} />
          <Contact contactUsRef={contactUsRef} />
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
}

export default App;
