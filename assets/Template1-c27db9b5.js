import{r as a,j as e}from"./index-ab28adc3.js";import{p as n,d as h,r as t}from"./doFilter-9e3db824.js";const{data:l}=t,p=({printMode:c})=>{const d=a.useRef(null),r=a.useRef(null);return a.useEffect(()=>{const s=()=>{if(!l.photo&&!n)return;const i=d.current.getBoundingClientRect().height;r.current.style.height=`${i}px`};return s(),addEventListener("resize",s),()=>{removeEventListener("resize",s)}},[]),e.jsxs("div",{id:"template",children:[e.jsxs("div",{id:"heading",children:[e.jsxs("div",{ref:d,children:[e.jsx("h1",{children:l.firstName}),e.jsx("h1",{children:l.lastName}),e.jsx("h5",{children:l.title})]}),e.jsx("div",{children:(l.photo||n)&&e.jsx("a",{href:l.github,children:e.jsx("img",{id:"photo",ref:r,src:l.photo||n,alt:"photo"})})})]}),e.jsxs("div",{id:"contact-info",children:[e.jsx("div",{className:"row",children:h("phone","email","telephone").map(([s,i])=>e.jsxs("div",{className:"col",children:[e.jsxs("p",{className:"title",children:[s,":"]}),e.jsx("a",{href:`${s==="phone"||s==="telephone"?"tel:":s==="email"?"mailto:":""}${i}`,children:e.jsx("p",{children:i})})]},s))}),e.jsx("div",{className:"row",children:h("github","linkedin","facebook","twitter","youtube","instagram").map(([s,i])=>e.jsxs("div",{className:"col",children:[e.jsxs("p",{className:"title",children:[s,":"]}),e.jsx("a",{href:i,children:e.jsx("p",{children:i})})]},s))}),e.jsxs("div",{className:"col -ms-2",children:[e.jsx("p",{className:"title",children:"Resume Live Version:"}),e.jsx("a",{href:l.liveLink,children:e.jsx("p",{children:l.liveLink})})]})]}),e.jsx("div",{id:"about-me",children:l.about&&e.jsx("p",{children:l.about})}),l.skills&&e.jsx("div",{id:"skills",children:e.jsx("div",{className:"row",children:l.skills.map(s=>e.jsxs("div",{className:"col",children:[e.jsx("h6",{children:s.heading}),e.jsx("ul",{className:"skillset",children:s.data.map(i=>e.jsx("li",{children:e.jsx("p",{className:"bullet-item",children:i})},i))})]},s.heading))})}),l.projects&&l.projects.some(s=>s.enabled)&&e.jsxs("div",{id:"projects",children:[e.jsx("div",{className:"heading",children:e.jsx("h5",{children:"Project Experience"})}),e.jsx("ul",{className:"content",children:l.projects.map(s=>s.enabled&&e.jsxs("li",{className:"sections",children:[e.jsxs("div",{className:"title-section",children:[e.jsx("a",{href:s.link,children:e.jsx("h5",{children:s.title})}),s.repo&&e.jsx("p",{children:e.jsx("a",{className:"date",href:s.repo,children:e.jsx("small",{className:"leading-5",children:s.repo})})}),e.jsxs("p",{className:"w-full",children:["=>"," ",s.shortDescription]})]}),e.jsxs("div",{className:"builders",children:[e.jsx("h6",{className:"",children:"Built With: "}),s.builtWith.map((i,x,m)=>e.jsx("a",{target:"_blank",rel:"noreferrer",className:c?"pointer-events-none":void 0,href:!c&&`https://www.google.com/search?q=${i}`,children:e.jsx("p",{children:i})},i))]}),e.jsxs("div",{className:"row",children:[e.jsx("h6",{className:"col",children:"Features:"}),e.jsx("ul",{className:"col features",children:s.features.map(i=>e.jsx("li",{children:e.jsxs("p",{className:"bullet-item",children:[i,i.at(-1)==="."?"":"."]})},i))})]})]},s.title))})]}),l.experiences&&l.experiences.some(s=>s.enabled)&&e.jsxs("div",{id:"experiences",children:[e.jsx("div",{className:"heading",children:e.jsx("h5",{children:"Work Experience"})}),e.jsx("ul",{className:"content",children:l.experiences.map(s=>s.enabled&&e.jsxs("li",{className:"sections",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"position",children:s.position.split(",").map(i=>e.jsx("h5",{children:i.trim()},i))}),e.jsxs("div",{className:"details",children:[e.jsx("div",{className:"company",children:s.company&&e.jsx("h6",{children:s.company})}),e.jsx("div",{className:"date",children:(s.dateFrom||s.dateTo)&&e.jsxs("small",{children:[s.dateFrom," ",s.dateFrom&&s.dateTo&&" - ",s.dateTo]})}),s.location&&e.jsx("small",{children:s.location})]})]}),e.jsxs("div",{children:[e.jsx("h6",{children:"Responsibilites:"}),e.jsx("ul",{className:"responsibilities",children:s.responsibilities.map(i=>e.jsx("li",{children:e.jsxs("p",{className:"bullet-item",children:[i,i.at(-1)!=="."&&"."]})},i))})]})]},s.position))})]}),l.educations&&l.educations.length!==0&&e.jsxs("div",{id:"education",children:[e.jsx("div",{className:"heading",children:e.jsx("h5",{children:"Education and Certifications"})}),e.jsx("ul",{className:"content",children:l.educations.map(s=>e.jsxs("li",{className:"row",children:[e.jsx("div",{className:"col info",children:e.jsxs("small",{className:"bullet-item",children:[e.jsx("h6",{className:"inline",children:s.title}),s.institute&&`, ${s.institute}`,s.location&&`, ${s.location}`,"."]})}),e.jsx("div",{className:"col date",children:e.jsxs("small",{children:[s.dateFrom," - ",s.dateTo]})})]},s.title))})]}),l.spokenLanguages&&l.spokenLanguages.length&&e.jsxs("div",{id:"spoken-languages",children:[e.jsx("div",{className:"heading",children:e.jsx("h5",{children:"Spoken Languages"})}),e.jsx("div",{className:"content",children:e.jsx("ul",{className:"langs",children:l.spokenLanguages.map(s=>e.jsx("li",{className:"bullet-item",children:e.jsx("p",{children:s})},s))})})]})]})};export{p as default};