import { __extends, __read, __spread, __values } from "tslib";
import { BehaviorSubject, from } from "rxjs";
import { debounceTime, pluck, share, switchMap } from "rxjs/operators";
import { DataSource } from "@angular/cdk/collections";
var CoreMatTable = /** @class */ (function (_super) {
    __extends(CoreMatTable, _super);
    function CoreMatTable(data, sortRules, rangeRules, size, detailRaws, emptyRow, filter) {
        if (size === void 0) { size = 20; }
        if (detailRaws === void 0) { detailRaws = true; }
        if (emptyRow === void 0) { emptyRow = false; }
        if (filter === void 0) { filter = {}; }
        var _this = _super.call(this) || this;
        _this.number = 0;
        _this.startWith = 0;
        _this.emptyRow = false;
        _this.filterTable = {};
        _this.size = size;
        _this.data = __spread(data);
        _this.dataAfterSearch = [];
        _this.backUpData = __spread(data);
        _this.totalElements = data.length;
        _this.emptyRow = emptyRow;
        _this.filterTable = filter;
        _this.pageSort = new BehaviorSubject(sortRules);
        _this.pageFilterDate = new BehaviorSubject(null);
        _this.pageFilter = new BehaviorSubject('');
        _this.pageNumber = new BehaviorSubject(_this.startWith);
        _this.page$ = _this.pageSort.pipe(switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(function (filter) { return _this.pageFilterDate.pipe(switchMap(function (range) { return _this.pageNumber.pipe(switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterData(_this.filterDateRange(_this.data, range), filter), sortAction), page, _this.size, detailRaws)
            }]); }), share()); })); })); }));
        _this.page$ = _this.page$.pipe(switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(function (filter) { return _this.pageFilterDate.pipe(switchMap(function (range) { return _this.pageNumber.pipe(switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterDataObject(_this.filterDateRange(_this.dataAfterSearch, range), _this.filterTable), sortAction), page, _this.size, detailRaws)
            }]); }), share()); })); })); }));
        return _this;
        /*
    
        (likes: any[]) => {
           return likes.length === 0 ?
             Observable.of(likes) :
             Observable.combineLatest(
               likes.map(like => this.af.database.object("/citations/" + like.$key))
           )
         }
    
        this.page$ = this.pageFilterDate.pipe(
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
        if (!range || (!range.valueStart && !range.valueEnd)) {
            return data;
        }
        else if (data && data.length) {
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
        else {
            return this.data;
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
        if (data.length === 0 && this.data) {
            data = this.data;
        }
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
            this.dataAfterSearch = result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
            return result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
        }
        else {
            this.dataAfterSearch = data;
            return data;
        }
    };
    CoreMatTable.prototype.filterDataObject = function (data, filter) {
        var e_4, _a;
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        var result = [];
        if (filter && Object.keys(filter).length > 0) {
            var _loop_1 = function (e) {
                e.pond = 0;
                Object.keys(filter).forEach(function (key) {
                    if (filter[key].includes(e[key])) {
                        e.pond += 1;
                    }
                    else {
                        e.pond = 0;
                    }
                });
                if (e.pond) {
                    result.push(e);
                }
            };
            try {
                for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
                    var e = data_2_1.value;
                    _loop_1(e);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
                }
                finally { if (e_4) throw e_4.error; }
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
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this.totalElements = this.data.length;
        }
        this.pageFilter.next(myFilter.toString());
        /*if (!myFilter.target.value || !myFilter.target.value.trim()) {
          this.totalElements = this.data.length;
        }
        this.pageFilter.next(myFilter.target.value);*/
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
            console.log(data);
            if (this.emptyRow) {
                data.forEach(function (d) {
                    rows.push('empty');
                    rows.push(d);
                });
                return rows;
            }
            return data;
        }
        else {
            data = data.slice(start * end, (start * end) + end);
            if (this.emptyRow) {
                data.forEach(function (d) {
                    rows.push('empty');
                    rows.push(d);
                });
                return rows;
            }
            return rows;
        }
    };
    return CoreMatTable;
}(DataSource));
export { CoreMatTable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBMkNwRDtJQUFrQyxnQ0FBbUI7SUFrQm5ELHNCQUFZLElBQVMsRUFBRSxTQUFlLEVBQzFCLFVBQStCLEVBQUUsSUFBUyxFQUFFLFVBQTBCLEVBQ3RFLFFBQXlCLEVBQUUsTUFBZ0I7UUFEVixxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQUN0RSx5QkFBQSxFQUFBLGdCQUF5QjtRQUFFLHVCQUFBLEVBQUEsV0FBZ0I7UUFGdkQsWUFHRSxpQkFBTyxTQThFUjtRQWhHTSxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUtiLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFPdkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSSxDQUFDLElBQUksWUFBTyxJQUFJLENBQUMsQ0FBQztRQUN0QixLQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixLQUFJLENBQUMsVUFBVSxZQUFPLElBQUksQ0FBQyxDQUFDO1FBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixLQUFJLENBQUMs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LElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQS9RRCxDQUFrQyxVQUFVLEdBK1EzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7TWF0U29ydH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBwbHVjaywgc2hhcmUsIHN3aXRjaE1hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gXCJAYW5ndWxhci9jZGsvY29sbGVjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTb3J0IHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJlcXVlc3Qge1xuICBwYWdlOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc29ydD86IFNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gIGNvbnRlbnQ6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3JlTWF0VGFibGVJbnRlcmZhY2Uge1xuICBwYWdlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBudW1iZXI6IG51bWJlcjtcbiAgZGF0YTogYW55W107XG4gIHNpemU6IG51bWJlcjtcbiAgZmV0Y2g6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG4gIGNvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIGRpc2Nvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIHNvcnQ6IE1hdFNvcnQ7XG4gIHNvcnRJdDogKHNvcnRpZGVhOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlcjogKG15RmlsdGVyOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICBwYWdlTnVtYmVyOiBTdWJqZWN0PG51bWJlcj47XG4gIHN0YXJ0V2l0aDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRGF0ZUludGVyZmFjZSB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICB2YWx1ZVN0YXJ0OiBEYXRlO1xuICB2YWx1ZUVuZDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29yZU1hdFRhYmxlIGV4dGVuZHMgRGF0YVNvdXJjZTxFbGVtZW50PiB7XG4gIHB1YmxpYyBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgcHVibGljIHRvdGFsRWxlbWVudHM6IG51bWJlcjtcbiAgcHVibGljIG51bWJlciA9IDA7XG4gIHB1YmxpYyBzaXplOiBhbnk7XG4gIHB1YmxpYyBzb3J0OiBNYXRTb3J0O1xuICBwdWJsaWMgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyBwYWdlTnVtYmVyOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPjtcbiAgcHVibGljIHN0YXJ0V2l0aCA9IDA7XG4gIHByaXZhdGUgcGFnZVNvcnQ6IEJlaGF2aW9yU3ViamVjdDxTb3J0PjtcbiAgcHJpdmF0ZSBwYWdlRmlsdGVyOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcbiAgcHJpdmF0ZSBwYWdlRmlsdGVyRGF0ZTogQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+O1xuICBwcml2YXRlIGJhY2tVcERhdGE6IGFueTtcbiAgcHJpdmF0ZSBlbXB0eVJvdyA9IGZhbHNlO1xuICBwcml2YXRlIGZpbHRlclRhYmxlID0ge307XG4gIHByaXZhdGUgZGF0YUFmdGVyU2VhcmNoO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSwgc29ydFJ1bGVzOiBTb3J0LFxuICAgICAgICAgICAgICByYW5nZVJ1bGVzOiBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBzaXplID0gMjAsIGRldGFpbFJhd3M6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICAgICAgICBlbXB0eVJvdzogYm9vbGVhbiA9IGZhbHNlLCBmaWx0ZXI6IGFueSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuZGF0YSA9IFsuLi5kYXRhXTtcbiAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IFtdO1xuICAgIHRoaXMuYmFja1VwRGF0YSA9IFsuLi5kYXRhXTtcbiAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLmVtcHR5Um93ID0gZW1wdHlSb3c7XG4gICAgdGhpcy5maWx0ZXJUYWJsZSA9IGZpbHRlcjtcbiAgICB0aGlzLnBhZ2VTb3J0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTb3J0Pihzb3J0UnVsZXMpO1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+KG51bGwpO1xuICAgIHRoaXMucGFnZUZpbHRlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KHRoaXMuc3RhcnRXaXRoKTtcbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSwgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICAgKSwgcGFnZSwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgICB9XSkpLCBzaGFyZSgpKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApKSkpXG5cbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YU9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoLCByYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICksIHRoaXMuZmlsdGVyVGFibGVcbiAgICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICAgKSwgcGFnZSwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgICB9XSkpLCBzaGFyZSgpKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApKSkpO1xuICAgIC8qXG5cbiAgICAobGlrZXM6IGFueVtdKSA9PiB7XG4gICAgICAgcmV0dXJuIGxpa2VzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICBPYnNlcnZhYmxlLm9mKGxpa2VzKSA6XG4gICAgICAgICBPYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgIGxpa2VzLm1hcChsaWtlID0+IHRoaXMuYWYuZGF0YWJhc2Uub2JqZWN0KFwiL2NpdGF0aW9ucy9cIiArIGxpa2UuJGtleSkpXG4gICAgICAgKVxuICAgICB9XG5cbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgIHN0YXJ0V2l0aChyYW5nZVJ1bGVzKSxcbiAgICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpLnBpcGUoXG4gICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgc3dpdGNoTWFwKGZpbHRlciA9PiB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICAgICAgIHN0YXJ0V2l0aChzb3J0UnVsZXMpLFxuICAgICAgICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5zdGFydFdpdGgpLFxuICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xpY2UoXG4gICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSwgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICksIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICAgKSwgcGFnZSwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgIH1dKSksXG4gICAgICAgICAgICAgc2hhcmUoKVxuICAgICAgICAgICApKSkpXG4gICAgICAgKSkpOyovXG4gIH1cblxuICBmaWx0ZXJEYXRlUmFuZ2UoZGF0YTogYW55LCByYW5nZTogRmlsdGVyRGF0ZUludGVyZmFjZSkge1xuICAgIGlmICghcmFuZ2UgfHwgKCFyYW5nZS52YWx1ZVN0YXJ0ICYmICFyYW5nZS52YWx1ZUVuZCkpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KVxuICAgICAgICAgICAgJiYgbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KTtcbiAgICAgICAgfSBlbHNlIGlmICghcmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICB9XG5cbiAgcG9uZGVyYXRpb24oc3RyOiBzdHJpbmcsIHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgbGV0IHN0YWNrOiBzdHJpbmdbXSA9IHN0ci5zcGxpdCgnICcpO1xuICAgIGxldCBwb25kOiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IHMgb2Ygc3RhY2spIHtcbiAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpXG4gICAgICBpZiAoc2VhcmNoICYmIHNlYXJjaC5pbmNsdWRlcyhzZWFyY2hLZXkpKSB7XG4gICAgICAgIHBvbmQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBvbmQ7XG4gIH1cblxuICBmaWx0ZXJEYXRhKGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB7XG4gICAgICBkYXRhID0gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIiBcIikpIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBjb25zdCBkYXRhUmF3OiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShlKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpO1xuICAgICAgICBjb25zdCBzdGFjazogc3RyaW5nW10gPSBmaWx0ZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csIFwiIFwiKVxuICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgY29tYmluYXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgb2Ygc3RhY2spIHtcbiAgICAgICAgICBpZiAoZGF0YVJhdy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgY29uc3QgcG9uZDogbnVtYmVyID0gdGhpcy5wb25kZXJhdGlvbihkYXRhUmF3LCBrKTtcbiAgICAgICAgICAgIGlmICghZS5wb25kKSB7XG4gICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBvbmQgKz0gcG9uZDtcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnBvbmQgJiYgY29tYmluYXRpb24gPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGUpXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gZGF0YTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckRhdGFPYmplY3QoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBpZiAoZmlsdGVyICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgZSBvZiBkYXRhKSB7XG4gICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpbHRlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGlmIChmaWx0ZXJba2V5XS5pbmNsdWRlcyhlW2tleV0pKSB7XG4gICAgICAgICAgICBlLnBvbmQgKz0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZS5wb25kKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgaWYgKHNvcnRBY3Rpb24uZGlyZWN0aW9uICE9PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShhW3NvcnRBY3Rpb24uYWN0aXZlXSwgYltzb3J0QWN0aW9uLmFjdGl2ZV0sIHNvcnRBY3Rpb24uZGlyZWN0aW9uID09PSAnYXNjJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZShhOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXSwgYjogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGlzQXNjOiBib29sZWFuKSB7XG4gICAgaWYgKCFhKSB7XG4gICAgICBhID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFiKSB7XG4gICAgICBiID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuICgoKEFycmF5LmlzQXJyYXkoYSkgPyBhLmxlbmd0aCA6IGEpID4gKChBcnJheS5pc0FycmF5KGIpID8gYi5sZW5ndGggOiBiKSkgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKSk7XG4gIH1cblxuICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgfVxuXG4gIHNvcnRJdChzb3J0aWRlYTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU29ydC5uZXh0KHNvcnRpZGVhKTtcbiAgfVxuXG4gIGZpbHRlcihteUZpbHRlcjogYW55KTogdm9pZCB7XG4gICAgaWYgKCFteUZpbHRlciAmJiB0aGlzLmRhdGEgfHwgIW15RmlsdGVyLnRyaW0oKSAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudG90YWxFbGVtZW50cyA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRvU3RyaW5nKCkpO1xuICAgIC8qaWYgKCFteUZpbHRlci50YXJnZXQudmFsdWUgfHwgIW15RmlsdGVyLnRhcmdldC52YWx1ZS50cmltKCkpIHtcbiAgICAgIHRoaXMudG90YWxFbGVtZW50cyA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRhcmdldC52YWx1ZSk7Ki9cbiAgfVxuXG4gIGZpbHRlckRhdGUoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUubmV4dChkYXRlRmlsdGVyKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKHBsdWNrKCdjb250ZW50JykpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNsaWNlKGRhdGE6IGFueVtdLCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSAyMCwgZGV0YWlsUm93OiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XG4gICAgY29uc3Qgcm93cyA9IFtdO1xuICAgIHRoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIGlmICh0aGlzLnRvdGFsRWxlbWVudHMpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0ICogZW5kLCAoc3RhcnQgKiBlbmQpICsgZW5kKTtcblxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIGlmICh0aGlzLmVtcHR5Um93KSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgIHJvd3MucHVzaCgnZW1wdHknKTtcbiAgICAgICAgICByb3dzLnB1c2goZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcm93cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCAqIGVuZCwgKHN0YXJ0ICogZW5kKSArIGVuZCk7XG4gICAgICBpZiAodGhpcy5lbXB0eVJvdykge1xuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICByb3dzLnB1c2goJ2VtcHR5Jyk7XG4gICAgICAgICAgcm93cy5wdXNoKGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9XG4gIH1cbn1cbiJdfQ==