# Base Image
FROM node:18-alpine 

WORKDIR C:\Users\user\Desktop\Local-Repo\BackendProjects\Ecommerce-Api

COPY package*.json ./

COPY . .

RUN npm install 

CMD ["node", "bin/www"]

EXPOSE 3000