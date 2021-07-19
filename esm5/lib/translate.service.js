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
            },
            'en': {
                'SEARCH': "Search...",
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFnQkU7UUFmUSxTQUFJLEdBQUc7WUFDWCxJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixlQUFlLEVBQUUsc0JBQXNCO2dCQUN2QyxXQUFXLEVBQUUsOEJBQThCO2FBQzlDO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxlQUFlLEVBQUUsZUFBZTtnQkFDaEMsV0FBVyxFQUFFLHlCQUF5QjthQUN6QztTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsb0NBQVMsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O0lBcEJVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLGdCQUFnQixDQXFCNUI7MkJBMUJEO0NBMEJDLEFBckJELElBcUJDO1NBckJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZyA9IHtcbiAgICAgICdmcic6IHtcbiAgICAgICAgICAnU0VBUkNIJzogYFJlY2hlcmNoZS4uLmAsXG4gICAgICAgICAgJ09QRU4nOiAnT3V2cmlyJyxcbiAgICAgICAgICAnQ0FOQ0VMX1NFQVJDSCc6ICdBbm51bGVyIGxhIHJlY2hlcmNoZScsXG4gICAgICAgICAgJ05PX1JFU1VMVCc6ICdBdWN1biByw6lzdWx0YXQgY29ycmVzcG9uZGFudCcsXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdTRUFSQ0gnOiBgU2VhcmNoLi4uYCxcbiAgICAgICAgICAnT1BFTic6ICdPcGVuJyxcbiAgICAgICAgICAnQ0FOQ0VMX1NFQVJDSCc6ICdDYW5jZWwgc2VhcmNoJyxcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ05vIGNvcnJlc3BvbmRpbmcgcmVzdWx0JyxcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgfVxufVxuIl19