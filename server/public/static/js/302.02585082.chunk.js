"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[302],{7285:function(e,t,a){a.d(t,{Z:function(){return d}});a(2791);var n=a(5763),r=a(7692),s=a(6856),c=a(501),i=a(2426),o=a.n(i),u=a(184),l=function(e){var t,a=e.task,i=e.id,l=(e.description,e.dueDate),d=e.priority,p=e.deleteTask,f=new Date(l),m=new Date;return t=f.getDate()!==m.getDate()?o()(f).format("llll"):o()(f).format("[Today, ]lll"),(0,u.jsx)(c.rU,{className:"task",to:"/view?id=".concat(i),children:(0,u.jsxs)("div",{className:"task-container",children:[(0,u.jsx)("div",{className:"task-priority",children:(0,u.jsx)(n.DcD,{className:"priority-dot priority-dot-".concat(d)})}),(0,u.jsxs)("div",{className:"task-name-due",children:[(0,u.jsx)("div",{className:"task-name",children:a}),(0,u.jsx)("div",{className:"task-due",children:t})]}),(0,u.jsxs)("div",{className:"task-update-delete",children:[(0,u.jsx)(c.rU,{to:"/update?id=".concat(i),children:(0,u.jsx)(r.Hlf,{className:"task-btn task-update-btn"})}),(0,u.jsx)(c.rU,{to:{},onClick:p,children:(0,u.jsx)(s.F1H,{className:"task-btn task-delete-btn"})})]})]})})},d=function(e){var t=e.deleteTask,a=e.updateTask,n=e.tasks,r=e.className,s=e.message;return(0,u.jsxs)("div",{className:"".concat(r," tasks"),children:[0===n.length&&(0,u.jsx)("div",{className:"tasks-message",children:s||"No tasks currently \u256e(\uff3e\u25bd\uff3e)\u256d "}),n.length>0&&(0,u.jsx)("div",{className:"tasks-container",children:(0,u.jsx)("div",{className:"tasks-inner-container",children:n.map((function(e){var n=new Date(e.dueDate);return(0,u.jsx)(l,{task:e.task,id:e._id,description:e.desc,dueDate:n.toLocaleString(),priority:e.priority,deleteTask:function(){return t(e._id)},updateTask:function(){return a(e._id)}},e._id)}))})})]})}},8752:function(e,t,a){a.d(t,{Z:function(){return o}});a(2791);var n=a(8820),r=a(6355),s=a(7425),c=a(501),i=a(184),o=function(){return(0,i.jsxs)("div",{className:"navbar-container",children:[(0,i.jsx)(c.rU,{to:"/",className:"navbar-add-btn",children:(0,i.jsx)(n.Lfi,{className:"navbar-add-icon"})}),(0,i.jsxs)("div",{className:"navbar-btns",children:[(0,i.jsxs)("ul",{className:"navbar-top-btn",children:[(0,i.jsx)(c.rU,{to:"/lists",children:(0,i.jsx)(r.W95,{className:"navbar-icon"})}),(0,i.jsx)(c.rU,{to:"/calendar",children:(0,i.jsx)(n.ow5,{className:"navbar-icon"})})]}),(0,i.jsxs)("ul",{className:"navbar-bottom-btn",children:[(0,i.jsx)("li",{children:(0,i.jsx)(s.P9d,{className:"navbar-icon"})}),(0,i.jsx)("li",{children:(0,i.jsx)(n.xRF,{className:"navbar-icon"})})]})]})]})}},5597:function(e,t,a){a.d(t,{Z:function(){return s}});a(2791);var n=a(7467),r=a(184),s=function(e){var t=e.open,a=e.close,s=e.children,c=e.image;return(0,r.jsx)(n.Z,{open:t,closeOnDocumentClick:!0,onClose:a,children:(0,r.jsxs)("div",{className:"modal",children:[(0,r.jsx)("a",{className:"close",onClick:a,children:"\xd7"}),(0,r.jsxs)("div",{className:"popup-container",children:[(0,r.jsx)("div",{className:"popup-image-container",children:(0,r.jsx)("img",{src:c,className:"popup-image"})}),(0,r.jsx)("div",{className:"popup-caption",children:s})]})]})})}},6640:function(e,t,a){var n=a(885),r=a(2791);t.Z=function(){var e=(0,r.useState)(!1),t=(0,n.Z)(e,2),a=t[0],s=t[1],c=(0,r.useState)({image:"",message:""}),i=(0,n.Z)(c,2),o=i[0],u=i[1];return{closeModal:function(){s(!1)},isOpen:a,modalContent:function(e,t){s(!0),u({image:e,message:t})},content:o}}},3402:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(8214),r=a(5861),s=a(885),c=a(2791),i=a(4569),o=a.n(i),u="http://localhost:5000/api/v1",l=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/tasks"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().post("".concat(u,"/tasks"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().delete("".concat(u,"/tasks/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/tasks/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().patch("".concat(u,"/tasks/").concat(t),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=a(501),h=function(e){var t=e.modalContent,a=(0,v.lr)(),i=(0,s.Z)(a,2),o=i[0],u=(i[1],(0,c.useState)([])),h=(0,s.Z)(u,2),x=h[0],k=h[1],j=(0,c.useState)({}),g=(0,s.Z)(j,2),b=g[0],N=g[1],Z=o.get("id"),w=(0,c.useCallback)((0,r.Z)((0,n.Z)().mark((function e(){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:a=e.sent,k(a.data.sort((function(e,t){return Number(new Date(t.dateCreated).getTime())-Number(new Date(e.dateCreated).getTime())}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t("/assets/man-stress.png",e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),y=(0,c.useCallback)(function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===a){e.next=12;break}return e.prev=1,e.next=4,f(a);case 4:return r=e.sent,N(r.data),e.abrupt("return",b);case 9:e.prev=9,e.t0=e.catch(1),t("/assets/man-stress.png",e.t0.response.data.error);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),[]),D=(0,c.useCallback)(function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(a);case 3:return r=e.sent,e.next=6,w();case 6:t("/assets/man-success.jpg",r.data.msg),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t("/assets/man-stress.png",e.t0.response.data.error);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),[w,t]),C=(0,c.useCallback)(function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a){var r,s,c,i,o,u,l,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=new FormData(a.target),s=r.get("task"),c=r.get("description"),i=new Date(r.get("due-date")),o=r.get("priority"),u=(new Date).toLocaleString(),l={task:s,desc:c,dueDate:i,priority:o,dateCreated:u},e.prev=8,e.next=11,d(l);case 11:return p=e.sent,e.next=14,w();case 14:t("/assets/man-success.jpg",p.data.msg),a.target.reset(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),t("/assets/man-stress.png",e.t0.response.data.error);case 21:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}(),[w,t]),T=(0,c.useCallback)(function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a){var r,s,c,i,o,u,l,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=new FormData(a.target),s=r.get("task"),c=r.get("description"),i=new Date(r.get("due-date")),o=r.get("priority"),u=(new Date).toLocaleString(),l={task:s,desc:c,dueDate:i,priority:o,dateCreated:u},e.prev=8,e.next=11,m(Z,l);case 11:d=e.sent,t("/assets/man-success.jpg",d.data.msg),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),t("/assets/man-stress.png",e.t0.response.data.error);case 18:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}(),[t,Z]);return(0,c.useEffect)((function(){w()}),[w]),(0,c.useEffect)((function(){y(Z)}),[y,Z]),{createTask:C,updateTask:T,deleteTask:D,tasks:x,task:b}}},8302:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(907);var r=a(181);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=a(885),i=a(2791),o=a(8752),u=a(8820),l=a(184),d=function(e){var t=e.className,a=e.handleSearchInput;return(0,l.jsx)("div",{className:"searchbar ".concat(t),children:(0,l.jsxs)("div",{className:"searchbar-container",children:[(0,l.jsx)("div",{className:"search-icon-container",children:(0,l.jsx)(u.RB5,{className:"search-icon"})}),(0,l.jsx)("div",{className:"searchbar-input",children:(0,l.jsx)("input",{type:"text",className:"searchbar-input-field",onChange:a})})]})})},p=a(7285),f=a(3402),m=a(5597),v=a(6640),h=function(){var e=(0,v.Z)(),t=e.isOpen,a=e.closeModal,n=e.modalContent,r=e.content,u=(0,f.Z)({modalContent:n}),h=u.tasks,x=u.deleteTask,k=(0,i.useState)(""),j=(0,c.Z)(k,2),g=j[0],b=j[1],N=(0,i.useState)(h),Z=(0,c.Z)(N,2),w=Z[0],y=Z[1],D=(0,i.useState)("date-created"),C=(0,c.Z)(D,2),T=C[0],S=C[1];return(0,i.useEffect)((function(){var e;if(h)if(e=""!==g?h.filter((function(e){var t=e.task.split(" "),a=!1;return t.forEach((function(e){e.slice(0,g.length).toLowerCase()===g.toLowerCase()&&(a=!0)})),a})):h,"date-created"===T)y(s(e.sort((function(e,t){return Number(new Date(t.dateCreated).getTime())-Number(new Date(e.dateCreated).getTime())}))));else if("due-date"===T)y(s(e.sort((function(e,t){return Number(new Date(e.dueDate).getTime())-Number(new Date(t.dueDate).getTime())}))));else if("priority"===T){var t=new Map;t.set("high",1),t.set("medium",2),t.set("low",3),y(s(e.sort((function(e,a){return Number(t.get(e.priority))-Number(t.get(a.priority))}))))}}),[g,T,h]),(0,l.jsx)("section",{className:"listtasks-section",children:(0,l.jsxs)("div",{className:"listtasks-container",children:[(0,l.jsx)("div",{className:"listtasks-searchbar",children:(0,l.jsx)(d,{handleSearchInput:function(e){b(e.target.value)}})}),(0,l.jsxs)("div",{className:"listtasks-sort-by",children:[(0,l.jsx)("span",{children:"Sort By"}),(0,l.jsxs)("select",{defaultValue:"date-created",onChange:function(e){S(e.target.value)},children:[(0,l.jsx)("option",{value:"priority",children:"Priority"}),(0,l.jsx)("option",{value:"due-date",children:"Due Date"}),(0,l.jsx)("option",{value:"date-created",children:"Date Created"})]})]}),(0,l.jsx)(o.Z,{}),(0,l.jsx)(p.Z,{tasks:w,className:"listtasks-tasks",message:g&&'No tasks with name "'.concat(g,'" found'),deleteTask:x}),(0,l.jsx)(m.Z,{open:t,close:a,image:r.image,children:r.message})]})})}}}]);
//# sourceMappingURL=302.02585082.chunk.js.map