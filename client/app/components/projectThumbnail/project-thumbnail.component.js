System.register(['angular2/core', '../../directives/thumbnail-hover.directive.js'], function(exports_1, context_1) {
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
    var core_1, thumbnail_hover_directive_js_1;
    var ProjectThumbnailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (thumbnail_hover_directive_js_1_1) {
                thumbnail_hover_directive_js_1 = thumbnail_hover_directive_js_1_1;
            }],
        execute: function() {
            ProjectThumbnailComponent = (function () {
                function ProjectThumbnailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProjectThumbnailComponent.prototype, "projects", void 0);
                ProjectThumbnailComponent = __decorate([
                    core_1.Component({
                        selector: 'project-thumbnail',
                        templateUrl: './client/app/components/projectThumbnail/project-thumbnail.html',
                        directives: [thumbnail_hover_directive_js_1.HoverDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProjectThumbnailComponent);
                return ProjectThumbnailComponent;
            }());
            exports_1("ProjectThumbnailComponent", ProjectThumbnailComponent);
        }
    }
});
//# sourceMappingURL=project-thumbnail.component.js.map