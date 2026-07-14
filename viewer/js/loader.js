async function loadPublishedParcel() {
    const response = await fetch("../parcel.json");

    if (!response.ok) {
        throw new Error("Unable to load published parcel.");
    }

    return await response.json();
}