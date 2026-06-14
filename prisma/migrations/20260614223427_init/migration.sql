-- CreateTable
CREATE TABLE "paises" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "codigo_iso" VARCHAR(3),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "paises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "telefono" VARCHAR(20),
    "direccion" TEXT,
    "ciudad" VARCHAR(100),
    "pais_id" INTEGER,
    "codigo_postal" VARCHAR(10),
    "estado" VARCHAR(20) NOT NULL DEFAULT 'activo',
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "paises"("id") ON DELETE SET NULL ON UPDATE CASCADE;
