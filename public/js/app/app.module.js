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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var http_1 = require("@angular/http");
var ChatWindow_1 = require('./components/ChatWindow');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                ChatWindow_1.ChatWindow
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxzQkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvQyw4QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsMkJBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFpQnREO0lBQUE7SUFBeUIsQ0FBQztJQVoxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxnQ0FBYTtnQkFDYixtQkFBVztnQkFDWCxpQkFBVTthQUNYO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLHVCQUFVO2FBQ1g7WUFDRCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO1NBQzVCLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgQ2hhdFdpbmRvdyB9ICBmcm9tICcuL2NvbXBvbmVudHMvQ2hhdFdpbmRvdyc7XG5pbXBvcnQgeyBVc2VyR3JvdXAgfSAgZnJvbSAnLi9jb21wb25lbnRzL1VzZXJHcm91cCc7XG5pbXBvcnQgeyBDaGF0VGhyZWFkIH0gIGZyb20gJy4vY29tcG9uZW50cy9DaGF0VGhyZWFkJztcbmltcG9ydCB7TGlzdH0gZnJvbSAnLi91dGlsL0xpc3QnXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBDaGF0V2luZG93XG4gIF0sXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
