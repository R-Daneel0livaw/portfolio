import { useNavigate, useParams } from 'react-router-dom';

export default function BlogArticle() {
  const { id } = useParams(); // Access the article ID from URL params
  const navigate = useNavigate()

  // Fetch/display the article with the given ID

  return (
    <section id="blog-article">
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
      <header>
        <h1>Blog Title {id}</h1>
        <p>
          Published on: <time dateTime="2024-02-01">February 1, 2024</time>
        </p>
        <p>Length: 12 minutes</p>
        <img src="blog-image.jpg" alt="Blog Image" />
      </header>

      <section>
        <h2>Section 1 Title</h2>
        <p>
          Section 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. ...
        </p>
      </section>

      <section>
        <h2>Section 2 Title</h2>
        <p>
          Section 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. ...
        </p>
      </section>
    </section>
  );
}