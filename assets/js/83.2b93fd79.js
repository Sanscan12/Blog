(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{421:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bus-服务总线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bus-服务总线"}},[t._v("#")]),t._v(" Bus 服务总线")]),t._v(" "),s("p",[t._v("Spring Cloud Bus 是轻量的消息代理，将分布式节点连接，用于广播配置文件的更新 或 监控管理")]),t._v(" "),s("p",[s("strong",[t._v("补充说明&优点")])]),t._v(" "),s("ul",[s("li",[t._v("Bus 是轻量级消息代理")]),t._v(" "),s("li",[t._v("Bus 主要实现 配置的自动更新 （无需配置）")]),t._v(" "),s("li",[t._v("Bus 底层基于 RabbitMQ实现")]),t._v(" "),s("li",[t._v("广播配置文件、监控管理")])]),t._v(" "),s("h2",{attrs:{id:"存在问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在问题"}},[t._v("#")]),t._v(" 存在问题")]),t._v(" "),s("p",[t._v("上篇文章的 Config配置中心 启动后，此时更改 远端仓库 中某一微服务的配置文件，是不会同步本地缓存中的配置文件。因此在某一微服务运行后是不会及时更新配置文件，而是需要重启微服务才能更新生效")]),t._v(" "),s("p",[s("strong",[t._v("问题示例")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("以下主要展示 更改配置不会同步的问题")]),t._v(" "),s("li",[t._v("上篇章代码测试")])])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("修改仓库 "),s("code",[t._v("user-service")]),t._v(" 微服务的配置文件 "),s("code",[t._v("user-dev.yml")])]),t._v(" "),s("p",[t._v("添加 "),s("code",[t._v("test.name")]),t._v(" 属性 (用于测试)")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud20.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("依旧应用 "),s("code",[t._v("user-service")]),t._v(" 进行测试")])])]),t._v(" "),s("li",[s("p",[t._v("修改Controller "),s("code",[t._v("user-service")]),t._v(" (在接口进行测试返回数据)")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${test.name}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//···")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("添加一个接口用于返回配置中的属性name的接口")])])]),t._v(" "),s("li",[s("p",[t._v("运行测试1(查看刚刚在仓库中添加的属性)\n依次启动 "),s("code",[t._v("Eureka")]),t._v(" 、"),s("code",[t._v("config-server")]),t._v(" 、"),s("code",[t._v("user-server")]),t._v(" 三个服务\n访问 "),s("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9091/user/name"),s("OutboundLink")],1),t._v(" ，下图返回表示成功")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud21.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("修改仓库 "),s("code",[t._v("user-service")]),t._v(" 微服务的配置文件 "),s("code",[t._v("user-dev.yml")]),t._v("\n主要修改 "),s("code",[t._v("test.name")]),t._v(" 属性的值")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其他就不展示了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Sanscan12\n")])])])]),t._v(" "),s("li",[s("p",[t._v("浏览器再次访问 "),s("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9091/user/name"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("此时 配置中的 "),s("code",[t._v("test.name")]),t._v(" 属性值没有更变")])])]),t._v(" "),s("li",[s("p",[t._v("重启 "),s("code",[t._v("user-service")]),t._v(" 微服务 ，再次访问"),s("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9091/user/name"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("Git仓库中配置文件的修改并没有及时更新到 微服务，只有重启微服务才能生效")])])])]),t._v(" "),s("h2",{attrs:{id:"bus应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bus应用"}},[t._v("#")]),t._v(" Bus应用")]),t._v(" "),s("p",[s("strong",[t._v("Bus 构架图")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud22.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("说明：")])]),t._v(" "),s("ul",[s("li",[t._v("应用前提需要安装 "),s("code",[t._v("RabbitMQ")]),t._v(" 才能实现功能")]),t._v(" "),s("li",[t._v("配置中心 需要自行暴露触发总线地址 ==/actuator/bus-refresh==")]),t._v(" "),s("li",[t._v("请求 ==/actuator/bus-refresh== 是固定的")]),t._v(" "),s("li",[t._v("当配置中心微服务接收到 ==/actuator/bus-refresh== 请求时，向 "),s("code",[t._v("RabbitMQ")]),t._v("发送配置改变消息，这时也会更新本地缓存")]),t._v(" "),s("li",[t._v("微服务 会监听 "),s("code",[t._v("RabbitMQ")]),t._v(" ，如果坚监听到有仓库配置改变的消息，会重新读取本地缓存中的配置文件（实现不用重启提醒更新的效果）")])]),t._v(" "),s("p",[s("strong",[t._v("应用示例")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("首先安装 "),s("code",[t._v("RabbitMQ")]),t._v(" ，安装即可无需配置")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("config-server")]),t._v(" 添加 Bus依赖")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Bus --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-bus"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-stream-binder-rabbit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("config-server")]),t._v(" 添加配置 "),s("code",[t._v("application.yml")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ···")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 rabbitmq信息，如果都是与默认值一致无需配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rabbitmq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guest\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guest\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exposure")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暴露触发消息总线的地址 ")]),t._v("\n            \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# POST /actuator/bus-refresh")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("refresh\n")])])]),s("blockquote",[s("p",[t._v("消息总线的地址，主要用途在触发更新配置的请求！")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("user-service")]),t._v(" 添加依赖 Bus、监控管理")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Bus 监听 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-bus"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-stream-binder-rabbit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-actuator"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("user-service")]),t._v(" 添加配置 "),s("code",[t._v("bootstrap.yml")]),t._v(" (配置与默认一致可跳过)")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ....")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 rabbitmq信息，如果都是与默认值一致无需配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rabbitmq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guest\n")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("user-service")]),t._v(" 修改 "),s("code",[t._v("UserController")]),t._v(" 添加注解 "),s("code",[t._v("@RefreshScope")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RefreshScope")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动刷新配置文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("测试")]),t._v(" "),s("ol",[s("li",[t._v("依次启动 "),s("code",[t._v("Eureka")]),t._v(" 、"),s("code",[t._v("config-server")]),t._v(" 、"),s("code",[t._v("user-server")]),t._v(" 三个服务")]),t._v(" "),s("li",[t._v("访问 "),s("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9091/user/name"),s("OutboundLink")],1),t._v(" ，查看页面返回的属性值")]),t._v(" "),s("li",[t._v("修改 Git仓库 "),s("code",[t._v("user-service")]),t._v(" 微服务的配置文件 "),s("code",[t._v("user-dev.yml")]),t._v("\n主要修改 "),s("code",[t._v("test.name")]),t._v(" 属性的值 （值可以随意，自要展示效果即可）")]),t._v(" "),s("li",[t._v("POST请求：http://localhost:14000/actuator/bus-refresh （配置中心的端口 14000）触发消息总线进行刷新配置")]),t._v(" "),s("li",[t._v("重新访问 "),s("a",{attrs:{href:"http://localhost:9091/user/name",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9091/user/name"),s("OutboundLink")],1),t._v(" （返回更改后的值表示成功）")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("说明：")]),t._v(" POST请求可通过 "),s("a",{attrs:{href:"https://blog.csdn.net/weixin_45963193/article/details/121071169",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDEA内置HTTP调用"),s("OutboundLink")],1),t._v(" （善用Ctrl+F）")])])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("仓库代码 : "),s("a",{attrs:{href:"https://gitee.com/Sanscan12/spring-cloud-examples.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/Sanscan12/spring-cloud-examples.git"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("官方文档 : "),s("a",{attrs:{href:"https://www.springcloud.cc/spring-cloud-bus.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Bus 参考手册 "),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);