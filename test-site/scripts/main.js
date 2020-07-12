let myImage = document.querySelector('img')

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src')
    if (mySrc === 'images/Mozilla-logo.png') {
        myImage.setAttribute('src', 'images/firefox2.png')
    } else {
        myImage.setAttribute('src', 'images/Mozilla-logo.png')
    }
}


// 切换用户
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

/* set the personalized greeting */
function setUserName() {
    // myName 接受提示框的输入
    let myName = prompt('Please enter your name.')

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

// 初始化：
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storeName;
}

myButton.onclick = function () {
    setUserName();
}