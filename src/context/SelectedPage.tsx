/* eslint-disable @typescript-eslint/no-empty-function */
import {
  SetStateAction,
  Dispatch,
  createContext,
  ReactElement,
  useState,
} from "react";
import { SelectedPage } from "../types";

interface ContextProps {
  selectedPage: SelectedPage;
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
}

const initContextState: ContextProps = {
  selectedPage: SelectedPage.Home,
  setSelectedPage: () => {},
};

export const SelectedPageContext =
  createContext<ContextProps>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined | ReactElement[];
};

export const SelectedPageProvider = ({ children }: ChildrenType) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <SelectedPageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </SelectedPageContext.Provider>
  );
};
