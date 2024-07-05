const SearchEl = document.querySelector('.search');
const searchInputEl = SearchEl.querySelector('input');

SearchEl.addEventListener('click', function() {
  // focus 강제 적용!
  searchInputEl.focus(); 
});

searchInputEl.addEventListener('focus', function() {
  SearchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  SearchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});