import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ROUTES from "../../../src/config/routes";
import BookService from "../../../src/services/BookService";
import CategoryService from "../../../src/services/CategoryService";
import AuthorService from "../../../src/services/AuthorService";
import PublisherService from "../../../src/services/PublisherService";

function EditBook() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [categories, setCategories] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [authors, setAuthor] = useState([]);

  useEffect(() => {
    BookService.getById(id).then((data) => {
      setBook(data)
    })
  }, [id])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateBook = (book) => {
    BookService.update(id, book).then((data) => {
      router.push(ROUTES.book.list)
      toast.success(`Book successfully updated!`)
    }).catch((e) => {
      toast.error(`Erro when updating Book: ${e.message}`)
    })
  }

  useEffect(() => {
    CategoryService.getAll().then((data) => setCategories(data));
    PublisherService.getAll().then((data) => setPublishers(data))
    AuthorService.getAll().then((data) => setAuthor(data));
  }, []);

  if (!book || !categories.length || !author.length || !publishers.length) return `Carregando...`

  console.log(book)

  return (
    <>
      <p>Página de Edição do Livro: {id}</p>
      <p>
        <Link
          href={{
            pathname: ROUTES.book.list,
          }}
        >Cancelar
        </Link>
      </p>

      <form onSubmit={handleSubmit((data) => updateBook(data))}>
        <div className="field">
          <label>Title</label>
          <input {...register("title", { required: true })} defaultValue={book.title} />
          {errors.title && <p>title is required.</p>}
        </div>

        <div className="field">
          <label>Language</label>
          <input {...register("Language", { required: true })} defaultValue={book.language} />
          {errors.language && <p>Language is required.</p>}
        </div>

        <div className="field">
          <label>Num Pages</label>
          <input {...register("Num Pages", { required: true })} defaultValue={book.num_pages} />
          {errors.num_pages && <p>Language is required.</p>}
        </div>

        <div className="field">
          <label>Publisher At</label>
          <input {...register("Num Pages", { required: true })} defaultValue={book.num_pages} />
          {errors.published_at && <p>Language is required.</p>}
        </div>

        <div className="field">
          <label>Category</label>
          <select {...register("category_id", { pattern: /\d/ })} defaultValue={book.category_id}>
            <option>Select Category</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          {errors.category_id && <p>Category is required.</p>}
        </div>

        <div className="field">
          <label>Author</label>
          <select {...register("author_id", { pattern: /\d/ })} defaultValue={book.author_id}>
            <option>Select Author</option>
            {authors.map((author) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })}
          </select>
          {errors.author_id && <p>Author is required.</p>}
        </div>

        <div className="field">
          <label>Publisher</label>
          <select {...register("category_id", { pattern: /\d/ })} defaultValue={book.publisher_id}>
            <option>Select Publisher</option>
            {publishers.map((publisher) => {
              return (
                <option key={publisher.id} value={publisher.id}>
                  {publisher.name}
                </option>
              );
            })}
          </select>
          {errors.publisher_id && <p>Publisher is required.</p>}
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default EditBook;
