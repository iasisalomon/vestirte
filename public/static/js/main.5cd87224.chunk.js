(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/dummy-avatar.887fe0f6.jpg"},,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/product_dummy.96a2c3f0.svg"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l);t(14);var s=function(e){var a=e.active,t=e.url,n=e.icon,l=e.text;return r.a.createElement("li",{className:"nav-item ".concat(a?"active":"")},r.a.createElement("a",{className:"nav-link",href:t},r.a.createElement("i",{className:"fas ".concat(n)}),r.a.createElement("span",null,l)))};var m=function(e){return r.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},r.a.createElement("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"/"},r.a.createElement("div",{className:"sidebar-brand-icon"},r.a.createElement("i",{className:"fas fa-chart-line"})),r.a.createElement("div",{className:"sidebar-brand-text mx-3"},"Admin")),r.a.createElement("hr",{className:"sidebar-divider my-0"}),r.a.createElement(s,{active:!0,icono:"fa-tachometer-al",text:"Dashboard",url:"/"}),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement("div",{className:"sidebar-heading"},"Actions"),r.a.createElement(s,{active:!1,icon:"fa-folder",text:"Pages",url:"/"}),r.a.createElement(s,{active:!1,icon:"fa-chart-area",text:"Charts",url:"/"}),r.a.createElement(s,{active:!1,icon:"fa-table",text:"Tables",url:"/"}),r.a.createElement("hr",{className:"sidebar-divider d-none d-md-block"}))},o=t(7),i=t.n(o);var d=function(e){return r.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:e.url,id:"alertsDropdown"},r.a.createElement("i",{className:"fas ".concat(e.icon," fa-fa")}),r.a.createElement("span",{className:"badge badge-".concat(e.color," badge-counter")},e.value)))},u=[{icon:"fa-bell",value:3,color:"warning",url:"/"},{icon:"fa-envelope",value:7,color:"danger",url:"/"}];var E=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},r.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("ul",{className:"navbar-nav ml-auto"},u.map((function(e,a){return r.a.createElement(d,Object.assign({key:a},e))})),r.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),r.a.createElement("li",{className:"nav-item dropdown no-arrow"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"userDropdown"},r.a.createElement("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small"},"Walter White"),r.a.createElement("img",{className:"img-profile rounded-circle",src:i.a,width:"60",alt:"imagen de usuario"})))))},v=t(1),b=t(2),h=t(4),f=t(3);var p=function(e){var a=e.color,t=e.text,n=e.value;return r.a.createElement("div",{className:"card border-left-".concat(a," shadow h-100 py-2")},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col mr-2"},r.a.createElement("div",{className:"text-xs font-weight-bold text-".concat(a," text-uppercase mb-1")}," ",t),r.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},n)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("i",{className:"fas fa-clipboard-list fa-2x text-gray-300"})))))},N=(t(15),function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;return Object(v.a)(this,t),(e=a.call(this)).state={lu:[]},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/usuarios/ultimo").then((function(e){return e.json()})).then((function(a){console.log("asd"+a.data),e.setState({lu:a.data})}))}},{key:"render",value:function(){var e=this.state.lu.image;return r.a.createElement("div",{className:"col-lg-6 mb-4"},r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Ultimo Usuario")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"img-fluid px-3 px-sm-4 mt-3 mb-4",style:{width:"25rem"},src:e,alt:"Imagen producto"})),r.a.createElement("h4",{className:"text-center"},this.state.lu.nombre," ",this.state.lu.apellido))))}}]),t}(n.Component)),g=t(8),y=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;return Object(v.a)(this,t),(e=a.call(this)).state={categorias:[]},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/productos/categorias").then((function(e){return e.json()})).then((function(a){console.log("asd"+a.data),e.setState({categorias:Object(g.a)(a.data)})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Categories in Data Base")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 mb-4"},this.state.categorias.map((function(e,a){return r.a.createElement("div",{className:"card bg-info text-white shadow"},r.a.createElement("div",{className:"card-body"},e))}))))))}}]),t}(n.Component);var w=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.nombre),r.a.createElement("td",null,e.descripcion),r.a.createElement("td",null,e.descuento),r.a.createElement("td",null,e.categoria),r.a.createElement("td",null,e.envio),r.a.createElement("td",null,e.stock),r.a.createElement("td",null,e.link))},x=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;return Object(v.a)(this,t),(e=a.call(this)).state={products:[],cantidad:0},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/productos").then((function(e){return e.json()})).then((function(a){console.log(a.data),e.setState({products:a.data})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card shadow mb-4"},r.a.createElement("div",{className:"card-header py-3"},r.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"All products")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered",id:"dataTable",width:"100%",cellSpacing:"0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Categories"),r.a.createElement("th",null,"Colors"),r.a.createElement("th",null,"Stock"))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Categories"),r.a.createElement("th",null,"Colors"),r.a.createElement("th",null,"Stock"))),r.a.createElement("tbody",null,this.state.products.map((function(e,a){return r.a.createElement(w,Object.assign({key:a},e))})))))))}}]),t}(n.Component),j=function(e){Object(h.a)(t,e);var a=Object(f.a)(t);function t(){var e;return Object(v.a)(this,t),(e=a.call(this)).state={cards:[],Lasproduc:[]},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/dashboard/cards").then((function(e){return e.json()})).then((function(a){console.log(a.data),e.setState({cards:a.data})})),fetch("api/usuarios/ultimo").then((function(e){return e.json()})).then((function(e){console.log("last"+e.data)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"d-sm-flex align-items-center justify-content-between mb-4"},r.a.createElement("h1",{className:"h3 mb-0 text-gray-800"},"App Dashboard")),r.a.createElement("div",{className:"row"},this.state.cards.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-md-4 mb-4"},r.a.createElement(p,e))}))),r.a.createElement("div",{className:"row"},r.a.createElement(N,null),r.a.createElement("div",{className:"col-lg-6 mb-4"},r.a.createElement(y,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(x,null))))}}]),t}(n.Component);var k=function(e){return r.a.createElement("div",{id:"content"},r.a.createElement(E,null),r.a.createElement(j,null))};var O=function(e){return r.a.createElement("div",null,r.a.createElement("footer",{className:"sticky-footer bg-white"},r.a.createElement("div",{className:"container my-auto"},r.a.createElement("div",{className:"copyright text-center my-auto"},r.a.createElement("span",null,"Copyright \xa9 Dashboard 2020")))))};var D=function(e){return r.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},r.a.createElement(k,null),r.a.createElement(O,null))};var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(D,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("wrapper"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5cd87224.chunk.js.map