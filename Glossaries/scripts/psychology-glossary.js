const categoryNames = {
  foundations: "基础与方法",
  biological: "生物与神经",
  cognition: "认知与记忆",
  development: "发展与成长",
  personality: "人格与动机",
  social: "社会与群体",
  clinical: "临床与健康",
  schools: "流派与传统"
};

const terms = [
  { zh: "心理学", en: "Psychology", cat: "foundations", desc: "研究行为与心理过程的科学，涵盖感知、认知、情绪、发展、人格与社会互动。", note: "它既研究可观察行为，也研究内在心理过程，且强调用系统方法而非直觉下结论。" },
  { zh: "科学方法", en: "Scientific Method", cat: "foundations", desc: "通过提出问题、形成假设、系统观察和检验来获得可靠知识的程序。", note: "它的关键不是得出结论，而是让结论可被他人重复检验。" },
  { zh: "假设", en: "Hypothesis", cat: "foundations", aliases: "研究假设", desc: "对变量之间预期关系提出的、能够通过观察或实验检验的预测性命题。", note: "好假设既要能被证据支持，也要能在原则上被否证；它不是研究已经得到的结论。" },
  { zh: "理论", en: "Theory", cat: "foundations", desc: "用来解释和预测一类现象的系统化命题框架。", note: "在科学语境中，理论不是随口“猜测”，而是有证据支撑的解释体系。" },
  { zh: "变量", en: "Variable", cat: "foundations", desc: "在研究中可以在不同个体、时间或条件之间取不同数值或类别的特征，如年龄、焦虑水平、教育程度或实验条件。", note: "把抽象概念变成可测量变量，是研究设计的第一步；测量方式也会限定研究能回答什么问题。" },
  { zh: "自变量", en: "Independent Variable", cat: "foundations", desc: "在研究中用于解释或预测结果的变量；实验中通常由研究者操纵。", note: "只有随机分配并操纵处理、控制替代解释等条件满足时，实验才较能支持因果推断；观察研究中的“自变量”通常只是预测变量。" },
  { zh: "因变量", en: "Dependent Variable", cat: "foundations", desc: "被测量、用来观察是否随自变量变化的结果变量。", note: "因变量的测量方式会直接影响结论是否可信。" },
  { zh: "操作性定义", en: "Operational Definition", cat: "foundations", desc: "用具体可测量的程序来界定一个抽象概念。", note: "没有操作性定义，“幸福”“攻击”等词就难以被检验或比较。" },
  { zh: "实验法", en: "Experiment", cat: "foundations", desc: "通过操纵自变量并控制无关变量来检验因果关系的方法。", note: "实验是少数能支持因果结论的方法，但常以牺牲现实复杂性为代价。" },
  { zh: "对照组", en: "Control Group", cat: "foundations", desc: "未接受目标处理、接受安慰剂或其他比较处理，用作基准的参与者组。", note: "没有适当的比较基准，就很难判断变化是否真由目标处理引起。" },
  { zh: "随机分配", en: "Random Assignment", cat: "foundations", desc: "用随机方式把被试分到各组，以平衡潜在差异。", note: "它不同于随机抽样；前者关乎因果推断，后者关乎样本代表性。" },
  { zh: "相关", en: "Correlation", cat: "foundations", desc: "两个变量共同变化的统计关系，可正可负。", note: "相关不等于因果，可能存在反向因果或第三变量。" },
  { zh: "因果", en: "Causation", cat: "foundations", aliases: "因果关系", desc: "一个变量的变化实际引起另一个变量变化的关系。", note: "确立因果通常需要实验控制，而不仅是观察到关联。" },
  { zh: "信度", en: "Reliability", cat: "foundations", desc: "同一测量在相似条件下得到相对一致结果的程度，包括题目之间、不同时间或不同评分者之间的一致性。", note: "一个测验可以很稳定却测错东西；信度是效度的重要基础，但不保证效度。" },
  { zh: "效度", en: "Validity", cat: "foundations", desc: "测量结果和研究解释在多大程度上确实反映了它声称要测量的构念或关系。", note: "效度需要结合内容、结构、效标和使用情境持续积累证据，不能只凭一项相关就完全确立。" },
  { zh: "样本", en: "Sample", cat: "foundations", aliases: "被试样本", desc: "从总体中抽取、用于研究的一部分个体。", note: "样本是否有代表性，决定结论能推广到哪些人群。" },
  { zh: "概化", en: "Generalization", cat: "foundations", aliases: "外部效度、推广性", desc: "把研究结论推广到其他人群、情境或时间的程度。", note: "只用大学生样本或单一文化样本，会限制概化范围。" },
  { zh: "安慰剂效应", en: "Placebo Effect", cat: "foundations", desc: "由治疗情境、期待、学习和医患互动等非特异因素引起的体验或症状变化。", note: "它不只意味着“想象出改善”，也不代表所有变化都由单一预期机制产生。" },
  { zh: "双盲", en: "Double-Blind", cat: "foundations", aliases: "双盲设计", desc: "被试与实验者都不知道谁接受真实处理的设计。", note: "它用来减少期待和暗示对结果的污染。" },
  { zh: "统计显著性", en: "Statistical Significance", cat: "foundations", desc: "在统计模型及其假设成立时，观察结果与指定零假设不相容到预设阈值的判断。", note: "显著不等于重要，也不表示零假设为真的概率很低；小效应在大样本中也可能显著。" },
  { zh: "效应量", en: "Effect Size", cat: "foundations", desc: "衡量效应实际大小而非仅是否显著的指标。", note: "只报告显著性而忽略效应量，容易夸大发现的实际意义。" },
  { zh: "元分析", en: "Meta-analysis", cat: "foundations", desc: "系统整合多项研究结果以估计总体效应的方法。", note: "它的可靠性取决于纳入研究的质量与选择标准。" },
  { zh: "可重复性", en: "Replicability", cat: "foundations", aliases: "可复制性", desc: "不同研究以新数据回答同一科学问题时，能否得到在不确定性范围内相容的结果。", note: "这里不同于可复现性（Reproducibility：用相同数据、代码和分析步骤得到一致计算结果）；中文文献译法并不完全统一，阅读时应以操作定义为准。" },
  { zh: "出版偏倚", en: "Publication Bias", cat: "foundations", desc: "显著或新奇结果更易被发表而造成的系统性偏差。", note: "它会让已发表文献整体上高估真实效应。" },
  { zh: "研究知情同意", en: "Informed Consent", cat: "foundations", desc: "参与者在充分了解后自愿参与研究的伦理要求。", note: "它是研究伦理的基石，涉及自主、隐私与随时退出权。" },

  { zh: "神经元", en: "Neuron", cat: "biological", aliases: "神经细胞", desc: "神经系统中负责接收、传导和传递信号的基本细胞。", note: "它是心理活动的物理基础，但单个神经元并不“存储”某个想法。" },
  { zh: "突触", en: "Synapse", cat: "biological", desc: "神经元之间传递信号的连接间隙。", note: "学习与记忆常被理解为突触连接强度的改变。" },
  { zh: "神经递质", en: "Neurotransmitter", cat: "biological", desc: "在突触间传递信号的化学物质。", note: "它不是“情绪开关”，同一递质在不同回路的作用可能不同。" },
  { zh: "多巴胺", en: "Dopamine", cat: "biological", desc: "与奖赏预期、动机和运动控制相关的神经递质。", note: "把它简单叫作“快乐分子”是误解，它更关乎“想要”而非“喜欢”。" },
  { zh: "血清素", en: "Serotonin", cat: "biological", aliases: "5-羟色胺", desc: "与情绪、睡眠、食欲等调节相关的神经递质。", note: "“血清素低就导致抑郁”是被过度简化的流行说法。" },
  { zh: "动作电位", en: "Action Potential", cat: "biological", desc: "神经元被激活时沿轴突传导的电信号。", note: "它遵循“全或无”原则，强度不因刺激大小而分级。" },
  { zh: "中枢神经系统", en: "Central Nervous System", cat: "biological", aliases: "CNS", desc: "由脑和脊髓组成的信息处理中心。", note: "它与周围神经系统相对，二者共同协调身体与环境的互动。" },
  { zh: "自主神经系统", en: "Autonomic Nervous System", cat: "biological", aliases: "植物神经系统", desc: "调节心跳、呼吸、消化等非随意功能的神经系统。", note: "交感与副交感分支分别偏向动员和恢复。" },
  { zh: "大脑皮层", en: "Cerebral Cortex", cat: "biological", desc: "大脑表层参与高级认知功能的褶皱结构。", note: "“人只用了 10% 大脑”是没有依据的流行迷思。" },
  { zh: "额叶", en: "Frontal Lobe", cat: "biological", desc: "参与计划、决策、运动和自我控制的大脑区域。", note: "它的发育持续到成年早期，影响冲动控制。" },
  { zh: "杏仁核", en: "Amygdala", cat: "biological", desc: "参与情绪特别是恐惧加工的脑区。", note: "把它称作“恐惧中枢”过于简化，它也参与更广泛的显著性评估。" },
  { zh: "海马体", en: "Hippocampus", cat: "biological", desc: "对形成新的情景记忆与陈述性长时记忆至关重要的脑区。", note: "它受损会影响这些新记忆的形成，但程序性记忆等系统并不以相同方式依赖海马体。" },
  { zh: "前额叶皮层", en: "Prefrontal Cortex", cat: "biological", desc: "参与执行功能、决策和抑制控制的皮层区域。", note: "它常被视为“调控者”，而非情绪本身的产生地。" },
  { zh: "神经可塑性", en: "Neuroplasticity", cat: "biological", aliases: "大脑可塑性", desc: "大脑结构和连接随经验改变的能力。", note: "可塑性存在于一生，但并非“任何改变都可能、随时可逆”。" },
  { zh: "内分泌系统", en: "Endocrine System", cat: "biological", desc: "通过激素调节身体和行为的腺体系统。", note: "激素作用较慢但影响广泛，与神经系统协同塑造情绪。" },
  { zh: "皮质醇", en: "Cortisol", cat: "biological", aliases: "压力激素", desc: "由肾上腺分泌、参与能量调动、免疫调节和应激反应的激素，水平会随昼夜节律和情境变化。", note: "短期升高有适应意义；不能用一次检测或单一高低值解释一个人的压力、性格或心理健康。" },
  { zh: "遗传力", en: "Heritability", cat: "biological", desc: "群体中某性状的变异可归因于遗传差异的比例。", note: "它是群体统计量，不能说明某个个体的性状“有多少来自基因”。" },
  { zh: "表观遗传", en: "Epigenetics", cat: "biological", desc: "不改变 DNA 序列却影响基因表达的机制。", note: "它显示环境与基因并非对立，而是持续互动。" },
  { zh: "昼夜节律", en: "Circadian Rhythm", cat: "biological", aliases: "生物节律", desc: "约以 24 小时为周期的生理与行为波动。", note: "昼夜节律是生物节律的一类；打乱它会影响睡眠、情绪和认知表现。" },
  { zh: "睡眠周期", en: "Sleep Cycle", cat: "biological", desc: "睡眠中不同阶段循环交替的过程。", note: "深睡与快速眼动睡眠各有功能，都影响记忆巩固。" },
  { zh: "快速眼动睡眠", en: "REM Sleep", cat: "biological", aliases: "REM 睡眠", desc: "通常伴随快速眼动、肌张力显著降低和较活跃脑活动的睡眠阶段。", note: "生动梦境在 REM 期较常见，但也可发生于非 REM 睡眠；REM 与情绪调节和记忆加工相关。" },
  { zh: "应激", en: "Stress", cat: "biological", aliases: "压力", desc: "个体评估外界要求、威胁或变化超出自身可用资源时出现的身心反应与适应过程。", note: "短期应激在部分任务与阶段中可能帮助集中注意，但表现取决于强度、可控性、任务难度和个体差异；长期或难以恢复的应激更常与健康问题相连。" },
  { zh: "战或逃反应", en: "Fight-or-Flight", cat: "biological", desc: "面对威胁时身体动员应对的生理反应。", note: "现代慢性心理威胁也会触发它，却常无处可逃或可战。" },
  { zh: "奖赏系统", en: "Reward System", cat: "biological", desc: "与动机、愉悦和强化相关的脑回路。", note: "成瘾常被理解为奖赏与控制回路失衡，而非单纯意志薄弱。" },
  { zh: "镜像神经元", en: "Mirror Neurons", cat: "biological", desc: "在执行某动作以及观察相似动作时均可能响应的一类神经元，最初在非人灵长类动物研究中发现。", note: "人类镜像系统的测量多为间接证据；把它直接当作语言、模仿或共情的完整解释仍有争议。" },

  { zh: "认知", en: "Cognition", cat: "cognition", desc: "涉及知觉、注意、记忆、思维和语言的心理加工过程。", note: "认知心理学把心灵类比为信息加工系统，但这是模型而非等同。" },
  { zh: "感觉", en: "Sensation", cat: "cognition", desc: "感官接收物理刺激并转化为神经信号的过程。", note: "感觉是原始输入，知觉才是对它的组织与解释。" },
  { zh: "知觉", en: "Perception", cat: "cognition", desc: "大脑组织和解释感觉信息、形成经验的过程。", note: "知觉是主动建构，会受期待、语境和经验影响。" },
  { zh: "注意", en: "Attention", cat: "cognition", desc: "把有限的加工资源分配到特定信息上的过程。", note: "注意像聚光灯，同时也意味着大量信息被忽略。" },
  { zh: "选择性注意", en: "Selective Attention", cat: "cognition", desc: "把有限加工资源集中到部分信息、同时较少处理其他信息的能力。", note: "“看不见的大猩猩”主要展示不注意盲视：注意被任务占用时，显著但未被注意的刺激也可能没有进入意识。" },
  { zh: "感觉记忆", en: "Sensory Memory", cat: "cognition", desc: "极短暂保存原始感觉信息的记忆系统。", note: "它容量大但衰退极快，多数信息未进入进一步加工。" },
  { zh: "工作记忆", en: "Working Memory", cat: "cognition", desc: "在短时间内保持并主动操作当前信息的认知系统，例如心算时暂存数字、理解长句或按步骤完成任务。", note: "它容量和持续时间都有限；工作记忆与短时记忆有关但不完全等同，前者强调对信息进行加工，而不只是暂存。" },
  { zh: "长时记忆", en: "Long-term Memory", cat: "cognition", desc: "相对持久地存储信息的记忆系统。", note: "它容量近乎无限，但提取会重构而非精确回放。" },
  { zh: "编码", en: "Encoding", cat: "cognition", desc: "把信息转化为可存储形式的加工过程。", note: "加工越深、越有意义，日后越容易被提取。" },
  { zh: "提取", en: "Retrieval", cat: "cognition", desc: "从记忆中调取已存储信息的过程。", note: "提取依赖线索；“想不起来”常是提取失败而非彻底遗忘。" },
  { zh: "遗忘曲线", en: "Forgetting Curve", cat: "cognition", desc: "艾宾浩斯在特定材料与学习条件下观察到、记忆保持随时间先快后慢下降的曲线模式。", note: "它启发间隔复习，但曲线形状会随材料、学习程度和提取条件改变。" },
  { zh: "图式", en: "Schema", cat: "cognition", desc: "组织既有知识、经验和期待的心理框架，帮助个体快速理解新信息并预测接下来可能发生什么。", note: "图式能提高加工效率，也可能让人忽略不符合预期的证据，造成刻板化、误读和记忆扭曲。" },
  { zh: "启动效应", en: "Priming", cat: "cognition", desc: "先前刺激无意识地影响随后加工的现象。", note: "部分社会启动研究在重复实验中并不稳健，需谨慎解读。" },
  { zh: "内隐记忆", en: "Implicit Memory", cat: "cognition", desc: "无需有意识回忆即影响行为的记忆。", note: "技能和习惯常属内隐，与可陈述的外显记忆不同。" },
  { zh: "错误记忆", en: "False Memory", cat: "cognition", desc: "对未发生之事的生动却错误的记忆。", note: "它说明记忆可被暗示塑造，影响目击证词的可靠性。" },
  { zh: "学习", en: "Learning", cat: "cognition", desc: "经验、练习或观察导致知识、技能、行为倾向或理解方式发生相对持久改变的过程。", note: "学习不等于当下表现；短期表现好可能来自熟悉或记忆提取，未必代表能够长期保持或迁移到新情境。" },
  { zh: "经典条件反射", en: "Classical Conditioning", cat: "cognition", aliases: "巴甫洛夫条件反射", desc: "通过刺激配对，使原本中性的刺激获得引发反应能力的联结学习。", note: "它可解释许多情绪反应，如条件性恐惧；所学的是刺激之间的关系，不必然是创造全新的反应。" },
  { zh: "操作性条件反射", en: "Operant Conditioning", cat: "cognition", aliases: "工具性条件反射", desc: "通过结果（强化或惩罚）塑造行为的学习。", note: "强化通常比惩罚更有效地建立新行为。" },
  { zh: "强化", en: "Reinforcement", cat: "cognition", desc: "使某种行为在未来更可能再次发生的结果或过程，关键在于行为发生概率实际增加，而不在于结果听起来是否奖励。", note: "正强化是增加愉快刺激，负强化是移除厌恶刺激；二者都增加行为，负强化不等于惩罚。" },
  { zh: "观察学习", en: "Observational Learning", cat: "cognition", aliases: "模仿学习、替代学习", desc: "通过观察他人及其行为结果而学习。", note: "班杜拉的波波玩偶实验是经典示例。" },
  { zh: "启发式", en: "Heuristic", cat: "cognition", aliases: "心理捷径", desc: "快速做出判断的经验性心理捷径。", note: "它高效，但会系统性地导致偏差。" },
  { zh: "认知偏差", en: "Cognitive Bias", cat: "cognition", desc: "系统性偏离理性判断的思维倾向。", note: "偏差不是随机错误，而是有规律、可预测的。" },
  { zh: "确认偏误", en: "Confirmation Bias", cat: "cognition", desc: "偏好寻找和记住支持已有信念之证据的倾向。", note: "它让人难以真正检验自己的观点。" },
  { zh: "心智理论", en: "Theory of Mind", cat: "cognition", desc: "推断他人具有信念、意图等心理状态的能力。", note: "它在幼儿期逐步发展，与社会理解密切相关。" },
  { zh: "元认知", en: "Metacognition", cat: "cognition", desc: "对自身认知过程的觉察与调控。", note: "“知道自己不懂”正是元认知的重要功能。" },

  { zh: "发展心理学", en: "Developmental Psychology", cat: "development", desc: "研究人一生中身心变化及其规律的领域。", note: "它既关注普遍阶段，也关注个体和文化差异。" },
  { zh: "先天与后天", en: "Nature vs. Nurture", cat: "development", desc: "关于遗传与环境如何塑造发展的经典议题。", note: "当代共识是二者持续交互，而非非此即彼。" },
  { zh: "气质", en: "Temperament", cat: "development", desc: "生命早期可观察到、具有一定生物基础的情绪反应与自我调节倾向。", note: "气质是倾向而非命运，会与照护、文化和发展经验持续互动。" },
  { zh: "依恋", en: "Attachment", cat: "development", desc: "个体与重要他人之间寻求接近、安全与支持的情感联结；发展研究尤其关注婴幼儿与照护者的依恋。", note: "早期依恋经验具有影响，但并不僵化地决定一生的关系模式。" },
  { zh: "安全型依恋", en: "Secure Attachment", cat: "development", desc: "个体能把依恋对象作为安全基地，在需要时寻求支持，并在获得回应后继续探索的依恋模式。", note: "它不只以“能被安抚”判断，也更多反映互动历史与情境，而非单方面评价孩子“好坏”。" },
  { zh: "陌生情境", en: "Strange Situation", cat: "development", desc: "通过分离与重聚观察婴儿依恋类型的实验程序。", note: "其分类在跨文化使用时需谨慎解释。" },
  { zh: "认知发展阶段", en: "Stages of Cognitive Development", cat: "development", aliases: "Piaget’s Stages、皮亚杰阶段论", desc: "皮亚杰提出的儿童思维分阶段发展理论。", note: "阶段划分很有影响力，但后续研究发现儿童能力常被低估，发展也未必严格按统一阶段推进。" },
  { zh: "客体永久性", en: "Object Permanence", cat: "development", desc: "理解物体在看不见时仍然存在的能力。", note: "它在婴儿期逐步出现，是认知发展的里程碑。" },
  { zh: "守恒", en: "Conservation", cat: "development", desc: "理解数量在外形改变后仍保持不变的能力。", note: "它是皮亚杰用来区分前运算与具体运算阶段的经典任务。" },
  { zh: "最近发展区", en: "Zone of Proximal Development", cat: "development", aliases: "ZPD", desc: "儿童在帮助下能达到、而独自尚不能达到的区间。", note: "维果茨基以此强调社会互动对学习的作用。" },
  { zh: "脚手架", en: "Scaffolding", cat: "development", desc: "成人或同伴提供的、随能力增长而逐步撤除的支持。", note: "好的脚手架逐步放手，而不是长期代劳。" },
  { zh: "心理社会发展", en: "Psychosocial Development", cat: "development", aliases: "埃里克森阶段论", desc: "埃里克森提出的贯穿一生的八阶段发展理论。", note: "每个阶段的“危机”是发展任务，而非病态。" },
  { zh: "自我同一性", en: "Ego Identity", cat: "development", aliases: "同一性、身份认同、Self-identity", desc: "个体整合自我、价值、关系与社会角色而形成连续一致感的过程；埃里克森特别强调青少年期。", note: "同一性探索与暂时不确定可以是正常发展过程，不宜直接当作问题。" },
  { zh: "柯尔伯格道德发展阶段", en: "Kohlberg's Stages of Moral Development", cat: "development", aliases: "道德发展、柯尔伯格阶段", desc: "柯尔伯格关于道德推理按层次和阶段发展的理论。", note: "这是道德发展研究中的特定模型；它被批评偏重推理与男性样本，忽视关怀、情境与文化差异。" },
  { zh: "关键期", en: "Critical Period", cat: "development", desc: "某些能力必须在特定时间窗口内发展的阶段。", note: "人类许多能力更接近“敏感期”而非严格的关键期。" },
  { zh: "敏感期", en: "Sensitive Period", cat: "development", desc: "对特定经验特别易受影响的发展窗口。", note: "错过并非完全不可弥补，但难度和代价更高。" },
  { zh: "语言习得", en: "Language Acquisition", cat: "development", desc: "儿童快速而自然地获得语言的过程。", note: "它显示先天准备与语言环境共同起作用。" },
  { zh: "青少年期", en: "Adolescence", cat: "development", desc: "从儿童向成人过渡、伴随身体、认知、情绪与社会角色变化的阶段。", note: "青少年的冒险行为受同伴、奖赏情境、机会和社会结构等多因素影响；“大脑发育不同步”只是有争议的概括，不应作为唯一解释。" },
  { zh: "心理弹性", en: "Resilience", cat: "development", aliases: "心理韧性", desc: "个体、关系与环境资源在逆境中共同支持适应、恢复或重新组织的动态过程。", note: "弹性不是固定人格或“天生坚强”，也不应被用来把结构性风险转成个人责任。" },
  { zh: "教养方式", en: "Parenting Styles", cat: "development", desc: "常依要求程度与回应程度划分的养育互动模式，包括权威型（authoritative）、专制型、宽容型和忽视型等。", note: "权威型在许多研究中与较好结果相关，但关联会受文化、社会经济处境、儿童特征和测量方式调节，不能当作跨情境唯一标准。" },
  { zh: "成人发展", en: "Adult Development", cat: "development", desc: "成年期持续的心理与角色变化。", note: "发展不止于成年，价值、关系和目标仍在变化。" },
  { zh: "老龄化", en: "Aging", cat: "development", desc: "与年龄增长相关的身心变化过程。", note: "认知衰退并非全面必然，经验与情绪调节可能反而改善。" },
  { zh: "世代效应", en: "Cohort Effect", cat: "development", desc: "同一时代出生者因共同历史经验而产生的差异。", note: "它常被误当作年龄本身的影响。" },
  { zh: "纵向研究", en: "Longitudinal Study", cat: "development", desc: "对同一批人长期追踪的研究设计。", note: "它能揭示变化，但耗时且易受被试流失影响。" },
  { zh: "横断研究", en: "Cross-sectional Study", cat: "development", desc: "在同一时间比较不同年龄群体的研究设计。", note: "它快，但会把世代差异误读为发展变化。" },

  { zh: "人格", en: "Personality", cat: "personality", desc: "个体相对稳定的思维、情感和行为模式。", note: "稳定是相对的，情境也在很大程度上影响行为。" },
  { zh: "特质", en: "Trait", cat: "personality", desc: "描述人格的相对持久的倾向维度。", note: "特质是概率性倾向，而非在任何情境都固定的标签。" },
  { zh: "大五人格", en: "Big Five", cat: "personality", aliases: "五因素模型、OCEAN", desc: "用开放性、尽责性、外向性、宜人性、神经质来描述人格的模型。", note: "它是描述框架，本身并不直接解释行为的成因。" },
  { zh: "外向性", en: "Extraversion", cat: "personality", desc: "与社交性、活跃性、果断、寻求刺激和积极情绪等相关的人格维度。", note: "内向不等于社交焦虑；“内外向只是能量来源不同”是流行概括，并非该维度的正式定义。" },
  { zh: "神经质", en: "Neuroticism", cat: "personality", aliases: "情绪不稳定性", desc: "体验负性情绪倾向较强的人格维度。", note: "高神经质是一种风险因素，但并非疾病本身。" },
  { zh: "尽责性", en: "Conscientiousness", cat: "personality", desc: "自律、有条理、目标导向的人格维度。", note: "它与学业和职业成就有较稳定的相关。" },
  { zh: "自我", en: "Self", cat: "personality", desc: "个体对自身作为经验与行动主体的整体感受。", note: "心理学的“自我”涵盖概念、评价与调控多个层面。" },
  { zh: "自我概念", en: "Self-concept", cat: "personality", desc: "个体对自己特征和身份的认识总和。", note: "它可能与他人评价或客观表现并不一致。" },
  { zh: "自尊", en: "Self-esteem", cat: "personality", desc: "个体对自身价值的整体评价。", note: "一味追求高自尊未必有益，稳定与真实感更重要。" },
  { zh: "自我效能", en: "Self-efficacy", cat: "personality", desc: "相信自己能完成特定任务的信念。", note: "班杜拉指出它是任务特定的，而非笼统的自信。" },
  { zh: "控制点", en: "Locus of Control", cat: "personality", desc: "认为结果由自身还是外部因素决定的倾向。", note: "内控与外控各有适应性，取决于情境是否真的可控。" },
  { zh: "动机", en: "Motivation", cat: "personality", desc: "启动、指引和维持行为的内在过程。", note: "动机不能直接观察，只能从行为和自述推断。" },
  { zh: "内在动机", en: "Intrinsic Motivation", cat: "personality", desc: "出于兴趣或满足本身而行动的动机。", note: "过度的外部奖励有时会削弱内在动机。" },
  { zh: "需求层次", en: "Maslow's Hierarchy", cat: "personality", aliases: "马斯洛需求层次", desc: "马斯洛提出的从生理到自我实现的需求排列。", note: "其严格的层级顺序缺乏充分实证支持，可作启发框架。" },
  { zh: "驱力", en: "Drive", cat: "personality", desc: "由生理需要引发、推动个体减少紧张的内在状态。", note: "驱力理论难以解释好奇、冒险等增加唤起的行为。" },
  { zh: "情绪", en: "Emotion", cat: "personality", desc: "包含主观感受、生理唤起和表达的短暂反应。", note: "情绪常携带信息与行动倾向，而非纯粹的干扰。" },
  { zh: "情绪智力", en: "Emotional Intelligence", cat: "personality", aliases: "情商、EQ", desc: "识别、理解、运用和调节自己及他人情绪信息的能力或自我报告倾向。", note: "能力模型、特质模型与混合模型的定义和测量不同；流行“情商”说法常把多种人格与社交能力混在一起。" },
  { zh: "詹姆斯-兰格理论", en: "James-Lange Theory", cat: "personality", desc: "认为情绪源于对自身生理反应的感知的理论。", note: "它挑战常识顺序，但难以解释相似生理下的不同情绪。" },
  { zh: "面部反馈假说", en: "Facial Feedback Hypothesis", cat: "personality", desc: "面部动作和表情反馈可能对情绪体验产生影响的假说。", note: "证据并非简单“失败”：2016 年对笔咬范式的注册重复未见原效应，2022 年多实验室研究在模仿和自愿表情任务中发现小效应，但笔咬任务证据较弱。" },
  { zh: "唤醒", en: "Arousal", cat: "personality", desc: "身心被激活的生理与心理程度。", note: "表现与唤醒的关系受任务难度、学习阶段和测量方式影响；不宜把耶克斯—多德森关系概括成所有任务都有同一个“最佳中点”。" },
  { zh: "挫折", en: "Frustration", cat: "personality", desc: "目标受阻时产生的负性情绪状态。", note: "挫折不必然导致攻击，反应受解释与情境调节。" },
  { zh: "自我调节", en: "Self-regulation", cat: "personality", desc: "为达成目标而调控情绪、思维和行为的过程。", note: "它像可训练的能力，也会因疲劳或压力而减弱。" },
  { zh: "成长型思维", en: "Growth Mindset", cat: "personality", desc: "相信能力可以通过努力发展的信念。", note: "其效应量在近期研究中较为温和，不宜过度承诺。" },
  { zh: "心流", en: "Flow", cat: "personality", desc: "全神贯注、忘我投入某活动的最佳体验状态。", note: "它常出现在挑战与技能相互匹配时。" },
  { zh: "延迟满足", en: "Delayed Gratification", cat: "personality", desc: "为更大的长远回报而抑制即时诱惑的能力。", note: "经典“棉花糖实验”的长期预测力在重复研究中被大幅削弱。" },

  { zh: "社会心理学", en: "Social Psychology", cat: "social", desc: "研究他人与情境如何影响个体思想、情感和行为的领域。", note: "它常揭示情境的力量远超我们的直觉估计。" },
  { zh: "态度", en: "Attitude", cat: "social", desc: "对人、事或观念的评价性倾向。", note: "态度与行为并不总一致，受情境和具体性影响。" },
  { zh: "认知失调", en: "Cognitive Dissonance", cat: "social", desc: "持有矛盾认知时产生的不适及化解它的动机。", note: "人常通过改变态度而非改变行为来减少失调。" },
  { zh: "归因", en: "Attribution", cat: "social", desc: "根据可见行为、结果和情境线索，对行为原因作出解释和推断的心理过程。", note: "人们常在个人特质、意图与环境条件之间分配原因，但信息有限时的归因容易受到文化和认知偏差影响。" },
  { zh: "基本归因错误", en: "Fundamental Attribution Error", cat: "social", desc: "解释他人行为时相对高估内在特质、低估情境作用的倾向。", note: "相关的行动者—观察者不对称受事件效价和情境等调节；元分析未发现跨情境都成立的一般效应。" },
  { zh: "从众", en: "Conformity", cat: "social", desc: "因真实或想象的群体压力而改变公开判断、行为或观点。", note: "阿希实验显示，部分参与者会在公开回答中与明显错误的多数保持一致；这不必然表示其内心信念也已改变。" },
  { zh: "服从", en: "Obedience", cat: "social", desc: "按权威指示行动，即使违背个人意愿。", note: "米尔格拉姆实验揭示情境可使普通人也施加伤害。" },
  { zh: "社会促进", en: "Social Facilitation", cat: "social", desc: "他人在场提升简单或熟练任务表现的现象。", note: "对困难或不熟练的任务，他人在场反而可能损害表现。" },
  { zh: "社会惰化", en: "Social Loafing", cat: "social", desc: "群体中个人努力下降的现象。", note: "明确个人责任可以减弱惰化。" },
  { zh: "去个体化", en: "Deindividuation", cat: "social", desc: "匿名、群体沉浸等条件下，个人身份显著性、自我监控或责任感可能改变的过程。", note: "经典理论强调约束下降；社会认同模型则指出群体规范可能变得更显著，因此结果不必然是越轨，也不能据此为个人行为免责。" },
  { zh: "群体思维", en: "Groupthink", cat: "social", desc: "群体为求一致而压制异议、导致糟糕决策。", note: "鼓励异议和独立评估可加以预防。" },
  { zh: "群体极化", en: "Group Polarization", cat: "social", desc: "群体成员在讨论后，整体立场朝原先倾向的方向进一步变得极端的现象。", note: "说服性论据、社会比较和同质群体都可能推动极化；有不同观点和可靠信息并不必然消除分歧，但能减少单向放大。" },
  { zh: "旁观者效应", en: "Bystander Effect", cat: "social", desc: "在许多情境中，其他人在场会降低单个旁观者介入概率的现象。", note: "责任分散是机制之一；危险明确、旁观者能提供实际支持等条件可削弱甚至逆转效应。" },
  { zh: "刻板印象", en: "Stereotype", cat: "social", desc: "对某群体成员的概括化信念。", note: "它是认知捷径，未必带敌意，却可能造成不公。" },
  { zh: "偏见", en: "Prejudice", cat: "social", desc: "基于群体归属的负性态度或情感。", note: "偏见涉及情感，与刻板印象（认知）和歧视（行为）相关但不同。" },
  { zh: "歧视", en: "Discrimination", cat: "social", desc: "基于群体归属的不公正区别对待行为。", note: "制度性歧视可不依赖个人偏见而持续存在。" },
  { zh: "内群体偏好", en: "In-group Bias", cat: "social", desc: "仅因为某人被视为属于自己的群体，就对其作出更积极评价、给予更多信任或分配更多资源的倾向。", note: "即使是随机且缺乏真实历史的分组，也可能迅速产生这种偏好；它不等于每个成员都有明确敌意。" },
  { zh: "说服", en: "Persuasion", cat: "social", desc: "通过沟通改变他人态度或行为的过程。", note: "中心与外周两条路径分别依赖论证和表面线索。" },
  { zh: "亲社会行为", en: "Prosocial Behavior", cat: "social", desc: "意在帮助他人的自愿行为。", note: "其动机可能混合利他与自利，难以完全区分。" },
  { zh: "利他", en: "Altruism", cat: "social", aliases: "利他主义", desc: "不图回报地增进他人福祉的行为。", note: "纯粹利他是否存在，是长期争论的问题。" },
  { zh: "攻击", en: "Aggression", cat: "social", aliases: "攻击行为", desc: "以造成身体、言语、关系或心理伤害为目标或结果的行为倾向与行为表现。", note: "它有敌意性与工具性之分，成因涉及生物状态、挫折、社会学习、权力和具体情境；解释原因不等于为伤害免责。" },
  { zh: "人际吸引", en: "Interpersonal Attraction", cat: "social", desc: "使人愿意接近、喜欢、信任或与他人建立关系的心理与社会过程，可能表现为友谊、浪漫或其他亲密连接。", note: "邻近性、相似性和熟悉度会影响吸引，但权力、互动质量、文化和个人边界同样重要。" },
  { zh: "自我实现预言", en: "Self-fulfilling Prophecy", cat: "social", desc: "某种预期通过改变互动和行为，提高其所预期结果出现概率的过程。", note: "教师期待效应是经典案例，但效应大小与条件并不恒定；不能据此把学生表现简单归因于教师信念。" },
  { zh: "社会认同", en: "Social Identity", cat: "social", desc: "个体从所属群体获得的那部分自我认同。", note: "它有助于归属感，也可能助长群体间偏见。" },
  { zh: "光环效应", en: "Halo Effect", cat: "social", desc: "对某一特质的印象泛化到整体评价的偏差。", note: "“长得好看就更可信”是它的典型表现。" },

  { zh: "临床心理学", en: "Clinical Psychology", cat: "clinical", desc: "研究、评估和干预心理困扰与障碍的领域。", note: "临床心理学家与精神科医生角色不同，后者通常可开药。" },
  { zh: "心理障碍", en: "Mental Disorder", cat: "clinical", aliases: "精神障碍", desc: "涉及心理、情绪、认知或行为方面的持续性综合征，并造成显著痛苦、功能受损或重要生活领域的困难。", note: "诊断关注症状模式、持续时间、痛苦与功能，而非仅仅“与众不同”；单个症状或网络量表不能替代专业评估。" },
  { zh: "《精神障碍诊断与统计手册》", en: "Diagnostic and Statistical Manual of Mental Disorders (DSM)", cat: "clinical", aliases: "DSM", desc: "美国精神医学学会编制的精神障碍分类与诊断标准手册。", note: "它是随版本与证据更新的共识分类工具，不是用于自我诊断的量表，也不是全球唯一分类体系。" },
  { zh: "焦虑障碍", en: "Anxiety Disorder", cat: "clinical", desc: "以过度、持久的焦虑为核心的一类障碍。", note: "正常焦虑有适应功能，成为障碍在于过度且损害生活。" },
  { zh: "重性抑郁障碍", en: "Major Depressive Disorder", cat: "clinical", aliases: "抑郁症（常用但较宽泛）", desc: "以持续低落或兴趣、愉悦感显著降低，并伴其他症状和功能受损为特征的抑郁障碍。", note: "它不等于普通悲伤，也不能靠“想开点”解决；“抑郁”在日常和临床中还可能指症状或更宽的障碍类别。" },
  { zh: "双相障碍", en: "Bipolar Disorder", cat: "clinical", aliases: "躁郁症", desc: "以躁狂或轻躁狂发作为核心，并可伴抑郁发作的一组心境障碍。", note: "它与日常“情绪多变”不同，也不要求情绪必然在两极之间规律来回波动。" },
  { zh: "强迫症", en: "OCD", cat: "clinical", aliases: "强迫性障碍", desc: "以强迫思维和强迫行为为特征的障碍。", note: "它不是“爱干净、追求完美”，而是难以控制且令人痛苦。" },
  { zh: "创伤后应激障碍", en: "Post-traumatic Stress Disorder / PTSD", cat: "clinical", desc: "接触创伤事件后，出现闯入性体验、回避、认知或情绪负性改变，以及警觉与反应性改变等症状的障碍。", note: "诊断还要求一定持续时间与显著困扰或功能影响；并非所有经历创伤的人都会发展为 PTSD。" },
  { zh: "恐惧症", en: "Phobia", cat: "clinical", desc: "对特定对象或情境持续、强烈且与实际危险不相称的恐惧与回避。", note: "临床判断关注持续时间、困扰与功能影响，而不是用“非理性”否定当事人的体验。" },
  { zh: "惊恐发作", en: "Panic Attack", cat: "clinical", desc: "强烈恐惧或不适在短时间内急剧上升，并伴心悸、呼吸困难、眩晕等身心症状的发作。", note: "发作本身通常不危及生命，但胸痛、呼吸困难等也可能来自急症；首次、异常或持续症状应及时寻求医疗评估。" },
  { zh: "精神分裂症", en: "Schizophrenia", cat: "clinical", desc: "涉及幻觉、妄想和思维紊乱的严重精神障碍。", note: "它不是“多重人格”，这是常见误解。" },
  { zh: "妄想", en: "Delusion", cat: "clinical", desc: "即使面对相反证据仍难以改变的固定信念；判断时必须结合文化、宗教和社会语境。", note: "它是需要专业评估的临床概念，不能仅因观点罕见或与自己不同就给他人贴上这一标签。" },
  { zh: "幻觉", en: "Hallucination", cat: "clinical", desc: "在没有相应外部刺激时产生的感知体验。", note: "幻觉可见于多种状况，并非都指向精神病。" },
  { zh: "人格障碍", en: "Personality Disorder", cat: "clinical", desc: "长期、广泛且缺乏灵活性，并造成显著困扰或社会、职业等功能受损的人格体验与行为模式。", note: "当事人未必总能直接感到困扰；诊断需由专业人员结合文化与长期功能谨慎评估，避免把它当作贬损标签。" },
  { zh: "进食障碍", en: "Eating Disorder", cat: "clinical", desc: "以异常进食及体像困扰为特征的障碍。", note: "它是严重的心理健康问题，而非单纯的生活方式选择。" },
  { zh: "注意缺陷多动障碍", en: "ADHD", cat: "clinical", desc: "以持续注意困难、多动或冲动为特征的神经发育障碍。", note: "它有神经发育基础，不等于“不努力”或教养失败。" },
  { zh: "孤独症谱系", en: "Autism Spectrum Disorder / Autism Spectrum", cat: "clinical", aliases: "自闭症谱系", desc: "以社交沟通差异以及受限或重复的行为、兴趣或感官模式为特征的神经发育状况；医学分类中称神经发育障碍。", note: "“谱系”强调支持需求与表现多样；许多孤独症人士倡导接纳、合理便利与自主，而不是以“治愈身份”为目标。" },
  { zh: "心理治疗", en: "Psychotherapy", cat: "clinical", aliases: "谈话治疗", desc: "通过专业心理互动缓解困扰的干预。", note: "治疗关系的质量本身就是疗效的重要因素。" },
  { zh: "认知行为疗法", en: "CBT", cat: "clinical", aliases: "认知行为治疗", desc: "通过改变思维与行为模式缓解困扰的循证疗法。", note: "它证据充分，但并非对所有问题都最优。" },
  { zh: "精神分析", en: "Psychoanalysis", cat: "clinical", desc: "弗洛伊德创立、聚焦潜意识冲突的治疗与理论。", note: "作为疗法影响深远，但其许多主张缺乏实证支持。" },
  { zh: "暴露疗法", en: "Exposure Therapy", cat: "clinical", desc: "通过逐步面对所惧之物来减弱恐惧的疗法。", note: "它对焦虑和恐惧症有力，需在专业指导下进行。" },
  { zh: "正念", en: "Mindfulness", cat: "clinical", desc: "有意、不评判地觉察当下的练习。", note: "它有益处但非万能，个别情况下也可能带来不适。" },
  { zh: "应对", en: "Coping", cat: "clinical", aliases: "应对方式", desc: "应对压力与情绪的认知与行为努力。", note: "问题聚焦与情绪聚焦策略各有其适用情境。" },
  { zh: "污名", en: "Stigma", cat: "clinical", aliases: "病耻感", desc: "社会对某类人贬低性的标签与排斥。", note: "心理健康污名会阻碍求助，是重要的公共议题。" },
  { zh: "共病", en: "Comorbidity", cat: "clinical", desc: "同一个体同时存在多种障碍的现象。", note: "共病相当常见，会使评估和治疗更复杂。" },

  { zh: "心理学构造主义", en: "Structuralism", cat: "schools", aliases: "构造主义、内容心理学", desc: "主要由铁钦纳系统化、试图以训练式内省分析意识经验结构与基本成分的早期学派。", note: "其思想受冯特影响但不宜把二者等同；它也不同于哲学、语言学和人类学中的结构主义。" },
  { zh: "心理学机能主义", en: "Functionalism", cat: "schools", aliases: "机能主义", desc: "受达尔文影响、关注心理过程如何帮助个体适应环境的早期心理学传统。", note: "它把注意力从“意识由什么构成”转向“意识有何用”，不同于社会学功能主义与心灵哲学功能主义。" },
  { zh: "行为主义", en: "Behaviorism", cat: "schools", desc: "主张心理学只研究可观察行为的学派。", note: "它提升了方法的严格性，却长期回避内在心理过程。" },
  { zh: "精神分析学派", en: "Psychoanalytic School", cat: "schools", desc: "弗洛伊德创立、强调潜意识与早期经验的传统。", note: "它对文化影响巨大，科学地位则长期受质疑。" },
  { zh: "潜意识", en: "Unconscious", cat: "schools", aliases: "无意识", desc: "不在意识觉察中却影响行为的心理过程。", note: "现代认知科学的“无意识加工”与弗洛伊德式潜意识并不相同。" },
  { zh: "本我自我超我", en: "Id, Ego, Superego", cat: "schools", desc: "弗洛伊德关于人格三重结构的划分。", note: "它是理论隐喻，并不对应具体脑区。" },
  { zh: "防御机制", en: "Defense Mechanism", cat: "schools", desc: "用来减轻焦虑的无意识心理策略，如压抑、投射。", note: "概念影响深远，但具体机制的实证支持参差不齐。" },
  { zh: "分析心理学", en: "Analytical Psychology", cat: "schools", aliases: "荣格心理学", desc: "荣格创立、强调集体无意识与原型的传统。", note: "它富含象征洞见，但许多概念难以实证检验。" },
  { zh: "集体无意识", en: "Collective Unconscious", cat: "schools", desc: "荣格提出的、人类共有的深层心理内容。", note: "它是有影响的思辨概念，但缺乏主流实证基础。" },
  { zh: "人本主义心理学", en: "Humanistic Psychology", cat: "schools", desc: "强调成长、自由与自我实现的心理学取向。", note: "它是对精神分析与行为主义的“第三势力”回应。" },
  { zh: "来访者中心疗法", en: "Person-centered Therapy", cat: "schools", aliases: "罗杰斯疗法、以人为中心", desc: "罗杰斯创立、以共情和真诚支持来访者成长的疗法。", note: "它把治疗关系本身视为改变的核心。" },
  { zh: "无条件积极关注", en: "Unconditional Positive Regard", cat: "schools", desc: "不附加条件地接纳来访者的态度。", note: "接纳其人不等于赞同其一切行为。" },
  { zh: "格式塔心理学", en: "Gestalt Psychology", cat: "schools", aliases: "完形心理学", desc: "主张整体不等于部分之和的知觉学派。", note: "它揭示知觉的组织原则，与格式塔疗法并非一回事。" },
  { zh: "认知革命", en: "Cognitive Revolution", cat: "schools", desc: "20 世纪中叶心理学重新重视内在心理加工与信息表征的理论和研究转向。", note: "它削弱了行为主义的主导地位并推动信息加工研究，但行为研究和行为主义传统并未因此消失。" },
  { zh: "认知心理学", en: "Cognitive Psychology", cat: "schools", desc: "研究知觉、记忆、思维等心理加工的领域。", note: "它常借助计算机隐喻，但心智不必等同于计算机。" },
  { zh: "进化心理学", en: "Evolutionary Psychology", cat: "schools", desc: "用自然选择解释普遍心理机制的取向。", note: "其假设常难以直接检验，需警惕事后编故事。" },
  { zh: "积极心理学", en: "Positive Psychology", cat: "schools", desc: "研究幸福、优势与繁荣的心理学取向。", note: "它补充了对病理的偏重，但不应否认真实的痛苦。" },
  { zh: "生物心理社会模型", en: "Biopsychosocial Model", cat: "schools", desc: "从生物、心理和社会三个层面理解健康的框架。", note: "它反对把心理问题化约为单一层面。" },
  { zh: "社会文化取向", en: "Sociocultural Perspective", cat: "schools", desc: "强调文化与社会情境塑造心理的视角。", note: "它提醒许多“普遍”结论其实带有文化局限。" },
  { zh: "依恋理论", en: "Attachment Theory", cat: "schools", desc: "鲍尔比等提出、关于早期联结及其长期影响的理论。", note: "成人依恋类型是倾向性描述，并非固定不可变。" },
  { zh: "社会学习理论", en: "Social Learning Theory", cat: "schools", desc: "班杜拉等人强调观察、模仿、强化与认知因素的学习理论。", note: "班杜拉后来把社会学习理论扩展并更名为社会认知理论，增加自我效能与交互决定论等内容；两者相关但不宜当作完全同义。" },
  { zh: "具身认知", en: "Embodied Cognition", cat: "schools", desc: "认为认知依赖身体与环境互动的取向。", note: "它挑战“心智只发生在头脑中”的假设。" },
  { zh: "神经科学取向", en: "Neuroscience Perspective", cat: "schools", aliases: "生物学取向", desc: "从脑与生理机制解释行为的视角。", note: "神经解释有力，但不能取代心理与社会层面的说明。" },
  { zh: "心理测量学", en: "Psychometrics", cat: "schools", desc: "研究心理特质如何被测量的学科。", note: "它关注信度与效度，是量表科学性的基础。" },
  { zh: "智力", en: "Intelligence", cat: "cognition", aliases: "智力理论", desc: "学习、推理、解决问题并适应环境的一组能力及其理论化概念。", note: "智力并非单一无争议实体；其定义、测量与 IQ 解释都存在文化、情境和公平方面的争议。" }
];

const categoryIntros = {
  foundations: "这类词属于研究工具与方法：它帮助界定变量、设计对照、评估证据强弱，也提醒结论要能被重复检验，而不是凭直觉下判断。",
  biological: "这类词把行为与体验带回其生理基础，涉及神经、激素和节律等机制，但生理解释通常只是其中一层，而非全部原因。",
  cognition: "这类词关注信息如何被感知、注意、记忆和加工，重点在于心理过程的机制，而不只是行为结果本身。",
  development: "这类词放在人生历程中理解，关注能力与关系如何随年龄变化，也要区分年龄、世代和研究设计带来的差异。",
  personality: "这类词描述相对稳定的倾向与内在动力，阅读时要记住它们是概率性倾向，情境同样在塑造具体表现。",
  social: "这类词强调他人与情境的力量，提醒许多行为并非源自个人特质，而是被处境、群体和角色所塑造。",
  clinical: "这类词涉及心理困扰的评估与干预，使用时要区分描述与标签，关注痛苦与功能，而非仅仅偏离常态。",
  schools: "这类词需要放回其历史语境与理论传统中理解，不同取向对同一现象常给出不同解释，各有洞见也各有局限。"
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
