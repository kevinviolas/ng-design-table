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
        _this.backUpData = __spread(data);
        _this.totalElements = data.length;
        _this.emptyRow = emptyRow;
        _this.filterTable = filter;
        _this.pageSort = new BehaviorSubject(sortRules);
        _this.pageFilterDate = new BehaviorSubject(null);
        _this.pageFilter = new BehaviorSubject('');
        _this.pageNumber = new BehaviorSubject(_this.startWith);
        console.log(filter);
        _this.page$ = _this.pageSort.pipe(switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(function (filter) { return _this.pageFilterDate.pipe(switchMap(function (range) { return _this.pageNumber.pipe(switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterData(_this.filterDateRange(_this.data, range), filter), sortAction), page, _this.size, detailRaws)
            }]); }), share()); })); })); }));
        _this.page$ = _this.pageSort.pipe(switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(function (filter) { return _this.pageFilterDate.pipe(switchMap(function (range) { return _this.pageNumber.pipe(switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterData(_this.filterDateRange(_this.data, range), filter), sortAction), page, _this.size, detailRaws)
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
                    console.log(dataRaw);
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
    CoreMatTable.prototype.filterDataObject = function (data, filter) {
        var e_4, _a;
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        var result = [];
        if (filter && filter !== {}) {
            try {
                for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
                    var e = data_2_1.value;
                    e.pond = 0;
                    var dataRaw = JSON.stringify(e).toLowerCase()
                        .replace(/[^a-zA-Z0-9 ]/g, " ");
                    console.log(dataRaw);
                    filter.forEach(function (f) {
                    });
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBMkNwRDtJQUFrQyxnQ0FBbUI7SUFpQm5ELHNCQUFZLElBQVMsRUFBRSxTQUFlLEVBQzFCLFVBQStCLEVBQUUsSUFBUyxFQUFFLFVBQTBCLEVBQ3RFLFFBQXlCLEVBQUUsTUFBZ0I7UUFEVixxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQUN0RSx5QkFBQSxFQUFBLGdCQUF5QjtRQUFFLHVCQUFBLEVBQUEsV0FBZ0I7UUFGdkQsWUFHRSxpQkFBTyxTQThFUjtRQS9GTSxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUtiLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFNdkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSSxDQUFDLElBQUksWUFBTyxJQUFJLENBQUMsQ0FBQztRQUN0QixLQUFJLENBQUMsVUFBVSxZQUFPLElBQUksQ0FBQyxDQUFDO1FBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFPLFNBQVMsQ0FBQyxD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O0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQW5RRCxDQUFrQyxVQUFVLEdBbVEzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBmcm9tLCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7TWF0U29ydH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBwbHVjaywgc2hhcmUsIHN3aXRjaE1hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gXCJAYW5ndWxhci9jZGsvY29sbGVjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTb3J0IHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJlcXVlc3Qge1xuICBwYWdlOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc29ydD86IFNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gIGNvbnRlbnQ6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3JlTWF0VGFibGVJbnRlcmZhY2Uge1xuICBwYWdlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBudW1iZXI6IG51bWJlcjtcbiAgZGF0YTogYW55W107XG4gIHNpemU6IG51bWJlcjtcbiAgZmV0Y2g6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG4gIGNvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIGRpc2Nvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIHNvcnQ6IE1hdFNvcnQ7XG4gIHNvcnRJdDogKHNvcnRpZGVhOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlcjogKG15RmlsdGVyOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICBwYWdlTnVtYmVyOiBTdWJqZWN0PG51bWJlcj47XG4gIHN0YXJ0V2l0aDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRGF0ZUludGVyZmFjZSB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICB2YWx1ZVN0YXJ0OiBEYXRlO1xuICB2YWx1ZUVuZDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29yZU1hdFRhYmxlIGV4dGVuZHMgRGF0YVNvdXJjZTxFbGVtZW50PiB7XG4gIHB1YmxpYyBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgcHVibGljIHRvdGFsRWxlbWVudHM6IG51bWJlcjtcbiAgcHVibGljIG51bWJlciA9IDA7XG4gIHB1YmxpYyBzaXplOiBhbnk7XG4gIHB1YmxpYyBzb3J0OiBNYXRTb3J0O1xuICBwdWJsaWMgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyBwYWdlTnVtYmVyOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPjtcbiAgcHVibGljIHN0YXJ0V2l0aCA9IDA7XG4gIHByaXZhdGUgcGFnZVNvcnQ6IEJlaGF2aW9yU3ViamVjdDxTb3J0PjtcbiAgcHJpdmF0ZSBwYWdlRmlsdGVyOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcbiAgcHJpdmF0ZSBwYWdlRmlsdGVyRGF0ZTogQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+O1xuICBwcml2YXRlIGJhY2tVcERhdGE6IGFueTtcbiAgcHJpdmF0ZSBlbXB0eVJvdyA9IGZhbHNlO1xuICBwcml2YXRlIGZpbHRlclRhYmxlID0ge307XG5cbiAgY29uc3RydWN0b3IoZGF0YTogYW55LCBzb3J0UnVsZXM6IFNvcnQsXG4gICAgICAgICAgICAgIHJhbmdlUnVsZXM6IEZpbHRlckRhdGVJbnRlcmZhY2UsIHNpemUgPSAyMCwgZGV0YWlsUmF3czogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgICAgICAgIGVtcHR5Um93OiBib29sZWFuID0gZmFsc2UsIGZpbHRlcjogYW55ID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5kYXRhID0gWy4uLmRhdGFdO1xuICAgIHRoaXMuYmFja1VwRGF0YSA9IFsuLi5kYXRhXTtcbiAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLmVtcHR5Um93ID0gZW1wdHlSb3c7XG4gICAgdGhpcy5maWx0ZXJUYWJsZSA9IGZpbHRlcjtcbiAgICB0aGlzLnBhZ2VTb3J0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTb3J0Pihzb3J0UnVsZXMpO1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+KG51bGwpO1xuICAgIHRoaXMucGFnZUZpbHRlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KHRoaXMuc3RhcnRXaXRoKTtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXIpO1xuICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGZpbHRlciA9PiB0aGlzLnBhZ2VGaWx0ZXJEYXRlLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZVJhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLCByYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICksIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICApLCBzb3J0QWN0aW9uXG4gICAgICAgICAgICAgICAgICApLCBwYWdlLCB0aGlzLnNpemUsIGRldGFpbFJhd3MpXG4gICAgICAgICAgICAgIH1dKSksIHNoYXJlKCkpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICkpKSk7XG5cbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSwgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICAgKSwgcGFnZSwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgICB9XSkpLCBzaGFyZSgpKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApKSkpO1xuICAgIC8qXG5cbiAgICAobGlrZXM6IGFueVtdKSA9PiB7XG4gICAgICAgcmV0dXJuIGxpa2VzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICBPYnNlcnZhYmxlLm9mKGxpa2VzKSA6XG4gICAgICAgICBPYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgIGxpa2VzLm1hcChsaWtlID0+IHRoaXMuYWYuZGF0YWJhc2Uub2JqZWN0KFwiL2NpdGF0aW9ucy9cIiArIGxpa2UuJGtleSkpXG4gICAgICAgKVxuICAgICB9XG5cbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgIHN0YXJ0V2l0aChyYW5nZVJ1bGVzKSxcbiAgICAgICBzd2l0Y2hNYXAocmFuZ2UgPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpLnBpcGUoXG4gICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgc3dpdGNoTWFwKGZpbHRlciA9PiB0aGlzLnBhZ2VTb3J0LnBpcGUoXG4gICAgICAgICAgIHN0YXJ0V2l0aChzb3J0UnVsZXMpLFxuICAgICAgICAgICBzd2l0Y2hNYXAoc29ydEFjdGlvbiA9PiB0aGlzLnBhZ2VOdW1iZXIucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgodGhpcy5zdGFydFdpdGgpLFxuICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlID0+IGZyb20oW3tcbiAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xpY2UoXG4gICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSwgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICksIGZpbHRlclxuICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICAgKSwgcGFnZSwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgIH1dKSksXG4gICAgICAgICAgICAgc2hhcmUoKVxuICAgICAgICAgICApKSkpXG4gICAgICAgKSkpOyovXG4gIH1cblxuICBmaWx0ZXJEYXRlUmFuZ2UoZGF0YTogYW55LCByYW5nZTogRmlsdGVyRGF0ZUludGVyZmFjZSkge1xuICAgIGlmICghcmFuZ2UgfHwgKCFyYW5nZS52YWx1ZVN0YXJ0ICYmICFyYW5nZS52YWx1ZUVuZCkpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KVxuICAgICAgICAgICAgJiYgbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA+PSBuZXcgRGF0ZShyYW5nZS52YWx1ZVN0YXJ0KTtcbiAgICAgICAgfSBlbHNlIGlmICghcmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICB9XG5cbiAgcG9uZGVyYXRpb24oc3RyOiBzdHJpbmcsIHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgbGV0IHN0YWNrOiBzdHJpbmdbXSA9IHN0ci5zcGxpdCgnICcpO1xuICAgIGxldCBwb25kOiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IHMgb2Ygc3RhY2spIHtcbiAgICAgIGxldCBzZWFyY2g6IHN0cmluZyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpXG4gICAgICBpZiAoc2VhcmNoICYmIHNlYXJjaC5pbmNsdWRlcyhzZWFyY2hLZXkpKSB7XG4gICAgICAgIHBvbmQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBvbmQ7XG4gIH1cblxuICBmaWx0ZXJEYXRhKGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB7XG4gICAgICBkYXRhID0gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIiBcIikpIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBjb25zdCBkYXRhUmF3OiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShlKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCIgXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhUmF3KTtcbiAgICAgICAgY29uc3Qgc3RhY2s6IHN0cmluZ1tdID0gZmlsdGVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCBcIiBcIilcbiAgICAgICAgICAuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IGNvbWJpbmF0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBrIG9mIHN0YWNrKSB7XG4gICAgICAgICAgaWYgKGRhdGFSYXcuaW5jbHVkZXMoaykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvbmQ6IG51bWJlciA9IHRoaXMucG9uZGVyYXRpb24oZGF0YVJhdywgayk7XG4gICAgICAgICAgICBpZiAoIWUucG9uZCkge1xuICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wb25kICs9IHBvbmQ7XG4gICAgICAgICAgICBjb21iaW5hdGlvbisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5wb25kICYmIGNvbWJpbmF0aW9uID09PSBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJEYXRhT2JqZWN0KGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB7XG4gICAgICBkYXRhID0gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT09IHt9KSB7XG4gICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgY29uc3QgZGF0YVJhdzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csIFwiIFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVJhdyk7XG4gICAgICAgIGZpbHRlci5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0RGF0YShkYXRhOiBhbnksIHNvcnRBY3Rpb246IGFueSkge1xuICAgIGlmIChzb3J0QWN0aW9uLmRpcmVjdGlvbiAhPT0gJycpIHtcbiAgICAgIHJldHVybiBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoYVtzb3J0QWN0aW9uLmFjdGl2ZV0sIGJbc29ydEFjdGlvbi5hY3RpdmVdLCBzb3J0QWN0aW9uLmRpcmVjdGlvbiA9PT0gJ2FzYycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmUoYTogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGI6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBpc0FzYzogYm9vbGVhbikge1xuICAgIGlmICghYSkge1xuICAgICAgYSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghYikge1xuICAgICAgYiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoKChBcnJheS5pc0FycmF5KGEpID8gYS5sZW5ndGggOiBhKSA+ICgoQXJyYXkuaXNBcnJheShiKSA/IGIubGVuZ3RoIDogYikpID8gLTEgOiAxKSAqIChpc0FzYyA/IDEgOiAtMSkpO1xuICB9XG5cbiAgZmV0Y2gocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlTnVtYmVyLm5leHQocGFnZSk7XG4gIH1cblxuICBzb3J0SXQoc29ydGlkZWE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFnZVNvcnQubmV4dChzb3J0aWRlYSk7XG4gIH1cblxuICBmaWx0ZXIobXlGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGlmICghbXlGaWx0ZXIgJiYgdGhpcy5kYXRhIHx8ICFteUZpbHRlci50cmltKCkgJiYgdGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnBhZ2VGaWx0ZXIubmV4dChteUZpbHRlci50b1N0cmluZygpKTtcbiAgICAvKmlmICghbXlGaWx0ZXIudGFyZ2V0LnZhbHVlIHx8ICFteUZpbHRlci50YXJnZXQudmFsdWUudHJpbSgpKSB7XG4gICAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnBhZ2VGaWx0ZXIubmV4dChteUZpbHRlci50YXJnZXQudmFsdWUpOyovXG4gIH1cblxuICBmaWx0ZXJEYXRlKGRhdGVGaWx0ZXI6IEZpbHRlckRhdGVJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlLm5leHQoZGF0ZUZpbHRlcik7XG4gIH1cblxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSQucGlwZShwbHVjaygnY29udGVudCcpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gIH1cblxuICBzbGljZShkYXRhOiBhbnlbXSwgc3RhcnQ6IG51bWJlciA9IDAsIGVuZDogbnVtYmVyID0gMjAsIGRldGFpbFJvdzogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xuICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICBpZiAodGhpcy50b3RhbEVsZW1lbnRzKSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCAqIGVuZCwgKHN0YXJ0ICogZW5kKSArIGVuZCk7XG5cbiAgICAgIGlmICh0aGlzLmVtcHR5Um93KSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgIHJvd3MucHVzaCgnZW1wdHknKTtcbiAgICAgICAgICByb3dzLnB1c2goZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcm93cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5lbXB0eVJvdykge1xuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICByb3dzLnB1c2goJ2VtcHR5Jyk7XG4gICAgICAgICAgcm93cy5wdXNoKGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9XG4gIH1cbn1cbiJdfQ==