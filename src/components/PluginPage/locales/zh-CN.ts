export default {
  'PluginPage.plugin.limit-conn.desc': '限制并发连接数',
  'PluginPage.plugin.limit-conn.property.conn': 'conn',
  'PluginPage.plugin.limit-conn.property.conn.extra': '最大并发连接数',
  'PluginPage.plugin.limit-conn.property.burst': 'burst',
  'PluginPage.plugin.limit-conn.property.burst.extra':
    '并发连接数超过 conn，但是低于 conn + burst 时，请求将被延迟处理',
  'PluginPage.plugin.limit-conn.property.default_conn_delay': '延迟时间',
  'PluginPage.plugin.limit-conn.property.default_conn_delay.extra':
    '被延迟处理的请求，需要等待多少秒',
  'PluginPage.plugin.limit-conn.property.key': 'key',
  'PluginPage.plugin.limit-conn.property.key.extra': '用来做限制的依据',
  'PluginPage.plugin.limit-conn.property.rejected_code': '拒绝状态码',
  'PluginPage.plugin.limit-conn.property.rejected_code.extra':
    '当并发连接数超过 conn + burst 的限制时，返回给终端的 HTTP 状态码',

  'PluginPage.plugin.limit-count.desc': '在指定的时间范围内，限制总的请求次数',
  'PluginPage.plugin.limit-count.property.count': '总请求次数',
  'PluginPage.plugin.limit-count.property.count.extra': '指定时间窗口内的请求数量阈值',
  'PluginPage.plugin.limit-count.property.time_window': '时间窗口',
  'PluginPage.plugin.limit-count.property.time_window.extra':
    '时间窗口的大小（以秒为单位），超过这个时间，总请求次数就会重置',
  'PluginPage.plugin.limit-count.property.key': 'key',
  'PluginPage.plugin.limit-count.property.key.extra': '用来做请求计数的依据',
  'PluginPage.plugin.limit-count.property.rejected_code': '拒绝状态码',
  'PluginPage.plugin.limit-count.property.rejected_code.extra':
    '当请求超过阈值时，返回给终端的 HTTP 状态码',
  'PluginPage.plugin.limit-count.property.policy': '策略',
  'PluginPage.plugin.limit-count.property.redis_host': '地址',
  'PluginPage.plugin.limit-count.property.redis_host.extra': '用于集群限流的 Redis 节点地址',
  'PluginPage.plugin.limit-count.property.redis_port': '端口',
  'PluginPage.plugin.limit-count.property.redis_password': '密码',
  'PluginPage.plugin.limit-count.property.redis_timeout': '超时时间（毫秒）',

  'PluginPage.plugin.limit-req.desc': '限制请求速度的插件，基于漏桶算法',
  'PluginPage.plugin.limit-req.property.rate': 'rate',
  'PluginPage.plugin.limit-req.property.rate.extra': '每秒请求速率',
  'PluginPage.plugin.limit-req.property.burst': 'burst',
  'PluginPage.plugin.limit-req.property.burst.extra':
    '每秒请求速率超过 rate，但是低于 rate + burst 时，请求将被延迟处理',
  'PluginPage.plugin.limit-req.property.key': 'key',
  'PluginPage.plugin.limit-req.property.key.extra': '用来做请求计数的依据',
  'PluginPage.plugin.limit-req.property.rejected_code': '拒绝状态码',
  'PluginPage.plugin.limit-req.property.rejected_code.extra':
    '速率超过 rate + burst 的限制时，返回给终端的 HTTP 状态码',

  'PluginPage.plugin.cors.desc': 'CORS 插件可以为服务端启用 CORS 的返回头',
  'PluginPage.plugin.cors.property.allow_origins': '允许跨域访问的 Origin',
  'PluginPage.plugin.cors.property.allow_origins.extra': '比如：https://somehost.com:8081',
  'PluginPage.plugin.cors.property.allow_methods': '允许跨域访问的 Method',

  'PluginPage.plugin.fault-injection.desc': '故障注入插件，用来模拟各种后端故障和高延迟',
  'PluginPage.plugin.fault-injection.property.http_status': 'HTTP 状态码',
  'PluginPage.plugin.fault-injection.property.body': '响应体',
  'PluginPage.plugin.fault-injection.property.duration': '延迟时间（秒）',

  'PluginPage.plugin.http-logger.desc': 'http-logger 可以将日志数据请求推送到 HTTP/HTTPS 服务器',
  'PluginPage.plugin.http-logger.property.uri': '日志服务器地址',
  'PluginPage.plugin.http-logger.property.uri.extra': '比如：127.0.0.1:80/postendpoint?param=1',

  'PluginPage.plugin.ip-restriction.desc':
    'ip-restriction 可以把一批 IP 地址列入白名单或黑名单（二选一），时间复杂度是O(1)，并支持用 CIDR 来表示 IP 范围',
  'PluginPage.plugin.ip-restriction.property.whitelist': '白名单',
  'PluginPage.plugin.ip-restriction.property.blacklist': '黑名单',

  'PluginPage.plugin.kafka-logger.desc': '把接口请求日志以 JSON 的形式推送给外部 Kafka 集群',
  'PluginPage.plugin.kafka-logger.property.broker_list': 'broker',
  'PluginPage.plugin.kafka-logger.property.kafka_topic': 'topic',

  'PluginPage.plugin.prometheus.desc': '提供符合 prometheus 数据格式的 metrics 数据',

  'PluginPage.plugin.proxy-cache.desc': '代理缓存插件，缓存后端服务的响应数据',
  'PluginPage.plugin.proxy-cache.property.cache_zone': '缓存区域名',
  'PluginPage.plugin.proxy-cache.property.cache_zone.extra':
    ' 本地目录为 /tmp/区域名，修改默认区域名必须同时修改 config.yaml',
  'PluginPage.plugin.proxy-cache.property.cache_key': '缓存 key',
  'PluginPage.plugin.proxy-cache.property.cache_key.extra':
    '可以使用 Nginx 变量，例如：$host, $uri',
  'PluginPage.plugin.proxy-cache.property.cache_bypass': '跳过缓存检索',
  'PluginPage.plugin.proxy-cache.property.cache_bypass.extra':
    '这里可以使用 Nginx 变量，当此参数的值不为空或非0时将会跳过缓存的检索',
  'PluginPage.plugin.proxy-cache.property.cache_method': '缓存 Method',
  'PluginPage.plugin.proxy-cache.property.cache_http_status': '缓存响应状态码',
  'PluginPage.plugin.proxy-cache.property.hide_cache_headers': '隐藏缓存头',
  'PluginPage.plugin.proxy-cache.property.hide_cache_headers.extra':
    '是否将 Expires 和 Cache-Control 响应头返回给客户端',
  'PluginPage.plugin.proxy-cache.property.no_cache': '不缓存的数据',
  'PluginPage.plugin.proxy-cache.property.no_cache.extra':
    '这里可以使用 Nginx 变量, 当此参数的值不为空或非0时将不会缓存数据',

  'PluginPage.plugin.proxy-mirror.desc': 'proxy mirror 代理镜像插件，提供了镜像客户端请求的能力',
  'PluginPage.plugin.proxy-mirror.property.host': '镜像服务地址',
  'PluginPage.plugin.proxy-mirror.property.host.extra':
    '例如：http://127.0.0.1:9797。地址中需要包含 http 或 https，不能包含 URI 部分',

  'PluginPage.plugin.response-rewrite.desc': '该插件支持修改上游服务返回的 body 和 header 信息',
  'PluginPage.plugin.response-rewrite.property.status_code': '状态码',
  'PluginPage.plugin.response-rewrite.property.body': '响应体',
  'PluginPage.plugin.response-rewrite.property.body_base64': '响应体是否需要 base64 解码',
  'PluginPage.plugin.response-rewrite.property.headers': 'HTTP 头',

  'PluginPage.plugin.syslog.desc': '对接 syslog 日志服务器',
  'PluginPage.plugin.syslog.property.host': '日志服务器地址',
  'PluginPage.plugin.syslog.property.port': '日志服务器端口',
  'PluginPage.plugin.syslog.property.timeout': '超时时间',
  'PluginPage.plugin.syslog.property.tls': '开启 SSL',
  'PluginPage.plugin.syslog.property.flush_limit': '缓存区大小',
  'PluginPage.plugin.syslog.property.sock_type': '协议类型',
  'PluginPage.plugin.syslog.property.max_retry_times': '重试次数',
  'PluginPage.plugin.syslog.property.retry_interval': '重试间隔时间（毫秒）',
  'PluginPage.plugin.syslog.property.pool_size': '连接池大小',

  'PluginPage.plugin.tcp-logger.desc': '对接 TCP 日志服务器',
  'PluginPage.plugin.tcp-logger.property.host': '日志服务器地址',
  'PluginPage.plugin.tcp-logger.property.port': '日志服务器端口',
  'PluginPage.plugin.tcp-logger.property.timeout': '超时时间',
  'PluginPage.plugin.tcp-logger.property.tls': '开启 SSL',
  'PluginPage.plugin.tcp-logger.property.tls_options': 'TLS 选型',

  'PluginPage.plugin.udp-logger.desc': '对接 UDP 日志服务器',
  'PluginPage.plugin.udp-logger.property.host': '日志服务器地址',
  'PluginPage.plugin.udp-logger.property.port': '日志服务器端口',
  'PluginPage.plugin.udp-logger.property.timeout': '超时时间',

  'PluginPage.plugin.zipkin.desc': '对接 zipkin',
  'PluginPage.plugin.zipkin.property.endpoint': 'endpoint',
  'PluginPage.plugin.zipkin.property.endpoint.extra': '例如：http://127.0.0.1:9411/api/v2/spans',
  'PluginPage.plugin.zipkin.property.sample_ratio': '采样率',
  'PluginPage.plugin.zipkin.property.service_name': '服务名',
  'PluginPage.plugin.zipkin.property.server_addr': '网关实例 IP',
  'PluginPage.plugin.zipkin.property.server_addr.extra': '默认值是 Nginx 内置变量 server_addr',

  'PluginPage.plugin.skywalking.desc': '对接 Apache Skywalking',
  'PluginPage.plugin.skywalking.property.endpoint': 'endpoint',
  'PluginPage.plugin.skywalking.property.endpoint.extra': '例如：http://127.0.0.1:12800',
  'PluginPage.plugin.skywalking.property.sample_ratio': '采样率',
  'PluginPage.plugin.skywalking.property.service_name': '服务名',

  'PluginPage.plugin.serverless-pre-function.desc': '在指定阶段最开始的位置，运行指定的 Lua 函数',
  'PluginPage.plugin.serverless-pre-function.property.phase': '运行阶段',
  'PluginPage.plugin.serverless-pre-function.property.functions': '运行的函数集',

  'PluginPage.plugin.serverless-post-function.desc': '在指定阶段最后的位置，运行指定的 Lua 函数',
  'PluginPage.plugin.serverless-post-function.property.phase': '运行阶段',
  'PluginPage.plugin.serverless-post-function.property.functions': '运行的函数集',

  'PluginPage.plugin.basic-auth.desc': 'basic auth 插件',
  'PluginPage.plugin.jwt-auth.desc': 'JWT 认证插件',
  'PluginPage.plugin.key-auth.desc': 'key auth 插件',
  'PluginPage.plugin.wolf-rbac.desc': '对接 wolf RBAC 服务',
  'PluginPage.plugin.openid-connect.desc': 'Open ID Connect(OIDC) 插件提供对接外部认证服务的能力',

  'PluginPage.plugin.redirect.desc': '重定向插件',
  'PluginPage.plugin.proxy-rewrite.desc': 'proxy rewrite 代理改写插件，可以改写客户端请求',
  'PluginPage.plugin.mqtt-proxy.desc':
    'mqtt-proxy 插件可以帮助你根据 MQTT 的 client_id 实现动态负载均衡',
  'PluginPage.plugin.grpc-transcoding.desc':
    'gRPC 转换插件，实现 HTTP(s) -> APISIX -> gRPC server 的转换',
  'PluginPage.plugin.batch-requests.desc':
    'batch-requests 插件可以一次接受多个请求并以 http pipeline 的方式在网关发起多个 http 请求，合并结果后再返回客户端，这在客户端需要访问多个接口时可以显著地提升请求性能',

  'PluginPage.plugin.node-status.desc': 'node-status 节点状态',

  'PluginPage.refer.documents':'请查阅官方文档',
  'PluginPage.drawer.configure.plugin':'配置插件',
  'PluginPage.drawer.disabled':'禁用',
  'PluginPage.drawer.enable':'启用',
  'PluginPage.drawer.confirm':'确认',
  'PluginPage.drawer.is.enabled':'已启用',
  'PluginPage.drawer.not.enabled':'未启用',
};