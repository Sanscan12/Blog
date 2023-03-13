(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{433:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("官网：https://www.docker.com/")]),t._v(" "),a("p",[t._v("docker是种容器技术，能够解决环境迁移问题")]),t._v(" "),a("ul",[a("li",[t._v("开源应用容器")]),t._v(" "),a("li",[t._v("基于Go语言实现")]),t._v(" "),a("li",[t._v("轻量级、可移植")]),t._v(" "),a("li",[t._v("沙箱机制隔离")])]),t._v(" "),a("p",[a("strong",[t._v("功能")])]),t._v(" "),a("ul",[a("li",[t._v("解决代码执行的环境兼容问题")]),t._v(" "),a("li",[t._v("软件打包环境直接应用")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h3",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),a("p",[a("strong",[t._v("安装步骤：")])]),t._v(" "),a("ol",[a("li",[t._v("安装Docker")]),t._v(" "),a("li",[t._v("安装组件软件包")]),t._v(" "),a("li",[t._v("配置阿里云镜像加速（自己的")])]),t._v(" "),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、yum 包更新到最新")]),t._v("\nyum update\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" yum-utils device-mapper-persistent-data lvm2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3、 设置yum源")]),t._v("\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4、 安装docker，出现输入的界面都按 y")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" docker-ce\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5、 查看docker版本，验证是否验证成功")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])]),a("h3",{attrs:{id:"镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[t._v("#")]),t._v(" 镜像加速")]),t._v(" "),a("p",[t._v("镜像加速JSON文件需要手动配置\n镜像配置：https://developer.aliyun.com/article/110806")]),t._v(" "),a("p",[a("strong",[t._v("阿里云镜像配置")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("登录阿里云 "),a("strong",[t._v("镜像服务模块")]),t._v(" -> "),a("strong",[t._v("镜像加速")]),t._v(" -> 复制操作文档的镜像配置，如：(个人专属镜像加速")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://xd43lwzc.mirror.aliyuncs.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("进入路径 ==/etc/docker/daemon.json== (没有则创建")])]),t._v(" "),a("li",[a("p",[t._v("编辑 "),a("code",[t._v("daemon.json")]),t._v(" 复制添加以上配置")])]),t._v(" "),a("li",[a("p",[t._v("重启 Docker\n==systemctl restart docker==")])]),t._v(" "),a("li",[a("p",[t._v("检查配置镜像 。查看参数 ==docker info== (存在以下配置说明配置成功")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Registry Mirrors:\nhttps://xd43lwzc.mirror.aliyuncs.com/\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),a("p",[t._v("官方文档：https://docs.docker.com/reference/")]),t._v(" "),a("p",[t._v("一键查看命令：==docker==\n命令查看详细：==docker {命令前缀} --help==")]),t._v(" "),a("h3",{attrs:{id:"进程相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程相关"}},[t._v("#")]),t._v(" 进程相关")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("启动docker服务")]),t._v("\n==systemctl start docker==")]),t._v(" "),a("li",[a("strong",[t._v("关闭docker服务")]),t._v("\n==systemctl stop docker==")]),t._v(" "),a("li",[a("strong",[t._v("重启docker服务")]),t._v("\n==systemctl restart docker==")]),t._v(" "),a("li",[a("strong",[t._v("查看docker状态")]),t._v("\n==systemctl status docker==")]),t._v(" "),a("li",[a("strong",[t._v("开机自启docker服务")]),t._v("\n==systemctl enable docker==")])]),t._v(" "),a("h3",{attrs:{id:"镜像相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关"}},[t._v("#")]),t._v(" 镜像相关")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("查看镜像")]),t._v("（查看本地镜像\n==docker images== 查看所有镜像\n==docker images -q== 查看所有镜像id")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("搜索镜像")]),t._v("\n==docker search redis== 查找redis镜像")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("下载镜像")]),t._v("\n==docker pull redis== 下载最新版本Redis\n==docker pull redis:5.0== 下载5.0版本Redis")]),t._v(" "),a("blockquote",[a("p",[t._v("如果需要了解指定下载的版本：(搜索版本\nhttps://hub.docker.com/")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("删除镜像")]),t._v("\n==docker rmi {镜像id}==  删除指定本地镜像\n==docker rmi "),a("code",[t._v("docker images -q")]),t._v("== 删除所有镜像")])])]),t._v(" "),a("h3",{attrs:{id:"容器相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器相关"}},[t._v("#")]),t._v(" 容器相关")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("容器查看")]),t._v("\n==docker ps== 查看所有正在运行容器\n==docker ps -a== 查看所有容器\n==docker ps -aq== 查看所有容器id\n==docker port {name/id}== 查看容器端口")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("查看容器详细")]),t._v("\n==docker inspect {name/id}==")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("容器创建")]),t._v("\n==docker run {参数}==")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-i")]),t._v("：保持容器运行")]),t._v(" "),a("li",[a("code",[t._v("-t")]),t._v("：为容器分配一个为输入终端")]),t._v(" "),a("li",[a("code",[t._v("-d")]),t._v("：以守护线程模式运行")]),t._v(" "),a("li",[a("code",[t._v("--name")]),t._v("：为容器命名")])]),t._v(" "),a("p",[a("strong",[t._v("创建交互式容器")]),t._v("\n创建自动进入容器，退出自动关闭容器\n==docker run -it --name=c1 redis:5.0 /bin/bash==\n创建 redis:5.0 镜像且名称为c1的容器，并初始化指令至 /bin/bash")]),t._v(" "),a("blockquote",[a("p",[t._v("进入容器终端需要手动退出 "),a("code",[t._v("exit")])])]),t._v(" "),a("p",[a("strong",[t._v("创建守护容器")]),t._v("\n容器后台启动需要手动进入\n==docker run -id --name=c2 mysql /bin/bash==")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("容器进入")]),t._v("\n==docker exec -it {容器 name/id} /bin/bash==")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("容器退出")]),t._v("\n==exit== / 快捷键==Ctrl+Q+P==")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("容器启动")]),t._v("\n==docker start [容器 name/id]==")]),t._v(" "),a("blockquote",[a("p",[t._v("如果是交互式容器，启动后会转变为守护线程")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("容器停止")]),t._v("\n==docker stop {容器 name/id}==")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("容器删除")]),t._v("\n==docker rm {容器 name/id}== 删除指定容器\n==docker rm "),a("code",[t._v("docker ps -aq")]),t._v("== 删除所有容器")]),t._v(" "),a("blockquote",[a("p",[t._v("如果容器处于运行状态，则需要停止容器才能进行删除")])])])]),t._v(" "),a("h2",{attrs:{id:"数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[t._v("#")]),t._v(" 数据卷")]),t._v(" "),a("p",[t._v("数据源是容器挂载运行的媒介")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker01.png"}}),t._v(" "),a("p",[a("strong",[t._v("数据卷概念：")])]),t._v(" "),a("ul",[a("li",[t._v("数据卷是宿主机中的一个 目录/文件")]),t._v(" "),a("li",[t._v("但容器 目录和数据卷 绑定后，会立马同步")]),t._v(" "),a("li",[t._v("一个数据卷可同时挂载多个容器")]),t._v(" "),a("li",[t._v("一个容器可被多个数据卷挂载")])]),t._v(" "),a("p",[a("strong",[t._v("数据卷作用：")])]),t._v(" "),a("ul",[a("li",[t._v("容器数据 持久化")]),t._v(" "),a("li",[t._v("外部机器和容器通信的媒介")]),t._v(" "),a("li",[t._v("容器之间的数据交互")])]),t._v(" "),a("blockquote",[a("p",[t._v("PS：容器不能直接与外部机器直接通信，需要依赖宿主机通信交互")])]),t._v(" "),a("h3",{attrs:{id:"数据卷配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据卷配置"}},[t._v("#")]),t._v(" 数据卷配置")]),t._v(" "),a("p",[t._v("创建启动容器时 ，可通过 "),a("code",[t._v("-v")]),t._v("参数 设置数据卷")]),t._v(" "),a("p",[t._v("==docker run ... -v {主机目录}:{容器目录} ...==")]),t._v(" "),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("ul",[a("li",[t._v("容器目录必须为绝对路径")]),t._v(" "),a("li",[t._v("如果目录不存在，会自动创建")]),t._v(" "),a("li",[t._v("可以挂载多个数据卷")])]),t._v(" "),a("p",[a("strong",[t._v("示例：")]),t._v("\n创建容器 c1 挂载到 宿主机/root/data目录 挂载到 容器/root/data_container目录，并初始化指令 /bin/bash\n==docker run -it --name=c1 -v /root/data:/root/data_container mysql /bin/bash==")]),t._v(" "),a("blockquote",[a("p",[t._v("在容器创建的数据会持久化，即便是 停止/删除 容器 文件仍然会存在")])]),t._v(" "),a("p",[a("strong",[t._v("一个容器挂载多个数据卷")])]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[t._v("docker run -it --name=c2 \\\n-v ~/data2:/root/data2 \\\n-v ~/dtaa3:/root/data3 \\\nmysql /bin/bash\n")])])]),a("blockquote",[a("p",[a("code",[t._v("\\")]),t._v("换行作用")])]),t._v(" "),a("p",[a("strong",[t._v("多个容器挂载同一个数据卷")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c3 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /root/data:/root/data6 mysql /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c4 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /root/data:/root/data6 mysql /bin/bash\n")])])]),a("blockquote",[a("p",[t._v("两个容器共享一个数据卷数据访问和修改也会跟随更改（仅限于该数据卷内的数据同步")])]),t._v(" "),a("h3",{attrs:{id:"数据卷容器配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据卷容器配置"}},[t._v("#")]),t._v(" 数据卷容器配置")]),t._v(" "),a("p",[t._v("多容器进行数据交互，多个容器挂载在同一数据卷容器，完成数据交互（将容器挂载到同一管理的容器进行同步数据卷")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker02.png"}}),t._v(" "),a("blockquote",[a("p",[t._v("container c3 作为容器同步卷 进行同步 c1 、c2 数据卷")])]),t._v(" "),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建启动c3数据卷容器\n==docker run -it --name=c3 -v /volume mysql /bin/bash==")]),t._v(" "),a("blockquote",[a("p",[t._v("这里没有指定宿主目录，默认生成目录。查询容器详细：（可得知容器宿主目录\n==docker inspect c3== （关注："),a("code",[t._v("Mounts")]),t._v("键集合对象中的 "),a("code",[t._v("Source")]),t._v("键")])])]),t._v(" "),a("li",[a("p",[t._v("启动创建c1、c2容器，使用 "),a("code",[t._v("--volumes-from")]),t._v("参数 设置数据卷")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c1 --volumes-from c3 mysql /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c2 --volumes-from c3 mysql /bin/bash\n")])])])]),t._v(" "),a("li",[a("p",[t._v("进入 "),a("code",[t._v("/volume")]),t._v("目录 测试同步")])])]),t._v(" "),a("blockquote",[a("p",[t._v("使用c3数据卷容器创建 c1、c2，如果c3关闭也不影响c1和c2的数据交互")])]),t._v(" "),a("h2",{attrs:{id:"应用部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用部署"}},[t._v("#")]),t._v(" 应用部署")]),t._v(" "),a("p",[t._v("Docker应用部署容器需要了解一下几点：")]),t._v(" "),a("ul",[a("li",[t._v("应用前提都是提前下载镜像再部署应用")]),t._v(" "),a("li",[t._v("容器不能直接与外部机器进行通信")]),t._v(" "),a("li",[t._v("外部机可以和宿主机进行通信；且宿主机也可和容器通信")]),t._v(" "),a("li",[t._v("容器访问外部机需要宿主机调配映射端口与外部机通信")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker03.png"}}),t._v(" "),a("blockquote",[a("p",[t._v("容器(3306) --- 外部机器(3307)\n宿主机调配端口映射可以间接的通信")])]),t._v(" "),a("p",[t._v("通过官网查找镜像 : https://hub.docker.com/")]),t._v(" "),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),a("p",[a("strong",[t._v("部署步骤：")])]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("创建容器目录")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在/root目录下创建mysql目录用于存储mysql数据信息")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/mysql\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/mysql\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("创建容器，并设置 端口/目录 映射")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3307")]),t._v(":3306 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c_mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/conf:/etc/mysql/conf.d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/logs:/logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nmysql:5.6\n")])])]),a("p",[a("strong",[t._v("参数说明：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("-p 3307:3306")]),t._v("：将 容器3306端口 对应宿主的 3307端口")]),t._v(" "),a("li",[a("strong",[t._v("-v $PWD/conf:/etc/mysql/conf.d")]),t._v("：主机当前/conf目录下创建数据卷 （pwd当前目录路径")]),t._v(" "),a("li",[t._v("confg配置目录 / logs日志目录 / data数据目录")]),t._v(" "),a("li",[a("strong",[t._v("-e MYSQL_ROOT_PASSWORD=123456")]),t._v("：配置参数，初始化root用户密码")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("进入容器操作")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行启动容器")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" c_mysql /bin/bash\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入mysql")]),t._v("\n mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-uroot")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p123456")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("外部连接测试")])]),t._v(" "),a("p",[t._v("虚拟机IP + 端口3307 即可访问 mysql容器")])])]),t._v(" "),a("h3",{attrs:{id:"tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[t._v("#")]),t._v(" Tomcat")]),t._v(" "),a("p",[a("strong",[t._v("部署步骤：")])]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("创建容器目录")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在/root目录下创建tomcat目录用于存储tomcat数据信息")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/tomcat\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/tomcat\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("创建容器，并设置 端口/目录 映射")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c_tomcat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(":8080 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v(":/usr/local/tomcat/webapps "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\ntomcat\n")])])]),a("blockquote",[a("p",[t._v("参数的详细说明可以参考mysql配置")])])]),t._v(" "),a("li",[a("p",[t._v("为容器数据卷 添加页面内容")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /test\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" index.html\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加H5页面内容保存即可")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("外部机访问 IP+端口8080\n==IP:8080/test/index.html== / ==IP:8080/test/== (Tomcat默认应用index.html")])])]),t._v(" "),a("blockquote",[a("p",[t._v("应用Web内容时，只需为容器数据卷添加Web内容信息启动容器即可")])]),t._v(" "),a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装镜像 "),a("code",[t._v("nginx")])])]),t._v(" "),a("li",[a("p",[t._v("创建配置文件 (运行docker挂载的配置)")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建挂载目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /home/nginx/html\n")])])])]),t._v(" "),a("li",[a("p",[t._v("拷贝主要配置到宿主机")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成容器")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),t._v(":80 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器nginx.conf文件复制到宿主机")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/etc/nginx/nginx.conf /home/nginx/conf/nginx.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器conf.d文件夹下内容复制到宿主机")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/etc/nginx/conf.d /home/nginx/conf/conf.d\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将容器中的html文件夹复制到宿主机")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" nginx:/usr/share/nginx/html /home/nginx/\n")])])])]),t._v(" "),a("li",[a("p",[t._v("运行 Nginx容器")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9002")]),t._v(":80 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/conf/conf.d:/etc/nginx/conf.d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/log:/var/log/nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /home/nginx/html:/usr/share/nginx/html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" nginx:latest\n")])])])]),t._v(" "),a("li",[a("p",[t._v("访问 [IP]:9002 即可")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-name [名称]")]),t._v(" "),a("td",[t._v("命名")])]),t._v(" "),a("tr",[a("td",[t._v("-d")]),t._v(" "),a("td",[t._v("后台运行")])]),t._v(" "),a("tr",[a("td",[t._v("-p [宿主端口]:[容器端口]")]),t._v(" "),a("td",[t._v("端口映射")])]),t._v(" "),a("tr",[a("td",[t._v("-v [宿主路径]:[容器路径]")]),t._v(" "),a("td",[t._v("配置文件挂载")])]),t._v(" "),a("tr",[a("td",[t._v("nginx:latest")]),t._v(" "),a("td",[t._v("本地运行的版本")])]),t._v(" "),a("tr",[a("td",[t._v("\\")]),t._v(" "),a("td",[t._v("shell 命令换行")])])])]),t._v(" "),a("h3",{attrs:{id:"rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[t._v("#")]),t._v(" RabbitMQ")]),t._v(" "),a("p",[t._v("docker官方 : https://hub.docker.com/_/rabbitmq")]),t._v(" "),a("p",[a("strong",[t._v("部署步骤：")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("官网查找RabbitMQ")])]),t._v(" "),a("li",[a("p",[t._v("建议下载含有Web管理页 , 镜像中带有 "),a("code",[t._v("mangement")]),t._v("版本的 , 并拉取下载")])]),t._v(" "),a("li",[a("p",[t._v("启动docker容器")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[t._v("docker run -d --name [容器名称]  \\\n-p 5672:5672  \\\n-p 15672:15672  \\\n-v `pwd`/data:/home/rabbitmq  \\\n--hostname [节点名称]  \\\n-e RABBITMQ_DEFAULT_USER=admin  \\\n-e RABBITMQ_DEFAULT_PASS=admin rabbitmq:[tag标签] \\\n")])])]),a("p",[t._v("我个人的应用方式 (端口小修一下)")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[t._v("docker run -d --name rabbitmq03  \\\n-p 5674:5672  \\\n-p 15674:15672  \\\n-v `pwd`/data:/home/rabbitmq  \\\n--hostname node03  \\\n-e RABBITMQ_DEFAULT_USER=admin  \\\n-e RABBITMQ_DEFAULT_PASS=admin  \\\nrabbitmq:3.11.10-management\n")])])])]),t._v(" "),a("li",[a("p",[t._v("查看界面 ip+15672端口  http://ip:15672/")])])]),t._v(" "),a("p",[a("strong",[t._v("选项说明 :")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("选项")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-d")]),t._v(" "),a("td",[t._v("后台运行")])]),t._v(" "),a("tr",[a("td",[t._v("--name")]),t._v(" "),a("td",[t._v("指定容器名称")])]),t._v(" "),a("tr",[a("td",[t._v("-p")]),t._v(" "),a("td",[t._v("指定端口 [外部端口]:[容器端口] (5672:连接访问; 15672: Web管理页)")])]),t._v(" "),a("tr",[a("td",[t._v("-v")]),t._v(" "),a("td",[t._v("映射 目录/文件")])]),t._v(" "),a("tr",[a("td",[t._v("--hostname")]),t._v(" "),a("td",[t._v("主机名 (较为重要 集群作为 "),a("strong",[t._v("节点名称")]),t._v(" 使用)")])]),t._v(" "),a("tr",[a("td",[t._v("-e")]),t._v(" "),a("td",[t._v("指定环境变量 (默认账号密码)")])])])]),t._v(" "),a("h3",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),a("p",[a("strong",[t._v("部署步骤：")])]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("创建容器，设置端口映射")])]),t._v(" "),a("p",[t._v("==docker run -id --name=c_redis -p 6379:6379 redis:5.0==")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("使用外部机器连接redis")]),t._v(" （对应IP+端口即可")])])]),t._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),a("p",[t._v("Dockerfild 是一个用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取"),a("code",[t._v("Dockerfile")]),t._v("中的指令自动生成映像")]),t._v(" "),a("h3",{attrs:{id:"镜像原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像原理"}},[t._v("#")]),t._v(" 镜像原理")]),t._v(" "),a("p",[t._v("镜像原理先从文件管理进行讲述")]),t._v(" "),a("p",[a("strong",[t._v("Liunx文件管理系统")])]),t._v(" "),a("p",[t._v("Linux文件系统由 "),a("strong",[t._v("bootfs")]),t._v(" 和 "),a("strong",[t._v("rootfs")]),t._v(" 组成\nPS：不同发行版本，rootfs也不同，而rootfs基本不变")]),t._v(" "),a("ul",[a("li",[t._v("bootfs：包含Bootloader(引导加载程序) 和 kernel(内核)")]),t._v(" "),a("li",[t._v("rootfs：root文件系统，包含有 /dev，/proc，/bin，/etc等")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker04.png"}}),t._v(" "),a("p",[a("strong",[t._v("docker镜像文件管理")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://image.bozhu12.cc/myblog/docker/docker05.png"}}),t._v(" "),a("p",[a("strong",[t._v("Docker镜像原理")])]),t._v(" "),a("ul",[a("li",[t._v("Docker镜像有特殊的文件系统叠加而成")]),t._v(" "),a("li",[t._v("最低端是 bootfs，并使用宿主机的bootfs，往上则是镜像文件")]),t._v(" "),a("li",[t._v("文件系统的统一，将不同的文件层整合一个文件系统，提供统一的视角，隐藏多层的存在，在用户角度来看只有一个文件系统")]),t._v(" "),a("li",[t._v("另一往下的镜像称为 "),a("strong",[t._v("父镜像")]),t._v("，最底层则为 "),a("strong",[t._v("基础镜像")])]),t._v(" "),a("li",[t._v("当启动容器时，Docker会在最顶层加载读取文件作为容器")])]),t._v(" "),a("blockquote",[a("p",[t._v("总结：Docker镜像的本质是一个分层的文件系统")])]),t._v(" "),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("ul",[a("li",[t._v("Docker镜像会在不同层级可能会对父产生依赖")]),t._v(" "),a("li",[t._v("镜像文件不能以本身决定大小，会复用 父镜像/系统 已有数据")])]),t._v(" "),a("h3",{attrs:{id:"镜像制作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像制作"}},[t._v("#")]),t._v(" 镜像制作")]),t._v(" "),a("h4",{attrs:{id:"容器转镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器转镜像"}},[t._v("#")]),t._v(" 容器转镜像")]),t._v(" "),a("p",[t._v("镜像创建可写容器进行生成镜像——>压缩镜像——>应用")]),t._v(" "),a("p",[a("strong",[t._v("步骤命令解释：")])]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成镜像")]),t._v("\ndocker commit {容器id} {容器名称}:{版本号} \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 压缩文件")]),t._v("\ndocker save -o {压缩文件名称} {镜像名称}:{版本号}\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载应用镜像")]),t._v("\ndocker load -i {压缩文件}\n")])])]),a("blockquote",[a("p",[t._v("容器转镜像 不包括数据卷数据，只封装容器数据")])]),t._v(" "),a("p",[a("strong",[t._v("步骤示例：")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据卷")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/c_tomcat\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/c_tomcat\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建tomcat镜像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c_tomcat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(":8080 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v(":/usr/local/tomcat/webapps "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\ntomcat\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入tomcat镜像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" c_tomcat /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建a.txt b.txt （该文件用于封装镜像给测试人看的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" a.txt b.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器转镜像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" commit 28b8d4dc9744 lxs_tomcat:1.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 压缩镜像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" save "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" lxs_tomcat.tar lxs_tomcat:1.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除 容器/镜像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" c_tomcat\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" rmi lxs_tomcat:1.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从压缩文件加载镜像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" load "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" lxs_tomcat.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 产生镜像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("new_tomcat lxs_tomcat:1.0 /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#进入查看内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" c_tomcat /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以看到a.txt b.txt存在，而webapps/test不存在")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);