# 使用nginx反向代理配置，解决前端跨域问题

## ngnix.config文件

``` conf
    # 设定http服务器
    http {
        include       mime.types;    #文件扩展名与文件类型映射表
        default_type  application/octet-stream;    #默认文件类型
        #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。
        sendfile        on;
        keepalive_timeout  65; #长连接超时时间，单位是秒

        ### **修改此处的服务器地址列表** ifacesuportservice 项目部署服务器
        upstream ifacesuportservice_server{
            ip_hash;
            server 127.0.0.1:8088;
        }
        ### **修改此处的服务器地址列表** hisService 项目部署服务器
        upstream hisService_server{
            ip_hash;
            server 127.0.0.1:8080;
        }

        #虚拟主机的配置
        server {
            listen       82;    #监听端口
            server_name  localhost;    #域名可以有多个，用空格隔开

            location /upload {
                #set size of upload files
                client_max_body_size 100m;    #允许客户端请求的最大单文件字节数
            }
            proxy_set_header X-Real-IP $remote_addr;
            #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;

            location / {
                ssi on;
                ssi_silent_errors on;
                ssi_types text/shtml;

                ### **修改此处的文件** 静态文件 html 的根目录
                root   D:\myTable;    #文件的根目录
                index  my\myTable.html;    #默认起始页
            }

            #对'/applycard-service/'启动反向代理
            location ^~ /applycard-service/ {
                rewrite ^/applycard-service/(.*)$ /applycard-service/$1 break;
                proxy_pass   http://192.168.1.57:82;
            }
        }
    }
```

### 不能用电脑自带的记事本打开

* config文件被记事本编辑过，保存成了含BOM头的文件，使用其他编辑器将文件另存为UTF-8 不含BOM头的格式
* 记事本编辑UTF-8都会加BOM头

## 日志打印

* ngnix > logs > error.log
* 
* 第一个是 端口的  你访问的时候  可以  http://localhost:82 这样子访问 ，第二个是 你 放置静态文件的地址，第三个是 你访问 根路径地址， 第四个是 那个  你访问环境的地址 
