# UNC Code Bootcamp Notes

## HTML
NOTE: Mozilla Developer Network ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)) is referenced a lot in this section. It is a great resource for HTML, CSS, and JavaScript.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) is the language used to create web pages. It is the foundation of all web pages.
- In programming, **Semantics** refers to the meaning of a piece of code -- for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".) (Source: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics))
    - Semantics in HTML refers to the meaning of the HTML elements. (Source: GitHub Copilot 19072023)
    - In HTML, for example, the `<h1>` element is a semantic element, which gives the text it wraps around the role of "a top level heading on your page." (Source: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics))
- Block-level (Source: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content))
    - In CSS (Cascading Style Sheets), content that participates in block layout is called **block-level content**.
    - A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
    - In a block layout, boxes are laid out one after the other, vertically, beginning at the top of a containing block. Each box's left outer edge touches the left edge of the containing block.
- HTML elements `<p>`, `<article>`, and `<section>` ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML))
    - `<p>` is a paragraph
        - Block-level element
        - Represents a paragraph of text
        - Automatically closes if another block-level element is parsed before the closing `</p>` tag
    - `<article>` is a self-contained piece of content
        - The `<article>` element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable.
        - Examples:
            - Forum post
            - Magazine, newspaper article, or blog post
            - User-submitted comment
            - Interactive widget or gadget
            - Or any other independent item of content
    - `<section>` is a section of content
        - Represents a generic standalone section of content, which doesn't have a more specific semantic element to represent it.
        - With very few exceptions, `<section>` should always have a heading.

## CSS
- Inroduction to the CSS basic box model (Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model))
    - When laying out a document, the browser's rendering engine represents each element as a rectangular box according to the standard **CSS** basic box model. CSS determines the size, position, and the proerties (color, background, border size, etc.) of these boxes.
    - Every box is composed of four parts (or areas), defined by their respective edges: the content edge, padding edge, border edge, and margin edge.
    <br>
    <br>
    ![CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model/boxmodel.png)
    <br>
    <br>
    - Content area
        - The content area, bounded by the content edge, contains the "real" content of the element, such as text, and image, or a video player. Its dimensions are the content *width* (or *content-box width*) and the *content height* (or *content-box height*). It often has a background color or background image.
<br>
<br>
- CSS Box Model (Source: [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model))
    - Everything in CSS has a box around it, and understanding these boxes is key to being able to create more complex layouts with CSS, or to align items with other items.
    - Outer display type
        - If a box has an outer display type of `block`, then:
            - The box will break onto a new line.
            - The `width` and `height` properties are respected.
            - Padding, margin, and border will cause other elements to be pushed away from the box.
            - If `width` is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.
            - Some HTML elements, such as `<h1>` and `<p>`, use `block` as their outer display type by default.
        - If a box has an outer display type of `inline`, then:
            - The box will not break onto a new line.
            - The `width` and `height` properties will not apply.
            - Top and bottom padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
            - Left and right padding, margins, and borders will apply but will cause other inline boxes to move away from the box.
            - Some HTML elements, such as `<a>`, `<span>`, `<em>`, and `<strong>`, use `inline` as their outer display type by default.
    - Inner display type
        - Boxes also have an *inner* display type, which dictates how elements insid that box are laid out.
        - Block and inline layout is the default way things behave on the web. By default and without any other instruction, the elements inside a box are laid out in [normal flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) and behave as block or inline boxes.
        - You can change the inner display type for example by setting `display: flex;`. The element will stull use the outer display type `block` but this changes the inner display type to `flex`. Any direct children of this box will become flex items and behave according to the [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) specification.
        - Other inner values that boxes can have - [flex](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and [grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) etc.
        - [Block and Inline Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- More CSS Box Model (Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model))
    - The CSS box model defines the rectangular boxes, including their padding and margin, that are generated for elements and laid out according to the [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).
    - Box model overview
        - A box in CSS consists of a content area, which is where any text, images, or other HTML elements are displayed. This is optionally surrounded by padding, a border, and a margin, on one or more sides. The box model describes how these elements work together to create a box and displayed by CSS. `<continue>`...

<hr/>

- `!important`
- `#id {}`
- `.class {}`
- `* {}`
- `element {}`
- `draggable="true"` ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable))
- `<ol>` ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol))
- `<img>`([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img))
- `<hr>` ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr))
- [Lorem Ipsum](https://www.lipsum.com/)
- [Picsum](https://picsum.photos/)
- `alt` HTML image element attribute ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt))
    - The `alt` attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the `src` attribute, or if the user uses a screen reader). (Source: GitHub Copilot 21072023)
- 