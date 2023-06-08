[rewrite_local]
^https:\/\/43\.133\.187\.238\/addressx5\/index\.html url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.133\.187\.238\/addressx5\/index\.html url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/xiashk\.com\/addressx5 url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/xiashk\.com\/addressx5 url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.153\.65\.5\/addressx5\/index\.html url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

https?:\/\/43\.153\.65\.5\/addressx5\/index\.html url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.133\.187\.238\/addressx5\/index\.html url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.133\.187\.238\/addressx5\/index\.html url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/xsserve\.com\/addressx5 url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/xsserve\.com\/addressx5 url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.153\.98\.179\/addressx5\/index\.html url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.153\.98\.179\/addressx5\/index\.html url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.133\.187\.238\/addressx5\/index\.html url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.133\.187\.238\/addressx5\/index\.html url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.153\.8\.115\/addressx5\/index\.html url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.153\.8\.115\/addressx5\/index\.html url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.153\.8\.115\/addressx5\/index\.html url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.153\.8\.115\/addressx5\/index\.html url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.133\.187\.238\/addressx5\/index\.html url url script-request-header xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

^https?:\/\/43\.133\.187\.238\/addressx5\/index\.html url script-response-body xiashk.js https://raw.githubusercontent.com/lx051/QuantumultX/main/js/xiashk.js

#[mitm]
#hostname =

var Url = $request.url;
function setQueryString(key, val) { 
    var url = Url.split('?'), search=url[1];
    var query = {};
    if (search) {
        search.split('&').forEach((item) => {
            var arr = item.split('=');
            query[arr[0]] = arr[1];
        });
    }
    query[key] = val;
    var queryArr = [];
    for (var p in query) {
        queryArr.push(p + '=' + query[p]);
    }
    return url[0]+'?'+queryArr.join('&');
};


console.log(Url);
$done({ url:Url });

//
var body=$response.body;

$done(body);
