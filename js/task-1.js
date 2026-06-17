const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const name = item.querySelector('h2');
  const nameCategory = name.textContent;
  const categoryItems = item.querySelectorAll('li');
  const numberItems = categoryItems.length;
  console.log(`Category: ${nameCategory}`);
  console.log(`Elements: ${numberItems}`);
});
