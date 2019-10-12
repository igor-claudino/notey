# Notey

Notey é um aplicativo de criação de notas para dispositivos móveis. As features implementadas até o momento são:

- [ ] Criar uma nova conta no app;
- [ ] Realizar login;
- [ ] Criar uma nova nota;
- [ ] Listar notas do usuário;
- [ ] Editar notas existentes;
- [ ] Compartilhar notas com outro usuário;
- [ ] Listar notas compartilhadas com o usuário;
- [ ] Remover compartilhamento de notas com outros usuários;
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