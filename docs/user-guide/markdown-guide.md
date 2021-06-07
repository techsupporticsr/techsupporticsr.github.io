---
id: markdown-guide-id
title: Dom's Docusaurus Features Page
description: My document description
slug: /markdown-guide
---
# Markdown Syntax and Features Page

Headings start with a hash 1 hash for heading 1, 2 for h2 etc.
<Highlight color="#ff0000">ONLY H2 & H3 will add link</Highlight> to the RHS nav panel in docusaurus

# Markdown Heading 1
## Markdown Heading 2
### Markdown Heading 3
#### Markdown Heading 4
##### Markdown Heading 5
###### Markdown Heading 6

## HyperLinks

Markdown text with [internal link](./hello) label in [  ] square brackets and link in ( ) parentheses

Markdown text with [external link](https://www.markdownguide.org/basic-syntax/). to the Markdown syntax site

Here is an external hyperlink to an md doc  [do not put the dotmd in link](http://localhost:3000/docs/create-a-page).

## Italics

Italicized text is *inside a single asterixes*.

## Bold

Bold text is **inside double asterixes**.  

## Paragraphs 

are simply 'entered down' in code file

Like this, dont put an indent.

## Line Breaks

Line Breaks have two spaces after the first (previous) line.

## images
images have an ! folowed by alt text in square brackets  [ ] and image link inside parentheses ( ) .  
![Docusaurus logo](/img/docusaurus.png)

## code sample
to add a sample code window, use triple ` 
followed by jsx title= then link in quoatation marks ENTER

then enter code, end it with triple ` again

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
    )
}
```
## alerts - green, yellow red

Use Triple colon : followed by tip, danger or caution then Heading words then Enter

for label text

end it with triple colon :

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

:::caution Warning

This is a warning

:::

## highlighted text with color and text
create custom css and onclick functions for spans like the highlights below

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !