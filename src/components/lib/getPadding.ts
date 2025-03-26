export const getPadding = ({
  size,
  icon,
}: {
  size?: Size;
  icon: Icon;
}): string => {
  if (!!size) {
    return size === "md" ? "px-6 py-3" : "px-4 py-2";
  } else if (icon === "only") {
    return "p-[10px]";
  } else {
    return "py-2";
  }
};
