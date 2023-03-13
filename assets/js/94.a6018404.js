(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{432:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux搭建"}},[s._v("#")]),s._v(" Linux搭建")]),s._v(" "),a("h2",{attrs:{id:"安装-jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-jdk"}},[s._v("#")]),s._v(" 安装 JDK")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("上传JDK压缩文件，放置 根目录创建的 "),a("code",[s._v("mysoft")]),s._v(" 文件夹")])]),s._v(" "),a("li",[a("p",[s._v("解压 (解压至当前目录)")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("测试jdk安装。进入jdk的bin目录进行验证 (返回版本号表示成功)")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./java "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-version")]),s._v(" \n")])])]),a("blockquote",[a("p",[s._v("注意：在jdk的bin目录下执行java命令，前面要有 "),a("code",[s._v(".")]),s._v(" 符号")])])]),s._v(" "),a("li",[a("p",[s._v("配置环境变量 ，添加变量 "),a("code",[s._v("JAVA_HOME")]),s._v("、"),a("code",[s._v("PATH")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 在最下面添加 两个变量 注意jdk的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/mysoft/jdk1.8.0_11\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin\n")])])])]),s._v(" "),a("li",[a("p",[s._v("使环境变量生效")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n\n")])])])]),s._v(" "),a("li",[a("p",[s._v("测试环境配置 (返回预期的bin目录即可)")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在任意路径测试java命令 (返回版本号代表成功)")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-version")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"安装-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql"}},[s._v("#")]),s._v(" 安装 MySQL")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("检测是否自带安装MySQL")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum list installed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])])])]),s._v(" "),a("li",[a("p",[s._v("删除系统自带的sql及其依赖 (以防后面冲突)")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" remove mysql-libs.x86_64\n")])])])]),s._v(" "),a("li",[a("p",[s._v("添加rpm源")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm\n")])])])]),s._v(" "),a("li",[a("p",[s._v("安装第一步下载的rpm文件 (出现许可输入"),a("code",[s._v("y")]),s._v(" 即可")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-release-el6-5.noarch.rpm\n")])])])]),s._v(" "),a("li",[a("p",[s._v("查看MySQL是否下载 ，列出所有yum repo文件")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum repolist enabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])])])]),s._v(" "),a("li",[a("p",[s._v("使用yum安装MySQL （输入3次 "),a("code",[s._v("y")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server\n")])])])]),s._v(" "),a("li",[a("p",[s._v("启动MySQL服务")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld start\n")])])])]),s._v(" "),a("li",[a("p",[s._v("查看是否自动启动并启动")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysqld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" mysqld on\n")])])]),a("blockquote",[a("p",[s._v("看到3、4、5状态为开或者为 on 则表示成功")])])]),s._v(" "),a("li",[a("p",[s._v("修改字符集为UTF-8")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 1. 在 [mysqld] 下面添加：")]),s._v("\ncharacter-set-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 2. 在末尾 [client] 添加：(client没有自行添加)")]),s._v("\ndefault-character-set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n")])])])]),s._v(" "),a("li",[a("p",[s._v("重启服务")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart\n")])])])]),s._v(" "),a("li",[a("p",[s._v("修改默认配置")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mysql_secure_installation\n")])])]),a("blockquote",[a("p",[s._v("此步骤可设置密码，root用户密码可自行设置。此处输入内容依次为："),a("code",[s._v("y")]),s._v("、"),a("code",[s._v("y")]),s._v("、"),a("code",[s._v("n")]),s._v("、"),a("code",[s._v("y")]),s._v("、"),a("code",[s._v("y")])])])]),s._v(" "),a("li",[a("p",[s._v("授权远程登录，通过改表实现")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 上号\nmysql -uroot -p\n# 选中库\n>use mysql;\n# 修改表数据\n>update user set host = '%' where user = 'root' and host='localhost';\n# 允许外网访问\n>grant all privileges on *.* to 'root'@'%' identified by 'PANZER' with grant option;\n# 刷新MySQL的系统权限相关表\n>flush privileges;\n")])])])])]),s._v(" "),a("blockquote",[a("p",[s._v("如果连接还出现异常，请检查 ：")]),s._v(" "),a("ul",[a("li",[s._v("授权问题")]),s._v(" "),a("li",[s._v("是否刷新权限表")]),s._v(" "),a("li",[s._v("是否关闭防火墙 或 允许访问")])])]),s._v(" "),a("h2",{attrs:{id:"安装-tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-tomcat"}},[s._v("#")]),s._v(" 安装 Tomcat")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装JDK")])]),s._v(" "),a("li",[a("p",[s._v("上传Tomcat压缩包到 根目录的 "),a("code",[s._v("mysoft")]),s._v(" 文件夹")])]),s._v(" "),a("li",[a("p",[s._v("解压")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xzvf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("进入bin目录启动Tomcat")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" startup.sh\n")])])])]),s._v(" "),a("li",[a("p",[s._v("关闭防火墙")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙状态")]),s._v("\nsystemctl status firewalld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动防火墙")]),s._v("\nsystemctl start firewalld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\nsystemctl stop firewalld\n")])])])]),s._v(" "),a("li",[a("p",[s._v("测试访问，")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浏览器访问（看见熟系的页面）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(":8080 \n")])])])])]),s._v(" "),a("h2",{attrs:{id:"安装-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-zookeeper"}},[s._v("#")]),s._v(" 安装 Zookeeper")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装JDK")])]),s._v(" "),a("li",[a("p",[s._v("上传Zookeeper压缩包到根目录的 "),a("code",[s._v("mysoft")]),s._v(" 文件夹")])]),s._v(" "),a("li",[a("p",[s._v("解压 解压至根路径usr")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/\n")])])])]),s._v(" "),a("li",[a("p",[s._v("进入 Zookeeper目录 创建 "),a("code",[s._v("data")]),s._v(" 目录")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n")])])])]),s._v(" "),a("li",[a("p",[s._v("编辑配置 ，进入confg目录 拷贝 "),a("code",[s._v("zoo_sample.cfg")]),s._v(" 为 zoo.cfg (将默认配置更改并应用)")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝应用的配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" zoo_sample.cfg zoo.cfg\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" zoo.cfg\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 更改 dataDir属性 路径 file为解压的文件目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataDir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/data\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Zookeeper 启动&停止&查看")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Zookeeper 启动")]),s._v("\n./zkServer.sh start\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Zookeeper 停止")]),s._v("\n./zkServer.sh stop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Zookeeper 查看")]),s._v("\n./zkServer.sh status\n")])])]),a("blockquote",[a("p",[s._v("需要进入Zookeeper的bin目录且是root权限进行操作")])])])]),s._v(" "),a("h2",{attrs:{id:"安装yum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装yum"}},[s._v("#")]),s._v(" 安装Yum")])])}),[],!1,null,null,null);a.default=n.exports}}]);