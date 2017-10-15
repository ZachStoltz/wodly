FROM "stoltzy409/wodly_base"
EXPOSE 8080
# This is only being exposed for Webpack Dev Server in Development
EXPOSE 3000
WORKDIR /code

COPY package.json .
COPY yarn.lock .
RUN yarn