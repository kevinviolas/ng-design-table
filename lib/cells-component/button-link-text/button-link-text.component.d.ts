import { EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '../../translate.service';
export declare class ButtonLinkTextComponent implements OnInit {
    private translate;
    lang: string;
    routerLink: string;
    text: string;
    class: string;
    id: string;
    modal: string;
    callHandler: EventEmitter<any>;
    open: string;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    action(): void;
}
