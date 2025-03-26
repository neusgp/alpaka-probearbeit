import { useState } from "react";

export const NavLink = ({ label }: { label: string }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const bgColor = isActive ? "bg-green" : " bg-green-light";
  const textColor = isActive
    ? "text-green hover:text-green"
    : "hover:text-green-light";

  return (
    <li className="h-full flex flex-col relative">
      <button
        type="button"
        className={`font-bold cursor-pointer h-full px-3 ${textColor}`}
        onClick={() => setIsActive(!isActive)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        {label}
      </button>
      {(isHover || isActive) && (
        <div
          className={`h-1 w-[100%] rounded-t-lg absolute bottom-0 ${bgColor}`}></div>
      )}
    </li>
  );
};
