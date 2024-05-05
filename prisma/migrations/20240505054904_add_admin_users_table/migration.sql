-- CreateTable
CREATE TABLE "AdminUsers" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,

    CONSTRAINT "AdminUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUsers_username_key" ON "AdminUsers"("username");
