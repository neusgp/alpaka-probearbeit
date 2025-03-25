export const getProductCardColor = ({ name }: { name: string }) => {
  let color;
  switch (name) {
    case "Product A":
      color = "bg-yellow-dark";
      break;
    case "Product B":
      color = "bg-blue-dark";
      break;
    case "Product C":
      color = "bg-green";
      break;
    case "Product D":
      color = "bg-orange";
      break;
    case "Product E":
      color = "bg-green-dark";
      break;
    case "Product F":
      color = "bg-blue-gray-dark";
      break;
    case "Product G":
      color = "bg-blue-darker";
      break;
  }
  return color;
};
