function compileAndRender() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var render = document.getElementById("render").contentWindow.document;

    document.body.onkeyup = function () {
        render.open();
        render.writeln(
            html.value +
            "<style>" +
            css.value +
            "</style>" +
            "<script>" +
            js.value +
            "</script>"
        );
        render.close();
    };
}

compileAndRender();