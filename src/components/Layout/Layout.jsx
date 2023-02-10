import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = ({
  itemsRefScroll,
  catsRefScroll,
  contactUsRefScroll,
  children,
}) => {
  return (
    <>
      <Header 
      itemsRefScroll={itemsRefScroll}
      catsRefScroll={catsRefScroll}
      contactUsRefScroll={contactUsRefScroll}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
