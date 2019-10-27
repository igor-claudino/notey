
# Notey

  

Notey é um aplicativo de criação de notas para dispositivos móveis.

[Protótipo feito no Figma](https://www.figma.com/proto/vBqrq0JSsnMiCk6nn6ZS1j/App?node-id=2%3A12&scaling=scale-down)

  

## Features para a V1.0

  

- [x] Criar uma nova conta no app;
	- [x] API 
	- [x] APP
- [x] Realizar login;
	- [x] API 
	- [x] APP
- [ ] Alterar nome, e-mail e senha;
	- [x] API 
	- [ ] APP
- [ ] Criar uma nova nota;
	- [x] API 
	- [ ] APP
- [ ] Listar notas do usuário;
	- [x] API 
	- [ ] APP
- [ ] Editar notas existentes;
	- [x] API 
	- [ ] APP
- [ ] Excluir notas existentes;
	- [x] API 
	- [ ] APP
- [ ] Pesquisar notas por título, conteúdo ou tags;
	- [x] API 
	- [ ] APP
- [ ] Compartilhar notas com outro usuário;
	- [x] API 
	- [ ] APP
- [ ] Listar notas compartilhadas com o usuário;
	- [x] API 
	- [ ] APP
- [ ] Remover compartilhamento de notas com outros usuários.
	- [x] API 
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
