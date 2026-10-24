const personalityData = {
    "LCSPA": {
        title: "",
        imageSrc: "LCSPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你是团队的定海神针。低调且极度看重默契 (Low-key, Coordinated)，喜欢用严密的逻辑排查潜在漏洞 (Analytical)。在迎新会里，你稳健务实 (Steady, Practical)，有你在就不会出错。"
    },
    "LCSPI": {
        title: "",
        imageSrc: "LCSPI.png",
        description: "你不张扬 (Low-key) 却高度配合团队 (Coordinated)。凭借直觉感知团队氛围 (Intuitive)，用最实际的方法 (Practical) 稳步推进共同目标 (Steady)，是让人安心的活动执行者。"
    },
    "LCSVA": {
        title: "",
        imageSrc: "LCSVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你甘当绿叶但总能将创意与逻辑完美结合 (Low-key, Visionary, Analytical)。善于倾听团队需求 (Coordinated)，稳定地输出具有前瞻性又切实可行的分析与建议 (Steady)。"
    },
    "LCSVI": {
        title: "",
        imageSrc: "LCSVI.png",
        description: "你温和地融入群体 (Low-key, Coordinated)，用直觉感知大家的情绪 (Intuitive)。总能在团队卡壳时，稳稳地抛出一个极具创意的点子 (Steady, Visionary)，让所有人眼前一亮。"
    },
    "LCTPA": {
        title: "",
        imageSrc: "LCTPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你冷静且充满韧性 (Low-key, Thriving)。擅长把团队面临的困难拆解成小步骤 (Coordinated, Analytical)，默默用最实干的方法 (Practical) 带领大家一次次攻坚，是遇到技术难题时的最强辅助。"
    },
    "LCTPI": {
        title: "",
        imageSrc: "LCTPI.png",
        description: "你不爱出风头 (Low-key)，但当团队遇到瓶颈时，总是那个默默坚持、不断尝试实际方法 (Thriving, Practical) 并鼓励大家的人，靠直觉 (Intuitive) 带领团队 (Coordinated) 走出困境。"
    },
    "LCTVA": {
        title: "",
        imageSrc: "LCTVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你完美融合了团队精神、挑战欲、创新与逻辑 (Coordinated, Thriving, Visionary, Analytical)。虽然不在聚光灯下 (Low-key)，却是整个队伍遇到巨大挑战时，冷静分析局势并想出破局奇招的幕后大脑。"
    },
    "LCTVI": {
        title: "",
        imageSrc: "LCTVI.png",
        description: "你把能量藏在内心 (Low-key)，用极强的抗挫折能力 (Thriving) 和源源不断的创意直觉 (Visionary, Intuitive) 推动团队前进 (Coordinated)。在遇到瓶颈时，总能找出突破常规的新鲜玩法。"
    },
    "LFSPA": {
        title: "",
        imageSrc: "LFSPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "偏好独自安静地处理实际问题 (Low-key, Free)。稳扎稳打 (Steady) 加上务实的态度 (Practical)，配合强大的逻辑拆解能力 (Analytical)，让你在面对繁杂任务时总能条理清晰。"
    },
    "LFSPI": {
        title: "",
        imageSrc: "LFSPI.png",
        description: "你习惯在舒适圈外默默观察 (Low-key)，按独立节奏行事 (Free)。面对任务喜欢稳步推进 (Steady)，讲求实际操作 (Practical)，并高度依赖第一直觉做决定 (Intuitive)。你是团队中不随波逐流的安静力量。"
    },
    "LFSVA": {
        title: "",
        imageSrc: "LFSVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你习惯在幕后构思创意 (Low-key, Visionary)，并用严谨的逻辑将其拆解为可执行的步骤 (Analytical)。你不爱抢风头，按自己的步调求稳 (Free, Steady)，是打磨活动策划案细节的绝佳人选。"
    },
    "LFSVI": {
        title: "",
        imageSrc: "LFSVI.png",
        description: "你表面安静 (Low-key)，内心却有丰富的想象力 (Visionary)。你喜欢按自己的节奏 (Free) 稳步实现新奇点子 (Steady)，凭借敏锐的直觉 (Intuitive)，常在角落里创造出令人惊艳的巧思。"
    },
    "LFTPA": {
        title: "",
        imageSrc: "LFTPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你面对难题不会大张旗鼓 (Low-key)，而是默默分析所有可能性 (Analytical)。凭着高度独立的节奏 (Free) 与硬核的务实手段 (Practical)，你会充满耐心地一次次挑战极限 (Thriving)。"
    },
    "LFTPI": {
        title: "",
        imageSrc: "LFTPI.png",
        description: "你低调且按自己节奏来 (Low-key, Free)，但面对挑战极具韧性与突破欲 (Thriving)。你用直觉快速判断方向 (Intuitive)，并用最实干的方式不断试错 (Practical)，直到攻克难关。"
    },
    "LFTVA": {
        title: "",
        imageSrc: "LFTVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你喜欢独自面对困难 (Low-key, Free)，将天马行空的创意 (Visionary) 与缜密的逻辑分析 (Analytical) 结合。越是没人做过的复杂挑战 (Thriving)，越能激起你默默攻坚的欲望。"
    },
    "LFTVI": {
        title: "",
        imageSrc: "LFTVI.png",
        description: "你享受孤独的探索 (Low-key, Free)，对新挑战和新创意充满渴望 (Thriving, Visionary)。你跟着感觉走 (Intuitive)，在不断失败与重来中，悄悄创造出打破常规的艺术或玩法。"
    },
    "RCSPA": {
        title: "",
        imageSrc: "RCSPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你既能带动气氛，又能完美配合团队 (Radiant, Coordinated)。稳重、务实且逻辑清晰 (Steady, Practical, Analytical)，是出色的领导者，能有条不紊地调动所有人。"
    },
    "RCSPI": {
        title: "",
        imageSrc: "RCSPI.png",
        description: "你是团队里的开心果。享受和大家同步协作的感觉 (Radiant, Coordinated)，做事脚踏实地 (Practical, Steady)，靠直觉快速感知团队情绪并带来欢笑 (Intuitive)，是绝佳的气氛带动者。"
    },
    "RCSVA": {
        title: "",
        imageSrc: "RCSVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你懂得如何让团队在聚光灯下闪耀 (Radiant, Coordinated)。有着惊人的创意 (Visionary)，又能用逻辑将一切安排妥当 (Analytical, Steady)。团队愿意听你的，因为你既热情又极其靠谱。！"
    },
    "RCSVI": {
        title: "",
        imageSrc: "RCSVI.png",
        description: "你享受在人群中激发灵感 (Radiant, Coordinated)。喜欢和团队稳稳地一起玩转创意 (Steady, Visionary)，凭借敏锐的直觉 (Intuitive)，总能在头脑风暴时带动所有人一起发散思维。"
    },
    "RCTPA": {
        title: "",
        imageSrc: "RCTPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你面对团队停滞不前时，总能站出来带动气氛 (Radiant, Coordinated)，并通过理性分析 (Analytical) 和务实的不断尝试 (Thriving, Practical)，带领大家攻克难关，是兼具热血与理智的实干派。"
    },
    "RCTPI": {
        title: "",
        imageSrc: "RCTPI.png",
        description: "你带领团队冲锋陷阵的灵魂人物。面对难关，用极强的表现力和行动力鼓舞士气 (Radiant, Thriving, Practical)，凭直觉找到团队前进的方向 (Intuitive) 并高度配合队友 (Coordinated)。"
    },
    "RCTVA": {
        title: "",
        imageSrc: "RCTVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你是舞台上的全能王者。享受展现自我并能完美统御团队 (Radiant, Coordinated)，面对逆境绝不低头 (Thriving)，不仅能提出宏大的创意愿景 (Visionary)，还能冷静分析局势 (Analytical)，是天生的精神领袖。"
    },
    "RCTVI": {
        title: "",
        imageSrc: "RCTVI.png",
        description: "有你在的地方就不会冷场 (Radiant)。面对困难，总能和团队 (Coordinated) 一起爆发出前所未有的创意和生命力 (Thriving, Visionary)，跟着直觉走 (Intuitive)，是大型表演中最具感染力的核心。"
    },
    "RFSPA": {
        title: "",
        imageSrc: "RFSPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你在台上能侃侃而谈带动气氛 (Radiant)，台下却坚持自己的步调 (Free)。享受表现自我，但在处理实际事务时极其稳重 (Steady)、务实 (Practical) 和讲究逻辑 (Analytical)，反差感极强。"
    },
    "RFSPI": {
        title: "",
        imageSrc: "RFSPI.png",
        description: "你天生自带光芒 (Radiant)，在人群中游刃有余，但做事时喜欢保留自己的空间 (Free)。凭直觉活跃气氛 (Intuitive)，用稳妥务实的方法 (Steady, Practical) 解决眼前问题。"
    },
    "RFSVA": {
        title: "",
        imageSrc: "RFSVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你不仅有吸引人的气场 (Radiant)，还能独立构思并逻辑清晰地实现创意 (Free, Visionary, Analytical)。喜欢向大家展示经过稳健打磨 (Steady) 的新奇想法，既有条理又充满惊喜。"
    },
    "RFSVI": {
        title: "",
        imageSrc: "RFSVI.png",
        description: "你享受关注 (Radiant)，充满天马行空的创意 (Visionary)，跟着感觉走 (Intuitive)。喜欢按自己的节奏 (Free) 稳步打造出惊艳众人的作品 (Steady)，是极具艺术气息的自由人。"
    },
    "RFTPA": {
        title: "",
        imageSrc: "RFTPA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你敢于在众人面前迎接最难的挑战 (Radiant, Thriving)，并且能冷静拆解问题 (Analytical)。即使失败也会理性分析原因继续干，是你行我素 (Free) 但战斗力爆表的实干家 (Practical)。"
    },
    "RFTPI": {
        title: "",
        imageSrc: "RFTPI.png",
        description: "你充满能量，面对挑战无所畏惧 (Radiant, Thriving)。凭直觉快速行动 (Intuitive)，用最实际的手段不断试错 (Practical, Free)。在招新或宣传时，是最敢冲、最能吸引眼球的先锋。"
    },
    "RFTVA": {
        title: "",
        imageSrc: "RFTVA.png", /* 确保这张图片存在你的文件夹里 */
        description: "你气场强大、充满创意，有着坚韧的突破精神和缜密的逻辑 (Radiant, Visionary, Thriving, Analytical)。习惯按照自己的节奏打破陈规 (Free)，并用严谨的分析让所有人信服你的疯狂计划。"
    },
    "RFTVI": {
        title: "",
        imageSrc: "RFTVI.png",
        description: "你不知疲倦的创意火花。在舞台上闪耀 (Radiant)，面对挑战越挫越勇 (Thriving)，独立凭借极强的直觉和新颖的点子 (Free, Intuitive, Visionary) 不断打破常规，是天生的潮流引领者。"
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
