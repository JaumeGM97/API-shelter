# Use official Node.js base image
FROM node:18-alpine

# Create non-root user con IDs diferentes (1001 en lugar de 1000)
RUN addgroup -g 1001 -S nodeapp && \
    adduser -u 1001 -S nodeapp -G nodeapp

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production || npm install --only=production

# Copy application source
COPY . .

# Change ownership to non-root user
RUN chown -R nodeapp:nodeapp /usr/src/app

# Switch to non-root user
USER nodeapp

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]