const scaleItems = [
    {
        id: 1,
        dimension: 'identityClarity',
        text: '我能用自己的语言描述当前的性别认同，即使不使用现成的身份标签。',
        purpose: '观察你是否能以自己的方式理解和描述性别认同。清晰度可以存在于任何性别认同中，也可以随着时间变化。'
    },
    {
        id: 2,
        dimension: 'identityClarity',
        text: '我能分辨自己是否认同出生时被指派的性别，而不是只根据他人的期待来回答。',
        purpose: '把内在认同与外界期待分开。暂时无法判断也是真实且有意义的回答，不需要强行选择一个结论。'
    },
    {
        id: 3,
        dimension: 'identityClarity',
        text: '我使用的性别标签（如果有）能够较好地贴合我的内在体验。',
        purpose: '观察现有标签与自我体验的贴合程度。没有使用标签、正在更换标签或不想使用标签，都不代表认同不真实。'
    },
    {
        id: 4,
        dimension: 'identityClarity',
        text: '即使不考虑家庭、文化和社会期待，我也能分辨自己的性别感受与性别角色要求。',
        purpose: '区分“我是谁”与“社会希望我怎样表现”。不符合性别角色本身不能证明任何特定的性别认同。'
    },
    {
        id: 5,
        dimension: 'identityClarity',
        text: '我能描述哪些性别称呼或身份语言贴合自己，哪些不贴合自己。',
        purpose: '观察对自己体验的描述，不考察术语知识。任何人都不需要熟悉性别概念才拥有真实的性别认同。'
    },
    {
        id: 6,
        dimension: 'nonbinaryExperience',
        text: '“男性”或“女性”单独一个标签都无法完整描述我的性别体验。',
        purpose: '观察二元标签是否足够描述你的体验。分数高只表示描述上的不充分，不自动等同于某个非二元身份。'
    },
    {
        id: 7,
        dimension: 'nonbinaryExperience',
        text: '我感觉自己位于男性和女性之间、两者之外，或不属于单一性别。',
        purpose: '观察是否存在超出单一二元位置的性别体验。不同人的“之间”和“之外”含义可能完全不同。'
    },
    {
        id: 8,
        dimension: 'nonbinaryExperience',
        text: '“没有性别”或“性别不适用于我”这样的描述，与我的内在体验有共鸣。',
        purpose: '单独观察无性别或性别疏离相关体验，不把性别表达中性、对性别议题缺乏兴趣或不喜欢刻板印象混同于无性别认同。'
    },
    {
        id: 9,
        dimension: 'nonbinaryExperience',
        text: '我曾认真考虑过使用非二元、性别酷儿、无性别或其他不属于单一男女性别的词语描述自己。',
        purpose: '观察身份语言是否提供了有用的自我理解框架。考虑过一个词语不等于必须采用它。'
    },
    {
        id: 10,
        dimension: 'nonbinaryExperience',
        text: '即使没有人要求我选择性别，我仍不会只把自己理解为男性或女性其中之一。',
        purpose: '把对外部表格和规范的不满，与更持久的自我性别理解区分开。'
    },
    {
        id: 11,
        dimension: 'genderFluidity',
        text: '我的性别认同会随着时间发生变化。',
        purpose: '观察性别认同本身是否具有时间变化。题目不把变化视为混乱或缺乏真实性。'
    },
    {
        id: 12,
        dimension: 'genderFluidity',
        text: '在不同情境下，我的内在性别感会发生变化，而不只是外在表达发生变化。',
        purpose: '区分“当天换一种穿搭”与“内在性别感发生变化”。两者都可以存在，但不是同一个现象。'
    },
    {
        id: 13,
        dimension: 'genderFluidity',
        text: '我会在不同时间感到自己更接近不同性别、多个性别，或没有性别。',
        purpose: '观察变化的方向和范围。流动的频率可以是每天、每周、每月或更长时间，不需要符合固定模式。'
    },
    {
        id: 14,
        dimension: 'genderFluidity',
        text: '我的性别感受变化对我来说是内在体验的变化，而不只是为了适应他人的要求。',
        purpose: '帮助区分认同流动与出于安全、工作或关系需要而调整表达。两种情况都值得记录，但含义不同。'
    },
    {
        id: 15,
        dimension: 'genderFluidity',
        text: '我希望别人允许我在不同阶段使用不同的称呼、名字、代词或性别表达。',
        purpose: '观察对灵活表达和被灵活对待的需要。表达需求不单独决定性别认同。'
    },
    {
        id: 16,
        dimension: 'genderAffirmation',
        text: '别人使用符合我感受的称呼或代词时，我会感到舒适、轻松或被准确看见。',
        purpose: '观察性别被确认时的积极体验。没有固定称呼或代词偏好，也可以选择较低分。'
    },
    {
        id: 17,
        dimension: 'genderAffirmation',
        text: '以符合我性别感受的方式呈现自己时，我会感觉更自在。',
        purpose: '观察性别表达与内在体验相互贴合时的舒适感，而不是评价表达是否符合某种性别规范。'
    },
    {
        id: 18,
        dimension: 'genderAffirmation',
        text: '想象自己以更符合内在感受的性别生活，会带来持续的轻松或喜悦。',
        purpose: '观察性别愉悦和未来想象。积极体验可以提供线索，但并不是必须有的“证明”。'
    },
    {
        id: 19,
        dimension: 'genderAffirmation',
        text: '在安全场景中被当作我认同的性别对待时，我会产生明显的“这样才对”的感觉。',
        purpose: '观察社会确认带来的正确感或归属感。若从未有安全的尝试机会，可以选择“不适用/难以判断”。'
    },
    {
        id: 20,
        dimension: 'genderAffirmation',
        text: '我能指出至少一种具体的称呼、表达方式或身体状态，会让我在性别上更自在。',
        purpose: '把抽象的身份思考连接到可观察的生活体验，帮助发现对自己有帮助的条件，而不是寻找单一答案。'
    },
    {
        id: 21,
        dimension: 'genderIncongruence',
        text: '在不考虑他人评价时，我仍觉得出生时被指派性别的某些方面与我不一致。',
        purpose: '观察内在不一致感，而不是把外界歧视造成的不适直接当作认同本身。'
    },
    {
        id: 22,
        dimension: 'genderIncongruence',
        text: '身体的某些性征让我感到与自己的性别体验不一致或疏离。',
        purpose: '观察身体相关的不一致体验。没有身体不适并不否定任何跨性别或非二元认同。'
    },
    {
        id: 23,
        dimension: 'genderIncongruence',
        text: '想到一生都按照出生时被指派的性别生活时，我会感到明显的不安、空虚或抗拒。',
        purpose: '观察对长期生活方向的感受。想象题受当前处境、信息和安全条件影响，不能单独用于身份判断。'
    },
    {
        id: 24,
        dimension: 'genderIncongruence',
        text: '性别相关的不适会影响我的情绪、社交、学习、工作或日常生活。',
        purpose: '观察体验的功能影响，而不是把痛苦当作认同真实性的必要条件。'
    },
    {
        id: 25,
        dimension: 'genderIncongruence',
        text: '即使没有外界评价，我仍会对某些性别相关的身体或社会身份感到不适。',
        purpose: '进一步区分内在不一致与单纯害怕被评价、被歧视或不符合性别规范。'
    },
    {
        id: 26,
        dimension: 'socialGenderExperience',
        text: '在称谓、代词、性别分组或他人归类中，我常感到自己被错误理解。',
        purpose: '观察社会性别化带来的错位体验。这个维度受语言和社会环境影响很大。'
    },
    {
        id: 27,
        dimension: 'socialGenderExperience',
        text: '他人对我“应该怎样表现”的期待，让我感到性别方面受限。',
        purpose: '观察性别角色压力，不把对性别角色的反感直接等同于性别认同变化。'
    },
    {
        id: 28,
        dimension: 'socialGenderExperience',
        text: '我会因为性别认同或表达而担心被误解、嘲笑、排斥或区别对待。',
        purpose: '观察社会风险和预期压力。高分可能反映环境不安全，并不说明你的认同更强或更真实。'
    },
    {
        id: 29,
        dimension: 'socialGenderExperience',
        text: '在安全环境中被以我希望的方式对待，会明显改善我的舒适度。',
        purpose: '观察社会确认对生活体验的影响。没有安全环境时，不要把缺少机会当成没有需求。'
    },
    {
        id: 30,
        dimension: 'socialGenderExperience',
        text: '我需要隐藏或调整性别相关的表达，以维持居住、人际、学习、工作或人身安全。',
        purpose: '观察少数压力和现实约束。这个分数更多描述环境与策略，不是身份分类指标。'
    },
    {
        id: 31,
        dimension: 'bodyRelation',
        text: '我希望身体的某些性征更接近符合自己性别感受的状态。',
        purpose: '观察身体改变的方向性需要，不要求对整个身体都感到不适。'
    },
    {
        id: 32,
        dimension: 'bodyRelation',
        text: '我会通过衣物、发型、轮廓、体毛处理或其他方式，减轻身体或性别相关的不适。',
        purpose: '观察已经采用的应对方式。采用这些方式可能出于表达、舒适或安全等不同原因。'
    },
    {
        id: 33,
        dimension: 'bodyRelation',
        text: '我对激素、手术或其他身体改变的兴趣，主要与自己的身体和性别体验有关。',
        purpose: '观察医疗或身体改变意向的主观关联。兴趣、好奇、愿望和具体计划是不同程度，不能混为一谈。'
    },
    {
        id: 34,
        dimension: 'bodyRelation',
        text: '我希望身体减少被他人快速归类为男性或女性的线索，或更接近中性状态。',
        purpose: '观察中性化需求。没有中性化愿望并不否定非二元认同，二元跨性别者也可能只希望部分改变。'
    },
    {
        id: 35,
        dimension: 'bodyRelation',
        text: '我会因为性别相关的身体特征产生不同于一般外貌不满意的持续不适。',
        purpose: '帮助区分一般外貌焦虑与性别相关身体不一致。两者也可能同时存在，不能通过本题自行诊断。'
    },
    {
        id: 36,
        dimension: 'expressionRolePressure',
        text: '我的服装、发型、声音、行为或兴趣有时不符合出生时被指派性别的常见规范。',
        purpose: '观察性别表达的多样性。性别不符合规范本身不是性别认同，也不是心理问题。'
    },
    {
        id: 37,
        dimension: 'expressionRolePressure',
        text: '我会因为不符合性别规范而感到受限、被评价或需要自我审查。',
        purpose: '观察性别规范带来的压力，而不是评价你的表达是否“正确”。'
    },
    {
        id: 38,
        dimension: 'expressionRolePressure',
        text: '他人会把我的服装、发型、气质或兴趣误当成我性别认同的证据。',
        purpose: '观察表达与认同被混淆的经历。表达可以与认同一致，也可以不一致。'
    },
    {
        id: 39,
        dimension: 'expressionRolePressure',
        text: '我希望不必通过服装、行为或外貌来证明或否定自己的性别。',
        purpose: '观察对表达自主权的需要。任何性别认同都可以有多种表达方式。'
    },
    {
        id: 40,
        dimension: 'expressionRolePressure',
        text: '我会因为性别角色要求而压抑自己的真实偏好或生活方式。',
        purpose: '观察角色规范造成的限制。高分说明需要更多表达空间，不直接指向某个身份标签。'
    },
    {
        id: 41,
        dimension: 'explorationAgency',
        text: '我难以找到足够可靠、适合自己处境的性别认同相关资料。',
        purpose: '观察信息资源是否可及。高分表示资料获取存在困难，不代表对性别缺乏兴趣或认同较低。'
    },
    {
        id: 42,
        dimension: 'explorationAgency',
        text: '我因为现实安全、家庭、经济、工作、学习或法律条件，难以尝试想要的性别表达或生活方式。',
        purpose: '观察现实约束对探索和表达的限制。高分描述的是环境障碍，不代表认同较弱或不够确定。'
    },
    {
        id: 43,
        dimension: 'explorationAgency',
        text: '我缺少可以尊重地讨论性别问题的人、社群或专业支持渠道。',
        purpose: '观察支持资源不足这一现实条件；高分表示可用支持较少，而不是身份认同或探索意愿较低。没有寻找支持的需要时，可以选择“不适用 / 难以判断”。'
    },
    {
        id: 44,
        dimension: 'explorationAgency',
        text: '我因为时间、金钱、医疗可及性或其他现实条件，难以进一步了解或实践自己想要的性别方向。',
        purpose: '观察现实条件对探索和实践的限制。高分描述的是资源或机会障碍，不代表认同较弱或不够确定。'
    },
    {
        id: 45,
        dimension: 'explorationAgency',
        text: '我担心公开或探索性别会带来失去关系、居住、学习、工作或经济支持等后果。',
        purpose: '观察现实风险和支持损失的担忧。高分描述的是环境压力，不代表认同较弱或不够确定。'
    }
];

const dimensions = [
    {
        id: 'identityClarity',
        title: '核心认同的清晰度',
        shortTitle: '认同清晰度',
        items: [1, 2, 3, 4, 5],
        direction: '分数越高，表示越能描述和区分自己的性别体验；不是认同“强度”或身份真实性。'
    },
    {
        id: 'nonbinaryExperience',
        title: '超出单一二元的体验',
        shortTitle: '非二元体验',
        items: [6, 7, 8, 9, 10],
        direction: '分数越高，表示男/女单一框架对自我描述的充分性较低。'
    },
    {
        id: 'genderFluidity',
        title: '性别认同的变化',
        shortTitle: '认同变化',
        items: [11, 12, 13, 14, 15],
        direction: '分数越高，表示更常觉察到性别认同随时间或情境变化。'
    },
    {
        id: 'genderAffirmation',
        title: '性别确认与愉悦',
        shortTitle: '确认与愉悦',
        items: [16, 17, 18, 19, 20],
        direction: '分数越高，表示更常在符合内在感受的称呼、表达或生活想象中体验舒适和确认。'
    },
    {
        id: 'genderIncongruence',
        title: '性别相关不一致与不适',
        shortTitle: '不一致与不适',
        items: [21, 22, 23, 24, 25],
        direction: '分数越高，表示与出生指派性别相关的不一致或不适更明显；不适不是认同的必要条件。'
    },
    {
        id: 'socialGenderExperience',
        title: '社会性别化体验与压力',
        shortTitle: '社会体验',
        items: [26, 27, 28, 29, 30],
        direction: '分数越高，表示社会归类、规范或安全条件对性别体验的影响更明显。'
    },
    {
        id: 'bodyRelation',
        title: '身体关系与改变偏好',
        shortTitle: '身体关系',
        items: [31, 32, 33, 34, 35],
        direction: '分数越高，表示身体性征与性别体验之间的关联、改变愿望或相关不适更明显。'
    },
    {
        id: 'expressionRolePressure',
        title: '表达自主与性别角色压力',
        shortTitle: '表达与角色',
        items: [36, 37, 38, 39, 40],
        direction: '分数越高，表示表达与传统性别规范之间的张力或自主表达需要更明显；不用于判断身份。'
    },
    {
        id: 'explorationAgency',
        title: '探索条件与现实约束',
        shortTitle: '探索条件',
        items: [41, 42, 43, 44, 45],
        direction: '分数越高，表示获得可靠信息、支持或安全实践机会的障碍更明显；这是情境信息，不代表认同较弱或能动性较低。'
    }
];

const itemById = new Map(scaleItems.map(item => [item.id, item]));
const responseOptions = [
    ['', '请选择……'],
    ['0', '0 - 完全不符合'],
    ['1', '1 - 大多不符合'],
    ['2', '2 - 比较不符合'],
    ['3', '3 - 比较符合'],
    ['4', '4 - 大多符合'],
    ['5', '5 - 完全符合'],
    ['na', '不适用 / 难以判断 / 没有相关经历']
];

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[character]));
}

function buildQuestionMarkup() {
    return dimensions.map((dimension, dimensionIndex) => {
        const questions = dimension.items.map(id => {
            const item = itemById.get(id);
            const selectId = `gender-q${item.id}`;
            return `
        <div class="question" data-question="${item.id}">
          <div class="question-title" role="button" tabindex="0" aria-expanded="false" aria-controls="explanation-${item.id}">
            <span class="q-number">${item.id}.</span>${escapeHtml(item.text)}
          </div>
          <label class="sr-only" for="${selectId}">第 ${item.id} 题回答</label>
          <select id="${selectId}" name="q${item.id}">
            ${responseOptions.map(([value, label], index) => `<option value="${value}"${index === 0 ? ' disabled selected' : ''}>${label}</option>`).join('')}
          </select>
          <div class="explanation" id="explanation-${item.id}" hidden>
            <p><strong>本题用意：</strong>${escapeHtml(item.purpose)}</p>
            <p><strong>回答边界：</strong>请按题干所描述的体验作答。分数只描述这一题相关体验的频率或符合程度，不能单独推出身份；没有相关经历时请选择“不适用 / 难以判断”。</p>
          </div>
        </div>`;
        }).join('');
        return `
      <section class="section" data-dimension="${dimension.id}">
        <h2>第 ${dimensionIndex + 1} 部分：${escapeHtml(dimension.title)}</h2>
        <p class="section-description">${escapeHtml(dimension.direction)}</p>
        ${questions}
      </section>`;
    }).join('');
}

const scaleQuestionsContainer = document.getElementById('questionsContainer');
if (!scaleQuestionsContainer) throw new Error('量表题目容器不存在');
scaleQuestionsContainer.innerHTML = buildQuestionMarkup();

function toggleExplanation(titleElement) {
    const explanation = titleElement.parentElement.querySelector('.explanation');
    if (!explanation) return;
    const isHidden = explanation.hidden;
    document.querySelectorAll('.question .explanation').forEach(item => {
        item.hidden = true;
        item.parentElement.querySelector('.question-title')?.setAttribute('aria-expanded', 'false');
    });
    if (isHidden) {
        explanation.hidden = false;
        titleElement.setAttribute('aria-expanded', 'true');
    }
}

scaleQuestionsContainer.addEventListener('click', event => {
    const title = event.target.closest('.question-title');
    if (title) toggleExplanation(title);
});
scaleQuestionsContainer.addEventListener('keydown', event => {
    const title = event.target.closest('.question-title');
    if (title && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        toggleExplanation(title);
    }
});

document.addEventListener('click', event => {
    if (!event.target.closest('.question')) {
        document.querySelectorAll('.question .explanation').forEach(item => {
            item.hidden = true;
            item.parentElement.querySelector('.question-title')?.setAttribute('aria-expanded', 'false');
        });
    }
});

const form = document.getElementById('genderQuiz');
const totalQuestions = scaleItems.length;

function updateProgress() {
    const answered = scaleItems.reduce((count, item) => {
        const select = form?.querySelector(`[name="q${item.id}"]`);
        return count + (select && select.value !== '' ? 1 : 0);
    }, 0);
    const percentage = totalQuestions ? (answered / totalQuestions) * 100 : 0;
    const text = document.getElementById('globalProgressText');
    const bar = document.getElementById('globalProgressBar');
    if (text) text.textContent = `进度：${answered}/${totalQuestions}`;
    if (bar) bar.style.width = `${percentage}%`;
}

const STORAGE_KEY = 'genderQuizAnswersV2';

function saveFormData() {
    const answers = {};
    scaleItems.forEach(item => {
        const select = form?.querySelector(`[name="q${item.id}"]`);
        if (select) answers[`q${item.id}`] = select.value;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    updateProgress();
}

function loadFormData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
        updateProgress();
        return false;
    }
    try {
        const answers = JSON.parse(saved);
        let restored = false;
        scaleItems.forEach(item => {
            const select = form?.querySelector(`[name="q${item.id}"]`);
            const value = answers?.[`q${item.id}`];
            if (select && ['0', '1', '2', '3', '4', '5', 'na'].includes(String(value))) {
                select.value = String(value);
                restored = true;
            }
        });
        updateProgress();
        return restored;
    } catch (error) {
        console.error('恢复表单数据失败:', error);
        updateProgress();
        return false;
    }
}

function clearSavedFormData() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('genderQuizAnswers');
}

form?.addEventListener('change', saveFormData);
updateProgress();

function getLevel(score) {
    return score === null ? '回答不足' : '描述性均值';
}

function calculateDimensionScore(dimension, scores) {
    const values = dimension.items
        .map(id => scores[`q${id}`])
        .filter(value => Number.isFinite(value));
    if (!values.length) return { score: null, answered: 0, total: dimension.items.length };
    const score = Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1));
    return { score, answered: values.length, total: dimension.items.length };
}

function scoreText(result) {
    return result.score === null ? '—' : `${result.score.toFixed(1)} / 5.0`;
}

function dimensionInterpretation(dimension, result) {
    if (result.score === null) return '本维度没有可用于计算的回答。没有相关经历时选择“不适用”是合理的。';
    const level = getLevel(result.score);
    const coverage = `有效回答 ${result.answered}/${result.total} 题，平均分处于${level}区间。`;
    switch (dimension.id) {
        case 'identityClarity':
            return `${coverage}这表示你目前对自己的性别体验、语言和概念边界的描述程度，不等于任何身份的确定程度。`;
        case 'nonbinaryExperience':
            return `${coverage}这表示单一男女性别框架对你的描述是否充分，不等于必须使用非二元或其他标签。`;
        case 'genderFluidity':
            return `${coverage}这表示你觉察到性别认同随时间或情境变化的程度。低分不代表更真实，高分也不代表不稳定。`;
        case 'genderAffirmation':
            return `${coverage}这表示符合内在感受的称呼、表达或生活想象带来的舒适和确认，不需要以不适或痛苦作为补充证明。`;
        case 'genderIncongruence':
            return `${coverage}这表示与出生指派性别相关的不一致或不适，不是性别认同的必要条件，也不能单独用于诊断性别不安。`;
        case 'socialGenderExperience':
            return `${coverage}这表示社会归类、性别规范和安全条件对你的影响；高分也可能主要反映外部环境压力。`;
        case 'bodyRelation':
            return `${coverage}这表示身体性征与你的性别体验之间的关联、改变偏好或相关不适。没有身体改变愿望不否定任何身份。`;
        case 'expressionRolePressure':
            return `${coverage}这表示表达自主需要或传统性别规范带来的张力。性别表达和性别角色不决定性别认同。`;
        case 'explorationAgency':
            return `${coverage}这表示你在获取资料、支持和安全实践机会方面遇到的现实条件；高分不表示认同较弱，也不表示你缺乏能动性。`;
        default:
            return coverage;
    }
}

function buildDimensionTable(results) {
    return `<div class="result-table-shell"><table class="result-score-table"><thead><tr><th>维度</th><th>平均分</th><th>回答情况</th><th>如何理解</th></tr></thead><tbody>${results.map(({ dimension, result }) => `<tr><td><strong>${escapeHtml(dimension.title)}</strong></td><td>${scoreText(result)}</td><td>${result.answered}/${result.total}</td><td>${escapeHtml(dimensionInterpretation(dimension, result))}</td></tr>`).join('')}</tbody></table></div>`;
}

function buildDimensionCards(results) {
    return results.map(({ dimension, result }, index) => `
      <div class="insight-card result-dimension-card">
        ${window.PrismScale.createResultDimensionHeader({ index: index + 1, title: dimension.title, score: result.score, max: 5, level: getLevel(result.score) })}
        <p><strong>这个维度衡量什么？</strong><br>${escapeHtml(dimension.direction)}</p>
        <p><strong>本次回答：</strong><br>${escapeHtml(dimensionInterpretation(dimension, result))}</p>
      </div>`).join('');
}

function buildSuggestions(results) {
    const distress = results.find(item => item.dimension.id === 'genderIncongruence');
    const social = results.find(item => item.dimension.id === 'socialGenderExperience');
    const body = results.find(item => item.dimension.id === 'bodyRelation');
    const suggestions = [
        {
            title: '记录具体情境，而不是追逐总分',
            text: '分别记录一次让你更自在、一次让你不适的经历，写下当时的称呼、身体感受、表达方式、在场的人和安全程度。情境记录比单次类型结论更有帮助。'
        },
        {
            title: '把四件事分开观察',
            text: '分别观察性别认同、性别表达、性别角色压力和性别相关不适。喜欢某种服装或反感性别规范，都不能单独推出性别认同。'
        },
        {
            title: '只做安全、可逆的探索',
            text: '如果现实条件允许，可以在私密或可信任的环境中尝试不同称呼、名字、表达或记录方式；任何尝试都可以暂停、调整或不继续。'
        },
        {
            title: '优先评估现实安全与支持',
            text: `本次社会相关维度的回答${social?.result.score !== null ? `为 ${social.result.score.toFixed(1)} / 5.0，具体含义请结合题目和有效回答数量阅读` : '没有形成有效均值'}。无论分数如何，公开表达前请考虑居住、经济、人际、学习、工作和人身安全，并选择适合自己的支持方式。`
        },
        {
            title: '在持续影响生活时寻求支持',
            text: `如果性别相关的不适${distress?.result.score !== null ? `（本次不一致与不适维度平均分 ${distress.result.score.toFixed(1)} / 5.0）` : ''}持续影响睡眠、情绪、社交或日常功能，可以寻找尊重性别多样性的心理或医疗专业人员讨论支持选项。${body?.result.score !== null ? '身体相关决定应基于充分信息、专业沟通和知情同意。' : ''}`
        }
    ];
    return suggestions;
}

function calculateResult() {
    const missing = scaleItems.filter(item => {
        const select = form?.querySelector(`[name="q${item.id}"]`);
        return !select || select.value === '';
    }).map(item => item.id);
    if (missing.length) {
        alert(`请先完成以下题目（可以选择“不适用 / 难以判断”）：\n第 ${missing.join('、')} 题`);
        const first = form?.querySelector(`[name="q${missing[0]}"]`);
        first?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        first?.focus();
        return;
    }

    const scores = {};
    scaleItems.forEach(item => {
        const value = form.querySelector(`[name="q${item.id}"]`).value;
        scores[`q${item.id}`] = value === 'na' ? null : Number(value);
    });
    const results = dimensions.map(dimension => ({ dimension, result: calculateDimensionScore(dimension, scores) }));
    const numericResults = results.filter(item => item.result.score !== null);
    const answeredCount = scaleItems.filter(item => scores[`q${item.id}`] !== null).length;
    const notApplicableCount = totalQuestions - answeredCount;
    const highest = numericResults.reduce((current, item) => !current || item.result.score > current.result.score ? item : current, null);
    const resultDiv = document.getElementById('result');
    const generalTip = `<div class="insight-card"><h3>如何阅读这份结果</h3><p>这是一份<strong>非标准化、非诊断性的描述性自评</strong>。它呈现不同体验维度的回答模式，不输出“顺性别、跨性别、非二元”等身份判定，也不能证明或否定任何身份。</p><ul><li>分数是各维度题目的平均值，题目之间可能相关，不能把九个维度相加成总分。</li><li>“不适用 / 难以判断”不会被当作 0 分；有效回答数量会显示在结果中。</li><li>高分只说明该维度描述的体验更常见或更符合，低分也不代表更健康、更真实或更确定。</li><li>身份标签、是否公开、是否改变表达或身体，都由你根据长期体验、现实条件和自主意愿决定。</li></ul></div>`;

    const summaryLead = highest
        ? `本次回答在“${highest.dimension.title}”维度的平均分相对较高，但这只是维度描述，不是类型结论。请同时查看每个维度的有效回答数量和具体解释。`
        : '目前没有足够的有效回答形成维度画像。';
    window.PrismScale.renderResultSummary({
        title: '描述性性别体验画像',
        metrics: [
            { label: '有效回答', value: `${answeredCount} / ${totalQuestions}` },
            { label: '不适用 / 难判断', value: `${notApplicableCount} 题` },
            { label: '结果性质', value: '维度描述' }
        ],
        lead: summaryLead
    });
    document.getElementById('mainInterpretation').innerHTML = generalTip;
    document.getElementById('detailedAnalysis').innerHTML = `<h3 class="result-section-heading">九个观察维度</h3>${buildDimensionCards(results)}`;
    document.getElementById('sectionScores').innerHTML = `<h3>维度得分详情</h3><p class="result-data-note">平均分范围为 0–5。表中的“回答情况”只统计 0–5 分回答，不适用/难以判断不会进入平均值。</p>${buildDimensionTable(results)}`;
    window.PrismScale.renderReflectionActions('personalizedSuggestions', buildSuggestions(results));
    const radarValues = results.map(item => item.result.score);
    const radarContainer = document.querySelector('.radar-container');
    if (radarContainer && !radarContainer.querySelector('#radarChart')) {
        radarContainer.innerHTML = '<div class="radar-wrapper"><canvas id="radarChart"></canvas></div>';
    }
    const radar = document.getElementById('radarChart');
    const activeRadarContainer = radar?.closest('.radar-container');
    if (numericResults.length >= 3) {
        if (activeRadarContainer) activeRadarContainer.hidden = false;
        window.PrismScale.renderResultRadar({
            canvasId: 'radarChart',
            labels: dimensions.map(dimension => dimension.shortTitle),
            values: radarValues.map(value => value ?? 0),
            max: 5,
            datasetLabel: '性别体验维度'
        });
    } else {
        window.PrismScale.destroyResultRadar('radarChart');
        if (radarContainer) {
            radarContainer.hidden = false;
            radarContainer.innerHTML = '<p class="radar-empty">有效维度不足，暂不绘制雷达图。请优先阅读各维度的有效回答数量。</p>';
        }
    }
    window.PrismScale.showResult(resultDiv);
}

function resetForm() {
    clearSavedFormData();
    form.reset();
    document.getElementById('result').style.display = 'none';
    if (window.PrismScale) window.PrismScale.destroyResultRadar('radarChart');
    updateProgress();
}

function saveResultText() {
    const resultDiv = document.getElementById('result');
    if (resultDiv.style.display !== 'block') {
        alert('请先计算结果！');
        return;
    }
    const parts = [
        '========== 性别认同与探索：描述性自评结果 ==========',
        document.getElementById('scoreSummary').innerText,
        document.getElementById('typeJudgment').innerText,
        document.getElementById('mainInterpretation').innerText,
        document.getElementById('detailedAnalysis').innerText,
        document.getElementById('sectionScores').innerText,
        document.getElementById('personalizedSuggestions').innerText,
        document.querySelector('.disclaimer').innerText,
        `生成时间：${new Date().toLocaleString()}`
    ];
    const blob = new Blob([parts.join('\n\n---\n\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = window.PrismScale.getExportFilename('txt');
    link.click();
    URL.revokeObjectURL(url);
}

async function saveResultImage() {
    const resultDiv = document.getElementById('result');
    if (resultDiv.style.display !== 'block') {
        alert('请先计算结果再保存！');
        return;
    }
    const canvas = await window.PrismScale.captureDesktopResult(resultDiv);
    const link = document.createElement('a');
    link.download = window.PrismScale.getExportFilename('png');
    link.href = canvas.toDataURL();
    link.click();
}

document.addEventListener('DOMContentLoaded', () => {
    loadFormData();
});
