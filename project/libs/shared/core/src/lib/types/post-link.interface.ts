import { Post } from "@project/core";

export interface PostLink extends Post {
  link: string;
  linkDescription: string;
}
