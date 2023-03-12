(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{413:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux基本操作篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux基本操作篇"}},[t._v("#")]),t._v(" Linux基本操作篇")]),t._v(" "),s("h2",{attrs:{id:"用户命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户命令"}},[t._v("#")]),t._v(" 用户命令")]),t._v(" "),s("p",[s("strong",[t._v("用户查看")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/passwd\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询信息")]),t._v("\nroot:x:0:0:root:/root:/bin/bash\n\t- root 用户名\n\t- x 密码\n\t- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 账号ID\n\t- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 组ID\n")])])]),s("p",[s("strong",[t._v("用户切换")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("用户名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("用户创建")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("账号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#示例 useradd sans")]),t._v("\n")])])]),s("p",[s("strong",[t._v("用户删除")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -r 选项 将用户连同主目录一起删除")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("userdel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("账号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("用户口令管理")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("账号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nOptions：\n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" 锁定口令，即禁用账号\n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" 口令解锁\n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" 使账号无口令\n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" 强迫用户下次登录时修改口令\n")])])]),s("h2",{attrs:{id:"目录命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录命令"}},[t._v("#")]),t._v(" 目录命令")]),t._v(" "),s("p",[s("strong",[t._v("目录查看")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前目录文件名 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有文件 (包括隐藏文件)")]),t._v("\nll\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前目录路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n")])])]),s("p",[s("strong",[t._v("目录切换")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换指定目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目录"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回上级目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回根目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /\n")])])]),s("p",[s("strong",[t._v("目录创建")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目录名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("如果root用户创建，注意其他用户是不可用的需要！！")])]),t._v(" "),s("p",[s("strong",[t._v("目录移动")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将目录搬运指定路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目录"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目标路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("目录 打包&拆包")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-cvf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目录/文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".tar\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 压缩包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zcvf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目录/文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".tar.gz\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拆包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-xvf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".tar\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压 (需要指定路径)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("File"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".tar.gz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目录"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("目录删除")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rmdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目录"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("删除目录不建议命令删除（容易翻车\n还是乖乖手动在Linux上删除吧")])]),t._v(" "),s("h2",{attrs:{id:"文件命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件命令"}},[t._v("#")]),t._v(" 文件命令")]),t._v(" "),s("p",[s("strong",[t._v("文件查看")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标准形式全部展现")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当行形式展现")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t- Enter键"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("回车"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 下行\n\t- :f 显示当前行\n\t- q 离开\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 翻页形式展现")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t- 空格键/pagedown键 下页\n\t- pageup键 上页\n\t- q 退出\n")])])]),s("p",[s("strong",[t._v("修改权限")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置所有权")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod [参数] [文件]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("r读 -- w写 -- x执行")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作符")]),t._v(" "),s("th",[t._v("r")]),t._v(" "),s("th",[t._v("w")]),t._v(" "),s("th",[t._v("x")]),t._v(" "),s("th",[t._v("r")]),t._v(" "),s("th",[t._v("w")]),t._v(" "),s("th",[t._v("x")]),t._v(" "),s("th",[t._v("r")]),t._v(" "),s("th",[t._v("w")]),t._v(" "),s("th",[t._v("x")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("权限值")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("权限分配")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("|")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("|")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("|")])])])]),t._v(" "),s("p",[t._v("权限分配分类顺序：所有者 -> 文件分组 -> 其他用户")]),t._v(" "),s("blockquote",[s("p",[t._v("权限类型会根据权限值相加判断权限是否赋予！")])]),t._v(" "),s("p",[s("strong",[t._v("文件创建")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("文件编辑")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑器编辑")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t- Esc键 切换模式\n\t- i 编辑模式\n\t- :q 退出\n\t- :wq 保存并退出\n\t- :wq"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("保存并退出"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("强制"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重定向文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 覆盖模式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{内容}'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追加模式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{内容}'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("**文件 复制&拷贝 **")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("旧文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("新文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("p",[s("strong",[t._v("文件移动")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("目录"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("删除文件")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除大小为0的文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("删除文件不建议代码形式进行递归删除")])]),t._v(" "),s("p",[s("a",{attrs:{href:"#%E6%9F%A5%E6%89%BE%E5%91%BD%E4%BB%A4"}},[s("strong",[t._v("文件查找")])])]),t._v(" "),s("h2",{attrs:{id:"查找命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找命令"}},[t._v("#")]),t._v(" 查找命令")]),t._v(" "),s("p",[s("strong",[t._v("进程查找")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查指定进程")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("进程名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查端口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-antpl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("端口名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("文件查找")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在当前路径 按 文件名/目录名 查 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("关键字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ls")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 递归查找所有后缀 .xml文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.xml"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 递归查找所有后缀 .xml文件，且内容包含有 hello world")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.xml"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找当前所有目录下的jar包文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.jar'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在当前路径 按 模糊文件名/目录名 查")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("locate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("关键字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("环境变量属性值 查找")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("属性名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查所有环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" * \n")])])]),s("h2",{attrs:{id:"其他命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[t._v("#")]),t._v(" 其他命令")]),t._v(" "),s("p",[s("strong",[t._v("系统命令 防火墙相关")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看防火墙状态")]),t._v("\nsystemctl status firewalld\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动防火墙")]),t._v("\nsystemctl start firewalld\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭防火墙")]),t._v("\nsystemctl stop firewalld\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询防火墙服务是否开机启动")]),t._v("\nsystemctl is-enabled firewalld\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开机时启用防火墙服务")]),t._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" firewalld\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开机时禁用防火墙服务")]),t._v("\nsystemctl disable firewalld\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询已经启动的服务列表")]),t._v("\nsystemctl list-unit-files"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" enabled\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询启动失败的服务列表")]),t._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--failed")]),t._v("\n")])])]),s("p",[s("strong",[t._v("系统命令 服务相关")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看IP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看网络服务状态")]),t._v("\nsystemctl status network\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动网络服务")]),t._v("\nsystemctl start network\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#停止网络服务")]),t._v("\nsystemctl stop network\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启网络服务")]),t._v("\nsystemctl restart network\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置开机启动")]),t._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" network\n")])])]),s("p",[s("strong",[t._v("进程相关")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看tomcat程序进程")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" tomcat \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 高亮关键字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--coloer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 终止进程 终止19979进程")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19979")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);