export const content = `阅读短文，选择正确的答案，
    Every year, we have the Spring Festival in China. 
    <div id="r1" class="bias">
      <span>It's <b>usually</b> in January or</span> 
    </div>
    February. It's the most important(最重要的)festival in China. So before it
    comes, people always 
    <div id="r2" class="bias">
      <span>prepare(i)a lot of.<b>things</b> And they often make a</span> 
    </div>
    special kind of food-dumplings (傚). The food means "coming together"
    Before the festival, parents buy new clothes for their children. On Chinese New
    Year's Eve, all the family members come back to their home. This is a happy
    moment(时刻). When they enjoy dinner, they give each other the best wishes(最
 `


export const paragraph =  [
  {
      "entranceText" : "琪琪同学，跟AI老师一起来解读全文吧~", // 串场词 入场AI讲解
      "entranceAudio": "xxx.mp3", // 串场词音频
      "content": `special kind of food-dumplings (傚). The food means "coming together"
                  Before the festival, parents buy new clothes for their children. On Chinese New
                  Year's Eve, all the family members come back to their home. This is a happy
                  moment(时刻). When they enjoy dinner, they give each other the best wishes`,
      "index": 1,
      "sentence": [ // 句子list
          {
              "index": 1,
              "srcText": "It's usually in January or February. ", // 英文句子
              "srcAudio": "xxx.mp3",
              "translText": "通常在一月或二月", // 句子的原文
              "interpretText": "usually就是通常，这里说春节通常在一月或者二月呀", // 解读内容字幕
              "translAudio": "xxx.mp3",
              "keyContent": [ // 重点内容
                  { 
                      "type":"1", // 1代表画横线 2: 代表画虚线， 3...
                      "word": "usually",
                      "desc": "时态: 一般现在时"
                  },
                  {
                      "type":"2", // 1代表画横线 2: 代表画虚线， 3...
                      "word": "February",
                      "desc": "半元音，发音时双唇收圆并向前突出"
                  }
              ]
          },
          {
              "index": 2,
              "srcText": "It is on the second floor.",
              "srcAudio": "xxx.mp3",
              "translText": "它在二楼。",
              "interpretText": " ", // 解读内容字段
              "translAudio": "xxx.mp3",
              "keyContent": [] // 重点内容
          },
          {
              "index": 3,
              "srcText": "This way, please.",
              "srcAudio": "xxx.mp3",
              "translText": "请这边走。",
              "interpretText": " ", // 解读内容字段
              "translAudio": "xxx.mp3",
              "keyContent": [] // 重点内容
          },
      ]
  },
]
