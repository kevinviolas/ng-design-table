import { ElementRef, OnInit } from '@angular/core';
export declare class PngIconComponent implements OnInit {
    src: string;
    fontSize: string;
    color: string;
    icon: ElementRef<HTMLElement>;
    private _padding;
    private _display;
    private _size;
    constructor();
    ngOnInit(): void;
}
