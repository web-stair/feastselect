/*
 * Plugin name: jQuery feastSelect plugin 0.1
 * URI: http://eadhassan.com/feastselect
 * Author: Ead Hassan
 * Author Email: info@eadhassan.com
 * Author URI: http://eadhassan.com
 */
(function($, window, document, undefined) {
  "use strict";
  $.fn.FeastSelect = function(options){

    // Default options
    var defaults = {
        btnClass    : 'btn-info',
        btnText     : 'Select your option',
        showEffect  : 'slideDown', // fade, hide, slideDown
        hideEffect  : 'slideUp', // fade, hide, slideDown
        hideOriginal: true
    };


    var options = $.extend(defaults, options);

    var errors = false;

    return this.each(function() {

      var $this           = $(this),
          $selectOptions  = $('option', this),
          dropdownId      = 'feastSelect_'+ $this.attr('name'),
          buttonDom       = $('<button></button>').addClass('btn dropdown-toggle ' + options.btnClass).html(options.btnText + '  <span class="caret"></span>'),
          listContainer   = $('<ul></ul>').addClass('dropdown-menu').attr('aria-labelledby', dropdownId),
          listItems       = {};

          if(options.hideOriginal == "false" || options.hideOriginal == 'false') {
            options.hideOriginal = false;
          }

          $this.addClass('feastSelect__initialized');
          $this.parent().css('position', 'relative');
          buttonDom.attr('id', dropdownId)
          .addClass(dropdownId)
          .data('toggle', 'dropdown')
          .attr('aria-haspopup', 'true')
          .attr('aria-expand', 'true')
          .css('display', 'block')
          .click(function(e) {
            e.stopPropagation();
            e.preventDefault();
            hideAnimate($('.dropdown-menu').not('.'+dropdownId));
            if( $(this).next('.dropdown-menu').is(":hidden") ) {
              showAnimate($(this).next('.dropdown-menu'))
            } else {
              hideAnimate($(this).next('.dropdown-menu'));
            }
          });

          document.addEventListener('click', function(e) {
            if(hasClass(e.target, dropdownId)) {
              return;
            } else {
              hideAnimate($('.dropdown-menu.' + dropdownId));
            }
          });

          $selectOptions.each(function(index, ele) {
            if($(this).attr('value') === "" || $(this).attr('value') === undefined) {
              return;
            } else {
              var value = $(this).attr('value'),
                  text  = $(this).text();
              listItems[index] = {id: value, text: text};
            }
          });

          if( options.hideOriginal === true ) {
            $this.hide();
          } else {
            buttonDom.css('marginTop', '10px');
          }
          $.each(listItems, function(index, value) {
            var itemId    = value.id;
            var itemText  = value.text;
            var itemDom   = $('<li>').attr('id', itemId).text(itemText).css('cursor', 'pointer');
            itemDom.click(function(i) {
              i.preventDefault();
              i.stopPropagation();

              $this.val( $(this).attr('id') );
              hideAnimate($(this).parent('.dropdown-menu'));
              buttonDom.text( $(this).text() );
              // console.log('Selected option is: ' + $this.val());

            })
            listContainer.addClass( dropdownId );
            listContainer.append( itemDom );
          });

          buttonDom.appendTo($this.parent());
          listContainer.appendTo($this.parent());

          $(document).on('change', 'select[name="'+$this.attr('name')+'"]', function() {
            var value = $this.val();
            var text = $this.find('option[value="'+ value +'"]').text();
            buttonDom.text( text );
          });
    });



    function hasClass(elem, className) {
      return elem.className.split(' ').indexOf(className) > -1;
    }

    function hideAnimate(elem) {
      switch(options.hideEffect) {
        case 'fadeOut':
          elem.fadeOut('fast');
          break;
        case 'hide':
          elem.hide();
          break;
        default:
          elem.slideUp('fast');
          break;
      }
    }

    function showAnimate(elem) {
      switch(options.showEffect) {
        case 'fadeIn':
          elem.fadeIn('fast');
          break;
        case 'show':
          elem.show();
          break;
        default:
          elem.slideDown('fast');
          break;
      }
    }


  }

  $(document).ready(function() {
    if( $("[data-feast-select]").length ) {
      $("[data-feast-select]").not('.feastSelect__initialized').each(function() {
        $(this).FeastSelect({
          btnClass    : $(this).data('btn-class') || options.btnClass,
          btnText     : $(this).data('btn-text') || options.btnText,
          hideEffect  : $(this).data('hide-effect') || options.hideEffect,
          showEffect  : $(this).data('show-effect') || options.showEffect,
          hideOriginal: $(this).data('hide-original') || options.hideOriginal
        });
      });
    }
  });


}(jQuery, window, document));
