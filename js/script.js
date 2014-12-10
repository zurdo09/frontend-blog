// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".posts").html(posts['posts'][0]['content']);
    $(".posts2").html(posts['posts'][1]['content']);
    $(".posts3").html(posts['posts'][2]['content']);
    $(".posts4").html(posts['posts'][3]['content']);
    $(".posts5").html(posts['posts'][4]['content']);
    //
  });
});

$(document).ready(function() {
    $('.Boton').click(function() {
        $('.desapare').toggle('slow');
        $('.azul1').show('slow');
        $('.Tema3').show('slow');
        $('.seg1').show('slow');
        $('pa').show('slow');
        $('.ocultar').toggle("show");

    });
});

//para el buscador
 $.expr[':'].icontains = function(obj, index, meta, stack){
    return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
    $(document).ready(function(){  
        $('#buscador').keyup(function(){
                     buscar = $(this).val();
                     $('#lista p').removeClass('resaltar');
                            if(jQuery.trim(buscar) != ''){
                               $("#lista p:icontains('" + buscar + "')").addClass('resaltar');
                            }
            });
    }); 

// para comentarios
$(document).ready(function() {
    $('.boton1').click(function() {
      var toAdd = $("input[name=message1]").val();
        $('.messages1').append("<p>"+toAdd+"</p>");
    });
});

$(document).ready(function() {
    $('.boton2').click(function() {
      var toAdd = $("input[name=message2]").val();
        $('.messages2').append("<p>"+toAdd+"</p>");
    });
});

$(document).ready(function() {
    $('.boton3').click(function() {
      var toAdd = $("input[name=message3]").val();
        $('.messages3').append("<p>"+toAdd+"</p>");
    });
});


$(document).ready(function() {
    $('.boton4').click(function() {
      var toAdd = $("input[name=message4]").val();
        $('.messages4').append("<p>"+toAdd+"</p>");
    });
});

$(document).ready(function() {
    $('.boton5').click(function() {
      var toAdd = $("input[name=message5]").val();
        $('.messages5').append("<p>"+toAdd+"</p>");
    });
});

//para mostrar parrafos 
$(document).ready(function() {
  $('.azul').click(function() {
    $('.posts').toggle('slow');
  });
});

$(document).ready(function() {
  $('.azul2').click(function() {
    $('.posts2').toggle('slow');
  });
});

$(document).ready(function() {
  $('.azul1').click(function() {
    $('.posts3').toggle('slow');
  });
});

$(document).ready(function() {
  $('.azul3').click(function() {
    $('.posts4').toggle('slow');
  });
});

$(document).ready(function() {
  $('.azul4').click(function() {
    $('.posts5').toggle('slow');
  });
});