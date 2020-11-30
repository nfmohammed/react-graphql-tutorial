
#### Connect React application with MondoDB

- Login to MLab with username `thenetninja` and password from lastpass. 
- `users` and `books` collections have been created in the database using Mutations `addUser` and `addBook`
- Add users to MongoDB using Mutation.

#### GraphQL Queries


```
query getAllBooksAndAuthors{
  books {
    name
    genre
    author {
      name
      age
    }
  }
  authors{
    name
    age
    books{
      name
    }
  }
}

query getSingleBookById{
  book(id: "5fa4ceb8915f3a073ee369e9" ) {
    id
    name
    genre
  }
}
```