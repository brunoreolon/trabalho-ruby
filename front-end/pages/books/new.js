import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ROUTES from "../../src/config/routes";
import BookService from "../../src/services/BookService";
import CategoryService from "../../src/services/CategoryService";
import PublisherService from "../../src/services/PublisherService";
import AuthorService from "../../src/services/AuthorService";

function NewBook() {
  const router = useRouter()
  const [categories, setCategories] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [author, setAuthor] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const insertBook = (book) => {
    BookService.create(book).then((data) => {
      router.push(ROUTES.books.list)
      toast.success(`Book successfully created!`)
    }).catch((e) => console.error(e))
  }

  useEffect(() => {
    CategoryService.getAll().then((data) => setCategories(data))
    PublisherService.getAll().then((data) => setPublishers(data))
    AuthorService.getAll().then((data) => setAuthor(data))
  }, []);

  return (
    <>
      <p>Tela de Cadastro de Livro</p>

      <form onSubmit={handleSubmit((data) => insertBook(data))}>
        <div className="field">
          <label>Title</label>
          <input {...register("title", { required: true })} />
          {errors.title && <p>title is required.</p>}
        </div>

        <div className="field">
          <label>Language</label>
          <input {...register("language", { required: true })} />
          {errors.language && <p>language is required.</p>}
        </div>

        <div className="field">
          <label>Num Pages</label>
          <input {...register("num_pages", { required: true })} />
          {errors.num_pages && <p>Num Pages is required.</p>}
        </div>

        <div className="field">
          <label>Published At</label>
          <input {...register("published_at", { required: true })} />
          {errors.published_at && <p>Published at is required.</p>}
        </div>

        <div className="field">
          <label>Category</label>
          <select {...register("category_id", { pattern: /\d/ })}>
          <option>Select Category</option>
            {
              categories.map((category) => {
                return <option key={category.id} value={category.id}>{category.name}</option>
              })
            }
          </select>
          {errors.category_id && <p>Category is required.</p>}
        </div>

        <div className="field">
          <label>Author</label>
          <select {...register("author_id", { pattern: /\d/ })}>
          <option>Select Author</option>
            {
              author.map((author) => {
                return <option key={author.id} value={author.id}>{author.name}</option>
              })
            }
          </select>
          {errors.author_id && <p>Author is required.</p>}
        </div>

        <div className="field">
          <label>Publisher</label>
          <select {...register("publisher_id", { pattern: /\d/ })}>
          <option>Select Publisher</option>
            {
              publishers.map((publisher) => {
                return <option key={publisher.id} value={publisher.id}>{publisher.name}</option>
              })
            }
          </select>
          {errors.publisher_id && <p>Publisher is required.</p>}
        </div>

        <input type="submit" />
      </form>

      <p>
        <Link
          href={{
            pathname: ROUTES.books.list,
          }}
        >Cancelar</Link>
      </p>
    </>
  );
}

export default NewBook;
