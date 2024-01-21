import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

function getErrorMessage(error: unknown) {
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }
  return errorMessage;
}

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  const errorMessage = getErrorMessage(error);

  return (
    <div>
      <h1>Something went wrong.</h1>
      {process.env.NODE_ENV === "development" && (
        <div>
          <p>Error details:</p>
          <pre>{errorMessage}</pre>
        </div>
      )}
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}