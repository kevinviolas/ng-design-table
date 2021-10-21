import { BehaviorSubject, from } from "rxjs";
import { debounceTime, pluck, share, switchMap } from "rxjs/operators";
import { DataSource } from "@angular/cdk/collections";
export class CoreMatTable extends DataSource {
    constructor(data, sortRules, rangeRules, size = 20, detailRaws = true, emptyRow = false, filterT = {}) {
        super();
        this.number = 0;
        this.startWith = 0;
        this._totalElements = new BehaviorSubject(0);
        this.emptyRow = false;
        this.filterTable = {};
        this.size = size;
        this.data = [...data];
        this.dataAfterSearch = [];
        this.backUpData = [...data];
        //this.totalElements = data.length;
        this.emptyRow = emptyRow;
        this.filterTable = filterT;
        this.pageSort = new BehaviorSubject(sortRules);
        this.pageFilterDate = new BehaviorSubject(null);
        this.pageFilter = new BehaviorSubject('');
        this.pageNumber = new BehaviorSubject(this.startWith);
        this._totalElements.pipe((debounceTime(1000))).subscribe((page) => this.totalElements = page);
        this.page$ = this.pageSort.pipe(switchMap(sortAction => this.pageFilter.pipe(debounceTime(500))
            .pipe(switchMap(filter => this.pageFilterDate.pipe(switchMap(range => this.pageNumber.pipe(switchMap(page => from([{
                content: this.slice(this.sortData(
                //  this.filterDataObject(
                this.filterData(this.filterDateRange(this.data, range), filter), sortAction), page, this.size, detailRaws)
            }])), share())))))));
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
    filterDateRange(data, range) {
        if (!range || (!range.valueStart && !range.valueEnd)) {
            return data;
        }
        else if (data && data.length) {
            return data.filter((e) => {
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
    }
    ponderation(str, searchKey) {
        let stack = str.split(' ');
        let pond = 0;
        for (let s of stack) {
            let search = s.replace(new RegExp(' ', 'g'), '');
            if (search && search.includes(searchKey)) {
                pond++;
            }
        }
        return pond;
    }
    filterData(data, filter) {
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        const result = [];
        if (typeof filter === "object") {
            return this.filterDataObject(data, filter);
        }
        else if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
            for (let e of data) {
                e.pond = 0;
                const dataRaw = JSON.stringify(e).toLowerCase()
                    .replace(/[^a-zA-Z0-9 ]/g, " ");
                const stack = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, " ")
                    .split(' ');
                let combination = 0;
                for (let k of stack) {
                    if (dataRaw.includes(k)) {
                        const pond = this.ponderation(dataRaw, k);
                        if (!e.pond) {
                            e.pond = 0;
                        }
                        e.pond += pond;
                        combination++;
                    }
                }
                if (e.pond && combination === stack.length) {
                    result.push(e);
                }
            }
            this.dataAfterSearch = result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
            return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            this.dataAfterSearch = data;
            return data;
        }
    }
    filterDataObject(data, filter) {
        if (data.length === 0 && this.data) {
            data = this.data;
        }
        const result = [];
        if (filter && Object.keys(filter).length > 0) {
            for (let e of data) {
                e.pond = 0;
                Object.keys(filter).forEach(key => {
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
            }
            return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    }
    sortData(data, sortAction) {
        if (sortAction.direction !== '') {
            return data.sort((a, b) => {
                if (a === 'empty' || b === 'empty') {
                    return 0;
                }
                return this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        }
        else {
            return data;
        }
    }
    compare(a, b, isAsc) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : ((Array.isArray(b) ? b.length : b)) > ((Array.isArray(a) ? a.length : a)) ? 1 : 0) * (isAsc ? -1 : 1));
    }
    fetch(page) {
        this.pageNumber.next(page);
    }
    sortIt(sortidea) {
        this.pageSort.next(sortidea);
    }
    filter(myFilter) {
        if (!myFilter && this.data || !myFilter.trim() && this.data) {
            this._totalElements.next(this.data.length);
        }
        this.pageFilter.next(myFilter.toString());
        /*if (!myFilter.target.value || !myFilter.target.value.trim()) {
          this.totalElements = this.data.length;
        }
        this.pageFilter.next(myFilter.target.value);*/
    }
    filterDate(dateFilter) {
        this.pageFilterDate.next(dateFilter);
    }
    connect() {
        return this.page$.pipe(pluck('content'));
    }
    disconnect() {
    }
    slice(data, start = 0, end = 20, detailRow = true) {
        const rows = [];
        this._totalElements.next(data.length);
        if (data.length) {
            data = data.slice(start * end, (start * end) + end);
            if (this.emptyRow) {
                data.forEach((d) => {
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
                data.forEach((d) => {
                    rows.push('empty');
                    rows.push(d);
                });
                return rows;
            }
            return rows;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLWRhdGEtdGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQXNCLE1BQU0sTUFBTSxDQUFDO0FBR2hFLE9BQU8sRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUE0Q3BELE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBbUI7SUFtQm5ELFlBQVksSUFBUyxFQUFFLFNBQWUsRUFDMUIsVUFBK0IsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLGFBQXNCLElBQUksRUFDdEUsV0FBb0IsS0FBSyxFQUFFLFVBQWUsRUFBRTtRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQW5CSCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBTVgsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUliLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU92QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM1QixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FB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QUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgcGx1Y2ssIHNoYXJlLCBzd2l0Y2hNYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICBkaXJlY3Rpb246ICdhc2MnIHwgJ2Rlc2MnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VSZXF1ZXN0IHtcbiAgcGFnZTogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHNvcnQ/OiBTb3J0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2Uge1xuICBjb250ZW50OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZU1hdFRhYmxlSW50ZXJmYWNlIHtcbiAgcGFnZSQ6IE9ic2VydmFibGU8YW55PjtcbiAgdG90YWxFbGVtZW50czogbnVtYmVyO1xuICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGRhdGE6IGFueVtdO1xuICBzaXplOiBudW1iZXI7XG4gIGZldGNoOiAocGFnZTogYW55KSA9PiB2b2lkO1xuICBjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBkaXNjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBzb3J0OiBNYXRTb3J0O1xuICBzb3J0SXQ6IChzb3J0aWRlYTogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXI6IChteUZpbHRlcjogYW55KSA9PiB2b2lkO1xuICBmaWx0ZXJEYXRhIDogKGRhdGE6YW55LCBmaWx0ZXI6YW55KSA9PiB2b2lkXG4gIGZpbHRlckRhdGU6IChkYXRlRmlsdGVyOiBGaWx0ZXJEYXRlSW50ZXJmYWNlKSA9PiB2b2lkO1xuICBwYWdlTnVtYmVyOiBTdWJqZWN0PG51bWJlcj47XG4gIHN0YXJ0V2l0aDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRGF0ZUludGVyZmFjZSB7XG4gIGFjdGl2ZTogc3RyaW5nO1xuICB2YWx1ZVN0YXJ0OiBEYXRlO1xuICB2YWx1ZUVuZDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29yZU1hdFRhYmxlIGV4dGVuZHMgRGF0YVNvdXJjZTxFbGVtZW50PiB7XG4gIHB1YmxpYyBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgcHVibGljIHRvdGFsRWxlbWVudHM6IG51bWJlcjtcbiAgcHVibGljIG51bWJlciA9IDA7XG4gIHB1YmxpYyBzaXplOiBhbnk7XG4gIHB1YmxpYyBzb3J0OiBNYXRTb3J0O1xuICBwdWJsaWMgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyBwYWdlTnVtYmVyOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPjtcbiAgcHVibGljIHN0YXJ0V2l0aCA9IDA7XG4gIHByaXZhdGUgcGFnZVNvcnQ6IEJlaGF2aW9yU3ViamVjdDxTb3J0PjtcbiAgcHJpdmF0ZSBwYWdlRmlsdGVyOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcbiAgcHJpdmF0ZSBwYWdlRmlsdGVyRGF0ZTogQmVoYXZpb3JTdWJqZWN0PEZpbHRlckRhdGVJbnRlcmZhY2U+O1xuICBwcml2YXRlIF90b3RhbEVsZW1lbnRzID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcbiAgcHJpdmF0ZSBiYWNrVXBEYXRhOiBhbnk7XG4gIHByaXZhdGUgZW1wdHlSb3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmaWx0ZXJUYWJsZSA9IHt9O1xuICBwcml2YXRlIGRhdGFBZnRlclNlYXJjaDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnksIHNvcnRSdWxlczogU29ydCxcbiAgICAgICAgICAgICAgcmFuZ2VSdWxlczogRmlsdGVyRGF0ZUludGVyZmFjZSwgc2l6ZSA9IDIwLCBkZXRhaWxSYXdzOiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgICAgICAgZW1wdHlSb3c6IGJvb2xlYW4gPSBmYWxzZSwgZmlsdGVyVDogYW55ID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5kYXRhID0gWy4uLmRhdGFdO1xuICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gW107XG4gICAgdGhpcy5iYWNrVXBEYXRhID0gWy4uLmRhdGFdO1xuICAgIC8vdGhpcy50b3RhbEVsZW1lbnRzID0gZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5lbXB0eVJvdyA9IGVtcHR5Um93O1xuICAgIHRoaXMuZmlsdGVyVGFibGUgPSBmaWx0ZXJUO1xuICAgIHRoaXMucGFnZVNvcnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNvcnQ+KHNvcnRSdWxlcyk7XG4gICAgdGhpcy5wYWdlRmlsdGVyRGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RmlsdGVyRGF0ZUludGVyZmFjZT4obnVsbCk7XG4gICAgdGhpcy5wYWdlRmlsdGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KCcnKTtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4odGhpcy5zdGFydFdpdGgpO1xuICAgIHRoaXMuX3RvdGFsRWxlbWVudHMucGlwZSgoZGVib3VuY2VUaW1lKDEwMDApKSkuc3Vic2NyaWJlKChwYWdlOm51bWJlcikgPT4gdGhpcy50b3RhbEVsZW1lbnRzID0gcGFnZSk7XG5cbiAgICB0aGlzLnBhZ2UkID0gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlRmlsdGVyLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5zbGljZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuc29ydERhdGEoXG4gICAgICAgICAgICAgICAgICAvLyAgdGhpcy5maWx0ZXJEYXRhT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgKSwgZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICksIHNvcnRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICAgfV0pKSwgc2hhcmUoKSlcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSkpKVxuXG5cblxuICAgLyogaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyVGFibGUpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucGFnZSQgPSB0aGlzLnBhZ2UkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChzb3J0QWN0aW9uMiA9PiB0aGlzLnBhZ2VGaWx0ZXIucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlRmlsdGVyRGF0ZS5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAocmFuZ2UyID0+IHRoaXMucGFnZU51bWJlci5waXBlKFxuICAgICAgICAgICAgICAgIHN3aXRjaE1hcChwYWdlMiA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YU9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZVJhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCwgcmFuZ2UyXG4gICAgICAgICAgICAgICAgICAgICAgICApLCB0aGlzLmZpbHRlclRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgKSwgc29ydEFjdGlvbjJcbiAgICAgICAgICAgICAgICAgICAgKSwgcGFnZTIsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICAgICB9XSkpLCBzaGFyZSgpKVxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSkpKTtcbiAgICB9XG5cbiAgICAvKlxuXG4gICAgKGxpa2VzOiBhbnlbXSkgPT4ge1xuICAgICAgIHJldHVybiBsaWtlcy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgT2JzZXJ2YWJsZS5vZihsaWtlcykgOlxuICAgICAgICAgT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICBsaWtlcy5tYXAobGlrZSA9PiB0aGlzLmFmLmRhdGFiYXNlLm9iamVjdChcIi9jaXRhdGlvbnMvXCIgKyBsaWtlLiRrZXkpKVxuICAgICAgIClcbiAgICAgfVxuXG4gICAgdGhpcy5wYWdlJCA9IHRoaXMucGFnZUZpbHRlckRhdGUucGlwZShcbiAgICAgICBzdGFydFdpdGgocmFuZ2VSdWxlcyksXG4gICAgICAgc3dpdGNoTWFwKHJhbmdlID0+IHRoaXMucGFnZUZpbHRlci5waXBlKGRlYm91bmNlVGltZSg1MDApKS5waXBlKFxuICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgIHN3aXRjaE1hcChmaWx0ZXIgPT4gdGhpcy5wYWdlU29ydC5waXBlKFxuICAgICAgICAgICBzdGFydFdpdGgoc29ydFJ1bGVzKSxcbiAgICAgICAgICAgc3dpdGNoTWFwKHNvcnRBY3Rpb24gPT4gdGhpcy5wYWdlTnVtYmVyLnBpcGUoXG4gICAgICAgICAgICAgc3RhcnRXaXRoKHRoaXMuc3RhcnRXaXRoKSxcbiAgICAgICAgICAgICBzd2l0Y2hNYXAocGFnZSA9PiBmcm9tKFt7XG4gICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnNsaWNlKFxuICAgICAgICAgICAgICAgICB0aGlzLnNvcnREYXRhKFxuICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZVJhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEsIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICApLCBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICApLCBzb3J0QWN0aW9uXG4gICAgICAgICAgICAgICAgICksIHBhZ2UsIHRoaXMuc2l6ZSwgZGV0YWlsUmF3cylcbiAgICAgICAgICAgICB9XSkpLFxuICAgICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgICAgKSkpKVxuICAgICAgICkpKTsqL1xuICB9XG5cbiAgZmlsdGVyRGF0ZVJhbmdlKGRhdGE6IGFueSwgcmFuZ2U6IEZpbHRlckRhdGVJbnRlcmZhY2UpIHtcbiAgICBpZiAoIXJhbmdlIHx8ICghcmFuZ2UudmFsdWVTdGFydCAmJiAhcmFuZ2UudmFsdWVFbmQpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyYW5nZS52YWx1ZVN0YXJ0ICYmIHJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydClcbiAgICAgICAgICAgICYmIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPD0gbmV3IERhdGUocmFuZ2UudmFsdWVFbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnZhbHVlU3RhcnQgJiYgIXJhbmdlLnZhbHVlRW5kKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGVbcmFuZ2UuYWN0aXZlXSkgPj0gbmV3IERhdGUocmFuZ2UudmFsdWVTdGFydCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJhbmdlLnZhbHVlU3RhcnQgJiYgcmFuZ2UudmFsdWVFbmQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZVtyYW5nZS5hY3RpdmVdKSA8PSBuZXcgRGF0ZShyYW5nZS52YWx1ZUVuZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIHBvbmRlcmF0aW9uKHN0cjogc3RyaW5nLCBzZWFyY2hLZXk6IHN0cmluZykge1xuICAgIGxldCBzdGFjazogc3RyaW5nW10gPSBzdHIuc3BsaXQoJyAnKTtcbiAgICBsZXQgcG9uZDogbnVtYmVyID0gMDtcbiAgICBmb3IgKGxldCBzIG9mIHN0YWNrKSB7XG4gICAgICBsZXQgc2VhcmNoOiBzdHJpbmcgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKVxuICAgICAgaWYgKHNlYXJjaCAmJiBzZWFyY2guaW5jbHVkZXMoc2VhcmNoS2V5KSkge1xuICAgICAgICBwb25kKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwb25kO1xuICB9XG5cbiAgZmlsdGVyRGF0YShkYXRhOiBhbnksIGZpbHRlcjogYW55KSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwICYmIHRoaXMuZGF0YSkge1xuICAgICAgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhT2JqZWN0KGRhdGEsIGZpbHRlcik7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXIgJiYgZmlsdGVyLnJlcGxhY2UoL1teYS16QS1aIF0vZywgXCIgXCIpKSB7XG4gICAgICBmb3IgKGxldCBlIG9mIGRhdGEpIHtcbiAgICAgICAgZS5wb25kID0gMDtcbiAgICAgICAgY29uc3QgZGF0YVJhdzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csIFwiIFwiKTtcbiAgICAgICAgY29uc3Qgc3RhY2s6IHN0cmluZ1tdID0gZmlsdGVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCBcIiBcIilcbiAgICAgICAgICAuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IGNvbWJpbmF0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBrIG9mIHN0YWNrKSB7XG4gICAgICAgICAgaWYgKGRhdGFSYXcuaW5jbHVkZXMoaykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvbmQ6IG51bWJlciA9IHRoaXMucG9uZGVyYXRpb24oZGF0YVJhdywgayk7XG4gICAgICAgICAgICBpZiAoIWUucG9uZCkge1xuICAgICAgICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wb25kICs9IHBvbmQ7XG4gICAgICAgICAgICBjb21iaW5hdGlvbisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5wb25kICYmIGNvbWJpbmF0aW9uID09PSBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUFmdGVyU2VhcmNoID0gcmVzdWx0LmZpbHRlcigoZSA9PiBlLnBvbmQpKS5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAoYSA8IGIgPyAtMSA6IDApKTtcbiAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFBZnRlclNlYXJjaCA9IGRhdGE7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJEYXRhT2JqZWN0KGRhdGE6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5kYXRhKSB7XG4gICAgICBkYXRhID0gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYgKGZpbHRlciAmJiBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGUgb2YgZGF0YSkge1xuICAgICAgICBlLnBvbmQgPSAwO1xuICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVyW2tleV0uaW5jbHVkZXMoZVtrZXldKSkge1xuICAgICAgICAgICAgZS5wb25kICs9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUucG9uZCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGUucG9uZCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKChlID0+IGUucG9uZCkpLnNvcnQoKGEsIGIpID0+IGEgPiBiID8gMSA6IChhIDwgYiA/IC0xIDogMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBzb3J0RGF0YShkYXRhOiBhbnksIHNvcnRBY3Rpb246IGFueSkge1xuICAgIGlmIChzb3J0QWN0aW9uLmRpcmVjdGlvbiAhPT0gJycpIHtcbiAgICAgIHJldHVybiBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGlmIChhID09PSAnZW1wdHknIHx8IGIgPT09ICdlbXB0eScpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKGFbc29ydEFjdGlvbi5hY3RpdmVdLCBiW3NvcnRBY3Rpb24uYWN0aXZlXSwgc29ydEFjdGlvbi5kaXJlY3Rpb24gPT09ICdhc2MnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBjb21wYXJlKGE6IG51bWJlciB8IHN0cmluZyB8IGFueVtdLCBiOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXSwgaXNBc2M6IGJvb2xlYW4pIHtcbiAgICBpZiAoIWEpIHtcbiAgICAgIGEgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoIWIpIHtcbiAgICAgIGIgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKCgoQXJyYXkuaXNBcnJheShhKSA/IGEubGVuZ3RoIDogYSkgPiAoKEFycmF5LmlzQXJyYXkoYikgPyBiLmxlbmd0aCA6IGIpKSA/IC0xIDogKChBcnJheS5pc0FycmF5KGIpID8gYi5sZW5ndGggOiBiKSkgPiAoKEFycmF5LmlzQXJyYXkoYSkgPyBhLmxlbmd0aCA6IGEpKSA/IDEgOiAwICkgKiAoaXNBc2MgPyAtMSA6IDEpKTtcbiAgfVxuXG4gIGZldGNoKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGFnZU51bWJlci5uZXh0KHBhZ2UpO1xuICB9XG5cbiAgc29ydEl0KHNvcnRpZGVhOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VTb3J0Lm5leHQoc29ydGlkZWEpO1xuICB9XG5cbiAgZmlsdGVyKG15RmlsdGVyOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIW15RmlsdGVyICYmIHRoaXMuZGF0YSB8fCAhbXlGaWx0ZXIudHJpbSgpICYmIHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5fdG90YWxFbGVtZW50cy5uZXh0KHRoaXMuZGF0YS5sZW5ndGgpO1xuICAgIH1cbiAgICB0aGlzLnBhZ2VGaWx0ZXIubmV4dChteUZpbHRlci50b1N0cmluZygpKTtcbiAgICAvKmlmICghbXlGaWx0ZXIudGFyZ2V0LnZhbHVlIHx8ICFteUZpbHRlci50YXJnZXQudmFsdWUudHJpbSgpKSB7XG4gICAgICB0aGlzLnRvdGFsRWxlbWVudHMgPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnBhZ2VGaWx0ZXIubmV4dChteUZpbHRlci50YXJnZXQudmFsdWUpOyovXG4gIH1cblxuICBmaWx0ZXJEYXRlKGRhdGVGaWx0ZXI6IEZpbHRlckRhdGVJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VGaWx0ZXJEYXRlLm5leHQoZGF0ZUZpbHRlcik7XG4gIH1cblxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSQucGlwZShwbHVjaygnY29udGVudCcpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gIH1cblxuICBzbGljZShkYXRhOiBhbnlbXSwgc3RhcnQ6IG51bWJlciA9IDAsIGVuZDogbnVtYmVyID0gMjAsIGRldGFpbFJvdzogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xuICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICB0aGlzLl90b3RhbEVsZW1lbnRzLm5leHQoZGF0YS5sZW5ndGgpO1xuICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnQgKiBlbmQsIChzdGFydCAqIGVuZCkgKyBlbmQpO1xuXG4gICAgICBpZiAodGhpcy5lbXB0eVJvdykge1xuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICByb3dzLnB1c2goJ2VtcHR5Jyk7XG4gICAgICAgICAgcm93cy5wdXNoKGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnQgKiBlbmQsIChzdGFydCAqIGVuZCkgKyBlbmQpO1xuICAgICAgaWYgKHRoaXMuZW1wdHlSb3cpIHtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgcm93cy5wdXNoKCdlbXB0eScpO1xuICAgICAgICAgIHJvd3MucHVzaChkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxuICB9XG59XG4iXX0=