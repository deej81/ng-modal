import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";
var ModalHeader = (function () {
    function ModalHeader() {
    }
    ModalHeader.decorators = [
        { type: Component, args: [{
                    selector: "modal-header",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ModalHeader.ctorParameters = function () { return []; };
    return ModalHeader;
}());
export { ModalHeader };
var ModalContent = (function () {
    function ModalContent() {
    }
    ModalContent.decorators = [
        { type: Component, args: [{
                    selector: "modal-content",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ModalContent.ctorParameters = function () { return []; };
    return ModalContent;
}());
export { ModalContent };
var ModalFooter = (function () {
    function ModalFooter() {
    }
    ModalFooter.decorators = [
        { type: Component, args: [{
                    selector: "modal-footer",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ModalFooter.ctorParameters = function () { return []; };
    return ModalFooter;
}());
export { ModalFooter };
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
        this.onOpen = new EventEmitter(false);
        this.onClose = new EventEmitter(false);
        this.onSubmit = new EventEmitter(false);
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
        { type: Component, args: [{
                    selector: "modal",
                    template: "\n<div class=\"modal\" \n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened }\"\n     [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n     (click)=\"closeOnOutsideClick ? close() : 0\">\n    <div [class]=\"'modal-dialog ' + modalClass\" (click)=\"preventClosing($event)\">\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n            <div class=\"modal-header\">\n                <button *ngIf=\"!hideCloseButton\" type=\"button\" class=\"close\" data-dismiss=\"modal\" [attr.aria-label]=\"cancelButtonLabel || 'Close'\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button *ngIf=\"cancelButtonLabel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"close()\">{{ cancelButtonLabel }}</button>\n                <button *ngIf=\"submitButtonLabel\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit.emit(undefined)\">{{ submitButtonLabel }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return []; };
    Modal.propDecorators = {
        'modalClass': [{ type: Input },],
        'closeOnEscape': [{ type: Input },],
        'closeOnOutsideClick': [{ type: Input },],
        'title': [{ type: Input },],
        'hideCloseButton': [{ type: Input },],
        'cancelButtonLabel': [{ type: Input },],
        'submitButtonLabel': [{ type: Input },],
        'onOpen': [{ type: Output },],
        'onClose': [{ type: Output },],
        'onSubmit': [{ type: Output },],
        'modalRoot': [{ type: ViewChild, args: ["modalRoot",] },],
    };
    return Modal;
}());
export { Modal };
//# sourceMappingURL=ng-modal.component.js.map