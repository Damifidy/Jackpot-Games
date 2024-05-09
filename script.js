/* let pw = window.prompt('Password:', '<type here>');
if (pw !== 'jpfl') {
    window.parent.window.location.replace('https://google.com/');
}
 */
function launchab() {
    const tab = window.open('about:blank', '_blank');
    const iframe = tab.document.createElement('iframe');
    const stl = iframe.style;
    stl.border = stl.outline = 'none';
    stl.width = '100vw';
    stl.height = '100vh';
    stl.position = 'fixed';
    stl.left = stl.right = stl.top = stl.bottom = '0';
    iframe.src = self.location;
    tab.document.body.appendChild(iframe);
    window.parent.window.location.replace('https://google.com/')
}