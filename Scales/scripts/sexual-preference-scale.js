(function () {
  'use strict';

  const dimensions = [
    {
      id: 'intimacy', title: '亲密联结', shortTitle: '亲密', group: 'connection',
      description: '观察情感安全、信任、专属关注与身体或幻想情境之间的联系。',
      interpretation: '这一维度较高时，吸引力常来自被理解、被珍惜和情绪上的靠近；较低时，可能更偏好把情感联结与性或情境兴趣分开，也可能对两者都没有明显需要。',
      reflection: '对你而言，信任是兴趣出现的前提、增强条件，还是与兴趣彼此独立？',
      suggestions: ['区分“喜欢这个人”“想靠近”“产生性吸引”和“愿意参与某种互动”。', '把需要的情感条件写成具体语言，例如先交流、确认关系或保留独处时间。'],
      questions: [
        ['只有在感到被理解和信任时，亲密或性相关的想象才更容易对我有吸引力。', '观察情感安全是否是兴趣出现或增强的重要条件。', '例如面对很有好感但仍不熟悉的人时没有相关兴趣，在建立稳定信任后才开始觉得亲密想象有吸引力。'],
        ['比起单纯的身体刺激，我更容易被“彼此专注于对方”的感觉吸引。', '区分身体刺激本身与关系中的专属关注。', '例如同样的互动，如果包含持续回应、眼神或确认彼此感受，就会明显更有吸引力。'],
        ['温柔表达、拥抱、亲吻或安静陪伴会显著增强我对后续亲密互动的兴趣。', '观察非性亲密是否会成为兴趣的组成部分或过渡条件。', '例如先有一段不带目标的拥抱和交流，才会让之后的想象变得自然；这些行为本身也可以是终点。'],
        ['我喜欢把亲密互动理解为关系故事的一部分，而不只是一次独立体验。', '观察连续关系叙事是否比单次情境更重要。', '例如会在意互动前后的关系变化、承诺和共同记忆，而不只关注当下发生了什么。'],
        ['当对方准确记得我的偏好、边界或小习惯时，我会感到明显的亲密吸引力。', '观察被看见和被记住是否会增强兴趣。', '例如对方记得你喜欢怎样的距离、称呼或安抚方式，这种细节比强烈刺激更打动你。'],
        ['结束后的陪伴与情感确认，会影响我是否期待整个亲密情境。', '观察互动后的联结是否是整体兴趣的一部分。', '例如想到结束后可以拥抱、聊天或收到确认，会让你更愿意想象前面的互动。']
      ]
    },
    {
      id: 'atmosphere', title: '氛围与感官', shortTitle: '氛围', group: 'sensation',
      description: '观察光线、声音、气味、材质、空间和节奏如何影响兴趣与舒适度。',
      interpretation: '这一维度描述审美和感官配置对兴趣的作用。高分不等于需要奢华场景，可能只是对环境细节非常敏感；低分也可能表示主题本身比布置更重要。',
      reflection: '哪些感官元素会真正增强兴趣，哪些元素反而会分散注意或造成不适？',
      suggestions: ['分别记录喜欢与需要避开的光线、声音、气味、温度和材质。', '不要把不适硬解释成紧张；环境调整本身可以是边界的一部分。'],
      questions: [
        ['光线、音乐、气味或空间布置是否合适，会明显影响我对亲密情境的兴趣。', '观察整体氛围是否参与构成吸引力。', '例如柔和光线和熟悉音乐会让想象变得有吸引力，而刺眼灯光或杂乱环境会迅速削弱兴趣。'],
        ['特定材质、温度或触感本身就能成为我感兴趣的主题。', '观察感官线索是否能独立带来审美或身体层面的兴趣。', '例如丝绸、皮革、柔软织物、凉感金属或温热触感中的某一种，会让你特别想继续想象。'],
        ['我喜欢亲密互动有清楚的准备过程，而不是毫无过渡地开始。', '观察仪式感和渐进转换是否增强兴趣。', '例如整理空间、洗浴、换衣或播放固定音乐，会帮助你从日常状态进入想象情境。'],
        ['节奏缓慢、留有停顿和逐渐升高的期待感，对我很有吸引力。', '观察渐进节奏与即时刺激之间的偏好。', '例如比起立刻进入强烈内容，你更喜欢先通过靠近、等待和细小变化累积张力。'],
        ['服装、妆容、配色或整体视觉风格会显著增强某个情境的吸引力。', '观察视觉审美是否是偏好的一部分。', '例如同一角色或情节在符合你审美的服装与配色下，会比普通日常状态更吸引你。'],
        ['我需要空间足够私密、安静和可控制，才比较容易产生或保持兴趣。', '观察环境安全感和可控制性对兴趣的影响。', '例如确认不会被打扰、门可以锁好且声音可控后，想象或亲密感才不会不断中断。']
      ]
    },
    {
      id: 'novelty', title: '新奇探索', shortTitle: '探索', group: 'exploration',
      description: '观察对新主题、新安排与循序尝试的好奇和开放程度。',
      interpretation: '这一维度较高表示新鲜感本身容易带来兴趣，但不意味着没有边界；较低可能表示熟悉、可预测或少数固定主题更有吸引力。',
      reflection: '你的好奇通常停留在了解、幻想、讨论、低强度尝试，还是愿意持续实践？',
      suggestions: ['把好奇分成“只想了解、只限幻想、愿意讨论、可能尝试”四层。', '任何新主题都先单独评估风险、隐私、退出方式和恢复需要。'],
      questions: [
        ['遇到从未了解过的亲密互动主题时，我通常会产生想进一步认识的好奇。', '观察陌生主题是否会先引发探索兴趣，而不是自动排斥。', '例如看到一个新概念时，会想查清它具体如何运作、参与者为什么喜欢以及有哪些边界。'],
        ['即使不确定会不会实践，我也享受在幻想中尝试不同情境。', '区分想象探索与现实行动意愿。', '例如会在阅读、写作或独自想象中切换不同主题，但不因此认为自己必须现实尝试。'],
        ['在安全和可撤回的前提下，小范围尝试新变化会让我期待。', '观察低强度、可逆试验是否具有吸引力。', '例如先改变一个称呼、一种材质或一小段规则，再根据感受决定是否继续。'],
        ['长期重复完全相同的互动方式，会让我逐渐失去兴趣。', '观察变化和新鲜感是否有助于维持兴趣。', '例如即使原本喜欢某种安排，如果每次流程、语言和节奏都完全一样，也会开始觉得缺少吸引力。'],
        ['我愿意为理解一个新偏好主动学习相关知识、安全原则和沟通方法。', '观察探索兴趣是否包含准备和风险知情。', '例如在考虑某个主题前，会先查资料、了解常见风险并思考要问对方哪些问题。'],
        ['我喜欢和可信任的人交换“也许可以探索”的想法，而不要求立刻行动。', '观察开放讨论本身是否带来连接和兴趣。', '例如一起列出好奇清单并允许任何一项最后不实践，这个讨论过程本身就让你觉得有吸引力。']
      ]
    },
    {
      id: 'roleplay', title: '角色与叙事', shortTitle: '角色', group: 'exploration',
      description: '观察虚构身份、情节、称谓与仪式如何帮助进入不同于日常的互动状态。',
      interpretation: '高分表示叙事框架和角色距离容易增强兴趣；低分可能更喜欢直接、自然、不表演的互动。角色内容不等于现实身份或真实权力。',
      reflection: '你被吸引的是身份、情节、语言、服装、仪式，还是暂时离开日常自我的感觉？',
      suggestions: ['事前区分角色内语言与现实评价，约定如何暂停和退出角色。', '容易触及身份敏感点的情节，应单独列出禁区与结束后的去角色方式。'],
      questions: [
        ['进入一个明确的虚构身份，会让我更容易对亲密情境产生兴趣。', '观察角色距离是否帮助表达平时不容易表达的兴趣。', '例如使用一个虚构职业、关系或人格设定后，你会比直接以日常身份互动更放松或投入。'],
        ['带有开端、发展和结尾的情节，比零散动作更能吸引我。', '观察完整叙事是否是兴趣的重要来源。', '例如会在意双方为什么进入情境、接下来如何推进以及怎样回到日常，而不只是某个单独片段。'],
        ['特定称谓、身份语言或仪式会明显增强我的代入感。', '观察语言与仪式是否承担进入角色的功能。', '例如换用约定称呼、行礼、任务开始语或结束语后，情境会立刻变得更鲜明。'],
        ['服装、道具或场景布置能帮助我相信并享受一个虚构情境。', '观察外部线索是否增强叙事投入。', '例如简单换一套服装、使用象征性道具或调整空间，就能让普通房间具有角色场景的感觉。'],
        ['我喜欢在亲密幻想中体验与日常性格不同的一面。', '观察角色扮演是否提供安全的行为反差。', '例如日常很谨慎的人在幻想里更大胆，或日常负责的人暂时成为被照顾的一方。'],
        ['情境结束后明确“回到现实身份”，会让我更安心地投入角色。', '观察去角色边界是否反而支持更深的想象。', '例如通过换回称呼、脱下服装或进行简短确认，清楚表示刚才的台词不延续到现实关系。']
      ]
    },
    {
      id: 'leading', title: '主导与引领', shortTitle: '主导', group: 'power',
      description: '观察在协商范围内负责安排、决定节奏、发出指令和承担引导责任的兴趣。',
      interpretation: '这一维度较高表示主动掌握情境容易带来兴趣；它不等于现实控制欲，也不证明技术能力。主导偏好始终伴随倾听、责任和停止义务。',
      reflection: '你喜欢的是做决定、看到回应、承担照顾、拥有仪式性权力，还是其中某几项？',
      suggestions: ['把“可以决定什么”写成具体范围，并保留对方无需解释即可暂停的方式。', '主导方也需要检查自己的能力、情绪状态与事后恢复。'],
      questions: [
        ['在明确协商后，由我来安排亲密情境的流程会让我感到有吸引力。', '观察规划和掌握整体节奏是否构成兴趣。', '例如你会享受设计开始方式、变化顺序和结束条件，同时让对方事先知道可以怎样调整。'],
        ['我喜欢在互动中给出清楚指令，并观察对方自愿回应。', '观察发出指令与获得回应的互动张力。', '例如对方按约定完成一个动作、称呼或任务时，你会因这种自愿配合而感到投入。'],
        ['决定节奏快慢、暂停点或下一步，会增强我的参与感。', '观察时间和节奏控制是否具有吸引力。', '例如你喜欢根据对方反应让情境加快、放慢或暂时停住，而不是完全跟随预设流程。'],
        ['在对方把部分选择交给我时，我会感到被信任并愿意承担责任。', '观察权力交托是否同时带来情感意义和责任意识。', '例如对方同意让你在几个已协商选项中决定下一项，你会重视这种信任而不是把它理解成无限授权。'],
        ['我对规则、任务、许可或奖励一类结构化的引导有兴趣。', '观察持续或仪式化的权力结构是否吸引你。', '例如约定某些任务、请示方式或完成后的肯定，会比临时随意安排更有吸引力。'],
        ['看到对方在安全范围内因我的引导而专注或放松，会增强我的兴趣。', '观察对方的自愿反应是否是主导兴趣的重要反馈。', '例如对方明确表示安心、投入或享受时，你会比单纯“拥有决定权”更感到满足。']
      ]
    },
    {
      id: 'following', title: '跟随与交付', shortTitle: '跟随', group: 'power',
      description: '观察在信任、边界清楚且可随时撤回时，把部分决定交给对方的兴趣。',
      interpretation: '高分表示自愿跟随或暂时交托决定可能带来兴趣与放松；它不等于现实中缺乏主见、需要被控制或同意所有要求。',
      reflection: '什么条件会让交付感变得安心：信任、明确规则、能力、照顾、退出权，还是其他条件？',
      suggestions: ['写清楚可交付、需再次确认和绝不交付的三类事项。', '顺从角色中的沉默、迟疑或僵住不应自动被当作继续同意。'],
      questions: [
        ['在边界清楚时，把一部分流程选择交给可信任的人会让我感到轻松或有吸引力。', '观察减少决策和自愿交托是否构成兴趣。', '例如事先选定可接受范围后，由对方决定其中的顺序和节奏，会让你更容易沉浸。'],
        ['收到清楚、具体而尊重边界的指令，会增强我的代入感。', '观察跟随明确指令是否比模糊猜测更有吸引力。', '例如对方说清楚希望你做什么、多久以及如何暂停，会比只说“听话一点”更让你安心投入。'],
        ['我喜欢在亲密幻想中暂时不用承担主要决策责任。', '观察交付是否提供从日常责任中暂时退出的体验。', '例如日常需要不断做决定时，你会被“有人可靠地带领，而我只需确认感受”的想象吸引。'],
        ['在确认可以随时改变主意后，“交出控制”的感觉会更吸引我。', '观察可撤回性是否是交付兴趣的基础。', '例如知道一个词、手势或直接说停都能立即改变情境，反而让你更愿意想象深入跟随。'],
        ['规则、许可、任务或被肯定的结构，会让我感到专注和被照顾。', '观察结构化跟随是否兼具秩序与情感意义。', '例如按约定完成一项任务并收到具体肯定，会让你觉得关系中的位置清楚而安心。'],
        ['我会对“对方了解我的边界，所以能安全地替我做部分决定”这一想象产生兴趣。', '观察信任与被理解是否支撑交付感。', '例如吸引你的不是失去全部自主，而是对方记得禁区、观察反应并在必要时主动减弱。']
      ]
    },
    {
      id: 'challenge', title: '挑战与追逐', shortTitle: '挑战', group: 'power',
      description: '观察调皮、口头顶撞、假装抵抗、追逐和回应挑战带来的互动张力。',
      interpretation: '这一维度描述协商后的戏剧性阻力与游戏感，不代表现实拒绝可以被忽视。任何“假装不愿意”都需要在开始前明确范围、停止信号和异常反应。',
      reflection: '你更喜欢发起挑战、回应挑战、追逐过程，还是最后重新确认安全与关系的位置？',
      suggestions: ['把角色内抵抗和现实停止信号设计成不会混淆的两套表达。', '不要使用会触发真实恐惧、创伤或身份羞辱的未知内容来“测试反应”。'],
      questions: [
        ['互相调皮、顶嘴或故意增加一点难度，会让我觉得互动更有趣。', '观察轻度挑战是否能增强游戏感和张力。', '例如对方明知规则却在约定范围内故意拖延或开玩笑，你会享受接下来如何回应。'],
        ['在事先协商清楚时，追逐、抓住或试图逃开的情节对我有吸引力。', '观察身体或叙事上的追逐感是否构成兴趣。', '例如双方先约定场地、力度和真正停止信号，再把“追上或逃开”当作短暂游戏。'],
        ['我喜欢“规则被小幅挑战，然后得到回应”的互动结构。', '观察规则与违规则是否形成你喜欢的往返。', '例如约定一个可以故意犯的小规则，让后续提醒、纠正或奖励成为情境的一部分。'],
        ['比起完全顺从，我有时更喜欢保留一点角色内的抵抗或讨价还价。', '观察你是否偏好带有能动性和拉扯感的跟随。', '例如即使最终愿意配合，也喜欢先用角色语言争辩几句，而不是从头到尾安静接受。'],
        ['面对对方在约定范围内的挑战，我会享受重新建立节奏或秩序。', '观察回应挑战是否能增强主导或互动投入。', '例如对方故意打乱一个小步骤时，你会把重新引导视为游戏，而不是现实中的不尊重。'],
        ['挑战结束后明确肯定“刚才只是游戏”，会让整个情境更完整。', '观察修复和现实确认是否是挑战兴趣的一部分。', '例如结束后双方恢复日常称呼、确认没有真实生气，并讨论哪些片段最有趣。']
      ]
    },
    {
      id: 'intensityGiving', title: '强度施予', shortTitle: '施予', group: 'sensation',
      description: '观察在知情、可控范围内向对方施加较强感官刺激并读取反馈的兴趣。',
      interpretation: '高分描述对可控强度、技术和对方自愿反应的兴趣，不等同于现实伤害欲。分数不代表具备安全操作能力，任何实践都需要知识、训练与持续确认。',
      reflection: '吸引你的是刺激动作、强度控制、对方反应、照顾责任，还是几者组合？',
      suggestions: ['把感兴趣的动作与实际掌握的技术分开列出。', '从低强度开始并保留连续反馈，不把忍耐或沉默当成成功。'],
      questions: [
        ['在充分协商后，控制一种较强但可调节的感官刺激，会让我感兴趣。', '观察施加刺激与控制强度是否具有吸引力。', '例如在明确身体部位、强度范围和停止方式后，你会对逐步调整轻重感到投入。'],
        ['我会被对方自愿承受刺激时的表情、声音或身体回应吸引。', '观察参与者反馈是否是兴趣的重要来源。', '例如你关注的是对方明确享受、主动要求调整或表现专注，而不是只关注自己完成动作。'],
        ['精确掌握力度、节奏、位置和间隔本身，会让我觉得有趣。', '观察技术性和细致控制是否构成兴趣。', '例如会想研究怎样用较小风险制造清楚差异，而不是一味追求更强。'],
        ['我喜欢根据对方实时反馈不断调整，而不是机械执行预定强度。', '观察响应式控制是否增强参与感。', '例如对方呼吸、语言或手势变化时，你会停下来确认并改变节奏，这个互动过程本身很吸引你。'],
        ['“我负责让强烈体验保持在双方同意的范围内”这一责任感会增强我的投入。', '观察安全责任是否与主导兴趣相连。', '例如准备必要物品、复核身体状态和主动结束过度刺激，会让你觉得角色更加完整。'],
        ['结束较强刺激后照顾对方、检查状态和复盘，会影响我是否享受整个情境。', '观察施予后的照顾是否属于偏好的一部分。', '例如如果没有时间确认身体和情绪反应，你会觉得情境不完整，甚至不愿开始。']
      ]
    },
    {
      id: 'intensityReceiving', title: '强度接收', shortTitle: '接收', group: 'sensation',
      description: '观察在知情、可控范围内接收较强感官刺激、压力或短暂不适的兴趣。',
      interpretation: '高分表示某些可控强度可能带来专注、情绪释放或幻想吸引力，不代表希望现实受伤或失去退出权。低分同样是完整有效的边界。',
      reflection: '你感兴趣的是身体强度、心理交付、期待感、情绪释放，还是只限幻想？',
      suggestions: ['分别标记只限幻想、可接受的身体部位、强度上限和禁止项目。', '疼痛、麻木、头晕、呼吸异常或恐惧不是需要用意志克服的评分证明。'],
      questions: [
        ['在安全可控时，较强的触觉、压力或冲击感可能对我有吸引力。', '观察强烈感官输入本身是否具有兴趣价值。', '例如在知道强度可立即降低的情况下，明确而集中的刺激会比轻微触碰更容易让你投入。'],
        ['在边界清楚、强度适中的情况下，短暂的不适可能让我更专注于当下。', '观察可控的不适是否会帮助你集中注意或进入特定状态。', '例如短暂、符合预期且能随时停止的刺激会让杂念减少；一旦感到真正的疼痛或不安，你仍会选择停止。'],
        ['等待下一次刺激、却不知道准确时点的期待感，会增强我的兴趣。', '观察可预测范围内的不确定节奏是否有吸引力。', '例如你知道刺激类型和上限，却不知道会在几秒后发生，这种等待比刺激本身更有张力。'],
        ['把感官强度暂时交给可信任的人，会增强我的交付感。', '观察接收刺激是否与权力交托相互增强。', '例如对方会持续观察并尊重信号时，你会因暂时不用决定每一下的节奏而更投入。'],
        ['较强体验后的放松、情绪释放或安静状态，对我有吸引力。', '观察强度后的状态变化是否是整体兴趣的一部分。', '例如你期待的不只是当下刺激，也包括结束后身体逐渐放松、情绪变得清楚或想安静休息。'],
        ['即使某种强度只适合幻想、不适合现实，我仍可能觉得这个主题有吸引力。', '明确区分幻想兴趣与身体实践意愿。', '例如阅读或想象某个强烈情节时会投入，但现实中明确不愿尝试，这两种答案可以同时成立。']
      ]
    },
    {
      id: 'restraint', title: '束缚与限制', shortTitle: '束缚', group: 'sensation',
      description: '观察对活动范围、姿势、规则或技术性束缚被暂时限制的兴趣。',
      interpretation: '这一维度同时容纳操作、接受和仅限视觉想象的兴趣。高分不是技术认证；任何影响循环、神经、呼吸或逃生能力的实践都需要额外知识与保守边界。',
      reflection: '你更在意视觉效果、身体感觉、被限制、负责限制、规则感，还是仪式性？',
      suggestions: ['把视觉兴趣、幻想兴趣、操作兴趣与接受兴趣分开记录。', '不要在无人照看、意识受影响或无法快速解除的条件下尝试限制活动。'],
      questions: [
        ['看到或想象身体活动范围被安全地限制，会让我感兴趣。', '观察限制动作这一核心意象是否有吸引力。', '例如手腕、姿势或移动范围在可迅速解除的方式下被限定，这个画面本身就能增强情境感。'],
        ['我对绳、布带、固定姿势或其他限制工具的视觉与结构感有兴趣。', '观察工具、几何形态和技术审美是否构成偏好。', '例如会被整齐的线条、对称结构或特定材质吸引，即使并不计划把它用于现实强度。'],
        ['在信任条件下，暂时不能随意改变姿势的感觉可能对我有吸引力。', '观察作为接受方时的限制感是否带来交付或专注。', '例如知道随时能解除，但在短时间内保持约定姿势，会让你更专注于身体感受。'],
        ['我会对设计、检查和调整安全限制的操作过程感兴趣。', '观察作为操作方时的技术和责任兴趣。', '例如学习怎样留下空间、持续检查反应并准备快速解除，会让你觉得这一主题不仅是结果，也包括过程。'],
        ['不使用任何工具，仅通过规则限制某些动作，也可能让我有兴趣。', '区分实体束缚与语言或规则限制。', '例如约定一段时间不能移动某只手、不能主动靠近或要保持某个位置，也能产生类似张力。'],
        ['限制解除后的自由移动、拥抱或身体确认，是我喜欢的对比。', '观察解除和恢复是否构成完整偏好。', '例如结束限制后活动关节、确认感觉并重新获得自主动作，会让前后的反差更有意义。']
      ]
    },
    {
      id: 'verbal', title: '言语与心理张力', shortTitle: '言语', group: 'expression',
      description: '观察命令、肯定、挑逗、羞耻主题、禁忌反差或心理游戏带来的兴趣。',
      interpretation: '高分可能来自语言的权力感、亲密感、戏剧性或反差。角色内贬低不等于现实评价；身份、身体、创伤和真实脆弱点需要明确禁词与修复方式。',
      reflection: '哪些词会带来兴趣，哪些词即使在角色中也会造成真实伤害？语气和关系背景会怎样改变含义？',
      suggestions: ['建立喜欢、需询问、禁止三类词语清单。', '结束后用现实语言确认价值与关系，不让角色内评价悬而未决。'],
      questions: [
        ['清楚、有力量感的指令语言会增强我的情境兴趣。', '观察命令式语言是否具有吸引力。', '例如同一句请求如果用明确、沉稳且双方约定的语气表达，会比含糊暗示更让你投入。'],
        ['具体的赞美、肯定或被认可表现，会明显增强我的兴趣。', '观察积极语言反馈是否构成核心偏好。', '例如对方准确说出欣赏你的哪种反应、努力或配合，会比笼统称赞更打动你。'],
        ['在事先约定禁词后，带有羞耻或贬低反差的角色语言可能吸引我。', '观察角色内负面语言是否仅在安全边界中有兴趣。', '例如某些词在日常关系中不可接受，但在清楚知道是表演、可随时停下且事后会修复时具有戏剧张力。'],
        ['挑逗、故意延迟或用语言制造期待，会让我觉得有趣。', '观察语言是否能通过等待和暗示增强张力。', '例如对方先描述接下来可能发生什么，却保留准确时间和细节，会让你更投入想象。'],
        ['我对“角色里的话与现实评价相反”这种心理反差有兴趣。', '观察反差和禁忌感是否是吸引来源。', '例如现实中很被尊重的人在角色中暂时使用截然不同的称谓，但双方都清楚现实评价并未改变。'],
        ['角色语言结束后，明确恢复日常称呼和真实肯定对我很重要。', '观察语言去角色和情绪修复是否属于整体偏好。', '例如结束后说清刚才哪些话只属于情境，并用熟悉称呼确认关系，会让你更安心地看待整个体验。']
      ]
    },
    {
      id: 'visibility', title: '观看与展示', shortTitle: '观看', group: 'expression',
      description: '观察在所有相关者知情同意、场所合法且隐私可控时，观看或被观看带来的兴趣。',
      interpretation: '这一维度可能来自注意力、表演感、视觉欣赏或共享秘密。幻想中的观看不代表同意公开场所、拍摄影像或允许传播，这些事项必须分别确认。',
      reflection: '你感兴趣的是观看、被特定对象观看、镜面视角、表演感，还是影像留存？这些边界是否不同？',
      suggestions: ['分别讨论谁可以看、在哪里、是否记录、谁保管、何时删除。', '不让未同意的第三方被迫参与，也不以模糊场所规则代替同意。'],
      questions: [
        ['在对方明确同意时，专注观看对方的反应和动作会让我有兴趣。', '观察视觉关注他人是否是吸引力的重要来源。', '例如比起闭眼或只关注自己，你会喜欢观察对方的表情、姿势和情绪变化。'],
        ['被一个我信任且明确同意的人专注观看，可能会增强我的兴趣。', '观察成为注意中心是否具有吸引力。', '例如知道对方在欣赏而不是评判，并且你能随时要求停止观看时，会感到更投入。'],
        ['镜子、视角变化或对动作的视觉呈现会增强情境感。', '观察间接观看和构图感是否构成偏好。', '例如通过镜面看到彼此的姿势，或调整位置获得不同视角，会让同一互动更有吸引力。'],
        ['在隐私受到严格保护的前提下，我可能会对记录部分影像感兴趣。', '观察对影像记录的兴趣，并把记录同意与传播同意分开。', '例如只有在双方逐项同意、设备可控，并事先约定查看和删除方式时，短暂记录才可能有吸引力。'],
        ['“在一个完全知情且同意的观众面前表演”这一幻想可能吸引我。', '观察有限观众和表演感是否构成想象兴趣。', '例如幻想中观众身份、场所和边界都清楚，吸引点来自被看见，而不是冒险让陌生人意外看到。'],
        ['我喜欢把观看范围设计得很具体，因为可控制的隐私会增强而不是削弱兴趣。', '观察控制观看边界是否支持安全感和投入。', '例如明确只有某个人、某个时间和某个角度可见，会比“可能被任何人看到”更有吸引力。']
      ]
    },
    {
      id: 'objects', title: '物件与意象', shortTitle: '意象', group: 'expression',
      description: '观察特定服装、材质、身体部位、物件、声音或象征对兴趣的增强作用。',
      interpretation: '高分表示具体线索可能集中承载审美、记忆或幻想意义；低分表示兴趣较少依赖固定元素。只要不伤害、不越界，拥有明确偏好本身不需要被病理化。',
      reflection: '这个元素带来的是审美、触觉、气味、象征、身份联想，还是与某段关系记忆相连？',
      suggestions: ['把喜欢的元素与必须出现的条件区分开，观察偏好的弹性。', '涉及他人物品、身体或影像时，偏好不能替代使用与接触许可。'],
      questions: [
        ['某类服装、鞋履、配饰或造型会显著增强我的兴趣。', '观察可穿戴元素是否成为稳定的吸引线索。', '例如日常状态下兴趣一般，但出现某种制服、剪裁、颜色或配饰后，想象会明显鲜明。'],
        ['某种材质、气味、声音或触感对我有特别吸引力。', '观察非视觉感官线索是否集中承载偏好。', '例如皮革气味、织物摩擦声、金属触感或特定香味中的某一种，会反复出现在你的幻想中。'],
        ['我可能对某个身体部位或动作细节给予比整体更多的注意。', '观察局部线索是否在兴趣中占有较高权重。', '例如手、肩颈、背部、脚步或某种姿态会首先吸引你的注意，但这不必自动等于想要接触。'],
        ['象征身份或关系位置的物件，会增强我的代入感。', '观察物件的象征意义是否比实用功能更重要。', '例如项圈、戒指、徽记或专属配饰会让一个约定的身份和关系动态更清楚。'],
        ['我喜欢围绕某个物件建立固定的使用、佩戴或收纳仪式。', '观察重复仪式是否强化物件偏好。', '例如只有在约定时间取出、由特定人佩戴或结束后共同收好，才觉得这个物件具有完整意义。'],
        ['即使不涉及现实接触，我也会享受收集、欣赏或想象特定物件。', '区分审美兴趣、收藏兴趣与现实互动意愿。', '例如只是浏览设计、保存灵感或在故事中想象某种物件，就已经满足了这部分兴趣。']
      ]
    },
    {
      id: 'multiPerson', title: '多人及关系情境', shortTitle: '多人', group: 'relationship',
      description: '观察对多方均知情同意的多人、旁观、关系开放或嫉妒主题的幻想兴趣。',
      interpretation: '高分可以只反映幻想、叙事或关系结构好奇，不等于希望现实开放关系；低分也不代表保守。隐瞒、背叛和让未同意者卷入不属于协商式多人情境。',
      reflection: '吸引你的是人数、被多人关注、观看关系互动、共享亲密、嫉妒张力，还是关系开放本身？',
      suggestions: ['把幻想内容与现实关系协议分开讨论，不用幻想推翻已有承诺。', '现实多人情境需要每个人直接表达同意、边界、隐私与退出安排。'],
      questions: [
        ['在幻想中，多名成年人均明确知情同意的亲密情境可能会吸引我。', '观察参与人数增加是否会增强想象中的吸引力。', '例如你会对三人或更多参与者都能直接协商、随时退出的情节产生好奇，即使并不打算在现实中实践。'],
        ['同时被不止一个人关注、照顾或回应的想象，会增强我的兴趣。', '观察多来源关注是否是吸引点。', '例如幻想中每个人都知道彼此存在，而你被多人共同注视、肯定或配合会觉得有张力。'],
        ['观看两位或更多知情同意者之间的互动，可能对我有吸引力。', '观察作为知情旁观者的兴趣。', '例如所有人都明确同意你在场并知道观看边界时，你会被他们之间的关系和回应吸引。'],
        ['我对协商式开放关系或非单偶关系的运作方式有探索兴趣。', '观察关系结构层面的好奇，而不是单次活动兴趣。', '例如会想了解如何处理时间、承诺、公开程度和性健康，即使最终仍偏好单偶关系。'],
        ['嫉妒、竞争或“可能失去专属位置”的主题，在纯幻想或明确角色扮演中可能带来张力。', '观察关系不安是否仅作为可控叙事元素具有吸引力。', '例如现实中不接受隐瞒，但在双方知道是虚构、结束后会重新确认关系时，相关情节可能有戏剧性。'],
        ['即使我喜欢多人或开放主题的幻想，也可能希望现实关系保持排他。', '检查答题者是否能区分幻想内容与关系协议。', '例如独自想象时会被多人情节吸引，但现实中仍只愿与一位伴侣建立排他关系，并认为两者并不矛盾。']
      ]
    },
    {
      id: 'care', title: '照顾与服务', shortTitle: '照顾', group: 'connection',
      description: '观察照料、服务、被需要、被安抚、过程确认和事后恢复在互动中的吸引力。',
      interpretation: '这一维度较高表示照顾与服务可能既是安全条件，也是偏好本身；较低不等于缺乏关心，可能只是更喜欢独立恢复或把照顾放在情境之外。',
      reflection: '你更喜欢提供照顾、接受照顾、完成服务、得到感谢，还是共同恢复？',
      suggestions: ['事前询问每个人偏好的恢复方式，不假设拥抱或谈话适合所有人。', '照顾者同样可以需要休息、确认和情绪支持。'],
      questions: [
        ['在亲密互动中主动照顾对方的舒适和需要，会让我感到满足。', '观察照料行为本身是否具有吸引力。', '例如准备水、调整环境、记住对方不喜欢的刺激并主动询问状态，会让你觉得自己参与得更完整。'],
        ['被可信任的人细致照顾，会增强我的安全感和兴趣。', '观察接受照料是否支持投入。', '例如对方注意到你需要放慢、盖毯子、补水或暂时安静，会让你更愿意继续留在亲密状态。'],
        ['为对方完成约定的服务、任务或准备工作，可能是我喜欢的表达方式。', '观察服务行为是否承载亲密或角色意义。', '例如整理空间、准备物品或按清单完成一件事，会让你感到自己的投入被具体看见。'],
        ['对方具体感谢或肯定我的照顾，会明显增强这种体验的意义。', '观察照顾行为是否需要被回应和确认。', '例如听到对方说清哪一项帮助让其更安心，会比笼统说“很好”更让你感到满足。'],
        ['互动过程中定期询问“现在怎样、要不要调整”，会让我更安心而不是觉得扫兴。', '观察持续确认是否能增强而非破坏兴趣。', '例如用简短词语、数字或手势确认强度，不会打断你的投入，反而让你知道自己的感受被重视。'],
        ['结束后的安抚、补给、独处或次日联系，是我评估整个情境的重要部分。', '观察事后照顾和恢复是否决定整体体验。', '例如你可能需要拥抱聊天，也可能需要安静独处；只要这种需要被提前尊重，就会更愿意进入情境。']
      ]
    }
  ];

  const scoreOptions = [
    ['0', '0 - 完全不符合'],
    ['1', '1 - 经常不符合'],
    ['2', '2 - 基本不符合'],
    ['3', '3 - 有时符合'],
    ['4', '4 - 经常符合'],
    ['5', '5 - 完全符合']
  ];

  const pairInterpretations = {
    'intensityGiving|intensityReceiving': '你可能同时对施予和接收可控强度感兴趣，角色位置具有一定流动性。两项分别高不等于任何一次互动中都愿意交换角色，仍需逐次说明。',
    'following|leading': '你可能同时享受引领与跟随，偏好会随对象、信任、情境或当天状态变化。与其急于固定为某个标签，不如记录不同角色成立的具体条件。',
    'care|intimacy': '情感联结和照顾确认可能共同构成你的核心吸引力；互动是否温暖、可回应、能够妥善结束，可能比主题强度更重要。',
    'novelty|roleplay': '新鲜感与叙事代入可能彼此增强。你可能更喜欢通过新角色和新情节探索，而不一定追求更高身体强度。',
    'challenge|leading': '你可能享受“挑战—回应—重新建立节奏”的往返。需要特别把角色内挑战与现实停止信号分开。',
    'challenge|following': '你的跟随偏好可能保留明显的游戏性和能动性；自愿交付并不要求从头到尾表现安静或完全顺从。',
    'atmosphere|objects': '感官氛围和具体意象可能共同触发兴趣。与其只讨论活动名称，描述光线、材质、服装和空间往往更能帮助沟通。',
    'intimacy|multiPerson': '多人或关系主题与亲密联结可以同时重要。你可能关注的不只是人数，也包括每个人是否被看见、关系是否透明以及情感安全如何维持。',
    'leading|restraint': '限制与主导可能相互增强，但技术操作和权力引领是两种不同能力，需要分别协商与学习。',
    'following|restraint': '限制感可能帮助你进入跟随状态；是否能快速解除、如何确认身体状态以及谁负责观察，会直接影响安全感。',
    'roleplay|verbal': '角色语言和叙事反差可能是主要吸引来源。现实身份评价、禁词和去角色方式越清楚，越容易把戏剧张力留在情境内。',
    'multiPerson|visibility': '观看、展示与多人情境可能共同带来表演或被关注的吸引力。第三方同意、场所合法性和影像传播必须分别确认。'
  };

  const form = document.getElementById('sexualPreferenceQuiz');
  const questionsContainer = document.getElementById('questionsContainer');
  const result = document.getElementById('result');
  const storageKey = window.PRISM_SCALE_CONFIG.storageKey;
  const totalQuestions = dimensions.reduce((sum, dimension) => sum + dimension.questions.length, 0);

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function toChineseNumber(value) {
    return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五'][value - 1] || String(value);
  }

  function renderQuestions() {
    let number = 0;
    dimensions.forEach((dimension, dimensionIndex) => {
      const section = element('section', 'section');
      section.appendChild(element('h2', '', `第${toChineseNumber(dimensionIndex + 1)}部分：${dimension.title}（${number + 1}–${number + dimension.questions.length}题）`));
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
        questionTitle.append(element('span', 'q-number', `${number}.`), document.createTextNode(question[0]));

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
        focus.append(element('strong', '', '本题用意：'), document.createTextNode(`${question[1]} 这里评估的是主题本身的当前吸引力，不要求你产生性吸引、拥有相关经验或愿意现实实践。`));
        const example = element('p');
        example.append(element('strong', '', '具体案例：'), document.createTextNode(window.PrismScale.formatExampleSet(question[2], {
          variantSource: question[0],
          middleFallback: '这个主题偶尔会带来一点兴趣，但吸引力很看对象、状态和具体条件',
          lowFallback: '即使情境安全、自愿且边界清楚，这个主题通常也不会引起兴趣，或很难进入相关想象'
        })));
        explanation.append(focus, example);

        const toggle = () => {
          const expanded = explanation.classList.toggle('show');
          questionTitle.setAttribute('aria-expanded', String(expanded));
        };
        questionTitle.addEventListener('click', toggle);
        questionTitle.addEventListener('keydown', event => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          toggle();
        });
        wrapper.append(questionTitle, select, explanation);
        section.appendChild(wrapper);
      });
      questionsContainer.appendChild(section);
    });
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
      console.warn('无法保存性偏好量表进度。', error);
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
      console.warn('无法读取性偏好量表进度。', error);
    }
  }

  function scoreLevel(score) {
    if (score < 1.25) return { key: 'low', label: '当前兴趣较低', text: '这项主题目前较少带来幻想、审美或实践兴趣。低分是完整有效的偏好，也不表示你需要改变。' };
    if (score < 2.5) return { key: 'contextual', label: '情境性兴趣', text: '这项主题在少数幻想、对象、关系或安全条件下可能有一点吸引力，是否成立较依赖具体语境。' };
    if (score < 3.75) return { key: 'clear', label: '兴趣较明确', text: '这项主题在当前画像中具有较清楚的吸引力，适合继续区分幻想、讨论和现实意愿的边界。' };
    return { key: 'core', label: '当前核心偏好', text: '这项主题在当前自评中非常突出，可能反复出现在幻想或理想情境中；高分仍不等于对任何具体行为自动同意。' };
  }

  function calculateScores(answers) {
    const scores = {};
    let number = 0;
    dimensions.forEach(dimension => {
      let sum = 0;
      dimension.questions.forEach(() => {
        number += 1;
        sum += answers[`q${number}`];
      });
      scores[dimension.id] = sum / dimension.questions.length;
    });
    return scores;
  }

  function pairKey(firstId, secondId) {
    return [firstId, secondId].sort().join('|');
  }

  function getPairInterpretation(first, second) {
    const exact = pairInterpretations[pairKey(first.id, second.id)];
    if (exact) return exact;
    if (first.group === second.group) return `${first.title}与${second.title}属于相近的偏好区域，可能在同一想象或互动中彼此增强。建议分别记录两者的成立条件，避免因为分数接近就假设它们必须同时出现。`;
    return `${first.title}与${second.title}来自不同偏好区域，组合后可能形成较个人化的情境重点。可以用“什么主题 + 什么角色 + 什么安全条件”的方式描述，而不急于寻找一个固定标签。`;
  }

  function getProfilePattern(ranked) {
    const clear = ranked.filter(item => item.score >= 2.5);
    const core = ranked.filter(item => item.score >= 3.75);
    const overall = ranked.reduce((sum, item) => sum + item.score, 0) / ranked.length;
    const spread = ranked[0].score - ranked[ranked.length - 1].score;
    if (overall < 1.25) return { label: '整体兴趣较低画像', text: '十五个维度目前大多兴趣较低。这是一种完整有效的画像，可能与无性恋谱系体验、低兴趣阶段、较少幻想或本量表未覆盖你的兴趣有关；结果不表示功能问题。' };
    if (core.length >= 5 || clear.length >= 10) return { label: '多维开放画像', text: '多个维度都有较明确兴趣，说明你的偏好可能具有较高广度。广度不等于愿意实践更多项目，逐项边界仍比总体开放度重要。' };
    if (clear.length >= 4) return { label: '多维组合画像', text: '数个维度共同突出，偏好更适合用组合和条件描述，而不是只选一个角色或活动标签。' };
    if (clear.length >= 1 && spread >= 1.5) return { label: '重点清晰画像', text: '兴趣主要集中在少数方向，高低层次较清楚。相对低分维度不需要被补足，可以直接作为当前边界或非重点。' };
    return { label: '情境依赖画像', text: '多数分数位于低到中间范围，兴趣可能更依赖对象、信任、审美、关系阶段或只在少数幻想中出现。' };
  }

  function getSummaryTitle(ranked) {
    const pattern = getProfilePattern(ranked);
    if (ranked[0].score < 1.25) return pattern.label;
    const topGap = ranked[0].score - ranked[2].score;
    if (topGap <= .45) return `${ranked[0].shortTitle}、${ranked[1].shortTitle}与${ranked[2].shortTitle}并列突出的画像`;
    return `${ranked[0].shortTitle}与${ranked[1].shortTitle}较突出的画像`;
  }

  function calculateResult() {
    const answers = collectAnswers();
    if (Object.keys(answers).length !== totalQuestions) {
      const firstMissing = Array.from(form.querySelectorAll('select')).find(select => select.value === '');
      window.alert(`请完成全部 ${totalQuestions} 道题后再生成结果。`);
      firstMissing?.focus();
      return;
    }
    const scores = calculateScores(answers);
    const ranked = dimensions.map(dimension => ({ ...dimension, score: scores[dimension.id], level: scoreLevel(scores[dimension.id]) })).sort((a, b) => b.score - a.score);
    const first = ranked[0];
    const second = ranked[1];
    const lowest = ranked[ranked.length - 1];
    const average = ranked.reduce((sum, item) => sum + item.score, 0) / ranked.length;

    window.PrismScale.renderResultSummary({
      title: getSummaryTitle(ranked),
      metrics: [
        { label: '最高维度', value: `${first.shortTitle} ${first.score.toFixed(1)} / 5.0` },
        { label: '次高维度', value: `${second.shortTitle} ${second.score.toFixed(1)} / 5.0` },
        { label: '最低维度', value: `${lowest.shortTitle} ${lowest.score.toFixed(1)} / 5.0` },
        { label: '十五维均值', value: `${average.toFixed(1)} / 5.0` }
      ]
    });
    renderTypeJudgment(ranked);
    window.PrismScale.renderResultRadar({ labels: dimensions.map(item => item.shortTitle), values: dimensions.map(item => scores[item.id]), max: 5, datasetLabel: '当前兴趣' });
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
    if (ranked[0].score < 1.25) {
      target.innerHTML = '<p class="result-lead">你目前没有明显突出的量表内偏好。多项低分可以自然对应无性恋谱系、低兴趣阶段、较少幻想，或单纯不喜欢本量表所列主题；它不构成缺失或异常。</p>';
      return;
    }
    target.innerHTML = `<p class="result-lead">当前相对突出的方向是<strong>${ranked[0].title}</strong>与<strong>${ranked[1].title}</strong>。这里的“突出”只表示十五维内部的相对位置，不推断性取向、性经验、现实意愿或身份标签。</p>`;
  }

  function renderProfileOverview(ranked) {
    const pattern = getProfilePattern(ranked);
    const focus = ranked.slice(0, 3);
    const low = ranked.slice(-3).reverse();
    document.getElementById('currentProfileAnalysis').innerHTML = `
      <section class="insight-card">
        <h3 class="result-section-heading">当前偏好画像</h3>
        <p><strong>${pattern.label}：</strong>${pattern.text}</p>
        <p><strong>相对突出：</strong>${focus.map(item => `${item.title}（${item.score.toFixed(1)}，${item.level.label}）`).join('、')}。</p>
        <p><strong>相对收敛：</strong>${low.map(item => `${item.title}（${item.score.toFixed(1)}，${item.level.label}）`).join('、')}。低分不代表排斥，也不要求补足；它可以直接成为“目前不感兴趣”的有效信息。</p>
      </section>`;
  }

  function renderMainInterpretation(ranked) {
    const [first, second, third] = ranked;
    document.getElementById('mainInterpretation').innerHTML = `
      <section class="insight-card">
        <h3 class="result-section-heading">核心偏好组合</h3>
        <h4>${first.title} × ${second.title}</h4>
        <p>${getPairInterpretation(first, second)}</p>
        ${first.score - third.score <= .5 ? `<p><strong>${third.title}</strong>与前两项也很接近，实际画像更可能由三个维度共同构成。</p>` : ''}
        <p>组合解读只是把结果改写成更便于沟通的线索。它不能替你决定是否实践，也不能被任何人当作同意证明。</p>
      </section>`;
  }

  function renderDimensionAnalysis(ranked) {
    document.getElementById('deepPersonalAnalysis').innerHTML = `<h3 class="result-section-heading">十五维偏好深度分析</h3>${ranked.map((item, index) => `
      <article class="insight-card dimension-detail">
        ${window.PrismScale.createResultDimensionHeader({ index: index + 1, title: item.title, score: item.score, max: 5, level: item.level.label })}
        <p>${item.description}</p>
        <div class="result-signal-grid">
          <section class="result-signal-card"><h4>当前倾向</h4><p>${item.level.text}</p></section>
          <section class="result-signal-card"><h4>维度解读</h4><p>${item.interpretation}</p></section>
          <section class="result-signal-card"><h4>继续观察</h4><p>${item.reflection}</p></section>
        </div>
        <p><strong>沟通提示：</strong>${item.suggestions.join(' ')}</p>
      </article>`).join('')}`;
  }

  function renderScoreTable(scores) {
    document.getElementById('sectionScores').innerHTML = `
      <h3 class="result-section-heading">分项得分一览</h3>
      <table class="preference-score-table"><thead><tr><th>维度</th><th>平均分</th><th>当前描述</th><th>观察范围</th></tr></thead>
      <tbody>${dimensions.map(item => `<tr><td data-label="维度"><strong>${item.title}</strong></td><td data-label="平均分">${scores[item.id].toFixed(1)} / 5</td><td data-label="当前描述">${scoreLevel(scores[item.id]).label}</td><td data-label="观察范围">${item.description}</td></tr>`).join('')}</tbody></table>`;
  }

  function buildReflectionActions(ranked) {
    const top = ranked[0];
    const second = ranked[1];
    const low = ranked[ranked.length - 1];
    return [
      {
        title: '区分兴趣的不同层次',
        text: `把<strong>${top.title}</strong>分别标成“只限幻想、愿意讨论、可能低强度尝试、已有经验且喜欢、目前不想实践”，不要让一个分数承担多种含义。`
      },
      {
        title: '描述核心偏好组合',
        text: `用“${top.title} + ${second.title} + 成立条件”的句式描述当前组合，再补充对象、信任、场所、强度、时长、停止方式和事后需要。`
      },
      {
        title: '尊重相对较低的维度',
        text: `<strong>${low.title}</strong>目前相对较低，可以直接保留为非重点或边界；低分不是需要通过挑战、说服或训练来提高的目标。`
      },
      {
        title: '分开记录不同体验',
        text: '无论是否处于无性恋谱系，都可以分别记录性吸引、身体唤起、幻想兴趣、亲密需求与现实意愿；它们不必同步，也不要求形成固定标签。'
      },
      {
        title: '保留分享与同意边界',
        text: '只分享你愿意分享的部分。量表分数不是邀请、承诺或同意；本报告也不测量性取向、性欲水平、身体反应、性功能、风险承受能力或实践技能。'
      }
    ];
  }

  function renderSuggestions(ranked) {
    window.PrismScale.renderReflectionActions('personalizedSuggestions', buildReflectionActions(ranked));
  }

  function buildTextResult() {
    const answers = collectAnswers();
    if (Object.keys(answers).length !== totalQuestions) return '';
    const scores = calculateScores(answers);
    const ranked = dimensions.map(item => ({ ...item, score: scores[item.id], level: scoreLevel(scores[item.id]) })).sort((a, b) => b.score - a.score);
    const pattern = getProfilePattern(ranked);
    const lines = [
      '亲密互动与性偏好自评报告',
      `生成日期：${new Date().toLocaleDateString('zh-CN')}`,
      '',
      `【${getSummaryTitle(ranked)}】`,
      `${pattern.label}：${pattern.text}`,
      '',
      `【核心组合】${ranked[0].title} × ${ranked[1].title}`,
      getPairInterpretation(ranked[0], ranked[1]),
      '',
      '【十五维结果】'
    ];
    ranked.forEach((item, index) => lines.push('', `${index + 1}. ${item.title}：${item.score.toFixed(1)} / 5（${item.level.label}）`, item.interpretation, `继续观察：${item.reflection}`, `沟通提示：${item.suggestions.join(' ')}`));
    lines.push('', '【深度反思与行动建议】');
    buildReflectionActions(ranked).forEach((action, index) => lines.push(`${index + 1}. ${action.title}`, action.text.replace(/<\/?strong>/g, '')));
    lines.push('', '本结果不是性取向、身份、诊断、风险或同意证明；多项低分是完整有效的画像。');
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
    if (!text) return window.alert('请先完成量表并计算结果。');
    downloadBlob(new Blob([text], { type: 'text/plain;charset=utf-8' }), '亲密互动与性偏好自评报告.txt');
  }

  async function saveResultImage() {
    if (result.style.display === 'none' || !result.style.display) return window.alert('请先完成量表并计算结果。');
    if (typeof window.html2canvas !== 'function') return window.alert('图片导出组件尚未加载，请稍后重试。');
    const button = document.getElementById('saveImageButton');
    const previousText = button.textContent;
    button.disabled = true;
    button.textContent = '正在生成图片…';
    try {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      const canvas = await window.html2canvas(result, { scale: 2, useCORS: true, backgroundColor: dark ? '#18212d' : '#f7f8fa' });
      canvas.toBlob(blob => { if (blob) downloadBlob(blob, '亲密互动与性偏好自评报告.png'); }, 'image/png');
    } catch (error) {
      console.error('导出性偏好结果图片失败。', error);
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
