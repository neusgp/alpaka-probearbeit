//These need constants
declare type Id = string;

//Button
declare type Icon = "only" | "before" | "after" | "none";
declare type Intent = "black" | "gray" | "white" | "text";
declare type Size = "md" | "sm";

//Products
declare type ProductName =
  | "Product A"
  | "Product B"
  | "Product C"
  | "Product D"
  | "Product E"
  | "Product F"
  | "Product G";

declare type Product = {
  id: string;
  name: string;
  description: string;
  img: string;
};

//Blog
declare type BlogEntry = { id: Id; imgUrl: string };
