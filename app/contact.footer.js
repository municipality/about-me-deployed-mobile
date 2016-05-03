System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ContactFooter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactFooter = (function () {
                function ContactFooter() {
                    this.name = "Brian Lee";
                    this.email = "ucsdblee@gmail.com";
                    this.years = "2016";
                }
                ContactFooter = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n        <div id=\"contact-footer\">\n            <p class=\"section-header\">Contact Information</p>\n            <p class=\"icon email-icon\">Email : {{email}}</p>\n            <p>Built with Angular2</p>\n            <p>&copy;{{name}} {{years}}</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactFooter);
                return ContactFooter;
            }());
            exports_1("ContactFooter", ContactFooter);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5mb290ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmZvb3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUFBO29CQUNJLFNBQUksR0FBWSxXQUFXLENBQUM7b0JBQzVCLFVBQUssR0FBWSxvQkFBb0IsQ0FBQztvQkFDdEMsVUFBSyxHQUFZLE1BQU0sQ0FBQztnQkFDNUIsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsU0FBUzt3QkFDcEIsUUFBUSxFQUFHLG1SQU9WO3FCQUNKLENBQUM7O2lDQUFBO2dCQU1GLG9CQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCx5Q0FJQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnY29udGFjdCcsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWN0LWZvb3RlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPkNvbnRhY3QgSW5mb3JtYXRpb248L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImljb24gZW1haWwtaWNvblwiPkVtYWlsIDoge3tlbWFpbH19PC9wPlxuICAgICAgICAgICAgPHA+QnVpbHQgd2l0aCBBbmd1bGFyMjwvcD5cbiAgICAgICAgICAgIDxwPiZjb3B5O3t7bmFtZX19IHt7eWVhcnN9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RGb290ZXIge1xuICAgIG5hbWUgOiBzdHJpbmcgPSBcIkJyaWFuIExlZVwiO1xuICAgIGVtYWlsIDogc3RyaW5nID0gXCJ1Y3NkYmxlZUBnbWFpbC5jb21cIjtcbiAgICB5ZWFycyA6IHN0cmluZyA9IFwiMjAxNlwiO1xufVxuIl19