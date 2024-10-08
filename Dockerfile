
# FROM node:20 AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build


FROM node:20

WORKDIR /app

# COPY package*.json ./
# RUN npm install --omit=dev
# RUN npm run build

COPY . .
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules

RUN rm -r /app/src/
EXPOSE 3000

CMD ["npm", "start"]

