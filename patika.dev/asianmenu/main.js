const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Korea",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
const menuButtons = document.getElementById('menuButtons'); // Butonlar??m??n oldu??u div
const singleItem = document.getElementById('singleItem'); // Menu'n??n oldu??u div

const categories = menu.reduce((values,item) =>{    // Bo?? bir dizin olu??tup bunun i??ini reduce metodu ile dolduraca????z iki parametre ekledim birisi sonda olu??turdu??umuz dizi yi temsil ediyor, di??eri menu dizisinin elemanlar??n??
  if (!values.includes(item.category)) {          // e??erki olu??turdu??umuz bo?? dizinin i??inde item.category yoksa ->
      values.push(item.category)                  // bo?? dizinin i??ine item.category'i at??yuoruz
  }                                               // 
  return values;                                  // i??i dolan diziyi categories'e d??nd??r??yoruz
},['All']);                                         // -- Bo?? Dizi --                

const categoryList = () =>{                         // bir fonksiyon olu??turdum ve yapaca????m t??m i??lmeleri bu fonksiyona att??m
  const categoriBtn = categories.map(category =>{ // categoriBtn diye bir de??i??ken oluturup i??ine map metdou ile her categori eleman??n?? html taglerine ekledim
      return `<button class="btn btn-outline-dark btn-item categoryBtn " id=${category}>${category}</button>`
  }).join("");

  menuButtons.innerHTML = categoriBtn;            // menu butonlar??n??n bulundu??u div'e yukarda olu??turdu??um categori butonlar??n?? ekler
  DOM_categoryBtn = document.querySelectorAll('.categoryBtn');  // categoryBtn class'??na sahip b??t??n html elemanlar??n?? DOM_categoryBtn'a aktar??r
  DOM_categoryBtn.forEach(element =>{             // B??t??n butonlar?? d??ng??ye sokar ve her butonu ayr?? elemana al??r

      element.addEventListener('click', (btn) => { // mevcut elemana t??klad??????nda -->
          btnName = btn.target.id;                 // o elaman??n id bilgisini btnName'e aktar??r yani koreye t??kland??????nda korea olur Japan'a t??kland??????nda Japan olur ...
          if (btnName){                            // e??er btnName i??inde herhangi bir de??er varsa, yani butona t??kland??ysa -->
             const newMenu = menu.filter(e =>{     // b??t??n men??y?? fitrele -->
                 if(btnName == 'All'){             // E??er t??klanan butonun ad?? 'All' ise -->
                  singleItem.innerHTML = "";          // ??nce men?? listesini bo??alt
                  return e.category                   // sonra menu elmanlar??n??n i??inde t??m kategorileri newMenuye aktar
                 }                                // E??er ''All' de??ilse
                 singleItem.innerHTML = "";            // ??nce men?? listesini bo??alt
                  return e.category == btnName         // sonra b??t??n kategorilerin i??inde categori ad?? t??klanan butonun ad?? ile ayn?? olan butonlar?? newMenuye aktar
              }) 
              
              newMenu.forEach(item => {               // Yukarda olu??turdu??umuz newMenu de??i??keninin i??indeki t??m elemanlar?? d??ng??ye sokuyoruz
                  DOM_List = `<div class="menu-items col-lg-6 col-sm-12"> 
                  <img
                    src=${item.img}
                    alt=${item.title}
                    class="photo"
                  />
                  <div class="menu-info">
                    <div class="menu-title">
                      <h4>${item.title}</h4>
                      <h4 class="price">${item.price}</h4>
                    </div>
                    <div class="menu-text">
                      ${item.desc}
                    </div>
                  </div>
                </div>`                                   // DOM_List ad??nda bir de??i??ken olu??turup i??ine bir html elemman?? at??yoruz. Bu HTML eleman??n i??ini newMenu i??indeki elemanlara g??re ayarl??yoruz
                  singleItem.innerHTML += DOM_List;       // Daha sonra sayfa i??indeki men??n??n bulundu??u dive aktar??yoruz
              }); 
          };
      });
  });
  document.getElementById('All').click();                  // Sayfa a????ld??????nda ID'si All olan butona click eventi uygular 
};
categoryList();                                             /// ??al????t??r
