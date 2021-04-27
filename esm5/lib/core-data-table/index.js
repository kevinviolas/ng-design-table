import { __extends, __read, __spread, __values } from "tslib";
import { from, Subject } from "rxjs";
import { debounceTime, pluck, startWith, switchMap } from "rxjs/operators";
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
        _this.page$ = _this.pageSort.pipe(startWith(sortRules), switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(startWith(''), switchMap(function (filter) { return _this.pageFilterDate.pipe(startWith(rangeRules), switchMap(function (range) { return _this.pageNumber.pipe(startWith(_this.startWith), switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterData(_this.filterDateRange(_this.data, range), filter), sortAction), page, _this.size, detailRaws)
            }]); })); })); })); }));
        return _this;
        /* this.page$ = this.pageFilterDate.pipe(
           startWith(rangeRules),
           switchMap(range => this.pageFilter.pipe(debounceTime(500)).pipe(
             startWith(''),
             switchMap(filter => this.pageSort.pipe(
               startWith(sortRules),
               switchMap(sortAction => this.pageNumber.pipe(
                 startWith(this.startWith),
                 switchMap(page => from([{
                   content: this.slice(
                     this.sortData(
                       this.filterData(
                         this.filterDateRange(
                           this.data, range
                         ), filter
                       ), sortAction
                     ), page, this.size, detailRaws)
                 }])),
                 share()
               ))))
           )));*/
    }
    CoreMatTable.prototype.filterDateRange = function (data, range) {
        console.log('filterDateRange data', data.length);
        if (!range || (!range.valueStart && !range.valueEnd)) {
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
        console.log('filter data', data.length);
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
        console.log('sort data', data.length);
        if (data.length === 0) {
            return data;
        }
        else if (sortAction.direction !== '') {
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
        console.log('slice data', data.length);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRy9DLE9BQU8sRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFTLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUEyQ3BEO0lBQWtDLGdDQUFtQjtJQWVuRCxzQkFBWSxJQUFTLEVBQUUsU0FBZSxFQUMxQixVQUErQixFQUFFLElBQVMsRUFBRSxVQUEwQjtRQUFyQyxxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQURsRixZQUVFLGlCQUFPLFNBZ0RSO1FBOURNLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFLWCxnQkFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDbkMsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLGdCQUFVLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNoQyxvQkFBYyxHQUFHLElBQUksT0FBTyxFQUF1QixDQUFDO1FBTTFELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxJQUFJLFlBQU8sSUFBSSxDQUFDLENBQUM7UUFDdEIsS0FBSSxDQUFDLFVBQVUsWUFBTyxJQUFJLENBQUMsQ0FBQztRQUM1QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUNwQixTQUFTLENBQUMsVUFBQSxV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SUFDSCxtQkFBQztBQUFELENBQUMsQUEzTEQsQ0FBa0MsVUFBVSxHQTJMM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zyb20sIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIHBsdWNrLCBzaGFyZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICBkaXJlY3Rpb246ICdhc2MnIHwgJ2Rlc2MnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VSZXF1ZXN0IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNvcnQ/OiBTb3J0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2Uge1xuICBjb250ZW50OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZU1hdFRhYmxlSW50ZXJmYWNlIHtcbiAgcGFnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgdG90YWxFbGVtZW50czogbnVtYmVyO1xuICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGRhdGE6IGFueVtdO1xuICBzaXplOiBudW1iZXI7XG4gIGZldGNoOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICBjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBkaXNjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBzb3J0OiBNYXRTb3J0O1xuICBzb3J0SXQ6IChzb3J0aWRlYTogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXI6IChteUZpbHRlcjogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXJEYXRlOiAoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSkgPT4gdm9pZDtcbiAgcGFnZU51bWJlcjogU3ViamVjdDxudW1iZXI+O1xuICBzdGFydFdpdGg6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckRhdGVJbnRlcmZhY2Uge1xuICBhY3RpdmU6IHN0cmluZztcbiAgdmFsdWVTdGFydDogRGF0ZTtcbiAgdmFsdWVFbmQ6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcmVNYXRUYWJsZSBleHRlbmRzIERhdGFTb3VyY2U8RWxlbWVudD4ge1xuICBwdWJsaWMgcGFnZSQ6IE9ic2VydmFibGU8UGFnZT47XG4gIHB1YmxpYyB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHB1YmxpYyBudW1iZXIgPSAwO1xuICBwdWJsaWMgc2l6ZTogYW55O1xuICBwdWJsaWMgc29ydDogTWF0U29ydDtcbiAgcHVibGljIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgcGFnZU51bWJlciA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHVibGljIHN0YXJ0V2l0aCA9IDA7XG4gIHByaXZhdGUgcGFnZVNvcnQgPSBuZXcgU3ViamVjdDxTb3J0PigpO1xuICBwcml2YXRlIHBhZ2VGaWx0ZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgcGFnZUZpbHRlckRhdGUgPSBuZXcgU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPigpO1xuICBwcml2YXRlIGJhY2tVcERhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnksIHNvcnRSdWxlczogU29ydCxcbiAgICAgICAgICAgICAgcmFuZ2VSdWxlczogRmlsdGVyRGF0ZUludGVyZmFjZSwgc2l6ZSA9IDIwLCBkZXRhaWxSYXdzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmRhdGEgPSBbLi4uZGF0YV07XG4gICAgdGhpcy5iYWNrVXBEYXRhID0gWy4uLmRhdGFdO1xuICAgIHRoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICBzdGFydFdpdGgoc29ydFJ1bGVzKSxcbiAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKHJhbmdlUnVsZXMpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5zdGFydFdpdGgpLFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgY29udGVudCA6IHRoaXMuc2xpY2UoXG4gICAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICAgfV0pKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkpXG4gICAgICAgICkpKSk7XG4gICAvKiB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgc3RhcnRXaXRoKHJhbmdlUnVsZXMpLFxuICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKS5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZVNvcnQucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgoc29ydFJ1bGVzKSxcbiAgICAgICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLnN0YXJ0V2l0aCksXG4gICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xpY2UoXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLCByYW5nZVxuICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICB9XSkpLFxuICAgICAgICAgICAgc2hhcmUoKVxuICAgICAgICAgICkpKSlcbiAgICAgICkpKTsqL1xuICB9XG5cbiAgZmlsdGVyRGF0ZVJhbmdlKGRhdGE6IGFueSwgcmFuZ2U6IEZpbHRlckRhdGVJbnRlcmZhY2UpIHtcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyRGF0ZVJhbmdlIGRhdGEnLCBkYXRhLmxlbmd0aCk7XG4gICAgaWYgKCFyYW5nZSB8fCAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydClcbiAgICAgICAgICAgICYmIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBvbmRlcmF0aW9uKHN0cjogc3RyaW5nLCBzZWFyY2hLZXk6IHN0cmluZykge1xuICAgIGxldCBzdGFjazogc3RyaW5nW10gPSBzdHIuc3BsaXQoJyAnKTtcbiAgICBsZXQgcG9uZDogbnVtYmVyID0gMDtcbiAgICBmb3IgKGxldCBzIG9mIHN0YWNrKSB7XG4gICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKVxuICAgICAgaWYgKHNlYXJjaCAmJiBzZWFyY2guaW5jbHVkZXMoc2VhcmNoS2V5KSkge1xuICAgICAgICBwb25kKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwb25kO1xuICB9XG5cbiAgZmlsdGVyRGF0YShkYXRhOiBhbnksIGZpbHRlcjogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbHRlciBkYXRhJywgZGF0YS5sZW5ndGgpO1xuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBpZiAoZmlsdGVyICYmIGZpbHRlci5yZXBsYWNlKC9bXmEtekEtWiBdL2csIFwiIFwiKSkge1xuICAgICAgZm9yIChsZXQgZSBvZiBkYXRhKSB7XG4gICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgIGNvbnN0IGRhdGFSYXc6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGUpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCBcIiBcIik7XG4gICAgICAgIGNvbnN0IHN0YWNrOiBzdHJpbmdbXSA9IGZpbHRlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpXG4gICAgICAgICAgLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBjb21iaW5hdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgayBvZiBzdGFjaykge1xuICAgICAgICAgIGlmIChkYXRhUmF3LmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICBjb25zdCBwb25kOiBudW1iZXIgPSB0aGlzLnBvbmRlcmF0aW9uKGRhdGFSYXcsIGspO1xuICAgICAgICAgICAgaWYgKCFlLnBvbmQpIHtcbiAgICAgICAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucG9uZCArPSBwb25kO1xuICAgICAgICAgICAgY29tYmluYXRpb24rKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUucG9uZCAmJiBjb21iaW5hdGlvbiA9PT0gc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZSlcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0LmZpbHRlcigoZSA9PiBlLnBvbmQpKS5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAoYSA8IGIgPyAtMSA6IDApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgc29ydERhdGEoZGF0YTogYW55LCBzb3J0QWN0aW9uOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnc29ydCBkYXRhJywgZGF0YS5sZW5ndGgpO1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIGlmIChzb3J0QWN0aW9uLmRpcmVjdGlvbiAhPT0gJycpIHtcbiAgICAgIHJldHVybiBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoYVtzb3J0QWN0aW9uLmFjdGl2ZV0sIGJbc29ydEFjdGlvbi5hY3RpdmVdLCBzb3J0QWN0aW9uLmRpcmVjdGlvbiA9PT0gJ2FzYycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGI6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBpc0FzYzogYm9vbGVhbikge1xuICAgIGlmICghYSkge1xuICAgICAgYSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghYikge1xuICAgICAgYiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSA+ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID8gLTEgOiAxKSAqIChpc0FzYyA/IDEgOiAtMSkpO1xuICB9XG5cbiAgZmV0Y2gocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlTnVtYmVyLm5leHQocGFnZSk7XG4gIH1cblxuICBzb3J0SXQoc29ydGlkZWE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFnZVNvcnQubmV4dChzb3J0aWRlYSk7XG4gIH1cblxuICBmaWx0ZXIobXlGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdteSBmaWx0ZXInLCBteUZpbHRlci50YXJnZXQudmFsdWUsIHRoaXMuZGF0YS5sZW5ndGgpXG4gICAgdGhpcy5wYWdlRmlsdGVyLm5leHQobXlGaWx0ZXIudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlckRhdGUoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUubmV4dChkYXRlRmlsdGVyKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKHBsdWNrKCdjb250ZW50JykpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNsaWNlKGRhdGE6IGFueVtdLCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSAyMCwgZGV0YWlsUm93OiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XG4gICAgY29uc29sZS5sb2coJ3NsaWNlIGRhdGEnLCBkYXRhLmxlbmd0aCk7XG4gICAgY29uc3Qgcm93cyA9IFtdO1xuICAgIHRoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIGlmICh0aGlzLnRvdGFsRWxlbWVudHMpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0ICogZW5kLCAoc3RhcnQgKiBlbmQpICsgZW5kKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9XG4gIH1cbn1cbiJdfQ==