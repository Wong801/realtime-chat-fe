FROM node:16.13-alpine AS build

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM node:16.13-alpine

WORKDIR /usr/src/app

# copy from build image
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

EXPOSE 4173

CMD ["npm", "run", "preview"]