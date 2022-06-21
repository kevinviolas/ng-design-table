/***********************************************************
 **  @project MS_Nowboard                              **
 **  @file ComponentRegistry                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 12/03/2021                                         **
 ***********************************************************/
export var CellsComponentList;
(function (CellsComponentList) {
    CellsComponentList["ButtonLink"] = "button-link";
    CellsComponentList["ButtonLinkText"] = "button-link-text";
    CellsComponentList["ButtonClick"] = "button-click";
    CellsComponentList["Priority"] = "priority";
    CellsComponentList["Origin"] = "origin";
    CellsComponentList["NameAvatar"] = "name-avatar";
    CellsComponentList["DateFormat"] = "date-format";
    CellsComponentList["CountRow"] = "count-row";
    CellsComponentList["Gender"] = "gender-avatar";
    CellsComponentList["Phone"] = "phone-display";
    CellsComponentList["YesNo"] = "yes-no-display";
    CellsComponentList["CustomerRank"] = "customer-rank";
    CellsComponentList["ItCategory"] = "it-category";
    CellsComponentList["ItStatus"] = "it-status";
    CellsComponentList["CustomIcon"] = "custom-icon";
    CellsComponentList["PngIcon"] = "png-icon";
    CellsComponentList["CustomCell"] = "custom-cell";
})(CellsComponentList || (CellsComponentList = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbHNDb21wb25lbnRSZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3NldHRpbmcvQ2VsbHNDb21wb25lbnRSZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7NkRBSzZEO0FBRTdELE1BQU0sQ0FBTixJQUFZLGtCQWtCWDtBQWxCRCxXQUFZLGtCQUFrQjtJQUM1QixnREFBMEIsQ0FBQTtJQUMxQix5REFBbUMsQ0FBQTtJQUNuQyxrREFBNEIsQ0FBQTtJQUM1QiwyQ0FBcUIsQ0FBQTtJQUNyQix1Q0FBaUIsQ0FBQTtJQUNqQixnREFBMEIsQ0FBQTtJQUMxQixnREFBMEIsQ0FBQTtJQUMxQiw0Q0FBc0IsQ0FBQTtJQUN0Qiw4Q0FBd0IsQ0FBQTtJQUN4Qiw2Q0FBdUIsQ0FBQTtJQUN2Qiw4Q0FBd0IsQ0FBQTtJQUN4QixvREFBOEIsQ0FBQTtJQUM5QixnREFBMEIsQ0FBQTtJQUMxQiw0Q0FBc0IsQ0FBQTtJQUN0QixnREFBMEIsQ0FBQTtJQUMxQiwwQ0FBb0IsQ0FBQTtJQUNwQixnREFBMEIsQ0FBQTtBQUM1QixDQUFDLEVBbEJXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFrQjdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiAgQHByb2plY3QgTVNfTm93Ym9hcmQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gKiogIEBmaWxlIENvbXBvbmVudFJlZ2lzdHJ5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gKiogIEBhdXRob3IgQnJpY2UgRGF1cGlhcmQgPGJyaWNlLmRhdXBpYXJkQHNtYXJ0aWl6LmNvbT4gICoqXHJcbiAqKiAgQERhdGUgMTIvMDMvMjAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZXhwb3J0IGVudW0gQ2VsbHNDb21wb25lbnRMaXN0IHtcclxuICBCdXR0b25MaW5rID0gXCJidXR0b24tbGlua1wiLFxyXG4gIEJ1dHRvbkxpbmtUZXh0ID0gXCJidXR0b24tbGluay10ZXh0XCIsXHJcbiAgQnV0dG9uQ2xpY2sgPSBcImJ1dHRvbi1jbGlja1wiLFxyXG4gIFByaW9yaXR5ID0gXCJwcmlvcml0eVwiLFxyXG4gIE9yaWdpbiA9IFwib3JpZ2luXCIsXHJcbiAgTmFtZUF2YXRhciA9IFwibmFtZS1hdmF0YXJcIixcclxuICBEYXRlRm9ybWF0ID0gXCJkYXRlLWZvcm1hdFwiLFxyXG4gIENvdW50Um93ID0gXCJjb3VudC1yb3dcIixcclxuICBHZW5kZXIgPSAnZ2VuZGVyLWF2YXRhcicsXHJcbiAgUGhvbmUgPSAncGhvbmUtZGlzcGxheScsXHJcbiAgWWVzTm8gPSAneWVzLW5vLWRpc3BsYXknLFxyXG4gIEN1c3RvbWVyUmFuayA9ICdjdXN0b21lci1yYW5rJyxcclxuICBJdENhdGVnb3J5ID0gJ2l0LWNhdGVnb3J5JyxcclxuICBJdFN0YXR1cyA9ICdpdC1zdGF0dXMnLFxyXG4gIEN1c3RvbUljb24gPSAnY3VzdG9tLWljb24nLFxyXG4gIFBuZ0ljb24gPSAncG5nLWljb24nLFxyXG4gIEN1c3RvbUNlbGwgPSAnY3VzdG9tLWNlbGwnXHJcbn1cclxuIl19