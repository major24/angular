"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
describe('App', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [app_component_1.AppComponent] });
    });
    it('should work', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(false, 'should create AppComponent');
    });
    describe('Meaningful Testxx', () => {
    it('1 + 1 => 2', () => {
        expect(1 + 1).toBe(2);
    });
});
});