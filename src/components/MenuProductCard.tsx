import { Button } from "./Button";

export const MenuProductCard = ({
  label,
  color,
}: {
  label: string;
  color: string;
}) => {
  return (
    <div>
      <div className={`${color} rounded-md`}>
        <img src="/productCard.png" className="aspect-16/9 object-contain" />
      </div>
      <div className="flex flex-col gap-2 !mt-4">
        <p className="!text-[12px] font-light uppercase">products</p>
        <h2>{label}</h2>
        <p className="text-light">
          At proin ipsum massa turpis viverra mi tristique nisi at. Sapien sed
          leo sit faucibus mattis augue morbi leo.
        </p>
      </div>
      <div className="!mt-6">
        <Button
          label="Read more"
          intent="gray"
          ariaLabel="Read more"
          size="md"
          icon="before"
        />
      </div>
    </div>
  );
};
