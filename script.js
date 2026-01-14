console.log("script loaded");

const body = document.body;
const fbtn = document.getElementById("fbtn");
const tbtn = document.getElementById("tbtn");
const bkbtn = document.getElementById("bkbtn");
const babtn = document.getElementById("babtn");
const csbtn = document.getElementById("csbtn");
const pbtn = document.getElementById("pbtn");

// Financial Auditing Button
fbtn.addEventListener("click", () => {
    window.location.href = "History/Financial-Auditing.html";
});
// Tax Button
tbtn.addEventListener("click", () => {
    window.location.href = "History/Tax.html";
});
// Bookkeeping Button
bkbtn.addEventListener("click", () => {
    window.location.href = "History/Bookkeeping.html";
});
// Business Advisory Button
babtn.addEventListener("click", () => {
    window.location.href = "History/Business-Advisory.html";
});
// Compliance Support Button
csbtn.addEventListener("click", () => {
    window.location.href = "History/Compliance-Support.html";
});
// Payroll Button
pbtn.addEventListener("click", () => {
    window.location.href = "History/Payroll.html";
});

