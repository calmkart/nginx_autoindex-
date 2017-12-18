1.
把三个文件夹放到一起

2.
cd nginx-release-1.6.2
./auto/configure --prefix=/usr/local/nginx --with-pcre --with-http_stub_status_module --with-http_ssl_module --with-http_gzip_static_module --add-module=../file-md5-master --add-module=../ngx-fancyindex
make
cd ./objs

3.
killall nginx
vi /etc/nginx/site-enable/default
root /var/www; //改为需要路径
location / {
 36         # First attempt to serve request as file, then
 37         # as directory, then fall back to displaying a 404.
 38         fancyindex on;
 39         fancyindex_exact_size off;
 40         fancyindex_ignore "static";
 41         add_header Content-MD5 $file_md5;
 42     }

4.
在需要分享的路径下创建static文件夹，把md5.js拷贝进去

5.
进nginx-release-1.6.2/objs
运行./nginx -c /etc/nginx/nginx.conf

