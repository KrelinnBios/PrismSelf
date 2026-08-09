(function () {
  'use strict';

  const dimensions = [
    {
      id: 'sensory',
      title: '感官加工',
      shortTitle: '感官加工',
      description: '观察声音、光线、触感、气味、身体内部信号与刺激寻求如何影响舒适度和行动。',
      suggestions: [
        '记录最常见的过载与低察觉情境，区分刺激种类、强度和持续时间。',
        '尝试降噪、遮光、舒适材质、规律进食饮水或主动安排感官休息。',
        '在进入高刺激环境前准备退出路线，并向可信任的人说明具体需要。'
      ],
      questions: [
        ['在多人交谈、交通工具或开放办公区等声音复杂的环境中，我很难过滤背景声音。', '观察听觉信息同时出现时的筛选负荷。', '例如能听见每桌谈话，却难以跟上面前的人。'],
        ['某些光线、衣物材质、触碰、气味或温度会让我明显不适，甚至需要立刻离开。', '观察不同感官通道的高敏感体验。', '例如荧光灯、衣领标签或香水让你难以继续手头活动。'],
        ['我会注意到别人似乎没有察觉的细小声音、视觉变化、气味或触感。', '观察对细微刺激的察觉程度。', '例如先听见电器声，或很快发现房间陈设的变化。'],
        ['我有时很晚才察觉饥饿、口渴、疲劳、疼痛或需要上厕所。', '观察对身体内部信号的察觉是否延迟或不稳定。', '例如直到头痛、发抖或非常疲惫时才意识到需要休息。'],
        ['我会主动寻找特定声音、触感、压力、动作或视觉刺激来保持清醒或平静。', '观察感官寻求和自我调节方式。', '例如反复听同一段音乐、转笔、走动或使用有重量的物品。'],
        ['如果不能调整声音、光线、座位、衣物或活动节奏，我完成事情会困难很多。', '观察环境适配对日常功能的影响。', '例如换到安静角落或戴耳机后，专注和耐受度明显改善。'],
        ['同时出现多种感官输入时，我会很快疲惫、烦躁或难以组织行动。', '观察多通道刺激叠加后的整体负荷。', '例如商场里的灯光、音乐、人群和气味叠加后，让你难以继续购物。'],
        ['我对刺激的需求并不固定，有时主动寻找强烈输入，有时又必须完全避开。', '观察感官阈值是否随状态和情境变化。', '例如清醒时喜欢大声音乐，疲惫时同样音量却难以忍受。'],
        ['某些重复、尖锐或突发的声音会迅速占满我的注意，使我难以继续思考。', '观察特定听觉刺激是否产生强烈且难以忽略的反应。', '例如钟表声、咀嚼声或突然的提示音出现后，原本正在进行的阅读便无法继续。'],
        ['别人主动触碰我时，我的反应可能与自己主动接触同样材质时很不一样。', '观察刺激是否可预测、可控制对触觉耐受度的影响。', '例如自己盖毯子很舒适，但没有预告的拍肩会让身体立刻紧绷。'],
        ['身体不舒服时，我有时知道“哪里不对”，却很难判断是疼痛、疲劳、焦虑还是其他需要。', '观察内部身体信号的辨认与命名难度。', '例如整晚坐立不安，后来才发现自己其实是胃痛或过度疲劳。'],
        ['我可能没有及时察觉环境过冷、过热或身体已经出现轻微受伤。', '观察对温度、疼痛和身体变化的低察觉经验。', '例如别人已经觉得房间很冷，我直到手脚僵硬才注意到需要加衣。'],
        ['为了入睡、工作或恢复，我常需要非常具体且可重复的感官条件。', '观察稳定感官配置对进入某种状态的重要性。', '例如只有固定亮度、背景声音、被褥触感或室温合适时，才比较容易放松。'],
        ['离开高刺激环境后，声音、光线或触感带来的紧张仍会在身体里持续一段时间。', '观察感官负荷是否具有延迟消退和累积效应。', '例如已经回到安静房间，耳边仍像很吵，身体也难以马上松下来。'],
        ['当刺激较轻或别人没有明确提醒时，我可能没有注意到有人叫我、气味变化或物品碰到身体。', '观察对部分外部刺激的低反应或察觉延迟。', '例如专注做事时别人连续叫了几次名字，我直到对方走近才发现。']
      ]
    },
    {
      id: 'attention',
      title: '注意与兴趣调节',
      shortTitle: '注意调节',
      description: '观察注意启动、维持、转移和刺激需求，而不是把注意力简单理解为“有或没有”。',
      suggestions: [
        '把任务入口缩小到一个可立即执行的动作，并用可见计时器或陪伴启动。',
        '按任务需要主动增减刺激，例如使用白噪音、走动、专注时段或网站限制。',
        '为高度专注设置吃饭、喝水和停止提醒，减少忽略身体与后续安排。'
      ],
      questions: [
        ['即使任务很重要，只要它重复、模糊或缺少即时反馈，我也很难开始或持续投入。', '观察注意是否更依赖兴趣、清晰度和即时反馈。', '例如知道必须回复邮件，却不断延后打开。'],
        ['周围的声音、通知、动作或脑中的想法很容易把我的注意带走。', '观察外部与内部刺激造成的分心。', '例如读一段文字时被提示音打断，之后很难接回原处。'],
        ['遇到感兴趣的内容时，我会专注很久，并忽略时间、身体需要或其他安排。', '观察高度专注对时间和任务切换的影响。', '例如研究一个主题数小时，直到很晚才发现没有吃饭。'],
        ['我的注意状态波动很大：同一件事有时能迅速完成，有时却几乎无法推进。', '观察注意调节随情境与状态变化的程度。', '例如昨天能完成的例行任务，今天需要很大启动成本。'],
        ['保持静坐或等待时，我常需要活动身体、摆弄物品或获得额外刺激。', '观察活动和刺激是否帮助维持唤醒与注意。', '例如开会时涂画、转笔或走动反而更能听进去。'],
        ['阅读、听课或对话进行一段时间后，我会发现自己失去了内容线索。', '观察持续注意和信息跟踪。', '例如听见每句话，却突然不知道前后在讨论什么。'],
        ['即使我想转移注意，也常被当前兴趣、念头或活动牢牢吸住。', '观察注意转移是否能够按意愿发生。', '例如已经决定去睡觉，却仍不断继续查同一主题。'],
        ['临近截止、内容新鲜或有人一起时，我的专注和行动力会明显提高。', '观察紧迫感、新奇性和共同参与对注意的调节作用。', '例如平时难以开始的任务，在最后期限或共同工作时迅速推进。'],
        ['处理细节时，我可能投入很多注意，却忘记当前任务真正要完成的目标。', '观察注意是否容易停留在局部信息而偏离整体方向。', '例如为文档格式调整很久，最后才发现主要内容还没有写完。'],
        ['听到包含多个步骤的口头说明时，我常在后半段失去前面的信息。', '观察持续注意与工作记忆同时承载信息时的负荷。', '例如对方说完取物、填写和提交三个步骤后，我只记得最后一个。'],
        ['一旦被消息或临时问题打断，我往往需要很久才能重新进入原来的专注状态。', '观察注意中断后的恢复与重新定位成本。', '例如回复一条消息只用两分钟，回到报告时却要重新读很久。'],
        ['任务是否有趣，常常比它是否重要更能决定我能不能集中注意。', '观察注意分配是否明显受到兴趣和即时回报驱动。', '例如可以连续研究兴趣主题，却很难专心处理当天必须完成的表格。'],
        ['刺激太少时，我会不自觉地切换页面、寻找新内容或同时做几件事。', '观察低刺激环境下主动寻找新输入的倾向。', '例如看节奏较慢的课程时不断查看手机，加入涂画或走动后反而更能听进去。'],
        ['我可能反复读同一段文字或听同一句话，却发现内容没有真正进入理解。', '观察注意在表面停留但信息没有持续加工的情况。', '例如眼睛已经读完一页，回头却说不出这一页讲了什么。'],
        ['使用计时器、背景声音、身体活动或与人共同工作时，我的专注表现会像换了一个状态。', '观察外部调节条件对注意稳定性的显著影响。', '例如独自安静写作很难推进，开着固定音乐与朋友一起工作时却能持续完成。']
      ]
    },
    {
      id: 'executive',
      title: '执行功能与日常组织',
      shortTitle: '执行功能',
      description: '观察计划、工作记忆、时间感、步骤排序和把意图转化为行动时所需的支持。',
      suggestions: [
        '把记忆外置到清单、日历、固定收纳位置和自动提醒，不依赖“记住”。',
        '把大任务写成下一步动作，同时明确完成标准和可停止的位置。',
        '减少重复决策和启动摩擦，例如准备模板、默认选项与固定流程。'
      ],
      questions: [
        ['面对步骤很多或定义不清的任务时，我很难判断从哪里开始。', '观察任务分解和行动启动。', '例如“整理房间”过于庞大，直到有人帮忙拆成小步骤才开始。'],
        ['进行一项活动时，我容易忘记刚才准备做什么，或遗漏中间步骤。', '观察工作记忆在实际任务中的负荷。', '例如走进另一个房间后忘记来意，做饭时漏掉一个步骤。'],
        ['我常低估或高估事情所需时间，也不容易感觉时间已经过去多久。', '观察时间估计和时间流逝感。', '例如以为十分钟能完成的准备实际用了四十分钟。'],
        ['如果没有提醒、固定位置或外部系统，我容易忘记物品、约定或截止时间。', '观察日常记忆对外部支持的依赖。', '例如看见物品才想起任务，收进柜子后便不再想到。'],
        ['同时处理多个步骤、优先级或规则时，我容易卡住、漏项或反复确认。', '观察排序、切换和多步骤协调负荷。', '例如需要比较多个条件的行政流程让你迟迟无法提交。'],
        ['即使我清楚想做什么，也经常需要清单、计时器、陪伴或固定流程才能落实。', '观察意图与行动之间是否需要外部支架。', '例如有人在旁各自工作时，比独自开始容易很多。'],
        ['我会花很多精力建立整理系统，但维持、更新或重新使用这些系统仍然困难。', '观察组织工具本身是否也产生维护负荷。', '例如认真设计了清单和文件夹，几天后却忘了查看或无法持续分类。'],
        ['洗衣、做饭、回消息、缴费等重复日常事项会持续占用我大量管理精力。', '观察低新奇度生活维护任务的执行成本。', '例如每项任务看起来都不难，但组合起来经常超出可用精力。'],
        ['任务包含前后依赖关系时，我很难同时记住顺序、条件和下一步。', '观察多步骤任务中的排序与依赖管理负荷。', '例如准备出门时要先充电、再下载资料、最后带上设备，其中一步很容易被遗漏。'],
        ['同时有几件重要事情时，我会花很多时间判断优先级，却仍然无法开始。', '观察优先级比较和决策启动之间的阻塞。', '例如三项工作都临近截止，我不断重排清单，最后一项也没有真正推进。'],
        ['完成主要任务后，收尾、归档、清理或提交这些最后步骤对我尤其困难。', '观察任务结束阶段的持续执行与闭环能力。', '例如报告已经写完，却因为忘记命名、上传或发送而错过截止时间。'],
        ['我常能制定一个合理计划，但实际执行时很难持续查看和调整它。', '观察计划生成与计划使用之间是否存在落差。', '例如周初排好了日程，之后却忘记打开，直到周末才再次看到。'],
        ['准备一项活动时，我容易漏估需要的物品、时间、交通或缓冲步骤。', '观察前瞻规划是否能覆盖隐含条件和转换成本。', '例如只计算了会议时间，没有算上找地点、设备测试和会后恢复。'],
        ['我会在应该做某件事的时刻完全想不起来，直到看到相关线索才恢复记忆。', '观察未来意图在正确时点被唤起的难度。', '例如经过快递柜时没有想起取件，回家看到取件码才突然记起。'],
        ['连续作出许多小决定后，我处理下一件普通事情也会明显变慢或停住。', '观察决策累积对执行功能和可用精力的影响。', '例如比较完许多商品或填写多页表单后，连晚饭吃什么都难以决定。']
      ]
    },
    {
      id: 'communication',
      title: '沟通与社会信息加工',
      shortTitle: '沟通加工',
      description: '观察理解暗示、组织表达、掌握交流节奏及在不同沟通方式之间切换的成本。',
      suggestions: [
        '优先请求直接、具体的说明，并用复述确认代替猜测潜台词。',
        '在重要沟通中使用文字提纲、会后确认或提前提供问题。',
        '与可信任的人约定暂停、澄清和修正误解的方式，而不是要求一次表达完美。'
      ],
      questions: [
        ['别人依靠暗示、反话、语气或“大家都懂”的规则表达时，我常不确定真实意思。', '观察对隐含社会信息的处理负荷。', '例如直到事后才意识到一句话其实是在委婉拒绝。'],
        ['我倾向于按字面或精确定义理解语言，模糊表达容易让我困惑。', '观察语言精确度需求。', '例如“等会儿”“差不多”会让你不知道该如何安排。'],
        ['多人交谈时，我不容易判断什么时候接话、如何加入，或何时该结束表达。', '观察快速互动中的时机判断。', '例如想发言时话题已经改变，或担心插话而一直沉默。'],
        ['在打电话、见陌生人或重要谈话前，我会预演句子、准备脚本或反复推演可能回应。', '观察为社会互动所做的预先补偿。', '例如先写好开场、问题和结束语，才能拨出电话。'],
        ['比起即时口头回答，我通常更容易通过文字、明确选项或稍后回复表达清楚。', '观察不同沟通媒介对表达质量的影响。', '例如会议中答不完整，但会后文字能准确说明。'],
        ['即使我没有恶意，我的语气、表情、措辞或沉默也容易被别人误解。', '观察表达方式与他人解读之间的落差。', '例如只是专注或疲惫，却被理解为冷漠、生气或不尊重。'],
        ['面对突然的问题或情绪复杂的交流时，我往往需要更多时间才能知道自己想说什么。', '观察即时处理与延迟表达之间的差异。', '例如当场只能说“没事”，过一段时间才整理出真正的感受和需求。'],
        ['当一个人的语气、表情和字面内容不一致时，我很难判断应该相信哪一种信息。', '观察多种社会线索冲突时的整合负荷。', '例如对方嘴上说“没关系”却表情紧绷，我会长时间猜测真实含义。'],
        ['谈到熟悉或感兴趣的主题时，我不容易判断对方希望听多少细节。', '观察分享信息时对他人兴趣和信息量的即时校准。', '例如解释一个主题很久之后，才发现对方原本只想知道一句结论。'],
        ['寒暄、客套或缺少明确目的的闲聊会耗费我大量注意力，也常需要提前准备。', '观察非任务型交流中的规则推断与回应成本。', '例如见面时知道应该聊几句，却一直在想该问什么、何时结束。'],
        ['多人快速交谈时，我可能听得见每个人的话，却很难同时跟上话题并分辨各自的立场。', '观察在群体交流中实时整合多方信息的难度。', '例如讨论转了几个来回后，我不确定当前是谁在回应谁。'],
        ['如果别人只说“你应该知道”而不明确指出问题，我通常很难据此调整。', '观察社会反馈是否需要具体、可操作的说明。', '例如被告知“表现自然一点”时，我不知道究竟要改变音量、眼神还是措辞。'],
        ['我常在交流结束后才意识到自己误解了重点，或想到更准确的回应。', '观察社会信息加工和表达是否存在明显延迟。', '例如会议当下表示理解，回家重新回想才发现对方其实在提出不同要求。'],
        ['需要一边观察表情、维持对话，一边组织内容时，我说话会变得断续或遗漏重点。', '观察多重社会任务同时发生时对语言组织的影响。', '例如面对面能想到的内容很少，改用文字后却可以完整说明。'],
        ['别人临时改变说话方式、话题或互动规则时，我需要额外时间重新判断该如何回应。', '观察沟通规则变化带来的重新定位成本。', '例如原本正式讨论突然变成玩笑，我一时不知道应继续认真回答还是跟着开玩笑。']
      ]
    },
    {
      id: 'transition',
      title: '规律、转换与可预测性',
      shortTitle: '转换适应',
      description: '观察计划变化、活动切换、陌生环境和决策数量如何影响稳定感与能量。',
      suggestions: [
        '为变化提供提前通知、明确的新方案和可执行的备用计划。',
        '在活动之间预留缓冲时间，用固定的收尾动作帮助大脑切换。',
        '减少不必要的选项；进入陌生环境前先查看路线、流程和退出方式。'
      ],
      questions: [
        ['已经形成的计划突然改变时，即使新安排并不坏，我也需要较长时间适应。', '观察意外变化造成的认知与情绪切换成本。', '例如会议临时改期后，之后很久仍难回到原任务。'],
        ['从一项活动切换到另一项活动会消耗很多精力，尤其是被突然打断时。', '观察任务转换负荷。', '例如正专注时被叫停，身体已经离开但思路仍停在原处。'],
        ['可预期的流程、固定位置或重复习惯会显著降低我的日常负担。', '观察规律是否承担稳定和节能功能。', '例如固定的早晨顺序能减少忘事和决策压力。'],
        ['面对陌生地点、流程或人员时，我通常需要提前了解细节才比较安心。', '观察不确定性与准备需求。', '例如出发前查看入口照片、座位安排或完整步骤。'],
        ['选择太多或规则频繁变化时，我容易疲惫、拖延或无法决定。', '观察决策负荷与可预测性需求。', '例如菜单选项过多，最后反而无法点餐。'],
        ['一项任务被中断后，我很难迅速找回原来的思路和行动状态。', '观察中断后的重新进入成本。', '例如只处理一条消息，回来却要重新梳理全部上下文。'],
        ['如果知道之后有一项重要安排，我很难在等待期间安心投入其他事情。', '观察未来安排是否会占据当前注意和行动空间。', '例如下午有预约，上午便一直处于等待状态，难以开始完整任务。'],
        ['期待已久的安排被取消或替换后，即使理解原因，我的情绪和行动仍会停留在原计划上。', '观察计划变化后的心理脱离与重新组织成本。', '例如聚会临时取消后，我整晚都难以开始其他活动，也说不清自己为什么失落。'],
        ['一件事情没有达到明确的结束点时，我很难安心转去处理下一件事。', '观察完成感和任务边界对切换的影响。', '例如文件还差一点没有整理完，即使下一项更紧急，我也不断想着先把它结束。'],
        ['常走的路线、常用的软件界面或熟悉流程发生变化时，我会明显卡顿。', '观察熟悉结构改变后重新建立行动路径的负荷。', '例如应用更新后按钮换了位置，一个简单操作也需要重新摸索很久。'],
        ['别人临时进入我的空间或改变我原本的活动顺序，会让我难以维持状态。', '观察外部介入对既有节奏和调节方式的扰动。', '例如正按固定顺序做家务时有人要求先做另一件事，之后整个流程都容易乱掉。'],
        ['面对熟悉且可靠的选择时，我常愿意重复选择，而不是每次尝试不同方案。', '观察减少不确定性和决策负荷的偏好。', '例如在同一家店长期点同一道菜，因为这样不必重新比较口味和风险。'],
        ['即使是我喜欢的活动，从准备出门到真正开始也可能需要很长的过渡时间。', '观察愉快活动是否同样存在状态切换和启动成本。', '例如很期待见朋友，却在换衣、收拾和离开家之间迟迟无法动身。'],
        ['重要安排开始前，我会在脑中反复预演路线、步骤、可能问题和结束方式。', '观察通过预演降低不确定性的需要和耗能。', '例如第一次就诊前，会提前查看入口、挂号流程、可能被问的问题和如何离开。'],
        ['物品位置、房间布局或常用规则被改变时，我可能需要很久才重新建立熟悉感。', '观察空间与规则稳定性对行动自动化的作用。', '例如别人帮忙整理桌面后，物品都还在，我却一段时间内不知道该如何开始工作。']
      ]
    },
    {
      id: 'activity',
      title: '活动、冲动与节奏调节',
      shortTitle: '活动调节',
      description: '观察身体活动需求、等待、回应抑制、行动节奏与做决定前暂停的难易程度。',
      suggestions: [
        '把安全的走动、手部活动和短休息纳入任务流程，不把运动需要当作意志问题。',
        '为重要决定设置可见的暂停步骤，例如先记录、延迟发送或让可信任的人复核。',
        '在容易插话或快速回应的场景使用笔记、轮次提示和明确的发言规则。'
      ],
      questions: [
        ['需要长时间坐着、安静等待或保持同一姿势时，我会明显不适或难以集中。', '观察身体活动需求与注意状态的关系。', '例如会议后半段需要不断换姿势或离席，才能继续听进去。'],
        ['我会在还没完全想好或没等对方说完时，就先说出答案、补充或反应。', '观察回应抑制和交流节奏。', '例如因为担心忘记想法而抢先接话，事后才发现打断了别人。'],
        ['排队、等待回复或等待较晚才会得到的结果，会让我很难把注意放在别处。', '观察延迟满足和等待状态带来的负荷。', '例如等待一封重要邮件时反复刷新，其他任务几乎无法推进。'],
        ['在兴奋、焦虑或赶时间时，我可能很快作出决定，之后才想到风险或细节。', '观察高唤醒状态下的行动速度与复核能力。', '例如立即答应安排、发送消息或购买物品，稍后才发现条件不合适。'],
        ['我的活动节奏容易在“停不下来”和“很难启动”之间明显变化。', '观察行动水平是否呈现较大波动。', '例如一段时间同时推进很多事情，随后又很难开始最基本的任务。'],
        ['为了保持平静或专注，我常需要走动、晃动、触摸物品、涂画或重复某个动作。', '观察运动和重复动作的自我调节作用。', '例如边走边听内容比端坐时更容易理解和记住。'],
        ['我知道某个反应可能带来后果，但在当下仍很难停一下再选择。', '观察从意识到后果到抑制行动之间的距离。', '例如知道一句话可能过于直接，却在情绪上升时立即说了出来。'],
        ['兴奋或想到很多内容时，我会越说越快、越说越多，很难主动放慢。', '观察唤醒水平升高时语言和行动节奏的变化。', '例如分享感兴趣的事情时连续说很久，直到别人提醒才发现没有留出回应时间。'],
        ['新的想法出现时，我容易立刻开始，导致同时展开许多尚未收尾的事情。', '观察新奇刺激对行动启动和任务数量的影响。', '例如整理房间时想到要修东西、查资料和重新布置，最后多个区域都停在一半。'],
        ['看到通知、想到问题或产生一个冲动后，我很难先记下再继续当前活动。', '观察即时冲动对正在进行任务的打断程度。', '例如写作时想到要查一个词，随后打开多个页面，原来的段落便被搁置。'],
        ['别人说话、操作或排队进展很慢时，我会明显焦躁，想替对方完成或跳过步骤。', '观察等待低节奏过程时的耐受和自我控制。', '例如对方还在解释背景，我已经急着给出结论或催促进入下一步。'],
        ['发送消息、购物或答应安排后，我有时才发现自己没有充分检查条件。', '观察即时回应与后续复核之间的时间差。', '例如看到活动便立刻报名，之后才发现时间冲突、费用超出预算或需要很长恢复。'],
        ['节奏很快、任务有即时反馈时，我可能比在缓慢流程中更容易保持投入。', '观察速度和反馈频率对活动水平与专注的调节。', '例如现场处理连续小任务很有精神，面对需要等待数周的项目却很难持续跟进。'],
        ['即使已经很累，我也可能继续活动、说话或寻找刺激，难以主动进入休息。', '观察从高唤醒状态降速和停止的难度。', '例如忙完一天后明知需要睡觉，仍不停整理、刷内容或在房间里走动。'],
        ['外表看起来安静时，我的身体内部也可能有很强的坐立不安或行动冲动。', '观察不一定表现为明显走动的内部活动需求。', '例如会议中一直坐着，但需要绷紧肌肉、反复动脚或用很大力气压住离席冲动。']
      ]
    },
    {
      id: 'overload',
      title: '情绪、过载与恢复',
      shortTitle: '过载恢复',
      description: '观察情绪强度、过载早期信号、表达能力变化以及恢复所需的时间和条件。',
      suggestions: [
        '记录过载前的身体和行为信号，在到达极限前减少输入、任务和交流。',
        '准备低刺激恢复空间，并允许用文字、手势或暂停替代即时口头说明。',
        '若过载伴随自伤、持续失眠或明显功能受损，及时寻求专业支持。'
      ],
      questions: [
        ['我的情绪反应有时来得很快、很强，需要较久才能回到平稳状态。', '观察情绪启动强度与恢复速度。', '例如一件小意外在累积压力下引发远超预期的反应。'],
        ['我常要到身体已经紧绷、哭泣、发怒或完全疲惫时，才意识到自己正在难受。', '观察识别情绪和身体信号是否延迟。', '例如当下只觉得“没事”，回家后才发现已经耗尽。'],
        ['声音、社交、决策和任务累积到一定程度后，我会突然无法继续承受。', '观察多种负荷累积形成的过载。', '例如白天每件事都能应付，最后一个小要求却让你崩溃。'],
        ['过载时，我的说话、思考、回应或行动能力会明显下降。', '观察高负荷状态下功能的暂时变化。', '例如知道别人正在提问，却组织不出语言或只能离开现场。'],
        ['高要求的社交、工作或感官环境结束后，我需要比别人预期更长的独处和恢复。', '观察活动后的延迟成本。', '例如一次聚会后第二天仍难以处理日常任务。'],
        ['睡眠不足、压力、生病或连续安排会明显放大我的感官、注意和情绪困难。', '观察状态因素对多维体验的影响。', '例如平时可以忍受的声音，在疲惫时变得无法承受。'],
        ['在达到极限之前，我很难及时说明自己需要暂停、减少要求或离开。', '观察表达支持需求是否晚于负荷累积。', '例如已经无法处理更多信息时，仍继续答应别人“可以”。'],
        ['能在高要求场合维持表现，却会在安全环境中出现延迟的疲惫或情绪反应。', '观察负荷是否在结束后才显现。', '例如工作或聚会中一直正常，回家后才突然无法做事或需要长时间安静。'],
        ['压力升高时，我理解语言、组织句子或作出简单选择的速度会明显下降。', '观察高负荷状态对语言加工和决策能力的暂时影响。', '例如平时能轻松回答的问题，在过载时需要别人重复多次或改成书面选项。'],
        ['负荷超过限度后，我可能只想停止交流、减少光线声音或把自己隔离起来。', '观察过载后的撤离、静止或降低输入需求。', '例如活动中突然无法继续回应，只能去安静黑暗的地方坐很久。'],
        ['忙碌一天后，一个平时很小的请求也可能成为让我无法继续的最后压力。', '观察累积负荷如何改变对新增要求的承受范围。', '例如白天处理了许多声音和任务，回家听到“顺便做件小事”便突然崩溃。'],
        ['我常在已经超过承受范围之后，才回头看见之前其实出现过许多预警信号。', '观察过载早期信号的识别是否滞后。', '例如事后才发现自己早已开始头痛、说话变少、反复出错或对声音格外敏感。'],
        ['感官不适、社交判断和任务压力同时存在时，它们会相互放大，而不是各自独立。', '观察不同负荷来源叠加后的交互效应。', '例如在嘈杂地点处理冲突时，比单独面对噪音或谈话更快失去表达能力。'],
        ['过载时出现的急躁、哭泣、沉默或离开，常与我平静时真正想表达的态度不同。', '观察高负荷反应与稳定意图之间的差异。', '例如当场突然说不想继续合作，恢复后才意识到自己真正需要的是暂停和减少信息。'],
        ['恢复过程如果被新的声音、消息或要求打断，我往往需要重新开始计算恢复时间。', '观察恢复是否需要连续、不被打断的低要求空间。', '例如刚独处半小时稍微平静，又被要求解释情况后，身体再次回到高度紧张。']
      ]
    },
    {
      id: 'masking',
      title: '掩饰、自我调节与恢复成本',
      shortTitle: '掩饰成本',
      description: '观察为了符合环境期待而监控、隐藏或补偿自身反应，以及这些策略带来的消耗。',
      suggestions: [
        '区分哪些调整是自愿且有帮助的，哪些只是出于害怕被惩罚、嘲笑或排斥。',
        '从低风险环境开始减少不必要的表演，并保留真正有效的沟通策略。',
        '把社交后的恢复时间纳入安排，不用表面完成度否认实际消耗。'
      ],
      questions: [
        ['在社交场合，我会有意识地观察并模仿别人的表情、语气、姿势或互动方式。', '观察通过模仿补偿社会规则的程度。', '例如先看别人何时笑、如何寒暄，再照着做。'],
        ['我会强迫自己维持眼神、表情或身体姿势，即使这样让我不舒服或分心。', '观察为了符合期待而压制自然反应。', '例如把大量注意用于“看起来在听”，反而听不进内容。'],
        ['我会隐藏重复动作、感官不适、困惑或休息需求，以免显得与众不同。', '观察需求和自我调节行为被压抑的频率。', '例如忍住走动或不敢戴耳机，直到回家后耗尽。'],
        ['别人可能觉得我应对得很好，但维持这种表现会让我在之后非常疲惫。', '观察外在表现与内部成本之间的差异。', '例如工作时平静高效，回家后却长时间无法说话或做事。'],
        ['我在安全、独处或熟悉的人面前，与在公共环境中的表现差异很大。', '观察环境安全感对表达方式的影响。', '例如在外安静克制，在家才允许自己活动、重复或直接表达。'],
        ['长期适应他人期待后，我有时不确定哪些反应是自己的，哪些是为了融入而练习的。', '观察长期掩饰对自我辨识的影响。', '例如知道怎样表现得“合适”，却不确定自己真正想怎样回应。'],
        ['社交时，我会持续监控自己是否表现得自然、礼貌、专注或符合场合期待。', '观察自我监控占用了多少注意和能量。', '例如一边谈话一边检查眼神、表情、音量和手部动作，很难真正放松。'],
        ['进入常见社交场景前，我会准备可以直接使用的开场、回应和结束句。', '观察通过脚本降低即时社交判断负荷的程度。', '例如打电话前把问候、问题和结束语全部写下，偏离脚本时便明显紧张。'],
        ['我会留意并采用周围人的用词、兴趣或表达方式，让自己看起来更容易融入。', '观察通过模仿群体风格获得社会安全感的策略。', '例如进入新团队后逐渐复制大家的语气和话题，即使那些内容本来并不吸引自己。'],
        ['我会把摇晃、摆弄物品、重复声音或其他调节动作压到别人看不见的程度。', '观察为了避免负面评价而隐藏自我调节行为的频率。', '例如会议中用力保持不动，结束后才在独处空间反复走动或甩手。'],
        ['在需要表现友好或专注的场合，我会有意识地安排自己的笑容、点头和眼神。', '观察非自动化的表情与非语言行为管理。', '例如谈话时持续计算什么时候看对方、什么时候点头，导致很难同时理解内容。'],
        ['没有理解笑话、暗示或指令时，我有时会先跟着回应，之后再独自补查。', '观察通过假装理解避免暴露困惑的补偿方式。', '例如别人都笑时先一起笑，回家后才搜索那句话究竟是什么意思。'],
        ['为了不显得麻烦，我可能同意自己其实难以承受的声音、安排或社交要求。', '观察隐藏支持需要与维持配合形象之间的关系。', '例如明明已经接近过载，仍回答“都可以”，直到离开后才完全耗尽。'],
        ['长期观察自己是否“表现正确”，会让我很难自然地参与当下互动。', '观察持续自我监控是否挤占真实交流和体验空间。', '例如聚会后能详细记得自己哪里可能做错，却很少记得当时是否真正开心。'],
        ['在不需要维持社会表现的环境里，我可能出现明显的反弹式安静、活动或情绪释放。', '观察掩饰结束后的延迟反应与恢复需求。', '例如回家后完全不想说话、需要重复动作或突然哭泣，几个小时后才逐渐恢复。']
      ]
    }
  ];

  const dimensionExplanationNotes = {
    sensory: '判断重点不是刺激是否客观强烈，而是筛选、察觉或调节它时需要多少额外精力，以及环境调整能否明显改变表现。',
    attention: '判断重点不是“是否足够认真”，而是注意能否按意愿启动、维持和转移，以及兴趣、紧迫感或外部结构会怎样改变表现。',
    executive: '判断重点是从知道该做什么到实际完成之间需要多少外部支架，而不是把困难简单归结为懒惰或缺乏责任心。',
    communication: '判断重点是即时理解、组织和表达所需的额外步骤，而不是用社交技巧多少评价关系能力或关心他人的程度。',
    transition: '判断重点是变化、切换和不确定性带来的准备、重新进入与恢复成本，而不是是否愿意尝试新事物。',
    activity: '判断重点是活动水平、等待和回应抑制能否按情境调节，以及安全的运动、提示或暂停支持是否有效。',
    overload: '判断重点是负荷如何累积、能力在高压下如何暂时变化，以及恢复需要多少时间和哪些具体条件。',
    masking: '判断重点是调整行为是否出于自愿、是否长期占用注意与能量，以及外在表现与内部成本是否存在落差。'
  };

  const dimensionReportMeta = {
    sensory: {
      visible: '你可能更容易注意到某些声音、光线、触感或身体信号，也可能在部分通道上出现低察觉、延迟察觉或明显的刺激寻求。关键不是“敏感”或“迟钝”二选一，而是不同刺激在不同状态下可能呈现不对称阈值。',
      cost: '当输入种类多、持续时间长或缺少控制权时，筛选和忍耐本身会占用认知资源，进一步影响专注、沟通与恢复。若身体内部信号察觉较晚，也可能出现已经过饿、过累或疼痛加重后才处理的情况。',
      support: '优先改变刺激条件和可控制性，而不是只要求自己“习惯”。能显著改善功能的耳机、灯光、材质、座位或休息安排，本身就是有效支持。',
      reflection: '哪些刺激真正造成负荷？哪些是可预测、可控制时就能接受，哪些无论如何都需要避开或降低？',
      context: { work: '复杂声音、开放空间、强光或频繁打断可能直接降低信息筛选效率；可调座位、耳机和安静时段往往比“更努力集中”有效。', social: '多人环境中的感官输入会与社会信息同时竞争注意，表面上的迟钝、走神或提前离场未必来自关系态度。', daily: '衣物、温度、气味、饮食和身体内部信号都可能影响日常舒适度；稳定的感官配置可显著减少隐性消耗。', recovery: '高刺激离开后负荷可能不会立刻消失，恢复需要连续的低输入时间，而不是一停止活动就自动归零。' }
    },
    attention: {
      visible: '你的注意可能更受兴趣、新奇、紧迫感、即时反馈和环境刺激调节。可能同时存在容易分心与高度专注，这两者并不矛盾：问题往往在于注意是否能按意愿分配和切换。',
      cost: '重复、模糊或回报延迟的任务可能很难启动；一旦进入高度专注，又可能忽略时间、身体需要和后续安排。中断后的重新进入也可能产生远高于中断本身的成本。',
      support: '把注意调节外置：缩小任务入口、增加可见反馈、控制干扰，并为高度专注设置停止点。不要只用“重要不重要”预测能否集中。',
      reflection: '你的注意最容易被什么点燃、被什么打断？外部结构改变后，表现能改善到什么程度？',
      context: { work: '任务越模糊、重复、缺少即时反馈，启动成本越高；清晰下一步、短反馈周期和共同工作可显著改变表现。', social: '对话中的声音、表情、话题与内部想法会竞争注意，可能出现听见了话却没有持续加工，或在兴趣主题上难以收束。', daily: '通知、页面切换和临时念头容易把行动带走；固定捕捉系统比要求自己记住“不要分心”更可靠。', recovery: '长时间高度专注并不等于低消耗，结束后可能出现明显疲惫、饥饿、睡眠推迟或对其他任务的启动困难。' }
    },
    executive: {
      visible: '你可能知道目标是什么，却在任务分解、工作记忆、时间估计、优先级、收尾或未来意图唤起上需要额外支架。能制定计划与能持续使用计划并不是同一件事。',
      cost: '大量小任务和小决定会持续占用管理资源；问题常出现在“开始之前”“切换之间”和“完成之后”这些边界，而不一定出现在任务核心能力本身。',
      support: '把记忆、顺序、截止时间和完成标准外置到可见系统，并降低系统本身的维护成本。最有效的工具通常是能在正确时点主动提醒你的工具。',
      reflection: '你最常卡在启动、排序、时间感、记忆、收尾还是持续维护？哪一种外部支架能稳定改善，而不是只短期新鲜？',
      context: { work: '复杂项目的真正难点可能是拆解、排序、切换和收尾，而不是专业任务本身；明确下一步和完成标准能降低大量摩擦。', social: '忘记回复、错过约定或迟到可能来自未来意图和时间管理困难，不应自动等同于不重视关系。', daily: '做饭、缴费、整理、购物等低新奇任务组合后会形成持续的管理负荷，模板、固定位置和自动化可减少重复决策。', recovery: '决策密度高的一天会消耗后续执行资源；恢复不仅是休息，也包括减少要记、要选、要排序的事情。' }
    },
    communication: {
      visible: '你可能更依赖直接、明确、可操作的信息，并在即时口头交流、暗示整合、多人节奏或快速组织表达时承担额外加工步骤。文字或延迟回应可能明显提高表达质量。',
      cost: '持续猜测潜台词、监控接话时机和组织非语言表现会占用工作记忆；当信息来源多或情绪复杂时，误解和延迟反应更容易发生。',
      support: '把“猜”改成“说清楚”：要求具体说明、允许复述确认、重要事项保留文字记录，并为复杂交流留出延迟处理时间。',
      reflection: '你在哪些沟通媒介中最准确？困难主要来自暗示、速度、多人信息、即时表达，还是被误读后的修正成本？',
      context: { work: '口头多步骤指令、临时提问和含蓄反馈容易增加误差；书面要求、议程和会后确认能显著提高准确性。', social: '关系中的误解不一定来自缺少关心，可能来自对暗示、语气和互动节奏的加工方式不同。', daily: '电话、办事窗口和陌生流程常同时要求即时理解与回应；提前脚本和明确选项可降低负荷。', recovery: '高密度交流后可能需要安静、文字沟通或暂停口头输出，尤其在此前已经有感官或执行负荷时。' }
    },
    transition: {
      visible: '你可能依赖可预测性、明确结束点和熟悉路径来降低切换成本。计划变化、被突然打断、陌生流程或选项过多，都可能让大脑需要额外时间重新建立行动路径。',
      cost: '变化本身未必令人厌恶，但重新定位的成本可能很高；等待未来安排也可能占据当前行动空间，使整段时间处于“尚未切换”的状态。',
      support: '提供提前通知、清楚的新方案、缓冲时间和备用路径。减少不必要的选项，让变化从“突然重置”变成“可预期迁移”。',
      reflection: '真正困难的是变化、突然性、不确定性，还是从旧状态脱离？如果提前知道并有缓冲，困难会下降多少？',
      context: { work: '临时改期、频繁切任务和界面流程变化会产生重新进入成本；预告、固定流程和清晰交接能保护连续性。', social: '临时邀约、计划取消或互动规则突然变化可能引发明显停顿，即使理性上完全理解对方原因。', daily: '熟悉路线、位置和重复选择可承担节能功能，不必把它们一概理解成“缺乏灵活性”。', recovery: '切换本身会耗能；安排之间留出空白，往往比把日程无缝衔接更能维持后续功能。' }
    },
    activity: {
      visible: '你的活动水平和回应速度可能随唤醒状态明显变化，可能需要走动、摆弄物品或额外刺激来维持专注，也可能在兴奋、焦虑或赶时间时更难暂停和复核。',
      cost: '高唤醒时容易出现插话、快速答应、立即搜索或同时启动多个任务；低反馈和长等待则可能造成明显焦躁或注意漂移。',
      support: '把安全活动纳入任务，而不是强行压制；对高后果决定设置外部暂停点，例如延迟发送、二次检查或让他人复核。',
      reflection: '哪些动作是在帮助你调节，哪些冲动会真正带来后果？怎样设计“允许动”和“必须停一下”的边界？',
      context: { work: '允许走动、涂画或短休息可能提升持续投入；重要决定则需要明确的复核步骤，避免在高唤醒时立即承诺。', social: '快速回应或插话有时来自怕忘记想法和节奏调节，而不是故意压过别人；明确轮次和记笔记会更有效。', daily: '购物、消息、临时想法容易触发即时行动；设置愿望清单、稍后处理列表和延迟规则能减少后悔成本。', recovery: '忙完后仍停不下来可能延迟真正恢复，需要设计从高唤醒逐级降速的固定流程。' }
    },
    overload: {
      visible: '你的负荷可能以累积方式上升：单个刺激、任务或交流都还能处理，但叠加后会出现思考、语言、选择和行动能力的暂时下降。恢复速度也可能明显慢于外界预期。',
      cost: '如果早期信号识别较晚，常会在已经超过承受范围后才发现需要退出；此时的急躁、沉默、哭泣或离开不一定代表稳定态度，而可能是功能暂时收缩。',
      support: '把干预点前移到过载之前：识别预警、减少输入和要求、允许退出，并保护恢复过程不被再次打断。',
      reflection: '你的最早预警是什么？头痛、说话减少、错误增加、声音变刺耳、动作变快，还是别的信号？',
      context: { work: '连续会议、复杂决策、噪音与截止压力叠加时，能力可能突然下降；减少并发要求比临时要求“坚持一下”更有效。', social: '高负荷时表达会变窄，可能只能说很少的话或直接退出；重要关系最好预先约定暂停和恢复后的再沟通方式。', daily: '一天中很多小刺激和小任务会累积，最后一个普通请求也可能成为超过阈值的触发点。', recovery: '恢复需要低要求、低输入且连续的时间；如果不断被询问、解释或重新安排，恢复过程可能被重置。' }
    },
    masking: {
      visible: '你可能通过模仿、脚本、自我监控、隐藏调节动作或压下支持需要来维持符合环境期待的表现。外在“看起来没问题”与内部成本可以同时存在。',
      cost: '持续监控眼神、表情、语气和身体动作会占用注意，并可能把真实需求推迟到安全环境才出现；长期下来也可能增加自我辨识困难和恢复需求。',
      support: '区分有帮助的策略与被迫表演。保留真正提高沟通质量的工具，同时在低风险环境减少没有功能收益、只有社会成本的掩饰。',
      reflection: '哪些调整是你主动选择的有效策略，哪些主要是为了避免被评价？停止某种掩饰后，功能和安全感分别会怎样变化？',
      context: { work: '表面稳定不代表低负荷；长期维持“自然、专注、好相处”的表现可能让下班后的功能显著下降。', social: '脚本、模仿和礼貌表演可能帮助进入互动，却也可能让你很难判断自己是否真正享受或同意。', daily: '在公共空间压住动作、感官需要或困惑，往往会把成本转移到回家后的反弹式安静、活动或情绪释放。', recovery: '恢复不仅是从社交活动恢复，也可能是从长期自我监控中退出；安全环境中的“变得不一样”不等于故意反差。' }
    }
  };

  const pairInterpretations = {
    'attention|sensory': '感官输入和注意筛选可能彼此放大：环境越复杂，越难决定哪些信息应进入注意；注意已经不稳时，同样的声音或动作也更容易占满处理空间。',
    'executive|sensory': '感官负荷可能先消耗用于规划和工作记忆的资源，使原本能完成的多步骤任务突然变得更难；环境调整后执行表现可能出现明显变化。',
    'communication|sensory': '面对面交流同时要求处理声音、表情、距离和语言内容，感官与社会信息的叠加可能让表达或理解在多人场景中明显下降。',
    'sensory|transition': '熟悉环境和固定感官条件可能承担稳定作用，因此空间、路线或安排突然改变时，不只是“计划被改”，连原本依赖的调节条件也会一起变化。',
    'activity|sensory': '活动和重复动作可能是调节感官与唤醒水平的方法；强行保持静止不一定降低负荷，反而可能让注意更难维持。',
    'overload|sensory': '感官负荷可能是整体过载的重要底层输入，尤其当声音、光线与任务或社交要求叠加时；降低刺激常能直接延缓达到极限。',
    'masking|sensory': '如果你经常隐藏感官不适或调节动作，外界看到的耐受度可能高于真实耐受度，成本则在活动结束后集中显现。',
    'attention|executive': '注意启动、维持和转移与执行功能会形成明显耦合：不是“不知道该做什么”，而是知道目标后仍难以把注意稳定地放到正确步骤并持续到收尾。',
    'attention|communication': '实时对话需要持续注意和快速整合信息，分心或高度聚焦都可能让你错过话题变化；文字沟通常因允许重读和延迟处理而更稳定。',
    'attention|transition': '一旦注意深度进入当前活动，切换会更困难；反过来，频繁切换又会不断产生重新进入成本，形成“难停下—停下后又难重新开始”的循环。',
    'activity|attention': '活动需求与注意水平可能共同受唤醒调节：适量走动或刺激能帮助专注，但高唤醒也可能增加即时回应、页面切换和同时开启多个任务。',
    'attention|overload': '注意控制本身需要资源，长时间筛选干扰或强行维持专注会累积负荷；达到阈值后，理解、转移和重新进入能力可能一起下降。',
    'attention|masking': '社交中的自我监控会占用本就有限的注意资源，使你更难同时跟踪内容、身体状态和环境刺激；表面配合可能以更高的后续疲劳为代价。',
    'communication|executive': '复杂沟通常同时要求记住前文、组织观点、判断顺序和及时回应；工作记忆与规划负荷一高，表达可能明显变慢或遗漏重点。',
    'executive|transition': '多步骤组织和状态切换可能共同造成“知道下一步但动不了”的体验；明确结束点、下一步动作和过渡缓冲通常比笼统计划更有效。',
    'activity|executive': '即时冲动或新想法容易打断既有任务链，而任务链一旦中断又需要额外执行资源恢复；外部捕捉列表和延迟规则可以保护主线。',
    'executive|overload': '当决策、记忆和排序负荷持续累积时，执行困难可能迅速转为整体过载；此时减少任务数量往往比增加提醒更重要。',
    'executive|masking': '维持社会表现也像一项持续运行的后台任务，会占用工作记忆和自我监控资源，从而减少留给日常组织和收尾的容量。',
    'communication|transition': '互动规则、话题或安排突然变化时，你既要重新理解情境，又要迅速组织回应，因此临时变动在社交场景中可能比单纯改计划更耗能。',
    'activity|communication': '快速回应、插话或越说越多可能与唤醒和怕忘记想法有关；把想法先记录下来、使用明确轮次，通常比单纯要求“控制自己”更可操作。',
    'communication|overload': '过载会直接压缩语言和社会信息处理能力，导致当场说不清、只能沉默或离开；恢复后再沟通往往更能反映稳定态度。',
    'communication|masking': '你可能用脚本、模仿和自我监控弥补即时社会信息加工困难；这些策略可能有效，但也会显著增加每次互动的能量成本。',
    'activity|transition': '高度投入时可能难以主动停下，而外部突然要求切换又会产生强烈阻力；提前的结束提示和逐步降速有助于把切换从“急刹车”变成过渡。',
    'overload|transition': '变化和切换本身会增加负荷，当日程已经接近上限时，一个临时调整就可能成为最后的触发点；预留缓冲能提高整体容错。',
    'masking|transition': '陌生环境或规则变化会增加需要推断和监控的内容，因此掩饰成本也可能上升；提前知道流程可同时降低不确定性和表演负担。',
    'activity|overload': '高唤醒状态下可能继续活动、说话或寻找刺激，即使身体已经接近极限；识别“越累越停不下来”是提前干预的重要线索。',
    'activity|masking': '如果你长期压住走动、重复动作或自然节奏，外表可能更安静，但调节需求并未消失，往往会转化为更高的内在紧张和活动后的反弹。',
    'masking|overload': '掩饰可能让负荷在公共场合暂时不显现，却把反应推迟到安全环境；因此“当时表现正常”不能反证当时没有过载。'
  };


  const scoreOptions = [
    ['0', '0 - 完全不符合'],
    ['1', '1 - 经常不符合'],
    ['2', '2 - 基本不符合'],
    ['3', '3 - 有时符合'],
    ['4', '4 - 经常符合'],
    ['5', '5 - 完全符合']
  ];

  const form = document.getElementById('neurodiversityQuiz');
  const questionsContainer = document.getElementById('questionsContainer');
  const result = document.getElementById('result');
  const storageKey = window.PRISM_SCALE_CONFIG.storageKey;
  const flatQuestions = [];

  dimensions.forEach(dimension => {
    dimension.questions.forEach(question => {
      flatQuestions.push({ dimensionId: dimension.id, question });
    });
  });

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderQuestions() {
    let number = 0;
    dimensions.forEach((dimension, dimensionIndex) => {
      const section = element('section', 'section');
      const heading = element('h2', '', `第${toChineseNumber(dimensionIndex + 1)}部分：${dimension.title}（${number + 1}–${number + dimension.questions.length}题）`);
      section.appendChild(heading);
      section.appendChild(element('p', 'dimension-intro', dimension.description));

      dimension.questions.forEach(question => {
        number += 1;
        const wrapper = element('div', 'question');
        const explanationId = `q${number}-explanation`;
        const questionTitle = element('div', 'question-title');
        questionTitle.setAttribute('role', 'button');
        questionTitle.setAttribute('tabindex', '0');
        questionTitle.setAttribute('aria-expanded', 'false');
        questionTitle.setAttribute('aria-controls', explanationId);
        const numberSpan = element('span', 'q-number', `${number}.`);
        questionTitle.append(numberSpan, document.createTextNode(question[0]));

        const select = element('select');
        select.name = `q${number}`;
        select.dataset.dimension = dimension.id;
        select.setAttribute('aria-label', `第 ${number} 题：${question[0]}`);
        const placeholder = element('option', '', '请选择...');
        placeholder.value = '';
        placeholder.disabled = true;
        placeholder.selected = true;
        select.appendChild(placeholder);
        scoreOptions.forEach(([value, label]) => {
          const option = element('option', '', label);
          option.value = value;
          select.appendChild(option);
        });

        const explanation = element('div', 'explanation');
        explanation.id = explanationId;
        const focus = element('p');
        const focusLabel = element('strong', '', '本题用意：');
        focus.append(focusLabel, document.createTextNode(`${question[1]}${dimensionExplanationNotes[dimension.id]}`));
        const example = element('p');
        const exampleLabel = element('strong', '', '具体案例：');
        example.append(exampleLabel, document.createTextNode(window.PrismScale.formatExampleSet(question[2], { variantSource: question[0], middleFallback: '这种体验只在少数环境或疲惫、压力较高时出现', lowFallback: '在相似情境中通常没有这种困难或额外调节需求' })));
        explanation.append(focus, example);

        const toggleExplanation = () => {
          const expanded = explanation.classList.toggle('show');
          questionTitle.setAttribute('aria-expanded', String(expanded));
        };
        questionTitle.addEventListener('click', toggleExplanation);
        questionTitle.addEventListener('keydown', event => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          toggleExplanation();
        });

        wrapper.append(questionTitle, select, explanation);
        section.appendChild(wrapper);
      });
      questionsContainer.appendChild(section);
    });
  }

  function toChineseNumber(value) {
    return ['一', '二', '三', '四', '五', '六', '七', '八'][value - 1] || String(value);
  }

  function collectAnswers() {
    const answers = {};
    form.querySelectorAll('select').forEach(select => {
      if (select.value !== '') answers[select.name] = Number(select.value);
    });
    return answers;
  }

  function saveAnswers() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(collectAnswers()));
    } catch (error) {
      console.warn('无法保存神经多样性体验量表进度。', error);
    }
  }

  function restoreAnswers() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      Object.entries(saved).forEach(([name, value]) => {
        const select = form.elements.namedItem(name);
        if (select && Number.isFinite(Number(value))) select.value = String(value);
      });
    } catch (error) {
      console.warn('无法读取神经多样性体验量表进度。', error);
    }
  }

  function scoreLevel(score) {
    if (score < 1.5) return { key: 'low', label: '较少显现', text: '这类体验目前较少出现，或对日常影响较小。低分不排除在特定情境、疲惫或高要求时期仍有支持需要。' };
    if (score < 2.75) return { key: 'mid', label: '情境性显现', text: '这类体验会在部分环境、任务或状态下出现。重点是识别哪些条件会明显放大或减轻它，而不是把中间分数理解成“有一点诊断特征”。' };
    if (score < 3.75) return { key: 'high', label: '较明显', text: '这类体验在当前生活中较为明显，可能已经影响能量分配、舒适度、沟通方式或完成任务所需的支持。' };
    return { key: 'veryHigh', label: '高频或高负荷', text: '这类体验出现频繁、强度较高或恢复成本明显。它值得优先进入环境调整与支持计划，但分数本身仍不是诊断阈值。' };
  }

  function calculateScores(answers) {
    const scores = {};
    let questionNumber = 0;
    dimensions.forEach(dimension => {
      let total = 0;
      dimension.questions.forEach(() => {
        questionNumber += 1;
        total += answers[`q${questionNumber}`];
      });
      scores[dimension.id] = total / dimension.questions.length;
    });
    return scores;
  }

  function pairKey(firstId, secondId) {
    return [firstId, secondId].sort().join('|');
  }

  function getPairInterpretation(first, second) {
    return pairInterpretations[pairKey(first.id, second.id)] ||
      `${first.title}与${second.title}可能在同一情境中相互叠加。建议观察：当其中一个维度负荷上升时，另一个维度是否也随之变难，以及哪一种环境调整能同时改善两者。`;
  }

  function getProfilePattern(ranked) {
    const veryHigh = ranked.filter(item => item.score >= 3.75);
    const notable = ranked.filter(item => item.score >= 2.75);
    const contextual = ranked.filter(item => item.score >= 1.5 && item.score < 2.75);
    const spread = ranked[0].score - ranked[ranked.length - 1].score;

    if (veryHigh.length >= 4 || notable.length >= 6) {
      return {
        label: '多维广泛显现',
        text: '多个维度同时处于较明显或更高范围，当前负荷可能不是单一问题造成的。比逐个“纠正表现”更重要的是先降低整体环境要求、减少并发任务，并保护恢复时间。'
      };
    }
    if (notable.length >= 3) {
      return {
        label: '多维交错显现',
        text: '有数个维度共同突出，彼此可能形成连锁效应。优先找出最常一起出现的场景，往往比单独解释每个分数更有实际价值。'
      };
    }
    if (notable.length >= 1 && spread >= 1.5) {
      return {
        label: '局部突出画像',
        text: '你的维度差异较明显，负荷更集中在少数领域。可以优先针对高分维度做具体适配，同时保留对低分维度在特殊情境下变化的观察。'
      };
    }
    if (contextual.length >= 4) {
      return {
        label: '情境依赖画像',
        text: '多数体验处于情境性范围，是否出现困难可能高度取决于任务清晰度、感官环境、睡眠、压力与可用支持。单看平均分容易低估环境差异。'
      };
    }
    return {
      label: '当前整体负荷较低',
      text: '八个维度目前大多较少显现。这个结果只描述当前六个月的自评，不用于排除任何状况；若某些具体场景仍造成明显困难，仍应以实际功能影响为准。'
    };
  }


  function getSummaryTitle(ranked) {
    const first = ranked[0];
    const second = ranked[1];
    const third = ranked[2];
    const lowest = ranked[ranked.length - 1];
    const spread = first.score - lowest.score;
    const topCluster = first.score - third.score;
    const topGap = first.score - second.score;

    if (spread <= 0.65) return '多维接近的相对均衡轮廓';
    if (topCluster <= 0.45 || (topGap <= 0.25 && topCluster <= 0.75)) {
      return `${first.shortTitle}领衔的多维交错轮廓`;
    }
    return `${first.shortTitle}较突出的差异化轮廓`;
  }

  function calculateResult() {
    const answers = collectAnswers();
    if (Object.keys(answers).length !== flatQuestions.length) {
      const firstMissing = Array.from(form.querySelectorAll('select')).find(select => select.value === '');
      window.alert(`请完成全部 ${flatQuestions.length} 道题后再生成结果。`);
      firstMissing?.focus();
      return;
    }

    const scores = calculateScores(answers);
    const ranked = dimensions
      .map(dimension => ({ ...dimension, score: scores[dimension.id], level: scoreLevel(scores[dimension.id]) }))
      .sort((a, b) => b.score - a.score);
    const first = ranked[0];
    const second = ranked[1];
    const lowest = ranked[ranked.length - 1];
    const spread = first.score - lowest.score;

    window.PrismScale.renderResultSummary({
      title: getSummaryTitle(ranked),
      metrics: [
        { label: '最高维度', value: `${first.shortTitle} ${first.score.toFixed(1)} / 5.0` },
        { label: '次高维度', value: `${second.shortTitle} ${second.score.toFixed(1)} / 5.0` },
        { label: '最低维度', value: `${lowest.shortTitle} ${lowest.score.toFixed(1)} / 5.0` },
        { label: '维度极差', value: `${spread.toFixed(1)} 分` }
      ]
    });

    renderTypeJudgment(ranked);
    window.PrismScale.renderResultRadar({
      labels: dimensions.map(dimension => dimension.shortTitle),
      values: dimensions.map(dimension => scores[dimension.id]),
      max: 5,
      datasetLabel: '体验强度'
    });

    renderProfileOverview(ranked);
    renderMainInterpretation(ranked);
    renderDimensionAnalysis(ranked);
    renderScoreTable(scores);
    renderSuggestions(ranked);
    result.style.display = 'block';
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderTypeJudgment(ranked) {
    const target = document.getElementById('typeJudgment');
    const first = ranked[0];
    const second = ranked[1];
    const lowest = ranked[ranked.length - 1];
    const spread = first.score - lowest.score;
    const structure = spread >= 1.5 ? '较清楚的强弱层次' : spread >= 0.8 ? '一定程度的强弱分化' : '较接近的多维分布';
    target.innerHTML = `<p class="result-lead">你的总体轮廓以<strong>${first.title}</strong>为相对突出方向，<strong>${second.title}</strong>次之；<strong>${lowest.title}</strong>相对收敛。维度极差为 <strong>${spread.toFixed(1)}</strong> 分，呈现${structure}。</p>`;
  }

  function renderProfileOverview(ranked) {
    const target = document.getElementById('currentProfileAnalysis');
    const pattern = getProfilePattern(ranked);
    const focus = ranked.slice(0, 3);
    const lower = ranked.slice(-2).reverse();
    target.innerHTML = `
      <section class="insight-card">
        <h3 class="result-section-heading">当前体验画像</h3>
        <p>${pattern.text}</p>
        <p><strong>较突出维度：</strong>${focus.map(item => `${item.title}（${item.score.toFixed(1)} / 5，${item.level.label}）`).join('、')}。</p>
        <p><strong>相对较低维度：</strong>${lower.map(item => `${item.title}（${item.score.toFixed(1)} / 5，${item.level.label}）`).join('、')}。高低表示这些体验在过去六个月中的相对显现程度，不代表能力或价值高低。</p>
      </section>`;
  }

  function renderMainInterpretation(ranked) {
    const target = document.getElementById('mainInterpretation');
    const [first, second, third] = ranked;
    const closeThird = first.score - third.score <= 0.75;
    target.innerHTML = `
      <section class="insight-card nd-combination-card">
        <h3 class="result-section-heading">核心体验组合</h3>
        <h4 class="nd-combination-title">${first.title} × ${second.title}</h4>
        <p>${getPairInterpretation(first, second)}</p>
        ${closeThird ? `<p><strong>${third.title}</strong>的得分也较接近前两项，因此实际体验更可能呈现三者交错，而不是单一维度独立发挥作用。</p>` : ''}
        <p>组合解读用于描述这些体验可能如何在同一情境中相互影响；具体表现仍需要结合环境要求、压力状态、可用支持与恢复条件理解。</p>
      </section>`;
  }

  function renderDimensionAnalysis(ranked) {
    const target = document.getElementById('deepPersonalAnalysis');
    const cards = ranked.map((item, index) => {
      const meta = dimensionReportMeta[item.id];
      return `
        <article class="insight-card nd-dimension-detail">
          ${window.PrismScale.createResultDimensionHeader({
            index: index + 1,
            title: item.title,
            score: item.score,
            max: 5,
            level: item.level.label
          })}
          <p>${item.description}</p>
          <div class="nd-signal-grid">
            <section class="nd-signal-card">
              <h4>当前倾向</h4>
              <p>${item.level.text}</p>
            </section>
            <section class="nd-signal-card">
              <h4>可能表现</h4>
              <p>${meta.visible}</p>
            </section>
            <section class="nd-signal-card">
              <h4>需要留意</h4>
              <p>${meta.cost}</p>
            </section>
          </div>
          <p><strong>支持方向：</strong>${meta.support}</p>
          <p class="nd-dimension-reflection"><strong>可以继续观察：</strong>${meta.reflection}</p>
        </article>`;
    }).join('');
    target.innerHTML = `<h3 class="result-section-heading">八维体验深度分析</h3>${cards}`;
  }

  function renderScoreTable(scores) {
    const target = document.getElementById('sectionScores');
    const rows = dimensions.map(dimension => {
      const score = scores[dimension.id];
      const level = scoreLevel(score);
      return `<tr>
        <td><strong>${dimension.title}</strong></td>
        <td>${score.toFixed(1)} / 5</td>
        <td>${level.label}</td>
        <td>${dimension.description}</td>
      </tr>`;
    }).join('');
    target.innerHTML = `
      <h3 class="result-section-heading">分项得分一览</h3>
      <table class="result-score-table">
        <colgroup><col><col><col><col></colgroup>
        <thead><tr><th>维度</th><th>平均分</th><th>当前状态</th><th>观察范围</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  }

  function buildReflectionActions(ranked) {
    const first = ranked[0];
    const second = ranked[1];
    const lowest = ranked[ranked.length - 1];
    const spread = first.score - lowest.score;
    return [
      {
        title: '回看相对突出的体验',
        text: `优先回想<strong>${first.title}</strong>最近一次明显影响效率、舒适度或恢复节奏的场景，并记录当时的任务要求、环境刺激和可用支持。${first.suggestions[0]}`
      },
      {
        title: '重新理解相对收敛的维度',
        text: `<strong>${lowest.title}</strong>在本次作答中相对较低，更适合作为对照，而不是被理解为“完全没有”。比较高低维度出现的场景差异，有助于判断哪些困难更依赖具体环境。`
      },
      {
        title: '观察维度如何共同出现',
        text: `<strong>${first.title}</strong>与<strong>${second.title}</strong>都较突出时，可以留意它们是否经常在同一段经历中一起升高。比单独追踪一个分数更重要的是找出共同的触发条件、放大因素和恢复条件。`
      },
      {
        title: '把支持需要改写成具体条件',
        text: `不要只写“需要更专注”或“需要适应变化”，而是把需求写成可执行条件，例如更明确的步骤、提前通知、较少并发任务或固定恢复时间。可以先从<strong>${first.title}</strong>的一项低成本调整开始。`
      },
      {
        title: '在合适时机重测',
        text: `本次最高与最低维度相差<strong>${spread.toFixed(1)} 分</strong>。如果近期正处于高压、睡眠不足或重大变化期，可以在状态较稳定后再次作答，比较的是画像结构和情境变化，而不是追求固定分数。`
      }
    ];
  }

  function renderSuggestions(ranked) {
    window.PrismScale.renderReflectionActions('personalizedSuggestions', buildReflectionActions(ranked));
  }

  function buildTextResult() {
    const answers = collectAnswers();
    if (Object.keys(answers).length !== flatQuestions.length) return '';
    const scores = calculateScores(answers);
    const ranked = dimensions
      .map(dimension => ({ ...dimension, score: scores[dimension.id], level: scoreLevel(scores[dimension.id]) }))
      .sort((a, b) => b.score - a.score);
    const first = ranked[0];
    const second = ranked[1];
    const lowest = ranked[ranked.length - 1];
    const actions = buildReflectionActions(ranked);
    const lines = [
      '神经多样性体验深度自评报告',
      `生成日期：${new Date().toLocaleDateString('zh-CN')}`,
      '',
      `【${getSummaryTitle(ranked)}】`,
      `最高维度：${first.title} ${first.score.toFixed(1)} / 5.0`,
      `次高维度：${second.title} ${second.score.toFixed(1)} / 5.0`,
      `最低维度：${lowest.title} ${lowest.score.toFixed(1)} / 5.0`,
      `维度极差：${(first.score - lowest.score).toFixed(1)} 分`,
      '',
      '【当前体验画像】',
      getProfilePattern(ranked).text,
      '',
      '【核心体验组合】',
      `${first.title} × ${second.title}：${getPairInterpretation(first, second)}`,
      '',
      '【八维体验深度分析】'
    ];

    ranked.forEach((item, index) => {
      const meta = dimensionReportMeta[item.id];
      lines.push(
        '',
        `${index + 1}. ${item.title}：${item.score.toFixed(1)} / 5（${item.level.label}）`,
        `观察范围：${item.description}`,
        `当前倾向：${item.level.text}`,
        `可能表现：${meta.visible}`,
        `需要留意：${meta.cost}`,
        `支持方向：${meta.support}`,
        `可以继续观察：${meta.reflection}`
      );
    });

    lines.push('', '【分项得分一览】');
    dimensions.forEach(dimension => {
      const score = scores[dimension.id];
      lines.push(`${dimension.title}：${score.toFixed(1)} / 5（${scoreLevel(score).label}）`);
    });

    lines.push('', '【深度反思与行动建议】');
    actions.forEach((item, index) => {
      const plain = item.text.replace(/<strong>/g, '').replace(/<\/strong>/g, '');
      lines.push(`${index + 1}. ${item.title}`, plain);
    });
    return lines.join('\n');
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function saveResultText() {
    const text = buildTextResult();
    if (!text) {
      window.alert('请先完成量表并计算结果。');
      return;
    }
    downloadBlob(new Blob([text], { type: 'text/plain;charset=utf-8' }), '神经多样性体验深度自评报告.txt');
  }

  async function saveResultImage() {
    if (result.style.display === 'none' || !result.style.display) {
      window.alert('请先完成量表并计算结果。');
      return;
    }
    if (typeof window.html2canvas !== 'function') {
      window.alert('图片导出组件尚未加载，请稍后重试。');
      return;
    }
    const button = document.getElementById('saveImageButton');
    const previousText = button.textContent;
    button.disabled = true;
    button.textContent = '正在生成图片…';
    try {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      const canvas = await window.html2canvas(result, {
        scale: 2,
        useCORS: true,
        backgroundColor: dark ? '#18212d' : '#f6f8f7'
      });
      canvas.toBlob(blob => {
        if (blob) downloadBlob(blob, '神经多样性体验深度自评报告.png');
      }, 'image/png');
    } catch (error) {
      console.error('导出神经多样性体验结果图片失败。', error);
      window.alert('图片生成失败，请稍后重试。');
    } finally {
      button.disabled = false;
      button.textContent = previousText;
    }
  }

  function resetForm() {
    if (!window.confirm('确定清空全部作答和结果吗？此操作无法撤销。')) return;
    form.reset();
    localStorage.removeItem(storageKey);
    result.style.display = 'none';
    window.PrismScale.destroyResultRadar('radarChart');
    window.PrismScale.updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderQuestions();
  restoreAnswers();
  window.PrismScale.updateProgress();
  form.addEventListener('change', saveAnswers);
  document.getElementById('calculateButton').addEventListener('click', calculateResult);
  document.getElementById('resetButton').addEventListener('click', resetForm);
  document.getElementById('saveTextButton').addEventListener('click', saveResultText);
  document.getElementById('saveImageButton').addEventListener('click', saveResultImage);
})();
