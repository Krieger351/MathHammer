'use strict';

// Declare app level module which depends on views, and components
angular.module('MathHammer', ['LocalStorageModule']).config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('MathHammer');
});
