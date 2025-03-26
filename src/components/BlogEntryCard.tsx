import { Button } from "./Button";

export const BlogEntryCard = ({ blogEntry }: { blogEntry: BlogEntry }) => {
  const { imgUrl } = blogEntry;
  return (
    <li
      className={`aspect-3/4 min-w-[294.5px] bg-center flex flex-col justify-end items-center relative`}>
      <img src={imgUrl} className="w-full h-full rounded-md" />
      <div className="absolute bottom-10">
        <Button
          label="Lorem Ipsum"
          intent="gray"
          icon="none"
          size="md"
          ariaLabel="Read post"
        />
      </div>
    </li>
  );
};
