FROM node:18-alpine

# Создаём пользователя и группу
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Меняем владельца папки /app на нашего пользователя
RUN chown -R appuser:appgroup /app

# Запускаем контейнер от имени пользователя appuser
USER appuser

EXPOSE 5000

CMD ["npm", "start"]