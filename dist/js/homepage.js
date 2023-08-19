const modal = document.querySelector("#modalCardImage");
const body = document.querySelector("body");

const showModal = function (e) {
    if (!modal.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
    } else {
        // Enable scroll
        body.style.overflow = "auto";
    }
};

const modalShare2 = document.querySelector("#modalShare");

const showModalShare = function (e) {
    if (!modalShare2.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
    } else {
        // Enable scroll
        body.style.overflow = "auto";
    }
};

const modalReport2 = document.querySelector("#modalReport");

const showModalReport = function (e) {
    if (!modalReport2.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
    } else {
        // Enable scroll
        body.style.overflow = "auto";
    }
};
const modalReport3 = document.querySelector("#nextReport");

const showModalReport2 = function (e) {
    if (!modalReport3.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
    } else {
        // Enable scroll
        body.style.overflow = "auto";
    }
};

// modal homepage explore
$("#modalReport").on("hidden.bs.modal", function () {
    // Load up a new modal...
    $("#nextReport").modal("show");
});

$("#nextReport").on("hidden.bs.modal", function () {
    // Load up a new modal...
    $("#alertNotif").modal("show");
});

$(document).ready(function () {
    $(".toggle").click(function () {
        $(".wrapper-li").toggleClass("active");
    });

    $(".list-dropdown ").click(function () {
        var text = $(this).text();
        $(".default_option").text(text);
    });
});
