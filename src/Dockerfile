FROM node:14

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Set environment variables
ENV PORT=3030
ENV MONGO_URI="mongodb+srv://eliyayosef:IV3KskqdDQaGk1RD@cluster0.wuchxyb.mongodb.net/?retryWrites=true&w=majority"

# Expose port
EXPOSE ${process.env.PORT}

# Start the app
CMD [ "npm", "start" ]
