#!author = Linxinn
#!update = 2023-07-06 14:22.45

# > 移除 哔哩哔哩动态
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

const reservedTabs = ['推荐', '热门','动画','首页', '我的']; // 要保留的 tab 的 name 值

obj.data.tab = obj.data.tab.filter(tab => reservedTabs.includes(tab.name)); // 过滤数组，只保留 name 值为 '推荐' 或 '热门' 和 '动画'的元素

obj.data.bottom = obj.data.bottom.filter(tab => reservedTabs.includes(tab.name)); // 过滤数组，只保留 name 值为 '首页' 或 '我的' 的元素

$done({ body: JSON.stringify(obj) });


