-- CreateTable
CREATE TABLE "queues" (
    "id" TEXT NOT NULL,
    "data" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "queues_pkey" PRIMARY KEY ("id")
);
