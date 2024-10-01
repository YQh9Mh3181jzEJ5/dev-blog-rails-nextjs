FROM node:19.4.0

# 既存のnodeユーザーのグループIDを変更
RUN groupmod -g 1001 node

WORKDIR /app

USER node

CMD ["npm", "run", "dev"]