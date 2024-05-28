# ---- Base Node ----
#FROM ubuntu:23.04 AS base
FROM node:14 AS base

WORKDIR /home/polenta-db
COPY ./src ./src
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies

WORKDIR /home/polenta-db
#RUN apt install npm -y

# ---- Build ----
FROM dependencies AS build

WORKDIR /home/polenta-db
COPY --from=dependencies /home/polenta-db/src ./bin

# ---- Release ----
FROM build AS release

WORKDIR /home/polenta-db/
COPY --from=build /home/polenta-db/bin ./
#COPY --from=dependencies /home/polenta-db/node_modules ./node_modules
COPY --from=dependencies /home/polenta-db/package.json ./package.json

ENV APPLICATION_NAME=polenta-db

WORKDIR /home/polenta-db
CMD npm start