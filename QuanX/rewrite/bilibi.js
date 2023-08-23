
// 获取要删除的动态元素
const dynamicElement = document.querySelector('a[href="bilibili://following/home/"][tab_id="dynamic"]');
// 检查元素是否存在
if (dynamicElement) {
  // 删除动态元素
  dynamicElement.remove();
}
