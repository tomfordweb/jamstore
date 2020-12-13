FROM node:current-alpine
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run generate 
EXPOSE 8000 
ENTRYPOINT ["npm"]
CMD ["start"]

