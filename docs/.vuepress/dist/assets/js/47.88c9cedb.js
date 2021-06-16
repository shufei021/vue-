(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{452:function(t,e,a){"use strict";a.r(e);var s=a(57),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端-git-分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端-git-分支管理"}},[t._v("#")]),t._v(" 前端 GIT 分支管理")]),t._v(" "),a("p",[a("img",{attrs:{src:"/standard/git_1.png",alt:"示例"}}),t._v("\nmaster:主分支")]),t._v(" "),a("p",[t._v("release: 预发版本分支")]),t._v(" "),a("p",[t._v("feature_xxx:主功能分支（迭代分支，测试分支）")]),t._v(" "),a("p",[t._v("feature_xxx_个人名称:个人开发分支")]),t._v(" "),a("p",[t._v("hotfix_xxx:线上BUG修改分支")]),t._v(" "),a("p",[t._v("现前端各项目陆续在做分库处理，后续各项目组GIT处理方法")]),t._v(" "),a("p",[t._v("1，master做为以后主分支，主分支只接受迁出新分支和release分支推入，禁止其它分支直接推入")]),t._v(" "),a("p",[t._v("2，新功能开发的时候从master分支迁出主功能分支feature_xxx（此处避免混乱可以与后端开发的分支同名，也可以根据自己项目的情况建立）")]),t._v(" "),a("p",[t._v("3，任务分配到人，开发人员由主功能分支feature_xxx迁出对应的feature_xxx_hj个人开发分支做功能开发")]),t._v(" "),a("p",[t._v("4，开发完成，代码review合并到当时功能主功能分支")]),t._v(" "),a("p",[t._v("4，功能开发上开发测试环境（dev）的时候用当前功能分支，测试发布SIT时也可以以当前功能分支迁移出稳定分支提供测试发布。")]),t._v(" "),a("p",[t._v("5，提测完成的时候将功能分支代码合并至release分支,CN以及COM环境的发布使用release分支发布")]),t._v(" "),a("p",[t._v("6，发版完成进行封版将release版本合并至master主分支")]),t._v(" "),a("p",[t._v("7，线上如果出现BUG修复，迁移出hotfix_xxx BUG修改分支，修改完成合入release进行测试，以及上线，完成之后合入master主分支")]),t._v(" "),a("p",[t._v("8，定期会清理远程多余分支，以防止混淆视听")]),t._v(" "),a("p",[t._v("常用GIT分支命令")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a    \t\t查看所有分支（包括远程 remote）\ngit status \t\t\t\t查看当前分支状态\ngit checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b feature_xxx   \t创建本地分支并切换到新建分支\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u origin feature_xxx\t  \t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("将新建的本地分支关联到远程分支")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("最强暴的方法"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngit branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("set"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("upstream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("分支名称  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("将新建的本地分支关联到远程分支")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("温柔的方法"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("分支合并（事例：将feature_xxx合并至release）（管理员操作）\n# 切换到release分支\ngit checkout release\n# 对feature_xxx分支进行合并\ngit merge feature_xxx\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("注意，合并分支时工作区域保持干净，两个要合并的分支最好先"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PULL")]),t._v("代码在合并\n\ngit branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d feature_xxx\t\t\t\t删除本地分支\n在gitlab上删除远程分支（管理员操作）\n\ngit remote prune origin\t\t\t远程删除了，本地还能看到远程存在，这条命令删除远程不存在的分支\ngit remote show origin\t\t\tgit 查看远程仓库，以及与本地仓库的关系\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);