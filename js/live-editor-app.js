function renderDoc(html, css, js, render) {
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

function compileAndRender() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var render = document.getElementById("render").contentWindow.document;

    // Initial render on page load
    renderDoc(html, css, js, render);
    // Record render on key up event
    document.body.onkeyup = function () {
        renderDoc(html, css, js, render);
    };
}

compileAndRender();