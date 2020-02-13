FROM alpine:3.7

# Add nginx
RUN apk add nginx &&\
    mkdir -p /var/log/nginx &&\
    mkdir -p /var/www/html

# Copy the respective nginx configuration files always come to the root file
COPY ../../../acadsocreact/docker/config/nginx.conf /etc/nginx/nginx.conf
COPY ../../../acadsocreact/docker/config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /var/www/html

# make all files belong to the nginx user
RUN chown nginx:nginx /var/www/html

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]
