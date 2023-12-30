-- CreateTable
CREATE TABLE "queue_customers" (
    "id" SERIAL NOT NULL,
    "queueId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "isWaiting" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "queue_customers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "queue_customers" ADD CONSTRAINT "queue_customers_queueId_fkey" FOREIGN KEY ("queueId") REFERENCES "queues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
