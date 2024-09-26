-- CreateTable
CREATE TABLE "Package" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "memory" INTEGER NOT NULL,
    "swap" INTEGER NOT NULL,
    "disk" INTEGER NOT NULL,
    "io" INTEGER NOT NULL,
    "cpu" INTEGER NOT NULL,
    "databases" INTEGER NOT NULL,
    "allocations" INTEGER NOT NULL,
    "backups" INTEGER NOT NULL,
    "location" INTEGER NOT NULL,
    "nest" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);
