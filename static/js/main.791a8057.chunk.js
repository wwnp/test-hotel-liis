(this["webpackJsonptest-hotel-liis"]=this["webpackJsonptest-hotel-liis"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),s=n(37),r=n(0),i=n(32),l=n(2),o=function(e){var t=e.size,n=void 0===t?"16px":t,c=e.isFav,a=e.onClick,s=!0===c?"red":"grey";return Object(l.jsx)(r.b.Provider,{value:{color:s,size:n},children:Object(l.jsx)("span",{onClick:a,children:Object(l.jsx)(i.b,{className:"pointer"})})})},j=function(e){var t=e.color,n=void 0===t?"yellow":t,c=e.size,a=void 0===c?"16px":c;return Object(l.jsx)(r.b.Provider,{value:{color:n,size:a},children:Object(l.jsx)("span",{children:Object(l.jsx)(i.a,{})})})},d=n(9),b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u=/.{8,}/,O={year:"numeric",month:"long",day:"numeric"},x="RATE",m="PRICE";function h(e){return e>=5?"\u0434\u043d\u0435\u0439":e>=2?"\u0434\u043d\u044f":"\u0434\u0435\u043d\u044c"}var p="SET_TEST",f="SET_HOTELS",v="START_LOADING",g="END_LOADING",y="SET_REQUEST",N="SET_FAV",_="SET_MODE_RATE",S="SET_MODE_PRICE",w=function(e){for(var t=e.hotel,n=Object(d.d)(),c=Object(d.e)((function(e){return e.homepage.request})),a=c.date,s=c.days,r=t.hotelName,i=t.stars,b=t.priceAvg,u=[],x=0;x<i;x++)u.push("gold");for(var m=5-u.length,p=0;p<m;p++)u.push("grey");return Object(l.jsxs)("div",{className:"d-flex justify-between align-center",style:{borderBottom:"1px solid #ccc",paddingBottom:"10px "},children:[Object(l.jsx)("div",{className:"d-flex align-center",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"HomePage__FavName",children:r}),Object(l.jsxs)("p",{children:[new Date(a).toLocaleDateString("ru-RU",O)," -- ",s," ",h(s)]}),u.map((function(e,t){return Object(l.jsx)(j,{color:e},e+t+(new Date).toLocaleString())}))]})}),Object(l.jsxs)("div",{className:"d-flex flex-column align-end align-center",children:[Object(l.jsx)(o,{size:"24px",isFav:!0,onClick:function(){return n({type:N,payload:t})}}),Object(l.jsxs)("p",{className:"text-muted",children:["price: ",Object(l.jsxs)("span",{className:"HomePage__price ml-1",children:[parseInt(b),"p"]})]})]})]})},E=function(){var e,t=Object(d.d)(),n=Object(d.e)((function(e){return e.homepage.favs})),c=Object(d.e)((function(e){return e.homepage.favMode}));c===x&&(e=n.sort((function(e,t){return e.stars-t.stars}))),c===m&&(e=n.sort((function(e,t){return e.priceAvg-t.priceAvg}))),e.reverse();for(var r=[],i=0;i<e.length;i++){var o=n[i];if(i>=3)break;r.push(Object(a.a)({},o))}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(l.jsxs)("div",{className:"d-flex align-center",children:[Object(l.jsxs)("button",{className:"btn d-flex align-center mr-1 btn-sm ".concat(c===x&&"btn-active"),onClick:function(){return t({type:_})},children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433 ",Object(l.jsx)(s.a,{})]}),Object(l.jsxs)("button",{className:"btn d-flex align-center btn-sm ".concat(c===m&&"btn-active"),onClick:function(){return t({type:S})},children:["\u0426\u0435\u043d\u0430 ",Object(l.jsx)(s.a,{})]})]}),r.map((function(e){return Object(l.jsx)(w,{hotel:e},e.hotelId)}))]})},k=n(34),D=function(e){var t=e.type;return t?Object(l.jsx)("small",{id:"emailHelp",className:"form-text invalid",children:t.message}):Object(l.jsx)("small",{id:"emailHelp",className:"form-text system-text",children:"[system_text]"})},I=function(){var e=Object(d.d)(),t=Object(k.a)({mode:"onBlur"}),n=t.register,c=t.handleSubmit,s=t.formState.errors,r=Object(d.e)((function(e){return e.homepage.request})),i=r.location,o=r.date,j=r.days;return Object(l.jsxs)("form",{className:"d-flex flex-column align-end justify-between text-center",onSubmit:c((function(t){e({type:y,payload:t})})),children:[Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{className:"form-label",htmlFor:"username",children:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f"}),Object(l.jsx)("input",Object(a.a)(Object(a.a)({},n("location",{required:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430",minLength:"\u0414\u043b\u0438\u043d\u0430 \u043b\u043e\u043a\u0430\u0446\u0438\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u0442\u0440\u0435\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})),{},{className:"form-control",type:"text",defaultValue:i})),Object(l.jsx)(D,{type:null===s||void 0===s?void 0:s.location})]}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{className:"form-label",htmlFor:"password",children:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f"}),Object(l.jsx)("input",Object(a.a)(Object(a.a)({},n("date",{required:"\u0414\u0430\u0442\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430"})),{},{className:"form-control",type:"date",id:"date",defaultValue:o,min:(new Date).toISOString().split("T")[0]})),Object(l.jsx)(D,{type:null===s||void 0===s?void 0:s.date})]}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{className:"form-label",htmlFor:"username",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439"}),Object(l.jsx)("input",Object(a.a)(Object(a.a)({},n("days",{required:"\u0414\u043d\u0438 \u0437\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b"})),{},{className:"form-control",type:"number",defaultValue:j,min:1,max:7})),Object(l.jsx)(D,{type:null===s||void 0===s?void 0:s.days})]}),Object(l.jsx)("button",{className:"btn btn-hotel btn-w100",type:"submit",children:"\u041d\u0430\u0439\u0442\u0438"})]})},T=n(45),P=n(24),H=n.n(P),C=n(33),z=function(){var e=Object(C.f)();return Object(l.jsxs)("div",{className:"Header",children:[Object(l.jsx)("h2",{children:"Simple Hotel Check"}),Object(l.jsxs)("div",{className:"d-flex align-center pointer",onClick:function(){H.a.remove("tokenUser"),e.push("/test-hotel-liis/login")},children:[Object(l.jsx)("button",{className:"btn-outline",children:"\u0412\u044b\u0439\u0442\u0438"}),Object(l.jsx)(r.b.Provider,{value:{color:"#41522E",className:"global-class-name"},children:Object(l.jsx)(T.a,{size:32})})]})]})},L=n(48),q=n(46),A=n.n(q),F=(n(42),n.p+"static/media/car1.b9017736.png"),M=n.p+"static/media/car2.d8412d00.png",R=n.p+"static/media/car3.6e508eab.png",U=function(e){return e.preventDefault()},B=[F,M,R,M,F,M,R].map((function(e,t){return Object(l.jsx)("img",{src:e,style:{width:"150px"},onDragStart:U,alt:t})})),V=function(){return Object(l.jsx)(A.a,{autoWidth:!0,mouseTracking:!0,items:B,controlsStrategy:"alternate",disableButtonsControls:!0,disableDotsControls:!0,infinite:!0})},X=n(47),G=function(e){var t=e.color,n=void 0===t?"#41522E":t,c=e.size,a=void 0===c?"32px":c;return Object(l.jsx)(r.b.Provider,{value:{color:n,size:a},children:Object(l.jsx)("span",{children:Object(l.jsx)(X.a,{})})})},J=function(e){for(var t=e.hotel,n=Object(d.d)(),c=Object(d.e)((function(e){return e.homepage.request})),a=c.date,s=c.days,r=t.hotelName,i=t.stars,b=t.priceAvg,u=t.hotelId,x=[],m=0;m<i;m++)x.push("gold");for(var p=5-x.length,f=0;f<p;f++)x.push("grey");var v=!1,g=Object(d.e)((function(e){return e.homepage.favs}));return g.forEach((function(e){e.hotelId===u&&(v=!0)})),Object(l.jsxs)("div",{className:"d-flex justify-between align-center",style:{borderBottom:"1px solid #ccc",paddingBottom:"10px "},children:[Object(l.jsxs)("div",{className:"d-flex align-center",children:[Object(l.jsx)("div",{style:{padding:"24px"},children:Object(l.jsx)(G,{})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{style:{fontSize:"15px"},children:r}),Object(l.jsxs)("p",{children:[new Date(a).toLocaleDateString("ru-RU",O)," -- ",s," ",h(s)]}),x.map((function(e,t){return Object(l.jsx)(j,{color:e},e+t+(new Date).toLocaleString())}))]})]}),Object(l.jsxs)("div",{className:"d-flex flex-column align-end align-center",children:[Object(l.jsx)(o,{size:"24px",isFav:v,onClick:function(){return n({type:N,payload:t})}}),Object(l.jsxs)("p",{className:"text-muted",children:["price: ",Object(l.jsxs)("span",{className:"HomePage__price ml-2",children:[parseInt(b),"p"]})]})]})]})},W=function(){return Object(l.jsx)("div",{className:"Loader",children:Object(l.jsxs)("div",{className:"lds-default",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})},Z=function(){var e=Object(d.e)((function(e){return e.homepage.loading})),t=Object(d.e)((function(e){return e.homepage.hotels})),n=Object(d.e)((function(e){return e.homepage.favs})),c=Object(d.e)((function(e){return e.homepage.request})),a=c.date,s=c.location;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"d-flex justify-between",children:[Object(l.jsxs)("div",{className:"d-flex align-center",children:[Object(l.jsx)("h3",{className:"Main__header",children:"\u041e\u0442\u0435\u043b\u0438"}),Object(l.jsx)(L.a,{className:"ml-1",size:32}),Object(l.jsx)("h3",{className:"Main__header ml-1",children:s})]}),Object(l.jsx)("h3",{style:{fontSize:"24px",fontWeight:400,color:"#41522E"},children:new Date(a).toLocaleDateString("ru-RU",O)})]}),Object(l.jsx)(V,{}),Object(l.jsxs)("h3",{children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435: ",n.length," \u0435\u0434."]}),Object(l.jsx)("div",{children:e?Object(l.jsx)(W,{}):t.map((function(e){return Object(l.jsx)(J,{hotel:e},e.hotelId)}))})]})},Q=function(){return Object(l.jsxs)("div",{className:"HomePage",children:[Object(l.jsx)(z,{}),Object(l.jsxs)("div",{className:"HomePage__grid container",children:[Object(l.jsx)("div",{className:"HomePage__filter HomePage__block",children:Object(l.jsx)(I,{})}),Object(l.jsx)("div",{className:"HomePage__main HomePage__block",children:Object(l.jsx)(Z,{})}),Object(l.jsx)("div",{className:"HomePage__fav HomePage__block",children:Object(l.jsx)(E,{})})]})]})},$=function(){var e=Object(C.f)();Object(c.useEffect)((function(){H.a.get("tokenUser")&&e.push("/test-hotel-liis/")}),[]);var t=Object(k.a)({mode:"onBlur"}),n=t.register,s=t.handleSubmit,r=t.formState.errors;return Object(l.jsxs)("div",{className:"LoginPage",children:[Object(l.jsxs)("form",{className:"Hotel__form text-center",onSubmit:s((function(){H.a.set("tokenUser",Math.random().toString(36).substr(2),{expires:1}),e.push("/test-hotel-liis/")})),children:[Object(l.jsx)("h3",{children:"Simple Hotel Check"}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{className:"form-label",htmlFor:"username",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(l.jsx)("input",Object(a.a)(Object(a.a)({},n("login",{required:"\u041b\u043e\u0433\u0438\u043d \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d",pattern:{value:b,message:"Email pattern be like: example@test.com"}})),{},{defaultValue:"example@test.com",className:"form-control",type:"email"})),Object(l.jsx)(D,{type:null===r||void 0===r?void 0:r.login})]}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{className:"form-label",htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("input",Object(a.a)(Object(a.a)({},n("password",{required:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d",pattern:{value:u,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})),{},{defaultValue:"12345678",className:"form-control",type:"password",id:"password"})),Object(l.jsx)(D,{type:null===r||void 0===r?void 0:r.password})]}),Object(l.jsx)("button",{className:"btn btn-hotel btn-w100",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(l.jsx)("div",{className:"LoginPage__bg"})]})},K=(n(100),n(101),n(102),function(e){var t=e.children;return H.a.get("tokenUser")?t:Object(l.jsx)(C.a,{to:{pathname:"/test-hotel-liis/login"}})}),Y=n(30),ee=n.n(Y),te=n(26),ne=n(21),ce=n(50),ae=n(17),se={test:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;return n===p?Object(a.a)(Object(a.a)({},e),{},{test:!0}):e},ie=n(11),le={hotels:[],loading:!0,favs:[],request:{location:"\u041c\u043e\u0441\u043a\u0432\u0430",date:(new Date).toISOString().split("T")[0],days:1},favMode:m},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f:return Object(a.a)(Object(a.a)({},e),{},{hotels:c});case v:return Object(a.a)(Object(a.a)({},e),{},{loading:!0});case g:return Object(a.a)(Object(a.a)({},e),{},{loading:!1});case y:return Object(a.a)(Object(a.a)({},e),{},{request:c});case N:var s=c,r=e.favs.findIndex((function(e){return e.hotelId===c.hotelId}));if(r<0){var i=Object(a.a)({},s);return Object(a.a)(Object(a.a)({},e),{},{favs:[].concat(Object(ie.a)(e.favs),[i])})}var l=e.favs.filter((function(e){return e.hotelId!==c.hotelId}));return Object(a.a)(Object(a.a)({},e),{},{favs:l});case _:return Object(a.a)(Object(a.a)({},e),{},{favMode:x});case S:return Object(a.a)(Object(a.a)({},e),{},{favMode:m});default:return e}},je=Object(ae.a)(),de=Object(ne.b)({test:re,homepage:oe,router:Object(te.b)(je)}),be=n(7),ue=n.n(be),Oe=n(14),xe=n(12),me=n(15),he=function(){var e=Object(me.a)(ue.a.mark((function e(t,n,c){var a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://engine.hotellook.com/api/v2/cache.json?location=".concat(t,"&currency=rub&checkIn=").concat(n,"&checkOut=").concat(c,"&limit=5"));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),pe=ue.a.mark(ye),fe=ue.a.mark(Ne),ve=ue.a.mark(_e),ge=ue.a.mark(Se);function ye(){var e,t,n,c,a,s,r,i,l,o;return ue.a.wrap((function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Object(Oe.c)((function(e){return e.homepage}));case 2:return e=j.sent,t=e.request,n=t.location,c=t.date,a=t.days,s=new Date(c),(r=new Date).setDate(s.getDate()+parseInt(a)),i=s.toISOString().split("T")[0],l=r.toISOString().split("T")[0],j.next=12,Object(Oe.a)(he.bind(null,n,i,l));case 12:return o=j.sent,j.next=15,Object(Oe.b)({type:f,payload:o});case 15:return j.next=17,Object(Oe.b)({type:g});case 17:case"end":return j.stop()}}),pe)}function Ne(){var e,t,n,c,a,s,r,i,l,o;return ue.a.wrap((function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Object(Oe.b)({type:v});case 2:return j.next=4,Object(Oe.c)((function(e){return e.homepage}));case 4:return e=j.sent,t=e.request,n=t.location,c=t.date,a=t.days,s=new Date(c),(r=new Date).setDate(s.getDate()+parseInt(a)),i=s.toISOString().split("T")[0],l=r.toISOString().split("T")[0],j.next=14,Object(Oe.a)(he.bind(null,n,i,l));case 14:return o=j.sent,j.next=17,Object(Oe.b)({type:f,payload:o});case 17:return j.next=19,Object(Oe.b)({type:g});case 19:case"end":return j.stop()}}),fe)}function _e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.c)((function(e){return e.router.location.pathname}));case 2:if("/test-hotel-liis/"!==e.sent){e.next=6;break}return e.next=6,Object(Oe.a)(ye);case 6:case"end":return e.stop()}}),ve)}function Se(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.d)(xe.a,_e);case 2:return e.next=4,Object(Oe.d)(y,Ne);case 4:case"end":return e.stop()}}),ge)}var we=Object(ce.a)(),Ee="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):ne.c,ke=Object(ne.d)(de,Ee(Object(ne.a)(we)));we.run(Se);var De=ke;ee.a.render(Object(l.jsx)(d.a,{store:De,children:Object(l.jsx)(te.a,{history:je,children:Object(l.jsxs)(C.d,{children:[Object(l.jsx)(C.b,{path:"/test-hotel-liis/login",exact:!0,children:Object(l.jsx)($,{})}),Object(l.jsx)(C.b,{path:"/test-hotel-liis/",exact:!0,children:Object(l.jsx)(K,{children:Object(l.jsx)(Q,{})})})]})})}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.791a8057.chunk.js.map