function navigationOnClick(event) {
    let currentTarget = event.currentTarget;
    let anchors = currentTarget.getElementsByTagName('a');
    for (let anchor of anchors) {
        if (anchor.classList.contains('selected')) anchor.classList.remove('selected');
    }

    let target = event.target;
    target.classList.add('selected');
}

let navig = document.getElementsByTagName('nav')[0];
navig.addEventListener('click', navigationOnClick);

/////////////////////////////
function clickOnPhone(event) {
    let parentTarget = event.target.parentElement;
    if (parentTarget.classList.contains('vertical-phone')) changeImageVerticalPhone();
    if (parentTarget.classList.contains('horizontal-phone')) changeImageHorizontalPhone();
}

function changeImageVerticalPhone() {
    let vertBlackBox = document.getElementsByClassName('vertical-black-display')[0];

    if (vertBlackBox.classList.contains('hide')) vertBlackBox.classList.remove('hide');
    else vertBlackBox.classList.add('hide');
}
function changeImageHorizontalPhone() {
    let horBlackBox = document.getElementsByClassName('horizontal-black-display')[0];

    if (horBlackBox.classList.contains('hide')) horBlackBox.classList.remove('hide');
    else horBlackBox.classList.add('hide');
}

let phones = document.getElementsByClassName('phones')[0];
phones.addEventListener('click', clickOnPhone);

//////////////////////////////

let items = document.getElementsByClassName('slide');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.left-btn').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
        let sliderArea = document.getElementsByClassName('slider-area')[0];

        if (items[currentItem].classList.contains('slide-1')) {
            sliderArea.classList.remove('slide-color-2');
            sliderArea.classList.add('slide-color-1');
        } else {
            sliderArea.classList.remove('slide-color-1');
            sliderArea.classList.add('slide-color-2');
        }
    }
});

document.querySelector('.right-btn').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
        let sliderArea = document.getElementsByClassName('slider-area')[0];

        if (items[currentItem].classList.contains('slide-1')) {
            sliderArea.classList.remove('slide-color-2');
            sliderArea.classList.add('slide-color-1');
        } else {
            sliderArea.classList.remove('slide-color-1');
            sliderArea.classList.add('slide-color-2');
        }
    }
});
