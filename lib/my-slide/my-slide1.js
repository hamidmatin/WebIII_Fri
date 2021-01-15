const loadPlugin = function($){
$.fn.slideLeftToggle = function (option) {
    console.log(this);
    return this.each(function () {
      console.log(this);
      console.log($(this));

      const defs = {
        direction: 'left',
        duration: 600,
      };

      const opts = $.extend({}, defs, option);


      if (opts.direction === 'up') {
        $(this).animate({ height: 'toggle' }, opts.duration);
      } else if (opts.direction === 'left') {
        $(this).animate({ width: 'toggle' }, opts.duration);
      }
    });
  };
}