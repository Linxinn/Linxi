#项目功能：小戈 解锁会员
#脚本作者：林夕
#使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.boyasec\.com\/ime\/user\/rights-plan\/list url script-response-body https://raw.githubusercontent.com/Linxinn/Linxi/main/js/xg.js
#^https?:\/\/api\.boyasec\.com\/ime\/rights\/list url script-response-body https://raw.githubusercontent.com/Linxinn/Linxi/main/js/xg.js

[mitm]
hostname = api.boyasec.com

**************************************

var guding = JSON.parse($response.body);
guding.data = [{
      "name" : "个人版",
      "endTime" : 1881706768000,
      //"code" : "27ec293bae7f4c3eac915db11fde22df"
    }];
$done({ body: JSON.stringify(guding) });