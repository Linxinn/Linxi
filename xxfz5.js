

```

import requests

# 设置请求头部信息

headers = {

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',

    'Referer': 'https://boylove3.cc/forum.php'

}

# 设置Cookie

cookie = '_ga_GNEQHC4ZS7=GS1.1.1684643074.5.1.1684644686.0.0.0; PHPSESSID=0b5bbd2e6b524069b90fc3a6374f71bf; _ga=GA1.2.1757611215.1684519103; _gid=GA1.2.1379423449.1684519104; signPopTimeStamp=2023%2F05%2F21+12%3A40%3A23; signPopUserid=339733; history=%5B%7B%22manhua_id%22%3A13507%2C%22manhua_title%22%3A%22%5Cu5f53%5Cu6740%5Cu624b%5Cu5760%5Cu5165%5Cu7231%5Cu6cb3%22%2C%22manhua_image%22%3A%22%5C%2Fbookimages%5C%2FUploads%5C%2Fimg%5C%2F20210915%5C%2F0e43b40b0dc629f118741feef7e0a0d5.webp%22%2C%22manhua_type%22%3A%221%22%2C%22manhua_vipcanread%22%3A0%7D%5D; type=1; daily_sign=1; bulletin_new_31=1; shunt=3; todayBrowseMonth=true; lang=CN; '

# 访问签到页面URL

checkin_url = 'https://boylove3.cc/plugin.php?id=k_misign:sign'

# 建立会话

session = requests.Session()

# 添加Cookie到会话中

session.headers.update(headers)

session.cookies.update({'Cookie': cookie})

# 模拟签到

checkin_response = session.get(checkin_url)

# 打印签到结果

print(checkin_response.text)

```
