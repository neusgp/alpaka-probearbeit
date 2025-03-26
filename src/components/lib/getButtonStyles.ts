import { getPadding } from "./getPadding";

export const getButtonStyles = ({
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
