// DROPDOWN

function showDropdown() {
  
  var x = document.getElementById('show-dropdown-product');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function showDropdownProfile() {
  var x = document.getElementById("show-dropdown-profile");
  if (x.style.display === "block") { 
    x.style.display = "none";
  } else {
    x.style.display = "block";
    
  }
}

$("#btnShowProfile").click(function() {     
  // $('#show-dropdown-profile').toggle("slide", { direction: "down" }, 1000);
  $('#show-dropdown-profile').fadeToggle(500);
});
$("#btnShowProduct").click(function() {     
  $('#show-dropdown-product').fadeToggle(500);
});




//OTP
let digitValidate = function(e){
  e.value = e.value.replace(/[^0-9]/g,'');
}

let tabChange = function(val){
    let ele = document.querySelectorAll('input');
    if(ele[val-1].value != ''){
      ele[val].focus()
    }else if(ele[val-1].value == ''){
      ele[val-2].focus()
    }   
}


//copy-link
function copyLink() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Tautan berhasil disalin " + copyText.value);
}



