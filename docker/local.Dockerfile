# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000