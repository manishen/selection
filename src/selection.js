(function ($) {

    var NAME = 'selection';
    var DATA_KEY = 'ma.selection';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];

    var Tag = {
        MAIN: '<div class="selection">',
        BUTTON: '<button class="selection-btn">',
        CAPTION: '<span class="selection-caption">',
        DROPDOWN: '<div class="selection-dropdown">',
        INPUT_GROUP: '<div class="selection-input-group">',
        INPUT: '<input class="selection-input">',
        INPUT_MIN: '<input class="selection-input-min">',
        INPUT_MAX: '<input class="selection-input-max">',
        INPUT_SEPARATE: '<span class="selection-input-separate">',
        LIST: '<div class="selection-list">',
        ITEM: '<div class="selection-item">',
        ITEM_CHECK: '<span class="selection-item-check">',
        ITEM_TEXT: '<span class="selection-item-text">',
        ITEM_ICON: '<span class="selection-item-icon">',
        ACTION_GROUP: '<div class="selection-action-group">',
        ACTION_ACCEPT: '<button class="selection-action-accept">',
        ACTION_RESET: '<button class="selection-action-reset">',
        ACTION_NEW: '<button class="selection-action-new">'
    };


    var Selection = function () {
        function Selection(element, options) {
            this._element = element;
            this._options = options;
            this._tag = {};

            this._make();
        }

        // Private Methods

        Selection.prototype._make = function _make() {

            this._tag.main = $(Tag.MAIN);
            this._tag.button = $(Tag.BUTTON);
            this._tag.caption = $(Tag.CAPTION);
            this._tag.dropDown = $(Tag.DROPDOWN);
            this._tag.inputGroup = $(Tag.INPUT_GROUP);
            this._tag.input = $(Tag.INPUT);
            this._tag.inputMin = $(Tag.INPUT_MIN);
            this._tag.inputMax = $(Tag.INPUT_MAX);
            this._tag.inputSeparate = $(Tag.INPUT_SEPARATE);
            this._tag.list = $(Tag.LIST);
            this._tag.actionGroup = $(Tag.ACTION_GROUP);
            this._tag.actionAccept = $(Tag.ACTION_ACCEPT);
            this._tag.actionReset = $(Tag.ACTION_RESET);
            this._tag.actionNew = $(Tag.ACTION_NEW);
            // this._tag.item = $(Tag.ITEM);
            // this._tag.itemCheck = $(Tag.ITEM_CHECK);
            // this._tag.itemText = $(Tag.ITEM_TEXT);
            // this._tag.itemIcon = $(Tag.ITEM_ICON);

            this._tag.main
                .append(this._tag.caption)
                .append(this._tag.button);

            // if enabled searchable and choose type, single select or multi select
            this._tag.inputGroup.append(this._tag.input);

            // if enabled searchable and choose type, range
            this._tag.inputGroup
                .append(this._tag.inputMin)
                .append(this._tag.inputMax);

            // if enabled searchable
            this._tag.dropDown.append(this._tag.inputGroup);

            // most move in to another function
            var items = $(this._element).children('option');
            for (var i = 0; i < items.length; i++) {
                this._tag.list.append($(Tag.ITEM).append($(Tag.ITEM_TEXT).html($(items[i]).html())));
            }
            //---------------------------------

            this._tag.dropDown.append(this._tag.list);

            // if enabled new action
            this._tag.actionGroup.append(this._tag.actionNew);

            // if enabled accept action
            this._tag.actionGroup.append(this._tag.actionAccept);

            // if enabled reset action
            this._tag.actionGroup.append(this._tag.actionReset);

            // if enabled actions
            this._tag.dropDown.append(this._tag.actionGroup);

            // if container equals with undefined
            this._tag.main.append(this._tag.dropDown);

            $(this._element).after(this._tag.main).css('display', 'none');
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