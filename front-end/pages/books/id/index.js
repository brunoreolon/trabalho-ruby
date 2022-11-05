import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ROUTES from "../../../src/config/routes";
import useSWR from 'swr'
import BookService from "../../../src/services/BookService";


function ShowBook() {
  const router = useRouter()
  const { id } = router.query

  // const { data, error } = useSWR(user.isAuthenticated ? {url: `books/${id}`, id: id} : null, BookService.getById)
  const { data, error } = useSWR({url: `books/${id}`, id: id})

  const [book, setBook] = useState(null);

  useEffect(() => {
    setBook(data)
  }, [data, error]);

  if (!book) return `Carregando...`

  return (
    <>
      <p>Exibindo o livro: {id}</p>

      <p>
        <Link
          href={{
            pathname: ROUTES.book.list,
          }}
        >Voltar</Link>
      </p>

      <dl>
        <dt>ID</dt>
        <dd>{book.id}</dd>

        <dt>Title</dt>
        <dd>{book.title}</dd>

        <dt>Language</dt>
        <dd>{book.language}</dd>

        <dt>Num Pages</dt>
        <dd>{book.num_pages}</dd>

        <dt>Published At</dt>
        <dd>{book.published_at}</dd>

        <dt>Category</dt>
        <dd>{book.category.name}</dd>
        
        <dt>Author</dt>
        <dd>{book.author.name}</dd>

        <dt>Publisher</dt>
        <dd>{book.publisher.name}</dd>
      </dl>

    </>
  );
}

export default ShowBook;