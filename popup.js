window.onload = function() {

  var sky = "";

  var ifa = document.querySelector('iframe').contentDocument;

  (function initframe() {

    var st = document.createElement("style");
    ifa.querySelector('head').appendChild(st);

    var sc = document.createElement("script");
    ifa.querySelector('head').appendChild(sc);

  })()

    var editor0 = CodeMirror(document.getElementById('html'), {
      lineNumbers: false,
    });
    var editor1 = CodeMirror(document.getElementById('css'), {
      lineNumbers: false,
      matchBrackets: true,
      parserfile: "css.js"
    });
    var editor2 = CodeMirror(document.getElementById('js'), {
      lineNumbers: false,
      matchBrackets: true,
    });

editor0.on("change", function(cm, change) {
  ifa.querySelector('body').innerHTML = cm.getValue();
});
editor1.on("change", function(cm, change) {
  ifa.querySelector('style').innerHTML = cm.getValue();
});
editor2.on("change", function(cm, change) {
  eval(cm.getValue());
});

    function render() {

    }

    function store() {



    }
  }
