(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){e.exports=n(32)},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(17),u=n.n(r),c=(n(27),n(14),[{id:"1",name:"Steve",age:"25"},{id:"2",name:"Njoroge",age:"26"},{id:"3",name:"Maina",age:"27"}]),m=n(0),i=n(5);var o=function(){var e=Object(m.m)();return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Names"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Actions")),l.a.createElement("tr",null,l.a.createElement("td",null,c&&c.length>0?c.map(function(e){return l.a.createElement("p",null,e.name)}):"No data"),l.a.createElement("td",null,c&&c.length>0?c.map(function(e){return l.a.createElement("p",null,e.age)}):"No data"),l.a.createElement("td",null,c&&c.length>0?c.map(function(t){return l.a.createElement("p",null,l.a.createElement(i.b,{to:"/edit"},l.a.createElement("button",{onClick:function(){return alert("Edit")}},"Edit")),"\xa0",l.a.createElement("button",{onClick:function(){return function(t){var n=c.map(function(e){return e.id}).indexOf(t);c.splice(n,1),e("/")}(t.id)}},"Delete"))}):"No data"))),l.a.createElement("br",null),l.a.createElement(i.b,{to:"create"},l.a.createElement("button",null,"Create")))},E=n(3),d=n(12);var p=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(""),o=Object(E.a)(u,2),p=o[0],b=o[1],f=Object(m.m)();return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"Enter name"),l.a.createElement("input",{type:"text",placeholder:"Enter name",required:!0,onChange:function(e){return r(e.target.value)}}),l.a.createElement("label",null,"Enter age"),l.a.createElement("input",{type:"text",placeholder:"Enter age",required:!0,onChange:function(e){return b(e.target.value)}}),l.a.createElement(i.b,null,l.a.createElement("button",{onClick:function(e){return function(e){e.preventDefault();var t=Object(d.v4)().slice(0,8),a=n,l=p;c.push({id:t,name:a,age:l}),f("/")}(e)},type:"submit"},"Submit"))))};var b=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(""),o=Object(E.a)(u,2),d=o[0],p=o[1],b=Object(a.useState)(""),f=Object(E.a)(b,2),g=f[0],v=(f[1],Object(m.m)()),h=c.map(function(e){return e.id}).indexOf(g);return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"Enter name"),l.a.createElement("input",{type:"text",placeholder:"Enter name",value:n,required:!0,onChange:function(e){return r(e.target.value)}}),l.a.createElement("label",null,"Enter age"),l.a.createElement("input",{type:"text",placeholder:"Enter age",value:d,required:!0,onChange:function(e){return p(e.target.value)}}),l.a.createElement(i.b,null,l.a.createElement("button",{onClick:function(e){return function(e){e.preventDefault();var t=c[h];t.name=n,t.age=d,v("/")}(e)},type:"submit"},"Update"))))};var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",element:l.a.createElement(o,null)}),l.a.createElement(m.a,{path:"/create",element:l.a.createElement(p,null)}),l.a.createElement(m.a,{path:"/edit",element:l.a.createElement(b,null)}))))},g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,33)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),a(e),l(e),r(e),u(e)})};u.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null))),g()}},[[18,3,2]]]);
//# sourceMappingURL=main.3bd61dbe.chunk.js.map