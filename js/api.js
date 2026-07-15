const API_URL = "http://localhost:3000";

async function loadPublishedParcel(parcelId) {

    const response = await fetch(
        `${API_URL}/parcel/${parcelId}`
    );

    if (!response.ok) {
        throw new Error("Parcel not found.");
    }

    return await response.json();
}