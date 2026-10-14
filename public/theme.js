// Sets the theme before the page paints, so a saved theme does not flash the other one first.
// A plain script file, not inline: the Content-Security-Policy blocks inline scripts.
// src/useTheme.ts keeps the same storage key and the same rule.
(function () {
  var t;
  try {
    t = localStorage.getItem('theme');
  } catch (e) {}
  if (t !== 'light' && t !== 'dark') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = t;
})();
