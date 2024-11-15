//How to select DOM Elements.

//* Element selection by Id
{
    const box1 = document.getElementById('box1');
    //    console.log(box1);
}
//Or
{
    const box1 = document.querySelector('#box1');
    // console.log(box1);
}

//* Element selection by class
//?Single Class Selection
{
    const box3 = document.querySelector('.box');
    // console.log(box3);
}
//?Multiple class selection
{
    const boxes = document.getElementsByClassName('box');
    //    console.log(boxes);
     for (const box of boxes) {
        //  console.log(box);
     }
}
//Or
{
    const boxes1 = document.querySelectorAll('.box');
    // console.log(boxes1);
}

//* Element selection by TagName
//?Single TagName Selection
{
    const div = document.querySelector('div');
    //  console.log(div);
}
//?Multiple TagName selection
{
    const div1 = document.getElementsByTagName('div');
       console.log(div1);
}
//Or
{
    const div2 = document.querySelectorAll('div');
     console.log(div2);
}

//* Element Selection By Attribute
//?Single Attribute Selection
{
    const box5 = document.querySelector("[data-atr='box1']");
    // console.log(box5);
}
//?Multiple Attribute selection
{
    const box6 = document.querySelectorAll("[data-atr='box1'],[id='box3']");
    // console.log(box6);
}

//* Element Selection by Pseudo-class
//?Single Selection
{
    const list = document.querySelector('li:first-child')
    // console.log(list);
}
//?Multiple selection
{
    const list = document.querySelectorAll('li:first-child, li:last-child')
    // console.log(list);
}

//* Element Child Selection(Parent to Child Selection)
//? Child Selection by children
{
    const parentElement = document.getElementById('box3')
    // console.log(parentElement.children);
}
//? Child Selection by childNodes
{
    const parentElement = document.getElementById('box3')
    // console.log(parentElement.childNodes);
}

//* Element parent Selection(Child to Parent Selection)
{
    const childrenBox = document.querySelector('.box3-paragraph')
    // console.log(childrenBox.parentNode);

    //? Parent to Parent Selection
    // console.log(childrenBox.parentNode.parentNode)
}

//* Parent to child Selection with CSS Code
//? Single Element Selection
{
    const child = document.querySelector('#box3 h4')
    // console.log(child);
}
//? Multi Element Selection
{
    const child = document.querySelectorAll('#box3 h4, #box4 li')
    // console.log(child);
}


//* Many Element Selection with querySelectorAll() CSS method
{
    const manySelection = document.querySelectorAll('.box, #box3, #box3 strong, #box3 li:last-child');
    // console.log(manySelection);
}


//
