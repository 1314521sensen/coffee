
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/shopStore/shopStore","pages/shop/shop","pages/coffeebanner/coffeebanner","pages/coffeezhonglei/coffeezhonglei","pages/my/mydetails","pages/my/my","pages/my/registered"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/shopStore/shopStore","iconPath":"static/icon/bookwei.png","selectedIconPath":"static/icon/book.png","text":"介绍"},{"pagePath":"pages/coffeezhonglei/coffeezhonglei","iconPath":"static/icon/coffeewei.png","selectedIconPath":"static/icon/coffee.png","text":"种类"},{"pagePath":"pages/shop/shop","iconPath":"static/icon/charwei.png","selectedIconPath":"static/icon/char.png","text":"购物车"},{"pagePath":"pages/my/mydetails","iconPath":"static/icon/mywei.png","selectedIconPath":"static/icon/my.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"coffee","compilerVersion":"2.5.1","entryPagePath":"pages/index/index","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/shopStore/shopStore","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/shop/shop","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/coffeebanner/coffeebanner","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/coffeezhonglei/coffeezhonglei","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/my/mydetails","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/my/my","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/my/registered","meta":{},"window":{"navigationStyle":"custom","BackgroundColor":"#FFFFFF"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
