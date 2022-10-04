"use strict";(self.webpackChunkmadoc=self.webpackChunkmadoc||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"install-docker-window-10-famille","metadata":{"permalink":"/blog/install-docker-window-10-famille","source":"@site/blog/2022-10-04-install-docker-windows-10-famille.md","title":"Installer Docker Desktop sur Windows 10 Famille","description":"Depuis quelques temps, il est possible d\'installer Docker Desktop sur Windows 10 Famille (ou Home), gr\xe2ce au sous-syst\xe8me Linux \ud83d\udc27 int\xe9gr\xe9 \xe0 Windows. Pas besoin de Windows 10 Pro ni d\'une machine virtuelle !","date":"2022-10-04T00:00:00.000Z","formattedDate":"4 octobre 2022","tags":[{"label":"Docker","permalink":"/blog/tags/docker"},{"label":"Windows 10","permalink":"/blog/tags/windows-10"},{"label":"Famille","permalink":"/blog/tags/famille"},{"label":"Family","permalink":"/blog/tags/family"},{"label":"Home","permalink":"/blog/tags/home"}],"readingTime":2.995,"hasTruncateMarker":true,"authors":[{"name":"Benoit Lathi\xe8re","title":"Author","url":"https://github.com/benoitlathiere","imageURL":"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mNDJlOTU0MGEzMGI1NDE0ZjMzMjM3MjAzYWMyYzVhMz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.wwPpG2sOQCroHLH-EdVXoGVTHIRW5tUYXK8MpghkYyA","key":"benoit"}],"frontMatter":{"slug":"install-docker-window-10-famille","title":"Installer Docker Desktop sur Windows 10 Famille","authors":["benoit"],"tags":["Docker","Windows 10","Famille","Family","Home"],"hide_table_of_contents":false},"nextItem":{"title":"D\xe9couvrir Docusaurus pour faire un site statique","permalink":"/blog/decouvrir-docusaurus"}},"content":"Depuis quelques temps, il est possible d\'installer Docker Desktop sur Windows 10 Famille (ou _Home_), gr\xe2ce au sous-syst\xe8me Linux \ud83d\udc27 int\xe9gr\xe9 \xe0 Windows. Pas besoin de Windows 10 Pro ni d\'une machine virtuelle !\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nAvant d\'installer Docker, il faut installer le paquet _WSL_ ([_Windows Subsystem Linux_](https://learn.microsoft.com/fr-fr/windows/wsl/install)). Plusieurs actions sont n\xe9cessaires.\\r\\n\\r\\n## Installer WSL\\r\\n\\r\\nSachez que _WSL_ va prendre environ 20 Go sur votre disque. L\'installation se passe enti\xe8rement en ligne de commande et n\xe9cessite d\'avoir un acc\xe8s Administrateur \xe0 Windows. Vous pouvez utiliser _[Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701)_ installable via Microsoft Store.\\r\\n\\r\\nApr\xe8s _WSL_,  il faudra choisir et installer une distribution Linux. C\'est elle qui sera utilis\xe9e in fine par Docker. On peut installer plusieurs distributions Linux.\\r\\n\\r\\nIl faut d\'abord installer _WSL_ lui-m\xeame, les \xe9l\xe9ments n\xe9cessaires seront t\xe9l\xe9charg\xe9s en direct :\\r\\n\\r\\n```powhershell\\r\\n> wsl --install\\r\\n```\\r\\n\\r\\nPour v\xe9rifier la bonne installation de _WSL_ :\\r\\n\\r\\n```powhershell\\r\\n> wsl -l -v\\r\\n\\r\\n        NAME                   STATE           VERSION\\r\\n    *   Legacy                 Running         1 \\r\\n```\\r\\n\\r\\n* L\'ast\xe9risque indique que c\'est le syst\xe8me choisi par d\xe9faut.\\r\\n* \\"Legacy\\" est un sous-syt\xe8me par d\xe9faut.\\r\\n* \\"Version\\" est par d\xe9faut \xe0 1.\\r\\n\\r\\nPour Docker, il faut utiliser _WSL_ en version 2. On va donc changer la version par d\xe9faut, installer une distribution Linux puis s\'assurer qu\'elle est en version 2. J\'ai choisit \\"Debian\\" pour Linux, prenez celle que vous voulez.\\r\\n\\r\\n```powhershell\\r\\n> wsl --set-default-version 2\\r\\n\\r\\n    Pour plus d\u2019informations sur les diff\xe9rences de cl\xe9s avec WSL 2, visitez https://aka.ms/wsl2\\r\\n    L\u2019op\xe9ration a r\xe9ussi.\\r\\n```\\r\\n\\r\\nOn liste les distributions Linux que nous propose Microsoft/WSL puis on lance l\'installation (le t\xe9l\xe9chargement se fait automatiquement) :\\r\\n\\r\\n```powhershell\\r\\n> wsl -l -d\\r\\n\\r\\n    NAME            FRIENDLY NAME\\r\\n    Ubuntu          Ubuntu\\r\\n    Debian          Debian GNU/Linux\\r\\n    kali-linux      Kali Linux Rolling\\r\\n    openSUSE-42     openSUSE Leap 42\\r\\n    SLES-12         SUSE Linux Enterprise Server v12\\r\\n    Ubuntu-16.04    Ubuntu 16.04 LTS\\r\\n    Ubuntu-18.04    Ubuntu 18.04 LTS\\r\\n    Ubuntu-20.04    Ubuntu 20.04 LTS\\r\\n\\r\\n> wsl --install -d Debian\\r\\n```\\r\\n\\r\\nOn liste \xe0 nouveau l\'\xe9tat de _WSL_ :\\r\\n\\r\\n```powhershell\\r\\n> wsl -l -v\\r\\n\\r\\n      NAME                   STATE           VERSION\\r\\n    * Legacy               Running           1\\r\\n      Debian               Running           1\\r\\n```\\r\\n\\r\\nSi votre distribution est en version 1, on va la convertir en version 2, puis on va la d\xe9signer comme syst\xe8me par d\xe9faut :\\r\\n\\r\\n```powhershell\\r\\n> wsl --set-version debian 2\\r\\n\\r\\n    La conversion est en cours. Cette op\xe9ration peut prendre quelques minutes...\\r\\n    L\u2019op\xe9ration a r\xe9ussi.\\r\\n\\r\\n> wsl --set-default Debian\\r\\n\\r\\n> wsl -l -v\\r\\n\\r\\n      NAME                   STATE           VERSION\\r\\n    * Debian                 Running         2\\r\\n      Legacy                 Stopped         1\\r\\n```\\r\\n\\r\\nDebian est marqu\xe9 par d\xe9faut et en version 2. Tout est bon pour installer Docker Desktop \ud83d\ude0a\\r\\n\\r\\n\\r\\n## Installer Docker Desktop\\r\\n\\r\\n_Docker Desktop_ prend environ 3 Go sur disque apr\xe8s installation, sans image ni conteneur. L\'installation et la configuration se font via un installateur graphique.\\r\\n\\r\\nT\xe9l\xe9chargez et installez Docker Desktop : https://www.docker.com/products/docker-desktop/\\r\\n\\r\\nLancez l\'installation et patientez...  \u231b\\r\\n\\r\\nSi l\'installation s\'est bien d\xe9roul\xe9e, Docker va vous demander de red\xe9marrer Windows. Fermez toutes vos applications ouvertes et red\xe9marrez ! Apr\xe8s red\xe9marrage, vous trouverez un raccourci \\"Docker Desktop\\" dans le menu D\xe9marrer. \\r\\n\\r\\nLancez l\'application ; selon la puissance de votre machine, le premier d\xe9marrage de Docker peut prendre plusieurs minutes. \ud83d\ude34\\r\\n\\r\\nUne fois l\'application enfin d\xe9marr\xe9e, allez dans le menu de configuration (la roue dent\xe9e en haut \xe0 droite), puis :\\r\\n\\r\\n* _G\xe9n\xe9ral_ : cochez \\"Use Dicker Composer v2\\".\\r\\n* _Rsources_ > _WSL Integration_ :\\r\\n  * cochez \\"Enable integration with default WSL distro\\" si ce n\'est pas d\xe9j\xe0 fait.\\r\\n  * si vous avez install\xe9 plusieurs distributions, vous pouvez les activer \xe9galement.\\r\\n* Cliquer sur le bouton \\"Apply & Restart\\" en bas \xe0 droite.\\r\\n\\r\\nVoil\xe0, normalement Docker Desktop est pleinement fonctionnel ! \ud83c\udfc6\\r\\n\\r\\nRessources :\\r\\n\\r\\n* Installer WSL : https://learn.microsoft.com/fr-fr/windows/wsl/install\\r\\n* Configurer WSL pour Docker : https://docs.docker.com/desktop/windows/wsl/\\r\\n* Windows Terminal de Microsoft : https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701"},{"id":"decouvrir-docusaurus","metadata":{"permalink":"/blog/decouvrir-docusaurus","source":"@site/blog/2022-04-decouvrir-docusaurus.md","title":"D\xe9couvrir Docusaurus pour faire un site statique","description":"Docusaurus est un framework d\xe9velopp\xe9 par Facebook et qui permet de g\xe9n\xe9rer un site statique. Le Javascript moderne permet de nombreux modes de d\xe9veloppement, et la g\xe9n\xe9ration de site statique (Static Site Generator, SSG) pour h\xe9berger les pages sur des serveurs sans moteur de script (ni PHP, ni Java, ...).","date":"2022-04-10T19:05:48.057Z","formattedDate":"10 avril 2022","tags":[{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"blog","permalink":"/blog/tags/blog"},{"label":"Static Site Generator","permalink":"/blog/tags/static-site-generator"},{"label":"SSG","permalink":"/blog/tags/ssg"}],"readingTime":2.185,"hasTruncateMarker":true,"authors":[{"name":"Benoit Lathi\xe8re","title":"Author","url":"https://github.com/benoitlathiere","imageURL":"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mNDJlOTU0MGEzMGI1NDE0ZjMzMjM3MjAzYWMyYzVhMz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.wwPpG2sOQCroHLH-EdVXoGVTHIRW5tUYXK8MpghkYyA","key":"benoit"}],"frontMatter":{"slug":"decouvrir-docusaurus","title":"D\xe9couvrir Docusaurus pour faire un site statique","authors":["benoit"],"tags":["Docusaurus","blog","Static Site Generator","SSG"],"hide_table_of_contents":false},"prevItem":{"title":"Installer Docker Desktop sur Windows 10 Famille","permalink":"/blog/install-docker-window-10-famille"},"nextItem":{"title":"FCGID et wwsympa","permalink":"/blog/FCGID-wwsympa-post"}},"content":"Docusaurus est un framework d\xe9velopp\xe9 par Facebook et qui permet de g\xe9n\xe9rer un site statique. Le Javascript moderne permet de nombreux modes de d\xe9veloppement, et la g\xe9n\xe9ration de site statique (_Static Site Generator, SSG_) pour h\xe9berger les pages sur des serveurs sans moteur de script (ni PHP, ni Java, ...). \\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nQuel int\xe9r\xeat ? un site statique est beaucoup plus rapide \xe0 afficher dans les navigateurs (pas de script ou de base de donn\xe9es c\xf4t\xe9 serveur),  ce qui est id\xe9al si vous avez des pages qui ne changent peu (pas exemple un blog ou un site de documentation). \\r\\n\\r\\n\\r\\nEvidemment, \xe7a ne se pr\xeate pas \xe0 un site de e-commerce en perp\xe9tuel modification (certaines parties peuvent \xeatre g\xe9n\xe9r\xe9s par avance mais les pages pr\xe9sent\xe9es pr\xe9sentent toujours des donn\xe9es calcul\xe9es en direct).\\r\\n\\r\\n\\r\\n1. nouvelle cl\xe9 ssh dans ~/.ssh/ : `ssh-keygen -t ed25519 -C \\"your_email@example.com\\"`\\r\\n2. puis `start-ssh-agent`\\r\\n3. puis ajout de cl\xe9 publique dans Github -> profile/setting -> SSH keys -> nouvelle cl\xe9:\\r\\n4. coller contenu fichier _.pub_.\\r\\n\\r\\n\\r\\nSi Github-pages n\'arrive pas \xe0 d\xe9ployer ou si le site ne fonctionne pas, v\xe9rifier la branche dans le d\xe9p\xf4t : \\"settings / Pages / Source\\".\\r\\n\\r\\nL\'\xe9tat du d\xe9ploiement est disponible dans \\"Github.com > \\\\<repo\\\\> > Actions\\".\\r\\n\\r\\n\\r\\n## D\xe9ploiement\\r\\n\\r\\n```powershell\\r\\ncmd /C \'set \\"GIT_USER=<login> USE_SSH=true\\" && yarn deploy\'\\r\\n``` \\r\\n\\r\\n`Running \\"git push\\" command failed. Does the GitHub user account you are using have push access to the repository?` : mettre une cl\xe9 dans le d\xe9p\xf4t avec droit d\'\xe9criture.\\r\\n\\r\\nSi erreur d\'acc\xe8s au d\xe9p\xf4t :\\r\\n```bash\\r\\n...\\r\\n[ERROR] Deployment of the build output failed.\\r\\n[ERROR] Error: Running \\"git push\\" command failed. Does the GitHub user account you are using have push access to the repository?\\r\\nerror Command failed with exit code 1.\\r\\n...\\r\\n```\\r\\n\\r\\nV\xe9rifier que :\\r\\n\\r\\n* V\xe9rifier qu\'une paire de cl\xe9s SSH (publique + priv\xe9e) est dans _~/.ssh/_, et coller le contenu de la cl\xe9 publique (fichier _.pub_) dans le compte _github.com > settings > deploy keys_.\\r\\n* Enlever les vieux serveurs de _~/.ssh/known\\\\_hosts_ par `ssh-keygen -R <server>` (in fichier _know\\\\_hosts.old_ est cr\xe9\xe9).\\r\\n* Faire un `git clone git@github.com:<login>/<repo>.git` du d\xe9p\xf4t dans un dossier test et v\xe9rifier que le client git acc\xe8de au d\xe9p\xf4t, il va \xe9ventuellement demander une autorisation d\'acc\xe8s () :\\r\\n\\r\\n```bash\\r\\nThe authenticity of host \'github.com (140.82.121.4)\' can\'t be established.\\r\\nED25519 key fingerprint is SHA256:+DiY3wqssfdSFSDFsdfSFSfgfgdGDFGdfgCOqU.\\r\\nThis key is not known by any other names\\r\\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\\r\\n```\\r\\n\\r\\nConfigurer son compte SSH sur son poste :\\r\\n\\r\\n```bash\\r\\ngit config --global user.email \\"you@example.com\\"\\r\\ngit config --global user.name \\"Your Name\\"\\r\\n#git config --global http.sslverify false\\r\\ngit config --list\\r\\n```\\r\\n\\r\\n... \xe0 suivre ..."},{"id":"FCGID-wwsympa-post","metadata":{"permalink":"/blog/FCGID-wwsympa-post","source":"@site/blog/2006-12-20-FCGID-wwsympa-post.md","title":"FCGID et wwsympa","description":"Ce message a \xe9t\xe9 publi\xe9 sur la liste de diffusion sympa-authors@cru.fr le 20 d\xe9cembre 2006. Il explique la configuration pour activet FCGID dans Apache pour le logiciel Sympa.","date":"2006-12-20T00:00:00.000Z","formattedDate":"20 d\xe9cembre 2006","tags":[{"label":"FCGID","permalink":"/blog/tags/fcgid"},{"label":"wwsympa","permalink":"/blog/tags/wwsympa"},{"label":"Apache","permalink":"/blog/tags/apache"}],"readingTime":1.275,"hasTruncateMarker":true,"authors":[{"name":"Benoit Lathi\xe8re","title":"Author","url":"https://github.com/benoitlathiere","imageURL":"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mNDJlOTU0MGEzMGI1NDE0ZjMzMjM3MjAzYWMyYzVhMz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.wwPpG2sOQCroHLH-EdVXoGVTHIRW5tUYXK8MpghkYyA","key":"benoit"}],"frontMatter":{"slug":"FCGID-wwsympa-post","title":"FCGID et wwsympa","authors":"benoit","tags":["FCGID","wwsympa","Apache"],"hide_table_of_contents":false},"prevItem":{"title":"D\xe9couvrir Docusaurus pour faire un site statique","permalink":"/blog/decouvrir-docusaurus"}},"content":"Ce message a \xe9t\xe9 publi\xe9 sur la liste de diffusion _sympa-authors@cru.fr_ le 20 d\xe9cembre 2006. Il explique la configuration pour activet FCGID dans Apache pour le logiciel Sympa.\\n \\n\x3c!--truncate--\x3e\\n\\n**Sujet:** Re: FCGID et wwsympa -> j\'ai compris !\\n**De:** Olivier Sala\xfcn - CRU\\n**Date:** Wed, 20 Dec 2006 11:27:54 +0100\\n**Pour:** Benoit Lathiere \\n**Copie:** sympa-authors@cru.fr\\n\\nMerci pour ces infos ; nous allons tester ce module.\\n\\nIl existe une autre alternative : mod_proxy_fcgi. http://mproxyfcgi.sourceforge.net/\\nCe module doit \xeatre int\xe9gr\xe9 directement au projet Apache, v2.3.\\n\\n_Benoit Lathiere wrote:_\\n\\nLe module en question est celui dont je vous avais parl\xe9 il y a quelques mois.\\nSite officiel : http://fastcgi.coremail.cn/ (doc en ligne tr\xe8s succinte)\\nLe module s\'appelle bien _FcgiD_.\\nLe package Debian est `libapache2-mod-fcgid` (Apache2 uniquement). Il est maintenant disponible pour toutes les architectures.\\nLe package Fastcgi existe toujours chez Debian (non-free), m\xeame en unstable. Mais je ne sais pas pour combien de temps.\\n\\nMon contexte : Debian Sarge, Apache 2 (stable), Sympa 4.1.5 (stable), Fcgid (stable).\\n\\nFcgid est un peu plus simple \xe0 configurer que Fastcgi. Les directives n\xe9cessaires sont diff\xe9rentes et moins nombreuses pour faire tourner wwsympa.fcgi.\\nEn plus d\'activer `/etc/apache2/mods-enabled/fcgid.*`, j\'ai l\xe9g\xe8rement modifi\xe9 votre fichier httpd.conf-fcgi :\\n\\n\\n```bash\\n# Apache configuration file for Sympa\\n    Alias /icons/sympa /usr/share/sympa/icons\\n##<IfModule mod_fcgid.c>\\n##AddHandler fcgid-script .fcg .fcgi .fpl\\n##FastCgiServer /usr/lib/cgi-bin/sympa/wwsympa.fcgi -processes 2\\n    ScriptAlias /wws /usr/lib/cgi-bin/sympa/wwsympa.fcgi\\n    <Location /wws>\\n        SetHandler fcgid-script\\n        Options ExecCGI\\n    </Location>\\n##</IfModule>\\n```\\n\\n\\"FastCgiServer\\" n\'existe plus.\\nJe n\'ai pas encore test\xe9 wwsympa de fond en comble pour dire si c\'est stable. Je vais tester une migration sous peu."}]}')}}]);