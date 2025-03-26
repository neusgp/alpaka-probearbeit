import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const getPadding = ({ size, icon }: { size?: Size; icon: Icon }): string => {
  if (!!size) {
    return size === "md" ? "px-6 py-3" : "px-4 py-2";
  } else if (icon === "only") {
    return "p-[10px]";
  } else {
    return "py-2";
  }
};

const getButtonStyles = ({
  intent,
  isActive,
  icon,
  size,
  isDisabled = false,
}: {
  intent: Intent;
  isActive: boolean;
  icon: Icon;
  size?: Size;
  isDisabled?: boolean;
}): string => {
  let intentStyle: string = "";
  const padding = getPadding({ size, icon });

  switch (intent) {
    case "white":
      intentStyle = isDisabled
        ? `bg-white font-bold rounded-full text-gray-700-fake`
        : ` ${
            isActive && "outline"
          } bg-white font-bold rounded-full hover:bg-gray-70`;
      break;
    case "gray":
      intentStyle = isDisabled
        ? `bg-gray-70 font-bold rounded-full text-gray-700-fake `
        : `bg-gray-70 font-bold rounded-full hover:bg-gray-dark ${
            isActive && "outline"
          }`;
      break;
    case "black":
      intentStyle = isDisabled
        ? `bg-gray-700-fake text-neutral-black font-bold`
        : `bg-gray-900-fake font-bold text-white hover:bg-neutral-black ${
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

  return `flex justify-center items-center gap-2 w-max ${padding} ${intentStyle} ${
    !isDisabled && "cursor-pointer "
  } rounded-full`;
};

export const Button = ({
  intent,
  icon,
  ariaLabel,
  size,
  isDisabled,
  label,
}: {
  intent: Intent;
  icon: Icon;
  ariaLabel: string;
  size?: Size;
  isDisabled?: boolean;
  label?: string;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const buttonStyle = getButtonStyles({
    intent,
    size,
    icon,
    isActive,
    isDisabled,
  });

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
        <div className="w-5 h-5">
          <FontAwesomeIcon icon={faArrowRight} className="text-[20px]" />
        </div>
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
        <div className="w-5 h-5">
          <FontAwesomeIcon icon={faArrowRight} className="text-[20px]" />
        </div>
      )}
    </button>
  );
};
