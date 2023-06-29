import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";
import { ActionButton, Link } from "../utils";
import { useMediaQueries } from "../hooks";
import { useContext, useState } from "react";
import { SelectedPageContext } from "../context";

type Props = {
  isTopOfPage: boolean;
};

export const Navbar = ({ isTopOfPage }: Props) => {
  const {selectedPage, setSelectedPage} = useContext(SelectedPageContext);
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQueries("(min-width: 1060px)");
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  const links: string[] = ["Home", "Benefits", "Our Classes", "Contact Us"];
  return (
    <nav>
      <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img
              alt="logo"
              src={Logo}
            />
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {links.map((link) => (
                    <Link
                      page={link}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {links.map((link) => (
              <Link
                page={link}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
