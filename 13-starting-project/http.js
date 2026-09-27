export async function updateUserPlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({places}),
    })

    const data = await response.json();
    if (!response.ok) {
        throw new Error("Failed to update user data.");
    }

    return data.message;
}

export async function getUserPlaces() {
    const response = await fetch("http://localhost:3000/user-places");
    const data = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch user places.");
    }

    return data.places;
}