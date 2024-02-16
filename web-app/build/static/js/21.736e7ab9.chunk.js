"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[21],{3814:(e,a,t)=>{t.d(a,{I:()=>r,O:()=>n});const n={label:{color:"#07193E",fontSize:13,alignSelf:"center",whiteSpace:"nowrap","&:not(:first-of-type)":{marginLeft:10}},actionsTray:{display:"flex",justifyContent:"space-between",marginBottom:"1rem",alignItems:"center","& button":{flexGrow:0,marginLeft:8}}},r={modalButtonBar:{marginTop:15,display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginRight:10},"& button:last-child":{marginRight:0}},modalFormScrollable:{maxHeight:"calc(100vh - 300px)",overflowY:"auto",paddingTop:10}}},7021:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var n=t(2791),r=t(9945),i=t(9434),s=t(3814),l=t(4741),o=t(968),d=t(7995),c=t(1320),u=t(3508),p=t(1207),g=t(184);const h=()=>{const e=(0,c.TL)(),a=(0,i.v9)((e=>e.tenants.tenantInfo)),t=(0,i.v9)((e=>e.tenants.loadingTenant)),[h,_]=(0,n.useState)(!1),[m,v]=(0,n.useState)(!1),[x,D]=(0,n.useState)("Built-in"),[j,S]=(0,n.useState)(""),[I,f]=(0,n.useState)(""),[b,y]=(0,n.useState)(""),[k,N]=(0,n.useState)(""),[C,A]=(0,n.useState)(""),[L,B]=(0,n.useState)(""),[w,T]=(0,n.useState)(""),[U,O]=(0,n.useState)(""),[R,F]=(0,n.useState)(""),[z,W]=(0,n.useState)(""),[G,P]=(0,n.useState)(""),[q,Z]=(0,n.useState)(""),[K,E]=(0,n.useState)(""),[J,V]=(0,n.useState)(!1),[Y,H]=(0,n.useState)(!1),[M,Q]=(0,n.useState)(!1),[X,$]=(0,n.useState)([""]),[ee,ae]=(0,n.useState)([""]),[te,ne]=(0,n.useState)({}),re=e=>{ne((0,l.h)(te,e))},[ie,se]=(0,n.useState)(!1);(0,n.useEffect)((()=>{let e=[];"OpenID"===x&&(e=[...e,{fieldKey:"openID_CONFIGURATION_URL",required:!0,value:j},{fieldKey:"openID_clientID",required:!0,value:I},{fieldKey:"openID_secretID",required:!0,value:b},{fieldKey:"openID_claimName",required:!1,value:C}]),"AD"===x&&(e=[...e,{fieldKey:"AD_URL",required:!0,value:w},{fieldKey:"ad_lookupBindDN",required:!0,value:U}]);const a=(0,o.R)(e);se(0===Object.keys(a).length),ne(a)}),[x,j,I,b,C,w,U]);const le=(0,n.useCallback)((()=>{p.Z.invoke("GET","/api/v1/namespaces/".concat(null===a||void 0===a?void 0:a.namespace,"/tenants/").concat(null===a||void 0===a?void 0:a.name,"/identity-provider")).then((e=>{e&&(e.oidc?(D("OpenID"),S(e.oidc.configuration_url),f(e.oidc.client_id),y(e.oidc.secret_id),N(e.oidc.callback_url),A(e.oidc.claim_name),B(e.oidc.scopes)):e.active_directory&&(D("AD"),T(e.active_directory.url),O(e.active_directory.lookup_bind_dn),F(e.active_directory.lookup_bind_password),W(e.active_directory.user_dn_search_base_dn),P(e.active_directory.user_dn_search_filter),Z(e.active_directory.group_search_base_dn),E(e.active_directory.group_search_filter),V(e.active_directory.skip_tls_verification),H(e.active_directory.server_insecure),Q(e.active_directory.server_start_tls)))})).catch((a=>{e((0,d.Ih)(a))}))}),[a,e]);(0,n.useEffect)((()=>{a&&le()}),[a,le]);return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(u.Z,{title:"Save and Restart",confirmText:"Restart",cancelText:"Cancel",titleIcon:(0,g.jsx)(r.EjK,{}),isLoading:h,onClose:()=>v(!1),isOpen:m,onConfirm:()=>{_(!0);let t={};switch(x){case"AD":t.active_directory={url:w,lookup_bind_dn:U,lookup_bind_password:R,user_dn_search_base_dn:z,user_dn_search_filter:G,group_search_base_dn:q,group_search_filter:K,skip_tls_verification:J,server_insecure:Y,server_start_tls:M};break;case"OpenID":t.oidc={configuration_url:j,client_id:I,secret_id:b,callback_url:k,claim_name:C,scopes:L}}p.Z.invoke("POST","/api/v1/namespaces/".concat(null===a||void 0===a?void 0:a.namespace,"/tenants/").concat(null===a||void 0===a?void 0:a.name,"/identity-provider"),t).then((()=>{_(!1),v(!1),le()})).catch((a=>{e((0,d.Ih)(a)),_(!1)}))},confirmationContent:(0,g.jsx)(n.Fragment,{children:"Are you sure you want to save the changes and restart the service?"})}),t?(0,g.jsx)(r.xuv,{sx:{textAlign:"center"},children:(0,g.jsx)(r.aNw,{})}):(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(r.xuv,{children:(0,g.jsx)(r.NZf,{separator:!0,sx:{marginBottom:15},children:"Identity Provider"})}),(0,g.jsxs)(r.ltY,{children:[(0,g.jsx)(r.Eep,{currentValue:x,id:"idp-options",name:"idp-options",label:"Protocol",onChange:e=>{D(e.target.value)},selectorOptions:[{label:"Built-in",value:"Built-in",icon:(0,g.jsx)(r.oyc,{})},{label:"Open ID",value:"OpenID",icon:(0,g.jsx)(r.gyG,{})},{label:"LDAP / Active Directory",value:"AD",icon:(0,g.jsx)(r.vcZ,{})}]}),"OpenID"===x&&(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(r.Wzg,{id:"openID_CONFIGURATION_URL",name:"openID_CONFIGURATION_URL",onChange:e=>{S(e.target.value),re("openID_CONFIGURATION_URL")},label:"Configuration URL",value:j,placeholder:"https://your-identity-provider.com/.well-known/openid-configuration",error:te.openID_CONFIGURATION_URL||"",required:!0}),(0,g.jsx)(r.Wzg,{id:"openID_clientID",name:"openID_clientID",onChange:e=>{f(e.target.value),re("openID_clientID")},label:"Client ID",value:I,error:te.openID_clientID||"",required:!0}),(0,g.jsx)(r.Wzg,{type:"password",id:"openID_secretID",name:"openID_secretID",onChange:e=>{y(e.target.value),re("openID_secretID")},label:"Secret ID",value:b,error:te.openID_secretID||"",required:!0}),(0,g.jsx)(r.Wzg,{id:"openID_claimName",name:"openID_claimName",onChange:e=>{A(e.target.value),re("openID_claimName")},label:"Claim Name",value:C,placeholder:"policy",error:te.openID_claimName||""}),(0,g.jsx)(r.Wzg,{id:"openID_scopes",name:"openID_scopes",onChange:e=>{B(e.target.value),re("openID_scopes")},label:"Scopes",value:L})]}),"AD"===x&&(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(r.Wzg,{id:"AD_URL",name:"AD_URL",onChange:e=>{T(e.target.value),re("AD_URL")},label:"LDAP Server Address",value:w,placeholder:"ldap-server:636",error:te.AD_URL||"",required:!0}),(0,g.jsx)(r.rsf,{value:"ad_skipTLS",id:"ad_skipTLS",name:"ad_skipTLS",checked:J,onChange:e=>{const a=e.target.checked;V(a)},label:"Skip TLS Verification"}),(0,g.jsx)(r.rsf,{value:"ad_serverInsecure",id:"ad_serverInsecure",name:"ad_serverInsecure",checked:Y,onChange:e=>{const a=e.target.checked;H(a)},label:"Server Insecure"}),Y?(0,g.jsx)(r.J6i,{title:"Warning",message:"All traffic with Active Directory will be\n                    unencrypted",variant:"warning",sx:{marginBottom:15}}):null,(0,g.jsx)(r.rsf,{value:"ad_serverStartTLS",id:"ad_serverStartTLS",name:"ad_serverStartTLS",checked:M,onChange:e=>{const a=e.target.checked;Q(a)},label:"Start TLS connection to AD/LDAP server"}),(0,g.jsx)(r.Wzg,{id:"ad_lookupBindDN",name:"ad_lookupBindDN",onChange:e=>{O(e.target.value),re("ad_lookupBindDN")},label:"Lookup Bind DN",value:U,placeholder:"cn=admin,dc=min,dc=io",error:te.ad_lookupBindDN||"",required:!0}),(0,g.jsx)(r.Wzg,{type:"password",id:"ad_lookupBindPassword",name:"ad_lookupBindPassword",onChange:e=>{F(e.target.value)},label:"Lookup Bind Password",value:R,placeholder:"admin"}),(0,g.jsx)(r.Wzg,{id:"ad_userDNSearchBaseDN",name:"ad_userDNSearchBaseDN",onChange:e=>{W(e.target.value)},label:"User DN Search Base DN",value:z,placeholder:"dc=min,dc=io"}),(0,g.jsx)(r.Wzg,{id:"ad_userDNSearchFilter",name:"ad_userDNSearchFilter",onChange:e=>{P(e.target.value)},label:"User DN Search Filter",value:G,placeholder:"(sAMAcountName=%s)"}),(0,g.jsx)(r.Wzg,{id:"ad_groupSearchBaseDN",name:"ad_groupSearchBaseDN",onChange:e=>{Z(e.target.value)},label:"Group Search Base DN",value:q,placeholder:"ou=hwengg,dc=min,dc=io;ou=swengg,dc=min,dc=io"}),(0,g.jsx)(r.Wzg,{id:"ad_groupSearchFilter",name:"ad_groupSearchFilter",onChange:e=>{E(e.target.value)},label:"Group Search Filter",value:K,placeholder:"(&(objectclass=groupOfNames)(member=%s))"})]}),(0,g.jsx)(r.xuv,{sx:s.I.modalButtonBar,children:(0,g.jsx)(r.zxk,{id:"save-idp",type:"submit",variant:"callAction",color:"primary",disabled:!ie||h,onClick:()=>v(!0),label:"Save"})}),"AD"===x&&(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(r.NZf,{separator:!0,children:"User & Group management"}),(0,g.jsx)("br",{}),(0,g.jsxs)("fieldset",{className:"inputItem",children:[(0,g.jsx)("legend",{children:"List of user DNs (Distinguished Names) to be added as Tenant Administrators"}),(0,g.jsx)(r.rjZ,{item:!0,xs:12,children:X.map(((e,a)=>(0,g.jsx)(n.Fragment,{children:(0,g.jsxs)(r.xuv,{sx:{display:"flex",marginBottom:10},children:[(0,g.jsx)(r.Wzg,{id:"ad-userdn-".concat(a.toString()),label:"",placeholder:"",name:"ad-userdn-".concat(a.toString()),value:X[a],onChange:e=>{$(X.map(((t,n)=>n===a?e.target.value:t)))},index:a,error:te["ad-userdn-".concat(a.toString())]||""},"csv-ad-userdn-".concat(a.toString())),(0,g.jsxs)(r.xuv,{sx:{marginLeft:10,display:"flex",height:38},children:[(0,g.jsx)(r.ua7,{tooltip:"Add User","aria-label":"add",children:(0,g.jsx)(r.hU,{size:"small",onClick:()=>{$([...X,""])},children:(0,g.jsx)(r.dtP,{})})}),(0,g.jsx)(r.ua7,{tooltip:"Remove","aria-label":"add",children:(0,g.jsx)(r.hU,{size:"small",style:{marginLeft:16},onClick:()=>{X.length>1&&$(X.filter(((e,t)=>t!==a)))},children:(0,g.jsx)(r.pJl,{})})})]})]})},"identityField-".concat(a.toString()))))})]}),(0,g.jsxs)("fieldset",{className:"inputItem",children:[(0,g.jsx)("legend",{children:"List of group DNs (Distinguished Names) to be added as Tenant Administrators"}),(0,g.jsx)(r.rjZ,{item:!0,xs:12,children:ee.map(((e,a)=>(0,g.jsx)(n.Fragment,{children:(0,g.jsxs)(r.xuv,{sx:{display:"flex",marginBottom:10},children:[(0,g.jsx)(r.Wzg,{id:"ad-groupdn-".concat(a.toString()),label:"",placeholder:"",name:"ad-groupdn-".concat(a.toString()),value:ee[a],onChange:e=>{ae(ee.map(((t,n)=>n===a?e.target.value:t)))},index:a,error:te["ad-groupdn-".concat(a.toString())]||""},"csv-ad-groupdn-".concat(a.toString())),(0,g.jsxs)(r.xuv,{sx:{marginLeft:10,display:"flex",height:38},children:[(0,g.jsx)(r.ua7,{tooltip:"Add Group","aria-label":"add",children:(0,g.jsx)(r.hU,{size:"small",onClick:()=>{ae([...ee,""])},children:(0,g.jsx)(r.dtP,{})})}),(0,g.jsx)(r.ua7,{tooltip:"Remove","aria-label":"add",children:(0,g.jsx)(r.hU,{size:"small",style:{marginLeft:16},onClick:()=>{ee.length>1&&ae(ee.filter(((e,t)=>t!==a)))},children:(0,g.jsx)(r.pJl,{})})})]})]})},"identityField-".concat(a.toString()))))})]}),(0,g.jsx)("br",{}),(0,g.jsx)(r.xuv,{sx:s.I.modalButtonBar,children:(0,g.jsx)(r.zxk,{id:"add-additional-dns",type:"submit",variant:"callAction",disabled:!ie||h,onClick:()=>(()=>{_(!0);let t={};"AD"===x&&(t={user_dns:X.filter((e=>""!==e.trim())),group_dns:ee.filter((e=>""!==e.trim()))});p.Z.invoke("POST","/api/v1/namespaces/".concat(null===a||void 0===a?void 0:a.namespace,"/tenants/").concat(null===a||void 0===a?void 0:a.name,"/set-administrators"),t).then((()=>{_(!1),ae([""]),$([""]),le(),e((0,d.y1)("Administrators added successfully"))})).catch((a=>{e((0,d.Ih)(a)),_(!1)}))})(),label:"Add additional DNs"})})]})]})]})]})}}}]);
//# sourceMappingURL=21.736e7ab9.chunk.js.map