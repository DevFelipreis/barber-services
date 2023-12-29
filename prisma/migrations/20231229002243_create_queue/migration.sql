/*
  Warnings:

  - Added the required column `expertId` to the `queues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "queues" ADD COLUMN     "expertId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "queues" ADD CONSTRAINT "queues_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "experts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
