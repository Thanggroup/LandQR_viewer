const API_URL = "http://localhost:3000";

async function loadPublishedParcel() {

    const url = new URL(window.location.href);

    const parcelId =
        url.searchParams.get("id");

    if (!parcelId) {

        throw new Error(
            "Missing parcel id."
        );

    }

    const response = await fetch(
        `${API_URL}/parcel/${parcelId}`
    );

    if (!response.ok) {

        throw new Error(
            "Unable to load published parcel."
        );

    }

    return await response.json();

}