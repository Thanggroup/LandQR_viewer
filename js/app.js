async function main() {

    try {

        const publishedParcel = await loadPublishedParcel();

        APP_CONFIG = publishedParcel.viewer;

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