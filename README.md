# Projeto Integrador – Cloud Developing 2025/1

> CRUD simples + API Gateway + Lambda /report + RDS

**Grupo**:

1. 10418105 - Leonardo Rodrigues Hofjud - API Gateway + Lambda + Docker + Documentação
2. 10408394 - Pedro Andrade - EC2 + Backend + RDS + VPC + Frontend


## 1. Visão geral
Nesse projeto criamos uma aplicação que tem o foco em facilitar o processo de gerenciamento de tarefas, podendo criar tarefas e associar status, editar e deletar as tarefas de acordo com sua necessidade.

## 2. Arquitetura

![Blank diagram](https://github.com/user-attachments/assets/9d7723f0-b50a-4441-8c12-ce4a851b78d6)


| Camada | Serviço | Descrição |
|--------|---------|-----------|
| Backend | ECS Fargate (ou EC2 + Docker) | API REST Node/Spring/… |
| Banco   | Amazon RDS              | PostgreSQL / MySQL em subnet privada |
| Gateway | Amazon API Gateway      | Rotas CRUD → ECS · `/report` → Lambda |
| Função  | AWS Lambda              | Consome a API, gera estatísticas JSON |


## 3. Como rodar localmente

```bash
#BACKEND:
sudo docker run -p 8080:8080
#FRONTEND:
sudo docker run -p 80:3000
```

*Obs: Para executar localmente é preciso alterar os endereços de ip relacionado ao backend(fetch) e o endereço do banco de dados da AWS, tendo em vista que todos estão configurados para executar no ambiente configurado da nuvem*
