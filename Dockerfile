## Run ng build before running this dockerfile
## This dockerfile needs builds files of pplication
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY ./dist/projet-angular/browser .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
