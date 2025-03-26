import { JSX } from "react";

export const FooterCard = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <p className="font-bold">{title}</p>
      {children}
    </div>
  );
};
