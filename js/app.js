const course={
uk:{start:"Розпочати курс",prev:"Назад",next:"Далі",sections:[
{title:"Вступ",lead:"Що таке Deep Learning, як воно працює на базовому рівні і чому стало одним із ключових напрямів сучасного ШІ",body:`
<div class="learning intro-objectives">
  <strong>Після цього розділу ви зможете</strong>
  <ul>
    <li>простими словами пояснити, що таке Deep Learning;</li>
    <li>відрізнити навчання на даних від роботи за жорстко заданими правилами;</li>
    <li>описати базовий шлях: дані → мережа → навчання → результат.</li>
  </ul>
</div>

<h3>Що таке Deep Learning?</h3>
<p><strong>Deep Learning (глибоке навчання)</strong> — це напрям машинного навчання, у якому багатошарові нейронні мережі навчаються знаходити закономірності у великих обсягах даних. Замість того щоб програміст вручну описував кожне правило, модель поступово налаштовує власні параметри на прикладах.</p>
<p>Ідея проста: ми показуємо моделі багато прикладів, порівнюємо її відповіді з правильними, вимірюємо помилку і коригуємо внутрішні параметри так, щоб наступні відповіді ставали точнішими.</p>

<figure class="course-figure"><img src="assets/images/intro-overview-uk.svg" alt="Схема роботи Deep Learning: дані, нейронна мережа, навчання, результат"><figcaption>Загальна логіка роботи Deep Learning</figcaption></figure><div class="intro-visual" aria-label="Як працює глибоке навчання">
  <div class="intro-step"><span class="intro-icon">01</span><b>Дані</b><small>зображення, текст, звук, сигнали</small></div>
  <div class="intro-arrow">→</div>
  <div class="intro-step"><span class="intro-icon">02</span><b>Нейронна мережа</b><small>багато взаємопов’язаних шарів</small></div>
  <div class="intro-arrow">→</div>
  <div class="intro-step"><span class="intro-icon">03</span><b>Навчання</b><small>помилка → коригування параметрів</small></div>
  <div class="intro-arrow">→</div>
  <div class="intro-step"><span class="intro-icon">04</span><b>Результат</b><small>клас, прогноз, текст або сигнал</small></div>
</div>

<div class="takeaway"><strong>Ключова відмінність:</strong> звичайна програма виконує правила, які написала людина. Модель Deep Learning навчається правилам поведінки з даних.</div>

<h3>Навіщо це потрібно?</h3>
<p>Deep Learning особливо корисне там, де ознаки складні, численні або важко описуються вручну. Наприклад, легко сказати людині: «знайди автомобіль на фото», але значно важче вручну записати всі правила, за якими комп’ютер має впізнати автомобіль за різного освітлення, кута огляду, фону чи масштабу.</p>

<div class="intro-cases">
  <article><div class="case-symbol">◉</div><b>Зображення</b><p>Модель може навчатися розпізнавати об’єкти, сцени або візуальні ознаки на прикладах.</p></article>
  <article><div class="case-symbol">≋</div><b>Мовлення</b><p>Нейронні мережі можуть перетворювати аудіо на текст або синтезувати мовлення.</p></article>
  <article><div class="case-symbol">Aa</div><b>Текст</b><p>Моделі можуть аналізувати, перекладати, узагальнювати та генерувати текст.</p></article>
</div>

<h3>Що означає слово «deep»?</h3>
<p>Слово <strong>deep</strong> означає наявність кількох прихованих шарів у нейронній мережі. Кожен наступний шар може формувати складніше представлення даних. Наприклад, при аналізі зображення ранні шари можуть реагувати на контури, наступні — на форми, а глибші — на складні частини об’єктів.</p>

<figure class="course-figure"><img src="assets/images/feature-hierarchy-uk.svg" alt="Схема формування ознак: пікселі, краї, форми, об’єкт"><figcaption>Приклад того, як шари мережі поступово формують складніші ознаки</figcaption></figure><div class="mini-example">
  <div><span>Пікселі</span><small>сирі дані</small></div><b>→</b>
  <div><span>Краї</span><small>прості ознаки</small></div><b>→</b>
  <div><span>Форми</span><small>складніші ознаки</small></div><b>→</b>
  <div><span>Об’єкт</span><small>підсумкове розпізнавання</small></div>
</div>

<div class="example"><strong>Важливо:</strong> Deep Learning не «розуміє» світ так, як людина. Модель виявляє статистичні закономірності у даних і формує відповіді на основі того, чого навчилася. Тому якість результату залежить від даних, методу навчання та перевірки.</div>

<div class="check">
  <h3>Міні-перевірка</h3>
  <p><strong>Що найкраще описує Deep Learning?</strong></p>
  <button class="answer" data-correct="0">Система, яка працює лише за жорстко прописаними людиною правилами</button>
  <button class="answer" data-correct="1">Навчання багатошарової нейронної мережі знаходити закономірності у даних</button>
  <button class="answer" data-correct="0">Спосіб зберігання дуже великих наборів даних</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Перед переходом далі:</strong> запам’ятайте одну ідею — Deep Learning навчається на прикладах, використовуючи багатошарові нейронні мережі. У наступному розділі розберемо, де саме Deep Learning знаходиться у співвідношенні AI → ML → DL.</div>`},
{title:"AI → ML → Deep Learning",lead:"Як пов’язані штучний інтелект, машинне навчання та глибоке навчання — і чому ці поняття не є синонімами",body:`
<div class="learning">
  <strong>Після цього розділу ви зможете</strong>
  <ul>
    <li>пояснити різницю між AI, ML і Deep Learning;</li>
    <li>побачити, як ці поняття вкладені одне в одне;</li>
    <li>навести практичний приклад для кожного рівня.</li>
  </ul>
</div>

<h3>Три поняття — три різні рівні</h3>
<p><strong>Artificial Intelligence (AI)</strong> — найширше поняття. Воно охоплює методи, які дають комп’ютерним системам змогу виконувати завдання, що зазвичай пов’язують з інтелектуальною діяльністю: планування, пошук, розпізнавання, рекомендації, роботу з мовою або прийняття рішень.</p>
<p><strong>Machine Learning (ML)</strong> — частина AI, у якій модель не отримує всі правила у готовому вигляді, а знаходить закономірності у даних. <strong>Deep Learning (DL)</strong> — частина ML, що використовує багатошарові нейронні мережі для роботи зі складними даними, такими як зображення, звук і текст.</p>

<figure class="course-figure section2-diagram">
  <img src="assets/images/section2/ai-ml-dl-circles.jpg" alt="Вкладена схема AI, ML і Deep Learning">
  <figcaption>AI — найширша сфера; Machine Learning є її частиною, а Deep Learning — частиною Machine Learning.</figcaption>
</figure>

<div class="takeaway"><strong>Запам’ятайте:</strong> Deep Learning ⊂ Machine Learning ⊂ Artificial Intelligence. Але не кожна AI-система використовує ML, і не кожна ML-модель є Deep Learning.</div>

<h3>AI — широка область</h3>
<div class="photo-explain">
  <img src="assets/images/section2/female-analyst-command-center.jpg" alt="Аналітикиня працює з даними у сучасному командному центрі">
  <div><p>AI може включати як навчання на даних, так і методи, які працюють за правилами: пошукові алгоритми, експертні системи, планування, логіку, оптимізацію.</p><p><strong>Приклад:</strong> навігаційна система може використовувати алгоритми пошуку маршруту, навіть якщо вона не навчається на прикладах.</p></div>
</div>

<h3>ML — модель навчається на даних</h3>
<div class="photo-explain reverse">
  <img src="assets/images/section2/drone-over-desert.jpg" alt="Безпілотна платформа під час збору даних">
  <div><p>У Machine Learning ми даємо моделі дані та приклади, а вона виявляє закономірності, які допомагають прогнозувати або класифікувати нові дані.</p><p><strong>Приклад:</strong> модель може навчатися на історичних даних дорожнього руху, щоб прогнозувати завантаженість доріг або визначати тип транспортного засобу.</p></div>
</div>

<h3>Deep Learning — складні дані та глибокі мережі</h3>
<div class="photo-explain">
  <img src="assets/images/section2/headset-woman.jpg" alt="Операторка у навушниках працює з аудіоданими">
  <div><p>Deep Learning використовує глибокі нейронні мережі з багатьма шарами. Вони можуть автоматично формувати корисні ознаки з сирих або слабко структурованих даних.</p><p><strong>Приклад:</strong> аудіосигнал може бути перетворений у текст без ручного опису кожної фонетичної ознаки.</p></div>
</div>

<h3>Порівняємо</h3>
<div class="compare-grid">
  <article><b>AI</b><p><strong>Фокус:</strong> інтелектуальна поведінка системи</p><p><strong>Методи:</strong> правила, пошук, логіка, ML та інші</p><p><strong>Дані:</strong> не завжди обов’язкові для навчання</p></article>
  <article><b>ML</b><p><strong>Фокус:</strong> навчання закономірностям із даних</p><p><strong>Методи:</strong> дерева рішень, регресія, ансамблі, SVM тощо</p><p><strong>Дані:</strong> потрібні для навчання</p></article>
  <article><b>DL</b><p><strong>Фокус:</strong> складні представлення у багатошарових мережах</p><p><strong>Методи:</strong> CNN, RNN, Transformers та інші нейромережеві архітектури</p><p><strong>Дані:</strong> часто потрібні значні обсяги</p></article>
</div>

<div class="check">
  <h3>Міні-перевірка</h3>
  <p><strong>Яке твердження правильне?</strong></p>
  <button class="answer" data-correct="0">Усі AI-системи обов’язково використовують Deep Learning</button>
  <button class="answer" data-correct="1">Deep Learning є частиною Machine Learning, а Machine Learning — частиною AI</button>
  <button class="answer" data-correct="0">Machine Learning і Artificial Intelligence — це повністю однакові поняття</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Далі:</strong> тепер, коли ми розуміємо місце Deep Learning у структурі AI, переходимо до найменшого обчислювального елемента нейронної мережі — штучного нейрона.</div>`},
{title:"Штучний нейрон",lead:"Як вхідні дані, ваги, bias і функція активації разом формують один вихід",body:`
<div class="learning">
  <strong>Після цього розділу ви зможете</strong>
  <ul>
    <li>назвати основні частини штучного нейрона;</li>
    <li>пояснити роль ваги, bias і функції активації;</li>
    <li>описати шлях від вхідного сигналу до виходу нейрона.</li>
  </ul>
</div>

<h3>Штучний нейрон — це маленький обчислювальний блок</h3>
<p>Штучний нейрон отримує кілька вхідних значень, оцінює їх важливість за допомогою <strong>ваг</strong>, додає <strong>bias</strong>, обчислює суму і передає її через <strong>функцію активації</strong>. На виході отримуємо одне нове значення.</p>
<p>Один нейрон дуже простий. Але коли тисячі або мільйони таких елементів об’єднуються у шари, мережа може формувати складні представлення даних.</p>

<figure class="course-figure">
  <img src="assets/images/section3/artificial-neuron.svg" alt="Схема штучного нейрона з входами, вагами, bias, сумою, активацією та виходом">
  <figcaption>Базова логіка штучного нейрона: входи → ваги → сума + bias → активація → вихід.</figcaption>
</figure>

<div class="takeaway"><strong>Коротко:</strong> нейрон не просто додає числа. Він враховує, які вхідні сигнали важливіші, а які — менш важливі.</div>

<h3>Що може бути входом?</h3>
<div class="photo-explain">
  <img src="assets/images/section3/sensor-inputs.jpg" alt="Аналітикиня працює з різними цифровими та сенсорними даними">
  <div>
    <p>Вхід <strong>x</strong> — це числове представлення даних. Це може бути яскравість пікселя, частота аудіосигналу, показник сенсора, координата, температура або числова ознака об’єкта.</p>
    <p><strong>Приклад:</strong> для системи аналізу зображення один вхід може відповідати значенню окремого пікселя або ознаці, сформованій попереднім шаром.</p>
  </div>
</div>

<h3>Розберемо нейрон по частинах</h3>
<div class="neuron-parts" aria-label="Інтерактивні частини штучного нейрона">
  <button class="neuron-part active" data-part="inputs">Inputs</button>
  <button class="neuron-part" data-part="weights">Weights</button>
  <button class="neuron-part" data-part="bias">Bias</button>
  <button class="neuron-part" data-part="sum">Weighted sum</button>
  <button class="neuron-part" data-part="activation">Activation</button>
  <button class="neuron-part" data-part="output">Output</button>
</div>
<div class="neuron-explain" id="neuronExplain"></div>

<h3>1. Inputs — вхідні значення</h3>
<p>Позначення <strong>x₁, x₂, x₃…</strong> — це числові значення, які надходять у нейрон. Сам по собі нейрон не «бачить» фото і не «чує» звук — він працює з числами.</p>

<h3>2. Weights — наскільки важливий кожен вхід</h3>
<p>Кожен вхід множиться на свою вагу <strong>w</strong>. Велика додатна вага підсилює вплив сигналу. Вага близька до нуля робить сигнал менш важливим. Від’ємна вага може послаблювати або змінювати напрям його впливу.</p>

<div class="formula">z = w₁x₁ + w₂x₂ + w₃x₃ + b</div>

<h3>3. Bias — додаткове зміщення</h3>
<p><strong>Bias</strong> — це окремий параметр, який додається до зваженої суми. Він дає нейрону додаткову гнучкість: модель може зміщувати поріг реакції, навіть коли всі входи дорівнюють нулю.</p>

<h3>4. Activation — вирішує, яким буде вихід</h3>
<p>Після обчислення зваженої суми значення проходить через функцію активації. Вона додає нелінійність, без якої складна нейронна мережа поводилася б майже як одна велика лінійна формула.</p>

<figure class="course-figure">
  <img src="assets/images/section3/activation-output.svg" alt="Схема перетворення зваженої суми функцією активації у вихід">
  <figcaption>Функція активації перетворює внутрішню суму нейрона на його вихідне значення.</figcaption>
</figure>

<h3>Реальний приклад: аудіосигнал</h3>
<div class="photo-explain reverse">
  <img src="assets/images/section3/audio-signal-input.jpg" alt="Операторка у гарнітурі працює з аудіосигналом">
  <div>
    <p>У задачі розпізнавання мовлення входами можуть бути числові характеристики коротких фрагментів звуку. Різні нейрони навчаються реагувати на різні комбінації таких ознак.</p>
    <p>Один нейрон не «розпізнає фразу». Він формує лише один маленький проміжний сигнал, який потім використовується наступними нейронами.</p>
  </div>
</div>

<div class="example"><strong>Важливо:</strong> ваги та bias не задаються вручну для кожного нейрона. Під час навчання модель поступово змінює їх, щоб зменшувати помилку.</div>

<div class="check">
  <h3>Міні-перевірка</h3>
  <p><strong>Що саме визначає, наскільки сильно окремий вхід впливає на результат нейрона?</strong></p>
  <button class="answer" data-correct="0">Назва вхідної змінної</button>
  <button class="answer" data-correct="1">Вага цього входу</button>
  <button class="answer" data-correct="0">Кількість файлів у наборі даних</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Далі:</strong> окремий нейрон — лише базовий елемент. У наступному розділі подивимося, як багато нейронів об’єднуються у вхідний, приховані та вихідний шари.</div>`},
{title:"Архітектура нейронної мережі",lead:"Input → Hidden Layers → Output",body:`<p>Нейрони об’єднуються у шари. Кожен наступний шар формує дедалі складніше представлення даних.</p><div class="layers"><article><b>INPUT</b><p>Отримує початкові ознаки.</p></article><span>→</span><article><b>HIDDEN 1</b><p>Виявляє прості закономірності.</p></article><span>→</span><article><b>HIDDEN 2+</b><p>Комбінує їх у складніші ознаки.</p></article><span>→</span><article><b>OUTPUT</b><p>Формує прогноз або клас.</p></article></div><div class="example"><strong>Приклад:</strong> для зображення ранні шари можуть реагувати на краї та лінії, глибші — на форми й частини об’єкта, а вихідний шар — визначати клас.</div>`},
{title:"Як навчається нейронна мережа",lead:"Prediction → Error → Update → Repeat",body:`<p>Навчання — це багаторазове коригування параметрів мережі, щоб зменшувати помилку.</p><div class="flow"><span>1. Дані</span><b>→</b><span>2. Прогноз</span><b>→</b><span>3. Помилка</span><b>→</b><span>4. Оновлення ваг</span><b>↻</b></div><div class="concepts"><article><b>Forward pass</b><p>Мережа робить прогноз.</p></article><article><b>Loss</b><p>Функція втрат вимірює помилку.</p></article><article><b>Backpropagation</b><p>Обчислюється внесок параметрів у помилку.</p></article><article><b>Optimizer</b><p>Ваги змінюються для зменшення loss.</p></article></div>`},
{title:"Застосування Deep Learning",lead:"Де багатошарові мережі дають практичну цінність",body:`<div class="applications"><article><b>👁 Computer Vision</b><p>Класифікація та аналіз зображень і відео.</p></article><article><b>🗣 Speech</b><p>Розпізнавання та синтез мовлення.</p></article><article><b>📝 Language</b><p>Аналіз, переклад і генерація тексту.</p></article><article><b>📡 Signals</b><p>Пошук закономірностей у складних потоках сигналів.</p></article></div><div class="takeaway"><strong>Важливо:</strong> якість результату залежить не лише від архітектури, а й від даних, метрики, обчислювальних ресурсів та людського контролю.</div>`},
{title:"Інтерактивний сценарій",lead:"Оберіть підхід для задачі",body:`<div class="scenario"><p><strong>Ситуація:</strong> потрібно автоматично розподілити велику колекцію зображень за відомими категоріями. Даних достатньо, а ознаки складно описати вручну.</p><p>Який підхід найбільш доречний у межах цього навчального прикладу?</p><button class="answer" data-correct="0">Створити вручну правило для кожного можливого зображення</button><button class="answer" data-correct="1">Навчити модель розпізнавати закономірності на прикладах</button><button class="answer" data-correct="0">Не використовувати дані для навчання</button><p class="feedback"></p></div>`},
{title:"Knowledge Check",lead:"Перевірте ключові поняття",body:`<div class="check"><h3>Що є підмножиною Machine Learning?</h3><button class="answer" data-correct="1">Deep Learning</button><button class="answer" data-correct="0">Усі бази даних</button><button class="answer" data-correct="0">Будь-яка комп’ютерна програма</button><p class="feedback"></p></div><div class="takeaway">Після відповіді переходьте до підсумкового оцінювання.</div>`},
{title:"Final Assessment",lead:"Підсумкова перевірка",body:`<div id="assessment"></div>`},
{title:"Summary",lead:"Ключові висновки",body:`<div class="summary"><h3>Ви пройшли модуль</h3><p>Тепер ви можете пояснити місце Deep Learning у структурі AI, базову роботу штучного нейрона, роль шарів мережі та загальний цикл навчання.</p><div class="flow"><span>AI</span><b>→</b><span>ML</span><b>→</b><span>DL</span><b>→</b><span>Neural Networks</span></div><p><strong>Головна думка:</strong> Deep Learning дає моделі змогу навчатися складним представленням із даних, але потребує належних даних, оцінювання та контролю.</p></div>`}
]},
en:{start:"Start course",prev:"Back",next:"Next",sections:[
{title:"Introduction",lead:"What Deep Learning is, how it works at a basic level, and why it has become one of the key areas of modern AI",body:`
<div class="learning intro-objectives">
  <strong>After this section, you will be able to</strong>
  <ul>
    <li>explain Deep Learning in simple terms;</li>
    <li>distinguish learning from data from following fixed hand-written rules;</li>
    <li>describe the basic path: data → network → learning → result.</li>
  </ul>
</div>

<h3>What is Deep Learning?</h3>
<p><strong>Deep Learning</strong> is a field of machine learning in which multi-layer neural networks learn patterns from large amounts of data. Instead of a programmer manually specifying every rule, the model gradually adjusts its own internal parameters from examples.</p>
<p>The basic idea is simple: we show the model many examples, compare its outputs with the expected answers, measure the error, and adjust internal parameters so that future outputs become more accurate.</p>

<figure class="course-figure"><img src="assets/images/intro-overview-en.svg" alt="Deep Learning workflow: data, neural network, learning, output"><figcaption>High-level Deep Learning workflow</figcaption></figure><div class="intro-visual" aria-label="How deep learning works">
  <div class="intro-step"><span class="intro-icon">01</span><b>Data</b><small>images, text, audio, signals</small></div>
  <div class="intro-arrow">→</div>
  <div class="intro-step"><span class="intro-icon">02</span><b>Neural network</b><small>many connected layers</small></div>
  <div class="intro-arrow">→</div>
  <div class="intro-step"><span class="intro-icon">03</span><b>Learning</b><small>error → parameter adjustment</small></div>
  <div class="intro-arrow">→</div>
  <div class="intro-step"><span class="intro-icon">04</span><b>Result</b><small>class, prediction, text, or signal</small></div>
</div>

<div class="takeaway"><strong>Key difference:</strong> a conventional program follows rules written by a human. A Deep Learning model learns useful rules of behaviour from data.</div>

<h3>Why is it useful?</h3>
<p>Deep Learning is especially useful when relevant features are complex, numerous, or difficult to describe manually. For example, it is easy to tell a person “find a vehicle in this image”, but much harder to manually write every rule a computer would need to recognize that vehicle under different lighting, viewpoints, backgrounds, or scales.</p>

<div class="intro-cases">
  <article><div class="case-symbol">◉</div><b>Images</b><p>A model can learn to recognize objects, scenes, or visual features from examples.</p></article>
  <article><div class="case-symbol">≋</div><b>Speech</b><p>Neural networks can convert audio into text or generate synthetic speech.</p></article>
  <article><div class="case-symbol">Aa</div><b>Text</b><p>Models can analyse, translate, summarise, and generate text.</p></article>
</div>

<h3>What does “deep” mean?</h3>
<p>The word <strong>deep</strong> refers to the use of multiple hidden layers in a neural network. Each successive layer can form a more complex representation of the data. In image analysis, for example, early layers may react to edges, later layers to shapes, and deeper layers to more complex parts of objects.</p>

<figure class="course-figure"><img src="assets/images/feature-hierarchy-en.svg" alt="Feature hierarchy: pixels, edges, shapes, object"><figcaption>Example of how deeper layers can build richer features</figcaption></figure>
<div class="mini-example">
  <div><span>Pixels</span><small>raw data</small></div><b>→</b>
  <div><span>Edges</span><small>simple features</small></div><b>→</b>
  <div><span>Shapes</span><small>richer features</small></div><b>→</b>
  <div><span>Object</span><small>final recognition</small></div>
</div>

<div class="example"><strong>Important:</strong> Deep Learning does not “understand” the world in the same way people do. A model detects statistical patterns in data and produces outputs based on what it has learned. Its quality therefore depends on the data, the training process, and evaluation.</div>

<div class="check">
  <h3>Mini check</h3>
  <p><strong>Which statement best describes Deep Learning?</strong></p>
  <button class="answer" data-correct="0">A system that only follows fixed rules written by a human</button>
  <button class="answer" data-correct="1">Training a multi-layer neural network to learn patterns from data</button>
  <button class="answer" data-correct="0">A way to store very large datasets</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Before you continue:</strong> remember one core idea — Deep Learning learns from examples by using multi-layer neural networks. In the next section, we will place Deep Learning within the AI → ML → DL relationship.</div>`},
{title:"AI → ML → Deep Learning",lead:"How Artificial Intelligence, Machine Learning, and Deep Learning relate — and why the terms are not interchangeable",body:`
<div class="learning">
  <strong>After this section, you will be able to</strong>
  <ul>
    <li>explain the difference between AI, ML, and Deep Learning;</li>
    <li>recognise how the concepts are nested;</li>
    <li>give a practical example for each level.</li>
  </ul>
</div>

<h3>Three concepts — three different levels</h3>
<p><strong>Artificial Intelligence (AI)</strong> is the broadest concept. It includes methods that enable computer systems to perform tasks commonly associated with intelligent behaviour, including planning, search, recognition, recommendations, language processing, and decision support.</p>
<p><strong>Machine Learning (ML)</strong> is a part of AI in which a model learns patterns from data instead of receiving every rule explicitly. <strong>Deep Learning (DL)</strong> is a part of ML that uses multi-layer neural networks to work with complex data such as images, audio, and text.</p>

<figure class="course-figure section2-diagram">
  <img src="assets/images/section2/ai-ml-dl-circles.jpg" alt="Nested relationship between AI, ML, and Deep Learning">
  <figcaption>AI is the broadest field; Machine Learning is a subset of AI, and Deep Learning is a subset of Machine Learning.</figcaption>
</figure>

<div class="takeaway"><strong>Remember:</strong> Deep Learning ⊂ Machine Learning ⊂ Artificial Intelligence. However, not every AI system uses ML, and not every ML model is Deep Learning.</div>

<h3>AI — the broad field</h3>
<div class="photo-explain">
  <img src="assets/images/section2/female-analyst-command-center.jpg" alt="Female analyst working with data in a modern command centre">
  <div><p>AI may include both learning-based systems and methods that work with explicit rules, such as search algorithms, expert systems, planning, logic, and optimisation.</p><p><strong>Example:</strong> a navigation system can use route-search algorithms even if it does not learn from examples.</p></div>
</div>

<h3>ML — the model learns from data</h3>
<div class="photo-explain reverse">
  <img src="assets/images/section2/drone-over-desert.jpg" alt="Uncrewed aerial platform collecting data">
  <div><p>In Machine Learning, we provide data and examples, and the model discovers patterns that help it classify or predict new data.</p><p><strong>Example:</strong> a model can learn from historical traffic data to forecast congestion or classify vehicle types.</p></div>
</div>

<h3>Deep Learning — complex data and deep networks</h3>
<div class="photo-explain">
  <img src="assets/images/section2/headset-woman.jpg" alt="Operator wearing a headset while working with audio data">
  <div><p>Deep Learning uses neural networks with many layers. These networks can automatically build useful feature representations from raw or weakly structured data.</p><p><strong>Example:</strong> an audio signal can be converted into text without manually defining every phonetic feature.</p></div>
</div>

<h3>Compare the three</h3>
<div class="compare-grid">
  <article><b>AI</b><p><strong>Focus:</strong> intelligent system behaviour</p><p><strong>Methods:</strong> rules, search, logic, ML, and others</p><p><strong>Data:</strong> training data is not always required</p></article>
  <article><b>ML</b><p><strong>Focus:</strong> learning patterns from data</p><p><strong>Methods:</strong> decision trees, regression, ensembles, SVM, and others</p><p><strong>Data:</strong> required for training</p></article>
  <article><b>DL</b><p><strong>Focus:</strong> complex representations in multi-layer networks</p><p><strong>Methods:</strong> CNNs, RNNs, Transformers, and other neural architectures</p><p><strong>Data:</strong> often requires substantial volumes</p></article>
</div>

<div class="check">
  <h3>Mini check</h3>
  <p><strong>Which statement is correct?</strong></p>
  <button class="answer" data-correct="0">All AI systems must use Deep Learning</button>
  <button class="answer" data-correct="1">Deep Learning is part of Machine Learning, and Machine Learning is part of AI</button>
  <button class="answer" data-correct="0">Machine Learning and Artificial Intelligence mean exactly the same thing</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Next:</strong> now that we know where Deep Learning fits within AI, we can move to the smallest computational building block of a neural network — the artificial neuron.</div>`},
{title:"Artificial Neuron",lead:"How inputs, weights, bias, and an activation function combine to produce one output",body:`
<div class="learning">
  <strong>After this section, you will be able to</strong>
  <ul>
    <li>name the main parts of an artificial neuron;</li>
    <li>explain the role of weights, bias, and activation;</li>
    <li>describe the path from an input signal to a neuron output.</li>
  </ul>
</div>

<h3>An artificial neuron is a small computational block</h3>
<p>An artificial neuron receives several input values, evaluates their importance using <strong>weights</strong>, adds a <strong>bias</strong>, computes a sum, and passes it through an <strong>activation function</strong>. The result is one new output value.</p>
<p>A single neuron is simple. But when thousands or millions of these elements are connected in layers, a network can build increasingly complex representations of data.</p>

<figure class="course-figure">
  <img src="assets/images/section3/artificial-neuron.svg" alt="Artificial neuron with inputs, weights, bias, weighted sum, activation, and output">
  <figcaption>Basic neuron logic: inputs → weights → sum + bias → activation → output.</figcaption>
</figure>

<div class="takeaway"><strong>In short:</strong> a neuron does more than add numbers. It learns which input signals should matter more and which should matter less.</div>

<h3>What can an input be?</h3>
<div class="photo-explain">
  <img src="assets/images/section3/sensor-inputs.jpg" alt="Analyst working with multiple digital and sensor data sources">
  <div>
    <p>An input <strong>x</strong> is a numerical representation of data. It could be a pixel intensity, an audio frequency, a sensor reading, a coordinate, a temperature value, or another numerical feature.</p>
    <p><strong>Example:</strong> in image analysis, an input may represent a pixel value or a feature produced by a previous layer.</p>
  </div>
</div>

<h3>Explore the parts of a neuron</h3>
<div class="neuron-parts" aria-label="Interactive artificial neuron parts">
  <button class="neuron-part active" data-part="inputs">Inputs</button>
  <button class="neuron-part" data-part="weights">Weights</button>
  <button class="neuron-part" data-part="bias">Bias</button>
  <button class="neuron-part" data-part="sum">Weighted sum</button>
  <button class="neuron-part" data-part="activation">Activation</button>
  <button class="neuron-part" data-part="output">Output</button>
</div>
<div class="neuron-explain" id="neuronExplain"></div>

<h3>1. Inputs</h3>
<p><strong>x₁, x₂, x₃…</strong> are numerical values entering the neuron. The neuron does not directly “see” an image or “hear” sound — it operates on numbers.</p>

<h3>2. Weights — how important is each input?</h3>
<p>Each input is multiplied by its own <strong>weight w</strong>. A large positive weight strengthens a signal. A weight near zero makes it less important. A negative weight can reduce or reverse its influence.</p>

<div class="formula">z = w₁x₁ + w₂x₂ + w₃x₃ + b</div>

<h3>3. Bias — an additional shift</h3>
<p><strong>Bias</strong> is a separate parameter added to the weighted sum. It gives the neuron extra flexibility by shifting its response threshold even when all input values are zero.</p>

<h3>4. Activation — shaping the output</h3>
<p>After the weighted sum is calculated, the value passes through an activation function. Activation adds non-linearity; without it, a deep network would behave much more like a single large linear formula.</p>

<figure class="course-figure">
  <img src="assets/images/section3/activation-output.svg" alt="Weighted sum transformed by an activation function into an output">
  <figcaption>An activation function transforms the neuron's internal sum into an output value.</figcaption>
</figure>

<h3>Real-world example: an audio signal</h3>
<div class="photo-explain reverse">
  <img src="assets/images/section3/audio-signal-input.jpg" alt="Operator wearing a headset while working with audio signals">
  <div>
    <p>In speech-recognition tasks, inputs can represent numerical characteristics of short audio segments. Different neurons learn to respond to different combinations of these features.</p>
    <p>A single neuron does not “recognise a sentence”. It produces one small intermediate signal that can be used by later neurons.</p>
  </div>
</div>

<div class="example"><strong>Important:</strong> weights and bias are not manually set for every neuron. During training, the model gradually changes them to reduce error.</div>

<div class="check">
  <h3>Mini check</h3>
  <p><strong>What determines how strongly an individual input affects a neuron's result?</strong></p>
  <button class="answer" data-correct="0">The name of the input variable</button>
  <button class="answer" data-correct="1">The weight of that input</button>
  <button class="answer" data-correct="0">The number of files in the dataset</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Next:</strong> one neuron is only the basic building block. In the next section, we will see how many neurons are organised into input, hidden, and output layers.</div>`},
{title:"Neural Network Architecture",lead:"Input → Hidden Layers → Output",body:`<p>Neurons are organised into layers. Successive layers can form increasingly complex representations of the data.</p><div class="layers"><article><b>INPUT</b><p>Receives initial features.</p></article><span>→</span><article><b>HIDDEN 1</b><p>Detects simple patterns.</p></article><span>→</span><article><b>HIDDEN 2+</b><p>Combines them into richer features.</p></article><span>→</span><article><b>OUTPUT</b><p>Produces a prediction or class.</p></article></div><div class="example"><strong>Example:</strong> for an image, early layers may react to edges, deeper layers to shapes and object parts, and the output layer to a class.</div>`},
{title:"How a Neural Network Learns",lead:"Prediction → Error → Update → Repeat",body:`<p>Training repeatedly adjusts network parameters to reduce error.</p><div class="flow"><span>1. Data</span><b>→</b><span>2. Prediction</span><b>→</b><span>3. Error</span><b>→</b><span>4. Weight update</span><b>↻</b></div><div class="concepts"><article><b>Forward pass</b><p>The network makes a prediction.</p></article><article><b>Loss</b><p>A loss function measures error.</p></article><article><b>Backpropagation</b><p>The contribution of parameters to error is calculated.</p></article><article><b>Optimizer</b><p>Weights are adjusted to reduce loss.</p></article></div>`},
{title:"Applications of Deep Learning",lead:"Where multi-layer networks create practical value",body:`<div class="applications"><article><b>👁 Computer Vision</b><p>Image and video classification and analysis.</p></article><article><b>🗣 Speech</b><p>Speech recognition and synthesis.</p></article><article><b>📝 Language</b><p>Text analysis, translation and generation.</p></article><article><b>📡 Signals</b><p>Finding patterns in complex signal streams.</p></article></div><div class="takeaway"><strong>Important:</strong> outcomes depend not only on architecture, but also on data, metrics, computing resources and human oversight.</div>`},
{title:"Interactive Scenario",lead:"Choose an approach for the task",body:`<div class="scenario"><p><strong>Situation:</strong> a large image collection must be automatically assigned to known categories. There is sufficient training data and useful features are difficult to specify manually.</p><p>Which approach is most appropriate for this learning example?</p><button class="answer" data-correct="0">Write a manual rule for every possible image</button><button class="answer" data-correct="1">Train a model to learn patterns from examples</button><button class="answer" data-correct="0">Do not use data for learning</button><p class="feedback"></p></div>`},
{title:"Knowledge Check",lead:"Check the key concepts",body:`<div class="check"><h3>Which is a subset of Machine Learning?</h3><button class="answer" data-correct="1">Deep Learning</button><button class="answer" data-correct="0">All databases</button><button class="answer" data-correct="0">Any computer program</button><p class="feedback"></p></div><div class="takeaway">After answering, continue to the final assessment.</div>`},
{title:"Final Assessment",lead:"Final knowledge check",body:`<div id="assessment"></div>`},
{title:"Summary",lead:"Key takeaways",body:`<div class="summary"><h3>You completed the module</h3><p>You can now explain where Deep Learning fits within AI, the basic operation of an artificial neuron, the role of network layers, and the overall training cycle.</p><div class="flow"><span>AI</span><b>→</b><span>ML</span><b>→</b><span>DL</span><b>→</b><span>Neural Networks</span></div><p><strong>Main idea:</strong> Deep Learning enables models to learn complex representations from data, while still requiring appropriate data, evaluation and oversight.</p></div>`}
]}}
;
const questions={uk:[["Deep Learning є…",["підмножиною Machine Learning","типом бази даних","операційною системою"],0],["Що змінюється під час навчання?",["Лише назва моделі","Ваги та інші параметри","Кількість вхідних даних автоматично"],1],["Для чого потрібна функція втрат?",["Вимірювати помилку прогнозу","Зберігати файли","Створювати нові класи"],0],["Що роблять hidden layers?",["Формують представлення ознак","Лише показують результат","Замінюють дані"],0],["Яка послідовність описує навчання?",["Прогноз → помилка → оновлення","Оновлення → видалення → прогноз","Зберігання → друк → прогноз"],0]],en:[["Deep Learning is…",["a subset of Machine Learning","a database type","an operating system"],0],["What changes during training?",["Only the model name","Weights and other parameters","The number of inputs automatically"],1],["What is a loss function used for?",["Measuring prediction error","Storing files","Creating new classes"],0],["What do hidden layers do?",["Build feature representations","Only display results","Replace the data"],0],["Which sequence describes training?",["Prediction → error → update","Update → delete → prediction","Storage → print → prediction"],0]]};
let lang=localStorage.getItem("courseLang")||"uk",current=0,score=0;
const $=id=>document.getElementById(id);
function assessment(){const box=$("assessment");if(!box)return;score=0;box.innerHTML=questions[lang].map((q,i)=>`<div class="assessment-q"><p><strong>${i+1}. ${q[0]}</strong></p>${q[1].map((a,j)=>`<button class="assessment-answer" data-q="${i}" data-a="${j}">${a}</button>`).join("")}</div>`).join("")+`<button id="submitAssessment" class="primary">${lang==="uk"?"Завершити оцінювання":"Submit assessment"}</button><div id="score"></div>`;document.querySelectorAll(".assessment-answer").forEach(b=>b.onclick=()=>{document.querySelectorAll(`.assessment-answer[data-q="${b.dataset.q}"]`).forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});$("submitAssessment").onclick=()=>{score=0;questions[lang].forEach((q,i)=>{const s=document.querySelector(`.assessment-answer.selected[data-q="${i}"]`);if(s&&+s.dataset.a===q[2])score++});$("score").innerHTML=`<div class="scorebox"><strong>${score}/5 — ${score>=4?(lang==="uk"?"Успішно":"Passed"):(lang==="uk"?"Перегляньте матеріал і спробуйте ще раз":"Review the material and try again")}</strong></div>`}}
function bindAnswers(){document.querySelectorAll(".answer").forEach(btn=>btn.onclick=()=>{const ok=btn.dataset.correct==="1",f=btn.parentElement.querySelector(".feedback");f.textContent=ok?(lang==="uk"?"Правильно.":"Correct."):(lang==="uk"?"Не зовсім. Спробуйте ще раз.":"Not quite. Try again.");f.className=`feedback ${ok?"ok":"retry"}`})}
function bindNeuronParts(){const box=document.getElementById("neuronExplain");if(!box)return;const copy={uk:{inputs:"Inputs — числові значення, які надходять у нейрон.",weights:"Weights — коефіцієнти важливості кожного входу. Саме вони змінюються під час навчання.",bias:"Bias — додатковий параметр, що зміщує поріг реакції нейрона.",sum:"Weighted sum — сума всіх входів після множення на їхні ваги плюс bias.",activation:"Activation — нелінійне перетворення, яке допомагає мережі моделювати складні залежності.",output:"Output — числовий сигнал, який нейрон передає далі або використовує як прогноз."},en:{inputs:"Inputs are the numerical values entering the neuron.",weights:"Weights are importance coefficients for each input. They are adjusted during training.",bias:"Bias is an additional parameter that shifts the neuron's response threshold.",sum:"The weighted sum combines all weighted inputs and bias.",activation:"Activation is a non-linear transformation that lets a network model complex relationships.",output:"Output is the numerical signal passed to later neurons or used as a prediction."}};const renderPart=p=>{box.textContent=copy[lang][p]};document.querySelectorAll(".neuron-part").forEach(b=>b.onclick=()=>{document.querySelectorAll(".neuron-part").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderPart(b.dataset.part)});renderPart("inputs")}
function render(){const d=course[lang],s=d.sections[current];document.documentElement.lang=lang;$("heroTitle").textContent=lang==="uk"?"Основи глибокого навчання":"Fundamentals of Deep Learning";$("heroLead").textContent=lang==="uk"?"Від штучного нейрона до навчання нейронної мережі":"From an artificial neuron to neural-network learning";$("startBtn").textContent=d.start;$("prevLabel").textContent=d.prev;$("nextLabel").textContent=d.next;document.querySelectorAll("[data-lang]").forEach(x=>x.classList.toggle("active",x.dataset.lang===lang));if(!$("lesson").classList.contains("hidden")){$("sectionDots").innerHTML=Array.from({length:10},(_,i)=>`<i class="${i<=current?"done":""}"></i>`).join("");$("lessonNo").textContent=`${lang==="uk"?"РОЗДІЛ":"SECTION"} ${String(current+1).padStart(2,"0")} / 10`;$("lessonTitle").textContent=s.title;$("lessonLead").textContent=s.lead;$("lessonBody").innerHTML=s.body;$("progressBar").style.width=`${(current+1)*10}%`;bindAnswers();bindNeuronParts();if(current===8)assessment();}}
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem("courseLang",lang);render()});
$("startBtn").onclick=()=>{$("hero").classList.add("hidden");$("lesson").classList.remove("hidden");current=0;render()};
$("nextBtn").onclick=()=>{if(current<9){current++;render();window.scrollTo({top:0,behavior:"smooth"})}};
$("prevBtn").onclick=()=>{if(current>0){current--;render()}else{$("lesson").classList.add("hidden");$("hero").classList.remove("hidden");$("progressBar").style.width="0"}};
render();