const windowModal = document.getElementById("window");
const btnModalOpener = document.getElementById("open-window");
const spanModalClose = document.getElementsByClassName("close")[0];

btnModalOpener.onclick = function () {
    windowModal.style.display = "block";
}

spanModalClose.onclick = function () {
    windowModal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target === windowModal) {
        windowModal.style.display = "none";
    }
}
