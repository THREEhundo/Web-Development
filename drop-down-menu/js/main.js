const ul = document.querySelector('#nav-list');
const menu = ['Search', 'Home', 'JavaScript', 'CSS'];

function createNav(num) {
  for (let i = 0; i < num.length; i++) {
    const li = document.createElement('li');
    li.id = `nav-${i}`;
    li.style.display = 'none';

    const a = document.createElement('a');
    a.id = `${num[i]}`;
    a.href = '#';
    a.innerHTML = `${num[i]}`;
    ul.appendChild(li);
    li.appendChild(a);
  }
}

createNav(menu);

ul.addEventListener('mouseover', () => {
  const navItems = ul.children;
  for (item of navItems) {
    item.style.display = 'block';
  }
});

ul.addEventListener('mouseout', () => {
  const navItems = ul.children;
  for (item of navItems) {
    item.style.display = 'none';
  }
});
