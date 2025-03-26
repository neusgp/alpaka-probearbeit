import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getButtonStyles } from "./lib";

export const Button = ({
  intent,
  icon,
  ariaLabel,
  size,
  isDisabled,
  label,
}: //onClick
{
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
