var N=Object.defineProperty;var S=(n,e,t)=>e in n?N(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var m=(n,e,t)=>(S(n,typeof e!="symbol"?e+"":e,t),t);import{j as r,a,R as w,r as d,b as C,c as R}from"./vendor.9ac0fb84.js";const I=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};I();function P(){return r("h2",{className:"is-size-2 has-text-weight-semibold has-text-centered",children:"Random Mashup Generator"})}function L(){return r("h4",{className:"is-size-4 mx-3 has-text-centered",children:"This app helps you create a random codeforces mashup in which the problems aren't solved by any of the members in your group."})}function F(n,e){let t=[];for(let o=0;o<n.length;o++)t.push({rating:n[o],problem:e[o]});return t}function j(n){const{rating:e,code:t,link:o}=n;function s(){navigator.clipboard.writeText(t)}return a("tr",{children:[r("td",{children:e}),r("td",{children:r("button",{className:"button is-primary is-outlined is-small",onClick:s,children:t})}),r("td",{children:r("a",{href:o,target:"_blank",children:"Go to Problem"})})]})}function O(n){let e=F(n.ratings,n.problems);return console.log(n.problems),a("table",{className:"table is-fullwidth has-text-centered is-striped is-bordered ml-2",children:[r("thead",{children:a("tr",{children:[r("th",{children:"Rating"}),r("th",{children:"Problem Code"}),r("th",{children:"Link"})]})}),r("tbody",{children:e.map((t,o)=>{let s=`${t.problem.contestId}${t.problem.index}`,i=`https://codeforces.com/problemset/problem/${t.problem.contestId}/${t.problem.index}`;return r(j,{rating:t.rating,code:s,link:i},o)})})]})}function p(n){const{state:e,setState:t}=n,o=i=>{t(e.filter((l,c)=>c!==i))},s=i=>{t([...e,i])};return a("div",{className:"m-2",children:[r("div",{className:"label",children:n.label}),r(w.WithContext,{classNames:{tag:"tag is-warning is-medium m-1",tagInputField:"input",remove:"delete is-small"},tags:n.state,handleDelete:o,handleAddition:s,allowUnique:!1})]})}function k(n){return r("div",{className:"select m-2",children:a("select",{onChange:n.handleFirstContest,name:"firstContest",id:"",children:[r("option",{value:"1",children:"All Time"}),r("option",{value:"754",children:"Since 2017"}),r("option",{value:"1284",children:"Since 2020"}),r("option",{value:"1470",children:"Since 2021"}),r("option",{value:"-1",children:"Most Recent (Not Random)"})]})})}function A(n){const{users:e,setUsers:t,ratings:o,setRatings:s,setFirstContest:i}=n;function l(c){i(parseInt(c.target.value))}return a("div",{children:[a("div",{children:[r(p,{label:"Codeforces Usernames",state:e,setState:t}),r(p,{label:"Problem Ratings",state:o,setState:s})]}),r(k,{handleFirstContest:l})]})}async function g(n){const e=await fetch(n);if(e.ok){const t=await e.json();if(t.status=="OK")return t}throw"Could not fetch data from codeforces"}async function M(n){let e=new Set;return n.map(async t=>{(await T(t)).map(s=>{e.add(s)})}),e}async function T(n){const e=`https://codeforces.com/api/user.status?handle=${n}`,o=(await g(e)).result;let s=[];return o.map(i=>{s.push(i.problem.name)}),s}function U(n){n.sort(()=>Math.random()-.5)}function _(n,e){if(e==-1)return n;let t=[];for(let o of n){if(o.contestId<e){console.log(o.contestId);break}t.push(o)}return U(t),t}class H{constructor(e,t,o){m(this,"userList",[]);m(this,"ratings",[]);m(this,"firstContest",1);this.userList=t.map(s=>s.text),this.ratings=o.map(s=>parseInt(s.text)),this.firstContest=e}async getProblems(){return(await g("https://codeforces.com/api/problemset.problems")).result.problems}async create(){let e=await M(this.userList);const t=await this.getProblems(),o=_(t,this.firstContest);return this.ratings.map(i=>this.getFirstUnsolvedProblem(i,o,e))}getFirstUnsolvedProblem(e,t,o){for(let s of t)if(s.rating==e&&!o.has(s.name))return o.add(s.name),s;throw"No problem found"}}function $(){let n={name:"",rating:2100,contestId:797,index:"E"};const[e,t]=d.exports.useState([{id:"2100",text:"2100"}]),[o,s]=d.exports.useState(["2000"]),[i,l]=d.exports.useState([n]),[c,h]=d.exports.useState([{id:"Holmes7",text:"Holmes7"}]);d.exports.useEffect(()=>{const f=JSON.parse(localStorage.getItem("ratings")||'[{"id": "2100", "text": "2100"}]');t(f);const u=JSON.parse(localStorage.getItem("users")||'[{"id": "Holmes7", "text": "Holmes7"}]');h(u)},[]);const[b,v]=d.exports.useState(1);async function y(){const u=await new H(b,c,e).create();console.log(u),l(u),s(e.map(x=>x.text)),localStorage.setItem("ratings",JSON.stringify(e)),localStorage.setItem("users",JSON.stringify(c))}return a("div",{children:[r(A,{setFirstContest:v,users:c,setUsers:h,ratings:e,setRatings:t}),r("button",{type:"button",className:"button m-2 is-info is-outlined",onClick:y,children:"Generate Mashup"}),r(O,{ratings:o,problems:i})]})}function E(){return a("div",{children:[r(P,{}),r(L,{}),r($,{})]})}function G(){return r("div",{className:"hero is-fullheight has-background-light",children:a("div",{className:"columns hero-head",children:[r("div",{className:"column"}),r("div",{className:"column is-two-fifths",children:r(E,{})}),r("div",{className:"column"})]})})}C.render(r(R.StrictMode,{children:r(G,{})}),document.getElementById("root"));
