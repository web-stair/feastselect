    $(document).ready(function () {

      $('p').each(function() {
        var text = $(this).html();
        var newtext = text.replace('feastSelect', '<span style="color:#303077">FeastSelect</span>');
        $(this).html(newtext);
      });

      /* Sticky nvigation */

      var sticky = {
        $sticky: $('.sticky'),
        offsets: [],
        targets: [],
        stickyTop: null,

        set: function () {
          var self = this;

          var windowTop = Math.floor($(window).scrollTop());

          self.offsets = [];
          self.targets = [];

          // Get current top position of sticky element
          self.stickyTop = self.$sticky.css('position', 'relative').offset().top;

          // Cache all targets and their top positions
          self.$sticky.find('a').map(function () {
            var $el = $(this),
              href = $el.data('target') || $el.attr('href'),
              $href = /^#./.test(href) && $(href);

            return $href && $href.length && $href.is(':visible') ? [[$href[0].getBoundingClientRect().top + windowTop, href]] : null;
          })
            .sort(function (a, b) { return a[0] - b[0] })
            .each(function () {
              self.offsets.push(this[0]);
              self.targets.push(this[1]);
            });
        },

        update: function () {
          var self = this;

          var windowTop = Math.floor($(window).scrollTop());
          var $stickyLinks = self.$sticky.find('a').removeClass('active');
          var stickyPosition = 'fixed';
          var currentIndex = 0;

          // Toggle fixed position depending on visibility
          if ($(window).width() < 800 || $(window).height() < 500 || self.stickyTop > windowTop) {
            stickyPosition = 'relative';

          } else {

            for (var i = self.offsets.length; i--;) {
              if (windowTop >= self.offsets[i] - 2 && (self.offsets[i + 1] === undefined || windowTop <= self.offsets[i + 1] + 2)) {
                currentIndex = i;

                break;
              }
            }

          }

          self.$sticky.css('position', stickyPosition).width($('#leftCol').width());

          $stickyLinks.eq(currentIndex).addClass('active');
        },

        init: function () {
          var self = this;

          $(window).on('resize', function () {
            self.set();

            self.update();
          });

          $(window).on('scroll', function () {
            self.update();
          });

          $(window).trigger('resize');
        }
      }

      sticky.init();

      //jQuery for page scrolling feature - requires jQuery Easing plugin
      $('a:not([data-toggle])').bind('click', function(event) {
          var $anchor = $(this).attr('href');

          if($anchor.length > 1) {
              var offset = $($anchor).offset();
              $('html, body').stop().animate({
                  scrollTop: offset.top
              }, 800, 'linear');
          }            
          event.preventDefault();
      });


    });
