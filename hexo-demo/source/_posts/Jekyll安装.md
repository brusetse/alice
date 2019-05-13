---
title:  Jekyll安装教程
date:   2017-01-21 16:17:49
categories: [Jekyll]
tags: [前端]
---
## ruby  
下载安装windows最新版ruby：http://rubyinstaller.org/downloads/  
勾选上文件关联和环境变量  
测试：ruby -v

## Devkit  
下载安装ruby Devkit（windows模拟linux环境）也是在刚刚那个页面，指定安装目录

进入Devkit安装目录下，运行两个命令：  
ruby dk.rb init  
ruby dk.rb install  
第二个命令如果提示找不到目录或者目录为空时，修改Devkit目录下config.yml在\-\-\-下面添加：  
\- ruby所在目录，再执行  
测试：gem -v  

可以用gem安装了，官方源比较慢，可以换源（gem 命令在哪个路径下都可以）  
先移除原来的：gem sources --remove https://rubygems.org/  
替换成：gem sources -a http://gems.ruby-china.org/ （淘宝源不再维护了不能用，用腾讯源）

## jekyll  
再安装jekyll：gem install jekyll  
测试：jekyll -v

进入项目目录，执行：jekyll serve，会报错，提示你没有安装jekyll-sitemap，安装即可  
gem install jekyll-sitemap  
再执行：jekyll serve 成功！服务器已启动，可以访问localhost:4000了  

gem install jekyll-sitemap如果提示你编码格式错误时，说明你安装的ruby版本不是最新的  
卸载安装最新版即可

## git
git clone https://github.com/brusetse/brusetse.github.io.git 将你创建的仓库克隆下来  
git add . 会递归地添加当前工作目录中的所有文件  
git commit -m '1' 提交已经被add进来的改动到本地库  
git push 将本地库中的最新信息发送给远程库