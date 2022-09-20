/*
  Warnings:

  - Added the required column `type` to the `ModelObject` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ModelObject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT '六弦',
    "desc" TEXT,
    "fields" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "effects" TEXT NOT NULL DEFAULT '{}',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ModelObject" ("author", "createdAt", "desc", "effects", "fields", "id", "name", "title", "updatedAt") SELECT "author", "createdAt", "desc", "effects", "fields", "id", "name", "title", "updatedAt" FROM "ModelObject";
DROP TABLE "ModelObject";
ALTER TABLE "new_ModelObject" RENAME TO "ModelObject";
CREATE UNIQUE INDEX "ModelObject_name_key" ON "ModelObject"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
