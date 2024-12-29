const routes = {
  avila: [
    { name: "Plataforma de gredos IDA", link: "https://maps.app.goo.gl/BYHJeHt2rXhJPz91A" },
    { name: "Navarrevisca a Mijares", link: "https://maps.app.goo.gl/NctwCKiCnVChnasTA" }, 
    { name: "Mijares a casa", link: "https://maps.app.goo.gl/NBfvR9y7awR3DPyu7" }
  ],
  cuenca: [
      { name: "", link: "" }
  ],
  ciudadReal: [
      { name: "Ruidera", link: "https://maps.app.goo.gl/KJGbX3sx2XEsNGis6" }
  ],
  extremadura: [
    { name: "Guadalupe", link: "https://maps.app.goo.gl/9EWXWB56mtJWPAWi8" }
  ],
  guadalajara: [
    { name: "", link: "" }
  ],
  leon: [
    { name: "", link: "" }
  ],
  salamanca: [
    { name: "", link: "" }
  ],
  segovia: [
    { name: "", link: "" }
  ],
  soria: [
    { name: "", link: "" }
  ],
  teruel: [
    { name: "", link: "" }
  ],
  toledo: [
    { name: "", link: "" }
  ],
  valladolid: [
    { name: "", link: "" }
  ],
  zamora: [
    { name: "", link: "" }
  ]

// Añade más provincias y rutas según necesites
};

document.getElementById('province-select').addEventListener('change', function() {
  const province = this.value;
  const routesList = document.getElementById('routes-list');
  routesList.innerHTML = '';

  if (routes[province]) {
      routes[province].forEach(route => {
          const routeItem = document.createElement('div');
          routeItem.className = 'route-item';

          const routeLink = document.createElement('a');
          routeLink.href = route.link;
          routeLink.textContent = route.name;
          routeLink.target = '_blank';

          routeItem.appendChild(routeLink);
          routesList.appendChild(routeItem);
      });
  }
});
