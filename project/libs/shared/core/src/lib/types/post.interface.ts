import { PostStatus } from "./post-status.enum";
import { PostType } from "./post-type.enum";
import { Like } from "./like.interface";
import { Comment } from "./comment.interface";

export interface Post {
  id?: string;
  type: PostType;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  status: PostStatus;
  userId: string;
  originalAuthorId?: string;
  tags?: string[];
  likes: Like[];
  isReposted: boolean;
  comments: Comment[];
  originalPostId?: string;
}
