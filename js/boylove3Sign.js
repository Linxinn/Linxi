/*
boylove3.cc签到-lowking-v1.0

按下面配置完之后，打开https://boylove3.cc/home/signup获取cookie

************************
Surge 4.2.0+ 脚本配置(其他APP自行转换配置):
************************
[Script]
# > hifini签到
hifini签到cookie = type=http-request,pattern=https:\/\/boylove3.cc\/home\signup,script-path=https://raw.githubusercontent.com/lx051/QuantumultX/main/js/boylove3Sign.js
hifini签到 = type=cron,cronexp="0 10 0 * * ?",wake-system=1,script-path=https://raw.githubusercontent.com/lx051/QuantumultX/main/js/boylove3Sign.js

[MITM]
hostname = %APPEND% *.boylove3.cc
*/
const lk = new ToolKit(`boylove3签到`, `Boylove3SignIn`)

const boylove3CookieKey = 'lkBoylove3CookieKey'

const boylove3Cookie = lk.getVal(boylove3CookieKey, '')

if (!lk.isExecComm) {

    if (lk.isRequest()) {

        getCookie()

        lk.done()

    } else {

        // 构建boxjs数据写入订阅

        lk.boxJsJsonBuilder({

            "icons": [

                "https://raw.githubusercontent.com/lowking/Scripts/master/doc/icon/hifinisignin-dark.png",

                "https://raw.githubusercontent.com/lowking/Scripts/master/doc/icon/hifinisignin.png"

            ],

            "settings": [

                {

                    "id": boylove3CookieKey,

                    "name": "boylove3 cookie",

                    "val": "",

                    "type": "text",

                    "desc": "boylove3 cookie"

                }

            ],

            "keys": [boylove3CookieKey]

        }, {

            "script_url": "https://github.com/lx051/QuantumultX/main/js/boylove3Sign.js",

            "author": "@lx051",

            "repo": "https://github.com/lx051/QuantumultX",

        })

        all()

    }

}

function getCookie() {

    if (lk.isGetCookie(/\/home\signup/)) {

        if ($request.headers.hasOwnProperty('Cookie')) {

            lk.setVal(boylove3CookieKey, $request.headers.Cookie)

            lk.appendNotifyInfo('🎉成功获取boylove3签到cookie，可以关闭相应脚本')

        } else {

            lk.appendNotifyInfo('❌获取boylove3签到cookie失败')

        }

        lk.msg('')

    }

}

async function all() {

    if (boylove3Cookie == '') {

        lk.execFail()

        lk.appendNotifyInfo(`⚠️请先先根据脚本注释获取cookie`)

    } else {

        await signIn()

    }

    lk.msg(``)

    lk.done()

}

function signIn() {

    return new Promise((resolve, reject) => {

        lk.log("开始签到")

        const t = '签到'

        let url = {

            url: 'https://boylove3.cc/home/signup',

            headers: {

                cookie: boylove3Cookie,

                "User-Agent": lk.userAgent

            }

        }

        lk.post(url, (error, response, data) => {

            try {

                if (error) {

                    lk.execFail()

                    lk.appendNotifyInfo(`❌${t}失败，请稍后再试`)

                } else {

                    let msg = data.split(`<h4 class="card-title text-center mb-0">`)[1].split(`</i>`)[1].split("<")[0]

                    if (msg) {

                        lk.appendNotifyInfo(`🎉${msg.trim()}`)

                        lk.log(msg.trim())

                        resolve(`suc🎉${msg.trim()}`)

                    } else {

                        lk.execFail()

                        lk.appendNotifyInfo(data)

                    }

                }

            } catch (e) {

                lk.logErr(e)

                lk.log(`返回数据：${data}`)

                lk.execFail()

                lk.appendNotifyInfo(`❌${t}错误，请带上日志联系作者，或稍后再试`)

                resolve(`fail`)

            } finally {

                resolve()

            }

        })

    })

}
