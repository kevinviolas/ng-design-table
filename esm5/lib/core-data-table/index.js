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
        _this.pageSort = new Subject();
        _this.pageFilter = new Subject();
        _this.pageFilterDate = new Subject();
        _this.size = size;
        _this.data = __spread(data);
        _this.totalElements = data.length;
        _this.page$ = _this.pageFilterDate.pipe(startWith(rangeRules), switchMap(function (range) { return _this.pageFilter.pipe(debounceTime(500)).pipe(startWith(''), switchMap(function (filter) { return _this.pageSort.pipe(startWith(sortRules), switchMap(function (sortAction) { return _this.pageNumber.pipe(startWith(0), switchMap(function (page) { return from([{
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
        data = data.slice(start * end, (start * end) + end);
        if (detailRow) {
            data.forEach(function (element) { return rows.push(element); });
            return rows;
        }
        else {
            return data;
        }
    };
    return CoreMatTable;
}(DataSource));
export { CoreMatTable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRy9DLE9BQU8sRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBMENwRDtJQUFrQyxnQ0FBbUI7SUFhbkQsc0JBQVksSUFBUyxFQUFFLFNBQWUsRUFDMUIsVUFBK0IsRUFBRSxJQUFTLEVBQUUsVUFBMEI7UUFBckMscUJBQUEsRUFBQSxTQUFTO1FBQUUsMkJBQUEsRUFBQSxpQkFBMEI7UUFEbEYsWUFFRSxpQkFBTyxTQXlCUjtRQXJDTSxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBS1gsZ0JBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ2xDLGNBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLGdCQUFVLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNoQyxvQkFBYyxHQUFHLElBQUksT0FBTyxFQUF1QixDQUFDO1FBSzFELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxJQUFJLFlBQU8sSUFBSSxDQUFDLENBQUM7UUFDdEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ25DLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDckIsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdB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LEVBQUUsS0FBaUIsRUFBRSxHQUFnQixFQUFFLFNBQXlCO1FBQTlELHNCQUFBLEVBQUEsU0FBaUI7UUFBRSxvQkFBQSxFQUFBLFFBQWdCO1FBQUUsMEJBQUEsRUFBQSxnQkFBeUI7UUFDL0UsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTVKRCxDQUFrQyxVQUFVLEdBNEozQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZnJvbSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgcGx1Y2ssIHNoYXJlLCBzdGFydFdpdGgsIHN3aXRjaE1hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gXCJAYW5ndWxhci9jZGsvY29sbGVjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTb3J0IHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJlcXVlc3Qge1xuICBwYWdlOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc29ydD86IFNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gIGNvbnRlbnQ6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3JlTWF0VGFibGVJbnRlcmZhY2Uge1xuICBwYWdlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBudW1iZXI6IG51bWJlcjtcbiAgZGF0YTogYW55W107XG4gIHNpemU6IG51bWJlcjtcbiAgZmV0Y2g6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG4gIGNvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIGRpc2Nvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIHNvcnQ6IE1hdFNvcnQ7XG4gIHNvcnRJdDogKHNvcnRpZGVhOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlcjogKG15RmlsdGVyOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICBwYWdlTnVtYmVyOiBTdWJqZWN0PG51bWJlcj47XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJEYXRlSW50ZXJmYWNlIHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIHZhbHVlU3RhcnQ6IERhdGU7XG4gIHZhbHVlRW5kOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBDb3JlTWF0VGFibGUgZXh0ZW5kcyBEYXRhU291cmNlPEVsZW1lbnQ+IHtcbiAgcHVibGljIHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICBwdWJsaWMgdG90YWxFbGVtZW50czogbnVtYmVyO1xuICBwdWJsaWMgbnVtYmVyID0gMDtcbiAgcHVibGljIHNpemU6IGFueTtcbiAgcHVibGljIHNvcnQ6IE1hdFNvcnQ7XG4gIHB1YmxpYyBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgcHVibGljIGRhdGE6IGFueTtcbiAgcHVibGljIHBhZ2VOdW1iZXIgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgcGFnZVNvcnQgPSBuZXcgU3ViamVjdDxTb3J0PigpO1xuICBwcml2YXRlIHBhZ2VGaWx0ZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgcGFnZUZpbHRlckRhdGUgPSBuZXcgU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPigpO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSwgc29ydFJ1bGVzOiBTb3J0LFxuICAgICAgICAgICAgICByYW5nZVJ1bGVzOiBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBzaXplID0gMjAsIGRldGFpbFJhd3M6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuZGF0YSA9IFsuLi5kYXRhXTtcbiAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgc3RhcnRXaXRoKHJhbmdlUnVsZXMpLFxuICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKS5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZVNvcnQucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgoc29ydFJ1bGVzKSxcbiAgICAgICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aCgwKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICksIGZpbHRlclxuICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgIH1dKSksXG4gICAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICAgKSkpKVxuICAgICAgKSkpO1xuICB9XG5cbiAgZmlsdGVyRGF0ZVJhbmdlKGRhdGE6IGFueSwgcmFuZ2U6IEZpbHRlckRhdGVJbnRlcmZhY2UpIHtcbiAgICBpZiAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KVxuICAgICAgICAgICAgJiYgbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KTtcbiAgICAgICAgfSBlbHNlIGlmICghcmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcG9uZGVyYXRpb24oc3RyOiBzdHJpbmcsIHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgbGV0IHN0YWNrOiBzdHJpbmdbXSA9IHN0ci5zcGxpdCgnICcpO1xuICAgIGxldCBwb25kOiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IHMgb2Ygc3RhY2spIHtcbiAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpXG4gICAgICBpZiAoc2VhcmNoICYmIHNlYXJjaC5pbmNsdWRlcyhzZWFyY2hLZXkpKSB7XG4gICAgICAgIHBvbmQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBvbmQ7XG4gIH1cblxuICBmaWx0ZXJEYXRhKGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIiBcIikpIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBjb25zdCBkYXRhUmF3OiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShlKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpO1xuICAgICAgICBjb25zdCBzdGFjazogc3RyaW5nW10gPSBmaWx0ZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csIFwiIFwiKVxuICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgY29tYmluYXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgb2Ygc3RhY2spIHtcbiAgICAgICAgICBpZiAoZGF0YVJhdy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgY29uc3QgcG9uZDogbnVtYmVyID0gdGhpcy5wb25kZXJhdGlvbihkYXRhUmF3LCBrKTtcbiAgICAgICAgICAgIGlmICghZS5wb25kKSB7XG4gICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBvbmQgKz0gcG9uZDtcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnBvbmQgJiYgY29tYmluYXRpb24gPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGUpXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgaWYgKHNvcnRBY3Rpb24uZGlyZWN0aW9uICE9PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShhW3NvcnRBY3Rpb24uYWN0aXZlXSwgYltzb3J0QWN0aW9uLmFjdGl2ZV0sIHNvcnRBY3Rpb24uZGlyZWN0aW9uID09PSAnYXNjJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZShhOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXSwgYjogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGlzQXNjOiBib29sZWFuKSB7XG4gICAgaWYgKCFhKSB7XG4gICAgICBhID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFiKSB7XG4gICAgICBiID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuICgoKEFycmF5LmlzQXJyYXkoYSkgPyBhLmxlbmd0aCA6IGEpID4gKChBcnJheS5pc0FycmF5KGIpID8gYi5sZW5ndGggOiBiKSkgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKSk7XG4gIH1cblxuICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgfVxuXG4gIHNvcnRJdChzb3J0aWRlYTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU29ydC5uZXh0KHNvcnRpZGVhKTtcbiAgfVxuXG4gIGZpbHRlcihteUZpbHRlcjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYWdlRmlsdGVyLm5leHQobXlGaWx0ZXIudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlckRhdGUoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUubmV4dChkYXRlRmlsdGVyKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKHBsdWNrKCdjb250ZW50JykpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNsaWNlKGRhdGE6IGFueVtdLCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSAyMCwgZGV0YWlsUm93OiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XG4gICAgY29uc3Qgcm93cyA9IFtdO1xuICAgIHRoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0ICogZW5kLCAoc3RhcnQgKiBlbmQpICsgZW5kKTtcbiAgICBpZiAoZGV0YWlsUm93KSB7XG4gICAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiByb3dzLnB1c2goZWxlbWVudCkpO1xuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxufVxuIl19