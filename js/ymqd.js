//项目名称：一木清单
//下载地址：https://apps.apple.com/app/id1672171155
//脚本作者：林夕
//电报频道：https://t.me/linxinn
//使用说明：非一次性解锁，要一直开着


#[rewrite_local]
^https:\/\/yimutodo\.com\/api\/v\/mtop url script-response-body https://raw.githubusercontent.com/Linxinn/Linxi/main/js/ymqd.js

//[mitm]
hostname = yimutodo.com

//************************************************************/

var obj = JSON.parse($response.body);
obj.data = {
    "memberType" : "PERMANENT",
    "totalStore" :10485746725,
    "avatar" : "https://raw.githubusercontent.com/lx051/QuantumultX/main/icon/hyj.JPG",
    "userId" : 88888,
    "nickName" : "林夕",
  //"memberExpiredTime": 1881706768000
};
obj.projectList = [{
    "creator": {
      "memberType": "PERMANENT",
      "memberExpiredTime": 1881706768000,
    },
  }];
$done({body: JSON.stringify(obj)});
 //"totalStore"这个是存储云空间，
//20GB=2117632
//1000GB=1048609678
//10000GB=10485746725
