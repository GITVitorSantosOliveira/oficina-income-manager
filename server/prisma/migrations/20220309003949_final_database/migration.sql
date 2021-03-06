/*
  Warnings:

  - You are about to drop the `descservice` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `descservice` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `descservice` DROP FOREIGN KEY `descservice_service_id_fkey`;

-- AlterTable
ALTER TABLE `services` ADD COLUMN `descservice` VARCHAR(191) NOT NULL,
    MODIFY `date` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `descservice`;
