# Notey

Notey é um aplicativo de criação de notas para dispositivos móveis. 

## Features para a V1.0

- [ ] Criar uma nova conta no app;
- [ ] Realizar login;
- [ ] Alterar nome, e-mail e senha;
- [ ] Criar uma nova nota;
- [ ] Listar notas do usuário;
- [ ] Editar notas existentes;
- [ ] Excluir notas existentes;
- [ ] Pesquisar notas por título, conteúdo ou tags;
- [ ] Compartilhar notas com outro usuário;
- [ ] Listar notas compartilhadas com o usuário;
- [ ] Remover compartilhamento de notas com outros usuários;

## Features para futuras versões

- [ ] Notificar usuário quando uma nota for compartilhada com ele;
- [ ] Armazenar notas offline;
- [ ] Permitir que notas possam ser criadas utilizando a sintaxe de markdown.

## Entidades

### User

- id
- name
- e-mail
- password_hash

### Note

- id
- title
- content
- tags
- synced
- user_id

### Shared Notes

- id
- note_id
- user_id