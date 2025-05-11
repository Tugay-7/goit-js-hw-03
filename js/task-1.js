function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for beginers")); //"arrays-for-begginers"
console.log(slugify("English for developer")); //"english-for-developer"
console.log(slugify("Ten secrects of JavaScript")); //"ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); //"how-to-become-a-junior-developer-in-two-weeks"