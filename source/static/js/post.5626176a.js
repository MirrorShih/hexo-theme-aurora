(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["post"],{"367a":function(t,e,i){"use strict";i("49fc")},"37d3":function(t,e,i){"use strict";i.r(e);i("b0c0"),i("9911");var n=i("7a23"),c={class:"flex flex-col"},s={class:"main-grid"},a={class:"post-header"},l={class:"post-labels"},o={key:1},r={key:2},b=Object(n["j"])("em",{class:"opacity-50"},"#",-1),p={key:2},u=Object(n["j"])("b",{class:"opacity-50"},"#",-1),j={key:0,class:"post-title text-white"},g={class:"flex flex-row items-center justify-start mt-8 mb-4"},d={key:0,class:"post-footer"},O={class:"text-white opacity-80"},h={class:"opacity-70"},m={key:1,class:"post-footer"},f={class:"flex flex-row items-center"},v={class:"text-ob-dim mt-1"},y={key:2,class:"post-stats"},w={class:"pl-2 opacity-70"},x={class:"pl-2 opacity-70"},k={key:3,class:"post-stats"},C={class:"pl-2"},A={class:"pl-2"},M={class:"main-grid"},_={key:1,class:"\r\n            bg-ob-deep-800\r\n            px-14\r\n            py-16\r\n            rounded-2xl\r\n            shadow-xl\r\n            block\r\n            min-h-screen\r\n          "},T=Object(n["j"])("br",null,null,-1),I=Object(n["j"])("br",null,null,-1),S=Object(n["j"])("br",null,null,-1),P={class:"flex flex-col lg:flex-row justify-start items-end my-8"},F={key:0,class:"w-full h-full self-stretch mr-0 lg:mr-4"},H={key:1,class:"w-full h-full self-stretch mt-8 lg:mt-0"},R={key:2,id:"comments"};function J(t,e,i,J,E,N){var q=Object(n["I"])("ob-skeleton"),z=Object(n["I"])("svg-icon"),D=Object(n["I"])("SubTitle"),G=Object(n["I"])("Article"),L=Object(n["I"])("Comment"),K=Object(n["I"])("Profile"),V=Object(n["I"])("Toc"),B=Object(n["I"])("Sidebar"),Q=Object(n["J"])("lazy"),U=Object(n["J"])("scroll-spy");return Object(n["A"])(),Object(n["g"])("div",c,[Object(n["j"])("div",s,[Object(n["j"])("div",a,[Object(n["j"])("span",l,[t.loading?(Object(n["A"])(),Object(n["g"])(q,{key:0,tag:"b",height:"20px",width:"35px"})):!t.loading&&t.post.categories&&t.post.categories.length>0?(Object(n["A"])(),Object(n["g"])("b",o,[Object(n["j"])("span",null,Object(n["M"])(t.post.categories[0].name),1)])):(Object(n["A"])(),Object(n["g"])("b",r,Object(n["M"])(t.t("settings.default-category")),1)),Object(n["j"])("ul",null,[t.loading?(Object(n["A"])(),Object(n["g"])(q,{key:0,count:2,tag:"li",height:"16px",width:"35px",class:"mr-2"})):!t.loading&&t.post.tags&&t.post.tags.length>0?(Object(n["A"])(!0),Object(n["g"])(n["a"],{key:1},Object(n["G"])(t.post.tags,(function(t){return Object(n["A"])(),Object(n["g"])("li",{key:t.slug},[b,Object(n["i"])(" "+Object(n["M"])(t.name),1)])})),128)):(Object(n["A"])(),Object(n["g"])("li",p,[u,Object(n["i"])(" "+Object(n["M"])(t.t("settings.default-tag")),1)]))])]),t.post.title?(Object(n["A"])(),Object(n["g"])("h1",j,Object(n["M"])(t.post.title),1)):(Object(n["A"])(),Object(n["g"])(q,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),Object(n["j"])("div",g,[t.post.author&&t.post.count_time.symbolsTime?(Object(n["A"])(),Object(n["g"])("div",d,[Object(n["T"])(Object(n["j"])("img",{class:"hover:opacity-50 cursor-pointer",alt:"author avatar",onClick:e[1]||(e[1]=function(e){return t.handleAuthorClick(t.post.author.link)})},null,512),[[Q,t.post.author.avatar||""]]),Object(n["j"])("span",O,[Object(n["j"])("strong",{class:"text-white pr-1.5 hover:opacity-50 cursor-pointer",onClick:e[2]||(e[2]=function(e){return t.handleAuthorClick(t.post.author.link)})},Object(n["M"])(t.post.author.name),1),Object(n["j"])("span",h,Object(n["M"])(t.t("settings.shared-on"))+" "+Object(n["M"])(t.t(t.post.date.month))+" "+Object(n["M"])(t.post.date.day)+", "+Object(n["M"])(t.post.date.year),1)])])):(Object(n["A"])(),Object(n["g"])("div",m,[Object(n["j"])("div",f,[Object(n["j"])(q,{class:"mr-2",height:"28px",width:"28px",circle:!0}),Object(n["j"])("span",v,[Object(n["j"])(q,{height:"20px",width:"150px"})])])])),t.post.count_time.symbolsTime&&t.post.date?(Object(n["A"])(),Object(n["g"])("div",y,[Object(n["j"])("span",null,[Object(n["j"])(z,{"icon-class":"clock-outline",style:{stroke:"white"}}),Object(n["j"])("span",w,Object(n["M"])(t.post.count_time.symbolsTime),1)]),Object(n["j"])("span",null,[Object(n["j"])(z,{"icon-class":"text-outline",style:{stroke:"white"}}),Object(n["j"])("span",x,Object(n["M"])(t.post.count_time.symbolsCount),1)])])):(Object(n["A"])(),Object(n["g"])("div",k,[Object(n["j"])("span",null,[Object(n["j"])(z,{"icon-class":"clock"}),Object(n["j"])("span",C,[Object(n["j"])(q,{width:"40px",height:"16px"})])]),Object(n["j"])("span",null,[Object(n["j"])(z,{"icon-class":"text"}),Object(n["j"])("span",A,[Object(n["j"])(q,{width:"40px",height:"16px"})])])]))])])]),Object(n["j"])("div",M,[Object(n["j"])("div",null,[t.post.content?Object(n["T"])((Object(n["A"])(),Object(n["g"])("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,["innerHTML"])),[[U,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(Object(n["A"])(),Object(n["g"])("div",_,[Object(n["j"])(q,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),T,Object(n["j"])(q,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),I,S,Object(n["j"])(q,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),Object(n["j"])("div",P,[t.post.prev_post.title?(Object(n["A"])(),Object(n["g"])("div",F,[Object(n["j"])(D,{title:"settings.paginator.prev",icon:"arrow-left-circle"}),Object(n["j"])(G,{data:t.post.prev_post},null,8,["data"])])):Object(n["h"])("",!0),t.post.next_post.title?(Object(n["A"])(),Object(n["g"])("div",H,[Object(n["j"])(D,{title:"settings.paginator.next",side:t.isMobile?"left":"right",icon:"arrow-right-circle"},null,8,["side"]),Object(n["j"])(G,{data:t.post.next_post},null,8,["data"])])):Object(n["h"])("",!0)]),t.post.title&&t.post.text&&t.post.uid?(Object(n["A"])(),Object(n["g"])("div",R,[Object(n["j"])(L,{title:t.post.title,body:t.post.text,uid:t.post.uid},null,8,["title","body","uid"])])):Object(n["h"])("",!0)]),Object(n["j"])("div",null,[Object(n["j"])(B,null,{default:Object(n["S"])((function(){return[Object(n["j"])(K,{author:t.post.author.slug||""},null,8,["author"]),Object(n["j"])(V,{toc:t.post.toc},null,8,["toc"])]})),_:1})])])])}var E=i("1da1"),N=(i("96cf"),i("ac1f"),i("5319"),i("2a1d")),q=i("749c"),z=i("41ba"),D=i("6c02"),G=i("47e2"),L=i("4ea3"),K=i("d5a6"),V=i("e628"),B=(i("cc94"),i("f2fb")),Q=i("8578"),U=i("5701"),W=Object(n["k"])({name:"ObPost",components:{Sidebar:N["d"],Toc:N["f"],Comment:L["a"],SubTitle:K["a"],Article:V["a"],Profile:N["b"]},setup:function(){var t=Object(B["a"])(),e=Object(z["a"])(),i=Object(Q["a"])(),c=Object(U["a"])(),s=Object(D["c"])(),a=Object(G["b"])(),l=a.t,o=Object(n["F"])(new q["e"]),r=Object(n["F"])(!0),b=function(){var a=Object(E["a"])(regeneratorRuntime.mark((function a(){var l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.value=!0,o.value=new q["e"],window.scrollTo({top:0}),l=String(s.params.slug),l=l.indexOf(",")?l.replace(/[,]+/g,"/"):l,a.next=7,e.fetchPost(l).then((function(e){o.value=e,t.setTitle(o.value.title),c.setHeaderImage(e.cover),r.value=!1}));case 7:return i.hexoConfig.writing.highlight.enable&&console.error("[Aurora Config Error]: Please turn off [Hightlightjs] and enable [Prismjs] instead. "),i.hexoConfig.writing.prismjs.preprocess&&console.error("[Aurora Config Error]: Please set Hexo config's prismjs' [preprocess] property to false! "),a.next=11,Object(n["s"])();case 11:Prism.highlightAll();case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();Object(n["R"])((function(){return s.params}),(function(t){t.slug&&-1===s.fullPath.indexOf("#")&&b()}));var p=function(t){""===t&&(t=window.location.href),window.location.href=t};return Object(n["x"])(b),Object(n["v"])((function(){c.resetHeaderImage()})),{isMobile:Object(n["e"])((function(){return c.isMobile})),handleAuthorClick:p,loading:r,post:o,t:l}}});W.render=J;e["default"]=W},"49fc":function(t,e,i){},"4ea3":function(t,e,i){"use strict";var n=i("7a23"),c={class:"\n      bg-ob-deep-800\n      p-4\n      mt-8\n      lg:px-14 lg:py-10\n      rounded-2xl\n      shadow-xl\n      mb-8\n      lg:mb-0\n    "},s=Object(n["j"])("div",{id:"gitalk-container"},null,-1),a=Object(n["j"])("div",{id:"vcomments"},null,-1),l=Object(n["j"])("div",{class:"giscus"},null,-1);function o(t,e,i,o,r,b){var p=Object(n["I"])("SubTitle");return Object(n["A"])(),Object(n["g"])("div",c,[Object(n["j"])(p,{title:"titles.comment"},null,8,["title"]),s,a,l])}i("99af");var r=i("8578"),b=i("d5a6"),p=i("41ba"),u=Object(n["k"])({name:"ObComment",props:{title:{type:String,default:""},body:{type:String,default:""},uid:{type:String,default:""}},components:{SubTitle:b["a"]},setup:function(t){var e=Object(n["N"])(t).title,i=Object(n["N"])(t).body,c=Object(n["N"])(t).uid,s=Object(r["a"])(),a=Object(p["a"])(),l=(Object(n["F"])(null),function(t,e,i){var n=t&&""!==t?t:"",c=e&&""!==e?"".concat(window.location.href," \n ").concat(e):window.location.href,l="pathname"===s.themeConfig.plugins.gitalk.id?window.location.pathname:i;if(a.setCache({title:t,body:e,uid:i}),s.configReady)if(s.themeConfig.plugins.gitalk.enable){var o=""===s.themeConfig.plugins.gitalk.proxy?"https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token":s.themeConfig.plugins.gitalk.proxy,r=new Gitalk({clientID:s.themeConfig.plugins.gitalk.clientID,clientSecret:s.themeConfig.plugins.gitalk.clientSecret,repo:s.themeConfig.plugins.gitalk.repo,owner:s.themeConfig.plugins.gitalk.owner,admin:s.themeConfig.plugins.gitalk.admin,id:l,language:s.themeConfig.plugins.gitalk.language,distractionFreeMode:!0,title:n,body:c,proxy:o});r.render("gitalk-container")}else if(s.themeConfig.plugins.valine.enable)new Valine({el:"#vcomments",appId:s.themeConfig.plugins.valine.app_id,appKey:s.themeConfig.plugins.valine.app_key,avatar:s.themeConfig.plugins.valine.avatar,placeholder:s.themeConfig.plugins.valine.placeholder,visitor:s.themeConfig.plugins.valine.visitor,lang:s.themeConfig.plugins.valine.lang,meta:s.themeConfig.plugins.valine.meta,requiredFields:s.themeConfig.plugins.valine.requiredFields,avatarForce:s.themeConfig.plugins.valine.avatarForce,path:window.location.pathname});else if(s.themeConfig.plugins.giscus.enable){var b=document.createElement("script");b.async=!0,b.setAttribute("src","https://giscus.app/client.js"),b.setAttribute("data-repo",s.themeConfig.plugins.giscus.repo),b.setAttribute("data-repo-id",s.themeConfig.plugins.giscus.repo_id),b.setAttribute("data-category",s.themeConfig.plugins.giscus.category),b.setAttribute("data-category-id",s.themeConfig.plugins.giscus.category_id),b.setAttribute("data-mapping",s.themeConfig.plugins.giscus.mapping),b.setAttribute("data-reactions-enabled",s.themeConfig.plugins.giscus.reactions_enabled),b.setAttribute("data-emit-metadata",s.themeConfig.plugins.giscus.emit_meta_data),b.setAttribute("data-input-position",s.themeConfig.plugins.giscus.input_position),b.setAttribute("data-theme","https://css.mirrorshih.repl.co/style.css"),b.setAttribute("data-lang",s.themeConfig.plugins.giscus.lang),b.setAttribute("crossorigin","anonymous"),document.head.appendChild(b)}});Object(n["R"])((function(){return s.configReady}),(function(t,e){if(!e&&t){var i=a.cachePost;l(i.title,i.body,i.uid)}})),Object(n["x"])((function(){l(e.value,i.value,c.value)}))}});i("367a");u.render=o;e["a"]=u},cc94:function(t,e,i){}}]);