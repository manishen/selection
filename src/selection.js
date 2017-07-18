(function ($) {

    var NAME = 'selection';
    var DATA_KEY = 'ma.selection';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];


    var Selection = function () {
        function Selection(element, options) {
            this._element = element;
            this._options = options;

            this._init();
        }

        // Private Methods

        Selection.prototype._init = function _init () {

        };

        // Public Methods


        // Static Methods

        Selection._jQueryInterface = function _jQueryInterface(options) {
            return this.each(function () {
                var selection = $(this).data(DATA_KEY);
                var _options = (typeof options === 'undefined' ? 'undefined' : typeof options) === 'object' ? options : null;

                if (!selection) {
                    selection = new Selection(this, _options);
                    $(this).data(DATA_KEY, selection);
                }

                if (typeof options === 'string') {
                    if (selection[options] === undefined) {
                        throw new Error('No method named "' + options + '"');
                    }
                    selection[options]();
                }
            });
        };

        return Selection;
    }();


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Selection._jQueryInterface;
    $.fn[NAME].Constructor = Selection;
    $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Selection._jQueryInterface;
    };

    return Selection;

})(jQuery);