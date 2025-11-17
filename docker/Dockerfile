FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependências
RUN npm ci --only=production

# Gerar cliente do Prisma
RUN npx prisma generate

# Copiar código da aplicação
COPY src/ ./src/

# Expor porta da aplicação
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]