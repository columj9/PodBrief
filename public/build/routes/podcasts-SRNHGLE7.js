import{b as n,c as g,f as a,m as d}from"/build/_shared/chunk-6YCTF6M7.js";var l=n(g(),1);var e=n(d(),1),x=()=>[{title:"My Podcasts - AudioInbox"},{name:"description",content:"Your AudioInbox Podcasts"}];function m(){let[r,i]=(0,l.useState)("all"),o=[{id:1,title:"Morning Brew - June 23",source:"Morning Brew",duration:"14:25",date:"June 23, 2023",listened:!0,image:"https://placehold.co/80x80/4F46E5/FFFFFF?text=MB"},{id:2,title:"The Hustle - June 22",source:"The Hustle",duration:"11:38",date:"June 22, 2023",listened:!0,image:"https://placehold.co/80x80/4F46E5/FFFFFF?text=TH"},{id:3,title:"TLDR Newsletter - June 21",source:"TLDR",duration:"9:17",date:"June 21, 2023",listened:!1,image:"https://placehold.co/80x80/4F46E5/FFFFFF?text=TLDR"},{id:4,title:"Platformer - June 20",source:"Platformer",duration:"17:42",date:"June 20, 2023",listened:!1,image:"https://placehold.co/80x80/4F46E5/FFFFFF?text=PF"},{id:5,title:"Benedict Evans - June 18",source:"Benedict Evans",duration:"12:05",date:"June 18, 2023",listened:!1,image:"https://placehold.co/80x80/4F46E5/FFFFFF?text=BE"}],s=r==="all"?o:r==="unplayed"?o.filter(t=>!t.listened):o.filter(t=>t.listened);return(0,e.jsxs)("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[(0,e.jsx)("nav",{className:"bg-white dark:bg-gray-800 shadow",children:(0,e.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,e.jsxs)("div",{className:"flex justify-between h-16",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,e.jsxs)(a,{to:"/",className:"flex items-center gap-2",children:[(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-indigo-600 dark:text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"})}),(0,e.jsx)("span",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"AudioInbox"})]})}),(0,e.jsxs)("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[(0,e.jsx)(a,{to:"/dashboard",className:"border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",children:"Dashboard"}),(0,e.jsx)(a,{to:"/podcasts",className:"border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",children:"My Podcasts"}),(0,e.jsx)(a,{to:"/email-connect",className:"border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",children:"Email Connections"}),(0,e.jsx)(a,{to:"/settings",className:"border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",children:"Settings"})]})]}),(0,e.jsx)("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:(0,e.jsx)("div",{className:"ml-3 relative",children:(0,e.jsx)("div",{children:(0,e.jsxs)("button",{type:"button",className:"bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[(0,e.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,e.jsx)("div",{className:"h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300",children:"U"})]})})})})]})})}),(0,e.jsx)("main",{className:"py-10",children:(0,e.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,e.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,e.jsx)("h1",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:"My Podcasts"}),(0,e.jsx)("div",{className:"mt-3 sm:mt-0 flex",children:(0,e.jsxs)("div",{className:"inline-flex shadow-sm rounded-md",children:[(0,e.jsx)("button",{type:"button",onClick:()=>i("all"),className:`relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${r==="all"?"bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500":"bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`,children:"All"}),(0,e.jsx)("button",{type:"button",onClick:()=>i("unplayed"),className:`relative inline-flex items-center px-4 py-2 border-t border-b text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${r==="unplayed"?"bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500":"bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`,children:"Unplayed"}),(0,e.jsx)("button",{type:"button",onClick:()=>i("played"),className:`relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${r==="played"?"bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500":"bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`,children:"Played"})]})})]}),(0,e.jsx)("div",{className:"mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md",children:s.length>0?(0,e.jsx)("ul",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:s.map(t=>(0,e.jsx)("li",{children:(0,e.jsx)(a,{to:`/podcasts/${t.id}`,className:"block hover:bg-gray-50 dark:hover:bg-gray-700",children:(0,e.jsxs)("div",{className:"px-4 py-4 sm:px-6 flex items-center",children:[(0,e.jsx)("div",{className:"flex-shrink-0 h-20 w-20 mr-4",children:(0,e.jsx)("img",{src:t.image,alt:t.source,className:"rounded-md"})}),(0,e.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)("p",{className:`text-lg font-medium truncate ${t.listened?"text-gray-500 dark:text-gray-400":"text-indigo-600 dark:text-indigo-400"}`,children:t.title}),(0,e.jsx)("div",{className:"ml-2 flex-shrink-0 flex",children:(0,e.jsx)("p",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",children:t.duration})})]}),(0,e.jsxs)("div",{className:"mt-2 flex justify-between",children:[(0,e.jsxs)("div",{className:"flex items-center text-sm text-gray-500 dark:text-gray-400",children:[(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"})}),t.source]}),(0,e.jsx)("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:t.date})]}),(0,e.jsxs)("div",{className:"mt-2 flex justify-between items-center",children:[(0,e.jsxs)("div",{className:"flex space-x-4",children:[(0,e.jsxs)("button",{className:"inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300",children:[(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]}),"Play"]}),(0,e.jsxs)("button",{className:"inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",children:[(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"})}),"Download"]})]}),(0,e.jsx)("div",{children:t.listened?(0,e.jsxs)("span",{className:"inline-flex items-center text-xs text-gray-500 dark:text-gray-400",children:[(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:(0,e.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1  1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"Listened"]}):(0,e.jsxs)("span",{className:"inline-flex items-center text-xs text-blue-600 dark:text-blue-400",children:[(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"})}),"New"]})})]})]})]})})},t.id))}):(0,e.jsxs)("div",{className:"px-4 py-12 text-center",children:[(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,e.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"})}),(0,e.jsx)("h3",{className:"mt-2 text-sm font-medium text-gray-900 dark:text-white",children:"No podcasts found"}),(0,e.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:r==="unplayed"?"You've listened to all your podcasts! Check back later for new content.":r==="played"?"You haven't listened to any podcasts yet.":"Connect your email to start receiving newsletter podcasts."}),r==="all"&&(0,e.jsx)("div",{className:"mt-6",children:(0,e.jsx)(a,{to:"/email-connect",className:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Connect Email"})})]})})]})})]})}export{m as default,x as meta};
