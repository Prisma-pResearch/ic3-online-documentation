"use strict";(self.webpackChunkic_3_online_document=self.webpackChunkic_3_online_document||[]).push([[9357],{4137:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,g=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[u]="string"==typeof t?t:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1224:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:2},l=void 0,d={unversionedId:"OMOP/CustomizedMapping/visit_occurrence",id:"OMOP/CustomizedMapping/visit_occurrence",title:"visit_occurrence",description:"Table name: visit_occurrence",source:"@site/resources/OMOP/CustomizedMapping/visit_occurrence.md",sourceDirName:"OMOP/CustomizedMapping",slug:"/OMOP/CustomizedMapping/visit_occurrence",permalink:"/ic3-online-documentation/resources/OMOP/CustomizedMapping/visit_occurrence",draft:!1,tags:[],version:"current",lastUpdatedBy:"Divya Vellanki",lastUpdatedAt:1732055106,formattedLastUpdatedAt:"Nov 19, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mappingSidebar",previous:{title:"person",permalink:"/ic3-online-documentation/resources/OMOP/CustomizedMapping/person"},next:{title:"visit_detail",permalink:"/ic3-online-documentation/resources/OMOP/CustomizedMapping/visit_detail"}},o={},p=[{value:"Table name: visit_occurrence",id:"table-name-visit_occurrence",level:2},{value:"Reading from encounters_clean_0_0.csv",id:"reading-from-encounters_clean_0_0csv",level:3}],c={toc:p};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"table-name-visit_occurrence"},"Table name: visit_occurrence"),(0,r.kt)("h3",{id:"reading-from-encounters_clean_0_0csv"},"Reading from encounters_clean_0_0.csv"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7703).Z,width:"800",height:"925"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Destination Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Source field"),(0,r.kt)("th",{parentName:"tr",align:null},"Logic"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment field"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"person_id"),(0,r.kt)("td",{parentName:"tr",align:null},"patient_deiden_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Patient ID is the numeric component of the souce ID from IDR after the project name and deidentification database intialization date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_occurrence_id"),(0,r.kt)("td",{parentName:"tr",align:null},"merged_enc_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AUTO INCREMENT COLUMN based on visit_occurrence_source_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_occurrence_source_id"),(0,r.kt)("td",{parentName:"tr",align:null},"merged_enc_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Source Visit Occurrence ID. This represents an aggregated encounter_deiden_id for identify hospital and ambulatory episodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_start_datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"encounter_effective_datemerged_admit_datetime"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use encounter effective date when admit_datetime is NULL and default to midnight.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"encounter_effective_date"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_end_datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"encounter_effective_datemerged_dischg_datetime"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use if discharge date is NULL impute time as 23:59.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"encounter_effective_datemerged_dischg_datetime"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use if discharge date is NULL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_concept_id"),(0,r.kt)("td",{parentName:"tr",align:null},"patient_typeencounter_type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The Visit Concept ID is derived from a curated map table based on the concatation of the patient and encounter types. Please see the sheet map_table for additional mapping details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_source_value"),(0,r.kt)("td",{parentName:"tr",align:null},"external_namehospitalpatient_typeencounter_type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This is a combination of patient type, encounter type, hospital, and external name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"care_site_id"),(0,r.kt)("td",{parentName:"tr",align:null},"location_of_svchospital"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use combination of location_of_svc and hospital to lookup care site id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider_id"),(0,r.kt)("td",{parentName:"tr",align:null},"attending_dr_deiden_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admitted_from_concept_id"),(0,r.kt)("td",{parentName:"tr",align:null},"admit_source"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Mapped using curatedThe Admitted FROM Concept ID is derived from admit source. Please see the sheet map_table for additional mapping details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admitted_from_source_value"),(0,r.kt)("td",{parentName:"tr",align:null},"admit_source"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discharged_to_concept_id"),(0,r.kt)("td",{parentName:"tr",align:null},"dischg_disposition"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The discharge to Concept ID is derived from discharge disposition. Please see the sheet map_table for additional mapping details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discharged_to_source_value"),(0,r.kt)("td",{parentName:"tr",align:null},"dischg_disposition"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_type_concept_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use standard concept for EHR DATA 32817.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visit_source_concept_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Not populated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preceding_visit_occurrence_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Populated at end of ETL by SQL Script.")))))}u.isMDXComponent=!0},7703:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image4-c6565689db31aafc4a729c631ef4b83f.png"}}]);