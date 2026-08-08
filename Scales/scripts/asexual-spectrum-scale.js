const questionOptionPresets = {
	agreement: [
		'完全不符合',
		'经常不符合',
		'基本不符合',
		'有时符合',
		'经常符合',
		'完全符合'
	],
	noExperience: [
		'完全不符/不适用/无相关体验',
		'经常不符合',
		'基本不符合',
		'有时符合',
		'经常符合',
		'完全符合'
	],
	distinction: [
		'无法区分',
		'难以区分',
		'有些困难',
		'可以但不确定',
		'通常能区分',
		'完全能区分'
	]
};

const questionOptionPresetByNumber = {
	8: 'noExperience',
	9: 'noExperience',
	11: 'noExperience',
	12: 'noExperience',
	13: 'noExperience',
	23: 'distinction',
	24: 'noExperience',
	25: 'noExperience',
	28: 'distinction',
	38: 'distinction',
	46: 'noExperience',
	47: 'noExperience',
	49: 'noExperience',
	50: 'noExperience',
	55: 'noExperience'
};

const questionSpecificOptionLabels = {
	4: [
		'从未有过',
		'极少（一年几次或更少）',
		'偶尔（每月几次）',
		'经常（每周几次）',
		'非常频繁（几乎每天）',
		'极度频繁（每天多次）'
	],
	5: [
		'完全不符/不适用/无相关体验',
		'基本不需要情感联结',
		'有时需要情感联结',
		'基本需要情感联结',
		'通常需要情感联结',
		'必须有深厚情感联结'
	],
	6: [
		'完全不符/不适用/无相关体验',
		'不受情境限制，随时可能发生',
		'很少受情境影响',
		'有时受情境影响',
		'通常受情境影响',
		'完全依赖特定情境'
	],
	7: [
		'完全不符/不适用/无相关体验',
		'几乎不消退，强度强烈且持久',
		'很少消退或微弱',
		'有时消退或微弱',
		'通常短暂或微弱',
		'总是短暂、微弱且快速消退'
	],
	10: [
		'完全不符/不适用/无相关体验',
		'范围很窄或特定',
		'范围较窄',
		'中等范围',
		'范围较广',
		'范围非常广，对很多人都有'
	],
	15: [
		'完全不符合',
		'经常不符合',
		'有时不符合',
		'基本符合',
		'经常符合',
		'完全符合'
	],
	16: [
		'强烈排斥或厌恶',
		'大多不感兴趣',
		'轻微不感兴趣',
		'中立，无强烈好恶',
		'通常开放或积极',
		'非常感兴趣或享受'
	],
	17: [
		'拒绝性行为',
		'完全因为其他原因',
		'大多因为其他原因',
		'部分因为性吸引',
		'大多因为性吸引',
		'完全因为性吸引'
	],
	18: [
		'完全无感、困惑或不适',
		'大多无感',
		'轻微无感',
		'中立，有时感兴趣',
		'通常感兴趣',
		'非常感兴趣'
	],
	20: [
		'从未参与',
		'几乎不后悔，很满足',
		'很少后悔',
		'有时后悔',
		'经常后悔或不适',
		'总是后悔或不适'
	],
	31: [
		'总是伴随',
		'经常伴随',
		'有时伴随',
		'很少伴随',
		'极少伴随',
		'从不伴随'
	],
	32: [
		'无法做到',
		'很难做到',
		'较难做到',
		'有时可以',
		'通常可以',
		'完全可以'
	],
	33: [
		'总是包含',
		'经常包含',
		'有时包含',
		'很少包含',
		'极少包含',
		'从不包含'
	],
	34: [
		'完全不会',
		'很少会',
		'偶尔会',
		'有时会',
		'经常会',
		'非常频繁'
	],
	35: [
		'总是后者',
		'多数是后者',
		'两者各半',
		'多数是前者',
		'经常是前者',
		'总是前者'
	],
	42: [
		'完全不接受',
		'基本不接受',
		'有些矛盾',
		'中立',
		'基本接受',
		'完全接受'
	],
	48: [
		'完全不符/不适用/无相关体验',
		'可独立发生',
		'很少需要前提',
		'有时需要前提',
		'通常需要前提',
		'总是需要其他吸引作为触发'
	],
	51: [
		'完全不符/不适用/无相关体验',
		'可独立产生',
		'很少需要回应',
		'有时需要回应',
		'通常需要回应',
		'必须有对方吸引作为条件'
	],
	57: [
		'完全能理解并识别',
		'通常能理解并识别',
		'基本能理解并识别',
		'有些困惑',
		'经常困惑',
		'完全困惑'
	],
	58: [
		'完全能区分',
		'通常能区分',
		'基本能区分',
		'有时混淆',
		'经常混淆',
		'总是混淆'
	]
};

function renderQuestionSelect(questionNumber) {
	const presetName = questionOptionPresetByNumber[questionNumber] || 'agreement';
	const labels = questionSpecificOptionLabels[questionNumber] || questionOptionPresets[presetName];
	const options = labels.map((label, value) => `<option value="${value}">${value} - ${label}</option>`).join('\n\t\t');

	return `<select name="q${questionNumber}">
		<option value="" disabled selected>请选择...</option>
		${options}
	</select>`;
}

const questionMarkup = `
<div class="section">
	<h2>第一部分：性吸引（1-15题）</h2>
	<p>本部分评估您对他人产生以性欲为基础的内在冲动，包括频率、强度、条件和生理表现。这些题目聚焦于区分性吸引与其他吸引类型，避免将情感或审美体验误认为性吸引。</p>
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">1.</span> 您是否曾经对某人产生明确的性欲望，例如：希望与TA发生性行为或进行亲密的身体接触（如亲吻、抚摸生殖器），并伴随强烈的生理或心理兴奋？
		</div>
		${renderQuestionSelect(1)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题确认是否出现过指向具体对象的明确性欲望。重点不是是否发生过性行为，而是对方是否进入过你的性幻想、性接触欲望或明显性兴奋范围，并与审美欣赏、好感和情感亲近区分。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：会自然想象与某人接吻或发生性接触，并明确感到欲望，可选 4–5 分；例二：只对极少数人偶尔出现，可选 2–3 分；例三：即使很欣赏对方，也从未想与其发生性接触，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 2 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">2.</span> 您是否会自然地、自发地想象与某人发生性相关的场景，例如：性交、口交或其他亲密性接触，而非刻意去想？
		</div>
		${renderQuestionSelect(2)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题关注性幻想的自发性。自然浮现的性相关画面，比为了验证自己、阅读相关内容后刻意构思的想象，更能反映性吸引是否会自行出现。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：在日常中看到某人时，性相关画面会不经刻意测试自行出现，可选 4–5 分；例二：只在少数对象或特定状态下出现，可选 2–3 分；例三：只有主动要求自己想象时才有画面，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 3 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">3.</span> 您是否体验过因某人而产生的生理性兴奋，例如：心跳加速、性器官反应（如勃起或湿润）、或全身热血沸腾的感觉？
		</div>
		${renderQuestionSelect(3)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察特定对象是否会触发明确的性唤起。身体反应只能作为线索，需要结合性欲望或性幻想判断，并与社交紧张、害羞、害怕或一般兴奋造成的心跳加快区分。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：见到某人时会出现明确性唤起，并伴随想进行性接触的欲望，可选 4–5 分；例二：偶尔有轻微但不易确认的反应，可选 2–3 分；例三：只有紧张或害羞，没有性指向，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 4 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">4.</span> 您感受到性吸引的频率如何，无论对象是现实中的人、虚构角色还是名人？
		</div>
		${renderQuestionSelect(4)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题看性吸引在长期经历中的出现频率，而不是某一次体验有多强。现实对象、名人或虚构角色都可以纳入回想，但应以近几年较稳定、能明确辨认的体验为主。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：几乎每天或每周都会明确体验性吸引，可选 4–5 分；例二：每月偶尔出现，或只集中在少数时期，可选 2–3 分；例三：一年只有几次甚至从未出现，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 5 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">5.</span> 您是否只有在与某人建立深厚情感联结（如长期友谊、信任或爱意）后，才会感受到性吸引，而在初识或浅交时完全没有？
		</div>
		${renderQuestionSelect(5)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题判断深厚情感联结是否是性吸引出现的必要条件。关键不是关系越深吸引越强，而是在信任、熟悉或爱意建立之前，性吸引是否通常不会发生。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：必须长期相处并建立深厚信任后才可能产生性吸引，可选 4–5 分；例二：情感联结会明显促进吸引，但偶尔也可独立出现，可选 2–3 分；例三：初识或浅交时也常能产生性吸引，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 6 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">6.</span> 您是否觉得性吸引只在特定情境下发生，例如：特定情绪状态（如放松、兴奋）、环境（如浪漫氛围）或对象特征（如特定性格）？
		</div>
		${renderQuestionSelect(6)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察性吸引是否高度依赖特定情绪、环境或对象条件。情境会影响多数人的状态，但这里关注的是缺少这些条件时，吸引是否往往完全不出现。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：只有在放松、特定氛围或面对特定类型的人时才会出现，可选 4–5 分；例二：情境有明显影响但不是必要条件，可选 2–3 分；例三：性吸引通常不受特定情境限制，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 7 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">7.</span> 您是否觉得性吸引的体验对您来说是短暂的、容易消退的，或者强度微弱、不够强烈？
		</div>
		${renderQuestionSelect(7)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题关注性吸引的强度和持续时间。偶尔出现但微弱、模糊或很快消退的体验，与持续较久、反复出现并明显占据注意力的吸引有所不同。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：吸引通常很微弱，几分钟或几小时内便消退，可选 4–5 分；例二：有时短暂、有时较持久，可选 2–3 分；例三：一旦出现通常强烈、清晰且持续较久，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 8 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">8.</span> 您是否会因为性吸引而感到强烈的内在驱动力，例如：迫切想采取行动接近对方或发起性行为？
		</div>
		${renderQuestionSelect(8)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估性吸引是否会形成接近对象或发起性互动的内在驱动力。这里看的是欲望本身，不要求你真的行动，也要排除安全、关系边界等现实因素造成的克制。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：产生吸引后会强烈想联系、接近或发起性互动，可选 4–5 分；例二：有行动念头但并不迫切，可选 2–3 分；例三：即使偶有幻想，也没有进一步接近或行动的欲望，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 9 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">9.</span> 您是否觉得性吸引对您来说是一种本能、直觉的感受，无需特定条件或思考就能产生？
		</div>
		${renderQuestionSelect(9)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题区分直接出现的直觉性吸引与经过了解、分析或条件积累后才形成的体验。重点不是判断哪一种更真实，而是观察吸引通常是否无需思考便会发生。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：初次见面便能直觉地确认性吸引，可选 4–5 分；例二：有时立即出现，有时需要相处后确认，可选 2–3 分；例三：通常必须充分了解或分析后才可能感到吸引，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 10 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">10.</span> 您是否觉得性吸引的对象范围广泛，例如：对许多人或类型都能产生？
		</div>
		${renderQuestionSelect(10)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察性吸引对象的范围是否较广。它不是要求你对所有类型都同样有感觉，而是看吸引是否只会被一个非常狭窄、固定的对象模板触发。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：多种外貌、气质或性格类型都可能进入性吸引范围，可选 4–5 分；例二：只有少数较具体的类型会触发，可选 2–3 分；例三：范围非常有限，或没有明确对象进入该范围，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 11 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">11.</span> 您是否觉得性吸引会影响您的日常生活，例如：让您分心或改变行为？
		</div>
		${renderQuestionSelect(11)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题衡量性吸引在日常生活中的存在感。请观察相关幻想或欲望是否会占用注意力、改变安排或影响工作学习，而不是把普通走神也算作性吸引影响。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：常因性吸引或幻想明显分心并调整行为，可选 4–5 分；例二：偶尔短暂走神但影响有限，可选 2–3 分；例三：性吸引即使出现也几乎不影响日常，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 12 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">12.</span> 您是否体验过对虚构角色或性内容的兴趣,但完全不希望自己亲身参与其中？
		</div>
		${renderQuestionSelect(12)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题区分对性内容、情节或虚构角色的兴趣，与把自己代入并亲自参与的欲望。有人可以享受旁观式幻想，却在想象自己成为参与者时感到疏离或兴趣下降。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：喜欢性相关内容，但完全不希望自己参与其中，可选 4–5 分；例二：有时旁观更自在，代入后兴趣会减弱，可选 2–3 分；例三：幻想和现实参与欲望通常一致，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 13 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">13.</span> 您是否觉得性吸引的出现是随机的、不受控制的？
		</div>
		${renderQuestionSelect(13)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题关注性吸引是否会随机、难以预测地出现。它与第 9 题的即时性相关，但更强调控制感：吸引是否可能在没有明显条件时突然发生，并难以靠转移注意立即停止。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：性吸引常在无明显诱因时突然出现且难以控制，可选 4–5 分；例二：偶尔随机出现，但多数时候可预期，可选 2–3 分；例三：通常只在固定条件下出现，且较容易管理，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 14 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">14.</span> 您是否会主动寻求性吸引的体验，例如：通过约会App或社交活动？
		</div>
		${renderQuestionSelect(14)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察自己是否会主动创造体验性吸引的机会。使用约会应用或参加社交活动本身不能直接说明动机，需要区分寻找性吸引与交朋友、维系关系或单纯娱乐。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：会主动使用约会应用或参加活动来寻找性吸引对象，可选 4–5 分；例二：偶尔尝试，但性吸引不是主要目的，可选 2–3 分；例三：从不为体验性吸引主动寻找机会，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 15 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">15.</span> 您是否觉得忽略或压制性吸引会影响您的幸福感？
		</div>
		${renderQuestionSelect(15)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估性吸引在幸福感中的重要程度。重点不是社会是否把性关系视为必需，而是当你长期没有性吸引或性关系时，自己是否会持续感到空缺或受影响。作答时请把一次特殊例外与近几年反复出现的模式分开看待。</p>
			<p><strong>具体案例：</strong>例一：长期缺少性吸引会明显影响满足感和幸福感，可选 4–5 分；例二：偶尔感到遗憾，但其他关系和生活内容可以补足，可选 2–3 分；例三：没有性吸引也能感到充实完整，可选 0–1 分。</p>
		</div>
	</div>
</div>
<div class="section">
	<h2>第二部分：性行为态度（16-20题）</h2>
	<p>本部分评估您对性行为（非自慰）的整体态度、参与动机和后体验，与性吸引独立评估。这些题目聚焦于行为偏好，而非内在冲动。</p>
	<!-- 16 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">16.</span> 您对性行为（如性交、亲密接触）的整体态度如何，即使没有性吸引？
		</div>
		${renderQuestionSelect(16)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估对性行为本身的总体态度，它与是否产生性吸引是两个独立维度。没有性吸引的人也可能享受性行为、保持中立，或因个人感受而排斥。行为、态度与吸引可能不同，请按题目实际询问的层面作答。</p>
			<p><strong>具体案例：</strong>例一：通常对性行为感兴趣并能享受，可选 4–5 分；例二：态度中立，视其为可选但非必要的活动，可选 2–3 分；例三：想到或参与性行为时常感到明显排斥，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 17 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">17.</span> 您是否会因为其他原因（如取悦伴侣、好奇、社会压力）参与性行为，而非内在性吸引？
		</div>
		${renderQuestionSelect(17)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题区分参与性行为的内在性吸引动机与其他动机。好奇、维系关系、满足伴侣或社会期待都可能促成行为，但不等于自己产生了性吸引。行为、态度与吸引可能不同，请按题目实际询问的层面作答。</p>
			<p><strong>具体案例：</strong>例一：参与主要源于自身性吸引和性欲，可选 4–5 分；例二：自身欲望与关系、好奇等动机并存，可选 2–3 分；例三：主要为了伴侣、好奇或外部压力而参与，可选 1 分；从不参与可选 0 分。</p>
		</div>
	</div>
	<!-- 18 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">18.</span> 您是否对性相关的媒体内容（如色情片、性暗示广告）感到无感、困惑或不适？
		</div>
		${renderQuestionSelect(18)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察自己对性相关媒体的兴趣和共鸣程度。无感、困惑、不适或兴奋都可以如实作答，但媒体反应会受内容偏好和价值观影响，不能单独决定性取向。行为、态度与吸引可能不同，请按题目实际询问的层面作答。</p>
			<p><strong>具体案例：</strong>例一：通常会被性相关内容吸引并产生明显兴趣，可选 4–5 分；例二：只对特定内容偶尔有兴趣，可选 2–3 分；例三：大多无感、困惑或不适，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 19 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">19.</span> 相比于只专注其他亲密形式，您是否也愿意在关系中参与性行为？
		</div>
		${renderQuestionSelect(19)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题了解你希望性行为在亲密关系中占据什么位置。它不是评价关系是否完整，而是比较完全无性的关系、偶尔参与和把性视为重要组成部分，哪一种更符合你的愿望。行为、态度与吸引可能不同，请按题目实际询问的层面作答。</p>
			<p><strong>具体案例：</strong>例一：希望性行为自然成为关系中的重要部分，可选 4–5 分；例二：可以参与，但是否需要取决于关系和状态，可选 2–3 分；例三：理想关系可以完全不含性行为，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 20 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">20.</span> 您是否觉得参与性行为后，会感到后悔、不适或无满足感？
		</div>
		${renderQuestionSelect(20)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题通过性行为后的情绪和身体感受，观察行为是否符合自己的需要。请按较稳定的模式判断，不把单次关系冲突、身体不适或安全问题造成的负面体验直接归因于吸引模式。行为、态度与吸引可能不同，请按题目实际询问的层面作答。</p>
			<p><strong>具体案例：</strong>例一：性行为后经常感到后悔、空虚或明显不适，可选 4–5 分；例二：有时满足、有时不适，可选 2–3 分；例三：事后通常满足放松，可选 1 分；从未参与可选 0 分。</p>
		</div>
	</div>
</div>
<div class="section">
	<h2>第三部分：浪漫吸引（21-25题）</h2>
	<p>本部分评估您对恋爱关系的渴望和情感依恋，与性吸引分离。这些题目聚焦于浪漫元素的独立存在，帮助区分情感亲密与身体欲求。</p>
	<!-- 21 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">21.</span> 您是否体验过浪漫吸引，例如：希望与某人约会、表达爱意、共度浪漫时光或建立恋爱关系？
		</div>
		${renderQuestionSelect(21)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题确认是否存在独立于性吸引的浪漫吸引。浪漫吸引常表现为想约会、成为彼此特别的人、表达爱意或规划伴侣关系，不要求同时出现性欲望。浪漫吸引和性吸引可以同步，也可以彼此分离。</p>
			<p><strong>具体案例：</strong>例一：常想与某人约会、庆祝纪念日或建立恋爱关系，可选 4–5 分；例二：只在少数对象或时期出现浪漫向往，可选 2–3 分；例三：对恋爱活动和伴侣关系几乎没有内在愿望，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 22 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">22.</span> 您是否觉得浪漫吸引在您的生活中很重要，例如：没有它会感到缺失？
		</div>
		${renderQuestionSelect(22)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估浪漫关系在个人幸福感中的重要程度。请区分真实的恋爱需要与社会对婚恋的期待，观察缺少浪漫关系时自己是否会持续感到明显缺失。浪漫吸引和性吸引可以同步，也可以彼此分离。</p>
			<p><strong>具体案例：</strong>例一：没有浪漫关系会明显感到空虚，并把伴侣关系视为重要人生需要，可选 4–5 分；例二：偶尔向往但并非必需，可选 2–3 分；例三：友情、独处和其他关系已能带来完整感，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 23 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">23.</span> 您是否能清楚区分浪漫吸引与性吸引，例如：知道“这是想恋爱，不是想性交”？
		</div>
		${renderQuestionSelect(23)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题考察你能否把想恋爱与想发生性接触分开识别。两种吸引可以同时出现，也可以彼此独立；高分表示能依据关系想象、性幻想和身体欲望辨别差异。浪漫吸引和性吸引可以同步，也可以彼此分离。</p>
			<p><strong>具体案例：</strong>例一：能清楚知道自己只是想约会相伴，还是也想发生性接触，可选 4–5 分；例二：需要回想或分析后才能判断，可选 2–3 分；例三：常把心动、亲密和性欲混在一起，难以区分，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 24 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">24.</span> 您是否发现浪漫吸引的表达方式在不同文化或社会环境中有所变化，例如：在某些情境下更注重情感仪式而非身体亲密？
		</div>
		${renderQuestionSelect(24)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察文化、家庭和社会环境是否会改变你的浪漫表达方式。这里关注表达形式的变化，例如陪伴、仪式或身体亲近的比重，而不是判断哪种文化更浪漫。浪漫吸引和性吸引可以同步，也可以彼此分离。</p>
			<p><strong>具体案例：</strong>例一：会随环境明显调整浪漫表达，并更重视当地认可的情感仪式，可选 4–5 分；例二：部分方式会变化、核心偏好较稳定，可选 2–3 分；例三：不同环境下的表达几乎没有变化，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 25 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">25.</span> 您是否觉得浪漫吸引的频率与性吸引无关，而是独立发生？
		</div>
		${renderQuestionSelect(25)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题判断浪漫吸引是否可以不依赖性吸引而单独发生。重点是浪漫心动的出现频率是否有自己的规律，而不是性欲强弱是否会影响关系选择。浪漫吸引和性吸引可以同步，也可以彼此分离。</p>
			<p><strong>具体案例：</strong>例一：经常想与某人约会相伴，却完全没有相关性幻想，可选 4–5 分；例二：有时独立出现、有时与性吸引同步，可选 2–3 分；例三：浪漫心动几乎总与明确性欲同时出现，可选 0–1 分。</p>
		</div>
	</div>
</div>
<div class="section">
	<h2>第四部分：情感吸引（26-30题）</h2>
	<p>本部分评估您对深层情感联结的渴望，与其他吸引分离。这些题目聚焦于非浪漫、非性的情感纽带，帮助区分心灵亲密与身体或浪漫欲求。</p>
	<!-- 26 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">26.</span> 您是否体验过情感吸引，例如：希望与某人建立深层友谊、相互信任或心灵共鸣？
		</div>
		${renderQuestionSelect(26)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题关注情感吸引，即渴望与某人建立深层信任、分享内在经历并相互支持。它可以出现在友情、亲情或其他关系中，不必带有浪漫或性意味。关系名称不决定吸引性质，请以实际渴望和体验为准。</p>
			<p><strong>具体案例：</strong>例一：会强烈想与某人分享重要经历、建立知己般的联结，可选 4–5 分；例二：只对少数人或特定时期有这种需要，可选 2–3 分；例三：通常满足于浅层交往，很少渴望深度敞开，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 27 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">27.</span> 您是否觉得情感吸引是您生活中的重要组成部分，没有它会感到孤独？
		</div>
		${renderQuestionSelect(27)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估深层情感联结对幸福感和孤独感的影响。请观察缺少可倾诉、可相互信任的人时，自己是否会持续感到孤独，而不是只看社交人数。关系名称不决定吸引性质，请以实际渴望和体验为准。</p>
			<p><strong>具体案例：</strong>例一：长期没有深度关系会明显感到孤独和缺失，可选 4–5 分；例二：只在重要人生阶段或压力期需要知己，可选 2–3 分；例三：即使很少深谈也能保持充实稳定，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 28 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">28.</span> 您是否能清楚区分情感吸引与浪漫或性吸引？
		</div>
		${renderQuestionSelect(28)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题考察对情感、浪漫和性吸引的分辨能力。可以参考自己是想分享内心、建立恋爱关系，还是产生性幻想和性接触欲望，而不是用关系名称代替感受。关系名称不决定吸引性质，请以实际渴望和体验为准。</p>
			<p><strong>具体案例：</strong>例一：能清楚说明对不同对象是想深交、想恋爱还是想发生性接触，可选 4–5 分；例二：部分体验能分清，强烈时仍会混淆，可选 2–3 分；例三：各种喜欢常融合在一起，难以区分，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 29 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">29.</span> 您是否在不同关系中体验情感吸引的强度变化？
		</div>
		${renderQuestionSelect(29)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察情感吸引是否会因对象、信任程度和关系情境而明显变化。高分表示你对不同关系投入的情感深度差异较大，不代表关系价值存在高低。关系名称不决定吸引性质，请以实际渴望和体验为准。</p>
			<p><strong>具体案例：</strong>例一：只对少数人愿意完全敞开，对多数关系保持普通交流，可选 4–5 分；例二：关系间有一定深浅差异，可选 2–3 分；例三：不同关系中的情感投入通常较为接近，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 30 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">30.</span> 您是否主动寻求情感吸引，如通过分享经历建立深连接？
		</div>
		${renderQuestionSelect(30)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估你是否会主动把情感联结的需要转化为行动。主动分享经历、发起深入谈话或共同完成重要事情，都可视为建立深层关系的尝试。关系名称不决定吸引性质，请以实际渴望和体验为准。</p>
			<p><strong>具体案例：</strong>例一：经常主动发起深度对话并创造共同经历，可选 4–5 分；例二：通常要等对方先敞开才会跟进，可选 2–3 分；例三：即使想深入了解，也很少主动推动关系加深，可选 0–1 分。</p>
		</div>
	</div>
</div>
<div class="section">
	<h2>第五部分:审美吸引(31-35题)</h2>
	<p>本部分评估您对视觉欣赏的体验,与其他吸引分离。这些题目聚焦于非欲求的美的感知,帮助区分欣赏与性冲动。</p>
	<!-- 31 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">31.</span> 当您被某人的外貌吸引时,这种感觉是否总是伴随着性幻想或身体欲望?
		</div>
		${renderQuestionSelect(31)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题区分纯粹的审美欣赏与伴随性欲望的外貌吸引。选项从“总是包含性幻想”到“从不包含”排列，请按外貌欣赏能否独立存在来选择。审美吸引可以很强烈，但不必自动包含性意味。</p>
			<p><strong>具体案例：</strong>例一：欣赏外貌时通常没有性幻想或身体欲望，可选 4–5 分；例二：有时只是审美、有时会转为性吸引，可选 2–3 分；例三：外貌吸引几乎总会伴随明确性幻想，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 32 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">32.</span> 您能否长时间欣赏某人的外貌而不产生"想要亲近/触碰/发生关系"的冲动?
		</div>
		${renderQuestionSelect(32)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察审美欣赏是否会自然转化为接近、触碰或发展关系的冲动。重点是能否满足于观看和感受美，而不是你现实中是否会克制行动。审美吸引可以很强烈，但不必自动包含性意味。</p>
			<p><strong>具体案例：</strong>例一：可以长时间欣赏某人的外貌而没有接近或触碰欲望，可选 4–5 分；例二：欣赏一段时间后偶尔会产生互动想象，可选 2–3 分；例三：很快就会转为强烈的接近或身体欲望，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 33 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">33.</span> 当您称赞某人"好看/帅/美"时,这个评价是否包含"我想与TA发生性关系"的潜台词?
		</div>
		${renderQuestionSelect(33)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题区分“好看”的美学评价与潜在的性意图。称赞一个人的五官、穿搭或气质，可以像评价艺术作品一样止于欣赏，也可能包含把对方视为性对象的意味。审美吸引可以很强烈，但不必自动包含性意味。</p>
			<p><strong>具体案例：</strong>例一：称赞好看通常只是审美判断，不含性关系意图，可选 4–5 分；例二：有时纯欣赏、有时也在判断性吸引，可选 2–3 分；例三：说某人好看几乎总意味着对其有性兴趣，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 34 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">34.</span> 您是否会对完全不符合您性取向的人或物种(如异性恋女性欣赏女性,同性恋男性欣赏女性,人类欣赏变种人)产生强烈的审美欣赏?
		</div>
		${renderQuestionSelect(34)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题通过对非潜在性对象的欣赏，观察审美吸引能否独立于性取向。请关注是否能真切感到外貌、气质或造型之美，而不是是否认同某种审美标准。审美吸引可以很强烈，但不必自动包含性意味。</p>
			<p><strong>具体案例：</strong>例一：经常能强烈欣赏不符合自己性取向者的外貌或气质，可选 4–5 分；例二：偶尔会被这类对象的美打动，可选 2–3 分；例三：几乎只能欣赏可能成为性对象的人，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 35 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">35.</span> 当您在公共场合被某人外貌吸引时,您的第一反应是"真美/真帅"还是"想要TA的联系方式/想约TA"?
		</div>
		${renderQuestionSelect(35)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题捕捉看到有吸引力外貌时的第一反应。高分更接近先产生“真好看”的审美感受，低分更接近立即出现索要联系方式、约会或占有式接近意图。审美吸引可以很强烈，但不必自动包含性意味。</p>
			<p><strong>具体案例：</strong>例一：第一反应通常是欣赏外貌，随后继续做自己的事，可选 4–5 分；例二：审美感受与接近念头常同时出现，可选 2–3 分；例三：通常立即开始考虑如何认识或约对方，可选 0–1 分。</p>
		</div>
	</div>
</div>
<div class="section">
	<h2>第六部分：感官吸引（36-40题）</h2>
	<p>本部分评估您对非性身体接触的渴望，与其他吸引分离。这些题目聚焦于舒适触碰，帮助区分感官与性欲。</p>
	<!-- 36 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">36.</span> 您是否体验过感官吸引，例如：渴望拥抱或依偎以获得温暖？
		</div>
		${renderQuestionSelect(36)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题确认是否存在不带性意味的感官吸引，例如想拥抱、依偎或靠近以获得温暖和安全感。动作本身不能决定性质，关键是体验中是否包含性唤起或性欲望。相同动作可能具有不同性质，请结合内在欲望判断。</p>
			<p><strong>具体案例：</strong>例一：压力大时会强烈想拥抱信任的人，但没有性联想，可选 4–5 分；例二：只在部分关系或情境中需要身体安慰，可选 2–3 分；例三：很少渴望这类非性身体接触，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 37 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">37.</span> 您是否觉得感官吸引重要，如缺乏会不适？
		</div>
		${renderQuestionSelect(37)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估非性身体接触对舒适感和情绪稳定的重要程度。请观察长期缺少拥抱、依偎等接触时，是否会感到明显不适，而不是把一般孤独全部归因于触觉需要。相同动作可能具有不同性质，请结合内在欲望判断。</p>
			<p><strong>具体案例：</strong>例一：缺少拥抱或依偎会明显影响情绪和安全感，可选 4–5 分；例二：只在疲惫、生病或压力大时特别需要，可选 2–3 分；例三：长期没有身体接触也几乎不受影响，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 38 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">38.</span> 您是否能区分感官吸引与性吸引？
		</div>
		${renderQuestionSelect(38)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题考察你能否区分感官吸引与性吸引。可以参考触碰是否只是为了安慰、温暖和亲近，还是伴随性唤起、性幻想或进一步性接触的欲望。相同动作可能具有不同性质，请结合内在欲望判断。</p>
			<p><strong>具体案例：</strong>例一：能清楚知道想拥抱朋友只是寻求安慰，不是性欲，可选 4–5 分；例二：需要结合对象和触碰方式才能判断，可选 2–3 分；例三：亲密触碰经常被自己混同为性吸引，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 39 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">39.</span> 您是否在不同关系中体验感官吸引？
		</div>
		${renderQuestionSelect(39)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察感官吸引会出现在哪些关系中。它可能面向朋友、家人、伴侣或其他信任对象，也可能只在特定关系里出现；请按真实需要而非文化礼仪作答。相同动作可能具有不同性质，请结合内在欲望判断。</p>
			<p><strong>具体案例：</strong>例一：在多种信任关系中都会自然想拥抱或依偎，可选 4–5 分；例二：只对少数对象或特定关系有这种需要，可选 2–3 分；例三：感官吸引几乎只出现在单一关系或完全不出现，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 40 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">40.</span> 您是否主动寻求感官吸引，如请求拥抱？
		</div>
		${renderQuestionSelect(40)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估你是否会主动表达非性身体接触的需要。高分指能在尊重对方边界并取得同意的前提下提出请求，而不是未经确认直接触碰。相同动作可能具有不同性质，请结合内在欲望判断。</p>
			<p><strong>具体案例：</strong>例一：需要安慰时能直接询问信任的人“可以抱一下吗”，可选 4–5 分；例二：通常等对方先靠近或询问才表达，可选 2–3 分；例三：即使很需要也几乎不会提出请求，可选 0–1 分。</p>
		</div>
	</div>
</div>
<div class="section">
	<h2>第七部分：自我认知（41-45题）</h2>
	<p>本部分评估您对自身吸引模式的认识和接受度。这些题目聚焦于内省，帮助整合谱系身份。</p>
	<!-- 41 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">41.</span> 您是否觉得自己的吸引模式与主流不同？
		</div>
		${renderQuestionSelect(41)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题关注你是否察觉自己的吸引模式与常见社会脚本不同。差异感可能来自很少体验性吸引、难以理解相关谈资，或更重视其他亲密形式，但它本身不等于任何固定身份。这些题只记录探索状态，不要求使用或公开任何标签。</p>
			<p><strong>具体案例：</strong>例一：经常发现自己难以共鸣他人描述的性吸引，并持续思考差异，可选 4–5 分；例二：只在部分话题或关系中偶尔察觉不同，可选 2–3 分；例三：通常认为自身体验与周围人接近，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 42 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">42.</span> 您是否接受自己的吸引模式？
		</div>
		${renderQuestionSelect(42)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估你对自身吸引模式的接纳程度。接纳并不要求使用某个标签或公开身份，而是能把真实体验视为有效，并根据自己的需要建立关系和边界。这些题只记录探索状态，不要求使用或公开任何标签。</p>
			<p><strong>具体案例：</strong>例一：能够自然接受自身模式，并据此表达需要和边界，可选 4–5 分；例二：基本接受但仍有矛盾或担忧，可选 2–3 分；例三：经常否认、羞耻或希望强迫自己改变，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 43 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">43.</span> 您是否通过阅读或社区了解谱系？
		</div>
		${renderQuestionSelect(43)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察你是否主动通过资料、社群或他人经验了解无性恋谱系。这里衡量探索程度，不要求加入社群；偶尔阅读术语与持续系统了解可以按投入程度区分。这些题只记录探索状态，不要求使用或公开任何标签。</p>
			<p><strong>具体案例：</strong>例一：持续阅读可靠资料并参与相关讨论，能理解主要谱系概念，可选 4–5 分；例二：浏览过一些内容但了解仍较零散，可选 2–3 分；例三：几乎没有主动接触相关信息，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 44 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">44.</span> 您是否在关系中沟通吸引模式？
		</div>
		${renderQuestionSelect(44)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题评估你是否会在关系中沟通吸引体验、性行为态度和身体边界。沟通可以使用具体需要而非身份标签，重点是让双方在知情和同意的基础上理解彼此。这些题只记录探索状态，不要求使用或公开任何标签。</p>
			<p><strong>具体案例：</strong>例一：会在关系发展前主动说明自己的吸引模式和边界，可选 4–5 分；例二：通常在对方询问或出现分歧后才解释，可选 2–3 分；例三：即使有需要也几乎从不沟通，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 45 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">45.</span> 您是否觉得了解谱系改善了自我认知？
		</div>
		${renderQuestionSelect(45)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察了解谱系概念后，自我理解是否变得更清晰。有效的知识可能帮助你区分吸引类型、重新解释过往经历或减少自责，但不要求因此确定唯一标签。这些题只记录探索状态，不要求使用或公开任何标签。</p>
			<p><strong>具体案例：</strong>例一：了解相关概念后能更清楚地整理经历，并感到明显释然，可选 4–5 分；例二：理解了一些术语，但对生活影响有限，可选 2–3 分；例三：相关知识没有改善理解，或让自己更加混乱，可选 0–1 分。</p>
		</div>
	</div>
</div>
<div class="section">
	<h2>第八部分：细分谱系特征（46-60题）</h2>
	<p>本部分评估无性恋谱系的细分类型特征。这些题目基于社区和研究定义，帮助细化您的身份认同。</p>
	<!-- 46 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">46.</span> 您的性吸引强度是否随时间、情绪或环境波动，有时完全无，有时微弱有？
		</div>
		${renderQuestionSelect(46)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题用于观察性吸引强度是否随时间或状态明显波动，也就是常说的流动无性恋线索。重点是整体模式在接近无性恋与较有吸引的状态之间变化，而非一般的短期情绪起伏。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：可能连续数月完全没有性吸引，之后又出现一段较明显体验，可选 4–5 分；例二：有一定波动但幅度不大，可选 2–3 分；例三：长期强度较稳定，或没有相关体验可供判断，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 47 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">47.</span> 您是否偶尔体验到突然而强烈的性吸引，但这种感觉很快消退，通常持续时间很短（如几分钟到几小时）？
		</div>
		${renderQuestionSelect(47)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题用于观察是否存在突然而强烈、但很快消退的性吸引，也就是突发无性恋线索。它更像短暂峰值，不同于逐渐增强或持续数日以上的吸引。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：平时几乎无性吸引，却偶尔突然强烈出现并在数小时内消失，可选 4–5 分；例二：出现过短暂冲动，但强度或界限不太明确，可选 2–3 分；例三：吸引通常缓慢形成并持续较久，或无相关体验，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 48 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">48.</span> 您是否只有在其他类型吸引（如浪漫或情感吸引）作为前提时，才会产生性吸引，而非独立发生？
		</div>
		${renderQuestionSelect(48)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察性吸引是否需要浪漫、情感、审美等其他吸引先作为触发条件。它比单纯需要深厚情感联结更广，重点是性吸引能否独立出现。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：必须先有浪漫心动、信任或审美吸引，性吸引才可能出现，可选 4–5 分；例二：其他吸引常会促进，但并非必要条件，可选 2–3 分；例三：性吸引通常可以独立发生，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 49 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">49.</span> 您是否更容易对陌生人或浅层关系对象产生性吸引，但随着关系加深，这种吸引反而减弱或消失？
		</div>
		${renderQuestionSelect(49)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察性吸引是否会随着关系加深而减弱，也就是磨损性恋线索。重点是亲密度与吸引强度的反向变化，而不是新鲜感消退或关系冲突造成的暂时下降。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：初识时吸引明显，成为熟悉朋友或伴侣后通常会消退，可选 4–5 分；例二：在少数关系中出现过这种变化，可选 2–3 分；例三：吸引会随亲密加深而稳定或增强，或无相关体验，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 50 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">50.</span> 您是否对某人产生性吸引，但如果对方回应或关系可能双向发展时，会感到不适并失去兴趣？
		</div>
		${renderQuestionSelect(50)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察性吸引在得到回应后是否会减弱或引发不适，也就是单向性恋线索。关键不是害怕被拒绝，而是对方真的回应时，原本安全的单向吸引是否难以维持。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：单向幻想时有吸引，对方表达兴趣后却迅速失去感觉，可选 4–5 分；例二：有时会因关系变得双向而不适，可选 2–3 分；例三：回应通常会维持或增强吸引，或无相关体验可选 0–1 分。</p>
		</div>
	</div>
	<!-- 51 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">51.</span> 您是否只有在感知到对方对您有性吸引时，才会对该对象产生性吸引？
		</div>
		${renderQuestionSelect(51)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察性吸引是否依赖对方先表达性兴趣，也就是回应性恋线索。重点是对方的欲望是否构成必要触发，而不是被赞美后感到开心或因关系安全而更愿意互动。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：必须确认对方先对自己有性吸引，才会产生相应吸引，可选 4–5 分；例二：对方回应常有促进作用，但不是必要条件，可选 2–3 分；例三：吸引可独立出现，或没有相关体验可选 0–1 分。</p>
		</div>
	</div>
	<!-- 52 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">52.</span> 您是否更倾向于在性互动中扮演接受者角色，愿意接受他人的性表达，但不主动发起？
		</div>
		${renderQuestionSelect(52)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察你是否更偏好在双方同意的性互动中作为接受者，由对方发起或引导。它描述互动角色偏好，不代表必须接受任何行为，也不等同于缺少自主性。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：通常更愿意由伴侣主动，自己在明确同意后接受和回应，可选 4–5 分；例二：接受与发起都可以，视情境调整，可选 2–3 分；例三：明显更偏好主动发起或主导，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 53 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">53.</span> 您是否更倾向于在性互动中扮演给予者角色，愿意为他人提供性愉悦，但不期望自己被满足？
		</div>
		${renderQuestionSelect(53)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察你是否更偏好在双方同意的性互动中给予对方愉悦，而不期待自己被满足。它关注满足感来源和角色偏好，不要求忽视自身边界或承担取悦义务。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：主要享受给予和看到伴侣满足，较少希望自己成为接受者，可选 4–5 分；例二：给予与接受都重要，但略偏向给予，可选 2–3 分；例三：更重视接受或双方对等满足，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 54 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">54.</span> 您是否对性行为本身有强烈的厌恶或回避，即使在有吸引的情况下也拒绝参与？
		</div>
		${renderQuestionSelect(54)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题区分是否存在性吸引与对实际性行为的排斥态度，也就是厌性恋线索。即使偶尔有吸引，想到亲自参与性行为仍可能稳定地感到反感或希望回避。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：即使有过吸引，仍对实际性行为持续感到强烈排斥，可选 4–5 分；例二：态度矛盾，只在部分行为或情境下不适，可选 2–3 分；例三：对性行为总体开放或很少回避，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 55 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">55.</span> 您是否体验到性吸引，但不希望将其转化为实际性行为或关系？
		</div>
		${renderQuestionSelect(55)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察性吸引与行动意愿是否分离，也就是不渴望关系性恋线索。这里指能明确体验性幻想或欲望，却不希望把它转化为现实性行为或性关系。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：会产生清晰性吸引，但只愿停留在幻想中，不想现实发展，可选 4–5 分；例二：有时想行动、有时更愿保持距离，可选 2–3 分；例三：吸引通常会带来现实互动意愿，或无相关体验可选 0–1 分。</p>
		</div>
	</div>
	<!-- 56 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">56.</span> 您是否缺乏典型性吸引，但仍渴望性关系以寻求亲密、好奇或其他非性动机？
		</div>
		${renderQuestionSelect(56)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察在缺乏典型性吸引时，是否仍因亲密、好奇或身体体验而希望参与性关系，也就是渴望关系性恋线索。行为愿望可以有多种来源，不必以性吸引为前提。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：没有自发性吸引，但仍明确希望探索性关系或借此增进亲密，可选 4–5 分；例二：偶尔有好奇或条件性的参与意愿，可选 2–3 分；例三：既缺少性吸引，也不希望参与性关系，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 57 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">57.</span> 您是否对“性吸引”概念感到困惑，无法确定自己是否体验过它？
		</div>
		${renderQuestionSelect(57)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察“性吸引”这一概念是否难以与你的内在体验对应，也就是疑性恋线索。重点不是知识不足，而是即使理解定义和案例，仍无法判断这个概念是否适用于自己。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：反复阅读定义后仍完全无法确认自己是否体验过性吸引，可选 4–5 分；例二：部分体验能够对应，但仍经常困惑，可选 2–3 分；例三：通常能清楚理解并识别自己的性吸引，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 58 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">58.</span> 您是否难以区分性吸引与其他吸引类型，如审美或情感？
		</div>
		${renderQuestionSelect(58)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题观察你是否难以把性吸引从审美、情感或浪漫吸引中单独辨认，也就是吸引模糊性恋线索。它关注类型之间的边界，而不是吸引本身强不强。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：各种“喜欢”常融合在一起，几乎无法找出性吸引成分，可选 4–5 分；例二：有些对象或情境能分清，有些仍很模糊，可选 2–3 分；例三：通常能稳定区分不同吸引类型，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 59 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">59.</span> 您是否只能感受到模糊、难以定义的吸引，无法判断是否为性吸引？
		</div>
		${renderQuestionSelect(59)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题关注吸引体验本身是否总是朦胧、难以定义，也就是感受模糊性恋线索。与第 58 题相比，这里更强调感觉缺乏清晰质感，而非多个类型彼此混淆。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：能感觉被某人吸引，却始终无法判断那是什么或是否带有性意味，可选 4–5 分；例二：多数时候较模糊，偶尔能明确识别，可选 2–3 分；例三：吸引体验通常清晰且容易命名，可选 0–1 分。</p>
		</div>
	</div>
	<!-- 60 -->
	<div class="question">
		<div class="question-title" onclick="toggleExplanation(this)">
			<span class="q-number">60.</span> 您是否无性吸引，但对性话题、研究或文化有强烈学术兴趣？
		</div>
		${renderQuestionSelect(60)}
		<div class="explanation">
									<p><strong>本题用意：</strong>本题区分对性话题的知识兴趣与个人性吸引，也就是性学兴趣性恋线索。研究性文化、心理或健康议题可以纯粹源于学术兴趣，不必转化为自身性欲。相关术语只是描述线索，单题高分不能证明某种身份。</p>
			<p><strong>具体案例：</strong>例一：对性学和性文化有持续浓厚兴趣，却几乎没有个人性吸引，可选 4–5 分；例二：有一定知识兴趣，也偶尔与自身欲望相关，可选 2–3 分；例三：对相关话题兴趣很少，或兴趣主要来自个人性欲，可选 0–1 分。</p>
		</div>
	</div>
</div>
`;
const scaleQuestionsContainer = document.getElementById('questionsContainer');
if (!scaleQuestionsContainer) throw new Error('量表题目容器不存在');
scaleQuestionsContainer.innerHTML = questionMarkup;

// 点击题目展开/关闭解释
function toggleExplanation(titleElement) {
	const explanation = titleElement.parentElement.querySelector('.explanation');
	const currentlyShown = document.querySelector('.explanation.show');

	if (currentlyShown && currentlyShown !== explanation) {
		currentlyShown.classList.remove('show');
		currentlyShown.style.display = 'none';
	}

	if (explanation.classList.contains('show')) {
		explanation.classList.remove('show');
		explanation.style.display = 'none';
	} else {
		explanation.classList.add('show');
		explanation.style.display = 'block';
	}
}

// 点击空白处关闭所有解释
document.addEventListener('click', function (e) {
	if (!e.target.closest('.question')) {
		document.querySelectorAll('.explanation').forEach(exp => {
			exp.classList.remove('show');
			exp.style.display = 'none';
		});
	}
});
// 实时进度条 - 总是60题
function updateProgress() {
	const form = document.getElementById('asexualQuiz');
	const totalQuestions = 60;
	let completed = 0;
	for (let i = 1; i <= totalQuestions; i++) {
		if (form.elements[`q${i}`] && form.elements[`q${i}`].value !== "") {
			completed++;
		}
	}
	const percentage = (completed / totalQuestions) * 100;
	document.getElementById('globalProgressText').textContent = `进度：${completed}/${totalQuestions}`;
	document.getElementById('globalProgressBar').style.width = percentage + '%';
}

// 保存所有答案到 localStorage
function saveAnswersToLocalStorage() {
	const form = document.getElementById('asexualQuiz');
	const answers = {};
	for (let i = 1; i <= 60; i++) {
		const select = form.elements[`q${i}`];
		if (select) {
			answers[`q${i}`] = select.value;
		}
	}
	localStorage.setItem('asexualQuizAnswers', JSON.stringify(answers));
}

// 从 localStorage 加载答案
function loadAnswersFromLocalStorage() {
	const saved = localStorage.getItem('asexualQuizAnswers');
	if (!saved) return;

	const answers = JSON.parse(saved);
	const form = document.getElementById('asexualQuiz');
	for (let i = 1; i <= 60; i++) {
		const select = form.elements[`q${i}`];
		if (select && answers[`q${i}`] !== undefined && answers[`q${i}`] !== "") {
			select.value = answers[`q${i}`];
		}
	}
	updateProgress(); // 刷新进度条
}

document.getElementById('asexualQuiz').addEventListener('change', updateProgress);
updateProgress(); // 初始化

function calculateResult() {
	const form = document.getElementById('asexualQuiz');
	const totalQuestions = 60;
	const resultDiv = document.getElementById('result');

	// 1. 收集答案
	const scores = {};
	for (let i = 1; i <= totalQuestions; i++) {
		const el = form.elements[`q${i}`];
		if (!el || el.value === '') {
			alert(`请完成第 ${i} 题后再计算结果。`);
			return;
		}
		scores[`q${i}`] = parseInt(el.value, 10);
	}

	// 2. 计算核心性吸引加权平均分（前10题，前10题权重2倍）
	const calculateSexualCore = () => {
		let total = 0;
		let weightedCount = 0;

		// 前10题，权重为2
		for (let i = 1; i <= 10; i++) {
			let value = scores[`q${i}`];
			// 第5、6、7题需要反向计分
			if ([5, 6, 7].includes(i)) {
				// 只有1-5分才进行反向计分，0分保持为0
				if (value >= 1 && value <= 5) {
					value = 6 - value;  // 将1-5分反向：1→5, 2→4, 3→3, 4→2, 5→1
				}
				// 如果value是0，保持为0不变
			}
			total += value * 2;
			weightedCount += 2;
		}

		// 第11-15题，正常权重
		for (let i = 11; i <= 15; i++) {
			let value = scores[`q${i}`];
			// 第12题需要反向计分
			if (i === 12) {
				// 只有1-5分才进行反向计分，0分保持为0
				if (value >= 1 && value <= 5) {
					value = 6 - value;  // 将1-5分反向：1→5, 2→4, 3→3, 4→2, 5→1
				}
			}
			total += value;
			weightedCount += 1;
		}

		return parseFloat((total / weightedCount).toFixed(1));
	};

	const sexualCore = calculateSexualCore();

	// 性行为态度多维度判断函数
	const getSexualBehaviorLabel = (scores) => {
		const q16 = parseFloat(scores['q16']) || 0;
		const q52 = parseFloat(scores['q52']) || 0;
		const q53 = parseFloat(scores['q53']) || 0;
		const q54 = parseFloat(scores['q54']) || 0;
		const q55 = parseFloat(scores['q55']) || 0;
		const q56 = parseFloat(scores['q56']) || 0;
		const q20 = parseFloat(scores['q20']) || 0;

		// 将q20反向计分
		let q20Reversed = q20;
		if (q20 >= 1 && q20 <= 5) {
			q20Reversed = 6 - q20;
		}

		// 基础态度判断
		let baseLabel = '';
		let baseDesc = '';

		if (q54 >= 4 || q16 <= 1) {
			baseLabel = '性厌恶/排斥 (Sex-Averse/Repulsed)';
			baseDesc = '对性行为本身存在强烈的反感、厌恶或回避情绪，明确拒绝参与任何形式的性活动。';
		} else if (q16 >= 4 && q54 <= 1) {
			baseLabel = '性积极/友好 (Sex-Positive/Favorable)';
			baseDesc = '对性行为持积极或开放态度，甚至可能享受生理过程，尽管缺乏强烈的性吸引。';
		} else {
			baseLabel = '性无感 (Sex-Indifferent)';
			baseDesc = '对性行为没有强烈好恶，可能出于伴侣需求、好奇或其他原因参与，但不主动追求。';
		}

		// 计算角色偏好 - 基于差值的改进逻辑
		// 计算差值
		const diff = q52 - q53;

		let roleLabel = '';
		let roleDesc = '';

		if (q52 <= 2 && q53 <= 2) {
			// 两者得分都很低，表示对性互动角色没有明确倾向
			roleLabel = '无性互动角色偏好';
			roleDesc = '对性互动中的接受者或给予者角色均无明显倾向或兴趣。';
		} else if (Math.abs(diff) <= 1) {
			// 差值很小（0-1分），表示两者倾向相当
			if (q52 >= 4 && q53 >= 4) {
				// 两者得分都较高
				roleLabel = '双向均衡型';
				roleDesc = '在性互动中既能接受也能给予，角色灵活性较高，无明显倾向。';
			} else if (q52 >= 3 && q53 >= 3) {
				// 两者得分中等
				roleLabel = '灵活适应型';
				roleDesc = '性互动中角色偏好不明显，可以根据情境和伴侣需求灵活调整。';
			} else {
				// 两者得分都较低或一个中等一个低
				roleLabel = '无明显角色偏好';
				roleDesc = '性互动中的角色偏好不明显或未形成稳定模式。';
			}
		} else {
			// 有明显差异（差值≥2分）
			if (diff >= 2) {
				// q52明显高于q53 - 接受型偏好
				const confidence = q52 >= 5 ? '强烈' : q52 >= 4 ? '中等' : '轻微';
				roleLabel = `接受型偏好（${confidence}）`;
				roleDesc = `倾向于在性互动中扮演接受者角色，愿意接受来自他人的性行为或性表达，但缺乏主动发起意愿。${confidence === '强烈' ? '这种偏好非常明确且稳定。' : '这种偏好存在但可能随情境变化。'}`;
			} else if (diff <= -2) {
				// q53明显高于q52 - 给予型偏好
				const confidence = q53 >= 5 ? '强烈' : q53 >= 4 ? '中等' : '轻微';
				roleLabel = `给予型偏好（${confidence}）`;
				roleDesc = `倾向于在性互动中扮演给予者角色，愿意为他人提供性愉悦或参与性活动，但不期望成为被动接受方。${confidence === '强烈' ? '这种偏好非常明确且稳定。' : '这种偏好存在但可能随情境变化。'}`;
			}
		}

		// 行为-吸引关系判断 - 基于差值的改进逻辑
		// 计算差值
		const behaviorDiff = q55 - q56;

		let behaviorAttractionLabel = '';
		let behaviorAttractionDesc = '';

		// 判断两个得分是否都较低（表示相对一致）
		if (q55 <= 2 && q56 <= 2) {
			behaviorAttractionLabel = '吸引-行为相对一致';
			behaviorAttractionDesc = '性吸引与性行为意愿基本匹配，无明显分离倾向。性吸引体验通常会导向行为意愿，或两者同时缺失。';
		}
		// 判断两个得分是否都较高（表示矛盾混合）
		else if (q55 >= 3 && q56 >= 3) {
			// 进一步判断矛盾程度
			if (q55 >= 4 && q56 >= 4) {
				behaviorAttractionLabel = '强烈矛盾混合型';
				behaviorAttractionDesc = '同时存在明显的吸引-行为分离（体验吸引但不想行动）和行为优先（无吸引但渴望行为）的矛盾倾向，这可能带来内部冲突和决策困难。';
			} else {
				behaviorAttractionLabel = '矛盾混合型';
				behaviorAttractionDesc = '同时存在吸引-行为分离和行为优先的矛盾倾向，体验复杂且可能随情境变化。';
			}
		}
		// 判断差异是否显著（差值≥2分）
		else if (Math.abs(behaviorDiff) >= 2) {
			if (behaviorDiff > 0) {
				// q55明显更高 - 吸引-行为分离型
				const intensity = q55 >= 5 ? '强烈' : q55 >= 4 ? '中等' : '轻微';
				behaviorAttractionLabel = `吸引-行为分离型（${intensity}）`;
				behaviorAttractionDesc = `能够体验到性吸引，但不希望将这种吸引转化为实际的性行为或性关系。存在吸引感受与行为意愿的分离。${intensity === '强烈' ? '这种分离非常明确且稳定。' : '这种分离存在但可能随情境变化。'}`;
			} else {
				// q56明显更高 - 行为优先型
				const intensity = q56 >= 5 ? '强烈' : q56 >= 4 ? '中等' : '轻微';
				behaviorAttractionLabel = `行为优先型（${intensity}）`;
				behaviorAttractionDesc = `尽管缺乏典型的性吸引体验，但基于寻求亲密感、情感连接、好奇心或其他非性吸引动机，仍然渴望建立性关系。${intensity === '强烈' ? '这种倾向非常明确且稳定。' : '这种倾向存在但可能随情境变化。'}`;
			}
		}
		// 差异不显著但也不是极端情况
		else {
			if (behaviorDiff > 0) {
				// 轻微倾向于分离
				behaviorAttractionLabel = '轻微分离倾向';
				behaviorAttractionDesc = '性吸引与性行为意愿有轻微分离倾向，但未形成明确模式。吸引体验有时会导向行为，有时不会。';
			} else if (behaviorDiff < 0) {
				// 轻微倾向于行为优先
				behaviorAttractionLabel = '轻微行为优先倾向';
				behaviorAttractionDesc = '在缺乏典型性吸引的情况下，有时会基于非性动机考虑性关系，但未形成明确模式。';
			} else {
				// 两者相等
				behaviorAttractionLabel = '矛盾混合倾向';
				behaviorAttractionDesc = '吸引-行为关系复杂，同时存在分离和优先的倾向，但强度都不高，可能随情境波动。';
			}
		}

		// 事后体验判断
		let afterExperienceLabel = '';
		let afterExperienceDesc = '';

		// 先判断是否从未参与（q20原始得分为0）
		if (q20 === 0) {
			afterExperienceLabel = '暂无相关体验';
			afterExperienceDesc = '目前没有参与过性行为，无法评估事后的感受体验。';
		} else {
			// 根据反向计分后的分数判断体验类型
			if (q20Reversed >= 4) {
				afterExperienceLabel = '积极体验主导';
				afterExperienceDesc = '参与性行为后通常感到满足、放松或积极，负面情绪较少。';
			} else if (q20Reversed <= 2) {
				afterExperienceLabel = '负面体验主导';
				afterExperienceDesc = '参与性行为后经常感到后悔、不适、空虚或失落，体验以负面为主。';
			} else {
				afterExperienceLabel = '中性或混合体验';
				afterExperienceDesc = '性行为后的感受中性或时好时坏，无稳定倾向。';
			}
		}

		// 综合标签
		let comprehensiveLabel = baseLabel;

		if ((q52 >= 4 || q53 >= 4) && (q52 >= 4 && q53 >= 4)) {
			comprehensiveLabel += ` - ${roleLabel}`;
		}

		if (q55 >= 4 || q56 >= 4) {
			comprehensiveLabel += ` - ${behaviorAttractionLabel}`;
		}

		const detailedDescription = `
				<p><strong>基础态度：</strong>${baseLabel} - ${baseDesc}</p>
				<p><strong>角色偏好：</strong>${roleLabel} - ${roleDesc}</p>
				<p><strong>行为-吸引关系：</strong>${behaviorAttractionLabel} - ${behaviorAttractionDesc}</p>
				<p><strong>事后体验：</strong>${afterExperienceLabel} - ${afterExperienceDesc}</p>
		`;

		return {
			comprehensiveLabel: comprehensiveLabel,
			detailedDescription: detailedDescription,
			components: {
				base: { label: baseLabel, desc: baseDesc },
				role: { label: roleLabel, desc: roleDesc },
				behaviorAttraction: { label: behaviorAttractionLabel, desc: behaviorAttractionDesc },
				afterExperience: { label: afterExperienceLabel, desc: afterExperienceDesc }
			},
			scores: { q16, q52, q53, q54, q55, q56, q20Reversed }
		};
	};

	// 4. 扫描所有类型特征
	const scanAllTypes = () => {
		const allTypes = [];

		// 检查半性恋条件
		if (sexualCore >= 0.5 && sexualCore <= 2.5 &&
			scores['q5'] >= 4 && scores['q10'] <= 2 &&
			scores['q13'] <= 2 && scores['q49'] <= 2 &&
			scores['q48'] >= 3) {
			allTypes.push({
				name: '半性恋 (Demisexual)',
				type: 'primary',
				score: scores['q5'],
				desc: '仅在与特定对象建立深度情感联结后，才可能体验到性吸引。',
				keyQuestions: [
					{ q: 5, score: scores['q5'], desc: '情感联结前提' },
					{ q: 10, score: scores['q10'], desc: '对象范围' },
					{ q: 13, score: scores['q13'], desc: '随机性' },
					{ q: 49, score: scores['q49'], desc: '磨损性恋反向验证' },
					{ q: 48, score: scores['q48'], desc: '触发复杂性' }
				]
			});
		}

		// 检查灰性恋条件
		if (sexualCore >= 0.5 && sexualCore <= 2.5 &&
			scores['q4'] <= 2 && scores['q10'] <= 2 &&
			scores['q13'] <= 2 && (scores['q6'] >= 4 || scores['q7'] >= 4)) {
			allTypes.push({
				name: '灰性恋 (Greysexual)',
				type: 'primary',
				score: Math.max(scores['q6'], scores['q7']),
				desc: '仅在特定情境或条件下，才可能体验到微弱或模糊的性吸引，频率低且不稳定。',
				keyQuestions: [
					{ q: 4, score: scores['q4'], desc: '频率' },
					{ q: 10, score: scores['q10'], desc: '对象范围' },
					{ q: 13, score: scores['q13'], desc: '随机性' },
					{ q: 6, score: scores['q6'], desc: '情境依赖' },
					{ q: 7, score: scores['q7'], desc: '强度微弱' }
				]
			});
		}

		// 检查无性恋（当sexualCore <= 0.5时）
		if (sexualCore <= 0.5) {
			allTypes.push({
				name: '无性恋 (Asexual)',
				type: 'primary',
				score: 5 - sexualCore * 2, // 转换为得分显示
				desc: '完全或几乎不体验性吸引，但可能仍有浪漫、情感或其他类型的吸引。',
				keyQuestions: [
					{ q: 'core', score: sexualCore, desc: '核心性吸引均分' }
				]
			});
		}

		// 检查其他类型（第46-60题及相关题）
		const subtypeConfigs = [
			{ q: 12, name: '无参与性恋 (Aegosexual)', desc: '可能有抽象的性幻想、欣赏性内容或自慰，但不愿意在现实中参与任何涉及他人的性行为。' },
			{ q: 46, name: '流动无性恋 (Aceflux)', desc: '性吸引的强度和频率随时间、情绪或环境波动，有时接近无性恋，有时接近灰性恋。' },
			{ q: 47, name: '突发无性恋 (Acespike)', desc: '平时基本不体验性吸引，但会间歇性地经历短暂而相对强烈的性吸引体验。' },
			{ q: 48, name: '触发性恋 (Apressexual)', desc: '性吸引的产生需要其他类型吸引（如情感吸引、浪漫吸引等）作为前提条件。' },
			{ q: 49, name: '磨损性恋 (Fraysexual)', desc: '对陌生人或关系表层化的对象容易产生性吸引，但随着情感联结的加深和关系的发展，性吸引反而会减弱或消失。' },
			{ q: 50, name: '单向性恋 (Lithosexual / Akiosexual)', desc: '能够对他人产生性吸引，但当这种吸引得到回应或可能发展为双向关系时，反而会产生不适感或失去兴趣。' },
			{ q: 51, name: '回应性恋 (Reciprosexual)', desc: '仅在明确感知到对方对自己存在性吸引时，才可能对该对象产生相应的性吸引。' },
			{ q: 52, name: '接受性恋 (Accipiosexual / Iamvanosexual)', desc: '愿意接受来自他人的性行为或性表达，但缺乏主动发起或施行性行为的意愿。' },
			{ q: 53, name: '给予性恋 (Placiosexual)', desc: '愿意为他人提供性愉悦或参与性活动，但不期望或不愿意成为性行为的被动接受方。' },
			{ q: 54, name: '厌性恋 (Apothisexual)', desc: '对性行为本身存在强烈的反感、厌恶或回避情绪，明确拒绝参与任何形式的性活动。' },
			{ q: 55, name: '不渴望关系性恋 (Orchidsexual)', desc: '能够体验到性吸引，但不希望将这种吸引转化为实际的性行为或性关系。' },
			{ q: 56, name: '渴望关系性恋 (Cupiosexual)', desc: '尽管缺乏典型的性吸引体验，但基于寻求亲密感、情感连接、好奇心或其他非性吸引动机，仍然渴望建立性关系。' },
			{ q: 57, name: '疑性恋 (Quoisexual)', desc: '对"性吸引"这一概念本身存在理解困难，无法确定自己是否曾经体验过性吸引，也不确定该概念是否适用于描述自己的体验。' },
			{ q: 58, name: '吸引模糊性恋 (Idemsexual)', desc: '难以区分自己所体验的是性吸引还是其他类型的吸引（如柏拉图式吸引、审美吸引、情感吸引等），存在吸引类型识别的困难。' },
			{ q: 59, name: '感受模糊性恋 (Desinosexual)', desc: '无法体验典型、明确的性吸引，只能感受到模糊、难以定义的吸引感受，难以判断这种体验是否属于性吸引范畴。' },
			{ q: 60, name: '性学兴趣性恋 (Bellussexual)', desc: '虽然不体验性吸引，但对性相关话题、性文化、性研究等领域保持浓厚的学术兴趣或好奇心。' }
		];

		subtypeConfigs.forEach(config => {
			if (scores[`q${config.q}`] >= 4) {
				allTypes.push({
					name: config.name,
					type: 'sub',
					score: scores[`q${config.q}`],
					desc: config.desc,
					keyQuestions: [
						{ q: config.q, score: scores[`q${config.q}`], desc: '关键特征题' }
					]
				});
			}
		});

		return allTypes;
	};

	// 5. 执行类型扫描
	const allTypes = scanAllTypes();

	// 6. 分离主型和亚型
	const primaryTypes = allTypes.filter(t => t.type === 'primary');
	const subTypes = allTypes.filter(t => t.type === 'sub');

	// 7. 判断多重无性恋
	const isMultipleAsexual = () => {
		// 如果性吸引分数在无性恋谱系范围内
		if (sexualCore >= 0.5 && sexualCore <= 2.5) {
			// 主型+主型，或主型+亚型，或亚型+亚型（两个或以上）
			if ((primaryTypes.length >= 2) ||
				(primaryTypes.length >= 1 && subTypes.length >= 1) ||
				(subTypes.length >= 2)) {
				return true;
			}
		}
		// 如果是无性恋（sexualCore <= 0.5）且有亚型
		if (sexualCore <= 0.5 && subTypes.length >= 1) {
			return true;
		}
		return false;
	};

	const multipleAsexual = isMultipleAsexual();

	// 8. 确定主要结论
	let baseType = '';
	let judgmentText = '';
	let mainInterpretation = '';

	if (sexualCore > 2.5) {
		// 有性恋
		baseType = '有性恋 (Allosexual)';
		judgmentText = `您的核心性吸引加权均分为 **${sexualCore.toFixed(1)}**。根据评分标准，您**符合有性恋 (Allosexual) 的特征**。这意味着性吸引是您体验世界和建立连接的常规维度之一，您能够规律地、自发地体验到以性欲为基础的冲动，并可能伴随相应的生理反应和行为驱动力。`;

		mainInterpretation = `<h3>有性恋特征解读</h3>
					<p><strong>什么是"有性恋"？</strong></p>
					<p>有性恋 (Allosexual) 指的是那些能够规律、自发地体验性吸引的人群。这是人类性吸引谱系中占比最大的一类，也是社会主流认知中的"常态"模式。这个词本身是中性的，仅仅描述了一种吸引模式的存在，不带有任何价值判断。</p>

					<p><strong>您的具体表现：</strong></p>
					<ul>
						<li><strong>性吸引强度：</strong>您的得分表明，您对他人产生以性欲为基础的内在冲动的体验相对频繁且明确。这种吸引往往是本能的、难以忽略的。</li>
						<li><strong>自发幻想：</strong>您可能经常自然地想象与某人发生性相关的场景，这种幻想往往是自发的而非刻意的，可能伴随生理或心理兴奋。</li>
						<li><strong>生理反应：</strong>您可能体验过因某人而产生的生理性兴奋，如心跳加速、性器官反应等，这些反应通常是无法靠意志控制的。</li>
						<li><strong>行为驱动力：</strong>性吸引可能会影响您的行为决策，让您有接近对方或发起互动的内在驱动力，这种驱动力往往是迫切的。</li>
						<li><strong>对象广度：</strong>您的性吸引可能对较广泛类型的人产生，而不是仅限于极少数特定条件的个体。</li>
					</ul>

					<p><strong>重要澄清：</strong></p>
					<p>1. <strong>有性恋是一个中性描述</strong>，没有优劣之分，只是描述了一种吸引模式的存在频率和强度。</p>
					<p>2. <strong>这并不妨碍您拥有丰富的其他吸引</strong>，您可能同时体验强烈的浪漫吸引、深刻的情感连接、纯粹的审美欣赏或舒适的感官接触。</p>
					<p>3. <strong>您可能仍然有独特的偏好、条件和边界</strong>，比如特定的情境触发、情绪依赖或对象类型偏好，这些都可以在详细的维度分析中找到。</p>
					<p>4. <strong>有性恋内部也有巨大差异</strong>，从每周几次到每天多次，从微弱感受到强烈驱动，您的具体模式是独特的。</p>

					<p><strong>生活启示：</strong></p>
					<p>作为有性恋者，您可能会发现：</p>
					<ul>
						<li>社会主流叙事与您的体验有更多共鸣</li>
						<li>建立包含性元素的亲密关系相对符合社会预期</li>
						<li>但仍需关注性吸引与其他吸引的平衡，避免让性吸引主导所有关系决策</li>
						<li>理解并尊重无性恋谱系人群的体验差异</li>
					</ul>`;

	} else if (sexualCore <= 0.5) {
		// 无性恋
		if (multipleAsexual) {
			// 多重无性恋（无性恋 + 亚型）
			baseType = '多重无性恋 (Myrsexual)';
			judgmentText = `您的核心性吸引加权均分为 **${sexualCore.toFixed(1)}**，表明您几乎或完全不体验性吸引，很有可能是无性恋 (Asexual) 。同时，您表现出 **${subTypes.length}个** 明显的类型特征，这符合**多重无性恋 (Myrsexual)** 的定义。`;

			const subtypeList = subTypes.map(st =>
				`<li><strong>${st.name}</strong>（第${st.keyQuestions[0].q}题得分${st.score}/5）：${st.desc}</li>`
			).join('');

			mainInterpretation = `<h3>多重无性恋特征解读</h3>
						<p><strong>无性恋的核心特征：</strong></p>
						<p>您的得分表明，您几乎或完全不体验性吸引——即那种指向特定他人的、以性欲为基础的内在冲动和渴望。这并不意味着您缺乏情感、浪漫或审美感受，只是您的吸引里并不包含性欲。</p>

						<p><strong>什么是多重无性恋？</strong></p>
						<p>多重无性恋 (Myrsexual) 描述的是那些同时符合无性恋谱系中两种或多种身份认同特征的情况。在无性恋社区中，这被认为是一种常见且正常的表现，反映了人类吸引体验的复杂性。</p>

						<p><strong>您的具体组合：</strong></p>
						<ul>
							<li><strong>核心身份：无性恋 (Asexual)</strong> - 几乎或完全不体验性吸引，这是您吸引体验的基础底色。</li>
							${subtypeList}
						</ul>

						<p><strong>这意味着：</strong></p>
						<p>1. 您的体验是<strong>复杂且多维的</strong>，单一标签可能无法完整描述您丰富的内在世界。</p>
						<p>2. 这些特征可能<strong>同时存在</strong>，也可能在不同情境下<strong>交替显现</strong>，形成动态的吸引图谱。</p>
						<p>3. 您的吸引模式形成了一个<strong>独特的组合</strong>，反映了人类性吸引的惊人多样性。</p>
						<p>4. 您可能需要<strong>灵活的关系策略</strong>来应对不同特征的显现，比如在某些时期完全无性，在某些情境下有特定模式的微弱吸引。</p>

						<p><strong>生活启示：</strong></p>
						<p>作为多重无性恋者，您可能会发现：</p>
						<ul>
							<li>您的体验可能需要更细致的解释才能被他人理解</li>
							<li>建立关系时需要沟通您的复杂性，而不是简化成单一标签</li>
							<li>您可能在不同关系中寻求不同的连接方式</li>
							<li>自我接纳包括接纳这种复杂性，而不是追求简单的分类</li>
						</ul>`;

		} else {
			// 单纯无性恋
			baseType = '无性恋 (Asexual)';
			judgmentText = `您的核心性吸引加权均分为 **${sexualCore.toFixed(1)}**。这是一个非常低的分数，强烈表明您**位于无性恋谱系的核心区域**，即您几乎或完全不体验性吸引，很有可能是无性恋 (Asexual) 。`;

			mainInterpretation = `<h3>无性恋特征解读</h3>
						<p><strong>什么是"无性恋"？</strong></p>
						<p>无性恋 (Asexual) 指的是那些完全或几乎不体验性吸引的人群。这<strong>不是一种疾病、缺陷或选择</strong>，而是一种自然的、与生俱来的性取向，就像异性恋、同性恋或双性恋一样，是人类多元性取向谱系中的一种。</p>

						<p><strong>您的具体表现：</strong></p>
						<ul>
							<li><strong>性吸引缺失：</strong>您可能从未或极少对他人产生过"想与TA发生性行为"的冲动。当别人谈论"性感"或"性吸引"时，您可能感到困惑或难以共鸣。</li>
							<li><strong>幻想模式：</strong>如果有关性方面的幻想，它们可能是抽象的、不涉及具体人物的，或者完全没有。任何性相关的想法都可能是理性的、分析性的，而非感性的、冲动的。</li>
							<li><strong>生理反应：</strong>您的生理反应可能与性吸引脱钩，或者即使有生理反应（如晨勃、生理周期变化）也不伴随心理上的性欲望或对特定他人的吸引。</li>
							<li><strong>社会体验：</strong>您可能难以理解社会中对性的普遍关注和讨论，感到自己像个“旁观者”，在一旁看着别人投入其中。</li>
							<li><strong>关系模式：</strong>在亲密关系中，您可能更重视情感联结、智力共鸣、共同兴趣或生活陪伴，而非性亲密。</li>
						</ul>

						<p><strong>重要澄清：</strong></p>
						<p>1. <strong>无性恋 ≠ 无浪漫：</strong>您仍然可以渴望和体验浪漫关系、深度情感联结。许多无性恋者有强烈的浪漫倾向，渴望牵手、拥抱、约会、共同生活等浪漫元素，只是不包含性。</p>
						<p>2. <strong>无性恋 ≠ 性功能障碍：</strong>这是关于性吸引的缺乏，而非生理能力的缺失。一些无性恋者有正常的生理功能，只是不将这些功能与对特定他人的吸引联系起来。</p>
						<p>3. <strong>无性恋 ≠ 性压抑：</strong>这不是因为创伤、信仰或心理问题导致的压抑，而是一种内在的、自然的体验模式。当然，有些人的无性恋认同可能与创伤有关（创伤无性恋），但这不是必然的。</p>
						<p>4. <strong>无性恋 ≠ 反对性：</strong>您可能对性持积极、中立或消极态度，这与是否体验性吸引是两个独立维度。</p>

						<p><strong>生活启示：</strong></p>
						<p>作为无性恋者，您可能会发现：</p>
						<ul>
							<li>需要花时间向他人解释您的体验，因为这是少数派体验</li>
							<li>寻找理解并尊重您无性恋身份的伴侣或朋友很重要</li>
							<li>您的关系模式可能需要创新，探索无性浪漫关系、酷儿柏拉图式关系等</li>
							<li>加入无性恋社区（如AVEN、中文无性恋社群）可以提供归属感和支持</li>
							<li>您的幸福感来源可能更多元，比如事业成就、个人成长、深度友谊、艺术创造等</li>
						</ul>`;
		}

	} else {
		// 无性恋谱系 (0.5-2.5分)
		const totalIdentifiedTypes = primaryTypes.length + subTypes.length;

		if (multipleAsexual) {
			// 多重无性恋
			baseType = '多重无性恋 (Myrsexual)';

			const typeNames = [...primaryTypes.map(p => p.name), ...subTypes.map(s => s.name)];
			const typeDetails = [...primaryTypes, ...subTypes].map(t =>
				`<li><strong>${t.name}</strong>（得分${t.score}/5）：${t.desc}</li>`
			).join('');

			judgmentText = `您的核心性吸引加权均分为 **${sexualCore.toFixed(1)}**，位于无性恋谱系范围内。同时，您表现出 **${totalIdentifiedTypes}个** 明显的类型特征，这符合**多重无性恋 (Myrsexual)** 的定义。`;

			mainInterpretation = `<h3>多重无性恋特征解读</h3>
						<p><strong>谱系定位：</strong></p>
						<p>您的得分表明，您位于"有性恋"与"完全无性恋"之间的广阔谱系上。您的性吸引体验可能是：</p>
						<ul>
							<li><strong>频率极低</strong>（如一年仅几次，甚至更少）</li>
							<li><strong>强度非常微弱</strong>（模糊、易被忽略、转瞬即逝）</li>
							<li><strong>条件非常严格</strong>（仅在特定情境、情绪状态、或与特定类型的人互动时触发）</li>
							<li><strong>对象极其有限</strong>（一生中只对极少数人产生过吸引）</li>
							<li><strong>模式不稳定</strong>（有时有，有时无，没有规律可循）</li>
						</ul>

						<p><strong>什么是多重无性恋？</strong></p>
						<p>多重无性恋 (Myrsexual) 描述的是同时符合无性恋谱系中多种身份认同特征的情况。这反映了人类吸引体验的复杂性——我们的体验很少是单一、纯粹的，而常常是多种模式的混合、交替或叠加。</p>

						<p><strong>您的具体组合：</strong></p>
						<ul>${typeDetails}</ul>

						<p><strong>这种多重性意味着：</strong></p>
						<p>1. 您的体验是<strong>动态且情境依赖的</strong>，可能在不同时间、不同关系中表现出不同特征。</p>
						<p>2. 单一的"灰性恋"或"半性恋"标签可能<strong>无法完整捕捉您的复杂性</strong>，您需要更灵活的身份框架。</p>
						<p>3. 您可能需要<strong>多维度的关系策略</strong>来应对不同的吸引模式，以及与不同伴侣的互动方式。</p>
						<p>4. 您的自我认知可能经历<strong>更多探索和调整</strong>，因为您的模式可能随时间演变。</p>

						<p><strong>生活启示：</strong></p>
						<p>作为多重无性恋者，您可能会发现：</p>
						<ul>
							<li>您的吸引模式可能需要用一段描述而非单一词汇来解释</li>
							<li>建立关系时，沟通您的复杂模式比简单出柜更重要</li>
							<li>您可能需要实验不同的关系形式，找到最适合您当前模式的那一种</li>
							<li>允许自己的身份随时间变化，不必固着于特定标签</li>
							<li>寻找能理解复杂性、不要求简单分类的伴侣和朋友</li>
						</ul>`;

		} else if (primaryTypes.length === 1 && subTypes.length === 0) {
			// 单一主型
			const primaryType = primaryTypes[0];
			baseType = primaryType.name;
			judgmentText = `您的核心性吸引加权均分为 **${sexualCore.toFixed(1)}**，位于无性恋谱系范围内。根据您的回答模式，您最符合**${primaryType.name}**的特征。`;

			const keyQuestionsDesc = primaryType.keyQuestions.map(kq =>
				kq.q === 'core' ?
					`核心性吸引加权均分：${kq.score.toFixed(1)}/5（极低）` :
					`第${kq.q}题（${kq.desc}）：${kq.score}/5分`
			).join('；');

			mainInterpretation = `<h3>${primaryType.name}特征解读</h3>
						<p><strong>什么是"${primaryType.name.split(' ')[0]}"？</strong></p>
						<p>${primaryType.desc}</p>

						<p><strong>您的具体表现：</strong></p>
						<ul>
							<li><strong>核心分数：</strong>您的核心性吸引加权均分为${sexualCore.toFixed(1)}分（满分5分），这表明您的性吸引体验总体偏弱或条件严格。</li>
							<li><strong>关键特征：</strong>${keyQuestionsDesc}</li>
							<li><strong>体验特点：</strong>${getPrimaryTypeDescription(primaryType.name)}</li>
						</ul>

						<p><strong>生活启示：</strong></p>
						${getPrimaryTypeImplications(primaryType.name)}`;

		} else if (primaryTypes.length === 0 && subTypes.length === 1) {
			// 单一亚型
			const subType = subTypes[0];
			baseType = `无性恋谱系 / ${subType.name}`;
			judgmentText = `您的核心性吸引加权均分为 **${sexualCore.toFixed(1)}**，位于无性恋谱系范围内。您表现出明显的**${subType.name}**特征。`;

			mainInterpretation = `<h3>${subType.name}特征解读</h3>
						<p><strong>谱系定位：</strong></p>
						<p>您的得分提示，您可能位于无性恋谱系中，性吸引对您来说不是一种常规、稳定的体验。您的核心性吸引分数${sexualCore.toFixed(1)}分（满分5分）支持这一参考判断。</p>

						<p><strong>什么是"${subType.name.split(' ')[0]}"？</strong></p>
						<p>${subType.desc}</p>

						<p><strong>您的回答表明：</strong></p>
						<ul>
							<li><strong>关键题目：</strong>第${subType.keyQuestions[0].q}题得分${subType.score}/5分，明显高于该类型识别的阈值（≥4分）。</li>
							<li><strong>分数依据：</strong>这结合您${sexualCore.toFixed(1)}分的核心性吸引均分，形成了这一参考。</li>
							<li><strong>模式参考：</strong>您的体验模式与该类型的社区定义高度吻合。</li>
						</ul>

						<p><strong>与其他维度的关系：</strong></p>
						<p>这种特定模式可能会影响：</p>
						<ul>
							<li><strong>浪漫关系：</strong>您建立浪漫关系的方式可能需要调整以适应这种特殊模式</li>
							<li><strong>性行为态度：</strong>您对性行为的看法可能与您的吸引模式相互作用</li>
							<li><strong>自我认知：</strong>理解这种模式有助于您建立更坚实的自我认同</li>
							<li><strong>社交互动：</strong>您与他人的互动方式可能反映出这种独特的吸引模式</li>
						</ul>

						<p><strong>生活启示：</strong></p>
						<p>请查看下方的详细维度分析和个性化建议，了解这种特定模式在您整体吸引画像中的位置，以及如何基于此优化您的生活质量和关系满意度。</p>`;

		} else {
			// 无明确类型或复杂情况
			baseType = '无性恋谱系 (具体位置待定)';
			judgmentText = `您的核心性吸引加权均分为 **${sexualCore.toFixed(1)}**，表明您位于无性恋谱系上，但未表现出明显的特定类型特征。`;

			mainInterpretation = `<h3>谱系特征解读</h3>
						<p><strong>您的谱系位置：</strong></p>
						<p>您位于"有性恋"与"完全无性恋"之间的灰色地带。这个区域在学术上被称为"灰色区域"或"灰区"，它包含了许多细微的、个体差异显著的体验模式，是多元性吸引谱系中丰富而重要的一部分。</p>

						<p><strong>可能的情况：</strong></p>
						<ul>
							<li><strong>微弱灰性恋倾向：</strong>性吸引极其微弱、罕见，但尚未达到特定类型的明确阈值。您的体验可能像远处传来的微弱信号，时有时无，难以捕捉。</li>
							<li><strong>混合特征：</strong>同时具有多种模式的元素，但没有一种占主导地位。就像调色板上的颜色混合，产生了独特的中间色调。</li>
							<li><strong>流动特征：</strong>您的体验可能随时间变化，难以用单一时间点的测量固定。今天是A，明天是B，后天又是C，这种流动性本身就是一种模式。</li>
							<li><strong>独特个体模式：</strong>您的吸引模式可能是独特的，不完全符合现有分类体系。人类体验的多样性总是超过我们的分类能力。</li>
							<li><strong>探索早期阶段：</strong>您可能还在理解自己的体验，模式尚未完全清晰或稳定。</li>
						</ul>

						<p><strong>这不是"匹配失败"：</strong></p>
						<p>未能匹配到特定类型<strong>不意味着您的体验无效或有问题</strong>，而是反映了：</p>
						<ul>
							<li>人类体验的丰富性超出了我们当前分类系统的捕捉能力</li>
							<li>您的模式可能是流动的、情境依赖的或高度独特的</li>
							<li>吸引相关认同是一个过程，而非一次性的分类</li>
							<li>有时候，"在谱系上但未确定具体位置"本身就是一个有意义的定位</li>
						</ul>

						<p><strong>建议：</strong></p>
						<p>1. <strong>不必急于给自己贴上特定标签</strong>，可以先观察自己的长期模式，记录什么情境下有什么感受。</p>
						<p>2. <strong>关注您的具体体验而非分类</strong>，什么让您舒适，什么让您不适，什么让您感到连接，什么让您感到疏离。</p>
						<p>3. <strong>探索"无性恋谱系"这个更宽泛的身份</strong>，它本身就是一个完整、有效的身份认同。</p>
						<p>4. <strong>如果未来模式变得更清晰</strong>，可以重新评估或尝试更具体的标签。</p>
						<p>5. <strong>记住身份是工具而非监狱</strong>，它应该服务于您的自我理解和生活优化，而不是限制您的可能性。</p>`;
		}
	}

	// 9. 通用结果准确性提示
	const generalTip = `<div style="background-color: #fff; border-radius: 10px; padding: 20px; margin: 25px 0; box-shadow: 0 3px 10px rgba(0,0,0,0.1); border-left: 6px solid #ff9800;">
					<h3 style="color: #ff9800; margin-top: 0;">确保结果准确性</h3>
					<p>本量表旨在帮助您探索自己的吸引模式。请基于过去几年的真实经历作答，而非社会期望或理想状态。</p>

					<h4 style="color: #ff9800; margin-top: 20px;">如果您发现结果中有任何逻辑矛盾或不一致：</h4>
					<ul style="background-color: #fff3e0; padding: 15px; border-radius: 6px;">
						<li><strong>回顾题目解释：</strong>点击每个问题的标题可以查看详细解释和具体示例</li>
						<li><strong>重新思考：</strong>基于过去几年的真实经历，而非社会期望或理想状态</li>
						<li><strong>区分不同类型吸引：</strong>确保正确区分性吸引、浪漫吸引、情感吸引、审美吸引和感官吸引</li>
						<li><strong>重新测试：</strong>如有疑问，可以重新进行一次测试</li>
					</ul>

					<h4 style="color: #ff9800; margin-top: 20px;">为什么结果可能有矛盾？</h4>
					<ul style="background-color: #e8f5e9; padding: 15px; border-radius: 6px;">
						<li><strong>复杂性：</strong>人类吸引体验可能具有流动性、情境依赖性或非典型组合</li>
						<li><strong>探索过程：</strong>您可能正处于身份探索或转变的过程中</li>
						<li><strong>理解偏差：</strong>某些概念（如性吸引与其他吸引的区别）需要时间来理解和区分</li>
						<li><strong>体验多样性：</strong>人类体验有时丰富到难以被分类系统完整捕捉</li>
					</ul>

					<p style="margin-top: 15px; font-size: 0.95em; color: #666;">
						<strong>重要提示：</strong>本结果基于您的当前回答计算。如果您觉得结果与您的实际体验不符，
						可以：①相信当前结果，接受可能存在的复杂性；②重新测试，更仔细地作答；③将疑问点作为自我探索的起点。
						身份认同是一个持续的过程，不必急于一次确定。
					</p>
				</div>`;

	// 10. 生成详细维度分析
	const detailedAnalysis = generateDetailedAnalysis(scores, sexualCore, primaryTypes, subTypes);

	// 11. 生成个性化建议
	const personalizedSuggestions = generatePersonalizedSuggestions(scores, sexualCore, baseType, primaryTypes, subTypes, multipleAsexual);

	// 12. 生成各部分得分表格
	const sectionScoresTable = generateSectionScoresTable(scores);

	// 13. 渲染结果
	const asexualPattern = sexualCore > 2.5
		? '性吸引通常较规律、自发，是您与他人建立连接时可能出现的常规维度。'
		: sexualCore <= 0.5
			? '性吸引很少或几乎不出现，其他亲密、情感与审美需要仍可独立存在。'
			: '性吸引整体较少、较弱或更依赖特定条件，频率与触发方式比单次经历更值得观察。';
	const asexualTypeNote = primaryTypes.length + subTypes.length > 0
		? '细分类型还提示了一些条件性或情境差异，具体组合可在下方分析中查看。'
		: '当前没有明显的细分类型高点，核心性吸引位置是主要线索。';
	const asexualOverview = '本次作答更接近“' + baseType + '”的群体画像。' + asexualPattern + asexualTypeNote + '请结合长期频率与实际舒适度阅读，结果不能替您决定身份标签。';
	const isAllosexual = baseType.startsWith('有性恋');
	window.PrismScale.renderResultSummary({
		title: baseType,
		metrics: [
			{ label: '核心性吸引', value: `${sexualCore.toFixed(1)} / 5.0` },
			{ label: '明显主类型', value: primaryTypes.length },
			...(isAllosexual ? [] : [{ label: '明显亚型', value: subTypes.length }])
		],
		lead: asexualOverview
	});

	let mainContent = mainInterpretation + generalTip;
	if (detailedAnalysis) {
		mainContent += `<div style="margin-top: 30px;">${detailedAnalysis}</div>`;
	}

	document.getElementById('mainInterpretation').innerHTML = mainContent;
	document.getElementById('sectionScores').innerHTML = `<h3>各部分得分详情</h3>${sectionScoresTable}`;
	document.getElementById('personalizedSuggestions').innerHTML = `<h3>个性化探索路线与成长建议</h3>${personalizedSuggestions}`;

	const radarAvg = (start, end) => {
		let total = 0;
		for (let i = start; i <= end; i++) total += scores[`q${i}`];
		return total / (end - start + 1);
	};
	if (window.PrismScale) {
		window.PrismScale.renderResultRadar({
			canvasId: 'radarChart',
			labels: ['性吸引', '浪漫吸引', '情感连接', '审美吸引', '感官亲密', '自我认知'],
			values: [sexualCore, radarAvg(21, 25), radarAvg(26, 30), radarAvg(31, 35), radarAvg(36, 40), radarAvg(41, 45)],
			max: 5,
			datasetLabel: '吸引谱系维度'
		});
	}

	// 14. 显示结果并滚动到该位置
	resultDiv.style.display = 'block';
	resultDiv.scrollIntoView({ behavior: 'smooth' });

	// 辅助函数定义
	function getPrimaryTypeDescription(typeName) {
		const descriptions = {
			'半性恋 (Demisexual)': '您的性吸引必须以深厚的、长期的情感联结为前提。在没有建立情感基础之前，即使对方外貌出众或条件优秀，您也不会产生性吸引。这种吸引是"从内而外"的——先有心灵的交汇，才可能有身体的渴望。您的关系发展往往是缓慢的、深度优先的，速食关系或一见钟情对您来说可能难以理解或实现。',
			'灰性恋 (Greysexual)': '您的性吸引体验是稀少、微弱或不稳定的。可能一年中只有几次短暂的感受，或者强度非常低，以至于您时常怀疑"这算不算性吸引"。您的性吸引可能只在特定情境、情绪状态或与特定类型的人互动时才会出现。您可能处于"几乎无但又不完全无"的模糊地带，这是无性恋谱系中非常常见的体验。'
		};
		return descriptions[typeName] || '符合该类型的典型特征模式。';
	}

	function getPrimaryTypeImplications(typeName) {
		const implications = {
			'半性恋 (Demisexual)': `<p><strong>关系发展：</strong></p>
						<ul>
							<li><strong>节奏耐心：</strong>您需要时间培养情感联结，速食关系或一见钟情模式可能不适合您。给自己和伴侣足够的时间，不必与他人比较进度。</li>
							<li><strong>沟通重点：</strong>在关系中，情感深度和信任比外表或性技巧更重要。明确告诉伴侣您需要情感基础才能发展性吸引。</li>
							<li><strong>自我接纳：</strong>您的情感优先模式是正常的、有效的，不必与他人比较速度或强度。您的关系可能开始得慢，但可能更深、更稳。</li>
							<li><strong>伴侣选择：</strong>寻找愿意投资时间建立情感基础的伴侣，避免那些急于推进性关系的人。明确沟通您的模式，筛选理解的人。</li>
							<li><strong>关系框架：</strong>考虑从深度友谊发展而来的关系，或者明确寻找也重视情感深度的伴侣。</li>
						</ul>`,
			'灰性恋 (Greysexual)': `<p><strong>生活适应：</strong></p>
						<ul>
							<li><strong>模式接纳：</strong>接受您的性吸引是偶尔的、条件性的，不必强迫自己符合主流频率。您的"灰色"体验本身就是完整的、有效的。</li>
							<li><strong>关系设计：</strong>建立对性吸引低频次有理解的关系框架。与伴侣沟通您的模式可能是"偶尔有，大多无"。</li>
							<li><strong>自我定义：</strong>您不需要在"有性恋"和"无性恋"之间二选一，灰区本身就是完整身份。您可以认同为"灰性恋"而不需要进一步归类。</li>
							<li><strong>情境优化：</strong>识别触发您性吸引的情境（如特定情绪、环境、互动方式），但不强求它的规律性。可以创造这些情境，但接受它不一定每次都有效。</li>
							<li><strong>沟通策略：</strong>向伴侣解释您的性吸引是"稀有事件"而非"日常体验"，设定合理的期望值。</li>
						</ul>`
		};
		return implications[typeName] || '<p>请根据您的具体体验调整关系策略和期望。</p>';
	}

	// 修改后的生成详细维度分析函数中的性吸引维度计算
	function generateDetailedAnalysis(scores, sexualCore, primaryTypes, subTypes) {
		// 计算各维度均分 - 修复版：确保反向计分正确应用
		function calculateSectionAvg(start, end, reverseQs = []) {
			let total = 0;
			let count = 0;

			for (let i = start; i <= end; i++) {
				let value = scores[`q${i}`];

				// 检查这一题是否需要反向计分
				if (reverseQs.includes(i)) {
					// 重要：只有当分数是1-5时才反向，0分保持不变
					if (value >= 1 && value <= 5) {
						value = 6 - value;  // 反向计分
					}
					// 如果value是0，直接跳过，保持0不变
				}

				total += value;
				count++;
			}

			return parseFloat((total / count).toFixed(1));  // 返回保留一位小数的平均值
		}

		// 性吸引维度：第5、6、7、12题需要反向计分
		const sectionAverages = {
			sexual: calculateSectionAvg(1, 15, [5, 6, 7, 12]),
			behavior: calculateSectionAvg(16, 20, [20]),  // 第20题需要反向
			romantic: calculateSectionAvg(21, 25),
			emotional: calculateSectionAvg(26, 30),
			aesthetic: calculateSectionAvg(31, 35),
			sensual: calculateSectionAvg(36, 40),
			self: calculateSectionAvg(41, 45),
			advanced: calculateSectionAvg(46, 60)
		};

		// 评估强度函数
		const getIntensity = (score) => {
			const numScore = parseFloat(score);
			if (numScore >= 4.5) return { text: '非常强烈', color: '#4CAF50' };
			if (numScore >= 3.5) return { text: '中等偏强', color: '#8BC34A' };
			if (numScore >= 2.5) return { text: '中等', color: '#FFC107' };
			if (numScore >= 1.5) return { text: '中等偏弱', color: '#FF9800' };
			return { text: '微弱', color: '#F44336' };
		};

		let analysisHTML = `<div>
					<h3 class="result-section-heading">详细维度分析</h3>
					<p class="result-data-note">以下是对您八大维度的深入解析，帮助您理解各维度吸引在您生活中的具体表现和相互作用。</p>`;

		// 1. 性吸引维度
		const sexualIntensity = getIntensity(sectionAverages.sexual);
		analysisHTML += `<div class="insight-card result-dimension-card">
					${window.PrismScale.createResultDimensionHeader({ index: 1, title: '性吸引维度', score: sectionAverages.sexual, level: sexualIntensity.text })}
					<p><strong>关键发现：</strong></p>
					<ul>
						<li><strong>频率特征：</strong>第4题得分${scores['q4']}/5 - ${scores['q4'] === 0 ? '无性吸引体验或从未经历过性吸引' : scores['q4'] <= 1 ? '性吸引体验极少，可能一年仅几次或更少' : scores['q4'] <= 2 ? '偶尔体验性吸引，每月几次' : '经常体验性吸引，每周或更频繁'}</li>
						<li><strong>对象范围：</strong>第10题得分${scores['q10']}/5 - ${scores['q10'] === 0 ? '无相关体验，无法评估对象范围' : scores['q10'] <= 1 ? '范围极窄，仅对极少数特定类型有吸引' : scores['q10'] <= 2 ? '范围较窄，对少数类型有吸引' : scores['q10'] <= 3 ? '中等范围，对若干类型有吸引' : scores['q10'] <= 4 ? '范围较广，对多种类型有吸引' : '范围非常广，对很多人都有吸引'}</li>
						<li><strong>条件特征：</strong>第5题得分${scores['q5']}/5，第6题得分${scores['q6']}/5 - ${scores['q5'] === 0 && scores['q6'] === 0 ? '无任何条件依赖体验，无法评估条件特征' : scores['q5'] >= 4 ? '强烈依赖情感联结' : scores['q6'] >= 4 ? '高度依赖特定情境' : '条件限制较少'}</li>
						<li><strong>强度特征：</strong>第7题得分${scores['q7']}/5 - ${scores['q7'] === 0 ? '无强度体验，无法评估强度特征' : scores['q7'] >= 4 ? '微弱短暂，快速消退' : scores['q7'] <= 2 ? '强烈持久，影响显著' : '中等强度，变化多样'}</li>
					</ul>
					<p><strong>专业解读：</strong>${sexualCore > 2.5 ? '您的性吸引模式符合主流有性恋特征，性吸引是您关系体验中的常规维度。' : sexualCore <= 0.5 ? '您的性吸引体验几乎缺失，这提示您可能位于无性恋谱系的核心区域。' : '您的性吸引体验处于灰色地带，频率低、强度弱或条件严格，这是无性恋谱系的典型特征。'}</p>
				</div>`;

		// 2. 性行为态度维度（使用多维度判断）
		const sexualBehaviorAnalysis = getSexualBehaviorLabel(scores);
		analysisHTML += `<div class="insight-card result-dimension-card">
					${window.PrismScale.createResultDimensionHeader({ index: 2, title: '性行为态度维度', score: sectionAverages.behavior, level: sexualBehaviorAnalysis.comprehensiveLabel })}

					<p><strong>多维度分析：</strong></p>
					${sexualBehaviorAnalysis.detailedDescription}

					<p><strong>关键题项得分：</strong></p>
					<ul>
						<li><strong>整体态度（第16题）：</strong>${scores['q16']}/5 - ${scores['q16'] === 0 ? '强烈排斥或厌恶' : scores['q16'] <= 2 ? '大多不感兴趣' : scores['q16'] === 3 ? '中立，无强烈好恶' : scores['q16'] === 4 ? '通常开放或积极' : '非常感兴趣或享受'}</li>
						<li><strong>接受性恋倾向（第52题）：</strong>${scores['q52']}/5 - ${scores['q52'] >= 4 ? '倾向于接受者角色' : scores['q52'] <= 2 ? '无明显接受倾向' : '中等接受倾向'}</li>
						<li><strong>给予性恋倾向（第53题）：</strong>${scores['q53']}/5 - ${scores['q53'] >= 4 ? '倾向于给予者角色' : scores['q53'] <= 2 ? '无明显给予倾向' : '中等给予倾向'}</li>
						<li><strong>厌性恋倾向（第54题）：</strong>${scores['q54']}/5 - ${scores['q54'] >= 4 ? '强烈厌恶或回避' : scores['q54'] >= 3 ? '有时感到厌恶' : scores['q54'] <= 1 ? '基本不厌恶' : '轻微不适'}</li>
						<li><strong>吸引-行为分离（第55题）：</strong>${scores['q55']}/5 - ${scores['q55'] >= 4 ? '吸引不转化为行为的倾向强' : scores['q55'] <= 2 ? '吸引与行为相对一致' : '中等分离倾向'}</li>
						<li><strong>行为优先倾向（第56题）：</strong>${scores['q56']}/5 - ${scores['q56'] >= 4 ? '缺乏吸引但渴望行为的倾向强' : scores['q56'] <= 2 ? '行为需求与吸引一致' : '中等行为优先倾向'}</li>
						<li><strong>事后体验质量（第20题）：</strong>${scores['q20']}/5 - ${scores['q20'] === 0 ? '无性活动参与经验' : scores['q20'] >= 4 ? '经常后悔或不适' : scores['q20'] <= 2 ? '通常感到满足' : '体验复杂，时好时坏'}</li>
					</ul>

					<p><strong>专业解读：</strong>${sectionAverages.behavior < 2.5 ?
				'您的负面体验可能影响亲密关系质量，建议优先考虑个人舒适边界，学习坚定表达拒绝。特别注意您的吸引-行为分离特征（如存在）可能需要在关系中额外沟通。' :
				sectionAverages.behavior > 3.5 ?
					'您的开放态度有助于灵活性关系构建，但仍需确保行为与真实意愿一致，避免为迎合他人而参与。注意您的角色偏好和事后体验质量，这有助于设计更符合您需求的关系模式。' :
					'您的态度中性，可能在关系中具有灵活性，但需要明确自己的核心边界和舒适区。考虑您的角色偏好和吸引-行为关系特征，以优化关系满意度。'}</p>
				</div>`;

		// 3. 浪漫吸引维度
		const romanticIntensity = getIntensity(sectionAverages.romantic);
		analysisHTML += `<div class="insight-card result-dimension-card">
					${window.PrismScale.createResultDimensionHeader({ index: 3, title: '浪漫吸引维度', score: sectionAverages.romantic, level: romanticIntensity.text })}
					<p><strong>关键发现：</strong></p>
					<ul>
						<li><strong>存在参考：</strong>第21题得分${scores['q21']}/5 - ${scores['q21'] >= 4 ? '明确体验过浪漫吸引' : scores['q21'] <= 2 ? '很少或从未体验浪漫吸引' : '偶尔或不确定地体验浪漫吸引'}</li>
						<li><strong>重要性：</strong>第22题得分${scores['q22']}/5 - ${scores['q22'] >= 4 ? '浪漫关系对幸福感至关重要' : scores['q22'] <= 2 ? '浪漫关系并非生活必需' : '浪漫是重要但不唯一的需求'}</li>
						<li><strong>区分能力：</strong>第23题得分${scores['q23']}/5 - ${scores['q23'] >= 4 ? '能清晰区分浪漫与性吸引' : scores['q23'] <= 2 ? '难以区分不同类型吸引' : '有一定区分能力但不稳定'}</li>
						<li><strong>独立性：</strong>第25题得分${scores['q25']}/5 - ${scores['q25'] === 0 ? '无相关体验，无法评估独立性' : scores['q25'] >= 4 ? '浪漫吸引独立于性吸引发生' : scores['q25'] <= 2 ? '浪漫吸引常伴随性吸引' : '两者有时独立有时相关'}</li>
					</ul>
					<p><strong>专业解读：</strong>${sectionAverages.romantic > 3.0 && sexualCore <= 2.5 ? '您的"高浪漫-低性吸引"模式在无性恋社区很常见，适合探索无性浪漫关系、酷儿柏拉图式关系等创新关系形式。' : sectionAverages.romantic <= 2.0 ? '您可能位于无浪漫谱系(Aromantic Spectrum)，深度友谊、亲情或自我实现可能比传统恋爱更能满足您的亲密需求。' : '您的浪漫-性吸引模式相对匹配，传统关系框架可能适用，但仍可根据您的独特比例调整关系期待。'}</p>
				</div>`;

		// 4. 情感吸引维度
		const emotionalIntensity = getIntensity(sectionAverages.emotional);
		analysisHTML += `<div class="insight-card result-dimension-card">
					${window.PrismScale.createResultDimensionHeader({ index: 4, title: '情感吸引维度', score: sectionAverages.emotional, level: emotionalIntensity.text })}
					<p><strong>关键发现：</strong></p>
					<ul>
						<li><strong>深度需求：</strong>第27题得分${scores['q27']}/5 - ${scores['q27'] >= 4 ? '深层情感联结是幸福感的核心' : scores['q27'] <= 2 ? '对情感深度需求较低' : '中等情感联结需求'}</li>
						<li><strong>区分精度：</strong>第28题得分${scores['q28']}/5 - ${scores['q28'] >= 4 ? '能精确区分情感与其他吸引类型' : scores['q28'] <= 2 ? '情感边界模糊，易与其他吸引混淆' : '有一定区分能力'}</li>
						<li><strong>关系弹性：</strong>第29题得分${scores['q29']}/5 - ${scores['q29'] >= 4 ? '情感投资高度选择性，深度关系稀少' : scores['q29'] <= 2 ? '情感深度在不同关系中相对均匀' : '中等选择性投资模式'}</li>
						<li><strong>主动寻求：</strong>第30题得分${scores['q30']}/5 - ${scores['q30'] >= 4 ? '主动寻求深度情感连接' : scores['q30'] <= 2 ? '被动等待情感连接发生' : '偶尔主动寻求'}</li>
					</ul>
					<p><strong>专业解读：</strong>${sectionAverages.emotional > 3.5 ? '情感吸引可能是您的主要亲密感来源，建议优先投资高质量友谊和情感支持网络，将深度对话、共同成长作为关系核心。' : sectionAverages.emotional < 2.5 ? '您可能更注重个人独立空间，少量深度关系或充足独处时间对您很重要。不需要强迫自己建立过多情感联结。' : '您的情感联结需求适中，平衡了深度与广度，可以在维持少数深度关系的同时享受更广泛的社会联系。'}</p>
				</div>`;

		// 5. 审美吸引维度
		const aestheticIntensity = getIntensity(sectionAverages.aesthetic);
		analysisHTML += `<div class="insight-card result-dimension-card">
					${window.PrismScale.createResultDimensionHeader({ index: 5, title: '审美吸引维度', score: sectionAverages.aesthetic, level: aestheticIntensity.text })}
					<p><strong>关键发现：</strong></p>
					<ul>
						<li><strong>分离程度：</strong>第31题得分${scores['q31']}/5 - ${scores['q31'] >= 4 ? '审美欣赏与性幻想高度分离' : scores['q31'] <= 2 ? '审美常自动触发性联想' : '审美与性欲部分关联'}</li>
						<li><strong>欣赏终止点：</strong>第32题得分${scores['q32']}/5 - ${scores['q32'] >= 4 ? '能纯欣赏而无占有欲' : scores['q32'] <= 2 ? '欣赏易转化为接近冲动' : '欣赏与行动意图并存'}</li>
						<li><strong>性别中立性：</strong>第34题得分${scores['q34']}/5 - ${scores['q34'] >= 4 ? '审美不受性取向限制' : scores['q34'] <= 2 ? '审美高度择偶化' : '审美有一定性别偏好'}</li>
						<li><strong>即时反应：</strong>第35题得分${scores['q35']}/5 - ${scores['q35'] >= 4 ? '第一反应是纯审美欣赏' : scores['q35'] <= 2 ? '第一反应是接近或占有欲' : '两者混合'}</li>
					</ul>
					<p><strong>专业解读：</strong>${sectionAverages.aesthetic > 3.5 ? '您的纯审美能力发达，视觉艺术和美学体验可能为您带来深层满足。您可以充分利用这一优势，通过艺术欣赏、设计创作、美学讨论等丰富生活质量。' : sectionAverages.aesthetic < 2.5 ? '您的审美可能更功能化或与其他吸引融合，美感体验可能不是您的主要愉悦来源。但这不影响您享受其他形式的丰富体验。' : '您的审美体验适中，能在欣赏美与实际行动之间保持平衡。美感是您生活调色板中的一部分，但非全部。'}</p>
				</div>`;

		// 6. 感官吸引维度
		const sensualIntensity = getIntensity(sectionAverages.sensual);
		analysisHTML += `<div class="insight-card result-dimension-card">
					${window.PrismScale.createResultDimensionHeader({ index: 6, title: '感官吸引维度', score: sectionAverages.sensual, level: sensualIntensity.text })}
					<p><strong>关键发现：</strong></p>
					<ul>
						<li><strong>功能性需求：</strong>第37题得分${scores['q37']}/5 - ${scores['q37'] >= 4 ? '身体接触是重要的情绪调节工具' : scores['q37'] <= 2 ? '对身体接触需求很低' : '中等身体接触需求'}</li>
						<li><strong>意图解码：</strong>第38题得分${scores['q38']}/5 - ${scores['q38'] >= 4 ? '能清晰区分感官与性意图' : scores['q38'] <= 2 ? '常担心触碰被误解为性暗示' : '有一定区分能力但不稳定'}</li>
						<li><strong>关系普适性：</strong>第39题得分${scores['q39']}/5 - ${scores['q39'] >= 4 ? '触觉需求广泛适用于多种关系' : scores['q39'] <= 2 ? '触觉需求高度伴侣绑定' : '触觉需求有选择性'}</li>
						<li><strong>表达主动性：</strong>第40题得分${scores['q40']}/5 - ${scores['q40'] >= 4 ? '主动表达触觉需求' : scores['q40'] <= 2 ? '很少表达触觉需求' : '偶尔表达触觉需求'}</li>
					</ul>
					<p><strong>专业解读：</strong>${sectionAverages.sensual > 3.0 ? '非性身体接触可能是您表达和接收关爱的重要方式，建议在关系中明确沟通您的触觉偏好，建立清晰的触碰边界和共识。考虑将拥抱、握手、依偎等作为重要的关系仪式。' : sectionAverages.sensual < 2.0 ? '您可能更偏好语言交流、共同活动或礼物赠送等亲密表达方式，触觉不是您的主要连接渠道。明确告知他人您的偏好，避免不必要的触碰压力。' : '您的触觉需求适中，能在需要时享受身体接触，也能在独处时感到满足。这种灵活性有助于适应不同关系和情境。'}</p>
				</div>`;

		// 7. 自我认知维度
		const selfIntensity = getIntensity(sectionAverages.self);
		analysisHTML += `<div class="insight-card result-dimension-card">
					${window.PrismScale.createResultDimensionHeader({ index: 7, title: '自我认知维度', score: sectionAverages.self, level: selfIntensity.text })}
					<p><strong>关键发现：</strong></p>
					<ul>
						<li><strong>差异感知：</strong>第41题得分${scores['q41']}/5 - ${scores['q41'] >= 4 ? '强烈意识到自身模式与主流不同' : scores['q41'] <= 2 ? '较少感知到自身独特性' : '偶尔察觉差异但不强烈'}</li>
						<li><strong>接纳程度：</strong>第42题得分${scores['q42']}/5 - ${scores['q42'] >= 4 ? '高度自我接纳，身份认同稳固' : scores['q42'] <= 2 ? '存在内部冲突或否认' : '中立态度，正在适应'}</li>
						<li><strong>知识获取：</strong>第43题得分${scores['q43']}/5 - ${scores['q43'] >= 4 ? '主动深入学习谱系知识' : scores['q43'] <= 2 ? '信息接触有限' : '中等探索兴趣'}</li>
						<li><strong>沟通实践：</strong>第44题得分${scores['q44']}/5 - ${scores['q44'] >= 4 ? '主动在关系中沟通吸引模式' : scores['q44'] <= 2 ? '很少沟通吸引模式' : '偶尔或选择性沟通'}</li>
					</ul>
					<p><strong>专业解读：</strong>${sectionAverages.self > 3.5 ? '您的自我认知成熟度高，能有效利用身份知识优化生活质量。您可以进一步将这种自我认知转化为关系沟通技巧和生活方式设计，成为自己生活的专家。' : sectionAverages.self < 2.5 ? '您正处于有价值的自我发现过程中，建议保持好奇和耐心，允许认知随时间发展。参与社区讨论、阅读相关书籍、记录自我观察可能有助于加速这一过程。' : '您的自我认知处于发展中期，已有一定理解但仍在探索中。继续观察、反思和对话，您的自我认知可能会进一步清晰和巩固。'}</p>
				</div>`;

		analysisHTML += `</div>`;
		return analysisHTML;
	}

	// 生成个性化建议的函数
	function generatePersonalizedSuggestions(scores, sexualCore, baseType, primaryTypes, subTypes, multipleAsexual) {
		let suggestions = `<div style="background-color: #f0f8ff; border-radius: 10px; padding: 25px; margin-top: 20px; border: 1px solid #d1e7ff;">
					<p style="color: #1a3c66; font-size: 1.1em; margin-bottom: 20px;">基于您的多维评估结果，我们为您定制了以下发展路径和建议。请记住，这些建议是启发性的，您可以根据自己的实际情况调整和选择。</p>
					<ol style="counter-reset: item; padding-left: 0;">`;

		// 建议1：谱系认同相关
		if (sexualCore <= 2.5) {
			suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
						<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">1</span>
						<strong style="color: #1a3c66; font-size: 1.1em;">深化谱系认同与社区连接</strong>
						<ul style="margin-top: 10px; color: #444;">
							<li><strong>社区连接：</strong>加入AVEN国际论坛（www.asexuality.org）或中文无性恋社群（如豆瓣小组、QQ群、Discord社群），与有相似体验的人交流，验证自身经历，减轻孤立感。</li>
							<li><strong>教育资源：</strong>系统学习《The Invisible Orientation》、《Ace: What Asexuality Reveals About Desire, Society, and the Meaning of Sex》等专业书籍，建立科学认知框架。</li>
							<li><strong>身份整合：</strong>将"无性恋谱系"视为神经多样性的一部分，而非缺陷或障碍。练习用积极语言描述自己的体验，如"我以不同的方式体验吸引"而非"我缺少什么"。</li>
							<li><strong>自我叙事：</strong>撰写个人吸引体验故事，记录关键经历、感受变化和自我发现过程，这有助于整合自我认知。</li>
						</ul>
					</li>`;
		} else {
			suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
						<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">1</span>
						<strong style="color: #1a3c66; font-size: 1.1em;">优化吸引体验管理与平衡</strong>
						<ul style="margin-top: 10px; color: #444;">
							<li><strong>模式识别：</strong>记录性吸引与其他吸引的分离情况，了解您的独特互动模式。注意在什么情境下性吸引最强/最弱，与其他生活领域的关系。</li>
							<li><strong>关系沟通：</strong>在亲密关系中清晰表达您的吸引特征，避免期望错位。即使作为有性恋者，您也可能有独特的偏好、频率期望或情境需求。</li>
							<li><strong>平衡发展：</strong>确保性吸引不挤压其他重要生活领域（事业、友情、个人成长、精神追求）。检查性吸引是否在某些时期过度主导您的注意力和决策。</li>
							<li><strong>多元理解：</strong>虽然您是有性恋，但深入学习无性恋谱系知识可以帮助您理解人类吸引体验的多样性，成为更好的伴侣、朋友或盟友。</li>
						</ul>
					</li>`;
		}

		// 建议2：关系建设相关
		if (sexualCore <= 2.5 && parseFloat(scores['q21'] || 0) >= 3.5) {
			suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
						<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">2</span>
						<strong style="color: #1a3c66; font-size: 1.1em;">构建无性浪漫关系框架</strong>
						<ul style="margin-top: 10px; color: #444;">
							<li><strong>明确沟通：</strong>恋爱初期清晰说明"高浪漫需求+低性需求"的特征。准备简明的解释材料，如"对我来说，爱更多是关于情感亲密和共同成长，而不是性亲密"。</li>
							<li><strong>关系模式创新：</strong>探索酷儿柏拉图式关系（QPR）、无性婚姻、生活伴侣等非传统关系形式。这些关系强调情感承诺和共同生活，而不预设性亲密。</li>
							<li><strong>亲密感替代：</strong>开发情感交流、智力共鸣、共同兴趣、生活照顾、仪式创造等非性亲密渠道。建立您们专属的"亲密感工具箱"。</li>
							<li><strong>伴侣寻找策略：</strong>在无性恋友好平台（如ACEapp、无性恋社群活动）寻找伴侣，或在传统平台明确标注您的需求和身份。</li>
						</ul>
					</li>`;
		}

		// 建议3：边界管理相关
		if (parseFloat(scores['q16'] || 0) <= 2 || parseFloat(scores['q54'] || 0) >= 4) {
			suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
						<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">${sexualCore <= 2.5 && parseFloat(scores['q21'] || 0) >= 3.5 ? '3' : '2'}</span>
						<strong style="color: #1a3c66; font-size: 1.1em;">强化个人边界与沟通技巧</strong>
						<ul style="margin-top: 10px; color: #444;">
							<li><strong>坚定拒绝：</strong>练习清晰表达"不"，无需为拒绝性接触提供冗长理由。使用"我陈述句"，如"我不喜欢这样"、"这让我不舒服"。</li>
							<li><strong>替代方案：</strong>准备非性亲密活动清单（深度对话、共同创作、感官体验、共同学习、冒险旅行等），在拒绝性接触时提供其他连接选项。</li>
							<li><strong>支持系统：</strong>建立理解并尊重您边界的朋友圈和伴侣关系。远离那些不尊重您"不"的人。</li>
							<li><strong>情境管理：</strong>识别可能面临压力或期望的情境（如约会、聚会、特定文化环境），提前准备应对策略和退出方案。</li>
						</ul>
					</li>`;
		}

		// 建议4：特定类型优化
		if (primaryTypes.some(p => p.name.includes('半性恋'))) {
			suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
						<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">${(() => {
					let count = 3;
					if (sexualCore <= 2.5 && parseFloat(scores['q21'] || 0) >= 3.5) count++;
					if (parseFloat(scores['q16'] || 0) <= 2 || parseFloat(scores['q54'] || 0) >= 4) count++;
					return count;
				})()}</span>
						<strong style="color: #1a3c66; font-size: 1.1em;">半性恋特质优化</strong>
						<ul style="margin-top: 10px; color: #444;">
							<li><strong>关系节奏：</strong>选择接受"慢热"模式的伴侣，避免速食关系压力。明确告知潜在伴侣您需要时间发展情感联结才可能产生性吸引。</li>
							<li><strong>信任建设：</strong>优先投资情感安全感和长期信任积累。将关系初期的重点放在深度对话、脆弱性分享和共同经历上。</li>
							<li><strong>自我接纳：</strong>认可情感深度作为吸引前提的合理性，不比较他人节奏。您的关系可能开始得慢，但往往更深、更稳。</li>
							<li><strong>沟通策略：</strong>用比喻解释您的体验，如"我的吸引体验就像种子，需要深厚的情感土壤才能发芽"。</li>
						</ul>
					</li>`;
		}

		if (primaryTypes.some(p => p.name.includes('灰性恋'))) {
			const index = (() => {
				let count = 3;
				if (sexualCore <= 2.5 && parseFloat(scores['q21'] || 0) >= 3.5) count++;
				if (parseFloat(scores['q16'] || 0) <= 2 || parseFloat(scores['q54'] || 0) >= 4) count++;
				if (primaryTypes.some(p => p.name.includes('半性恋'))) count++;
				return count;
			})();

			suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
						<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">${index}</span>
						<strong style="color: #1a3c66; font-size: 1.1em;">灰性恋模式管理</strong>
						<ul style="margin-top: 10px; color: #444;">
							<li><strong>不确定性接纳：</strong>接受"有时有，有时无"的灰色状态，不强迫自己明确归类。灰色本身就是完整身份，不需要变成黑色或白色。</li>
							<li><strong>模式观察：</strong>记录性吸引出现的模式，注意触发因素（特定情绪、环境、互动方式）、持续时间和强度变化。</li>
							<li><strong>关系期望管理：</strong>向伴侣解释您的性吸引是"稀有事件"而非"日常体验"，设定合理的期望值，避免失望和压力。</li>
							<li><strong>自我定义自由：</strong>允许自己在不同时期使用不同标签，或不使用具体标签。您的体验是流动的，身份也可以有流动性。</li>
						</ul>
					</li>`;
		}

		if (parseFloat(scores['q49'] || 0) >= 4) {
			const index = (() => {
				let count = 3;
				if (sexualCore <= 2.5 && parseFloat(scores['q21'] || 0) >= 3.5) count++;
				if (parseFloat(scores['q16'] || 0) <= 2 || parseFloat(scores['q54'] || 0) >= 4) count++;
				if (primaryTypes.some(p => p.name.includes('半性恋'))) count++;
				if (primaryTypes.some(p => p.name.includes('灰性恋'))) count++;
				return count;
			})();

			suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
						<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">${index}</span>
						<strong style="color: #1a3c66; font-size: 1.1em;">磨损性恋模式适应</strong>
						<ul style="margin-top: 10px; color: #444;">
							<li><strong>关系预期：</strong>接受吸引的自然衰减，不视为关系失败。理解您的吸引模式是"初遇最强，随熟悉减弱"，这无关关系质量或个人价值。</li>
							<li><strong>连接转型：</strong>在性吸引减弱后，有意识培养情感、智力或精神连接。设计关系发展的第二阶段重点。</li>
							<li><strong>关系形式：</strong>考虑短期关系、开放式关系或保持适当神秘感的长期关系。找到适合您吸引曲线的关系结构。</li>
							<li><strong>沟通策略：</strong>向伴侣解释您的模式，强调这并非对方的问题，而是您吸引模式的自然运作方式。</li>
						</ul>
					</li>`;
		}

		// 如果检测到渴望关系性恋与第19题互斥，添加专门建议
		if (scores['q56'] >= 4 && scores['q19'] <= 2) {
			const index = (() => {
				let count = 3;
				if (sexualCore <= 2.5 && parseFloat(scores['q21'] || 0) >= 3.5) count++;
				if (parseFloat(scores['q16'] || 0) <= 2 || parseFloat(scores['q54'] || 0) >= 4) count++;
				if (primaryTypes.some(p => p.name.includes('半性恋'))) count++;
				if (primaryTypes.some(p => p.name.includes('灰性恋'))) count++;
				if (parseFloat(scores['q49'] || 0) >= 4) count++;
				return count;
			})();

			suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
					<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">${index}</span>
					<strong style="color: #1a3c66; font-size: 1.1em;">澄清性关系渴望与行为意愿的矛盾</strong>
					<ul style="margin-top: 10px; color: #444;">
					<li><strong>区分渴望与行动：</strong>仔细思考您对"性关系"的渴望是抽象概念还是具体行为。有时我们渴望的是亲密感、连接感或关系形式，而非性行为本身。</li>
					<li><strong>探索替代形式：</strong>考虑非插入式性行为、边缘性行为或其他身体亲密方式，这些可能更符合您的实际意愿。</li>
					<li><strong>沟通期望：</strong>如果进入关系，明确沟通您对性行为的实际意愿和边界，避免期望错位。</li>
					<li><strong>重新评估：</strong>回顾第19题和第56题，确认是否准确理解了问题含义。渴望关系性恋不一定意味着渴望传统性行为。</li>
					</ul>
				</li>`;
		}

		// 建议5：持续自我发展
		const finalIndex = (() => {
			let count = 4; // 基础建议数量
			if (sexualCore <= 2.5 && parseFloat(scores['q21'] || 0) >= 3.5) count++;
			if (parseFloat(scores['q16'] || 0) <= 2 || parseFloat(scores['q54'] || 0) >= 4) count++;
			if (primaryTypes.some(p => p.name.includes('半性恋'))) count++;
			if (primaryTypes.some(p => p.name.includes('灰性恋'))) count++;
			if (parseFloat(scores['q49'] || 0) >= 4) count++;
			return count;
		})();

		suggestions += `<li style="margin-bottom: 25px; list-style: none; counter-increment: item; position: relative; padding-left: 35px;">
					<span style="position: absolute; left: 0; font-weight: bold; color: #0078d4; font-size: 1.2em;">${finalIndex}</span>
					<strong style="color: #1a3c66; font-size: 1.1em;">持续自我发展与专业支持</strong>
					<ul style="margin-top: 10px; color: #444;">
						<li><strong>吸引体验日记：</strong>定期记录各类吸引体验，追踪模式变化。注意记录情境、情绪、对象特征、持续时间和后续感受。</li>
						<li><strong>专业支持：</strong>如遇显著困扰（如身份焦虑、关系冲突、抑郁情绪），咨询熟悉性多元文化的心理咨询师或性治疗师。</li>
						<li><strong>流动性接纳：</strong>允许身份和体验随时间自然演变，不固着于特定标签。人类吸引体验具有发展性，今天的描述可能不同于明天。</li>
						<li><strong>社群参与：</strong>参与无性恋社群的线上/线下活动，分享经验，获取支持，也给予他人支持。</li>
						<li><strong>自我关怀：</strong>实践自我接纳和自我关怀练习，特别是在面对社会压力或不理解时。</li>
					</ul>
				</li>`;

		suggestions += `</ol>
					<div style="background-color: #e8f5e9; border-left: 4px solid #4CAF50; padding: 15px; margin-top: 25px; border-radius: 6px;">
						<strong style="color: #2e7d32;">专业声明：</strong>
						<p style="margin: 8px 0 0 0; color: #555; font-size: 0.95em;">
							本评估基于现有性学研究和无性恋社区共识开发，旨在提供自我探索的参考框架，<strong>不能替代临床诊断或专业心理咨询</strong>。人类性吸引具有高度个体差异和流动性，请将此结果视为自我理解的起点而非终点。无论您的得分和类型如何，您的体验都是有效且有价值的。如果您对自己的性吸引模式感到困扰或困惑，建议寻求专业支持。
						</p>
					</div>
				</div>`;

		return suggestions;
	}

	// 修改后的生成各部分得分表格函数
	function generateSectionScoresTable(scores) {
		// 计算各维度均分 - 与上面相同的修复版
		function calculateSectionAvg(start, end, reverseQs = []) {
			let total = 0;
			let count = 0;

			for (let i = start; i <= end; i++) {
				let value = scores[`q${i}`];

				// 检查这一题是否需要反向计分
				if (reverseQs.includes(i)) {
					// 重要：只有当分数是1-5时才反向，0分保持不变
					if (value >= 1 && value <= 5) {
						value = 6 - value;  // 反向计分
					}
					// 如果value是0，直接跳过，保持0不变
				}

				total += value;
				count++;
			}

			return parseFloat((total / count).toFixed(1));  // 返回保留一位小数的平均值
		}

		const sections = [
			{ name: '性吸引核心', start: 1, end: 15, reverse: [5, 6, 7, 12] },
			{ name: '性行为态度', start: 16, end: 20, reverse: [20] },
			{ name: '浪漫吸引', start: 21, end: 25, reverse: [] },
			{ name: '情感吸引', start: 26, end: 30, reverse: [] },
			{ name: '审美吸引', start: 31, end: 35, reverse: [] },
			{ name: '感官吸引', start: 36, end: 40, reverse: [] },
			{ name: '自我认知', start: 41, end: 45, reverse: [] }
		];

		const describeSection = (name, avg) => {
			if (name === '性行为态度') {
				const analysis = getSexualBehaviorLabel(scores);
				return `${analysis.comprehensiveLabel}；这里描述的是参与性行为的舒适度与偏好，不代表性吸引一定高或低。`;
			}
			const descriptions = {
				'性吸引核心': avg >= 3.5 ? '性吸引通常较容易出现，频率与明确度相对较高；这与是否愿意实际参与性行为仍是两件事。' : avg >= 2.5 ? '性吸引存在但强度或频率居中，可能受对象、关系安全感与情境影响。' : avg >= 1.5 ? '性吸引较少、较弱或较依赖条件，适合继续区分低频吸引、灰性恋与半性恋线索。' : '性吸引很少或几乎不出现，无性恋谱系线索较突出；浪漫、审美和亲密需求仍可独立存在。',
				'浪漫吸引': avg >= 3.5 ? '建立恋爱关系、进行浪漫互动或成为彼此特别对象的愿望较明确，可与性吸引同时或独立出现。' : avg >= 2.5 ? '浪漫吸引会在部分对象或情境中出现，但不一定稳定或强烈。' : '浪漫吸引较少；这不等于缺少情感连接，也不直接决定是否属于无浪漫谱系。',
				'情感吸引': avg >= 3.5 ? '你较重视理解、倾诉与深层情感连接，这种连接可以完全不包含性吸引。' : avg >= 2.5 ? '情感连接需求会随关系与信任程度变化，并非对所有对象都同样明显。' : '主动建立深层情感连接的倾向较低，可能更依赖少数关系、时间或安全感。',
				'审美吸引': avg >= 3.5 ? '你较常欣赏外貌、气质或风格，但“觉得好看”本身不能作为存在性吸引的证据。' : avg >= 2.5 ? '审美欣赏存在但并非持续主轴，可能集中在特定风格或对象。' : '外貌与气质带来的欣赏较少，或不是你注意他人的主要方式。',
				'感官吸引': avg >= 3.5 ? '你较明确地渴望拥抱、依偎或非性触碰；需要把触觉亲密与性接触愿望分开理解。' : avg >= 2.5 ? '非性身体亲密的需求受对象、边界与安全感影响较大。' : '对拥抱、依偎等非性触碰的主动需求较低，个人边界可能更重要。',
				'自我认知': avg >= 3.5 ? '你较能识别、接纳并沟通自己的吸引模式，当前结果更适合用于细化描述。' : avg >= 2.5 ? '你已形成部分理解，但标签、差异感与沟通方式仍在探索中。' : '你可能仍在辨别体验与学习相关概念，当前分数更适合作为问题清单，而不是身份结论。'
			};
			return descriptions[name];
		};

		let tableHTML = `<div class="result-table-shell"><table class="result-score-table">
					<colgroup><col><col><col><col></colgroup>
					<thead>
						<tr>
							<th>维度</th>
							<th>均分</th>
							<th>当前位置</th>
							<th>当前解读</th>
						</tr>
					</thead>
					<tbody>`;

		sections.forEach((section, index) => {
			const avg = calculateSectionAvg(section.start, section.end, section.reverse);

			let intensity = '';
			if (avg >= 4.5) {
				intensity = '非常强烈';
			} else if (avg >= 3.5) {
				intensity = '中等偏强';
			} else if (avg >= 2.5) {
				intensity = '中等';
			} else if (avg >= 1.5) {
				intensity = '中等偏弱';
			} else {
				intensity = '微弱';
			}

			tableHTML += `<tr>
						<td><strong>${section.name}</strong></td>
						<td style="text-align: center;"><strong>${avg.toFixed(1)}</strong></td>
						<td>${intensity}</td>
						<td>${describeSection(section.name, avg)}</td>
					</tr>`;
		});

		tableHTML += `</tbody></table></div>`;
		return tableHTML;
	}
}
/* ==========  函数体结束  ========== */

function resetForm() {
	const form = document.getElementById('asexualQuiz');
	const resultDiv = document.getElementById('result');
	form.reset();
	localStorage.removeItem('asexualQuizAnswers');
	resultDiv.style.display = 'none';
	document.querySelectorAll('.explanation').forEach(exp => exp.style.display = 'none');
	if (window.PrismScale) window.PrismScale.destroyResultRadar('radarChart');
	updateProgress();
}

function saveResultText() {
	const resultDiv = document.getElementById('result');
	if (resultDiv.style.display === 'block') {
		let resultText = "无性恋谱系自查表结果\n=======================\n\n总分: " + document.getElementById('scoreSummary').textContent + "\n\n类型: " + document.getElementById('typeJudgment').textContent + "\n\n解释: " + document.getElementById('mainInterpretation').textContent + "\n\n详细: " + document.getElementById('detailedAnalysis').innerText + "\n\n部分得分: " + document.getElementById('sectionScores').innerText + "\n\n建议: " + document.getElementById('personalizedSuggestions').innerText;
		const blob = new Blob([resultText.trim()], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = '无性恋谱系自查结果.txt';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}
}

async function saveResultImage() {
	const resultDiv = document.getElementById('result');
	if (resultDiv.style.display === 'block') {
		const canvas = await html2canvas(resultDiv, {
			scale: 2,
			backgroundColor: getComputedStyle(resultDiv).backgroundColor,
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
		link.download = '无性恋谱系自查结果.png';
		link.href = canvas.toDataURL();
		link.click();
	} else {
		alert('请先计算结果再保存！');
	}
}

// 页面加载时恢复已保存的答案
window.addEventListener('DOMContentLoaded', function () {
	loadAnswersFromLocalStorage();
});

// 监听表单变化，自动保存
const form = document.getElementById('asexualQuiz');
form.addEventListener('change', function () {
	saveAnswersToLocalStorage();
});
