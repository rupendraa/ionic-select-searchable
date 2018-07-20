import { CommonModule } from '@angular/common';
import { Component, ContentChild, Directive, EventEmitter, HostBinding, HostListener, Input, NgModule, Optional, Output, TemplateRef, ViewChild, forwardRef } from '@angular/core';
import { Content, Form, IonicPageModule, Item, ModalController, NavParams, Platform, ViewController } from 'ionic-angular';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableItemRightTemplateDirective = (function () {
    function SelectSearchableItemRightTemplateDirective() {
    }
    SelectSearchableItemRightTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableItemRightTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableItemRightTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableItemRightTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableItemTemplateDirective = (function () {
    function SelectSearchableItemTemplateDirective() {
    }
    SelectSearchableItemTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableItemTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableItemTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableItemTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableLabelTemplateDirective = (function () {
    function SelectSearchableLabelTemplateDirective() {
    }
    SelectSearchableLabelTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableLabelTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableLabelTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableLabelTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableMessageTemplateDirective = (function () {
    function SelectSearchableMessageTemplateDirective() {
    }
    SelectSearchableMessageTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableMessageTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableMessageTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableMessageTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchablePageComponent = (function () {
    function SelectSearchablePageComponent(navParams, viewController, platform) {
        var _this = this;
        this.navParams = navParams;
        this.viewController = viewController;
        this.platform = platform;
        this._cssClass = true;
        this.selectedItems = [];
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._selectPageComponent = this;
        this.filteredItems = this.selectComponent.items;
        this._filterItems();
        if (this.selectComponent.value) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach(function (item) {
                    _this.selectedItems.push(item);
                });
            }
            else {
                this.selectedItems.push(this.selectComponent.value);
            }
        }
        this._setItemsToConfirm(this.selectedItems);
    }
    Object.defineProperty(SelectSearchablePageComponent.prototype, "_canResetCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.canReset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchablePageComponent.prototype, "_isMultipleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchablePageComponent.prototype, "_isSearchingCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.isSearching;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isIos = this.platform.is('ios');
        this._isMD = !this._isIos;
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchbarComponent && this.selectComponent.focusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(function () {
                _this.searchbarComponent.setFocus();
            }, 1000);
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._setItemsToConfirm = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this.selectComponent._itemsToConfirm = [].concat(items);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._isItemDisabled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (!this.selectComponent.disabledItems) {
            return;
        }
        return this.selectComponent.disabledItems.some(function (_item) {
            if (_this.selectComponent.itemValueField) {
                return _item[_this.selectComponent.itemValueField] ===
                    item[_this.selectComponent.itemValueField];
            }
            return _item === item;
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._isItemSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this.selectedItems.find(function (selectedItem) {
            if (_this.selectComponent.itemValueField) {
                return item[_this.selectComponent.itemValueField] === selectedItem[_this.selectComponent.itemValueField];
            }
            return item === selectedItem;
        }) !== undefined;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._deleteSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        var /** @type {?} */ itemToDeleteIndex;
        this.selectedItems.forEach(function (selectedItem, itemIndex) {
            if (_this.selectComponent.itemValueField) {
                if (item[_this.selectComponent.itemValueField] === selectedItem[_this.selectComponent.itemValueField]) {
                    itemToDeleteIndex = itemIndex;
                }
            }
            else if (item === selectedItem) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this.selectedItems.splice(itemToDeleteIndex, 1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._addSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.selectedItems.push(item);
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._filterItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.selectComponent._hasSearch()) {
            // Delegate filtering to the event.
            this.selectComponent._emitSearch(this.infiniteScroll);
        }
        else {
            var /** @type {?} */ items = [];
            // Default filtering.
            if (!this.selectComponent._filterText || !this.selectComponent._filterText.trim()) {
                items = this.selectComponent.items;
            }
            else {
                var /** @type {?} */ filterText_1 = this.selectComponent._filterText.trim().toLowerCase();
                items = this.selectComponent.items.filter(function (item) {
                    var /** @type {?} */ itemText = (_this.selectComponent.itemTextField ?
                        item[_this.selectComponent.itemTextField] : item).toString().toLowerCase();
                    return itemText.indexOf(filterText_1) !== -1;
                });
            }
            this.filteredItems = items;
        }
    };
    /**
     * @param {?} infiniteScroll
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._getMoreItems = /**
     * @param {?} infiniteScroll
     * @return {?}
     */
    function (infiniteScroll) {
        // TODO: Try to get infiniteScroll via ViewChild. Maybe it works in a newer Ionic version.
        // For now assign it here.
        this.infiniteScroll = infiniteScroll;
        this.selectComponent.onInfiniteScroll.emit({
            component: this.selectComponent,
            infiniteScroll: infiniteScroll,
            text: this.selectComponent._filterText
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchablePageComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.selectComponent.isMultiple) {
            if (this._isItemSelected(item)) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this.selectedItems);
        }
        else {
            if (!this._isItemSelected(item)) {
                this.selectedItems = [];
                this._addSelectedItem(item);
                this.selectComponent._select(item);
            }
            this.close();
        }
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype.ok = /**
     * @return {?}
     */
    function () {
        this.selectComponent._select(this.selectedItems);
        this.close();
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Focused input interferes with the animation.
        // Blur it first, wait a bit and then close the page.
        if (this.searchbarComponent) {
            this.searchbarComponent._fireBlur();
        }
        setTimeout(function () {
            _this.selectComponent.close().then(function () {
                _this.selectComponent.onClose.emit({
                    component: _this.selectComponent
                });
            });
            if (!_this.selectComponent._hasSearch()) {
                _this.selectComponent._filterText = '';
            }
        });
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectComponent.reset();
        this.selectComponent._emitChange();
        this.selectComponent.close().then(function () {
            _this.selectComponent.onClose.emit({
                component: _this.selectComponent
            });
        });
    };
    SelectSearchablePageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-searchable-page',
                    template: "\n        <ion-header>\n            <ion-navbar [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n                <ion-title>\n                    <div *ngIf=\"selectComponent.titleTemplate\"\n                        [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n                    </div>\n                    <div *ngIf=\"!selectComponent.titleTemplate && selectComponent.labelTemplate\"\n                        [ngTemplateOutlet]=\"selectComponent.labelTemplate\">\n                    </div>\n                </ion-title>\n                <ion-buttons start>\n                    <button ion-button (click)=\"close()\">\n                        <span ion-text showWhen=\"ios\">\n                            {{selectComponent.closeButtonText}}\n                        </span>\n                        <ion-icon name=\"md-close\" hideWhen=\"ios\"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-navbar>\n            <ion-toolbar *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n                <ion-searchbar\n                    *ngIf=\"selectComponent.canSearch\"\n                    #searchbarComponent\n                    [(ngModel)]=\"selectComponent._filterText\"\n                    (ionInput)=\"_filterItems()\"\n                    [placeholder]=\"selectComponent.searchPlaceholder || 'Search'\"\n                    [debounce]=\"selectComponent.searchDebounce\">\n                </ion-searchbar>\n                <div class=\"select-searchable-page-message\" *ngIf=\"selectComponent.messageTemplate\">\n                    <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n                    </div>\n                </div>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <div class=\"select-searchable-spinner\" *ngIf=\"selectComponent.isSearching\">\n                <div class=\"select-searchable-spinner-background\"></div>\n                <ion-spinner></ion-spinner>\n            </div>\n            <ion-list no-margin *ngIf=\"filteredItems.length\">\n                <button ion-item detail-none *ngFor=\"let item of filteredItems\" (click)=\"select(item)\"\n                    class=\"select-searchable-item\"\n                    [ngClass]=\"{\n                        'select-searchable-item-is-selected': _isItemSelected(item),\n                        'select-searchable-item-is-disabled': _isItemDisabled(item)\n                    }\"\n                    [disabled]=\"_isItemDisabled(item)\">\n                    <ion-icon\n                        [name]=\"_isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n                        [color]=\"_isItemSelected(item) ? 'primary' : 'daek'\"\n                        item-left>\n                    </ion-icon>\n                    <div *ngIf=\"selectComponent.itemTemplate\"\n                        [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n                        [ngTemplateOutletContext]=\"{ item: item }\">\n                    </div>\n                    <div *ngIf=\"!selectComponent.itemTemplate\">\n                        {{selectComponent._formatItem(item)}}\n                    </div>\n                    <div *ngIf=\"selectComponent.itemRightTemplate\" item-right>\n                        <div [ngTemplateOutlet]=\"selectComponent.itemRightTemplate\"\n                            [ngTemplateOutletContext]=\"{ item: item }\">\n                        </div>\n                    </div>\n                </button>\n            </ion-list>\n            <div *ngIf=\"!filteredItems.length\" margin>{{selectComponent.noItemsFoundText}}</div>\n            <ion-infinite-scroll [enabled]=\"selectComponent.hasInfiniteScroll\"\n                (ionInfinite)=\"_getMoreItems($event)\">\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </ion-content>\n        <ion-footer *ngIf=\"selectComponent.canReset || selectComponent.isMultiple\">\n            <ion-toolbar padding>\n                <ion-row>\n                    <ion-col no-padding *ngIf=\"selectComponent.canReset\"\n                        [attr.col-6]=\"selectComponent.canReset && selectComponent.isMultiple ? '' : null\"\n                        [attr.col-12]=\"selectComponent.canReset && !selectComponent.isMultiple ? '' : null\">\n                        <button ion-button full no-margin (click)=\"reset()\" [disabled]=\"!selectedItems.length\">\n                            {{selectComponent.resetButtonText}}\n                        </button>\n                    </ion-col>\n                    <ion-col no-padding *ngIf=\"selectComponent.isMultiple\"\n                        [attr.col-6]=\"selectComponent.canReset && selectComponent.isMultiple ? '' : null\"\n                        [attr.col-12]=\"!selectComponent.canReset && selectComponent.isMultiple ? '' : null\">\n                        <button ion-button full no-margin (click)=\"ok()\"\n                            [disabled]=\"!selectComponent.isOkButtonEnabled\">\n                            {{selectComponent.okButtonText}}\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-toolbar>\n        </ion-footer>\n    "
                },] },
    ];
    /** @nocollapse */
    SelectSearchablePageComponent.ctorParameters = function () { return [
        { type: NavParams, },
        { type: ViewController, },
        { type: Platform, },
    ]; };
    SelectSearchablePageComponent.propDecorators = {
        "_cssClass": [{ type: HostBinding, args: ['class.select-searchable-page',] },],
        "_canResetCssClass": [{ type: HostBinding, args: ['class.select-searchable-page-can-reset',] },],
        "_isMultipleCssClass": [{ type: HostBinding, args: ['class.select-searchable-page-is-multiple',] },],
        "_isSearchingCssClass": [{ type: HostBinding, args: ['class.select-searchable-page-is-searching',] },],
        "_isIos": [{ type: HostBinding, args: ['class.select-searchable-page-ios',] },],
        "_isMD": [{ type: HostBinding, args: ['class.select-searchable-page-md',] },],
        "searchbarComponent": [{ type: ViewChild, args: ['searchbarComponent',] },],
        "_content": [{ type: ViewChild, args: [Content,] },],
    };
    return SelectSearchablePageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableTitleTemplateDirective = (function () {
    function SelectSearchableTitleTemplateDirective() {
    }
    SelectSearchableTitleTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableTitleTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableTitleTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableTitleTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableValueTemplateDirective = (function () {
    function SelectSearchableValueTemplateDirective() {
    }
    SelectSearchableValueTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableValueTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableValueTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableValueTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableComponent = (function () {
    function SelectSearchableComponent(modalController, ionForm, platform, ionItem) {
        this.modalController = modalController;
        this.ionForm = ionForm;
        this.platform = platform;
        this.ionItem = ionItem;
        this._cssClass = true;
        this._items = [];
        this._useSearch = true;
        this._isEnabled = true;
        this._isOpened = false;
        this._valueItems = [];
        this._value = null;
        this._filterText = '';
        this._itemsToConfirm = [];
        this.isOkButtonEnabled = true;
        this.canSearch = false;
        this.canReset = false;
        this.hasInfiniteScroll = false;
        this.noItemsFoundText = 'No items found.';
        this.resetButtonText = 'Clear';
        this.okButtonText = 'OK';
        this.closeButtonText = 'Cancel';
        this.focusSearchbar = false;
        this.onChange = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onInfiniteScroll = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.searchDebounce = 250;
        this.disabledItems = [];
        this.propagateChange = function (_) { };
    }
    Object.defineProperty(SelectSearchableComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            // Set value items.
            this._valueItems.splice(0, this._valueItems.length);
            if (this.isMultiple) {
                if (value && value.length) {
                    Array.prototype.push.apply(this._valueItems, value);
                }
            }
            else {
                if (value) {
                    this._valueItems.push(value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            // The original reference of the array should be preserved to keep two-way data binding
            // working between SelectSearchable and SelectSearchablePage.
            this._items.splice(0, this._items.length);
            // Add new items to the array.
            Array.prototype.push.apply(this._items, items);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "isEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isEnabled;
        },
        set: /**
         * @param {?} isEnabled
         * @return {?}
         */
        function (isEnabled) {
            this._isEnabled = !!isEnabled;
            this.enableIonItem(this._isEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "isOpened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "useSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._useSearch;
        },
        set: /**
         * @param {?} useSearch
         * @return {?}
         */
        function (useSearch) {
            this._useSearch = !!useSearch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "itemsToConfirm", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemsToConfirm;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.initFocus = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    SelectSearchableComponent.prototype.enableIonItem = /**
     * @param {?} isEnabled
     * @return {?}
     */
    function (isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.setElementClass('item-select-searchable-is-enabled', isEnabled);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectSearchableComponent.prototype._click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.isEnabled || event.detail === 0) {
            // Don't continue if the click event came from a form submit.
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.open().then(function () {
            _this.onOpen.emit({
                component: _this
            });
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectSearchableComponent.prototype._isNullOrWhiteSpace = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._hasSearch = /**
     * @return {?}
     */
    function () {
        return this.useSearch && this.onSearch.observers.length > 0;
    };
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    SelectSearchableComponent.prototype._select = /**
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        this.value = this.isMultiple ? selectedItem || [] : selectedItem;
        this._emitChange();
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._emitChange = /**
     * @return {?}
     */
    function () {
        this.propagateChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    };
    /**
     * @param {?} infiniteScroll
     * @return {?}
     */
    SelectSearchableComponent.prototype._emitSearch = /**
     * @param {?} infiniteScroll
     * @return {?}
     */
    function (infiniteScroll) {
        this.onSearch.emit({
            component: this,
            infiniteScroll: infiniteScroll,
            text: this._filterText
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._formatItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    };
    /* ControlValueAccessor */
    /**
     * @param {?} value
     * @return {?}
     */
    SelectSearchableComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectSearchableComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectSearchableComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectSearchableComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { };
    /* .ControlValueAccessor */
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isIos = this.platform.is('ios');
        this._isMD = !this._isIos;
        this.ionForm.register(this);
        if (this.ionItem) {
            this.ionItem.setElementClass('item-select-searchable', true);
        }
        this.enableIonItem(this.isEnabled);
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.ionForm.deregister(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectSearchableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['items'] && this.items.length > 0) {
            this.setValue(this.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectSearchableComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.value = value;
        // Get an item from the list for value.
        // We need this in case value contains only id, which is not sufficient for template rendering.
        if (this.value && !this._isNullOrWhiteSpace(this.value[this.itemValueField])) {
            var /** @type {?} */ selectedItem = this.items.find(function (item) {
                var /** @type {?} */ a = _this.removeAcento(item[_this.itemValueField]);
                var /** @type {?} */ b = _this.removeAcento(_this.value[_this.itemValueField]);
                return a === b;
            });
            if (selectedItem) {
                this.value = selectedItem;
            }
        }
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('SelectSearchable is disabled or already opened.');
                return;
            }
            self._isOpened = true;
            self._modal = self.modalController.create(SelectSearchablePageComponent, {
                selectComponent: self
            });
            self._modal.present().then(function () {
                resolve();
            });
            self._modal.onDidDismiss(function (data, role) {
                self._isOpened = false;
                if (self.isMultiple) {
                    self._itemsToConfirm = [];
                }
                // Closed by clicking on backdrop outside modal.
                if (role === 'backdrop') {
                    self.onClose.emit({
                        component: self
                    });
                }
            });
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('SelectSearchable is disabled or already closed.');
                return;
            }
            self._isOpened = false;
            self._modal.dismiss().then(function () {
                resolve();
            });
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.setValue(this.isMultiple ? [] : null);
        if (this.isMultiple) {
            this._itemsToConfirm = [];
        }
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.scrollToTop = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('SelectSearchable content cannot be scrolled.');
                return;
            }
            self._selectPageComponent._content.scrollToTop().then(function () {
                resolve();
            });
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('SelectSearchable content cannot be scrolled.');
                return;
            }
            self._selectPageComponent._content.scrollToBottom().then(function () {
                resolve();
            });
        });
    };
    /**
     * @param {?} text
     * @return {?}
     */
    SelectSearchableComponent.prototype.removeAcento = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    };
    SelectSearchableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-searchable',
                    template: "\n        <div class=\"select-searchable-label\">\n            <div *ngIf=\"labelTemplate\" [ngTemplateOutlet]=\"labelTemplate\">\n            </div>\n        </div>\n        <div class=\"select-searchable-value\">\n            <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n                [ngTemplateOutlet]=\"valueTemplate\"\n                [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n            </div>\n            <div class=\"select-searchable-value-item\"\n                *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n                <div [ngTemplateOutlet]=\"valueTemplate\"\n                    [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n                </div>\n            </div>\n            <span *ngIf=\"!valueTemplate\">\n                <div class=\"select-searchable-value-item\" *ngFor=\"let valueItem of _valueItems\">\n                    {{_formatItem(valueItem)}}\n                </div>\n            </span>\n        </div>\n        <div class=\"select-searchable-icon\">\n            <div class=\"select-searchable-icon-inner\"></div>\n        </div>\n        <button aria-haspopup=\"true\" ion-button=\"item-cover\" class=\"item-cover\"></button>\n    ",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SelectSearchableComponent; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    SelectSearchableComponent.ctorParameters = function () { return [
        { type: ModalController, },
        { type: Form, },
        { type: Platform, },
        { type: Item, decorators: [{ type: Optional },] },
    ]; };
    SelectSearchableComponent.propDecorators = {
        "_cssClass": [{ type: HostBinding, args: ['class.select-searchable',] },],
        "_isIos": [{ type: HostBinding, args: ['class.select-searchable-ios',] },],
        "_isMD": [{ type: HostBinding, args: ['class.select-searchable-md',] },],
        "items": [{ type: Input, args: ['items',] },],
        "isSearching": [{ type: Input },],
        "isEnabled": [{ type: HostBinding, args: ['class.select-searchable-is-enabled',] }, { type: Input, args: ['isEnabled',] },],
        "isOkButtonEnabled": [{ type: Input, args: ['isOkButtonEnabled',] },],
        "itemValueField": [{ type: Input },],
        "itemTextField": [{ type: Input },],
        "canSearch": [{ type: Input },],
        "useSearch": [{ type: Input, args: ['useSearch',] },],
        "canReset": [{ type: HostBinding, args: ['class.select-searchable-can-reset',] }, { type: Input },],
        "hasInfiniteScroll": [{ type: Input },],
        "searchPlaceholder": [{ type: Input },],
        "isMultiple": [{ type: Input },],
        "noItemsFoundText": [{ type: Input },],
        "resetButtonText": [{ type: Input },],
        "okButtonText": [{ type: Input },],
        "closeButtonText": [{ type: Input },],
        "focusSearchbar": [{ type: Input },],
        "headerColor": [{ type: Input },],
        "onChange": [{ type: Output },],
        "onSearch": [{ type: Output },],
        "onInfiniteScroll": [{ type: Output },],
        "onOpen": [{ type: Output },],
        "onClose": [{ type: Output },],
        "valueTemplate": [{ type: ContentChild, args: [SelectSearchableValueTemplateDirective, { read: TemplateRef },] },],
        "itemTemplate": [{ type: ContentChild, args: [SelectSearchableItemTemplateDirective, { read: TemplateRef },] },],
        "itemRightTemplate": [{ type: ContentChild, args: [SelectSearchableItemRightTemplateDirective, { read: TemplateRef },] },],
        "labelTemplate": [{ type: ContentChild, args: [SelectSearchableLabelTemplateDirective, { read: TemplateRef },] },],
        "titleTemplate": [{ type: ContentChild, args: [SelectSearchableTitleTemplateDirective, { read: TemplateRef },] },],
        "messageTemplate": [{ type: ContentChild, args: [SelectSearchableMessageTemplateDirective, { read: TemplateRef },] },],
        "searchDebounce": [{ type: Input },],
        "disabledItems": [{ type: Input },],
        "_click": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return SelectSearchableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var components = [SelectSearchableComponent, SelectSearchablePageComponent];
var SelectSearchableModule = (function () {
    function SelectSearchableModule() {
    }
    SelectSearchableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicPageModule.forChild(SelectSearchableComponent),
                        IonicPageModule.forChild(SelectSearchablePageComponent)
                    ],
                    declarations: components.concat([
                        SelectSearchableValueTemplateDirective,
                        SelectSearchableItemTemplateDirective,
                        SelectSearchableItemRightTemplateDirective,
                        SelectSearchableLabelTemplateDirective,
                        SelectSearchableTitleTemplateDirective,
                        SelectSearchableMessageTemplateDirective
                    ]),
                    exports: components.concat([
                        SelectSearchableValueTemplateDirective,
                        SelectSearchableItemTemplateDirective,
                        SelectSearchableItemRightTemplateDirective,
                        SelectSearchableLabelTemplateDirective,
                        SelectSearchableTitleTemplateDirective,
                        SelectSearchableMessageTemplateDirective
                    ]),
                    entryComponents: components
                },] },
    ];
    /** @nocollapse */
    SelectSearchableModule.ctorParameters = function () { return []; };
    return SelectSearchableModule;
}());

export { SelectSearchableModule, SelectSearchableComponent, SelectSearchablePageComponent, SelectSearchableValueTemplateDirective, SelectSearchableItemTemplateDirective, SelectSearchableItemRightTemplateDirective, SelectSearchableLabelTemplateDirective, SelectSearchableTitleTemplateDirective, SelectSearchableMessageTemplateDirective };
