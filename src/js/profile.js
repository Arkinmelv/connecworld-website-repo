//Profile Text copy javascript

function CopyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    $("#alertNotifCopy").modal("show");
}

//outside click
window.onload = function () {
    window.addEventListener('click', outsideClick);
    const modalCardTentangSaya = document.querySelector('.modal-tentangsaya-content');
    const modalCardActivity = document.querySelector('.modal-content-activity');
    const modalCardBanner = document.querySelector('.modal-banner-content');

    function outsideClick(e) {
        if (e.target == modalCardTentangSaya) {
            $('#modalProfile-tentangsaya').modal('hide');
        }

        if (e.target == modalCardActivity) {
            $('#modalProfile-infoumum').modal('hide');
        }

        if (e.target == modalCardBanner) {
            $('#modalProfile-banner').modal('hide');
        }
        
    };

    $(function () {
        $("#datepicker").datepicker();
    });

    $(function () {
        $("#datepicker-second").datepicker();
    });

    $(function () {
        $("#datepicker-tri").datepicker();
    });

    $(function () {
        $("#datepicker-four").datepicker();
    });

    $("#modalProfile-banner").on("hidden.bs.modal", function () {
        // Load up a new modal...
        $("#modalProfile-succes").modal("show");
    });

    $("#modalProfile-tentangsaya").on("hidden.bs.modal", function () {
        // Load up a new modal...
        $("#modalProfile-succes").modal("show");
    });

    $("#modalProfile-verifikasi").on("hidden.bs.modal", function () {
        // Load up a new modal...
        $("#modalProfile-verifikasi-akun").modal("show");
    });

    $("#modalProfile-verifikasi-akun").on("hidden.bs.modal", function () {
        // Load up a new modal...
        $("#modalProfile-done").modal("show");
    });

}
