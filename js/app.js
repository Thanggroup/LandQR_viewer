async function main() {

    try {

        const publishedParcel = await loadPublishedParcel();

        Object.assign(
            APP_CONFIG.cesium,
            publishedParcel.viewer.cesium
        );

        initializeEarthMap();

        console.log(publishedParcel);

        displayEarthParcel(
            publishedParcel.parcel.surveyCorners
        );

        updateImageryPanel(
            publishedParcel.imagery
        );

    }
    catch (error) {

        console.error(error);

    }

}

main();