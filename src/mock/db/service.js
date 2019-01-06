let serviceDB = [
  {
    'service_id': '05091977e97711e8a28a204747b14756',
    'service_name': '内容分发网络',
    'service_describe': 'CDN',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '053c4d54e97711e8a28a204747b14756',
    'service_name': '网络辅助工具',
    'service_describe': '智能导航：百度地图、谷歌地图；在线翻译：谷歌翻译、有道翻译',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '0',
    'authenticity': '0',
    'privacy': '1'
  },
  {
    'service_id': '0570ce4ae97711e8a28a204747b14756',
    'service_name': '互联网下载',
    'service_describe': '迅雷、QQ旋风等互联网下载软件',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '0',
    'authenticity': '0',
    'privacy': '1'
  },
  {
    'service_id': '05ab5f4ee97711e8a28a204747b14756',
    'service_name': '音乐网站及应用',
    'service_describe': 'QQ音乐、网易云音乐',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '05e10c8fe97711e8a28a204747b14756',
    'service_name': '视频网站及应用',
    'service_describe': '电子商务中的广告宣传、以及各类产品推荐',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '0610a856e97711e8a28a204747b14756',
    'service_name': '浏览器',
    'service_describe': '百度浏览器、搜狐浏览器等',
    'confidentiality': '1',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '0647962be97711e8a28a204747b14756',
    'service_name': '营销服务',
    'service_describe': '电子商务中的广告宣传、以及各类产品推荐',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '0'
  },
  {
    'service_id': '06836758e97711e8a28a204747b14756',
    'service_name': '网上交易',
    'service_describe': '电子商务中的交易、包括出行（订机票/火车票/酒店，打车）、购物、如美团、滴滴、淘宝、携程',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '06ba5443e97711e8a28a204747b14756',
    'service_name': '物流管理',
    'service_describe': '电子商务中的物流',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '0'
  },
  {
    'service_id': '06f3b196e97711e8a28a204747b14756',
    'service_name': '病毒查杀',
    'service_describe': '360安全卫士、腾讯安全卫士，等杀毒保护软件',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '0',
    'authenticity': '0',
    'privacy': '1'
  },
  {
    'service_id': '07282c06e97711e8a28a204747b14756',
    'service_name': '信息订阅',
    'service_describe': '电子商务上的音乐、视频、金融、新闻等信息的收费订阅',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '075cb7b3e97711e8a28a204747b14756',
    'service_name': '搜索引擎',
    'service_describe': '百度搜索、360搜索，等信息搜索',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '079006aae97711e8a28a204747b14756',
    'service_name': '存储转发',
    'service_describe': '语音信箱、电子邮件、传真存储转发，利用存储机制为用户提供信息发送的业务',
    'confidentiality': '1',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '07be59d8e97711e8a28a204747b14756',
    'service_name': '应用商店',
    'service_describe': '小米应用商店等，提供软件应用下载的应用商店',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '0',
    'authenticity': '0',
    'privacy': '0'
  },
  {
    'service_id': '07f2df12e97711e8a28a204747b14756',
    'service_name': '网络支付/电子支付',
    'service_describe': '支付宝、微信支付等，调用银行接口用于支付的业务',
    'confidentiality': '1',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '4a30d019e97811e8a28a204747b14756',
    'service_name': '信息管理业务',
    'service_describe': '一系列管理系统',
    'confidentiality': '1',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': '4aad4d51e97811e8a28a204747b14756',
    'service_name': '银行交易处理业务',
    'service_describe': '中国银行、建设银行等，负责在线汇款、外汇兑换、贷款办理',
    'confidentiality': '1',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': 'ae419daee97611e8a28a204747b14756',
    'service_name': '网络游戏',
    'service_describe': '王者荣耀、QQ游戏，包含网页等在线游戏',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': 'cbabedc0e97611e8a28a204747b14756',
    'service_name': '社交网络平台',
    'service_describe': 'CSDN博客、知乎、微博，简书、网络直播、百度贴吧，K歌社交（唱吧）包含新媒体',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  },
  {
    'service_id': 'd7215a43e97611e8a28a204747b14756',
    'service_name': '即时通信',
    'service_describe': 'QQ、微信，包含文本、图片、语音视频等信息的通讯',
    'confidentiality': '0',
    'integrity': '1',
    'availability': '1',
    'no_repudiation': '1',
    'authenticity': '1',
    'privacy': '1'
  }
]

export { serviceDB }
