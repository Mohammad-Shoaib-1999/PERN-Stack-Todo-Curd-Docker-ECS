# Use the official Node.js 19 Alpine image as the base image
FROM node:19-alpine

# Set the working directory inside the container
WORKDIR /home/node/app

# Copy the entire application directory into the container at the working directory
COPY . .

# Change the ownership of the application files to the 'node' user
RUN chown -R node:node .

# Switch to the 'node' user to run subsequent commands
USER node

# Install npm dependencies
RUN npm install

# Expose port 9000 for the application
EXPOSE 8000

# Command to run the application when the container starts
CMD ["npm", "run", "dev"]
