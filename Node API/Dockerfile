# 1. Use the official Node.js image from Docker Hub
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4. Install dependencies (using npm)
RUN npm install

# 5. Copy the rest of the application code to the working directory
COPY . .

# 6. Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# 7. Define the command to run your application
CMD ["npm", "start"]
