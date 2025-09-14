/*
  Warnings:

  - You are about to drop the column `authorId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publication_date` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `views` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Blog" DROP CONSTRAINT "Blog_authorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "authorId",
DROP COLUMN "createdAt",
DROP COLUMN "published",
DROP COLUMN "updatedAt",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "comments" JSONB,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "likes" INTEGER NOT NULL,
ADD COLUMN     "publication_date" DATE NOT NULL,
ADD COLUMN     "tags" JSONB NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "content" SET NOT NULL;
DROP SEQUENCE "Blog_id_seq";

-- DropTable
DROP TABLE "public"."Profile";

-- DropTable
DROP TABLE "public"."User";
