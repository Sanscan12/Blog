(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{431:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Nginx是一个高性能的HTTP和反向代理web服务器 , 同时也提供了 IMAP/POP3/SMTP 服务")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("正向代理&反向代理")]),t._v("\n正向代理要知道访问服务器的地址，反向代理不需要知道访问服务器的真实地址")])]),t._v(" "),s("p",[s("strong",[t._v("优点 :")])]),t._v(" "),s("ol",[s("li",[t._v("反向代理能够将请求进行 负载均衡")]),t._v(" "),s("li",[t._v("有多种 均衡策略")])]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("官网 :")]),t._v(" "),s("a",{attrs:{href:"https://nginx.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nginx.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("中文文档 :")]),t._v(" "),s("a",{attrs:{href:"https://blog.redis.com.cn/doc/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.redis.com.cn/doc/index.html"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("下载 : https://nginx.org/en/download.html")]),t._v(" "),s("p",[t._v("一般下载稳定版即可")]),t._v(" "),s("h3",{attrs:{id:"window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" Window")]),t._v(" "),s("p",[t._v("解压后 , cmd根路径 ==start nginx==/==nginx.exe== 指令即可食用")]),t._v(" "),s("p",[s("strong",[t._v("验证 :")]),t._v(" http://localhost:80")]),t._v(" "),s("p",[s("strong",[t._v("window常用指令")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动&退出&关闭&重启 服务")]),t._v("\nstart nginx\nnginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" quit\nnginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" stop\nnginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" reopen\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 帮助")]),t._v("\nnginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("注意 :")])]),t._v(" "),s("ul",[s("li",[t._v("解压路径中不能包含有中文路径")]),t._v(" "),s("li",[t._v("Nginx配置是80端口 , 如果加载无效需要更改端口\n配置文件 ==/conf/nginx.conf== 看见 ==listen       80;== 更改即可")])])]),t._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),s("p",[s("strong",[t._v("安装")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" epel-release\nyum update\nyum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx服务 开启/停止/重启")]),t._v("\nsystemctl start nginx\nsystemctl stop nginx\nsystemctl restart nginx\n")])])]),s("p",[s("strong",[t._v("配置")])]),t._v(" "),s("ul",[s("li",[t._v("==/etc/nginx/nginx.conf==文件")]),t._v(" "),s("li",[t._v("==/etc/nginx/conf.d/自定义文件.conf==文件 (一般在这里新建应用)")])]),t._v(" "),s("p",[s("strong",[t._v("验证 :")]),t._v(" http://localhost:80")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("Nginx配置中有三个核心功能 :")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("静态服务器")])]),t._v(" "),s("li",[s("strong",[t._v("反向代理")])]),t._v(" "),s("li",[s("strong",[t._v("负载均衡")])])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("main")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作模式配置")]),t._v("\nevents")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http 配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器主机配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 负载均衡配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("配置文档 :")])]),t._v(" "),s("ul",[s("li",[t._v("http://www.gwznkj.cn")]),t._v(" "),s("li",[t._v("http://shouce.jb51.net/nginx/left.html")]),t._v(" "),s("li",[t._v("https://blog.csdn.net/qq_33454884/article/details/89212702")])]),t._v(" "),s("h3",{attrs:{id:"主要配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要配置"}},[t._v("#")]),t._v(" 主要配置")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 端口")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 域名")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost  192.168.1.100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代表这是项目根目录")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       \n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 虚拟目录")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /usr/share/nginx/www")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"负载均衡配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡配置"}},[t._v("#")]),t._v(" 负载均衡配置")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("upstream")]),t._v(" 实现多台主机服务")]),t._v(" "),s("p",[s("strong",[t._v("基本用法")])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" myweb")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两个服务器")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" localhost:8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 　　\n    \t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" localhost:8081")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       \n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由对应")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://myweb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("需要对应路由才能进行访问后端指定路由")])]),t._v(" "),s("p",[s("strong",[t._v("权重")])]),t._v(" "),s("p",[t._v("根据权重进行为请求分流 , 以下配置 权重比 3 : 7 的比例进行分流")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend1.example.com weight=3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend2.example.com weight=7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("备用")])]),t._v(" "),s("p",[t._v("当其他主机不可用时才会采用 backend2")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend1.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend2.example.com backup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("健康")])]),t._v(" "),s("p",[t._v("定期健康检查 , 会将不可用会被移出服务器池!")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend1.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend2.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 健康检查")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("health_check")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 健康配置的参数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查时 , 超时时间 , 超时 标记不可用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("health_check_timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5s")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 健康时间 间隔")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("health_check_interval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10s")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求 判断状态 200(如果不是200,标记不可用)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("health_check_status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求 判断响应正文 success(如果不是success,标记不可用)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("health_check_match")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标记不可用前 , 条件 : 重检失败 3次")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("health_check_fails")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标记可用前 , 条件 : 重检成功 2次")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("health_check_healthy_threshold")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"分配策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分配策略"}},[t._v("#")]),t._v(" 分配策略")]),t._v(" "),s("p",[s("code",[t._v("upstream")]),t._v("模块 提供了一下轮询策略 :")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("轮询")])]),t._v(" "),s("p",[t._v("默认的负载均衡策略 , 每台服务器都跑一遍 , 按循序执行")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("哈希分配")])]),t._v(" "),s("p",[t._v("根据 变量 计算出hash值 , 通过hash分配请求 , 保证同一请求同一主机")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("最少连接")])]),t._v(" "),s("p",[t._v("将请求分配给当前连接数最少的服务器 , 请求会分配给最空闲的服务器")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("公平")])]),t._v(" "),s("p",[t._v("根据主机响应时长来动态调整权重 , 使得响应时间较短的服务器获得更多的请求")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("随机")])]),t._v(" "),s("p",[t._v("随机选择一台主机处理请求")])])]),t._v(" "),s("p",[s("strong",[t._v("哈希策略")])]),t._v(" "),s("p",[t._v("自定义对象Hash")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算uri的 hash值")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# consistent作用 : 保证服务器 增加/删除 的情况下 , 保证hash值稳定性")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hash")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),t._v(" consistent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend1.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend2.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("最小连接策略")])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 Least Connections 策略")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("least_conn")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend1.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend2.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("公平策略")])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 Fair 策略")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fair")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend1.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend2.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("随机策略")])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" backend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 Random 策略")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("random")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend1.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend2.example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"docker应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker应用"}},[t._v("#")]),t._v(" Docker应用")]),t._v(" "),s("p",[t._v("利用docker安装nginx实现反向代理")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装镜像 "),s("code",[t._v("nginx")])])]),t._v(" "),s("li",[s("p",[t._v("创建配置文件 (运行docker挂载的配置)")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建挂载目录")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/log\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/html\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拷贝主要配置到宿主机")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成容器")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),t._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" nginx\n\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器nginx.conf文件复制到宿主机")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/etc/nginx/nginx.conf /home/nginx/conf/nginx.conf\n \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器conf.d文件夹下内容复制到宿主机")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/etc/nginx/conf.d /home/nginx/conf/conf.d\n\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器中的html文件夹复制到宿主机")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/usr/share/nginx/html /home/nginx/\n")])])])]),t._v(" "),s("li",[s("p",[t._v("运行 Nginx容器")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9002")]),t._v(":80 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/conf/conf.d:/etc/nginx/conf.d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/log:/var/log/nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/html:/usr/share/nginx/html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" nginx:latest\n")])])])]),t._v(" "),s("li",[s("p",[t._v("访问 [IP]:9002 即可")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-name [名称]")]),t._v(" "),s("td",[t._v("命名")])]),t._v(" "),s("tr",[s("td",[t._v("-d")]),t._v(" "),s("td",[t._v("后台运行")])]),t._v(" "),s("tr",[s("td",[t._v("-p [宿主端口]:[容器端口]")]),t._v(" "),s("td",[t._v("端口映射")])]),t._v(" "),s("tr",[s("td",[t._v("-v [宿主路径]:[容器路径]")]),t._v(" "),s("td",[t._v("配置文件挂载")])]),t._v(" "),s("tr",[s("td",[t._v("nginx:latest")]),t._v(" "),s("td",[t._v("本地运行的版本")])]),t._v(" "),s("tr",[s("td",[t._v("\\")]),t._v(" "),s("td",[t._v("shell 命令换行")])])])]),t._v(" "),s("h2",{attrs:{id:"nginx-proxy-manger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-proxy-manger"}},[t._v("#")]),t._v(" Nginx Proxy Manger")]),t._v(" "),s("p",[t._v("官方 : https://nginxproxymanager.com/")]),t._v(" "),s("p",[t._v("Nginx 的进化 , 简化了Nginx操作 , 图形化UI操作")])])}),[],!1,null,null,null);s.default=e.exports}}]);