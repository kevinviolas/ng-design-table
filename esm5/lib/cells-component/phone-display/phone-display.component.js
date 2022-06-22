import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
var PhoneDisplayComponent = /** @class */ (function () {
    function PhoneDisplayComponent(fb) {
        this.fb = fb;
        this.flag = '';
    }
    PhoneDisplayComponent.prototype.ngOnInit = function () {
        this.display = this.normalize(this.number);
        this.flag = (this.number && this.number != '' && isValidPhoneNumber(this.number) ? parsePhoneNumber(this.number).country : 'FR');
        this.flag = !this.number ? '' : this.flag;
    };
    PhoneDisplayComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    PhoneDisplayComponent.prototype.normalize = function (str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
        }
        else if (str) {
            var phone = parsePhoneNumber(str, 'FR');
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
            var tmp = str.slice(2, 3);
            var end = str.slice(3, str.length);
            str = '0' + tmp + end;
            //}
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4.$5");
        }
        return null;
    };
    PhoneDisplayComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PhoneDisplayComponent.prototype, "number", void 0);
    PhoneDisplayComponent = __decorate([
        Component({
            selector: 'app-phone-display',
            template: "<flag [country]=\"flag\"></flag> <strong>{{display || '-'}}</strong>\r\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], PhoneDisplayComponent);
    return PhoneDisplayComponent;
}());
export { PhoneDisplayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBUyxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT2hGO0lBS0UsK0JBQ1UsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFIekIsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUlWLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLHlDQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFDM0IsSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMvQzthQUFNLElBQUksR0FBRyxFQUFFO1lBQ2QsSUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNuQixPQUFPLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3BCLGtDQUFrQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNuRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDckIsZ0JBQWdCO2FBQ2pCO1lBQ0QsZ0RBQWdEO1lBQ2hELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDdEIsR0FBRztZQUNILDJGQUEyRjtZQUMzRixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUM3RTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBN0NhLFdBQVc7O0lBTGhCO1FBQVIsS0FBSyxFQUFFOzt5REFBZ0I7SUFEYixxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixvRkFBNkM7O1NBRTlDLENBQUM7eUNBT2MsV0FBVztPQU5kLHFCQUFxQixDQW9EakM7SUFBRCw0QkFBQztDQUFBLEFBcERELElBb0RDO1NBcERZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIsIHBhcnNlLCBwYXJzZVBob25lTnVtYmVyIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGhvbmUtZGlzcGxheScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Bob25lLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVEaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG51bWJlcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgZmxhZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzcGxheSA9IHRoaXMubm9ybWFsaXplKHRoaXMubnVtYmVyKVxyXG5cclxuICAgIHRoaXMuZmxhZyA9ICh0aGlzLm51bWJlciAmJiB0aGlzLm51bWJlciAhPSAnJyAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIodGhpcy5udW1iZXIpID8gcGFyc2VQaG9uZU51bWJlcih0aGlzLm51bWJlcikuY291bnRyeSA6ICdGUicpO1xyXG4gICAgdGhpcy5mbGFnID0gIXRoaXMubnVtYmVyID8gJycgOiB0aGlzLmZsYWc7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vcm1hbGl6ZShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKHN0ciAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIoc3RyKSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VQaG9uZU51bWJlcihzdHIpLmZvcm1hdE5hdGlvbmFsKCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0cikge1xyXG4gICAgICBjb25zdCBwaG9uZSA9IHBhcnNlUGhvbmVOdW1iZXIoc3RyLCAnRlInKTtcclxuICAgICAgaWYgKHBob25lLmlzVmFsaWQoKSkge1xyXG4gICAgICAgIHJldHVybiBwaG9uZS5mb3JtYXROYXRpb25hbCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgc3RyID0gKHN0ciB8fCAnJykucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpO1xyXG4gICAgaWYgKHN0ci5sZW5ndGggPT0gMTApIHtcclxuICAgICAgLy9yZWZvcm1hdCBhbmQgcmV0dXJuIHBob25lIG51bWJlclxyXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrMzMpICQxLiQyLiQzLiQ0LiQ1XCIpO1xyXG4gICAgfSBlbHNlIGlmIChzdHIubGVuZ3RoID4gMTAgJiYgc3RyLmxlbmd0aCA8PSAxMykge1xyXG4gICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMTEpIHtcclxuICAgICAgICAvL3N0ciA9ICcwJytzdHI7XHJcbiAgICAgIH1cclxuICAgICAgLy9pZiAoIHN0ci5sZW5ndGggPT09IDEzICYmIHN0ci5pbmNsdWRlcygnKycpKSB7XHJcbiAgICAgIGxldCB0bXAgPSBzdHIuc2xpY2UoMiwgMyk7XHJcbiAgICAgIGxldCBlbmQgPSBzdHIuc2xpY2UoMywgc3RyLmxlbmd0aCk7XHJcbiAgICAgIHN0ciA9ICcwJyArIHRtcCArIGVuZDtcclxuICAgICAgLy99XHJcbiAgICAgIC8vcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrJDEpICQyLiQzLiQ0LiQ1LiQ2XCIpO1xyXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIiQxLiQyLiQzLiQ0LiQ1XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=