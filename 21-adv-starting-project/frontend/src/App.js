import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import EventsPage, { loader as EventsLoader } from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import { action as manipulateEventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <EventsPage />, loader: EventsLoader },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDetailAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
