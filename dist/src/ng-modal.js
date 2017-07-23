import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal, ModalContent, ModalFooter, ModalHeader } from './ng-modal.component';
var NgModalModule = (function () {
    function NgModalModule() {
    }
    NgModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
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
export { NgModalModule };
//# sourceMappingURL=ng-modal.js.map