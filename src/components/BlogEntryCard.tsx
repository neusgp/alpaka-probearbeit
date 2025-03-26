import { Button } from "./Button";

export const BlogEntryCard = () => {
  return (
    <div
      className={`aspect-3/4 min-w-[294.5px] bg-[url(/7.png)] bg-center rounded-md flex flex-col justify-end items-center pb-10`}>
      <Button
        label="Lorem Ipsum"
        intent="gray"
        icon="none"
        size="md"
        ariaLabel="Read post"
      />
    </div>
  );
};
