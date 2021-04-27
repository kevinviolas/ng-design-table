import { __extends, __read, __spread, __values } from "tslib";
import { BehaviorSubject, from } from "rxjs";
import { debounceTime, pluck, switchMap } from "rxjs/operators";
import { DataSource } from "@angular/cdk/collections";
var CoreMatTable = /** @class */ (function (_super) {
    __extends(CoreMatTable, _super);
    function CoreMatTable(data, sortRules, rangeRules, size, detailRaws) {
        if (size === void 0) { size = 20; }
        if (detailRaws === void 0) { detailRaws = true; }
        var _this = _super.call(this) || this;
        _this.number = 0;
        _this.startWith = 0;
        _this.size = size;
        _this.data = __spread(data);
        _this.backUpData = __spread(data);
        _this.totalElements = data.length;
        _this.pageSort = new BehaviorSubject(sortRules);
        _this.pageFilterDate = new BehaviorSubject(null);
        _this.pageFilter = new BehaviorSubject('');
        _this.pageNumber = new BehaviorSubject(_this.startWith);
        _this.page$ = _this.pageSort.pipe(switchMap(function (sortAction) { return _this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(function (filter) { return _this.pageFilterDate.pipe(switchMap(function (range) { return _this.pageNumber.pipe(switchMap(function (page) { return from([{
                content: _this.slice(_this.sortData(_this.filterData(_this.filterDateRange(_this.data, range), filter), sortAction), page, _this.size, detailRaws)
            }]); })); })); })); }));
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
        console.log('filterDateRange data', data.length);
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
        console.log('filterData', data.length, this.data.length, filter);
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
            return result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
        }
        else {
            return data;
        }
    };
    CoreMatTable.prototype.sortData = function (data, sortAction) {
        var _this = this;
        console.log('sort data', data.length);
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
        if (!myFilter.target.value || !myFilter.target.value.trim()) {
            this.totalElements = this.data.length;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUEyQ3BEO0lBQWtDLGdDQUFtQjtJQWVuRCxzQkFBWSxJQUFTLEVBQUUsU0FBZSxFQUMxQixVQUErQixFQUFFLElBQVMsRUFBRSxVQUEwQjtRQUFyQyxxQkFBQSxFQUFBLFNBQVM7UUFBRSwyQkFBQSxFQUFBLGlCQUEwQjtRQURsRixZQUVFLGlCQUFPLFNBMERSO1FBeEVNLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFNWCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBU25CLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxJQUFJLFlBQU8sSUFBSSxDQUFDLENBQUM7UUFDdEIsS0FBSSxDQUFDLFVBQVUsWUFBTyxJQUFJLENBQUMsQ0FBQztRQUM1QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBTyxTQUFTLENBQUMsQ0FBQztRQUNyRCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBZSxDQUFzQixJQUFJLENBQUMsQ0FBQztRQUNyRSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZUFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxlQUFlLENBQVMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELEtBQUksQ0FBQyxLQUFL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LENBQUMsQ0FBQztRQUN2QyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBM01ELENBQWtDLFVBQVUsR0EyTTNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIHBsdWNrLCBzdGFydFdpdGgsIHN3aXRjaE1hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gXCJAYW5ndWxhci9jZGsvY29sbGVjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTb3J0IHtcbiAgYWN0aXZlOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVJlcXVlc3Qge1xuICBwYWdlOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgc29ydD86IFNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZSB7XG4gIGNvbnRlbnQ6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3JlTWF0VGFibGVJbnRlcmZhY2Uge1xuICBwYWdlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBudW1iZXI6IG51bWJlcjtcbiAgZGF0YTogYW55W107XG4gIHNpemU6IG51bWJlcjtcbiAgZmV0Y2g6IChwYWdlOiBhbnkpID0+IHZvaWQ7XG4gIGNvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIGRpc2Nvbm5lY3Q6ICgpID0+IHZvaWQ7XG4gIHNvcnQ6IE1hdFNvcnQ7XG4gIHNvcnRJdDogKHNvcnRpZGVhOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlcjogKG15RmlsdGVyOiBhbnkpID0+IHZvaWQ7XG4gIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICBwYWdlTnVtYmVyOiBTdWJqZWN0PG51bWJlcj47XG4gIHN0YXJ0V2l0aDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRGF0ZUludGVyZmFjZSB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICB2YWx1ZVN0YXJ0OiBEYXRlO1xuICB2YWx1ZUVuZDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29yZU1hdFRhYmxlIGV4dGVuZHMgRGF0YVNvdXJjZTxFbGVtZW50PiB7XG4gIHB1YmxpYyBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgcHVibGljIHRvdGFsRWxlbWVudHM6IG51bWJlcjtcbiAgcHVibGljIG51bWJlciA9IDA7XG4gIHB1YmxpYyBzaXplOiBhbnk7XG4gIHB1YmxpYyBzb3J0OiBNYXRTb3J0O1xuICBwdWJsaWMgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyBwYWdlTnVtYmVyOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPjtcbiAgcHVibGljIHN0YXJ0V2l0aCA9IDA7XG4gIHByaXZhdGUgcGFnZVNvcnQ6IEJlaGF2aW9yU3ViamVjdDxTb3J0PjtcbiAgcHJpdmF0ZSBwYWdlRmlsdGVyIDogQmVoYXZpb3JTdWJqZWN0PGFueT47XG4gIHByaXZhdGUgcGFnZUZpbHRlckRhdGU6IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJEYXRlSW50ZXJmYWNlPjtcbiAgcHJpdmF0ZSBiYWNrVXBEYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogYW55LCBzb3J0UnVsZXM6IFNvcnQsXG4gICAgICAgICAgICAgIHJhbmdlUnVsZXM6IEZpbHRlckRhdGVJbnRlcmZhY2UsIHNpemUgPSAyMCwgZGV0YWlsUmF3czogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5kYXRhID0gWy4uLmRhdGFdO1xuICAgIHRoaXMuYmFja1VwRGF0YSA9IFsuLi5kYXRhXTtcbiAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLnBhZ2VTb3J0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTb3J0Pihzb3J0UnVsZXMpO1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+KG51bGwpO1xuICAgIHRoaXMucGFnZUZpbHRlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KHRoaXMuc3RhcnRXaXRoKTtcbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVSYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSwgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvblxuICAgICAgICAgICAgICAgICAgKSwgcGFnZSwgdGhpcy5zaXplLCBkZXRhaWxSYXdzKVxuICAgICAgICAgICAgICB9XSkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSkpKTtcbiAgICAvKlxuXG4gICAgKGxpa2VzOiBhbnlbXSkgPT4ge1xuICAgICAgIHJldHVybiBsaWtlcy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgT2JzZXJ2YWJsZS5vZihsaWtlcykgOlxuICAgICAgICAgT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICBsaWtlcy5tYXAobGlrZSA9PiB0aGlzLmFmLmRhdGFiYXNlLm9iamVjdChcIi9jaXRhdGlvbnMvXCIgKyBsaWtlLiRrZXkpKVxuICAgICAgIClcbiAgICAgfVxuXG4gICAgdGhpcy5wYWdlJCA9IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICBzdGFydFdpdGgocmFuZ2VSdWxlcyksXG4gICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKS5waXBlKFxuICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgICAgICBzdGFydFdpdGgoc29ydFJ1bGVzKSxcbiAgICAgICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuc3RhcnRXaXRoKSxcbiAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZVJhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICApLCBzb3J0QWN0aW9uXG4gICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICB9XSkpLFxuICAgICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgICAgKSkpKVxuICAgICAgICkpKTsqL1xuICB9XG5cbiAgZmlsdGVyRGF0ZVJhbmdlKGRhdGE6IGFueSwgcmFuZ2U6IEZpbHRlckRhdGVJbnRlcmZhY2UpIHtcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyRGF0ZVJhbmdlIGRhdGEnLCBkYXRhLmxlbmd0aCk7XG4gICAgaWYgKCFyYW5nZSB8fCAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmFuZ2UudmFsdWVTdGFydCAmJiByYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pID49IG5ldyBEYXRlKHJhbmdlLnZhbHVlU3RhcnQpXG4gICAgICAgICAgICAmJiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pIDw9IG5ldyBEYXRlKHJhbmdlLnZhbHVlRW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmICFyYW5nZS52YWx1ZUVuZCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShlW3JhbmdlLmFjdGl2ZV0pID49IG5ldyBEYXRlKHJhbmdlLnZhbHVlU3RhcnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCFyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1cblxuICBwb25kZXJhdGlvbihzdHI6IHN0cmluZywgc2VhcmNoS2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgc3RhY2s6IHN0cmluZ1tdID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgbGV0IHBvbmQ6IG51bWJlciA9IDA7XG4gICAgZm9yIChsZXQgcyBvZiBzdGFjaykge1xuICAgICAgbGV0IHNlYXJjaDogc3RyaW5nID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoJyAnLCAnZycpLCAnJylcbiAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoLmluY2x1ZGVzKHNlYXJjaEtleSkpIHtcbiAgICAgICAgcG9uZCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9uZDtcbiAgfVxuXG4gIGZpbHRlckRhdGEoZGF0YTogYW55LCBmaWx0ZXI6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJEYXRhJywgZGF0YS5sZW5ndGgsIHRoaXMuZGF0YS5sZW5ndGgsIGZpbHRlcik7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwICYmIHRoaXMuZGF0YSkge1xuICAgICAgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyLnJlcGxhY2UoL1teYS16QS1aIF0vZywgXCIgXCIpKSB7XG4gICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgY29uc3QgZGF0YVJhdzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csIFwiIFwiKTtcbiAgICAgICAgY29uc3Qgc3RhY2s6IHN0cmluZ1tdID0gZmlsdGVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCBcIiBcIilcbiAgICAgICAgICAuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IGNvbWJpbmF0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBrIG9mIHN0YWNrKSB7XG4gICAgICAgICAgaWYgKGRhdGFSYXcuaW5jbHVkZXMoaykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvbmQ6IG51bWJlciA9IHRoaXMucG9uZGVyYXRpb24oZGF0YVJhdywgayk7XG4gICAgICAgICAgICBpZiAoIWUucG9uZCkge1xuICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wb25kICs9IHBvbmQ7XG4gICAgICAgICAgICBjb21iaW5hdGlvbisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5wb25kICYmIGNvbWJpbmF0aW9uID09PSBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBzb3J0RGF0YShkYXRhOiBhbnksIHNvcnRBY3Rpb246IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdzb3J0IGRhdGEnLCBkYXRhLmxlbmd0aCk7XG4gICAgaWYgKHNvcnRBY3Rpb24uZGlyZWN0aW9uICE9PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShhW3NvcnRBY3Rpb24uYWN0aXZlXSwgYltzb3J0QWN0aW9uLmFjdGl2ZV0sIHNvcnRBY3Rpb24uZGlyZWN0aW9uID09PSAnYXNjJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZShhOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXSwgYjogbnVtYmVyIHwgc3RyaW5nIHwgYW55W10sIGlzQXNjOiBib29sZWFuKSB7XG4gICAgaWYgKCFhKSB7XG4gICAgICBhID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFiKSB7XG4gICAgICBiID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuICgoKEFycmF5LmlzQXJyYXkoYSkgPyBhLmxlbmd0aCA6IGEpID4gKChBcnJheS5pc0FycmF5KGIpID8gYi5sZW5ndGggOiBiKSkgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKSk7XG4gIH1cblxuICBmZXRjaChwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIubmV4dChwYWdlKTtcbiAgfVxuXG4gIHNvcnRJdChzb3J0aWRlYTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU29ydC5uZXh0KHNvcnRpZGVhKTtcbiAgfVxuXG4gIGZpbHRlcihteUZpbHRlcjogYW55KTogdm9pZCB7XG4gICAgaWYgKCFteUZpbHRlci50YXJnZXQudmFsdWUgfHwgIW15RmlsdGVyLnRhcmdldC52YWx1ZS50cmltKCkpIHtcbiAgICAgIHRoaXMudG90YWxFbGVtZW50cyA9IHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdteSBmaWx0ZXInLCBteUZpbHRlci50YXJnZXQudmFsdWUsIHRoaXMuZGF0YS5sZW5ndGgpXG4gICAgdGhpcy5wYWdlRmlsdGVyLm5leHQobXlGaWx0ZXIudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlckRhdGUoZGF0ZUZpbHRlcjogRmlsdGVyRGF0ZUludGVyZmFjZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZUZpbHRlckRhdGUubmV4dChkYXRlRmlsdGVyKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlJC5waXBlKHBsdWNrKCdjb250ZW50JykpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNsaWNlKGRhdGE6IGFueVtdLCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSAyMCwgZGV0YWlsUm93OiBib29sZWFuID0gdHJ1ZSk6IGFueSB7XG4gICAgY29uc29sZS5sb2coJ3NsaWNlIGRhdGEnLCBkYXRhLmxlbmd0aCk7XG4gICAgY29uc3Qgcm93cyA9IFtdO1xuICAgIHRoaXMudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIGlmICh0aGlzLnRvdGFsRWxlbWVudHMpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0ICogZW5kLCAoc3RhcnQgKiBlbmQpICsgZW5kKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9XG4gIH1cbn1cbiJdfQ==