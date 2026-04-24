<!-- 

CSS Box Model determins how elements take up space on a web page.

- Every HTML element is a rectangular box with four layers.
- Content: the text, image, or other content inside the element.
- Padding: the space between the content and the border.
- Border: the edge around the element.
- Margin: the space outside the element, separating it from others.

 -->

 <!-- 
BOX MODEL PROPERTIES (width, height, padding) 

Determines how element take up space on a webpage.
- Content: text, images, or other content inside the element.
- Padding: the space between the content and the border.
- Border: the edge around the element.
- Margin: the space outside the border.
-->

<!--
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport", content="width=device-width, initial-scale=1.0" />
        <title>Box Model</title>
        <style>
            /* .box {
                width: 200px;
                height: 100px;
                padding: 20px;
                border: 5px solid black;
                margin: 30px;
                background-color: lightblue;
            } */

            /* .box {
                width: 250px;
                height: 150px;
                background-color: lightgray;
            } */

            /* padding top right bottom left order */
            .box {
                padding: 10px 20px 15px 5px;
                background-color: cornflowerblue;
            }
        </style>
    </head>
    <body>
        <div class="box">Hello, I'm a box!</div>
    </body>
</html>
-->

<!--
BORDER, MARGIN

Border: outline of the elment, wraps around the content and padding.
Margin: creates space outside the border, separating elements.

***** BORDER *****

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport", content="width=device-width, initial-scale=1.0" />
        <title>Box Model</title>
        <style>
           .box {
                width: 200px;
                height: 100px;
                padding: 20px;
                border: 5px solid black;
                margin: 30px;
                background-color: lightblue;
            } 

           .box {
                width: 250px;
                height: 150px;
                background-color: lightgray;
            } 

            padding top right bottom left order 
           .box {
                padding: 10px 20px 15px 5px;
                background-color: cornflowerblue;
            } 

            border -> border-width border-style, border-color 
            
            .box {
                border: 5px solid black; */
                border-width: 5px;
                border-style: solid; 
                border-color: black;*/
                border: 3px dashed red; */
                border: 4px dotted blue; 
                border-radius: 15px;*/
                border: 1px solid black;
                height: 100px;
                width: 100px;
                border-radius: 50px; 

            }
        </style>
    </head>
    <body>
        <div class="box">Hello, I'm a box!</div>
    </body>
</html>
-->

<!--
***** MARGIN ***** 

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Box Model</title>
        <style>
           margin is top right bottom left
           .box {
           width: 200px;
           background-color: lightblue;
           margin: auto;
           }
        </style>
    </head>
    <body>
        <div class="box">Hello, I'm a box!</div>
    </body>
</html>