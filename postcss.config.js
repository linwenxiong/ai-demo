export default {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 2328, // 设计稿的宽度
      viewportHeight: 1600, // 设计稿的高度，可以不配置
      unitPrecision: 5,
      viewportUnit: 'vw', 
      selectorBlackList: ['.ignore', '.hairlines'], // 不进行转换的类名
      minPixelValue: 1,
      mediaQuery: true, 
      exclude: [/node_modules/], 
      landscape: true, // 是否添加根据横屏视口宽度转换的媒体查询
      landscapeUnit: 'vw', // 横屏下需要转换成的视窗单位
      landscapeWidth: 2328, // 横屏时的视窗宽度
    },
  },
};

// viewportWidth: 375, // 设计稿的宽度
// viewportHeight: 667, // 设计稿的高度，可以不配置
// unitPrecision: 5, // 转换后的单位精度
// viewportUnit: 'vw', // 转换为的视窗单位
// selectorBlackList: ['.ignore', '.hairlines'], // 不进行转换的类名
// minPixelValue: 1, // 小于或等于 1px 不转换为视窗单位
// mediaQuery: false, // 允许在媒体查询中转换 px
// exclude: [/node_modules/], // 排除 node_modules 文件夹
// landscape: false, // 是否添加根据横屏视口宽度转换的媒体查询
// landscapeUnit: 'vw', // 横屏下需要转换成的视窗单位
// landscapeWidth: 568, // 横屏时的视窗宽度