const categoryNames = {
  foundations: "基础概念",
  body: "身体与生理",
  response: "欲望与反应",
  consent: "同意与边界",
  health: "健康与感染",
  reproduction: "避孕与生殖",
  relationships: "关系与实践",
  research: "研究与社会"
};

const terms = [
  { zh: "性学", en: "Sexology", cat: "foundations", desc: "研究人类性、性行为、性健康、性身份、亲密关系与社会规范的跨学科领域。", note: "它结合医学、心理学、社会学、公共卫生与人文学科，不等于单纯研究性行为。" },
  { zh: "性经验", en: "Sexuality", cat: "foundations", desc: "个体在身体、欲望、吸引、亲密、身份、关系和社会规范中形成的综合经验。", note: "这里讨论的是 sexuality 这一广义经验，不替代 SOGIESC 术语表中“性 / Sex”的身体分类定义。" },
  { zh: "性健康", en: "Sexual Health", cat: "foundations", desc: "与性相关的身体、情感、心理与社会福祉状态，而不只是没有疾病或功能障碍。", note: "它强调安全、尊重、知情选择和不受强迫、歧视与暴力影响。" },
  { zh: "性权利", en: "Sexual Rights", cat: "foundations", desc: "围绕身体自主、信息获取、健康服务、隐私、免于暴力和歧视等议题的权利框架。", note: "具体保护因地区法律不同而变化，应结合当地制度理解。" },
  { zh: "全面性教育", en: "Comprehensive Sexuality Education", cat: "foundations", aliases: "CSE、综合性教育", desc: "涵盖身体、关系、同意、避孕、感染预防、性别平等、媒体素养和价值澄清的教育方式。", note: "重点不是鼓励性行为，而是帮助人做出知情、尊重和安全的决定。" },
  { zh: "性素养", en: "Sexual Literacy", cat: "foundations", desc: "理解性健康信息、辨认风险与权利、沟通边界并寻求支持的能力。", note: "它也包括识别谣言、污名化语言和不可靠健康建议。" },
  { zh: "性脚本", en: "Sexual Script", cat: "foundations", desc: "社会文化告诉人们性应如何发生、谁应主动、什么才算正常的隐性剧本。", note: "脚本会影响期待与压力，但并不等于每个人真实想要的关系方式。" },
  { zh: "性规范", en: "Sexual Norms", cat: "foundations", desc: "社会对性行为、关系形式、欲望表达和身体呈现的常规期待。", note: "规范会随历史、地区、宗教和社群变化，不宜被包装成普遍自然规律。" },
  { zh: "性多样性", en: "Sexual Diversity", cat: "foundations", desc: "人类在性取向、欲望频率、性表达、关系形式、身体经验和实践偏好上的差异。", note: "承认多样性不等于取消边界；同意与不伤害仍是核心前提。" },
  { zh: "性身份", en: "Sexual Identity", cat: "foundations", desc: "个体用来理解或命名自身性取向、性经验或性社群位置的身份描述。", note: "身份可以稳定，也可能随自我理解和语境变化；外人不应替当事人决定。" },
  { zh: "性行为", en: "Sexual Behavior", cat: "foundations", desc: "具有性含义、性亲密或性愉悦目的的行为总称。", note: "行为、身份和吸引并不总一致，研究与沟通时要分别描述。" },
  { zh: "性实践", en: "Sexual Practice", cat: "foundations", desc: "在特定关系、文化或社群中形成的具体亲密行为与互动方式。", note: "比性行为更强调实践规则、工具、场景、沟通和意义。" },
  { zh: "性偏好", en: "Sexual Preference", cat: "foundations", aliases: "偏好", desc: "对某类亲密方式、关系安排或刺激线索的倾向。", note: "谈性取向时不宜用偏好替代，因为它可能误示取向只是可随意选择的喜好。" },
  { zh: "性积极", en: "Sex-positive", cat: "foundations", aliases: "性正向", desc: "强调在自愿、知情、尊重与安全前提下，不羞辱多样性经验的态度。", note: "性积极不等于要求每个人都喜欢性，也不等于取消风险沟通。" },
  { zh: "性羞耻", en: "Sexual Shame", cat: "foundations", desc: "因性欲、身体、性经历或身份而产生的羞耻、污名感或自我否定。", note: "它常来自家庭、宗教、媒体和制度压力，而不只是个人心理问题。" },
  { zh: "性污名", en: "Sexual Stigma", cat: "foundations", desc: "社会对某些性身份、行为、身体或关系形式贴上负面标签并据此排斥。", note: "污名会阻碍求助、检测和诚实沟通，是性健康的重要风险因素。" },
  { zh: "性伦理", en: "Sexual Ethics", cat: "foundations", desc: "评估亲密互动是否尊重自主、同意、诚实、边界、公平和照护的伦理框架。", note: "它关注具体关系中的权力与伤害，而不是用单一道德模板评判所有人。" },
  { zh: "性安全", en: "Sexual Safety", cat: "foundations", desc: "在身体、情感、隐私和社会处境上尽量降低伤害风险的实践。", note: "安全不仅是避孕或防感染，也包括同意、退出机制和隐私保护。" },

  { zh: "外阴", en: "Vulva", cat: "body", desc: "外部生殖器区域的总称，包括阴阜、大阴唇、小阴唇、阴蒂和尿道口等结构。", note: "日常常被误称为阴道；准确用词有助于健康沟通。" },
  { zh: "阴蒂", en: "Clitoris", cat: "body", desc: "富含神经末梢、与性愉悦高度相关的身体结构，外露部分只是整体的一小部分。", note: "理解它有助于避免把性愉悦简化为单一插入脚本。" },
  { zh: "阴道", en: "Vagina", cat: "body", desc: "连接外阴与子宫颈的肌性通道，具有伸缩和自我清洁能力。", note: "不适、异常分泌物或疼痛应结合医疗建议，不宜靠网络自诊。" },
  { zh: "子宫", en: "Uterus", cat: "body", desc: "部分人拥有的生殖器官，与月经、妊娠和分娩相关。", note: "是否拥有子宫不决定一个人的性别身份或社会身份。" },
  { zh: "宫颈", en: "Cervix", cat: "body", aliases: "子宫颈", desc: "子宫下端连接阴道的部分，是宫颈筛查和 HPV 相关健康议题的重要部位。", note: "有宫颈者可按当地指南了解筛查建议。" },
  { zh: "阴茎", en: "Penis", cat: "body", desc: "外部生殖器之一，参与排尿、勃起和部分性行为。", note: "尺寸、形状和勃起表现存在自然差异，不应被单一标准羞辱。" },
  { zh: "睾丸", en: "Testes", cat: "body", aliases: "性腺", desc: "产生精子和部分性激素的身体组织。", note: "疼痛、肿块或突发变化应及时就医。" },
  { zh: "前列腺", en: "Prostate", cat: "body", desc: "位于膀胱下方、参与精液成分生成的腺体。", note: "它可能与排尿、疼痛和部分性体验相关，需区分健康信息和玩笑化表达。" },
  { zh: "会阴", en: "Perineum", cat: "body", desc: "外生殖器与肛门之间的区域。", note: "它包含肌肉、神经和皮肤组织，分娩、手术或创伤后可能需要护理。" },
  { zh: "盆底肌", en: "Pelvic Floor Muscles", cat: "body", desc: "支撑盆腔器官并参与排尿、排便和性功能的一组肌肉。", note: "过弱或过紧都可能影响舒适度，训练或放松应根据具体情况进行。" },
  { zh: "乳房", en: "Breasts", cat: "body", desc: "胸部组织，可能与哺乳、身体形象、性愉悦和性别表达相关。", note: "乳房健康与性别身份无必然对应；异常肿块或变化应就医评估。" },
  { zh: "勃起", en: "Erection", cat: "body", desc: "海绵体充血导致阴茎、阴蒂或相关组织变硬或膨胀的生理反应。", note: "勃起可由性刺激、睡眠、压力或身体状态触发，不必然代表同意或欲望。" },
  { zh: "润滑", en: "Lubrication", cat: "body", desc: "身体或外用润滑剂减少摩擦、提高舒适度的过程。", note: "自然润滑程度受激素、压力、药物和情境影响，不能简单当作欲望指标。" },
  { zh: "射精", en: "Ejaculation", cat: "body", desc: "精液或相关液体从身体排出的生理过程。", note: "射精与高潮常相关但不是完全同一件事，也不是性体验价值的唯一标准。" },
  { zh: "阴道分泌物", en: "Vaginal Discharge", cat: "body", desc: "阴道和宫颈产生的分泌物，受周期、激素、感染和健康状态影响。", note: "颜色、气味、疼痛或瘙痒异常变化可提示需要医疗评估。" },
  { zh: "月经周期", en: "Menstrual Cycle", cat: "body", desc: "由激素变化驱动的周期性过程，可能包括排卵、子宫内膜变化和月经。", note: "周期长度和体验差异很大；严重疼痛或异常出血不应被简单忍耐。" },
  { zh: "性激素", en: "Sex Hormones", cat: "body", desc: "与青春期发育、第二性征、身体功能和部分医疗过渡相关的激素，如雌激素、睾酮和孕激素等。", note: "不同人的激素水平本来就存在范围差异，不能用单一数值定义某人的性别。" },
  { zh: "青春期发育", en: "Pubertal Development", cat: "body", desc: "身体在激素作用下出现第二性征、身高、声音、毛发、月经或生殖功能等变化的阶段。", note: "对部分跨性别、非二元和间性青少年来说，青春期变化可能带来额外压力或医疗支持需求。" },
  { zh: "更年期", en: "Menopause", cat: "body", desc: "月经停止及其前后激素变化相关阶段，可能伴随潮热、睡眠、情绪或性舒适度变化。", note: "它是生命历程的一部分，但不适症状可以寻求医疗支持。" },
  { zh: "性发育差异", en: "Differences of Sex Development", cat: "body", aliases: "DSD、间性特征", desc: "描述染色体、性腺、激素、第一或第二性征等性别特征发育与典型二元标准不完全一致的情况。", note: "DSD 在医学中也曾写作 Disorders of Sex Development；涉及具体个体时，优先尊重其是否使用“间性”或 DSD 等自我称谓。" },
  { zh: "性欲", en: "Libido / Sexual Desire", cat: "response", desc: "对性亲密、性刺激或性表达的欲望或兴趣。", note: "性欲高低会随压力、关系、药物、健康、激素和生活阶段变化。" },
  { zh: "性吸引", en: "Sexual Attraction", cat: "response", desc: "对特定对象产生的、以性接触或性行为为指向的心理与生理驱动力。它通常表现为希望与对方发生性行为或进行具有性意味的亲密身体接触，并可能伴随生理反应（如心跳加速、生理唤起）或心理兴奋（如性幻想的涌现）。", note: "性吸引不等于一般性的性欲水平、身体唤起、性幻想题材、性行为经历或性行为意愿。" },
  { zh: "性唤起", en: "Sexual Arousal", cat: "response", desc: "身体和心理被性刺激激活的状态，可能包括充血、润滑、心率变化或注意聚焦。", note: "身体唤起不等于同意，也不必然等于主观想要。" },
  { zh: "性反应周期", en: "Sexual Response Cycle", cat: "response", desc: "描述欲望、唤起、平台、高潮和消退等阶段的经典模型。", note: "它是模型而非剧本；许多人的体验并不按线性顺序发生。" },
  { zh: "自发性欲", en: "Spontaneous Desire", cat: "response", desc: "在明显亲密刺激前就出现的性欲。", note: "它常被媒体当作默认模式，但不是唯一健康模式。" },
  { zh: "反应性欲", en: "Responsive Desire", cat: "response", desc: "在安全、亲密、身体舒适或被唤起后逐渐出现的性欲。", note: "反应性欲常见且正常，不代表不够爱伴侣或有问题。" },
  { zh: "欲望差异", en: "Desire Discrepancy", cat: "response", desc: "关系中的人对性亲密频率、方式或重要性的期待不同。", note: "它是常见关系议题，重点在协商和照护，而不是找出谁正常。" },
  { zh: "性愉悦", en: "Sexual Pleasure", cat: "response", desc: "与性亲密、身体触碰、幻想或关系连接相关的愉悦体验。", note: "性健康讨论不应只关注风险，也应承认愉悦和尊重的价值。" },
  { zh: "性高潮", en: "Orgasm", cat: "response", desc: "高度性唤起后可能出现的强烈愉悦、肌肉收缩和释放体验。", note: "高潮不是性体验必须达成的指标，也不能替代同意与舒适。" },
  { zh: "高潮困难", en: "Orgasm Difficulty", cat: "response", aliases: "高潮障碍", desc: "在有足够刺激和意愿时仍长期难以达到高潮或因此困扰。", note: "原因可能涉及压力、药物、身体状态、创伤或关系沟通，可寻求专业支持。" },
  { zh: "勃起困难", en: "Erectile Difficulty", cat: "response", aliases: "勃起功能障碍、ED", desc: "难以获得或维持足以满足自身性目标的勃起，并因此造成困扰。", note: "它可能与血管、神经、药物、压力和关系有关，不是人格或男性气质评价。" },
  { zh: "性交疼痛", en: "Dyspareunia", cat: "response", desc: "性接触或插入时出现疼痛的体验。", note: "疼痛不是必须忍耐的部分，可能需要医学、盆底或创伤知情支持。" },
  { zh: "阴道痉挛", en: "Vaginismus", cat: "response", aliases: "盆底保护性收缩", desc: "插入相关情境中盆底肌不自主收缩，可能导致疼痛、困难或恐惧。", note: "它不是意志薄弱，通常需要温和、综合和非羞辱的支持。" },
  { zh: "性厌恶", en: "Sex Aversion", cat: "response", desc: "对某些性情境产生强烈回避、恐惧或不适。", note: "它可能与创伤、压力、身体疼痛、关系冲突或个人取向有关，不能用强迫克服。" },
  { zh: "性幻想", en: "Sexual Fantasy", cat: "response", desc: "与性、亲密或欲望相关的想象内容。", note: "幻想不等于现实意愿；是否实践仍取决于同意、边界和安全。" },
  { zh: "自慰", en: "Masturbation", cat: "response", aliases: "自我性刺激", desc: "个体通过自我触碰或想象获得性愉悦、释放或身体了解的行为。", note: "在安全和自愿前提下，它通常是常见的性经验，不应被污名化。" },
  { zh: "身体意象", en: "Body Image", cat: "response", desc: "个体如何感受、评价和想象自己的身体。", note: "身体羞耻会影响亲密和性健康，支持性沟通常比评价外貌更重要。" },
  { zh: "表演焦虑", en: "Performance Anxiety", cat: "response", desc: "担心自己在性情境中表现不够好而产生的焦虑。", note: "把性变成考试会削弱亲密感，转向沟通和愉悦常更有帮助。" },
  { zh: "亲密触碰", en: "Intimate Touch", cat: "response", desc: "具有亲密、安抚、连接或性意味的身体接触。", note: "触碰是否舒适取决于具体人、具体部位、具体时间和具体同意。" },
  { zh: "感官边界", en: "Sensory Boundary", cat: "response", desc: "个体对声音、气味、触感、节奏、压力和空间距离的舒适范围。", note: "神经多样性、创伤和身体状态都可能影响感官边界。" },

  { zh: "同意", en: "Consent", cat: "consent", desc: "对具体互动在知情、自愿、清醒和可撤回前提下作出的明确许可。", note: "同意不是一次性授权，也不能由沉默、关系身份或过去经历自动推出。" },
  { zh: "亲密知情同意", en: "Informed Consent in Intimacy", cat: "consent", desc: "在了解关键信息、风险、替代选择和退出方式后，对具体亲密互动作出的同意。", note: "它借用知情同意原则讨论亲密互动；研究伦理中的“知情同意”在心理学术语表中另有专门定义。" },
  { zh: "自愿", en: "Voluntary", cat: "consent", desc: "没有威胁、胁迫、操控、报复压力或重大权力压制的选择状态。", note: "没有反抗不等于自愿，尤其在恐惧或权力不对等情境中。" },
  { zh: "可撤回", en: "Revocable", cat: "consent", desc: "同意可以在任何时候改变或收回。", note: "一旦有人暂停、犹豫或撤回，互动应立刻调整或停止。" },
  { zh: "具体同意", en: "Specific Consent", cat: "consent", desc: "同意只适用于被明确说明的行为、对象、时间和条件。", note: "同意亲吻不等于同意其他行为，同意一次不等于永久同意。" },
  { zh: "热情同意", en: "Enthusiastic Consent", cat: "consent", desc: "强调积极愿意、参与和舒适的同意理念。", note: "它不是要求夸张表达，而是提醒关系中应关注想要，不只是没拒绝。" },
  { zh: "沉默不是同意", en: "Silence Is Not Consent", cat: "consent", desc: "不能把不说话、僵住、顺从或没有反抗解释为同意。", note: "压力、恐惧、创伤反应或权力差异都可能让人无法明确拒绝。" },
  { zh: "边界", en: "Boundary", cat: "consent", desc: "个体对身体、情感、时间、隐私和关系承诺的可接受范围。", note: "边界需要被表达、倾听和尊重；反复试探边界本身可能构成压力。" },
  { zh: "权力差异", en: "Power Imbalance", cat: "consent", desc: "年龄、职位、经济、依赖、社群地位或信息掌握上的不对等。", note: "权力差异不必然取消关系，但会显著影响自由表达同意或拒绝的能力。" },
  { zh: "胁迫", en: "Coercion", cat: "consent", desc: "通过威胁、施压、羞辱、反复纠缠或资源控制迫使他人让步。", note: "在胁迫下作出的同意不是真正同意。" },
  { zh: "事前协商", en: "Negotiation", cat: "consent", desc: "在亲密互动前讨论偏好、禁区、风险、保护措施和退出方式。", note: "它常见于 BDSM，也适用于任何需要明确边界的亲密关系。" },
  { zh: "安全词", en: "Safeword", cat: "consent", desc: "预先约定的停止或减弱互动强度的信号。", note: "安全词只有在所有人都尊重它时才有效；不能替代持续观察和沟通。" },
  { zh: "交通灯系统", en: "Traffic Light System", cat: "consent", desc: "用绿、黄、红等信号表达继续、放慢或停止的沟通方式。", note: "它有助于降低表达难度，但仍需结合普通语言和身体反应。" },
  { zh: "事后照护", en: "Aftercare", cat: "consent", desc: "亲密或强烈体验后进行的安抚、确认、清理、陪伴或复盘。", note: "它不只属于 BDSM，也可用于任何情绪或身体强度较高的互动后。" },
  { zh: "隐私同意", en: "Privacy Consent", cat: "consent", desc: "分享姓名、身体信息、照片、聊天记录或性健康信息前取得明确许可。", note: "亲密关系并不自动授予传播他人隐私的权利。" },
  { zh: "性骚扰", en: "Sexual Harassment", cat: "consent", desc: "具有性意味且不受欢迎的言语、行为、图像、凝视或权力施压。", note: "它可以发生在线上、职场、学校、家庭和公共空间。" },
  { zh: "性侵害", en: "Sexual Assault", cat: "consent", desc: "未经同意实施的性接触或性行为，具体法律定义因地区而异。", note: "幸存者反应各不相同；支持时应相信、保护安全并提供选择。" },
  { zh: "创伤反应", en: "Trauma Response", cat: "consent", desc: "经历威胁或伤害时出现的战斗、逃跑、僵住、讨好或解离等反应。", note: "僵住或讨好不是同意，也不是责任归属。" },
  { zh: "性传播感染", en: "Sexually Transmitted Infection / STI", cat: "health", aliases: "性病、STD", desc: "可通过性接触或相关体液、皮肤黏膜接触传播的感染。", note: "STI 比 STD 更强调感染可无症状；用词应减少羞辱。" },
  { zh: "HIV", en: "Human Immunodeficiency Virus", cat: "health", desc: "攻击免疫系统的病毒，未经治疗可能发展为 AIDS。", note: "现代治疗可显著控制病毒载量；HIV 状态不应成为污名标签。" },
  { zh: "AIDS", en: "Acquired Immunodeficiency Syndrome", cat: "health", aliases: "艾滋病", desc: "HIV 感染晚期可能出现的免疫缺陷综合征。", note: "HIV 感染者不一定处于 AIDS 阶段，二者不能混用。" },
  { zh: "HPV", en: "Human Papillomavirus", cat: "health", aliases: "人乳头瘤病毒", desc: "一类常见病毒，部分类型与生殖器疣或宫颈等癌症风险相关。", note: "疫苗和筛查可降低相关风险，感染本身不代表道德问题。" },
  { zh: "HSV", en: "Herpes Simplex Virus", cat: "health", aliases: "单纯疱疹病毒", desc: "可引起口唇或生殖器疱疹的病毒，有 HSV-1 与 HSV-2 等类型。", note: "它很常见，管理重点是症状、传播风险和伴侣沟通。" },
  { zh: "梅毒", en: "Syphilis", cat: "health", desc: "由梅毒螺旋体引起的细菌感染，可分阶段影响身体多个系统。", note: "可检测、可治疗；疑似暴露或症状应及时筛查。" },
  { zh: "淋病", en: "Gonorrhea", cat: "health", desc: "由淋病奈瑟菌引起的细菌感染，可影响生殖道、直肠或咽喉等部位。", note: "抗药性是公共卫生关注点，应按医嘱完成治疗并通知相关伴侣。" },
  { zh: "衣原体感染", en: "Chlamydia", cat: "health", desc: "常见细菌性 STI，很多人没有明显症状。", note: "未治疗可能带来盆腔炎等风险，筛查比等症状更可靠。" },
  { zh: "滴虫病", en: "Trichomoniasis", cat: "health", desc: "由滴虫引起的可传播感染，可导致分泌物变化、刺激或无症状。", note: "伴侣同步检测和治疗有助于减少反复感染。" },
  { zh: "PrEP", en: "Pre-exposure Prophylaxis", cat: "health", aliases: "暴露前预防", desc: "HIV 阴性者在可能暴露前使用药物来降低感染风险的预防方式。", note: "是否适合需咨询医疗人员，并配合检测和随访。" },
  { zh: "PEP", en: "Post-exposure Prophylaxis", cat: "health", aliases: "暴露后预防", desc: "可能暴露 HIV 后尽快开始的短期药物预防方案。", note: "它有时间窗口，疑似暴露后应尽快联系医疗机构。" },
  { zh: "安全套", en: "Condom", cat: "health", aliases: "避孕套", desc: "覆盖阴茎或内部通道的屏障工具，可降低部分 STI 和妊娠风险。", note: "正确保存、合适尺寸和全程使用会影响效果。" },
  { zh: "口腔膜", en: "Dental Dam", cat: "health", aliases: "口交膜", desc: "用于口腔与外阴或肛门之间的屏障工具。", note: "它可降低部分感染风险，尤其适用于口腔接触相关情境。" },
  { zh: "润滑剂", en: "Lubricant", cat: "health", aliases: "润滑液", desc: "用于减少摩擦、提升舒适度并降低破损或疼痛风险的产品。", note: "不同材质屏障工具适配的润滑剂不同，需查看产品说明。" },
  { zh: "筛查", en: "Screening", cat: "health", desc: "在没有症状时通过检测发现感染或健康风险。", note: "有性经历的人可按自身风险和当地指南了解筛查频率。" },
  { zh: "窗口期", en: "Window Period", cat: "health", desc: "从感染到检测能可靠检出的时间间隔。", note: "不同感染和检测方式窗口期不同，过早检测可能需要复查。" },
  { zh: "无症状感染", en: "Asymptomatic Infection", cat: "health", desc: "感染存在但没有明显症状的状态。", note: "没有症状不等于没有感染或没有传播风险。" },
  { zh: "伴侣告知", en: "Partner Notification", cat: "health", desc: "发现 STI 后通知可能暴露的性伴，以便其检测和治疗。", note: "方式应兼顾真实信息、安全和隐私保护。" },
  { zh: "疫苗", en: "Vaccine", cat: "health", desc: "通过免疫预防某些感染的公共卫生工具，如 HPV 或乙肝疫苗。", note: "接种建议因年龄、地区和健康状况而异。" },
  { zh: "尿路感染", en: "Urinary Tract Infection / UTI", cat: "health", desc: "泌尿系统感染，可能与性活动后刺激或细菌进入尿道有关。", note: "它不是 STI，但症状可能与其他问题混淆，反复或严重时应就医。" },
  { zh: "细菌性阴道病", en: "Bacterial Vaginosis / BV", cat: "health", desc: "阴道菌群失衡相关状况，可能出现气味或分泌物变化。", note: "它不等同于不干净，过度清洗反而可能加重问题。" },
  { zh: "念珠菌感染", en: "Yeast Infection", cat: "health", aliases: "霉菌性阴道炎", desc: "念珠菌过度生长导致的瘙痒、刺激或分泌物变化。", note: "症状相似的状况很多，反复发作应接受医疗评估。" },

  { zh: "避孕", en: "Contraception", cat: "reproduction", desc: "降低妊娠可能性的工具、药物、程序或行为安排。", note: "避孕选择应结合健康状况、可及性、伴侣协商和个人偏好。" },
  { zh: "紧急避孕", en: "Emergency Contraception", cat: "reproduction", desc: "无保护性行为或避孕失败后用于降低妊娠风险的方法。", note: "它不同于药物流产，且通常越早使用越有效；具体方案需看当地资源。" },
  { zh: "口服避孕药", en: "Oral Contraceptive Pill", cat: "reproduction", aliases: "短效避孕药", desc: "通过激素调节排卵或宫颈黏液等机制降低妊娠风险的药物。", note: "不同配方适应证和禁忌不同，应咨询专业人员。" },
  { zh: "宫内节育器", en: "Intrauterine Device / IUD", cat: "reproduction", aliases: "节育环", desc: "放置在子宫内的长效可逆避孕方式，有含铜和含激素等类型。", note: "它需要专业放置和取出，适合与否取决于个体情况。" },
  { zh: "皮下埋植", en: "Contraceptive Implant", cat: "reproduction", desc: "置入皮下、缓慢释放激素的长效可逆避孕方式。", note: "可能影响出血模式，放置和取出需由专业人员完成。" },
  { zh: "屏障避孕", en: "Barrier Method", cat: "reproduction", desc: "通过物理屏障阻隔精子或体液接触的方法，如安全套、口腔膜等。", note: "部分屏障方法同时可降低 STI 风险，这是其重要优势。" },
  { zh: "杀精剂", en: "Spermicide", cat: "reproduction", desc: "用于降低精子活性的化学制剂，常与其他屏障方法配合。", note: "单独使用效果有限，且可能刺激黏膜。" },
  { zh: "体外排精", en: "Withdrawal", cat: "reproduction", aliases: "外射", desc: "射精前退出以降低精液进入阴道可能性的行为方式。", note: "实际失败率较高，也不能预防 STI。" },
  { zh: "易孕期", en: "Fertile Window", cat: "reproduction", desc: "月经周期中妊娠可能性较高的时间段。", note: "周期不规律、压力和疾病都会影响预测准确性。" },
  { zh: "排卵", en: "Ovulation", cat: "reproduction", desc: "卵巢释放卵子的过程。", note: "排卵相关知识可用于备孕或避孕，但不应作为唯一避孕方法。" },
  { zh: "妊娠", en: "Pregnancy", cat: "reproduction", aliases: "怀孕", desc: "受精卵着床并在体内发育的状态。", note: "妊娠相关选择涉及身体、关系、医疗、经济和法律因素。" },
  { zh: "流产", en: "Abortion / Miscarriage", cat: "reproduction", desc: "妊娠终止，可指自然流产，也可指医学或手术方式终止妊娠。", note: "中文语境需说明是自然流产还是人工流产，避免混淆和污名。" },
  { zh: "生育自主", en: "Reproductive Autonomy", cat: "reproduction", desc: "个体对是否、何时以及如何生育拥有知情和自主决定权。", note: "它包括想生育、不想生育、延后生育和获得相关医疗服务的权利。" },
  { zh: "生殖正义", en: "Reproductive Justice", cat: "reproduction", desc: "把生育选择与种族、阶级、残障、移民、性别和医疗可及性联系起来的权利框架。", note: "它不仅谈选择，还谈人是否真的有资源实现选择。" },
  { zh: "不孕不育", en: "Infertility", cat: "reproduction", desc: "在一定时间内尝试妊娠未成功的医学与生活处境。", note: "它可能由多方因素造成，不应自动归咎某一方。" },
  { zh: "备孕", en: "Preconception Planning", cat: "reproduction", desc: "为未来妊娠做身体检查、用药评估、营养、伴侣沟通和生活安排。", note: "备孕也应包含遗传、心理、经济和照护资源的现实讨论。" },
  { zh: "辅助生殖", en: "Assisted Reproductive Technology / ART", cat: "reproduction", desc: "通过医学技术帮助受孕或保存生育可能性的方式，如体外受精等。", note: "可及性、费用、法律亲权和伦理问题会因地区差异很大。" },
  { zh: "生育保存", en: "Fertility Preservation", cat: "reproduction", aliases: "生育力保存", desc: "在医疗治疗、年龄规划或性别肯定护理前保存精子、卵子、胚胎或组织的选择。", note: "是否保存取决于资源、意愿、时间和医疗条件，不是每个人都需要或负担得起。" },
  { zh: "亲密关系", en: "Intimate Relationship", cat: "relationships", desc: "包含情感支持、身体亲近、性、承诺或共同生活等元素的关系。", note: "亲密关系不一定包含性，也不一定是单偶或浪漫关系。" },
  { zh: "性沟通", en: "Sexual Communication", cat: "relationships", desc: "围绕欲望、边界、避孕、感染风险、偏好和不适进行的沟通。", note: "健康沟通不是一次谈完，而是随关系和身体状态持续更新。" },
  { zh: "欲望不匹配", en: "Desire Mismatch", cat: "relationships", desc: "关系中的人对性频率、方式或优先级有不同期待。", note: "它需要协商而非施压；任何一方都不应被迫满足另一方。" },
  { zh: "关系协议", en: "Relationship Agreement", cat: "relationships", desc: "关系参与者对排他性、告知、边界、照护和风险管理的约定。", note: "协议应可复盘和更新，而不是用来长期压住不满。" },
  { zh: "排他关系", en: "Exclusive Relationship", cat: "relationships", aliases: "单偶关系", desc: "参与者约定在性、浪漫或伴侣承诺上只与彼此维持特定连接。", note: "排他范围需要说清楚，例如是否包括暧昧、线上互动或性幻想。" },
  { zh: "开放式关系", en: "Open Relationship", cat: "relationships", aliases: "开放关系、开放式伴侣关系、开放伴侣关系", desc: "在相关伴侣知情同意并协商边界的前提下，允许关系中的人和关系外的人发展性、浪漫或其他亲密互动的一类关系安排。具体开放范围、告知方式和边界会因关系而异。", note: "开放式关系不等于出轨或隐瞒，也不必然等同于多元爱；关键在于知情同意、清晰边界、持续沟通和安全实践。" },
  { zh: "多元爱", en: "Polyamory", cat: "relationships", aliases: "多边恋、多元伴侣、多重伴侣、Polyamorous", desc: "在所有相关者知情同意的前提下，与多位伴侣建立亲密、浪漫或伴侣关系的实践或取向。它强调坦诚、沟通与共识。", note: "多元爱以知情同意为前提，既不同于欺骗或出轨，也不等同于某一种性取向。" },
  { zh: "FWB", en: "Friends With Benefits", cat: "relationships", aliases: "有性关系的朋友、有利益的朋友、有福利的朋友、性伴朋友", desc: "指在友谊基础上建立的非排他、非浪漫承诺的性关系或性接触安排。双方通常维持朋友关系，同时定期或不定期发生性行为，彼此不要求恋爱关系或排他忠诚。", note: "FWB 描述的是关系契约和性行为安排，不等于“无感情”——双方仍可能有亲密、信任和情感支持。是否安全、知情、尊重边界才是判断健康与否的关键。" },
  { zh: "单次性接触", en: "Casual Sex", cat: "relationships", aliases: "休闲性行为", desc: "不以长期伴侣关系为前提的性接触。", note: "评价重点仍是同意、诚实、保护措施和情感后果，而非关系长短。" },
  { zh: "长期伴侣", en: "Long-term Partner", cat: "relationships", desc: "在较长时间内共享亲密、生活、照护或承诺的人。", note: "长期关系并不自动消除同意、避孕、感染沟通或个人边界。" },
  { zh: "忠诚", en: "Fidelity", cat: "relationships", desc: "按关系约定维持承诺、诚实和边界的实践。", note: "忠诚的具体含义取决于关系协议，而不只等于单一模式。" },
  { zh: "出轨", en: "Infidelity", cat: "relationships", desc: "违反关系中关于性、浪漫、隐瞒或承诺的约定。", note: "不同关系对出轨边界定义不同，模糊处需要提前沟通。" },
  { zh: "嫉妒", en: "Jealousy", cat: "relationships", desc: "面对潜在失去、比较或关系威胁时出现的情绪。", note: "嫉妒需要被理解和沟通，但不能成为控制他人的理由。" },
  { zh: "情绪劳动", en: "Emotional Labor", cat: "relationships", desc: "在关系中承担安抚、解释、协调和维护氛围的情感工作。", note: "长期不平衡的情绪劳动会消耗关系，也会影响性欲和亲密感。" },
  { zh: "伴侣照护", en: "Partner Care", cat: "relationships", desc: "在亲密关系中对身体、情绪、健康和生活压力的互相支持。", note: "照护不应变成单方面牺牲或控制。" },
  { zh: "约会暴力", en: "Dating Violence", cat: "relationships", desc: "约会或亲密关系中的身体、性、情绪、经济或数字控制与伤害。", note: "暴力不只发生在婚姻或同居关系中，也不只表现为肢体伤害。" },
  { zh: "关系升级阶梯", en: "Relationship Escalator", cat: "relationships", desc: "默认关系应从约会一路走向排他、同居、婚姻和生育的社会脚本。", note: "有些人会选择不同关系路径，这并不自动意味着关系更浅。" },
  { zh: "性偏好清单", en: "Yes / No / Maybe List", cat: "relationships", aliases: "愿意/不愿意/也许清单", desc: "把可能的亲密活动按愿意、不愿意、也许分类，用于沟通边界和兴趣。", note: "清单只是谈话工具，不是要求兑现的合同。" },
  { zh: "BDSM", en: "Bondage, Discipline, Dominance, Submission, Sadism, Masochism", cat: "relationships", desc: "围绕束缚、纪律、支配、臣服、施虐和受虐等元素的知情同意实践或兴趣。", note: "健康 BDSM 强调协商、同意、安全和照护，不等同于暴力或虐待。" },
  { zh: "Kink", en: "Kink", cat: "relationships", aliases: "非常规性偏好", desc: "相对于主流性脚本而言较非典型的性兴趣、幻想或实践。", note: "Kink 是否健康取决于同意、风险管理和是否造成困扰，而非是否常见。" },
  { zh: "香草性爱", en: "Vanilla Sex", cat: "relationships", desc: "社群中常用来指不包含明显 BDSM 或 kink 元素的性实践。", note: "这个词是描述性说法，不应被用来贬低任何人的偏好。" },
  { zh: "插入式性行为", en: "Penetrative Sex", cat: "relationships", desc: "涉及身体部位或工具进入阴道、肛门或口腔等部位的性行为类别。", note: "插入不是性行为的唯一形式，也不应被视为亲密程度的唯一标准。" },
  { zh: "非插入式性行为", en: "Non-penetrative Sex", cat: "relationships", desc: "不以插入为中心的性接触或亲密实践。", note: "非插入式也可能涉及感染风险和同意边界，不能简单等于无风险。" },
  { zh: "性后复盘", en: "Sexual Debrief", cat: "relationships", desc: "亲密互动后讨论感受、边界、保护措施和下次调整的沟通。", note: "复盘的目标是理解和改进，不是评分或羞辱。" },

  { zh: "性学研究", en: "Sex Research", cat: "research", desc: "通过调查、实验、访谈、临床观察或历史分析研究性相关现象。", note: "由于隐私和污名，性研究尤其需要重视伦理与样本偏差。" },
  { zh: "金赛量表", en: "Kinsey Scale", cat: "research", desc: "用 0 到 6 描述异性/同性性吸引或行为连续谱的经典量表。", note: "它有历史意义，但不能穷尽无性恋、泛性恋、浪漫取向或性别多元经验。" },
  { zh: "马斯特斯与约翰逊", en: "Masters and Johnson", cat: "research", desc: "20 世纪重要性反应研究者，提出了影响深远的性反应周期模型。", note: "其研究开创性很强，也受到样本和模型线性化的限制。" },
  { zh: "海特报告", en: "The Hite Report", cat: "research", desc: "基于大量问卷回收整理的性经验报告，尤其影响了对女性性经验的公共讨论。", note: "它扩大了经验可见性，同时也常被讨论样本代表性问题。" },
  { zh: "匿名调查", en: "Anonymous Survey", cat: "research", desc: "不收集可识别身份信息的调查方式。", note: "匿名能降低羞耻和报复压力，但仍需清楚说明数据用途。" },
  { zh: "质性访谈", en: "Qualitative Interview", cat: "research", desc: "通过深入访谈理解个人经验、意义和语境的研究方法。", note: "它不追求用少数故事代表所有人，而是揭示复杂经验。" },
  { zh: "便利样本", en: "Convenience Sample", cat: "research", desc: "研究者从容易接触的人群中招募样本。", note: "性研究常依赖便利样本，因此结论外推要谨慎。" },
  { zh: "社会赞许偏差", en: "Social Desirability Bias", cat: "research", desc: "受访者倾向给出更符合社会期待或更不丢脸的答案。", note: "涉及性经历、频率和偏好时，这种偏差尤其明显。" },
  { zh: "回忆偏差", en: "Recall Bias", cat: "research", desc: "人们回忆过去经历时出现遗漏、重构或时间估计错误。", note: "性经历研究中，记忆偏差会影响频率、年龄和细节报告。" },
  { zh: "发表偏差", en: "Publication Bias", cat: "research", desc: "显著、惊人或符合期待的结果更容易发表的倾向。", note: "读到性研究新闻时，应警惕夸张标题和单篇研究过度推广。" },
  { zh: "病理化", en: "Pathologization", cat: "research", desc: "把身份、欲望或非主流经验解释成疾病或异常。", note: "性学史中许多身份曾被病理化，今天应谨慎区分困扰和多样性。" },
  { zh: "去病理化", en: "Depathologization", cat: "research", desc: "把不造成伤害或困扰的身份与多样性经验从疾病框架中移出。", note: "去病理化不等于否认人可能需要医疗或心理支持。" },
  { zh: "公共卫生", en: "Public Health", cat: "research", desc: "从人群层面降低风险、提升健康和服务可及性的实践。", note: "性健康公共卫生应减少污名，而不是用恐惧阻止求助。" },
  { zh: "危害降低", en: "Harm Reduction", cat: "research", desc: "承认人们会有不同选择，并通过信息、工具和服务降低风险的策略。", note: "它不是纵容风险，而是把现实中的安全和尊严放在优先位置。" },
  { zh: "色情素养", en: "Porn Literacy", cat: "research", desc: "理解成人色情内容是媒介产品，能辨认表演、剪辑、商业动机和不现实脚本的能力。", note: "它不要求观看此类内容，而是帮助区分媒介想象和现实同意、身体、关系。" },
  { zh: "道德恐慌", en: "Moral Panic", cat: "research", desc: "媒体、政治和公众围绕某类群体或行为形成夸大的威胁叙事。", note: "道德恐慌常把复杂社会焦虑集中投射到替罪羊身上。" },
  { zh: "性工作", en: "Sex Work", cat: "research", desc: "以性相关服务、表演或劳动换取报酬的总称，具体法律地位和处境差异极大。", note: "讨论时应区分自愿劳动、剥削、贩运和暴力，不把所有人混为一种叙事。" },
  { zh: "法定同意年龄", en: "Age of Consent", cat: "research", desc: "法律规定个人可有效同意某些性行为的最低年龄。", note: "具体规定因地区而异；本站不提供规避法律或接触未成年人的建议。" }
];

const categoryIntros = {
  foundations: "这类词用于搭建性学讨论的基础框架，重点在于区分健康、身份、行为、权利和伦理，而不是把性压缩成单一含义。",
  body: "这类词描述身体结构与生理过程。身体差异很常见，准确用词能帮助就医和沟通，也能减少羞耻和误解。",
  response: "这类词关注欲望、唤起、愉悦和困难。性反应会受身体、心理、关系和环境共同影响，不宜用单一标准衡量。",
  consent: "这类词围绕自愿、知情、具体和可撤回的同意。关系身份、过去经验和身体反应都不能替代当下明确沟通。",
  health: "这类词涉及感染、筛查、屏障保护和护理。它们应放在公共卫生和医疗支持语境中理解，而不是道德评价。",
  reproduction: "这类词关注避孕、生殖选择和妊娠相关议题。不同人的需求、风险和资源差异很大，生育自主是核心线索。",
  relationships: "这类词描述亲密关系中的实践、协议和沟通方式。判断重点是同意、诚实、照护和风险管理，而不是是否符合唯一脚本。",
  research: "这类词帮助理解性学知识如何被生产和传播。读研究时要留意样本、偏差、伦理和社会语境。"
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
