(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{365:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[t._v("#")]),t._v(" Tomcat")]),t._v(" "),a("p",[t._v("Tomcat 服务器是一个免费的开放源代码的Web 应用服务器，轻量级应用服务器")]),t._v(" "),a("h2",{attrs:{id:"tomcat下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat下载"}},[t._v("#")]),t._v(" Tomcat下载")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击网站"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("下载后解压路径要纯英文")]),t._v(" "),a("li",[t._v("打开 根路径下的 "),a("code",[t._v("bin/startup.bat")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("打开 浏览器 进入地址："),a("code",[t._v("http://localhost:8080/")]),t._v("\n浏览器进入的地址不是空，表示成功\n优化使用，需要cmd方便应用")]),t._v(" "),a("li",[t._v("环境配置 "),a("strong",[t._v("新建 系统变量")]),t._v("（JDK配置）\n变量名："),a("code",[t._v("CATALINA_HOME")]),t._v("\n变量值："),a("code",[t._v("C:\\Program Files\\Java\\apache-tomcat-9.0.13")]),t._v(" (自己解压的路径)")]),t._v(" "),a("li",[t._v("环境配置 更变 系统变量 （指令应用）\n变量名："),a("code",[t._v("Path")]),t._v("\n新增值："),a("code",[t._v("%CATALINA_HOME%\\bin")])]),t._v(" "),a("li",[t._v("添加服务 cmd执行指令："),a("code",[t._v("service install")]),t._v(" / "),a("code",[t._v("service install Tomcat9")]),t._v(" (注意版本)")]),t._v(" "),a("li",[t._v("服务配置 “Apache Tomcat ...”（设为 自动启动/手动 作为Tomcat服务的入口）")])]),t._v(" "),a("div",{staticStyle:{background:"rgba(245, 108, 108,0.6)",border:"1px solid rgba(1, 1, 1,0.2)","border-radius":"8px",padding:"1px 12px"}},[a("p",{staticStyle:{"font-size":"20px"}}),a("p",{staticStyle:{"font-size":"20px"}},[a("b",[t._v("可能要解决的问题:  ")]),t._v(" "),a("ul",[a("li",[t._v("启动tomcat服务")]),t._v(" "),a("li",[t._v("\n            Window功能 服务启动：打开 控制面板 -> 程序安装与卸载 -> window功能启动\n            "),a("ul",[a("li",[t._v("启动 ==Internet Information Services== 下的所有子功能")])])]),t._v(" "),a("li",[t._v("Tomcat 中文乱码：修改以下配置文件中的 编码集")]),t._v(" "),a("li",[a("ul",[a("li",[t._v('`server.xml` 在配置端口的标签中 添加属性：==URIEncoding="UTF-8"==')]),t._v(" "),a("li",[t._v("`logging.properties` 在属性 `java.util.logging.ConsoleHandler.encoding` 中设置值为 ==GBK== ")])])]),t._v(" "),a("li",[t._v("startup.sh启动闪退：配置Java环境变量和Tomcat环境变量")])])])]),t._v(" "),a("h2",{attrs:{id:"tomcat目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat目录"}},[t._v("#")]),t._v(" Tomcat目录")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("bin：")]),t._v(" 存二进制可执行文件，指令操作控制")]),t._v(" "),a("li",[a("strong",[t._v("conf：")]),t._v(" 配置文件应用，有四个\n"),a("ul",[a("li",[a("strong",[t._v("server.xml：")]),t._v(" 配置整个服务器信息\n"),a("ul",[a("li",[a("strong",[t._v("tomcat-users.xml：")]),t._v(" 存储用户文件，账号密码等")])])]),t._v(" "),a("li",[a("strong",[t._v("web.xml：")]),t._v(" 部署描述 的文件 ，如 MIME => text/html")]),t._v(" "),a("li",[a("strong",[t._v("context.xml：")]),t._v(" 所有应用的统一配置（勿改）")])])]),t._v(" "),a("li",[a("strong",[t._v("lib：")]),t._v(" 类库，存储jar文件，用于添加依赖")]),t._v(" "),a("li",[a("strong",[t._v("logs：")]),t._v(" 日志文件")]),t._v(" "),a("li",[a("strong",[t._v("temp：")]),t._v(" 临时存放文件夹（缓存），停止Tomcat删除！！")]),t._v(" "),a("li",[a("strong",[t._v("webapps：")]),t._v(" 存放web项目的目录，每个文件夹都是项目（也有tomcat自带的）")]),t._v(" "),a("li",[a("strong",[t._v("work：")]),t._v(" 运行时生成的文件，每次运行都会重新生成（重复覆盖）")]),t._v(" "),a("li",[a("strong",[t._v("LICENSE：")]),t._v(" 许可证")]),t._v(" "),a("li",[a("strong",[t._v("NOTICE：")]),t._v(" 说明文件")])]),t._v(" "),a("h2",{attrs:{id:"tomcat配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat配置"}},[t._v("#")]),t._v(" Tomcat配置")]),t._v(" "),a("h3",{attrs:{id:"idea整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea整合"}},[t._v("#")]),t._v(" IDEA整合")]),t._v(" "),a("p",[a("strong",[t._v("添加tomcat")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/01.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/02.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("引入路径")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/03.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("添加 war exploded应用")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/04.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"javaweb项目创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javaweb项目创建"}},[t._v("#")]),t._v(" JavaWeb项目创建")]),t._v(" "),a("p",[a("strong",[t._v("创建项目")]),t._v("，如果没有JavaWeb")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/05.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("可在项目设置里添加框架")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/06.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/07.png",alt:""}})]),t._v(" "),a("p",[t._v("在 WEB-INF 目录下 新建 classes 和 lib 文件夹 用于配置 jar包 和 classes包")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/08.png",alt:""}})]),t._v(" "),a("p",[t._v("配置路径 classes包")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/09.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/10.png",alt:""}})]),t._v(" "),a("p",[t._v("配置依赖 jar包")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/11.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/12.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/13.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/14.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"配置端口号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置端口号"}},[t._v("#")]),t._v(" 配置端口号")]),t._v(" "),a("p",[t._v("在根路径 找 "),a("code",[t._v("../conf/server.xml")]),t._v(" 文件（69行左右）")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 修改 port属性 的值即可 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Connector")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("HTTP/1.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("connectionTimeout")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("20000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("redirectPort")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8443"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"tomcat项目管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat项目管理"}},[t._v("#")]),t._v(" Tomcat项目管理")]),t._v(" "),a("p",[t._v("添加管理员信息")]),t._v(" "),a("p",[t._v("修改 "),a("code",[t._v("../conf/tomcat-users.xml")]),t._v(" 文件\n将一下代码添加至 "),a("code",[t._v("<tomcat-users>")]),t._v(" 标签")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("role")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rolename")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manager-gui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tomcat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tomcat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("roles")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manager-gui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("rolename/roles：")]),t._v(" 权限\n"),a("strong",[t._v("username：")]),t._v(" 用户名\n"),a("strong",[t._v("password：")]),t._v(" 密码")])])}),[],!1,null,null,null);a.default=e.exports}}]);