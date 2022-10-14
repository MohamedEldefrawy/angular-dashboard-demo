# First stage of building angular image
FROM node:alpine as build
RUN mkdir -p "/app"
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app/
RUN npm run build

# Second stage
FROM nginx:alpine
COPY --from=build /app/dist/meetdoc /usr/share/nginx/html
