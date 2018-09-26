## Introduction
Get started with FeastSelect, Lets show bootstrap dropdown button instead of default form select tag.

## Live demo
[Live demo](http://eadhassan.com/feastselect)


## Compatibility
FeastSelect work with bootstrap 3.x and 4.x, So it's compatible with any browser work with bootstrap.

FeastSelect has been tested in following browsers/devices:

1. Chrome
2. Firefox
3. IE10/11
4. Edge
5. iOS Safari
6. Android 7.0 Tablet

## Setup
You can install FeastSelect by linking .css and .js files to your html file. Make sure you also load the jQuery library. Below is a basic HTML template to use as an example:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My page</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
  <!-- Your HTML content goes here -->

  <!-- JS -->
  <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="feastSelect.js"></script>
</body>
</html>
```

### Download feastSelect
Download the latest version of FeastSelect on GitHub. 
Or You can download it from the plugin website directly- [Direct Download](http://eadhassan.com/feastselect/download).

### Package Managers
**Important**
- Make sure you add the jQuery and Bootstrap libraries before the feastSelect JS file
- If you already have jQuery and Bootstrap on your page, you shouldn't include it second time
- We recommended to using name attribute to skip any bugs

## How to Use
### Initialize with data attributes
The most basic way to use FeastSelect is by adding the data-feast-select attribute to your element. This will automatically replace the current select with dropdown menu. Use data-btn-text attribute to Change the button text. Example:

```html
<select class="form-control" name="example" data-feast-select data-btn-text="Select an option">
  <option>Select option<option>
  <option value="1">Option 1<option>
  <option value="2">Option 2<option>
  <option value="3">Option 3<option>
</select>
```
**Notice**

Any option tag without or with empty value attribute will be removed automatically

### Initialize with JavaScript

Select your elements with a jQuery selector (you can use any valid selector) and call the FeastSelect method:

```javascript
$('select').FeastSelect({
	// Options will go here
  btnText: 'Select an option',
  btnClass: 'my-custom-class' // you don't need to add btn class here
});
```

**Notice**

If you call the plugin from JavaScript and data attribute, the data attribute will skiped

## Live Example
### Calling The plugin from data attribute with default options
The plugin accepted icons with options to set icon class add it like this <code>data-icon="fa fa-home"</code> to the option tag, you can change icon place (right, left) see options section

```html
<select class="form-control" data-feast-select>
  <option>Select option</option>
  <option value="1" data-icon="fa fa-home">Option 1</option>
  <option value="2" data-icon="fa fa-user">Option 2</option>
  <option value="3" data-icon="fa fa-cog">Option 3</option>
</select>
```

### Calling The plugin from data attribute with custom options

```html
<select class="form-control" data-feast-select data-btn-text="Select category" data-btn-class="btn-lg btn-danger">
  <option>Select option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

### Calling The plugin from JavaScript with fade effect

```html
<script type="text/javascript">
  $('.example1').FeastSelect({
    showEffect: 'fadeIn',
    hideEffect: 'fadeOut'
  })
</script>
```

### Calling The plugin from JavaScript with custom class and show original select tag

```html
<script type="text/javascript">
  $('.example2').FeastSelect({
    btnText: 'List the options',
    hideOriginal: false
  })
</script>
```

**Notice**

To change the dropdown menu css for specific select you can use the example code below:

```css
// For change a specific select style 
.yourCustomClass {
  
    /* Button styles here */

}
.yourCustomClass + .dropdown-menu { // Change selectName with the select name attribute   

    /* Dropdown styles here */

}

// For change all select style
[class*="feastSelect_"] + .dropdown-menu {   

    /* Dropdown styles here */

}
```

```html
<script type="text/javascript">
  $('.example3 select').FeastSelect({
    btnText: 'List the options',
  })
</script>
```

## Options
Quick reference for the default options as defined in the source:

```javascript
// Default options
var defaults = {
      btnClass    : 'btn-info',
      btnText     : 'Select your option',
      showEffect  : 'slideDown', // fade, hide, slideDown
      hideEffect  : 'slideUp', // fade, hide, slideDown
      iconPlace   : 'left', // left or right
      hideOriginal: true
};
```
**Accepted data attributes for options:**
- data-btn-class
- data-btn-text
- data-show-effect
- data-hide-effect
- data-icon-place

**Notice**
option hideOtiginal accepted in JavaScript only not from data attribute

**Set instance options by passing a valid object to FeastSelect() method:**
```javascript
$("select").FeastSelect({
	hideOriginal : false
});
```

## Credits
FeastChecker is using this awesome libraries

1. [jQuery](https://jquery.com/)
2. [Bootstrap](https://getbootstrap.com)
