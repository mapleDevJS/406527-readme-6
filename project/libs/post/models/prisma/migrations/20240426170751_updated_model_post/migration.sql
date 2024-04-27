/*
  Warnings:

  - You are about to drop the column `current_author_id` on the `posts` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "current_author_id",
ADD COLUMN     "user_id" TEXT NOT NULL;
