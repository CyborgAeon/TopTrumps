import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var TopTrumpsDataService = /** @class */ (function () {
    function TopTrumpsDataService(http) {
        this.http = http;
    }
    TopTrumpsDataService.prototype.getDecks = function () {
        var decks = this.http.get("api/deck");
        return decks;
    };
    TopTrumpsDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TopTrumpsDataService);
    return TopTrumpsDataService;
}());
export { TopTrumpsDataService };
//# sourceMappingURL=top-trumps-data.service.js.map