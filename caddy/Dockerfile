# Multi-stage build for Caddy reverse proxy
FROM caddy:2-alpine AS base

# Set working directory
WORKDIR /etc/caddy

# Copy Caddyfile configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Create directories for SSL certificates and data
RUN mkdir -p /data /config

# Expose HTTP and HTTPS ports
EXPOSE 80 443

# Health check to ensure Caddy is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD caddy validate --config /etc/caddy/Caddyfile || exit 1

# Start Caddy with the configuration
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]