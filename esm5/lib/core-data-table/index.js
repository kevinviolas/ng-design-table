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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBMkNwRDtJQUFrQyxnQ0FBbUI7SUFrQm5ELHNCQUFZLElBQVMsRUFBRSxTQUFlLEVBQzFCLFVBQStCLEVBQUUsSUFBUyxFQUFFLFVBQTBCLEVBQ3RFLFFBQXlCLEVBQUUsTUFBZ0I7UUFEVixxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQUN0RSx5QkFBQSxFQUFBLGdCQUF5QjtRQUFFLHVCQUFBLEVBQUEsV0FBZ0I7UUFGdkQsWUFHRSxpQkFBTyxTQThFUjtRQWhHTSxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUtiLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFPdkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSSxDQUFDLElBQUksWUFBTyxJQUFJLENBQUMsQ0FBQztRQUN0QixLQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixLQUFJLENBQUMsVUFBVSxZQUFPLElBQUksQ0FBQyxDQUFDO1FBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFPLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxlQUFlLENBQXNCLElBQUksQ0FBQyxDQUFDO1FBQ3JFLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDL0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBUyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVELElBQUksQ0FDSCxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDMUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3JDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxDQUFDO2dCQUN0QixPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FDakIsS0FBSSxDQUFDLFFBQVEsQ0FDWCxLQUFJLENBQUMsVUFBVSxDQUNiLEtBQUksQ0FBQyxlQUFlLENBQ2xCLEtBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUNqQixFQUFFLE1BQU0sQ0FDVixFQUFFLFVBQVUsQ0FDZCxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQzthQUNsQyxDQUFDLENBQUMsRUFUZSxDQVNmLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQVZHLENBVUgsQ0FDZixDQUFDLEVBWmdCLENBWWhCLENBQ0gsQ0FBQyxFQWZrQixDQWVsQixDQUFDLENBQUMsQ0FBQTtRQUVWLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1RCxJQUFJLENBQ0gsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNyQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQ1gsS0FBSSxDQUFDLGdCQUFnQixDQUNuQixLQUFJLENBQUMsZUFBZSxDQUNsQixLQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FDNUIsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUNwQixFQUFFLFVBQVUsQ0FDZCxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQzthQUNsQyxDQUFDLENBQUMsRUFUZSxDQVNmLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQVZHLENBVUgsQ0FDZixDQUFDLEVBWmdCLENBWWhCLENBQ0gsQ0FBQyxFQWZrQixDQWVsQixDQUFDLENBQUMsQ0FBQzs7UUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQThCUztJQUNYLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQVMsRUFBRSxLQUEwQjtRQUNuRCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQU07Z0JBQ3hCLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUN0QyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDOzJCQUN6RCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM1RDtxQkFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUM5QyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ2hFO3FCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQzlDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUQ7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLEdBQVcsRUFBRSxTQUFpQjs7UUFDeEMsSUFBSSxLQUFLLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBVyxDQUFDLENBQUM7O1lBQ3JCLEtBQWMsSUFBQSxVQUFBLFNBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO2dCQUFoQixJQUFJLENBQUMsa0JBQUE7Z0JBQ1IsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQ3hELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ3hDLElBQUksRUFBRSxDQUFDO2lCQUNSO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxJQUFTLEVBQUUsTUFBVzs7UUFDL0IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxFQUFFOztnQkFDaEQsS0FBYyxJQUFBLFNBQUEsU0FBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7b0JBQWYsSUFBSSxDQUFDLGlCQUFBO29CQUNSLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUNYLElBQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO3lCQUNwRCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLElBQU0sS0FBSyxHQUFhLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDO3lCQUN4RSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2QsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDOzt3QkFDNUIsS0FBYyxJQUFBLHlCQUFBLFNBQUEsS0FBSyxDQUFBLENBQUEsNEJBQUEsK0NBQUU7NEJBQWhCLElBQUksQ0FBQyxrQkFBQTs0QkFDUixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQ3ZCLElBQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUNsRCxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtvQ0FDWCxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztpQ0FDWjtnQ0FDRCxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztnQ0FDZixXQUFXLEVBQUUsQ0FBQzs2QkFDZjt5QkFDRjs7Ozs7Ozs7O29CQUNELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxXQUFXLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtxQkFDZjtpQkFFRjs7Ozs7Ozs7O1lBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztZQUNqRyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1NBQ2xGO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixJQUFTLEVBQUUsTUFBVzs7UUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQ0FDbkMsQ0FBQztnQkFDUixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7b0JBQzdCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDaEMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7cUJBQ1o7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ2Y7OztnQkFYSCxLQUFjLElBQUEsU0FBQSxTQUFBLElBQUksQ0FBQSwwQkFBQTtvQkFBYixJQUFJLENBQUMsaUJBQUE7NEJBQUQsQ0FBQztpQkFZVDs7Ozs7Ozs7O1lBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztTQUNsRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBUyxFQUFFLFVBQWU7UUFBbkMsaUJBUUM7UUFQQyxJQUFJLFVBQVUsQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNO2dCQUM5QixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUM7WUFDbEcsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsQ0FBMEIsRUFBRSxDQUEwQixFQUFFLEtBQWM7UUFDNUUsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNOLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDVjtRQUNELElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTixDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ1Y7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBWTtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLFFBQWE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxRQUFhO1FBQ2xCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxQzs7O3NEQUc4QztJQUNoRCxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLFVBQStCO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUNBQVUsR0FBVjtJQUNBLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBVyxFQUFFLEtBQWlCLEVBQUUsR0FBZ0IsRUFBRSxTQUF5QjtRQUE5RCxzQkFBQSxFQUFBLFNBQWlCO1FBQUUsb0JBQUEsRUFBQSxRQUFnQjtRQUFFLDBCQUFBLEVBQUEsZ0JBQXlCO1FBQy9FLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFcEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7b0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE3UUQsQ0FBa0MsVUFBVSxHQTZRM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgcGx1Y2ssIHNoYXJlLCBzd2l0Y2hNYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICBkaXJlY3Rpb246ICdhc2MnIHwgJ2Rlc2MnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VSZXF1ZXN0IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNvcnQ/OiBTb3J0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2Uge1xuICBjb250ZW50OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZU1hdFRhYmxlSW50ZXJmYWNlIHtcbiAgcGFnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgdG90YWxFbGVtZW50czogbnVtYmVyO1xuICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGRhdGE6IGFueVtdO1xuICBzaXplOiBudW1iZXI7XG4gIGZldGNoOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICBjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBkaXNjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBzb3J0OiBNYXRTb3J0O1xuICBzb3J0SXQ6IChzb3J0aWRlYTogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXI6IChteUZpbHRlcjogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXJEYXRlOiAoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSkgPT4gdm9pZDtcbiAgcGFnZU51bWJlcjogU3ViamVjdDxudW1iZXI+O1xuICBzdGFydFdpdGg6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckRhdGVJbnRlcmZhY2Uge1xuICBhY3RpdmU6IHN0cmluZztcbiAgdmFsdWVTdGFydDogRGF0ZTtcbiAgdmFsdWVFbmQ6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcmVNYXRUYWJsZSBleHRlbmRzIERhdGFTb3VyY2U8RWxlbWVudD4ge1xuICBwdWJsaWMgcGFnZSQ6IE9ic2VydmFibGU8UGFnZT47XG4gIHB1YmxpYyB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHB1YmxpYyBudW1iZXIgPSAwO1xuICBwdWJsaWMgc2l6ZTogYW55O1xuICBwdWJsaWMgc29ydDogTWF0U29ydDtcbiAgcHVibGljIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgcGFnZU51bWJlcjogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj47XG4gIHB1YmxpYyBzdGFydFdpdGggPSAwO1xuICBwcml2YXRlIHBhZ2VTb3J0OiBCZWhhdmlvclN1YmplY3Q8U29ydD47XG4gIHByaXZhdGUgcGFnZUZpbHRlcjogQmVoYXZpb3JTdWJqZWN0PGFueT47XG4gIHByaXZhdGUgcGFnZUZpbHRlckRhdGU6IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPjtcbiAgcHJpdmF0ZSBiYWNrVXBEYXRhOiBhbnk7XG4gIHByaXZhdGUgZW1wdHlSb3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmaWx0ZXJUYWJsZSA9IHt9O1xuICBwcml2YXRlIGRhdGFBZnRlclNlYXJjaDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnksIHNvcnRSdWxlczogU29ydCxcbiAgICAgICAgICAgICAgcmFuZ2VSdWxlczogRmlsdGVyRGF0ZUludGVyZmFjZSwgc2l6ZSA9IDIwLCBkZXRhaWxSYXdzOiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgICAgICAgZW1wdHlSb3c6IGJvb2xlYW4gPSBmYWxzZSwgZmlsdGVyOiBhbnkgPSB7fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmRhdGEgPSBbLi4uZGF0YV07XG4gICAgdGhpcy5kYXRhQWZ0ZXJTZWFyY2ggPSBbXTtcbiAgICB0aGlzLmJhY2tVcERhdGEgPSBbLi4uZGF0YV07XG4gICAgdGhpcy50b3RhbEVsZW1lbnRzID0gZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5lbXB0eVJvdyA9IGVtcHR5Um93O1xuICAgIHRoaXMuZmlsdGVyVGFibGUgPSBmaWx0ZXI7XG4gICAgdGhpcy5wYWdlU29ydCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U29ydD4oc29ydFJ1bGVzKTtcbiAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPihudWxsKTtcbiAgICB0aGlzLnBhZ2VGaWx0ZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xuICAgIHRoaXMucGFnZU51bWJlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPih0aGlzLnN0YXJ0V2l0aCk7XG4gICAgdGhpcy5wYWdlJCA9IHRoaXMucGFnZVNvcnQucGlwZShcbiAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChyYW5nZSA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4gZnJvbShbe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xpY2UoXG4gICAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICAgfV0pKSwgc2hhcmUoKSlcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSkpKVxuXG4gICAgdGhpcy5wYWdlJCA9IHRoaXMucGFnZSQucGlwZShcbiAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZmlsdGVyID0+IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChyYW5nZSA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4gZnJvbShbe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xpY2UoXG4gICAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGFPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCwgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICApLCB0aGlzLmZpbHRlclRhYmxlXG4gICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICAgfV0pKSwgc2hhcmUoKSlcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSkpKTtcbiAgICAvKlxuXG4gICAgKGxpa2VzOiBhbnlbXSkgPT4ge1xuICAgICAgIHJldHVybiBsaWtlcy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgT2JzZXJ2YWJsZS5vZihsaWtlcykgOlxuICAgICAgICAgT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICBsaWtlcy5tYXAobGlrZSA9PiB0aGlzLmFmLmRhdGFiYXNlLm9iamVjdChcIi9jaXRhdGlvbnMvXCIgKyBsaWtlLiRrZXkpKVxuICAgICAgIClcbiAgICAgfVxuXG4gICAgdGhpcy5wYWdlJCA9IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICBzdGFydFdpdGgocmFuZ2VSdWxlcyksXG4gICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKS5waXBlKFxuICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgICAgICBzdGFydFdpdGgoc29ydFJ1bGVzKSxcbiAgICAgICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuc3RhcnRXaXRoKSxcbiAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZVJhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICApLCBzb3J0QWN0aW9uXG4gICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICB9XSkpLFxuICAgICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgICAgKSkpKVxuICAgICAgICkpKTsqL1xuICB9XG5cbiAgZmlsdGVyRGF0ZVJhbmdlKGRhdGE6IGFueSwgcmFuZ2U6IEZpbHRlckRhdGVJbnRlcmZhY2UpIHtcbiAgICBpZiAoIXJhbmdlIHx8ICghcmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydClcbiAgICAgICAgICAgICYmIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIHBvbmRlcmF0aW9uKHN0cjogc3RyaW5nLCBzZWFyY2hLZXk6IHN0cmluZykge1xuICAgIGxldCBzdGFjazogc3RyaW5nW10gPSBzdHIuc3BsaXQoJyAnKTtcbiAgICBsZXQgcG9uZDogbnVtYmVyID0gMDtcbiAgICBmb3IgKGxldCBzIG9mIHN0YWNrKSB7XG4gICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKVxuICAgICAgaWYgKHNlYXJjaCAmJiBzZWFyY2guaW5jbHVkZXMoc2VhcmNoS2V5KSkge1xuICAgICAgICBwb25kKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwb25kO1xuICB9XG5cbiAgZmlsdGVyRGF0YShkYXRhOiBhbnksIGZpbHRlcjogYW55KSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwICYmIHRoaXMuZGF0YSkge1xuICAgICAgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyLnJlcGxhY2UoL1teYS16QS1aIF0vZywgXCIgXCIpKSB7XG4gICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgY29uc3QgZGF0YVJhdzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csIFwiIFwiKTtcbiAgICAgICAgY29uc3Qgc3RhY2s6IHN0cmluZ1tdID0gZmlsdGVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCBcIiBcIilcbiAgICAgICAgICAuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IGNvbWJpbmF0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBrIG9mIHN0YWNrKSB7XG4gICAgICAgICAgaWYgKGRhdGFSYXcuaW5jbHVkZXMoaykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvbmQ6IG51bWJlciA9IHRoaXMucG9uZGVyYXRpb24oZGF0YVJhdywgayk7XG4gICAgICAgICAgICBpZiAoIWUucG9uZCkge1xuICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wb25kICs9IHBvbmQ7XG4gICAgICAgICAgICBjb21iaW5hdGlvbisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5wb25kICYmIGNvbWJpbmF0aW9uID09PSBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gcmVzdWx0LmZpbHRlcigoZSA9PiBlLnBvbmQpKS5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAoYSA8IGIgPyAtMSA6IDApKTtcbiAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IGRhdGE7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJEYXRhT2JqZWN0KGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB7XG4gICAgICBkYXRhID0gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKGZpbHRlciAmJiBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVyW2tleV0uaW5jbHVkZXMoZVtrZXldKSkge1xuICAgICAgICAgICAgZS5wb25kICs9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGUucG9uZCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBzb3J0RGF0YShkYXRhOiBhbnksIHNvcnRBY3Rpb246IGFueSkge1xuICAgIGlmIChzb3J0QWN0aW9uLmRpcmVjdGlvbiAhPT0gJycpIHtcbiAgICAgIHJldHVybiBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoYVtzb3J0QWN0aW9uLmFjdGl2ZV0sIGJbc29ydEFjdGlvbi5hY3RpdmVdLCBzb3J0QWN0aW9uLmRpcmVjdGlvbiA9PT0gJ2FzYycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGI6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBpc0FzYzogYm9vbGVhbikge1xuICAgIGlmICghYSkge1xuICAgICAgYSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghYikge1xuICAgICAgYiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSA+ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID8gLTEgOiAxKSAqIChpc0FzYyA/IDEgOiAtMSkpO1xuICB9XG5cbiAgZmV0Y2gocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlTnVtYmVyLm5leHQocGFnZSk7XG4gIH1cblxuICBzb3J0SXQoc29ydGlkZWE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFnZVNvcnQubmV4dChzb3J0aWRlYSk7XG4gIH1cblxuICBmaWx0ZXIobXlGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGlmICghbXlGaWx0ZXIgJiYgdGhpcy5kYXRhIHx8ICFteUZpbHRlci50cmltKCkgJiYgdGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnBhZ2VGaWx0ZXIubmV4dChteUZpbHRlci50b1N0cmluZygpKTtcbiAgICAvKmlmICghbXlGaWx0ZXIudGFyZ2V0LnZhbHVlIHx8ICFteUZpbHRlci50YXJnZXQudmFsdWUudHJpbSgpKSB7XG4gICAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnBhZ2VGaWx0ZXIubmV4dChteUZpbHRlci50YXJnZXQudmFsdWUpOyovXG4gIH1cblxuICBmaWx0ZXJEYXRlKGRhdGVGaWx0ZXI6IEZpbHRlckRhdGVJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlLm5leHQoZGF0ZUZpbHRlcik7XG4gIH1cblxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSQucGlwZShwbHVjaygnY29udGVudCcpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gIH1cblxuICBzbGljZShkYXRhOiBhbnlbXSwgc3RhcnQ6IG51bWJlciA9IDAsIGVuZDogbnVtYmVyID0gMjAsIGRldGFpbFJvdzogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xuICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICBpZiAodGhpcy50b3RhbEVsZW1lbnRzKSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCAqIGVuZCwgKHN0YXJ0ICogZW5kKSArIGVuZCk7XG5cbiAgICAgIGlmICh0aGlzLmVtcHR5Um93KSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgIHJvd3MucHVzaCgnZW1wdHknKTtcbiAgICAgICAgICByb3dzLnB1c2goZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcm93cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCAqIGVuZCwgKHN0YXJ0ICogZW5kKSArIGVuZCk7XG4gICAgICBpZiAodGhpcy5lbXB0eVJvdykge1xuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICByb3dzLnB1c2goJ2VtcHR5Jyk7XG4gICAgICAgICAgcm93cy5wdXNoKGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9XG4gIH1cbn1cbiJdfQ==