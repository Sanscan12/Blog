(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{404:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"bus-服务总线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bus-服务总线"}},[s._v("#")]),s._v(" Bus 服务总线")]),s._v(" "),t("p",[s._v("Spring Cloud Bus 是轻量的消息代理，将分布式节点连接，用于广播配置文件的更新 或 监控管理")]),s._v(" "),t("p",[t("strong",[s._v("补充说明&优点")])]),s._v(" "),t("ul",[t("li",[s._v("Bus 是轻量级消息代理")]),s._v(" "),t("li",[s._v("Bus 主要实现 配置的自动更新 （无需配置）")]),s._v(" "),t("li",[s._v("Bus 底层基于 RabbitMQ实现")]),s._v(" "),t("li",[s._v("广播配置文件、监控管理")])]),s._v(" "),t("h2",{attrs:{id:"存在问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存在问题"}},[s._v("#")]),s._v(" 存在问题")]),s._v(" "),t("p",[s._v("上篇文章的 Config配置中心 启动后，此时更改 远端仓库 中某一微服务的配置文件，是不会同步本地缓存中的配置文件。因此在某一微服务运行后是不会及时更新配置文件，而是需要重启微服务才能更新生效")]),s._v(" "),t("p",[t("strong",[s._v("问题示例")])]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("以下主要展示 更改配置不会同步的问题")]),s._v(" "),t("li",[s._v("上篇章代码测试")])])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("修改仓库 "),t("code",[s._v("user-service")]),s._v(" 微服务的配置文件 "),t("code",[s._v("user-dev.yml")])]),s._v(" "),t("p",[s._v("添加 "),t("code",[s._v("test.name")]),s._v(" 属性 (用于测试)")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud20.png",alt:""}})]),s._v(" "),t("blockquote",[t("p",[s._v("依旧应用 "),t("code",[s._v("user-service")]),s._v(" 进行测试")])])]),s._v(" "),t("li",[t("p",[s._v("修改Controller "),t("code",[s._v("user-service")]),s._v(" (在接口进行测试返回数据)")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserService")]),s._v(" service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${test.name}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("testConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//···")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("blockquote",[t("p",[s._v("添加一个接口用于返回配置中的属性name的接口")])])]),s._v(" "),t("li",[t("p",[s._v("运行测试1(查看刚刚在仓库中添加的属性)\n依次启动 "),t("code",[s._v("Eureka")]),s._v(" 、"),t("code",[s._v("config-server")]),s._v(" 、"),t("code",[s._v("user-server")]),s._v(" 三个服务\n访问 "),t("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9091/user/name"),t("OutboundLink")],1),s._v(" ，下图返回表示成功")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud21.png",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("修改仓库 "),t("code",[s._v("user-service")]),s._v(" 微服务的配置文件 "),t("code",[s._v("user-dev.yml")]),s._v("\n主要修改 "),t("code",[s._v("test.name")]),s._v(" 属性的值")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其他就不展示了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Sanscan12\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("浏览器再次访问 "),t("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9091/user/name"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("此时 配置中的 "),t("code",[s._v("test.name")]),s._v(" 属性值没有更变")])])]),s._v(" "),t("li",[t("p",[s._v("重启 "),t("code",[s._v("user-service")]),s._v(" 微服务 ，再次访问"),t("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9091/user/name"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("Git仓库中配置文件的修改并没有及时更新到 微服务，只有重启微服务才能生效")])])])]),s._v(" "),t("h2",{attrs:{id:"bus应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bus应用"}},[s._v("#")]),s._v(" Bus应用")]),s._v(" "),t("p",[t("strong",[s._v("Bus 构架图")])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud22.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("说明：")])]),s._v(" "),t("ul",[t("li",[s._v("应用前提需要安装 "),t("code",[s._v("RabbitMQ")]),s._v(" 才能实现功能")]),s._v(" "),t("li",[s._v("配置中心 需要自行暴露触发总线地址 ==/actuator/bus-refresh==")]),s._v(" "),t("li",[s._v("请求 ==/actuator/bus-refresh== 是固定的")]),s._v(" "),t("li",[s._v("当配置中心微服务接收到 ==/actuator/bus-refresh== 请求时，向 "),t("code",[s._v("RabbitMQ")]),s._v("发送配置改变消息，这时也会更新本地缓存")]),s._v(" "),t("li",[s._v("微服务 会监听 "),t("code",[s._v("RabbitMQ")]),s._v(" ，如果坚监听到有仓库配置改变的消息，会重新读取本地缓存中的配置文件（实现不用重启提醒更新的效果）")])]),s._v(" "),t("p",[t("strong",[s._v("应用示例")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("首先安装 "),t("code",[s._v("RabbitMQ")]),s._v(" ，安装即可无需配置")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("config-server")]),s._v(" 添加 Bus依赖")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- Bus --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-bus"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-stream-binder-rabbit"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("config-server")]),s._v(" 添加配置 "),t("code",[s._v("application.yml")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ···")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 rabbitmq信息，如果都是与默认值一致无需配置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rabbitmq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" guest\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" guest\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("management")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exposure")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露触发消息总线的地址 ")]),s._v("\n            \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# POST /actuator/bus-refresh")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("refresh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("blockquote",[t("p",[s._v("消息总线的地址，主要用途在触发更新配置的请求！")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("user-service")]),s._v(" 添加依赖 Bus、监控管理")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- Bus 监听 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-bus"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-stream-binder-rabbit"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.boot"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-boot-starter-actuator"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("user-service")]),s._v(" 添加配置 "),t("code",[s._v("bootstrap.yml")]),s._v(" (配置与默认一致可跳过)")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ....")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 rabbitmq信息，如果都是与默认值一致无需配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rabbitmq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" guest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" guest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("user-service")]),s._v(" 修改 "),t("code",[s._v("UserController")]),s._v(" 添加注解 "),t("code",[s._v("@RefreshScope")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RefreshScope")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动刷新配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ....")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("测试")]),s._v(" "),t("ol",[t("li",[s._v("依次启动 "),t("code",[s._v("Eureka")]),s._v(" 、"),t("code",[s._v("config-server")]),s._v(" 、"),t("code",[s._v("user-server")]),s._v(" 三个服务")]),s._v(" "),t("li",[s._v("访问 "),t("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9091/user/name"),t("OutboundLink")],1),s._v(" ，查看页面返回的属性值")]),s._v(" "),t("li",[s._v("修改 Git仓库 "),t("code",[s._v("user-service")]),s._v(" 微服务的配置文件 "),t("code",[s._v("user-dev.yml")]),s._v("\n主要修改 "),t("code",[s._v("test.name")]),s._v(" 属性的值 （值可以随意，自要展示效果即可）")]),s._v(" "),t("li",[s._v("POST请求：http://localhost:14000/actuator/bus-refresh （配置中心的端口 14000）触发消息总线进行刷新配置")]),s._v(" "),t("li",[s._v("重新访问 "),t("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9091/user/name"),t("OutboundLink")],1),s._v(" （返回更改后的值表示成功）")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("说明：")]),s._v(" POST请求可通过 "),t("a",{attrs:{href:"https://blog.csdn.net/weixin_45963193/article/details/121071169",target:"_blank",rel:"noopener noreferrer"}},[s._v("IDEA内置HTTP调用"),t("OutboundLink")],1),s._v(" （善用Ctrl+F）")])])])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("仓库代码 : "),t("a",{attrs:{href:"https://gitee.com/Sanscan12/spring-cloud-examples.git",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gitee.com/Sanscan12/spring-cloud-examples.git"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("官方文档 : "),t("a",{attrs:{href:"https://www.springcloud.cc/spring-cloud-bus.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Spring Cloud Bus 参考手册 "),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);