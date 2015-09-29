import selectView from 'select-view';

export default {
  start: function(){

    $(document).on('click', '[data-transition]', function(e){
      var transitionTo = $(this).attr('data-transition');
      switch (transitionTo) {
        case "select":
          selectView.render();
          break;

        case "play":
          $('#container').html(JST.play());
          break;
      }
    });

  }
};
