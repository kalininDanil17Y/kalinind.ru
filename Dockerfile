#docker hub:  danilo9/kalinind.ru

# Используем базовый образ Node.js версии 18
FROM node:18-alpine AS build
# Установка рабочей директории
WORKDIR /app
# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./
# Устанавливаем зависимости
RUN npm install
# Копируем оставшиеся файлы в контейнер
COPY . .
# Сборка проекта
RUN npm run build
# Используем базовый образ Node.js версии 18 для финальной сборки
FROM node:18-alpine AS run
# Установка рабочей директории
WORKDIR /app
# Установка переменной окружения для порта
ENV PORT=8787
ENV HOST=0.0.0.0
# Копируем собранные артефакты из фазы сборки
COPY --from=build /app .
# Экспонируем порт 8090
EXPOSE 8787
# Запускаем сервер
CMD ["node", "./dist/server/entry.mjs"]
