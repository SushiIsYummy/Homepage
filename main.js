(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var c=t.g.document;if(!e&&c&&(c.currentScript&&(e=c.currentScript.src),!e)){var a=c.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();t.p;const e=t.p+"550985caaa8859d4b95f.svg",c=t.p+"eaccfc4b453ff94aff73.svg",a=t.p+"77a2f5734999924fb343.svg",r=t.p+"3ede19ed228086e87d89.svg";document.querySelectorAll(".triple-logos").forEach((t=>{const r=document.createElement("object");r.setAttribute("type","image/svg+xml"),r.setAttribute("data",e),r.classList.add("github-logo");const s=document.createElement("object");s.setAttribute("type","image/svg+xml"),s.setAttribute("data",c),s.classList.add("linkedin-logo");const n=document.createElement("object");n.setAttribute("type","image/svg+xml"),n.setAttribute("data",a),n.classList.add("twitter-logo"),t.append(r,s,n)}));let s=document.querySelector("main .project-cards");for(let t=0;t<6;t++)s.appendChild(n());function n(){let t=document.createElement("div");t.classList.add("project-card");let c=document.createElement("img");c.classList.add("project-img");let a=document.createElement("p");a.classList.add("project-name"),a.textContent="Project name";let s=document.createElement("div");const n=document.createElement("object");n.setAttribute("type","image/svg+xml"),n.setAttribute("data",e),n.classList.add("github-logo");const o=document.createElement("object");o.setAttribute("type","image/svg+xml"),o.setAttribute("data",r),o.classList.add("external-link-logo"),s.append(n,o);let i=document.createElement("div");i.classList.add("name-and-links"),i.append(a,s);let l=document.createElement("p");return l.classList.add("project-description"),l.textContent="Short description of the project. Just a couple sentences will do.",t.append(c,i,l),t}})();