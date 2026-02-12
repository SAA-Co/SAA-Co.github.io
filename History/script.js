const hmbtn = document.getElementById("hmbtn");

hmbtn.addEventListener('click' ,() => {
    window.location.href = "../index.html"
});
const loginBtns = document.querySelectorAll('#loginbtn');
        if (loginBtns && loginBtns.length) {
        const target = window.location.pathname.includes('/History/') ? '../sign-in.html' : 'sign-in.html';
        loginBtns.forEach(btn => btn.addEventListener('click', () => { window.location.href = target; 
        }))};