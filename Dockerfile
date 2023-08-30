FROM node:alpine
LABEL authors="professionalowo"
WORKDIR /app

ADD . .

RUN npm i typescript serve -g
RUN npm i

RUN npm run build
EXPOSE 8000
CMD ["npm", "run", "serve"]