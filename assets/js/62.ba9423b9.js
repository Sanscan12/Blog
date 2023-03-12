(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{389:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"静态资源的访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源的访问"}},[t._v("#")]),t._v(" 静态资源的访问")]),t._v(" "),a("p",[t._v("静态资源一般在web.xml 配置时需要添加允许路径url（url-pattern节点）。"),a("code",[t._v("url-pattern")]),t._v("节点 中的值一般有两种写法：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[a("code",[t._v("*.do")]),t._v("\nSpringMVC 的前端控制器 DispatcherServlet 的常使用后辍匹配方式，可以写为*.do 或者 *.action, *.mvc 等。")]),t._v(" "),a("li",[a("code",[t._v("/")]),t._v("\nDispatcherServlet 会将向静态内容。例如 .css 、.js 、图片 等资源的获取请求 时，也会当作是一个普通的 Controller 请求，因此所有的静态资源获取请求也均会报 404 错误")])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("p",[a("strong",[t._v("web.xml")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("···\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dispatcherServlet"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--        <url-pattern>*.do</url-pattern>--\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n···\n")])])]),a("p",[a("strong",[t._v("index")])]),t._v(" "),a("div",{staticClass:"language-jsp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n    <title>Title</title>\n</head>\n<body>\n    <h1>index ----- ${userName}</h1>\n    \n    //前提 webapp目录 下有 images目录 存放图片文件（加载图片静态资源）\n    //访问时地址：http://localhost:8080/images/ov.jpg\n    <img src="images/ov.jpg" alt="test"/>\n\n</body>\n</html>\n')])])]),a("p",[t._v("如果 "),a("code",[t._v("url-pattern")]),t._v("节点 值为 "),a("code",[t._v("/")]),t._v("，可通过以下两个解决方法")]),t._v(" "),a("p",[t._v("解决方法通过以上第一次用的代码进而修改实例：（常用示例）")]),t._v(" "),a("ol",[a("li",[t._v("在 "),a("code",[t._v("springmvc.xml")]),t._v(" 添加 "),a("code",[t._v("<mvc:default-servlet-handler/>")]),t._v(" 节点 ，通过转发到 Servlet 容器的默认 Servlet 来配置处理程序以提供静态资源")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("default-servlet-handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Springmvc框架会在容器中创建 DefaultServletHttpRequestHandler处理器对象。该对象会对所有进入 DispatcherServlet的URL 进行检查。如果发现是静态资源的请求，就将该请求转由Web应用服务器默认的Servlet处理，如果不是静态资源的请求，才由DispatcherServlet继续处理。")]),t._v(" "),a("p",[t._v("以往使用的Tomcat服务器中，有一个专门用于处理静态资源 访问的 Servlet 名叫 DefaultServlet。其为default。可以处理各种静态资源访问 请求。该Servlet注册在 Tomcat 服务器的 web.xml 中。在 Tomcat安装目录/conf/web.xml。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在 "),a("code",[t._v("springmvc.xml")]),t._v(" 添加 "),a("code",[t._v("<mvc:resources />")]),t._v(" 节点 ，配置一个处理程序来提供静态资源")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("resources location"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/images/"')]),t._v(" mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/images/**"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("location: 静态资源所在目录（建议 不应用 /WEB-INF/目录 及其 子目录 ）")]),t._v(" "),a("p",[t._v("mapping: 对该资源的请求（后面是两个星号**）")])])])}),[],!1,null,null,null);a.default=n.exports}}]);