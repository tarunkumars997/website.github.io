
const myDiv = document.getElementById('project');
const avatar = document.getElementById('avatar');
const myDiv2 = document.getElementById('skills');
const myDiv3 = document.getElementById('edu');
const main = document.querySelector('.main');
const skills_main = document.querySelector('.skills-main');
const edu_main = document.querySelector('.edu-main');

const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');


myDiv.addEventListener('click', function() {
    main.classList.add('show')
    main.classList.remove('hide')
    skills_main.classList.add('hide')
    skills_main.classList.remove('show')
    edu_main.classList.add('hide')
    edu_main.classList.remove('show')
    myDiv2.classList.remove('hover')
    myDiv3.classList.remove('hover')
    icon2.classList.remove('white')
    icon3.classList.remove('white')
    myDiv.classList.add('hover');
    icon1.classList.add('white');
    
    });
avatar.addEventListener('click', function() {

avatar.classList.add('hover');

});

myDiv2.addEventListener('click', function() {
    main.classList.remove('show')
    main.classList.add('hide')
    skills_main.classList.remove('hide')
    skills_main.classList.add('show')
    edu_main.classList.add('hide')
    edu_main.classList.remove('show')
myDiv.classList.remove('hover')
myDiv3.classList.remove('hover')
icon1.classList.remove('white')
icon3.classList.remove('white')
myDiv2.classList.add('hover');
icon2.classList.add('white');
});
myDiv3.addEventListener('click', function() {
    main.classList.remove('show')
    main.classList.add('hide')
    skills_main.classList.remove('show')
    skills_main.classList.add('hide')
    edu_main.classList.add('show')
    edu_main.classList.remove('hide')
myDiv.classList.remove('hover')
myDiv2.classList.remove('hover')
icon1.classList.remove('white')
icon2.classList.remove('white')
myDiv3.classList.add('hover');
icon3.classList.add('white');
});
let count_left = 1,count_right = 1;
const left = document.getElementById('fa-arrow-right');
const right = document.getElementById('fa-arrow-left');
right.addEventListener('click', function() {
// Get all elements with the class name 'box'
if(count_right != 0) {

    count_right -= 1;
    count_left += 1;
    const boxes = document.querySelectorAll('.project');

    // Loop through each element and update properties
    boxes.forEach((box, index) => {
    // Get the current left and top values and convert them to numbers (removing 'px')
    let currentLeft = parseFloat(getComputedStyle(box).left);
    console.log(currentLeft)
    // Update left and top properties
    box.style.left = `${currentLeft+2*764}px`;
    if(count_right == 0){
        right.style.display = 'none';
    }
    left.style.display = 'flex';
    });
}


});
left.addEventListener('click', function() {
// Get all elements with the class name 'box'
if(count_left != 0){
    count_right += 1;
    count_left -= 1;
    const boxes = document.querySelectorAll('.project');
    // Loop through each element and update properties
    boxes.forEach((box, index) => {
    // Get the current left and top values and convert them to numbers (removing 'px')
    let currentLeft = parseFloat(getComputedStyle(box).left);
    console.log(currentLeft)
    // Update left and top properties
    box.style.left = `${currentLeft-2*764}px`;
    if(count_left == 0){
        left.style.display = 'none';
    }
    right.style.display = 'flex';
    });
}
});

