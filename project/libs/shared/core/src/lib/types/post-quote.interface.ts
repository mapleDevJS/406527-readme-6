import { Post } from "@project/core";

export interface PostQuote extends Post {
  textQuote: string;
  quoteAuthor: string;
}
