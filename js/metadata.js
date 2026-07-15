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

function formatImageryDate(date) {

    if (!date) {
        return "-";
    }

    return date;

}