"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[427],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(4137));const o={sidebar_position:7},a="Use Case Submissions",s={unversionedId:"CaseStudies",id:"CaseStudies",title:"Use Case Submissions",description:"DOW / Microsoft submission - Graph DB Use Case",source:"@site/docs/CaseStudies.md",sourceDirName:".",slug:"/CaseStudies",permalink:"/CaseStudies",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data/tree/web/docs/CaseStudies.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Functional Unit (R)",permalink:"/R/"},next:{title:"SCI Open Data",permalink:"/"}},c={},l=[{value:"DOW / Microsoft submission - Graph DB Use Case",id:"dow--microsoft-submission---graph-db-use-case",level:2},{value:"Over view",id:"over-view",level:3},{value:"NTT DATA - On-Premise Web system",id:"ntt-data---on-premise-web-system",level:2},{value:"Overview",id:"overview",level:3},{value:"Microsoft - Ecommerce web application using eShoponWe",id:"microsoft---ecommerce-web-application-using-eshoponwe",level:2},{value:"Overview",id:"overview-1",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-case-submissions"},"Use Case Submissions"),(0,i.kt)("h2",{id:"dow--microsoft-submission---graph-db-use-case"},"DOW / Microsoft submission - Graph DB Use Case"),(0,i.kt)("h3",{id:"over-view"},"Over view"),(0,i.kt)("p",null,"Collaborative use case with Dow and Microsoft performed by Tammy McClellan and Srinivasan Rakhunathan from Microsoft. Eric Friedeberg, Brandon Smith, and Samantha Beauchamp from Dow."),(0,i.kt)("p",null,"Solution chosen is a current solution in development and is the measurement of carbon in both Neo4J and TigerGraph graph databases. Information was collected via load tests by calling an API deployed in an app service."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/software_carbon_intensity/issues/335"},"Review full Case Study and submit comments here")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"ntt-data---on-premise-web-system"},"NTT DATA - On-Premise Web system"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We calculated SCI value for a web system following 3-tier architecture.\nCalculating SCI value through this case study involves measuring the behavior of components and their results based on scenarios.\nWe deployed TPC-W implementation proposed by Transaction Processing Performance Council as a workload.\nTPC-W is designed for measuring performance and cost for performance in an environment where online transaction processing (OLTP) is set up for e-commerce.\nIn areas where it is difficult to measure, it is estimated by publication from trusted institutions.\nWe assume life span of this system is 4 years, then M is divided by 35040 ","[hours]"," (4 ","[years]"," ",(0,i.kt)("em",{parentName:"p"}," 365 ","[days]"," ")," 24 ","[hours]",")"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/standards-wg/issues/36"},"Review full Case Study and submit comments here")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"microsoft---ecommerce-web-application-using-eshoponwe"},"Microsoft - Ecommerce web application using eShoponWe"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"The application is a web application that is used in an ecommerce scenario by customers. It is a sample ASP.NET Core reference application, powered by Microsoft, demonstrating a single-process (monolithic) application architecture and deployment model."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/software_carbon_intensity/issues/227"},"Review full Case Study and submit comments here")),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);