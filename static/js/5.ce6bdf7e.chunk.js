(this["webpackJsonppoke-web"]=this["webpackJsonppoke-web"]||[]).push([[5],{107:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return o})),t.d(e,"d",(function(){return i})),t.d(e,"c",(function(){return r}));var a=function(n){return n<899?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(n,".png"):"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png")},o=function(n){return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/".concat(n,".png")},i=function(n){var e=n.split("-");return 1===e.length?e[0]:"S. ".concat(e[1])},r=function(n){var e=n.split("-");return"".concat(e[0]," ").concat(e[1]||"")}},108:function(n,e,t){"use strict";e.a=function(n,e){var t="";switch(e){case"LIST_POKEMONS":t=function(n){var e=10*n-10;return"query listPokemonPokeAPIquery {\n    pokemon_v2_pokemon(limit: ".concat(10,", offset: ").concat(e,") {\n      name\n      id\n      pokemon_v2_pokemontypes {\n        slot\n        pokemon_v2_type {\n          name\n        }\n      }\n    }\n  }")}(n);break;case"SEARCH_POKEMONS":t=function(n){return'query searchPokemonPokeAPIquery {\n    pokemon_v2_pokemon(where: {name: {_iregex: "'.concat(n,'"}}) {\n      name\n      id\n      pokemon_v2_pokemontypes {\n        pokemon_v2_type {\n          name\n        }\n      }\n    }\n  }')}(n);break;case"GET_POKEMON":t=function(n){return"query samplePokeAPIquery {\n    pokemon_v2_pokemon(where: {id: {_eq: ".concat(n,"}}) {\n      name\n      pokemon_species_id\n      pokemon_v2_pokemontypes {\n        slot\n        pokemon_v2_type {\n          name\n        }\n      }\n      height\n      base_experience\n      weight\n      is_default\n      pokemon_v2_pokemonabilities {\n        pokemon_v2_ability {\n          name\n        }\n        is_hidden\n        slot\n      }\n      pokemon_v2_pokemonspecy {\n        gender_rate\n        pokemon_v2_evolutionchain {\n          pokemon_v2_pokemonspecies(order_by: {id: asc}) {\n            name\n            id\n            pokemon_v2_pokemons {\n              pokemon_v2_pokemontypes {\n                pokemon_v2_type {\n                  name\n                }\n              }\n            }\n          }\n        }\n        pokemon_v2_pokemoncolor {\n          name\n        }\n      }\n      pokemon_v2_pokemonstats {\n        base_stat\n        stat_id\n        pokemon_v2_stat {\n          name\n        }\n      }\n    }\n  }")}(n);break;case"LIST_ITEMS":t=function(n){var e=10*n-10;return"query samplePokeAPIquery {\n    pokemon_v2_item(limit: ".concat(10,", offset: ").concat(e,") {\n      name\n      id\n      cost\n    }\n  }")}(n);break;case"SEARCH_ITEMS":t=function(n){return'query searchItemsPokeAPIquery {\n    pokemon_v2_item(where: {name: {_iregex: "'.concat(n,'"}}) {\n      name\n      id\n      cost\n    }\n  }')}(n)}return{url:"https://beta.pokeapi.co/graphql/v1beta",method:"post",data:{query:t}}}},110:function(n,e,t){"use strict";var a,o=t(12),i=t(13),r=t(0),c=i.b.div(a||(a=Object(o.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n"])));e.a=function(n){var e=n.srcURL;return Object(r.jsx)(c,{children:Object(r.jsx)("img",{src:e,alt:e})})}},111:function(n,e,t){"use strict";var a,o,i=t(12),r=t(38),c=t(27),s=t(13),d=t(62),p=t(112),l=t(110),b=t(0),m=Object(s.b)(r.a.span)(a||(a=Object(i.a)(["\n  position: absolute;\n  top: -15px;\n  left: 1.25em;\n  padding: 5px 15px;\n  border-radius: 10px;\n  background: var(--g-black), white;\n  color: rgb(var(--white));\n"]))),u=Object(s.b)(r.a.div)(o||(o=Object(i.a)(["\n  margin-top: 2em;\n  width: 100%;\n  border-radius: 1.25em;\n  position: relative;\n  z-index: initial;\n\n  .card-pokemon-contenido {\n    width: 100%;\n    height: 100%;\n    padding: 1.25em 0 1.25em 1.25em;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    z-index: initial;\n\n    .header {\n      h2 {\n        font-size: 1.5rem;\n        position: initial;\n        text-transform: capitalize;\n        z-index: 2;\n\n        @media screen and (min-width: 420px) {\n          font-size: 1.75rem;\n        }\n      }\n\n      .header-contenido {\n        display: flex;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        width: 100%;\n        gap: 5px;\n      }\n    }\n    .pokemon-image {\n      max-width: 150px;\n      position: initial;\n      z-index: 2;\n    }\n\n    .pokeball-fondo {\n      position: absolute;\n      bottom: -5em;\n      right: -5em;\n      opacity: 0.3;\n      transform: scale(0.75) rotate(20deg);\n      z-index: 1;\n    }\n  }\n\n  &.bug,\n  &.grass,\n  &.steel {\n    background: var(--g-green);\n  }\n  &.dark,\n  &.normal {\n    background: var(--g-black);\n  }\n  &.flying,\n  &.ghost,\n  &.water,\n  &.dragon,\n  &.ice {\n    background: var(--g-blue);\n  }\n  &.fire,\n  &.ground,\n  &.rock {\n    background: var(--g-orange);\n  }\n  &.poison,\n  &.fairy {\n    background: var(--g-purpure);\n  }\n  &.fighting,\n  &.psychic {\n    background: var(--g-red);\n  }\n  &.electric {\n    background: var(--g-yellow);\n  }\n"])));e.a=function(n){var e,t=n.dato;return Object(b.jsx)(c.b,{to:"/pokedex/pokemon/".concat(t.id),children:Object(b.jsxs)(u,{className:"shadow ".concat(t.types[0].pokemon_v2_type.name),layoutId:"pokemon-detail-".concat(t.id),children:[Object(b.jsxs)(m,{layoutId:"pokemon-id-".concat(t.id),children:["#",t.number_id]}),Object(b.jsxs)("div",{className:"card-pokemon-contenido",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("div",{className:"header-contenido",children:null===(e=t.types)||void 0===e?void 0:e.map((function(n,e){return Object(b.jsx)(p.a,{nombre:n.pokemon_v2_type.name},"badge-".concat(t.name,"-").concat(e))}))})]}),Object(b.jsx)(r.a.div,{className:"pokemon-image",layoutId:"pokemon-img-".concat(t.id),children:Object(b.jsx)(l.a,{srcURL:t.image})}),Object(b.jsx)("span",{className:"pokeball-fondo",children:Object(b.jsx)(d.a,{})})]})]})})}},112:function(n,e,t){"use strict";var a,o=t(12),i=t(13),r=t.p+"static/media/bug.23c77aa5.svg",c=t.p+"static/media/dark.6686c53c.svg",s=t.p+"static/media/dragon.ac063239.svg",d=t.p+"static/media/electric.2807ed88.svg",p=t.p+"static/media/fairy.26637562.svg",l=t.p+"static/media/figthing.ec7bc6ec.svg",b=t.p+"static/media/fire.0e93bcd5.svg",m=t.p+"static/media/flying.bceb01c0.svg",u=t.p+"static/media/ghost.fa99f5f4.svg",g=t.p+"static/media/grass.6a0c6164.svg",h=t.p+"static/media/ground.6b56300e.svg",j=t.p+"static/media/ice.599b7e1b.svg",v=t.p+"static/media/normal.041601a7.svg",x=t.p+"static/media/posion.35d2861a.svg",k=t.p+"static/media/psychic.52f7d1dc.svg",f=t.p+"static/media/rock.15b3afc8.svg",O=t.p+"static/media/steel.eb3b0fc0.svg",y=t.p+"static/media/water.c2281e0e.svg",w=t(0),_=function(n){switch(n){case"bug":return r;case"dark":return c;case"dragon":return s;case"electric":return d;case"fairy":return p;case"fighting":return l;case"fire":return b;case"flying":return m;case"ghost":return u;case"grass":return g;case"ground":return h;case"ice":return j;case"normal":return v;case"poison":return x;case"psychic":return k;case"rock":return f;case"steel":return O;case"water":return y;default:return v}},N=i.b.div(a||(a=Object(o.a)(["\n  user-select: none;\n  padding: 0.25em 0.5em;\n  display: flex;\n  align-items: center;\n  background: rgba(var(--green), 0.7);\n  border-radius: 0.5em;\n  img {\n    height: 100%;\n    max-width: 1.5em;\n    margin-right: 0.5em;\n  }\n  span {\n    color: rgb(var(--white));\n    text-transform: capitalize;\n    width: 100%;\n    text-align: center;\n  }\n\n  &.bug,\n  &.grass,\n  &.steel {\n    background: rgba(var(--green), 0.9);\n  }\n  &.dark,\n  &.normal {\n    background: rgba(var(--black), 0.7);\n  }\n  &.flying,\n  &.ghost,\n  &.water,\n  &.dragon,\n  &.ice {\n    background: rgba(var(--blue), 0.8);\n  }\n  &.fire,\n  &.ground,\n  &.rock {\n    background: rgba(var(--orange), 0.5);\n  }\n  &.poison,\n  &.fairy {\n    background: rgba(var(--purpure), 0.5);\n  }\n  &.fighting,\n  &.psychic {\n    background: rgba(var(--red), 0.7);\n  }\n  &.electric {\n    background: rgba(var(--yellow), 0.7);\n  }\n"])));e.a=function(n){var e=n.nombre;return Object(w.jsxs)(N,{className:"".concat(e),children:[Object(w.jsx)("img",{src:_(e),alt:"type-".concat(e)}),Object(w.jsx)("span",{children:e})]})}},113:function(n,e,t){"use strict";var a,o,i=t(12),r=t(13),c=t(107),s=t.p+"static/media/pokemon_coin.e50792b2.svg",d=t(0),p=r.b.span(a||(a=Object(i.a)(["\n  background: rgba(var(--yellow), 0.5);\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  max-width: 100px;\n  justify-content: space-between;\n  align-items: center;\n\n  img {\n    max-width: 30px;\n  }\n"]))),l=function(n){var e=n.name;return Object(d.jsxs)(p,{children:[Object(d.jsx)("img",{src:s,alt:"pokecoin"}),e]})},b=t(110),m=r.b.div(o||(o=Object(i.a)(["\n  background: linear-gradient(\n    to left,\n    rgba(var(--shadow), 0.25),\n    rgb(var(--shadow))\n  );\n  padding: 1.25em;\n  width: 100;\n  border-radius: 1.25em;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 1.25em;\n\n  .item-left {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    span:nth-child(1) {\n      text-transform: capitalize;\n      font-size: 1.2rem;\n    }\n  }\n  .item-right {\n    div {\n      img {\n        transform: scale(2.5);\n      }\n    }\n  }\n\n  &:hover {\n    background: linear-gradient(\n      to left,\n      rgb(var(--shadow)),\n      rgba(var(--shadow), 0.25)\n    );\n  }\n"])));e.a=function(n){var e=n.dato;return Object(d.jsxs)(m,{children:[Object(d.jsxs)("div",{className:"item-left",children:[Object(d.jsx)("span",{children:Object(c.c)(e.name)}),Object(d.jsx)(l,{name:e.cost})]}),Object(d.jsx)("div",{className:"item-right",children:Object(d.jsx)(b.a,{srcURL:e.image})})]})}},114:function(n,e,t){"use strict";var a,o=t(12),i=t(7),r=t(13),c=t(63),s=t(0),d=r.b.form(a||(a=Object(o.a)(['\n  background: rgba(var(--shadow), 0.6);\n  border-radius: 1.25em;\n  padding: 1em 1.25em;\n  display: flex;\n  align-items: center;\n\n  input[type="text"] {\n    width: 100%;\n    font-size: 1.5rem;\n    margin-right: 5px;\n    appearance: none;\n    outline: none;\n    border: 0;\n    background: transparent;\n    font-weight: light;\n  }\n  button {\n    appearance: none;\n    outline: none;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n  }\n'])));e.a=function(n){var e=n.base,t=Object(i.f)();return Object(s.jsxs)(d,{onSubmit:function(n){n.preventDefault();var a=n.target.children.search.value.replaceAll(" ","-");t.push("/".concat(e,"/search/").concat(a)),n.target.reset()},children:[Object(s.jsx)("input",{name:"search",placeholder:"Buscar ".concat("pokedex"===e?"p\xf3kemon":e),type:"text",autoFocus:!0,autoComplete:"off"}),Object(s.jsx)("button",{type:"submit",children:Object(s.jsx)(c.a,{icono:"search",width:"1.75em",height:"1.75em"})})]})}},115:function(n,e,t){"use strict";var a,o,i,r=t(12),c=t(1),s=t(13),d=t(113),p=t(111),l=t(86),b=t(0),m=function(n){var e=n.data,t=n.dispatch,a=n.type,o=n.isLoading;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(u,{children:["pokemon"===a&&e.data.map((function(n){return Object(b.jsx)(p.a,{dato:n},"".concat(n.name,"-").concat(n.id))})),"item"===a&&e.data.map((function(n){return Object(b.jsx)(d.a,{dato:n},"".concat(n.name,"-").concat(n.id))}))]}),o?Object(b.jsx)(g,{children:Object(b.jsx)(l.a,{})}):Object(b.jsx)(h,{onClick:function(){t()},children:"Load more"})]})},u=s.b.div(a||(a=Object(r.a)(["\n  margin: 2em 0;\n"]))),g=s.b.div(o||(o=Object(r.a)(["\n  padding: 1.25em;\n  margin-top: 1.25em;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),h=s.b.button(i||(i=Object(r.a)(["\n  margin: 0 auto;\n  display: block;\n  padding: 0.5em 1.25em;\n  font-size: 1.5rem;\n  border-radius: 1.25em;\n  border: 0;\n  background: var(--g-yellow);\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.25);\n  }\n"])));e.a=Object(c.memo)(m)},116:function(n,e,t){"use strict";var a,o,i=t(12),r=t(13),c=t(113),s=t(111),d=t(86),p=t(0),l=r.b.div(a||(a=Object(i.a)(["\n  margin-top: 2em;\n\n  h2 {\n    width: 100%;\n    text-align: center;\n  }\n"]))),b=r.b.div(o||(o=Object(i.a)(["\n  padding: 1.25em;\n  margin-top: 1.25em;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"])));e.a=function(n){var e=n.data,t=n.type,a=n.isLoading;return Object(p.jsxs)(l,{children:[a&&Object(p.jsx)(b,{children:Object(p.jsx)(d.a,{})}),0!==e.length?Object(p.jsxs)(p.Fragment,{children:["search"===t&&e.map((function(n){return Object(p.jsx)(c.a,{dato:n},"sp-".concat(n.id))})),"pokemon"===t&&e.map((function(n){return Object(p.jsx)(s.a,{dato:n},"cp-".concat(n.id))}))]}):Object(p.jsx)("h2",{children:"No hay Items"})]})}},143:function(n,e,t){"use strict";t.r(e);var a,o,i,r,c,s,d,p,l,b,m,u,g,h,j,v,x=t(64),k=t(7),f=t(144),O=t(146),y=t(25),w=t(12),_=t(1),N=t(109),P=t.n(N),S=t(13),I=t(38),z=t(61),E=t(108),A=t(107),L=t(63),M=t(0),q=Object(S.b)(I.a.span)(a||(a=Object(w.a)(["\n  font-size: 1.25em;\n  font-weight: 200;\n"]))),K=S.b.nav(o||(o=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25em;\n  color: rgb(var(--white));\n\n  svg {\n    cursor: pointer;\n  }\n  .pokemon-name {\n    font-size: 1.25rem;\n    text-transform: capitalize;\n  }\n"]))),T=function(n){var e=n.id,t=n.name,a=n.resetData,o=Object(k.f)();return Object(M.jsxs)(K,{children:[Object(M.jsx)(L.a,{icono:"back",width:"2em",height:"2em",onClick:function(){a(),o.goBack()}}),Object(M.jsx)("span",{className:"pokemon-name",children:void 0===t?"...":t}),Object(M.jsxs)(q,{layoutId:"pokemon-id-".concat(e),children:["#","".concat(e).padStart(3,0)]})]})},C=t(112),D=Object(S.b)(I.a.div)(i||(i=Object(w.a)(["\n  flex: 1;\n  padding: 0.75em 0;\n  background: rgb(var(--white));\n  border-radius: 20px 20px 0 0;\n  top: ",";\n  position: relative;\n  color: rgb(var(--black));\n  border: 2px solid rgb(var(--shadow));\n  z-index: 5;\n  &.top {\n    top: 0;\n  }\n  &.active {\n    background: rgb(var(--white)) !important;\n    color: rgb(var(--black)) !important;\n    .card-info-header {\n      hr {\n        border: 1px solid rgb(var(--black)) !important;\n      }\n    }\n  }\n  .card-info-header {\n    padding: 0.5em 2em;\n    cursor: pointer;\n    div {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      h4 {\n        text-transform: uppercase;\n      }\n    }\n    hr {\n      max-width: 50px;\n      border: 1px solid rgb(var(--white));\n    }\n  }\n\n  &.green {\n    background: rgb(var(--green));\n    color: rgb(var(--white));\n    border: 1px solid rgb(var(--green));\n  }\n  &.red {\n    background: rgb(var(--red));\n    color: rgb(var(--white));\n    border: 1px solid rgb(var(--red));\n  }\n  &.blue,\n  &.white {\n    background: rgb(var(--blue));\n    color: rgb(var(--white));\n    border: 1px solid rgb(var(--blue));\n  }\n  &.brown {\n    background: rgb(var(--orange));\n    color: rgb(var(--white));\n    border: 1px solid rgb(var(--orange));\n  }\n  &.purple {\n    background: rgb(var(--purpure));\n    color: rgb(var(--white));\n    border: 1px solid rgb(var(--purpure));\n  }\n  &.yellow {\n    background: rgb(var(--yellow));\n    color: rgb(var(--white));\n    border: 1px solid rgb(var(--yellow));\n  }\n  &.pink {\n    background: rgb(var(--pink));\n    color: rgb(var(--white));\n    border: 1px solid rgb(var(--pink));\n  }\n  &.gray {\n    background: rgb(var(--black));\n    color: rgb(var(--white));\n    border: 1px solid rgb(var(--black));\n  }\n\n  @media screen and (min-width: 375px) {\n    top: ",";\n    padding: 1.25em 0;\n  }\n"])),(function(n){return"".concat(-20*n.sizeTop,"px")}),(function(n){return"".concat(-15*n.sizeTop,"px")})),R=Object(S.b)(I.a.div)(r||(r=Object(w.a)(["\n  padding: 0.5em 2em 2em 2em;\n  height: 150px;\n  overflow-y: auto;\n  @media screen and (min-width: 375px) {\n    height: 250px;\n    padding: 1.25em 2em 0.5em 2em;\n  }\n"]))),G=function(n){var e=n.children,t=n.title,a=n.top,o=n.index,i=n.active,r=n.change,c=n.icon,s=n.iconName,d=n.color;return Object(M.jsxs)(D,{layout:!0,className:"".concat(a&&"top"," ").concat(i===o&&"active"," ").concat(d),sizeTop:o-1,children:[Object(M.jsxs)(I.a.div,{className:"card-info-header",onClick:function(){return r(o)},layout:!0,children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("h4",{children:t}),c&&Object(M.jsx)(L.a,{icono:s,width:"1.25em",height:"1.25em"})]}),Object(M.jsx)("hr",{})]}),i===o&&Object(M.jsx)(R,{children:e})]})},H=S.b.div(c||(c=Object(w.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n"]))),B=S.b.span(s||(s=Object(w.a)(["\n  padding: 0.25em;\n  margin: 0 5px;\n  background: rgba(var(--shadow), 0.75);\n  border-radius: 0.25em;\n  user-select: none;\n"]))),F=S.b.ul(d||(d=Object(w.a)(["\n  list-style: none;\n  li {\n    padding: 0.5em 0;\n    display: flex;\n    span:nth-child(1) {\n      flex: 1;\n    }\n    span:nth-child(2) {\n      flex: 3;\n      color: black;\n    }\n  }\n"]))),U=S.b.ul(p||(p=Object(w.a)(["\n  list-style: none;\n  li {\n    padding: 1em 0;\n    display: flex;\n    align-items: center;\n    span:nth-child(1) {\n      text-transform: capitalize;\n      flex: 1.25;\n      text-align: right;\n    }\n    span:nth-child(2) {\n      text-align: center;\n      flex: 0.75;\n    }\n  }\n"]))),J=S.b.div(l||(l=Object(w.a)(['\n  flex: 3;\n  width: 100%;\n  background: rgb(var(--shadow));\n  height: 5px;\n  border-radius: 10em;\n  display: block;\n  overflow: hidden;\n  position: relative;\n\n  ::before {\n    content: "";\n    border-radius: 10em;\n    width: ',";\n    height: 100%;\n    background: red;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  &.hp::before,\n  &.defense::before {\n    background-color: rgb(var(--red)) !important;\n  }\n  &.attack::before,\n  &.special-attack::before,\n  &.special-defense::before {\n    background-color: rgb(var(--yellow)) !important;\n  }\n  &.speed::before {\n    background-color: rgb(var(--green)) !important;\n  }\n"])),(function(n){return"".concat(n.porcentaje,"%")})),W=S.b.div(b||(b=Object(w.a)(["\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 20px;\n  align-items: center;\n"]))),Q=S.b.div(m||(m=Object(w.a)(["\n  max-width: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    background: rgba(var(--shadow), 7);\n    border-radius: 1em;\n    width: 100%;\n  }\n  span {\n    text-transform: capitalize;\n    margin-top: 3px;\n  }\n  .e-types-pokemon {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n  @media screen and (min-width: 375px) {\n    max-width: 125px;\n  }\n"]))),V=function(n){var e,t,a,o,i,r=n.datos,c=n.color,s=Object(_.useState)(1),d=Object(x.a)(s,2),p=d[0],l=d[1],b=function(n){l(n)};return Object(M.jsx)(H,{children:Object(M.jsxs)(f.a,{type:"crossfade",children:[Object(M.jsx)(G,{title:"info",top:!0,index:1,active:p,change:b,icon:!0,iconName:"info",color:c,children:Object(M.jsxs)(F,{children:[Object(M.jsxs)("li",{children:[Object(M.jsx)("span",{children:"Abilities:"}),Object(M.jsx)("span",{children:null===r||void 0===r||null===(e=r.pokemon_v2_pokemonabilities)||void 0===e?void 0:e.map((function(n,e){return Object(M.jsx)(B,{children:n.pokemon_v2_ability.name},"ability-".concat(e))}))})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("span",{children:"Base Ex.:"}),Object(M.jsx)("span",{children:r.base_experience})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("span",{children:"Height:"}),Object(M.jsx)("span",{children:r.height})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("span",{children:"Weight:"}),Object(M.jsx)("span",{children:void 0!==r.weight&&.1*r.weight})]})]})}),Object(M.jsx)(G,{title:"stats",index:2,active:p,change:b,icon:!0,iconName:"stats",color:c,children:Object(M.jsx)(U,{children:null===r||void 0===r||null===(t=r.pokemon_v2_pokemonstats)||void 0===t?void 0:t.map((function(n){return Object(M.jsxs)("li",{children:[Object(M.jsx)("span",{children:Object(A.d)(n.pokemon_v2_stat.name)}),Object(M.jsx)("span",{children:n.base_stat}),Object(M.jsx)(J,{porcentaje:n.base_stat,className:n.pokemon_v2_stat.name})]},"".concat(n.pokemon_v2_stat.name,"-").concat(n.base_stat))}))})}),Object(M.jsx)(G,{title:"evolution",index:3,active:p,change:b,icon:!0,iconName:"evolution",color:c,children:Object(M.jsx)(W,{children:null===r||void 0===r||null===(a=r.pokemon_v2_pokemonspecy)||void 0===a||null===(o=a.pokemon_v2_evolutionchain)||void 0===o||null===(i=o.pokemon_v2_pokemonspecies)||void 0===i?void 0:i.map((function(n,e){return Object(M.jsxs)(Q,{children:[Object(M.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(n.id,".png"),alt:"".concat(n.name,"-").concat(n.id)}),Object(M.jsx)("span",{children:n.name}),Object(M.jsx)("div",{className:"e-types-pokemon",children:n.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map((function(n,e){return Object(M.jsx)(C.a,{nombre:n.pokemon_v2_type.name},"type-evo-".concat(e))}))})]},"".concat(n.name,"-").concat(n.id,"-").concat(e))}))})})]})})},X=t(86),Y=t(62),Z=S.b.div(u||(u=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),$=Object(S.b)(I.a.div)(g||(g=Object(w.a)(["\n  background: var(--g-white), white;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  @media screen and (min-width: 375px) {\n    border-radius: 1.25em;\n    max-width: 414px;\n    max-height: 812px;\n    min-height: 812px;\n  }\n"]))),nn=Object(S.b)(I.a.div)(h||(h=Object(w.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  &.green {\n    background: var(--g-green), white;\n  }\n  &.red {\n    background: var(--g-red), white;\n  }\n  &.blue,\n  &.white {\n    background: var(--g-blue), white;\n  }\n  &.brown {\n    background: var(--g-orange), white;\n  }\n  &.purple {\n    background: var(--g-purpure), white;\n  }\n  &.yellow {\n    background: var(--g-yellow), white;\n  }\n  &.pink {\n    background: var(--g-pink), white;\n  }\n  &.gray {\n    background: var(--g-black), white;\n  }\n"]))),en=S.b.div(j||(j=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.25em;\n  position: relative;\n  max-height: 273px;\n\n  .pokemon-image {\n    max-width: 150px;\n    position: initial;\n    z-index: 3;\n    @media screen and (min-width: 375px) {\n      max-width: 200px;\n    }\n  }\n\n  .pokeball-fondo {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1.5) rotate(150deg);\n    opacity: 0.2;\n    z-index: 2;\n  }\n  div {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    div {\n      max-height: 33px;\n    }\n  }\n"]))),tn=S.b.div(v||(v=Object(w.a)(["\n  padding: 1.25em;\n  margin-top: 1.25em;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),an=function(n){var e,t=n.id,a=Object(z.b)(),o=a.pokemonState,i=o.pokemon,r=o.pokemons,c=o.isLoading,s=a.pokemonDispatch;Object(_.useEffect)((function(){s({type:"POKEMONS_LOADING"}),P()(Object(E.a)(t,"GET_POKEMON")).then((function(n){var e=n.status,t=n.data.data;200===e&&s({type:"POKEMON",payload:t.pokemon_v2_pokemon[0]})}))}),[t]);var d=(null===i||void 0===i?void 0:i.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name)||"none";return Object(M.jsx)(Z,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.15}},transition:{duration:.2,delay:.15},children:Object(M.jsxs)($,{layoutId:"pokemon-detail-".concat(t),children:[c&&Object(M.jsx)(tn,{children:Object(M.jsx)(X.a,{})}),null!==i&&1!==r.next&&!1===c&&Object(M.jsxs)(nn,{className:"".concat(d),children:[Object(M.jsx)(T,{id:t,name:i.name,resetData:function(){return s({type:"POKEMON_CLEAR"})}}),Object(M.jsxs)(en,{children:[Object(M.jsx)(I.a.img,{src:Object(A.b)(t),alt:"pokemon-img-".concat(i.name),layoutId:"pokemon-img-".concat(t),className:"pokemon-image"}),Object(M.jsx)("div",{children:null===i||void 0===i||null===(e=i.pokemon_v2_pokemontypes)||void 0===e?void 0:e.map((function(n,e){return Object(M.jsx)(C.a,{nombre:n.pokemon_v2_type.name},"type-".concat(e))}))}),Object(M.jsx)("span",{className:"pokeball-fondo",children:Object(M.jsx)(Y.a,{})})]}),Object(M.jsx)(V,{datos:i,color:d})]})]})})},on=t(114),rn=t(115),cn=function(){var n=Object(z.b)(),e=n.pokemonState,t=n.pokemonDispatch,a=Object(_.useCallback)((function(){t({type:"POKEMONS_LOADING"}),P()(Object(E.a)(e.pokemons.next,"LIST_POKEMONS")).then((function(n){var a=n.status,o=n.data.data;if(200===a){var i=o.pokemon_v2_pokemon.map((function(n){return{id:n.id,number_id:"".concat(n.id).padStart(3,0),name:n.name,image:Object(A.b)(n.id),types:n.pokemon_v2_pokemontypes}}));t({type:"POKEMONS",payload:{data:i,next:e.pokemons.next+1}})}}))}),[t,e.pokemons]);return Object(_.useEffect)((function(){0===e.pokemons.data.length&&a()}),[e.pokemons.data,a]),Object(M.jsx)(rn.a,{data:e.pokemons,dispatch:a,isLoading:e.isLoading,type:"pokemon"})},sn=Object(_.memo)(cn),dn=t(116),pn=function(n){var e=n.pokemon,t=Object(z.b)(),a=t.pokemonState,o=t.pokemonDispatch;return Object(_.useEffect)((function(){P()(Object(E.a)(e,"SEARCH_POKEMONS")).then((function(n){o({type:"POKEMONS_LOADING"});var e=n.status,t=n.data.data.pokemon_v2_pokemon.map((function(n){return{id:n.id,number_id:"".concat(n.id).padStart(3,0),name:n.name.replaceAll("-"," "),image:Object(A.b)(n.id),types:n.pokemon_v2_pokemontypes}}));200===e&&o({type:"POKEMONS_LIST",payload:t})}))}),[e]),Object(M.jsx)(dn.a,{data:a.listPokemons,type:"pokemon",isLoading:a.isLoading})};e.default=function(){var n=Object(k.g)().pathname.split("/"),e=Object(x.a)(n,4),t=e[1],a=e[2],o=e[3];return Object(M.jsx)(y.a,{children:Object(M.jsxs)(f.a,{type:"crossfade",children:[Object(M.jsx)(O.a,{children:"pokemon"===a&&Object(M.jsx)(an,{id:o},"pokemon-card")}),Object(M.jsx)("h1",{children:void 0!==a?a:"pok\xe9dex"}),Object(M.jsx)(on.a,{base:"pokedex"}),"pokedex"===t&&"search"!==a&&Object(M.jsx)(sn,{}),"search"===a&&Object(M.jsx)(pn,{pokemon:o})]})})}}}]);
//# sourceMappingURL=5.ce6bdf7e.chunk.js.map