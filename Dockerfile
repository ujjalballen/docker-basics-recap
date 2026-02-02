# Stage 1: Build the React app Basic stuff

FROM node:22-alpine
WORKDIR /app

# Install dependencies separately to leverage Docker's layer caching
COPY package*.json ./

RUN npm install

# Copy source code/others remaining code
COPY . .

# Expose port
EXPOSE 5173
CMD ["npm", "run", "dev"]