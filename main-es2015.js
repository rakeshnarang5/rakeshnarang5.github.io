(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n        <main class=\"main d-flex align-items-center\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-6 mx-auto\">\n                <div class=\"card mx-4\">\n                  <div class=\"card-body p-4\">\n                    <form>\n                      <h1>Recover Password</h1>\n                      <p class=\"text-muted\">Enter your username and security answer</p>\n                      <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"recoveryDetails.username\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"username\" required>\n                      </div>\n                    \n                    \n\n                      <!-- security question -->\n                      <div class=\"input-group mb-4\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"What is the name of your First Employer? (Answer to this question will be used to recover your password)\" [(ngModel)]=\"recoveryDetails.securityAnswer\" [ngModelOptions]=\"{standalone: true}\"  required>\n                        </div>\n\n                      <button type=\"button\" (click)=\"recover()\" class=\"btn btn-block btn-success\">Recover Password</button>\n                    </form>\n                  </div>\n                 \n                </div>\n              </div>\n            </div>\n          </div>\n        </main>\n      </div>\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>form works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n    <main class=\"main d-flex align-items-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12 mx-auto\">\n                    <div class=\"card mx-4\">\n                        <div class=\"card-body p-4\">\n                            <form>\n                                <h1>In hand salary calculator</h1>\n                                <p class=\"text-muted\">Calculate your in hand salary.</p>\n\n                                <!--ctc input-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Total CTC:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\"\n                                        placeholder=\"enter your total cost to company\" [(ngModel)]=\"salaryDetails.ctc\"\n                                        [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"ctcChange($event)\"\n                                        required>\n                                </div>\n\n                                <!--basic input-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Monthly Basic Salary:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"enter your basic salary\"\n                                        [(ngModel)]=\"salaryDetails.basic\" [ngModelOptions]=\"{standalone: true}\"\n                                        [disabled]=\"true\" (ngModelChange)=\"basicChange()\" required>\n                                </div>\n\n                                <!--annual basic input-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Annual Basic Salary:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"annual basic salary\"\n                                        [(ngModel)]=\"salaryDetails.annualBasic\" [ngModelOptions]=\"{standalone: true}\"\n                                        [disabled]=\"true\" required>\n                                </div>\n\n                                <!--annual gratuity-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Annual Gratuity:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"salaryDetails.gratuity\"\n                                        [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                </div>\n\n                                <!--min basic checkbox-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Calculate PF on minimum basic salary?</span>\n                                    </div>\n                                    <input type=\"checkbox\" class=\"form-control\"\n                                        [(ngModel)]=\"salaryDetails.calcOnMinBasic\" [ngModelOptions]=\"{standalone: true}\"\n                                        (ngModelChange)=\"calcOnMinBasic()\" required>\n                                </div>\n\n                                <!--employer epf-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Annual Employer's EPF:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\"\n                                        placeholder=\"enter employer's contribution to epf\"\n                                        [(ngModel)]=\"salaryDetails.epfEmployer\" [ngModelOptions]=\"{standalone: true}\"\n                                        [disabled]=\"true\" required>\n                                </div>\n\n                                <!-- monthly employer epf-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Monthly Employer's EPF:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\"\n                                        placeholder=\"enter employer's contribution to epf\"\n                                        [(ngModel)]=\"salaryDetails.monthlyEpfEmployer\"\n                                        [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                </div>\n\n                                <!--employee epf-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Annual Employee's EPF:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\"\n                                        placeholder=\"enter employee's contribution to epf\"\n                                        [(ngModel)]=\"salaryDetails.epfEmployee\" [ngModelOptions]=\"{standalone: true}\"\n                                        [disabled]=\"true\" required>\n                                </div>\n\n                                <!--monthly epf-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Monthly Employee's EPF:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\"\n                                        placeholder=\"enter employee's contribution to epf\"\n                                        [(ngModel)]=\"salaryDetails.monthlyEpfEmployee\"\n                                        [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                </div>\n\n                                <!--hra-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Annual HRA in CTC:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"salaryDetails.hra\"\n                                        [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                </div>\n\n                                <!--hra-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Monthly HRA in CTC:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"salaryDetails.hraMonthly\"\n                                        [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                </div>\n\n                                <!--live in a metro checkbox-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Do you live in a metro city? (e.g. Delhi,\n                                            Mumbai)</span>\n                                    </div>\n                                    <input type=\"checkbox\" class=\"form-control\"\n                                        [(ngModel)]=\"salaryDetails.metroResident\" [ngModelOptions]=\"{standalone: true}\"\n                                        (ngModelChange)=\"metroResident()\" required>\n                                </div>\n\n                                <!--actual rent paid-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Actual Rent Paid:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\"\n                                        placeholder=\"enter the rent that you actually paid\"\n                                        [(ngModel)]=\"salaryDetails.rentPaid\" [ngModelOptions]=\"{standalone: true}\"\n                                        (ngModelChange)=\"rentPaidChange()\" required>\n                                </div>\n\n                                <!--annual hra exemption-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Annual HRA Exemption:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"salaryDetails.hraExemption\"\n                                        [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                </div>\n\n                                <!--opted for mediclaim?-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Have you opted for a mediclaim policy?</span>\n                                    </div>\n                                    <input type=\"checkbox\" class=\"form-control\"\n                                        [(ngModel)]=\"salaryDetails.optedForMediclaim\"\n                                        (ngModelChange)=\"optedForMediclaim()\" [ngModelOptions]=\"{standalone: true}\"\n                                        required>\n                                </div>\n\n                                <div *ngIf=\"salaryDetails.optedForMediclaim\" style=\"margin: 0 auto\">\n\n                                    <div style=\"margin-left: 50px\">\n                                        <!--mediclaim annual-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Annual mediclaim premium amount:</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.annualMediclaimAmount\"\n                                                placeholder=\"enter annual mediclaim amount\"\n                                                (ngModelChange)=\"annualMediclaimAmount()\"\n                                                [ngModelOptions]=\"{standalone: true}\" required>\n                                        </div>\n                                    </div>\n\n                                    <div style=\"margin-left: 50px\">\n                                        <!--mediclaim monthly-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Monthly mediclaim premium amount:</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.monthlyMediclaimAmount\" [disabled]=\"true\"\n                                                [ngModelOptions]=\"{standalone: true}\" required>\n                                        </div>\n                                    </div>\n\n\n                                </div>\n\n                                <!--80c-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">80C Investment Details:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"salaryDetails.invest80C\"\n                                        placeholder=\"enter 80C investment details\"\n                                        (ngModelChange)=\"invest80CChange($event)\" [ngModelOptions]=\"{standalone: true}\"\n                                        required>\n                                </div>\n\n                                <!--maximize 80c-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Do you want to maximize your 80C\n                                            investments?</span>\n                                    </div>\n                                    <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"salaryDetails.maximize80C\"\n                                        [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"maximize80C()\" required>\n                                </div>\n\n                                <!--food coupons-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Does your company offer food coupon\n                                            benefits?</span>\n                                    </div>\n                                    <input type=\"checkbox\" class=\"form-control\"\n                                        [(ngModel)]=\"salaryDetails.foodCouponsAvailable\"\n                                        (ngModelChange)=\"foodCouponsAvailable()\" [ngModelOptions]=\"{standalone: true}\"\n                                        required>\n                                </div>\n\n                                <div *ngIf=\"salaryDetails.foodCouponsAvailable\" style=\"margin: 0 auto\">\n\n                                    <div style=\"margin-left: 50px\">\n                                        <!--food coupons-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Would you like to opt for food\n                                                    coupons?</span>\n                                            </div>\n                                            <input type=\"checkbox\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.foodCouponsOpted\"\n                                                [ngModelOptions]=\"{standalone: true}\"\n                                                (ngModelChange)=\"foodCouponsOpted()\" required>\n                                        </div>\n                                    </div>\n\n                                    <div style=\"margin-left: 50px\">\n                                        <!--tax-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Food Coupons Deduction:</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.foodCouponsDeduction\"\n                                                [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <!--###-->\n                                <!--CAR LEASE SECTION-->\n                                <!--###-->\n\n                                <!--CAR LEASE-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Does your company offer car lease benefit?</span>\n                                    </div>\n                                    <input type=\"checkbox\" class=\"form-control\"\n                                        [(ngModel)]=\"salaryDetails.carLeaseAvailable\"\n                                        (ngModelChange)=\"carLeaseAvailable()\" [ngModelOptions]=\"{standalone: true}\"\n                                        required>\n                                </div>\n\n                                <div *ngIf=\"salaryDetails.carLeaseAvailable\" style=\"margin: 0 auto\">\n\n                                    <div style=\"margin-left: 50px\">\n                                        <!--CAR RENTAL AMOUNT-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Car rental amount (monthly):</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.monthlyCarLeaseAmount\"\n                                                [ngModelOptions]=\"{standalone: true}\"\n                                                (ngModelChange)=\"monthlyCarLeaseAmount()\" required>\n                                        </div>\n\n                                        <!--CAR RENTAL AMOUNT-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Car rental amount (yearly):</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.yearlyCarLeaseAmount\"\n                                                [ngModelOptions]=\"{standalone: true}\" required>\n                                        </div>\n                                    </div>\n\n                                    <div style=\"margin-left: 50px\">\n                                        <!--DRIVER'S SALARY DEDUCTION-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Driver's salary deduction\n                                                    (monthly):</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.monthlyDriversSalaryAmount\"\n                                                [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                        </div>\n\n                                        <!--DRIVER'S SALARY DEDUCTION-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Driver's salary deduction\n                                                    (yearly):</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.yearlyDriversSalaryAmount\"\n                                                [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                        </div>\n                                    </div>\n\n                                    <div style=\"margin-left: 50px\">\n                                        <!--FUEL AND MAINTAINENCE DEDUCTION-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Fuel and maintainence deduction\n                                                    (monthly):</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.monthlyFuelAndMaintainenceAmount\"\n                                                [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                        </div>\n\n                                        <!--FUEL AND MAINTAINENCE DEDUCTION-->\n                                        <div class=\"input-group mb-3\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\">Fuel and maintainence deduction\n                                                    (yearly):</span>\n                                            </div>\n                                            <input type=\"number\" class=\"form-control\"\n                                                [(ngModel)]=\"salaryDetails.yearlyFuelAndMaintainenceAmount\"\n                                                [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" required>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <!--tax-->\n                                <div class=\"input-group mb-3\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\">Net Taxable Income:</span>\n                                        </div>\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"tax\"\n                                            [(ngModel)]=\"salaryDetails.netTaxableIncome\" [ngModelOptions]=\"{standalone: true}\"\n                                            [disabled]=\"true\" required>\n                                    </div>\n\n                                <!--tax-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Tax:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"tax\"\n                                        [(ngModel)]=\"salaryDetails.tax\" [ngModelOptions]=\"{standalone: true}\"\n                                        [disabled]=\"true\" required>\n                                </div>\n\n                                <!--tax-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Monthly Tax:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"monthly tax\"\n                                        [(ngModel)]=\"salaryDetails.monthlyTax\" [ngModelOptions]=\"{standalone: true}\"\n                                        [disabled]=\"true\" required>\n                                </div>\n\n\n                                <!--in hand-->\n                                <div class=\"input-group mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">Net In hand:</span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"net in hand\"\n                                        [(ngModel)]=\"salaryDetails.inHand\" [ngModelOptions]=\"{standalone: true}\"\n                                        [disabled]=\"true\" required>\n                                </div>\n\n\n                                <button type=\"button\" (click)=\"submit()\"\n                                    class=\"btn btn-block btn-success\">Submit</button>\n                            </form>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </main>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n    <main class=\"main d-flex align-items-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 mx-auto\">\n            <div class=\"card-group\">\n              <div class=\"card p-4\">\n                <div class=\"card-body\">\n                  <form>\n                    <h1>Login</h1>\n                    <p class=\"text-muted\">Sign In to your account</p>\n                    <div class=\"input-group mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                      </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" [(ngModel)]=\"loginDetails.username\" [ngModelOptions]=\"{standalone: true}\" required>\n                    </div>\n                    <div class=\"input-group mb-4\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                      </div>\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\" [(ngModel)]=\"loginDetails.password\" [ngModelOptions]=\"{standalone: true}\" required>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-6\">\n                        <button type=\"button\" class=\"btn btn-primary px-4\" (click)=\"login()\">Login</button>\n                      </div>\n                      <div class=\"col-6 text-right\">\n                        <button  type=\"button\" class=\"btn btn-link px-0\" (click)=\"forgotPassword()\">Forgot password?</button>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n                <div class=\"card-body text-center\">\n                  <div>\n                    <h2>Sign up</h2>\n                    <p>Sign up right now to get a host of benefits. This is one the only websites that give you the best content.</p>\n                    <button type=\"button\" (click)=\"register()\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n        <main class=\"main d-flex align-items-center\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-6 mx-auto\">\n                <div class=\"card mx-4\">\n                  <div class=\"card-body p-4\">\n                    <form>\n                      <h1>Register</h1>\n                      <p class=\"text-muted\">Create your account</p>\n                      <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"user.username\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"username\" required>\n                      </div>\n                      <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">@</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\" required>\n                      </div>\n                      <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" [(ngModel)]=\"user.password\" [ngModelOptions]=\"{standalone: true}\" required>\n                      </div>\n                      <div class=\"input-group mb-4\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" [(ngModel)]=\"user.repeatPassword\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"new-password\" required>\n                      </div>\n\n                      <!-- security question -->\n                      <div class=\"input-group mb-4\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"What is the name of your First Employer? (Answer to this question will be used to recover your password)\" [(ngModel)]=\"user.firstEmployer\" [ngModelOptions]=\"{standalone: true}\"  required>\n                        </div>\n\n                      <button type=\"button\" (click)=\"register()\" class=\"btn btn-block btn-success\">Create Account</button>\n                    </form>\n                  </div>\n                  <div class=\"card-footer p-4\">\n                    <div class=\"row\">\n                      <div class=\"col-6\">\n                        <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n                      </div>\n                      <div class=\"col-6\">\n                        <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </main>\n      </div>\n      ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");












const appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"] },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_recoveryDetails_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/recoveryDetails.model */ "./src/app/models/recoveryDetails.model.ts");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.recoveryDetails = new _models_recoveryDetails_model__WEBPACK_IMPORTED_MODULE_4__["RecoveryDetails"]();
    }
    recover() {
        let password = this.userService.recoverPassword(this.recoveryDetails);
        if (null == password) {
            return;
        }
        this.router.navigate(["/login"]);
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormComponent = class FormComponent {
    constructor() { }
    ngOnInit() {
    }
};
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_salary_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/salary-details.model */ "./src/app/models/salary-details.model.ts");



let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        this.salaryDetails = new _models_salary_details_model__WEBPACK_IMPORTED_MODULE_2__["SalaryDetails"]();
        this.salaryDetails.ctc = 0;
        this.salaryDetails.basic = 0;
        this.salaryDetails.annualBasic = 0;
        this.salaryDetails.calcOnMinBasic = false;
        this.salaryDetails.epfEmployer = 0;
        this.salaryDetails.epfEmployee = 0;
        this.salaryDetails.inHand = 0;
        this.salaryDetails.tax = 0;
        this.salaryDetails.monthlyEpfEmployer = 0;
        this.salaryDetails.monthlyEpfEmployee = 0;
        this.salaryDetails.hra = 0;
        this.salaryDetails.metroResident = false;
        this.salaryDetails.rentPaid = 0;
        this.salaryDetails.hraMonthly = 0;
        this.salaryDetails.hraExemption = 0;
        this.salaryDetails.invest80C = 0;
        this.salaryDetails.monthlyTax = 0;
        this.salaryDetails.gratuity = 0;
        this.salaryDetails.maximize80C = false;
        this.salaryDetails.foodCouponsAvailable = false;
        this.salaryDetails.foodCouponsOpted = false;
        this.salaryDetails.foodCouponsDeduction = 0;
        this.salaryDetails.carLeaseAvailable = false;
        this.salaryDetails.optedForMediclaim = false;
        this.salaryDetails.annualMediclaimAmount = 0;
        this.salaryDetails.monthlyMediclaimAmount = 0;
        this.resetCarLeaseDriversSalaryFuelAndMaintainence();
        this.salaryDetails.netTaxableIncome = 0;
    }
    ctcChange(val) {
        this.salaryDetails.basic = (val * 0.4) / 12;
        this.basicChange();
    }
    basicChange() {
        if (!this.validateBasic()) {
            this.salaryDetails.basic = (this.salaryDetails.ctc * 0.4) / 12;
        }
        this.salaryDetails.annualBasic = this.salaryDetails.basic * 12;
        this.salaryDetails.gratuity = this.salaryDetails.annualBasic * 0.0481;
        this.calcBasic();
        this.calcHraAndExemption(this.salaryDetails.metroResident ? 0.5 : 0.4);
        this.calcTax();
        this.calcInHand();
    }
    calcHraAndExemption(rate) {
        this.salaryDetails.hra = this.salaryDetails.annualBasic * rate;
        this.salaryDetails.hraMonthly = this.salaryDetails.hra / 12;
    }
    validateBasic() {
        if (this.salaryDetails.basic * 12 > this.salaryDetails.ctc) {
            alert("Basic pay cannot be greater than 40% of Ctc: " + (this.salaryDetails.ctc * 0.4) / 12);
            return false;
        }
        return true;
    }
    calcOnMinBasic() {
        this.calcBasic();
        this.calcTax();
        this.calcInHand();
    }
    calcBasic() {
        if (this.salaryDetails.calcOnMinBasic && this.salaryDetails.basic >= 15000) {
            this.salaryDetails.epfEmployee = 15000 * 0.12;
            this.salaryDetails.epfEmployer = 15000 * 0.12;
        }
        else {
            this.salaryDetails.epfEmployee = this.salaryDetails.basic * 0.12;
            this.salaryDetails.epfEmployer = this.salaryDetails.basic * 0.12;
        }
        this.salaryDetails.monthlyEpfEmployee = this.salaryDetails.epfEmployee;
        this.salaryDetails.monthlyEpfEmployer = this.salaryDetails.epfEmployer;
        this.salaryDetails.epfEmployee = this.salaryDetails.epfEmployee * 12;
        this.salaryDetails.epfEmployer = this.salaryDetails.epfEmployer * 12;
        this.salaryDetails.invest80C = this.salaryDetails.maximize80C ? 150000 : this.salaryDetails.epfEmployee;
    }
    calcTax() {
        let netTaxable = this.salaryDetails.ctc - this.salaryDetails.yearlyCarLeaseAmount - this.salaryDetails.yearlyDriversSalaryAmount - this.salaryDetails.yearlyFuelAndMaintainenceAmount - this.salaryDetails.annualMediclaimAmount - this.salaryDetails.foodCouponsDeduction - this.salaryDetails.invest80C - this.salaryDetails.gratuity - this.salaryDetails.epfEmployer - this.salaryDetails.hraExemption - 40000;
        if (netTaxable <= 500000) {
            this.salaryDetails.tax = 0;
        }
        else if (netTaxable > 500000 && netTaxable <= 1000000) {
            this.salaryDetails.tax = 12500 + (netTaxable - 500000) * 0.2;
        }
        else {
            this.salaryDetails.tax = 12500 + 100000 + (netTaxable - 1000000) * 0.3;
        }
        this.salaryDetails.netTaxableIncome = netTaxable;
        this.salaryDetails.monthlyTax = this.salaryDetails.tax / 12;
    }
    calcInHand() {
        this.salaryDetails.inHand = (this.salaryDetails.ctc - this.salaryDetails.epfEmployee - this.salaryDetails.gratuity - this.salaryDetails.epfEmployer - this.salaryDetails.tax) / 12;
    }
    submit() {
    }
    metroResident() {
        if (this.salaryDetails.metroResident) {
            this.calcHraAndExemption(0.5);
        }
        else {
            this.calcHraAndExemption(0.4);
        }
        this.calcTax();
        this.calcInHand();
    }
    rentPaidChange() {
        let rentPaidMinus10Basic = 0;
        if (this.salaryDetails.rentPaid != null && this.salaryDetails.rentPaid > 0) {
            rentPaidMinus10Basic = (this.salaryDetails.rentPaid - (this.salaryDetails.basic * 0.1));
        }
        if (rentPaidMinus10Basic > 0 && rentPaidMinus10Basic < this.salaryDetails.hraMonthly) {
            this.salaryDetails.hraExemption = rentPaidMinus10Basic * 12;
            this.calcTax();
            this.calcInHand();
        }
        else if (rentPaidMinus10Basic > 0) {
            this.salaryDetails.hraExemption = this.salaryDetails.hra;
        }
        else {
            this.salaryDetails.hraExemption = 0;
        }
        this.calcTax();
        this.calcInHand();
    }
    invest80CChange(val) {
        if (val > 150000) {
            alert("80C Investments cannot be greater than 150000");
            this.salaryDetails.invest80C = 150000;
        }
        this.calcTax();
        this.calcInHand();
    }
    maximize80C() {
        if (this.salaryDetails.maximize80C) {
            this.salaryDetails.invest80C = 150000;
        }
        else {
            this.salaryDetails.invest80C = this.salaryDetails.epfEmployee;
        }
        this.calcTax();
        this.calcInHand();
    }
    foodCouponsOpted() {
        if (this.salaryDetails.foodCouponsOpted) {
            this.salaryDetails.foodCouponsDeduction = 2200 * 12;
        }
        else {
            this.salaryDetails.foodCouponsDeduction = 0;
        }
        this.calcTax();
        this.calcInHand();
    }
    foodCouponsAvailable() {
        this.salaryDetails.foodCouponsDeduction = 0;
        this.salaryDetails.foodCouponsOpted = false;
        this.calcTax();
        this.calcInHand();
    }
    optedForMediclaim() {
        if (!this.salaryDetails.optedForMediclaim) {
            this.salaryDetails.monthlyMediclaimAmount = 0;
            this.salaryDetails.annualMediclaimAmount = 0;
        }
        this.calcTax();
        this.calcInHand();
    }
    annualMediclaimAmount() {
        this.salaryDetails.monthlyMediclaimAmount = this.salaryDetails.annualMediclaimAmount / 12;
        this.calcTax();
        this.calcInHand();
    }
    carLeaseAvailable() {
        if (!this.salaryDetails.carLeaseAvailable) {
            this.resetCarLeaseDriversSalaryFuelAndMaintainence();
        }
        this.calcTax();
        this.calcInHand();
    }
    resetCarLeaseDriversSalaryFuelAndMaintainence() {
        this.salaryDetails.monthlyCarLeaseAmount = 0;
        this.salaryDetails.monthlyDriversSalaryAmount = 0;
        this.salaryDetails.monthlyFuelAndMaintainenceAmount = 0;
        this.salaryDetails.yearlyCarLeaseAmount = 0;
        this.salaryDetails.yearlyDriversSalaryAmount = 0;
        this.salaryDetails.yearlyFuelAndMaintainenceAmount = 0;
    }
    monthlyCarLeaseAmount() {
        if (this.salaryDetails.monthlyCarLeaseAmount > 0) {
            this.salaryDetails.yearlyCarLeaseAmount = this.salaryDetails.monthlyCarLeaseAmount * 12;
            this.salaryDetails.monthlyDriversSalaryAmount = 15000;
            this.salaryDetails.yearlyDriversSalaryAmount = this.salaryDetails.monthlyDriversSalaryAmount * 12;
            this.salaryDetails.monthlyFuelAndMaintainenceAmount = 15000;
            this.salaryDetails.yearlyFuelAndMaintainenceAmount = this.salaryDetails.monthlyFuelAndMaintainenceAmount * 12;
        }
        else {
            this.resetCarLeaseDriversSalaryFuelAndMaintainence();
        }
        this.calcTax();
        this.calcInHand();
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_loginDetails_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/loginDetails.model */ "./src/app/models/loginDetails.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.loginDetails = new _models_loginDetails_model__WEBPACK_IMPORTED_MODULE_3__["LoginDetails"]();
    }
    register() {
        console.log("register called");
        this.router.navigate(['/register']);
    }
    login() {
        let user = this.userService.login(this.loginDetails);
        if (user == null) {
            return;
        }
        this.router.navigate(["/home"]);
    }
    forgotPassword() {
        this.router.navigate(["/forgot-password"]);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/models/loginDetails.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/loginDetails.model.ts ***!
  \**********************************************/
/*! exports provided: LoginDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDetails", function() { return LoginDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LoginDetails {
}
;


/***/ }),

/***/ "./src/app/models/recoveryDetails.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/recoveryDetails.model.ts ***!
  \*************************************************/
/*! exports provided: RecoveryDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryDetails", function() { return RecoveryDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class RecoveryDetails {
}
;


/***/ }),

/***/ "./src/app/models/salary-details.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/salary-details.model.ts ***!
  \************************************************/
/*! exports provided: SalaryDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryDetails", function() { return SalaryDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SalaryDetails {
}


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}
;


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        if (null == this.user) {
            this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        }
    }
    ngOnInit() {
    }
    register() {
        if (!this.validatePassword()) {
            alert("Passwords do not match.");
            return;
        }
        console.log(this.user);
        this.userService.createUser(this.user);
        alert("User created successfully.");
        this.router.navigate(["/login"]);
    }
    validatePassword() {
        return this.user.password === this.user.repeatPassword;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserService = class UserService {
    constructor() {
        this.allUsers = [];
    }
    recoverPassword(recoveryDetails) {
        let user = this.findUserByName(recoveryDetails.username);
        console.log(user);
        if (user.length === 0) {
            alert("User doesn't exist.");
            return null;
        }
        console.log("reacher 1");
        console.log("user[0].firstEmployer: " + user[0].firstEmployer);
        console.log("recoveryDetails.securityAnswer: " + recoveryDetails.securityAnswer);
        console.log(user[0].firstEmployer === recoveryDetails.securityAnswer);
        if (user[0].firstEmployer === recoveryDetails.securityAnswer) {
            console.log("reacher 2");
            alert("Password is: " + user[0].password);
            return user[0].password;
        }
        alert("Security answer is incorrect");
        return null;
    }
    createUser(user) {
        this.allUsers.push(user);
        console.log(this.allUsers);
    }
    login(loginDetails) {
        let user = this.findUserByName(loginDetails.username);
        if (user.length === 0) {
            alert("User doesn't exist.");
            return;
        }
        if (user.length >= 1) {
            if (user[0].password !== loginDetails.password) {
                alert("Password is incorrect.");
                return null;
            }
            return user[0];
        }
        return null;
    }
    findUserByName(username) {
        return this.allUsers.filter(p => p.username === username);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/b0214311/angular/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map