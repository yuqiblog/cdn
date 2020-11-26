var xiaokang = new xkTool(param1,param2);
var xiaokang = new xkTool();
var xiaokang = new xkTool(
    "https://cdn.jsdelivr.net/gh/yuqiblog/cdn@v1.0/img/beijing.jpg"
  );
  var xiaokang = new xkTool("transparent");
  
xiaokang.changeBanner(param);
xiaokang.randomBanner(
    "https://cdn.jsdelivr.net/gh/yunwanjia-cloud/banner/", // 前半部分网址
    "-min.jpg", // 后半部分网址
    0, // 随机数开始范围
    2, // 随机数结束范围
    true // 是否开启滤镜 默认不开启
);
xiaokang.mobileSidebar();
xiaokang.codeFull();
xiaokang.consoleAnchor();
xiaokang.bgPage();
// 设置随机背景的图片
xiaokang.imgList = [
    "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
    "https://ae01.alicdn.com/kf/Hb4b6a83a124049819bd561439312edc96.jpg",
    "https://ae01.alicdn.com/kf/H146b0a3e074a4e91b11fcce994098034y.jpg",
    "https://ae03.alicdn.com/kf/H76674cd5901840be9b12f8596bb649bdP.jpg",
  ];
  // 调用随机背景
  xiaokang.randomBg();