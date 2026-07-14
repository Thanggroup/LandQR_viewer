async function main() {
    try {

        const viewerConfig = await loadViewerConfig();

        initializeEarthMap(viewerConfig);

        const publishedParcel =
            await loadPublishedParcel();

        console.log(publishedParcel);

    }
    catch (error) {
        console.error(error);
    }
}

main();