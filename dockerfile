FROM alpine:latest

# Install stunnel
RUN apk add --no-cache stunnel

# Copy the stunnel configuration file into the container
COPY stunnel.conf /etc/stunnel/stunnel.conf

# Run stunnel with the configuration file
CMD ["stunnel", "/etc/stunnel/stunnel.conf"]
