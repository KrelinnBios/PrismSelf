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
  { zh: "性 / 性存在", en: "Sexuality", cat: "foundations", aliases: "广义的性、性经验", desc: "贯穿生命历程、涵盖性、性别身份与角色、性取向、情欲、愉悦、亲密和生殖的综合维度。", note: "sexuality 受生物、心理、社会、文化、法律、历史等因素交互影响；这些维度不必全部被体验或表达，也不同于 SOGIESC 中较窄的 sex。" },
  { zh: "性健康", en: "Sexual Health", cat: "foundations", desc: "与性相关的身体、情感、心理与社会福祉状态，而不只是没有疾病或功能障碍。", note: "它强调安全、尊重、知情选择和不受强迫、歧视与暴力影响。" },
  { zh: "性权利", en: "Sexual Rights", cat: "foundations", desc: "围绕身体自主、信息获取、健康服务、隐私、表达，以及免于暴力、胁迫和歧视等议题的权利框架。", note: "WHO 提供的是工作定义与持续讨论框架，并非一套独立统一法典；具体可诉权利依国际条约、国内法和司法辖区而异。" },
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
  { zh: "性主体性", en: "Sexual Agency", cat: "foundations", desc: "个体理解自身需要、欲望和边界，并在具体关系与社会条件中作出性相关选择、表达意愿和寻求支持的能力。", note: "主体性不等于独自承担全部风险；安全、资源、信息和不受胁迫的环境都会影响选择空间。" },
  { zh: "性自我概念", en: "Sexual Self-concept", cat: "foundations", desc: "个体对自己的欲望、吸引、身体感受、经验、价值观和亲密边界所形成的整体理解。", note: "它可以随着经验和自我认识变化，不能简单等同于性取向或某一次行为。" },
  { zh: "性社会化", en: "Sexual Socialization", cat: "foundations", desc: "个体在家庭、同伴、教育、媒体、宗教和制度中学习有关身体、关系、欲望、性别与行为规范的过程。", note: "社会化影响人们的期待，却不决定每个人必须怎样生活；反思和重新协商也是可能的。" },
  { zh: "性健康促进", en: "Sexual Health Promotion", cat: "foundations", desc: "通过教育、服务、政策和支持环境，提升人们获得信息、保护健康、表达意愿和建立安全关系的社会公共卫生实践。", note: "它不仅减少疾病和风险，也关注愉悦、尊严、平等、可及性和免受暴力。" },
  { zh: "性风险知觉", en: "Sexual Risk Perception", cat: "foundations", desc: "个体对亲密互动可能带来的感染、妊娠、伤害、隐私或情感风险的主观判断。", note: "主观感觉可能与实际风险不一致，因此仍需结合可靠信息、具体情境和专业建议。" },
  { zh: "性决策", en: "Sexual Decision-making", cat: "foundations", desc: "在亲密互动中综合考虑意愿、同意、边界、保护措施、健康状况和可能后果后作出选择的过程。", note: "好的决策不要求预见所有结果，而是保留提问、暂停、改变主意和寻求帮助的空间。" },
  { zh: "性需求", en: "Sexual Needs", cat: "foundations", desc: "个体可能在身体舒适、亲密连接、愉悦、表达、信息或关系沟通方面感受到的需要。", note: "性需求因人而异，也可能包含不想发生性行为的需要；任何需求都不能成为越过他人边界的理由。" },

  { zh: "外阴", en: "Vulva", cat: "body", desc: "外部生殖器区域的总称，包括阴阜、大阴唇、小阴唇、阴蒂、前庭、尿道口和阴道口等结构。", note: "日常常被误称为阴道；准确用词有助于健康沟通。" },
  { zh: "阴蒂", en: "Clitoris", cat: "body", desc: "富含神经末梢、与性愉悦高度相关的身体结构，外露部分只是整体的一小部分。", note: "理解它有助于避免把性愉悦简化为单一插入脚本。" },
  { zh: "阴道", en: "Vagina", cat: "body", desc: "连接外阴与子宫颈的肌性通道，具有伸缩和自我清洁能力。", note: "不适、异常分泌物或疼痛应结合医疗建议，不宜靠网络自诊。" },
  { zh: "子宫", en: "Uterus", cat: "body", desc: "部分人拥有的生殖器官，与月经、妊娠和分娩相关。", note: "是否拥有子宫不决定一个人的性别身份或社会身份。" },
  { zh: "宫颈", en: "Cervix", cat: "body", aliases: "子宫颈", desc: "子宫下端连接阴道的部分，是宫颈筛查和 HPV 相关健康议题的重要部位。", note: "有宫颈者可按当地指南了解筛查建议。" },
  { zh: "阴茎", en: "Penis", cat: "body", desc: "外部生殖器之一，参与排尿、勃起和部分性行为。", note: "尺寸、形状和勃起表现存在自然差异，不应被单一标准羞辱。" },
  { zh: "睾丸", en: "Testes", cat: "body", aliases: "性腺", desc: "产生精子和部分性激素的身体组织。", note: "疼痛、肿块或突发变化应及时就医。" },
  { zh: "前列腺", en: "Prostate", cat: "body", desc: "位于膀胱下方、参与精液成分生成的腺体。", note: "它可能与排尿、疼痛和部分性体验相关，需区分健康信息和玩笑化表达。" },
  { zh: "会阴", en: "Perineum", cat: "body", desc: "外生殖器与肛门之间的区域，包含皮肤、结缔组织、肌肉和神经等结构。", note: "它可能在性接触、分娩、手术或创伤中受到牵拉或损伤；持续疼痛、肿胀或伤口应接受医疗评估。" },
  { zh: "盆底肌", en: "Pelvic Floor Muscles", cat: "body", desc: "支撑盆腔器官并参与排尿、排便和性功能的一组肌肉。", note: "过弱或过紧都可能影响舒适度，训练或放松应根据具体情况进行。" },
  { zh: "乳房", en: "Breasts", cat: "body", desc: "胸部组织，可能与哺乳、身体形象、性愉悦和性别表达相关。", note: "乳房健康与性别身份无必然对应；异常肿块或变化应就医评估。" },
  { zh: "勃起", en: "Erection", cat: "body", desc: "海绵体充血导致阴茎、阴蒂或相关组织变硬或膨胀的生理反应。", note: "勃起可由性刺激、睡眠、压力或身体状态触发，不必然代表同意或欲望。" },
  { zh: "润滑", en: "Lubrication", cat: "body", desc: "身体或外用润滑剂减少摩擦、提高舒适度的过程。", note: "自然润滑程度受激素、压力、药物和情境影响，不能简单当作欲望指标。" },
  { zh: "射精", en: "Ejaculation", cat: "body", desc: "在性反应中，精液或特定腺体分泌液经尿道排出的过程。", note: "射精与高潮常相关但不等同；不同身体的相关液体与机制并不相同，应在医学描述中具体说明。" },
  { zh: "阴道分泌物", en: "Vaginal Discharge", cat: "body", desc: "阴道和宫颈产生的分泌物，受周期、激素、感染和健康状态影响。", note: "颜色、气味、疼痛或瘙痒异常变化可提示需要医疗评估。" },
  { zh: "月经周期", en: "Menstrual Cycle", cat: "body", desc: "由激素变化驱动的周期性过程，可能包括排卵、子宫内膜变化和月经。", note: "周期长度和体验差异很大；严重疼痛或异常出血不应被简单忍耐。" },
  { zh: "性激素", en: "Sex Hormones", cat: "body", desc: "与青春期发育、第二性征、身体功能和部分医疗过渡相关的激素，如雌激素、睾酮和孕激素等。", note: "不同人的激素水平本来就存在范围差异，不能用单一数值定义某人的性别。" },
  { zh: "青春期发育", en: "Pubertal Development", cat: "body", desc: "身体在激素作用下出现第二性征、身高、声音、毛发、月经或生殖功能等变化的阶段。", note: "对部分跨性别、非二元和间性青少年来说，青春期变化可能带来额外压力或医疗支持需求。" },
  { zh: "更年期", en: "Menopause", cat: "body", desc: "月经停止及其前后激素变化相关阶段，可能伴随潮热、睡眠、情绪或性舒适度变化。", note: "它是生命历程的一部分，但不适症状可以寻求医疗支持。" },
  { zh: "性发育差异", en: "Differences of Sex Development / DSD", cat: "body", aliases: "性发育多样性、间性特征、性发育障碍（医学旧称/需谨慎）", desc: "描述染色体、性腺、激素、第一或第二性征等性别特征发育与典型二元标准不完全一致的情况。", note: "DSD 在医学中也曾写作 Disorders of Sex Development；涉及具体个体时，优先尊重其是否使用“间性”或 DSD 等自我称谓。" },
  { zh: "尿道", en: "Urethra", cat: "body", desc: "把尿液从膀胱排出体外的通道，开口位置和长度因身体结构而异。", note: "尿道与阴道或肛门是不同结构；排尿疼痛、血尿或反复不适需要医疗评估。" },
  { zh: "阴囊", en: "Scrotum", cat: "body", desc: "包裹并支撑睾丸的皮肤和组织结构，能够通过位置变化帮助调节局部温度。", note: "左右大小略有差异很常见；突发剧烈疼痛、肿胀或肿块应尽快就医。" },
  { zh: "精子", en: "Sperm", cat: "body", desc: "通常由睾丸产生、携带一半遗传物质的生殖细胞，需与卵细胞结合才可能形成受精过程。", note: "精子数量、活动力和形态会受年龄、健康、药物与环境影响，不能据单一指标评价一个人的性别或价值。" },
  { zh: "卵母细胞", en: "Oocyte", cat: "body", aliases: "卵细胞、卵子（日常用语）", desc: "在卵巢内发育的生殖细胞；排卵通常释放次级卵母细胞，它在完成减数分裂后才形成成熟卵细胞。", note: "日常常笼统称为卵子；排卵和生育能力会受到周期、年龄、健康与医疗因素影响。" },
  { zh: "子宫内膜", en: "Endometrium", cat: "body", desc: "覆盖子宫内侧的组织，受到激素周期影响，会增厚并在未妊娠时随月经排出部分组织。", note: "异常出血、持续疼痛或周期明显改变不应只靠术语解释，应结合个人情况咨询医疗人员。" },
  { zh: "性欲", en: "Libido / Sexual Desire", cat: "response", desc: "对性亲密、性刺激或性表达的欲望或兴趣。", note: "性欲高低会随压力、关系、药物、健康、激素和生活阶段变化。" },
  { zh: "性吸引", en: "Sexual Attraction", cat: "response", desc: "对特定对象产生、被当事人体验为性的吸引；可能伴随幻想、唤起或亲近欲望，但不必然带来行为意愿。", note: "性吸引不等于一般性欲、身体唤起、幻想题材、行为经历或同意；任何吸引都不能替代具体、当下的同意。" },
  { zh: "性唤起", en: "Sexual Arousal", cat: "response", desc: "身体和心理被性刺激激活的状态，可能包括充血、润滑、心率变化或注意聚焦。", note: "身体唤起不等于同意，也不必然等于主观想要。" },
  { zh: "性反应周期", en: "Sexual Response Cycle", cat: "response", desc: "描述欲望、唤起、平台、高潮和消退等阶段的经典模型。", note: "它是模型而非剧本；许多人的体验并不按线性顺序发生。" },
  { zh: "自发性欲", en: "Spontaneous Desire", cat: "response", desc: "在明显亲密刺激或互动开始前，就已经出现的性亲密兴趣或欲望。", note: "它常被媒体当作默认模式，但反应性欲、低频欲望或不经历性欲同样可能是一个人的真实经验。" },
  { zh: "反应性欲", en: "Responsive Desire", cat: "response", desc: "在安全、亲密、身体舒适或被唤起后逐渐出现的性欲。", note: "反应性欲常见且正常，不代表不够爱伴侣或有问题。" },
  { zh: "欲望差异", en: "Desire Discrepancy", cat: "response", desc: "关系中的人对性亲密频率、方式或重要性的期待不同。", note: "它是常见关系议题，重点在协商和照护，而不是找出谁正常。" },
  { zh: "性愉悦", en: "Sexual Pleasure", cat: "response", desc: "与性亲密、身体触碰、幻想或关系连接相关的愉悦体验。", note: "性健康讨论不应只关注风险，也应承认愉悦和尊重的价值。" },
  { zh: "性高潮", en: "Orgasm", cat: "response", desc: "高度性唤起后可能出现的强烈愉悦、肌肉收缩和释放体验。", note: "高潮不是性体验必须达成的指标，也不能替代同意与舒适。" },
  { zh: "高潮困难", en: "Orgasm Difficulty", cat: "response", aliases: "高潮障碍", desc: "在有足够刺激和意愿时仍长期难以达到高潮或因此困扰。", note: "原因可能涉及压力、药物、身体状态、创伤或关系沟通，可寻求专业支持。" },
  { zh: "勃起困难", en: "Erectile Difficulty", cat: "response", aliases: "勃起功能障碍、ED", desc: "难以获得或维持足以满足自身性目标的勃起，并因此造成困扰。", note: "它可能与血管、神经、药物、压力和关系有关，不是人格或男性气质评价。" },
  { zh: "性交疼痛", en: "Dyspareunia", cat: "response", desc: "在性接触、插入或其前后反复出现的生殖器或盆腔疼痛体验，可能表现为刺痛、灼痛、紧绷或深部疼痛。", note: "疼痛不是必须忍耐的部分，原因可能涉及感染、激素、盆底、创伤或关系压力，应根据情况寻求医学、盆底或创伤知情支持。" },
  { zh: "阴道痉挛", en: "Vaginismus", cat: "response", desc: "插入相关情境中出现盆底肌不自主收缩、疼痛、恐惧或插入困难的临床与日常用语。", note: "DSM-5-TR 已把相关表现纳入生殖器—盆腔痛/插入障碍；症状可能涉及多种机制，需要温和、综合且非羞辱的评估与支持。" },
  { zh: "性厌恶", en: "Sex Aversion", cat: "response", desc: "对某些性情境产生强烈回避、恐惧或不适的描述性用语，也有旧诊断史。", note: "它可能与创伤、压力、身体疼痛或关系处境有关；无性恋、低欲望或不愿发生性行为本身不是需要诊断或强迫克服的问题。" },
  { zh: "性幻想", en: "Sexual Fantasy", cat: "response", desc: "与性、亲密或欲望相关的想象内容。", note: "幻想不等于现实意愿；是否实践仍取决于同意、边界和安全。" },
  { zh: "自慰", en: "Masturbation", cat: "response", aliases: "自我性刺激", desc: "个体通过自我触碰或想象获得性愉悦、释放或身体了解的行为。", note: "在安全和自愿前提下，它通常是常见的性经验，不应被污名化。" },
  { zh: "身体意象", en: "Body Image", cat: "response", desc: "个体如何感受、评价和想象自己的身体。", note: "身体羞耻会影响亲密和性健康，支持性沟通常比评价外貌更重要。" },
  { zh: "表演焦虑", en: "Performance Anxiety", cat: "response", desc: "担心自己在性情境中表现不够好而产生的焦虑。", note: "把性变成考试会削弱亲密感，转向沟通和愉悦常更有帮助。" },
  { zh: "亲密触碰", en: "Intimate Touch", cat: "response", desc: "具有亲密、安抚、连接或性意味的身体接触。", note: "触碰是否舒适取决于具体人、具体部位、具体时间和具体同意。" },
  { zh: "感官边界", en: "Sensory Boundary", cat: "response", desc: "个体对声音、气味、触感、节奏、压力和空间距离的舒适范围。", note: "神经多样性、创伤和身体状态都可能影响感官边界。" },
  { zh: "性功能", en: "Sexual Function", cat: "response", desc: "与欲望、唤起、勃起或润滑、高潮、射精、舒适度和亲密互动相关的身体与心理功能整体。", note: "性功能不是固定表现，也不应只按是否插入或是否达到高潮来衡量；年龄、健康、药物和关系环境都会影响它。" },
  { zh: "性功能困难", en: "Sexual Dysfunction", cat: "response", aliases: "性功能障碍", desc: "在欲望、唤起、勃起或润滑、高潮、射精或疼痛等方面持续遇到困难，并因此感到困扰或影响生活的情况。", note: "它是描述性和临床性的总称，不代表某个人一定有固定诊断；评估应考虑身体、心理、关系和药物因素。" },
  { zh: "性满足", en: "Sexual Satisfaction", cat: "response", desc: "个体对亲密互动、身体体验、关系沟通和自身需要是否得到回应的整体主观评价。", note: "性满足不等于性交频率或高潮次数，安全感、尊重、舒适和能够表达真实感受同样重要。" },
  { zh: "性唤起非一致性", en: "Sexual Arousal Nonconcordance", cat: "response", desc: "主观上是否想要与身体是否出现唤起反应之间不完全一致的现象。", note: "身体反应不等于欲望或同意；同样，缺少明显身体反应也不自动说明没有兴趣。" },
  { zh: "性交后情绪低落", en: "Postcoital Dysphoria", cat: "response", desc: "在自愿且总体满意的性行为后，短时间内出现悲伤、空虚、烦躁或想哭等情绪的体验。", note: "它可能偶发，也可能与压力、激素、关系或个人经历有关；持续困扰时可以寻求专业支持，不必因此责怪自己或伴侣。" },

  { zh: "同意", en: "Consent", cat: "consent", desc: "具备理解和决定能力的人，对具体互动在知情、自愿、具体和可撤回前提下作出的许可。", note: "饮酒不自动等于同意无效，但醉酒、药物、意识或认知状态可能损害决定能力；沉默、关系身份、身体反应和过去经历都不能替代当下同意。" },
  { zh: "亲密知情同意", en: "Informed Consent in Intimacy", cat: "consent", desc: "在了解关键信息、风险、替代选择和退出方式后，对具体亲密互动作出的同意。", note: "它借用知情同意原则讨论亲密互动；研究伦理中的“知情同意”在心理学术语表中另有专门定义。" },
  { zh: "自愿", en: "Voluntary", cat: "consent", desc: "没有威胁、胁迫、操控、报复压力或重大权力压制的选择状态。", note: "没有反抗不等于自愿，尤其在恐惧或权力不对等情境中。" },
  { zh: "可撤回", en: "Revocable", cat: "consent", desc: "已经给出的同意可以在互动前或互动中的任何时刻改变、暂停或收回，而且不需要先证明理由。", note: "一旦有人表示暂停、犹豫或撤回，互动应立刻调整或停止；事后不应因改变主意而责备对方。" },
  { zh: "具体同意", en: "Specific Consent", cat: "consent", desc: "同意只适用于被明确说明的行为、对象、时间和条件。", note: "同意亲吻不等于同意其他行为，同意一次不等于永久同意。" },
  { zh: "热情同意", en: "Enthusiastic Consent", cat: "consent", desc: "强调积极愿意、参与和舒适的同意理念。", note: "它不是要求夸张表达，而是提醒关系中应关注想要，不只是没拒绝。" },
  { zh: "沉默不是同意", en: "Silence Is Not Consent", cat: "consent", desc: "不能把不说话、僵住、顺从或没有反抗解释为同意。", note: "压力、恐惧、创伤反应或权力差异都可能让人无法明确拒绝。" },
  { zh: "边界", en: "Boundary", cat: "consent", desc: "个体对身体、情感、时间、隐私和关系承诺的可接受范围。", note: "边界需要被表达、倾听和尊重；反复试探边界本身可能构成压力。" },
  { zh: "权力差异", en: "Power Imbalance", cat: "consent", desc: "年龄、职位、经济、依赖、社群地位或信息掌握上的不对等。", note: "权力差异不必然取消关系，但会显著影响自由表达同意或拒绝的能力。" },
  { zh: "胁迫", en: "Coercion", cat: "consent", desc: "通过威胁、施压、羞辱、反复纠缠、报复暗示或控制资源，迫使他人在并不自由的情况下让步。", note: "在胁迫下的顺从不能被当作自由同意；权力差异和现实安全风险需要一并考虑。" },
  { zh: "事前协商", en: "Negotiation", cat: "consent", desc: "在亲密互动前讨论偏好、禁区、风险、保护措施和退出方式。", note: "它常见于 BDSM，也适用于任何需要明确边界的亲密关系。" },
  { zh: "安全词", en: "Safeword", cat: "consent", desc: "预先约定的停止或减弱互动强度的信号。", note: "安全词只有在所有人都尊重它时才有效；不能替代持续观察和沟通。" },
  { zh: "交通灯系统", en: "Traffic Light System", cat: "consent", desc: "用绿、黄、红等信号表达继续、放慢或停止的沟通方式。", note: "它有助于降低表达难度，但仍需结合普通语言和身体反应。" },
  { zh: "事后照护", en: "Aftercare", cat: "consent", desc: "亲密或强烈体验后进行的安抚、确认、清理、陪伴或复盘。", note: "它不只属于 BDSM，也可用于任何情绪或身体强度较高的互动后。" },
  { zh: "隐私同意", en: "Privacy Consent", cat: "consent", desc: "分享姓名、身体信息、照片、聊天记录或性健康信息前取得明确许可。", note: "亲密关系并不自动授予传播他人隐私的权利。" },
  { zh: "性骚扰", en: "Sexual Harassment", cat: "consent", desc: "不受欢迎的性意味言语、行为、图像、接触或基于性与性别的骚扰和权力施压。", note: "它可以发生在线上、职场、学校、家庭和公共空间；单一行为是否构成法律责任需结合持续性、权力关系、场景与当地法律判断。" },
  { zh: "性侵害", en: "Sexual Assault", cat: "consent", desc: "未经同意实施的性接触或性行为，具体法律定义因地区而异。", note: "幸存者反应各不相同；支持时应相信、保护安全并提供选择。" },
  { zh: "创伤反应", en: "Trauma Response", cat: "consent", desc: "经历威胁或伤害时出现的战斗、逃跑、僵住、讨好或解离等反应。", note: "僵住或讨好不是同意，也不是责任归属。" },
  { zh: "明确同意", en: "Affirmative Consent", cat: "consent", desc: "通过清楚的言语或在情境中明确可理解的积极表达，表示愿意参与某项具体亲密互动的同意方式。", note: "它不要求固定话术或夸张热情，但不能把沉默、僵住或缺少拒绝当作积极许可。" },
  { zh: "持续同意", en: "Ongoing Consent", cat: "consent", desc: "同意需要随着互动进行持续确认，并且在人的感受、行为或条件改变时重新沟通。", note: "开始时同意某件事，不代表之后每个环节都自动获得许可；任何一方都可以暂停或改变主意。" },
  { zh: "同意能力", en: "Capacity to Consent", cat: "consent", desc: "理解互动内容、重要风险和可选方案，并能在没有不当压力的情况下作出和表达选择的能力。", note: "年龄、意识状态、认知状况与法律标准需要分别判断；具体法律问题应咨询当地专业机构。" },
  { zh: "情境同意", en: "Contextual Consent", cat: "consent", desc: "只在已经说明的对象、行为、时间、地点和条件范围内有效的同意。", note: "当行为方式、保护措施、参与者或风险条件变化时，应重新确认，不能把一种同意延伸到另一种情境。" },
  { zh: "拒绝权", en: "Right to Refuse", cat: "consent", desc: "任何人都有拒绝、暂停或不回答亲密请求的权利，即使过去同意过、正在交往或已经开始互动。", note: "尊重拒绝意味着不纠缠、不惩罚、不羞辱，也不把关系承诺当成必须提供亲密行为的交换。" },
  { zh: "同意沟通", en: "Consent Communication", cat: "consent", desc: "通过询问、表达、确认和倾听来了解各方是否愿意、哪些行为可以接受以及何时需要停止的沟通过程。", note: "非语言线索可以提供信息，但在不确定时应停下来询问，不能用猜测代替确认。" },
  { zh: "风险披露", en: "Risk Disclosure", cat: "consent", desc: "在亲密互动前或条件改变时，主动说明可能影响对方选择的重要健康、保护、隐私或关系风险。", note: "披露应真实、易理解且给对方留下拒绝或考虑的时间；隐瞒关键风险会削弱同意的知情基础。" },
  { zh: "性传播感染", en: "Sexually Transmitted Infection / STI", cat: "health", aliases: "性病、STD", desc: "主要可经性接触传播的一组感染；不同感染也可能经血液、母婴传播或其他途径传播。", note: "STI 比 STD 更强调感染可无症状；传播途径和预防方法因病原体而异，用词应减少羞辱。" },
  { zh: "HIV", en: "Human Immunodeficiency Virus", cat: "health", desc: "攻击免疫系统的病毒，未经治疗可能发展为 AIDS。", note: "现代治疗可显著控制病毒载量；HIV 状态不应成为污名标签。" },
  { zh: "AIDS", en: "Acquired Immunodeficiency Syndrome", cat: "health", aliases: "获得性免疫缺陷综合征、艾滋病", desc: "未经治疗的 HIV 感染可能进展到的最严重临床阶段，由特定机会性感染、肿瘤或免疫指标等标准界定。", note: "HIV 感染者不一定处于 AIDS 阶段，二者不能混用；有效抗病毒治疗可显著降低进展风险。" },
  { zh: "HPV", en: "Human Papillomavirus", cat: "health", aliases: "人乳头瘤病毒", desc: "一类常见病毒，部分类型与生殖器疣或宫颈等癌症风险相关。", note: "疫苗和筛查可降低相关风险，感染本身不代表道德问题。" },
  { zh: "HSV", en: "Herpes Simplex Virus", cat: "health", aliases: "单纯疱疹病毒", desc: "可引起口唇或生殖器疱疹的病毒，有 HSV-1 与 HSV-2 等类型。", note: "它很常见，管理重点是症状、传播风险和伴侣沟通。" },
  { zh: "梅毒", en: "Syphilis", cat: "health", desc: "由梅毒螺旋体引起的细菌感染，可分阶段影响身体多个系统。", note: "可检测、可治疗；疑似暴露或症状应及时筛查。" },
  { zh: "淋病", en: "Gonorrhea", cat: "health", desc: "由淋病奈瑟菌引起的细菌感染，可影响生殖道、直肠或咽喉等部位。", note: "抗药性是公共卫生关注点，应按医嘱完成治疗并通知相关伴侣。" },
  { zh: "衣原体感染", en: "Chlamydia", cat: "health", desc: "常见细菌性 STI，很多人没有明显症状。", note: "未治疗可能带来盆腔炎等风险，筛查比等症状更可靠。" },
  { zh: "滴虫病", en: "Trichomoniasis", cat: "health", desc: "由滴虫引起的可传播感染，可导致分泌物变化、刺激或无症状。", note: "伴侣同步检测和治疗有助于减少反复感染。" },
  { zh: "PrEP", en: "Pre-exposure Prophylaxis", cat: "health", aliases: "暴露前预防", desc: "HIV 阴性者在可能暴露前使用药物来降低感染风险的预防方式。", note: "是否适合需咨询医疗人员，并配合检测和随访。" },
  { zh: "PEP", en: "Post-exposure Prophylaxis", cat: "health", aliases: "暴露后预防", desc: "疑似 HIV 暴露后用于降低感染风险的紧急短期药物预防方案。", note: "应尽快评估并开始，最好在 24 小时内、最迟不超过 72 小时，疗程通常为 28 天；不要等待症状出现。" },
  { zh: "安全套（外用/内用）", en: "External and Internal Condoms", cat: "health", aliases: "避孕套、Condom", desc: "套于阴茎外部或置于体内的屏障工具；正确持续使用可降低妊娠及部分 STI 风险。", note: "两类产品的材料、用法、适用部位和监管批准范围不同；应按具体产品及当地说明使用，通常不应内外套同时使用。" },
  { zh: "口腔膜", en: "Dental Dam", cat: "health", aliases: "口交膜", desc: "用于口腔与外阴或肛门之间的屏障工具。", note: "它可降低部分感染风险，尤其适用于口腔接触相关情境。" },
  { zh: "润滑剂", en: "Lubricant", cat: "health", aliases: "润滑液", desc: "用于减少摩擦、提升舒适度并降低破损或疼痛风险的产品。", note: "不同材质屏障工具适配的润滑剂不同，需查看产品说明。" },
  { zh: "筛查", en: "Screening", cat: "health", desc: "在没有明显症状时，通过检测发现感染或其他健康风险的公共卫生与临床实践。", note: "项目与频率应按年龄、相关解剖部位、性行为、孕期、暴露情况和当地指南确定，而不是只用“是否有性经历”判断。" },
  { zh: "窗口期", en: "Window Period", cat: "health", desc: "从感染到检测能可靠检出的时间间隔。", note: "不同感染和检测方式窗口期不同，过早检测可能需要复查。" },
  { zh: "无症状感染", en: "Asymptomatic Infection", cat: "health", desc: "体内存在感染，但暂时没有明显不适、外观变化或可被本人察觉的症状。", note: "没有症状不等于没有感染或传播风险；检测、窗口期和是否需要治疗应按具体感染与专业建议判断。" },
  { zh: "伴侣告知", en: "Partner Notification", cat: "health", desc: "发现 STI 后通知可能暴露的性伴，以便其检测和治疗。", note: "方式应兼顾真实信息、安全和隐私保护。" },
  { zh: "疫苗", en: "Vaccine", cat: "health", desc: "通过免疫预防某些感染的公共卫生工具，如 HPV 或乙肝疫苗。", note: "接种建议因年龄、地区和健康状况而异。" },
  { zh: "尿路感染", en: "Urinary Tract Infection / UTI", cat: "health", desc: "泌尿系统感染，可能与性活动后刺激或细菌进入尿道有关。", note: "它不是 STI，但症状可能与其他问题混淆，反复或严重时应就医。" },
  { zh: "细菌性阴道病", en: "Bacterial Vaginosis / BV", cat: "health", desc: "阴道菌群失衡相关状况，可能出现气味或分泌物变化。", note: "它不等同于不干净，过度清洗反而可能加重问题。" },
  { zh: "外阴阴道念珠菌病", en: "Vulvovaginal Candidiasis / Vaginal Yeast Infection", cat: "health", aliases: "念珠菌感染、霉菌性阴道炎（旧称）", desc: "念珠菌在外阴阴道区域过度生长，可能导致瘙痒、刺激、红肿、疼痛或分泌物变化。", note: "它不等于 STI，且症状与其他状况相似；首次、反复或治疗无效时应接受医疗评估。" },
  { zh: "U=U", en: "Undetectable = Untransmittable", cat: "health", aliases: "不可检测即不传播、检测不到即不传播", desc: "指 HIV 感染者持续接受有效治疗并维持检测不到的病毒载量时，不会通过性行为将 HIV 传播给他人这一公共卫生共识。", note: "U=U 需要持续治疗和医学随访，也不防护其他 STI 或妊娠风险；具体检测和治疗请遵循当地医疗建议。" },
  { zh: "内部安全套", en: "Internal Condom", cat: "health", aliases: "女用安全套（旧称）、阴道安全套", desc: "置于体内形成隔离的屏障工具；用于阴道性交时可降低妊娠及部分 STI 风险，部分机构也提供肛交使用指导。", note: "不同产品和地区的批准适用部位并不相同；使用前应核对具体说明，且不要与外部安全套同时使用。" },
  { zh: "暴露后检测", en: "Post-exposure Testing", cat: "health", desc: "在可能发生 STI、HIV 或其他健康风险暴露后，根据感染类型和检测窗口安排检测与必要复查的过程。", note: "一次阴性结果不一定排除窗口期感染；若暴露近期发生，应尽快向医疗机构询问检测、预防和复查时间。" },

  { zh: "避孕", en: "Contraception", cat: "reproduction", desc: "降低妊娠可能性的工具、药物、程序或行为安排。", note: "避孕选择应结合健康状况、可及性、伴侣协商和个人偏好。" },
  { zh: "紧急避孕", en: "Emergency Contraception", cat: "reproduction", desc: "无保护性行为或避孕失败后用于降低妊娠风险的方法。", note: "它不同于药物流产，且通常越早使用越有效；具体方案需看当地资源。" },
  { zh: "口服避孕药", en: "Oral Contraceptive Pill", cat: "reproduction", aliases: "短效避孕药", desc: "通过激素调节排卵或宫颈黏液等机制降低妊娠风险的药物。", note: "不同配方适应证和禁忌不同，应咨询专业人员。" },
  { zh: "宫内节育器", en: "Intrauterine Device / IUD", cat: "reproduction", aliases: "节育环", desc: "放置在子宫内的长效可逆避孕方式，有含铜和含激素等类型。", note: "它需要专业放置和取出，适合与否取决于个体情况。" },
  { zh: "皮下埋植", en: "Contraceptive Implant", cat: "reproduction", desc: "置入皮下、缓慢释放激素的长效可逆避孕方式。", note: "可能影响出血模式，放置和取出需由专业人员完成。" },
  { zh: "屏障避孕", en: "Barrier Contraception", cat: "reproduction", desc: "通过物理屏障阻止精子进入子宫颈、从而降低妊娠风险的方法，如外用或内用安全套、隔膜等。", note: "部分避孕屏障也能降低 STI 风险；口腔膜用于降低特定 STI 风险，但不是避孕方法。" },
  { zh: "杀精剂", en: "Spermicide", cat: "reproduction", desc: "通过破坏或限制精子活动来降低受精可能性的化学制剂，常与其他屏障避孕方法配合使用。", note: "它不能用于预防 STI 或 HIV；含壬苯醇醚-9 的产品频繁使用可能刺激、损伤黏膜并增加 HIV 感染风险，低频使用时相对安全。" },
  { zh: "体外排精", en: "Withdrawal", cat: "reproduction", aliases: "外射", desc: "射精前退出以降低精液进入阴道可能性的行为方式。", note: "实际失败率较高，也不能预防 STI。" },
  { zh: "易孕期", en: "Fertile Window", cat: "reproduction", desc: "月经周期中妊娠可能性较高的时间段。", note: "周期不规律、压力和疾病都会影响预测准确性。" },
  { zh: "排卵", en: "Ovulation", cat: "reproduction", desc: "卵巢在激素变化影响下释放卵细胞的生理过程，通常发生在月经周期的某个阶段。", note: "排卵时间会因周期、压力、疾病和药物变化；仅凭日历或 App 预测可靠性有限，生育意识法需按规范追踪相关指标并理解实际失败风险。" },
  { zh: "妊娠", en: "Pregnancy", cat: "reproduction", aliases: "怀孕", desc: "受精卵着床并在体内发育的状态。", note: "妊娠相关选择涉及身体、关系、医疗、经济和法律因素。" },
  { zh: "自然流产 / 妊娠丢失", en: "Miscarriage / Pregnancy Loss", cat: "reproduction", aliases: "自然流产", desc: "妊娠在没有人为终止措施的情况下丢失或终止。", note: "它不同于人工流产（induced abortion）；具体医学界定会涉及孕周与临床情况，经历者不应被归咎。" },
  { zh: "人工流产", en: "Induced Abortion", cat: "reproduction", aliases: "终止妊娠", desc: "通过药物或医疗操作有意终止妊娠的医疗照护过程。", note: "它不同于自然流产；可用方式、孕周、流程与法律条件因个人情况和地区而异，应从可靠医疗或公共卫生渠道获得信息。" },
  { zh: "生育自主", en: "Reproductive Autonomy", cat: "reproduction", desc: "个体对是否、何时以及如何生育拥有知情和自主决定权。", note: "它包括想生育、不想生育、延后生育和获得相关医疗服务的权利。" },
  { zh: "生殖正义", en: "Reproductive Justice", cat: "reproduction", desc: "把生育选择与种族、阶级、残障、移民、性别和医疗可及性联系起来的权利框架。", note: "它不仅谈选择，还谈人是否真的有资源实现选择。" },
  { zh: "不孕", en: "Infertility", cat: "reproduction", aliases: "不孕不育", desc: "WHO 的公共卫生定义通常指规律、无保护性交 12 个月或以上仍未实现妊娠的生殖系统疾病。", note: "临床可能根据年龄和病史更早评估；该定义对非性交受孕与多元家庭场景有限，成因也不应自动归咎某一方。" },
  { zh: "备孕", en: "Preconception Planning", cat: "reproduction", desc: "为未来妊娠做身体检查、用药评估、营养、伴侣沟通和生活安排。", note: "备孕也应包含遗传、心理、经济和照护资源的现实讨论。" },
  { zh: "辅助生殖技术", en: "Assisted Reproductive Technology / ART", cat: "reproduction", aliases: "辅助生殖", desc: "通过处理卵细胞或胚胎来实现妊娠的一组治疗或程序，例如体外受精。", note: "按 CDC 定义，只有精子处理的宫腔内人工授精或单独促排卵不属于 ART；可及性、费用、法律亲权和伦理条件因地区而异。" },
  { zh: "生育保存", en: "Fertility Preservation", cat: "reproduction", aliases: "生育力保存", desc: "在医疗治疗、年龄规划或性别肯定护理前保存精子、卵子、胚胎或组织的选择。", note: "是否保存取决于资源、意愿、时间和医疗条件，不是每个人都需要或负担得起。" },
  { zh: "受精", en: "Fertilization", cat: "reproduction", desc: "精子与卵细胞结合并形成受精卵的过程，是妊娠可能发生前的一个生物学环节。", note: "受精不等于着床或妊娠已经成立；相关过程和法律定义应按医学与当地语境区分。" },
  { zh: "生育意识法", en: "Fertility Awareness-based Methods", cat: "reproduction", aliases: "生育力觉察法、自然避孕法", desc: "通过观察月经周期、基础体温、宫颈黏液或其他身体信号来估计易孕期，并据此安排或避免无保护性行为的方法。", note: "需要持续记录和正确判断，周期不规律时准确性会受影响；它不能预防 STI。" },
  { zh: "避孕贴", en: "Contraceptive Patch", cat: "reproduction", desc: "贴在皮肤上并持续释放激素，以抑制排卵、改变宫颈黏液等方式降低妊娠风险的避孕方法。", note: "更换频率、适用人群和禁忌因产品而异，是否适合应咨询专业人员。" },
  { zh: "避孕针", en: "Injectable Contraceptive", cat: "reproduction", desc: "按一定周期注射激素以抑制排卵或改变生殖道环境，从而降低妊娠可能性的避孕方法。", note: "可能影响出血模式和恢复生育能力的时间，具体方案与复诊安排应遵循医嘱。" },
  { zh: "输精管结扎", en: "Vasectomy", cat: "reproduction", desc: "通过阻断输精管，使精液中通常不再含有精子，从而降低妊娠可能性的长期避孕手术。", note: "它通常不影响性欲、勃起或射精，但术后并非立即生效，也不预防 STI，应按医嘱复查。" },
  { zh: "药物流产", en: "Medication Abortion", cat: "reproduction", desc: "使用药物终止妊娠的医疗方式，具体药物、孕周范围、流程和随访要求因地区与个人情况而异。", note: "它不同于紧急避孕。WHO 建议在妊娠少于 12 周且具备准确信息、质量可靠药物、必要支持和转诊条件时，可选择全部或部分自我管理；当地法律与服务条件仍需另行确认。" },
  { zh: "亲密关系", en: "Intimate Relationship", cat: "relationships", desc: "包含情感支持、身体亲近、性、承诺或共同生活等元素的关系。", note: "亲密关系不一定包含性，也不一定是单偶或浪漫关系。" },
  { zh: "性沟通", en: "Sexual Communication", cat: "relationships", desc: "围绕欲望、边界、避孕、感染风险、偏好和不适进行的沟通。", note: "健康沟通不是一次谈完，而是随关系和身体状态持续更新。" },
  { zh: "欲望不匹配", en: "Desire Mismatch", cat: "relationships", desc: "关系中的人对性频率、方式或优先级有不同期待。", note: "它需要协商而非施压；任何一方都不应被迫满足另一方。" },
  { zh: "关系协议", en: "Relationship Agreement", cat: "relationships", desc: "关系参与者对排他性、告知、边界、照护和风险管理的约定。", note: "协议应可复盘和更新，而不是用来长期压住不满。" },
  { zh: "排他关系", en: "Exclusive Relationship", cat: "relationships", desc: "参与者约定在性、浪漫或伴侣承诺的某些层面只与彼此维持特定连接。", note: "排他关系与单偶关系有重叠但不严格同义；应说明排他范围及线上互动、暧昧等边界。" },
  { zh: "开放式关系", en: "Open Relationship", cat: "relationships", aliases: "开放关系、开放式伴侣关系、开放伴侣关系", desc: "在相关伴侣知情同意并协商边界的前提下，允许关系中的人和关系外的人发展性、浪漫或其他亲密互动的一类关系安排。具体开放范围、告知方式和边界会因关系而异。", note: "开放式关系不等于出轨或隐瞒，也不必然等同于多元爱；关键在于知情同意、清晰边界、持续沟通和安全实践。" },
  { zh: "多元爱", en: "Polyamory", cat: "relationships", aliases: "多边恋、多元伴侣、多重伴侣、Polyamorous", desc: "在所有相关者知情同意的前提下，与多位伴侣建立亲密、浪漫或伴侣关系的实践或取向。它强调坦诚、沟通与共识。", note: "多元爱以知情同意为前提，既不同于欺骗或出轨，也不等同于某一种性取向。" },
  { zh: "FWB", en: "Friends With Benefits", cat: "relationships", aliases: "有性关系的朋友、有利益的朋友、有福利的朋友、性伴朋友", desc: "在友谊基础上包含性互动、通常不按传统浪漫伴侣承诺组织的关系安排。", note: "FWB 不必然非排他或“无感情”；是否排他、如何处理亲密与情感边界，需要参与者另行协商并持续更新。" },
  { zh: "非承诺性行为", en: "Casual Sex", cat: "relationships", aliases: "休闲性行为、临时性行为", desc: "不以长期伴侣承诺为必要前提的性接触，可能发生一次或重复发生。", note: "casual sex 不等于 one-night stand；评价重点仍是同意、诚实、保护措施与参与者感受，而非关系长短。" },
  { zh: "长期伴侣", en: "Long-term Partner", cat: "relationships", desc: "在较长时间内共享亲密、生活、照护或承诺的人。", note: "长期关系并不自动消除同意、避孕、感染沟通或个人边界。" },
  { zh: "忠诚", en: "Fidelity", cat: "relationships", desc: "按关系约定维持承诺、诚实和边界的实践。", note: "忠诚的具体含义取决于关系协议，而不只等于单一模式。" },
  { zh: "出轨", en: "Infidelity", cat: "relationships", desc: "违反关系中关于性、浪漫、隐瞒或承诺的约定。", note: "不同关系对出轨边界定义不同，模糊处需要提前沟通。" },
  { zh: "嫉妒", en: "Jealousy", cat: "relationships", desc: "面对潜在失去、比较或关系威胁时出现的情绪。", note: "嫉妒需要被理解和沟通，但不能成为控制他人的理由。" },
  { zh: "关系中的情感工作", en: "Emotion Work in Relationships", cat: "relationships", aliases: "情绪劳动（扩展用法）", desc: "在亲密关系中承担理解、安抚、解释、协调和维护关系氛围的情感工作。", note: "霍克希尔德所界定的 emotional labor 原指有薪工作中按组织要求管理情绪；关系语境是后来扩展用法，应与社会学术语表中的“情感劳动”区分。" },
  { zh: "伴侣照护", en: "Partner Care", cat: "relationships", desc: "在亲密关系中对身体、情绪、健康和生活压力的互相支持。", note: "照护不应变成单方面牺牲或控制。" },
  { zh: "约会暴力", en: "Dating Violence", cat: "relationships", desc: "约会或亲密关系中的身体、性、情绪、经济或数字控制与伤害。", note: "暴力不只发生在婚姻或同居关系中，也不只表现为肢体伤害。" },
  { zh: "关系升级阶梯", en: "Relationship Escalator", cat: "relationships", desc: "默认关系应从约会一路走向排他、同居、婚姻和生育的社会脚本。", note: "有些人会选择不同关系路径，这并不自动意味着关系更浅。" },
  { zh: "性偏好清单", en: "Yes / No / Maybe List", cat: "relationships", aliases: "愿意/不愿意/也许清单", desc: "把可能的亲密活动按愿意、不愿意、也许分类，用于沟通边界和兴趣。", note: "清单只是谈话工具，不是要求兑现的合同。" },
  { zh: "BDSM", en: "Bondage, Discipline, Dominance, Submission, Sadism, Masochism", cat: "relationships", desc: "围绕束缚、纪律、支配、臣服、施虐和受虐等元素的知情同意实践或兴趣。", note: "健康 BDSM 强调协商、同意、安全和照护，不等同于暴力或虐待。" },
  { zh: "Kink", en: "Kink", cat: "relationships", aliases: "非常规性偏好", desc: "相对于主流性脚本而言较非典型的性兴趣、幻想或实践。", note: "Kink 是否健康取决于同意、风险管理和是否造成困扰，而非是否常见。" },
  { zh: "香草性爱", en: "Vanilla Sex", cat: "relationships", desc: "社群中常用来指不包含明显 BDSM 或 kink 元素的性实践。", note: "这个词是描述性说法，不应被用来贬低任何人的偏好。" },
  { zh: "插入式性行为", en: "Penetrative Sex", cat: "relationships", desc: "通常指身体部位或物件进入阴道或肛门的性行为；少数宽泛语境也会把口腔插入包括在内。", note: "写作时应明确具体行为；插入不是性行为的唯一形式，也不应被视为亲密程度的唯一标准。" },
  { zh: "非插入式性行为", en: "Non-penetrative Sex", cat: "relationships", desc: "不以插入为中心的性接触或亲密实践。", note: "非插入式也可能涉及感染风险和同意边界，不能简单等于无风险。" },
  { zh: "性后复盘", en: "Sexual Debrief", cat: "relationships", desc: "亲密互动后讨论感受、边界、保护措施和下次调整的沟通。", note: "复盘的目标是理解和改进，不是评分或羞辱。" },
  { zh: "情感安全", en: "Emotional Safety", cat: "relationships", desc: "关系中的人能够表达需要、边界和不同意见，并相信自己不会因此遭到羞辱、报复、威胁或强迫的状态。", note: "情感安全需要持续的尊重与修复，不等于关系中永远没有冲突或不适。" },

  { zh: "性学研究", en: "Sex Research", cat: "research", desc: "通过调查、实验、访谈、临床观察或历史分析研究性相关现象。", note: "由于隐私和污名，性研究尤其需要重视伦理与样本偏差。" },
  { zh: "金赛量表", en: "Kinsey Scale", cat: "research", desc: "用 0 到 6 描述异性/同性性吸引或行为连续谱的经典量表。", note: "它有历史意义，但不能穷尽无性恋、泛性恋、浪漫取向或性别多元经验。" },
  { zh: "马斯特斯与约翰逊", en: "Masters and Johnson", cat: "research", desc: "20 世纪重要性反应研究者，提出了影响深远的性反应周期模型。", note: "其研究开创性很强，也受到样本和模型线性化的限制。" },
  { zh: "海特报告", en: "The Hite Report", cat: "research", desc: "基于大量问卷回收整理的性经验报告，尤其影响了对女性性经验的公共讨论。", note: "它扩大了经验可见性，同时也常被讨论样本代表性问题。" },
  { zh: "匿名调查", en: "Anonymous Survey", cat: "research", desc: "研究者无法把答卷合理关联到具体个人的调查，包括不保留可回溯编码、IP 或其他识别链。", note: "匿名不同于保密：保密调查可能由研究者掌握身份但限制访问；研究者仍应说明数据用途、保存方式与间接识别风险。" },
  { zh: "质性访谈", en: "Qualitative Interview", cat: "research", desc: "通过深入访谈理解个人经验、意义和语境的研究方法。", note: "它不追求用少数故事代表所有人，而是揭示复杂经验。" },
  { zh: "便利样本", en: "Convenience Sample", cat: "research", desc: "研究者从容易接触的人群中招募样本。", note: "性研究常依赖便利样本，因此结论外推要谨慎。" },
  { zh: "社会赞许偏差", en: "Social Desirability Bias", cat: "research", desc: "受访者倾向给出更符合社会期待或更不丢脸的答案。", note: "涉及性经历、频率和偏好时，这种偏差尤其明显。" },
  { zh: "回忆偏差", en: "Recall Bias", cat: "research", desc: "人们回忆过去经历时出现遗漏、重构或时间估计错误。", note: "性经历研究中，记忆偏差会影响频率、年龄和细节报告。" },
  { zh: "出版偏倚", en: "Publication Bias", cat: "research", aliases: "发表偏倚、发表偏差", desc: "显著、新奇或符合期待的结果更容易发表，从而使可见文献系统性偏离全部研究结果的偏倚。", note: "它可能让综述高估效应；读到性研究新闻时，应警惕夸张标题和单篇研究过度推广。" },
  { zh: "病理化", en: "Pathologization", cat: "research", desc: "把身份、欲望或非主流经验解释成疾病或异常。", note: "性学史中许多身份曾被病理化，今天应谨慎区分困扰和多样性。" },
  { zh: "去病理化", en: "Depathologization", cat: "research", desc: "把不造成伤害或困扰的身份与多样性经验从疾病框架中移出。", note: "去病理化不等于否认人可能需要医疗或心理支持。" },
  { zh: "公共卫生", en: "Public Health", cat: "research", desc: "从人群层面降低风险、提升健康和服务可及性的实践。", note: "性健康公共卫生应减少污名，而不是用恐惧阻止求助。" },
  { zh: "危害降低", en: "Harm Reduction", cat: "research", desc: "承认人们会有不同选择，并通过信息、工具和服务降低风险的策略。", note: "它不是纵容风险，而是把现实中的安全和尊严放在优先位置。" },
  { zh: "色情素养", en: "Porn Literacy", cat: "research", desc: "理解成人色情内容是媒介产品，能辨认表演、剪辑、商业动机和不现实脚本的能力。", note: "它不要求观看此类内容，而是帮助区分媒介想象和现实同意、身体、关系。" },
  { zh: "道德恐慌", en: "Moral Panic", cat: "research", desc: "媒体、政治和公众围绕某类群体或行为形成夸大的威胁叙事。", note: "道德恐慌常把复杂社会焦虑集中投射到替罪羊身上。" },
  { zh: "性工作", en: "Sex Work", cat: "research", desc: "以性相关服务、表演或劳动换取报酬的总称，具体法律地位和处境差异极大。", note: "讨论时应区分自愿劳动、剥削、贩运和暴力，不把所有人混为一种叙事。" },
  { zh: "法定同意年龄", en: "Age of Consent", cat: "research", desc: "法律规定个人可对某些性行为作出有效同意的最低年龄。", note: "门槛可能因行为类型、双方年龄差、婚姻状态、信任、权威或照护关系及司法辖区而不同，不能用单一数字跨地区概括；本站不提供规避法律或接触未成年人的建议。" },
  { zh: "伦理审查", en: "Research Ethics Review", cat: "research", aliases: "IRB 审查、伦理委员会审查", desc: "在涉及人的研究开始前，对研究目的、风险、隐私、招募、知情同意和参与者保护措施进行审查的程序。", note: "伦理审查不能保证研究结论正确，但能帮助降低不必要伤害并明确研究者责任；不同地区机构名称和要求可能不同，IRB 是其中一种机构形式。" },
  { zh: "自我报告", en: "Self-report", cat: "research", desc: "由参与者直接报告自己的感受、态度、经历、行为或身体状况的数据收集方式。", note: "它能接触外部观察无法直接看到的主观经验，但可能受记忆、理解、隐私顾虑和社会赞许影响。" },
  { zh: "样本偏差", en: "Sampling Bias", cat: "research", desc: "样本进入研究的机会并不均等，导致被纳入的人群与目标总体存在系统差异的现象。", note: "性研究中的线上招募、社群招募和便利样本都可能造成偏差，结论需要说明适用范围。" },
  { zh: "横断研究", en: "Cross-sectional Study", cat: "research", desc: "在某一个时间点或较短时间窗口收集不同参与者资料，用来描述现状或比较群体差异的研究设计。", note: "它适合观察关联和分布，但通常不能确定先后顺序，也不能单凭结果证明因果。" },
  { zh: "纵向研究", en: "Longitudinal Study", cat: "research", desc: "在多个时间点追踪同一批参与者，以观察经验、行为、健康或关系变化的研究设计。", note: "它有助于理解变化顺序，但会受到失访、隐私保护和参与者生活变化的影响。" },
  { zh: "系统综述", en: "Systematic Review", cat: "research", desc: "按照预先设定的检索、筛选和评价标准，系统整理某一问题已有研究证据的方法。", note: "系统综述的可信度取决于检索是否完整、纳入标准是否透明以及原始研究质量，不能把它自动视为绝对结论。" },
  { zh: "研究保密", en: "Research Confidentiality", cat: "research", desc: "研究团队对参与者身份、回答内容和可识别资料进行限制访问、妥善保存和谨慎报告的伦理安排。", note: "保密不一定等于匿名；若法律或安全原因存在披露例外，研究者应在参与前清楚说明。" }
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
