import { useContext, useEffect, useState } from "react";
import { Benefits, ContactUs, Footer, Hero, Navbar, OurClasses } from "./components";
import { SelectedPage } from "./types";
import { SelectedPageContext, SelectedPageProvider } from "./context";

export const App = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(isTopOfPage);
        setSelectedPage(SelectedPage.Home);
      }

      // If user is scrolling, update isTopOfPage accordingly
      if (window.scrollY !== 0) setIsTopOfPage(!isTopOfPage);
    };

     // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup by removing the scroll event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SelectedPageProvider>
      <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage} />
        <Hero />
        <Benefits />
        <OurClasses />
        <ContactUs/>
        <Footer />
      </div>
    </SelectedPageProvider>
  );
};
