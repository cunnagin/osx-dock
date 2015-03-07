# osx-dock
OS X like dock implemented in CSS only. This example is written as a Meteor project.

## What it is...
This is a demo of an OSX dock using CSS only to do reflections & animations using the transform parameter.

I'm running the demo as a Meteor application, so button clicks, etc... are handled by the .js file. When you click on a dock element, it lets you know whch one it was. The id id set in the HTML code.

Dock elements are added in HTML (in the 'dock' template):

```HTML
  <div class="dock-wrapper">
      <div class="dock">
              <div class="app" id="1" data-id="1">
                  <div class="top"></div>
                  <div class="bottom-wrapper">
                      <div class="bottom"></div>
                  </div>
              </div>
              <div class="app" id="2" data-id="2">
                    ---
              </div>
              ---
      </div>
      <div class="dock-shelf-wrapper">
        <div class="dock-shelf"></div>
      </div>
  </div>
  ```
