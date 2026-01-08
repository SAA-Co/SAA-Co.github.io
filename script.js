console.log("script loaded");

const body = document.body;
const fbtn = document.getElementById("fbtn");
const tbtn = document.getElementById("tbtn");
const bbbtn = document.getElementById("bbbtn");
const batn = document.getElementById("batn");
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
bbbtn.addEventListener("click", () => {
    window.location.href = "History/Bookkeeping.html";
});
// Business Advisory Button
batn.addEventListener("click", () => {
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

