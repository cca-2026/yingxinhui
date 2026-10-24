const personalityData = {
    "LCSPA": {
        title: "",
        imageSrc: "LCSPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你是团队的定海神针。低调且极度看重默契 (L, C)，喜欢用严密的逻辑排查潜在漏洞 (A)。在“华灯初遇”这类大型文化祭筹备中，你稳健务实 (S, P)，有你在细节就不会出错。"
    },
    "LCSPI": {
        title: "",
        imageSrc: "LCSPI.png",
        description: "你不张扬 (L) 却高度配合团队 (C)。凭借直觉感知团队氛围 (I)，用最实际的方法 (P) 稳步推进共同目标 (S)，是让人安心的活动执行者。"
    },
    "LCSVA": {
        title: "",
        imageSrc: "LCSVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你甘当绿叶但总能将创意与逻辑完美结合 (L, V, A)。善于倾听团队需求 (C)，稳定地输出具有前瞻性又切实可行的分析与建议 (S)。"
    },
    "LCSVI": {
        title: "",
        imageSrc: "LCSVI.png",
        description: "你温和地融入群体 (L, C)，用直觉感知大家的情绪 (I)。总能在团队卡壳时，稳稳地抛出一个极具创意的点子 (S, V)，让所有人眼前一亮。"
    },
    "LCTPA": {
        title: "",
        imageSrc: "LCTPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你冷静且充满韧性 (L, T)。擅长把团队面临的困难拆解成小步骤 (C, A)，默默用最实干的方法 (P) 带领大家一次次攻坚，是遇到技术难题时的最强辅助。"
    },
    "LCTPI": {
        title: "",
        imageSrc: "LCTPI.png",
        description: "你不爱出风头 (L)，但当团队遇到瓶颈时，总是那个默默坚持、不断尝试实际方法 (T, P) 并鼓励大家的人，靠直觉 (I) 带领团队 (C) 走出困境。"
    },
    "LCTVA": {
        title: "",
        imageSrc: "LCTVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你完美融合了团队精神、挑战欲、创新与逻辑 (C, T, V, A)。虽然不在聚光灯下 (L)，却是整个团队遇到巨大挑战时，冷静分析局势并想出破局奇招的幕后大脑。"
    },
    "LCTVI": {
        title: "",
        imageSrc: "LCTVI.png",
        description: "你把能量藏在内心 (L)，用极强的抗挫折能力 (T) 和源源不断的创意直觉 (V, I) 推动团队前进 (C)。在节令鼓队遇到排练瓶颈时，总能找出突破常规的新鲜玩法。"
    },
    "LFSPA": {
        title: "",
        imageSrc: "LFSPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "偏好独自安静地处理实际问题 (L, F)。稳扎稳打 (S) 加上务实的态度 (P)，配合强大的逻辑拆解能力 (A)，让你在面对如整理物资或排班表等繁杂任务时总能条理清晰。"
    },
    "LFSPI": {
        title: "",
        imageSrc: "LFSPI.png",
        description: "你习惯在舒适圈外默默观察 (L)，按独立节奏行事 (F)。面对任务喜欢稳步推进 (S)，讲求实际操作 (P)，并高度依赖第一直觉做决定 (I)。你是团队中不随波逐流的安静力量。"
    },
    "LFSVA": {
        title: "",
        imageSrc: "LFSVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你习惯在幕后构思创意 (L, V)，并用严谨的逻辑将其拆解为可执行的步骤 (A)。你不爱抢风头，按自己的步调求稳 (F, S)，是打磨活动策划案细节的绝佳人选。"
    },
    "LFSVI": {
        title: "",
        imageSrc: "LFSVI.png",
        description: "你表面安静 (L)，内心却有丰富的想象力 (V)。你喜欢按自己的节奏 (F) 稳步实现新奇点子 (S)，凭借敏锐的直觉 (I)，常在角落里创造出令人惊艳的巧思。"
    },
    "LFTPA": {
        title: "",
        imageSrc: "LFTPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你面对难题不会大张旗鼓 (L)，而是默默分析所有可能性 (A)。凭着高度独立的节奏 (F) 与硬核的务实手段 (P)，你会充满耐心地一次次挑战极限 (T)。"
    },
    "LFTPI": {
        title: "",
        imageSrc: "LFTPI.png",
        description: "你低调且按自己节奏来 (L, F)，但面对挑战极具韧性与突破欲 (T)。你用直觉快速判断方向 (I)，并用最实干的方式不断试错 (P)，直到攻克难关。"
    },
    "LFTVA": {
        title: "",
        imageSrc: "LFTVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你喜欢独自面对困难 (L, F)，将天马行空的创意 (V) 与缜密的逻辑分析 (A) 结合。越是没人做过的复杂挑战 (T)，越能激起你默默攻坚的欲望。"
    },
    "LFTVI": {
        title: "",
        imageSrc: "LFTVI.png",
        description: "你享受孤独的探索 (L, F)，对新挑战和新创意充满渴望 (T, V)。你跟着感觉走 (I)，在不断失败与重来中，悄悄创造出打破常规的艺术或玩法。"
    },
    "RCSPA": {
        title: "",
        imageSrc: "RCSPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你既能带动气氛，又能完美配合团队 (R, C)。稳重、务实且逻辑清晰 (S, P, A)，是大型夜市活动现场最理想的总控，能有条不紊地调动所有人。"
    },
    "RCSPI": {
        title: "",
        imageSrc: "RCSPI.png",
        description: "你是团队里的开心果。享受和大家同步协作的感觉 (R, C)，做事脚踏实地 (P, S)，靠直觉快速感知团队情绪并带来欢笑 (I)，是绝佳的活动现场带动者。"
    },
    "RCSVA": {
        title: "",
        imageSrc: "RCSVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你懂得如何让团队在聚光灯下闪耀 (R, C)。有着惊人的创意 (V)，又能用逻辑将一切安排妥当 (A, S)。团队愿意听你的，因为你既热情又极其靠谱。！"
    },
    "RCSVI": {
        title: "",
        imageSrc: "RCSVI.png",
        description: "你享受在人群中激发灵感 (R, C)。喜欢和团队稳稳地一起玩转创意 (S, V)，凭借敏锐的直觉 (I)，总能在头脑风暴时带动所有人一起发散思维。"
    },
    "RCTPA": {
        title: "",
        imageSrc: "RCTPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你面对团队停滞不前时，总能站出来带动气氛 (R, C)，并通过理性分析 (A) 和务实的不断尝试 (T, P)，带领大家攻克难关，是兼具热血与理智的实干派。"
    },
    "RCTPI": {
        title: "",
        imageSrc: "RCTPI.png",
        description: "你带领团队冲锋陷阵的灵魂人物。面对难关，用极强的表现力和行动力鼓舞士气 (R, T, P)，凭直觉找到团队前进的方向 (I) 并高度配合队友 (C)。"
    },
    "RCTVA": {
        title: "",
        imageSrc: "RCTVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你是舞台上的全能王者。享受展现自我并能完美统御团队 (R, C)，面对逆境绝不低头 (T)，不仅能提出宏大的创意愿景 (V)，还能冷静分析局势 (A)，是天生的精神领袖。"
    },
    "RCTVI": {
        title: "",
        imageSrc: "RCTVI.png",
        description: "有你在的地方就不会冷场 (R)。面对困难，总能和团队 (C) 一起爆发出前所未有的创意和生命力 (T, V)，跟着直觉走 (I)，是大型表演中最具感染力的核心。"
    },
    "RFSPA": {
        title: "",
        imageSrc: "RFSPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你在台上能侃侃而谈带动气氛 (R)，台下却坚持自己的步调 (F)。享受表现自我，但在处理实际事务时极其稳重 (S)、务实 (P) 和讲究逻辑 (A)，反差感极强。"
    },
    "RFSPI": {
        title: "",
        imageSrc: "RFSPI.png",
        description: "你天生自带光芒 (R)，在人群中游刃有余，但做事时喜欢保留自己的空间 (F)。凭直觉活跃气氛 (I)，用稳妥务实的方法 (S, P) 解决眼前问题。"
    },
    "RFSVA": {
        title: "",
        imageSrc: "RFSVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你不仅有吸引人的气场 (R)，还能独立构思并逻辑清晰地实现创意 (F, V, A)。喜欢向大家展示经过稳健打磨 (S) 的新奇想法，既有条理又充满惊喜。"
    },
    "RFSVI": {
        title: "",
        imageSrc: "RFSVI.png",
        description: "你享受关注 (R)，充满天马行空的创意 (V)，跟着感觉走 (I)。喜欢按自己的节奏 (F) 稳步打造出惊艳众人的作品 (S)，是极具艺术气息的自由人。"
    },
    "RFTPA": {
        title: "",
        imageSrc: "RFTPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你敢于在众人面前迎接最难的挑战 (R, T)，并且能冷静拆解问题 (A)。即使失败也会理性分析原因继续干，是你行我素 (F) 但战斗力爆表的实干家 (P)。"
    },
    "RFTPI": {
        title: "",
        imageSrc: "RFTPI.png",
        description: "你充满能量，面对挑战无所畏惧 (R, T)。凭直觉快速行动 (I)，用最实际的手段不断试错 (P, F)。在招新或宣传时，是最敢冲、最能吸引眼球的先锋。"
    },
    "RFTVA": {
        title: "",
        imageSrc: "RFTVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你气场强大、充满创意，有着坚韧的突破精神和缜密的逻辑 (R, V, T, A)。习惯按照自己的节奏打破陈规 (F)，并用严谨的分析让所有人信服你的疯狂计划。"
    },
    "RFTVI": {
        title: "",
        imageSrc: "RFTVI.png",
        description: "你不知疲倦的创意火花。在舞台上闪耀 (R)，面对挑战越挫越勇 (T)，独立凭借极强的直觉和新颖的点子 (F, I, V) 不断打破常规，是天生的潮流引领者。"
    }
};

// 获取页面中的元素
const inputs = document.querySelectorAll('.letter-box');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const inputView = document.getElementById('input-view');
const resultView = document.getElementById('result-view');

// 1. 输入框自动跳转逻辑
inputs.forEach((input, index) => {
    // 监听输入框点击，自动将按钮滚动到画面中
    input.addEventListener('focus', () => {
        setTimeout(() => {
            submitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
    input.addEventListener('input', (e) => {
        // 如果当前框有输入内容，且不是最后一个框，则焦点自动跳到下一个框
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // 优化体验：如果按退格键(Backspace)且当前框为空，则跳回上一个框
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// 2. 点击“揭晓结果”按钮的逻辑
submitBtn.addEventListener('click', () => {
    let userCode = '';
    inputs.forEach(input => {
        userCode += input.value.toUpperCase();
    });

    if (userCode.length === 5) {
        // 在数据字典中查找用户输入的密码
        const result = personalityData[userCode];

        if (result) {
            // 如果密码正确，将对应的数据替换到界面的文字和图片中
            document.getElementById('result-img').src = result.imageSrc;
            document.getElementById('result-title').textContent = result.title;
            document.getElementById('result-desc').textContent = result.description;

            // 隐藏输入区，显示结果区
            inputView.classList.add('hidden');
            resultView.classList.remove('hidden');
        } else {
            // 如果输入的 5 个字母没有被设定在字典里
            alert("未知的灵魂密码，请检查后重新输入！");
        }
    } else {
        alert("请输入完整的 5 个专属字母！");
    }
});

// 3. 点击“重新测算”按钮的逻辑
resetBtn.addEventListener('click', () => {
    // 清空输入框内容
    inputs.forEach(input => input.value = '');
    // 隐藏结果区，显示输入区
    resultView.classList.add('hidden');
    inputView.classList.remove('hidden');
    // 焦点重新回到第一个输入框
    inputs[0].focus();
});