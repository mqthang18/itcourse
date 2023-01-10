url = window.location.href; 
console.log(url.split("#"))


// Catch string after hash mark is modified then call function change content of the ebook 
window.addEventListener('hashchange', function () {
    console.log('location changed!');
});