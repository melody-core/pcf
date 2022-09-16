-- CreateTable
CREATE TABLE "PageObject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "base" TEXT NOT NULL,
    "effect" TEXT NOT NULL,
    "senior" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "TemplateObject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "componentName" TEXT NOT NULL,
    "title" TEXT,
    "desc" TEXT,
    "previewSrc" TEXT,
    "docsSrc" TEXT,
    "author" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
