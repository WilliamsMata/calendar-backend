# Usamos una imagen de Node.js más ligera basada en Alpine Linux
FROM node:lts-alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo el archivo package.json para aprovechar la caché de Docker
COPY package.json ./

# Instalamos las dependencias del proyecto
RUN npm install --production

# Copiamos el resto de los archivos del proyecto
COPY . .

# Exponemos el puerto en el que el servidor Express estará escuchando
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]