//profile Input Validation
$(document).ready(function () {
    $('#profile-button').on('click', 'button', function () {
        $('#profile-button button.active').removeClass('active');
        $(this).addClass('active');
    });
});


//Register Validation
$(document).ready(function () {
    $("#btnClickDaftar").click(function () {
        var emailReg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = $('#emailInput').val();
        var username = $('#username').val().length;
        var password = $('#password').val().length;
        var number = $('#number').val().length;

        if (username == 0) {
            $('#form-control-1').addClass("error")
        } else if (username <= 5) {
            $('#form-control-1').addClass("error")
        } else {
            $('#form-control-1').addClass("succes").removeClass("error")
        }

        if (email == '') {
            $('#form-control-2').addClass("error")
        } else if (!emailReg.test(email)) {
            $('#form-control-2').addClass("error").removeClass('succes')
        }
        else {
            $('#form-control-2').addClass("succes").removeClass("error")
        }

        if (password == 0) {
            $('#form-control-3').addClass("error")
        } else {
            $('#form-control-3').addClass("succes").removeClass("error")
        }

        if (number == 0) {
            $('#form-control-4').addClass("error")
        } else {
            $('#form-control-4').addClass("succes").removeClass("error")
        }

        return false;
    });
}); 

//Regist End

//Login Validation
$(document).ready(function () {
    $('#btnClickLogin').click(function () {
        var username = $('#username').val().length;
        var password = $('#password').val().length;

        if (username == 0) {
            $('#form-control-1').addClass("error")
        } else if (username <= 5) {
            $('#form-control-1').addClass("error")
        } else {
            $('#form-control-1').addClass("succes").removeClass("error")
        }

        if (password == 0) {
            $('#form-control-3').addClass("error")
        } else {
            $('#form-control-3').addClass("succes").removeClass("error")
        }


        return false;
    });
});

// Login lupa kata sandi
$(document).ready(function () {
    $('#btnClickMasuk').click(function () {
        var emailReg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = $('#emailInput').val();

        if (email == '') {
            $('#form-control-2').addClass("error")
        } else if (!emailReg.test(email)) {
            $('#form-control-2').addClass("error").removeClass('succes')
        }
        else {
            $('#form-control-2').addClass("succes").removeClass("error")
        }

        return false;
    });
});

//login reset kata sandi
$(document).ready(function () {
    $('#btnClickResetPw').click(function () {
        var password = $('#password').val().length;
        var password2 = $('#password2').val().length;

        if (password == 0) {
            $('#form-control-forgot').addClass("error")
        } else {
            $('#form-control-forgot').addClass("succes").removeClass("error")
        }

        if (password2 == 0) {
            $('#form-control-forgot1').addClass("error")
        } else {
            $('#form-control-forgot1').addClass("succes").removeClass("error")
        }


        return false;
    });
});

//Register Validation
$(document).ready(function () {
    $('#btnClickMulai').click(function () {
        var username = $('#username').val().length;
        // var text = $('#text').val().length;

        if (username == 0) {
            $('#form-control-1').addClass("error")
        } else if (username <= 5) {
            $('#form-control-1').addClass("error")
        } else {
            $('#form-control-1').addClass("succes").removeClass("error")
        }

        // if (text == 0) {
        //     $('#form-control-6').addClass("error")
        // } else if (text <= 5) {
        //     $('#form-control-6').addClass("error")
        // } else {
        //     $('#form-control-6').addClass("succes").removeClass("error")
        // }



        return false;
    });
});
