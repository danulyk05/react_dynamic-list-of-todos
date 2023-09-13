(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(9),i=c(2),r=c(1),d=(c(14),c(15),c(6)),o=c.n(d),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onTodoClick;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:o()("far",{"fa-eye":!c,"fa-eye-slash":c===e.id})})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.COMPLETED="completed",e.ACTIVE="active"}(s||(s={}));var b=function(e){var t=e.query,c=e.setQuery,a=e.onFilterChange,n=e.filterBy;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{value:s.ALL,children:"All"}),Object(j.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(j.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(17),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.todo,c=e.setSelectedTodoId,s=Object(r.useState)(null),a=Object(i.a)(s,2),n=a[0],l=a[1],d=Object(r.useState)(!1),o=Object(i.a)(d,2),u=o[0],b=o[1];return Object(r.useEffect)((function(){var e;b(!0),(e=t.userId,O("/users/".concat(e))).then(l).finally((function(){return b(!1)}))}),[t]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),u?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(0)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(j.jsx)("span",{children:Object(j.jsx)("strong",{className:"has-text-success",children:"Done"})}):Object(j.jsx)("span",{children:Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},x=c(8);var f=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(!1),d=Object(i.a)(n,2),o=d[0],f=d[1],v=Object(r.useState)(""),p=Object(i.a)(v,2),N=p[0],y=p[1],g=Object(r.useState)(0),C=Object(i.a)(g,2),T=C[0],L=C[1],k=Object(r.useState)(null),E=Object(i.a)(k,2),S=E[0],I=E[1],w=Object(r.useState)(s.ALL),A=Object(i.a)(w,2),B=A[0],P=A[1],_=Object(r.useState)(""),D=Object(i.a)(_,2),F=D[0],M=D[1];Object(r.useEffect)((function(){f(!0),O("/todos").then((function(e){a(e)})).catch((function(){return y("Try again later")})).finally((function(){return f(!1)}))}),[]),Object(r.useEffect)((function(){if(T){var e=c.find((function(e){return e.id===T}));null!==e&&void 0!==e&&e.userId&&I(Object(l.a)({},e))}else I(null)}),[T]);var V=function(e,t,c){var a=Object(x.a)(e),n=c.toLowerCase().trim();switch(n&&(a=a.filter((function(e){return e.title.toLowerCase().trim().includes(n)}))),t){case s.ALL:return a;case s.COMPLETED:return a.filter((function(e){return e.completed}));case s.ACTIVE:return a.filter((function(e){return!e.completed}));default:return a}}(c,B,F),q=(!o||o&&T)&&!N&&c.length>0;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:F,setQuery:M,filterBy:B,onFilterChange:P})}),Object(j.jsxs)("div",{className:"block",children:[o&&!T&&Object(j.jsx)(h,{}),q&&Object(j.jsx)(u,{todos:V,onTodoClick:function(e){return L(e)},selectedTodoId:T}),N&&Object(j.jsx)("p",{className:"has-text-danger",children:N})]})]})})}),S&&Object(j.jsx)(m,{todo:S,setSelectedTodoId:function(e){return L(e)}})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5f7b8b67.chunk.js.map