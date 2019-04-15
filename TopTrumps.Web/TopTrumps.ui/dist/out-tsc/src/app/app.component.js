import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TopTrumpsDataService } from './top-trumps-data.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(deckGetter) {
        var _this = this;
        this.title = 'TopTrumps';
        deckGetter.getDecks().subscribe(function (e) { return _this.decks = e; });
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TopTrumpsDataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map