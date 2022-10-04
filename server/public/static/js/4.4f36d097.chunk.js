"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[4],{9799:function(e,t,a){a.d(t,{Z:function(){return r}});a(2791);var s=a(3924),n=a(184),r=function(e){var t=e.className;return(0,n.jsx)("div",{className:"loading-container ".concat(t),children:(0,n.jsx)(s.Ll,{width:"60",color:"#ffffff",ariaLabel:"bars-loading",visible:!0})})}},8302:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var s=a(907);var n=a(181);function r(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=a(885),c=a(2791),o=a(8752),l=a(8820),u=a(184),d=function(e){var t=e.className,a=e.handleSearchInput;return(0,u.jsx)("div",{className:"searchbar ".concat(t),children:(0,u.jsxs)("div",{className:"searchbar-container",children:[(0,u.jsx)("div",{className:"search-icon-container",children:(0,u.jsx)(l.RB5,{className:"search-icon"})}),(0,u.jsx)("div",{className:"searchbar-input",children:(0,u.jsx)("input",{type:"text",className:"searchbar-input-field",onChange:a})})]})})},f=a(7285),h=a(3402),m=a(5597),v=a(6640),p=a(9799),b=function(){var e=(0,v.Z)(),t=e.isOpen,a=e.closeModal,s=e.modalContent,n=e.content,l=(0,h.Z)({modalContent:s}),b=l.tasks,j=l.deleteTask,x=l.archiveTask,N=l.isLoading,g=(0,c.useState)(""),k=(0,i.Z)(g,2),y=k[0],w=k[1],Z=(0,c.useState)(b),C=(0,i.Z)(Z,2),D=C[0],S=C[1],T=(0,c.useState)("date-created"),L=(0,i.Z)(T,2),I=L[0],A=L[1];return(0,c.useEffect)((function(){var e;if(b)if(e=""!==y?b.filter((function(e){var t=e.task.split(" "),a=!1;return t.forEach((function(e){e.slice(0,y.length).toLowerCase()===y.toLowerCase()&&(a=!0)})),a})):b,"date-created"===I)S(r(e.sort((function(e,t){return Number(new Date(t.dateCreated).getTime())-Number(new Date(e.dateCreated).getTime())}))));else if("due-date"===I)S(r(e.sort((function(e,t){return Number(new Date(e.dueDate).getTime())-Number(new Date(t.dueDate).getTime())}))));else if("priority"===I){var t=new Map;t.set("high",1),t.set("medium",2),t.set("low",3),S(r(e.sort((function(e,a){return Number(t.get(e.priority))-Number(t.get(a.priority))}))))}}),[y,I,b]),(0,u.jsx)("section",{className:"listtasks-section",children:(0,u.jsxs)("div",{className:"listtasks-container",children:[(0,u.jsx)("div",{className:"listtasks-searchbar",children:(0,u.jsx)(d,{handleSearchInput:function(e){w(e.target.value)}})}),(0,u.jsxs)("div",{className:"listtasks-sort-by",children:[(0,u.jsx)("span",{children:"Sort By"}),(0,u.jsxs)("select",{defaultValue:"date-created",onChange:function(e){A(e.target.value)},children:[(0,u.jsx)("option",{value:"priority",children:"Priority"}),(0,u.jsx)("option",{value:"due-date",children:"Due Date"}),(0,u.jsx)("option",{value:"date-created",children:"Date Created"})]})]}),(0,u.jsx)(o.Z,{}),console.log(N),N?(0,u.jsx)(p.Z,{className:"listtasks-tasks"}):(0,u.jsx)(f.Z,{tasks:D,className:"listtasks-tasks",message:y&&'No tasks with name "'.concat(y,'" found'),deleteTask:j,archiveTask:x}),(0,u.jsx)(m.Z,{open:t,close:a,image:n.image,children:n.message})]})})}}}]);
//# sourceMappingURL=4.4f36d097.chunk.js.map