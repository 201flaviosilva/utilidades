# Change Log

## Description
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

This file was based on [this template](https://gist.github.com/juampynr/4c18214a8eb554084e21d6e288a18a2c).

----
## [1.2.0 - More Functions](https://github.com/201flaviosilva-labs/javascript-utils/milestone/2)

## [1.2.10] - 21-10-2022
 
### Added
- [Add some Sorting Algorithm](https://github.com/201flaviosilva-labs/javascript-utils/commit/5d248aa08a3f4de28843aa5c788bfe9cc55f9fda);
- [Array New Sort](https://github.com/201flaviosilva-labs/javascript-utils/commit/9260d39f2d567705d09aa0ee2b69fec2a429b3c2) - Return a new array sorted based in the given one;
- [Array Is Sorted](https://github.com/201flaviosilva-labs/javascript-utils/commit/9260d39f2d567705d09aa0ee2b69fec2a429b3c2) - Check if the array is sorted;
- [Get Position With Angle Distance](https://github.com/201flaviosilva-labs/javascript-utils/commit/80b83a7f35508d9997fb95bf2b6af066b8b4e553);
- [Is Falsy](https://github.com/201flaviosilva-labs/javascript-utils/commit/25b13f2b7fc66c01e6709ac8adee2e57f79fc5fd) #84;
- [Is Truthy](https://github.com/201flaviosilva-labs/javascript-utils/commit/25b13f2b7fc66c01e6709ac8adee2e57f79fc5fd) #84;
- [getBrowser](https://github.com/201flaviosilva-labs/javascript-utils/commit/c81f718f9497adc9f69f057950f7594b12dfa52d) - Returns the browser name #44;
- [getBrowserVersion](https://github.com/201flaviosilva-labs/javascript-utils/commit/c81f718f9497adc9f69f057950f7594b12dfa52d) - Returns the browser version #44;
- [getOS](https://github.com/201flaviosilva-labs/javascript-utils/commit/c81f718f9497adc9f69f057950f7594b12dfa52d) - Returns the OS name #44;
- [getOSVersion](https://github.com/201flaviosilva-labs/javascript-utils/commit/c81f718f9497adc9f69f057950f7594b12dfa52d) - Returns the OS version #44;
- [isMobile](https://github.com/201flaviosilva-labs/javascript-utils/commit/c81f718f9497adc9f69f057950f7594b12dfa52d) - Check if is in a mobile device #44;

### Changed
- [Add more examples to the functions](https://github.com/201flaviosilva-labs/javascript-utils/commit/06c75f5b84da32b9af4521eab48afc3d4982a8aa);
- [`and` and `or` can receive infinity args](https://github.com/201flaviosilva-labs/javascript-utils/commit/2473d089c7a699650abfce108425ee0d479ce7e7) #88;
 
### Fixed

#### Breaking Changes
- Move project from GitLab to GitHub;
- Change some functions names to array function;
- [Move `toggleFullScreen` to `DOM/toggleFullScreen`](https://github.com/201flaviosilva-labs/javascript-utils/commit/2c0e9f8d293c68f36e9297b70c18321678e40921);
- [Only export `getDate` function from `getDate` file](https://github.com/201flaviosilva-labs/javascript-utils/commit/2c0e9f8d293c68f36e9297b70c18321678e40921);
- [Removed `nand`, `nor`, `not` and `xnor`](https://github.com/201flaviosilva-labs/javascript-utils/commit/2473d089c7a699650abfce108425ee0d479ce7e7) #88;
- [Move array functions to a folder](https://github.com/201flaviosilva-labs/javascript-utils/commit/237cbf42f22131dd83c5126107f21b32ce33e232) #89;
- [Move date function to device folder/namespace](https://github.com/201flaviosilva-labs/javascript-utils/commit/c81f718f9497adc9f69f057950f7594b12dfa52d);
- [Removed Games](https://github.com/201flaviosilva-labs/javascript-utils/commit/40367810b608d5271f2795df44ec4e7dea02fd29);


## [1.2.9] - 02-09-2022
 
### Added
- [Random Walk](https://github.com/201flaviosilva-labs/javascript-utils/commit/56eebcaac033c05401140c4418b54e9579fb8d38) #46;
- [Binary Search Tree](https://github.com/201flaviosilva-labs/javascript-utils/commit/b141db4e7a0089a7c99a9ca8a70f7a37f73d59ef) #11;

### Changed
- ["Skip" zones in range](https://github.com/201flaviosilva-labs/javascript-utils/commit/b0d7a1d585f194c093ba22f621ebf71a0d5ce793) #68;
 
### Fixed
- [Median](https://github.com/201flaviosilva-labs/javascript-utils/commit/bb9e8d4aba6f64cc6752b7f0853460c2edc03d74);

### Breaking Changes
 - `findBigArrObj` and `getMaxArrayObjects` change to `arrayFindBigObject` #74;
 - `findLowArrObj` and `getMinArrayObjects` change to `arrayFindLowObject` #74;
 - `sortAscending` change to `arraySortAscending` #74;
 - `sortAscendingObj` change to `arraySortAscendingObject` #74;
 - `sortDescending` change to `arraySortDescending` #74;
 - `sortDescendingObj` change to `arraySortDescendingObject` #74;

### [1.2.8] - 22-07-2022
 
#### Added
- [(DOM) KeyboardManager - A basic keyboard manager (like check if the key is pressed)](https://github.com/201flaviosilva-labs/javascript-utils/commit/985b59849d66b1d00b5e5660f66e1fb8c87eaad4) #3;
- [(DOM) MouseManager - A basic mouse manager (like check if a button is pressed)](https://github.com/201flaviosilva-labs/javascript-utils/commit/caa9e7bd9c1fe82280a0abf13b61b488ac792a60) #4;
- [divideEvenly - Returns a array with the dived evenly between the two numbers](https://github.com/201flaviosilva-labs/javascript-utils/commit/95da63534f0a346cc82041303ef991e2bb2d0973) #55;
- [isObjectEmpty - check if a array is empty](https://github.com/201flaviosilva-labs/javascript-utils/commit/6d5a1c55256c2663c5d3ece18c6bc360b5fd4b1d);
- [Median - Returns the median of the givens numbers](https://github.com/201flaviosilva-labs/javascript-utils/commit/fd8bd65ca24ac7696db29b1c76a25fbd69273a65) #53;
- [Mode](https://github.com/201flaviosilva-labs/javascript-utils/commit/fd8bd65ca24ac7696db29b1c76a25fbd69273a65) #53;

#### Changed
- [moved random numbers functions to the randomNumber.js file;](https://github.com/201flaviosilva-labs/javascript-utils/commit/b46c29d9c16641781f018746a0037afe0dcec83a)
- [moved random colors functions to the randomColor.js file](https://github.com/201flaviosilva-labs/javascript-utils/commit/b46c29d9c16641781f018746a0037afe0dcec83a);
 
#### Fixed
- [randomInt - Fix return a number between the given min and max;](https://github.com/201flaviosilva-labs/javascript-utils/commit/9e250dbcad6044a1e1b669a2d77bfd45df64060e)
- [arrayChoice - Fixed not returning the last element](https://github.com/201flaviosilva-labs/javascript-utils/commit/9e250dbcad6044a1e1b669a2d77bfd45df64060e);
- [isObjectEmpty - Check is the given object is empty](https://github.com/201flaviosilva-labs/javascript-utils/commit/6d5a1c55256c2663c5d3ece18c6bc360b5fd4b1d);

#### Breaking Changes
 - [rockPaperScissor - move to /Games folder](https://github.com/201flaviosilva-labs/javascript-utils/commit/29b31bdc1fd60790e071d0429b4790f9d5a9d082) #60;
 - [exportFile - move to /DOM folder](https://github.com/201flaviosilva-labs/javascript-utils/commit/fd8bd65ca24ac7696db29b1c76a25fbd69273a65);

### [1.2.7] - 15-07-2022
#### Added
 - [Full Screen](https://github.com/201flaviosilva-labs/javascript-utils/commit/cedd102ff36ffd712d0d20be30f21b9003253027) #41;
 - [arrayRandom](https://github.com/201flaviosilva-labs/javascript-utils/commit/cbdb864e76c5b7d8379352f3524a6a1d85f171fb);

### [1.2.6] - 08-07-2022
 
#### Added
- [recursiveFibonacci](https://github.com/201flaviosilva-labs/javascript-utils/commit/04dc0aaf31690f39e37f110ce8e6d9e0df56803c);
- [factorial](https://github.com/201flaviosilva-labs/javascript-utils/commit/0acd876787cbbeb546efede06458b75aace09421);
- [randomString](https://github.com/201flaviosilva-labs/javascript-utils/commit/100b27ae279d94af6f1f3c5c5df05321767fd3e5) #50;
- [Array Choice](https://github.com/201flaviosilva-labs/javascript-utils/commit/82b391a59c2ec709cbf42c4945d277263d858613) #38;
- [Array Shuffle](https://github.com/201flaviosilva-labs/javascript-utils/commit/1d9b11083ee4d4493c3d17cb71e514f389b04e0e) #48;
 
#### Changed
- Vector2 - fixed some formulas and add new functions
 
### [1.2.5] - 04-07-2022

This is the first version of the change log, so kinda is the first off all :)
 
#### Added
- All functions, classes, etc...
 