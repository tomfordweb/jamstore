FROM node:15.4.0-buster
WORKDIR /app
COPY . ./
RUN npm install --verbose
RUN npm run generate 
EXPOSE 8000 
ENTRYPOINT ["npm", "run"]
CMD ["start"]

