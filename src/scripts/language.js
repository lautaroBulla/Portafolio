const languageSwitch = document.getElementById('language-select');

languageSwitch.addEventListener('change', (event) => {
  const newPath = window.location.pathname.replace(
    /^\/(es|en)/,
    `/${event.target.value}`
  )
  window.location.pathname = newPath;
})