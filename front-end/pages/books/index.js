import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ROUTES from "../../src/config/routes";
import BookService from "../../src/services/BookService";
import { Container } from "@mui/system";
import useSWR from 'swr'

function BookList() {
  const [books, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { data, error } = useSWR('/books', BookService.getAll)

  const deleteBook = (book) => {
    var accepted = confirm(`Você realmente gostaria de deletar o livro: ${book.title}`);
    if (!accepted) return;

    setIsLoading(true);
    BookService.destroy(book.id)
      .then((data) => {
        getBook().then(() => {
          setIsLoading(false);
          toast.success("Book destroyed sucessfully!");
        });
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error(`Erro when destroying book: ${e.message}`);
      });
  };

  const getBook = async () => {
    console.log(data); 
  };

  useEffect(() => {

    console.log("DATA ", data)
    console.log("ERROR ",error)

    if (data === undefined) return

    setBook(data);
    setIsLoading(false);
  }, [data, error]);

  if (isLoading) return <p>Carregando....</p>;

  return (
    <Container>
      <Grid container mt={2}>
        <Grid item xs={6}>
            <Typography variant="h4">Books List</Typography>
        </Grid>
        <Grid item xs={6}>
          <p>
            <Link
              href={{
                pathname: ROUTES.books.new,
              }}
            >
              <Button variant="contained" color="success" size="small" startIcon={<AddIcon fontSize="small" />}>
                New Book
              </Button>
            </Link>
          </p>
        </Grid>
        <Grid item xs={12}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>language</th>
                <th>Num pages</th>
                <th>Published At</th>
                <th>Category</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => {
                return (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.language}</td>
                    <td>{book.num_pages}</td>
                    <td>{book.published_at}</td>
                    <td>{book.category.name}</td>
                    <td>{book.author.name}</td>
                    <td>{book.publisher.name}</td>
                    <td>
                      <Link
                        href={{
                          pathname: ROUTES.books.show,
                          query: {
                            id: book.id,
                          },
                        }}
                      >
                        <Button variant="contained" size="small">
                          <VisibilityIcon fontSize="small" />
                        </Button>
                      </Link>
                      <Link
                        href={{
                          pathname: ROUTES.books.edit,
                          query: {
                            id: book.id,
                          },
                        }}
                      >
                        <Button variant="contained" color="warning" size="small">
                          <EditIcon fontSize="small" />
                        </Button>
                      </Link>
                      <Button variant="contained" color="error" size="small" onClick={() => deleteBook(book)}>
                        <DeleteForeverIcon fontSize="small" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookList;
