var quiz_suffix = [
    '孩子 親子 兒子 妻子 房子 車子 例子 日子',
    '個人 病人 女人 別人 男人 令人 家人 老人',
    '鏡頭 街頭 石頭 點頭 抬頭 回頭 舌頭 搖頭',
    '推出 指出 提出 演出 輸出 展出 發出 付出',
    '海水 淡水 河水 薪水 戲水 山水 雨水 飲水',
    '中心 擔心 小心 信心 關心 愛心 決心 內心',
    '土地 當地 各地 大地 天地 場地 陸地 園地',
    '擴大 重大 長大 偉大 巨大 龐大 臺大 廣大',
    '學生 發生 產生 先生 人生 醫生 招生 一生',
    '故事 從事 人事 做事 同事 軍事 大事 心事',
    '景氣 空氣 天氣 生氣 風氣 勇氣 冷氣 客氣',
    '美國 中國 英國 全國 法國 德國 民國 我國',
    '選手 對手 著手 分手 雙手 高手 動手 攜手',
    '登山 火山 高山 玉山 焦山 中山 爬山 江山',
    '進行 舉行 銀行 流行 執行 發行 旅行 央行',
    '知道 管道 味道 軌道 頻道 難道 街道 陰道',
    '其中 國中 高中 臺中 心中 集中 當中 手中',
    '國家 大家 專家 回家 作家 人家 畫家 全家',
    '活動 運動 推動 行動 自動 移動 驅動 感動',
    '成長 家長 校長 市長 院長 生長 部長 縣長',
    '能力 壓力 努力 動力 馬力 權力 暴力 扭力',
    '今天 每天 明天 昨天 夏天 春天 冬天 當天',
    '部門 氣門 金門 專門 出門 大門 油門 熱門',
    '無法 方法 辦法 看法 說法 想法 書法 手法',
    '英文 中文 作文 語文 徵文 天文 人文 國文',
    '一起 引起 想起 興起 升起 掀起 崛起 談起',
    '雖然 自然 當然 仍然 突然 顯然 依然 竟然',
    '陽光 觀光 風光 眼光 時光 燈光 發光 曝光',
    '汽車 轎車 跑車 火車 機車 新車 賽車 房車',
    '社會 機會 體會 都會 國會 大會 學會 開會',
    '絕不 要不 從不 無不 豈不',
    '車身 本身 全身 出身 自身 終身 親身 轉身',
    '作風 颱風 擋風 通風 北風 寒風 拉風 海風',
    '注意 創意 願意 同意 滿意 生意 有意 民意',
    '道德 西德 美德 功德 品德 東德 景德 賴德',
    '方面 全面 裡面 畫面 表面 上面 前面 下面',
    '使用 利用 作用 運用 採用 費用 應用 實用',
    '未來 出來 後來 原來 起來 回來 下來 本來',
    '事情 心情 愛情 感情 熱情 病情 行情 表情',
    '角色 特色 顏色 白色 綠色 黑色 藍色 彩色',
    '獲利 順利 權利 有利 福利 不利 便利 勝利',
    '進入 加入 投入 收入 深入 介入 陷入 列入',
    '蓮花 開花 插花 鮮花 火花 印花 荷花 桃花',
    '諾斯 瓦斯 宙斯 福斯 魏斯 卡斯 米斯 貝斯',
    '上海 大海 沿海 南海 腦海 死海 航海 北海',
    '道路 鐵路 馬路 公路 網路 一路 走路 山路',
    '沒有 只有 所有 擁有 還有 具有 都有 也有',
    '文化 變化 消化 惡化 強化 綠化 美化 轉化',
    '今日 生日 假日 昔日 夏日 即日 平日 時日',
    '教學 科學 大學 文學 小學 數學 同學 中學',
    '報名 著名 排名 知名 命名 提名 姓名 有名',
    '身體 媒體 團體 整體 人體 軟體 氣體 集體',
    '心聲 掌聲 歌聲 大聲 相聲 笑聲 呼聲 輕聲',
    '說明 證明 聰明 發明 文明 光明 透明 聲明',
    '人口 進口 出口 門口 傷口 港口 開口 洞口',
    '讀書 圖書 念書 新書 看書 教書 祕書 文書',
    '同時 當時 小時 有時 隨時 此時 暫時 平時',
    '造成 形成 完成 變成 達成 組成 構成 贊成',
    '辦公 外公 包公 公公 老公 上公 阿公 雷公',
    '看到 得到 達到 受到 找到 感到 想到 見到',
    '展開 離開 公開 打開 召開 揭開 分開 解開',
    '全部 內部 教部 南部 幹部 頭部 北部 西部',
    '一定 決定 規定 肯定 確定 穩定 訂定 設定',
    '英語 國語 母語 成語 臺語 言語 外語 標語',
    '完美 歐美 優美 讚美 北美 精美 媲美 選美',
    '今年 去年 少年 明年 青年 每年 當年 童年',
    '引進 前進 改進 促進 先進 增進 走進 推進',
    '去世 前世 問世 逝世 轉世 人世 出世 過世',
    '資金 基金 黃金 現金 美金 獎金 年金 本金',
    '管理 處理 心理 辦理 合理 經理 代理 整理',
    '危機 飛機 時機 司機 班機 動機 生機 投機',
    '員工 勞工 人工 義工 打工 加工 施工 完工',
    '女性 男性 特性 人性 彈性 個性 理性 異性',
    '市場 登場 現場 立場 機場 球場 廣場 會場',
    '地方 西方 對方 雙方 北方 東方 官方 南方',
    '偶爾 梅爾 奎爾 希爾 艾爾 貝爾 比爾 吉爾',
    '觀點 地點 重點 焦點 優點 要點 特點 缺點',
    '居住 抓住 留住 記住 小住 同住 保住 圍住',
    '制度 速度 態度 程度 角度 再度 高度 印度',
    '配合 結合 適合 符合 整合 組合 綜合 聯合',
    '嚴重 尊重 體重 注重 著重 沉重 加重 隆重',
    '路線 光線 直線 專線 連線 院線 航線 熱線',
    '影片 照片 國片 拍片 一片 卡片 製片 短片',
    '化石 隕石 岩石 結石 寶石 鑽石 大石 基石',
    '動物 人物 食物 生物 植物 禮物 藥物 事物',
    '長城 古城 坎城 守城 漢城 府城 進城 大城',
    '毫克 徐克 馬克 捷克 派克 公克 坦克 休克',
    '精神 眼神 死神 門神 女神 天神 提神 傳神',
    '快樂 音樂 歡樂 娛樂 育樂 遊樂 同樂 國樂',
    '開發 出發 研發 引發 爆發 分發 散發 蒸發',
    '申報 海報 情報 簡報 回報 日報 會報 警報',
    '股價 售價 代價 物價 評價 車價 廉價 漲價',
    '語言 預言 而言 宣言 揚言 感言 發言 寓言',
    '看見 意見 再見 常見 接見 可見 聽見 罕見',
    '提高 調高 身高 升高 崇高 昇高 增高 偏高',
    '羅馬 人馬 金馬 騎馬 木馬 出馬 河馬 斑馬',
    '飲食 進食 美食 零食 米食 捕食 節食 糧食',
    '宗教 請教 幼教 佛教 回教 國教 管教 特教',
    '行政 財政 執政 施政 憲政 市政 黨政 歸政',
    '情形 地形 變形 外形 無形 圓形 造形 圖形',
    '不安 平安 西安 李安 治安 早安 公安 晚安',
    '日本 基本 成本 根本 原本 資本 劇本 課本',
    '返回 收回 來回 挽回 找回 帶回 駁回 重回',
    '工作 合作 創作 製作 動作 操作 運作 寫作',
    '民主 車主 地主 公主 得主 自主 為主 真主',
    '角落 部落 低落 失落 沒落 降落 墮落 脫落',
    '方式 正式 模式 形式 儀式 型式 公式 款式',
    '單位 地位 定位 部位 價位 各位 座位 這位',
    '舞臺 下臺 電臺 上臺 來臺 登臺 陽臺 在臺',
    '症狀 形狀 現狀 原狀 球狀 環狀 帶狀 塊狀',
    '明星 星星 衛星 行星 火星 巨星 恆星 金星',
    '人數 少數 多數 術數 指數 無數 分數 變數',
    '溫和 祥和 調和 緩和 柔和 飽和 總和 永和',
    '品質 物質 特質 實質 性質 本質 材質 氣質',
    '煙火 大火 戰火 燈火 軍火 失火 防火 聖火',
    '人民 農民 移民 選民 居民 國民 市民 全民',
    '唯一 統一 第一 單一 萬一 逐一 不一 一一',
    '口號 訊號 符號 信號 問號 編號 記號 名號',
    '地球 全球 月球 星球 棒球 足球 桌球 氣球',
    '殺死 生死 餓死 該死 求死 致死 凍死 害死',
    '企業 專業 事業 產業 工業 畢業 商業 作業',
    '國小 大小 縮小 從小 渺小 實小 矮小 小小',
    '釣魚 金魚 鯨魚 鱷魚 大魚 捕魚 鯰魚 雌魚',
    '走紅 當紅 臉紅 發紅 口紅 粉紅 分紅 血紅',
    '挑戰 連戰 選戰 大戰 作戰 冷戰 開戰 首戰',
    '家電 閃電 發電 水電 太電 充電 停電 臺電',
    '力量 大量 質量 考量 數量 重量 能量 測量',
    '命運 奧運 營運 捷運 區運 幸運 學運 亞運',
    '電視 重視 忽視 近視 巡視 歧視 正視 注視',
    '輸血 出血 流血 貧血 心血 捐血 鮮血 缺血',
    '好處 到處 四處 處處 相處 深處 遠處 去處',
    '中華 豪華 繁華 精華 萬華 才華 來華 奢華',
    '可能 功能 才能 性能 只能 未能 技能 潛能',
    '國王 稱王 帝王 大王 貓王 女王 封王 天王',
    '獨特 奇特 福特 卡特 康特 瓦特 伏特 哈特',
    '良好 美好 只好 看好 正好 真好 剛好 偏好',
    '天下 地下 剩下 鄉下 上下 放下 屬下 坐下',
    '主角 三角 觸角 挖角 街角 配角 嘴角 要角',
    '節目 項目 矚目 注目 數目 題目 盲目 科目',
    '疾病 生病 發病 性病 毛病 看病 治病 患病',
    '主流 交流 潮流 一流 河流 寒流 輪流 溪流',
    '婦女 子女 男女 少女 美女 兒女 淑女 妓女',
    '部分 十分 充分 身分 公分 成分 過分 水分',
    '相信 自信 書信 迷信 置信 寫信 深信 堅信',
    '恐龍 成龍 巨龍 接龍 烏龍 舞龍 翼龍 九龍',
    '公里 千里 玉里 鄰里 八里 萬里 大里 村里',
    '已經 曾經 神經 歷經 財經 政經 聖經 月經',
    '成立 建立 獨立 設立 私立 公立 國立 創立',
    '他拉 毛拉 西拉 蘿拉 沙拉 拖拉 庫拉 推拉',
    '溫州 廣州 蘇州 加州 福州 杭州 潁州 揚州',
    '生命 革命 算命 致命 拚命 宿命 性命 壽命',
    '字眼 耀眼 著眼 雙眼 放眼 肉眼 搶眼 一眼',
    '生產 財產 資產 國產 遺產 量產 破產 日產',
    '公布 宣布 分布 瀑布 遍布 發布 散布 尿布',
    '人士 博士 護士 女士 瑞士 碩士 男士 武士',
    '總之 反之 次之 隨之',
    '主管 儘管 不管 血管 氣管 企管 膽管 接管',
    '太空 天空 時空 夜空 航空 落空 上空 高空',
    '森林 樹林 柏林 碑林 叢林 雲林 山林 雨林',
    '長期 時期 星期 早期 預期 初期 定期 假期',
    '廠商 臺商 外商 建商 協商 片商 工商 日商',
    '表達 到達 高達 抵達 發達 傳達 長達 馬達',
    '丟掉 吃掉 戒掉 除掉 賣掉 拔掉 拆掉 脫掉',
    '票房 病房 廚房 乳房 廠房 書房 藥房 樓房',
    '公平 和平 水平 扁平 北平 生平 持平 天平',
    '作品 產品 商品 食品 物品 毒品 用品 矽品',
    '晚上 身上 馬上 早上 地上 路上 皇上 手上',
    '價格 風格 嚴格 合格 性格 人格 資格 規格',
    '可愛 喜愛 最愛 戀愛 親愛 關愛 熱愛 偏愛',
    '北市 高市 上市 城市 股市 都市 中市 縣市',
    '內衣 毛衣 洗衣 新衣 大衣 外衣 舊衣 彩衣',
    '網羅 蒐羅 保羅 張羅 掃羅 梭羅 米羅 克羅',
    '大約 紐約 契約 預約 解約 合約 節約 隱約',
    '幸福 祝福 造福 祈福 惜福 有福 社福 禍福',
    '印尼 芬尼 阻尼 強尼',
    '過去 失去 下去 回去 出去 進去 離去 上去',
    '趨勢 優勢 情勢 姿勢 強勢 局勢 氣勢 走勢',
    '認知 得知 通知 無知 可知 熟知 告知 新知',
    '加熱 狂熱 發熱 過熱 熾熱 火熱 炎熱 燠熱',
    '顧客 遊客 乘客 政客 旅客 訪客 請客 常客',
    '包裝 內裝 服裝 安裝 童裝 西裝 加裝 改裝',
    '真皮 包皮 頑皮 頭皮 牛皮 俏皮 草皮 貂皮',
    '丈夫 功夫 農夫 工夫 大夫 班夫 漁夫 腳夫',
    '車型 造型 大型 類型 典型 小型 中型 轉型',
    '聲音 噪音 錄音 隔音 福音 觀音 口音 發音',
    '電話 說話 童話 講話 神話 談話 笑話 對話',
    '中葉 茶葉 樹葉 落葉 楓葉 枝葉 風葉 肺葉',
    '外科 專科 學科 百科 內科 婦科 牙科 雉科',
    '互相 亮相 真相 長相 照相 爭相 首相 實相',
    '計畫 繪畫 漫畫 規畫 年畫 插畫 國畫 壁畫',
    '進步 腳步 逐步 散步 初步 起步 同步 地步',
    '金錢 賺錢 有錢 價錢 花錢 出錢 本錢 借錢',
    '意義 主義 鄭義 正義 定義 嘉義 名義 廣義',
    '政權 人權 授權 特權 金權 股權 產權 版權',
    '方案 答案 個案 圖案 專案 草案 檔案 文案',
    '鄰居 定居 同居 位居 自居 屈居 新居 隱居',
    '教局 當局 結局 格局 政局 郵局 布局 出局',
    '現在 存在 實在 正在 內在 自在 所在 站在',
    '地區 社區 市區 選區 山區 郊區 分區 東區',
    '冠軍 進軍 海軍 空軍 童軍 將軍 美軍 陸軍',
    '滿足 十足 充足 遠足 立足 管足 失足 足足',
    '自製 研製 繪製 印製 特製 精製 複製 編製',
    '服藥 醫藥 換藥 用藥 農藥 中藥 吃藥 成藥',
    '手腳 樁腳 落腳 山腳 赤腳 註腳 牆腳 雙腳',
    '因為 成為 認為 行為 以為 稱為 做為 人為',
    '但是 就是 只是 可是 於是 都是 還是 也是',
    '小島 關島 寶島 離島 半島 孤島 南島 海島',
    '事實 其實 確實 現實 真實 落實 充實 誠實',
    '許多 眾多 大多 過多 增多 諸多 繁多 居多',
    '本土 鄉土 出土 國土 泥土 領土 黏土 水土',
    '控制 限制 體制 管制 抑制 強制 機制 節制',
    '女兒 幼兒 嬰兒 那兒 哪兒 這兒 鳥兒 孤兒',
    '筋骨 軟骨 肋骨 胸骨 排骨 鎖骨 虎骨 碎骨',
    '改變 轉變 演變 蛻變 突變 應變 病變 多變',
    '業者 患者 讀者 學者 或者 記者 作者 筆者',
    '認清 澄清 釐清 繳清 明清 滿清 尤清 冷清',
    '銀河 冰河 運河 星河 黃河 小河 拔河 先河',
    '地板 看板 踏板 刻板 木板 銅板 石板 鋼板',
    '歲月 每月 七月 正月 六月 賞月 八月 明月',
    '另外 此外 國外 海外 意外 例外 戶外 老外',
    '趣味 意味 滋味 品味 風味 口味 氣味 美味',
    '甄選 競選 直選 當選 大選 參選 票選 挑選',
    '東西 摩西 巴西 關西 山西 廣西 美西 江西',
    '高職 任職 就職 辭職 技職 全職 離職 兼職',
    '明白 黑白 空白 清白 對白 坦白 旁白 蒼白',
    '充滿 不滿 圓滿 豐滿 撲滿 爆滿 美滿 擠滿',
    '背景 風景 前景 情景 美景 遠景 場景 奇景',
    '最後 之後 然後 以後 背後 落後 日後 前後',
    '地帶 一帶 攜帶 領帶 熱帶 臍帶 附帶 連帶',
    '老師 教師 醫師 大師 律師 牧師 廚師 禪師',
    '寶寶 珠寶 法寶 瑰寶 國寶 尋寶 天寶 挖寶',
    '名字 數字 文字 赤字 寫字 題字 識字 八字',
    '士兵 尖兵 衛兵 老兵 憲兵 當兵 官兵 出兵',
    '美麗 華麗 亮麗 高麗 壯麗 鮮麗 豔麗 絢麗',
    '喝酒 飲酒 啤酒 酗酒 美酒 洋酒 喜酒 釀酒',
    '小說 傳說 據說 聽說 演說 解說 遊說 關說',
    '底盤 飛盤 全盤 圓盤 大盤 地盤 操盤 通盤',
    '希望 期望 渴望 願望 失望 慾望 展望 可望',
    '資料 飲料 材料 原料 預料 不料 燃料 史料',
    '器官 法官 長官 軍官 感官 文官 高官 大官',
    '利基 根基 地基 登基 奠基 路基 牆基 稅基',
    '服務 業務 財務 任務 事務 義務 職務 實務',
    '時代 年代 現代 取代 古代 世代 近代 清代',
    '交通 溝通 普通 卡通 流通 三通 變通 共通',
    '這種 各種 車種 種種 那種 一種 品種 絕種',
    '花燈 路燈 紅燈 天燈 點燈 尾燈 車燈 頭燈',
    '情感 敏感 美感 靈感 性感 快感 動感 質感',
    '機器 武器 利器 電器 儀器 樂器 容器 石器',
    '越南 臺南 迦南 雲南 東南 江南 湖南 西南',
    '密集 收集 聚集 蒐集 召集 採集 市集 匯集',
    '時間 空間 民間 期間 房間 人間 中間 夜間',
    '出走 行走 奔走 游走 趕走 遊走 奪走 逃走',
    '強調 協調 空調 色調 步調 格調 曲調 情調',
    '了解 瞭解 理解 溶解 化解 瓦解 誤解 見解',
    '資源 來源 水源 能源 起源 根源 淵源 財源',
    '真正 修正 公正 反正 雍正 矯正 糾正 改正',
    '樹木 積木 林木 灌木 原木 草木 麻木 枯木',
    '電影 攝影 陰影 錄影 身影 中影 蹤影 人影',
    '興建 重建 封建 福建 擴建 改建 國建 營建',
    '採取 爭取 攝取 換取 錄取 領取 抽取 收取',
    '朋友 親友 好友 男友 女友 交友 工友 室友',
    '太陽 夕陽 蘭陽 洛陽 鳳陽 陰陽 豔陽 歐陽',
    '古老 大老 法老 元老 年老 長老 衰老 養老',
    '股票 郵票 投票 選票 鈔票 機票 支票 買票',
    '方向 走向 傾向 轉向 一向 邁向 導向 取向',
    '百貨 期貨 出貨 缺貨 交貨 存貨 供貨 進貨',
    '漁船 帆船 划船 拆船 乘船 龍船 飛船 商船',
    '首次 每次 其次 這次 再次 層次 多次 梯次',
    '衣服 舒服 克服 征服 說服 佩服 制服 禮服',
    '覺得 獲得 值得 取得 記得 所得 難得 心得',
    '成功 用功 歸功 氣功 大功 有功 立功 事功',
    '受傷 損傷 重傷 創傷 悲傷 憂傷 燙傷 感傷',
    '伯伯 赫伯 老伯 巴伯 河伯 阿伯 韋伯 霍伯',
    '書香 榜香 清香 芳香 花香 茶香 飄香 吃香',
    '人類 種類 分類 鳥類 這類 魚類 肉類 各類',
    '來自 親自 各自 獨自 源自 暗自 出自 起自',
    '春節 季節 細節 情節 調節 時節 環節 年節',
    '意思 心思 省思 沉思 巧思 深思 構思 迷思',
    '混亂 動亂 紊亂 髒亂 錯亂 雜亂 紛亂 胡亂',
    '軍隊 車隊 排隊 球隊 團隊 部隊 樂隊 領隊',
    '快速 迅速 加速 轉速 高速 急速 時速 極速',
    '不論 討論 無論 理論 結論 言論 評論 談論',
    '座談 交談 會談 談談 暢談 商談 訪談 言談',
    '情結 連結 心結 勾結 團結 凍結 癥結 終結',
    '名稱 宣稱 簡稱 自稱 號稱 堪稱 戲稱 著稱',
    '汽油 中油 加油 省油 醬油 石油 燈油 柴油',
    '三毛 羽毛 刷毛 腳毛 睫毛 皮毛 長毛 眉毛',
    '民族 家族 種族 貴族 苗族 九族 漢族 皇族',
    '重新 全新 創新 更新 革新 清新 嶄新 翻新',
    '起飛 直飛 高飛 紛飛 岳飛 試飛 川飛 孤飛',
    '宜蘭 荷蘭 樓蘭 波蘭 哈蘭 芬蘭 米蘭 曹蘭',
    '才藝 工藝 技藝 陶藝 文藝 遊藝 手藝 演藝',
    '疼痛 頭痛 腹痛 背痛 苦痛 悲痛 牙痛 陣痛',
    '車款 貸款 存款 放款 改款 付款 募款 罰款',
    '由於 對於 終於 至於 屬於 關於 等於 處於',
    '意志 同志 立志 鬥志 職志 心志 神志 禮志',
    '到底 徹底 年底 海底 月底 谷底 澈底 心底',
    '環保 確保 投保 健保 擔保 兒保 自保 農保',
    '下雨 風雨 豪雨 大雨 春雨 陰雨 細雨 雷雨',
    '困難 艱難 苦難 災難 為難 落難 克難 急難',
    ''
];
