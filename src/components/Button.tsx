import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Icon, Intent, Size } from "../@types";

const getButtonStyles = ({
  intent,
  size,
  isActive,
  isDisabled = false,
}: {
  intent: Intent;
  size: Size;
  isActive: boolean;
  isDisabled?: boolean;
}): string => {
  let intentStyle: string = "";
  const padding = size === "md" ? "px-6 py-3" : "px-4 py-2";

  switch (intent) {
    case "white":
      intentStyle = isDisabled
        ? `bg-white font-bold rounded-full text-gray-700-fake ${padding}`
        : ` ${
            isActive && "outline"
          } bg-white font-bold rounded-full hover:bg-gray-70 ${padding}`;
      break;
    case "gray":
      intentStyle = isDisabled
        ? `bg-gray-70 font-bold rounded-full text-gray-700-fake ${padding}`
        : `bg-gray-70 font-bold rounded-full hover:bg-gray-dark ${padding} ${
            isActive && "outline"
          }`;
      break;
    case "black":
      intentStyle = isDisabled
        ? `bg-gray-700-fake text-neutral-black font-bold ${padding}`
        : `bg-gray-900-fake font-bold text-white hover:bg-neutral-black ${padding} ${
            isActive && "outline"
          }`;
      break;
    case "text":
      intentStyle = isDisabled
        ? "text-gray-700-fake font-bold py-2"
        : `hover:text-neutral-black py-2 font-bold ${
            isActive ? "text-neutral-black" : "text-gray-900-fake"
          }`;
      break;
  }

  return `flex justify-center items-center gap-2 w-max ${intentStyle} ${
    !isDisabled && "cursor-pointer "
  } rounded-full`;
};

export const Button = ({
  intent,
  icon,
  size,
  ariaLabel,
  isDisabled,
  label,
}: {
  intent: Intent;
  size: Size;
  icon: Icon;
  ariaLabel: string;
  isDisabled?: boolean;
  label?: string;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const buttonStyle = getButtonStyles({ intent, size, isActive, isDisabled });

  const iconIsBefore = icon === "before" || icon === "only";
  const iconIsAfter = icon === "after";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={buttonStyle}
      onClick={() => setIsActive(!isActive)}
      disabled={isDisabled}>
      {iconIsBefore && (
        <FontAwesomeIcon icon={faArrowRight} className="text-[20px]" />
      )}
      {icon !== "only" && (
        <span
          className={
            intent === "text" ? "border border-t-0 border-l-0 border-r-0" : ""
          }>
          {label}
        </span>
      )}
      {iconIsAfter && (
        <FontAwesomeIcon icon={faArrowRight} className="text-[20px]" />
      )}
    </button>
  );
};
