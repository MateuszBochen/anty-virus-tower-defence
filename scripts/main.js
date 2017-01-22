console.log(2);


import angular from 'angular';


import MainComponent from './containers/Main/component';
import Game from './game/Game';

angular.module('app', [])
.component('main', MainComponent)
.service('Game', Game);