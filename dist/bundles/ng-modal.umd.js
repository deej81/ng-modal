(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.modal = global.ng.modal || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var ModalHeader = (function () {
    function ModalHeader() {
    }
    ModalHeader.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: "modal-header",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ModalHeader.ctorParameters = function () { return []; };
    return ModalHeader;
}());
var ModalContent = (function () {
    function ModalContent() {
    }
    ModalContent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: "modal-content",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ModalContent.ctorParameters = function () { return []; };
    return ModalContent;
}());
var ModalFooter = (function () {
    function ModalFooter() {
    }
    ModalFooter.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: "modal-footer",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ModalFooter.ctorParameters = function () { return []; };
    return ModalFooter;
}());
var Modal = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function Modal() {
        this.closeOnEscape = true;
        this.closeOnOutsideClick = true;
        this.hideCloseButton = false;
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onOpen = new _angular_core.EventEmitter(false);
        this.onClose = new _angular_core.EventEmitter(false);
        this.onSubmit = new _angular_core.EventEmitter(false);
        // -------------------------------------------------------------------------
        // Public properties
        // -------------------------------------------------------------------------
        this.isOpened = false;
        this.createBackDrop();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    Modal.prototype.ngOnDestroy = function () {
        document.body.className = document.body.className.replace(/modal-open\b/, "");
        if (this.backdropElement && this.backdropElement.parentNode === document.body)
            document.body.removeChild(this.backdropElement);
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    Modal.prototype.open = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.isOpened)
            return;
        this.isOpened = true;
        document.body.appendChild(this.backdropElement);
        window.setTimeout(function () {
            _this.modalRoot.nativeElement.focus();
            _this.onOpen.emit(args);
        }, 0);
        document.body.className += " modal-open";
    };
    Modal.prototype.close = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.isOpened)
            return;
        document.body.removeChild(this.backdropElement);
        document.body.className = document.body.className.replace(/modal-open\b/, "");
        this.isOpened = false;
        this.onClose.emit(args);
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    Modal.prototype.preventClosing = function (event) {
        event.stopPropagation();
    };
    Modal.prototype.createBackDrop = function () {
        this.backdropElement = document.createElement("div");
        this.backdropElement.classList.add("modal-backdrop");
        this.backdropElement.classList.add("fade");
        this.backdropElement.classList.add("in");
    };
    Modal.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: "modal",
                    template: "\n<div class=\"modal\" \n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened }\"\n     [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n     (click)=\"closeOnOutsideClick ? close() : 0\">\n    <div [class]=\"'modal-dialog ' + modalClass\" (click)=\"preventClosing($event)\">\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n            <div class=\"modal-header\">\n                <button *ngIf=\"!hideCloseButton\" type=\"button\" class=\"close\" data-dismiss=\"modal\" [attr.aria-label]=\"cancelButtonLabel || 'Close'\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button *ngIf=\"cancelButtonLabel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"close()\">{{ cancelButtonLabel }}</button>\n                <button *ngIf=\"submitButtonLabel\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit.emit(undefined)\">{{ submitButtonLabel }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return []; };
    Modal.propDecorators = {
        'modalClass': [{ type: _angular_core.Input },],
        'closeOnEscape': [{ type: _angular_core.Input },],
        'closeOnOutsideClick': [{ type: _angular_core.Input },],
        'title': [{ type: _angular_core.Input },],
        'hideCloseButton': [{ type: _angular_core.Input },],
        'cancelButtonLabel': [{ type: _angular_core.Input },],
        'submitButtonLabel': [{ type: _angular_core.Input },],
        'onOpen': [{ type: _angular_core.Output },],
        'onClose': [{ type: _angular_core.Output },],
        'onSubmit': [{ type: _angular_core.Output },],
        'modalRoot': [{ type: _angular_core.ViewChild, args: ["modalRoot",] },],
    };
    return Modal;
}());

var NgModalModule = (function () {
    function NgModalModule() {
    }
    NgModalModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_common.CommonModule],
                    declarations: [
                        Modal, ModalContent, ModalFooter, ModalHeader
                    ],
                    providers: [],
                    exports: [
                        Modal, ModalContent, ModalFooter, ModalHeader
                    ]
                },] },
    ];
    /** @nocollapse */
    NgModalModule.ctorParameters = function () { return []; };
    return NgModalModule;
}());

/**
 * @module
 * @description
 * Entry point for all public APIs
 */

exports.NgModalModule = NgModalModule;
exports.ModalHeader = ModalHeader;
exports.ModalContent = ModalContent;
exports.ModalFooter = ModalFooter;
exports.Modal = Modal;

Object.defineProperty(exports, '__esModule', { value: true });

})));
