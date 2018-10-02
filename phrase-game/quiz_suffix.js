var quiz_suffix = [
    '三子 中子 主子 乾子 亂子 五子 人子 仙子',
    '一人 三人 下人 世人 中人 主人 乏人 予人',
    '一頭 三頭 上頭 丫頭 乳頭 二頭 人頭 伙頭',
    '一出 不出 丟出 交出 亮出 付出 伸出 使出',
    '三水 下水 中水 二水 井水 似水 低水 供水',
    '一心 三心 中心 之心 交心 人心 信心 倒心',
    '之地 伏地 低地 佔地 倏地 倒地 內地 兩地',
    '一大 中大 亞大 交大 人大 佛大 作大 俞大',
    '一生 中生 互生 人生 今生 伴生 作生 來生',
    '一事 世事 主事 了事 事事 人事 任事 佚事',
    '一氣 上氣 下氣 之氣 人氣 低氣 作氣 俗氣',
    '一國 七國 三國 中國 亞國 亡國 他國 伊國',
    '一手 七手 上手 下手 二手 交手 人手 伸手',
    '上山 中山 人山 他山 佳山 儸山 入山 冬山',
    '一行 上行 下行 並行 也行 二行 五行 人行',
    '一道 世道 中道 主道 之道 乾道 井道 人道',
    '一中 三中 不中 之中 亂中 二中 人中 侍中',
    '一家 三家 世家 之家 人家 仇家 住家 何家',
    '一動 不動 主動 互動 傳動 內動 出動 分動',
    '一長 不長 中長 久長 之長 伸長 信長 修長',
    '不力 主力 之力 乏力 亞力 人力 健力 全力',
    '一天 上天 中天 之天 今天 代天 仰天 任天',
    '一門 三門 上門 串門 主門 二門 五門 佛門',
    '不法 中法 乘法 亡法 人法 他法 佛法 作法',
    '一文 中文 人文 伯文 作文 來文 侯文 俄文',
    '一起 不起 並起 串起 今起 做起 再起 冒起',
    '不然 了然 井然 亦然 仍然 使然 依然 信然',
    '三光 五光 亮光 佛光 偏光 光光 剃光 剝光',
    '上車 乘車 五車 交車 人車 便車 修車 倒車',
    '一會 也會 交會 仍會 以會 休會 例會 倒會',
    '一不 三不 上不 下不 也不 了不 事不 以不',
    '一身 三身 上身 人身 以身 保身 修身 俯身',
    '上風 下風 世風 中風 之風 乘風 低風 作風',
    '一意 上意 下意 中意 主意 之意 二意 人意',
    '一德 亞德 仁德 伊德 何德 依德 保德 兩德',
    '一面 上面 下面 人面 介面 假面 側面 傘面',
    '一用 並用 中用 乘用 享用 代用 任用 佔用',
    '一來 上來 下來 中來 亂來 今來 以來 你來',
    '世情 中情 之情 了情 事情 交情 人情 傳情',
    '七色 上色 主色 五色 令色 以色 六色 出色',
    '一利 不利 且利 互利 亞利 亨利 以利 伊利',
    '不入 丟入 介入 伸入 併入 侵入 倒入 傳入',
    '三花 五花 供花 假花 印花 名花 壓花 天花',
    '亞斯 伊斯 休斯 佛斯 佩斯 俄斯 修斯 俾斯',
    '上海 下海 亞海 人海 伯海 侯海 倒海 內海',
    '一路 上路 中路 之路 來路 修路 兩路 八路',
    '不有 也有 事有 亦有 享有 人有 代有 份有',
    '不化 乾化 催化 僵化 兒化 入化 分化 動化',
    '一日 中日 人日 今日 他日 何日 來日 值日',
    '上學 下學 中學 休學 佛學 偷學 儒學 光學',
    '人名 代名 佚名 假名 全名 具名 冒名 出名',
    '一體 下體 主體 五體 人體 個體 全體 共體',
    '一聲 上聲 之聲 人聲 低聲 作聲 做聲 傳聲',
    '三明 不明 之明 傳明 光明 公明 分明 劉明',
    '一口 丁口 上口 井口 交口 人口 住口 信口',
    '上書 中書 代書 但書 佛書 借書 全書 出書',
    '一時 不時 中時 亞時 何時 來時 依時 保時',
    '一成 不成 事成 二成 低成 促成 俗成 做成',
    '上公 亞公 伯公 保公 信公 假公 充公 公公',
    '不到 丟到 乍到 來到 俱到 借到 做到 傳到',
    '一開 丟開 伸開 傳開 全開 公開 分開 切開',
    '一部 三部 中部 二部 交部 人部 令部 內部',
    '一定 不定 人定 假定 入定 內定 公定 判定',
    '一語 不語 之語 亂語 人語 低語 俗語 俚語',
    '七美 中美 亞美 俊美 健美 優美 全美 其美',
    '一年 三年 中年 之年 二年 享年 今年 低年',
    '上進 丟進 並進 二進 亢進 何進 促進 俱進',
    '一世 三世 世世 中世 亂世 二世 五世 人世',
    '五金 代金 佣金 價金 償金 儲金 冶金 劉金',
    '不理 事理 代理 佐理 修理 倫理 公理 副理',
    '上機 下機 主機 之機 乘機 伺機 候機 停機',
    '中工 人工 代工 件工 做工 停工 偷工 兵工',
    '中性 亂性 人性 任性 佛性 促性 個性 假性',
    '一場 上場 下場 串場 充場 入場 全場 冷場',
    '一方 何方 侯方 偏方 全方 兩方 八方 制方',
    '伊爾 佛爾 偶爾 出爾 利爾 加爾 努爾 卡爾',
    '一點 三點 九點 交點 低點 優點 光點 冰點',
    '不住 保住 借住 停住 僵住 先住 卡住 原住',
    '一度 中度 二度 亮度 低度 光度 共度 再度',
    '三合 不合 之合 交合 信合 光合 公合 六合',
    '三重 不重 並重 九重 二重 人重 任重 保重',
    '上線 中線 主線 五線 光線 內線 全線 六線',
    '一片 下片 交片 全片 刀片 切片 剪片 卡片',
    '一石 下石 中石 之石 伏石 凹石 化石 印石',
    '之物 事物 人物 什物 作物 佳物 刊物 利物',
    '中城 之城 京城 伊城 傾城 內城 全城 出城',
    '上克 亞克 伐克 休克 傑克 公克 列克 別克',
    '丁神 主神 之神 亂神 人神 傳神 傷神 入神',
    '丁樂 不樂 中樂 之樂 享樂 仙樂 伯樂 何樂',
    '一發 不發 事發 併發 促發 偶發 先發 再發',
    '上報 僑報 公報 剪報 創報 匯報 叢報 各報',
    '中價 代價 估價 低價 作價 值價 六價 出價',
    '一言 三言 上言 不言 之言 五言 人言 代言',
    '一見 不見 主見 乍見 伏見 但見 偏見 偶見',
    '中高 人高 位高 倔高 偏高 創高 功高 北高',
    '一馬 下馬 亞馬 人馬 來馬 兵馬 出馬 刀馬',
    '不食 主食 乞食 伙食 偏食 偷食 分食 副食',
    '不教 任教 佛教 傘教 傳教 僑教 儒教 全教',
    '主政 余政 偽政 內政 勤政 化政 參政 反政',
    '人形 傘形 卵形 喜形 圈形 圓形 圖形 地形',
    '不安 久安 伊安 保安 偏安 克安 公安 利安',
    '一本 人本 保本 傳本 刊本 刻本 副本 劇本',
    '一回 不回 二回 來回 值回 偷回 兩回 北回',
    '久作 之作 仿作 佳作 做作 傑作 兼作 副作',
    '之主 代主 作主 做主 債主 僱主 入主 公主',
    '一落 下落 不落 低落 俐落 八落 出落 剝落',
    '中式 仰式 俯式 儀式 克式 公式 其式 列式',
    '一位 上位 串位 二位 五位 個位 傳位 價位',
    '三臺 上臺 下臺 中臺 來臺 侵臺 全臺 北臺',
    '傘狀 冠狀 冰狀 出狀 刺狀 力狀 匙狀 原狀',
    '一星 七星 三星 之星 五星 伴星 似星 倫星',
    '之數 人數 件數 伯數 係數 倍數 倒數 偶數',
    '中和 人和 保和 元和 六和 共和 劉和 協和',
    '中質 人質 介質 優質 劣質 同質 吳質 品質',
    '之火 停火 冒火 升火 取火 吐火 噴火 型火',
    '三民 之民 人民 住民 便民 先民 全民 公民',
    '一一 三一 不一 借一 偶一 六一 分一 初一',
    '一號 三號 世號 二號 五號 代號 信號 倫號',
    '全球 冰球 半球 圓球 地球 壁球 壘球 天球',
    '一死 不死 以死 凍死 勒死 吵死 咬死 嗆死',
    '事業 企業 作業 偉業 停業 副業 創業 功業',
    '中小 二小 何小 兩小 八小 六小 化小 半小',
    '之魚 人魚 仔魚 原魚 古魚 大魚 如魚 小魚',
    '中紅 亮紅 全紅 分紅 前紅 劉紅 口紅 咽紅',
    '一戰 之戰 交戰 伊戰 作戰 停戰 備戰 內戰',
    '來電 供電 停電 像電 充電 光電 回電 型電',
    '以量 份量 估量 值量 價量 儘量 全量 分量',
    '世運 中運 亞運 倒運 儲運 元運 劇運 劫運',
    '一視 中視 亂視 仇視 俯視 傲視 內視 公視',
    '低血 供血 充血 冷血 凝血 出血 刺血 受血',
    '一處 之處 他處 位處 低處 住處 來處 保處',
    '世華 中華 九華 亂華 京華 伍華 使華 來華',
    '不能 也能 仍能 位能 低能 何能 倘能 光能',
    '丹王 之王 代王 八王 冥王 列王 劍王 力王',
    '亞特 伏特 伯特 佩特 佳特 保特 凱特 利特',
    '上好 不好 之好 也好 交好 你好 修好 偏好',
    '一下 上下 下下 不下 丟下 中下 之下 令下',
    '一角 三角 丑角 主角 交角 仰角 俯角 偏角',
    '一目 亞目 側目 價目 入目 刮目 劇目 反目',
    '一病 傷病 同病 埃病 壓病 多病 大病 小病',
    '一流 上流 下流 不流 中流 主流 二流 交流',
    '不女 乾女 仕女 仙女 使女 侍女 俠女 信女',
    '一分 三分 不分 低分 備分 充分 克分 內分',
    '三信 不信 中信 互信 任信 來信 債信 公信',
    '九龍 來龍 划龍 劍龍 古龍 周龍 天龍 威龍',
    '七里 亞里 佳里 克里 八里 公里 十里 千里',
    '不經 伽經 佛經 停經 內經 制經 化經 取經',
    '中立 佇立 侍立 倒立 兀立 公立 分立 創立',
    '丘拉 亞拉 他拉 伊拉 克拉 加拉 勃拉 勞拉',
    '九州 五州 亞州 交州 亳州 佛州 俄州 光州',
    '一命 九命 亡命 人命 他命 任命 使命 保命',
    '一眼 上眼 乾眼 傷眼 光眼 兩眼 冷眼 動眼',
    '中產 主產 停產 共產 出產 副產 助產 動產',
    '乾布 傳布 內布 公布 分布 刊布 勒布 和布',
    '之士 人士 休士 俠士 修士 傑士 凡士 勇士',
    '下之 中之 了之 五之 亞之 人之 付之 代之',
    '不管 主管 代管 企管 保管 儘管 列管 北管',
    '上空 中空 偏空 傲空 冷空 凌空 利空 升空',
    '克林 匹林 叢林 吉林 哈林 員林 園林 坪林',
    '不期 中期 交期 任期 佳期 假期 先期 兒期',
    '三商 住商 僑商 共商 券商 協商 在商 場商',
    '下達 不達 傳達 八達 凱達 到達 南達 卡達',
    '不掉 丟掉 倒掉 刪掉 削掉 剪掉 割掉 卸掉',
    '乳房 二房 住房 倉房 偏房 僧房 同房 型房',
    '不平 保平 側平 公平 北平 史平 周平 和平',
    '一品 上品 五品 人品 低品 作品 佳品 冰品',
    '上上 世上 中上 佔上 初上 博上 向上 喜上',
    '一格 人格 佛格 停格 價格 別格 加格 勒格',
    '仁愛 作愛 偏愛 做愛 再愛 割愛 北愛 博愛',
    '上市 中市 伯市 債市 全市 利市 勒市 北市',
    '上衣 乾衣 便衣 僧衣 內衣 冠衣 冬衣 取衣',
    '亞羅 伯羅 伽羅 佛羅 侏羅 俄羅 保羅 傑羅',
    '不約 主約 依約 儉約 公約 制約 北約 協約',
    '丁福 中福 五福 享福 來福 傻福 克福 兒福',
    '丹尼 什尼 伯尼 倫尼 列尼 加尼 卡尼 印尼',
    '一去 上去 下去 不去 人去 何去 來去 免去',
    '事勢 作勢 來勢 傷勢 優勢 劣勢 助勢 南勢',
    '一知 上知 下知 不知 人知 便知 先知 可知',
    '亞熱 低熱 傳熱 光熱 冷熱 加熱 受熱 可熱',
    '上客 主客 之客 乘客 住客 作客 來客 俠客',
    '假裝 偽裝 內裝 冬裝 加裝 包裝 化裝 原裝',
    '俏皮 利皮 包皮 嘴皮 嘻皮 地皮 嬉皮 尚皮',
    '丈夫 之夫 亡夫 伊夫 佐夫 傑夫 克夫 兩夫',
    '七型 中型 乙型 亞型 典型 卵型 原型 句型',
    '之音 五音 低音 佳音 光音 原音 口音 合音',
    '二話 京話 佳話 俗話 假話 傳話 像話 受話',
    '一葉 中葉 乾葉 二葉 什葉 初葉 前葉 半葉',
    '中科 兒科 內科 前科 副科 化科 各科 商科',
    '上相 不相 世相 丞相 互相 交相 亮相 假相',
    '主畫 企畫 位畫 佛畫 作畫 入畫 刮畫 刻畫',
    '一步 亦步 仆步 代步 信步 停步 初步 十步',
    '交錢 付錢 借錢 值錢 價錢 出錢 吃錢 向錢',
    '三義 上義 主義 仁義 信義 公義 原義 取義',
    '主權 事權 人權 侵權 債權 全權 公權 兵權',
    '作案 個案 做案 兇案 光案 公案 凶案 刑案',
    '世居 久居 仙居 位居 偏居 僑居 分居 卜居',
    '一局 世局 亂局 佈局 僵局 全局 出局 分局',
    '不在 事在 人在 仍在 何在 健在 內在 功在',
    '上區 中區 之區 全區 分區 區區 南區 各區',
    '三軍 中軍 亂軍 亞軍 充軍 全軍 共軍 冠軍',
    '三足 不足 世足 付足 佇足 充足 具足 十足',
    '中製 乳製 乾製 仿製 俄製 印製 合製 壓製',
    '上藥 下藥 中藥 丸藥 假藥 停藥 入藥 創藥',
    '一腳 三腳 下腳 八腳 前腳 劃腳 吊腳 單腳',
    '不為 于為 人為 仍為 以為 佔為 作為 修為',
    '一是 不是 乃是 也是 于是 仍是 似是 但是',
    '三島 丹島 亞島 佛島 克島 全島 冰島 加島',
    '中實 事實 信實 價實 充實 其實 切實 務實',
    '人多 僧多 克多 凶多 利多 卡多 喜多 增多',
    '中土 佛土 入土 凍土 出土 刨土 動土 國土',
    '二制 今制 克制 兩制 公制 創制 區制 印制',
    '么兒 侍兒 健兒 偷兒 前兒 味兒 哥兒 哪兒',
    '刺骨 刻骨 卜骨 坐骨 埋骨 尾骨 屍骨 徹骨',
    '一變 不變 丕變 之變 事變 二變 兵變 其變',
    '二者 住者 作者 使者 來者 侍者 供者 俑者',
    '一清 不清 中清 乾清 侯清 克清 冷清 出清',
    '中河 之河 先河 冰河 刺河 劍河 哥河 士河',
    '冷板 刻板 厚板 古板 呆板 土板 地板 墊板',
    '七月 三月 九月 二月 五月 做月 元月 八月',
    '不外 世外 中外 之外 事外 仇外 份外 例外',
    '一味 乏味 五味 人味 原味 口味 吃味 品味',
    '上選 中選 之選 人選 候選 優選 入選 初選',
    '中西 亞西 佛西 內西 埃西 城西 塞西 墨西',
    '主職 任職 免職 全職 公職 其職 兼職 到職',
    '乳白 交白 兩白 口白 告白 哥白 坦白 大白',
    '不滿 人滿 佈滿 偽滿 儲滿 充滿 刑滿 加滿',
    '九景 任景 佈景 何景 侯景 光景 前景 勝景',
    '之後 事後 人後 今後 以後 先後 前後 劫後',
    '一帶 佩帶 光帶 全帶 卡帶 吊帶 地帶 外帶',
    '上師 中師 京師 出師 北師 匠師 名師 嚴師',
    '丁寶 七寶 三寶 之寶 乖寶 倒寶 兔寶 八寶',
    '一字 丁字 三字 人字 八字 六字 凹字 刻字',
    '一兵 休兵 傘兵 傭兵 傷兵 出兵 刀兵 募兵',
    '亮麗 伊麗 余麗 佳麗 俏麗 保麗 克麗 典麗',
    '以酒 侑酒 假酒 品酒 啜酒 啤酒 喜酒 喝酒',
    '不說 亂說 來說 便說 假說 傳說 其說 再說',
    '一盤 中盤 俎盤 全盤 冷盤 分盤 向盤 吸盤',
    '一望 仰望 企望 信望 俯望 偷望 冀望 凝望',
    '不料 主料 佐料 作料 加料 原料 史料 基料',
    '一官 上官 五官 作官 做官 入官 判官 升官',
    '內基 全基 利基 劉基 勝基 勞基 化基 北基',
    '不務 事務 任務 債務 僑務 內務 公務 勞務',
    '一代 七代 三代 世代 五代 交代 代代 元代',
    '一通 三通 不通 串通 互通 交通 亨通 八通',
    '一種 丙種 亞種 人種 兩種 包種 原種 各種',
    '七燈 丹燈 二燈 五燈 傳燈 吊燈 圓燈 夜燈',
    '交感 偶感 傳感 傷感 光感 動感 反感 口感',
    '便器 儀器 公器 兵器 利器 劍器 口器 叫器',
    '中南 偏南 前南 化南 卑南 嘉南 天南 安南',
    '交集 全集 劇集 募集 匯集 召集 坡集 士集',
    '一間 世間 中間 之間 人間 其間 冥間 凡間',
    '偷走 出走 取走 可走 吹走 噓走 奔走 奪走',
    '主調 低調 借調 冷調 北調 半調 協調 原調',
    '不解 了解 分解 化解 半解 和解 圖解 崩解',
    '之源 亂源 來源 光源 兵源 劉源 客源 導源',
    '不正 中正 修正 假正 元正 公正 剛正 匡正',
    '乃木 伐木 入木 原木 古木 啄木 喬木 土木',
    '中影 人影 倒影 倩影 側影 光影 剪影 卡影',
    '何建 修建 創建 古建 合建 吳建 國建 塑建',
    '不取 予取 博取 可取 吸取 奪取 存取 巧取',
    '中友 交友 住友 全友 堤友 女友 好友 婚友',
    '光陽 冬陽 初陽 南陽 博陽 向陽 壯陽 夕陽',
    '中老 人老 偕老 元老 充老 到老 卻老 古老',
    '一票 作票 做票 傳票 全票 匯票 取票 吃票',
    '一向 偏向 側向 傾向 內向 動向 去向 反向',
    '七貨 上貨 交貨 供貨 儲貨 出貨 到貨 卸貨',
    '上船 下船 中船 乘船 兵船 划船 力船 原船',
    '一次 二次 五次 人次 依次 僅次 兩次 其次',
    '亂服 伺服 佩服 便服 信服 克服 內服 冠服',
    '不得 了得 亞得 值得 偶得 兩得 利得 取得',
    '下功 事功 做功 內功 全功 前功 多功 夜功',
    '中傷 凍傷 刺傷 割傷 創傷 受傷 咬傷 哀傷',
    '丁伯 亞伯 伯伯 何伯 勞伯 吳伯 唐伯 奧伯',
    '之香 五香 口香 古香 吃香 小香 惠香 抹香',
    '一類 人類 出類 分類 別類 化類 各類 同類',
    '不自 來自 傳自 兀自 全自 公自 出自 半自',
    '三節 亮節 佳節 使節 偷節 刪節 原節 嘉節',
    '三思 不思 冥思 凝思 反思 吳思 哀思 哲思',
    '不亂 之亂 作亂 內亂 凌亂 動亂 叛亂 大亂',
    '中隊 儀隊 全隊 列隊 各隊 商隊 團隊 大隊',
    '不速 中速 五速 亞速 低速 儘速 光速 全速',
    '不論 並論 之論 伸論 公論 別論 勿論 大論',
    '不談 之談 交談 健談 再談 協談 和談 商談',
    '不結 了結 五結 作結 假結 凍結 凝結 勾結',
    '並稱 代稱 供稱 俗稱 凡稱 別稱 勻稱 古稱',
    '中油 亞油 低油 供油 出油 加油 化油 原油',
    '一毛 三毛 不毛 冬毛 刷毛 夏毛 多毛 寒毛',
    '一族 九族 克族 全族 各族 含族 回族 士族',
    '一新 世新 亞新 佈新 全新 出新 刷新 創新',
    '一飛 七飛 倫飛 停飛 分飛 如飛 孤飛 小飛',
    '三蘭 亞蘭 佛蘭 可蘭 哈蘭 奧蘭 宜蘭 布蘭',
    '伎藝 克藝 典藝 劇藝 園藝 壺藝 多藝 女藝',
    '不痛 之痛 作痛 傷痛 刺痛 創痛 劇痛 哀痛',
    '下款 付款 借款 價款 兌款 公款 募款 匯款',
    '介於 便於 免於 勇於 善於 基於 大於 安於',
    '勵志 同志 喪志 國志 墓志 壯志 夏志 大志',
    '井底 到底 地底 基底 墊底 存底 尖底 巷底',
    '作保 健保 兒保 公保 力保 加保 勞保 原保',
    '下雨 不雨 冒雨 化雨 喚雨 均雨 多雨 大雨',
    '之難 克難 兩難 刁難 劫難 危難 受難 問難'
];