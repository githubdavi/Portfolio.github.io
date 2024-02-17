let observer= new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
console.log(entry.isIntersecting);
console.log(entry.intersectionRatio);
})
},{

  threshold:0.5
});
let target = document.getElementById('MesXp');
observer.observe(target);
