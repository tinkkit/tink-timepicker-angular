'use strict';

describe('timepicker', function() {

  var bodyEl = $('body'), sandboxEl;
  var $compile, $templateCache, $animate, dateFilter, scope, today, $timeout;

  beforeEach(module('ngAnimate'));
  beforeEach(module('ngAnimateMock'));
  beforeEach(module('ngSanitize'));
  beforeEach(module('tink.timepicker'));

  beforeEach(inject(function (_$rootScope_, _$compile_, _$templateCache_, _$animate_,_$timeout_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;
    $templateCache = _$templateCache_;
    $animate = _$animate_;
    today = new Date();
    bodyEl.html('');
    sandboxEl = $('<div>').attr('id', 'sandbox').appendTo(bodyEl);
    $timeout = _$timeout_;
  }));

  afterEach(function() {
    scope.$destroy();
    sandboxEl.remove();
  });

  // Templates

  var templates = {
    'default': {
      scope: {selectedTime: new Date()},
      element: '<tink-timepicker data-ng-model="selectedTime"> </tink-timepicker>'
    }
  };


  function triggerInput(el,key){
      $(el).focus();
       triggerKey(el,37);
      for(var i =0; i< key.length;i++){
        var e = jQuery.Event('keydown');
        e.which = key.charCodeAt(i);
        $(el).trigger(e);
      }
    }

    function triggerKey(el,key){
      $(el).mousedown();
      var e = jQuery.Event('keydown');
      e.which = key;
      $(el).trigger(e);
    }

  function compileDirective(template, locals) {
    template = templates[template];
    angular.extend(scope, angular.copy(template.scope || templates['default'].scope), locals);
    var element = $(template.element).appendTo(sandboxEl);
    element = $compile(element)(scope);
    scope.$digest();
    return jQuery(element[0]);
  }

  // Tests

  describe('timepicker', function() {
    it('load with default valeus and date object',function(){
      var elm = compileDirective('default');
      var textTime = $(elm[0]).find('input').val();
 //     expect(textTime).toBe(scope.selectedTime.getHours()+':'+('0'+scope.selectedTime.getMinutes()).slice(-2));
    });

    it('change the time with keypress',function(){
      var elm = compileDirective('default');
      triggerInput($(elm[0]).find('input:first'),'1409');
      var textTime = $(elm[0]).find('input:first').val();
      expect(textTime).toBe('14:09');

      triggerInput($(elm[0]).find('input:first'),'9988');
      expect($(elm[0]).find('input:first').val()).toBe('09:08');

      triggerInput($(elm[0]).find('input:first'),'1059');
      expect($(elm[0]).find('input:first').val()).toBe('10:59');

    });

    it('change the time with buttons',function(){
      var elm = compileDirective('default');
      triggerInput($(elm[0]).find('input:first'),'1409');

      triggerKey($(elm[0]).find('input:first'),37);
      $(elm[0]).find('span:first').click();
      expect($(elm[0]).find('input:first').val()).toBe('15:09');

      $(elm[0]).find('input:first').mousedown();
      $(elm[0]).find('span:first').click();
      expect($(elm[0]).find('input:first').val()).toBe('15:10');

      triggerInput($(elm[0]).find('input:first'),'1559');
      $(elm[0]).find('input:first').mousedown();
      $(elm[0]).find('span:first').click();
      expect($(elm[0]).find('input:first').val()).toBe('16:00');

      $(elm[0]).find('span.timepicker-earlier').click();
      expect($(elm[0]).find('input:first').val()).toBe('15:59');

    });
  });
});
