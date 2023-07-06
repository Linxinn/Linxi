
#!author = Linxinn
#!update = 2023-07-06 14:22.45

# > 移除 哔哩哔哩国际版 动态 

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

const reservedTabs = ['首页', '我的']; // 要保留的 tab 的 name 值

obj.data.bottom = obj.data.bottom.filter(tab => reservedTabs.includes(tab.name)); // 过滤数组，只保留 name 值为 '首页' 或 '我的' 的元素

$done({ body: JSON.stringify(obj) });