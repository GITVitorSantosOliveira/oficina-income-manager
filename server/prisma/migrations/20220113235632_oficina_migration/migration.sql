/*
  Warnings:

  - You are about to drop the column `descservice` on the `services` table. All the data in the column will be lost.
  - You are about to drop the `options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refresh_token` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `car` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `options` DROP FOREIGN KEY `options_service_id_fkey`;

-- DropForeignKey
ALTER TABLE `refresh_token` DROP FOREIGN KEY `refresh_token_user_id_fkey`;

-- AlterTable
ALTER TABLE `services` DROP COLUMN `descservice`,
    ADD COLUMN `car` VARCHAR(191) NOT NULL,
    ADD COLUMN `client` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `options`;

-- DropTable
DROP TABLE `refresh_token`;

-- CreateTable
CREATE TABLE `descservice` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `descservice` ADD CONSTRAINT `descservice_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
