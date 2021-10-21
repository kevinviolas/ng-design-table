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
        _this._totalElements.pipe((debounceTime(1000))).subscribe(function (page) { return _this.totalElements = page; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBMkNwRDtJQUFrQyxnQ0FBbUI7SUFtQm5ELHNCQUFZLElBQVMsRUFBRSxTQUFlLEVBQzFCLFVBQStCLEVBQUUsSUFBUyxFQUFFLFVBQTBCLEVBQ3RFLFFBQXlCLEVBQUUsT0FBaUI7UUFEWCxxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQUN0RSx5QkFBQSxFQUFBLGdCQUF5QjtRQUFFLHdCQUFBLEVBQUEsWUFBaUI7UUFGeEQsWUFHRSxpQkFBTyxTQXNGUjtRQXpHTSxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUliLG9CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU92QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFJLENBQUMsSUFBSSxZQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxVQUFVLFlBQU8sSUFBSSxDQUFDLENBQUM7UUFDNUIsbUNBQW1DO1FBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQU8sU0FBUyxDQUFDLENBQUM7UUFDckQsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBc0IsSUFBSSxDQUFDLENBQUM7UUFDckUsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUMvQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZUFBZSxDQUFTLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUVyRyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUQsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUMxQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDckMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUNqQixLQUFJLENBQUMsUUFBUSxDQUNYLEtBQUksQ0FBQyxnQkFBZ0IsQ0FDckIsS0FBSSxDQUFDLFVBQVUsQ0FDYixLQUFJLENBQUMsZUFBZSxDQUNsQixLQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FDakIsRUFBRSxNQUFNLENBQ1YsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxDQUNqQyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQzthQUNsQyxDQUFDLENBQUMsRUFWZSxDQVVmLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQVhHLENBV0gsQ0FDZixDQUFDLEVBYmdCLENBYWhCLENBQ0gsQ0FBQyxFQWhCa0IsQ0FnQmxCLENBQUMsQ0FBQyxDQUFBOztRQUlYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFrRFU7SUFDWCxDQUFDO0lBRUQsc0NBQWUsR0FBZixVQUFnQixJQUFTLEVBQUUsS0FBMEI7UUFDbkQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFNO2dCQUN4QixJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDdEMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzsyQkFDekQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDNUQ7cUJBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDOUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNoRTtxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUM5QyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxHQUFXLEVBQUUsU0FBaUI7O1FBQ3hDLElBQUksS0FBSyxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQVcsQ0FBQyxDQUFDOztZQUNyQixLQUFjLElBQUEsVUFBQSxTQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBaEIsSUFBSSxDQUFDLGtCQUFBO2dCQUNSLElBQUksTUFBTSxHQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO2dCQUN4RCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUN4QyxJQUFJLEVBQUUsQ0FBQztpQkFDUjthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsSUFBUyxFQUFFLE1BQVc7O1FBQy9CLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN6QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRTs7Z0JBQ2hELEtBQWMsSUFBQSxTQUFBLFNBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO29CQUFmLElBQUksQ0FBQyxpQkFBQTtvQkFDUixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDWCxJQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTt5QkFDcEQsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNsQyxJQUFNLEtBQUssR0FBYSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQzt5QkFDeEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNkLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQzs7d0JBQzVCLEtBQWMsSUFBQSx5QkFBQSxTQUFBLEtBQUssQ0FBQSxDQUFBLDRCQUFBLCtDQUFFOzRCQUFoQixJQUFJLENBQUMsa0JBQUE7NEJBQ1IsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUN2QixJQUFNLElBQUksR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDbEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7b0NBQ1gsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7aUNBQ1o7Z0NBQ0QsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7Z0NBQ2YsV0FBVyxFQUFFLENBQUM7NkJBQ2Y7eUJBQ0Y7Ozs7Ozs7OztvQkFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVyxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7cUJBQ2Y7aUJBRUY7Ozs7Ozs7OztZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7WUFDakcsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztTQUNsRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBUyxFQUFFLE1BQVc7O1FBQ3JDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN6QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0NBQ25DLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO29CQUM3QixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQ2hDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO3FCQUNiO3lCQUFNO3dCQUNMLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO3FCQUNaO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtvQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUNmOzs7Z0JBWEgsS0FBYyxJQUFBLFNBQUEsU0FBQSxJQUFJLENBQUEsMEJBQUE7b0JBQWIsSUFBSSxDQUFDLGlCQUFBOzRCQUFELENBQUM7aUJBWVQ7Ozs7Ozs7OztZQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7U0FDbEY7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQVMsRUFBRSxVQUFlO1FBQW5DLGlCQVdDO1FBVkMsSUFBSSxVQUFVLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxPQUFPLEVBQUU7b0JBQ2xDLE9BQU8sQ0FBQyxDQUFDO2lCQUNWO2dCQUNELE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUNsRyxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxDQUEwQixFQUFFLENBQTBCLEVBQUUsS0FBYztRQUM1RSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNWO1FBQ0QsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNOLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDVjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbE0sQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sUUFBYTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLFFBQWE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFDOzs7c0RBRzhDO0lBQ2hELENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsVUFBK0I7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQ0FBVSxHQUFWO0lBQ0EsQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxJQUFXLEVBQUUsS0FBaUIsRUFBRSxHQUFnQixFQUFFLFNBQXlCO1FBQTlELHNCQUFBLEVBQUEsU0FBaUI7UUFBRSxvQkFBQSxFQUFBLFFBQWdCO1FBQUUsMEJBQUEsRUFBQSxnQkFBeUI7UUFDL0UsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRXBELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7b0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO29CQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBelJELENBQWtDLFVBQVUsR0F5UjNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIHBsdWNrLCBzaGFyZSwgc3dpdGNoTWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICBhY3RpdmU6IHN0cmluZztcbiAgZGlyZWN0aW9uOiAnYXNjJyB8ICdkZXNjJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlUmVxdWVzdCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICBzb3J0PzogU29ydDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlIHtcbiAgY29udGVudDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvcmVNYXRUYWJsZUludGVyZmFjZSB7XG4gIHBhZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gIHRvdGFsRWxlbWVudHM6IG51bWJlcjtcbiAgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIG51bWJlcjogbnVtYmVyO1xuICBkYXRhOiBhbnlbXTtcbiAgc2l6ZTogbnVtYmVyO1xuICBmZXRjaDogKHBhZ2U6IGFueSkgPT4gdm9pZDtcbiAgY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgZGlzY29ubmVjdDogKCkgPT4gdm9pZDtcbiAgc29ydDogTWF0U29ydDtcbiAgc29ydEl0OiAoc29ydGlkZWE6IGFueSkgPT4gdm9pZDtcbiAgZmlsdGVyOiAobXlGaWx0ZXI6IGFueSkgPT4gdm9pZDtcbiAgZmlsdGVyRGF0ZTogKGRhdGVGaWx0ZXI6IEZpbHRlckRhdGVJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIHBhZ2VOdW1iZXI6IFN1YmplY3Q8bnVtYmVyPjtcbiAgc3RhcnRXaXRoOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJEYXRlSW50ZXJmYWNlIHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIHZhbHVlU3RhcnQ6IERhdGU7XG4gIHZhbHVlRW5kOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBDb3JlTWF0VGFibGUgZXh0ZW5kcyBEYXRhU291cmNlPEVsZW1lbnQ+IHtcbiAgcHVibGljIHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICBwdWJsaWMgdG90YWxFbGVtZW50czogbnVtYmVyO1xuICBwdWJsaWMgbnVtYmVyID0gMDtcbiAgcHVibGljIHNpemU6IGFueTtcbiAgcHVibGljIHNvcnQ6IE1hdFNvcnQ7XG4gIHB1YmxpYyBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgcHVibGljIGRhdGE6IGFueTtcbiAgcHVibGljIHBhZ2VOdW1iZXI6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+O1xuICBwdWJsaWMgc3RhcnRXaXRoID0gMDtcbiAgcHJpdmF0ZSBwYWdlU29ydDogQmVoYXZpb3JTdWJqZWN0PFNvcnQ+O1xuICBwcml2YXRlIHBhZ2VGaWx0ZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIHBhZ2VGaWx0ZXJEYXRlOiBCZWhhdmlvclN1YmplY3Q8RmlsdGVyRGF0ZUludGVyZmFjZT47XG4gIHByaXZhdGUgX3RvdGFsRWxlbWVudHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICBwcml2YXRlIGJhY2tVcERhdGE6IGFueTtcbiAgcHJpdmF0ZSBlbXB0eVJvdyA9IGZhbHNlO1xuICBwcml2YXRlIGZpbHRlclRhYmxlID0ge307XG4gIHByaXZhdGUgZGF0YUFmdGVyU2VhcmNoO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSwgc29ydFJ1bGVzOiBTb3J0LFxuICAgICAgICAgICAgICByYW5nZVJ1bGVzOiBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBzaXplID0gMjAsIGRldGFpbFJhd3M6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICAgICAgICBlbXB0eVJvdzogYm9vbGVhbiA9IGZhbHNlLCBmaWx0ZXJUOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmRhdGEgPSBbLi4uZGF0YV07XG4gICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSBbXTtcbiAgICB0aGlzLmJhY2tVcERhdGEgPSBbLi4uZGF0YV07XG4gICAgLy90aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLmVtcHR5Um93ID0gZW1wdHlSb3c7XG4gICAgdGhpcy5maWx0ZXJUYWJsZSA9IGZpbHRlclQ7XG4gICAgdGhpcy5wYWdlU29ydCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U29ydD4oc29ydFJ1bGVzKTtcbiAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPihudWxsKTtcbiAgICB0aGlzLnBhZ2VGaWx0ZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xuICAgIHRoaXMucGFnZU51bWJlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPih0aGlzLnN0YXJ0V2l0aCk7XG4gICAgdGhpcy5fdG90YWxFbGVtZW50cy5waXBlKChkZWJvdW5jZVRpbWUoMTAwMCkpKS5zdWJzY3JpYmUoKHBhZ2U6bnVtYmVyKSA9PiB0aGlzLnRvdGFsRWxlbWVudHMgPSBwYWdlKTtcblxuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGZpbHRlciA9PiB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICksIHRoaXMuZmlsdGVyVGFibGUpLCBzb3J0QWN0aW9uXG4gICAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgIH1dKSksIHNoYXJlKCkpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICkpKSlcblxuXG5cbiAgIC8qIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbHRlclRhYmxlKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbjIgPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlMiA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZTIgPT4gZnJvbShbe1xuICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGFPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2gsIHJhbmdlMlxuICAgICAgICAgICAgICAgICAgICAgICAgKSwgdGhpcy5maWx0ZXJUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb24yXG4gICAgICAgICAgICAgICAgICAgICksIHBhZ2UyLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgICAgfV0pKSwgc2hhcmUoKSlcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkpKSk7XG4gICAgfVxuXG4gICAgLypcblxuICAgIChsaWtlczogYW55W10pID0+IHtcbiAgICAgICByZXR1cm4gbGlrZXMubGVuZ3RoID09PSAwID9cbiAgICAgICAgIE9ic2VydmFibGUub2YobGlrZXMpIDpcbiAgICAgICAgIE9ic2VydmFibGUuY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgbGlrZXMubWFwKGxpa2UgPT4gdGhpcy5hZi5kYXRhYmFzZS5vYmplY3QoXCIvY2l0YXRpb25zL1wiICsgbGlrZS4ka2V5KSlcbiAgICAgICApXG4gICAgIH1cblxuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgc3RhcnRXaXRoKHJhbmdlUnVsZXMpLFxuICAgICAgIHN3aXRjaE1hcChyYW5nZSA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSkucGlwZShcbiAgICAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZVNvcnQucGlwZShcbiAgICAgICAgICAgc3RhcnRXaXRoKHNvcnRSdWxlcyksXG4gICAgICAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLnN0YXJ0V2l0aCksXG4gICAgICAgICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4gZnJvbShbe1xuICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLCByYW5nZVxuICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgfV0pKSxcbiAgICAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICAgICkpKSlcbiAgICAgICApKSk7Ki9cbiAgfVxuXG4gIGZpbHRlckRhdGVSYW5nZShkYXRhOiBhbnksIHJhbmdlOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSB7XG4gICAgaWYgKCFyYW5nZSB8fCAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pID49IG5ldyBEYXRlKHJhbmdlLnZhbHVlU3RhcnQpXG4gICAgICAgICAgICAmJiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmICFyYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pID49IG5ldyBEYXRlKHJhbmdlLnZhbHVlU3RhcnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCFyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1cblxuICBwb25kZXJhdGlvbihzdHI6IHN0cmluZywgc2VhcmNoS2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgc3RhY2s6IHN0cmluZ1tdID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgbGV0IHBvbmQ6IG51bWJlciA9IDA7XG4gICAgZm9yIChsZXQgcyBvZiBzdGFjaykge1xuICAgICAgbGV0IHNlYXJjaDogc3RyaW5nID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoJyAnLCAnZycpLCAnJylcbiAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoLmluY2x1ZGVzKHNlYXJjaEtleSkpIHtcbiAgICAgICAgcG9uZCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9uZDtcbiAgfVxuXG4gIGZpbHRlckRhdGEoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBpZiAoZmlsdGVyICYmIGZpbHRlci5yZXBsYWNlKC9bXmEtekEtWiBdL2csIFwiIFwiKSkge1xuICAgICAgZm9yIChsZXQgZSBvZiBkYXRhKSB7XG4gICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgIGNvbnN0IGRhdGFSYXc6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGUpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCBcIiBcIik7XG4gICAgICAgIGNvbnN0IHN0YWNrOiBzdHJpbmdbXSA9IGZpbHRlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpXG4gICAgICAgICAgLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBjb21iaW5hdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgayBvZiBzdGFjaykge1xuICAgICAgICAgIGlmIChkYXRhUmF3LmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICBjb25zdCBwb25kOiBudW1iZXIgPSB0aGlzLnBvbmRlcmF0aW9uKGRhdGFSYXcsIGspO1xuICAgICAgICAgICAgaWYgKCFlLnBvbmQpIHtcbiAgICAgICAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucG9uZCArPSBwb25kO1xuICAgICAgICAgICAgY29tYmluYXRpb24rKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUucG9uZCAmJiBjb21iaW5hdGlvbiA9PT0gc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZSlcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IHJlc3VsdC5maWx0ZXIoKGUgPT4gZS5wb25kKSkuc29ydCgoYSwgYikgPT4gYSA+IGIgPyAxIDogKGEgPCBiID8gLTEgOiAwKSk7XG4gICAgICByZXR1cm4gcmVzdWx0LmZpbHRlcigoZSA9PiBlLnBvbmQpKS5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAoYSA8IGIgPyAtMSA6IDApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSBkYXRhO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyRGF0YU9iamVjdChkYXRhOiBhbnksIGZpbHRlcjogYW55KSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwICYmIHRoaXMuZGF0YSkge1xuICAgICAgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGlmIChmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgaWYgKGZpbHRlcltrZXldLmluY2x1ZGVzKGVba2V5XSkpIHtcbiAgICAgICAgICAgIGUucG9uZCArPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChlLnBvbmQpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0LmZpbHRlcigoZSA9PiBlLnBvbmQpKS5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAoYSA8IGIgPyAtMSA6IDApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgc29ydERhdGEoZGF0YTogYW55LCBzb3J0QWN0aW9uOiBhbnkpIHtcbiAgICBpZiAoc29ydEFjdGlvbi5kaXJlY3Rpb24gIT09ICcnKSB7XG4gICAgICByZXR1cm4gZGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICBpZiAoYSA9PT0gJ2VtcHR5JyB8fCBiID09PSAnZW1wdHknKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShhW3NvcnRBY3Rpb24uYWN0aXZlXSwgYltzb3J0QWN0aW9uLmFjdGl2ZV0sIHNvcnRBY3Rpb24uZGlyZWN0aW9uID09PSAnYXNjJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZShhOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXSwgYjogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGlzQXNjOiBib29sZWFuKSB7XG4gICAgaWYgKCFhKSB7XG4gICAgICBhID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFiKSB7XG4gICAgICBiID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuICgoKEFycmF5LmlzQXJyYXkoYSkgPyBhLmxlbmd0aCA6IGEpID4gKChBcnJheS5pc0FycmF5KGIpID8gYi5sZW5ndGggOiBiKSkgPyAtMSA6ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID4gKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSkgPyAxIDogMCApICogKGlzQXNjID8gLTEgOiAxKSk7XG4gIH1cblxuICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgfVxuXG4gIHNvcnRJdChzb3J0aWRlYTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU29ydC5uZXh0KHNvcnRpZGVhKTtcbiAgfVxuXG4gIGZpbHRlcihteUZpbHRlcjogYW55KTogdm9pZCB7XG4gICAgaWYgKCFteUZpbHRlciAmJiB0aGlzLmRhdGEgfHwgIW15RmlsdGVyLnRyaW0oKSAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsRWxlbWVudHMubmV4dCh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICB9XG4gICAgdGhpcy5wYWdlRmlsdGVyLm5leHQobXlGaWx0ZXIudG9TdHJpbmcoKSk7XG4gICAgLyppZiAoIW15RmlsdGVyLnRhcmdldC52YWx1ZSB8fCAhbXlGaWx0ZXIudGFyZ2V0LnZhbHVlLnRyaW0oKSkge1xuICAgICAgdGhpcy50b3RhbEVsZW1lbnRzID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5wYWdlRmlsdGVyLm5leHQobXlGaWx0ZXIudGFyZ2V0LnZhbHVlKTsqL1xuICB9XG5cbiAgZmlsdGVyRGF0ZShkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlRmlsdGVyRGF0ZS5uZXh0KGRhdGVGaWx0ZXIpO1xuICB9XG5cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UkLnBpcGUocGx1Y2soJ2NvbnRlbnQnKSk7XG4gIH1cblxuICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICB9XG5cbiAgc2xpY2UoZGF0YTogYW55W10sIHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ6IG51bWJlciA9IDIwLCBkZXRhaWxSb3c6IGJvb2xlYW4gPSB0cnVlKTogYW55IHtcbiAgICBjb25zdCByb3dzID0gW107XG4gICAgdGhpcy5fdG90YWxFbGVtZW50cy5uZXh0KGRhdGEubGVuZ3RoKTtcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0ICogZW5kLCAoc3RhcnQgKiBlbmQpICsgZW5kKTtcblxuICAgICAgaWYgKHRoaXMuZW1wdHlSb3cpIHtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgcm93cy5wdXNoKCdlbXB0eScpO1xuICAgICAgICAgIHJvd3MucHVzaChkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0ICogZW5kLCAoc3RhcnQgKiBlbmQpICsgZW5kKTtcbiAgICAgIGlmICh0aGlzLmVtcHR5Um93KSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgIHJvd3MucHVzaCgnZW1wdHknKTtcbiAgICAgICAgICByb3dzLnB1c2goZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcm93cztcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3dzO1xuICAgIH1cbiAgfVxufVxuIl19