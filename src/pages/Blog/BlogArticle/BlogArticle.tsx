import { useParams } from 'react-router-dom';

export default function BlogArticle() {
  const { id } = useParams(); // Access the article ID from URL params

  // Fetch/display the article with the given ID

  return (
    <div>
      <h2>Blog Article {id}</h2>
      {/* Display the content of the article */}
    </div>
  );
}