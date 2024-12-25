export const questionList = [
    {
        "id": 1,
        "entranceText" : "接下来，我们一起看看这些小题怎么做吧", // 串场词 入场AI讲解
        "entranceAudio": "xxx.mp3", // 串场词音频
        "content": "Which is the most important festival in China?  ", // 题目内容
        "translate": "中国最重要的节日是哪个？", // 中文翻译
        "options": [ //答案选项
            {
                "key": "A.Christmas",
                "desc": "圣诞节"
            },
            {
                "key": "B.May Day ",
                "desc": "五一劳动节"
            },
            {
                "key": "C.The Spring Festival",
                "desc": "春节"
            }
        ],
        "analysis": "根据题干关键词“the most important festival”，可在原文中找到关键句“It's the most important(最重要的)festival in China.”。由此可知文中提到的最重要的节日是春节，A选项圣诞节是西方节日，B选项五一劳动节并非文中所指的最重要节日，均不符合原文意思。", // 解释
        "answer": ["C"], // 正确答案
        "vocabulary": [ // 常考词汇
            {
                "word": "Spring Festival",
                "desc": "Spring Festival 名词，意为春节，是中国最重要的传统节日，如We celebrate the Spring Festival every year.（我们每年都庆祝春节。）"
            },
            {
                "word": "important",
                "desc": "important 讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字"
            }
        ],
        "logAnalysis": [ // 长难句解析
            {
                "word": "at a level which is a long way above the ground or above the level of the sea It's the most important festival in China.",
                "desc": "解析文字解析文字解析文字解析文字解析文字解析文字解析文字解析文字解析文字解析文字解析文字解析文字"
            },
            {
                "word": "It's the most important festival in Chin",
                "desc": "important 讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字讲解文字"
            }
        ],
        // 题目讲解,可能涉及多个讲解音频，每个音频需要对于音频的文本和需要花横线的内容
       "explainList": [ //讲解
            {
                "srcText": "可在原文中找到关键句“It's the most important(最重的) festival in China.", // 讲解字幕
                "srcAudio": "xxx.mp3", // 讲解音频
                "explainText":"the most important festival in? ", // 讲解中的文本
                "type":"1", // 1代表画横线 2: 代表画虚线，..,
                "keyContent": [
                    { // 关键内容list
                        "type":"1", // 1代表画横线 2: 代表画虚线， 3：。。。
                        "desc":  "It's the most important(最重要的) festival in China.", 
                    }
                ]
            },
            { 
                "srcText": " “I 重要节日，均不符合原文意思。", // 字幕
                "srcAudio": "xxx.mp3",// 讲解音频
                "explainText":"festival in", // 讲解中的文本
                "type":"1", // 1代表画横线 2: 代表画虚线，..,
                "keyContent": [{
                    "type":"2", // 1代表画横线 2: 代表画虚线， 3：。。。
                    "desc":  "festival in China.", 
                }]
            },
        ]
    },
    {
        "id": 2,
        "entranceText" : "文主要介绍了莉莉来自加拿大，目前在中国学习，她计划在圣诞节购买礼物，并计划下周和同学们一起去哈尔滨看雪并滑雪", // 串场词 入场AI讲解
        "entranceAudio": "./audio/11000001.mp3", // 串场词音频
        "content": "Which is the most important festival in China?  ", // 题目内容
        "translate": "中国最重要的节日是哪个？", // 中文翻译
        "options": [ //答案选项
            {
                "key": "A.It is on the second floor.",
                "desc": "它在二楼"
            },
            {
                "key": "B.This way, please. ",
                "desc": "请这边走。"
            },
            {
                "key": "C.Look! There are forty-five computers in it.",
                "desc": "看！里面有四十五台电脑。"
            }
        ],
        "analysis": "根据题干关键词“map”，我们可在原文中找到关键句“This is a picture and that is a map.”。根据关键句可知电脑房里有一张地图，题干描述与原文意思相符。", // 解释
        "answer": ["C"], // 正确答案
        "vocabulary": [ // 常考词汇
            {
                "word": "The floor is pink",
                "desc": "The floor is pink 名词，意为春节，是中国最重要的传统节日，如We celebrate the Spring Festival every year.（我们每年都庆祝春节。）"
            },
            {
                "word": "The wall is green",
                "desc": "important 地板是粉红色的。"
            }
        ],
        "logAnalysis": [ // 长难句解析
            {
                "word": "aWe have forty-five computers.",
                "desc": "可能更为友好，或者在滑动到相应的slide后再进行一次瞬间跳转。"
            },
            {
                "word": "mySwiper.slideTo",
                "desc": "控制Swiper切换到指定slide。"
            }
        ],
        // 题目讲解,可能涉及多个讲解音频，每个音频需要对于音频的文本和需要花横线的内容
       "explainList": [ //讲解
            {
                "srcText": "可在原文中找到关键句“It's the most important(最重的) festival in China.", // 讲解字幕
                "srcAudio": "xxx.mp3", // 讲解音频
                "explainText":"the most important festival in? ", // 讲解中的文本
                "type":"1", // 1代表画横线 2: 代表画虚线，..,
                "keyContent": [
                    { // 关键内容list
                        "type":"1", // 1代表画横线 2: 代表画虚线， 3：。。。
                        "desc":  "It's the most important(最重要的) festival in China.", 
                    }
                ]
            },
            { 
                "srcText": " “I 重要节日，均不符合原文意思。", // 字幕
                "srcAudio": "xxx.mp3",// 讲解音频
                "explainText":"festival in", // 讲解中的文本
                "type":"1", // 1代表画横线 2: 代表画虚线，..,
                "keyContent": [{
                    "type":"2", // 1代表画横线 2: 代表画虚线， 3：。。。
                    "desc":  "festival in China.", 
                }]
            },
        ]
    }
]