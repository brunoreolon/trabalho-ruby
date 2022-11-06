## Cadastro de categoria

POST http://localhost:3000/api/v1/categories
```
{
  "name" : "Fantasia"
}
```
### Preview
```
[
  {
    "id": 1,
    "name": "Fantasia",
    "created_at": "2022-11-05T09:42:06.820Z",
    "updated_at": "2022-11-05T09:42:06.820Z"
  }
]
```
## Cadastro de autor
POST http://localhost:3000/api/v1/authors
```
{
	"name" : "J.R.R. Tolkien"
}
```
### Preview
```
[
  {
    "id": 1,
    "name": "J.R.R. Tolkien",
    "created_at": "2022-11-05T09:42:06.820Z",
    "updated_at": "2022-11-05T09:42:06.820Z"
  }
]
```
## Cadastro de editora
POST http://localhost:3000/api/v1/publishers
```
{
	"name" : "HarperCollins"
}
```
### Preview
```
[
  {
    "id": 1,
    "name": "HarperCollins",
    "created_at": "2022-11-05T09:42:06.820Z",
    "updated_at": "2022-11-05T09:42:06.820Z"
  }
]
```
## Cadastrando um livro
POST http://localhost:3000/api/v1/books
```
{
	"title" : "O Senhor dos Aneis - Edição de Colecionador com Ilustrações de Alan Lee", 
	"language" : "Português", 
	"num_pages" : "1376 ", 
	"published_at" : "2021-12-20T05:27:36.136Z", 
	"category_id" : 1, 
	"author_id" : 1, 
	"publisher_id": 1
}
```
### Preview
```
[
  {
      "id": 2,
      "title": "O Senhor dos Aneis - Edição de Colecionador com Ilustrações de Alan Lee",
      "language": "Português",
      "num_pages": "1376 ",
      "created_at": "2022-11-05T09:46:25.989Z",
      "updated_at": "2022-11-05T09:46:25.989Z",
      "published_at": "2021-12-20T05:27:36.136Z",
      "author_id": 1,
      "category_id": 1,
      "publisher_id": 1,
      "category": {
        "id": 1,
        "name": "Fantasia",
        "created_at": "2022-11-05T09:40:51.186Z",
        "updated_at": "2022-11-05T09:40:51.186Z"
      },
      "author": {
        "id": 1,
        "name": "J.R.R. Tolkien",
        "created_at": "2022-11-05T09:44:28.142Z",
        "updated_at": "2022-11-05T09:44:28.142Z"
      },
      "publisher": {
        "id": 1,
        "name": "HarperCollins",
        "created_at": "2022-11-05T09:42:36.294Z",
        "updated_at": "2022-11-05T09:42:36.294Z"
      }
    }
 ]
```
