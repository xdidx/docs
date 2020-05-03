---
sidebarDepth: 2
---

# z-view

::: tip

I'm currently working on **Zumly**, which is a step forward to create zoomable web apps. You can be one of the first to try **Zumly** by joining our mailing list!!

<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://zumly.us8.list-manage.com/subscribe/post?u=fd430ad308efc1ae2b7efc141&amp;id=2cc4c60414" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	
<div class="mc-field-group">
	<label for="mce-NAME">Name </label>
	<input type="text" value="" name="NAME" class="" id="mce-NAME">
</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address </label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fd430ad308efc1ae2b7efc141_2cc4c60414" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='NAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->


More information at [zumly.org](https://zumly.org)

:::

## Description
<img :src="$withBase('/z-view.png')" style="margin-top: 20px; float:right" width="250px"/> 

This component is the main element of a view. Only one `z-view` is allowed per view. 

Inside it you can nest many others components, such as: [z-spot](/api/z-spot.html), [z-list](/api/z-list.html) or [z-dialog](/api/z-dialog.html)


### Modify the size of z-view
By default the diameter of the `z-view` is `xxl` which is the largest size that **zircle-ui** provides. To change it, simply use the property `size` with any of the following values: 

- `xl`, 
- `l` or `large`, 
- `m` or `medium`, 
- `s` or `small`, 
- `xs`, 
- `xxs`

Note that **zircle-ui** is responsive so, the diameter changes according the width of the browser's viewport when the app is in `full` mode. In `mixed` mode the diameter changes according the width of the canvas.

### Organize your content
In a `z-view` you can add different kind of contents, such as: text, forms, images, graphs, videos, etc. To organize them `z-view` provides a bunch of slots and properties.

#### slot.default
Tipically, the content you put inside a `z-view` will be catched by a default Vue slot. In case the content is larger than the view container, a [circular scroll](/api/z-scroll.html) is activated.

#### slot.extension
This slot allows to nest other **zircle-ui** components. If you want to add just one element add the slot name in the element. In case you need to add more elemntes, you can create a wrap element with the slot name.

```html
<!-- Nest a single component -->
<z-view>
	<z-spot slot="extension">
	</z-spot>
</z-view>


<!-- or Nest multiple components -->
<z-view>
	<div slot="extension">
		<z-spot></z-spot>
		<z-spot></z-spot>
		<z-spot></z-spot>
	</div>
</z-view>
```

#### property imagePath
In case you want to add an image background `z-view` offers two options: the **`slot.image`** or the property **`imagePath`**.

#### slot.media
To add rich media content like videos, maps, graphs, etc, you need to them inside the **`slot.media`**.

#### property.label
Finally, it is possible to add a label to `z-view` that could be positionated in the top, left, right or botton of the `z-view`. When you use the property **`label`** the default position is the bottom of the `z-view`. 

#### property.labelPos
If you want put the label in a different place, use the property **`labelPos`** with your prefered value: `top`, `left`, `bottom`, `right`


### Content layers

On the right you can see a diagram to show how the content is placed. The `slot.image` is on the bottom, then the `slot.default`, followed by the `slot.media` and the `slot.extension`. 

<img :src="$withBase('/z-view-layers.png')" style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto; width: 50%;"/>

As you may noticed `slot.media` is over the `slot.default`, that is intended because rich media content usually needs to be interactive. 

In case you want to show both a regular content and a rich media, you should put them all in the `slot.default` and omit the `slot.media`

### Circular slider
`z-view` has a child component named `z-slider` that allow to show a circular progress bar around its perimeter. You need to set `true` the property `slider`and use the property `progress` with a value.

## Usage

```html
<z-view
	slider
	:progress= '45'
	label: 'Home's view'
	label-pos: 'top'
	image-path: '/image.png'
	>
	<!-- Default slot -->
	Hello world!
	<!-- media slot -->
	<iframe slot="media" src="youtube" />
</z-view>
```

## Props

| Prop | Type | Default value | Required | Description
| :--- | :--- | :--- | :--- | :--- |
| `size` | String|  'xxl' | No | Set `z-view`'s diameter.
| `label` | String|  | No | Provides a label which is situated at the bottom of the component. 
| `label-pos` | String| 'bottom'  | No | Situates the label at left, right, top or bottom position of `z-view` 
| `slider` | Boolean | false | No | When it is `true` a circular progress bar, [z-slider](/api/z-slider.html), is shown. 
| `progress` | Number | 0 | No | Progress works when [z-slider](/api/z-slider.html) is enabled and gives its initial value.
| `imagePath` | String |  | No | To add the path of a background image. 


## Slots

| Slot | Description
| :--- | :--- |
| `default` | Default Vue slot. It is used to put any kind of content such as text, icons, etc. If its content is larger than the view container, a circular scrollbar, [z-scroll](/api/z-scroll.html), is activated.
| `media` | To insert videos, maps or another rich media content.
| `extension` | To nest **zircle-ui** components around the `z-view`.

