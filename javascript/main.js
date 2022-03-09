// $(document).ready(function(){
//     $('#designs-first').click(function(){
//         $('#design-image').show(1000);
//     });
// });

// $(document).ready(function(){
//     $('#designs-portfolio').click(function(){
//         $('#portfolio-image').show(1000);
//     });
// });

// $(document).ready(function(){
//     $('#designs-product').click(function(){
//         $('#product-image').show(1000);
//     });
// });






// $(document).ready(function(){
//     $('#designs-first').click(function(){
//         $('#designs-first').toggle();
//     });
// });

$(document).ready(function(){
    $('#designs-first').click(function(){
        $('#designs-first').hide(0,function(){
            $('#design-image').show();
        });
    });
});

// $(document).ready(function(){
//     $('#designs-portfolio').click(function(){
//         $('#designs-portfolio').hide(0,function(){
//             $('#portfolio-image').toggle(0,function(){
//                 $('#design-image').click(0,function(){
//                     $('#designs-first').toggle(0,function(){
//                         $('#design-image').toggleOut();
//                     });
//                 });
//             });
//         });
//     });
// });


// $(document).ready(function(){
//     $('#designs-product').click(function(){
//         $('#designs-product').hide(0,function(){
//             $('#productdev-image').toggle(0,function(){
//                 $('#design-image').click(0,function(){
//                     $('#designs-first').hide(0,function(){
//                         $('#design-image').show();
//                     });
//                 });
//             });
//         });
//     });
// });