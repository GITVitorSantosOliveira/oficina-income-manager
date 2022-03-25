-- CreateTable
CREATE TABLE `servicos` (
    `id` VARCHAR(191) NOT NULL,
    `descservico` VARCHAR(191) NOT NULL,
    `carro` VARCHAR(191) NOT NULL,
    `dataservico` VARCHAR(191) NOT NULL,
    `valor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
