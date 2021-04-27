import { __extends, __read, __spread, __values } from "tslib";
import { from, Subject } from "rxjs";
import { debounceTime, pluck, share, startWith, switchMap } from "rxjs/operators";
import { DataSource } from "@angular/cdk/collections";
var CoreMatTable = /** @class */ (function (_super) {
    __extends(CoreMatTable, _super);
    function CoreMatTable(data, sortRules, rangeRules, size, detailRaws) {
        if (size === void 0) { size = 20; }
        if (detailRaws === void 0) { detailRaws = true; }
        var _this = _super.call(this) || this;
        _this.number = 0;
        _this.pageNumber = new Subject();
        _this.startWith = 0;
        _this.pageSort = new Subject();
        _this.pageFilter = new Subject();
        _this.pageFilterDate = new Subject();
        _this.size = size;
        _this.data = __spread(data);
        _this.backUpData = __spread(data);
        _this.totalElements = data.length;
        _this.page$ = _this.pageFilterDate.pipe(startWith(rangeRules), switchMap(function (range) { return _this.pageFilter.pipe(debounceTime(500)).pipe(startWith(''), switchMap(function (filter) { return _this.pageSort.pipe(startWith(sortRules), switchMap(function (sortAction) { return _this.pageNumber.pipe(startWith(_this.startWith), switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterData(_this.filterDateRange(_this.data, range), filter), sortAction), page, _this.size, detailRaws)
            }]); }), share()); })); })); }));
        return _this;
    }
    CoreMatTable.prototype.filterDateRange = function (data, range) {
        if (!range.valueStart && !range.valueEnd) {
            return data;
        }
        else {
            return data.filter(function (e) {
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
    };
    CoreMatTable.prototype.ponderation = function (str, searchKey) {
        var e_1, _a;
        var stack = str.split(' ');
        var pond = 0;
        try {
            for (var stack_1 = __values(stack), stack_1_1 = stack_1.next(); !stack_1_1.done; stack_1_1 = stack_1.next()) {
                var s = stack_1_1.value;
                var search = s.replace(new RegExp(' ', 'g'), '');
                if (search && search.includes(searchKey)) {
                    pond++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (stack_1_1 && !stack_1_1.done && (_a = stack_1.return)) _a.call(stack_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return pond;
    };
    CoreMatTable.prototype.filterData = function (data, filter) {
        var e_2, _a, e_3, _b;
        var result = [];
        if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var e = data_1_1.value;
                    e.pond = 0;
                    var dataRaw = JSON.stringify(e).toLowerCase()
                        .replace(/[^a-zA-Z0-9 ]/g, " ");
                    var stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, " ")
                        .split(' ');
                    var combination = 0;
                    try {
                        for (var stack_2 = (e_3 = void 0, __values(stack)), stack_2_1 = stack_2.next(); !stack_2_1.done; stack_2_1 = stack_2.next()) {
                            var k = stack_2_1.value;
                            if (dataRaw.includes(k)) {
                                var pond = this.ponderation(dataRaw, k);
                                if (!e.pond) {
                                    e.pond = 0;
                                }
                                e.pond += pond;
                                combination++;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (stack_2_1 && !stack_2_1.done && (_b = stack_2.return)) _b.call(stack_2);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    if (e.pond && combination === stack.length) {
                        result.push(e);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
        }
        else {
            return data;
        }
    };
    CoreMatTable.prototype.sortData = function (data, sortAction) {
        var _this = this;
        if (sortAction.direction !== '') {
            return data.sort(function (a, b) {
                return _this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        }
        else {
            return data;
        }
    };
    CoreMatTable.prototype.compare = function (a, b, isAsc) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : 1) * (isAsc ? 1 : -1));
    };
    CoreMatTable.prototype.fetch = function (page) {
        this.pageNumber.next(page);
    };
    CoreMatTable.prototype.sortIt = function (sortidea) {
        this.pageSort.next(sortidea);
    };
    CoreMatTable.prototype.filter = function (myFilter) {
        console.log('my filter', myFilter.target.value, this.data.length);
        this.pageFilter.next(myFilter.target.value);
    };
    CoreMatTable.prototype.filterDate = function (dateFilter) {
        this.pageFilterDate.next(dateFilter);
    };
    CoreMatTable.prototype.connect = function () {
        return this.page$.pipe(pluck('content'));
    };
    CoreMatTable.prototype.disconnect = function () {
    };
    CoreMatTable.prototype.slice = function (data, start, end, detailRow) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = 20; }
        if (detailRow === void 0) { detailRow = true; }
        var rows = [];
        this.totalElements = data.length;
        if (this.totalElements) {
            data = data.slice(start * end, (start * end) + end);
            return data;
        }
        else {
            return rows;
        }
    };
    return CoreMatTable;
}(DataSource));
export { CoreMatTable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRy9DLE9BQU8sRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBMkNwRDtJQUFrQyxnQ0FBbUI7SUFlbkQsc0JBQVksSUFBUyxFQUFFLFNBQWUsRUFDMUIsVUFBK0IsRUFBRSxJQUFTLEVBQUUsVUFBMEI7UUFBckMscUJBQUEsRUFBQSxTQUFTO1FBQUUsMkJBQUEsRUFBQSxpQkFBMEI7UUFEbEYsWUFFRSxpQkFBTyxTQTBCUjtRQXhDTSxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBS1gsZ0JBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ25DLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixnQkFBVSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDaEMsb0JBQWMsR0FBRyxJQUFJLE9BQU8sRUFBdUIsQ0FBQztRQU0xRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFJLENBQUMsSUFBSSxZQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxVQUFVLFlBQU8sSUFBSSxDQUFDLENBQUM7UUFDNUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ25DLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDckIsU0FBUyxD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QUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUNBQVUsR0FBVjtJQUNBLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBVyxFQUFFLEtBQWlCLEVBQUUsR0FBZ0IsRUFBRSxTQUF5QjtRQUE5RCxzQkFBQSxFQUFBLFNBQWlCO1FBQUUsb0JBQUEsRUFBQSxRQUFnQjtRQUFFLDBCQUFBLEVBQUEsZ0JBQXlCO1FBQy9FLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDcEQsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUEvSkQsQ0FBa0MsVUFBVSxHQStKM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zyb20sIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIHBsdWNrLCBzaGFyZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICBkaXJlY3Rpb246ICdhc2MnIHwgJ2Rlc2MnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VSZXF1ZXN0IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNvcnQ/OiBTb3J0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2Uge1xuICBjb250ZW50OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZU1hdFRhYmxlSW50ZXJmYWNlIHtcbiAgcGFnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgdG90YWxFbGVtZW50czogbnVtYmVyO1xuICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGRhdGE6IGFueVtdO1xuICBzaXplOiBudW1iZXI7XG4gIGZldGNoOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICBjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBkaXNjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBzb3J0OiBNYXRTb3J0O1xuICBzb3J0SXQ6IChzb3J0aWRlYTogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXI6IChteUZpbHRlcjogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXJEYXRlOiAoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSkgPT4gdm9pZDtcbiAgcGFnZU51bWJlcjogU3ViamVjdDxudW1iZXI+O1xuICBzdGFydFdpdGg6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckRhdGVJbnRlcmZhY2Uge1xuICBhY3RpdmU6IHN0cmluZztcbiAgdmFsdWVTdGFydDogRGF0ZTtcbiAgdmFsdWVFbmQ6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcmVNYXRUYWJsZSBleHRlbmRzIERhdGFTb3VyY2U8RWxlbWVudD4ge1xuICBwdWJsaWMgcGFnZSQ6IE9ic2VydmFibGU8UGFnZT47XG4gIHB1YmxpYyB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHB1YmxpYyBudW1iZXIgPSAwO1xuICBwdWJsaWMgc2l6ZTogYW55O1xuICBwdWJsaWMgc29ydDogTWF0U29ydDtcbiAgcHVibGljIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgcGFnZU51bWJlciA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHVibGljIHN0YXJ0V2l0aCA9IDA7XG4gIHByaXZhdGUgcGFnZVNvcnQgPSBuZXcgU3ViamVjdDxTb3J0PigpO1xuICBwcml2YXRlIHBhZ2VGaWx0ZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgcGFnZUZpbHRlckRhdGUgPSBuZXcgU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPigpO1xuICBwcml2YXRlIGJhY2tVcERhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnksIHNvcnRSdWxlczogU29ydCxcbiAgICAgICAgICAgICAgcmFuZ2VSdWxlczogRmlsdGVyRGF0ZUludGVyZmFjZSwgc2l6ZSA9IDIwLCBkZXRhaWxSYXdzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmRhdGEgPSBbLi4uZGF0YV07XG4gICAgdGhpcy5iYWNrVXBEYXRhID0gWy4uLmRhdGFdO1xuICAgIHRoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICBzdGFydFdpdGgocmFuZ2VSdWxlcyksXG4gICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgICAgIHN0YXJ0V2l0aChzb3J0UnVsZXMpLFxuICAgICAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuc3RhcnRXaXRoKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICksIGZpbHRlclxuICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgIH1dKSksXG4gICAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICAgKSkpKVxuICAgICAgKSkpO1xuICB9XG5cbiAgZmlsdGVyRGF0ZVJhbmdlKGRhdGE6IGFueSwgcmFuZ2U6IEZpbHRlckRhdGVJbnRlcmZhY2UpIHtcbiAgICBpZiAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KVxuICAgICAgICAgICAgJiYgbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KTtcbiAgICAgICAgfSBlbHNlIGlmICghcmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcG9uZGVyYXRpb24oc3RyOiBzdHJpbmcsIHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgbGV0IHN0YWNrOiBzdHJpbmdbXSA9IHN0ci5zcGxpdCgnICcpO1xuICAgIGxldCBwb25kOiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IHMgb2Ygc3RhY2spIHtcbiAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpXG4gICAgICBpZiAoc2VhcmNoICYmIHNlYXJjaC5pbmNsdWRlcyhzZWFyY2hLZXkpKSB7XG4gICAgICAgIHBvbmQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBvbmQ7XG4gIH1cblxuICBmaWx0ZXJEYXRhKGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIiBcIikpIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBjb25zdCBkYXRhUmF3OiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShlKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpO1xuICAgICAgICBjb25zdCBzdGFjazogc3RyaW5nW10gPSBmaWx0ZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csIFwiIFwiKVxuICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgY29tYmluYXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgb2Ygc3RhY2spIHtcbiAgICAgICAgICBpZiAoZGF0YVJhdy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgY29uc3QgcG9uZDogbnVtYmVyID0gdGhpcy5wb25kZXJhdGlvbihkYXRhUmF3LCBrKTtcbiAgICAgICAgICAgIGlmICghZS5wb25kKSB7XG4gICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBvbmQgKz0gcG9uZDtcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnBvbmQgJiYgY29tYmluYXRpb24gPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGUpXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgaWYgKHNvcnRBY3Rpb24uZGlyZWN0aW9uICE9PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShhW3NvcnRBY3Rpb24uYWN0aXZlXSwgYltzb3J0QWN0aW9uLmFjdGl2ZV0sIHNvcnRBY3Rpb24uZGlyZWN0aW9uID09PSAnYXNjJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZShhOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXSwgYjogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGlzQXNjOiBib29sZWFuKSB7XG4gICAgaWYgKCFhKSB7XG4gICAgICBhID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFiKSB7XG4gICAgICBiID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuICgoKEFycmF5LmlzQXJyYXkoYSkgPyBhLmxlbmd0aCA6IGEpID4gKChBcnJheS5pc0FycmF5KGIpID8gYi5sZW5ndGggOiBiKSkgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKSk7XG4gIH1cblxuICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgfVxuXG4gIHNvcnRJdChzb3J0aWRlYTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU29ydC5uZXh0KHNvcnRpZGVhKTtcbiAgfVxuXG4gIGZpbHRlcihteUZpbHRlcjogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ215IGZpbHRlcicsIG15RmlsdGVyLnRhcmdldC52YWx1ZSwgdGhpcy5kYXRhLmxlbmd0aClcbiAgICB0aGlzLnBhZ2VGaWx0ZXIubmV4dChteUZpbHRlci50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyRGF0ZShkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlRmlsdGVyRGF0ZS5uZXh0KGRhdGVGaWx0ZXIpO1xuICB9XG5cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UkLnBpcGUocGx1Y2soJ2NvbnRlbnQnKSk7XG4gIH1cblxuICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICB9XG5cbiAgc2xpY2UoZGF0YTogYW55W10sIHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ6IG51bWJlciA9IDIwLCBkZXRhaWxSb3c6IGJvb2xlYW4gPSB0cnVlKTogYW55IHtcbiAgICBjb25zdCByb3dzID0gW107XG4gICAgdGhpcy50b3RhbEVsZW1lbnRzID0gZGF0YS5sZW5ndGg7XG4gICAgaWYgKHRoaXMudG90YWxFbGVtZW50cykge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnQgKiBlbmQsIChzdGFydCAqIGVuZCkgKyBlbmQpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByb3dzO1xuICAgIH1cbiAgfVxufVxuIl19