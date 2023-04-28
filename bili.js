// 2023-04-25 15:35

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

// 强制设置的皮肤
if (url.includes("/x/resource/show/skin")) {
  if (obj.data?.common_equip) {
    delete obj.data.common_equip;
  }
} else if (url.includes("/x/resource/show/tab/v2")) {
  // 标签页
  if (obj.data.tab) {
    obj.data.tab = obj.data.tab.filter(
      (item) =>
        item.name === "推荐" ||
        item.name === "热门" ||
        item.name === "动画" ||
        item.name === "影视"
    );
    fixPos(obj.data.tab);
  }
  if (obj.data.top) {
    obj.data.top = [
      {
        id: 176,
        icon: "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
        tab_id: "消息Top",
        name: "消息",
        uri: "bilibili://link/im_home",
        pos: 1
      }
    ];
  }
  if (obj.data.bottom) {
    obj.data.bottom = obj.data.bottom.filter(
      (item) =>
        !(
          item.name === "发布" ||
          item.name === "会员购" ||
          item.name === "節目"
        )
    );
    fixPos(obj.data.bottom);
  }
} else if (url.includes("/x/resource/top/activity")) {
  // 右上角活动入口
  obj = {
    code: -404,
    message: "啥都木有",
    ttl: 1,
    data: null
  };
} else if (url.includes("/x/v2/account/mine")) {
  // 我的页面
  // 标准版：
  // 396离线缓存 397历史记录 398我的收藏 399稍后再看 171个性装扮 172我的钱包 407联系客服 410设置
  // 港澳台：
  // 534离线缓存 8历史记录 4我的收藏 428稍后再看
  // 352离线缓存 1历史记录 405我的收藏 402个性装扮 404我的钱包 544创作中心
  // 概念版：
  // 425离线缓存 426历史记录 427我的收藏 428稍后再看 171创作中心 430我的钱包 431联系客服 432设置
  // 国际版：
  // 494离线缓存 495历史记录 496我的收藏 497稍后再看 741我的钱包 742稿件管理 500联系客服 501设置
  // 622为会员购中心 425开始为概念版id
  const itemList = new Set([
    396, 397, 398, 399, 407, 410, 494, 495, 496, 497, 500, 501
  ]);
  if (obj.data?.sections_v2) {
    obj.data.sections_v2.forEach((element, index) => {
      let items = element.items.filter((e) => itemList.has(e.id));
      obj.data.sections_v2[index].button = {};
      obj.data.sections_v2[index].tip_icon = "";
      obj.data.sections_v2[index].be_up_title = "";
      obj.data.sections_v2[index].tip_title = "";
      if (
        obj.data.sections_v2[index].title === "推荐服务" ||
        obj.data.sections_v2[index].title === "更多服务" ||
        obj.data.sections_v2[index].title === "创作中心"
      ) {
        obj.data.sections_v2[index].title = "";
        obj.data.sections_v2[index].type = "";
      }

      obj.data.sections_v2[index].items = items;
      obj.data.vip_section_v2 = "";
      obj.data.vip_section = "";
      obj.data.live_tip = "";
      obj.data.answer = "";
     

// 修复pos
function fixPos(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].pos = i + 1;
  }
}
