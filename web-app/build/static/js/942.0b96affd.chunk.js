"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[942],{45902:function(e,n,t){var a=t(1413),s=(t(72791),t(36314)),r=t(80184);n.Z=function(e){var n=e.label,t=void 0===n?null:n,i=e.value,o=void 0===i?"-":i,c=e.orientation,l=void 0===c?"column":c,u=e.stkProps,d=void 0===u?{}:u,m=e.lblProps,x=void 0===m?{}:m,p=e.valProps,v=void 0===p?{}:p;return(0,r.jsxs)(s.Z,(0,a.Z)((0,a.Z)({direction:{xs:"column",sm:l}},d),{},{children:[(0,r.jsx)("label",(0,a.Z)((0,a.Z)({style:{marginRight:5,fontWeight:600}},x),{},{children:t})),(0,r.jsx)("label",(0,a.Z)((0,a.Z)({style:{marginRight:5,fontWeight:500}},v),{},{children:o}))]}))}},5450:function(e,n,t){var a=t(29439),s=t(72791),r=t(57482),i=t(79836),o=t(53382),c=t(53994),l=t(56890),u=t(35855),d=t(64554),m=t(56125),x=t(20890),p=t(85172),v=t(95678),Z=t(39281),f=t(35527),h=t(80184),j=function(e){var n=e.event,t=s.useState(!1),r=(0,a.Z)(t,2),i=r[0],o=r[1];return(0,h.jsxs)(s.Fragment,{children:[(0,h.jsxs)(u.Z,{sx:{"& > *":{borderBottom:"unset"},cursor:"pointer"},children:[(0,h.jsx)(c.Z,{component:"th",scope:"row",onClick:function(){return o(!i)},children:n.event_type}),(0,h.jsx)(c.Z,{onClick:function(){return o(!i)},children:n.reason}),(0,h.jsx)(c.Z,{onClick:function(){return o(!i)},children:n.seen}),(0,h.jsx)(c.Z,{onClick:function(){return o(!i)},children:n.message.length>=30?"".concat(n.message.slice(0,30),"..."):n.message}),(0,h.jsx)(c.Z,{onClick:function(){return o(!i)},children:i?(0,h.jsx)(v.Z,{}):(0,h.jsx)(p.Z,{})})]}),(0,h.jsx)(u.Z,{children:(0,h.jsx)(c.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:5,children:(0,h.jsx)(m.Z,{in:i,timeout:"auto",unmountOnExit:!0,children:(0,h.jsx)(d.Z,{sx:{margin:1},children:(0,h.jsx)(x.Z,{style:{background:"#efefef",border:"1px solid #dedede",padding:4,fontSize:14,color:"#666666"},children:n.message})})})})})]})};n.Z=function(e){var n=e.events;return e.loading?(0,h.jsx)(r.Z,{}):(0,h.jsx)(Z.Z,{component:f.Z,children:(0,h.jsxs)(i.Z,{"aria-label":"collapsible table",children:[(0,h.jsx)(l.Z,{children:(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(c.Z,{children:"Type"}),(0,h.jsx)(c.Z,{children:"Reason"}),(0,h.jsx)(c.Z,{children:"Age"}),(0,h.jsx)(c.Z,{children:"Message"}),(0,h.jsx)(c.Z,{})]})}),(0,h.jsx)(o.Z,{children:n.map((function(e){return(0,h.jsx)(j,{event:e},"".concat(e.event_type,"-").concat(e.seen))}))})]})})}},89942:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var a=t(29439),s=t(1413),r=t(72791),i=t(11135),o=t(25787),c=t(23814),l=t(61889),u=t(25228),d=t(43896),m=t(57689),x=t(11087),p=t(81207),v=t(45248),Z=t(5450),f=t(78687),h=t(64554),j=t(81918),b=t(87995),g=t(41320),y=t(45902),k=t(80184),S={display:"grid",gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gap:2,padding:"15px"},C=function(e){var n=e.title;return(0,k.jsx)(h.Z,{sx:{borderBottom:"1px solid #eaeaea",margin:0,marginBottom:"20px"},children:(0,k.jsx)("h3",{children:n})})},N=function(e){var n=e.describeInfo;return(0,k.jsx)(r.Fragment,{children:(0,k.jsxs)("div",{id:"pvc-describe-summary-content",children:[(0,k.jsx)(C,{title:"Summary"}),(0,k.jsxs)(h.Z,{sx:(0,s.Z)({},S),children:[(0,k.jsx)(y.Z,{label:"Name",value:n.name}),(0,k.jsx)(y.Z,{label:"Namespace",value:n.namespace}),(0,k.jsx)(y.Z,{label:"Capacity",value:n.capacity}),(0,k.jsx)(y.Z,{label:"Status",value:n.status}),(0,k.jsx)(y.Z,{label:"Storage Class",value:n.storageClass}),(0,k.jsx)(y.Z,{label:"Access Modes",value:n.accessModes.join(", ")}),(0,k.jsx)(y.Z,{label:"Finalizers",value:n.finalizers.join(", ")}),(0,k.jsx)(y.Z,{label:"Volume",value:n.volume}),(0,k.jsx)(y.Z,{label:"Volume Mode",value:n.volumeMode})]})]})})},P=function(e){var n=e.annotations;return(0,k.jsx)(r.Fragment,{children:(0,k.jsxs)("div",{id:"pvc-describe-annotations-content",children:[(0,k.jsx)(C,{title:"Annotations"}),(0,k.jsx)(h.Z,{children:n.map((function(e,n){return(0,k.jsx)(j.Z,{style:{margin:"0.5%"},label:"".concat(e.key,": ").concat(e.value)},n)}))})]})})},T=function(e){var n=e.labels;return(0,k.jsx)(r.Fragment,{children:(0,k.jsxs)("div",{id:"pvc-describe-labels-content",children:[(0,k.jsx)(C,{title:"Labels"}),(0,k.jsx)(h.Z,{children:n.map((function(e,n){return(0,k.jsx)(j.Z,{style:{margin:"0.5%"},label:"".concat(e.key,": ").concat(e.value)},n)}))})]})})},w=(0,f.$j)((function(e){return{loadingTenant:e.tenants.loadingTenant}}),{setErrorSnackMessage:b.Ih}),F=(0,o.Z)((function(e){return(0,i.Z)((0,s.Z)((0,s.Z)({},c.OR),c.qg))}))(w((function(e){var n=e.tenant,t=e.namespace,s=e.pvcName,i=e.propLoading,o=(0,r.useState)(),c=(0,a.Z)(o,2),m=c[0],x=c[1],v=(0,r.useState)(!0),Z=(0,a.Z)(v,2),f=Z[0],h=Z[1],j=(0,r.useState)(0),y=(0,a.Z)(j,2),S=y[0],C=y[1],w=(0,g.TL)();(0,r.useEffect)((function(){i&&h(!0)}),[i]),(0,r.useEffect)((function(){f&&p.Z.invoke("GET","/api/v1/namespaces/".concat(t,"/tenants/").concat(n,"/pvcs/").concat(s,"/describe")).then((function(e){x(e),h(!1)})).catch((function(e){w((0,b.Ih)(e)),h(!1)}))}),[f,s,t,n,w]);return(0,k.jsx)(r.Fragment,{children:m&&(0,k.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,k.jsxs)(u.Z,{value:S,onChange:function(e,n){C(n)},indicatorColor:"primary",textColor:"primary","aria-label":"cluster-tabs",variant:"scrollable",scrollButtons:"auto",children:[(0,k.jsx)(d.Z,{id:"pvc-describe-summary",label:"Summary"}),(0,k.jsx)(d.Z,{id:"pvc-describe-annotations",label:"Annotations"}),(0,k.jsx)(d.Z,{id:"pvc-describe-labels",label:"Labels"})]}),function(e,n){switch(e){case 0:return(0,k.jsx)(N,{describeInfo:n});case 1:return(0,k.jsx)(P,{annotations:n.annotations});case 2:return(0,k.jsx)(T,{labels:n.labels})}}(S,m)]})})}))),E=(0,o.Z)((function(e){return(0,i.Z)((0,s.Z)({breadcrumLink:{textDecoration:"none",color:"black"}},c.Bz))}))((function(e){var n=e.classes,t=(0,g.TL)(),s=(0,m.UO)(),i=s.tenantName,o=s.PVCName,c=s.tenantNamespace,f=(0,r.useState)(0),h=(0,a.Z)(f,2),j=h[0],y=h[1],S=(0,r.useState)(!0),C=(0,a.Z)(S,2),N=C[0],P=C[1],T=(0,r.useState)([]),w=(0,a.Z)(T,2),E=w[0],M=w[1];return(0,r.useEffect)((function(){N&&p.Z.invoke("GET","/api/v1/namespaces/".concat(c,"/tenants/").concat(i,"/pvcs/").concat(o,"/events")).then((function(e){for(var n=0;n<e.length;n++){var t=Date.now()/1e3|0;e[n].seen=(0,v.v1)((t-e[n].last_seen).toString())}M(e),P(!1)})).catch((function(e){t((0,b.Ih)(e)),P(!1)}))}),[N,o,c,i,t]),(0,k.jsxs)(r.Fragment,{children:[(0,k.jsx)(l.ZP,{item:!0,xs:12,children:(0,k.jsxs)("h1",{className:n.sectionTitle,children:[(0,k.jsx)(x.rU,{to:"/namespaces/".concat(c,"/tenants/").concat(i,"/volumes"),className:n.breadcrumLink,children:"PVCs"})," ","> ",o]})}),(0,k.jsxs)(l.ZP,{container:!0,children:[(0,k.jsx)(l.ZP,{item:!0,xs:12,children:(0,k.jsxs)(u.Z,{value:j,onChange:function(e,n){y(n)},indicatorColor:"primary",textColor:"primary","aria-label":"cluster-tabs",variant:"scrollable",scrollButtons:"auto",children:[(0,k.jsx)(d.Z,{label:"Events",id:"simple-tab-0"}),(0,k.jsx)(d.Z,{label:"Describe",id:"simple-tab-1"})]})}),0===j&&(0,k.jsxs)(r.Fragment,{children:[(0,k.jsx)("h1",{className:n.sectionTitle,children:"Events"}),(0,k.jsx)(Z.Z,{events:E,loading:N})]}),1===j&&(0,k.jsx)(F,{tenant:i||"",namespace:c||"",pvcName:o||"",propLoading:N})]})]})}))},36314:function(e,n,t){t.d(n,{Z:function(){return P}});var a=t(4942),s=t(63366),r=t(87462),i=t(72791),o=t(28182),c=t(82466),l=t(94419),u=t(21217),d=t(93457),m=t(86083),x=t(78519),p=t(85080),v=t(51184),Z=t(45682),f=t(80184),h=["component","direction","spacing","divider","children","className","useFlexGap"],j=(0,p.Z)(),b=(0,d.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function g(e){return(0,m.Z)({props:e,name:"MuiStack",defaultTheme:j})}function y(e,n){var t=i.Children.toArray(e).filter(Boolean);return t.reduce((function(e,a,s){return e.push(a),s<t.length-1&&e.push(i.cloneElement(n,{key:"separator-".concat(s)})),e}),[])}var k=function(e){var n=e.ownerState,t=e.theme,s=(0,r.Z)({display:"flex",flexDirection:"column"},(0,v.k9)({theme:t},(0,v.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var i=(0,Z.hB)(t),o=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),l=(0,v.P$)({values:n.direction,base:o}),u=(0,v.P$)({values:n.spacing,base:o});"object"===typeof l&&Object.keys(l).forEach((function(e,n,t){if(!l[e]){var a=n>0?l[t[n-1]]:"column";l[e]=a}}));s=(0,c.Z)(s,(0,v.k9)({theme:t},u,(function(e,t){return n.useFlexGap?{gap:(0,Z.NA)(i,e)}:{"& > :not(style) + :not(style)":(0,a.Z)({margin:0},"margin".concat((s=t?l[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[s])),(0,Z.NA)(i,e))};var s})))}return s=(0,v.dt)(t.breakpoints,s)};var S=t(66934),C=t(31402),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?b:n,a=e.useThemeProps,c=void 0===a?g:a,d=e.componentName,m=void 0===d?"MuiStack":d,p=t(k),v=i.forwardRef((function(e,n){var t=c(e),a=(0,x.Z)(t),i=a.component,d=void 0===i?"div":i,v=a.direction,Z=void 0===v?"column":v,j=a.spacing,b=void 0===j?0:j,g=a.divider,k=a.children,S=a.className,C=a.useFlexGap,N=void 0!==C&&C,P=(0,s.Z)(a,h),T={direction:Z,spacing:b,useFlexGap:N},w=(0,l.Z)({root:["root"]},(function(e){return(0,u.Z)(m,e)}),{});return(0,f.jsx)(p,(0,r.Z)({as:d,ownerState:T,ref:n,className:(0,o.Z)(w.root,S)},P,{children:g?y(k,g):k}))}));return v}({createStyledComponent:(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,C.Z)({props:e,name:"MuiStack"})}}),P=N}}]);
//# sourceMappingURL=942.0b96affd.chunk.js.map