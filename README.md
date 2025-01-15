# **Next.js MiniCore**

### **Descripción**
Este proyecto es una aplicación web desarrollada con **Next.js** que permite filtrar y calcular los gastos registrados en una base de datos **MySQL** por rango de fechas. Los gastos están organizados por departamentos, lo que facilita el análisis financiero de una organización.

---

## **Características**
- Filtro de gastos por rango de fechas.
- Agrupación y totalización de gastos por departamento.
- Interfaz limpia y responsiva para la visualización de resultados.
- Backend API optimizado con **Prisma ORM**.
- Datos persistentes en una base de datos **MySQL**.

---

## **Tecnologías Utilizadas**
- **Frontend**: Next.js, React.
- **Backend**: API integrada en Next.js.
- **Base de Datos**: MySQL (compatible con Azure Database for MySQL).
- **ORM**: Prisma.
- **Estilos**: CSS en línea y CSS modular.
- **Testing**: Compatible con herramientas como Postman para pruebas de API.

---

## **Requisitos Previos**
- **Node.js** (v16 o superior).
- **MySQL** (local o remoto).
- **Postman** (opcional para pruebas de API).

---

## **Instalación y Configuración**

### 1. **Clonar el Repositorio**
```bash
git clone https://github.com/Nou7en/minicore
cd minicore ```

### 2. Instalar Dependencias
```bash
npm install
### 3. Configurar la Base de Datos
1. Asegúrate de que MySQL está instalado y en ejecución.
2. Crea una base de datos llamada minicore
```bash
CREATE DATABASE nextjs_expenses;
### 3. Actualiza el archivo .env en la raíz del proyecto con tu configuración de conexión a MySQL
```bash
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/minicore"
### 4. Inicializar Prisma
1. Ejecuta las migraciones para crear las tablas en la base de datos:
```bash
npx prisma migrate dev --name init
### 5. Poblar la Base de Datos
1. Usa el script de seed para insertar datos iniciales en la base de datos
```bash
node prisma/seed.js
### 6. Iniciar el Servidor
1. Ejecuta el servidor en modo desarrollo
```bash
npm run dev
