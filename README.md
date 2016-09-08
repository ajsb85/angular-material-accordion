# Angular Material Accordion

## Introduction

This is a package to create navigation menus using Angular Material. This follows all the design guidelines provided by Google Material spec.

## Installation

This package can be installed using bower:

* `bower install angular-material-accordion`

## Usage

Include the script and CSS files in you HTML and add `ngMaterialAccordion` in you module. Also this module has support for browserify or wiredep.

```html
<link rel="stylesheet" href="path/to/angular-material-accordion.css">
<script src="path/to/angular-material-accordion.js"></script>
```

To use icons with ligatures you should include the reference for the Material Icons:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

After that you can add the following markup:
```html
<md-accordion>
  <md-accordion-group>
    <md-subheader class="md-no-sticky">Caption</md-subheader>

    <md-accordion-content md-icon="home" md-heading="Menu 1" md-arrow="true">
      <md-accordion-button href="#">Submenu 1</md-accordion-button>
      <md-accordion-button href="#">Submenu 2</md-accordion-button>
      <md-accordion-button href="#">Submenu 3</md-accordion-button>
    </md-accordion-content>
  </md-accordion-group>
  
  <md-accordion-group>
    <md-divider></md-divider>

    <md-subheader class="md-no-sticky">Caption</md-subheader>

    <md-accordion-button href="#">Menu 4</md-accordion-button>
  </md-accordion-group>
</md-accordion>
```

### Components

* `<md-accordion>`
Is the main directive to hold all navigation items.

* `<md-accordion-group>`
Is needed to create groups of content.

* `<md-accordion-content>`
Define the collapsible navigation element and there's some attributes to setup. The following attributes are available:
 - `md-icon` - You can use font icons
 - `md-svg-icon` - To use external svg icons
 - `md-heading` - The title of the section
 - `md-arrow` - An optional boolean to show an indicator arrow

* `<md-accordion-button>` 
 Add the buttons inside the navigation. The following attributes are available:
 - `href` - The href for the button
 - `ui-sref` - The ui-router alternative
 - `ui-sref-active` - The highlight class to use with ui-router
 - `target` - The link target attribute

Pretty easy!

## License

MIT
