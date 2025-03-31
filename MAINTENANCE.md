# iTRIX 官网维护指南

## 目录
1. [部署信息](#部署信息)
2. [日常更新流程](#日常更新流程)
3. [服务管理](#服务管理)
4. [故障排查](#故障排查)
5. [备份策略](#备份策略)

## 部署信息
- 服务器地址: connect.westb.seetacloud.com
- SSH 端口: 22170
- 项目路径: /root/autodl-tmp/itrix-web
- 服务端口: 3001
- 进程管理: PM2
- 域名访问: Ngrok

## 日常更新流程

### 1. 本地更新
```bash
# 进入项目目录
cd ~/projects/ingru/iTRIX-official-site-v2

# 创建带时间戳的压缩包
tar -czf project-$(date +%Y%m%d_%H%M%S).tar.gz .
tar -czf project.tar.gz .

# 传输到服务器
scp -P 22170 project-*.tar.gz root@connect.westb.seetacloud.com:/root/autodl-tmp/itrix-web/
scp project.tar.gz root@8.211.150.2:/root/projects/itrix-web/
```


### 2.服务器更新
#### SSH 登录
ssh -p 22170 root@connect.westb.seetacloud.com

#### 进入项目目录
cd /root/autodl-tmp/itrix-web/

#### 解压更新文件
tar -xzf project-*.tar.gz

#### 更新依赖
yarn install

#### 重新构建
yarn build

#### 重启服务
pm2 restart itrix-web



## 服务管理
### PM2常用命令
#### 查看服务状态
pm2 status

#### 查看日志
pm2 logs itrix-web

#### 重启服务
pm2 restart itrix-web

#### 停止服务
pm2 stop itrix-web

#### 启动服务
pm2 start itrix-web

#### 删除服务
pm2 delete itrix-web


### Ngrok管理
#### 查看当前域名
cat /root/autodl-tmp/ngrok/web_url.txt

#### 重新启动所有服务
cd /root/autodl-tmp
./startup-web.sh


## 故障排查
### ①网站无法访问
检查步骤：
```bash
# 检查 Next.js 服务
pm2 status
pm2 logs itrix-web

# 检查 ngrok 状态
ps aux | grep ngrok
cat /root/autodl-tmp/ngrok/logs/ngrok_web.log

# 检查端口占用
netstat -tuln | grep 3001
```

### ②完全重启服务
```bash
# 停止所有服务
pm2 delete itrix-web
pkill -f "ngrok http"

# 重新启动
cd /root/autodl-tmp
./startup-web.sh
```

## 备份策略
### ①创建备份
```bash
# 在服务器上创建备份
cd /root/autodl-tmp
tar -czf itrix-web-backup-$(date +%Y%m%d).tar.gz itrix-web/

# 下载备份到本地
scp -P 22170 root@connect.westb.seetacloud.com:/root/autodl-tmp/itrix-web-backup-*.tar.gz ./backups/
```

### ②恢复备份
```bash
# 上传备份到服务器
scp -P 22170 ./backups/itrix-web-backup-*.tar.gz root@connect.westb.seetacloud.com:/root/autodl-tmp/

# 在服务器上恢复
cd /root/autodl-tmp
tar -xzf itrix-web-backup-*.tar.gz

# 重启服务
cd /root/autodl-tmp
./startup-web.sh
```

## 注意事项
每次更新代码后必须运行 yarn build
更新后要检查 ngrok 链接是否变化
定期检查日志确保服务正常运行
建议每周进行一次备份
保留最近 5 次的备份文件

## 环境变量管理
如需更新环境变量：
```bash
# 停止服务
pm2 stop itrix-web
pm2 delete itrix-web

# 设置新的环境变量
export NEW_ENV_VAR=value

# 重新启动服务
pm2 start npm --name "itrix-web" -- start
```