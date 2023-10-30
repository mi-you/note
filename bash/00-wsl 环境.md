# 在 window 上安装 linux (wsl - Windows Submodule for Linux)

- [官网教程](https://learn.microsoft.com/en-us/windows/wsl/install)

## 更新本地包信息和更新包

- `sudo apt update && sudo apt upgrade` : Windows does not automatically update or upgrade your Linux distribution
- `apt`: Debian 和 Ubuntu 使用的是 APT 包管理系统。不要和 apt 命令弄混了,有许多和 APT 包管理交互的命令；apt-get、apt、dpkg、aptitude 等,`apt` 是 `apt-get` 命令的一个更新而更简单的版本

## 在 wsl 上使用 vscode

- [官方教程](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode)
- `sudo apt install wget ca-certificates`: To add wget (to retrieve content from web servers) and ca-certificates (to allow SSL-based applications to check for the authenticity of SSL connections)
- 在 wsl 环境打开 vscode 项目： cd 到项目文件 `code .`打开 vscode。这会启动 vscode server 通过远程连接的插件打开一个 vscode

## 在 wsl 上使用git

- [官方教程](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-git)
- `sudo apt install git`: To add git
- 初始化git名称邮箱：`git config --global user.name 'miyou'`; `git config --global user.email '15755276427@163.com'`
  