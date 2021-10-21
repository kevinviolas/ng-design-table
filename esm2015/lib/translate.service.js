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
                'DETAILS': 'Détails',
                'CANCEL_FILTER': 'Annuler les filtres'
            },
            'en': {
                'SEARCH': `Search...`,
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details',
                'CANCEL_FILTER': 'Cancel filters'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFvQjNCO1FBbkJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixlQUFlLEVBQUUscUJBQXFCO2FBQ3pDO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxlQUFlLEVBQUUsZUFBZTtnQkFDaEMsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLGVBQWUsRUFBRSxnQkFBZ0I7YUFDcEM7U0FDSixDQUFBO0lBRWUsQ0FBQztJQUVWLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7O0FBekJZLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOztHQUNXLGdCQUFnQixDQXlCNUI7U0F6QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgJ2ZyJzoge1xuICAgICAgICAgICdTRUFSQ0gnOiBgUmVjaGVyY2hlLi4uYCxcbiAgICAgICAgICAnT1BFTic6ICdPdXZyaXInLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0FubnVsZXIgbGEgcmVjaGVyY2hlJyxcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ0F1Y3VuIHLDqXN1bHRhdCBjb3JyZXNwb25kYW50JyxcbiAgICAgICAgICAnREVUQUlMUyc6ICdEw6l0YWlscycsXG4gICAgICAgICAgJ0NBTkNFTF9GSUxURVInOiAnQW5udWxlciBsZXMgZmlsdHJlcydcbiAgICAgIH0sXG4gICAgICAnZW4nOiB7XG4gICAgICAgICAgJ1NFQVJDSCc6IGBTZWFyY2guLi5gLFxuICAgICAgICAgICdPUEVOJzogJ09wZW4nLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0NhbmNlbCBzZWFyY2gnLFxuICAgICAgICAgICdOT19SRVNVTFQnOiAnTm8gY29ycmVzcG9uZGluZyByZXN1bHQnLFxuICAgICAgICAgICdERVRBSUxTJzogJ0RldGFpbHMnLFxuICAgICAgICAgICdDQU5DRUxfRklMVEVSJzogJ0NhbmNlbCBmaWx0ZXJzJ1xuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgdHJhbnNsYXRlKGwsIHdvcmQpIHtcbiAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xuICB9XG59XG4iXX0=