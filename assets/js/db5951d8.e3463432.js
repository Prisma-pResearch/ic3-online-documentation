"use strict";(self.webpackChunkic_3_online_document=self.webpackChunkic_3_online_document||[]).push([[867],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const o={},s="Python coding standard",i={unversionedId:"tutorials/For Members/how_to_python",id:"tutorials/For Members/how_to_python",title:"Python coding standard",description:"This document is trying to set up the standard for Python codes implemented by IC3 members. The standards below are referred to PEP8",source:"@site/docs/tutorials/For Members/how_to_python.md",sourceDirName:"tutorials/For Members",slug:"/tutorials/For Members/how_to_python",permalink:"/ic3-online-documentation/docs/tutorials/For Members/how_to_python",draft:!1,editUrl:"https://github.com/Prisma-pResearch/ic3-online-documentation/edit/main/websites/docs/tutorials/For Members/how_to_python.md",tags:[],version:"current",lastUpdatedBy:"Divya Vellanki",lastUpdatedAt:1732055106,formattedLastUpdatedAt:"Nov 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Github Tutorial",permalink:"/ic3-online-documentation/docs/tutorials/For Members/how_to_github"},next:{title:"Working with HiPerGator",permalink:"/ic3-online-documentation/docs/tutorials/For Members/how_to_work_with_HPG"}},l={},d=[{value:"<strong>Indentations and Imports</strong>",id:"indentations-and-imports",level:2},{value:"<strong>Spaces, Commas and Quotes</strong>",id:"spaces-commas-and-quotes",level:2},{value:"<strong>Naming Conventions</strong>",id:"naming-conventions",level:2},{value:"<strong>Exception handling for critical condition</strong>",id:"exception-handling-for-critical-condition",level:2},{value:"<strong>Documentation of methods</strong>",id:"documentation-of-methods",level:2},{value:"<strong>Useful Resources</strong>",id:"useful-resources",level:2}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-coding-standard"},"Python coding standard"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is trying to set up the standard for Python codes implemented by IC3 members. The standards below are referred to ",(0,r.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0008/"},"PEP8"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://zen-of-python.info/"},(0,r.kt)("inlineCode",{parentName:"a"},"Zen of Python")))),(0,r.kt)("h2",{id:"indentations-and-imports"},(0,r.kt)("strong",{parentName:"h2"},"Indentations and Imports")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using 4 spaces for indentations, please don't mix Tab and Spaces ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"import")," should be in particular sequence."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"standard libraries"),(0,r.kt)("li",{parentName:"ul"},"third-party libraries"),(0,r.kt)("li",{parentName:"ul"},"local libraries")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Examples of imports and indentations\n\nimport os\nimport sys\n\nimport pandas as pd\nimport numpy as np\nfrom datetime import datetime\n\nfrom local_library import local_a, local_b\n\n")),(0,r.kt)("h2",{id:"spaces-commas-and-quotes"},(0,r.kt)("strong",{parentName:"h2"},"Spaces, Commas and Quotes")),(0,r.kt)("p",null,"Avoid extra spaces, there should be a single space around both sides of the operator,one after the comma and none inside opening or closing of parenthesis. Both single quotes and double quotes are acceptable, you should use both if you need quotes inside quotes to avoid syntax error and extra backslash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Examples of commas and whitespaces\n    \nx,  y = 30,  \"text inside quotes\"\nz = 'text inside quotes'\nif x == 30: print(x, y, z)\n\n# how to use quotes inside quotes\ntext = \"This text is using 'the single quote' inside double quote\"\nprint(text)\n")),(0,r.kt)("h2",{id:"naming-conventions"},(0,r.kt)("strong",{parentName:"h2"},"Naming Conventions")),(0,r.kt)("p",null,"Use grammatically correct variable names, the class name should start with an uppercase and must follow ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Camel_case"},"camelCase convention")," If more than two words are to be used. In the same way, a function name should be joined with an underscore, and it must be lowercase. If the function name clashes with a reserved argument, use an underscore instead of a wrong spelling. Constants are declared in all capital letters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Examples of naming\n\n# class name follows camelcase convention\nclass StudentDetails:\n                \n    def __init__(self, first_name, last_name):\n        self.first_name = first_name\n        self.last_name = last_name\n                \n# Method name, variable names in lowercase joined with an underscore\ndef grade(self, marks_obtained):\n\n    # constants in capital\n    GRACE = 2\n    marks_obtained = GRACE + marks_obtained\n    if marks_obtained > 90:\n        self.student_grade = 'A'\n    elif marks_obtained > 70:\n        student_grade = 'B'\n    else:\n        student_grade = 'C'\n\n")),(0,r.kt)("h2",{id:"exception-handling-for-critical-condition"},(0,r.kt)("strong",{parentName:"h2"},"Exception handling for critical condition")),(0,r.kt)("p",null,"It's necessary to obtain exception handling for critical errors.Please consider about the corner cases and exceptions."),(0,r.kt)("h2",{id:"documentation-of-methods"},(0,r.kt)("strong",{parentName:"h2"},"Documentation of methods")),(0,r.kt)("p",null,"Documenting every method with proper specification of parameters, return type, and data types. Try to avoid multiple returns from a function, a single generic return is preferred. ",(0,r.kt)("a",{parentName:"p",href:"https://www.programiz.com/python-programming/docstrings"},"DocString")," is a useful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n# documenting a function\ndef get_grades(marks: int) -> grade: str:\n\"\"\"\nSummary: getting grades from marks\nDescription: This function takes marks as an argument and returns grades\nparams:\nmarks(int) : marks obtained\n:\ngrade(string) : grade achieved\n\"\"\"\n    if marks > 90:\n        grade = 'A'\n    elif marks > 70:\n        grade = 'B'\n    else:\n        grade = 'C'\n            \n    return grade\n\n")),(0,r.kt)("h2",{id:"useful-resources"},(0,r.kt)("strong",{parentName:"h2"},"Useful Resources")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://realpython.com/python-pep8/"},"How to write beautiful python codes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://datascientyst.com/pandas-cheat-sheet-for-data-science/"},"Pandas online tutorial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sqlzoo.net/wiki/SQL_Tutorial"},"SQL online tutorai")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(6833).Z},"Pandas_cheat_sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(675).Z},"SQL_cheat_sheet"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0},6833:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/pandas_cheat_sheet-d171d4e76d5a783f0b2523fc6526fd9b.pdf"},675:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/sql_cheat_sheet-958e812b8f8bc4c9209c9537b4997c69.pdf"}}]);