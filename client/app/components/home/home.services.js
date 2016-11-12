System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HomeService;
    return {
        setters:[],
        execute: function() {
            HomeService = (function () {
                function HomeService() {
                }
                HomeService.prototype.getProjects = function () {
                    return [
                        { projectName: 'Some Project Name', userName: 'Jacob', views: 0, imgUrl: 'http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' },
                        { projectName: 'Some Project Name', userName: 'Mike', views: 0, imgUrl: 'https://patriciasdesignsite.files.wordpress.com/2015/01/wireframe11.jpg' },
                        { projectName: 'Some Project Name', userName: 'Nancy', views: 0, imgUrl: 'http://sharepoint.jsturges.com/files/2011/11/Contoso-Intranet-001-default-1024x623.png' },
                        { projectName: 'Some Project Name', userName: 'Cameron', views: 0, imgUrl: 'https://media.balsamiq.com/img/examples/wiki-sketch.png' },
                        { projectName: 'Some Project Name', userName: 'Jacob', views: 0, imgUrl: 'http://blogs.balsamiq.com/champions/files/2013/10/Bayside_wireframe_lg.png' },
                        { projectName: 'Some Project Name', userName: 'Mike', views: 0, imgUrl: 'https://media.balsamiq.com/img/examples/boogle-sketch.png' },
                        { projectName: 'Some Project Name', userName: 'Nancy', views: 0, imgUrl: 'https://daks2k3a4ib2z.cloudfront.net/img/site-placeholder@2x.png' },
                        { projectName: 'Some Project Name', userName: 'Cameron', views: 0, imgUrl: 'https://daks2k3a4ib2z.cloudfront.net/img/site-placeholder@2x.png' },
                        { projectName: 'Some Project Name', userName: 'Jacob', views: 0, imgUrl: 'https://daks2k3a4ib2z.cloudfront.net/img/site-placeholder@2x.png' }
                    ];
                };
                return HomeService;
            }());
            exports_1("HomeService", HomeService);
        }
    }
});
//# sourceMappingURL=home.services.js.map