"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[498],{3326:function(e,t,a){a.d(t,{Z:function(){return i}});a(2791);var s=a(184),n=function(e){var t=e.variant,a=e.type,n=e.height,r=e.width,c=e.children;return(0,s.jsx)("button",{type:a||"button",className:"button button-".concat(t),style:{height:n,width:r||"100%"},children:c})},r=a(2426),c=a.n(r),i=function(e){var t=e.mode,a=e.createTask,r=e.updateTask,i=e.task,l=e.className;return"create"===t?(0,s.jsx)("div",{className:"".concat(l," form"),children:(0,s.jsxs)("form",{className:"form-container",method:"post",onSubmit:a,children:[(0,s.jsx)("h1",{className:"form-title",children:"New Task"}),(0,s.jsxs)("div",{className:"form-fields",children:[(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"task",children:"Task"}),(0,s.jsx)("input",{type:"text",name:"task",id:"task",required:!0})]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"description",children:"Desc"}),(0,s.jsx)("textarea",{name:"description",id:"description"})]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"due-date",children:"Due Date"}),(0,s.jsx)("input",{type:"datetime-local",name:"due-date",id:"due-date",required:!0})]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"priority",children:"Priority"}),(0,s.jsxs)("select",{id:"priority",defaultValue:"high",name:"priority",required:!0,children:[(0,s.jsx)("option",{value:"high",children:"High"}),(0,s.jsx)("option",{value:"medium",children:"Medium"}),(0,s.jsx)("option",{value:"low",children:"Low"})]})]}),(0,s.jsx)(n,{variant:"primary",type:"submit",height:"30px",children:"Create Task"})]})]})}):"update"===t?(0,s.jsx)("div",{className:"".concat(l," form"),children:(0,s.jsxs)("form",{className:"form-container",method:"post",onSubmit:r,children:[(0,s.jsx)("h1",{className:"form-title",children:"Update Task"}),(0,s.jsxs)("div",{className:"form-fields",children:[(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{children:"Task ID"}),(0,s.jsx)("input",{type:"text",name:"taskid",defaultValue:i._id,disabled:!0})]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"task",children:"Task"}),(0,s.jsx)("input",{type:"text",name:"task",id:"task",defaultValue:i.task,required:!0})]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"description",children:"Desc"}),(0,s.jsx)("textarea",{name:"description",id:"description",defaultValue:i.desc})]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"due-date",children:"Due Date"}),(0,s.jsx)("input",{type:"datetime-local",name:"due-date",id:"due-date",defaultValue:c()(i.dueDate).format("yyyy-MM-DDTHH:mm"),required:!0})]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"priority",children:"Priority"}),(0,s.jsxs)("select",{id:"priority",defaultValue:i.priority,name:"priority",required:!0,children:[(0,s.jsx)("option",{value:"high",children:"High"}),(0,s.jsx)("option",{value:"medium",children:"Medium"}),(0,s.jsx)("option",{value:"low",children:"Low"})]})]}),(0,s.jsx)(n,{variant:"primary",type:"submit",height:"30px",children:"Update Task"})]})]})}):void 0}},7285:function(e,t,a){a.d(t,{Z:function(){return u}});a(2791);var s=a(5763),n=a(7692),r=a(3853),c=a(501),i=a(2426),l=a.n(i),o=a(184),d=function(e){var t,a=e.task,i=e.id,d=(e.description,e.dueDate),u=e.priority,p=e.deleteTask,m=new Date(d),h=new Date;return t=m.getDate()!==h.getDate()?l()(m).format("llll"):l()(m).format("[Today, ]lll"),(0,o.jsx)(c.rU,{className:"task",to:"/view?id=".concat(i),children:(0,o.jsxs)("div",{className:"task-container",children:[(0,o.jsx)("div",{className:"task-priority",children:(0,o.jsx)(s.DcD,{className:"priority-dot priority-dot-".concat(u)})}),(0,o.jsxs)("div",{className:"task-name-due",children:[(0,o.jsx)("div",{className:"task-name",children:a}),(0,o.jsx)("div",{className:"task-due",children:t})]}),(0,o.jsxs)("div",{className:"task-update-archive",children:[(0,o.jsx)(c.rU,{to:"/update?id=".concat(i),children:(0,o.jsx)(n.Hlf,{className:"task-btn task-update-btn"})}),(0,o.jsx)(c.rU,{to:{},onClick:p,children:(0,o.jsx)(r.JYw,{className:"task-btn task-archive-btn"})})]})]})})},u=function(e){var t=e.deleteTask,a=e.updateTask,s=e.tasks,n=e.className,r=e.message;return(0,o.jsxs)("div",{className:"".concat(n," tasks"),children:[0===s.length&&(0,o.jsx)("div",{className:"tasks-message",children:r||"No tasks currently \u256e(\uff3e\u25bd\uff3e)\u256d "}),s.length>0&&(0,o.jsx)("div",{className:"tasks-container",children:(0,o.jsx)("div",{className:"tasks-inner-container",children:s.map((function(e){var s=new Date(e.dueDate);return(0,o.jsx)(d,{task:e.task,id:e._id,description:e.desc,dueDate:s.toLocaleString(),priority:e.priority,deleteTask:function(){return t(e._id)},updateTask:function(){return a(e._id)}},e._id)}))})})]})}},8752:function(e,t,a){a.d(t,{Z:function(){return l}});a(2791);var s=a(8820),n=a(6355),r=a(7425),c=a(501),i=a(184),l=function(){return(0,i.jsxs)("div",{className:"navbar-container",children:[(0,i.jsx)(c.rU,{to:"/",className:"navbar-add-btn",children:(0,i.jsx)(s.Lfi,{className:"navbar-add-icon"})}),(0,i.jsxs)("div",{className:"navbar-btns",children:[(0,i.jsxs)("ul",{className:"navbar-top-btn",children:[(0,i.jsx)(c.rU,{to:"/lists",children:(0,i.jsx)(n.W95,{className:"navbar-icon"})}),(0,i.jsx)(c.rU,{to:"/calendar",children:(0,i.jsx)(s.ow5,{className:"navbar-icon"})})]}),(0,i.jsxs)("ul",{className:"navbar-bottom-btn",children:[(0,i.jsx)("li",{children:(0,i.jsx)(r.P9d,{className:"navbar-icon"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.xRF,{className:"navbar-icon"})})]})]})]})}},5597:function(e,t,a){a.d(t,{Z:function(){return r}});a(2791);var s=a(7467),n=a(184),r=function(e){var t=e.open,a=e.close,r=e.children,c=e.image;return(0,n.jsx)(s.Z,{open:t,closeOnDocumentClick:!0,onClose:a,children:(0,n.jsxs)("div",{className:"modal",children:[(0,n.jsx)("a",{className:"close",onClick:a,children:"\xd7"}),(0,n.jsxs)("div",{className:"popup-container",children:[(0,n.jsx)("div",{className:"popup-image-container",children:(0,n.jsx)("img",{src:c,className:"popup-image"})}),(0,n.jsx)("div",{className:"popup-caption",children:r})]})]})})}},6640:function(e,t,a){var s=a(885),n=a(2791);t.Z=function(){var e=(0,n.useState)(!1),t=(0,s.Z)(e,2),a=t[0],r=t[1],c=(0,n.useState)({image:"",message:""}),i=(0,s.Z)(c,2),l=i[0],o=i[1];return{closeModal:function(){r(!1)},isOpen:a,modalContent:function(e,t){r(!0),o({image:e,message:t})},content:l}}},3402:function(e,t,a){a.d(t,{Z:function(){return x}});var s=a(8214),n=a(5861),r=a(885),c=a(2791),i=a(4569),l=a.n(i),o="http://localhost:5000/api/v1",d=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("".concat(o,"/tasks"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().post("".concat(o,"/tasks"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().delete("".concat(o,"/tasks/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("".concat(o,"/tasks/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t,a){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().patch("".concat(o,"/tasks/").concat(t),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=a(501),x=function(e){var t=e.modalContent,a=(0,f.lr)(),i=(0,r.Z)(a,2),l=i[0],o=(i[1],(0,c.useState)([])),x=(0,r.Z)(o,2),v=x[0],k=x[1],j=(0,c.useState)({}),N=(0,r.Z)(j,2),b=N[0],g=N[1],w=l.get("id"),Z=(0,c.useCallback)((0,n.Z)((0,s.Z)().mark((function e(){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:a=e.sent,k(a.data.sort((function(e,t){return Number(new Date(t.dateCreated).getTime())-Number(new Date(e.dateCreated).getTime())}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t("/assets/man-stress.png",e.t0.response.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),y=(0,c.useCallback)(function(){var e=(0,n.Z)((0,s.Z)().mark((function e(a){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===a){e.next=12;break}return e.prev=1,e.next=4,m(a);case 4:return n=e.sent,g(n.data),e.abrupt("return",b);case 9:e.prev=9,e.t0=e.catch(1),t("/assets/man-stress.png",e.t0.response.data.error);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),[]),D=(0,c.useCallback)(function(){var e=(0,n.Z)((0,s.Z)().mark((function e(a){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(a);case 3:return n=e.sent,e.next=6,Z();case 6:t("/assets/man-success.jpg",n.data.msg),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t("/assets/man-stress.png",e.t0.response.data.error);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),[Z,t]),T=(0,c.useCallback)(function(){var e=(0,n.Z)((0,s.Z)().mark((function e(a){var n,r,c,i,l,o,d,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=new FormData(a.target),r=n.get("task"),c=n.get("description"),i=new Date(n.get("due-date")),l=n.get("priority"),o=(new Date).toLocaleString(),d={task:r,desc:c,dueDate:i,priority:l,dateCreated:o},e.prev=8,e.next=11,u(d);case 11:return p=e.sent,e.next=14,Z();case 14:t("/assets/man-success.jpg",p.data.msg),a.target.reset(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),t("/assets/man-stress.png",e.t0.response.data.error);case 21:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}(),[Z,t]),C=(0,c.useCallback)(function(){var e=(0,n.Z)((0,s.Z)().mark((function e(a){var n,r,c,i,l,o,d,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=new FormData(a.target),r=n.get("task"),c=n.get("description"),i=new Date(n.get("due-date")),l=n.get("priority"),o=(new Date).toLocaleString(),d={task:r,desc:c,dueDate:i,priority:l,dateCreated:o},e.prev=8,e.next=11,h(w,d);case 11:u=e.sent,t("/assets/man-success.jpg",u.data.msg),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),t("/assets/man-stress.png",e.t0.response.data.error);case 18:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}(),[t,w]);return(0,c.useEffect)((function(){Z()}),[Z]),(0,c.useEffect)((function(){y(w)}),[y,w]),{createTask:T,updateTask:C,deleteTask:D,tasks:v,task:b}}},3179:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});a(2791);var s=a(8752),n=a(3326),r=a(7285),c=a(3402),i=a(5597),l=a(6640),o=a(184),d=function(){var e=(0,l.Z)(),t=e.isOpen,a=e.closeModal,d=e.modalContent,u=e.content,p=(0,c.Z)({modalContent:d}),m=p.tasks,h=p.createTask,f=p.deleteTask,x=p.updateTask;return(0,o.jsx)("section",{className:"newtask-section",children:(0,o.jsxs)("div",{className:"newtask-container",children:[(0,o.jsx)(s.Z,{}),(0,o.jsx)(n.Z,{mode:"create",createTask:h,className:"newtask-form"}),0!==m.length&&(0,o.jsx)("div",{className:"newtask-recent",children:"Recently created"}),(0,o.jsx)(r.Z,{tasks:m,deleteTask:f,updateTask:x,className:"newtask-tasks"}),(0,o.jsx)(i.Z,{open:t,close:a,image:u.image,children:u.message})]})})}}}]);
//# sourceMappingURL=498.145caa17.chunk.js.map