import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
let PhoneDisplayComponent = class PhoneDisplayComponent {
    constructor(fb) {
        this.fb = fb;
        this.flag = '';
    }
    ngOnInit() {
        this.display = this.normalize(this.number);
        this.flag = (this.number && isValidPhoneNumber(this.number) ? parsePhoneNumber(this.number).country : 'FR');
        console.log(this.flag);
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
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
        template: "<flag country=\"flag\"></flag> <strong>{{display || '-'}}</strong>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], PhoneDisplayComponent);
export { PhoneDisplayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBUyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBSzlCLFlBQ1ksRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFIM0IsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUlWLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVztRQUN6QixJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQyxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2pEO2FBQU07WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNsQixrQ0FBa0M7WUFDbEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7U0FDckY7YUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQzVDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7Z0JBQ25CLGdCQUFnQjthQUNuQjtZQUNELGdEQUFnRDtZQUM1QyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQzFCLEdBQUc7WUFDSCwyRkFBMkY7WUFDM0YsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDL0U7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBRUosQ0FBQTs7WUF4Q21CLFdBQVc7O0FBTGxCO0lBQVIsS0FBSyxFQUFFOztxREFBZ0I7QUFEZixxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixnRkFBNkM7O0tBRWhELENBQUM7cUNBT2tCLFdBQVc7R0FObEIscUJBQXFCLENBOENqQztTQTlDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvdW50cnlJU08gfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xuaW1wb3J0IHsgcGFyc2VQaG9uZU51bWJlciwgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZSB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1waG9uZS1kaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBudW1iZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuICAgIGZsYWcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLm5vcm1hbGl6ZSh0aGlzLm51bWJlcilcblxuICAgICAgICB0aGlzLmZsYWcgPSAodGhpcy5udW1iZXIgJiYgaXNWYWxpZFBob25lTnVtYmVyKHRoaXMubnVtYmVyKSA/IHBhcnNlUGhvbmVOdW1iZXIodGhpcy5udW1iZXIpLmNvdW50cnkgOiAnRlInKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mbGFnKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vcm1hbGl6ZShzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RyICYmIGlzVmFsaWRQaG9uZU51bWJlcihzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VQaG9uZU51bWJlcihzdHIpLmZvcm1hdE5hdGlvbmFsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gKHN0ciB8fCAnJykucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PSAxMCkge1xuICAgICAgICAgICAgLy9yZWZvcm1hdCBhbmQgcmV0dXJuIHBob25lIG51bWJlclxuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIoKzMzKSAkMS4kMi4kMy4kNC4kNVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHIubGVuZ3RoID4gMTAgJiYgc3RyLmxlbmd0aCA8PSAxMykge1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDExKSB7XG4gICAgICAgICAgICAgICAgLy9zdHIgPSAnMCcrc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiAoIHN0ci5sZW5ndGggPT09IDEzICYmIHN0ci5pbmNsdWRlcygnKycpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IHN0ci5zbGljZSgyLCAzKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gc3RyLnNsaWNlKDMsIHN0ci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHN0ciA9ICcwJyArIHRtcCArIGVuZDtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgLy9yZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCskMSkgJDIuJDMuJDQuJDUuJDZcIik7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIiQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG4iXX0=