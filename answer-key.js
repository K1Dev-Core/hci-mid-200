// Parse questions from txt.txt format
function parseQuestions(text) {
    const lines = text.split('\n');
    const questions = [];

    for (let line of lines) {
        line = line.trim();
        if (!line || line.startsWith('---') || line.startsWith('บทที่') || line.startsWith('ชุดข้อสอบ')) {
            continue;
        }

        // Parse format: "number. question ก. option1 ข. option2 ค. option3 ง. option4 เฉลย: answer"
        const match = line.match(/^(\d+)\.\s*(.+?)\s+ก\.\s*(.+?)\s+ข\.\s*(.+?)\s+ค\.\s*(.+?)\s+ง\.\s*(.+?)\s+เฉลย:\s*(.+)$/);

        if (match) {
            const [, number, question, opt1, opt2, opt3, opt4, answer] = match;
            questions.push({
                number: parseInt(number),
                question: question.trim(),
                options: [opt1.trim(), opt2.trim(), opt3.trim(), opt4.trim()],
                answer: answer.trim()
            });
        }
    }

    return questions;
}

// Load and display questions
async function loadQuestions() {
    try {
        const response = await fetch('txt.txt');
        const text = await response.text();
        const questions = parseQuestions(text);

        const container = document.getElementById('questionsContainer');
        container.innerHTML = '';

        let currentSection = '';

        questions.forEach((q, index) => {
            // Detect section changes based on question number
            let section = '';
            if (q.number <= 20) section = 'บทที่ 1: ประวัติศาสตร์และการนิยาม (บทที่ 1)';
            else if (q.number <= 40) section = 'บทที่ 2: คุณสมบัติและปัญหาของ HCI (บทที่ 2)';
            else if (q.number <= 60) section = 'บทที่ 3: พฤติกรรมและความสามารถในการโต้ตอบ (บทที่ 3)';
            else if (q.number <= 80) section = 'บทที่ 4: เทคนิคและทฤษฎีปัจจัยมนุษย์ (บทที่ 4)';
            else if (q.number <= 100) section = 'บทที่ 5: แบบจำลองและทฤษฎีการใช้งาน (บทที่ 5)';
            else if (q.number <= 120) section = 'บทที่ 1: ประวัติศาสตร์และการนิยาม (บทที่ 1) - ชุดที่ 2';
            else if (q.number <= 140) section = 'บทที่ 2: คุณสมบัติและปัญหาของ HCI (บทที่ 2) - ชุดที่ 2';
            else if (q.number <= 160) section = 'บทที่ 3: พฤติกรรมและความสามารถในการโต้ตอบ (บทที่ 3) - ชุดที่ 2';
            else if (q.number <= 180) section = 'บทที่ 4: เทคนิคและทฤษฎีปัจจัยมนุษย์ (บทที่ 4) - ชุดที่ 2';
            else section = 'บทที่ 5: แบบจำลองและทฤษฎีการใช้งาน (บทที่ 5) - ชุดที่ 2';

            // Add section divider if section changed
            if (section !== currentSection) {
                currentSection = section;
                const sectionId = `section${Math.ceil(q.number / 20)}`;
                container.innerHTML += `
                    <div class="section-divider section-marker" id="${sectionId}">
                        <h3 class="h5 mb-0">${section}</h3>
                    </div>
                `;
            }

            // Create question HTML
            const questionHTML = `
                <div class="question-item">
                    <div class="question-number">ข้อที่ ${q.number}</div>
                    <div class="question-text">${q.question}</div>
                    <div class="options-list">
                        <div class="option-item">ก. ${q.options[0]}</div>
                        <div class="option-item">ข. ${q.options[1]}</div>
                        <div class="option-item">ค. ${q.options[2]}</div>
                        <div class="option-item">ง. ${q.options[3]}</div>
                    </div>
                    <div class="correct-answer">
                        <span class="correct-answer-label">เฉลย:</span> ${q.answer}
                    </div>
                </div>
            `;

            container.innerHTML += questionHTML;
        });

        // Update total count
        document.getElementById('totalQuestions').textContent = questions.length;

    } catch (error) {
        console.error('Error loading questions:', error);
        document.getElementById('questionsContainer').innerHTML = `
            <div class="alert alert-danger">
                เกิดข้อผิดพลาดในการโหลดข้อสอบ: ${error.message}
            </div>
        `;
    }
}

// Load questions when page is ready
document.addEventListener('DOMContentLoaded', loadQuestions);
