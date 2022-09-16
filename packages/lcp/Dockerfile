FROM node:16-alpine

WORKDIR /app

ENV ENV="production"

COPY . ./

RUN npx prisma migrate dev --name init

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["npm", "run", "start"]

