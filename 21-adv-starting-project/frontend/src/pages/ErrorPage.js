import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  switch (error.status) {
    case 500:
      message = JSON.parse(error.data).message;
      break;
    case 404:
      title = "Not found!";
      message = "Could not find resource or page.";
      break;
    default:
      break;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
