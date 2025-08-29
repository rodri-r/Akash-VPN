# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

# Build-time environment variable
ARG SITE_URL=https://your-domain.com
ENV SITE_URL=${SITE_URL}

RUN npm ci && npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
