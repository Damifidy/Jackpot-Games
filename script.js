let pw = window.prompt('Password:', '<type here>')
if (pw !== 'C:\Users\damie\pass4JG.txt') {
    window.parent.window.location.replace('https://google.com/')
} else { return 'Loaded Page Successfully!' }

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