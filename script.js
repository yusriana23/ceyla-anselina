// ==========================================
// AMBIL ELEMENT HTML
// ==========================================

const openButton =
    document.getElementById("openButton");

const message =
    document.getElementById("message");

const forgiveButton =
    document.getElementById("forgiveButton");

const response =
    document.getElementById("response");


// ==========================================
// TOMBOL "BACA PESANNYA"
// ==========================================

openButton.addEventListener(
    "click",
    function () {

        // Menampilkan pesan
        message.classList.add("show");

        // Mengubah tulisan tombol
        openButton.textContent =
            "Pesan Telah Dibuka";

        // Menonaktifkan tombol
        openButton.disabled = true;

        // Mengubah tampilan tombol
        openButton.style.opacity = "0.6";

    }
);


// ==========================================
// TOMBOL "AKU MAAFKAN"
// ==========================================

forgiveButton.addEventListener(
    "click",
    function () {

        // Menampilkan pesan
        response.textContent =
            "Terima kasih sudah mau memaafkan.";

        // Mengubah tulisan tombol
        forgiveButton.textContent =
            "Terima Kasih";

        // Menonaktifkan tombol
        forgiveButton.disabled = true;

        // Mengurangi opacity
        forgiveButton.style.opacity =
            "0.7";

    }
);