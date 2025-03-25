//These need constants
export type Id = string;

//Button
export type Icon = "only" | "before" | "after" | "none";
export type Intent = "black" | "gray" | "white" | "text";
export type Size = "md" | "sm";

//Products
export type ProductName =
  | "Product A"
  | "Product B"
  | "Product C"
  | "Product D"
  | "Product E"
  | "Product F"
  | "Product G";

export type Product = {
  id: string;
  name: string;
  description: string;
  img: string;
};

//Blog
export type BlogEntry = { id: Id; img: string };
