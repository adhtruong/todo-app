(this["webpackJsonptodo-app-mui"]=this["webpackJsonptodo-app-mui"]||[]).push([[0],{56:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(15),i=n.n(a),r=(n(56),n(86)),s=n(97),d=n(34),l=n(45),u=n(88),j=n(100),p=n(89),m=n(90),b=n(91),x=n(36),h=n(46),g=n(99),O=n(38),f=function(t){return{title:t,id:Object(g.a)(),isCompleted:!1}},S=n.n(O)()((function(t){return{todos:[],addTodo:function(e){return t((function(t){return{todos:[].concat(Object(h.a)(t.todos),[f(e)])}}))},removeTodo:function(e){return t((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},toggleCompletedState:function(e){return t((function(t){return{todos:t.todos.map((function(t){return t.id!==e?t:Object(x.a)(Object(x.a)({},t),{},{isCompleted:!t.isCompleted})}))}}))}}})),y=n(5),v=Object(r.a)((function(t){return{inputBaseStyles:{margin:t.spacing(1),flex:1},paperStyles:{padding:"1px 2px",display:"flex",alignItem:"center"},iconButtonStyles:{},dividerIconStyles:{height:28,margin:.5}}})),C=function(){var t=v(),e=t.inputBaseStyles,n=t.paperStyles,c=t.iconButtonStyles,a=t.dividerIconStyles,i=Object(o.useState)(""),r=Object(l.a)(i,2),s=r[0],d=r[1],x=S().addTodo;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(u.a,{component:"form",className:n,onSubmit:function(t){t.preventDefault(),s.length&&(x(s),d(""))},children:[Object(y.jsx)(j.a,{className:e,onChange:function(t){return d(t.target.value)},value:s,placeholder:"New todo"}),Object(y.jsx)(p.a,{className:a,orientation:"vertical"}),Object(y.jsx)(m.a,{type:"submit",className:c,"aria-label":"search",children:Object(y.jsx)(b.a,{})})]})})},N=n(92),T=n(93),B=n(94),I=n(98),k=n(95),A=n(96),w=n(44),D=n.n(w),J=Object(r.a)((function(t){return{marginAutoItem:{margin:"auto",textAlign:"center",padding:t.spacing(2)},completedTodoStyles:{textDecoration:"line-through"}}})),E=function(){var t=J(),e=t.completedTodoStyles,n=t.marginAutoItem,o=S(),c=o.removeTodo,a=o.toggleCompletedState,i=o.todos;return Object(y.jsxs)(N.a,{children:[0===i.length&&Object(y.jsx)(d.a,{className:n,children:"No to-dos to display!"}),i.map((function(t){return Object(y.jsxs)(T.a,{children:[Object(y.jsx)(B.a,{children:Object(y.jsx)(I.a,{edge:"start",checked:t.isCompleted,onChange:function(){return a(t.id)}})}),Object(y.jsx)(k.a,{className:t.isCompleted?e:"",children:t.title},t.id),Object(y.jsx)(A.a,{children:Object(y.jsx)(m.a,{onClick:function(){c(t.id)},children:Object(y.jsx)(D.a,{})})})]},t.id)}))]})},F=Object(r.a)((function(t){return{headerTextStyles:{textAlign:"center",marginBottom:t.spacing(3),padding:t.spacing(1)}}}));var L=function(){var t=F().headerTextStyles;return Object(y.jsxs)(s.a,{maxWidth:"xs",children:[Object(y.jsx)(d.a,{variant:"h3",className:t,children:"To-do List"}),Object(y.jsx)(C,{}),Object(y.jsx)(E,{})]})};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.4c50c7ab.chunk.js.map