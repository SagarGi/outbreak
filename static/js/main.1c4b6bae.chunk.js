(this["webpackJsonpoutbreak-19"]=this["webpackJsonpoutbreak-19"]||[]).push([[0],{22:function(e,a,l){e.exports=l(49)},27:function(e,a,l){},28:function(e,a,l){e.exports=l.p+"static/media/logo.5d5d9eef.svg"},29:function(e,a,l){},49:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),c=l(2),o=l.n(c),r=(l(27),l(16)),s=l(17),d=l(20),i=l(21),u=l(4),m=(l(28),l(29),l(6)),b=l.n(m),v=l(19),h=[{value:"Nepal",label:"Nepal",code:"np"},{value:"India",label:"India",code:"in"},{value:"USA",label:"USA",code:"us"},{value:"Italy",label:"Italy",code:"it"},{value:"Spain",label:"Spain",code:"es"},{value:"Germany",label:"Germany",code:"de"},{value:"Iran",label:"Iran",code:"ir"},{value:"France",label:"France",code:"fr"},{value:"UK",label:"UK",code:"gb"},{value:"Switzerland",label:"Switzerland",code:"ch"},{value:"Belgium",label:"Belgium",code:"be"},{value:"Netherlands",label:"Netherlands",code:"nl"},{value:"S. Korea",label:"S. Korea",code:"kr"},{value:"Austria",label:"Austria",code:"at"},{value:"Turkey",label:"Turkey",code:"tr"},{value:"Canada",label:"Canada",code:"ca"},{value:"Portugal",label:"Portugal",code:"pt"},{value:"Norway",label:"Norway",code:"no"},{value:"Israel",label:"Israel",code:"il"},{value:"Australia",label:"Australia",code:"au"},{value:"Sweden",label:"Sweden",code:"se"},{value:"Malaysia",label:"Malaysia",code:"my"},{value:"Ireland",label:"Ireland",code:"ie"},{value:"Denmark",label:"Denmark",code:"dk"},{value:"Chile",label:"Chile",code:"cl"},{value:"Poland",label:"Poland",code:"pl"},{value:"Japan",label:"Japan",code:"jp"},{value:"Russia",label:"Russia",code:"ru"},{value:"Pakistan",label:"Pakistan",code:"pk"},{value:"Philippines",label:"Philippines",code:"ph"},{value:"Thailand",label:"Thailand",code:"th"},{value:"Saudi Arabia",label:"Saudi Arabia",code:"sa"},{value:"Indonesia",label:"Indonesia",code:"id"},{value:"Finland",label:"Finland",code:"fi"},{value:"South Africa",label:"South Africa",code:"za"},{value:"Greece",label:"Greece",code:"gr"},{value:"Mexico",label:"Mexico",code:"mx"},{value:"Singapore",label:"Singapore",code:"sg"},{value:"Hong Kong",label:"Hong Kong",code:"hk"},{value:"Qatar",label:"Qatar",code:"qa"},{value:"UAE",label:"UAE",code:"ae"},{value:"New Zealand",label:"New Zealand",code:"nz"},{value:"Iraq",label:"Iraq",code:"iq"},{value:"Kuwait",label:"Kuwait",code:"kw"},{value:"Cyprus",label:"Cyprus",code:"cy"},{value:"Vietnam",label:"Vietnam",code:"vn"},{value:"Ghana",label:"Ghana",code:"gh"},{value:"Afghanistan",label:"Afghanistan",code:"af"},{value:"Kenya",label:"Kenya",code:"ke"},{value:"Bangladesh",label:"Bangladesh",code:"bd"},{value:"China",label:"China",code:"cn"},{value:"Bhutan",label:"Bhutan",code:"bt"},{value:"Maldives",label:"Maldives",code:"mv"},{value:"Ireland",label:"Ireland",code:"ie"},{value:"Brazil",label:"Brazil",code:"br"},{value:"Argentina",label:"Argentina",code:"ar"}],E={container:function(e){return Object(u.a)({},e,{width:400})}},g=function(e){Object(i.a)(l,e);var a=Object(d.a)(l);function l(){var e;return Object(r.a)(this,l),(e=a.call(this)).handleChange=function(a){e.setState({selectedOption:a},(function(){return e.state.selectedOption.value}))},e.state={globalCases:"-",globalDeaths:"-",globalRecovered:"-",selectedOption:"",countryName:"-",cases:"-",todayCases:"-",deaths:"-",todayDeaths:"-",recovered:"-",active:"-",critical:"-",url:""},e}return Object(s.a)(l,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/covid-19/country/all").then((function(a){console.log("hello"),console.log(a.data.cases),e.setState({globalCases:a.data.cases,globalDeaths:a.data.deaths,globalRecovered:a.data.recovered})}))}},{key:"sendPost",value:function(){var e=this;this.state.selectedOption.value||alert("Please select your country!!!"),b.a.post("/covid-19",{country1:this.state.selectedOption.value}).then((function(a){console.log(a.data),e.setState({countryName:a.data.country,cases:a.data.cases,todayCases:a.data.todayCases,deaths:a.data.deaths,todayDeaths:a.data.todayDeaths,recovered:a.data.recovered,active:a.data.active,critical:a.data.critical,url:"https://www.countryflags.io/".concat(e.state.selectedOption.code,"/flat/64.png")})}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"container main-content"},n.a.createElement("div",{className:"card wrapper"},n.a.createElement("h1",null,n.a.createElement("u",null,"COVID-19 INFORMATION HUB")),n.a.createElement("h5",null,"World Wide:"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-12 col-sm-12 bg-dark text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Total Cases:")),n.a.createElement("br",null),this.state.globalCases)),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-12 col-sm-12 bg-danger text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Total Deaths:")),n.a.createElement("br",null),this.state.globalDeaths)),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-12 col-sm-12 bg-success text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Total Recovered:")),n.a.createElement("br",null),this.state.globalRecovered)))),n.a.createElement("h6",{className:"text-white mt-3 text-dark"},"Please Select Any Country To Get Information:"),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3 select"},n.a.createElement(v.a,{styles:E,value:this.state.selectedOption,onChange:this.handleChange,options:h,theme:function(e){return Object(u.a)({},e,{borderRadius:5,colors:Object(u.a)({},e.colors,{primary25:"hotpink",primary:"blue"})})}})),n.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3 button"},n.a.createElement("button",{className:"getinfo",onClick:function(){return e.sendPost()}},"Get Information")))),n.a.createElement("h5",{className:"mt-4"},"Country:",n.a.createElement("img",{className:"ml-4",src:this.state.url})," "),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 mt-4 bg-dark text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Cases:")),n.a.createElement("br",null),this.state.cases)),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 mt-4 bg-danger text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Deaths:")),n.a.createElement("br",null),this.state.deaths)),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 mt-4 bg-success text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Recovered:")),n.a.createElement("br",null),this.state.recovered)),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 mt-4 bg-secondary text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Todays Cases")),n.a.createElement("br",null),this.state.todayCases)),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 mt-4 bg-warning text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Todays Deaths")),n.a.createElement("br",null),this.state.todayDeaths)),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 mt-4 bg-info text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Active")),n.a.createElement("br",null),this.state.active)),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 mt-4 bg-dark text-white"},n.a.createElement("p",null,n.a.createElement("b",null,n.a.createElement("u",null,"Critical")),n.a.createElement("br",null),this.state.critical)))))))}}]),l}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.1c4b6bae.chunk.js.map