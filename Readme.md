# LineArtDraw
Animating SVGs line art draws with JS

An explanation on how line art animations work (with CSS and dash arrays) can be found here:
https://css-tricks.com/svg-line-animation-works/

# How to organize your SVGs
Group all paths which should be rendered at the same time. The group at the lowest level (in your vector editing program) is rendered first. This group will be the first to appear in the SVG code. The line is always drawn from the starting point of the path (red nodes in image below). If necessary, change the starting point or the direction of the path (red indicators in image below) in your vector editing program.

![grafik](https://user-images.githubusercontent.com/104911459/212634584-0ae08786-48ce-40f5-afcd-ccc4e8078085.png)

# Include your SVGs
Just add your SVGs in the index.html file. If everything is correct (that is the SVGs are in the correct structure) the animation should work just fine. 

# How to show the Animations
Currently, the JS is waiting for the SVGs to be loaded. In order to make the onload function work, you have to serve the index.html file. The simplest way to do so is to use VS Code and with the LiveServer extension. Just open VS Code, go to Extensions and install the Live Server.
![grafik](https://user-images.githubusercontent.com/104911459/212635916-82e23655-64de-480b-adb1-9662a0d0c6a7.png)

Then, open up the index.html file, right-click and choose Open with Live Server. Changes to the code are updated live. For example, if you change the animation duration in the index.js file, the page is reloaded and you can check the result immediately in the browser.

![grafik](https://user-images.githubusercontent.com/104911459/212636107-14726cdb-372b-4c27-b70c-2dd26f924ce2.png)
