import { Post } from "@project/core"

export interface PostText extends Post {
  announcement: string;
  text: string;
}
