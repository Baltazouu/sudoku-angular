## Dockerfile Using Ng build files

### Run ng build before running this dockerfile
### This dockerfile needs builds files of pplication
#FROM nginx:alpine
#
#WORKDIR /usr/share/nginx/html
#COPY ./dist/projet-angular/browser .
#
#EXPOSE 80
#
#CMD ["nginx", "-g", "daemon off;"]

## Dockerfile with compilation :


FROM --platform=linux/amd64 node:22 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build

FROM nginx:latest

COPY --from=build app/dist/projet-angular/browser /usr/share/nginx/html

EXPOSE 80

## docker build . -t angular-sudoku
## docker run -p 4200:80 angular-sudoku
