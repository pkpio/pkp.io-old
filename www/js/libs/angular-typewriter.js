/**
 * Created by praveen on 13.09.15.
 */
angular.module('angularTypewrite', []);

angular.module('angularTypewrite').directive('typewrite', ['$timeout', function ($timeout) {
    function linkFunction($scope, $element, $attrs) {
        var timer = null,
            initialDelay = $attrs.initialDelay ? getTypeDelay($attrs.initialDelay) : 200,
            typeDelay = $attrs.typeDelay || 200,
            eraseDelay = $attrs.eraseDelay || typeDelay / 2,
            blinkDelay = $attrs.blinkDelay ? getAnimationDelay($attrs.blinkDelay) : false,
            cursor = $attrs.cursor || '',
            blinkCursor = typeof $attrs.blinkCursor !== 'undefined' ? $attrs.blinkCursor === 'true' : true,
            currentText,
            textArray,
            running,
            auxStyle;

        if ($scope.text) {
            if ($scope.text instanceof Array) {
                textArray = $scope.text;
                currentText = textArray[0];
            } else {
                currentText = $scope.text;
            }
        }
        if (typeof $scope.start === 'undefined' || $scope.start) {
            typewrite();
        }

        function typewrite() {
            timer = $timeout(function () {
                updateIt($element, 0, 0, currentText);
            }, initialDelay);
        }

        function updateIt(element, charIndex, arrIndex, text) {
            if(!text){
                if ($scope.callbackFn) {
                    $scope.callbackFn();
                }
            }
            else if (charIndex <= text.length) {
                element.html(text.substring(0, charIndex) + cursor);
                charIndex++;
                timer = $timeout(function () {
                    updateIt(element, charIndex, arrIndex, text);
                }, typeDelay);
            } else {
                charIndex--;
                // check if it's an array
                if (textArray && arrIndex < textArray.length - 1) {
                    timer = $timeout(function () {
                        cleanAndRestart(element, charIndex, arrIndex, textArray[arrIndex]);
                    }, initialDelay);
                } else {
                    if ($scope.callbackFn) {
                        $scope.callbackFn();
                    }
                    //blinkIt(element, charIndex, currentText);
                }
            }
        }

        function blinkIt(element, charIndex) {
            var text = element.text().substring(0, element.text().length - 1);
            if (blinkCursor) {
                if (blinkDelay) {
                    auxStyle = '-webkit-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-moz-animation:blink-it steps(1) ' + blinkDelay + ' infinite ' +
                        '-ms-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-o-animation:blink-it steps(1) ' + blinkDelay + ' infinite; ' +
                        'animation:blink-it steps(1) ' + blinkDelay + ' infinite;';
                    element.html(text.substring(0, charIndex) + '<span class="blink" style="' + auxStyle + '">' + cursor + '</span>');
                } else {
                    element.html(text.substring(0, charIndex) + '<span class="blink">' + cursor + '</span>');
                }
            } else {
                element.html(text.substring(0, charIndex));
            }
        }

        function cleanAndRestart(element, charIndex, arrIndex, currentText) {
            if (charIndex > 0) {
                currentText = currentText.slice(0, -1);
                // element.html(currentText.substring(0, currentText.length - 1) + cursor);
                element.html(currentText + cursor);
                charIndex--;
                timer = $timeout(function () {
                    cleanAndRestart(element, charIndex, arrIndex, currentText);
                }, eraseDelay);
                return;
            } else {
                arrIndex++;
                currentText = textArray[arrIndex];
                timer = $timeout(function () {
                    updateIt(element, 0, arrIndex, currentText);
                }, typeDelay);
            }
        }

        function getTypeDelay(delay) {
            if (typeof delay === 'string') {
                return delay.charAt(delay.length - 1) === 's' ? parseInt(delay.substring(0, delay.length - 1), 10) * 1000 : +delay;
            } else {
                return false;
            }
        }

        function getAnimationDelay(delay) {
            if (typeof delay === 'string') {
                return delay.charAt(delay.length - 1) === 's' ? delay : parseInt(delay.substring(0, delay.length - 1), 10) / 1000;
            }
        }

        $scope.$on('$destroy', function () {
            if (timer) {
                $timeout.cancel(timer);
            }
        });

        $scope.$watch('start', function (newVal) {
            if (!running && newVal) {
                running = !running;
                typewrite();
            }
        });
    }

    return {
        restrict: 'A',
        link: linkFunction,
        scope: {
            text: '=',
            callbackFn: '&',
            start: '='
        }
    };

}]);