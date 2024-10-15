## This dockerfile needs to generate build of application
## Run ng build before running this dockerfile
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY ./dist/projet-angular/browser .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
