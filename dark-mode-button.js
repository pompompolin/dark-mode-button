function darkModeSwitch() {

    var button = document.getElementById('dark-mode-button'); 
    var switchButton = document.getElementById('dark-mode-switch'); 
    var body = document.body;
 
    if (switchButton.getAttribute('data-value') == 'light') {
        switchButton.style.left = '35px';
        switchButton.style.backgroundColor = '#F2F2F2';
        button.style.borderColor = '#F2F2F2';
        body.style.backgroundColor = darkMode.bodyBackground;
        body.style.color = darkMode.bodyColor;
        switchButton.setAttribute('data-value', 'dark');
    }
    else {
        switchButton.style.left = '2px';
        switchButton.style.backgroundColor = '#ADADAD';
        button.style.borderColor = '#ADADAD';
        body.style.backgroundColor = lightMode.bodyBackground;
        body.style.color = lightMode.bodyColor;
        switchButton.setAttribute('data-value', 'light');
    }
}