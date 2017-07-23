import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Modal, ModalContent, ModalFooter, ModalHeader } from './ng-modal.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        Modal, ModalContent, ModalFooter, ModalHeader
    ],
    providers: [],
    exports: [
        Modal, ModalContent, ModalFooter, ModalHeader
    ]
})
export class NgModalModule {
    
}
