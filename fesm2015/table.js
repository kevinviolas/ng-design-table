import { __decorate, __param, __metadata, __awaiter } from 'tslib';
import { EventEmitter, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, ChangeDetectorRef, Input, Component, ViewChild, ElementRef, NgModule, Output, ViewEncapsulation, Optional, SkipSelf } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, switchMap, share, pluck } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

let TableService = class TableService {
    constructor(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
        this.emptyRow = false;
        this.config = settingConfig;
    }
    setHeader(displayColumn) {
        this.displayColumn = displayColumn;
        this.updateHeader.emit(true);
    }
};
TableService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['__NgxDesignTable__',] }] }
];
TableService.ɵprov = ɵɵdefineInjectable({ factory: function TableService_Factory() { return new TableService(ɵɵinject("__NgxDesignTable__")); }, token: TableService, providedIn: "root" });
TableService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject('__NgxDesignTable__')),
    __metadata("design:paramtypes", [Object])
], TableService);

let CustomerRankComponent = class CustomerRankComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
    }
    ngOnInit() {
        const config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
        if (this.type) {
            this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
            for (let c of config) {
                if (this._type.toLocaleLowerCase() === 'default') {
                    this.type = 'Classic'.toUpperCase();
                    this.typeClass = c.toLocaleLowerCase();
                }
                else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                    this.typeClass = c.toLocaleLowerCase();
                    this.type = this.type.toUpperCase();
                }
            }
        }
        else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default';
        }
        /*  if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze'
            this.type = this.type.toUpperCase()
          } else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default'
          }
          this.changeDetectorRefs.detectChanges();*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
CustomerRankComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomerRankComponent.prototype, "type", void 0);
CustomerRankComponent = __decorate([
    Component({
        selector: 'app-customer-rank',
        template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n",
        styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, TableService])
], CustomerRankComponent);

let DateFormatComponent = class DateFormatComponent {
    constructor() {
        this.timezone = 'fr';
    }
    ngOnInit() {
    }
    run(date) {
        if (date) {
            let t = date.split(' ');
            return `<span class="">
                    <span class="hour">${t[0]}</span>
                    <!--<span class="minute">${t[1]}</span>-->
                </span>`;
        }
        else {
            return `<span class="time-badge">
                    <span class="hour">-</span>
                    <span class="minute"></span>
                </span>`;
        }
    }
    ngOnChanges(changes) {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DateFormatComponent.prototype, "date", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DateFormatComponent.prototype, "timezone", void 0);
DateFormatComponent = __decorate([
    Component({
        selector: 'date-format',
        template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n",
        styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}"]
    }),
    __metadata("design:paramtypes", [])
], DateFormatComponent);

let EquipementStatusComponent = class EquipementStatusComponent {
    // private params: any = {};
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
EquipementStatusComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], EquipementStatusComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], EquipementStatusComponent.prototype, "size", void 0);
EquipementStatusComponent = __decorate([
    Component({
        selector: 'app-equipement-status',
        template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n</span>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, TableService])
], EquipementStatusComponent);

let EquipementTypeComponent = class EquipementTypeComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.equipmentType; /*{
                "firewall": "/assets/icons/equipment/firewallnwt.png",
                "nas": "/assets/icons/equipment/nasnwt.png",
                "pcfixe": "/assets/icons/equipment/pcfixe_1.png",
                "pcportable": "/assets/icons/equipment/pcportable_1.png",
                "portable": "/assets/icons/equipment/pcportable_1.png",
                "clientleger": "/assets/icons/equipment/pcportable_1.png",
                "clientléger": "/assets/icons/equipment/pcportable_1.png",
                "onduleur": "/assets/icons/equipment/ondulateur.png",
                "serveur": "/assets/icons/equipment/serveur.png",
                "server": "/assets/icons/equipment/serveur.png",
                "servervirtuel": "/assets/icons/equipment/vps.png",
                "serveurvirtuel": "/assets/icons/equipment/vps.png",
                "vm": "/assets/icons/equipment/vps.png",
                "wifi": "/assets/icons/equipment/wifi.png",
                "workstationfixe": "/assets/icons/equipment/pcfixe_1.png",
                "workstationportable": "/assets/icons/equipment/pcportable_1.png",
                "imprimante": "/assets/icons/equipment/printer.png",
            }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        const server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
EquipementTypeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], EquipementTypeComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], EquipementTypeComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], EquipementTypeComponent.prototype, "size", void 0);
EquipementTypeComponent = __decorate([
    Component({
        selector: 'app-equipement-type',
        template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, TableService])
], EquipementTypeComponent);

let GenderComponent = class GenderComponent {
    constructor(service) {
        this.service = service;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.gender; /*{
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = params.none; //"/assets/icons/status/HS.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
GenderComponent.ctorParameters = () => [
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], GenderComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], GenderComponent.prototype, "size", void 0);
GenderComponent = __decorate([
    Component({
        selector: 'app-gender',
        template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TableService])
], GenderComponent);

let IsMatIconComponent = class IsMatIconComponent {
    constructor() {
        this.isIcon = false;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    ngOnInit() {
        if (this.input && this.input.indexOf(('icon.')) > -1) {
            this.isIcon = true;
            this.display = this.input.split('.')[1];
        }
        else {
            this.isIcon = false;
            this.display = this.input;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], IsMatIconComponent.prototype, "input", void 0);
IsMatIconComponent = __decorate([
    Component({
        selector: 'app-is-mat-icon',
        template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>",
        styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}"]
    }),
    __metadata("design:paramtypes", [])
], IsMatIconComponent);

let NameAvatarComponent = class NameAvatarComponent {
    constructor(service) {
        this.service = service;
        this.fontSize = '44px';
        this.textSize = '14px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src && !this.src.includes('assets')) {
            let deg = Math.random() * (10 - 360) + 10;
            /*this.icon.nativeElement.style.backgroundImage = this.service.settingConfig.nameAvatarBackgroundColor; /*`linear-gradient(${deg}deg, #9d107d,
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;*/
            this.icon.nativeElement.style.background = '#C2C8D5 0% 0% no-repeat padding-box';
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize || '44px';
            this.icon.nativeElement.style.height = this.fontSize || '44px';
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.font = "normal normal 900 " + this.textSize + "/20px 'nexa'";
            this.icon.nativeElement.style.color = '#171F26';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.src && this.src.includes('assets')) {
            //this.icon.nativeElement.style.backgroundImage = this.src;
            /*this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';*/
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }
    ngAfterViewInit() {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }
    getRatio() {
    }
};
NameAvatarComponent.ctorParameters = () => [
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], NameAvatarComponent.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NameAvatarComponent.prototype, "fontSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NameAvatarComponent.prototype, "textSize", void 0);
__decorate([
    ViewChild('avatar', { static: true }),
    __metadata("design:type", ElementRef)
], NameAvatarComponent.prototype, "icon", void 0);
NameAvatarComponent = __decorate([
    Component({
        selector: 'name-avatar',
        template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\n    {{letter}}\n</div>\n\n<img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" />",
        styles: ["div{align-items:center;justify-content:center;padding:0!important}"]
    }),
    __metadata("design:paramtypes", [TableService])
], NameAvatarComponent);

let OriginComponent = class OriginComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        const list = this.service.settingConfig.origin; /*[{
            "label": "Web",
            "data": "assets/icons/nowteam/Web.png"
        }, {
            "label": "PRTG",
            "data": "assets/icons/nowteam/PRTG.png"
        }, {
            "label": "Mail",
            "data": "assets/icons/nowteam/Mail.png"
        }, {
            "label": "Téléphone",
            "data": "assets/icons/nowteam/Telephone.png"
        }, {
            "label": "Bot",
            "data": "assets/icons/nowteam/Bot.png"
        }];*/
        const flter = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
OriginComponent.ctorParameters = () => [
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], OriginComponent.prototype, "icon", void 0);
OriginComponent = __decorate([
    Component({
        selector: 'icon-origin',
        template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TableService])
], OriginComponent);

let PhoneDisplayComponent = class PhoneDisplayComponent {
    constructor(fb) {
        this.fb = fb;
        this.flag = '';
    }
    ngOnInit() {
        this.display = this.normalize(this.number);
        this.flag = (this.number && this.number != '' && isValidPhoneNumber(this.number) ? parsePhoneNumber(this.number).country : 'FR');
        this.flag = !this.number ? '' : this.flag;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
        }
        else if (str) {
            const phone = parsePhoneNumber(str, 'FR');
            if (phone.isValid()) {
                return phone.formatNational();
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                //str = '0'+str;
            }
            //if ( str.length === 13 && str.includes('+')) {
            let tmp = str.slice(2, 3);
            let end = str.slice(3, str.length);
            str = '0' + tmp + end;
            //}
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4.$5");
        }
        return null;
    }
};
PhoneDisplayComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], PhoneDisplayComponent.prototype, "number", void 0);
PhoneDisplayComponent = __decorate([
    Component({
        selector: 'app-phone-display',
        template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], PhoneDisplayComponent);

let PngIconComponent = class PngIconComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '5px 13px';
        this._display = 'inline-flex';
        this._size = 'cover';
    }
    ngOnInit() {
        if (this.src) {
            this.icon.nativeElement.style.backgroundImage = `url(${this.src})`;
            this.icon.nativeElement.style.backgroundSize = this._size;
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = this._padding;
            if (this.color) {
                this.icon.nativeElement.style.color = this.color;
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], PngIconComponent.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PngIconComponent.prototype, "fontSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PngIconComponent.prototype, "color", void 0);
__decorate([
    ViewChild('icon', { static: true }),
    __metadata("design:type", ElementRef)
], PngIconComponent.prototype, "icon", void 0);
PngIconComponent = __decorate([
    Component({
        selector: 'png-icon',
        template: "<span #icon>\n\n</span>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], PngIconComponent);

let PngIconModule = class PngIconModule {
};
PngIconModule = __decorate([
    NgModule({
        declarations: [PngIconComponent],
        imports: [
            CommonModule
        ],
        exports: [
            PngIconComponent
        ]
    })
], PngIconModule);

let PriorityComponent = class PriorityComponent {
    constructor(service) {
        this.service = service;
        this.label = '';
    }
    ngOnInit() {
        const list = this.service.settingConfig.priority; /*= [{
            "label": "5 - Critique (Production)",
            "data": "assets/icons/nowteam/critiqueprod.png"
        }, {
            "label": "4 - Critique",
            "data": "assets/icons/nowteam/critique.png"
        }, {
            "label": "3 - Urgente",
            "data": "assets/icons/nowteam/urgent.png"
        }, {
            "label": "2 - Normale",
            'data': "assets/icons/nowteam/normal.png"
        }, {
            "label": "1 - Basse",
            "data": "assets/icons/nowteam/basse.png"
        }];*/
        //console.log(this.icon);
        //console.log(this.iconLabel);
        this.iconSrc = "assets/icons/nowteam/" + this.icon + ".png";
        if (!this.iconLabel) {
            this.label = '';
        }
        else if (this.iconLabel.indexOf('-') == -1) {
            this.label = this.iconLabel;
        }
        else {
            this.label = this.iconLabel.split('-')[1];
        }
        switch (this.icon) {
            case 'Bleu':
                this.iconSrc = 'now-low';
                break;
            case 'Vert':
                this.iconSrc = 'now-normal';
                break;
            case 'Orange':
                this.iconSrc = 'now-urgent';
                break;
            case 'Rouge':
                this.iconSrc = 'now-critic';
                break;
            case 'Noir':
                this.iconSrc = 'now-vip';
                break;
        }
        /*if (!this.icon) {
            this.iconSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAxCAYAAABDEFA9AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAK6ADAAQAAAABAAAAMQAAAABnROrhAAAGVUlEQVRoBe1Ya0wUVxQ+d3ZXgQUxKot9wGJEk7KaAkbcVQM0qa3WNGKr1voqxD6MjdE2prFtGumftkkTK20TkzZpMCak1NZHU6GNL1hEQas8dFEpVXloykNhQVCBndtzV2ec3ZmdWXaWNibeH3PvPec753xz5sy9d4bAKDeLZUo8RBhzgJCFhNJkADKZEojFsDcB6D9AST0F/hDccZd0dnbeVqND1JR6dBOenJpgNBo+Q0KrCTZNX5QO8BR2cIO9X7S3t/cr4bWdKFlpyCwJ0zYAR75G5yYNqIKadlDKv9LR8nelv5LzF+idI9EvCUd2hUaURScWQrij8QnJS/y5hDWz8YnTPwcC2/yDhDKnmF4C5IX2lsajgn3YyMYlJi/nCPeT4DhQbzQaYeKECdDZ1QU8zweCeeUUqJtQko6ErzBBWMogenJyHAek0BtB4WIwGOCNNa9DxZFSuHapDupOV0Dz5XpwHimB3LWrwGRSLm3MbCwF2CO4DEtmLYnTduELv0FwKu3ZQlC85wfInD9XKvYZO0+chJXr1gfMNOVhaUdr4wGDj1UIk7ikpMmEGooCLU9v5a2DvHWrRc+9vX1QfeYsxMREQ2RkpFduTUyAW7e6oaauXsRJB5jRqf3um9/rLgPCm5Yg0YB+5s+1i3HP1dRBSrodVqzJA1u6A867GkTdPMdDnCgUBgRmT7JanzAK85B7QmRLjNRX8S/74fCxMq+IZW54eNg7xrcd2tpuwExbinduNKlT4XjTUnWE143GhdLpuJUGBJX8flimS7ImwkcfvA+LXnxe1B0q/UMcKw4ImamfLIGJis4DCN/MXQsfb9sKkRERIqKo+Gf49bdSca40wHQkEGd1Qw4+EWuWPaVACVRe1bAZE9ecOSflgJLeYp0+iI6U1x4/A0tcHNSfOSFKW1rbYOuHnwBbDTQbhbMcULqfAN3prGrYIjU4XnN1fHmVq4bpGKai2rVdqmfjytOu1HExMYFrwM9gniNDlLh7eyFrweLgiDIrQm9LyoB+5Tzl6sl02AoZieF7A3gTkCR4x+znO6tcSZ6xUe89lzalp+LUxexh3rN/4qRJxr6+PgGm2t+5ew+EGr7U2Ah37t5VxfspbxAkgJvE/YbbWw9uavkAfD7uHuMFubRHcC3eZqE346jY+c0OqDxRIYWojseMMUG0ORpudXer4vyVuDFv8lkfGUFGIhBR5gCznSoQZfPZsx4+WjZXa+lpz8L5P09663bj2+vVoDIdR6HEh6wMEYQgPW0W7u2SalKxWbJ4EcSOGwfsMLNyxasqSF8Vrsnn2GFGN1m2Zb608GVf7wFmBw+VQo/bDUNDQ1BUvDcASi7G9+VbJvWpWTksOEl/fz9s3PQODGCv1VjNmqPM0N2Dr0cQDYlWdrQ0zmdQ3ZllTsxmM7y7YRMbarbBwaHgieJ5lqdkheA0LGSZs4yMObB82UrBr+4e69TDe2hOV+vlG4Iz+ZtBoRyXpzIBMJJ++bLX8Aug3VFWdnwB2gW9WfjHwEc/jMvoqq62pjKpTkaWEc1y2PKloJGO459Ktj9tTTzVdr1tpKaIp9UeAnk3m5su+hvLyBJCs5S2Vn9DrbnHw8OxsqOwb99ewJ8XWnDATLbjZXtHy1/fIVjcqKSGYVkNpA79x+zcWltbAz8WF7muXG3qkuqR0XVKyQVC+bMdrU3HUHf/sCsFScajTlaIhZw/1VteYVsNBFKj2T9SZGUvGNZRQZbdtkVPhthZ2HBvYGTHqiACyjNLIbh9UMU5O++qqENWyTKLJ/LNzqoLWSF7REMa4CysxyezlZF9cJbN1uM45K1LI6i8DDQM/k/1I0VWVgZYcM2YvWu6M0hAV90rxZeRxaWrUO9OwwJJP0SVAocik5HFHxpW5+mL+rOi8aM4LGTRSS7+KM0Nxdlo2zxSL9hjsqNVDo8z+19m9qBaMFyH3ahXxdzfWGidmp9QdD5lgEQKMu22HAyWp+yM1hk5yGYY9pkSCOOJiEo1UUPOgxtThoUgfUiW0t3CoZv9ozVwkOYTDP8neMaas+dl2GpZHO8uhzfli6G7M+0zUtl51uF45hq7MR99CASlJvgnEQpQcNATYfb5OmCk+LFRSUzHsog3kO1/qGY3xQjhkyhnTyPTMSMX8WJjPgiFLUxvNMABURHi4F8JNiqcf6QfuAAAAABJRU5ErkJggg==';
        } else {
            const data: any = list.filter((e: any) => {
                return this.icon.includes(e.label);
            });
            if (data && data.length) {
                this.iconSrc = data[0].data
            }
        }*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
PriorityComponent.ctorParameters = () => [
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], PriorityComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PriorityComponent.prototype, "iconLabel", void 0);
PriorityComponent = __decorate([
    Component({
        selector: 'icon-priority',
        template: "<!--<png-icon matTooltip=\"{{this.iconLabel}}\" [src]=\"this.iconSrc\"></png-icon>-->\n<!--<png-icon [src]=\"this.iconSrc\"></png-icon>-->\n<span matTooltip=\"{{this.label}}\" class=\"{{this.iconSrc}}\">\n    {{this.label}}\n</span>",
        styles: [".now-low{background:no-repeat padding-box rgba(17,150,3,.56)!important;border-radius:5px;border:none!important;color:#3c5905!important;font:14px/36px \"Nexa Text\";letter-spacing:0;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-normal{background:no-repeat padding-box rgba(170,238,230,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#169d8a!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-urgent{background:no-repeat padding-box rgba(243,161,36,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#c48e3b!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-critic{background:no-repeat padding-box rgba(215,5,43,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#7c1c2d!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-vip{background:no-repeat padding-box rgba(120,125,130,.56)!important;border-radius:5px;border:none!important;font:12px/36px \"Nexa Text\";letter-spacing:0;color:#171f26!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}"]
    }),
    __metadata("design:paramtypes", [TableService])
], PriorityComponent);

let YesNoComponent = class YesNoComponent {
    constructor(service) {
        this.service = service;
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.yesNo; /*{
                "true": "/assets/icons/status/actif.png",
                "false": "/assets/icons/status/incatif.png"
            }*/
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
YesNoComponent.ctorParameters = () => [
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YesNoComponent.prototype, "valid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YesNoComponent.prototype, "displayNo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YesNoComponent.prototype, "displayYes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YesNoComponent.prototype, "size", void 0);
YesNoComponent = __decorate([
    Component({
        selector: 'app-yes-nox',
        template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TableService])
], YesNoComponent);

class CoreMatTable extends DataSource {
    constructor(data, sortRules, rangeRules, size = 20, detailRaws = true, emptyRow = false, filterT = {}) {
        super();
        this.totalElements = 0;
        this.number = 0;
        this.startWith = 0;
        this._totalElements = new BehaviorSubject(0);
        this.emptyRow = false;
        this.filterTable = {};
        this.size = size;
        this.data = [...data];
        this.dataAfterSearch = [];
        this.backUpData = [...data];
        //this.totalElements = data.length;
        this.emptyRow = emptyRow;
        this.filterTable = filterT;
        this.pageSort = new BehaviorSubject(sortRules);
        this.pageFilterDate = new BehaviorSubject(null);
        this.pageFilter = new BehaviorSubject('');
        this.pageNumber = new BehaviorSubject(this.startWith);
        this._totalElements.pipe(debounceTime(200)).subscribe((itemsLength) => {
            console.log('_totalElements', itemsLength);
            this.totalElements = itemsLength;
        });
        this.page$ = this.pageSort.pipe(switchMap(sortAction => this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(filter => this.pageFilterDate.pipe(switchMap(range => this.pageNumber.pipe(switchMap(page => from([{
                content: this.slice(this.sortData(this.filterDataObject(this.filterData(this.filterDateRange(this.data, range), filter), this.filterTable), sortAction), page, this.size, detailRaws)
            }])), share())))))));
    }
    filterDateRange(data, range) {
        if (!range || (!range.valueStart && !range.valueEnd)) {
            return data;
        }
        else if (data && data.length) {
            return data.filter((e) => {
                if (range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart)
                        && new Date(e[range.active]) <= new Date(range.valueEnd);
                }
                else if (range.valueStart && !range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart);
                }
                else if (!range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) <= new Date(range.valueEnd);
                }
            });
        }
        else {
            return this.data;
        }
    }
    ponderation(str, searchKey) {
        let stack = str.split(' ');
        let pond = 0;
        for (let s of stack) {
            let search = s.replace(new RegExp(' ', 'g'), '');
            if (search && search.includes(searchKey)) {
                pond++;
            }
        }
        return pond;
    }
    filterData(data, filter) {
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        const result = [];
        if (typeof filter === 'object') {
            return this.filterDataObject(data, filter);
        }
        else if (filter && filter.replace(/[^a-zA-Z ]/g, ' ')) {
            for (let e of data) {
                e.pond = 0;
                const dataRaw = JSON.stringify(e).toLowerCase()
                    .replace(/[^a-zA-Z0-9 ]/g, ' ');
                const stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ' ')
                    .split(' ');
                let combination = 0;
                for (let k of stack) {
                    if (dataRaw.includes(k)) {
                        const pond = this.ponderation(dataRaw, k);
                        if (!e.pond) {
                            e.pond = 0;
                        }
                        e.pond += pond;
                        combination++;
                    }
                }
                if (e.pond && combination === stack.length) {
                    result.push(e);
                }
            }
            this.dataAfterSearch = result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
            this._totalElements.next(this.dataAfterSearch.length);
            return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            this.dataAfterSearch = data;
            this._totalElements.next(this.dataAfterSearch.length);
            return data;
        }
    }
    filterDataObject(data, filter) {
        if (data.length === 0 && this.data) {
            //data = this.data;
            return data;
        }
        const result = [];
        if (filter && Object.keys(filter).length > 0) {
            for (let e of data) {
                let ok = true;
                e.pond = 0;
                Object.keys(filter).forEach(key => {
                    if (filter[key].includes(e[key])) {
                        //e.pond += 1;
                    }
                    else {
                        //e.pond = 0;
                        ok = false;
                    }
                });
                //if (e.pond) {
                if (ok) {
                    result.push(e);
                }
            }
            this.dataAfterSearch = result;
            this._totalElements.next(this.dataAfterSearch.length);
            return result;
            //return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    }
    sortData(data, sortAction) {
        if (sortAction.direction !== '') {
            return data.sort((a, b) => {
                if (a === 'empty' || b === 'empty') {
                    return 0;
                }
                return this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        }
        else {
            return data;
        }
    }
    compare(a, b, isAsc) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : ((Array.isArray(b) ? b.length : b)) > ((Array.isArray(a) ? a.length : a)) ? 1 : 0) * (isAsc ? -1 : 1));
    }
    fetch(page) {
        this.pageNumber.next(page);
        this.number = page;
    }
    sortIt(sortIdea) {
        this.pageSort.next(sortIdea);
    }
    filter(myFilter) {
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this._totalElements.next(this.data.length);
        }
        this.pageFilter.next(myFilter.toString());
        /*if (!myFilter.target.value || !myFilter.target.value.trim()) {
          this.totalElements = this.data.length;
        }
        this.pageFilter.next(myFilter.target.value);*/
    }
    filterDate(dateFilter) {
        this.pageFilterDate.next(dateFilter);
    }
    connect() {
        return this.page$.pipe(pluck('content'));
    }
    disconnect() {
    }
    slice(data, start = 0, end = 20, detailRow = true) {
        const rows = [];
        if (data.length) {
            data = data.slice(start * end, (start * end) + end);
            let cursor = 1;
            if (this.emptyRow) {
                for (const d of data) {
                    if (rows[cursor - 1] !== 'empty') {
                        rows.push('empty');
                    }
                    rows.push(d);
                    cursor++;
                }
                return rows;
            }
            this._totalElements.next(this.dataAfterSearch.length);
            return rows;
        }
        else {
            this._totalElements.next(this.dataAfterSearch.length);
            return data;
        }
    }
}

/***********************************************************
 **  @project MS_Nowboard                              **
 **  @file ComponentRegistry                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 12/03/2021                                         **
 ***********************************************************/
var CellsComponentList;
(function (CellsComponentList) {
    CellsComponentList["ButtonLink"] = "button-link";
    CellsComponentList["ButtonLinkText"] = "button-link-text";
    CellsComponentList["ButtonClick"] = "button-click";
    CellsComponentList["Priority"] = "priority";
    CellsComponentList["Origin"] = "origin";
    CellsComponentList["NameAvatar"] = "name-avatar";
    CellsComponentList["DateFormat"] = "date-format";
    CellsComponentList["CountRow"] = "count-row";
    CellsComponentList["Gender"] = "gender-avatar";
    CellsComponentList["Phone"] = "phone-display";
    CellsComponentList["YesNo"] = "yes-no-display";
    CellsComponentList["CustomerRank"] = "customer-rank";
    CellsComponentList["ItCategory"] = "it-category";
    CellsComponentList["ItStatus"] = "it-status";
    CellsComponentList["CustomIcon"] = "custom-icon";
    CellsComponentList["PngIcon"] = "png-icon";
    CellsComponentList["CustomCell"] = "custom-cell";
})(CellsComponentList || (CellsComponentList = {}));

let TranslateService = class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'SEARCH': `Recherche...`,
                'OPEN': 'Ouvrir',
                'CANCEL_SEARCH': 'Annuler la recherche',
                'NO_RESULT': 'Aucun résultat correspondant',
                'DETAILS': 'Détails'
            },
            'en': {
                'SEARCH': `Search...`,
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details'
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
};
TranslateService.ɵprov = ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
TranslateService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], TranslateService);

let TableComponent = class TableComponent {
    constructor(router, route, service, detector, translate, changeDetectorRef) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.detector = detector;
        this.translate = translate;
        this.changeDetectorRef = changeDetectorRef;
        this.displayDetail = false;
        this.btnOverride = false;
        this.callFunction = new EventEmitter();
        this.inputSearch = '';
        this.EmptyRow = false;
        this.blockDetails = false;
        this.clicked = new EventEmitter();
        this.filter = [];
        this.index = 0;
        this.open = '';
        this.search = '';
        this.cancelSearch = '';
        this.noResult = '';
        this.details = '';
        this.showTable = false;
    }
    expand(element) {
        if (this.blockDetails) {
            return;
        }
        if (this.expandedElement === element) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = element;
        }
        //console.log(this.expandedElement);
    }
    ngOnInit() {
        this.service.emptyRow = this.EmptyRow;
        this.open = this.translate.translate(this.lang, 'OPEN');
        this.search = this.translate.translate(this.lang, 'SEARCH');
        this.cancelSearch = this.translate.translate(this.lang, 'CANCEL_SEARCH');
        this.noResult = this.translate.translate(this.lang, 'NO_RESULT');
        this.details = this.translate.translate(this.lang, 'DETAILS');
        if (this.data) {
            this.expandedElement = false;
            this.data.paginator = this.paginatorCurrent;
            this.data.sort = this.sortCurrent;
            this.data.pageNumber.subscribe((newpage) => {
                if (newpage > 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: newpage + 1 },
                        queryParamsHandling: 'merge',
                    });
                }
                else if (newpage === 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: null },
                        queryParamsHandling: 'merge',
                    });
                }
                if (this.data && this.data.paginator && this.data.paginator.pageIndex !== newpage) {
                    // this.data.paginator.pageIndex = newpage;
                    console.log('on passe dans la ligne 146', this.data.paginator.pageIndex, newpage);
                }
                this.changeDetectorRef.markForCheck();
            });
            const page = this.route.snapshot.queryParams['page'];
            if (page) {
                const currentPage = Number(page) - 1;
                this.data.startWith = currentPage;
                this.data.fetch(currentPage);
                this.data.number = currentPage;
            }
            this.PrivateColumnDefinitions = this.columnDefinitions;
            this.buildHeaders().catch((err) => console.log('Error build table', err));
            this.service.updateHeader.subscribe((status) => {
                if (status === true) {
                    this.displayedColumns = null;
                    this.columnsToDisplay = null;
                    this.PrivateColumnDefinitions = this.service.displayColumn;
                    console.log('Module table -> New column definitions', this.PrivateColumnDefinitions);
                    this.buildHeaders().catch((err) => console.log('Error build table', err));
                    this.detector.detectChanges();
                }
            });
        }
    }
    ngAfterViewChecked() {
        this.showTable = true;
    }
    buildHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            this.displayedColumns = yield this.sort();
            if (this.displayedColumns) {
                const tmp = [];
                for (let k of this.displayedColumns) {
                    tmp.push(k.key);
                }
                this.columnsToDisplay = [...tmp];
            }
            //console.log('Module Table New Update Column Definition',  this.columnsToDisplay);
        });
    }
    generateClass(Class) {
        const MyClass = ['default-table-class'];
        for (let c of Class) {
            if (c && c !== '') {
                MyClass.push(c);
            }
        }
        return MyClass;
    }
    sort() {
        return __awaiter(this, void 0, void 0, function* () {
            const compare = (a, b) => {
                return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
            };
            if (this.PrivateColumnDefinitions) {
                return [...this.PrivateColumnDefinitions.sort(compare)];
            }
        });
    }
    buildLink(override, element) {
        if (override.length >= 2) {
            let basePath = override[0];
            for (let i = 1; i < override.length; i++) {
                basePath += '/' + element[override[i]];
            }
            return basePath;
        }
    }
    Join(elem, override, joinKey = '\n') {
        const value = [];
        for (let x in elem) {
            if (override.indexOf(x) > -1) {
                value.push(elem[x]);
            }
        }
        return value.join(joinKey);
    }
    reset() {
        this.data.filter({
            target: {
                value: ''
            }
        });
        return true;
    }
    expandShow(template) {
    }
    ngOnChanges(changes) {
        if ((this.inputSearch.length > 1 || this.inputSearch.length === 0)
            && this.inputSearch.length < 200 && this.data) {
            this.data.filter(this.inputSearch);
            this.data.fetch(0);
        }
        //this.changeDetectorRef.markForCheck();
        if (changes.data && changes.data.isFirstChange()) {
            console.log('Init init');
            this.ngOnInit();
        }
        //
    }
};
TableComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: TableService },
    { type: ChangeDetectorRef },
    { type: TranslateService },
    { type: ChangeDetectorRef }
];
__decorate([
    ViewChild('MatPaginatorCurrent', { static: true }),
    __metadata("design:type", MatPaginator)
], TableComponent.prototype, "paginatorCurrent", void 0);
__decorate([
    ViewChild('table', { static: true }),
    __metadata("design:type", MatSort)
], TableComponent.prototype, "sortCurrent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableComponent.prototype, "columnDefinitions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TableComponent.prototype, "displayDetail", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TableComponent.prototype, "displayComponent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TableComponent.prototype, "lang", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "btnOverride", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TableComponent.prototype, "callFunction", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "inputSearch", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "EmptyRow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "blockDetails", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TableComponent.prototype, "clicked", void 0);
TableComponent = __decorate([
    Component({
        selector: 'ngx-design-table',
        template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\n    <div class=\"\">\n      <!--<div class=\"col-lg-12 search-container\">\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\n        [value]=\"inputSearch\"\n        (change)=\"onChange($event)\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>-->\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\" [dataSource]=\"data \" multiTemplateDataRows matSort class=\"\"\n    *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\n    (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n          mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <ng-container *ngIf=\"column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n            (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            style=\"cursor: pointer;\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n            <app-is-mat-icon *ngIf=\"column.valueStatement && column.statement !== undefined\"\n              [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n            </app-is-mat-icon>\n          </th>\n        </ng-container>\n        <ng-container *ngIf=\"!column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n          </th>\n        </ng-container>\n        <th mat-header-cell *matHeaderCellDef\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\">\n              <!--<ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>-->\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\" -->\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\" (click)=\"element.new = false\"\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link text -->\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\n            <button-link-text (callHandler)=\"callFunction.emit($event)\" [lang]=\"lang\"\n              [routerLink]=\"column.override ? buildLink(column.override, element) : element[column.key]\"\n              [text]=\"column.key\" [class]=\"column.valueOverride?.class\"\n              [id]=\"column.valueOverride?.id ? element[column.valueOverride?.id] : ''\"\n              [modal]=\"column.valueOverride?.modal || ''\"\n              [element]=\"element\"\n            >\n            </button-link-text>\n          </ng-container>\n          <!-- icon custom-->\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\n            <input type=\"hidden\" [value]=\"element[column.key]\">\n            <img *ngIf=\"element[column.key] && column.valueOverride\" [src]=\"column.valueOverride[element[column.key]]\"\n              style=\"width: 20px; height: 20px;\">\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\" [displayNo]=\"column.config.displayYes\"\n              [displayYes]=\"column.config.displayNo\">\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\" [src]=\"element[column.key]\"\n              [fontSize]=\"column?.fontSize\"\n              [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n            <span style=\"padding-left: 14px\">\n              {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n            </span>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'custom-cell'\">\n            <lib-custom-cell [title]=\"element[column.key]\" [subTitle]=\"element[column.subTitle]\"\n              [class]=\"element[column.addClass]\"></lib-custom-cell>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"element === 'empty'\">\n          <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n            empty row\n          </td>\n        </ng-container>\n      </td>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n        [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\" style=\"height: 0\">\n        <div *ngIf=\"element['CaseNumber'] && expandedElement\">\n          <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n          </div>\n\n          <a [class.nav-expanded]=\"element == expandedElement\" [routerLink]=\"['/ticket/', element['CaseNumber']]\"\n            [title]=\"open\">\n            <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\n          </a>\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"\n        [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\n        [class.expanded]=\"expandedElement == element\" (click)=\"expand(element)\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\"\n        [ngClass]=\"!expandedElement || !row || row === 'empty'? 'empty-row': 'detail-row'\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n    [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\" (page)=\"data.fetch($event.pageIndex)\"\n    showFirstLastButtons></mat-paginator>\n</div>",
        animations: [trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])],
        encapsulation: ViewEncapsulation.None,
        styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:\"Nexa Text Bold\";font-size:14px!important;letter-spacing:0;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:no-repeat padding-box #e5e8ee;border-radius:4px;text-align:left;font:bold 12px/19px \"Nexa Text\";letter-spacing:0;color:#707070!important;cursor:pointer;padding:10px}.empty-row{background:0 0!important;height:10px!important}.empty-row td{background:0 0!important;height:0}.empty-row .ng-trigger-detailExpand,.empty-row-none{display:none!important}"]
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        TableService,
        ChangeDetectorRef,
        TranslateService,
        ChangeDetectorRef])
], TableComponent);

const db = {
    ad: 'ad',
    and: 'ad',
    andorra: 'ad',
    ae: 'ae',
    are: 'ae',
    'united-arab-emirates-(the)': 'ae',
    af: 'af',
    afg: 'af',
    afghanistan: 'af',
    ag: 'ag',
    atg: 'ag',
    'antigua-and-barbuda': 'ag',
    al: 'al',
    alb: 'al',
    albania: 'al',
    am: 'am',
    arm: 'am',
    armenia: 'am',
    ao: 'ao',
    ago: 'ao',
    angola: 'ao',
    ar: 'ar',
    arg: 'ar',
    argentina: 'ar',
    at: 'at',
    aut: 'at',
    austria: 'at',
    au: 'au',
    aus: 'au',
    australia: 'au',
    az: 'az',
    aze: 'az',
    azerbaijan: 'az',
    ba: 'ba',
    bih: 'ba',
    'bosnia-and-herzegovina': 'ba',
    bb: 'bb',
    brb: 'bb',
    barbados: 'bb',
    bd: 'bd',
    bgd: 'bd',
    bangladesh: 'bd',
    be: 'be',
    bel: 'be',
    belgium: 'be',
    bf: 'bf',
    bfa: 'bf',
    'burkina-faso': 'bf',
    bg: 'bg',
    bgr: 'bg',
    bulgaria: 'bg',
    bh: 'bh',
    bhr: 'bh',
    bahrain: 'bh',
    bi: 'bi',
    bdi: 'bi',
    burundi: 'bi',
    bj: 'bj',
    ben: 'bj',
    benin: 'bj',
    bn: 'bn',
    brn: 'bn',
    'brunei-darussalam': 'bn',
    bo: 'bo',
    bol: 'bo',
    bolivia: 'bo',
    br: 'br',
    bra: 'br',
    brazil: 'br',
    bs: 'bs',
    bhs: 'bs',
    bahamas: 'bs',
    bt: 'bt',
    btn: 'bt',
    bhutan: 'bt',
    bw: 'bw',
    bwa: 'bw',
    botswana: 'bw',
    by: 'by',
    blr: 'by',
    belarus: 'by',
    bz: 'bz',
    blz: 'bz',
    belize: 'bz',
    ca: 'ca',
    can: 'ca',
    canada: 'ca',
    cd: 'cd',
    cod: 'cd',
    'the-democratic-republic-of-the-congo': 'cd',
    cf: 'cf',
    caf: 'cf',
    'central-african-republic': 'cf',
    cg: 'cg',
    cog: 'cg',
    congo: 'cg',
    ch: 'ch',
    che: 'ch',
    switzerland: 'ch',
    ci: 'ci',
    civ: 'ci',
    'cote-d-ivoire': 'ci',
    cl: 'cl',
    chl: 'cl',
    chile: 'cl',
    cm: 'cm',
    cmr: 'cm',
    cameroon: 'cm',
    cn: 'cn',
    chn: 'cn',
    china: 'cn',
    co: 'co',
    col: 'co',
    colombia: 'co',
    cr: 'cr',
    cri: 'cr',
    'costa-rica': 'cr',
    cu: 'cu',
    cub: 'cu',
    cuba: 'cu',
    cv: 'cv',
    cpv: 'cv',
    'cabo-verde [f]': 'cv',
    cy: 'cy',
    cyp: 'cy',
    cyprus: 'cy',
    cz: 'cz',
    cze: 'cz',
    czechia: 'cz',
    de: 'de',
    deu: 'de',
    germany: 'de',
    dj: 'dj',
    dji: 'dj',
    djibouti: 'dj',
    dk: 'dk',
    dnk: 'dk',
    denmark: 'dk',
    dm: 'dm',
    dma: 'dm',
    dominica: 'dm',
    do: 'do',
    dom: 'do',
    'dominican-republic': 'do',
    dz: 'dz',
    dza: 'dz',
    algeria: 'dz',
    ec: 'ec',
    'ec-w': 'ec-w',
    ecu: 'ec',
    ecuador: 'ec',
    ee: 'ee',
    est: 'ee',
    estonia: 'ee',
    eg: 'eg',
    egy: 'eg',
    egypt: 'eg',
    er: 'er',
    eri: 'er',
    eritrea: 'er',
    es: 'es',
    esp: 'es',
    spain: 'es',
    et: 'et',
    eth: 'et',
    ethiopia: 'et',
    fi: 'fi',
    fin: 'fi',
    finland: 'fi',
    fj: 'fj',
    fji: 'fj',
    fiji: 'fj',
    fm: 'fm',
    fsm: 'fm',
    micronesia: 'fm',
    fr: 'fr',
    fra: 'fr',
    france: 'fr',
    ga: 'ga',
    gab: 'ga',
    gabon: 'ga',
    gb: 'gb',
    gbr: 'gb',
    'united-kingdom': 'gb',
    uk: 'gb',
    'great-britain': 'gb',
    gd: 'gd',
    grd: 'gd',
    grenada: 'gd',
    ge: 'ge',
    geo: 'ge',
    georgia: 'ge',
    gh: 'gh',
    gha: 'gh',
    ghana: 'gh',
    gm: 'gm',
    gmb: 'gm',
    gambia: 'gm',
    gn: 'gn',
    gin: 'gn',
    guinea: 'gn',
    gq: 'gq',
    gnq: 'gq',
    'equatorial-guinea': 'gq',
    gr: 'gr',
    grc: 'gr',
    greece: 'gr',
    gt: 'gt',
    gtm: 'gt',
    guatemala: 'gt',
    gw: 'gw',
    gnb: 'gw',
    'guinea-bissau': 'gw',
    gy: 'gy',
    guy: 'gy',
    guyana: 'gy',
    hn: 'hn',
    hnd: 'hn',
    honduras: 'hn',
    hr: 'hr',
    hrv: 'hr',
    croatia: 'hr',
    ht: 'ht',
    hti: 'ht',
    haiti: 'ht',
    hu: 'hu',
    hun: 'hu',
    hungary: 'hu',
    id: 'id',
    idn: 'id',
    indonesia: 'id',
    ie: 'ie',
    irl: 'ie',
    ireland: 'ie',
    il: 'il',
    isr: 'il',
    israel: 'il',
    in: 'in',
    ind: 'in',
    india: 'in',
    iq: 'iq',
    irq: 'iq',
    iraq: 'iq',
    ir: 'ir',
    irn: 'ir',
    iran: 'ir',
    is: 'is',
    isl: 'is',
    iceland: 'is',
    it: 'it',
    ita: 'it',
    italy: 'it',
    jm: 'jm',
    jam: 'jm',
    jamaica: 'jm',
    jo: 'jo',
    jor: 'jo',
    jordan: 'jo',
    jp: 'jp',
    jpn: 'jp',
    japan: 'jp',
    ke: 'ke',
    ken: 'ke',
    kenya: 'ke',
    kg: 'kg',
    kgz: 'kg',
    kyrgyzstan: 'kg',
    kh: 'kh',
    khm: 'kh',
    cambodia: 'kh',
    ki: 'ki',
    kir: 'ki',
    kiribati: 'ki',
    km: 'km',
    com: 'km',
    comoros: 'km',
    kn: 'kn',
    kna: 'kn',
    'saint-kitts-and-nevis': 'kn',
    kp: 'kp',
    prk: 'kp',
    'north-korea': 'kp',
    kr: 'kr',
    kor: 'kr',
    'south-korea': 'kr',
    kw: 'kw',
    kwt: 'kw',
    kuwait: 'kw',
    kz: 'kz',
    kaz: 'kz',
    kazakhstan: 'kz',
    la: 'la',
    lao: 'la',
    laos: 'la',
    lb: 'lb',
    lbn: 'lb',
    lebanon: 'lb',
    lc: 'lc',
    lca: 'lc',
    'saint-lucia': 'lc',
    li: 'li',
    lie: 'li',
    liechtenstein: 'li',
    lk: 'lk',
    lka: 'lk',
    'sri-lanka': 'lk',
    lr: 'lr',
    lbr: 'lr',
    liberia: 'lr',
    ls: 'ls',
    lso: 'ls',
    lesotho: 'ls',
    lt: 'lt',
    ltu: 'lt',
    lithuania: 'lt',
    lu: 'lu',
    lux: 'lu',
    luxembourg: 'lu',
    lv: 'lv',
    lva: 'lv',
    latvia: 'lv',
    ly: 'ly',
    lby: 'ly',
    libya: 'ly',
    ma: 'ma',
    mar: 'ma',
    morocco: 'ma',
    mc: 'mc',
    mco: 'mc',
    monaco: 'mc',
    md: 'md',
    mda: 'md',
    moldova: 'md',
    me: 'me',
    mne: 'me',
    montenegro: 'me',
    mg: 'mg',
    mdg: 'mg',
    madagascar: 'mg',
    mh: 'mh',
    mhl: 'mh',
    'marshall-islands': 'mh',
    mk: 'mk',
    mkd: 'mk',
    'north-macedonia': 'mk',
    ml: 'ml',
    mli: 'ml',
    mali: 'ml',
    mm: 'mm',
    mmr: 'mm',
    myanmar: 'mm',
    mn: 'mn',
    mng: 'mn',
    mongolia: 'mn',
    mr: 'mr',
    mrt: 'mr',
    mauritania: 'mr',
    mt: 'mt',
    mlt: 'mt',
    malta: 'mt',
    mu: 'mu',
    mus: 'mu',
    mauritius: 'mu',
    mv: 'mv',
    mdv: 'mv',
    maldives: 'mv',
    mw: 'mw',
    mwi: 'mw',
    malawi: 'mw',
    mx: 'mx',
    mex: 'mx',
    mexico: 'mx',
    my: 'my',
    mys: 'my',
    malaysia: 'my',
    mz: 'mz',
    moz: 'mz',
    mozambique: 'mz',
    na: 'na',
    nam: 'na',
    namibia: 'na',
    ne: 'ne',
    ner: 'ne',
    niger: 'ne',
    ng: 'ng',
    nga: 'ng',
    nigeria: 'ng',
    ni: 'ni',
    nic: 'ni',
    nicaragua: 'ni',
    nl: 'nl',
    nld: 'nl',
    netherlands: 'nl',
    no: 'no',
    nor: 'no',
    norway: 'no',
    np: 'np',
    npl: 'np',
    nepal: 'np',
    nr: 'nr',
    nru: 'nr',
    nauru: 'nr',
    nz: 'nz',
    nzl: 'nz',
    'new-zealand': 'nz',
    om: 'om',
    omn: 'om',
    oman: 'om',
    pa: 'pa',
    pan: 'pa',
    panama: 'pa',
    pe: 'pe',
    per: 'pe',
    peru: 'pe',
    pg: 'pg',
    png: 'pg',
    'papua-new-guinea': 'pg',
    ph: 'ph',
    phl: 'ph',
    philippines: 'ph',
    pk: 'pk',
    pak: 'pk',
    pakistan: 'pk',
    pl: 'pl',
    pol: 'pl',
    poland: 'pl',
    pt: 'pt',
    prt: 'pt',
    portugal: 'pt',
    pw: 'pw',
    plw: 'pw',
    palau: 'pw',
    py: 'py',
    pry: 'py',
    paraguay: 'py',
    qa: 'qa',
    qat: 'qa',
    qatar: 'qa',
    ro: 'ro',
    rou: 'ro',
    romania: 'ro',
    rs: 'rs',
    srb: 'rs',
    serbia: 'rs',
    ru: 'ru',
    rus: 'ru',
    russia: 'ru',
    rw: 'rw',
    rwa: 'rw',
    rwanda: 'rw',
    sa: 'sa',
    sau: 'sa',
    'saudi-arabia': 'sa',
    sb: 'sb',
    slb: 'sb',
    'solomon-islands': 'sb',
    sc: 'sc',
    syc: 'sc',
    seychelles: 'sc',
    sd: 'sd',
    sdn: 'sd',
    sudan: 'sd',
    se: 'se',
    swe: 'se',
    sweden: 'se',
    sg: 'sg',
    sgp: 'sg',
    singapore: 'sg',
    si: 'si',
    svn: 'si',
    slovenia: 'si',
    sk: 'sk',
    svk: 'sk',
    slovakia: 'sk',
    sl: 'sl',
    sle: 'sl',
    'sierra-leone': 'sl',
    sm: 'sm',
    smr: 'sm',
    'san-marino': 'sm',
    sn: 'sn',
    sen: 'sn',
    senegal: 'sn',
    so: 'so',
    som: 'so',
    somalia: 'so',
    sr: 'sr',
    sur: 'sr',
    suriname: 'sr',
    ss: 'ss',
    ssd: 'ss',
    'south-sudan': 'ss',
    st: 'st',
    stp: 'st',
    'sao-tome-and-principe': 'st',
    sv: 'sv',
    slv: 'sv',
    'el-salvador': 'sv',
    sy: 'sy',
    syr: 'sy',
    syria: 'sy',
    sz: 'sz',
    swz: 'sz',
    eswatini: 'sz',
    td: 'td',
    tcd: 'td',
    chad: 'td',
    tg: 'tg',
    tgo: 'tg',
    togo: 'tg',
    th: 'th',
    tha: 'th',
    thailand: 'th',
    tj: 'tj',
    tjk: 'tj',
    tajikistan: 'tj',
    tl: 'tl',
    tls: 'tl',
    'timor-leste': 'tl',
    tm: 'tm',
    tkm: 'tm',
    turkmenistan: 'tm',
    tn: 'tn',
    tun: 'tn',
    tunisia: 'tn',
    to: 'to',
    ton: 'to',
    tonga: 'to',
    tr: 'tr',
    tur: 'tr',
    turkey: 'tr',
    tt: 'tt',
    tto: 'tt',
    'trinidad-and-tobago': 'tt',
    tv: 'tv',
    tuv: 'tv',
    tuvalu: 'tv',
    tz: 'tz',
    tza: 'tz',
    tanzania: 'tz',
    ua: 'ua',
    ukr: 'ua',
    ukraine: 'ua',
    ug: 'ug',
    uga: 'ug',
    uganda: 'ug',
    us: 'us',
    usa: 'us',
    'united-states-of-america': 'us',
    uy: 'uy',
    ury: 'uy',
    uruguay: 'uy',
    uz: 'uz',
    uzb: 'uz',
    uzbekistan: 'uz',
    vc: 'vc',
    vct: 'vc',
    'saint-vincent-and-the-grenadines': 'vc',
    ve: 've',
    ven: 've',
    venezuela: 've',
    vn: 'vn',
    vnm: 'vn',
    'viet-nam': 'vn',
    vu: 'vu',
    vut: 'vu',
    vanuatu: 'vu',
    ws: 'ws',
    wsm: 'ws',
    samoa: 'ws',
    ye: 'ye',
    yem: 'ye',
    yemen: 'ye',
    za: 'za',
    zaf: 'za',
    'south-africa': 'za',
    zm: 'zm',
    zmb: 'zm',
    zambia: 'zm',
    zw: 'zw',
    zwe: 'zw',
    zimbabwe: 'zw',
    cc: 'cc',
    cck: 'cc',
    'cocos-islands': 'cc',
    'au-cc': 'cc',
    cx: 'cx',
    cxr: 'cx',
    'christmas-island': 'cx',
    'au-cx': 'cx',
    hm: 'hm',
    hmd: 'hm',
    'heard-island-and-mcdonald-islands': 'hm',
    'au-hm': 'hm',
    nf: 'nf',
    nfk: 'nf',
    'norfolk-island': 'nf',
    'au-nf': 'nf',
    hk: 'hk',
    hkg: 'hk',
    'hong-kong': 'hk',
    'cn-hk': 'hk',
    mo: 'mo',
    mac: 'mo',
    macao: 'mo',
    'cn-mo': 'mo',
    tw: 'tw',
    twn: 'tw',
    taiwan: 'tw',
    'cn-tw': 'tw',
    fo: 'fo',
    fro: 'fo',
    'faroe-islands': 'fo',
    'dk-fo': 'fo',
    gl: 'gl',
    grl: 'gl',
    greenland: 'gl',
    'dk-gl': 'gl',
    ax: 'ax',
    ala: 'ax',
    'aland-islands': 'ax',
    'fi-ax': 'ax',
    bl: 'bl',
    blm: 'bl',
    'saint-barthelemy': 'bl',
    'fr-bl': 'bl',
    gf: 'gf',
    guf: 'gf',
    'french-guiana': 'gf',
    'fr-gf': 'gf',
    gp: 'gp',
    glp: 'gp',
    guadeloupe: 'gp',
    'fr-gp': 'gp',
    mf: 'mf',
    maf: 'mf',
    'saint-martin': 'mf',
    'fr-mf': 'mf',
    mq: 'mq',
    mtq: 'mq',
    martinique: 'mq',
    'fr-mq': 'mq',
    nc: 'nc',
    ncl: 'nc',
    'new-caledonia': 'nc',
    'fr-nc': 'nc',
    pf: 'pf',
    pyf: 'pf',
    'french-polynesia': 'pf',
    'fr-pf': 'pf',
    pm: 'pm',
    spm: 'pm',
    'saint-pierre-and-miquelon': 'pm',
    'fr-pm': 'pm',
    re: 're',
    reu: 're',
    reunion: 're',
    'fr-re': 're',
    tf: 'tf',
    atf: 'tf',
    'french-southern-territories': 'tf',
    'fr-tf': 'tf',
    wf: 'wf',
    wlf: 'wf',
    'wallis-and-futuna': 'wf',
    'fr-wf': 'wf',
    yt: 'yt',
    myt: 'yt',
    mayotte: 'yt',
    'fr-yt': 'yt',
    gg: 'gg',
    ggy: 'gg',
    guernsey: 'gg',
    'gb-gg': 'gg',
    im: 'im',
    imn: 'im',
    'isle-of-man': 'im',
    'gb-im': 'im',
    je: 'je',
    jey: 'je',
    jersey: 'je',
    'gb-je': 'je',
    aw: 'aw',
    abw: 'aw',
    aruba: 'aw',
    'nl-aw': 'aw',
    bq: 'bq',
    bes: 'bq',
    bonaire: 'bq',
    'nl-bq': 'bq',
    cw: 'cw',
    cuw: 'cw',
    curaçao: 'cw',
    'nl-cw': 'cw',
    sx: 'sx',
    sxm: 'sx',
    'sint-maarten': 'sx',
    'nl-sx': 'sx',
    bv: 'bv',
    bvt: 'bv',
    'bouvet-island': 'bv',
    'no-bv': 'bv',
    sj: 'sj',
    sjm: 'sj',
    svalbard: 'sj',
    'no-sj': 'sj',
    ck: 'ck',
    cok: 'ck',
    'cook-islands': 'ck',
    'nz-ck': 'ck',
    nu: 'nu',
    niu: 'nu',
    niue: 'nu',
    'nz-nu': 'nu',
    tk: 'tk',
    tkl: 'tk',
    tokelau: 'tk',
    'nz-tk': 'tk',
    ai: 'ai',
    aia: 'ai',
    anguilla: 'ai',
    'uk-ai': 'ai',
    bm: 'bm',
    bmu: 'bm',
    bermuda: 'bm',
    'uk-bm': 'bm',
    fk: 'fk',
    flk: 'fk',
    'falkland-islands': 'fk',
    'uk-fk': 'fk',
    gi: 'gi',
    gib: 'gi',
    gibraltar: 'gi',
    'uk-gi': 'gi',
    gs: 'gs',
    sgs: 'gs',
    'south-georgia-and-the-south-sandwich-islands': 'gs',
    'uk-gs': 'gs',
    io: 'io',
    iot: 'io',
    'british-indian-ocean-territory': 'io',
    'uk-io': 'io',
    ky: 'ky',
    cym: 'ky',
    'cayman-islands': 'ky',
    'uk-ky': 'ky',
    ms: 'ms',
    msr: 'ms',
    montserrat: 'ms',
    'uk-ms': 'ms',
    pn: 'pn',
    pcn: 'pn',
    pitcairn: 'pn',
    'uk-pn': 'pn',
    sh: 'sh',
    shn: 'sh',
    'saint-helena': 'sh',
    'uk-sh': 'sh',
    tc: 'tc',
    tca: 'tc',
    'turks-and-caicos-islands': 'tc',
    'uk-tc': 'tc',
    vg: 'vg',
    vgb: 'vg',
    'british-virgin-islands': 'vg',
    'uk-vg': 'vg',
    as: 'as',
    asm: 'as',
    'american-samoa': 'as',
    'us-as': 'as',
    gu: 'gu',
    gum: 'gu',
    guam: 'gu',
    'us-gu': 'gu',
    mp: 'mp',
    mnp: 'mp',
    'northern-mariana-islands': 'mp',
    'us-mp': 'mp',
    pr: 'pr',
    pri: 'pr',
    'puerto-rico': 'pr',
    'us-pr': 'pr',
    um: 'um',
    umi: 'um',
    'united-states-minor-outlying-islands': 'um',
    'us-um': 'um',
    vi: 'vi',
    vir: 'vi',
    'us-virgin-islands': 'vi',
    'us-vi': 'vi',
    aq: 'aq',
    ata: 'aq',
    antarctica: 'aq',
    eh: 'eh',
    esh: 'eh',
    'western-sahara': 'eh',
    ps: 'ps',
    pse: 'ps',
    palestine: 'ps',
    va: 'va',
    vat: 'va',
    'holy-see': 'va',
    'vatican-city': 'va',
};

let NgxFlagsComponent = class NgxFlagsComponent {
    constructor() {
        this.size = 48;
        this.class = '';
        this.database = db;
        this.countryCode = '';
    }
    ngOnChanges(changes) {
        this.setImage();
    }
    setImage() {
        this.imageUrl = `assets/flags/${this.getFlag(this.getCode())}.svg`;
        this.style = {
            borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
            width: `10px`,
            height: '10px',
            marginRight: '5px',
            backgroundImage: `url("${this.imageUrl}")`,
        };
    }
    getSize() {
        return isNaN(+this.size) ? +SIZE[this.size.toUpperCase()] : this.size;
    }
    getFormat() {
        return this.format ? this.format.toLowerCase() : FORMAT.NONE;
    }
    getCode() {
        return this.country.toLowerCase();
    }
    getFlag(code) {
        return this.database[code.toLowerCase()];
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxFlagsComponent.prototype, "country", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxFlagsComponent.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxFlagsComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxFlagsComponent.prototype, "class", void 0);
NgxFlagsComponent = __decorate([
    Component({
        selector: 'flag',
        template: `<div *ngIf="this.country" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`,
        styles: [`
      .ngx-flag {
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    `]
    }),
    __metadata("design:paramtypes", [])
], NgxFlagsComponent);
var FORMAT;
(function (FORMAT) {
    FORMAT["NONE"] = "none";
    FORMAT["ROUND"] = "round";
    FORMAT["SQUARE"] = "square";
})(FORMAT || (FORMAT = {}));
var SIZE;
(function (SIZE) {
    SIZE[SIZE["XXS"] = 8] = "XXS";
    SIZE[SIZE["XS"] = 16] = "XS";
    SIZE[SIZE["S"] = 24] = "S";
    SIZE[SIZE["M"] = 32] = "M";
    SIZE[SIZE["L"] = 48] = "L";
    SIZE[SIZE["XL"] = 64] = "XL";
    SIZE[SIZE["XXL"] = 96] = "XXL";
})(SIZE || (SIZE = {}));

let ButtonLinkTextComponent = class ButtonLinkTextComponent {
    constructor(translate) {
        this.translate = translate;
        this.text = '';
        this.class = '';
        this.id = '';
        this.modal = '';
        this.callHandler = new EventEmitter();
        this.open = '';
    }
    ngOnInit() {
        this.open = this.translate.translate(this.lang, 'OPEN');
        if (this.text == 'Action') {
            this.text = this.translate.translate(this.lang, 'DETAILS');
        }
        if (this.modal !== '') {
            this.routerLink = '';
        }
    }
    action() {
        var _a, _b;
        this.callHandler.emit({
            modal: this.modal,
            id: this.id,
            caseNumber: (_a = this.element) === null || _a === void 0 ? void 0 : _a.CaseNumber,
            Vote: (_b = this.element) === null || _b === void 0 ? void 0 : _b.Vote
        });
    }
};
ButtonLinkTextComponent.ctorParameters = () => [
    { type: TranslateService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonLinkTextComponent.prototype, "lang", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonLinkTextComponent.prototype, "routerLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "class", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "modal", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "element", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ButtonLinkTextComponent.prototype, "callHandler", void 0);
ButtonLinkTextComponent = __decorate([
    Component({
        selector: 'button-link-text',
        template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\"\n    (click)=\"action()\"\n>\n    {{ text }}\n</a>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TranslateService])
], ButtonLinkTextComponent);

let CustomCellComponent = class CustomCellComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomCellComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomCellComponent.prototype, "subTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomCellComponent.prototype, "class", void 0);
CustomCellComponent = __decorate([
    Component({
        selector: 'lib-custom-cell',
        template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{subTitle}}</span>\n</div>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], CustomCellComponent);

var TableModule_1;
let TableModule = TableModule_1 = class TableModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('TableModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: TableModule_1,
            providers: [
                { provide: '__NgxDesignTable__', useValue: config },
                TableService
            ]
        };
    }
};
TableModule.ctorParameters = () => [
    { type: TableModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
TableModule = TableModule_1 = __decorate([
    NgModule({
        declarations: [
            TableComponent,
            CustomerRankComponent,
            DateFormatComponent,
            EquipementStatusComponent,
            EquipementTypeComponent,
            GenderComponent,
            IsMatIconComponent,
            NameAvatarComponent,
            OriginComponent,
            PhoneDisplayComponent,
            PriorityComponent,
            YesNoComponent,
            NgxFlagsComponent,
            ButtonLinkTextComponent,
            CustomCellComponent
        ],
        imports: [
            PngIconModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            CommonModule,
            MatIconModule,
            RouterModule,
            MatBadgeModule
        ],
        exports: [
            TableComponent,
            CustomerRankComponent,
            DateFormatComponent,
            EquipementStatusComponent,
            EquipementTypeComponent,
            GenderComponent,
            IsMatIconComponent,
            NameAvatarComponent,
            OriginComponent,
            PhoneDisplayComponent,
            PriorityComponent,
            YesNoComponent,
            PngIconModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            CommonModule,
            MatIconModule,
            RouterModule,
            MatBadgeModule,
            NgxFlagsComponent
        ]
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [TableModule])
], TableModule);

/*
 * Public API Surface of table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CellsComponentList, CoreMatTable, CustomerRankComponent, DateFormatComponent, EquipementStatusComponent, EquipementTypeComponent, GenderComponent, IsMatIconComponent, NameAvatarComponent, OriginComponent, PhoneDisplayComponent, PngIconComponent, PngIconModule, PriorityComponent, TableComponent, TableModule, TableService, YesNoComponent, TranslateService as ɵa, NgxFlagsComponent as ɵb, ButtonLinkTextComponent as ɵc, CustomCellComponent as ɵd };
//# sourceMappingURL=table.js.map
