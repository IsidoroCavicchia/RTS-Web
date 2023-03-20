"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var environment_url_service_1 = require("./environment-url.service");
describe('EnvironmentUrlService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(environment_url_service_1.EnvironmentUrlService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=environment-url.service.spec.js.map