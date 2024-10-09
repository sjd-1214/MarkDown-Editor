window.onload = function() {
    let converter = new showdown.Converter();
    let pad = document.getElementById('pad');
    let markdownArea = document.getElementById('markdown');

    pad.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // get caret position/selection
            const start = this.selectionStart;
            const end = this.selectionEnd;
    
            const target = e.target;
            const value = target.value;
    
            // set textarea value to: text before caret + tab + text after caret
            target.value = value.substring(0, start)
                            + "\t"
                            + value.substring(end);
    
            // put caret at right position again (add one for the tab)
            this.selectionStart = this.selectionEnd = start + 1;
    
            // prevent the default action to avoid losing focus
            e.preventDefault();
        }
    });
    


    let convertTextAreaToMarkdown = function(){
        var markdownText = pad.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    pad.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();
};