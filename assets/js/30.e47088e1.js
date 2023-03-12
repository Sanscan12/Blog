(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{358:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jsp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsp"}},[t._v("#")]),t._v(" JSP")]),t._v(" "),e("p",[t._v("JSP是 Servlet设计的简化版，可在HTML页面添加 Java语言的脚本。JSP开发的Web应用可跨平台，也能在其他系统运行")]),t._v(" "),e("blockquote",[e("p",[t._v("*.html 静态页面")]),t._v(" "),e("p",[t._v("*.jsp 动态页面（嵌套Java和html代码）")])]),t._v(" "),e("h2",{attrs:{id:"jsp-引入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsp-引入"}},[t._v("#")]),t._v(" JSP 引入")]),t._v(" "),e("p",[t._v("声明标签\t"),e("code",[t._v("<%! 变量/方法 的声明%>")])]),t._v(" "),e("p",[t._v("表达式\t"),e("code",[t._v("<%= 表达式%>")])]),t._v(" "),e("p",[t._v("执行标签 "),e("code",[t._v("<%java代码%>")])]),t._v(" "),e("h2",{attrs:{id:"jsp-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsp-原理"}},[t._v("#")]),t._v(" JSP 原理")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/17.png",alt:""}})]),t._v(" "),e("p",[t._v("当浏览器访问服务器时。地址后缀为 "),e("code",[t._v(".jsp")]),t._v(" ，会先找 "),e("code",[t._v("index.jsp")]),t._v(" ，找到随后进行翻译成 "),e("code",[t._v("index_jsp.java")]),t._v(" 并对其进行编译，产生一个 "),e("code",[t._v("index_jsp.class")]),t._v(" 进行加载运行")]),t._v(" "),e("h2",{attrs:{id:"jsp-内置对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsp-内置对象"}},[t._v("#")]),t._v(" JSP 内置对象")]),t._v(" "),e("h3",{attrs:{id:"request对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request对象"}},[t._v("#")]),t._v(" request对象")]),t._v(" "),e("p",[t._v("request 对象是 "),e("code",[t._v("javax.servlet.HttpServletRequest")]),t._v(" 类型的对象\n该对象代表了客户端的请求信息，主要⽤于接受HTTP协议传送到服务器的数据\n作用域：一次请求")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/HttpServletRequest.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击详细说明HttpServletRequest"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"response对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response对象"}},[t._v("#")]),t._v(" response对象")]),t._v(" "),e("p",[t._v("response 对象是 "),e("code",[t._v("javax.servlet.HttpServletResponse")]),t._v(" 类型的对象\nresponse  代表的是对客户端的响应，主要是将JSP容器处理过的对象传回到客户端\n作用域：本页面")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/HttpServletResponse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击详细说明HttpServletResponse"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"session对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session对象"}},[t._v("#")]),t._v(" session对象")]),t._v(" "),e("p",[t._v("session 对象是由服务器自动创建的与用户请求相关的对象，每个会话都有对应的会话ID，用于保存信息，以及跟踪用户的操作状态\n作用域：本次会话")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/HttpSession.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击详细说明HttpSession"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"application对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application对象"}},[t._v("#")]),t._v(" application对象")]),t._v(" "),e("p",[t._v("application对象 可将信息保存在服务器，直至服务器关闭（类似于全局变量）\n作用域：服务器运行")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/ServletContext.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击详细说明ServletContext"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"out对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#out对象"}},[t._v("#")]),t._v(" out对象")]),t._v(" "),e("p",[t._v("out对象 可在Web浏览器内输出信息，管理应用服务器上的输出缓冲区（输出完及时不关闭流）")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/ServletOutputStream.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击详细说明ServletOutputStream"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"pagecontext对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pagecontext对象"}},[t._v("#")]),t._v(" pageContext对象")]),t._v(" "),e("p",[t._v("pageContext对象 用于获取任何范围的参数")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/ServletContext.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多方法说明ServletContext"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"config对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config对象"}},[t._v("#")]),t._v(" config对象")]),t._v(" "),e("p",[t._v("config对象 用于获取服务器的配置信息\n使用前提需要 "),e("code",[t._v("pageConext对象")]),t._v(" 的 "),e("code",[t._v("getServletConfig() 方法")]),t._v(" 获取 "),e("code",[t._v("config对象")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/ServletConfig.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多方法说明ServletConfig"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"page对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page对象"}},[t._v("#")]),t._v(" page对象")]),t._v(" "),e("p",[t._v("page对象 代表JSP本身（类似于Java语言 的 "),e("code",[t._v("this")]),t._v("）")]),t._v(" "),e("h3",{attrs:{id:"exception对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exception对象"}},[t._v("#")]),t._v(" exception对象")]),t._v(" "),e("p",[t._v("exception对象 用于显示异常信息\n在JSP页面 "),e("code",[t._v("page指令")]),t._v(" 添加 "),e("code",[t._v('isErrorPage = "true"')]),t._v(" 属性 和 "),e("code",[t._v('errorPage="XXX.jsp"')]),t._v("页面才生效\n如果页面异常则会生成 "),e("code",[t._v("exception对象")]),t._v(" 并把 "),e("code",[t._v("page指令")]),t._v(" 设定在错误页面中进行处理")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/ServletException.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多方法说明ServletException"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"jsp-指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsp-指令"}},[t._v("#")]),t._v(" JSP 指令")]),t._v(" "),e("p",[t._v("JSP指令 控制JSP编译器如何去生成servlet")]),t._v(" "),e("p",[e("strong",[t._v("page指令")]),t._v("\n定义网页依赖（脚本、异常、缓冲、...）\n"),e("code",[t._v('<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>')])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("值")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("language")])]),t._v(" "),e("td",[t._v("java、...")]),t._v(" "),e("td",[t._v("解释JSP文件使用的语言")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("extends")])]),t._v(" "),e("td",[t._v("任何类的全名")]),t._v(" "),e("td",[t._v("编译时继承哪个类")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("import")])]),t._v(" "),e("td",[t._v("任何类的全名")]),t._v(" "),e("td",[t._v("引入类、包等...")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("session")])]),t._v(" "),e("td",[t._v("true、false")]),t._v(" "),e("td",[t._v("设置JSP文件是否内置Session对象 (默认true)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("autoFlush")])]),t._v(" "),e("td",[t._v("true、false")]),t._v(" "),e("td",[t._v("是否运行缓存 (默认true)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("buffer")])]),t._v(" "),e("td",[t._v("none、  指定KB")]),t._v(" "),e("td",[t._v("指定缓存大小 (默认none)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("contentType")])]),t._v(" "),e("td",[t._v("文档类型")]),t._v(" "),e("td",[t._v("规定了生成内容的类型。当生成非HTML内容或者当前字符集并非默认字符集时使用")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("errorPage")])]),t._v(" "),e("td",[t._v("相对路径")]),t._v(" "),e("td",[t._v("指定 页面异常时转送的页面")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isErrorPage")])]),t._v(" "),e("td",[t._v("true、false")]),t._v(" "),e("td",[t._v("指定页面是否显示错误提示页面 (默认false)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isThreadSafe")])]),t._v(" "),e("td",[t._v("true、false")]),t._v(" "),e("td",[t._v("最终生成的servlet是否具有线程安全性 (默认false)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pageEncoding")])]),t._v(" "),e("td",[t._v("utf-8、...")]),t._v(" "),e("td",[t._v("指定 编码类型")])])])]),t._v(" "),e("p",[e("code",[t._v("**Include指令** JSP可以通过")]),t._v("include指令"),e("code",[t._v("来包含其他文件 并且同时编译运行")]),t._v('<%@ include file="相对url地址" %>`')]),t._v(" "),e("p",[e("strong",[t._v("Taglib指令")]),t._v("\nJSP允许自定义标签库，引入库、标签等...\n"),e("code",[t._v('<%@ taglib uri="标签库路径" prefix="指定标签库前缀" %>')])]),t._v(" "),e("h2",{attrs:{id:"状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("状态码")]),t._v(" "),e("th",[t._v("消息")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("100")]),t._v(" "),e("td",[t._v("Continue")]),t._v(" "),e("td",[t._v("部分请求接收，但未被拒绝，客户端延长请求")])]),t._v(" "),e("tr",[e("td",[t._v("101")]),t._v(" "),e("td",[t._v("Switching Protocols")]),t._v(" "),e("td",[t._v("服务器交换机协议")])]),t._v(" "),e("tr",[e("td",[t._v("200")]),t._v(" "),e("td",[t._v("OK")]),t._v(" "),e("td",[t._v("请求被确认")])]),t._v(" "),e("tr",[e("td",[t._v("201")]),t._v(" "),e("td",[t._v("Created")]),t._v(" "),e("td",[t._v("请求时完整的，新的资源被创建")])]),t._v(" "),e("tr",[e("td",[t._v("202")]),t._v(" "),e("td",[t._v("Accepted")]),t._v(" "),e("td",[t._v("请求被接收，但未处理完")])]),t._v(" "),e("tr",[e("td",[t._v("300")]),t._v(" "),e("td",[t._v("Multiple Choices")]),t._v(" "),e("td",[t._v("一个超链接表，用户可以选择超链接访问，支持5个超链接")])]),t._v(" "),e("tr",[e("td",[t._v("301")]),t._v(" "),e("td",[t._v("Moved Permanently")]),t._v(" "),e("td",[t._v("被请求的页面已经移动到了新的URL下")])]),t._v(" "),e("tr",[e("td",[t._v("302")]),t._v(" "),e("td",[t._v("Found")]),t._v(" "),e("td",[t._v("被请求的页面暂时性地移动到了新的URL下")])]),t._v(" "),e("tr",[e("td",[t._v("303")]),t._v(" "),e("td",[t._v("See Other")]),t._v(" "),e("td",[t._v("被请求的页面可以在一个不同的URL下找到")])]),t._v(" "),e("tr",[e("td",[t._v("400")]),t._v(" "),e("td",[t._v("Bad Request")]),t._v(" "),e("td",[t._v("服务器无法识别请求")])]),t._v(" "),e("tr",[e("td",[t._v("403")]),t._v(" "),e("td",[t._v("Forbidden")]),t._v(" "),e("td",[t._v("禁止访问所请求的页面")])]),t._v(" "),e("tr",[e("td",[t._v("404")]),t._v(" "),e("td",[t._v("Not Found")]),t._v(" "),e("td",[t._v("服务器无法找到所请求的页面")])]),t._v(" "),e("tr",[e("td",[t._v("405")]),t._v(" "),e("td",[t._v("Method Not Allowed")]),t._v(" "),e("td",[t._v("请求中所指定的方法不被允许")])]),t._v(" "),e("tr",[e("td",[t._v("500")]),t._v(" "),e("td",[t._v("Internal Server Error")]),t._v(" "),e("td",[t._v("请求不完整，服务器遇见出乎意料的状况")])]),t._v(" "),e("tr",[e("td",[t._v("501")]),t._v(" "),e("td",[t._v("Not Implemented")]),t._v(" "),e("td",[t._v("请求不完整，服务器不提供所需要的功能")])]),t._v(" "),e("tr",[e("td",[t._v("502")]),t._v(" "),e("td",[t._v("Bad Gateway")]),t._v(" "),e("td",[t._v("请求不完整，服务器中上游服务器接收了一个无效的响应")])]),t._v(" "),e("tr",[e("td",[t._v("503")]),t._v(" "),e("td",[t._v("Service Unavailable")]),t._v(" "),e("td",[t._v("请求不完整，服务器暂时重启 / 关闭")])]),t._v(" "),e("tr",[e("td",[t._v("505")]),t._v(" "),e("td",[t._v("HTTP Version Not Supported")]),t._v(" "),e("td",[t._v("服务器不支持指定的HTTP版本")])])])]),t._v(" "),e("h2",{attrs:{id:"el表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#el表达式"}},[t._v("#")]),t._v(" EL表达式")]),t._v(" "),e("p",[t._v("EL表达式可 讲话对象和变量 快速呈现出来")]),t._v(" "),e("p",[e("strong",[t._v("展示方式")])]),t._v(" "),e("p",[t._v("默认展示："),e("code",[t._v("${需要展示的信息}")]),t._v("\n指定展示："),e("code",[t._v("${对象.key}")])]),t._v(" "),e("p",[t._v("**默认获取顺序 **\n根据以下对象查找key值是否存在，存在则优先获取")]),t._v(" "),e("ol",[e("li",[t._v("pageContext对象 (当前页面)")]),t._v(" "),e("li",[t._v("request对象 (请求范围)")]),t._v(" "),e("li",[t._v("session对象 (会话范围)")]),t._v(" "),e("li",[t._v("application对象 (程序范围)")])]),t._v(" "),e("p",[e("strong",[t._v("EL基本操作符")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("术语")]),t._v(" "),e("th",[t._v("定义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("算术")]),t._v(" "),e("td",[t._v("+、-、*、/、%")])]),t._v(" "),e("tr",[e("td",[t._v("逻辑")]),t._v(" "),e("td",[t._v("and、ro、not、&&、||、!")])]),t._v(" "),e("tr",[e("td",[t._v("关系")]),t._v(" "),e("td",[t._v("==、eq、!=、ne、gt、<=、le、>=、ge")])]),t._v(" "),e("tr",[e("td",[t._v("Empty")]),t._v(" "),e("td",[t._v("判断前缀是否为null （应用==empty <域对象>== 返回 布尔值）")])]),t._v(" "),e("tr",[e("td",[t._v("类型")]),t._v(" "),e("td",[t._v("三目运算符")])])])]),t._v(" "),e("p",[e("strong",[t._v("示例：")])]),t._v(" "),e("div",{staticClass:"language-jsp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%\n    pageContext.setAttribute("number",1);\n    pageContext.setAttribute("name","");\n    request.setAttribute("number",2);\n    session.setAttribute("number",3);\n    application.setAttribute("number",4);\n%>\n<h2>作用域数据获取:</h2>\n<p>直接获取name：${number}</p>\n<p>pageScope域获取name：${pageScope.number}</p>\n<p>requestScope域获取name：${requestScope.number}</p>\n<p>sessionScope域获取name：${sessionScope.number}</p>\n<p>applicationScope域获取name：${applicationScope.number}</p>\n<h2>表达式应用</h2>\n<p>pageContext > session : ${number > sessionScope.number}</p>\n<p>name 是否为空 : ${empty name}</p>\n<p>session、application 获取最大值:${sessionScope.number > applicationScope.number?sessionScope.number:applicationScope.number}</p>\n<%--  浏览器结果\n作用域数据获取:\n    直接获取name：1\n    pageScope域获取name：1\n    requestScope域获取name：2\n    sessionScope域获取name：3\n    applicationScope域获取name：4\n表达式应用\n    pageContext > session : false\n    name 是否为空 : true\n    session、application 获取最大值:4\n--%>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br")])]),e("h2",{attrs:{id:"jstl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jstl"}},[t._v("#")]),t._v(" JSTL")]),t._v(" "),e("p",[t._v("JSTL是⼀个JSP标签集合，它封装了JSP应用的通用核心功能（条件判断、循环迭代、...）")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/jsp/jsp-jstl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击JSTL标签更多说明"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"jstl引入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jstl引入"}},[t._v("#")]),t._v(" JSTL引入")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("引入jar依赖："),e("code",[t._v("standard.jar")]),t._v("  、 "),e("code",[t._v("jstl.jar")])]),t._v(" "),e("li",[t._v("在JSP文件的页面 引入相应功能范围的标签\n"),e("code",[t._v('<%@ taglib prefix="前缀" uri="功能范围路径" %>')])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("功能范围")]),t._v(" "),e("th",[t._v("uri")]),t._v(" "),e("th",[t._v("前缀")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("core")]),t._v(" "),e("td",[e("code",[t._v("http://java.sun.com/jsp/jstl/core")])]),t._v(" "),e("td",[t._v("c")])]),t._v(" "),e("tr",[e("td",[t._v("i18n")]),t._v(" "),e("td",[e("code",[t._v("http://java.sun.com/jsp/jstl/fmt")])]),t._v(" "),e("td",[t._v("fmt")])]),t._v(" "),e("tr",[e("td",[t._v("sql")]),t._v(" "),e("td",[e("code",[t._v("http://java.sun.com/jsp/jstl/sql")])]),t._v(" "),e("td",[t._v("sql")])]),t._v(" "),e("tr",[e("td",[t._v("xml")]),t._v(" "),e("td",[e("code",[t._v("http://java.sun.com/jsp/jstl/xml")])]),t._v(" "),e("td",[t._v("x")])]),t._v(" "),e("tr",[e("td",[t._v("functions")]),t._v(" "),e("td",[e("code",[t._v("http://java.sun.com/jsp/jstl/functions")])]),t._v(" "),e("td",[t._v("fn")])])])]),t._v(" "),e("h3",{attrs:{id:"核心标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心标签"}},[t._v("#")]),t._v(" 核心标签")]),t._v(" "),e("p",[t._v('引入：==<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>==')]),t._v(" "),e("p",[e("strong",[t._v("分类")])]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("表达式操作 out、set、remove、catch")]),t._v(" "),e("li",[t._v("流程控制 if、choose、when、otherwise")]),t._v(" "),e("li",[t._v("迭代操作 forEach、forTokens")]),t._v(" "),e("li",[t._v("URL操作 import、param、url、redirect")])])]),t._v(" "),e("p",[e("strong",[t._v("＜c:set>标签")]),t._v("\n保存数据")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("值说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("存储的值")])]),t._v(" "),e("tr",[e("td",[t._v("var")]),t._v(" "),e("td",[t._v("存入的变量名")])]),t._v(" "),e("tr",[e("td",[t._v("scope")]),t._v(" "),e("td",[t._v("指定变量范围")])]),t._v(" "),e("tr",[e("td",[t._v("target")]),t._v(" "),e("td",[t._v("对象类型")])]),t._v(" "),e("tr",[e("td",[t._v("property")]),t._v(" "),e("td",[t._v("指定target对象的属性值")])])])]),t._v(" "),e("p",[e("strong",[t._v("＜c:out>标签")]),t._v("\n输出数据")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("值说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("输出的数据")])]),t._v(" "),e("tr",[e("td",[t._v("default")]),t._v(" "),e("td",[t._v("无输出则默认代替")])]),t._v(" "),e("tr",[e("td",[t._v("escapeXml")]),t._v(" "),e("td",[t._v("是否忽略XML特殊字符")])])])]),t._v(" "),e("p",[e("strong",[t._v("＜c:remove>标签")]),t._v("\n删除保存的数据")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("值说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("var")]),t._v(" "),e("td",[t._v("移除的变量名")])]),t._v(" "),e("tr",[e("td",[t._v("Scope")]),t._v(" "),e("td",[t._v("var变量的范围")])])])]),t._v(" "),e("p",[e("strong",[t._v("＜c:if>标签")]),t._v("\nif判断")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("值说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("test")]),t._v(" "),e("td",[t._v("表达式的结果(true/false)")])]),t._v(" "),e("tr",[e("td",[t._v("var")]),t._v(" "),e("td",[t._v("存储表达式结果的变量名")])]),t._v(" "),e("tr",[e("td",[t._v("scope")]),t._v(" "),e("td",[t._v("var变量的范围")])])])]),t._v(" "),e("p",[e("strong",[t._v("＜c:choose>,＜c:when>,＜c:otherwise>标签")]),t._v("\nif-else 判断")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("值说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("test")]),t._v(" "),e("td",[t._v("表达式的结果(true/false)")])])])]),t._v(" "),e("p",[e("strong",[t._v("＜c:forEach>标签")]),t._v("\n循环循环")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("值说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("var")]),t._v(" "),e("td",[t._v("迭代对象")])]),t._v(" "),e("tr",[e("td",[t._v("items")]),t._v(" "),e("td",[t._v("迭代的集合对象")])]),t._v(" "),e("tr",[e("td",[t._v("varStatus")]),t._v(" "),e("td",[t._v("迭代对象的相关成员信息")])]),t._v(" "),e("tr",[e("td",[t._v("begin")]),t._v(" "),e("td",[t._v("开始迭代的位置")])]),t._v(" "),e("tr",[e("td",[t._v("end")]),t._v(" "),e("td",[t._v("结束迭代的位置")])]),t._v(" "),e("tr",[e("td",[t._v("step")]),t._v(" "),e("td",[t._v("每次迭代的间隔数")])])])]),t._v(" "),e("h3",{attrs:{id:"应用实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用实例"}},[t._v("#")]),t._v(" 应用实例")]),t._v(" "),e("div",{staticClass:"language-responsejsp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%@ page import="java.util.ArrayList" %>\n<%@ page import="java.util.List" %>\n<%@ page import="java.util.Date" %>\n<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<%@ taglib prefix="c" uri ="http://java.sun.com/jsp/jstl/core"%>\n<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>\n<html>\n  <head>\n    <title>$Title$</title>\n  </head>\n  <body>\n  <h1>JSTL 测试</h1>\n\n  <h2>表达式操作 标签</h2>\n  <h3>set存数据</h3>\n  <c:set var="name" value="Sanscan12" scope="session"/>\n  <c:set var="name" value="Sanscan12" scope="application"/>\n  <h3>out显示数据</h3>\n  sessionScope-name = <c:out value="${sessionScope.name}"/> <br>\n  <%--sessionScope-name = Sanscan12--%>\n  name = <c:out value="null" default="Error"/> <br>\n  <%--name = null--%>\n  <h3>remove移除数据</h3>\n  移除 application-name数据！<c:remove var="name" scope="application"/> <br>\n  <%--移除 application-name数据！--%>\n  applicationScope-name = <c:out value="${applicationScope.name}" default="Error"/> <br>\n  <%--applicationScope-name = Error--%>\n  sessionScope-name = <c:out value="${sessionScope.name}" default="Error"/> <br>\n  <%--sessionScope-name = Sanscan12--%>\n\n  <h2>流程控制 标签</h2>\n  <h3>if判断</h3>\n  Sans 是本人？<c:if test="${name==\'Sans\'}" var="result" />\n  <c:out value="${result}"/><br>\n  <%--Sans 是本人？ false--%>\n  Sanscan12 是本人？<c:if test="${name==\'Sanscan12\'}" >true</c:if> <br>\n  <%--Sanscan12 是本人？true--%>\n  <h3>if-else判断</h3>\n  Sanscan12 是本人？\n  <c:choose>\n    <c:when test="${name==\'Sanscan12\'}">\n      Yes\n    </c:when>\n    <c:otherwise>\n      No\n    </c:otherwise>\n  </c:choose>\n<%-- Sanscan12 是本人？ Yes --%>\n  <h3>forEach循环</h3>\n  <%\n    List list = new ArrayList();\n    list.add("123");\n    list.add("456");\n    list.add("789");\n    pageContext.setAttribute("ulist",list);\n  %>\n  <c:forEach var="name" items="${ulist}" varStatus="sta">\n<%--  个数-索引-值   --%>\n    ${sta.count} --\x3e ${sta.index} --\x3e ${name} <br>\n  </c:forEach>\n<%--\n1 --\x3e 0 --\x3e 123\n2 --\x3e 1 --\x3e 456\n3 --\x3e 2 --\x3e 789\n--%>\n    <c:forEach var="i" begin="1" end="10" step="1">\n    \t${i}\n\t</c:forEach>\n  \n  <h2>格式化 标签</h2>\n  <h3>日期格式化 --\x3e 字符串</h3>\n  <%pageContext.setAttribute("nowDate",new Date());%>\n  nowDate：<fmt:formatDate value="${nowDate}"/> <br>\n  <%--2021年4月17日--%>\n  YYYYMMdd-nowDate：<fmt:formatDate value="${nowDate}" pattern="YYYY-MM-dd"/> <br>\n  <%--2021-04-17--%>\n  date-nowDate：<fmt:formatDate value="${nowDate}" type="date"/> <br>\n  <%--2021年4月17日--%>\n  time-nowTime：<fmt:formatDate value="${nowDate}" type="time"/> <br>\n  <%--上午10:38:38--%>\n  both-now：<fmt:formatDate value="${nowDate}" type="both"/> <br>\n  <%--2021年4月17日 上午10:38:38--%>\n  <%--<h3>字符串格式化 --\x3e 日期</h3>--%>\n  <%--Format：<fmt:parseDate value="${nowDate}" var="test"/> <br>--%>\n  <%--YYYY：<fmt:parseDate value="${nowDate}" var="forDate2" pattern="YYYY"/> <br>--%>\n  <h3>数字格式化</h3>\n  type-currency-value(3.14): <fmt:formatNumber value="3.14" type="currency"/> <br>\n  <%--￥3.14--%>\n  type-percent-value(3.14): <fmt:formatNumber value="3.14" type="percent"/> <br>\n  <%--314%--%>\n  maxIntegerDigits(4)-value(314159.26): <fmt:formatNumber value="314159.26" maxIntegerDigits="4"/> <br>\n  <%--4,159.26--%>\n  maxFractionDigits(2)-value(3.14159): <fmt:formatNumber value="3.14159" maxFractionDigits="2"/> <br>\n  <%--3.14--%>\n  maxFractionDigits(2)-value(3.14559): <fmt:formatNumber value="3.14559" maxFractionDigits="2"/> <br>\n  <%--3.15--%>\n  pattern(0.###E0)-value(0.31415926535897): <fmt:formatNumber value="0.31415926535897" pattern="0.###E0"/> <br>\n  <%--3.142E-1--%>\n  pattern(00.###E0)-value(0.31415926535897): <fmt:formatNumber value="0.31415926535897" pattern="00.###E0"/> <br>\n  <%--31.416E-2--%>\n  pattern(0.###E0)-value(31415926535897): <fmt:formatNumber value="31415926535897" pattern="0.###E0"/> <br>\n  <%--3.142E13--%>\n  </body>\n</html>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br"),e("span",{staticClass:"line-number"},[t._v("54")]),e("br"),e("span",{staticClass:"line-number"},[t._v("55")]),e("br"),e("span",{staticClass:"line-number"},[t._v("56")]),e("br"),e("span",{staticClass:"line-number"},[t._v("57")]),e("br"),e("span",{staticClass:"line-number"},[t._v("58")]),e("br"),e("span",{staticClass:"line-number"},[t._v("59")]),e("br"),e("span",{staticClass:"line-number"},[t._v("60")]),e("br"),e("span",{staticClass:"line-number"},[t._v("61")]),e("br"),e("span",{staticClass:"line-number"},[t._v("62")]),e("br"),e("span",{staticClass:"line-number"},[t._v("63")]),e("br"),e("span",{staticClass:"line-number"},[t._v("64")]),e("br"),e("span",{staticClass:"line-number"},[t._v("65")]),e("br"),e("span",{staticClass:"line-number"},[t._v("66")]),e("br"),e("span",{staticClass:"line-number"},[t._v("67")]),e("br"),e("span",{staticClass:"line-number"},[t._v("68")]),e("br"),e("span",{staticClass:"line-number"},[t._v("69")]),e("br"),e("span",{staticClass:"line-number"},[t._v("70")]),e("br"),e("span",{staticClass:"line-number"},[t._v("71")]),e("br"),e("span",{staticClass:"line-number"},[t._v("72")]),e("br"),e("span",{staticClass:"line-number"},[t._v("73")]),e("br"),e("span",{staticClass:"line-number"},[t._v("74")]),e("br"),e("span",{staticClass:"line-number"},[t._v("75")]),e("br"),e("span",{staticClass:"line-number"},[t._v("76")]),e("br"),e("span",{staticClass:"line-number"},[t._v("77")]),e("br"),e("span",{staticClass:"line-number"},[t._v("78")]),e("br"),e("span",{staticClass:"line-number"},[t._v("79")]),e("br"),e("span",{staticClass:"line-number"},[t._v("80")]),e("br"),e("span",{staticClass:"line-number"},[t._v("81")]),e("br"),e("span",{staticClass:"line-number"},[t._v("82")]),e("br"),e("span",{staticClass:"line-number"},[t._v("83")]),e("br"),e("span",{staticClass:"line-number"},[t._v("84")]),e("br"),e("span",{staticClass:"line-number"},[t._v("85")]),e("br"),e("span",{staticClass:"line-number"},[t._v("86")]),e("br"),e("span",{staticClass:"line-number"},[t._v("87")]),e("br"),e("span",{staticClass:"line-number"},[t._v("88")]),e("br"),e("span",{staticClass:"line-number"},[t._v("89")]),e("br"),e("span",{staticClass:"line-number"},[t._v("90")]),e("br"),e("span",{staticClass:"line-number"},[t._v("91")]),e("br"),e("span",{staticClass:"line-number"},[t._v("92")]),e("br"),e("span",{staticClass:"line-number"},[t._v("93")]),e("br"),e("span",{staticClass:"line-number"},[t._v("94")]),e("br"),e("span",{staticClass:"line-number"},[t._v("95")]),e("br"),e("span",{staticClass:"line-number"},[t._v("96")]),e("br"),e("span",{staticClass:"line-number"},[t._v("97")]),e("br"),e("span",{staticClass:"line-number"},[t._v("98")]),e("br"),e("span",{staticClass:"line-number"},[t._v("99")]),e("br"),e("span",{staticClass:"line-number"},[t._v("100")]),e("br"),e("span",{staticClass:"line-number"},[t._v("101")]),e("br"),e("span",{staticClass:"line-number"},[t._v("102")]),e("br"),e("span",{staticClass:"line-number"},[t._v("103")]),e("br"),e("span",{staticClass:"line-number"},[t._v("104")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);