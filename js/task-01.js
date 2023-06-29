console.log(
  'Number of categories:',
  document.body.children.categories.childElementCount,
);

const list = document.body.children.categories.childNodes;
list.forEach(item => {
  if (item.nodeName !== 'LI') {
    return;
  }

  console.log('Category:', item.firstElementChild.textContent);

  console.log('Elements:', item.lastElementChild.childElementCount);
});
