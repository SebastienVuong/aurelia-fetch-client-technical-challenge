define('app',["require", "exports", "./datafetch"], function (require, exports, datafetch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            var _this = this;
            this.users = [];
            datafetch_1.DataLoader.fetchData()
                .then(function (data) {
                var refinedData = data.results.map(function (user) {
                    var refinedOutput = {
                        login: user.login,
                        gender: user.gender,
                        name: user.name,
                        email: user.email,
                        picture: user.picture
                    };
                    return refinedOutput;
                });
                refinedData.forEach(function (user, idx) {
                    refinedData[idx].name.first = user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
                    refinedData[idx].name.last = user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);
                    refinedData[idx].name.title = user.name.title.charAt(0).toUpperCase() + user.name.title.slice(1);
                });
                _this.users = refinedData;
            });
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUdJO1lBQUEsaUJBeUJDO1lBeEJHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLHNCQUFVLENBQUMsU0FBUyxFQUFFO2lCQUNqQixJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNOLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtvQkFDbkMsSUFBSSxhQUFhLEdBQUc7d0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87cUJBQ3hCLENBQUM7b0JBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBR0gsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBQyxHQUFHO29CQUN6QixXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RixXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRyxDQUFDLENBQUMsQ0FBQTtnQkFHRixLQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtJQTdCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFMb2FkZXJ9IGZyb20gXCIuL2RhdGFmZXRjaFwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICB1c2VyczogQXJyYXk8T2JqZWN0PjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51c2VycyA9IFtdO1xuICAgICAgICBEYXRhTG9hZGVyLmZldGNoRGF0YSgpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVmaW5lZERhdGEgPSBkYXRhLnJlc3VsdHMubWFwKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmaW5lZE91dHB1dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOiB1c2VyLmdlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogdXNlci5waWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZpbmVkT3V0cHV0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENhcGl0YWxpemluZyBmaXJzdCBsZXR0ZXJcbiAgICAgICAgICAgICAgICByZWZpbmVkRGF0YS5mb3JFYWNoKCh1c2VyLGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWZpbmVkRGF0YVtpZHhdLm5hbWUuZmlyc3QgPSB1c2VyLm5hbWUuZmlyc3QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyLm5hbWUuZmlyc3Quc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZmluZWREYXRhW2lkeF0ubmFtZS5sYXN0ID0gdXNlci5uYW1lLmxhc3QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyLm5hbWUubGFzdC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmaW5lZERhdGFbaWR4XS5uYW1lLnRpdGxlID0gdXNlci5uYW1lLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdXNlci5uYW1lLnRpdGxlLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLypSZXBldGVkIGZ1bmN0aW9uYWxpdHksIHdvdWxkIHVzdWFsbHkgd3JpdGUgYSBmdW5jdGlvbiB0byBjYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIqL1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZWZpbmVkRGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('datafetch',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataLoader = (function () {
        function DataLoader() {
        }
        DataLoader.fetchData = function () {
            var client = new aurelia_fetch_client_1.HttpClient();
            var dataSize = 20;
            var url = "https://randomuser.me/api/?results=" + dataSize;
            return client.fetch(url)
                .then(function (res) { return res.json(); })
                .catch(function (err) {
                console.log('fetchData failed');
                throw new Error(err);
            });
        };
        return DataLoader;
    }());
    exports.DataLoader = DataLoader;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFmZXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBY0EsQ0FBQztRQVpVLG9CQUFTLEdBQWhCO1lBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7WUFDaEMsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQU0sR0FBRyxHQUFHLHdDQUFzQyxRQUFVLENBQUM7WUFFN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNuQixJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2lCQUN2QixLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtnQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFDTCxpQkFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZFksZ0NBQVUiLCJmaWxlIjoiZGF0YWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhTG9hZGVyIHtcbiAgICAvLyBEYXRhIEZldGNoZXJcbiAgICBzdGF0aWMgZmV0Y2hEYXRhKCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICAgICBjb25zdCBkYXRhU2l6ZSA9IDIwO1xuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8/cmVzdWx0cz0ke2RhdGFTaXplfWA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmZXRjaERhdGEoKScpOyAvLyBUUkFDS0VSXG4gICAgICAgIHJldHVybiBjbGllbnQuZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2hEYXRhIGZhaWxlZCcpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('styles.css!text', ['module'], function(module) { module.exports = "body {\n    background-color: lightyellow;\n    display: flex;\n    flex-flow: row wrap;\n}\n\n.profile-picture {\n    border-radius: 50%;\n}\n\n.top-row {\n    display: flex;\n    flex-flow: row nowrap;\n}\n\n.username {\n    width: 250px;\n    padding-left: 10px;\n}\n\n.user {\n    border-color: dimgray;\n    border-style: solid;\n    border-width: thin;\n    margin: 20px;\n    padding: 10px;\n    box-shadow: 10px 10px 3px 0px rgba(107,107,107,1);\n    transition: 0.5s;\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 300px;\n    height: 100px;\n}\n\n.user:hover {\n    background-color: plum;\n    position: relative;\n    left: 2px;\n    top: 2px;\n    width: 296px;\n    height: 96px;\n    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);\n    margin-right: 24px;\n}\n\n.male {\n    background-color: powderblue;\n}\n\n.female {\n    background-color: mistyrose;\n}"; });
define('app.html!text', ['module'], function(module) { module.exports = "<template><div class=\"user ${user.gender}\" repeat.for=\"user of users\"><div class=\"top-row\"><img class=\"profile-picture\" src.bind=\"user.picture.thumbnail\"><p class=\"username\">${user.login.username}</p></div><div class=\"user-details\"><p class=\"fullname\">${user.name.title} ${user.name.first} ${user.name.last}</p></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map