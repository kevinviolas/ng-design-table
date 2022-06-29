import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
TranslateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
TranslateService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], TranslateService);
export { TranslateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFrQjNCO1FBakJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxTQUFTO2FBQ3ZCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxlQUFlLEVBQUUsZUFBZTtnQkFDaEMsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLFNBQVM7YUFDdkI7U0FDSixDQUFBO0lBRWUsQ0FBQztJQUVWLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7O0FBdkJZLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOztHQUNXLGdCQUFnQixDQXVCNUI7U0F2QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsYW5nID0ge1xyXG4gICAgICAnZnInOiB7XHJcbiAgICAgICAgICAnU0VBUkNIJzogYFJlY2hlcmNoZS4uLmAsXHJcbiAgICAgICAgICAnT1BFTic6ICdPdXZyaXInLFxyXG4gICAgICAgICAgJ0NBTkNFTF9TRUFSQ0gnOiAnQW5udWxlciBsYSByZWNoZXJjaGUnLFxyXG4gICAgICAgICAgJ05PX1JFU1VMVCc6ICdBdWN1biByw6lzdWx0YXQgY29ycmVzcG9uZGFudCcsXHJcbiAgICAgICAgICAnREVUQUlMUyc6ICdEw6l0YWlscydcclxuICAgICAgfSxcclxuICAgICAgJ2VuJzoge1xyXG4gICAgICAgICAgJ1NFQVJDSCc6IGBTZWFyY2guLi5gLFxyXG4gICAgICAgICAgJ09QRU4nOiAnT3BlbicsXHJcbiAgICAgICAgICAnQ0FOQ0VMX1NFQVJDSCc6ICdDYW5jZWwgc2VhcmNoJyxcclxuICAgICAgICAgICdOT19SRVNVTFQnOiAnTm8gY29ycmVzcG9uZGluZyByZXN1bHQnLFxyXG4gICAgICAgICAgJ0RFVEFJTFMnOiAnRGV0YWlscydcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xyXG4gIH1cclxufVxyXG4iXX0=