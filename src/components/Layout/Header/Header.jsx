import { ListMenu } from "./Menu/ListMenu";
import { MobileMenuOverlay } from "./Menu/MobileMenuOverlay";

  // const itemsRefScroll = () => itemsRef.current.scrollIntoView({behavior: 'smooth'});
  // const catsRefScroll = () => catsRef.current.scrollIntoView({behavior: 'smooth'});
  // const contactUsRefScroll = () => contactUsRef.current.scrollIntoView({behavior: 'smooth'});
  

export const Header = ({ itemsRefScroll, catsRefScroll, contactUsRefScroll }) => {
  return (
    // Top header
    <header className="flex justify-center">
      <div className="header-menu z-20">
        {/* Logotype icons with text */}
        <a href="/" className="ml-[30px] flex gap-[10px] md:ml-[50px]">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="logo"
            width="44"
            height="33"
          />
          <span className="text-[21px] font-bold">Logotype</span>
        </a>

        {/* Navigation bar for PC resolution*/}
        <nav aria-label="primary-navigation" className="hidden md:block">
          <ListMenu
            itemsRefScroll={itemsRefScroll}
            catsRefScroll={catsRefScroll}
            contactUsRefScroll={contactUsRefScroll}
          />
        </nav>

        {/* Navigation burger icon with menu in overlay for mobile resolution */}
        <MobileMenuOverlay
          itemsRefScroll={itemsRefScroll}
          catsRefScroll={catsRefScroll}ну
          contactUsRefScroll={contactUsRefScroll}
        />

        {/* Login and Register buttons for PC resolutions */}
        <div className="hidden md:flex md:flex-row md:items-center">
          <a href="/">Login</a>
          <a
            href="/"
            className="
            mx-[8px] flex h-[55px]
            w-[123px] items-center justify-center rounded-[42px]
            bg-red-600 px-[28px]
            py-[18px]"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}

