import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Htext = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
      {children}
    </h1>
  );
};
