
function htmlEscape(str) {
    return str.replace(/[<>"&]/g, (match, pos, originValue) => {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            default: return match;
        }
    })
}