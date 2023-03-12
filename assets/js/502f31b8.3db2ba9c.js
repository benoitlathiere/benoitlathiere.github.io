"use strict";(self.webpackChunkmadoc=self.webpackChunkmadoc||[]).push([[3272],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={slug:"laravel--avec-composer",title:"Installer Laravel avec Composer",authors:["benoit"],tags:["laravel","Composer"],hide_table_of_contents:!1},o=void 0,i={permalink:"/blog/laravel--avec-composer",source:"@site/blog/2022.12.19-installer-Laravel-avec-composer.md",title:"Installer Laravel avec Composer",description:"Activer les extensions n\xe9cessaires dans php.ini :",date:"2022-12-19T20:54:58.662Z",formattedDate:"19 d\xe9cembre 2022",tags:[{label:"laravel",permalink:"/blog/tags/laravel"},{label:"Composer",permalink:"/blog/tags/composer"}],readingTime:.925,hasTruncateMarker:!1,authors:[{name:"Benoit Lathi\xe8re",title:"Author",url:"https://github.com/benoitlathiere",imageURL:"img/docusaurus.png",key:"benoit"}],frontMatter:{slug:"laravel--avec-composer",title:"Installer Laravel avec Composer",authors:["benoit"],tags:["laravel","Composer"],hide_table_of_contents:!1},nextItem:{title:"Installer Docker Desktop sur Windows 10 Famille",permalink:"/blog/install-docker-window-10-famille"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Activer les extensions n\xe9cessaires dans ",(0,r.kt)("inlineCode",{parentName:"p"},"php.ini")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"activer ",(0,r.kt)("inlineCode",{parentName:"li"},"extension=php_openssl.dll")),(0,r.kt)("li",{parentName:"ul"},"activer ",(0,r.kt)("inlineCode",{parentName:"li"},"extension=php_curl.dll")),(0,r.kt)("li",{parentName:"ul"},"activer ",(0,r.kt)("inlineCode",{parentName:"li"},"extension=fileinfo")),(0,r.kt)("li",{parentName:"ul"},"activer ",(0,r.kt)("inlineCode",{parentName:"li"},'extension_dir = "ext"'))),(0,r.kt)("p",null,'Installer le paquet "Laravel" au niveau global (c\'est tr\xe8s rapide) : ',(0,r.kt)("inlineCode",{parentName:"p"},"composer global require laravel/installer")),(0,r.kt)("p",null,"La commande ",(0,r.kt)("inlineCode",{parentName:"p"},"laravel")," sera disponible globalement. Elle est stock\xe9e dans le dossier de Composer, votre environnement :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows : ",(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Roaming\\Composer\\vendor\\bin")),(0,r.kt)("li",{parentName:"ul"},"macOS : ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.composer/vendor/bin")),(0,r.kt)("li",{parentName:"ul"},"GNU / Linux Distributions : ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.config/composer/vendor/bin or $HOME/.composer/vendor/bin"))),(0,r.kt)("p",null,"Cr\xe9er l'installation : ",(0,r.kt)("inlineCode",{parentName:"p"},"composer create-project laravel/laravel:^9.0 test-laravel-9")," (t\xe9l\xe9chargement + installation...)."),(0,r.kt)("p",null,"Si l'installation des paquets s'est interrompue en raison d'une extension PHP manquante, apr\xe8s avori activ\xe9 l'extension, lancer la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"composer install")," dans le dossier de l'application."),(0,r.kt)("p",null,"Pour avoir un serveur web : ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan serve"),", le site sera accessible \xe0 l'adresse ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000")),(0,r.kt)("p",null,"Il faut modifier le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),", notamment pour la connexion \xe0 la base de donn\xe9es. Pour renseigner ",(0,r.kt)("inlineCode",{parentName:"p"},"APP_KEY"),", il suffit de g\xe9n\xe9rer la cl\xe9 avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan key:generate")," (la cl\xe9 sera directement ins\xe9r\xe9e dans le fichier)."),(0,r.kt)("p",null,"Si tout fonctionne, la page d'accueil vous proposera la documentation de Laravel."),(0,r.kt)("p",null,"Sources :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Documentation Laravel : ",(0,r.kt)("a",{parentName:"li",href:"https://laravel.com/docs/9.x#the-laravel-installer"},"https://laravel.com/docs/9.x#the-laravel-installer")),(0,r.kt)("li",{parentName:"ul"},"Paquet Composer Laravel : ",(0,r.kt)("a",{parentName:"li",href:"https://packagist.org/packages/laravel/laravel"},"https://packagist.org/packages/laravel/laravel"))))}u.isMDXComponent=!0}}]);