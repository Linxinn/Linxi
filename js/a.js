	/*
	
APTV：https://apps.apple.com/app/id1630403500

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Linxinn/Linxi/main/js/a.js

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request https://raw.githubusercontent.com/Linxinn/Linxi/main/js/a.js

[MITM]
hostname = api.revenuecat.com

*/
const linxi = {};
const linxi6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  linxi6.headers = $request.headers;
} else if (linxi6 && linxi6.subscriber) {
  linxi6.subscriber.subscriptions = linxi6 .subscriber.subscriptions || {};
  linxi6.subscriber.entitlement = guding6.subscriber.entitlement || {};
  const app = 'gd';const list = {'gd':{name: 'pro', id: 'com.kimen.aptvpro.lifetime'}};
  const data = {
    "expires_date": "2029-08-18T08:18:28Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"};
for (const i in list) { if (new RegExp(`^${i}`, `i`).test(app)) {
linxi6.subscriber.subscriptions[list[i].id] = data;
linxi6.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
linxi6.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
                break;
          }
    }
    guding.body = JSON.stringify(linxi6);
}

$done(linxi);
