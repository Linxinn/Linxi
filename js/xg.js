项目功能：小戈 解锁会员
脚本作者：林夕
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.boyasec\.com\/ime\/user\/rights-plan\/list url script-response-body https://raw.githubusercontent.com/Linxinn/Linxi/blob/main/js/xg.js
^https?:\/\/api\.boyasec\.com\/ime\/rights\/list url script-response-body https://raw.githubusercontent.com/Linxinn/Linxi/blob/main/js/xg.js

[mitm]
hostname = api.boyasec.com

**************************************

var guding = JSON.parse($response.body);
guding.data = [{
      "name" : "个人版",
      "endTime" : 1881706768000,
      //"code" : "27ec293bae7f4c3eac915db11fde22df"
    }];
.replace[{"name" : "应用安全锁",
      "expiration" : 1881706768000,
      "code" : "SecurityLock"},
    {"name" : "隐文风格",
      "expiration" : 1881706768000,
      "code" : "Cryptic"},
    {"name" : "更换图标",
      "expiration" : 1881706768000,
      "code" : "ChangeIcon"},
    {
      "name" : "文件加密",
      "expiration" : 1881706768000,
      "code" : "FileEncrypt"
    },
    {
      "name" : "加密通话",
      "expiration" : 1881706768000,
      "code" : "CallEncrypt"
    },
    {
      "name" : "私密发送",
      "expiration" : 1881706768000,
      "code" : "Private"
    },
    {
      "name" : "全能慧聊",
      "expiration" : 1881706768000,
      "code" : "ChatGPT"
    },
    {
      "name" : "全时撤回",
      "expiration" : 1881706768000,
      "code" : "Retract"
    },
    {
      "name" : "阅后即焚",
      "expiration" : 1881706768000,
      "code" : "Snapchat"
    },
    {
      "name" : "语音加密",
      "expiration" : 1881706768000,
      "code" : "VoiceEncrypt"
    },
    {
      "name" : "通话设置",
      "expiration" : 1881706768000,
      "code" : "CallConfig"
    },
    {
      "name" : "文件密库",
      "expiration" : 1881706768000,
      "code" : "FileVault"
    }];

$done({ body: JSON.stringify(guding) });