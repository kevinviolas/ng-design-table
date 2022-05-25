import { OnInit } from '@angular/core';
import { TranslateService } from '../../translate.service';
export declare class ButtonLinkTextComponent implements OnInit {
    private translate;
    lang: string;
    routerLink: string;
    text: string;
    class: string;
    id: string;
    open: string;
    constructor(translate: TranslateService);
    ngOnInit(): void;
}
