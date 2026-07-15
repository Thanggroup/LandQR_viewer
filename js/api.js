const API_URL = APP_CONFIG.api.url;

async function loadPublishedParcel(parcelId) {

    const response = await fetch(
        `${API_URL}/parcel/${parcelId}`
    );

    if (!response.ok) {
        throw new Error("Parcel not found.");
    }

    return await response.json();
}