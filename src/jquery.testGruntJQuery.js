/*
 * testGruntJQuery
 * https://github.com/zartu/Grunt
 *
 * Copyright (c) 2017 edwint88
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.testGruntJQuery = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.testGruntJQuery = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.testGruntJQuery.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.testGruntJQuery.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].testGruntJQuery = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
