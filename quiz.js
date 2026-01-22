// Quiz Data - ข้อสอบ HCI 200 ข้อ
const quizData = [
    {
        question: '"Calculating Clock" ของ Schickard ถูกสร้างขึ้นเพื่อจุดประสงค์ใดเป็นหลัก?',
        options: ['การหารและคูณ', 'การบวกและลบ', 'การถอดสแควรูท', 'การพิมพ์ดีด'],
        correct: 1,
        correctAnswer: 'การบวกและลบ'
    },
    {
        question: 'ใครคือผู้สร้างเครื่องคำนวณ "Pascaline"?',
        options: ['Wilhelm Schickard', 'Steve Jobs', 'Blaise Pascal', 'Donald Norman'],
        correct: 2,
        correctAnswer: 'Blaise Pascal'
    },
    {
        question: 'IBM 601 ที่เปิดตัวในปี 1930 มีความสามารถในการคูณได้กี่ครั้งต่อวินาที?',
        options: ['1 ครั้ง', '10 ครั้ง', '100 ครั้ง', '1,000 ครั้ง'],
        correct: 0,
        correctAnswer: '1 ครั้ง'
    },
    {
        question: 'เครื่องคอมพิวเตอร์ ENIAC ในปี 1945 ใช้เทคโนโลยีใดในการประมวลผล?',
        options: ['ทรานซิสเตอร์', 'ไมโครชิป', 'บัตรเจาะรู', 'หลอดสุญญากาศ'],
        correct: 3,
        correctAnswer: 'หลอดสุญญากาศ'
    },
    {
        question: 'ENIAC ถูกสร้างขึ้นเพื่อช่วยงานด้านใดโดยเฉพาะ?',
        options: ['การคำนวณวิถีกระสุน', 'การออกแบบกราฟิก', 'การเล่นเกม', 'การสื่อสารภายในองค์กร'],
        correct: 0,
        correctAnswer: 'การคำนวณวิถีกระสุน'
    },
    {
        question: 'ข้อใดคือข้อจำกัดสำคัญของ ENIAC?',
        options: ['ไม่มีหน่วยความจำ', 'ขาดการปฏิสัมพันธ์กับผู้ใช้ระหว่างประมวลผล', 'ขนาดเล็กเกินไป', 'ใช้ไฟฟ้าต่ำ'],
        correct: 1,
        correctAnswer: 'ขาดการปฏิสัมพันธ์กับผู้ใช้ระหว่างประมวลผล'
    },
    {
        question: 'XEROX ALTO (1973) มีความโดดเด่นในเรื่องใดมากที่สุด?',
        options: ['เป็นเครื่องแรกที่ใช้ GUI และเมาส์', 'มีราคาถูกที่สุด', 'ใช้หลอดสุญญากาศ', 'ออกแบบมาสำหรับผู้ใช้ตามบ้าน'],
        correct: 0,
        correctAnswer: 'เป็นเครื่องแรกที่ใช้ GUI และเมาส์'
    },
    {
        question: 'WIMP ในระบบ Xerox Star ย่อมาจากอะไร?',
        options: ['Web, Input, Map, Power', 'Windows, Icon, Menus, Pointers', 'Work, Icon, Master, Page', 'Windows, Internal, Menu, Print'],
        correct: 1,
        correctAnswer: 'Windows, Icon, Menus, Pointers'
    },
    {
        question: 'WYSIWYG มีความหมายตรงกับข้อใด?',
        options: ['สิ่งที่เห็นคือสิ่งที่จะได้รับ', 'ความเร็วสูงที่สุด', 'การเชื่อมต่อไร้สาย', 'การรักษาความปลอดภัยขั้นสูง'],
        correct: 0,
        correctAnswer: 'สิ่งที่เห็นคือสิ่งที่จะได้รับ'
    },
    {
        question: 'ใครคือผู้ริเริ่มนำ "Desktop metaphor" มาใช้อย่างแพร่หลายใน Macintosh?',
        options: ['ทีมพัฒนาจาก Xerox ที่ย้ายมา Apple', 'Bill Gates', 'Wilhelm Schickard', 'David Broadbent'],
        correct: 0,
        correctAnswer: 'ทีมพัฒนาจาก Xerox ที่ย้ายมา Apple'
    },
    {
        question: 'Windows 1.0 เปิดตัวในปีใด?',
        options: ['1973', '1981', '1985', '1995'],
        correct: 1,
        correctAnswer: '1981'
    },
    {
        question: 'จุดเด่นของ Windows 95 คืออะไร?',
        options: ['เป็นระบบ 16 bit', 'เน้น Multitasking และผู้ใช้ทั่วไป', 'ไม่มีระบบกราฟิก', 'ใช้หลอดสุญญากาศ'],
        correct: 1,
        correctAnswer: 'เน้น Multitasking และผู้ใช้ทั่วไป'
    },
    {
        question: 'องค์ประกอบสำคัญของ HCI คืออะไร?',
        options: ['จอภาพและคีย์บอร์ด', 'ผู้ใช้, UI, UX และเทคโนโลยี', 'ความเร็วและราคา', 'การตลาดและการขาย'],
        correct: 1,
        correctAnswer: 'ผู้ใช้, UI, UX และเทคโนโลยี'
    },
    {
        question: 'เป้าหมายหลักของ HCI คืออะไร?',
        options: ['เพื่อให้คอมพิวเตอร์ทำงานแทนมนุษย์', 'เพื่อสร้างระบบที่ใช้งานง่ายและมีประสิทธิภาพ', 'เพื่อลดขนาดฮาร์ดแวร์', 'เพื่อเพิ่มราคาซอฟต์แวร์'],
        correct: 1,
        correctAnswer: 'เพื่อสร้างระบบที่ใช้งานง่ายและมีประสิทธิภาพ'
    },
    {
        question: 'การออกแบบที่ยึดผู้ใช้เป็นศูนย์กลางเรียกว่าอะไร?',
        options: ['System-Centered', 'User-Centered Design (UCD)', 'Tech-Centered', 'Design-Driven'],
        correct: 1,
        correctAnswer: 'User-Centered Design (UCD)'
    },
    {
        question: 'เทคโนโลยีในปัจจุบันที่ HCI นำมาใช้เพิ่มประสิทธิภาพการโต้ตอบคือข้อใด?',
        options: ['หลอดสุญญากาศ', 'ปัญญาประดิษฐ์ (AI)', 'บัตรเจาะรู', 'ระบบ Batch Processing'],
        correct: 1,
        correctAnswer: 'ปัญญาประดิษฐ์ (AI)'
    },
    {
        question: 'ข้อใดเรียงลำดับเหตุการณ์ประวัติศาสตร์ HCI ได้ถูกต้อง?',
        options: [
            'Schickard -> ENIAC -> Xerox Star -> Macintosh -> Windows 95',
            'ENIAC -> Schickard -> Xerox Star -> Macintosh -> Windows 95',
            'Schickard -> Macintosh -> ENIAC -> Windows 95 -> Xerox Star',
            'Xerox Star -> Schickard -> ENIAC -> Macintosh -> Windows 95'
        ],
        correct: 0,
        correctAnswer: 'Schickard -> ENIAC -> Xerox Star -> Macintosh -> Windows 95'
    },
    {
        question: 'Arithmometer คือเครื่องมือประเภทใด?',
        options: ['เครื่องคอมพิวเตอร์ไฟฟ้า', 'เครื่องคิดเลขที่ขายเชิงพาณิชย์เครื่องแรก', 'ระบบปฏิบัติการ', 'อุปกรณ์เมาส์รุ่นแรก'],
        correct: 1,
        correctAnswer: 'เครื่องคิดเลขที่ขายเชิงพาณิชย์เครื่องแรก'
    },
    {
        question: 'ในยุคศตวรรษที่ 17 นวัตกรรมใดช่วยแจ้งเตือนข้อมูลล้น (Overflow) ในเครื่องคำนวณ?',
        options: ['หน้าจอกะพริบ', 'ระฆังแจ้งเตือน', 'ระบบพิมพ์อัตโนมัติ', 'ไม่มีระบบแจ้งเตือน'],
        correct: 1,
        correctAnswer: 'ระฆังแจ้งเตือน'
    },
    {
        question: 'Steve Jobs มีบทบาทสำคัญในการผลักดันอุปกรณ์ใดตามแหล่งข้อมูล?',
        options: ['ENIAC', 'Macintosh/Apple', 'IBM 601', 'Arithmometer'],
        correct: 1,
        correctAnswer: 'Macintosh/Apple'
    },

    {
        question: 'ความง่ายต่อการใช้งานโดยไม่ต้องเรียนรู้มากเกินไปเรียกว่าอะไร?',
        options: ['Accessibility', 'Learnability', 'Usability', 'Responsiveness'],
        correct: 2,
        correctAnswer: 'Usability'
    },
    {
        question: 'Google Search ที่มีช่องค้นหาเรียบง่าย จัดเป็นตัวอย่างของคุณสมบัติใด?',
        options: ['Customizability', 'Usability', 'Security', 'Multilingual'],
        correct: 1,
        correctAnswer: 'Usability'
    },
    {
        question: '"Onboarding" ในแอปมือถือช่วยส่งเสริมคุณสมบัติใด?',
        options: ['ความปลอดภัย', 'ความสามารถในการเรียนรู้ (Learnability)', 'ความเร็ว', 'ความสวยงาม'],
        correct: 1,
        correctAnswer: 'ความสามารถในการเรียนรู้ (Learnability)'
    },
    {
        question: 'การที่ Google Maps อัปเดตตำแหน่งทันทีเมื่อผู้ใช้เคลื่อนที่ จัดเป็นคุณสมบัติใด?',
        options: ['Learnability', 'Responsiveness', 'Accessibility', 'Privacy'],
        correct: 1,
        correctAnswer: 'Responsiveness'
    },
    {
        question: 'Autocomplete ในฟอร์มออนไลน์จัดเป็นตัวอย่างของ?',
        options: ['Responsiveness', 'Customizability', 'Security', 'Multilingual'],
        correct: 0,
        correctAnswer: 'Responsiveness'
    },
    {
        question: 'การเปลี่ยนสีธีมใน Smartphone จัดเป็นคุณสมบัติใด?',
        options: ['Learnability', 'Accessibility', 'Customizability', 'Usability'],
        correct: 2,
        correctAnswer: 'Customizability'
    },
    {
        question: 'Adobe Premiere ที่ให้จัดเรียงหน้าต่างเครื่องมือได้เอง จัดเป็น?',
        options: ['Multilingual Support', 'Customizability', 'Security', 'Learnability'],
        correct: 1,
        correctAnswer: 'Customizability'
    },
    {
        question: 'Screen Reader สำหรับผู้พิการทางสายตา จัดอยู่ในหมวดใด?',
        options: ['Usability', 'Responsiveness', 'Accessibility', 'Security'],
        correct: 2,
        correctAnswer: 'Accessibility'
    },
    {
        question: 'Subtitle (CC) ใน YouTube ช่วยผู้ใช้กลุ่มใดมากที่สุด?',
        options: ['ผู้มีปัญหาทางการได้ยิน', 'ผู้มีปัญหาทางสายตา', 'ผู้ที่ต้องการความเร็ว', 'ผู้ที่ต้องการความปลอดภัย'],
        correct: 0,
        correctAnswer: 'ผู้มีปัญหาทางการได้ยิน'
    },
    {
        question: 'การใช้ Face ID หรือลายนิ้วมือในแอปธนาคาร จัดเป็นเรื่องใด?',
        options: ['Accessibility', 'Security & Privacy', 'Customizability', 'Learnability'],
        correct: 1,
        correctAnswer: 'Security & Privacy'
    },
    {
        question: 'การเข้ารหัสแบบ end-to-end ใน WhatsApp มีไว้เพื่อ?',
        options: ['เพิ่มความเร็ว', 'ป้องกันการดักจับข้อมูล (Privacy)', 'เปลี่ยนภาษาอัตโนมัติ', 'ช่วยผู้พิการ'],
        correct: 1,
        correctAnswer: 'ป้องกันการดักจับข้อมูล (Privacy)'
    },
    {
        question: 'Google Translate ที่รองรับมากกว่า 100 ภาษา จัดเป็น?',
        options: ['Customizability', 'Multilingual Support', 'Responsiveness', 'Accessibility'],
        correct: 1,
        correctAnswer: 'Multilingual Support'
    },
    {
        question: 'ปัญหา "Lack of Standardization" หมายถึงอะไร?',
        options: ['ระบบทำงานช้า', 'ระบบที่แตกต่างกันมากเกินไปจนทำให้ผู้ใช้สับสน', 'การขาดความปลอดภัย', 'หน้าจอไม่ชัดเจน'],
        correct: 1,
        correctAnswer: 'ระบบที่แตกต่างกันมากเกินไปจนทำให้ผู้ใช้สับสน'
    },
    {
        question: 'การใช้คำศัพท์ที่ยากเกินไปในซอฟต์แวร์ จัดเป็นปัญหาด้านใด?',
        options: ['Poor Design', 'Technological Limitations', 'Security Issues', 'Multilingual Issues'],
        correct: 0,
        correctAnswer: 'Poor Design'
    },
    {
        question: 'ระบบทำงานไม่เสถียรหรือตอบสนองช้า จัดเป็นปัญหาด้านใด?',
        options: ['Lack of Standardization', 'Technological Limitations', 'Poor Design', 'Accessibility Issues'],
        correct: 1,
        correctAnswer: 'Technological Limitations'
    },
    {
        question: 'การออกแบบที่ละเลยการยืนยันตัวตน (Authentication) จัดเป็นปัญหาใด?',
        options: ['Poor Design', 'Privacy and Security', 'Accessibility Issues', 'Complexity'],
        correct: 1,
        correctAnswer: 'Privacy and Security'
    },
    {
        question: 'เทคโนโลยี AI หรือ VR มักพบปัญหาใดในช่วงแรก?',
        options: ['ราคาถูกเกินไป', 'ความซับซ้อนที่ต้องอาศัยการเรียนรู้เพิ่ม', 'มีภาษาเดียว', 'ไม่มีการตอบสนอง'],
        correct: 1,
        correctAnswer: 'ความซับซ้อนที่ต้องอาศัยการเรียนรู้เพิ่ม'
    },
    {
        question: 'JAWS และ VoiceOver เป็นเทคโนโลยีที่ช่วยเรื่องใด?',
        options: ['การแปลภาษา', 'การเข้าถึงสำหรับผู้พิการทางสายตา', 'การตัดต่อวิดีโอ', 'การคำนวณเงิน'],
        correct: 1,
        correctAnswer: 'การเข้าถึงสำหรับผู้พิการทางสายตา'
    },
    {
        question: 'ATM ที่มีเมนูถอนเงินชัดเจน จัดเป็นตัวอย่างที่ดีของ?',
        options: ['Customizability', 'Usability', 'Security', 'Multilingual'],
        correct: 1,
        correctAnswer: 'Usability'
    },
    {
        question: 'ข้อใดคือผลลัพธ์ที่ต้องการจากการพัฒนา HCI?',
        options: ['ระบบที่เสถียรและตอบโจทย์ผู้ใช้', 'ระบบที่แพงที่สุด', 'ระบบที่ไม่มี UI', 'ระบบที่ซับซ้อนที่สุด'],
        correct: 0,
        correctAnswer: 'ระบบที่เสถียรและตอบโจทย์ผู้ใช้'
    },

    {
        question: 'การรับรู้ (Perception) ใน HCI ประสาทสัมผัสใดมีบทบาท "น้อย" ที่สุด?',
        options: ['การมองเห็น', 'การได้ยิน', 'การดมกลิ่นและลิ้มรส', 'การสัมผัส'],
        correct: 2,
        correctAnswer: 'การดมกลิ่นและลิ้มรส'
    },
    {
        question: 'Haptic Feedback หมายถึงการโต้ตอบผ่านสิ่งใด?',
        options: ['เสียงพูด', 'การสั่นสะเทือนหรือแรงสะท้อน', 'กราฟิก 3 มิติ', 'แสงไฟ'],
        correct: 1,
        correctAnswer: 'การสั่นสะเทือนหรือแรงสะท้อน'
    },
    {
        question: '"ความจำระยะสั้น" (Short-term memory) จัดอยู่ในความสามารถด้านใด?',
        options: ['Perception', 'Cognitive Abilities', 'Motor Abilities', 'Physical Limitations'],
        correct: 1,
        correctAnswer: 'Cognitive Abilities'
    },
    {
        question: 'การใช้เมาส์ คีย์บอร์ด และหน้าจอสัมผัส จัดเป็นความสามารถด้านใด?',
        options: ['Cognitive', 'Motor Abilities', 'Perception', 'Cultural'],
        correct: 1,
        correctAnswer: 'Motor Abilities'
    },
    {
        question: 'CLI ย่อมาจากอะไร?',
        options: ['Command-line Interface', 'Color Language Input', 'Common Link Interior', 'Central Line Interface'],
        correct: 0,
        correctAnswer: 'Command-line Interface'
    },
    {
        question: 'Siri และ Alexa จัดเป็นอินเทอร์เฟซรูปแบบใด?',
        options: ['GUI', 'CLI', 'Conversational Interface', 'IoT'],
        correct: 2,
        correctAnswer: 'Conversational Interface'
    },
    {
        question: 'การโต้ตอบแบบ "ธรรมชาติ" เช่น ท่าทาง (Gestures) เรียกว่า?',
        options: ['GUI', 'NUI (Natural User Interface)', 'CLI', 'Batch Processing'],
        correct: 1,
        correctAnswer: 'NUI (Natural User Interface)'
    },
    {
        question: '"Slip" คือความผิดพลาดประเภทใด?',
        options: ['ตั้งใจทำผิด', 'ทำผิดโดยไม่ตั้งใจ เช่น กดปุ่มผิด', 'ตัดสินใจผิดเพราะเข้าใจผิด', 'ระบบล่ม'],
        correct: 1,
        correctAnswer: 'ทำผิดโดยไม่ตั้งใจ เช่น กดปุ่มผิด'
    },
    {
        question: '"Mistake" เกิดจากสาเหตุใด?',
        options: ['มือลื่น', 'การตัดสินใจที่ผิดพลาดเนื่องจากความเข้าใจผิด', 'โปรแกรมมีบั๊ก', 'เครื่องร้อน'],
        correct: 1,
        correctAnswer: 'การตัดสินใจที่ผิดพลาดเนื่องจากความเข้าใจผิด'
    },
    {
        question: 'System Crashes หรือ Latency จัดเป็นความผิดพลาดของสิ่งใด?',
        options: ['ผู้ใช้', 'ระบบ (System Errors)', 'สภาพแวดล้อม', 'ภาษา'],
        correct: 1,
        correctAnswer: 'ระบบ (System Errors)'
    },
    {
        question: 'Universal Design คือการออกแบบเพื่ออะไร?',
        options: ['เพื่อคนวัยทำงาน', 'เพื่อรองรับผู้ใช้ที่มีความหลากหลาย', 'เพื่อลดต้นทุน', 'เพื่อขายต่างประเทศ'],
        correct: 1,
        correctAnswer: 'เพื่อรองรับผู้ใช้ที่มีความหลากหลาย'
    },
    {
        question: 'การที่เครื่องคอมพิวเตอร์สามารถจดจำใบหน้าได้ จัดเป็นความสามารถด้านใด?',
        options: ['Input Capabilities (Recognition)', 'Processing Speed', 'Haptic Feedback', 'Storage'],
        correct: 0,
        correctAnswer: 'Input Capabilities (Recognition)'
    },
    {
        question: 'Text-to-Speech เป็นตัวอย่างของ?',
        options: ['Input', 'Output Capabilities (Audio)', 'Processing', 'Storage'],
        correct: 1,
        correctAnswer: 'Output Capabilities (Audio)'
    },
    {
        question: 'ระบบแนะนำ (Recommendation Systems) จัดเป็นเรื่องใดในคอมพิวเตอร์?',
        options: ['Processing Speed', 'Learning & Adaptation (Personalization)', 'Audio Output', 'Haptic Feedback'],
        correct: 1,
        correctAnswer: 'Learning & Adaptation (Personalization)'
    },
    {
        question: 'การใช้จอยสติ๊กเล่นเกม จัดเป็นอุปกรณ์ประเภทใด?',
        options: ['Output', 'Input Devices', 'Storage', 'Processor'],
        correct: 1,
        correctAnswer: 'Input Devices'
    },
    {
        question: 'การโต้ตอบในสภาพแวดล้อมเสมือนจริงเรียกว่า?',
        options: ['IoT', 'VR/AR', 'PC', 'Mobile'],
        correct: 1,
        correctAnswer: 'VR/AR'
    },
    {
        question: 'แอปธนาคารที่ใช้การจดจำใบหน้าเพื่อเข้าระบบ จัดเป็นตัวอย่างของ?',
        options: ['CLI', 'Mobile application / Facial Recognition', 'NUI', 'Batch'],
        correct: 1,
        correctAnswer: 'Mobile application / Facial Recognition'
    },
    {
        question: 'Cognitive Abilities ประกอบด้วยเรื่องใดบ้าง?',
        options: ['ความจำ, การคิดและการตัดสินใจ, การเรียนรู้', 'การมองเห็นและการได้ยิน', 'การสั่นและการกด', 'อายุและวัฒนธรรม'],
        correct: 0,
        correctAnswer: 'ความจำ, การคิดและการตัดสินใจ, การเรียนรู้'
    },
    {
        question: 'ข้อจำกัดทางกายภาพ (Physical Disabilities) ส่งผลต่อการออกแบบอย่างไร?',
        options: ['ไม่ส่งผล', 'ต้องมี Accessibility Design', 'ต้องเพิ่มราคา', 'ต้องใช้ภาษาเดียว'],
        correct: 1,
        correctAnswer: 'ต้องมี Accessibility Design'
    },
    {
        question: 'การออกแบบที่เน้น Feedback เช่น การสั่นเมื่อกดปุ่ม ช่วยเรื่องใด?',
        options: ['ความเร็ว', 'ประสบการณ์ผู้ใช้ (UX)', 'การประมวลผล', 'ความจำ'],
        correct: 1,
        correctAnswer: 'ประสบการณ์ผู้ใช้ (UX)'
    },

    {
        question: 'ปัจจัยมนุษย์ (Human Factors) ศึกษาความสัมพันธ์ระหว่างอะไร?',
        options: ['มนุษย์กับระบบ', 'ฮาร์ดแวร์กับซอฟต์แวร์', 'ราคากับคุณภาพ', 'การตลาดกับลูกค้า'],
        correct: 0,
        correctAnswer: 'มนุษย์กับระบบ'
    },
    {
        question: 'Donald A. Norman มีบทบาทสำคัญในเรื่องใด?',
        options: ['คิดค้น ENIAC', 'ประยุกต์ทฤษฎีประมวลผลข้อมูลใน HCI', 'สร้างคีย์บอร์ด', 'ออกแบบ Windows 95'],
        correct: 1,
        correctAnswer: 'ประยุกต์ทฤษฎีประมวลผลข้อมูลใน HCI'
    },
    {
        question: 'ทฤษฎี "Filter Theory of Attention" พัฒนาโดยใคร?',
        options: ['David E. Broadbent', 'Max Wertheimer', 'John Sweller', 'Abraham Maslow'],
        correct: 0,
        correctAnswer: 'David E. Broadbent'
    },
    {
        question: 'โมเดลการประมวลผลหน่วยความจำหลายขั้น (Atkinson & Shiffrin) แบ่งหน่วยความจำเป็นกี่ประเภท?',
        options: ['2', '3 (Sensory, Short-Term, Long-Term)', '4', '5'],
        correct: 1,
        correctAnswer: '3 (Sensory, Short-Term, Long-Term)'
    },
    {
        question: 'Working Memory (หน่วยความจำใช้งาน) ถูกเสนอโดยใคร?',
        options: ['Maslow', 'Alan Baddeley & Graham Hitch', 'Skinner', 'Norman'],
        correct: 1,
        correctAnswer: 'Alan Baddeley & Graham Hitch'
    },
    {
        question: 'ทฤษฎีเกสตัลต์ (Gestalt Theory) เน้นเรื่องใด?',
        options: ['การมองเห็นส่วนย่อย', 'การรับรู้ภาพรวม (Whole)', 'การฟังเสียงสะท้อน', 'การจำตัวเลข'],
        correct: 1,
        correctAnswer: 'การรับรู้ภาพรวม (Whole)'
    },
    {
        question: 'หลักการ Proximity ในทฤษฎีเกสตัลต์หมายถึงอะไร?',
        options: ['ความคล้ายคลึง', 'ความใกล้เคียง', 'ความต่อเนื่อง', 'ความสมมาตร'],
        correct: 1,
        correctAnswer: 'ความใกล้เคียง'
    },
    {
        question: 'ทฤษฎีภาระงานทางปัญญา (CLT) ของ John Sweller แนะนำให้ลดอะไรในการออกแบบ?',
        options: ['เนื้อหาสำคัญ', 'ข้อมูลส่วนเกิน (Extraneous Load)', 'สีสัน', 'ปุ่มกด'],
        correct: 1,
        correctAnswer: 'ข้อมูลส่วนเกิน (Extraneous Load)'
    },
    {
        question: 'Hierarchy of Needs (ลำดับขั้นความต้องการ) เป็นทฤษฎีของใคร?',
        options: ['Herzberg', 'Maslow', 'Skinner', 'Norman'],
        correct: 1,
        correctAnswer: 'Maslow'
    },
    {
        question: 'ตามทฤษฎีของ Herzberg "เงินเดือน" จัดเป็นปัจจัยใด?',
        options: ['ปัจจัยจูงใจ (Motivators)', 'ปัจจัยค้ำจุน (Hygiene Factors)', 'ปัจจัยทางปัญญา', 'ปัจจัยภายนอก'],
        correct: 1,
        correctAnswer: 'ปัจจัยค้ำจุน (Hygiene Factors)'
    },
    {
        question: 'ปัจจัยใดของ Herzberg ที่สร้างความพึงพอใจ (Satisfaction) โดยตรง?',
        options: ['นโยบายบริษัท', 'ความสำเร็จในการทำงาน (Achievement)', 'สภาพแวดล้อม', 'ความสัมพันธ์กับเจ้านาย'],
        correct: 1,
        correctAnswer: 'ความสำเร็จในการทำงาน (Achievement)'
    },
    {
        question: 'Skinner เกี่ยวข้องกับทฤษฎีใด?',
        options: ['ลำดับขั้นความต้องการ', 'แรงเสริม (Reinforcement Theory)', 'ภาระงานทางปัญญา', 'การรับรู้ภาพรวม'],
        correct: 1,
        correctAnswer: 'แรงเสริม (Reinforcement Theory)'
    },
    {
        question: 'หนังสือ "The Design of Everyday Things" เขียนโดยใคร?',
        options: ['John Gould', 'Donald Norman', 'James Gibson', 'Richard Ryan'],
        correct: 1,
        correctAnswer: 'Donald Norman'
    },
    {
        question: 'เทคนิค HTA ในการวิเคราะห์งานย่อมาจากอะไร?',
        options: ['High Tech Analysis', 'Hierarchical Task Analysis', 'Human Tool Assessment', 'Home Task Activity'],
        correct: 1,
        correctAnswer: 'Hierarchical Task Analysis'
    },
    {
        question: 'การสร้างโปรไฟล์ผู้ใช้สมมติเรียกว่าอะไร?',
        options: ['Empathy Maps', 'Personas', 'Prototype', 'Task Analysis'],
        correct: 1,
        correctAnswer: 'Personas'
    },
    {
        question: 'Low-fidelity Prototype มักอยู่ในรูปแบบใด?',
        options: ['ซอฟต์แวร์จริง', 'แบบร่าง (Sketch) หรือกระดาษ', 'วิดีโอความละเอียดสูง', 'ระบบฐานข้อมูล'],
        correct: 1,
        correctAnswer: 'แบบร่าง (Sketch) หรือกระดาษ'
    },
    {
        question: 'Think-aloud Protocol คือเทคนิคในขั้นตอนใด?',
        options: ['การวิเคราะห์ผู้ใช้', 'การทดสอบการใช้งาน (Usability Testing)', 'การเขียนโค้ด', 'การตั้งราคา'],
        correct: 1,
        correctAnswer: 'การทดสอบการใช้งาน (Usability Testing)'
    },
    {
        question: 'NASA-TLX ใช้เพื่อวัดอะไร?',
        options: ['ความเร็วอินเทอร์เน็ต', 'ภาระงานทางปัญญาและความเครียด', 'ความสูงของจอภาพ', 'จำนวนคนใช้แอป'],
        correct: 1,
        correctAnswer: 'ภาระงานทางปัญญาและความเครียด'
    },
    {
        question: 'การออกแบบโดยยึดความต้องการของผู้ใช้เป็นหลักคือกระบวนการใด?',
        options: ['System-Centered', 'User-Centered Design (UCD)', 'Data-Centered', 'Marketing-Centered'],
        correct: 1,
        correctAnswer: 'User-Centered Design (UCD)'
    },
    {
        question: 'หลักการ Consistency ในการออกแบบหมายถึงอะไร?',
        options: ['ความสวยงาม', 'ความสอดคล้องกันในทุกหน้าจอ', 'ความเร็วในการโหลด', 'การรองรับหลายภาษา'],
        correct: 1,
        correctAnswer: 'ความสอดคล้องกันในทุกหน้าจอ'
    },

    {
        question: 'GOMS ประกอบด้วยองค์ประกอบหลักกี่ส่วน?',
        options: ['3', '4 (Goals, Operators, Methods, Selection rules)', '5', '2'],
        correct: 1,
        correctAnswer: '4 (Goals, Operators, Methods, Selection rules)'
    },
    {
        question: 'ใน GOMS "Operators" หมายถึงอะไร?',
        options: ['เป้าหมายสูงสุด', 'การกระทำขั้นพื้นฐาน เช่น คลิกเมาส์ กดแป้นพิมพ์', 'กฎการเลือกวิธี', 'เวลาประมวลผลของ CPU'],
        correct: 1,
        correctAnswer: 'การกระทำขั้นพื้นฐาน เช่น คลิกเมาส์ กดแป้นพิมพ์'
    },
    {
        question: '"Selection rules" ใน GOMS ใช้เมื่อใด?',
        options: ['เมื่อมีวิธีเดียว', 'เมื่อมีหลายวิธีในการบรรลุเป้าหมาย เพื่อเลือกวิธีที่เหมาะสม', 'เมื่อระบบล่ม', 'เมื่อต้องการเลิกใช้งาน'],
        correct: 1,
        correctAnswer: 'เมื่อมีหลายวิธีในการบรรลุเป้าหมาย เพื่อเลือกวิธีที่เหมาะสม'
    },
    {
        question: 'KLM ย่อมาจากอะไร?',
        options: ['Key Log Monitor', 'Keystroke Level Model', 'Knowledge Link Map', 'Kernel List Mode'],
        correct: 1,
        correctAnswer: 'Keystroke Level Model'
    },
    {
        question: 'ค่าเฉลี่ยเวลาของการกดปุ่ม (Keystroke - K) ใน KLM คือเท่าใด?',
        options: ['1.10 วินาที', '0.28 วินาที', '1.35 วินาที', '0.20 วินาที'],
        correct: 1,
        correctAnswer: '0.28 วินาที'
    },
    {
        question: 'ค่าเฉลี่ยเวลาของการเลื่อนเมาส์ (Pointing - P) ใน KLM คือเท่าใด?',
        options: ['0.28 วินาที', '1.10 วินาที', '0.20 วินาที', '1.35 วินาที'],
        correct: 1,
        correctAnswer: '1.10 วินาที'
    },
    {
        question: 'เวลาในการคิดหรือเตรียมตัวทำงาน (Mental Preparation - M) ใน KLM คือ?',
        options: ['0.28 วินาที', '1.35 วินาที', '0.20 วินาที', '1.10 วินาที'],
        correct: 1,
        correctAnswer: '1.35 วินาที'
    },
    {
        question: 'จากการคำนวณในตัวอย่าง การเปิดไฟล์ (P+B+(K*10)+K) ใช้เวลารวมเท่าใด?',
        options: ['2.50 วินาที', '4.38 วินาที', '10.0 วินาที', '1.58 วินาที'],
        correct: 1,
        correctAnswer: '4.38 วินาที'
    },
    {
        question: 'ข้อดีของ GOMS คือข้อใด?',
        options: ['ใช้เวลาน้อยมาก', 'ช่วยทำนายเวลาที่ใช้ในการทำงานแต่ละขั้นตอน', 'ไม่ต้องมีความรู้เชิงลึก', 'ยืดหยุ่นสูงมาก'],
        correct: 1,
        correctAnswer: 'ช่วยทำนายเวลาที่ใช้ในการทำงานแต่ละขั้นตอน'
    },
    {
        question: 'ข้อเสียของ GOMS คืออะไร?',
        options: ['ไม่มีข้อมูลเชิงปริมาณ', 'อาจมีความซับซ้อนและใช้เวลานานในการวิเคราะห์', 'ไม่สามารถใช้กับคอมพิวเตอร์ได้', 'ทำนายเวลาไม่ได้'],
        correct: 1,
        correctAnswer: 'อาจมีความซับซ้อนและใช้เวลานานในการวิเคราะห์'
    },
    {
        question: 'แบบจำลององค์ความรู้ในสมองเรียกว่าอะไร?',
        options: ['Physical Model', 'Cognitive Modeling', 'Haptic Model', 'Storage Model'],
        correct: 1,
        correctAnswer: 'Cognitive Modeling'
    },
    {
        question: '"External Cognition" เกี่ยวข้องกับเรื่องใด?',
        options: ['การคิดในใจเท่านั้น', 'การใช้สื่อภายนอกช่วยในการเรียนรู้และรับรู้', 'การประมวลผลของแรม', 'การทำงานของเมนบอร์ด'],
        correct: 1,
        correctAnswer: 'การใช้สื่อภายนอกช่วยในการเรียนรู้และรับรู้'
    },
    {
        question: 'ทฤษฎี External Cognition ถูกคิดค้นโดยใคร?',
        options: ['Scaife และ Rogers', 'Maslow', 'Norman', 'Schickard'],
        correct: 0,
        correctAnswer: 'Scaife และ Rogers'
    },
    {
        question: 'Distributed Cognition หมายถึงการกระจายความคิดผ่านอะไรบ้าง?',
        options: ['บุคคล, วัตถุเครื่องมือ, เวลา, สภาพแวดล้อม', 'แค่ผ่านคอมพิวเตอร์', 'แค่ผ่านหนังสือ', 'แค่ผ่านหน้าจอ'],
        correct: 0,
        correctAnswer: 'บุคคล, วัตถุเครื่องมือ, เวลา, สภาพแวดล้อม'
    },
    {
        question: '"Mental Model" คืออะไร?',
        options: ['คู่มือการใช้งาน', 'แบบจำลองทางสมองที่ผู้ใช้มีต่อระบบว่าควรทำงานอย่างไร', 'แผนผังวงจรคอมพิวเตอร์', 'รหัสโปรแกรม'],
        correct: 1,
        correctAnswer: 'แบบจำลองทางสมองที่ผู้ใช้มีต่อระบบว่าควรทำงานอย่างไร'
    },
    {
        question: 'ตัวอย่างของการใช้ Mental Model คือข้อใด?',
        options: ['การออกแบบตัวกรองช่วงราคาบนเว็บ E-commerce', 'การพิมพ์คำสั่ง Code', 'การเสียบปลั๊กไฟ', 'การเช็คความเร็วเน็ต'],
        correct: 0,
        correctAnswer: 'การออกแบบตัวกรองช่วงราคาบนเว็บ E-commerce'
    },
    {
        question: 'การใช้ "Metaphor" (อุปลักษณ์) ใน HCI เช่นอะไร?',
        options: ['ไอคอนรูปถังขยะแทนการลบไฟล์', 'การกดปุ่ม Power', 'การใช้คีย์บอร์ด', 'การใช้แรม 8GB'],
        correct: 0,
        correctAnswer: 'ไอคอนรูปถังขยะแทนการลบไฟล์'
    },
    {
        question: 'Conceptual Model คืออะไร?',
        options: ['การเขียนโปรแกรม', 'แบบจำลองรูปแบบความคิดในการทำงาน', 'การซ่อมฮาร์ดแวร์', 'การตลาดซอฟต์แวร์'],
        correct: 1,
        correctAnswer: 'แบบจำลองรูปแบบความคิดในการทำงาน'
    },
    {
        question: 'ใน GOMS "Methods" หมายถึงอะไร?',
        options: ['ผลลัพธ์สุดท้าย', 'ลำดับของ Operators ที่จัดเรียงเพื่อบรรลุเป้าหมาย', 'กฎการตัดสินใจ', 'อุปกรณ์เมาส์'],
        correct: 1,
        correctAnswer: 'ลำดับของ Operators ที่จัดเรียงเพื่อบรรลุเป้าหมาย'
    },
    {
        question: 'เป้าหมายของการประยุกต์ใช้ GOMS ใน HCI คือ?',
        options: ['เพื่อให้ทราบถึงรายละเอียดที่เกี่ยวข้องและวิเคราะห์ตัวแปรต่างๆ', 'เพื่อเพิ่มยอดขาย', 'เพื่อเลิกใช้เมาส์', 'เพื่อเปลี่ยนภาษา'],
        correct: 0,
        correctAnswer: 'เพื่อให้ทราบถึงรายละเอียดที่เกี่ยวข้องและวิเคราะห์ตัวแปรต่างๆ'
    },

    // =========================
    // ข้อ 101 - 200
    // =========================

    {
        question: 'Wilhelm Schickard สร้างเครื่องคำนวณเชิงกลแบบกี่หลัก?',
        options: ['4 หลัก', '6 หลัก', '8 หลัก', '10 หลัก'],
        correct: 1,
        correctAnswer: '6 หลัก'
    },
    {
        question: 'เครื่อง Pascaline ของ Blaise Pascal ใช้ระบบใดในการทำงาน?',
        options: ['ระบบไฟฟ้า', 'ระบบเกียร์และหน้าปัด', 'ระบบบัตรเจาะรู', 'หลอดสุญญากาศ'],
        correct: 1,
        correctAnswer: 'ระบบเกียร์และหน้าปัด'
    },
    {
        question: 'คอมพิวเตอร์ ENIAC มีน้ำหนักประมาณกี่ตัน?',
        options: ['10 ตัน', '20 ตัน', '30 ตัน', '50 ตัน'],
        correct: 2,
        correctAnswer: '30 ตัน'
    },
    {
        question: 'ENIAC ใช้หลอดสุญญากาศจำนวนเท่าใด?',
        options: ['1,500 หลอด', '12,468 หลอด', '17,468 หลอด', '25,000 หลอด'],
        correct: 2,
        correctAnswer: '17,468 หลอด'
    },
    {
        question: 'แนวคิด "Personal Workstation" สำหรับวิศวกรถูกนำเสนอโดยเครื่องใด?',
        options: ['IBM 601', 'Xerox Alto', 'ENIAC', 'Apple II'],
        correct: 1,
        correctAnswer: 'Xerox Alto'
    },
    {
        question: 'ข้อใดคือมาตรฐานการโต้ตอบที่ Xerox Star ทำให้ถูกต้อง (What it got right)?',
        options: ['การทำงานแบบไร้สาย', 'การใช้ระบบ Networking แชร์ไฟล์และ WYSIWYG', 'การใช้บัตรเจาะรู', 'การสั่งงานด้วยเสียง'],
        correct: 1,
        correctAnswer: 'การใช้ระบบ Networking แชร์ไฟล์และ WYSIWYG'
    },
    {
        question: 'ผู้นำทีมพัฒนา Macintosh ส่วนใหญ่ย้ายมาจากบริษัทใด?',
        options: ['IBM', 'Microsoft', 'Xerox', 'Google'],
        correct: 2,
        correctAnswer: 'Xerox'
    },
    {
        question: 'Apple IIGS (1986) มีความโดดเด่นในเรื่องใดตามภาพแหล่งข้อมูล?',
        options: ['เป็นระบบ 32 bit ตัวแรก', 'ความสามารถด้านกราฟิกขั้นสูงของ VGC', 'การใช้หลอดสุญญากาศ', 'ไม่มีเมาส์'],
        correct: 1,
        correctAnswer: 'ความสามารถด้านกราฟิกขั้นสูงของ VGC'
    },
    {
        question: 'Windows 1.0 เปิดตัวครั้งแรกในรูปแบบใด?',
        options: ['ระบบ 32 bit', 'ระบบ 16 bit', 'ระบบ 64 bit', 'ระบบ AI-based'],
        correct: 1,
        correctAnswer: 'ระบบ 16 bit'
    },
    {
        question: 'การศึกษาพฤติกรรมและความต้องการของผู้ใช้จัดเป็นองค์ประกอบใดของ HCI?',
        options: ['UI', 'UX', 'User', 'Technology'],
        correct: 2,
        correctAnswer: 'User'
    },
    {
        question: 'เป้าหมายของการใช้ AI ใน HCI ปัจจุบันคืออะไร?',
        options: ['เพื่อลดจำนวนผู้ใช้', 'เพื่อเพิ่มประสิทธิภาพการโต้ตอบ', 'เพื่อยกเลิกหน้าจอแบบสัมผัส', 'เพื่อให้คอมพิวเตอร์คิดเองทั้งหมด'],
        correct: 1,
        correctAnswer: 'เพื่อเพิ่มประสิทธิภาพการโต้ตอบ'
    },
    {
        question: 'เครื่องคำนวณเชิงพาณิชย์เครื่องแรกที่ขายได้คืออะไร?',
        options: ['Pascaline', 'Arithmometer', 'ENIAC', 'Xerox Star'],
        correct: 1,
        correctAnswer: 'Arithmometer'
    },
    {
        question: 'การออกแบบที่เน้นความพึงพอใจและความสะดวกในการใช้งานระบบคือคำนิยามของอะไร?',
        options: ['User Interface', 'User Experience (UX)', 'Technology', 'Interaction'],
        correct: 1,
        correctAnswer: 'User Experience (UX)'
    },
    {
        question: 'เครื่องคอมพิวเตอร์ใดที่ถือว่าเป็นเครื่องแรกที่ประมวลผลได้รวดเร็วแต่ไม่มีการโต้ตอบขณะทำงาน?',
        options: ['Xerox Alto', 'Macintosh', 'ENIAC', 'IBM 601'],
        correct: 2,
        correctAnswer: 'ENIAC'
    },
    {
        question: 'HCI ย่อมาจากคำว่าอะไร?',
        options: ['High-speed Computer Interaction', 'Human and Computer Interaction', 'Human Center Interface', 'Hardware and Communication Integration'],
        correct: 1,
        correctAnswer: 'Human and Computer Interaction'
    },
    {
        question: 'นวัตกรรม "ระฆังแจ้งเตือนเมื่อข้อมูลล้น" ปรากฏครั้งแรกในเครื่องใด?',
        options: ['Pascaline', 'Calculating Clock', 'Arithmometer', 'ENIAC'],
        correct: 1,
        correctAnswer: 'Calculating Clock'
    },
    {
        question: 'การพัฒนาอินเทอร์เฟซที่เป็นธรรมชาติ (Natural Interface) มักใช้สิ่งใด?',
        options: ['บัตรเจาะรู', 'การใช้เสียงและการเคลื่อนไหว', 'การพิมพ์คำสั่ง CLI', 'การใช้หลอดสุญญากาศ'],
        correct: 1,
        correctAnswer: 'การใช้เสียงและการเคลื่อนไหว'
    },
    {
        question: 'IBM 601 ใช้บัตรประเภทใดในการทำงาน?',
        options: ['บัตรแม่เหล็ก', 'บัตรเจาะรู (Punch Card)', 'บัตร Smart Card', 'บัตรกระดาษขาว'],
        correct: 1,
        correctAnswer: 'บัตรเจาะรู (Punch Card)'
    },
    {
        question: 'Windows 7 เปิดตัวในปีใด?',
        options: ['1995', '2001', '2009', '2012'],
        correct: 2,
        correctAnswer: '2009'
    },
    {
        question: 'องค์ประกอบใดเน้นการใช้เทคโนโลยีที่เหมาะสมในการสนับสนุนการโต้ตอบ?',
        options: ['User', 'UI', 'Technology', 'UX'],
        correct: 2,
        correctAnswer: 'Technology'
    },

    {
        question: 'หลักการ "Usability" เน้นเรื่องใดเป็นสำคัญ?',
        options: ['ความสวยงาม', 'ใช้งานง่ายโดยไม่ต้องเรียนรู้มาก', 'ราคาประหยัด', 'การทำงานที่ซับซ้อน'],
        correct: 1,
        correctAnswer: 'ใช้งานง่ายโดยไม่ต้องเรียนรู้มาก'
    },
    {
        question: 'ข้อใดคือตัวอย่างของ Usability ในชีวิตประจำวัน?',
        options: ['การใช้ภาษา C เขียนโปรแกรม', 'ตู้ ATM ที่มีเมนูถอนเงินชัดเจน', 'การติดตั้ง Server', 'การใช้รหัสลับที่ซับซ้อน'],
        correct: 1,
        correctAnswer: 'ตู้ ATM ที่มีเมนูถอนเงินชัดเจน'
    },
    {
        question: '"Onboarding" ในแอปมือถือมีวัตถุประสงค์หลักเพื่อส่งเสริมคุณสมบัติใด?',
        options: ['ความปลอดภัย', 'ความสามารถในการเรียนรู้ (Learnability)', 'การรองรับหลายภาษา', 'การปรับแต่งตามใจชอบ'],
        correct: 1,
        correctAnswer: 'ความสามารถในการเรียนรู้ (Learnability)'
    },
    {
        question: 'ระบบ "Autocomplete" ในฟอร์มออนไลน์จัดเป็นคุณสมบัติใด?',
        options: ['Accessibility', 'Responsiveness', 'Security', 'Multilingual'],
        correct: 1,
        correctAnswer: 'Responsiveness'
    },
    {
        question: 'การที่ผู้ใช้สามารถเปลี่ยน "เสียงเรียกเข้า" ได้เองในสมาร์ทโฟน จัดเป็น?',
        options: ['Usability', 'Customizability', 'Security', 'Learnability'],
        correct: 1,
        correctAnswer: 'Customizability'
    },
    {
        question: 'JAWS และ VoiceOver เป็นเทคโนโลยีที่ช่วยในเรื่องใด?',
        options: ['การตัดต่อวิดีโอ', 'การรองรับการเข้าถึง (Accessibility)', 'การป้องกันไวรัส', 'การแปลภาษา'],
        correct: 1,
        correctAnswer: 'การรองรับการเข้าถึง (Accessibility)'
    },
    {
        question: 'ระบบ "End-to-End Encryption" ใน WhatsApp มีไว้เพื่ออะไร?',
        options: ['เพิ่มความเร็ว', 'ความปลอดภัยและความเป็นส่วนตัว', 'การแปลภาษา', 'ความสวยงาม'],
        correct: 1,
        correctAnswer: 'ความปลอดภัยและความเป็นส่วนตัว'
    },
    {
        question: 'Google Translate ที่รองรับมากกว่า 100 ภาษา จัดเป็นคุณสมบัติใด?',
        options: ['Customizability', 'Multilingual Support', 'Responsiveness', 'Accessibility'],
        correct: 1,
        correctAnswer: 'Multilingual Support'
    },
    {
        question: 'ปัญหา "Lack of Standardization" ก่อให้เกิดผลเสียอย่างไร?',
        options: ['ระบบทำงานช้า', 'ผู้ใช้สับสนเมื่อต้องใช้หลายระบบที่ต่างกัน', 'ข้อมูลสูญหาย', 'เครื่องร้อนเกินไป'],
        correct: 1,
        correctAnswer: 'ผู้ใช้สับสนเมื่อต้องใช้หลายระบบที่ต่างกัน'
    },
    {
        question: 'การใช้คำศัพท์ที่ยากเกินความจำเป็นในซอฟต์แวร์จัดเป็นปัญหาใด?',
        options: ['การออกแบบที่ไม่ตอบโจทย์ (Poor Design)', 'ปัญหาด้านเทคโนโลยี', 'ขาดความปลอดภัย', 'ขาดภาษาไทย'],
        correct: 0,
        correctAnswer: 'การออกแบบที่ไม่ตอบโจทย์ (Poor Design)'
    },
    {
        question: 'ข้อใดจัดเป็นปัญหาด้าน "Technological Limitations"?',
        options: ['ไอคอนไม่สวย', 'ระบบทำงานไม่เสถียรหรือตอบสนองช้า', 'สีหน้าจอจืด', 'คู่มือมีหน้าเดียว'],
        correct: 1,
        correctAnswer: 'ระบบทำงานไม่เสถียรหรือตอบสนองช้า'
    },
    {
        question: 'การที่ AI หรือ VR ใช้งานยากและต้องเรียนรู้เยอะ จัดเป็นปัญหาด้านใด?',
        options: ['Lack of Standardization', 'ความซับซ้อนของเทคโนโลยีใหม่', 'Poor Design', 'Privacy Issues'],
        correct: 1,
        correctAnswer: 'ความซับซ้อนของเทคโนโลยีใหม่'
    },
    {
        question: 'ข้อใดคือผลลัพธ์ที่ต้องการจากการพัฒนา HCI?',
        options: ['ระบบที่ประหยัดไฟที่สุด', 'ระบบที่เสถียรและตอบโจทย์ผู้ใช้', 'ระบบที่มีคู่มือหนาที่สุด', 'ระบบที่มีราคาแพงที่สุด'],
        correct: 1,
        correctAnswer: 'ระบบที่เสถียรและตอบโจทย์ผู้ใช้'
    },
    {
        question: 'Subtitle ใน YouTube ช่วยสนับสนุนคุณสมบัติใด?',
        options: ['Security', 'Accessibility', 'Learnability', 'Customizability'],
        correct: 1,
        correctAnswer: 'Accessibility'
    },
    {
        question: 'การยืนยันตัวตนด้วยลายนิ้วมือใน Mobile Banking จัดเป็นเรื่องใด?',
        options: ['Usability', 'Security & Privacy', 'Responsiveness', 'Multilingual'],
        correct: 1,
        correctAnswer: 'Security & Privacy'
    },
    {
        question: 'ระบบการทำงานของตู้ ATM ที่แยกเมนูถอนและฝากชัดเจนช่วยลดปัญหาใด?',
        options: ['ความปลอดภัย', 'ความสับสนในการใช้งาน (Poor Design)', 'ความเร็ว', 'ภาษา'],
        correct: 1,
        correctAnswer: 'ความสับสนในการใช้งาน (Poor Design)'
    },
    {
        question: 'การออกแบบที่ละเลยการรองรับผู้พิการเรียกว่าปัญหาด้านใด?',
        options: ['Technological Issues', 'Accessibility Issues', 'Privacy Issues', 'Standard Issues'],
        correct: 1,
        correctAnswer: 'Accessibility Issues'
    },
    {
        question: 'ระบบ Google Search ที่มีหน้าเดียวและช่องค้นหาเดียวสะท้อนถึงสิ่งใด?',
        options: ['ความล้าหลัง', 'ความง่ายต่อการใช้งาน (Usability)', 'ความประหยัด', 'การขาดมาตรฐาน'],
        correct: 1,
        correctAnswer: 'ความง่ายต่อการใช้งาน (Usability)'
    },
    {
        question: 'ในโปรแกรม Adobe Premiere การที่ผู้ใช้จัดเรียงหน้าต่างเครื่องมือได้เองคือตัวอย่างของ?',
        options: ['Learnability', 'Customizability', 'Accessibility', 'Security'],
        correct: 1,
        correctAnswer: 'Customizability'
    },
    {
        question: 'การ "Autocomplete" อีเมลขณะกรอกแบบฟอร์มทำให้เกิดความรู้สึกอย่างไรกับผู้ใช้?',
        options: ['ปลอดภัยขึ้น', 'ได้รับการตอบสนองที่รวดเร็ว (Responsiveness)', 'เรียนรู้ยากขึ้น', 'สับสน'],
        correct: 1,
        correctAnswer: 'ได้รับการตอบสนองที่รวดเร็ว (Responsiveness)'
    },

    {
        question: 'ประสาทสัมผัสใดมีบทบาท "มากที่สุด" ในการมองเห็นสีและรูปร่าง?',
        options: ['Hearing', 'Vision', 'Touch', 'Smell'],
        correct: 1,
        correctAnswer: 'Vision'
    },
    {
        question: 'การรับรู้ระดับความดังและความแตกต่างของเสียงจัดอยู่ในหมวดใด?',
        options: ['Vision', 'Hearing', 'Haptic', 'Cognitive'],
        correct: 1,
        correctAnswer: 'Hearing'
    },
    {
        question: 'การสั่นสะเทือนหรือแรงกดจากหน้าจอสัมผัสเรียกว่าอะไร?',
        options: ['Vision', 'Touch', 'Cognitive', 'Motor'],
        correct: 1,
        correctAnswer: 'Touch'
    },
    {
        question: 'ความสามารถทางปัญญา (Cognitive) ประกอบด้วยเรื่องใดบ้าง?',
        options: ['ความจำ การคิด การตัดสินใจ', 'การวิ่ง การเดิน การจับ', 'การมองเห็นสีและการฟัง', 'อายุและเพศ'],
        correct: 0,
        correctAnswer: 'ความจำ การคิด การตัดสินใจ'
    },
    {
        question: '"ความจำระยะยาว" (Long-term memory) ทำหน้าที่อะไร?',
        options: ['เก็บข้อมูลชั่วคราวเพื่อประมวลผล', 'เก็บข้อมูลถาวรจากการเรียนรู้และประสบการณ์', 'รับข้อมูลจากลูกตา', 'สั่งการให้มือเคลื่อนไหว'],
        correct: 1,
        correctAnswer: 'เก็บข้อมูลถาวรจากการเรียนรู้และประสบการณ์'
    },
    {
        question: 'การควบคุมการเคลื่อนไหวมือและนิ้วในการใช้เมาส์จัดเป็นความสามารถด้านใด?',
        options: ['Cognitive Abilities', 'Motor Abilities', 'Perception', 'Recognition'],
        correct: 1,
        correctAnswer: 'Motor Abilities'
    },
    {
        question: 'เทคโนโลยี Face ID จัดเป็นความสามารถใดของคอมพิวเตอร์?',
        options: ['Output Capabilities', 'Facial Recognition (Input)', 'Processing Speed', 'Personalization'],
        correct: 1,
        correctAnswer: 'Facial Recognition (Input)'
    },
    {
        question: 'Text-to-Speech (ระบบสังเคราะห์เสียง) จัดเป็นคอมพิวเตอร์เอ้าต์พุตประเภทใด?',
        options: ['Visual Output', 'Audio Output', 'Haptic Output', 'Motor Output'],
        correct: 1,
        correctAnswer: 'Audio Output'
    },
    {
        question: 'จอยเกมที่สั่นตามเหตุการณ์ในเกมใช้ระบบใด?',
        options: ['OLED', 'Haptic Feedback', 'CLI', 'Personalization'],
        correct: 1,
        correctAnswer: 'Haptic Feedback'
    },
    {
        question: 'ระบบแนะนำ (Recommendation Systems) บน YouTube ใช้เทคโนโลยีใด?',
        options: ['CLI', 'AI และ Machine Learning', 'บัตรเจาะรู', 'หลอดสุญญากาศ'],
        correct: 1,
        correctAnswer: 'AI และ Machine Learning'
    },
    {
        question: 'อินเทอร์เฟซแบบที่ผู้ใช้ต้องพิมพ์คำสั่งเองคืออะไร?',
        options: ['GUI', 'CLI', 'NUI', 'Conversational'],
        correct: 1,
        correctAnswer: 'CLI'
    },
    {
        question: 'Siri และ Alexa จัดเป็นอินเทอร์เฟซรูปแบบใด?',
        options: ['CLI', 'Conversational Interface', 'GUI', 'IoT'],
        correct: 1,
        correctAnswer: 'Conversational Interface'
    },
    {
        question: 'การโต้ตอบแบบ "ธรรมชาติ" เช่น การใช้ท่าทาง (Gestures) คืออะไร?',
        options: ['GUI', 'NUI', 'CLI', 'Batch Processing'],
        correct: 1,
        correctAnswer: 'NUI'
    },
    {
        question: 'ความผิดพลาดแบบ "Slip" คืออะไร?',
        options: ['การตัดสินใจผิดเพราะไม่รู้', 'การทำผิดโดยไม่ได้ตั้งใจ เช่น กดปุ่มผิด', 'โปรแกรมมีบั๊ก', 'ระบบปฏิบัติการล่ม'],
        correct: 1,
        correctAnswer: 'การทำผิดโดยไม่ได้ตั้งใจ เช่น กดปุ่มผิด'
    },
    {
        question: 'ความผิดพลาดแบบ "Mistake" เกิดจากอะไร?',
        options: ['มือลื่น', 'การตัดสินใจที่ผิดพลาดเนื่องจากการเข้าใจผิด', 'แรมไม่พอ', 'ไวรัสคอมพิวเตอร์'],
        correct: 1,
        correctAnswer: 'การตัดสินใจที่ผิดพลาดเนื่องจากการเข้าใจผิด'
    },
    {
        question: 'Software Bugs และ System Crashes จัดเป็นความผิดพลาดของสิ่งใด?',
        options: ['มนุษย์', 'ระบบ (System Errors)', 'สภาพอากาศ', 'กระแสไฟฟ้า'],
        correct: 1,
        correctAnswer: 'ระบบ (System Errors)'
    },
    {
        question: '"Universal Design" มีความหมายอย่างไร?',
        options: ['ออกแบบให้คนเก่งใช้', 'ออกแบบให้รองรับผู้ใช้ที่มีความหลากหลาย', 'ออกแบบเฉพาะภาษาอังกฤษ', 'ออกแบบเพื่อลดราคา'],
        correct: 1,
        correctAnswer: 'ออกแบบให้รองรับผู้ใช้ที่มีความหลากหลาย'
    },
    {
        question: 'หลักการ "Consistency" ในการออกแบบคืออะไร?',
        options: ['การสลับสีไปมา', 'การออกแบบที่สอดคล้องกันในทุกหน้าจอ', 'การใช้ภาพเคลื่อนไหวตลอดเวลา', 'การเปลี่ยนเมนูทุกวัน'],
        correct: 1,
        correctAnswer: 'การออกแบบที่สอดคล้องกันในทุกหน้าจอ'
    },
    {
        question: 'การสั่นของโทรศัพท์เมื่อกดแป้นพิมพ์จัดเป็นหลักการใดใน UX?',
        options: ['Usability', 'Feedback', 'Consistency', 'Accessibility'],
        correct: 1,
        correctAnswer: 'Feedback'
    },
    {
        question: 'การออกแบบให้ผู้พิการทางสายตาใช้งานเว็บได้จัดอยู่ในหมวดใด?',
        options: ['Universal Design', 'Accessibility Design', 'High-speed Design', 'Visual Design'],
        correct: 1,
        correctAnswer: 'Accessibility Design'
    },

    {
        question: 'ใครคือผู้เขียนหนังสือ "The Design of Everyday Things"?',
        options: ['John Sweller', 'Donald A. Norman', 'Max Wertheimer', 'Abraham Maslow'],
        correct: 1,
        correctAnswer: 'Donald A. Norman'
    },
    {
        question: 'ทฤษฎี "Filter Theory of Attention" ถูกพัฒนาโดยใคร?',
        options: ['Atkinson', 'David E. Broadbent', 'Skinner', 'Herzberg'],
        correct: 1,
        correctAnswer: 'David E. Broadbent'
    },
    {
        question: 'หน่วยความจำทำงาน (Working Memory) ถูกเสนอโดยใครในปี 1974?',
        options: ['Norman', 'Baddeley & Hitch', 'Maslow', 'Gibson'],
        correct: 1,
        correctAnswer: 'Baddeley & Hitch'
    },
    {
        question: 'โมเดลความจำของ Atkinson & Shiffrin แบ่งออกเป็นกี่ระดับ?',
        options: ['2 ระดับ', '3 ระดับ (Sensory, STM, LTM)', '4 ระดับ', '5 ระดับ'],
        correct: 1,
        correctAnswer: '3 ระดับ (Sensory, STM, LTM)'
    },
    {
        question: 'ทฤษฎี "Gestalt" กล่าวว่าการรับรู้เกิดจากอะไร?',
        options: ['การรวมส่วนย่อย', 'การรับรู้ภาพรวม (Whole)', 'การดมกลิ่น', 'การท่องจำ'],
        correct: 1,
        correctAnswer: 'การรับรู้ภาพรวม (Whole)'
    },
    {
        question: 'หลักการ "Proximity" ในทฤษฎีเกสตัลต์หมายถึงอะไร?',
        options: ['ความคล้ายกัน', 'ความใกล้เคียงกัน', 'ความสมดุล', 'ความต่อเนื่อง'],
        correct: 1,
        correctAnswer: 'ความใกล้เคียงกัน'
    },
    {
        question: 'ทฤษฎีภาระงานทางปัญญา (CLT) แนะนำให้ลดสิ่งใด?',
        options: ['ข้อมูลสำคัญ', 'ข้อมูลส่วนเกิน (Extraneous Load)', 'จำนวนปุ่ม', 'ความสวยงาม'],
        correct: 1,
        correctAnswer: 'ข้อมูลส่วนเกิน (Extraneous Load)'
    },
    {
        question: 'ตามลำดับขั้นความต้องการของ Maslow ความต้องการ "พื้นฐานที่สุด" คืออะไร?',
        options: ['ความปลอดภัย', 'กายภาพ (Physiological)', 'การยอมรับ', 'ความสำเร็จ'],
        correct: 1,
        correctAnswer: 'กายภาพ (Physiological)'
    },
    {
        question: 'ปัจจัยใดในทฤษฎีของ Herzberg ที่ "ป้องกันความไม่พอใจ" แต่ไม่ได้สร้างแรงจูงใจโดยตรง?',
        options: ['ปัจจัยจูงใจ', 'ปัจจัยค้ำจุน (Hygiene Factors)', 'ปัจจัยจิตวิทยา', 'ปัจจัยสังคม'],
        correct: 1,
        correctAnswer: 'ปัจจัยค้ำจุน (Hygiene Factors)'
    },
    {
        question: '"เงินเดือน" และ "ความมั่นคงในงาน" จัดเป็นปัจจัยประเภทใด?',
        options: ['Motivators', 'Hygiene Factors', 'Achievement', 'Recognition'],
        correct: 1,
        correctAnswer: 'Hygiene Factors'
    },
    {
        question: 'การให้รางวัลเพื่อเพิ่มพฤติกรรมที่ต้องการเกี่ยวข้องกับทฤษฎีของใคร?',
        options: ['Maslow', 'B.F. Skinner', 'Sweller', 'Broadbent'],
        correct: 1,
        correctAnswer: 'B.F. Skinner'
    },
    {
        question: 'เทคนิค "Hierarchical Task Analysis (HTA)" ใช้ทำอะไร?',
        options: ['สร้างโปรไฟล์ผู้ใช้', 'แยกงานหลักออกเป็นงานย่อย', 'ทดสอบความเครียด', 'เขียนโค้ด'],
        correct: 1,
        correctAnswer: 'แยกงานหลักออกเป็นงานย่อย'
    },
    {
        question: 'การสร้าง "Personas" มีประโยชน์อย่างไร?',
        options: ['วัดความเร็วคอมพิวเตอร์', 'เข้าใจลักษณะและกลุ่มเป้าหมายของผู้ใช้', 'ป้องกันไวรัส', 'ลดต้นทุนการผลิต'],
        correct: 1,
        correctAnswer: 'เข้าใจลักษณะและกลุ่มเป้าหมายของผู้ใช้'
    },
    {
        question: '"Low-fidelity Prototype" มักใช้ในขั้นตอนใด?',
        options: ['ทดสอบประสิทธิภาพระบบ', 'ทดสอบแนวคิดเบื้องต้น (Sketch)', 'พัฒนาแอปจริง', 'การขายสินค้า'],
        correct: 1,
        correctAnswer: 'ทดสอบแนวคิดเบื้องต้น (Sketch)'
    },
    {
        question: 'เทคนิค "Think-aloud Protocol" คือการทำอะไร?',
        options: ['ให้ผู้ใช้เงียบที่สุด', 'ให้ผู้ใช้พูดสิ่งที่คิดขณะใช้งานระบบ', 'ให้ผู้ใช้อ่านคู่มือเสียงดัง', 'การใช้เสียงสั่งงานคอมพิวเตอร์'],
        correct: 1,
        correctAnswer: 'ให้ผู้ใช้พูดสิ่งที่คิดขณะใช้งานระบบ'
    },
    {
        question: 'NASA-TLX ใช้สำหรับวัดอะไร?',
        options: ['ระยะทางไปดวงจันทร์', 'ระดับภาระงานและความเครียดทางจิตใจ', 'ความพึงพอใจในสีสัน', 'ความเร็วในการคลิก'],
        correct: 1,
        correctAnswer: 'ระดับภาระงานและความเครียดทางจิตใจ'
    },
    {
        question: 'ความพยายามทางกายภาพ (Physical Effort) เป็นหนึ่งในมิติของเทคนิคใด?',
        options: ['HTA', 'NASA-TLX', 'Gestalt', 'CLT'],
        correct: 1,
        correctAnswer: 'NASA-TLX'
    },
    {
        question: 'การออกแบบโดยยึดความต้องการของผู้ใช้เป็นหลัก เรียกว่าอะไร?',
        options: ['System-Centered', 'User-Centered Design (UCD)', 'Data-Centered', 'Marketing-Centered'],
        correct: 1,
        correctAnswer: 'User-Centered Design (UCD)'
    },
    {
        question: 'ทฤษฎีการกระตุ้นภายใน (Self-Determination Theory) ของ Ryan & Deci เน้นสิ่งใด?',
        options: ['การได้รับเงินรางวัล', 'ความเป็นอิสระและความสามารถ', 'การสั่งงานจากหัวหน้า', 'ความมั่นคงในงาน'],
        correct: 1,
        correctAnswer: 'ความเป็นอิสระและความสามารถ'
    },
    {
        question: 'หลักการ "Similarity" ใน Gestalt บอกว่ามนุษย์จะมองสิ่งใดเป็นพวกเดียวกัน?',
        options: ['สิ่งที่อยู่ใกล้กัน', 'สิ่งที่มีลักษณะคล้ายคลึงกัน', 'สิ่งที่มีสีต่างกัน', 'สิ่งที่เคลื่อนที่ช้า'],
        correct: 1,
        correctAnswer: 'สิ่งที่มีลักษณะคล้ายคลึงกัน'
    },

    {
        question: 'ในแบบจำลอง GOMS "Methods" หมายถึงอะไร?',
        options: ['เป้าหมายของผู้ใช้', 'ลำดับของ Operators เพื่อบรรลุเป้าหมาย', 'การคิดในใจ', 'การรอระบบตอบสนอง'],
        correct: 1,
        correctAnswer: 'ลำดับของ Operators เพื่อบรรลุเป้าหมาย'
    },
    {
        question: '"Selection rules" จะถูกนำมาใช้เมื่อใด?',
        options: ['เมื่อไม่มีทางเลือก', 'เมื่อมีวิธีการบรรลุเป้าหมายหลายวิธี', 'เมื่อระบบล้มเหลว', 'เมื่อเริ่มต้นโปรแกรม'],
        correct: 1,
        correctAnswer: 'เมื่อมีวิธีการบรรลุเป้าหมายหลายวิธี'
    },
    {
        question: 'KLM (Keystroke Level Model) แตกต่างจาก GOMS อย่างไร?',
        options: ['KLM ใช้คอมพิวเตอร์ช่วยคิด', 'KLM เน้นทำนายเวลาเชิงปริมาณของแต่ละกิจกรรม', 'KLM ไม่ต้องใช้เมาส์', 'KLM ใช้สำหรับคนคนเดียวเท่านั้น'],
        correct: 1,
        correctAnswer: 'KLM เน้นทำนายเวลาเชิงปริมาณของแต่ละกิจกรรม'
    },
    {
        question: 'ค่าเวลาเฉลี่ยของการคลิกเมาส์ (Button Press - B) คือเท่าใด?',
        options: ['0.28 วินาที', '0.20 วินาที', '1.10 วินาที', '1.35 วินาที'],
        correct: 1,
        correctAnswer: '0.20 วินาที'
    },
    {
        question: 'ค่าเวลาเฉลี่ยของการเลื่อนเมาส์ไปยังตำแหน่ง (Pointing - P) คือเท่าใด?',
        options: ['0.20 วินาที', '1.10 วินาที', '1.35 วินาที', '0.28 วินาที'],
        correct: 1,
        correctAnswer: '1.10 วินาที'
    },
    {
        question: 'ค่าเวลาเฉลี่ยของการเตรียมตัวทำงาน (Mental Preparation - M) คือเท่าใด?',
        options: ['0.28 วินาที', '1.35 วินาที', '0.20 วินาที', '1.10 วินาที'],
        correct: 1,
        correctAnswer: '1.35 วินาที'
    },
    {
        question: 'ตามตัวอย่างในแหล่งข้อมูล เวลารวมในการเปิดไฟล์คือเท่าใด?',
        options: ['3.00 วินาที', '4.38 วินาที', '5.10 วินาที', '6.28 วินาที'],
        correct: 1,
        correctAnswer: '4.38 วินาที'
    },
    {
        question: 'ข้อใดคือข้อดีของ GOMS ในการวิเคราะห์ HCI?',
        options: ['ไม่ต้องใช้ความรู้ลึกซึ้ง', 'ช่วยเปรียบเทียบประสิทธิภาพการออกแบบต่างๆ', 'ทำให้ระบบประหยัดไฟ', 'ทำให้หน้าจอสวยขึ้น'],
        correct: 1,
        correctAnswer: 'ช่วยเปรียบเทียบประสิทธิภาพการออกแบบต่างๆ'
    },
    {
        question: 'ข้อเสียสำคัญของ GOMS คือข้อใด?',
        options: ['ทำนายเวลาไม่ได้', 'ซับซ้อนและใช้เวลานานในการวิเคราะห์', 'ใช้ไม่ได้กับแอปมือถือ', 'ไม่ต้องใช้ข้อมูลสมมติ'],
        correct: 1,
        correctAnswer: 'ซับซ้อนและใช้เวลานานในการวิเคราะห์'
    },
    {
        question: '"External Cognition" ถูกคิดค้นโดยใคร?',
        options: ['Donald Norman', 'Scaife และ Rogers', 'Sweller', 'Gibson'],
        correct: 1,
        correctAnswer: 'Scaife และ Rogers'
    },
    {
        question: 'Distributed Cognition เน้นการกระจายความคิดผ่านสิ่งใดบ้าง?',
        options: ['บุคคล วัตถุ เวลา สภาพแวดล้อม', 'เฉพาะคอมพิวเตอร์เท่านั้น', 'เฉพาะหัวหน้างาน', 'เฉพาะอินเทอร์เน็ต'],
        correct: 0,
        correctAnswer: 'บุคคล วัตถุ เวลา สภาพแวดล้อม'
    },
    {
        question: 'แบบจำลองทางสมอง (Mental Model) ช่วยผู้ใช้อย่างไร?',
        options: ['ช่วยจำตัวเลข', 'ช่วยให้ผู้ใช้เข้าใจว่าระบบควรทำงานอย่างไร', 'ช่วยเพิ่มความเร็วแรม', 'ช่วยระบายความร้อนเครื่อง'],
        correct: 1,
        correctAnswer: 'ช่วยให้ผู้ใช้เข้าใจว่าระบบควรทำงานอย่างไร'
    },
    {
        question: 'ไอคอนรูป "จดหมาย" แทนการส่งอีเมล เป็นการใช้เทคนิคใด?',
        options: ['CLT', 'Metaphor (อุปลักษณ์)', 'GOMS', 'NASA-TLX'],
        correct: 1,
        correctAnswer: 'Metaphor (อุปลักษณ์)'
    },
    {
        question: 'การออกแบบตัวกรองช่วงราคาบนเว็บ E-commerce เป็นตัวอย่างของแบบจำลองใด?',
        options: ['Conceptual Model', 'Mental Model', 'Cognitive Model', 'HTA'],
        correct: 1,
        correctAnswer: 'Mental Model'
    },
    {
        question: 'ใน GOMS "Operators" เป็นองค์ประกอบที่สะท้อนพฤติกรรมด้านใด?',
        options: ['จิตวิญญาณ', 'กายภาพและการรับรู้', 'การเงิน', 'การตลาด'],
        correct: 1,
        correctAnswer: 'กายภาพและการรับรู้'
    },
    {
        question: 'กฎการเลือก (Selection rules) สะท้อนถึงสิ่งใดของผู้ใช้?',
        options: ['ความรวย', 'การตัดสินใจและประสบการณ์', 'ยี่ห้อคอมพิวเตอร์', 'ความเร็วเน็ต'],
        correct: 1,
        correctAnswer: 'การตัดสินใจและประสบการณ์'
    },
    {
        question: 'แบบจำลอง GOMS เหมาะสำหรับการวิเคราะห์งานลักษณะใด?',
        options: ['งานที่ไม่แน่นอน', 'งานที่คาดการณ์ได้และมีขั้นตอนชัดเจน', 'งานศิลปะสร้างสรรค์', 'งานสังคมสงเคราะห์'],
        correct: 1,
        correctAnswer: 'งานที่คาดการณ์ได้และมีขั้นตอนชัดเจน'
    },
    {
        question: 'การกระจายความคิดผ่านบุคคลหลายคน (เช่น ทีมงาน) จัดอยู่ในทฤษฎีใด?',
        options: ['GOMS', 'Distributed Cognition', 'External Cognition', 'Gestalt'],
        correct: 1,
        correctAnswer: 'Distributed Cognition'
    },
    {
        question: 'Scaife และ Rogers กล่าวถึงทฤษฎีใด?',
        options: ['CLT', 'External Cognition', 'Memory Theory', 'Arithmometer'],
        correct: 1,
        correctAnswer: 'External Cognition'
    },
    {
        question: 'การสร้างระบบช่วยเหลือ (Help System) สามารถนำแบบจำลองใดไปประยุกต์ใช้ได้ดี?',
        options: ['Gestalt', 'GOMS', 'ENIAC', 'Maslow'],
        correct: 1,
        correctAnswer: 'GOMS'
    }
];


// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let isAnswered = false;

// DOM Elements
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const scoreSpan = document.getElementById('score');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const correctAnswerDiv = document.getElementById('correctAnswer');
const correctAnswerText = document.getElementById('correctAnswerText');
const quizContent = document.getElementById('quizContent');
const resultCard = document.getElementById('resultCard');

// Initialize Quiz
function initQuiz() {
    totalQuestionsSpan.textContent = quizData.length;
    loadQuestion();
    updateProgress();
}

// Load Question
function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    questionText.textContent = `${currentQuestionIndex + 1}. ${question.question}`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // Clear options
    optionsContainer.innerHTML = '';

    // Create option cards
    question.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.innerHTML = `
            <div class="d-flex align-items-center">
                <div class="form-check me-3">
                    <input class="form-check-input" type="radio" name="answer" id="option${index}" value="${index}">
                </div>
                <label class="form-check-label flex-grow-1" for="option${index}">
                    <strong>${String.fromCharCode(65 + index)}.</strong> ${option}
                </label>
            </div>
        `;

        optionCard.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionCard);
    });

    // Reset state
    isAnswered = false;
    correctAnswerDiv.style.display = 'none';
    nextBtn.disabled = true;

    // Update button states
    prevBtn.disabled = currentQuestionIndex === 0;

    // Check if this question was already answered
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const savedAnswer = userAnswers[currentQuestionIndex];
        const optionCards = document.querySelectorAll('.option-card');
        optionCards[savedAnswer].classList.add('selected');
        document.getElementById(`option${savedAnswer}`).checked = true;
        checkAnswer(savedAnswer);
    }

    // Add fade-in animation
    document.querySelector('.question-card').classList.add('fade-in');
}

// Select Option
function selectOption(index) {
    if (isAnswered) return;

    // Remove previous selection
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Add selection to clicked option
    const optionCards = document.querySelectorAll('.option-card');
    optionCards[index].classList.add('selected');
    document.getElementById(`option${index}`).checked = true;

    // Check answer
    checkAnswer(index);
}

// Check Answer
function checkAnswer(selectedIndex) {
    const question = quizData[currentQuestionIndex];
    const optionCards = document.querySelectorAll('.option-card');

    isAnswered = true;
    userAnswers[currentQuestionIndex] = selectedIndex;

    if (selectedIndex === question.correct) {
        // Correct answer
        optionCards[selectedIndex].classList.add('correct');
        if (!userAnswers[currentQuestionIndex + 1] || userAnswers[currentQuestionIndex + 1] === undefined) {
            score++;
            updateScore();
        }
    } else {
        // Wrong answer
        optionCards[selectedIndex].classList.add('incorrect');
        optionCards[question.correct].classList.add('correct');

        // Show correct answer
        correctAnswerText.textContent = question.correctAnswer;
        correctAnswerDiv.style.display = 'block';
    }

    // Enable next button
    nextBtn.disabled = false;
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        updateProgress();
    }
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Update Score
function updateScore() {
    scoreSpan.textContent = score;
}

// Show Results
function showResults() {
    quizContent.style.display = 'none';
    resultCard.style.display = 'block';

    const percentage = Math.round((score / quizData.length) * 100);
    document.getElementById('finalScore').textContent = `${percentage}%`;
    document.getElementById('finalCorrect').textContent = score;
    document.getElementById('finalTotal').textContent = quizData.length;
}

// Restart Quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    isAnswered = false;

    quizContent.style.display = 'block';
    resultCard.style.display = 'none';

    updateScore();
    initQuiz();
}

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});
