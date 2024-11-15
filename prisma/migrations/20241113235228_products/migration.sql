-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `shop_id` INTEGER NOT NULL,
    `type_id` INTEGER NOT NULL,
    `product_type` ENUM('SIMPLE', 'VARIABLE') NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `in_stock` BOOLEAN NOT NULL,
    `is_taxable` BOOLEAN NOT NULL,
    `sale_price` INTEGER NULL,
    `max_price` INTEGER NULL,
    `min_price` INTEGER NULL,
    `sku` VARCHAR(191) NULL,
    `status` ENUM('PUBLISH', 'DRAFT') NOT NULL,
    `height` VARCHAR(191) NULL,
    `length` VARCHAR(191) NULL,
    `width` VARCHAR(191) NULL,
    `price` VARCHAR(191) NULL,
    `quantity` INTEGER NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `ratings` INTEGER NOT NULL,
    `in_wishlist` BOOLEAN NOT NULL,
    `language` VARCHAR(191) NULL,

    UNIQUE INDEX `Product_shop_id_key`(`shop_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
