FROM node:alpine

ENV API_HOST=localhost

RUN yarn global add serve

COPY . .
RUN yarn install

EXPOSE 3000
CMD ["sh", "-c", "REACT_APP_API_HOST=$API_HOST yarn build; serve -s -l 3000 build"]
