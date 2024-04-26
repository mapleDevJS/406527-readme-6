/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "type" "PostType" NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" "PostStatus" NOT NULL,
    "current_author_id" TEXT NOT NULL,
    "original_author_id" TEXT,
    "tags" TEXT[],
    "likes" TEXT[],
    "isReposted" BOOLEAN NOT NULL,
    "video_url" TEXT,
    "announcement" TEXT,
    "text" TEXT,
    "text_quote" TEXT,
    "quote_author" TEXT,
    "image_url" TEXT,
    "link" TEXT,
    "link_description" TEXT,
    "original_post_Id" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "posts_title_idx" ON "posts"("title");
