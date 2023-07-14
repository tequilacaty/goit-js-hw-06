const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.children.length}`);

[...categoriesList.children].forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})


