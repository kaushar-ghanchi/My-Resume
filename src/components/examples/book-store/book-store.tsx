import { useState } from "react";
import styles from "./book-store.module.scss";
import { data, Book } from "./data/data";

export const BookStore = () => {
  const [current, setCurrent] = useState(0);
  const [books, setBooks] = useState(data.slice(current, current + 5));
  const [sortElement, setSortElement] = useState("");
  const handleChange = (type: keyof Book) => {
    setSortElement(type);
    setBooks(
      books &&
        [...books].sort((a: any, b: any) => a[type].localeCompare(b[type]))
    );
  };
  const handleNext = () => {
    setCurrent(current + 5);
    setBooks(data.slice(current, current + 5));
  };
  const handlePrev = () => {
    setCurrent(current - 5);
    setBooks(data.slice(current - 5, current));
  };
  return (
    <div>
      <h1>Book store</h1>
      <div className={styles.challengeText}>
        <span>
          Make a table that displays a list of books that have some fields like
          title, author, genre, release and rating. Make sure you paginate the
          list and only display 5 items per page.
        </span>
        <ul>
          <li>
            You should have buttons for navigating through the pages. Left /
            Right
          </li>
          <li>You should have an input that filter items on typing.</li>
          <li>
            You should have a select list so you can sort by field or no
            sorting.(No sorting is just display the data in the original order)
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div>
          Sort:
          <select onChange={(e) => handleChange(e.target.value as keyof Book)}>
            <option>No sort</option>
            <option value="author">Author</option>
            <option value="country">Country</option>
            <option value="imageLink">Image link</option>
            <option value="language">Language</option>
            <option value="pages">Pages</option>
            <option value="title">Title</option>
            <option value="year">Year</option>
          </select>
        </div>
        <table border={1}>
          <tr className={styles.headerRow}>
            <td
              onClick={() => handleChange("author")}
              className={styles.headerText}
            >
              Author
            </td>
            <td
              onClick={() => handleChange("country")}
              className={styles.headerText}
            >
              Country
            </td>
            <td>Image link</td>
            <td>Language</td>
            <td>Link</td>
            <td>Pages</td>
            <td>Title</td>
            <td>Year</td>
          </tr>

          {books.map((item) => (
            <tr>
              <td>{item.author}</td>
              <td>{item.country}</td>
              <td>{item.imageLink}</td>
              <td>{item.language}</td>
              <td>{item.link}</td>
              <td>{item.pages}</td>
              <td>{item.title}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </table>
        <div>
          <button onClick={handlePrev}>Prev</button>{" "}
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};
