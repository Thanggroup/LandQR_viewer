function formatImageryMetadata(attributes) {

    if (!attributes) {
        return null;
    }

    return {

        date: attributes.SRC_DATE,

        provider: attributes.NICE_DESC,

        imagery: attributes.NICE_NAME,

        resolution: attributes.SRC_RES

    };

}

function formatImageryDate(value) {

    if (!value) {

        return "-";

    }

    const text = value.toString();

    return (
        text.substring(0, 4)
        + "-"
        + text.substring(4, 6)
        + "-"
        + text.substring(6, 8)
    );

}

function updateImageryPanel(imagery) {

    document.getElementById("imageryDate").textContent =
        formatImageryDate(imagery.date);

    document.getElementById("imageryProvider").textContent =
        imagery.provider ?? "-";

    document.getElementById("imageryResolution").textContent =
        imagery.resolution
            ? imagery.resolution + " m"
            : "-";

}