'use strict';

// Declare app level module which depends on views, and components
angular.module('MathHammer', ['LocalStorageModule', 'ngAnimate','ui.bootstrap'])
.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('MathHammer');
});
