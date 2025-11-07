# ---- Build stage ----
FROM node:22-bullseye AS build

WORKDIR /app

COPY . .

RUN rm -rf node_modules package-lock.json && \
    npm install && \
    npm run build

# ---- Runtime stage ----
FROM nginx:alpine

# Copy built frontend
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
