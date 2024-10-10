window.onload = function() {
    var converter = new showdown.Converter();
    var pad = document.getElementById('pad');
    var markdownArea = document.getElementById('markdown');

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
        previousMarkdownValue = markdownText;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    var didChangeOccur = function(){
        if(previousMarkdownValue != pad.value){
            return true;
        }
        return false;
    };

    // check every second if the text area has changed
    setInterval(function(){
        if(didChangeOccur()){
            convertTextAreaToMarkdown();
        }
    }, 1000);

    // convert textarea on input change
    pad.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();
};