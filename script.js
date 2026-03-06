function goTo(pageId) {
  const pages = document.querySelectorAll('.page');

  pages.forEach((page) => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function selectRole(role) {
  if (role === 'parent') {
    goTo('parentLoginPage');
  } else if (role === 'child') {
    goTo('childLoginPage');
  }
}
