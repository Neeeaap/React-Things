import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import ErrorPrompt from "./Error.jsx";

import { sortPlacesByDistance } from "../loc.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getPlaces() {
      try {
        const response = await fetch("http://localhost:3000/places");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch places.");
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            data.places,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
        });
      } catch (err) {
        setError({
          message: err.message || "An error occurred while fetching places.",
        });
      }
    }

    getPlaces();
  }, []);

  if (error) {
    return <ErrorPrompt title="Error" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      loading={availablePlaces === null}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
