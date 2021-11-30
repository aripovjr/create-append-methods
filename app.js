 const div = document.createElement('div')
 document.body.appendChild(div)
//createElement() method helps us to create HTML tags inside body with the help of document. we can access to body tag
//inside it we can create any tag we need
//in this case we just created div tag inside body

//so let's create a paragraph tag inside div
const p = document.createElement('p')
//now we just created p tag but we need it inside div for this we need another useful method 
//appendChild()
div.appendChild(p)
//appendChild() is used to insert a child tag for parent tag in our case div is a parent and p is child

//now lets write some text for p tag

const text_for_p = document.createTextNode("This is added by JS")
p.appendChild(text_for_p)
//createTextNode() is alsoone of the helpful methods in JS which helps developers to create text in js for html
//above we created text for p and inserted t as a child to p
/*now our structure looks like
<body>
    <div>
        <p>This is added by JS</p>
    </div>
</body>
*/

const div2= document.createElement('div')
const p2 = document.createElement('p')
const i = document.createElement('i')
const text2 = document.createTextNode("By Aripov Jasur")
document.body.appendChild(div2)
div2.appendChild(p2)
p2.appendChild(i)
i.appendChild(text2)