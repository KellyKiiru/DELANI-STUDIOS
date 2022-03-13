$(document).ready(function () {
  $('#designs-first').click(function () {
    $('#designs-first').hide(0, function () {
      $('#design-image').show(0);
    });
  });
});

$(document).ready(function () {
  $('#design-image').click(function () {
    $('#designs-first').show(0, function () {
      $('#design-image').hide(0);
    });
  });
});

$(document).ready(function () {
  $('#designs-portfolio').click(function () {
    $('#designs-portfolio').hide(0, function () {
      $('#portfolio-image').show(0);
    });
  });
});

$(document).ready(function () {
  $('#portfolio-image').click(function () {
    $('#designs-portfolio').show(0, function () {
      $('#portfolio-image').hide(0);
    });
  });
});

$(document).ready(function () {
  $('#designs-product').click(function () {
    $('#designs-product').hide(0, function () {
      $('#productdev-image').show(0);
    });
  });
});

$(document).ready(function () {
  $('#productdev-image').click(function () {
    $('#designs-product').show(0, function () {
      $('#productdev-image').hide(0);
    });
  });
});


$(document).ready(function () {
  $('#uno').mouseover(function () {
    $('#dark-screen1').show(1200);
    $('#uno').mouseleave(function () {
      $('#dark-screen1').hide(1200);
    });
  });
});



$(document).ready(function () {
  $('#deuce').mouseover(function () {
    $('#dark-screen2').show(1200);
    $('#deuce').mouseleave(function () {
      $('#dark-screen2').hide(1200);
    });
  });
});



$(document).ready(function () {
  $('#tres').mouseover(function () {
    $('#dark-screen3').show(1200);
    $('#tres').mouseleave(function () {
      $('#dark-screen3').hide(1200);
    });
  });
});



$(document).ready(function () {
  $('#cuatro').mouseover(function () {
    $('#dark-screen4').show(1200, function () {
      $('#cuatro').mouseleave(function () {
        $('#dark-screen4').hide(1200);
      });
    });
  });
});



$(document).ready(function () {
  $('#uno2').mouseover(function () {
    $('#dark-screen5').show(1200);
    $('#uno2').mouseleave(function () {
      $('#dark-screen5').hide(1200);
    });
  });
});


$(document).ready(function () {
  $('#deuce2').mouseover(function () {
    $('#dark-screen6').show(1200);
    $('#deuce2').mouseleave(function () {
      $('#dark-screen6').hide(1200);
    });
  });
});


$(document).ready(function () {
  $('#tres2').mouseover(function () {
    $('#dark-screen7').show(1200);
    $('#tres2').mouseleave(function () {
      $('#dark-screen7').hide(1200);
    });
  });
});


$(document).ready(function () {
  $('#cuatro2').mouseover(function () {
    $('#dark-screen8').show(1200);
    $('#cuatro2').mouseleave(function () {
      $('#dark-screen8').hide(1200);
    });
  });
});


let jina = document.getElementById('name');

let email = document.getElementById('email');

let emailMessage = document.getElementById('email-message');

function myFunction() {
  if (jina.value === '' || jina.value == null) {
    alert('Please input your name.')
  } else if (email.value === '' || email.value == null) {
    alert('Please input email.')
  } else if (emailMessage.value === '' || emailMessage.value == null) {
    alert('Want to give us suggestions. Write to us today.')
  } else if (jina.value && email.value && emailMessage.value) {
    alert('Hi ' + jina.value + '. Thank you. We appreciate your feedback. Expect an email response from our team in 24 hours.')
  } else {
    alert("We'd like to hear from you. Write to us.")
  }
}