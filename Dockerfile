FROM node:18 AS build
WORKDIR /app
RUN git clone https://github.com/KelpieLW/Highspring-Shopping-Cart-Frontend.git
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
