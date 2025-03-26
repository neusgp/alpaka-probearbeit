import { Button } from "./Button";
import { getProductCardColor } from "./lib";

export const ProductCard = ({ product }: { product: Product }) => {
  const { name, description, img } = product;

  const cardColor = getProductCardColor({ name });

  return (
    <li className={`${cardColor} rounded-md`}>
      <img src={img} />
      <div className="px-4 text-white md:block hidden">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="pl-4 py-6 md:block hidden">
        <Button intent="white" icon="only" ariaLabel="Read more" />
      </div>
    </li>
  );
};
