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
var message_1 = require('./message');
var MessageComponent = (function () {
    function MessageComponent() {
        this.message = new message_1.Message('The content', null, 'Rifki');
    }
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "\n    <div class=\"row\">\n    <section class=\"col-md-8 col-md-offset-2\">\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                 {{message.content}}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{message.username}}\n                </div>\n                <div class=\"config\">\n                    <a href=\"#\">Edit</a>\n                    <a href=\"#\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    </section>\n    </div>\n    ",
            styles: ['.author {display: inline-block; font-style: italic; font-size: 12px; width: 80%;} .config {display: inline-block; font-size: 12px; text-align: right; width: 19%;}'
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBOEJwQztJQUFBO1FBQ0ksWUFBTyxHQUFXLElBQUksaUJBQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUE1QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLDhsQkFtQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxvS0FBb0s7YUFDNUs7U0FDSixDQUFDOzt3QkFBQTtJQUlGLHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx3QkFBZ0IsbUJBRTVCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlLWlucHV0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01lc3NhZ2VMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlLWxpc3QuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICB7e21lc3NhZ2UuY29udGVudH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFsnLmF1dGhvciB7ZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXN0eWxlOiBpdGFsaWM7IGZvbnQtc2l6ZTogMTJweDsgd2lkdGg6IDgwJTt9IC5jb25maWcge2Rpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOiByaWdodDsgd2lkdGg6IDE5JTt9J1xyXG4gICAgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgIG1lc3NhZ2U6TWVzc2FnZSA9IG5ldyBNZXNzYWdlKCdUaGUgY29udGVudCcsIG51bGwsICdSaWZraScpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
