-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('Video', 'Text', 'Quote', 'Photo', 'Link');

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('Published', 'Draft');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "type" "PostType" NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
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

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_title_idx" ON "Post"("title");
