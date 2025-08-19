# Use a minimal nginx image
FROM nginx:alpine

# Copy built Docusaurus site to nginx public folder
COPY build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
