
# Notey

  

Notey é um aplicativo de criação de notas para dispositivos móveis.

  

## Features para a V1.0

  

- [ ] Criar uma nova conta no app;
	- [ ] API 
	- [ ] APP

- [ ] Realizar login;
	- [ ] API 
	- [ ] APP
- [ ] Alterar nome, e-mail e senha;
	- [ ] API 
	- [ ] APP
- [ ] Criar uma nova nota;
	- [ ] API 
	- [ ] APP
- [ ] Listar notas do usuário;
	- [ ] API 
	- [ ] APP
- [ ] Editar notas existentes;
	- [ ] API 
	- [ ] APP
- [ ] Excluir notas existentes;
	- [ ] API 
	- [ ] APP
- [ ] Pesquisar notas por título, conteúdo ou tags;
	- [ ] API 
	- [ ] APP
- [ ] Compartilhar notas com outro usuário;
	- [ ] API 
	- [ ] APP
- [ ] Listar notas compartilhadas com o usuário;
	- [ ] API 
	- [ ] APP
- [ ] Remover compartilhamento de notas com outros usuários.
	- [ ] API 
	- [ ] APP
  

## Features para futuras versões

  

- [ ] Notificar usuário quando uma nota for compartilhada com ele;
	- [ ] API 
	- [ ] APP
- [ ] Armazenar notas offline;
	- [ ] API 
	- [ ] APP
- [ ] Permitir que notas possam ser criadas utilizando a sintaxe de markdown.
	- [ ] API 
	- [ ] APP
  

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