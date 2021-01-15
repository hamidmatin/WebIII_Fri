(function ($) {
  $.fn.accordion = function (options) {
    return this.each(function () {
      const defs = {
        duration: 300,
        isMulti: true,
      };
      const opts = $.extend({}, defs, options);

      const accordion = $(this);
      const titles = accordion.children('.title');
      const contents = accordion.children('.content');

      if (!opts.isMulti) contents.not(':first').hide();

      titles.click(function () {
        const current = $(this);
        if (opts.isMulti) {
          current.next().slideToggle(opts.duration);
        } else {
          if (current.next().is(':hidden')) {
            contents.slideUp(opts.duration);
            current.next().slideDown(opts.duration);
          }
        }
      });
    });
  };
})(jQuery);
