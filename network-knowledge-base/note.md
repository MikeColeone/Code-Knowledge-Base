# HTTP1.0 2.0 3.0区别 对头阻塞？最大并发数？

# 简要描述HTTPS的安全机制，以及在web服务工程实践中需要注意的问题；描述http2的基本机制

- HTTPS是指建立在安全的传输层（通常是tls/ssl）上的HTTP协议，通过对服务器的证书的认证，解决中间人攻击等问题。
  证书(certificate)由客户端信任的的证书机构(CA)颁发，通过common name或SAN对服务进行描述；客户端通过CA的根证书对证书进行校验，并将请求域名和证书的common name/DNS域名进行验证，以检验证书的有效性。
  目前，很多web api如Notification/web rpc/Service Worker等，都要求必须使用https。
  在工程实践中，https存在以下需要注意的问题：

  - js/css等资源必须以https形式加载，否则浏览器将拒绝执行，所以CDN必须完成对https的支持
  - 非https请求的图片等资源不会携带referer

  http2是http协议的一个新版本，既可以明文传输也可以在https中使用。浏览器和服务器通过tls的ALPN/SNI等机制可以进行协议协商，决定使用什么协议

# 何为https?https和http2有什么关系？

# 强缓存 协商缓存

# 状态码？ 异常排查思路
