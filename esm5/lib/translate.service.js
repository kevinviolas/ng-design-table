import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TranslateService = /** @class */ (function () {
    function TranslateService() {
        this.lang = {
            'fr': {
                'SEARCH': "Recherche...",
                'OPEN': 'Ouvrir',
                'CANCEL_SEARCH': 'Annuler la recherche',
                'NO_RESULT': 'Aucun résultat correspondant',
                'DETAILS': 'Détails'
            },
            'en': {
                'SEARCH': "Search...",
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details'
            }
        };
    }
    TranslateService.prototype.translate = function (l, word) {
        return this.lang[l][word];
    };
    TranslateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
    TranslateService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TranslateService);
    return TranslateService;
}());
export { TranslateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFrQkU7UUFqQlEsU0FBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsZUFBZSxFQUFFLHNCQUFzQjtnQkFDdkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLFNBQVM7YUFDdkI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLGVBQWUsRUFBRSxlQUFlO2dCQUNoQyxXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsU0FBUzthQUN2QjtTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsb0NBQVMsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O0lBdEJVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLGdCQUFnQixDQXVCNUI7MkJBNUJEO0NBNEJDLEFBdkJELElBdUJDO1NBdkJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbGFuZyA9IHtcclxuICAgICAgJ2ZyJzoge1xyXG4gICAgICAgICAgJ1NFQVJDSCc6IGBSZWNoZXJjaGUuLi5gLFxyXG4gICAgICAgICAgJ09QRU4nOiAnT3V2cmlyJyxcclxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0FubnVsZXIgbGEgcmVjaGVyY2hlJyxcclxuICAgICAgICAgICdOT19SRVNVTFQnOiAnQXVjdW4gcsOpc3VsdGF0IGNvcnJlc3BvbmRhbnQnLFxyXG4gICAgICAgICAgJ0RFVEFJTFMnOiAnRMOpdGFpbHMnXHJcbiAgICAgIH0sXHJcbiAgICAgICdlbic6IHtcclxuICAgICAgICAgICdTRUFSQ0gnOiBgU2VhcmNoLi4uYCxcclxuICAgICAgICAgICdPUEVOJzogJ09wZW4nLFxyXG4gICAgICAgICAgJ0NBTkNFTF9TRUFSQ0gnOiAnQ2FuY2VsIHNlYXJjaCcsXHJcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ05vIGNvcnJlc3BvbmRpbmcgcmVzdWx0JyxcclxuICAgICAgICAgICdERVRBSUxTJzogJ0RldGFpbHMnXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyB0cmFuc2xhdGUobCwgd29yZCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcclxuICB9XHJcbn1cclxuIl19