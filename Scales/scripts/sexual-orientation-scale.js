const TOTAL_QUESTIONS = 60;
const STORAGE_KEY = 'sexualOrientationQuizAnswers';
const options = [
	['0', '完全不符合'],
	['1', '基本不符合'],
	['2', '偶尔符合'],
	['3', '有时符合'],
	['4', '经常符合'],
	['5', '非常符合']
];

const sections = [
	{
		title: '第一部分：女性/女性气质相关性吸引（1-12题）',
		desc: '评估女性身份、女性气质、女性化表达或女性相关身体/互动线索是否会触发你的性吸引。',
		questions: [
			['我曾对女性产生明确的性吸引：想与对方发生性行为或带有性意味的亲密接触。', '关注性指向的吸引，不是单纯欣赏、认同、羡慕或想做朋友。'],
			['我看到某些女性时，会自发出现带有性意味的幻想或画面。', '“自发”指不需要刻意思考就会出现的性相关联想或冲动。'],
			['我会把女性视为可能的性对象/性伴侣候选，而不仅是欣赏或好感。', '即使你不会真的行动，这里评估的是内在吸引范围。'],
			['女性化的身体线索、气质或肢体语言会触发我明显的性兴奋。', '性兴奋可以是身体反应，也可以是强烈的心理兴奋。'],
			['如果与女性建立亲密关系，我会把“性”视为自然可能发生的一部分。', '这题不是问是否必须发生性行为，而是问性是否进入你的关系脚本。'],
			['在过去几年里，我对女性产生性吸引的频率不算罕见。', '请按整体经验判断，不需要精确统计。'],
			['我会因为女性气质、女性化表达或女性相关互动方式产生明显的“想靠近/想触碰”的性冲动。', '关键是性指向的身体亲密冲动，而不是普通亲近。'],
			['我对女性相关线索的性吸引并不限于某一种女性类型，而是可能被多种女性风格触发。', '用于区分“只对特定类型有效”和“女性整体都可能进入吸引范围”。'],
			['与女性的拥抱、亲吻或更亲密触碰，会让我明确感到它与性/欲望相关。', '如果体验更像温暖、安全感或感官舒适，这题可偏低。'],
			['当女性向我表达暧昧/性兴趣时，我的性吸引通常会被增强或更容易出现。', '这题捕捉回应性吸引。'],
			['我能区分“我喜欢女性的外貌/风格”和“我想与女性发生性关系”。', '这有助于避免把审美欣赏误认成性吸引。'],
			['当我想到与女性发生性行为时，我整体感受更偏期待/兴奋，而不是强烈抗拒或空白。', '这里看总体情绪基调，不要求你一定想行动。']
		]
	},
	{
		title: '第二部分：男性/男性气质相关性吸引（13-24题）',
		desc: '评估男性身份、男性气质、男性化表达或男性相关身体/互动线索是否会触发你的性吸引。',
		questions: [
			['我曾对男性产生明确的性吸引：想与对方发生性行为或带有性意味的亲密接触。', '关注真实吸引，而不是“我应该喜欢男性”或社会默认。'],
			['我看到某些男性时，会自发出现带有性意味的幻想或画面。', '自发幻想比为了验证自己而强迫想象更有参考价值。'],
			['我会把男性视为可能的性对象/性伴侣候选，而不仅是欣赏或好感。', '这题看男性是否进入你的性吸引范围。'],
			['男性化的身体线索、气质或肢体语言会触发我明显的性兴奋。', '请区分性兴奋、紧张、崇拜、害怕和社会压力。'],
			['如果与男性建立亲密关系，我会把“性”视为自然可能发生的一部分。', '如果你只能想象浪漫或陪伴，却很难想象性，这题可偏低。'],
			['在过去几年里，我对男性产生性吸引的频率不算罕见。', '请按近几年真实出现的频率作答。'],
			['我会因为男性气质、男性化表达或男性相关互动方式产生明显的“想靠近/想触碰”的性冲动。', '这里强调性意味的触碰冲动，而非安全感或依赖。'],
			['我对男性相关线索的性吸引并不限于某一种男性类型，而是可能被多种男性风格触发。', '如果只对非常特定的男性表达有效，可给中低分。'],
			['与男性的拥抱、亲吻或更亲密触碰，会让我明确感到它与性/欲望相关。', '如果更多是感官或情感亲密，这题不必高。'],
			['当男性向我表达暧昧/性兴趣时，我的性吸引通常会被增强或更容易出现。', '这题用于识别回应性吸引。'],
			['我能区分“我认可/欣赏男性”和“我确实想与男性发生性关系”。', '尤其适用于被默认脚本影响的人。'],
			['当我想到与男性发生性行为时，我整体感受更偏期待/兴奋，而不是强烈抗拒或空白。', '请按真实情绪基调作答。']
		]
	},
	{
		title: '第三部分：非二元/中性/混合表达相关性吸引（25-36题）',
		desc: '评估非二元、性别酷儿、流动性别、中性表达、混合表达或难以二分的性别呈现是否会触发你的性吸引。',
		questions: [
			['我曾对非二元、性别酷儿、流动性别或难以二分的人产生明确的性吸引。', '如果现实接触较少，可以根据真实接触、作品、想象情境综合判断。'],
			['中性、双性化、混合表达或不易被二分的性别表达可能触发我的性吸引。', '这题看你是否会被中性、混合或不易二分的表达触发性吸引。'],
			['我会把非二元/中性/混合表达的人视为可能的性对象/性伴侣候选。', '支持多元性别不等于性吸引；这里问的是吸引本身。'],
			['当对方不适合被简单归为“男/女”时，我的性吸引不会自动消失。', '如果未知或混合性别会让性吸引中断，这题可偏低。'],
			['中性或混合的身体、气质、声音、穿着或肢体语言可能让我产生性兴奋。', '请关注性指向的兴奋，而不是好奇或赞赏。'],
			['在过去几年里，我对非二元/中性/混合表达对象产生过不止一次性吸引。', '现实接触机会会影响得分，低分不必过度解释。'],
			['即使我不能立即判断对方性别，我仍可能对TA产生性吸引。', '这题与“性别必须先被归类”相对。'],
			['非二元/中性/混合表达的人向我表达暧昧/性兴趣时，我也可能出现相应的性吸引。', '用于捕捉回应性吸引。'],
			['与非二元/中性/混合表达对象的亲密触碰，在我这里也可能呈现性/欲望意味。', '如果主要是审美或情感吸引，可给低分。'],
			['当我对某人产生性吸引时，我不需要先把TA归类成男或女。', '高分常与泛性恋/不限性别体验相关。'],
			['我能区分“认同/支持多元性别”和“确实会被非二元/中性/混合表达触发性吸引”。', '这题帮助避免把价值观当成吸引证据。'],
			['当我想到与非二元/中性/混合表达对象发生性行为时，整体更偏期待/兴奋而非抗拒或空白。', '请按真实身体和心理反应作答。']
		]
	},
	{
		title: '第四部分：身体性征、性别气质与吸引触发点（37-48题）',
		desc: '评估身体性征、性别表达、女性气质、男性气质、中性气质、声音、气味、姿态、互动方式等线索如何触发或削弱你的性吸引。',
		questions: [
			['对我来说，身体性征（如胸部、阴茎、外阴、体毛、体态等）会明显影响性吸引是否出现。', '这里不是要求你评价身体优劣，而是看身体性征是否是吸引触发点。'],
			['我会被女性气质、男性气质、中性气质或混合气质本身触发性吸引。', '这题把“气质/表达”作为独立线索，而不是只看身份标签。'],
			['声音、气味、姿态、动作方式或肢体语言，比抽象性别标签更能触发我的性吸引。', '用于捕捉更具体、更身体化的吸引线索。'],
			['同一性别内部，不同身体性征或气质表达会让我产生非常不同的性吸引反应。', '高分说明你需要比“男/女/非二元”更细的描述。'],
			['我更看重具体的人、气质与互动，而不是“这个性别我能不能喜欢”。', '这题判断性别标签是否退居次要。'],
			['即使对方的性别标签符合我的取向，如果身体性征或气质线索不对，我也很难产生性吸引。', '这题用于识别“标签符合但触发点不符合”的情况。'],
			['即使对方的性别标签不是我原本预期会被吸引的类型，如果气质/身体/互动强烈触发我，我仍可能产生性吸引。', '高分提示吸引可能比标签更灵活。'],
			['我对性吸引的判断常常来自身体反应、欲望画面或想触碰的冲动，而不是先想对方属于哪个身份。', '用于区分身体经验与理性分类。'],
			['我曾因为社会期待、家庭或同伴压力，而怀疑或修正过自己的性吸引判断。', '这题捕捉外部压力造成的判断干扰。'],
			['我可能因为“应该喜欢某类人”的脚本，而高估或低估过自己的真实吸引。', '例如强制异性恋、圈层期待、身份标签压力等。'],
			['我可能因为羞耻、恐惧或内化偏见，而压抑/否认过自己对某些性别、性征或气质的性吸引。', '高分提示结果解读时要考虑压抑和回避。'],
			['如果不考虑家庭、同伴、宗教、社会评价或安全风险，我对自己性吸引触发点的判断会更清楚。', '高分提示外部压力可能正在遮挡真实体验。']
		]
	},
	{
		title: '第五部分：整体性吸引强度、无性恋线索与标签整合（49-60题）',
		desc: '用于判断整体性吸引是否较低，并区分无性恋/灰性恋/半性恋线索、幻想、经历、浪漫/审美/感官吸引与标签叙述。',
		questions: [
			['我能把“有过性经历/没有性经历”和“我会被哪些人性吸引”分开看待。', '性经历受机会、安全、文化和关系状态影响，不等于取向本身。'],
			['我能区分“性幻想内容”和“现实中我真正想接近/发生性关系的对象”。', '幻想可能抽象或角色化，不必直接等同现实取向。'],
			['我能区分“浪漫心动/想谈恋爱”和“想发生性接触”的差别。', '浪漫吸引和性吸引可以同步，也可以分离。'],
			['我能区分“觉得某人好看/有魅力”和“想与TA发生带有性意味的亲密接触”。', '审美吸引很容易被误读成性吸引。'],
			['我能区分“想拥抱/依偎的舒适感”和“带有性唤起或性欲望的触碰冲动”。', '感官亲密可以很强烈，但不一定是性吸引。'],
			['我很少或几乎不会对任何性别、性征或性别气质产生自发的性吸引。', '高分是无性恋/无性恋谱系的重要线索。'],
			['我即使能欣赏某些人的外貌、气质或魅力，也通常不会进一步产生性欲望。', '用于区分审美吸引强、性吸引低的情况。'],
			['我的性吸引如果出现，通常也很低频、短暂、微弱或高度依赖特殊条件。', '高分更接近灰性恋或条件性吸引线索。'],
			['我通常需要深度情感连接、信任或长期熟悉后，才可能出现性吸引。', '高分提示半性恋/情感条件性吸引线索。'],
			['我对某些性别、性征或气质的吸引可能很少出现，但一旦出现就很明确。', '低频不等于不存在。'],
			['我对自己的性吸引证据有相对稳定的判断标准，例如自发幻想、身体反应、想触碰、关系脚本等。', '高分通常意味着方向判断更稳定。'],
			['无论最终使用哪个标签，我都希望结果帮助我更准确地理解自己，而不是把自己固定住。', '用于生成更适合你的整合建议。']
		]
	}
];

const questionExamples = {};
Object.assign(questionExamples, {
	1: '例一：你见到一位女性同事时，会自然想象与她接吻或发生带有性意味的触碰，并明确感到欲望，可选4–5分；例二：只对极少数女性偶尔有过类似冲动，可选2–3分；例三：即使很欣赏女性，也从未想与她们发生性接触，可选0–1分。',
	2: '例一：在街上、聚会或作品中看到某些女性时，性相关画面会不经刻意测试就自己出现，可选4–5分；例二：只在特定关系或少数时刻出现，可选2–3分；例三：只有为了验证取向而努力想象时才有画面，可选0–1分。',
	3: '例一：即使目前不准备约会，你仍会把某些女性自然地视为可能发生性关系的对象，可选4–5分；例二：只对非常特定的女性如此，可选2–3分；例三：女性只会进入朋友、偶像或审美欣赏范围，可选0–1分。',
	4: '例一：某些女性的身体线条、声音或女性化肢体语言会直接点燃性兴奋，可选4–5分；例二：需要暧昧互动配合才偶尔出现，可选2–3分；例三：你会觉得这些线索很好看，却没有性唤起或性接触冲动，可选0–1分。',
	5: '例一：想象与喜欢的女性建立关系时，性会自然成为你期待探索的一部分，可选4–5分；例二：是否想要性取决于关系深度或当时状态，可选2–3分；例三：你能想象约会、陪伴与承诺，却很难想象自己想和她发生性行为，可选0–1分。',
	6: '例一：过去几年中，你对不同女性反复出现过明确性吸引，而非只有一次例外，可选4–5分；例二：一年内只有少数几次或集中在一段关系中，可选2–3分；例三：多年里几乎找不到明确例子，可选0–1分。',
	7: '例一：某位女性靠近、调情或展现女性气质时，你会想以带有性意味的方式触碰她，可选4–5分；例二：只有在双方已经很亲密时偶尔出现，可选2–3分；例三：你只想拥抱、牵手或靠近取暖，没有性唤起，可选0–1分。',
	8: '例一：成熟、运动、中性或柔和等多种女性风格都可能让你产生性吸引，可选4–5分；例二：只有一两种很具体的女性类型会触发，可选2–3分；例三：没有哪类女性风格会进入你的性吸引范围，可选0–1分。',
	9: '例一：与有吸引力的女性接吻或更亲密触碰时，你会明确感到欲望被增强并想继续，可选4–5分；例二：有时像性吸引、有时只是亲密舒适，可选2–3分；例三：这些动作对你主要意味着温暖或感情，不带性意味，可选0–1分。',
	10: '例一：原本只是注意到某位女性，当她明确调情或表达性兴趣后，你的性吸引会被明显唤起，可选4–5分；例二：只在少数对象身上出现回应性吸引，可选2–3分；例三：对方的兴趣通常只让你感到被认可、紧张或有压力，可选0–1分。'
});

Object.assign(questionExamples, {
	11: '例一：你能欣赏女演员或朋友的外貌，却清楚知道自己是否真的想与她发生性接触，可选4–5分；例二：有时会把“她很美”误当成性吸引，可选2–3分；例三：你很难分清欣赏、羡慕与性欲望，可选0–1分。',
	12: '例一：想象与有吸引力的女性发生性行为时，整体感受是期待、兴奋或愿意靠近，可选4–5分；例二：既有好奇也有空白或犹豫，可选2–3分；例三：通常只有抗拒、压力或完全没有内在吸引，可选0–1分。',
	13: '例一：你曾对男性产生明确的性欲望，例如想接吻、抚摸或发生性行为，可选4–5分；例二：只对极少数男性或特定关系偶尔出现，可选2–3分；例三：即使认可或亲近男性，也没有想进行性接触的冲动，可选0–1分。',
	14: '例一：看到某些男性时，带有性意味的画面会自然出现，不需要先说服自己应该喜欢他，可选4–5分；例二：只在少数情境或对象身上出现，可选2–3分；例三：只有刻意做取向测试时才勉强想象，可选0–1分。',
	15: '例一：你会自然把某些男性纳入潜在性伴侣范围，即使现实中未必行动，可选4–5分；例二：只有非常具体的一类男性能进入范围，可选2–3分；例三：男性只会成为朋友、榜样或浪漫对象，性并不会进入想象，可选0–1分。',
	16: '例一：某些男性的体态、声音、气味或男性气质会直接引发性兴奋，可选4–5分；例二：需要对方回应或深度熟悉后才偶尔出现，可选2–3分；例三：这些线索只带来欣赏、紧张或安全感，没有性欲望，可选0–1分。',
	17: '例一：想象与喜欢的男性建立亲密关系时，性会自然成为你可能期待的一部分，可选4–5分；例二：只在关系很深或条件合适时才可能想要，可选2–3分；例三：你能想象恋爱与陪伴，却不想与他发生性接触，可选0–1分。',
	18: '例一：过去几年里，你曾多次对不同男性出现明确性吸引，可选4–5分；例二：出现次数很少或只集中在一个对象上，可选2–3分；例三：多年里几乎没有可确认的男性方向性吸引，可选0–1分。',
	19: '例一：某位男性靠近、调情或展现男性气质时，你会出现带有欲望的触碰冲动，可选4–5分；例二：只有在关系安全时偶尔出现，可选2–3分；例三：你想拥抱或依靠他，但触碰并不带性意味，可选0–1分。',
	20: '例一：温柔、硬朗、运动或文艺等多种男性风格都可能触发你的性吸引，可选4–5分；例二：只有一个很狭窄的男性模板有效，可选2–3分；例三：没有哪种男性表达会让你产生性欲望，可选0–1分。'
});

Object.assign(questionExamples, {
	21: '例一：与有吸引力的男性接吻或亲密触碰时，你会明确感到性欲被增强并想继续，可选4–5分；例二：有时带性意味、有时只是感官舒适，可选2–3分；例三：触碰主要意味着亲密与安心，不会引发性冲动，可选0–1分。',
	22: '例一：当某位男性明确表达暧昧或性兴趣后，你原本不明显的性吸引会被唤起，可选4–5分；例二：只对少数已经有好感的人如此，可选2–3分；例三：对方示好只让你觉得开心、紧张或有压力，不会产生性欲望，可选0–1分。',
	23: '例一：你能喜欢男演员的外形、认可能力或羡慕体态，同时清楚这些是否伴随性接触欲望，可选4–5分；例二：有时会把崇拜或想被认可混成吸引，可选2–3分；例三：很难区分欣赏男性与想和男性交往性接触，可选0–1分。',
	24: '例一：想象与有吸引力的男性发生性行为时，整体感受偏期待或兴奋，可选4–5分；例二：好奇、犹豫和空白同时存在，可选2–3分；例三：通常是抗拒、压力，或只能想象自己在配合社会期待，可选0–1分。',
	25: '例一：你曾对一位非二元或性别酷儿对象产生明确的性幻想与触碰欲望，可选4–5分；例二：只有一次或只在特定表达上出现，可选2–3分；例三：你能支持、欣赏或亲近非二元者，但从未产生性吸引，可选0–1分。',
	26: '例一：某人的中性穿搭、混合气质或双性化表达本身会引发你的性兴奋，可选4–5分；例二：只有某些特定组合偶尔有效，可选2–3分；例三：你觉得这种表达很美或很酷，却没有性欲望，可选0–1分。',
	27: '例一：你会自然把某些非二元或中性表达对象视为潜在性伴侣，而不只是朋友或审美对象，可选4–5分；例二：只有极少数具体对象会进入范围，可选2–3分；例三：这类对象不会进入你的性关系想象，可选0–1分。',
	28: '例一：你先被某人吸引，后来得知对方不是男性或女性时，原有性吸引仍然存在，可选4–5分；例二：会明显动摇但不一定消失，可选2–3分；例三：一旦无法把对方归入预期性别，性吸引通常中断，可选0–1分。',
	29: '例一：中性声音、混合身体线索或不易二分的姿态会直接点燃性欲望，可选4–5分；例二：需要暧昧互动或特定对象配合才出现，可选2–3分；例三：这些线索只带来好奇或审美欣赏，可选0–1分。',
	30: '例一：过去几年里，你不止一次被不同的非二元、中性或混合表达对象性吸引，可选4–5分；例二：只有一两次明确经历，可选2–3分；例三：没有可回忆的例子，且不只是因为现实中从未接触，可选0–1分。'
});

Object.assign(questionExamples, {
	31: '例一：在知道某人的性别认同之前，你已经因对方的气质、动作或互动产生明确性吸引，可选4–5分；例二：有时可以先吸引、之后仍想确认性别，可选2–3分；例三：必须先确认对方属于某个性别，吸引才可能继续，可选0–1分。',
	32: '例一：一位非二元或中性表达对象向你明确调情后，你会出现相应的性兴奋与靠近冲动，可选4–5分；例二：只对少数已经熟悉的人如此，可选2–3分；例三：对方的兴趣只让你感到被喜欢或不知所措，不会唤起性吸引，可选0–1分。',
	33: '例一：与有吸引力的非二元对象接吻或亲密触碰时，你会明确感到性意味并想继续，可选4–5分；例二：有时是性欲、有时只是拥抱的舒适，可选2–3分；例三：亲密触碰对你可以很温暖，却不会转成性冲动，可选0–1分。',
	34: '例一：你可能先被某人的声音、表情或互动吸引，完全不需要先判断TA是男是女，可选4–5分；例二：偶尔如此，但多数时候仍会先分类，可选2–3分；例三：性别类别是你判断性吸引能否发生的必要前提，可选0–1分。',
	35: '例一：你可以积极支持非二元权益、欣赏中性风格，同时准确判断自己是否真的想和某位对象发生性接触，可选4–5分；例二：两种感受有时会混在一起，可选2–3分；例三：常把价值认同或审美喜欢直接当成性吸引证据，可选0–1分。',
	36: '例一：想象与有吸引力的非二元或混合表达对象发生性行为时，整体感受偏期待与兴奋，可选4–5分；例二：好奇和犹豫并存，可选2–3分；例三：通常只有抗拒、空白，或完全无法把性放进想象，可选0–1分。',
	37: '例一：即使对方身份符合你的取向，某些身体性征也会明显增强或削弱你的性吸引，可选4–5分；例二：身体线索有影响但不是决定性条件，可选2–3分；例三：身体性征很少影响吸引是否出现，可选0–1分。',
	38: '例一：同一个人改变性别表达后，你的性吸引会随其女性化、男性化或中性气质明显变化，可选4–5分；例二：只对部分表达敏感，可选2–3分；例三：气质变化几乎不影响你对这个人的性吸引，可选0–1分。',
	39: '例一：某人的低沉声音、气味、走路姿态或说话动作会比身份标签更快触发你的性欲望，可选4–5分；例二：只有在整体氛围合适时偶尔有效，可选2–3分；例三：这些细节不会单独引发性吸引，可选0–1分。',
	40: '例一：同为男性、女性或非二元者，不同身体与气质表达会让你从强烈吸引变成完全无感，可选4–5分；例二：有差异但范围不大，可选2–3分；例三：只要性别方向符合，具体表达通常不太影响吸引，可选0–1分。'
});

Object.assign(questionExamples, {
	41: '例一：你常常是先被某人的幽默、互动张力和相处感受吸引，后来才注意到性别，可选4–5分；例二：性别与个体互动同样重要，可选2–3分；例三：只有先符合特定性别类别，个体魅力才可能继续起作用，可选0–1分。',
	42: '例一：即使某人的性别标签完全符合你的取向，身体、声音或互动方式不对时，你仍然不会产生性吸引，可选4–5分；例二：具体线索会影响强弱但不决定有无，可选2–3分；例三：标签符合时通常就足以进入吸引范围，可选0–1分。',
	43: '例一：你原以为自己不会被某类性别吸引，却因某人的气质、身体或互动被明确点燃性欲望，可选4–5分；例二：只发生过少数模糊例外，可选2–3分；例三：标签不在预期范围时，再合适的具体线索也不会触发，可选0–1分。',
	44: '例一：你常先出现身体兴奋、性幻想或想触碰的冲动，之后才意识到对方是什么身份，可选4–5分；例二：身体反应与身份判断几乎同时发生，可选2–3分；例三：你通常先完成性别分类，再决定自己能否被吸引，可选0–1分。',
	45: '例一：因为家人、同伴或社群期待，你曾把真实吸引解释成“只是欣赏”或强迫自己喜欢另一类人，可选4–5分；例二：只在公开表达时会修正说法，可选2–3分；例三：外界期待很少改变你对内在吸引的判断，可选0–1分。',
	46: '例一：你曾因“这个性别才是我应该喜欢的”而反复检查、放大或否认自己的感受，可选4–5分；例二：偶尔会受脚本影响但能重新分辨，可选2–3分；例三：你通常不会用应该不应该替代真实吸引证据，可选0–1分。',
	47: '例一：对某类对象产生性冲动后，你会因羞耻或害怕后果而立即压下、否认，甚至回避相关对象，可选4–5分；例二：只在不安全环境中会压抑，可选2–3分；例三：你很少因内化偏见否认已经出现的吸引，可选0–1分。',
	48: '例一：想象没有家庭、宗教、同伴评价与安全代价时，你会立刻更清楚自己真正想靠近谁，可选4–5分；例二：会清楚一些但仍有疑问，可选2–3分；例三：去除外部评价后，你对吸引方向的判断基本没有变化，可选0–1分。',
	49: '例一：你没有和某类人发生过性行为，但仍能根据自发幻想与欲望判断自己会不会被该类人吸引，可选4–5分；例二：仍会把经历当成重要证明，可选2–3分；例三：你认为没有实践就完全不能知道取向，可选0–1分。',
	50: '例一：你能欣赏或使用某类幻想题材，同时知道现实中并不想与相同对象发生性关系，可选4–5分；例二：有时能区分、有时会直接套用，可选2–3分；例三：你通常把幻想出现过什么直接当成现实取向结论，可选0–1分。'
});

Object.assign(questionExamples, {
	51: '例一：你会想和某人约会、成为彼此特别的人，却不想进行任何性接触，并能清楚区分两者，可选4–5分；例二：心动与性欲常一起出现、偶尔难分，可选2–3分；例三：只要想恋爱就默认等于有性吸引，可选0–1分。',
	52: '例一：你可以长时间欣赏某人的脸、穿搭或气质，却明确没有想接吻或发生性行为的冲动，可选4–5分；例二：欣赏有时会转成欲望，可选2–3分；例三：只要觉得好看就会直接判定为性吸引，可选0–1分。',
	53: '例一：你会很想与朋友拥抱、依偎或牵手来获得安心，同时清楚这不带性唤起，可选4–5分；例二：部分触碰是感官亲密、部分会变成性欲，可选2–3分；例三：你很难区分想贴近身体与想发生性接触，可选0–1分。',
	54: '例一：无论面对女性、男性或非二元对象，你都很少出现指向对方的自发性欲望，几年里也几乎没有明确例子，可选4–5分；例二：偶尔、微弱地出现过，可选2–3分；例三：性吸引是较常规且容易识别的体验，可选0–1分。',
	55: '例一：你会觉得很多人漂亮、有魅力，甚至愿意长时间欣赏，但这些感受通常停在观看与赞叹，不会转成性接触欲望，可选4–5分；例二：只有少数欣赏会转成欲望，可选2–3分；例三：审美吸引常自然伴随性欲，可选0–1分。',
	56: '例一：你的性吸引可能一年只出现几次、很快消退，或必须满足非常特殊的氛围与对象条件，可选4–5分；例二：频率比多数人少但并非罕见，可选2–3分；例三：性吸引通常稳定、频繁且不依赖特殊条件，可选0–1分。',
	57: '例一：外貌再符合偏好，如果没有长期信任与深度情感连接，你也不会产生性吸引；连接建立后才可能出现，可选4–5分；例二：情感连接会增强但不是必要条件，可选2–3分；例三：你常在尚未熟悉对方时就能产生明确性吸引，可选0–1分。',
	58: '例一：你可能几年只被一两个人性吸引，但每次出现时身体反应、幻想和触碰欲望都很明确，可选4–5分；例二：低频且信号仍有些模糊，可选2–3分；例三：你的吸引要么频繁，要么即使出现也难以确认，可选0–1分。',
	59: '例一：判断吸引时，你会稳定参考自发幻想、性唤起、想进行性接触和关系脚本，而不是只凭经历或标签，可选4–5分；例二：有几条标准但容易随焦虑改变，可选2–3分；例三：常需要外界定义或单一事件替你决定，可选0–1分。',
	60: '例一：即使结果给出某个倾向，你也会把它当成整理经验的地图，未来有新体验时允许调整，可选4–5分；例二：希望有结论但也能保留例外，可选2–3分；例三：更希望测试一次性证明身份，此后所有经历都必须服从标签，可选0–1分。'
});

function getQuestionFocus(questionNumber) {
	if ([1, 13, 25].includes(questionNumber)) return '这里问的是是否曾经出现过明确的性吸引。重点不是你是否发生过性行为、是否愿意立刻行动、是否有过相关关系经验，而是这类对象是否曾经进入你的性欲望范围。可以参考自发性幻想、想发生性意味触碰、身体兴奋、关系中自然包含性的想象等线索。';
	if ([2, 14].includes(questionNumber)) return '这里把自发幻想作为线索。自发幻想通常比刻意测试、为了证明自己而强迫想象，更能反映吸引方向。若某类对象只在你“努力想象自己应该喜欢TA”时才出现，而平时没有自然浮现，分数应更保守。';
	if ([3, 15].includes(questionNumber)) return '这里关注的是某一性别方向是否进入你的性吸引范围，而不是要求你对任何人的身份进行额外分类。请按你对女性或男性相关对象的真实性吸引经验作答，重点看是否会产生性幻想、欲望、身体兴奋或性意味亲密想象。';
	if ([4, 16, 29].includes(questionNumber)) return '这里关注身体或心理层面的性兴奋。它可以是生理唤起，也可以是明确的欲望感、性幻想被点燃、想靠近并发生带有性意味的触碰。请把它与紧张、害羞、崇拜、害怕、审美震撼或社交兴奋区分开。';
	if ([5, 17].includes(questionNumber)) return '这里问的是关系想象中的“性是否自然可进入”。你不需要真的想立即发生性行为，也不需要认同性关系必须发生；题目只评估当你想象与这类对象建立亲密关系时，性是否会自然成为可能选项。';
	if ([6, 18, 30].includes(questionNumber)) return '这里看频率而不是单次强度。低频不等于不存在，但如果几年内几乎没有可回忆的例子，分数就应该更低。若出现次数少但每次都很明确，可以在本题保守作答，并在第58题反映“低频但明确”。';
	if ([7, 19].includes(questionNumber)) return '这里的“想靠近/想触碰”必须带有性意味。普通亲近、想拥抱取暖、想获得认可、想被照顾、想成为朋友，不能直接算作高分。更可靠的线索是触碰想象本身带有欲望、身体兴奋或性幻想。';
	if ([8, 20].includes(questionNumber)) return '这里不是要求你对所有类型都平均有吸引，而是看吸引是否只依赖一个非常狭窄的模板。若你会被多种女性/男性风格吸引，说明该方向较稳定；若只对极少数高度特定类型有效，可以给中低分。';
	if ([9, 21, 33].includes(questionNumber)) return '这里用亲密触碰来区分性吸引与感官吸引。拥抱、亲吻、依偎可以是非性的，也可以带有性意味。关键不是动作本身，而是你是否感到欲望、性兴奋、想继续走向更性化的接触。';
	if ([10, 22, 32].includes(questionNumber)) return '这里捕捉回应性吸引。有些人的性吸引不是先自发出现，而是在对方表达暧昧、欲望、邀请或明确兴趣后被唤起。若你经常需要对方信号作为触发条件，这一题可以较高。';
	if ([11, 23, 35].includes(questionNumber)) return '这里是在做证据校准。认同、欣赏、羡慕、支持、审美喜欢、希望被对方认可，都不必自动等于性吸引。高分表示你能把这些体验拆开，而不是把所有强烈感受都归入性吸引。';
	if ([12, 24, 36].includes(questionNumber)) return '这里看你面对“与这类对象发生性行为”的总体情绪基调。期待、兴奋、好奇、平静、空白、压力、抗拒都可以如实反映。题目不要求你真的想行动，而是看这种想象是否与欲望相容。';
	if ([28, 31, 34].includes(questionNumber)) return '这里问性别分类是否是吸引发生的前置条件。若你必须先确认对方属于某个性别才会继续产生吸引，分数可偏低；若吸引常常先于分类出现，或你并不需要清楚知道对方性别，分数可偏高。';
	if ([37, 38, 39, 40, 42, 43, 44].includes(questionNumber)) return '这一组关注身体性征、气质、声音、气味、姿态、动作方式、互动张力等线索如何影响性吸引。它们用于补足“只按性别身份分类”的不足，因为很多人的吸引不是被抽象标签触发，而是被具体身体和表达线索触发。';
	if ([45, 46, 47, 48].includes(questionNumber)) return '这一组评估社会脚本和安全压力。高分不说明你的吸引“不真实”，而是提示家庭、同伴、宗教、圈层期待、强制异性恋或身份标签压力可能干扰了你的判断。解读时应提高自发身体经验的权重。';
	if ([49, 50, 51, 52, 53].includes(questionNumber)) return '这一组用于区分性经历、幻想、浪漫、审美、感官亲密与性吸引。它们可能彼此重叠，但不能简单等同。辨别越清楚，结果越适合作为方向判断；辨别越模糊，结果越适合作为进一步自我观察的线索。';
	if ([54, 55, 56, 57].includes(questionNumber)) return '这一组用于识别无性恋谱系线索：整体性吸引很少、低频、微弱、条件性强，或需要深度情感连接后才出现。高分不代表“有问题”，而是说明你的性吸引可能不符合主流有性恋脚本。';
	if ([58, 59, 60].includes(questionNumber)) return '这一组帮助整合结果。低频但明确的吸引、稳定的证据标准、开放的标签态度，都会影响结果呈现方式。你可以使用“主要/也会/很少/需要条件/暂时不确定”等描述，而不是强迫自己立刻固定身份。';
	return '请按近几年较稳定、较真实的体验作答。少见不等于不真实，但反复出现的体验权重更高；一次非常特殊的例外可以参考，但不应压过长期模式。';
}

function buildExplanation(questionNumber, baseExplanation) {
	return `<p><strong>本题用意：</strong>${getQuestionFocus(questionNumber)}</p>
		<p><strong>具体案例：</strong>${questionExamples[questionNumber]}</p>
		<p><strong>辨别提醒：</strong>${baseExplanation}</p>`;
}

function renderQuestions() {
	const container = document.getElementById('questionsContainer');
	let questionNumber = 1;
	container.innerHTML = sections.map(section => {
		const questionsHtml = section.questions.map(([text, explanation]) => {
			const selectHtml = options.map(([value, label]) => `<option value="${value}">${value} - ${label}</option>`).join('');
			const html = `<div class="question">
				<div class="question-title" onclick="toggleExplanation(this)">
					<span class="q-number">${questionNumber}.</span>${text}
				</div>
				<select name="q${questionNumber}">
					<option value="" disabled selected>请选择...</option>
					${selectHtml}
				</select>
				<div class="explanation">${buildExplanation(questionNumber, explanation)}</div>
			</div>`;
			questionNumber++;
			return html;
		}).join('');
		return `<div class="section"><h2>${section.title}</h2><p>${section.desc}</p>${questionsHtml}</div>`;
	}).join('');
}

function toggleExplanation(el) {
	const explanation = el.parentElement.querySelector('.explanation');
	if (!explanation) return;
	const isOpen = explanation.classList.contains('show');
	document.querySelectorAll('.explanation').forEach(exp => exp.classList.remove('show'));
	if (!isOpen) explanation.classList.add('show');
}

document.addEventListener('click', function (e) {
	if (!e.target.closest('.question')) document.querySelectorAll('.explanation').forEach(exp => exp.classList.remove('show'));
});

function updateProgress() {
	const form = document.getElementById('sexualOrientationQuiz');
	let completed = 0;
	for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
		if (form.elements[`q${i}`] && form.elements[`q${i}`].value !== '') completed++;
	}
	const percentage = (completed / TOTAL_QUESTIONS) * 100;
	document.getElementById('globalProgressText').textContent = `进度：${completed}/${TOTAL_QUESTIONS}`;
	document.getElementById('globalProgressBar').style.width = percentage + '%';
}

function saveAnswersToLocalStorage() {
	const form = document.getElementById('sexualOrientationQuiz');
	const answers = {};
	for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
		const select = form.elements[`q${i}`];
		if (select) answers[`q${i}`] = select.value;
	}
	localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

function loadAnswersFromLocalStorage() {
	const saved = localStorage.getItem(STORAGE_KEY);
	if (!saved) return;
	const answers = JSON.parse(saved);
	const form = document.getElementById('sexualOrientationQuiz');
	for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
		const select = form.elements[`q${i}`];
		if (select && answers[`q${i}`] !== undefined && answers[`q${i}`] !== '') select.value = answers[`q${i}`];
	}
	updateProgress();
}

function getScores() {
	const form = document.getElementById('sexualOrientationQuiz');
	const scores = {};
	for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
		const el = form.elements[`q${i}`];
		if (!el || el.value === '') {
			alert(`请完成第 ${i} 题后再计算结果。`);
			return null;
		}
		scores[`q${i}`] = parseInt(el.value, 10);
	}
	return scores;
}

function mean(values) {
	return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function avg(scores, nums) {
	return mean(nums.map(num => scores[`q${num}`]));
}

function getLevel(score) {
	if (score >= 4.0) return '很高';
	if (score >= 3.0) return '较高';
	if (score >= 2.0) return '中等';
	if (score >= 1.0) return '偏低';
	return '很低';
}

function getIntensity(score) {
	if (score >= 4.5) return { text: '非常强烈', color: '#16a34a' };
	if (score >= 3.5) return { text: '中等偏强', color: '#22c55e' };
	if (score >= 2.5) return { text: '中等', color: '#f59e0b' };
	if (score >= 1.5) return { text: '中等偏弱', color: '#f97316' };
	return { text: '微弱', color: '#ef4444' };
}

function getOrientationLabel(ctx) {
	if (ctx.overallSexualAttraction < 1.5 || (ctx.maxAvg < 1.2 && ctx.embodiedSpecificity < 1.5) || (ctx.maxAvg < 1.8 && ctx.aceSpectrumSignal >= 3.4)) {
		return {
			title: '无性恋谱系倾向',
			desc: '你的性别相关吸引、身体性征吸引和气质触发线索整体都偏低，且无性恋谱系线索较明显。这并不表示你不能有浪漫、审美、情感或感官亲密需求，而是说明“想与他人发生性接触”的内在吸引可能很少、甚至几乎不出现。'
		};
	}
	if (ctx.aceSpectrumSignal >= 3.6 && ctx.overallSexualAttraction < 2.4) {
		return {
			title: '灰性恋／条件性吸引倾向',
			desc: '你的性吸引并非完全缺席，但整体强度、频率或自发性偏低，可能更依赖特定条件、深度情感连接或少数明确对象。建议结合无性恋谱系量表进一步区分灰性恋、半性恋或其他条件性吸引模式。'
		};
	}

	const active = [];
	if (ctx.avgWomen >= 2.6) active.push('women');
	if (ctx.avgMen >= 2.6) active.push('men');
	if (ctx.avgNb >= 2.6) active.push('nb');
	const panish = ctx.personCenteredAttraction >= 3.6;
	const strongEmbodied = ctx.embodiedSpecificity >= 3.6;
	const questioning = ctx.labelFlexibility >= 3.8;
	const fluid = ctx.lowFrequencyClear >= 4 || ctx.conditionalAttraction >= 3.6;

	if (active.length === 0) {
		return {
			title: '性吸引方向暂不清晰',
			desc: '你对女性/女性气质、男性/男性气质、非二元/中性混合表达的评分都未明显高于中位水平。可能是性吸引本身较少、体验较低频，或仍在辨别不同吸引类型。'
		};
	}

	if (active.length === 1) {
		const g = active[0];
		const targetName = g === 'women' ? '女性/女性气质' : g === 'men' ? '男性/男性气质' : '非二元/中性/混合表达';
		const notes = [questioning ? '你也更适合用开放或比例化语言描述自己。' : '', fluid ? '你的吸引可能具有低频、条件性或阶段性特点。' : ''].filter(Boolean).join('');
		return {
			title: `${targetName}单向倾向`,
			desc: `你的评分显示性吸引主要集中在${targetName}，其他方向相对较弱。${panish ? '不过你在“更看具体的人/气质/互动”上也较高，说明这个单向倾向未必是僵硬的身份筛选。' : ''}${strongEmbodied ? '你的身体性征或气质触发点也较明显，建议进一步记录具体是什么线索在起作用。' : ''}${notes}`
		};
	}

	const targets = [];
	if (active.includes('women')) targets.push('女性/女性气质');
	if (active.includes('men')) targets.push('男性/男性气质');
	if (active.includes('nb')) targets.push('非二元/中性/混合表达');
	const title = panish ? '泛性恋／不限性别倾向' : active.includes('nb') ? '多性恋倾向' : '双性恋倾向';
	const notes = [questioning ? '你仍可能更适合开放标签。' : '', fluid ? '你的体验也可能具有低频、条件性或流动性。' : ''].filter(Boolean).join('');
	return {
		title,
		desc: `你的评分显示性吸引可能同时指向${targets.join('、')}。${panish ? '性别标签不像你的第一筛选条件，更接近“不限性别/看人本身”的结构。' : '不同方向强度不对称也很常见，并不影响多向取向的成立。'}${strongEmbodied ? '同时，身体性征或气质触发点对你可能很重要。' : ''}${notes}`
	};
}

function getContext(scores) {
	const avgWomen = avg(scores, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	const avgMen = avg(scores, [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
	const avgNb = avg(scores, [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
	const embodiedSpecificity = avg(scores, [37, 38, 39, 40, 42, 43, 44]);
	const personCenteredAttraction = avg(scores, [39, 41, 43, 44]);
	const socialPressure = avg(scores, [45, 46, 47, 48]);
	const aceSpectrumSignal = avg(scores, [54, 55, 56, 57]);
	const conditionalAttraction = avg(scores, [56, 57]);
	const overallSexualAttraction = mean([avgWomen, avgMen, avgNb, embodiedSpecificity, personCenteredAttraction]);
	return {
		scores,
		avgWomen,
		avgMen,
		avgNb,
		maxAvg: Math.max(avgWomen, avgMen, avgNb),
		embodiedSpecificity,
		personCenteredAttraction,
		socialPressure,
		aceSpectrumSignal,
		conditionalAttraction,
		overallSexualAttraction,
		distinctionClarity: avg(scores, [49, 50, 51, 52, 53]),
		labelFlexibility: avg(scores, [58, 59, 60]),
		lowFrequencyClear: scores.q58
	};
}

function getDirectionRanking(ctx) {
	return [
		{ key: 'women', name: '女性/女性气质', short: '女性方向', score: ctx.avgWomen },
		{ key: 'men', name: '男性/男性气质', short: '男性方向', score: ctx.avgMen },
		{ key: 'nonbinary', name: '非二元/中性/混合表达', short: '非二元方向', score: ctx.avgNb }
	].sort((a, b) => b.score - a.score);
}

function getDirectionPattern(ctx, ranking) {
	const top = ranking[0];
	const second = ranking[1];
	const gap = top.score - second.score;
	if (top.score < 1.5) return '三个方向的性吸引线索整体都较少。此时更值得先观察整体性吸引的频率、条件和无性恋谱系线索，而不是勉强比较哪个方向更高。';
	if (gap < 0.35) return `前三个方向的差距较小，${top.name}与${second.name}都进入了你的相对高位。多向吸引并不要求各方向完全对称，比例不同仍可能构成稳定模式。`;
	if (second.score >= 2.6) return `${top.name}相对最突出，但${second.name}同样有清楚线索。你的结构更像有主次的多向吸引，而不是只能归入单一方向。`;
	return `${top.name}明显高于另外两个方向，当前作答呈现较清楚的主方向。仍需结合具体触发点与社会脚本压力，判断这种差异来自稳定吸引、接触机会还是压抑影响。`;
}

function observationRow(group, name, score, interpretation, checkpoint) {
	return `<tr>
		<td class="observation-dimension"><small>${group}</small><strong>${name}</strong></td>
		<td class="observation-score"><strong>${score.toFixed(1)}</strong><span>${getLevel(score)}</span></td>
		<td>${interpretation}</td>
		<td>${checkpoint}</td>
	</tr>`;
}

function buildAnalysisCard(title, score, body, details = '') {
	const titleParts = title.match(/^(\d+)\.\s*(.+)$/);
	const header = window.PrismScale.createResultDimensionHeader({
		index: titleParts ? titleParts[1] : null,
		title: titleParts ? titleParts[2] : title,
		score,
		level: `${getIntensity(score).text} · ${getLevel(score)}`
	});
	return `<div class="insight-card result-dimension-card">
		${header}
		<p><strong>当前解读：</strong>${body}</p>
		${details}
	</div>`;
}

function generateDetailedAnalysis(ctx) {
	const scores = ctx.scores;
	let html = `<h3 class="result-section-heading">三、九项线索的细读</h3>
		<p class="result-data-note">以下把方向、身体与气质触发点、无性恋谱系线索、外部压力、辨别清晰度和标签整合分开呈现。维度之间可以同时成立，不应彼此替代。</p>`;

	html += buildAnalysisCard('1. 女性/女性气质相关性吸引', ctx.avgWomen,
		ctx.avgWomen >= 3.2 ? '女性、女性气质或女性相关线索明显进入你的性吸引范围，且并非偶发。' : ctx.avgWomen >= 2.0 ? '女性/女性气质相关吸引存在，但可能更依赖具体情境、类型或关系互动。' : '女性/女性气质相关吸引整体较弱，可能偏向其他方向，或整体性吸引较低。',
		`<ul><li>自发幻想：第2题 ${scores.q2}/5</li><li>女性是否进入性吸引范围：第3题 ${scores.q3}/5</li><li>女性化身体/气质线索：第4题 ${scores.q4}/5</li><li>总体情绪基调：第12题 ${scores.q12}/5</li></ul>`);

	html += buildAnalysisCard('2. 男性/男性气质相关性吸引', ctx.avgMen,
		ctx.avgMen >= 3.2 ? '男性、男性气质或男性相关线索明显进入你的性吸引范围，且并非偶发。' : ctx.avgMen >= 2.0 ? '男性/男性气质相关吸引存在，但可能更依赖特定类型、回应信号或情境。' : '男性/男性气质相关吸引整体较弱；若社会脚本压力高，可特别留意是否有高估或压低。',
		`<ul><li>自发幻想：第14题 ${scores.q14}/5</li><li>男性是否进入性吸引范围：第15题 ${scores.q15}/5</li><li>男性化身体/气质线索：第16题 ${scores.q16}/5</li><li>总体情绪基调：第24题 ${scores.q24}/5</li></ul>`);

	html += buildAnalysisCard('3. 非二元/中性/混合表达相关性吸引', ctx.avgNb,
		ctx.avgNb >= 3.2 ? '你的性吸引范围明显覆盖非二元、中性或混合表达对象。' : ctx.avgNb >= 2.0 ? '你可能对非二元/中性/混合表达有一定开放度，但强度受接触机会和具体表达影响。' : '此维度偏低不必直接理解为排除某个方向，也可能只是现实中接触或线索不足。',
		`<ul><li>中性/混合表达：第26题 ${scores.q26}/5</li><li>不先归类性别：第34题 ${scores.q34}/5</li><li>频率线索：第30题 ${scores.q30}/5</li><li>总体情绪基调：第36题 ${scores.q36}/5</li></ul>`);

	html += buildAnalysisCard('4. 身体性征、性别气质与具体触发点', ctx.embodiedSpecificity,
		ctx.embodiedSpecificity >= 3.6 ? '你的性吸引明显受身体性征、性别气质、声音、姿态、动作或互动方式影响。' : ctx.embodiedSpecificity >= 2.4 ? '你可能既会参考身份标签，也会参考身体/气质/互动等具体线索。' : '身体性征或气质触发点在你的性吸引结构中可能不是主轴，或整体性吸引本来就较低。',
		`<ul><li>身体性征影响：第37题 ${scores.q37}/5</li><li>性别气质影响：第38题 ${scores.q38}/5</li><li>声音/气味/姿态影响：第39题 ${scores.q39}/5</li><li>标签之外的触发：第43题 ${scores.q43}/5</li></ul>`);

	html += buildAnalysisCard('5. 更看具体的人与互动', ctx.personCenteredAttraction,
		ctx.personCenteredAttraction >= 3.6 ? '性别类别通常不是你的第一筛选条件，具体的人、互动张力、气质与关系感受更能预测吸引。' : ctx.personCenteredAttraction >= 2.4 ? '你会同时参考性别类别与具体互动，两者都不是绝对条件。' : '性别或身体线索可能比相处后的个体互动更早进入你的吸引判断。',
		`<ul><li>声音／姿态等具体线索：第39题 ${scores.q39}/5</li><li>更看具体的人：第41题 ${scores.q41}/5</li><li>标签之外仍可能触发：第43题 ${scores.q43}/5</li><li>身体反应先于身份分类：第44题 ${scores.q44}/5</li></ul>`);

	html += buildAnalysisCard('6. 无性恋谱系线索', ctx.aceSpectrumSignal,
		ctx.aceSpectrumSignal >= 3.6 ? '你有明显无性恋谱系线索：性吸引可能整体少、弱、低频、条件性强，或需要深度情感连接才出现。' : ctx.aceSpectrumSignal >= 2.4 ? '你可能有部分低频或条件性吸引线索，但仍需结合前三个方向维度一起看。' : '无性恋谱系线索不突出，若前三个方向维度有明显高分，可优先理解为性吸引方向差异。',
		`<ul><li>很少对任何性别/性征/气质产生性吸引：第54题 ${scores.q54}/5</li><li>审美强但性吸引弱：第55题 ${scores.q55}/5</li><li>低频/微弱/条件性：第56题 ${scores.q56}/5</li><li>深度情感后才可能出现：第57题 ${scores.q57}/5</li></ul>`);

	html += buildAnalysisCard('7. 社会脚本压力与压抑影响', ctx.socialPressure,
		ctx.socialPressure >= 3.6 ? '外部评价、家庭/同伴期待或内化偏见可能正在干扰你的取向判断。建议优先参考身体反应、自发幻想和想触碰的冲动。' : '外部压力对结果的干扰相对有限，你的方向判断通常更稳定。',
		`<ul><li>社会期待影响：第45题 ${scores.q45}/5</li><li>“应该喜欢”脚本：第46题 ${scores.q46}/5</li><li>压抑/否认：第47题 ${scores.q47}/5</li><li>去除外部评价后更清楚：第48题 ${scores.q48}/5</li></ul>`);

	html += buildAnalysisCard('8. 吸引类型辨别清晰度', ctx.distinctionClarity,
		ctx.distinctionClarity >= 3.6 ? '你较能区分性吸引、浪漫吸引、审美吸引、感官吸引、幻想与经历，结果可信度更高。' : '你可能仍在辨别不同吸引类型。建议把具体体验分成“想看、想靠近、想恋爱、想性接触”等项目记录。',
		`<ul><li>经历与取向分开：第49题 ${scores.q49}/5</li><li>幻想与现实分开：第50题 ${scores.q50}/5</li><li>浪漫与性分开：第51题 ${scores.q51}/5</li><li>审美与性分开：第52题 ${scores.q52}/5</li><li>感官与性分开：第53题 ${scores.q53}/5</li></ul>`);

	html += buildAnalysisCard('9. 标签整合与开放描述', ctx.labelFlexibility,
		ctx.labelFlexibility >= 3.6 ? '你更适合用比例、倾向、条件和开放标签描述自己，而不是只用单一标签概括。' : '你可能更需要一个相对稳定的标签，再用分量表细节修正它。',
		`<ul><li>低频但明确：第58题 ${scores.q58}/5</li><li>证据标准：第59题 ${scores.q59}/5</li><li>结果用于理解而非固定：第60题 ${scores.q60}/5</li></ul>`);

	return html;
}

function generateSuggestions(ctx, label) {
	let html = `<h3 class="result-section-heading">五、自我探索路线</h3>
	<div class="action-box">
		<p>以下建议不是要求你立刻选择一个身份标签，而是帮助你把性吸引拆成可观察的线索：方向、强度、触发条件、身体反应、社会脚本影响，以及你对标签的使用偏好。</p>
		<ol>`;

	if (ctx.overallSexualAttraction < 1.8 || ctx.aceSpectrumSignal >= 3.6) {
		html += '<li><strong>先确认整体性吸引强度：</strong>你的方向判断可能受整体性吸引偏低、低频或条件性出现影响。建议结合无性恋谱系量表继续区分无性恋、灰性恋、半性恋、低频但明确的性吸引，以及审美/浪漫很强但性吸引很低的情况。</li>';
	} else {
		html += '<li><strong>用模式替代自我证明：</strong>不要只问“我到底是什么”，也问“我在什么情境、对什么人、以什么方式出现性吸引”。例如：是被身份标签触发，还是被身体性征、气质、声音、姿态、互动张力或关系安全感触发。</li>';
	}

	if (ctx.distinctionClarity < 2.6) html += '<li><strong>先拆分吸引类型：</strong>记录每次被触动时，你是想看TA、想靠近TA、想和TA恋爱、想被TA认可，还是想发生性接触。很多误判来自把审美吸引、浪漫吸引、感官吸引和性吸引混成同一种“喜欢”。</li>';
	if (ctx.socialPressure >= 3.6) html += '<li><strong>处理外部脚本：</strong>如果你长期处于“应该喜欢谁”的压力里，建议把身体信号、自发幻想、真实靠近冲动作为更高权重证据，同时降低家庭期待、同伴评价、圈层标签压力对结果的影响。</li>';
	if (ctx.personCenteredAttraction >= 3.6) html += '<li><strong>如果你更偏不限性别：</strong>可以用“我更看具体的人、气质和互动”解释自己，不必急着在泛/双/多之间二选一。你也可以先使用“不限性别倾向”“更看人本身”这类描述性语言。</li>';
	else if (ctx.embodiedSpecificity >= 3.6) html += '<li><strong>如果身体/气质线索很重要：</strong>把身份类别和具体触发点分栏记录，例如身体性征、声音、气质、姿态、互动方式。这样能避免把复杂吸引压缩成“只喜欢某个性别”。</li>';
	if (ctx.labelFlexibility >= 3.6 || ctx.conditionalAttraction >= 3.6 || ctx.lowFrequencyClear >= 4) html += '<li><strong>允许探索、条件性和低频：</strong>少见不等于不真实，必须满足特定条件才出现也不等于你测错了。可以使用“主要/也会/很少/需要情感连接/目前不确定”等比例化、条件化描述。</li>';
	html += `<li><strong>当前结果的使用方式：</strong>当前倾向描述为“${label.title}”。建议把它当成现阶段的观察地图，而不是身份判决书。若未来经历、关系状态或自我理解发生变化，可以重新作答并比较变化。</li></ol>
	<p class="result-data-note">若直接表达取向可能影响你的安全、住所、经济来源或重要关系，请优先保护自己；标签公开与否由你决定。</p></div>`;
	return html;
}

function renderResult(ctx) {
	const label = getOrientationLabel(ctx);
	const resultDiv = document.getElementById('result');
	const ranking = getDirectionRanking(ctx);
	const directionAverage = mean([ctx.avgWomen, ctx.avgMen, ctx.avgNb]);
	const pressureNote = ctx.socialPressure >= 3.6
		? '<p><strong>需要额外留意：</strong>你的社会脚本压力或压抑影响较高。阅读方向差异时，应给自发幻想、身体反应和真实靠近冲动更高权重，同时允许“暂时看不清”存在。</p>'
		: '<p><strong>结果稳定性：</strong>外部脚本干扰相对有限，但现实接触机会、关系状态与近期压力仍可能影响作答。</p>';
	const orientationDescription = label.desc.replaceAll('你的', '您的').replaceAll('你', '您');
	const orientationOverview = '本次作答更接近“' + label.title + '”的群体画像。' + orientationDescription + '请结合吸引频率、触发条件和三个方向的相对差异阅读，结果不能替您决定身份标签。';
	const frequencyReading = ctx.aceSpectrumSignal >= 3.6
		? '方向分数需要和低频、微弱或条件性线索一起读：某个方向相对最高，不等于性吸引会经常出现。'
		: '整体低频或条件性线索不突出，三个方向之间的差异更适合作为当前性吸引范围的主要参考。';
	const triggerReading = ctx.personCenteredAttraction >= 3.6
		? '具体的人、互动张力和关系感受比性别类别更能预测吸引；“不限性别”仍不等于会被所有人吸引。'
		: ctx.embodiedSpecificity >= 3.6
			? '身体性征、声音、姿态或性别气质是较重要触发点，同一性别内部也可能出现很大的吸引差异。'
			: '性别类别与具体身体／互动线索都没有绝对主导，建议继续记录吸引发生时的实际触发条件。';
	const calibrationReading = ctx.socialPressure >= 3.6
		? '社会期待或压抑影响较高，当前结果更适合作为待校准的线索。先比较自发幻想、身体反应与真实靠近冲动，再考虑标签。'
		: ctx.distinctionClarity < 2.6
			? '外部压力并不突出，但不同吸引类型的边界仍较模糊。先拆分“想看、想恋爱、想拥抱、想性接触”，会比立即选标签更可靠。'
			: '外部脚本干扰相对有限，且吸引类型辨别较清楚；当前结构可以作为较稳定的自我观察起点，但仍不是身份判决。';

	window.PrismScale.renderResultSummary({
		title: label.title,
		metrics: [
			{ label: '三个方向均值', value: `${directionAverage.toFixed(1)} / 5.0` },
			{ label: '相对突出方向', value: `${ranking[0].short} ${ranking[0].score.toFixed(1)}` },
			{ label: '辨别清晰度', value: `${ctx.distinctionClarity.toFixed(1)} · ${getLevel(ctx.distinctionClarity)}` }
		],
		lead: orientationOverview
	});

	document.getElementById('currentProfileAnalysis').innerHTML = `<div class="insight-card">
		<h3>一、当前画像与阅读边界</h3>
		<p><strong>当前倾向描述：</strong>${label.title}</p>
		<p><strong>您的具体表现：</strong></p>
		<ul>
			<li><strong>方向结构：</strong>${getDirectionPattern(ctx, ranking)}</li>
			<li><strong>频率与条件：</strong>${ctx.aceSpectrumSignal >= 3.6 ? '低频、微弱或条件性线索较突出，需要把“有没有方向”和“整体出现得多不多”分开理解。' : '无性恋谱系线索并不突出，方向分数更适合被理解为真实吸引范围的相对差异。'}</li>
			<li><strong>触发方式：</strong>${ctx.personCenteredAttraction >= 3.6 ? '你更看具体的人、气质与互动，性别类别未必是第一筛选条件。' : ctx.embodiedSpecificity >= 3.6 ? '身体性征、声音、姿态或气质等具体线索对吸引是否出现较重要。' : '身份类别与具体触发点都未形成绝对主导，当前模式更适合结合情境继续观察。'}</li>
		</ul>
		<p><strong>重要澄清：</strong>分数描述的是你的作答模式，不会证明、否定或替你决定身份。性吸引、浪漫吸引、审美吸引、性行为经历和关系选择是不同维度；标签可以使用，也可以暂缓。</p>
		${pressureNote}
	</div>`;

	document.getElementById('mainInterpretation').innerHTML = `<div class="insight-card">
		<h3>二、吸引方向的相对结构</h3>
		<p>${getDirectionPattern(ctx, ranking)}</p>
		<div class="direction-ranking">
			${ranking.map((item, index) => `<div class="direction-rank-item"><span>相对第 ${index + 1} 位</span><strong>${item.name}</strong><small>${item.score.toFixed(1)} / 5.0 · ${getLevel(item.score)}</small></div>`).join('')}
		</div>
		<p class="result-data-note">这里比较的是你自己的三个方向，而不是与他人排名。较低方向不等于排斥，较高方向也不等于必须采用某个标签。</p>
	</div>`;

	const crossGrid = document.createElement('div');
	crossGrid.className = 'orientation-cross-grid';
	crossGrid.innerHTML = `<div class='orientation-cross-card'><strong>方向 × 频率</strong><p>${frequencyReading}</p></div>
		<div class='orientation-cross-card'><strong>性别 × 具体触发</strong><p>${triggerReading}</p></div>
		<div class='orientation-cross-card'><strong>清晰度 × 外部压力</strong><p>${calibrationReading}</p></div>
		<div class='orientation-cross-card'><strong>吸引 × 现实选择</strong><p>性经历、伴侣性别、是否愿意行动和关系选择都受机会、安全与价值观影响，不能单独反推出性取向。</p></div>`;
	document.getElementById('mainInterpretation').firstElementChild.appendChild(crossGrid);

	document.getElementById('deepPersonalAnalysis').innerHTML = generateDetailedAnalysis(ctx);
	const analysisGuidance = [
		['方向均分内部可能同时包含“会不会被纳入范围”“多久出现一次”和“被什么线索触发”。均分相同的人，实际模式也可能完全不同。', '低分可能表示确实缺少该方向，也可能来自整体性吸引偏低、偏好类型很窄或现实接触有限。', '回想最近三次与女性相关的强烈感受，分别标记是欣赏、浪漫心动、感官亲近还是性接触冲动。'],
		['男性方向尤其容易受到“应该喜欢男性”或“不能喜欢男性”等脚本影响，自发性线索通常比为了验证身份而刻意思考更有参考价值。', '把敬佩、竞争、害怕、想被认可和明确的性欲望分开；它们都可能带来强烈身体反应。', '比较对男性的自发幻想、关系脚本与实际触碰想象是否指向同一个结论。'],
		['这一分数同时受现实接触机会与具体表达影响。支持多元性别、欣赏中性风格，并不自动等于产生性吸引。', '低分不能直接解释为排斥非二元者；先确认是没有吸引、没有样本，还是题目中的表达并非你的触发类型。', '遇到难以立即二分的人时，记录吸引是否在知道身份前已经出现，以及知道身份后有没有变化。'],
		['高分说明具体身体与表达线索很重要，不等于你必须偏好某种固定身体，也不代表对不符合偏好的人作价值判断。', '低分既可能表示你更看身份、关系或个体，也可能只是整体性吸引较少。', '把“觉得好看”和“真正点燃性欲望”的声音、姿态、气味、身体性征或互动方式分栏记录。'],
		['以人为中心描述的是吸引如何被组织，不是“对所有性别、所有人都会有吸引”。', '高分可能接近泛性恋式体验，也可能只是说明标签退居次要；仍需结合三个方向和整体频率判断。', '比较两类经历：先因性别类别产生兴趣，以及相处后因具体互动才出现吸引，哪类更常见。'],
		['无性恋谱系线索需要区分整体很少、审美与性分离、低频／微弱，以及深度连接后才出现四种路径。', '本表只能提示宽泛谱系位置，不能单凭这一均分区分无性恋、灰性恋或半性恋。', '优先观察第54至57题谁更高，再结合无性恋谱系量表继续查看具体位置。'],
		['高分不会让你的吸引失效，而是提示自我报告可能混入隐藏、迎合、否认或安全策略。', '外部压力既可能压低某个方向，也可能让你为了符合期待而高估另一个方向。', '在确保安全的前提下，分别写下“没有后果时会怎么感受”和“现实中会怎么选择”。'],
		['清晰度反映你能否拆分不同体验，不是性吸引本身的强弱。低分时，方向结论应更暂时、描述性。', '幻想内容、性经历和伴侣性别都可能与现实吸引方向不完全一致。', '用想看、想恋爱、想依偎、想性接触、想被认可五栏记录同一对象，查看哪些冲动真正出现。'],
		['高分表示你偏好比例化、条件化或开放叙述，不等于取向一定流动；低分表示你更需要稳定名称，也不等于不允许变化。', '标签的作用是帮助理解、沟通和找到社群，不需要反过来要求每次经历都完美符合定义。', '尝试先写一句不含身份名词的描述，再判断哪个标签最接近、是否需要保留例外。']
	];
	document.querySelectorAll('#deepPersonalAnalysis .insight-card').forEach((card, index) => {
		const guidance = analysisGuidance[index];
		if (!guidance) return;
		const detail = document.createElement('div');
		detail.innerHTML = `<p><strong>怎样理解：</strong>${guidance[0]}</p><p><strong>需要校准：</strong>${guidance[1]}</p><p><strong>继续观察：</strong>${guidance[2]}</p>`;
		card.appendChild(detail);
	});
	document.getElementById('sectionScores').innerHTML = `<h3 class="result-section-heading">四、九项观察数据</h3>
		<div class="result-table-shell">
			<table class="observation-table">
				<colgroup><col><col><col><col></colgroup>
				<thead><tr><th>观察维度</th><th>分数与位置</th><th>当前线索</th><th>建议核对</th></tr></thead>
				<tbody>
					${observationRow('方向线索', '女性/女性气质相关性吸引', ctx.avgWomen,
		ctx.avgWomen >= 3.2 ? '女性或女性气质较稳定地进入你的性吸引范围。' : ctx.avgWomen >= 2 ? '存在女性方向线索，但较依赖具体类型、互动或情境。' : '当前女性方向的性吸引线索较少或不稳定。',
		'对照自发幻想、想发生性接触的冲动与具体身体/气质线索，避免只凭审美欣赏判断。')}
					${observationRow('方向线索', '男性/男性气质相关性吸引', ctx.avgMen,
			ctx.avgMen >= 3.2 ? '男性或男性气质较稳定地进入你的性吸引范围。' : ctx.avgMen >= 2 ? '存在男性方向线索，但较依赖具体类型、回应信号或情境。' : '当前男性方向的性吸引线索较少或不稳定。',
			'比较主动幻想、真实靠近冲动和身体反应，并留意社会期待是否造成高估或压低。')}
					${observationRow('方向线索', '非二元/中性/混合表达相关性吸引', ctx.avgNb,
				ctx.avgNb >= 3.2 ? '非二元、中性或混合表达明确进入你的性吸引范围。' : ctx.avgNb >= 2 ? '存在一定开放度，强度可能受具体表达与接触机会影响。' : '当前相关线索较少，也可能与现实接触样本有限有关。',
				'把“未遇到合适对象”与“明确没有性吸引”分开记录，不用单次接触替代长期模式。')}
					${observationRow('触发方式', '身体性征/性别气质触发点', ctx.embodiedSpecificity,
					ctx.embodiedSpecificity >= 3.6 ? '身体性征、声音、姿态或气质是较明确的性吸引触发源。' : ctx.embodiedSpecificity >= 2.4 ? '身份类别与具体身体/气质线索都可能参与触发。' : '具体身体或气质线索目前不是主要触发轴，或整体性吸引较低。',
					'记录真正引发性冲动的线索，而不是事后根据对象身份补充解释。')}
					${observationRow('触发方式', '更看具体的人/互动', ctx.personCenteredAttraction,
						ctx.personCenteredAttraction >= 3.6 ? '具体的人、互动张力与关系感受比性别分类更能预测吸引。' : ctx.personCenteredAttraction >= 2.4 ? '你会同时参考对象身份和具体互动，两者都不是绝对条件。' : '性别或身体线索可能比个体互动更先进入判断。',
						'比较“先被类别吸引”和“相处后才出现吸引”两类经验，确认哪一种更常见。')}
					${observationRow('频率与条件', '无性恋谱系线索', ctx.aceSpectrumSignal,
							ctx.aceSpectrumSignal >= 3.6 ? '低频、微弱、条件性或需要深度连接后才出现的线索较突出。' : ctx.aceSpectrumSignal >= 2.4 ? '有部分低频或条件性体验，需要与方向分数一起判断。' : '整体低频或条件性线索不突出，方向差异更值得优先观察。',
							'分别记录“是否有方向”“多久出现一次”“需要什么条件”，不要把频率低直接等同于没有方向。')}
					${observationRow('校准因素', '社会脚本压力/压抑影响', ctx.socialPressure,
								ctx.socialPressure >= 3.6 ? '家庭、同伴或内化期待可能明显干扰你对吸引方向的判断。' : ctx.socialPressure >= 2.4 ? '外部脚本可能在部分场景影响表达或自我解释。' : '外部评价对当前判断的干扰相对有限。',
								'设想没有评价与后果时你会靠近谁，再与现实选择比较；安全风险始终优先。')}
					${observationRow('识别能力', '吸引类型辨别清晰度', ctx.distinctionClarity,
									ctx.distinctionClarity >= 3.6 ? '较能区分性、浪漫、审美、感官吸引以及幻想和经历。' : ctx.distinctionClarity >= 2.4 ? '能做部分区分，但某些“喜欢”仍可能混合多种体验。' : '不同吸引类型的边界目前较模糊，方向分数需要谨慎阅读。',
									'用“想看、想靠近、想恋爱、想性接触、想被认可”五栏记录具体对象。')}
					${observationRow('叙述方式', '标签弹性与叙述偏好', ctx.labelFlexibility,
										ctx.labelFlexibility >= 3.6 ? '比例、条件和开放标签可能比单一固定标签更贴合你的体验。' : ctx.labelFlexibility >= 2.4 ? '你可以使用一个主标签，同时保留例外、比例与变化空间。' : '你目前更偏好稳定明确的标签或结论。',
										'尝试写一句不依赖身份名词的描述，例如“我主要被……吸引，但在……条件下也可能……”。')}
				</tbody>
			</table>
		</div>
		<p class="result-data-note">方向、触发、清晰度和压力并不是同一种指标；表格用于并列观察，不用于相加得出“总取向分”。</p>`;
	document.getElementById('personalizedSuggestions').innerHTML = generateSuggestions(ctx, label);

	if (window.PrismScale) {
		window.PrismScale.renderResultRadar({
			canvasId: 'radarChart',
			labels: ['女性方向', '男性方向', '非二元方向', '身体/气质触发', '以人为中心', '无性谱系线索'],
			values: [ctx.avgWomen, ctx.avgMen, ctx.avgNb, ctx.embodiedSpecificity, ctx.personCenteredAttraction, ctx.aceSpectrumSignal],
			max: 5,
			datasetLabel: '性吸引结构'
		});
	}
	resultDiv.style.display = 'block';
	resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function calculateResult() {
	const scores = getScores();
	if (!scores) return;
	renderResult(getContext(scores));
}

function resetQuiz() {
	if (!confirm('确定要清除全部作答与本地保存吗？')) return;
	const form = document.getElementById('sexualOrientationQuiz');
	for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
		if (form.elements[`q${i}`]) form.elements[`q${i}`].value = '';
	}
	localStorage.removeItem(STORAGE_KEY);
	document.getElementById('result').style.display = 'none';
	['scoreSummary', 'typeJudgment', 'currentProfileAnalysis', 'mainInterpretation', 'deepPersonalAnalysis', 'sectionScores', 'personalizedSuggestions'].forEach(id => {
		const element = document.getElementById(id);
		if (element) element.innerHTML = '';
	});
	if (window.PrismScale) window.PrismScale.destroyResultRadar('radarChart');
	updateProgress();
}

function saveResultText() {
	const resultDiv = document.getElementById('result');
	if (resultDiv.style.display !== 'block') {
		alert('请先计算结果再保存！');
		return;
	}
	let resultText = '性吸引结构深度探索报告\n========================\n\n';
	['scoreSummary', 'typeJudgment', 'currentProfileAnalysis', 'mainInterpretation', 'deepPersonalAnalysis', 'sectionScores', 'personalizedSuggestions'].forEach(id => {
		const element = document.getElementById(id);
		if (element) resultText += `${element.innerText}\n\n====\n\n`;
	});
	const blob = new Blob([resultText.trim()], { type: 'text/plain;charset=utf-8' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = '性吸引结构深度探索报告.txt';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

async function saveResultImage(clickEvent) {
	const resultDiv = document.getElementById('result');
	if (resultDiv.style.display !== 'block') {
		alert('请先计算结果再保存！');
		return;
	}
	if (typeof html2canvas !== 'function') {
		alert('图片保存组件尚未加载完成，请稍后再试。');
		return;
	}
	const originalOverflow = resultDiv.style.overflow;
	const button = clickEvent && clickEvent.currentTarget;
	const originalText = button ? button.innerText : '';
	resultDiv.style.overflow = 'visible';
	if (button) {
		button.innerText = '生成中，请稍候…';
		button.disabled = true;
	}
	try {
		const canvas = await html2canvas(resultDiv, {
			scale: 2,
			backgroundColor: getComputedStyle(resultDiv).backgroundColor,
			useCORS: true,
			logging: false,
			windowWidth: resultDiv.scrollWidth,
			windowHeight: resultDiv.scrollHeight,
			onclone: (doc) => {
				// html2canvas rewrites inline styles, which breaks the [style*=…] dark-mode
				// overrides in scale-common.css. Copy the live computed colors onto the clone
				// so the exported image matches the on-screen result in either theme.
				const dstRoot = doc.getElementById('result');
				if (!dstRoot) return;
				const src = resultDiv.querySelectorAll('*'), dst = dstRoot.querySelectorAll('*');
				const copy = (a, b) => {
					const cs = getComputedStyle(a);
					b.style.setProperty('background-color', cs.backgroundColor, 'important');
					b.style.setProperty('background-image', cs.backgroundImage, 'important');
					b.style.setProperty('color', cs.color, 'important');
					['Top', 'Right', 'Bottom', 'Left'].forEach(s => b.style.setProperty('border-' + s.toLowerCase() + '-color', cs['border' + s + 'Color'], 'important'));
				};
				copy(resultDiv, dstRoot);
				for (let i = 0; i < src.length; i++) if (dst[i]) copy(src[i], dst[i]);
			}
		});
		const link = document.createElement('a');
		link.download = '性吸引结构深度探索报告.png';
		link.href = canvas.toDataURL('image/png');
		link.click();
	} catch (error) {
		console.error('生成图片失败', error);
		alert('生成图片失败，请稍后重试。');
	} finally {
		resultDiv.style.overflow = originalOverflow;
		if (button) {
			button.innerText = originalText;
			button.disabled = false;
		}
	}
}

renderQuestions();
loadAnswersFromLocalStorage();
updateProgress();

document.getElementById('sexualOrientationQuiz').addEventListener('change', function () {
	updateProgress();
	saveAnswersToLocalStorage();
});
