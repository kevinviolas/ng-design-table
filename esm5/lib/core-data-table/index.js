import { __extends, __read, __spread, __values } from "tslib";
import { BehaviorSubject, from } from "rxjs";
import { debounceTime, pluck, share, switchMap } from "rxjs/operators";
import { DataSource } from "@angular/cdk/collections";
var CoreMatTable = /** @class */ (function (_super) {
    __extends(CoreMatTable, _super);
    function CoreMatTable(data, sortRules, rangeRules, size, detailRaws, emptyRow, filterT) {
        if (size === void 0) { size = 20; }
        if (detailRaws === void 0) { detailRaws = true; }
        if (emptyRow === void 0) { emptyRow = false; }
        if (filterT === void 0) { filterT = {}; }
        var _this = _super.call(this) || this;
        _this.totalElements = 0;
        _this.number = 0;
        _this.startWith = 0;
        _this._totalElements = new BehaviorSubject(0);
        _this.emptyRow = false;
        _this.filterTable = {};
        _this.size = size;
        _this.data = __spread(data);
        _this.dataAfterSearch = [];
        _this.backUpData = __spread(data);
        //this.totalElements = data.length;
        _this.emptyRow = emptyRow;
        _this.filterTable = filterT;
        _this.pageSort = new BehaviorSubject(sortRules);
        _this.pageFilterDate = new BehaviorSubject(null);
        _this.pageFilter = new BehaviorSubject('');
        _this.pageNumber = new BehaviorSubject(_this.startWith);
        _this._totalElements.subscribe(function (page) { return _this.totalElements = page; });
        _this.page$ = _this.pageSort.pipe(switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(function (filter) { return _this.pageFilterDate.pipe(switchMap(function (range) { return _this.pageNumber.pipe(switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterDataObject(_this.filterData(_this.filterDateRange(_this.data, range), filter), _this.filterTable), sortAction), page, _this.size, detailRaws)
            }]); }), share()); })); })); }));
        return _this;
        /* if (Object.keys(this.filterTable).length > 0) {
           this.page$ = this.page$.pipe(
             switchMap(sortAction2 => this.pageFilter.pipe(debounceTime(500))
               .pipe(
                 switchMap(filter => this.pageFilterDate.pipe(
                   switchMap(range2 => this.pageNumber.pipe(
                     switchMap(page2 => from([{
                       content: this.slice(
                         this.sortData(
                           this.filterDataObject(
                             this.filterDateRange(
                               this.dataAfterSearch, range2
                             ), this.filterTable
                           ), sortAction2
                         ), page2, this.size, detailRaws)
                     }])), share())
                   ))
                 ))));
         }
     
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
        if (this.pageNumber.getValue() > 0) {
            this.pageNumber.next(0);
            this.number = 0;
        }
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        var result = [];
        if (typeof filter === "object") {
            return this.filterDataObject(data, filter);
        }
        else if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
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
            //data = this.data;
            return data;
        }
        var result = [];
        if (filter && Object.keys(filter).length > 0) {
            var _loop_1 = function (e) {
                var ok = true;
                e.pond = 0;
                Object.keys(filter).forEach(function (key) {
                    if (filter[key].includes(e[key])) {
                        //e.pond += 1;
                    }
                    else {
                        //e.pond = 0;
                        ok = false;
                    }
                });
                //if (e.pond) {
                if (ok) {
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
            return result;
            //return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    };
    CoreMatTable.prototype.sortData = function (data, sortAction) {
        var _this = this;
        if (sortAction.direction !== '') {
            return data.sort(function (a, b) {
                if (a === 'empty' || b === 'empty') {
                    return 0;
                }
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
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : ((Array.isArray(b) ? b.length : b)) > ((Array.isArray(a) ? a.length : a)) ? 1 : 0) * (isAsc ? -1 : 1));
    };
    CoreMatTable.prototype.fetch = function (page) {
        this.pageNumber.next(page);
    };
    CoreMatTable.prototype.sortIt = function (sortidea) {
        this.pageSort.next(sortidea);
    };
    CoreMatTable.prototype.filter = function (myFilter) {
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this._totalElements.next(this.data.length);
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
        this._totalElements.next(data.length);
        if (data.length) {
            data = data.slice(start * end, (start * end) + end);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBNENwRDtJQUFrQyxnQ0FBbUI7SUFtQm5ELHNCQUFZLElBQVMsRUFBRSxTQUFlLEVBQzFCLFVBQStCLEVBQUUsSUFBUyxFQUFFLFVBQTBCLEVBQ3RFLFFBQXlCLEVBQUUsT0FBaUI7UUFEWCxxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQUN0RSx5QkFBQSxFQUFBLGdCQUF5QjtRQUFFLHdCQUFBLEVBQUEsWUFBaUI7UUFGeEQsWUFHRSxpQkFBTyxTQXNGUjtRQTFHTSxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUliLG9CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU92QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFJLENBQUMsSUFBSSxZQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxVQUFVLFlBQU8sSUFBSSxDQUFDLENBQUM7UUFDNUIsbUNBQW1DO1FBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUks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U3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgcGx1Y2ssIHNoYXJlLCBzd2l0Y2hNYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICBkaXJlY3Rpb246ICdhc2MnIHwgJ2Rlc2MnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VSZXF1ZXN0IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNvcnQ/OiBTb3J0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2Uge1xuICBjb250ZW50OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZU1hdFRhYmxlSW50ZXJmYWNlIHtcbiAgcGFnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgdG90YWxFbGVtZW50czogbnVtYmVyO1xuICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGRhdGE6IGFueVtdO1xuICBzaXplOiBudW1iZXI7XG4gIGZldGNoOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICBjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBkaXNjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBzb3J0OiBNYXRTb3J0O1xuICBzb3J0SXQ6IChzb3J0aWRlYTogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXI6IChteUZpbHRlcjogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXJEYXRhIDogKGRhdGE6YW55LCBmaWx0ZXI6YW55KSA9PiB2b2lkXG4gIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICBwYWdlTnVtYmVyOiBTdWJqZWN0PG51bWJlcj47XG4gIHN0YXJ0V2l0aDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRGF0ZUludGVyZmFjZSB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICB2YWx1ZVN0YXJ0OiBEYXRlO1xuICB2YWx1ZUVuZDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29yZU1hdFRhYmxlIGV4dGVuZHMgRGF0YVNvdXJjZTxFbGVtZW50PiB7XG4gIHB1YmxpYyBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgcHVibGljIHRvdGFsRWxlbWVudHMgPSAwO1xuICBwdWJsaWMgbnVtYmVyID0gMDtcbiAgcHVibGljIHNpemU6IGFueTtcbiAgcHVibGljIHNvcnQ6IE1hdFNvcnQ7XG4gIHB1YmxpYyBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgcHVibGljIGRhdGE6IGFueTtcbiAgcHVibGljIHBhZ2VOdW1iZXI6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+O1xuICBwdWJsaWMgc3RhcnRXaXRoID0gMDtcbiAgcHJpdmF0ZSBwYWdlU29ydDogQmVoYXZpb3JTdWJqZWN0PFNvcnQ+O1xuICBwcml2YXRlIHBhZ2VGaWx0ZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIHBhZ2VGaWx0ZXJEYXRlOiBCZWhhdmlvclN1YmplY3Q8RmlsdGVyRGF0ZUludGVyZmFjZT47XG4gIHByaXZhdGUgX3RvdGFsRWxlbWVudHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICBwcml2YXRlIGJhY2tVcERhdGE6IGFueTtcbiAgcHJpdmF0ZSBlbXB0eVJvdyA9IGZhbHNlO1xuICBwcml2YXRlIGZpbHRlclRhYmxlID0ge307XG4gIHByaXZhdGUgZGF0YUFmdGVyU2VhcmNoO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSwgc29ydFJ1bGVzOiBTb3J0LFxuICAgICAgICAgICAgICByYW5nZVJ1bGVzOiBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBzaXplID0gMjAsIGRldGFpbFJhd3M6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICAgICAgICBlbXB0eVJvdzogYm9vbGVhbiA9IGZhbHNlLCBmaWx0ZXJUOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmRhdGEgPSBbLi4uZGF0YV07XG4gICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSBbXTtcbiAgICB0aGlzLmJhY2tVcERhdGEgPSBbLi4uZGF0YV07XG4gICAgLy90aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLmVtcHR5Um93ID0gZW1wdHlSb3c7XG4gICAgdGhpcy5maWx0ZXJUYWJsZSA9IGZpbHRlclQ7XG4gICAgdGhpcy5wYWdlU29ydCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U29ydD4oc29ydFJ1bGVzKTtcbiAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPihudWxsKTtcbiAgICB0aGlzLnBhZ2VGaWx0ZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xuICAgIHRoaXMucGFnZU51bWJlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPih0aGlzLnN0YXJ0V2l0aCk7XG4gICAgdGhpcy5fdG90YWxFbGVtZW50cy5zdWJzY3JpYmUoKHBhZ2U6bnVtYmVyKSA9PiB0aGlzLnRvdGFsRWxlbWVudHMgPSBwYWdlKTtcblxuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGZpbHRlciA9PiB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICksIHRoaXMuZmlsdGVyVGFibGUpLCBzb3J0QWN0aW9uXG4gICAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgIH1dKSksIHNoYXJlKCkpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICkpKSlcblxuXG5cbiAgIC8qIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbHRlclRhYmxlKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbjIgPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlMiA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZTIgPT4gZnJvbShbe1xuICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGFPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2gsIHJhbmdlMlxuICAgICAgICAgICAgICAgICAgICAgICAgKSwgdGhpcy5maWx0ZXJUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb24yXG4gICAgICAgICAgICAgICAgICAgICksIHBhZ2UyLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgICAgfV0pKSwgc2hhcmUoKSlcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkpKSk7XG4gICAgfVxuXG4gICAgLypcblxuICAgIChsaWtlczogYW55W10pID0+IHtcbiAgICAgICByZXR1cm4gbGlrZXMubGVuZ3RoID09PSAwID9cbiAgICAgICAgIE9ic2VydmFibGUub2YobGlrZXMpIDpcbiAgICAgICAgIE9ic2VydmFibGUuY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgbGlrZXMubWFwKGxpa2UgPT4gdGhpcy5hZi5kYXRhYmFzZS5vYmplY3QoXCIvY2l0YXRpb25zL1wiICsgbGlrZS4ka2V5KSlcbiAgICAgICApXG4gICAgIH1cblxuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgc3RhcnRXaXRoKHJhbmdlUnVsZXMpLFxuICAgICAgIHN3aXRjaE1hcChyYW5nZSA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSkucGlwZShcbiAgICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZVNvcnQucGlwZShcbiAgICAgICAgICAgc3RhcnRXaXRoKHNvcnRSdWxlcyksXG4gICAgICAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLnN0YXJ0V2l0aCksXG4gICAgICAgICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4gZnJvbShbe1xuICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLCByYW5nZVxuICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgfV0pKSxcbiAgICAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICAgICkpKSlcbiAgICAgICApKSk7Ki9cbiAgfVxuXG4gIGZpbHRlckRhdGVSYW5nZShkYXRhOiBhbnksIHJhbmdlOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSB7XG4gICAgaWYgKCFyYW5nZSB8fCAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pID49IG5ldyBEYXRlKHJhbmdlLnZhbHVlU3RhcnQpXG4gICAgICAgICAgICAmJiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmICFyYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pID49IG5ldyBEYXRlKHJhbmdlLnZhbHVlU3RhcnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCFyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1cblxuICBwb25kZXJhdGlvbihzdHI6IHN0cmluZywgc2VhcmNoS2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgc3RhY2s6IHN0cmluZ1tdID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgbGV0IHBvbmQ6IG51bWJlciA9IDA7XG4gICAgZm9yIChsZXQgcyBvZiBzdGFjaykge1xuICAgICAgbGV0IHNlYXJjaDogc3RyaW5nID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoJyAnLCAnZycpLCAnJylcbiAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoLmluY2x1ZGVzKHNlYXJjaEtleSkpIHtcbiAgICAgICAgcG9uZCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9uZDtcbiAgfVxuXG4gIGZpbHRlckRhdGEoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgIGlmICh0aGlzLnBhZ2VOdW1iZXIuZ2V0VmFsdWUoKSA+IDApIHtcbiAgICAgIHRoaXMucGFnZU51bWJlci5uZXh0KDApO1xuICAgICAgdGhpcy5udW1iZXIgPSAwO1xuICAgIH1cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB7XG4gICAgICBkYXRhID0gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGFPYmplY3QoZGF0YSwgZmlsdGVyKTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIiBcIikpIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBjb25zdCBkYXRhUmF3OiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShlKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpO1xuICAgICAgICBjb25zdCBzdGFjazogc3RyaW5nW10gPSBmaWx0ZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csIFwiIFwiKVxuICAgICAgICAgIC5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgY29tYmluYXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgb2Ygc3RhY2spIHtcbiAgICAgICAgICBpZiAoZGF0YVJhdy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgY29uc3QgcG9uZDogbnVtYmVyID0gdGhpcy5wb25kZXJhdGlvbihkYXRhUmF3LCBrKTtcbiAgICAgICAgICAgIGlmICghZS5wb25kKSB7XG4gICAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBvbmQgKz0gcG9uZDtcbiAgICAgICAgICAgIGNvbWJpbmF0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnBvbmQgJiYgY29tYmluYXRpb24gPT09IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGUpXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gZGF0YTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckRhdGFPYmplY3QoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIC8vZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKGZpbHRlciAmJiBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBsZXQgb2sgPSB0cnVlO1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVyW2tleV0uaW5jbHVkZXMoZVtrZXldKSkge1xuICAgICAgICAgICAgLy9lLnBvbmQgKz0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9lLnBvbmQgPSAwO1xuICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvL2lmIChlLnBvbmQpIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIC8vcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHNvcnREYXRhKGRhdGE6IGFueSwgc29ydEFjdGlvbjogYW55KSB7XG4gICAgaWYgKHNvcnRBY3Rpb24uZGlyZWN0aW9uICE9PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGEgPT09ICdlbXB0eScgfHwgYiA9PT0gJ2VtcHR5Jykge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoYVtzb3J0QWN0aW9uLmFjdGl2ZV0sIGJbc29ydEFjdGlvbi5hY3RpdmVdLCBzb3J0QWN0aW9uLmRpcmVjdGlvbiA9PT0gJ2FzYycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGI6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBpc0FzYzogYm9vbGVhbikge1xuICAgIGlmICghYSkge1xuICAgICAgYSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghYikge1xuICAgICAgYiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSA+ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID8gLTEgOiAoKEFycmF5LmlzQXJyYXkoYikgPyBiLmxlbmd0aCA6IGIpKSA+ICgoQXJyYXkuaXNBcnJheShhKSA/IGEubGVuZ3RoIDogYSkpID8gMSA6IDAgKSAqIChpc0FzYyA/IC0xIDogMSkpO1xuICB9XG5cbiAgZmV0Y2gocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlTnVtYmVyLm5leHQocGFnZSk7XG4gIH1cblxuICBzb3J0SXQoc29ydGlkZWE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFnZVNvcnQubmV4dChzb3J0aWRlYSk7XG4gIH1cblxuICBmaWx0ZXIobXlGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGlmICghbXlGaWx0ZXIgJiYgdGhpcy5kYXRhIHx8ICFteUZpbHRlci50cmltKCkgJiYgdGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRvU3RyaW5nKCkpO1xuICAgIC8qaWYgKCFteUZpbHRlci50YXJnZXQudmFsdWUgfHwgIW15RmlsdGVyLnRhcmdldC52YWx1ZS50cmltKCkpIHtcbiAgICAgIHRoaXMudG90YWxFbGVtZW50cyA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMucGFnZUZpbHRlci5uZXh0KG15RmlsdGVyLnRhcmdldC52YWx1ZSk7Ki9cbiAgfVxuXG4gIGZpbHRlckRhdGUoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUubmV4dChkYXRlRmlsdGVyKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKHBsdWNrKCdjb250ZW50JykpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNsaWNlKGRhdGE6IGFueVtdLCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSAyMCwgZGV0YWlsUm93OiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XG4gICAgY29uc3Qgcm93cyA9IFtdO1xuICAgIHRoaXMuX3RvdGFsRWxlbWVudHMubmV4dChkYXRhLmxlbmd0aCk7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCAqIGVuZCwgKHN0YXJ0ICogZW5kKSArIGVuZCk7XG5cbiAgICAgIGlmICh0aGlzLmVtcHR5Um93KSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgIHJvd3MucHVzaCgnZW1wdHknKTtcbiAgICAgICAgICByb3dzLnB1c2goZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcm93cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCAqIGVuZCwgKHN0YXJ0ICogZW5kKSArIGVuZCk7XG4gICAgICBpZiAodGhpcy5lbXB0eVJvdykge1xuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICByb3dzLnB1c2goJ2VtcHR5Jyk7XG4gICAgICAgICAgcm93cy5wdXNoKGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9XG4gIH1cbn1cbiJdfQ==