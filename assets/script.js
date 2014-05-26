// jQuery bubble pop animation
// Ben Ridout (c) 2013 - http://BenRidout.com/?q=bubblepop
// You're free to use this code with above attribution (in source is fine).

$(function(){
  // Document is ready
  $("#gbm").on("click", function(e) {
    pop(e.pageX, e.pageY, 13);
    $(this).remove()
    $("#dog").show()
  });
});

function r2d(x) {
    return x / (Math.PI / 180);
  }

  function d2r(x) {
    return x * (Math.PI / 180);
  }

  function pop(start_x, start_y, particle_count) {
    arr = [];
    angle = 0;
    particles = [];
    offset_x = $("#dummy_debris").width() / 2;
    offset_y = $("#dummy_debris").height() / 2;

    for (i = 0; i < particle_count; i++) {
      rad = d2r(angle);
      x = Math.cos(rad)*(80+Math.random()*20);
      y = Math.sin(rad)*(80+Math.random()*20);
      arr.push([start_x + x, start_y + y]);
      z = $('<div class="debris" />');
      z.css({
          "left": start_x - offset_x,
          "top": start_y - offset_x
      }).appendTo($("body"));
      particles.push(z);
      angle += 360/particle_count;
    }
    
    $.each(particles, function(i, v){
      $(v).show();
      $(v).animate(
        {
          top: arr[i][1], 
          left: arr[i][0],
          width: 4, 
          height: 4, 
          opacity: 0
        }, 600, function(){$(v).remove()
      });
    });
  }
  