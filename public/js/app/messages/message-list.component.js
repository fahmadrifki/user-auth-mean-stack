"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MessageListComponent = (function () {
    function MessageListComponent() {
        this.itemList = [
            { name: "test@test.com" },
            { name: "fahmad@gmail.com" },
        ];
        this.clickedItem = { name: "" };
    }
    MessageListComponent.prototype.onItemClicked = function (itemList) {
        this.clickedItem = itemList;
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-list',
            template: "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Email</div>\n                <div class=\"panel-body\">\n                    <ul class=\"list-group\">\n                        <li *ngFor=\"#myItem of itemList\" class=\"list-group-item spacing\" (click)=\"onItemClicked(myItem)\"> {{myItem.name}}\n                            <button type=\"button\" class=\"btn btn-default btn-sm\">\n                                <span class=\"glyphicon glyphicon-new-window\" aria-hidden=\"true\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-sm\">\n                                <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                            </button>\n                        </li>\n                        <input type=\"text\" [(ngModel)]=\"clickedItem.name\">\n                    </ul>\n                </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQXdCMUM7SUFBQTtRQUNXLGFBQVEsR0FBRztZQUNkLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQztZQUN0QixFQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQztTQUM1QixDQUFDO1FBQ0ssZ0JBQVcsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQztJQUluQyxDQUFDO0lBSE8sNENBQWEsR0FBYixVQUFjLFFBQVE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQTlCVDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsMDlCQWlCVDtTQUNKLENBQUM7OzRCQUFBO0lBV0YsMkJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRCQUFvQix1QkFTaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+RW1haWw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI215SXRlbSBvZiBpdGVtTGlzdFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHNwYWNpbmdcIiAoY2xpY2spPVwib25JdGVtQ2xpY2tlZChteUl0ZW0pXCI+IHt7bXlJdGVtLm5hbWV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNsaWNrZWRJdGVtLm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnR7XHJcbiAgICBwdWJsaWMgaXRlbUxpc3QgPSBbXHJcbiAgICAgICAge25hbWU6XCJ0ZXN0QHRlc3QuY29tXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwiZmFobWFkQGdtYWlsLmNvbVwifSxcclxuICAgIF07XHJcbiAgICBwdWJsaWMgY2xpY2tlZEl0ZW0gPSB7bmFtZTpcIlwifTtcclxuICAgICAgICBvbkl0ZW1DbGlja2VkKGl0ZW1MaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZEl0ZW0gPSBpdGVtTGlzdDtcclxuICAgICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
