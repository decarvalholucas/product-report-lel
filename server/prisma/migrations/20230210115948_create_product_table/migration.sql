-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "division" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "subCollection" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tissue" TEXT NOT NULL,
    "tissueType" TEXT NOT NULL,
    "bulge" TEXT NOT NULL,
    "pocket" TEXT NOT NULL,
    "colorCategory" TEXT NOT NULL,
    "stamp" TEXT NOT NULL,
    "costPrice" TEXT NOT NULL,
    "salePrice" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
