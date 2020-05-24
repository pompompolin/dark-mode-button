# Simple Dark mode button 🌙

Here is a very simple button to switch between light & dark modes on a website.

## How to install

### 1. Download the code on Github

### 2. Unzip and put it in your website folder

### 3. Add the button to your header section

Copy and paste this code in the header section of your website (or wherever you want) :

    <!-- Dark mode button -->
    <div id="dark-mode-button" onclick="darkModeSwitch();">
        <div id="dark-mode-switch" data-value="light"></div>
    </div>

### 4. Add the script to your website

Make sure to insert it **beetween the ``<head>`` tag** and **before your own style.css file**.

    <html>
        <head>
            <script type="text/javascript">
                /* UI colors for light & dark modes */
                var lightMode = {
                /* Insert your light theme colors */
                bodyBackground: '#F5F5F5',
                bodyColor: '#212121',
                };
                var darkMode = {
                /* Insert your dark theme colors */
                bodyBackground: '#212121',
                bodyColor: '#fff',
                };
            </script>
            <script src="dark-mode-button/dark-mode-button.js"></script>
            <link rel="stylesheet" href="dark-mode-button/dark-mode-button.css" />

If you're good with the default colors and the positioning, then you're done!

If you want to customize the colors of your light and dark theme, let's push it a little bit further :

### 4. Optional : customize the script with your own themes colors

In the script you've just installed, you can actually customize the colors of your themes.

Under ``/* Insert your light theme colors */`` and ``/* Insert your dark theme colors */``, replace the default values by your own light and dark body {background-color} and body {color}.

To customize the position of the button :

### 5. Optional : adjust the position of your button

By default, the button position is absolute, top: 10px; right: 0.

If you want to change it, use the id #dark-mode-button.



**Thanks for using my Dark mode button!**

Let me know if you find something strange in the code, I'm here to learn! 🙂