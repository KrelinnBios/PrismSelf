const categoryNames = {
  method: "方法与问题",
  being: "存在与世界",
  knowledge: "知识与理性",
  mind: "心灵与自我",
  ethics: "伦理与价值",
  politics: "政治与社会",
  language: "语言与逻辑",
  traditions: "美学与传统"
};

const terms = [
  { zh: "哲学", en: "Philosophy", cat: "method", aliases: "爱智慧", desc: "对存在、知识、价值、语言、心灵和社会等根本问题进行概念分析与论证反思的活动。它不只提出答案，也考察问题如何形成、理由是否充分以及不同立场的代价。", note: "哲学不只是观点集合，更是一套追问理由、澄清概念和检验前提的方法；不同传统可能采用论证、对话、现象描述或历史批判等不同路径。" },
  { zh: "概念", en: "Concept", cat: "method", desc: "帮助我们分类、理解和谈论事物的思维单位，例如“自由”“知识”“自我”。概念既能压缩经验，也会决定哪些差异被看见、哪些对象被归到一起。", note: "哲学常做的事之一，就是检查一个概念的边界、适用范围和隐含假设；概念分析不等于只查字典或寻找唯一永恒定义。" },
  { zh: "论证", en: "Argument", cat: "method", aliases: "哲学论证", desc: "由若干理由支持一个结论的推理结构。论证关心的不只是立场，还关心从理由到结论是否站得住、前提是否可接受，以及是否遗漏了反例。", note: "日常争吵不一定是论证；有清楚前提和结论，才方便评估强弱。一个论证可以形式有效但前提为假，也可以前提真实却没有充分支持结论。" },
  { zh: "前提", en: "Premise", cat: "method", desc: "论证中用来支持结论的陈述或假定。前提可以明说，也可能隐藏在表达背后，并可能来自经验、定义、价值承诺或其他理论。", note: "找出未说出口的前提，常常比直接反驳结论更有效；识别前提后，还要分别检查它是否真实、是否相关以及是否足以支持结论。" },
  { zh: "结论", en: "Conclusion", cat: "method", desc: "一个论证试图证明或支持的主张。结论是否可接受，取决于前提和推理方式的表现，也取决于它声称的范围是否超过了理由能够支持的范围。", note: "同一个结论可能由不同论证支持；反驳一个论证不必然推翻所有可能论证，也不应把“尚未证明”为假当成已经证明为真。" },
  { zh: "有效性", en: "Validity", cat: "method", aliases: "形式有效", desc: "在逻辑中，指如果前提都为真，结论就不可能为假的推理关系；它描述的是前提与结论之间的结构保障，而不是结论在现实中已经为真。", note: "有效性只看结构，不保证前提实际为真；“有效且前提为真”才足以推出可靠的真结论，这和“说法有用”不是同一回事。" },
  { zh: "反例", en: "Counterexample", cat: "method", desc: "用一个符合对方条件、却得出相反结果或异常结果的例子，来挑战定义、规则或一般性主张。它尤其适合检验“所有”“必然”和“只有……才……”这类强断言。", note: "好反例不只是例外，而是能满足相关前提并暴露概念漏洞或推理跳步；举出反例通常削弱一般命题，但还需说明它确实属于该命题的适用范围。" },
  { zh: "思想实验", en: "Thought Experiment", cat: "method", desc: "通过假想情境测试直觉、概念和原则的工具，例如电车难题、缸中之脑、中文房间。它把现实中难以隔离的条件暂时固定下来，以观察判断会在哪里改变。", note: "思想实验不等于现实案例，也不能单凭直觉解决经验问题；它的价值在于揭示一个理论依赖哪些前提，并为进一步论证提供压力测试。" },

  { zh: "形而上学", en: "Metaphysics", cat: "being", desc: "研究存在、实体、因果、时间、可能性等最一般结构的哲学领域。", note: "它不是玄学营销语，而是关于“世界究竟由什么构成”的理论探问。" },
  { zh: "本体论", en: "Ontology", cat: "being", aliases: "存在论", desc: "形而上学中的一个核心分支，追问什么东西存在，以及不同存在者如何分类。", note: "问“数字存在吗”“社会结构存在吗”就是本体论式问题。" },
  { zh: "实体", en: "Substance", cat: "being", desc: "被认为能独立存在、承载属性或变化的东西。不同传统对实体是否存在、如何存在有很大争议。", note: "它不是日常“物质”的简单同义词，常用于讨论事物的基础存在方式。" },
  { zh: "属性", en: "Property", cat: "being", aliases: "性质", desc: "事物所具有的特征或性质，例如红色、重量、脆弱、正义。", note: "哲学会追问属性是独立存在、依附于事物，还是只是语言分类。" },
  { zh: "因果性", en: "Causation", cat: "being", aliases: "因果关系", desc: "关于一个事件、状态或行动如何导致另一个事件、状态或行动的关系；它还涉及因果方向、机制和在什么条件下这种关系成立。", note: "相关或恒常相继可以提示因果关系，却不自动证明因果性；休谟式怀疑提醒我们，看到恒常相继不等于已经看见了必然连接。" },
  { zh: "必然性", en: "Necessity", cat: "being", desc: "表示某事不可能不是这样，或在所有相关可能情境中都成立的模态概念。", note: "逻辑必然、形而上学必然和自然规律意义上的必然通常需要区分；说一个结论必然成立，也要说明所使用的可能情境和背景规则。" },
  { zh: "自由意志", en: "Free Will", cat: "being", aliases: "意志自由", desc: "关于人是否能以某种有意义的方式自主选择、依据理由行动并承担责任的问题。", note: "争论不只在于是否存在完全不受原因影响的选择，也涉及行动控制、替代可能性、欲望是否由自己认可，以及决定论是否排除责任。" },
  { zh: "决定论", en: "Determinism", cat: "being", desc: "认为在给定完整先前条件和规律时，每个事件都被唯一决定的观点。", note: "决定论不必然等于宿命论：前者讨论事件是否由条件和规律决定，后者则暗示无论做什么结果都不会改变；兼容论也主张决定论与某种自由可以并存。" },

  { zh: "认识论", en: "Epistemology", cat: "knowledge", aliases: "知识论", desc: "研究知识、信念、真理、证成和怀疑的哲学领域。", note: "它关心“我们凭什么说自己知道”，而不只是收集知识内容。" },
  { zh: "知识", en: "Knowledge", cat: "knowledge", desc: "通常指一种不仅相信而且有理由、并且与真理相关的认知状态；它要求主体与事实之间存在不只是偶然的正确联系。", note: "“知识等于被证成的真信念”是经典起点，但盖梯尔问题显示它并不够；不同理论还会加入可靠性、无反事实运气或安全性等条件。" },
  { zh: "信念", en: "Belief", cat: "knowledge", aliases: "相信", desc: "主体把某个命题当作真的态度，通常会影响期待、判断和行动。信念可以为真，也可以为假，并不因主观确信就自动成为知识。", note: "相信某事和知道某事不同；知识通常要求更多条件，例如事实为真、理由充分，或信念由可靠过程形成。" },
  { zh: "真理", en: "Truth", cat: "knowledge", desc: "关于陈述、命题或判断以何种方式为真的概念。常见理论包括符合论、融贯论、实用主义真理论等，它们对“为真”的根据给出不同说明。", note: "问“什么是真的”和问“我们如何知道它是真的”是两个不同问题；一个命题可能为真，却仍缺乏足以让主体知道它的证成。" },
  { zh: "证成", en: "Justification", cat: "knowledge", aliases: "辩护、正当化", desc: "使一个信念有理由被接受的支持条件，例如证据、可靠过程、逻辑推导或实践效果。", note: "证成不是心理上的确信，而是能否给出可检验的理由。" },
  { zh: "怀疑主义", en: "Skepticism", cat: "knowledge", desc: "质疑我们是否拥有某类知识，或质疑知识主张是否达到足够根据的立场。", note: "哲学怀疑不等于什么都不信，它常用来测试知识标准是否过高或过低。" },
  { zh: "经验主义", en: "Empiricism", cat: "knowledge", desc: "强调经验、观察和感官材料在知识形成中的基础作用。", note: "它不必否认理性，而是反对把知识主要建立在脱离经验的先天观念上。" },
  { zh: "理性主义", en: "Rationalism", cat: "knowledge", desc: "强调理性、演绎、先天结构或清楚观念在知识中的基础地位。", note: "它常与经验主义形成对照，但具体思想家很少只落在一个纯粹阵营里。" },

  { zh: "心灵哲学", en: "Philosophy of Mind", cat: "mind", desc: "研究意识、心灵、身体、自我、感受和认知状态的哲学领域，也追问心理状态如何解释行动以及是否能被物理科学充分说明。", note: "它连接形而上学、认识论、语言哲学、认知科学和心理学；不同理论对第一人称经验与第三人称观察的关系有不同处理。" },
  { zh: "意识", en: "Consciousness", cat: "mind", desc: "主体拥有经验、觉察或感受的状态。它可以指清醒觉知，也可以指主观体验本身，包括视觉、疼痛、情绪和自我觉察等不同层面。", note: "“它是什么感觉”这一问题，是许多意识讨论的关键；清醒程度、注意、可报告性和主观体验彼此相关，却不必完全等同。" },
  { zh: "意向性", en: "Intentionality", cat: "mind", aliases: "指向性", desc: "心灵状态指向某个对象或内容的特征，例如相信某事、害怕某物、希望某结果。这里的“对象”可以真实存在，也可以是想象、记忆或错误表征的内容。", note: "这里的 intentionality 指心灵的“关于某物/指向某物”特征，不等于日常英语里的“故意”；“关于性”虽见于少量译述，但歧义较大。" },
  { zh: "心物二元论", en: "Mind–Body Dualism", cat: "mind", aliases: "二元论", desc: "认为心灵与物理世界在实体或至少在根本属性上不可相互还原的一组观点。", note: "笛卡尔主张实体二元论；属性二元论并不主张存在两种实体，二者应区分。" },
  { zh: "物理主义", en: "Physicalism", cat: "mind", aliases: "唯物主义（近义）", desc: "认为一切存在或事实都是物理的，或以某种根本方式由物理事实决定的一组形而上学观点。", note: "不同版本会用同一、实现、随附等关系说明心灵与物理世界；physicalism 与 materialism 常近义，但历史内涵不完全相同。" },
  { zh: "他心问题", en: "Problem of Other Minds", cat: "mind", desc: "我们如何知道他人也有心灵、意识或主观经验的问题。", note: "它提醒我们：外在行为和内在体验之间存在解释距离。" },
  { zh: "人格同一性", en: "Personal Identity", cat: "mind", aliases: "个人同一性", desc: "追问一个人在时间中为什么仍然是同一个人的问题。候选答案包括身体连续性、心理连续性和叙事连续性。", note: "失忆、复制、传送等思想实验常用来测试不同标准。" },
  { zh: "自我", en: "Self", cat: "mind", desc: "主体对自身持续性、行动归属和第一人称经验的理解。", note: "有些传统把自我视为实体，有些传统则强调它是过程、关系或构造。" },

  { zh: "伦理学", en: "Ethics", cat: "ethics", aliases: "道德哲学", desc: "研究善、义务、德性、价值、责任和应当如何生活的哲学领域，也分析道德判断的理由、适用范围以及制度如何影响行动者。", note: "伦理学不只给规则，也追问规则为什么有约束力；它既可以讨论抽象原则，也要面对具体处境中的冲突、脆弱性和责任分配。" },
  { zh: "义务论", en: "Deontology", cat: "ethics", desc: "强调行动是否符合义务、原则或权利，而不只看结果好坏的伦理理论。它通常认为某些行动有不可随意违反的限制，即使违反可能带来更好后果。", note: "康德伦理学是常见代表，但义务论并不只有一种版本；不同理论对义务冲突、例外和后果在判断中的作用有不同处理。" },
  { zh: "功利主义", en: "Utilitarianism", cat: "ethics", aliases: "效益主义", desc: "以总体幸福、效用或福利最大化来评价行动和制度的伦理理论，要求比较不同选择对所有相关者造成的利益与伤害。", note: "它的优势是重视后果和每个人的利益，难题是如何处理少数人的权利、分配不均以及不可完全比较的价值；功利主义内部也有行动与规则版本之分。" },
  { zh: "德性伦理", en: "Virtue Ethics", cat: "ethics", desc: "把注意力放在成为什么样的人、培养怎样的品格和实践智慧上，而不只问单个行动是否正确。它关注人在具体情境中如何形成稳定而恰当的行动倾向。", note: "亚里士多德传统是重要来源，也能与儒家修身思想形成对话；不同德性伦理理论对德性清单、情感和规则的关系并不一致。" },
  { zh: "元伦理学", en: "Metaethics", cat: "ethics", desc: "研究道德语言、道德事实和道德判断性质的领域。它问的是“道德话语本身意味着什么”。", note: "例如“善是否客观存在”就是元伦理学问题。" },
  { zh: "幸福", en: "Happiness / Eudaimonia", cat: "ethics", aliases: "福祉、欣荣、eudaimonia", desc: "关于主观愉悦、生活满意度或人生过得好的概念；古希腊伦理中的 eudaimonia 更接近依德性而活、实现人的能力与整体欣荣，不只是当下感受。", note: "happiness、well-being、flourishing 与 eudaimonia 并非处处可互换；具体译法取决于理论语境。" },
  { zh: "自主性", en: "Autonomy", cat: "ethics", aliases: "自主、自治", desc: "主体依照其能够认可的理由、价值或规范进行自我治理的能力或地位。", note: "康德语境的 autonomy 常译“自律”，政治与生命伦理语境常译“自主/自治”；这些译法重心不同。" },
  { zh: "道德相对主义", en: "Moral Relativism", cat: "ethics", desc: "认为道德判断的真值或正当性相对于某种文化、社会或规范框架而成立的观点。", note: "它不同于把道德真值仅系于个人态度的道德主观主义，也不等于“什么都可以”。" },

  { zh: "政治哲学", en: "Political Philosophy", cat: "politics", desc: "研究国家、权力、正义、自由、权利、平等和公共生活正当性的哲学领域，追问制度应当如何安排以及人们为何有理由接受共同规则。", note: "它不只是现实政治评论，也追问制度为什么应当被服从或改变；描述制度如何运行与论证制度是否正当，是相互关联但不同的工作。" },
  { zh: "正义", en: "Justice", cat: "politics", desc: "关于资源、权利、机会、责任和承认如何合理分配，以及人们应如何被对待的规范概念。它既涉及结果，也涉及规则、过程与对过去伤害的回应。", note: "分配正义、程序正义、矫正正义和承认正义各有不同问题焦点；对正义的分歧往往来自平等、需要、贡献和自由等标准之间的不同权衡。" },
  { zh: "自由", en: "Liberty / Freedom", cat: "politics", desc: "个体或群体不受不当限制、能够行动或实现自身目的的状态。讨论自由时需要说明谁的自由、免于什么限制，以及能做什么。", note: "消极自由强调免于干预，积极自由强调自我治理或掌握自身生活；资源、能力和社会条件如何影响自由，以及何种干预算不当，是持续存在的争论。" },
  { zh: "平等", en: "Equality", cat: "politics", desc: "关于人们应在何种意义上被同等看待、同等尊重或获得同等条件的原则。它不必要求所有人拥有完全相同的资源，而要说明哪些差异具有正当理由。", note: "形式平等、机会平等和实质平等可能指向不同政策判断；相同待遇在起点和需要不同时未必产生平等机会，因此要明确比较的维度。" },
  { zh: "权力", en: "Power", cat: "politics", desc: "影响他人行动、塑造规则、安排资源或定义意义的能力。", note: "权力不只存在于政府，也可能存在于知识、语言、制度和日常关系中。" },
  { zh: "社会契约", en: "Social Contract", cat: "politics", desc: "以实际同意、默示同意或假想协议来说明政治权威、法律义务或制度正当性的理论模型。", note: "近现代社会契约论通常不是关于某次可考证历史签约的事实叙述，而是正当化模型。" },
  { zh: "自由主义", en: "Liberalism", cat: "politics", desc: "重视个人权利、自由、法治和权力限制的政治哲学传统。", note: "自由主义内部差异很大，从古典自由主义到平等自由主义并不相同。" },
  { zh: "共同体主义", en: "Communitarianism", cat: "politics", desc: "强调个人总是嵌入共同体、传统和社会关系之中的政治哲学取向。", note: "它常批评把个体想象成完全抽离背景的选择者。" },

  { zh: "逻辑", en: "Logic", cat: "language", desc: "研究有效推理形式、命题关系和论证结构的领域，帮助我们明确前提、结论以及不同表达之间的推出关系。", note: "逻辑帮助我们检查“是否跟得上”，不直接替我们决定前提是否真实；不同逻辑系统对真值、否定和推理规则也可能有不同处理。" },
  { zh: "命题", en: "Proposition", cat: "language", desc: "可以为真或为假的内容，例如“雪是白的”。同一命题可以由不同语言、不同句式或不同说话者表达。", note: "命题不同于句子本身；句子是表达形式，命题是被表达的内容。疑问句、命令句等并非都直接表达可判真假的命题。" },
  { zh: "谓词", en: "Predicate", cat: "language", desc: "在逻辑和语言中用来描述对象具有某种性质或处于某种关系中的表达。它可以涉及一个对象，也可以涉及多个对象之间的关系。", note: "例如“是红的”“大于二”都可以被分析为谓词；谓词的适用范围和论元数量会影响句子的逻辑结构。" },
  { zh: "悖论", en: "Paradox", cat: "language", desc: "看似合理的前提和推理导向矛盾、荒谬或难以接受结论的情形。悖论可能暴露定义、推理规则、语言自指或常识判断之间的冲突。", note: "悖论的价值在于暴露我们概念系统中的紧张点；解决一个悖论可能需要放弃前提、限制适用范围或改用不同逻辑，而不是简单把结论称为荒谬。" },
  { zh: "意义", en: "Meaning", cat: "language", desc: "语言表达、符号或行动所承载的可理解内容。", note: "意义可以从指称、用法、意图、语境或解释传统等角度分析。" },
  { zh: "指称", en: "Reference", cat: "language", aliases: "所指", desc: "一个词语、名称或表达所指向的对象或范围。", note: "“意义”和“指称”不总相同，例如两个名称可能指同一对象却意义不同。" },
  { zh: "言语行为", en: "Speech Act", cat: "language", desc: "说话本身作为一种行动，例如承诺、命令、道歉、宣布和命名。", note: "它提醒我们语言不只是描述世界，也能在社会关系中做事。" },
  { zh: "解释学", en: "Hermeneutics", cat: "language", aliases: "诠释学", desc: "研究理解、解释和文本意义生成的哲学传统。", note: "它重视历史处境、前理解和解释循环，而不把理解看成机械读取。" },

  { zh: "美学", en: "Aesthetics", cat: "traditions", aliases: "艺术哲学", desc: "研究美、艺术、审美经验、趣味和感受判断的哲学领域，也讨论艺术是什么、作品如何产生意义以及审美价值与道德价值是否相关。", note: "美学不只是讨论什么好看，艺术哲学也不只研究美的作品；自然、日常经验和令人不适的艺术都可能成为讨论对象。" },
  { zh: "崇高", en: "Sublime", cat: "traditions", desc: "面对宏大、强大或难以把握之物时产生的震撼性审美经验，可能同时包含惊异、不安、距离感与敬畏，而不只是轻松愉悦。", note: "康德等人把崇高与普通的美区分开来，并讨论人的想象力与理性如何回应超出感性把握的对象；这不意味着真实危险或伤害本身具有审美正当性。" },
  { zh: "趣味判断", en: "Judgment of Taste", cat: "traditions", desc: "关于美或审美价值的判断。它带有主观感受，却又常期待他人同意，因此不同于仅仅报告个人偏好。", note: "在康德语境中，这种判断并不靠一个明确概念来证明，却提出某种普遍可交流的要求；其他美学传统对趣味、文化训练和社会差异有不同说明。" },
  { zh: "模仿", en: "Mimesis", cat: "traditions", aliases: "摹仿", desc: "艺术与现实之间的再现、表现或摹拟关系，不只指机械复制外观，也可以涉及行动、人物、情感及其可能形式。", note: "从柏拉图到亚里士多德，模仿一直是理解艺术功能的重要关键词；二者对模仿的认识价值和伦理作用评价不同，不能用“照抄现实”概括整个传统。" },
  { zh: "道", en: "Dao", cat: "traditions", desc: "中国哲学中关于道路、原则、生成秩序和实践方式的核心概念。", note: "“道”也见于儒家、墨家及其他先秦传统；在不同文本中可指道路、方法、规范秩序或万物生成之道，不宜默认等同于道家专用概念。" },
  { zh: "仁", en: "Ren", cat: "traditions", aliases: "仁爱", desc: "儒家伦理的核心德目，常围绕爱人、克己复礼、忠恕以及在人际关系中成就德行展开。", note: "不同时期儒者对仁的阐释不一；“成己成物”与《中庸》的诚论密切相关，不宜不加说明直接当作仁的通行定义。" },
  { zh: "缘起", en: "Dependent Origination", cat: "traditions", aliases: "pratītyasamutpāda", desc: "佛教哲学中说明诸法依条件而生、依条件而灭的核心思想。", note: "它常被用来反对孤立、固定、自足的实体观。" },
  { zh: "空", en: "Emptiness", cat: "traditions", aliases: "śūnyatā", desc: "佛教中观传统中的关键概念，指事物没有独立自存、不依条件的固定本质。", note: "空不等于什么都不存在，而是强调存在方式的依缘性和非自性。" },
  { zh: "问题意识", en: "Problem Awareness", cat: "method", desc: "进入讨论时对核心疑问、矛盾、研究对象和待解释现象的自觉把握。", note: "“问题意识”是中文学术语境的常用表达，英语没有唯一固定对应；problematic 与 problem consciousness 只在特定传统或语境中使用，不宜并列成通行译名。" },
  { zh: "概念分析", en: "Conceptual Analysis", cat: "method", desc: "通过澄清词义、条件、例外和用法来理解概念的哲学方法。", note: "它不只是查词典，而是检查概念在论证中如何工作。" },
  { zh: "辩证法", en: "Dialectic", cat: "method", aliases: "辩证思维", desc: "通过对立、张力、反驳或发展过程推进理解的方法或理论。", note: "苏格拉底、黑格尔和马克思传统中的辩证法含义并不相同。" },
  { zh: "现象学还原", en: "Phenomenological Reduction", cat: "method", desc: "改变自然态度下的考察方向，系统分析经验中主体性与对象显现之间关联的方法。", note: "悬置（epoché）通常被视为走向还原的第一步，而不是还原本身的同义词；胡塞尔还区分不同层次的还原。" },
  { zh: "谱系学", en: "Genealogy", cat: "method", desc: "追踪概念、制度或价值如何在历史权力关系中形成的批判方法。", note: "它常用于反对把现有秩序说成自然、永恒或中立。" },
  { zh: "批判", en: "Critique", cat: "method", desc: "考察某种观念、制度或认识能力的条件、边界和权力效果。", note: "哲学中的批判不等于单纯否定，而是追问其何以可能、何处失效。" },
  { zh: "演绎", en: "Deduction", cat: "method", aliases: "演绎推理", desc: "前提若为真就保证结论为真的推理；关键是必然保真关系，而不是一定从一般命题走向特殊命题。", note: "演绎可以包含一般到特殊、特殊到特殊等结构；是否有效取决于推理形式。" },
  { zh: "归纳", en: "Induction", cat: "method", aliases: "归纳推理", desc: "从若干观察或案例概括出一般规律或概率判断的推理方式。", note: "归纳能扩展知识，但它的可靠性本身需要辩护。" },
  { zh: "溯因", en: "Abduction", cat: "method", aliases: "最佳解释推理", desc: "从现象出发，选择最能解释它的假设作为暂时结论。", note: "侦探推理和科学假说常带有溯因结构。" },
  { zh: "奥卡姆剃刀", en: "Ockham’s Razor", cat: "method", aliases: "Occam’s Razor、简约原则", desc: "在解释力相当时，优先选择假设更少、结构更简洁的解释原则。", note: "简洁不是自动为真；它只是比较理论时的节制原则。" },
  { zh: "可证伪性", en: "Falsifiability", cat: "method", desc: "一个理论原则上能够被经验观察反驳的特征。", note: "波普尔把可证伪性提出为科学与非科学的划界标准，而不是确认理论为真的标准；这一划界方案本身也持续受到讨论。" },
  { zh: "第一原则", en: "First Principle", cat: "method", desc: "论证或体系中不再由更基础命题推出、而作为出发点的原则。", note: "第一原则是否可接受，常决定整个理论的方向。" },
  { zh: "反思平衡", en: "Reflective Equilibrium", cat: "method", desc: "在具体判断、一般原则和背景理论之间反复调整，以求整体协调的方法。", note: "罗尔斯伦理和政治哲学中常使用这一思路。" },
  { zh: "直觉", en: "Intuition", cat: "method", aliases: "哲学直觉", desc: "面对案例或概念时未经复杂推理而出现的判断倾向。", note: "直觉可作为线索，但也可能受文化、语言和偏见影响。" },
  { zh: "定义", en: "Definition", cat: "method", desc: "通过说明一个词或概念的含义、适用条件、边界与排除范围，帮助确定它在论证中如何使用的表达。", note: "哲学定义常要经受边界案例和反例的测试；定义一个词不等于已经证明了关于它的事实或价值判断。" },
  { zh: "区分", en: "Distinction", cat: "method", desc: "把容易混淆的概念、层次或问题拆开处理的分析动作。", note: "许多哲学争论不是答案不同，而是区分不够细。" },
  { zh: "方法论", en: "Methodology", cat: "method", desc: "关于研究应如何进行、什么算理由、怎样评估结论的反思。", note: "方法论决定了哪些证据被看见，哪些问题被排除。" },

  { zh: "存在", en: "Existence", cat: "being", desc: "关于某物是否以及以何种方式是现实的基本概念。讨论存在时，需要区分“有这样的对象”“能想到这样的对象”以及“在某种理论中承认这样的对象”。", note: "存在问题可以涉及物体、数字、制度、可能性等不同对象；不同本体论不一定用相同标准判断这些对象是否存在。" },
  { zh: "虚无", en: "Nothingness", cat: "being", desc: "与存在相对、常用于追问缺席、否定和存在基础的概念；它未必指一个可以像事物一样被指认的对象。", note: "存在主义或形而上学中的 nothingness 不等于普通空白，也不应未经说明与道家“无”直接互译；具体含义依赖所讨论的哲学传统。" },
  { zh: "本质", en: "Essence", cat: "being", desc: "被认为使某物成为其所是、并区别于其他事物的根本性质或结构；不同哲学传统对本质是否固定、可知和独立存在有不同回答。", note: "反本质主义会质疑身份、类别或制度是否真有跨历史、跨语境都不变的固定本质。" },
  { zh: "偶性", en: "Accident", cat: "being", aliases: "偶然属性", desc: "某物可以拥有也可以失去、但不改变其基本身份的属性。", note: "本质与偶性的区分来自古典形而上学。" },
  { zh: "共相", en: "Universal", cat: "being", aliases: "普遍者", desc: "可被多个个体共同具有的性质或形式，例如红、圆、正义。", note: "共相是否独立存在，是实在论与唯名论的重要争论。" },
  { zh: "个体", en: "Particular", cat: "being", aliases: "特殊者", desc: "作为单一实例而存在、与可被多个实例共同具有的共相相对的存在者。", note: "个体通常指具体对象，但关于抽象个体或殊相（trope）是否存在仍有争论；“不可替代”不是定义条件。" },
  { zh: "同一性", en: "Identity", cat: "being", desc: "某物在同一时刻或跨越时间仍为同一物的关系。", note: "同一性问题常涉及变化、复制、替换和连续性。" },
  { zh: "差异", en: "Difference", cat: "being", desc: "使事物彼此区分、不能被完全归并为同一的关系。", note: "差异在结构主义、后结构主义和存在论中都有重要位置。" },
  { zh: "时间", en: "Time", cat: "being", desc: "事件先后、持续、变化和记忆得以组织的维度。", note: "时间是客观结构、心理形式还是语言框架，长期存在争论。" },
  { zh: "空间", en: "Space", cat: "being", desc: "事物的位置、距离、延展和共在关系得以呈现的维度。", note: "康德把空间视为外感官的先天直观形式，而把时间视为内感官的先天直观形式；空间并非笼统的全部感性直观形式。" },
  { zh: "可能世界", en: "Possible World", cat: "being", desc: "用于分析可能性、必然性和反事实命题的理论工具。", note: "可能世界不一定指真实存在的另一个宇宙，也可作为语义模型。" },
  { zh: "模态", en: "Modality", cat: "being", desc: "关于可能、必然、不可能、偶然等存在方式的概念群。", note: "模态讨论帮助区分事实如此与不得不如此。" },
  { zh: "现实性", en: "Actuality", cat: "being", desc: "某事不仅可能，而是在当前世界中实际成立的状态。", note: "现实性常与可能性、潜能和反事实情境相对照。" },
  { zh: "潜能", en: "Potentiality", cat: "being", aliases: "潜在性", desc: "某物尚未实现但具备实现条件或趋向的状态。", note: "亚里士多德用潜能与实现解释变化和生成。" },
  { zh: "生成", en: "Becoming", cat: "being", desc: "强调存在者处于变化、形成和过程之中的概念。", note: "生成视角常挑战把存在理解为固定实体的倾向。" },
  { zh: "目的论", en: "Teleology", cat: "being", desc: "用目的、终点或功能解释事物结构和变化的理论方式。", note: "现代科学常警惕过度目的论，但伦理和生物功能讨论仍会涉及它。" },
  { zh: "机械论", en: "Mechanism", cat: "being", desc: "用部分、规则、因果链和可分解过程解释现象的观点。", note: "机械论有助于清晰建模，但可能忽略整体、意义和目的层面。" },

  { zh: "先天", en: "A Priori", cat: "knowledge", desc: "不依赖特定经验观察即可获得或辩护的知识或判断。", note: "先天不等于天生知道，也不表示形成概念时完全无需经验；它主要说明相关命题的证成不以特定经验观察为最终依据。" },
  { zh: "后天", en: "A Posteriori", cat: "knowledge", desc: "依赖经验、观察或实验才能获得或辩护的知识或判断，例如某地今天是否下雨、某种材料是否导电。这里区分的是认识的依据，而不是一个人何时学会某件事。", note: "经验科学知识通常是后天知识的典型；后天不等于不可靠，也不等于必然为偶然真理，证成方式与命题的模态地位应分别讨论。" },
  { zh: "分析判断", en: "Analytic Judgment", cat: "knowledge", desc: "其真值被认为主要由意义或概念关系决定、无需诉诸额外经验事实的判断。", note: "康德以谓词包含于主词概念来说明分析判断；后来的语言哲学有不同定义，奎因还质疑分析/综合区分的边界。" },
  { zh: "综合判断", en: "Synthetic Judgment", cat: "knowledge", desc: "其真值不能仅由意义或概念关系确定、需要增加关于世界或经验内容的判断。", note: "这是与分析判断相对的经典划分；康德尤其追问先天综合判断如何可能，后世也争论该区分能否清楚维持。" },
  { zh: "先验", en: "Transcendental", cat: "knowledge", desc: "考察经验或知识得以可能的条件的哲学层次，尤其在康德语境中追问主体的认识形式如何使对象经验成为可能。", note: "先验不同于超验，也不直接等于先天：先天主要区分证成是否依赖经验，先验则考察经验可能性的条件；它不是对超自然对象的泛称。" },
  { zh: "盖梯尔问题", en: "Gettier Problem", cat: "knowledge", desc: "说明“被证成的真信念”仍可能不是知识的一类反例：主体有看似充分的理由，结论也恰好为真，但正确性依赖了某种认识上的运气。", note: "例如根据一只停摆的钟判断时间，却偶然碰上它显示正确时刻；这类案例促使认识论寻找排除偶然正确、比经典三条件更精细的知识说明。" },
  { zh: "基础主义", en: "Foundationalism", cat: "knowledge", desc: "认为知识体系需要一些非推论性的基础信念作为支撑。", note: "难题在于这些基础信念如何既基础又不武断。" },
  { zh: "融贯论", en: "Coherentism", cat: "knowledge", desc: "认为信念的证成来自其与整体信念网络的相互支持和一致。", note: "融贯不保证与现实相符，因此常面对“封闭体系”批评。" },
  { zh: "可靠主义", en: "Reliabilism", cat: "knowledge", desc: "认为信念若由可靠产生真信念的过程形成，就具有认识论地位。", note: "它强调过程可靠性，而不要求主体能完全说明理由。" },
  { zh: "内在主义", en: "Internalism", cat: "knowledge", desc: "认为证成条件应在主体可反思、可接近的范围内。", note: "内在主义重视第一人称理由，但可能要求过高。" },
  { zh: "外在主义", en: "Externalism", cat: "knowledge", desc: "认为信念的证成、知识或心灵内容可以依赖主体未必能够反思或直接接近的外部条件，例如认知过程是否可靠、环境是否正常运作。", note: "可靠主义通常属于认识论外在主义家族；它与内在主义的分歧，不是简单的“相信外部世界存在”。" },
  { zh: "证据主义", en: "Evidentialism", cat: "knowledge", desc: "认为信念是否正当取决于主体所拥有证据的支持程度。", note: "它常用来讨论相信、怀疑和信念伦理。" },
  { zh: "德性认识论", en: "Virtue Epistemology", cat: "knowledge", desc: "把知识和理解同认知德性联系起来的认识论方向。", note: "它关注求真、谨慎、开放和智识责任等品质。" },
  { zh: "知识的闭合性", en: "Epistemic Closure", cat: "knowledge", aliases: "知识闭合原则", desc: "若主体知道 P，并通过其知道的蕴涵关系适当地推出 Q，知识是否也随之扩展到 Q 的原则。", note: "闭合原则通常还要求主体实际、胜任地完成推导并保有相关知识；仅仅知道 P 与 P 蕴涵 Q，不宜无条件断言其已知道 Q。" },
  { zh: "归纳问题", en: "Problem of Induction", cat: "knowledge", desc: "我们凭什么相信过去经验能支持未来或一般规律的问题。", note: "休谟指出归纳本身不能用归纳无循环地证明。" },
  { zh: "科学实在论", en: "Scientific Realism", cat: "knowledge", desc: "认为成熟科学理论大体描述了独立于我们心灵的真实结构。", note: "它常用科学成功来支持不可观察实体的真实性。" },
  { zh: "工具主义", en: "Instrumentalism", cat: "knowledge", desc: "把科学理论主要看作预测和组织经验的工具，而非真实图像。", note: "工具主义不必否认科学有效，只是降低其本体论承诺。" },

  { zh: "心身问题", en: "Mind-Body Problem", cat: "mind", desc: "心灵状态与身体或大脑状态如何相关、是否可还原，以及心理活动如何产生物理效果的问题。它既涉及存在方式，也涉及主观经验能否被第三人称解释充分把握。", note: "它是二元论、物理主义和功能主义争论的核心；发现某种脑活动与体验相关，并不单独解决二者究竟同一、实现还是因果关联的哲学问题。" },
  { zh: "感质", en: "Qualia", cat: "mind", desc: "主观经验的质感，例如疼痛的痛感、红色看起来的样子或咖啡入口的滋味，强调某种经验对经历者而言是什么感觉。", note: "感质常被用来挑战纯粹物理解释是否足够；不同理论对感质是否不可还原、是否可公开描述，甚至这一概念是否有用，都存在争论。" },
  { zh: "中文房间", en: "Chinese Room", cat: "mind", desc: "塞尔提出的思想实验：一个不懂中文的人依照规则操作中文符号，对外给出恰当回答，用来质疑符号操作是否足以构成理解。", note: "它主要针对强人工智能和计算主义心灵观；反对者会区分房间中的个体与整个系统，因此不能把它当作机器永远无法理解语言的已定结论。" },
  { zh: "图灵测试", en: "Turing Test", cat: "mind", desc: "以对话表现判断机器是否展现智能的测试设想：评判者通过交流尝试区分机器与人，而不直接检查机器内部机制。", note: "它把难以界定的“思考”转化为可比较的表现问题；通过测试不必然证明机器有意识或理解，未通过也不必然说明它没有任何智能能力。" },
  { zh: "功能主义", en: "Functionalism", cat: "mind", desc: "认为心灵状态由其输入、输出和与其他心理状态之间的功能角色定义，例如疼痛如何受到刺激、引发回避并影响其他状态。", note: "功能主义允许不同物理载体实现同一种心理功能；争论焦点之一是功能角色是否足以说明主观感质，它也不同于社会学中的功能主义。" },
  { zh: "行为主义", en: "Behaviorism", cat: "mind", desc: "在心灵哲学中，把心理状态分析为行为、行为倾向或相关处置的立场。", note: "哲学或逻辑行为主义不同于心理学中的方法论行为主义；后者主要限定科学心理学应研究可观察行为。" },
  { zh: "身份理论", en: "Identity Theory", cat: "mind", desc: "主张心理状态与物理—脑状态同一的一组理论。", note: "类型同一论主张心理类型与脑状态类型同一；个例同一论只要求每个具体心理事件与某个具体物理事件同一。" },
  { zh: "消除唯物主义", en: "Eliminative Materialism", cat: "mind", aliases: "取消唯物主义、消去唯物主义、消去唯物论", desc: "认为常识心理学中的某些概念将被成熟神经科学淘汰。", note: "它不是说没有大脑活动，而是说“信念”“欲望”等框架可能有误。" },
  { zh: "泛心论", en: "Panpsychism", cat: "mind", desc: "认为心灵性或经验性以某种基础形式广泛存在于自然之中。", note: "它试图解释意识如何从非意识物质中出现的困难。" },
  { zh: "表征", en: "Representation", cat: "mind", desc: "心灵或符号系统以某种方式指向、呈现或承载对象信息的关系。", note: "知觉、记忆和想象常被理解为表征活动。" },
  { zh: "知觉", en: "Perception", cat: "mind", desc: "主体通过感官与世界发生关系并形成经验内容的过程。", note: "知觉是直接接触世界，还是经由表征间接把握世界，是核心争论。" },
  { zh: "记忆", en: "Memory", cat: "mind", desc: "过去经验、信息或能力在当下被保存、唤起和使用的方式。", note: "记忆既是认识来源，也影响人格同一性和自我叙事。" },
  { zh: "情感", en: "Emotion", cat: "mind", desc: "包含感受、评价、身体反应和行动倾向的复杂心理状态。", note: "情感不只是非理性干扰，也可能携带价值判断。" },
  { zh: "行动", en: "Action", cat: "mind", desc: "由意图、理由或主体控制参与构成的行为。", note: "行动哲学会区分事情发生在我身上与我主动做了某事。" },
  { zh: "意图", en: "Intention", cat: "mind", desc: "主体面向某个目标并组织行动的心理状态。", note: "意图不同于愿望，它通常带有计划和执行承诺。" },
  { zh: "欲望", en: "Desire", cat: "mind", desc: "主体倾向于使某种状态实现的心理动力。", note: "行动解释常把欲望与信念共同视为理由结构。" },
  { zh: "具身认知", en: "Embodied Cognition", cat: "mind", desc: "强调认知依赖身体、环境和行动方式的理论方向。", note: "它反对把心灵仅看作头脑内部的信息处理。" },

  { zh: "规范伦理学", en: "Normative Ethics", cat: "ethics", desc: "研究行动、品格和制度应当如何评价的伦理学分支。", note: "义务论、功利主义和德性伦理都是规范伦理学理论。" },
  { zh: "应用伦理学", en: "Applied Ethics", cat: "ethics", desc: "把伦理理论用于医学、技术、环境、商业和公共政策等具体问题。", note: "应用伦理学需要在原则和情境细节之间来回调整。" },
  { zh: "善", en: "Good", cat: "ethics", desc: "表示值得追求、肯定或促进的价值概念。", note: "善可以指结果、品格、生活状态或制度目标。" },
  { zh: "价值", en: "Value", cat: "ethics", desc: "使某事物值得重视、选择、保护或追求的性质或地位。", note: "价值可以是工具性的，也可以被认为具有内在意义。" },
  { zh: "义务", en: "Duty", cat: "ethics", desc: "主体因原则、角色、承诺或关系而应当履行的要求。", note: "义务不一定来自外部命令，也可能来自理性或关系结构。" },
  { zh: "权利", en: "Right", cat: "ethics", desc: "个体或群体可正当地要求他人尊重、保障或不侵犯的规范地位。", note: "权利语言常与义务、尊严和制度保障相连。" },
  { zh: "责任", en: "Responsibility", cat: "ethics", desc: "主体因行动、角色或能力而可被要求解释、承担或回应的关系。", note: "责任可以是因果责任、道德责任、法律责任或照护责任。" },
  { zh: "道德运气", en: "Moral Luck", cat: "ethics", desc: "行动者的道德评价受到其无法控制因素影响的现象。", note: "它挑战了“只因可控之事受评判”的直觉。" },
  { zh: "双重效果原则", en: "Doctrine of Double Effect", cat: "ethics", desc: "用于评估某行动在追求善的结果时同时产生严重伤害性副作用是否可被允许的原则。", note: "传统表述不只区分“意图”与“预见”，还要求坏结果不是达成好结果的手段、行动本身可允许，并满足比例性与减少伤害等条件。" },
  { zh: "电车难题", en: "Trolley Problem", cat: "ethics", desc: "通过是否转轨、推人等情境测试后果、义务和责任直觉的思想实验。", note: "它不是现实政策模板，而是伦理原则的压力测试。" },
  { zh: "关怀伦理", en: "Ethics of Care", cat: "ethics", desc: "强调关系、依赖、照护和具体处境的伦理理论。", note: "它常批评抽象规则忽视脆弱性和关系责任。" },
  { zh: "斯坎伦式契约论", en: "Contractualism", cat: "ethics", aliases: "契约论（狭义）", desc: "以任何人都不能合理拒绝、可作为知情且非强迫的一般协议基础的原则来说明道德正当性的理论。", note: "它不同于以互利或自利协议为基础的契约主义（contractarianism），也不同于政治哲学中更广义的社会契约传统。" },
  { zh: "道德实在论", en: "Moral Realism", cat: "ethics", desc: "认为存在独立于个人态度的道德事实或道德真理。", note: "它需要解释道德事实如何存在、我们如何认识它。" },
  { zh: "道德反实在论", en: "Moral Anti-realism", cat: "ethics", desc: "否认存在客观、独立于相关态度的道德事实的一组立场。", note: "非认知主义、错误理论和非客观主义常归入此类；建构主义在实在论—反实在论图谱中的位置有争议，不宜无保留列作反实在论。" },
  { zh: "价值多元主义", en: "Value Pluralism", cat: "ethics", desc: "认为存在多种真实价值，且它们有时无法完全排序或化约。", note: "价值冲突不总能通过单一尺度彻底解决。" },
  { zh: "利他主义", en: "Altruism", cat: "ethics", desc: "把他人的利益、幸福或需要作为行动理由的取向。", note: "利他不一定要求完全牺牲自我，也不等于没有边界。" },
  { zh: "利己主义", en: "Egoism", cat: "ethics", desc: "把自身利益作为行动解释或规范基础的立场。", note: "心理利己主义和伦理利己主义是不同命题。" },

  { zh: "法治", en: "Rule of Law", cat: "politics", desc: "要求公共权力受公开、稳定、普遍适用的法律约束的原则。", note: "法治不只是有法律，还要求法律能限制任意权力。" },
  { zh: "合法律性", en: "Legality", cat: "politics", aliases: "合法性（狭义）", desc: "行为、决定或制度符合现行法律规则的状态。", note: "合法律性不同于正当性（legitimacy）：前者问是否合乎法律，后者问权力或制度是否有资格获得服从与承认。" },
  { zh: "正当性", en: "Legitimacy", cat: "politics", desc: "权力、制度或规则为何有资格被服从或承认的问题。", note: "正当性比合法性更深，涉及理由、同意和公共辩护。" },
  { zh: "主权", en: "Sovereignty", cat: "politics", desc: "一个政治共同体或国家对内最高、对外独立的权威主张。", note: "全球化、人权和超国家治理会挑战传统主权理解。" },
  { zh: "国家", en: "State", cat: "politics", desc: "拥有制度化权力、法律秩序和领土治理能力的政治组织。", note: "国家不同于政府；政府可更替，国家结构更持久。" },
  { zh: "民主", en: "Democracy", cat: "politics", desc: "人民以直接或代表方式参与公共决策和权力授权的制度理念。", note: "民主不仅是投票，也涉及自由、平等、讨论和问责。" },
  { zh: "公民身份", en: "Citizenship", cat: "politics", desc: "个人作为政治共同体成员所拥有的权利、义务和参与资格。", note: "公民身份既赋予成员权利与参与资格，也划定成员边界，可能排除移民、难民或无国籍者。" },
  { zh: "公共理性", en: "Public Reason", cat: "politics", desc: "公民在基本公共问题上应使用他人也可能接受的理由进行辩护的理念。", note: "它试图处理多元社会中政治正当性的语言。" },
  { zh: "共和主义", en: "Republicanism", cat: "politics", desc: "强调公共自由、公民德性和免于支配的政治传统。", note: "共和主义的自由不只是不受干预，还包括不处于任意支配之下。" },
  { zh: "保守主义", en: "Conservatism", cat: "politics", desc: "重视传统、连续性、社会秩序和渐进变革的政治思想。", note: "保守主义内部差异很大，不等于简单反对一切改变。" },
  { zh: "社会主义", en: "Socialism", cat: "politics", desc: "强调平等、共同控制生产资源和反对资本支配的政治传统。", note: "社会主义包含民主社会主义、马克思主义等多种路线。" },
  { zh: "无政府主义", en: "Anarchism", cat: "politics", desc: "反对强制性等级权威，主张自愿合作、自治和互助的思想传统。", note: "无政府主义不等于混乱，而是质疑国家和支配关系的正当性。" },
  { zh: "承认", en: "Recognition", cat: "politics", desc: "个体或群体身份、尊严和价值被社会制度与他人肯定的关系。", note: "承认政治关注被误认、贬低或隐形化带来的伤害。" },
  { zh: "分配", en: "Distribution", cat: "politics", desc: "资源、机会、负担和权利在社会成员之间如何安排的问题。", note: "分配问题常与正义、平等和福利制度相连。" },
  { zh: "压迫", en: "Oppression", cat: "politics", desc: "制度、文化和日常实践持续限制某些群体自由与能力的结构。", note: "压迫不一定依赖个人恶意，也可以通过规则和常识运行。" },
  { zh: "意识形态", en: "Ideology", cat: "politics", desc: "组织社会理解、价值和权力正当化的一套观念结构。", note: "批判理论常关注意识形态如何把历史结果伪装成自然事实。" },
  { zh: "公民不服从", en: "Civil Disobedience", cat: "politics", desc: "为推动法律或政策改变而有意识地违法，并向公众提出政治或道德理由的抗议行动。", note: "罗尔斯式经典界定强调公开、非暴力、出于良知并愿承担法律后果；较宽理论会争论公开性、非暴力及接受惩罚是否都是必要条件。" },

  { zh: "语义学", en: "Semantics", cat: "language", desc: "研究语言表达意义、真值条件和指称关系的领域。", note: "语义学关注说了什么，语用学关注在情境中做了什么。" },
  { zh: "语用学", en: "Pragmatics", cat: "language", desc: "研究语境、说话者意图和交际效果如何影响意义的领域。", note: "讽刺、暗示和礼貌常不能只靠字面语义解释。" },
  { zh: "句法", en: "Syntax", cat: "language", desc: "语言符号如何组合成合法表达的结构规则。", note: "同一句法结构可能承载不同意义，同一意义也可用不同句法表达。" },
  { zh: "真值", en: "Truth Value", cat: "language", desc: "一个命题在特定语义和逻辑系统中所具有的真或假状态，例如“雪是白的”在相关事实成立时取真值。", note: "真值是命题的逻辑状态，不等于真理这一哲学概念，也不等于说明命题为何为真的真值条件；多值逻辑可能允许真、假之外的取值。" },
  { zh: "真值条件", en: "Truth Condition", cat: "language", desc: "一个句子或命题在什么世界状态、事实条件或解释条件下为真的说明。", note: "真值条件语义学用它解释表达式意义；知道一个命题的真值，不等于已经说明它在所有情境中的真值条件。" },
  { zh: "量词", en: "Quantifier", cat: "language", desc: "表达一个性质或关系适用于多少对象的逻辑符号或词语，经典逻辑中常见全称量词和存在量词。", note: "量词的范围与先后顺序会显著改变命题含义，例如“每个人爱某人”和“有一个人爱每个人”并不等价。" },
  { zh: "逻辑后承", en: "Logical Consequence / Entailment", cat: "language", aliases: "逻辑蕴涵", desc: "当前提为真时结论不可能为假的推出关系。", note: "逻辑后承是前提与结论之间的关系；英语 implication 还可指条件联结词或较宽泛的“意味”，不应不加区分地等同。" },
  { zh: "矛盾律", en: "Law of Non-contradiction", cat: "language", desc: "同一命题在同一时间、同一意义和同一方面，不能同时为真又为假的经典逻辑原则，通常写作不能同时成立 P 与非 P。", note: "它是经典逻辑的核心原则之一；讨论悖论、模糊性或非经典逻辑时，需要说明是否采用相同的逻辑前提。" },
  { zh: "排中律", en: "Law of Excluded Middle", cat: "language", desc: "对任一命题 P，P 与非 P 的析取式 P ∨ ¬P 成立的原则。", note: "排中律不同于“每个命题恰有真、假之一”的二值原则；经典逻辑接受两者，直觉主义逻辑不普遍接受排中律。" },
  { zh: "同一律", en: "Law of Identity", cat: "language", desc: "任何事物在同一意义下等同于自身的原则。", note: "它看似平凡，却是形式推理的基础之一。" },
  { zh: "范畴错误", en: "Category Mistake", cat: "language", desc: "把某个概念应用到不适合其逻辑类型的对象上。", note: "赖尔用范畴错误批评把心灵当作身体之外的特殊物。" },
  { zh: "家族相似", en: "Family Resemblance", cat: "language", desc: "维特根斯坦提出的概念模型，指成员之间有交叠相似而无共同本质。", note: "游戏、艺术等概念常被用来说明家族相似。" },
  { zh: "私人语言", en: "Private Language", cat: "language", desc: "只有单个主体能理解、原则上无法公共检验的语言设想。", note: "维特根斯坦用私人语言论证讨论意义与规则的公共性。" },
  { zh: "专名描述论", en: "Descriptivist Theory of Names", cat: "language", aliases: "Description Theory、描述理论", desc: "认为专名的指称或语义值由说话者与该名称关联的某个描述或一组描述来确定的理论。", note: "这不同于罗素关于限定描述语句逻辑形式的“摹状词理论/描述理论”；克里普克等人以刚性指示与因果—历史链挑战专名描述论。" },
  { zh: "指示语", en: "Indexical Expression", cat: "language", aliases: "索引词、指示词", desc: "其指称或真值贡献依赖说话情境的表达，如“我”“这里”“现在”。", note: "有些文献会区分 indexical 与 demonstrative，中文译名也有“索引词/指示语”等传统。" },
  { zh: "语境", en: "Context", cat: "language", desc: "影响表达意义和行动效果的说话环境、关系和背景信息。", note: "脱离语境的引用常会改变一个说法的实际含义。" },
  { zh: "隐喻", en: "Metaphor", cat: "language", desc: "用一个领域的表达理解另一个领域的意义生成方式。", note: "隐喻不只是修辞装饰，也能塑造思考框架。" },

  { zh: "存在主义", en: "Existentialism", cat: "traditions", desc: "强调个体存在、选择、自由、焦虑和责任的哲学传统。", note: "存在主义不等于悲观主义，它更关注人在无预设答案中如何承担生活。" },
  { zh: "现象学", en: "Phenomenology", cat: "traditions", desc: "研究经验如何向意识显现的哲学传统。", note: "它常从第一人称经验出发，而不是先假定外部解释模型。" },
  { zh: "分析哲学", en: "Analytic Philosophy", cat: "traditions", desc: "重视语言清晰、逻辑分析和论证精确性的哲学传统。", note: "分析哲学不是只研究语言，也包括心灵、伦理、政治和科学哲学。" },
  { zh: "实用主义", en: "Pragmatism", cat: "traditions", desc: "从实践后果、探究活动与问题解决来理解观念意义、知识和真理的一组哲学传统。", note: "皮尔士、詹姆士与杜威对意义、真理和经验的说明并不相同，不能把单一“有用即真”公式归给整个传统。" },
  { zh: "结构主义", en: "Structuralism", cat: "traditions", desc: "把意义理解为由关系系统和差异结构生成的思想取向。", note: "结构主义影响语言学、人类学、文学理论和社会理论。" },
  { zh: "后结构主义", en: "Post-structuralism", cat: "traditions", desc: "质疑稳定结构、固定意义和主体中心性的理论方向。", note: "它常关注差异、权力、文本和意义滑动。" },
  { zh: "批判理论", en: "Critical Theory", cat: "traditions", desc: "以揭示支配、意识形态和社会矛盾为目标的理论传统。", note: "法兰克福学派是其重要来源之一。" },
  { zh: "马克思主义", en: "Marxism", cat: "traditions", desc: "围绕资本、阶级、劳动、历史和解放展开的哲学与社会理论传统。", note: "马克思主义既是经济批判，也是历史、政治和意识形态批判。" },
  { zh: "女性主义哲学", en: "Feminist Philosophy", cat: "traditions", desc: "从性别、权力和经验差异出发重审知识、伦理、政治和身体的哲学方向。", note: "它不是单一学派，而是一组互有分歧的批判传统。" },
  { zh: "儒家", en: "Confucianism", cat: "traditions", desc: "重视仁、礼、义、修身和社会关系秩序的中国思想传统。", note: "儒家内部从先秦到宋明理学、现代新儒家都有显著变化。" },
  { zh: "道家", en: "Daoism", cat: "traditions", desc: "以道、自然、无为、齐物等概念反思秩序、欲望和人为规范的传统。", note: "“哲学道家/宗教道教”的二分是现代研究分类，历史上的道家（daojia）与道教（daojiao）关系复杂，既不能简单等同，也不宜设成截然两套传统。" },
  { zh: "佛教哲学", en: "Buddhist Philosophy", cat: "traditions", desc: "围绕苦、无常、无我、缘起和解脱等问题展开的思想传统。", note: "不同部派、唯识、中观和禅宗的理论重点各不相同。" },
  { zh: "禅宗", en: "Chan Buddhism", cat: "traditions", aliases: "Chan、Zen（日本禅）", desc: "在中国形成、强调具身修行、直接体证并发展出独特语言与叙事形式的佛教传统。", note: "禅（chán）源自梵语 dhyāna（禅定）的音译；日本 Zen 源自中国禅宗，但 Chan 与 Zen 是相关历史传统，不能在所有语境中当作完全同义。" },
  { zh: "礼", en: "Li / Ritual Propriety", cat: "traditions", desc: "儒家中调节行为、情感和社会关系的规范与实践形式。", note: "礼不只是外在礼节，也涉及人成为社会性主体的训练。" },
  { zh: "义", en: "Yi / Righteousness", cat: "traditions", desc: "儒家中关于合宜、正当和不为私利所移的德目。", note: "义常与利形成张力，也与具体情境中的判断能力相关。" },
  { zh: "无为", en: "Wuwei", cat: "traditions", desc: "道家中不以强制、过度干预或执意造作为行动方式的理念。", note: "无为不是完全不做，而是不违逆事物自身势能。" },
  { zh: "阴阳", en: "Yin-Yang", cat: "traditions", desc: "中国思想中描述事物通过相互依存、对待、消长与转化而形成秩序的关联性概念。", note: "阴阳不是彼此隔绝的实体或固定性别二元，也不宜一概简化为静态的“平衡”。" }
];

const categoryIntros = {
  method: "这类词适合和具体论证一起看：它常用来限定问题、安排理由、检查概念边界，或显示一个结论为什么能从前提推出。",
  being: "这类词把注意力带向现实的基本结构，包括什么算作存在、事物如何持续、变化依赖什么，以及可能性和必然性如何区分。",
  knowledge: "这类词常用于区分相信、知道、证据、真理与理由之间的关系，重点不只是结论是否正确，也包括主体凭什么接受它。",
  mind: "这类词连接第一人称经验、身体机制、行动解释和自我理解，常用来处理主观感受与外部观察之间的距离。",
  ethics: "这类词服务于对行动、品格、责任和生活方式的规范判断，阅读时要看它强调后果、原则、关系还是德性。",
  politics: "这类词把个人处境放进制度、权力、权利和公共辩护的关系中考察，关注谁被承认、谁承担代价、谁能参与决定。",
  language: "这类词提醒我们注意表达形式、语境、逻辑结构和意义生成方式，因为许多哲学分歧并不只来自事实本身。",
  traditions: "这类词需要放回相应思想传统和历史语境中理解，避免只按现代日常词义套用，也避免把不同传统的近似译名直接等同。"
};

const searchInput = document.getElementById("searchInput");
const grid = document.getElementById("termGrid");
const categoryIntro = document.getElementById("categoryIntro");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const termCount = document.getElementById("termCount");
const filterButtons = Array.from(document.querySelectorAll(".filter"));
let currentFilter = "all";

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function splitAliases(value) {
  return String(value || "")
    .split(/[、，,;/]/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function matchesTerm(term, query) {
  if (!query) return true;
  const haystack = `${term.zh} ${term.en || ""} ${term.aliases || ""} ${term.desc} ${term.note}`.toLowerCase();
  return haystack.includes(query);
}

function prepareTerm(term) {
  const seen = new Set();
  const aliasesList = splitAliases(term.aliases).filter((item) => {
    const key = normalize(item);
    if (!key || key === normalize(term.zh) || key === normalize(term.en) || seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return {
    ...term,
    aliasesList
  };
}

function matchRank(term, query) {
  if (!query) return 999;
  const q = query;
  const prepared = prepareTerm(term);
  const zh = normalize(prepared.zh);
  const en = normalize(prepared.en);
  const aliases = prepared.aliasesList.map((item) => normalize(item));
  const desc = normalize(term.desc);
  const note = normalize(term.note);

  if (zh === q || en === q || aliases.includes(q)) return 0;
  if (zh.startsWith(q) || en.startsWith(q) || aliases.some((item) => item.startsWith(q))) return 1;
  if (zh.includes(q) || en.includes(q) || aliases.some((item) => item.includes(q))) return 2;
  if (`${desc} ${note}`.includes(q)) return 3;
  return 9;
}

function render() {
  const query = normalize(searchInput.value);
  const visible = terms
    .map((term, index) => ({ term, index }))
    .filter(({ term }) => {
      const inCategory = currentFilter === "all" || term.cat === currentFilter;
      return inCategory && matchesTerm(term, query);
    });

  if (query) {
    visible.sort((a, b) => {
      const rankDiff = matchRank(a.term, query) - matchRank(b.term, query);
      if (rankDiff) return rankDiff;
      return a.index - b.index;
    });
  }

  grid.innerHTML = visible.map(({ term }) => {
    const prepared = prepareTerm(term);
    const tagKey = prepared.cardTag || prepared.cat;
    const tagName = prepared.tag || categoryNames[tagKey] || categoryNames[prepared.cat] || "术语";
    return `
    <article class="term-card" data-category="${prepared.cat}">
      <div class="term-head">
        <h3 class="term-title">${prepared.zh}${prepared.en ? `<small>${prepared.en}</small>` : ""}</h3>
        <span class="tag ${tagKey}">${tagName}</span>
      </div>
      ${prepared.aliasesList.length ? `<div class="aliases">别名/又译/近译：${prepared.aliasesList.join("、")}</div>` : ""}
      <p class="term-body">${prepared.desc}</p>
      <div class="note">${prepared.note}</div>
    </article>
  `;
  }).join("");

  const intro = categoryIntros[currentFilter] || "";
  categoryIntro.hidden = !intro;
  if (intro) categoryIntro.innerHTML = `<b>${categoryNames[currentFilter]}</b>：${intro}`;

  resultCount.textContent = `${visible.length} 个结果`;
  emptyState.style.display = visible.length ? "none" : "block";
}

termCount.textContent = String(terms.length);
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    render();
  });
});
searchInput.addEventListener("input", render);
render();
