FROM node:current-alpine
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run generate 
EXPOSE 3000 
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENTRYPOINT ["npm"]
CMD ["start"]

