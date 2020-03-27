const scrollSpy = section=> {
  const element = document.querySelector('a[href*= ' + section+']');
  inView.offset({
    top: 400,
    bottom: 400,
});

  inView(`#${section}`)
  .on("enter", ()=> element.classList.add('active'))
  .on("exit", el => element.classList.remove('active'))
}
["home", "about", "projects", "contact"].forEach(scrollSpy);
