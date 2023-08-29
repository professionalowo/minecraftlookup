FROM node:alpine
LABEL authors="professionalowo"
WORKDIR /app

ADD . .

RUN npm install serve -g
RUN npm install typescript -g

RUN npm install

RUN npm run build
EXPOSE 8000
CMD ["npm", "run", "serve"]