# osx-dock
OS X like dock implemented in CSS only. This example is written as a Meteor project.

![screen shot 2015-03-06 at 6 50 46 pm](https://cloud.githubusercontent.com/assets/7061547/6538999/ed9806fa-c437-11e4-98b8-e8ff7f9855f4.png)

## What it is...
This is a demo of an OSX dock using the magnification effect. I didn't see a whole lot of great examples - a few using javascript, etc... but I wanted to use CSS animations only. It's my first take on it, so it's not refined and I'm sure it can be simplified and improved.

The animation is OK but not perfect; the transition between elements could be modified (in the CSS animation code timing) so that there is a little longer persistence when moving from item to item.

I'm running the demo as a Meteor application, so button clicks, etc... are handled by the .js file. When you click on a dock element, it lets you know whch one it was. The id is set in the HTML code.

Dock elements are added in HTML (in the 'dock' template) as follows:

```HTML
  <div class="dock-wrapper">                              <--- main wrapper for dock (top and bottom)
      <div class="dock">
              <div class="app" id="1" data-id="1">        <--- Set each element id and data-id
                  <div class="top"></div>
                  <div class="bottom-wrapper">            <--- This is the dock item reflection
                      <div class="bottom"></div>
                  </div>
              </div>
              <div class="app" id="2" data-id="2">
                    ---
              </div>
              ---
      </div>
      <div class="dock-shelf-wrapper">
        <div class="dock-shelf"></div>                    <--- This is the shelf that everything sits on
      </div>
  </div>
  ```
All the work happens in the `dock.scss` file. This is written using SASS.
