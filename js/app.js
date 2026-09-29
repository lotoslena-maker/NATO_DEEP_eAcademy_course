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

<h3>Ще один приклад: дані з повітряної платформи</h3>
<div class="photo-explain">
  <img src="assets/images/section2/drone-over-desert.jpg" alt="Безпілотна платформа під час збору візуальних даних">
  <div>
    <p>Камера повітряної платформи формує великий масив числових даних. На ранніх етапах мережі окремі нейрони працюють лише з невеликими фрагментами цих значень.</p>
    <p>Тобто навіть складне зображення для нейрона починається з простих числових входів.</p>
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
{title:"Архітектура нейронної мережі",lead:"Як окремі нейрони об’єднуються у шари й формують дедалі складніші представлення",body:`
<div class="learning">
  <strong>Після цього розділу ви зможете</strong>
  <ul>
    <li>розрізняти input, hidden та output layers;</li>
    <li>пояснити, чому мережу називають «deep»;</li>
    <li>описати, як прості ознаки поступово перетворюються на складніші.</li>
  </ul>
</div>

<h3>Від одного нейрона — до мережі</h3>
<p>Один нейрон виконує дуже просте перетворення. Але в нейронній мережі багато нейронів об’єднуються у <strong>шари</strong>. Вихід одного шару стає входом для наступного, тому мережа може будувати дедалі складніші представлення даних.</p>

<figure class="course-figure">
  <img src="assets/images/section4/network-layers.svg" alt="Схема нейронної мережі з input, hidden та output layers">
  <figcaption>Типова структура: вхідний шар → один або кілька прихованих шарів → вихідний шар.</figcaption>
</figure>

<h3>Розберемо шари</h3>
<div class="layer-tabs" aria-label="Інтерактивні шари нейронної мережі">
  <button class="layer-tab active" data-layer="input">Input layer</button>
  <button class="layer-tab" data-layer="hidden">Hidden layers</button>
  <button class="layer-tab" data-layer="output">Output layer</button>
</div>
<div class="layer-explain" id="layerExplain"></div>

<h3>Input layer — отримує дані</h3>
<p>Вхідний шар приймає числові значення. Для зображення це можуть бути пікселі або вже підготовлені ознаки. Для аудіо — числові характеристики сигналу. Для табличних даних — значення окремих параметрів.</p>

<h3>Hidden layers — формують представлення</h3>
<p>Приховані шари називаються hidden не тому, що вони «приховують» інформацію, а тому, що вони знаходяться між входом і виходом. Саме тут мережа поступово комбінує прості ознаки у складніші.</p>

<figure class="course-figure">
  <img src="assets/images/section4/feature-hierarchy.svg" alt="Схема поступового формування ознак: пікселі, краї, форми, об’єкт">
  <figcaption>Приклад ієрархії ознак: від простих числових сигналів до складнішого представлення об’єкта.</figcaption>
</figure>

<h3>Що означає «deep»?</h3>
<p>Мережу називають <strong>deep</strong>, коли вона має кілька прихованих шарів. Кожен із них виконує нове перетворення. Тому глибина — це не «розумність» моделі сама по собі, а кількість послідовних рівнів представлення.</p>

<h3>Реальний контекст: аналіз візуальних даних</h3>
<div class="photo-explain">
  <img src="assets/images/section2/female-analyst-command-center.jpg" alt="Аналітикиня працює з картографічними та візуальними даними">
  <div>
    <p>У задачах computer vision людина бачить готову сцену одразу. Нейронна мережа проходить до цього результату поступово: ранні шари реагують на базові ознаки, наступні — на їхні комбінації, а вихідний шар формує прогноз.</p>
    <p><strong>Приклад:</strong> модель класифікації зображень може спочатку реагувати на контури, потім на форми, а на глибших рівнях — на характерні частини об’єкта.</p>
  </div>
</div>

<div class="takeaway"><strong>Головна ідея:</strong> глибока мережа не «бачить» об’єкт одразу. Вона будує його представлення крок за кроком, проходячи через послідовність шарів.</div>

<div class="check">
  <h3>Міні-перевірка</h3>
  <p><strong>Що найкраще описує hidden layers?</strong></p>
  <button class="answer" data-correct="0">Вони лише зберігають вхідні файли</button>
  <button class="answer" data-correct="1">Вони поступово формують складніші представлення даних</button>
  <button class="answer" data-correct="0">Вони тільки показують готовий результат користувачу</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Далі:</strong> тепер ми бачимо, як влаштована мережа. У наступному розділі розберемо, як вона навчається — робить прогноз, вимірює помилку і змінює свої параметри.</div>`},
{title:"Як навчається нейронна мережа",lead:"Forward pass → Loss → Backpropagation → Update → Repeat",body:`
<div class="learning"><strong>Після цього розділу ви зможете</strong><ul><li>описати основний цикл навчання нейронної мережі;</li><li>пояснити ролі forward pass, loss, backpropagation та optimizer;</li><li>зрозуміти, чому навчання повторюється багато разів.</li></ul></div>
<h3>Навчання — це повторюваний цикл</h3>
<p>Нейронна мережа не отримує правильні ваги одразу. Вона починає з початкових параметрів, робить прогноз, порівнює його з правильною відповіддю, вимірює помилку і поступово коригує ваги.</p>
<figure class="course-figure"><img src="assets/images/section5/training-cycle.svg" alt="Цикл навчання нейронної мережі: дані, forward pass, loss, backpropagation, оновлення ваг"><figcaption>Основний цикл навчання повторюється багато разів на різних прикладах.</figcaption></figure>
<h3>Розберемо кроки</h3>
<div class="training-tabs" aria-label="Етапи навчання нейронної мережі"><button class="training-tab active" data-step="data">Data</button><button class="training-tab" data-step="forward">Forward pass</button><button class="training-tab" data-step="loss">Loss</button><button class="training-tab" data-step="backprop">Backpropagation</button><button class="training-tab" data-step="update">Update</button></div>
<div class="training-explain" id="trainingExplain"></div>
<h3>Forward pass — модель робить прогноз</h3><p>Вхідні дані проходять через усі шари мережі. Кожен шар виконує свої перетворення, а вихідний шар формує прогноз.</p>
<h3>Loss — вимірюємо помилку</h3><p><strong>Loss function</strong> порівнює прогноз моделі з правильною відповіддю і повертає число, що показує величину помилки. Менше значення loss зазвичай означає кращу відповідність навчальним прикладам.</p>
<figure class="course-figure"><img src="assets/images/section5/loss-curve.svg" alt="Графік зменшення loss під час навчання"><figcaption>Під час успішного навчання loss зазвичай поступово зменшується, хоча реальні криві можуть бути нерівними.</figcaption></figure>
<h3>Backpropagation — визначаємо, що треба змінити</h3><p>Алгоритм зворотного поширення помилки обчислює, як параметри мережі вплинули на помилку. Це дозволяє визначити напрямок, у якому потрібно змінити ваги.</p>
<h3>Optimizer — оновлюємо ваги</h3><p>Оптимізатор використовує обчислені градієнти і змінює ваги невеликими кроками. Після цього мережа знову робить прогноз — і цикл повторюється.</p>
<div class="photo-explain"><img src="assets/images/section5/training-workstation.jpg" alt="Аналітикиня контролює процес навчання моделі"><div><p>У реальній роботі навчання моделі супроводжується контролем метрик, графіків loss, перевіркою даних і спостереженням за тим, чи справді модель покращується.</p><p><strong>Людина залишається в контурі:</strong> вона визначає задачу, дані, метрики, умови експерименту та оцінює результат.</p></div></div>
<div class="takeaway"><strong>Головна ідея:</strong> навчання — це не одноразова дія. Це багаторазове повторення циклу «прогноз → помилка → коригування параметрів».</div>
<div class="check"><h3>Міні-перевірка</h3><p><strong>Що відбувається одразу після обчислення loss?</strong></p><button class="answer" data-correct="0">Модель видаляє дані</button><button class="answer" data-correct="1">Обчислюється, як параметри вплинули на помилку</button><button class="answer" data-correct="0">Навчання завжди завершується</button><p class="feedback"></p></div>
<div class="takeaway"><strong>Далі:</strong> тепер подивимося, де Deep Learning використовується на практиці — у зображеннях, мовленні, тексті та сигналах.</div>`},
{title:"Застосування Deep Learning",lead:"Computer Vision, Speech, Language та Signals — чотири типові напрями застосування",body:`
<div class="learning"><strong>Після цього розділу ви зможете</strong><ul><li>назвати типові сфери застосування Deep Learning;</li><li>пояснити, які типи даних використовуються в кожній сфері;</li><li>відрізнити вхідні дані, задачу та результат моделі.</li></ul></div>
<h3>Deep Learning особливо сильне там, де дані складні</h3><p>Зображення, відео, мовлення, текст і сигнали містять велику кількість взаємопов’язаних ознак. Глибокі нейронні мережі можуть автоматично формувати корисні представлення з таких даних.</p>
<div class="application-grid">
<article class="application-card"><img src="assets/images/section6/computer-vision.jpg" alt="Повітряна платформа збирає візуальні дані"><div><b>Computer Vision</b><p><strong>Вхід:</strong> зображення або відео.</p><p><strong>Задачі:</strong> класифікація, виявлення об’єктів, сегментація, аналіз сцени.</p><p><strong>Результат:</strong> клас, координати, маска або опис.</p></div></article>
<article class="application-card"><img src="assets/images/section6/speech-operator.jpg" alt="Операторка працює з аудіоданими"><div><b>Speech</b><p><strong>Вхід:</strong> аудіосигнал.</p><p><strong>Задачі:</strong> розпізнавання мовлення, синтез голосу, визначення характеристик звуку.</p><p><strong>Результат:</strong> текст, аудіо або клас.</p></div></article>
<article class="application-card"><img src="assets/images/section6/language-analysis.jpg" alt="Аналітикиня працює з цифровою інформацією"><div><b>Language</b><p><strong>Вхід:</strong> текстові послідовності.</p><p><strong>Задачі:</strong> класифікація, переклад, узагальнення, пошук і генерація.</p><p><strong>Результат:</strong> текст, категорія або структурована відповідь.</p></div></article>
<article class="application-card"><img src="assets/images/section6/signal-analysis.jpg" alt="Технічна платформа як джерело сенсорних сигналів"><div><b>Signals</b><p><strong>Вхід:</strong> часові ряди та сенсорні потоки.</p><p><strong>Задачі:</strong> виявлення закономірностей, аномалій, класифікація сигналів.</p><p><strong>Результат:</strong> попередження, клас або прогноз.</p></div></article>
</div>
<h3>Одна логіка — різні дані</h3><div class="applications-flow"><span>Data</span><b>→</b><span>Neural network</span><b>→</b><span>Task-specific output</span></div>
<p>Архітектура мережі, спосіб підготовки даних і метрики оцінювання залежать від задачі. Не існує однієї нейронної мережі, яка автоматично є найкращою для всіх типів даних.</p>
<div class="takeaway"><strong>Важливо:</strong> якісний результат залежить не тільки від моделі, а й від даних, метрик, обчислювальних ресурсів і людського контролю.</div>
<div class="check"><h3>Міні-перевірка</h3><p><strong>Який тип вхідних даних найбільш природний для Speech-моделі?</strong></p><button class="answer" data-correct="0">Координати таблиці</button><button class="answer" data-correct="1">Аудіосигнал</button><button class="answer" data-correct="0">Лише назва файлу</button><p class="feedback"></p></div>
<div class="takeaway"><strong>Далі:</strong> у наступному розділі застосуємо ці ідеї в інтерактивному сценарії та оберемо підхід для конкретної задачі.</div>`},
{title:"Інтерактивний сценарій",lead:"Від задачі до вибору підходу: дані → модель → перевірка результату",body:`
<div class="learning">
  <strong>Після цього розділу ви зможете</strong>
  <ul>
    <li>визначити, коли Deep Learning є доречним підходом;</li>
    <li>пов’язати тип даних із задачею моделі;</li>
    <li>обґрунтувати роль людини у перевірці результату.</li>
  </ul>
</div>

<h3>Ситуація</h3>
<p>Аналітичній групі потрібно автоматично розподіляти велику колекцію аерознімків за відомими категоріями. Даних достатньо, а корисні ознаки складно описати набором простих ручних правил.</p>

<div class="scenario-assets">
  <figure><img src="assets/images/section7/scenario-aerial.jpg" alt="Аерознімок як приклад візуальних даних"><figcaption>Вхідні дані: велика колекція зображень.</figcaption></figure>
  <figure><img src="assets/images/section7/scenario-map.svg" alt="Ілюстративна карта для геопросторового контексту"><figcaption>Контекст: місце та середовище можуть бути додатковими ознаками.</figcaption></figure>
  <figure><img src="assets/images/section7/scenario-analyst.jpg" alt="Аналітикиня перевіряє результати моделі"><figcaption>Human-in-the-loop: людина перевіряє та інтерпретує результат.</figcaption></figure>
</div>

<h3>Крок 1. Який підхід обрати?</h3>
<div class="scenario-step">
  <button class="scenario-choice" data-scenario="approach" data-value="rules">Створити вручну правило для кожного можливого зображення</button>
  <button class="scenario-choice" data-scenario="approach" data-value="learn">Навчити модель знаходити закономірності на прикладах</button>
  <button class="scenario-choice" data-scenario="approach" data-value="ignore">Не використовувати дані для навчання</button>
  <div class="scenario-feedback" id="scenarioApproachFeedback"></div>
</div>

<h3>Крок 2. Який тип задачі це найбільше нагадує?</h3>
<div class="scenario-step">
  <button class="scenario-choice" data-scenario="task" data-value="classification">Класифікація зображень</button>
  <button class="scenario-choice" data-scenario="task" data-value="speech">Розпізнавання мовлення</button>
  <button class="scenario-choice" data-scenario="task" data-value="database">Зберігання файлів</button>
  <div class="scenario-feedback" id="scenarioTaskFeedback"></div>
</div>

<h3>Крок 3. Що робити з результатом моделі?</h3>
<div class="scenario-step">
  <button class="scenario-choice" data-scenario="oversight" data-value="accept">Автоматично приймати будь-який прогноз як правильний</button>
  <button class="scenario-choice" data-scenario="oversight" data-value="review">Перевіряти результати, особливо сумнівні випадки</button>
  <button class="scenario-choice" data-scenario="oversight" data-value="hide">Не показувати людині метрики й помилки</button>
  <div class="scenario-feedback" id="scenarioOversightFeedback"></div>
</div>

<div class="takeaway"><strong>Правильна логіка:</strong> складні візуальні дані + достатня кількість прикладів → навчання моделі → оцінювання → людська перевірка результатів.</div>

<div class="check">
  <h3>Міні-перевірка</h3>
  <p><strong>Чому в цій ситуації Deep Learning може бути доречним?</strong></p>
  <button class="answer" data-correct="0">Бо мережа не потребує даних</button>
  <button class="answer" data-correct="1">Бо ознаки складно описати вручну, а прикладів для навчання достатньо</button>
  <button class="answer" data-correct="0">Бо будь-яка задача завжди потребує Deep Learning</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Далі:</strong> у Knowledge Check перевіримо ключові поняття всього модуля.</div>`},
{title:"Knowledge Check",lead:"Перевірте ключові поняття перед підсумковим оцінюванням",body:`
<div class="learning">
  <strong>Мета перевірки</strong>
  <p>П’ять коротких завдань охоплюють ключові поняття модуля: AI/ML/DL, штучний нейрон, шари мережі, навчання та застосування.</p>
</div>

<div class="knowledge-check" id="knowledgeCheck">
  <article class="kc-card" data-kc-q="q1">
    <span class="kc-number">1</span>
    <h3>Що є підмножиною Machine Learning?</h3>
    <button class="kc-option" data-value="a">Deep Learning</button>
    <button class="kc-option" data-value="b">Усі бази даних</button>
    <button class="kc-option" data-value="c">Будь-яка комп’ютерна програма</button>
    <p class="kc-feedback"></p>
  </article>

  <article class="kc-card" data-kc-q="q2">
    <span class="kc-number">2</span>
    <h3>Що визначає силу впливу окремого входу на нейрон?</h3>
    <button class="kc-option" data-value="a">Назва змінної</button>
    <button class="kc-option" data-value="b">Вага входу</button>
    <button class="kc-option" data-value="c">Кількість шарів у мережі</button>
    <p class="kc-feedback"></p>
  </article>

  <article class="kc-card kc-match" data-kc-q="q3">
    <span class="kc-number">3</span>
    <h3>Зіставте поняття з його роллю</h3>
    <label>Inputs
      <select data-match="inputs">
        <option value="">Оберіть...</option>
        <option value="numbers">Числові значення, що надходять у нейрон</option>
        <option value="importance">Коефіцієнти важливості входів</option>
        <option value="shift">Додаткове зміщення</option>
      </select>
    </label>
    <label>Weights
      <select data-match="weights">
        <option value="">Оберіть...</option>
        <option value="numbers">Числові значення, що надходять у нейрон</option>
        <option value="importance">Коефіцієнти важливості входів</option>
        <option value="shift">Додаткове зміщення</option>
      </select>
    </label>
    <label>Bias
      <select data-match="bias">
        <option value="">Оберіть...</option>
        <option value="numbers">Числові значення, що надходять у нейрон</option>
        <option value="importance">Коефіцієнти важливості входів</option>
        <option value="shift">Додаткове зміщення</option>
      </select>
    </label>
    <p class="kc-feedback"></p>
  </article>

  <article class="kc-card" data-kc-q="q4">
    <span class="kc-number">4</span>
    <h3>Яка послідовність правильно описує навчання мережі?</h3>
    <button class="kc-option" data-value="a">Forward pass → Loss → Backpropagation → Update</button>
    <button class="kc-option" data-value="b">Update → Delete data → Prediction</button>
    <button class="kc-option" data-value="c">Loss → Input → Storage → Output</button>
    <p class="kc-feedback"></p>
  </article>

  <article class="kc-card" data-kc-q="q5">
    <span class="kc-number">5</span>
    <h3>Які дані є природним входом для Speech-моделі?</h3>
    <button class="kc-option" data-value="a">Аудіосигнал</button>
    <button class="kc-option" data-value="b">Лише ім’я файлу</button>
    <button class="kc-option" data-value="c">Координати комірок таблиці</button>
    <p class="kc-feedback"></p>
  </article>

  <div class="kc-actions">
    <button class="primary" data-kc-submit>Перевірити відповіді</button>
    <button class="secondary" data-kc-retry hidden>Спробувати ще раз</button>
  </div>
  <div class="kc-result" id="kcResult" aria-live="polite"></div>
</div>

<div class="takeaway"><strong>Далі:</strong> після цієї самоперевірки переходьте до Final Assessment.</div>`},
{title:"Final Assessment",lead:"Підсумкове оцінювання знань — 5 запитань, прохідний рівень 4/5",body:`
<div class="assessment-intro">
  <div>
    <span class="assessment-badge">FINAL</span>
    <h3>Підсумкова перевірка</h3>
    <p>Оцініть, наскільки добре ви засвоїли ключові поняття модуля. Потрібно відповісти на всі 5 запитань.</p>
  </div>
  <div class="assessment-rules">
    <div><b>5</b><span>запитань</span></div>
    <div><b>4/5</b><span>прохідний рівень</span></div>
    <div><b>80%</b><span>мінімальний результат</span></div>
  </div>
</div>
<div id="assessment"></div>`},
{title:"Summary",lead:"Підсумуємо головні ідеї курсу й зберемо їх у цілісну картину",body:`
<div class="summary summary-enhanced">
  <div class="summary-complete">
    <span class="summary-check">✓</span>
    <div><h3>Ви завершили навчальний модуль</h3><p>Тепер окремі поняття — AI, ML, Deep Learning, нейрон, шари та навчання — можна побачити як одну послідовну систему.</p></div>
  </div>

  <figure class="course-figure">
    <img src="assets/images/section10/course-map.svg" alt="Карта понять курсу від AI і ML до Deep Learning, нейрона, навчання та застосувань">
    <figcaption>Карта курсу: від загальної сфери AI до механізмів Deep Learning і практичних застосувань.</figcaption>
  </figure>

  <h3>5 ключових висновків</h3>
  <div class="summary-grid">
    <article><span>1</span><b>Deep Learning є частиною Machine Learning</b><p>AI — ширша сфера, ML навчається на даних, а DL використовує багатошарові нейронні мережі.</p></article>
    <article><span>2</span><b>Нейрон працює з числами</b><p>Inputs, weights, bias та activation разом формують вихід нейрона.</p></article>
    <article><span>3</span><b>Шари будують представлення</b><p>Ранні шари реагують на прості ознаки, глибші — комбінують їх у складніші.</p></article>
    <article><span>4</span><b>Навчання — це цикл</b><p>Forward pass → loss → backpropagation → update. Цикл повторюється багато разів.</p></article>
    <article><span>5</span><b>Якість залежить не лише від моделі</b><p>Дані, метрики, обчислювальні ресурси та людський контроль так само важливі.</p></article>
  </div>

  <h3>Тепер ви можете</h3>
  <div class="summary-can">
    <div>✓ пояснити різницю між AI, ML і DL;</div>
    <div>✓ описати роботу штучного нейрона;</div>
    <div>✓ пояснити роль input, hidden та output layers;</div>
    <div>✓ описати базовий цикл навчання мережі;</div>
    <div>✓ навести приклади застосування Deep Learning.</div>
  </div>

  <div class="summary-reflection">
    <strong>Запитання для самоперевірки</strong>
    <p>Чи можете ви своїми словами пояснити, як дані проходять шлях від входу в мережу до прогнозу та як модель змінює себе під час навчання?</p>
  </div>

  <div class="takeaway"><strong>Головна думка курсу:</strong> Deep Learning — це не «магія», а послідовність математичних перетворень, які навчаються на даних. Корисність системи визначається не лише архітектурою, а й якістю даних, оцінюванням і відповідальним людським контролем.</div>

  <div class="summary-actions">
    <button class="primary summary-review" data-review-course>Переглянути курс ще раз</button>
  </div>
</div>`}
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

<h3>Another example: data from an aerial platform</h3>
<div class="photo-explain">
  <img src="assets/images/section2/drone-over-desert.jpg" alt="Uncrewed aerial platform collecting visual data">
  <div>
    <p>An aerial camera produces a large amount of numerical image data. In the early stages of a network, individual neurons work only with small parts of those values.</p>
    <p>Even a complex image therefore begins as simple numerical inputs to a neuron.</p>
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
{title:"Neural Network Architecture",lead:"How individual neurons are organised into layers and build increasingly complex representations",body:`
<div class="learning">
  <strong>After this section, you will be able to</strong>
  <ul>
    <li>distinguish input, hidden, and output layers;</li>
    <li>explain why a network is called “deep”;</li>
    <li>describe how simple features become more complex representations.</li>
  </ul>
</div>

<h3>From one neuron to a network</h3>
<p>A single neuron performs a simple transformation. In a neural network, many neurons are organised into <strong>layers</strong>. The output of one layer becomes the input to the next, allowing the network to build increasingly complex representations of data.</p>

<figure class="course-figure">
  <img src="assets/images/section4/network-layers.svg" alt="Neural network diagram with input, hidden, and output layers">
  <figcaption>Typical structure: input layer → one or more hidden layers → output layer.</figcaption>
</figure>

<h3>Explore the layers</h3>
<div class="layer-tabs" aria-label="Interactive neural network layers">
  <button class="layer-tab active" data-layer="input">Input layer</button>
  <button class="layer-tab" data-layer="hidden">Hidden layers</button>
  <button class="layer-tab" data-layer="output">Output layer</button>
</div>
<div class="layer-explain" id="layerExplain"></div>

<h3>Input layer — receives data</h3>
<p>The input layer receives numerical values. For an image, these may be pixels or prepared features. For audio, they may be numerical signal characteristics. For tabular data, they may be values of individual variables.</p>

<h3>Hidden layers — build representations</h3>
<p>Hidden layers are called “hidden” because they sit between input and output. This is where a network gradually combines simple features into richer representations.</p>

<figure class="course-figure">
  <img src="assets/images/section4/feature-hierarchy.svg" alt="Feature hierarchy from pixels to edges, shapes, and an object">
  <figcaption>Example of a feature hierarchy: from simple numerical signals to a richer representation of an object.</figcaption>
</figure>

<h3>What does “deep” mean?</h3>
<p>A network is called <strong>deep</strong> when it contains several hidden layers. Each layer performs another transformation. Depth therefore refers to the number of successive representation stages, not to “intelligence” by itself.</p>

<h3>Real-world context: analysing visual data</h3>
<div class="photo-explain">
  <img src="assets/images/section2/female-analyst-command-center.jpg" alt="Analyst working with map and visual data">
  <div>
    <p>In computer vision, a person sees the complete scene immediately. A neural network reaches its result progressively: early layers respond to basic features, later layers combine them, and the output layer produces a prediction.</p>
    <p><strong>Example:</strong> an image classifier may first respond to edges, then to shapes, and deeper layers may respond to characteristic parts of an object.</p>
  </div>
</div>

<div class="takeaway"><strong>Main idea:</strong> a deep network does not recognise an object all at once. It builds a representation step by step through a sequence of layers.</div>

<div class="check">
  <h3>Mini check</h3>
  <p><strong>What best describes hidden layers?</strong></p>
  <button class="answer" data-correct="0">They only store input files</button>
  <button class="answer" data-correct="1">They progressively build more complex representations of data</button>
  <button class="answer" data-correct="0">They only display the final result to the user</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Next:</strong> now that we understand the network structure, the next section explains how it learns — by making predictions, measuring error, and updating parameters.</div>`},
{title:"How a Neural Network Learns",lead:"Forward pass → Loss → Backpropagation → Update → Repeat",body:`
<div class="learning"><strong>After this section, you will be able to</strong><ul><li>describe the basic training loop of a neural network;</li><li>explain the roles of forward pass, loss, backpropagation, and the optimizer;</li><li>understand why training is repeated many times.</li></ul></div>
<h3>Training is a repeated cycle</h3><p>A neural network does not receive the correct weights immediately. It starts with initial parameters, makes a prediction, compares it with the correct answer, measures error, and gradually adjusts its weights.</p>
<figure class="course-figure"><img src="assets/images/section5/training-cycle.svg" alt="Neural network training cycle: data, forward pass, loss, backpropagation, weight update"><figcaption>The basic training loop is repeated many times across different examples.</figcaption></figure>
<h3>Explore the training steps</h3><div class="training-tabs" aria-label="Neural network training steps"><button class="training-tab active" data-step="data">Data</button><button class="training-tab" data-step="forward">Forward pass</button><button class="training-tab" data-step="loss">Loss</button><button class="training-tab" data-step="backprop">Backpropagation</button><button class="training-tab" data-step="update">Update</button></div><div class="training-explain" id="trainingExplain"></div>
<h3>Forward pass — the model makes a prediction</h3><p>Input data passes through all network layers. Each layer performs its transformation, and the output layer produces a prediction.</p>
<h3>Loss — measure the error</h3><p>A <strong>loss function</strong> compares the model's prediction with the correct answer and returns a number representing error. A lower loss usually means a better fit to the training examples.</p>
<figure class="course-figure"><img src="assets/images/section5/loss-curve.svg" alt="Loss decreasing during training"><figcaption>During successful training, loss often decreases over time, although real curves can be irregular.</figcaption></figure>
<h3>Backpropagation — determine what should change</h3><p>Backpropagation calculates how network parameters contributed to the error. This provides the direction in which the weights should be adjusted.</p>
<h3>Optimizer — update the weights</h3><p>The optimizer uses the calculated gradients to change the weights in small steps. The network then makes another prediction, and the cycle repeats.</p>
<div class="photo-explain"><img src="assets/images/section5/training-workstation.jpg" alt="Analyst monitoring model training"><div><p>In real work, training involves monitoring metrics, loss curves, data quality, and whether the model is actually improving.</p><p><strong>Humans remain in the loop:</strong> they define the task, select data and metrics, set experiment conditions, and evaluate the result.</p></div></div>
<div class="takeaway"><strong>Main idea:</strong> training is not a single action. It is repeated prediction, error measurement, and parameter adjustment.</div>
<div class="check"><h3>Mini check</h3><p><strong>What happens immediately after loss is calculated?</strong></p><button class="answer" data-correct="0">The model deletes the data</button><button class="answer" data-correct="1">The system calculates how parameters contributed to the error</button><button class="answer" data-correct="0">Training always stops</button><p class="feedback"></p></div>
<div class="takeaway"><strong>Next:</strong> we will now look at practical Deep Learning applications in vision, speech, language, and signals.</div>`},
{title:"Applications of Deep Learning",lead:"Computer Vision, Speech, Language, and Signals — four common application areas",body:`
<div class="learning"><strong>After this section, you will be able to</strong><ul><li>name common Deep Learning application areas;</li><li>explain which types of data are used in each area;</li><li>distinguish inputs, tasks, and model outputs.</li></ul></div>
<h3>Deep Learning is especially useful for complex data</h3><p>Images, video, speech, text, and signals contain many interacting features. Deep neural networks can automatically build useful representations from these data types.</p>
<div class="application-grid">
<article class="application-card"><img src="assets/images/section6/computer-vision.jpg" alt="Aerial platform collecting visual data"><div><b>Computer Vision</b><p><strong>Input:</strong> images or video.</p><p><strong>Tasks:</strong> classification, object detection, segmentation, scene analysis.</p><p><strong>Output:</strong> a class, coordinates, a mask, or a description.</p></div></article>
<article class="application-card"><img src="assets/images/section6/speech-operator.jpg" alt="Operator working with audio data"><div><b>Speech</b><p><strong>Input:</strong> audio signals.</p><p><strong>Tasks:</strong> speech recognition, synthesis, sound-characteristic analysis.</p><p><strong>Output:</strong> text, audio, or a class.</p></div></article>
<article class="application-card"><img src="assets/images/section6/language-analysis.jpg" alt="Analyst working with digital information"><div><b>Language</b><p><strong>Input:</strong> text sequences.</p><p><strong>Tasks:</strong> classification, translation, summarisation, retrieval, and generation.</p><p><strong>Output:</strong> text, a category, or a structured answer.</p></div></article>
<article class="application-card"><img src="assets/images/section6/signal-analysis.jpg" alt="Technical platform as a source of sensor signals"><div><b>Signals</b><p><strong>Input:</strong> time series and sensor streams.</p><p><strong>Tasks:</strong> pattern detection, anomaly detection, signal classification.</p><p><strong>Output:</strong> an alert, class, or prediction.</p></div></article>
</div>
<h3>One logic — different data</h3><div class="applications-flow"><span>Data</span><b>→</b><span>Neural network</span><b>→</b><span>Task-specific output</span></div>
<p>The network architecture, data preparation, and evaluation metrics depend on the task. There is no single neural network that is automatically best for every data type.</p>
<div class="takeaway"><strong>Important:</strong> high-quality outcomes depend not only on the model, but also on data, metrics, computing resources, and human oversight.</div>
<div class="check"><h3>Mini check</h3><p><strong>Which input type is most natural for a Speech model?</strong></p><button class="answer" data-correct="0">Spreadsheet coordinates</button><button class="answer" data-correct="1">An audio signal</button><button class="answer" data-correct="0">Only the file name</button><p class="feedback"></p></div>
<div class="takeaway"><strong>Next:</strong> in the next section, we will apply these ideas in an interactive scenario and choose an approach for a specific task.</div>`},
{title:"Interactive Scenario",lead:"From problem to approach: data → model → result review",body:`
<div class="learning">
  <strong>After this section, you will be able to</strong>
  <ul>
    <li>identify when Deep Learning may be an appropriate approach;</li>
    <li>connect the data type with the model task;</li>
    <li>justify the role of human review.</li>
  </ul>
</div>

<h3>Situation</h3>
<p>An analytical team needs to automatically assign a large collection of aerial images to known categories. There is enough training data, while useful features are difficult to express as a small set of hand-written rules.</p>

<div class="scenario-assets">
  <figure><img src="assets/images/section7/scenario-aerial.jpg" alt="Aerial image as an example of visual input data"><figcaption>Input: a large collection of images.</figcaption></figure>
  <figure><img src="assets/images/section7/scenario-map.svg" alt="Illustrative map providing geospatial context"><figcaption>Context: location and environment may provide additional features.</figcaption></figure>
  <figure><img src="assets/images/section7/scenario-analyst.jpg" alt="Analyst reviewing model outputs"><figcaption>Human-in-the-loop: a person reviews and interprets model results.</figcaption></figure>
</div>

<h3>Step 1. Which approach should you choose?</h3>
<div class="scenario-step">
  <button class="scenario-choice" data-scenario="approach" data-value="rules">Write a manual rule for every possible image</button>
  <button class="scenario-choice" data-scenario="approach" data-value="learn">Train a model to learn patterns from examples</button>
  <button class="scenario-choice" data-scenario="approach" data-value="ignore">Do not use data for training</button>
  <div class="scenario-feedback" id="scenarioApproachFeedback"></div>
</div>

<h3>Step 2. Which task type does this most closely resemble?</h3>
<div class="scenario-step">
  <button class="scenario-choice" data-scenario="task" data-value="classification">Image classification</button>
  <button class="scenario-choice" data-scenario="task" data-value="speech">Speech recognition</button>
  <button class="scenario-choice" data-scenario="task" data-value="database">File storage</button>
  <div class="scenario-feedback" id="scenarioTaskFeedback"></div>
</div>

<h3>Step 3. What should happen with model outputs?</h3>
<div class="scenario-step">
  <button class="scenario-choice" data-scenario="oversight" data-value="accept">Automatically accept every prediction as correct</button>
  <button class="scenario-choice" data-scenario="oversight" data-value="review">Review results, especially uncertain cases</button>
  <button class="scenario-choice" data-scenario="oversight" data-value="hide">Hide metrics and errors from the human reviewer</button>
  <div class="scenario-feedback" id="scenarioOversightFeedback"></div>
</div>

<div class="takeaway"><strong>Correct logic:</strong> complex visual data + sufficient examples → model training → evaluation → human review of results.</div>

<div class="check">
  <h3>Mini check</h3>
  <p><strong>Why can Deep Learning be appropriate in this situation?</strong></p>
  <button class="answer" data-correct="0">Because the network does not need data</button>
  <button class="answer" data-correct="1">Because useful features are difficult to hand-code and sufficient training examples are available</button>
  <button class="answer" data-correct="0">Because every task always needs Deep Learning</button>
  <p class="feedback"></p>
</div>

<div class="takeaway"><strong>Next:</strong> the Knowledge Check will review the key ideas from the whole module.</div>`},
{title:"Knowledge Check",lead:"Review the key concepts before the final assessment",body:`
<div class="learning">
  <strong>Check objective</strong>
  <p>Five short activities cover the main ideas from the module: AI/ML/DL, the artificial neuron, network layers, training, and applications.</p>
</div>

<div class="knowledge-check" id="knowledgeCheck">
  <article class="kc-card" data-kc-q="q1">
    <span class="kc-number">1</span>
    <h3>Which is a subset of Machine Learning?</h3>
    <button class="kc-option" data-value="a">Deep Learning</button>
    <button class="kc-option" data-value="b">All databases</button>
    <button class="kc-option" data-value="c">Any computer program</button>
    <p class="kc-feedback"></p>
  </article>

  <article class="kc-card" data-kc-q="q2">
    <span class="kc-number">2</span>
    <h3>What determines how strongly an individual input influences a neuron?</h3>
    <button class="kc-option" data-value="a">The variable name</button>
    <button class="kc-option" data-value="b">The input weight</button>
    <button class="kc-option" data-value="c">The number of network layers</button>
    <p class="kc-feedback"></p>
  </article>

  <article class="kc-card kc-match" data-kc-q="q3">
    <span class="kc-number">3</span>
    <h3>Match each concept to its role</h3>
    <label>Inputs
      <select data-match="inputs">
        <option value="">Choose...</option>
        <option value="numbers">Numerical values entering the neuron</option>
        <option value="importance">Importance coefficients for inputs</option>
        <option value="shift">An additional shift</option>
      </select>
    </label>
    <label>Weights
      <select data-match="weights">
        <option value="">Choose...</option>
        <option value="numbers">Numerical values entering the neuron</option>
        <option value="importance">Importance coefficients for inputs</option>
        <option value="shift">An additional shift</option>
      </select>
    </label>
    <label>Bias
      <select data-match="bias">
        <option value="">Choose...</option>
        <option value="numbers">Numerical values entering the neuron</option>
        <option value="importance">Importance coefficients for inputs</option>
        <option value="shift">An additional shift</option>
      </select>
    </label>
    <p class="kc-feedback"></p>
  </article>

  <article class="kc-card" data-kc-q="q4">
    <span class="kc-number">4</span>
    <h3>Which sequence correctly describes network training?</h3>
    <button class="kc-option" data-value="a">Forward pass → Loss → Backpropagation → Update</button>
    <button class="kc-option" data-value="b">Update → Delete data → Prediction</button>
    <button class="kc-option" data-value="c">Loss → Input → Storage → Output</button>
    <p class="kc-feedback"></p>
  </article>

  <article class="kc-card" data-kc-q="q5">
    <span class="kc-number">5</span>
    <h3>Which data type is a natural input for a Speech model?</h3>
    <button class="kc-option" data-value="a">An audio signal</button>
    <button class="kc-option" data-value="b">Only a file name</button>
    <button class="kc-option" data-value="c">Spreadsheet cell coordinates</button>
    <p class="kc-feedback"></p>
  </article>

  <div class="kc-actions">
    <button class="primary" data-kc-submit>Check answers</button>
    <button class="secondary" data-kc-retry hidden>Try again</button>
  </div>
  <div class="kc-result" id="kcResult" aria-live="polite"></div>
</div>

<div class="takeaway"><strong>Next:</strong> after this self-check, continue to the Final Assessment.</div>`},
{title:"Final Assessment",lead:"Final knowledge assessment — 5 questions, passing score 4/5",body:`
<div class="assessment-intro">
  <div>
    <span class="assessment-badge">FINAL</span>
    <h3>Final knowledge check</h3>
    <p>Assess how well you understand the key ideas from the module. All 5 questions must be answered.</p>
  </div>
  <div class="assessment-rules">
    <div><b>5</b><span>questions</span></div>
    <div><b>4/5</b><span>passing score</span></div>
    <div><b>80%</b><span>minimum result</span></div>
  </div>
</div>
<div id="assessment"></div>`},
{title:"Summary",lead:"Bring the main ideas together into one coherent picture",body:`
<div class="summary summary-enhanced">
  <div class="summary-complete">
    <span class="summary-check">✓</span>
    <div><h3>You completed the learning module</h3><p>You can now connect AI, ML, Deep Learning, neurons, layers, and training as parts of one coherent system.</p></div>
  </div>

  <figure class="course-figure">
    <img src="assets/images/section10/course-map.svg" alt="Course concept map from AI and ML to Deep Learning, neurons, training, and applications">
    <figcaption>Course map: from the broader AI landscape to Deep Learning mechanisms and practical applications.</figcaption>
  </figure>

  <h3>5 key takeaways</h3>
  <div class="summary-grid">
    <article><span>1</span><b>Deep Learning is part of Machine Learning</b><p>AI is the broad field, ML learns from data, and DL uses multi-layer neural networks.</p></article>
    <article><span>2</span><b>A neuron works with numbers</b><p>Inputs, weights, bias, and activation combine to produce an output.</p></article>
    <article><span>3</span><b>Layers build representations</b><p>Early layers respond to simple features; deeper layers combine them into richer ones.</p></article>
    <article><span>4</span><b>Training is a cycle</b><p>Forward pass → loss → backpropagation → update, repeated many times.</p></article>
    <article><span>5</span><b>Quality depends on more than the model</b><p>Data, metrics, compute, and human oversight are equally important.</p></article>
  </div>

  <h3>You can now</h3>
  <div class="summary-can">
    <div>✓ explain the difference between AI, ML, and DL;</div>
    <div>✓ describe how an artificial neuron works;</div>
    <div>✓ explain input, hidden, and output layers;</div>
    <div>✓ describe the basic neural-network training loop;</div>
    <div>✓ give examples of Deep Learning applications.</div>
  </div>

  <div class="summary-reflection">
    <strong>Self-check question</strong>
    <p>Can you explain in your own words how data moves from network input to a prediction, and how the model changes itself during training?</p>
  </div>

  <div class="takeaway"><strong>Main course message:</strong> Deep Learning is not “magic”; it is a sequence of mathematical transformations learned from data. A useful system depends not only on architecture, but also on data quality, evaluation, and responsible human oversight.</div>

  <div class="summary-actions">
    <button class="primary summary-review" data-review-course>Review the course</button>
  </div>
</div>`}
]}}
;
const questions={
uk:[
  {q:"Яке твердження найточніше описує співвідношення AI, ML і Deep Learning?",a:["Deep Learning ⊂ Machine Learning ⊂ Artificial Intelligence","AI є підмножиною Deep Learning","Machine Learning і Deep Learning — повністю однакові поняття"],correct:0,why:"Deep Learning є частиною Machine Learning, а Machine Learning — частиною ширшої сфери Artificial Intelligence."},
  {q:"Що відбувається всередині штучного нейрона?",a:["Входи множаться на ваги, додається bias, після чого застосовується activation","Нейрон лише зберігає вхідні дані","Нейрон автоматично додає нові навчальні приклади"],correct:0,why:"Базовий нейрон формує зважену суму входів, додає bias і пропускає результат через функцію активації."},
  {q:"Чому hidden layers важливі у глибокій нейронній мережі?",a:["Вони поступово формують складніші представлення даних","Вони лише показують фінальний результат","Вони замінюють необхідність у навчальних даних"],correct:0,why:"Приховані шари комбінують прості ознаки в дедалі складніші представлення."},
  {q:"Яка послідовність правильно описує основний цикл навчання?",a:["Forward pass → Loss → Backpropagation → Update","Loss → Delete data → Forward pass","Update → Storage → Output"],correct:0,why:"Спочатку мережа робить прогноз, потім вимірюється loss, обчислюються градієнти і оновлюються параметри."},
  {q:"Аналітична група використовує модель для класифікації великої кількості зображень. Яка практика є найправильнішою?",a:["Оцінювати модель на відповідних даних і перевіряти сумнівні результати","Автоматично вважати кожен прогноз правильним","Не використовувати метрики, якщо модель уже навчена"],correct:0,why:"Навіть після навчання модель потребує оцінювання, контролю якості та людської перевірки у відповідних випадках."}
],
en:[
  {q:"Which statement best describes the relationship between AI, ML, and Deep Learning?",a:["Deep Learning ⊂ Machine Learning ⊂ Artificial Intelligence","AI is a subset of Deep Learning","Machine Learning and Deep Learning are exactly the same"],correct:0,why:"Deep Learning is part of Machine Learning, which is itself part of the broader field of Artificial Intelligence."},
  {q:"What happens inside an artificial neuron?",a:["Inputs are weighted, bias is added, and an activation function is applied","The neuron only stores input data","The neuron automatically creates new training examples"],correct:0,why:"A basic neuron forms a weighted sum of inputs, adds bias, and passes the result through an activation function."},
  {q:"Why are hidden layers important in a deep neural network?",a:["They progressively build more complex representations of data","They only display the final output","They remove the need for training data"],correct:0,why:"Hidden layers combine simpler features into progressively richer representations."},
  {q:"Which sequence correctly describes the basic training loop?",a:["Forward pass → Loss → Backpropagation → Update","Loss → Delete data → Forward pass","Update → Storage → Output"],correct:0,why:"The network predicts, loss is measured, gradients are calculated, and parameters are updated."},
  {q:"An analytical team uses a model to classify a large image collection. Which practice is most appropriate?",a:["Evaluate the model on relevant data and review uncertain outputs","Automatically treat every prediction as correct","Stop using metrics once the model has been trained"],correct:0,why:"A trained model still requires evaluation, quality control, and human review where appropriate."}
]
};
let lang=localStorage.getItem("courseLang")||"uk",current=0,score=0;
const $=id=>document.getElementById(id);
function assessment(){
  const box=$("assessment");if(!box)return;
  score=0;
  const qs=questions[lang];
  box.innerHTML=
    '<div class="assessment-progress"><span>'+ (lang==="uk"?"Відповіді":"Answered") +': <b id="assessmentAnswered">0/5</b></span><span>'+ (lang==="uk"?"Потрібно для успіху: 4/5":"Pass mark: 4/5") +'</span></div>'+
    qs.map((q,i)=>`<article class="assessment-q" data-assessment-q="${i}">
      <div class="assessment-q-head"><span>${i+1}</span><p><strong>${q.q}</strong></p></div>
      <div class="assessment-options">${q.a.map((a,j)=>`<button class="assessment-answer" data-q="${i}" data-a="${j}">${a}</button>`).join("")}</div>
      <p class="assessment-feedback"></p>
    </article>`).join("")+
    `<div class="assessment-actions">
      <button id="submitAssessment" class="primary">${lang==="uk"?"Завершити оцінювання":"Submit assessment"}</button>
      <button id="retryAssessment" class="secondary" hidden>${lang==="uk"?"Спробувати ще раз":"Try again"}</button>
    </div>
    <div id="score" aria-live="polite"></div>`;

  const answered=()=>document.querySelectorAll(".assessment-answer.selected").length;
  const updateCounter=()=>{const n=answered();const el=$("assessmentAnswered");if(el)el.textContent=n+"/5"};

  document.querySelectorAll(".assessment-answer").forEach(b=>b.onclick=()=>{
    const card=b.closest(".assessment-q");
    card.querySelectorAll(".assessment-answer").forEach(x=>x.classList.remove("selected"));
    b.classList.add("selected");
    updateCounter();
  });

  $("submitAssessment").onclick=()=>{
    const selected=document.querySelectorAll(".assessment-answer.selected");
    if(selected.length<qs.length){
      $("score").innerHTML=`<div class="scorebox warning"><strong>${lang==="uk"?"Будь ласка, дайте відповідь на всі 5 запитань.":"Please answer all 5 questions before submitting."}</strong></div>`;
      return;
    }
    score=0;
    qs.forEach((q,i)=>{
      const card=document.querySelector(`.assessment-q[data-assessment-q="${i}"]`);
      const s=card.querySelector(".assessment-answer.selected");
      const ok=+s.dataset.a===q.correct;
      if(ok)score++;
      card.querySelectorAll(".assessment-answer").forEach(x=>{
        x.disabled=true;
        x.classList.remove("correct","wrong");
        if(+x.dataset.a===q.correct)x.classList.add("correct");
      });
      if(!ok)s.classList.add("wrong");
      const fb=card.querySelector(".assessment-feedback");
      fb.textContent=(ok?(lang==="uk"?"Правильно. ":"Correct. "):(lang==="uk"?"Неправильно. ":"Incorrect. "))+q.why;
      fb.className="assessment-feedback "+(ok?"ok":"retry");
    });
    const passed=score>=4;
    const pct=score*20;
    $("score").innerHTML=`<div class="scorebox ${passed?"passed":"failed"}">
      <div class="score-main"><strong>${score}/5 · ${pct}%</strong><span>${passed?(lang==="uk"?"Успішно":"Passed"):(lang==="uk"?"Потрібне повторення":"Review required")}</span></div>
      <p>${passed?(lang==="uk"?"Ви досягли прохідного рівня. Можна переходити до Summary.":"You reached the passing score. Continue to the Summary."):(lang==="uk"?"Перегляньте відповідні розділи та спробуйте оцінювання ще раз.":"Review the relevant sections and try the assessment again.")}</p>
    </div>`;
    $("submitAssessment").disabled=true;
    $("retryAssessment").hidden=false;
    localStorage.setItem("finalAssessmentScore",String(score));
    localStorage.setItem("finalAssessmentPassed",passed?"1":"0");
  };

  $("retryAssessment").onclick=()=>{
    score=0;
    document.querySelectorAll(".assessment-answer").forEach(x=>{x.disabled=false;x.classList.remove("selected","correct","wrong")});
    document.querySelectorAll(".assessment-feedback").forEach(x=>{x.textContent="";x.className="assessment-feedback"});
    $("score").innerHTML="";
    $("submitAssessment").disabled=false;
    $("retryAssessment").hidden=true;
    updateCounter();
  };
}
function bindAnswers(){document.querySelectorAll(".answer").forEach(btn=>btn.onclick=()=>{const ok=btn.dataset.correct==="1",f=btn.parentElement.querySelector(".feedback");f.textContent=ok?(lang==="uk"?"Правильно.":"Correct."):(lang==="uk"?"Не зовсім. Спробуйте ще раз.":"Not quite. Try again.");f.className=`feedback ${ok?"ok":"retry"}`})}
function bindNeuronParts(){const box=document.getElementById("neuronExplain");if(!box)return;const copy={uk:{inputs:"Inputs — числові значення, які надходять у нейрон.",weights:"Weights — коефіцієнти важливості кожного входу. Саме вони змінюються під час навчання.",bias:"Bias — додатковий параметр, що зміщує поріг реакції нейрона.",sum:"Weighted sum — сума всіх входів після множення на їхні ваги плюс bias.",activation:"Activation — нелінійне перетворення, яке допомагає мережі моделювати складні залежності.",output:"Output — числовий сигнал, який нейрон передає далі або використовує як прогноз."},en:{inputs:"Inputs are the numerical values entering the neuron.",weights:"Weights are importance coefficients for each input. They are adjusted during training.",bias:"Bias is an additional parameter that shifts the neuron's response threshold.",sum:"The weighted sum combines all weighted inputs and bias.",activation:"Activation is a non-linear transformation that lets a network model complex relationships.",output:"Output is the numerical signal passed to later neurons or used as a prediction."}};const renderPart=p=>{box.textContent=copy[lang][p]};document.querySelectorAll(".neuron-part").forEach(b=>b.onclick=()=>{document.querySelectorAll(".neuron-part").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderPart(b.dataset.part)});renderPart("inputs")}
function bindLayerTabs(){const box=document.getElementById("layerExplain");if(!box)return;const copy={uk:{input:"Input layer отримує початкові числові дані й передає їх далі у мережу.",hidden:"Hidden layers виконують послідовні перетворення й формують дедалі складніші представлення.",output:"Output layer перетворює фінальне представлення на прогноз, клас, значення або інший результат."},en:{input:"The input layer receives initial numerical data and passes it into the network.",hidden:"Hidden layers perform successive transformations and build increasingly complex representations.",output:"The output layer converts the final representation into a prediction, class, value, or other result."}};const show=k=>{box.textContent=copy[lang][k]};document.querySelectorAll(".layer-tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".layer-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");show(b.dataset.layer)});show("input")}
function bindTrainingTabs(){const box=document.getElementById("trainingExplain");if(!box)return;const copy={uk:{data:"Data — приклади, на яких мережа навчається.",forward:"Forward pass — дані проходять через мережу, яка формує прогноз.",loss:"Loss — числова оцінка того, наскільки прогноз відрізняється від правильної відповіді.",backprop:"Backpropagation — обчислення внеску параметрів мережі у помилку.",update:"Update — оптимізатор коригує ваги невеликими кроками."},en:{data:"Data are the examples used to train the network.",forward:"Forward pass moves data through the network to produce a prediction.",loss:"Loss is a numerical measure of how far the prediction is from the correct answer.",backprop:"Backpropagation calculates how network parameters contributed to the error.",update:"Update means the optimizer adjusts the weights in small steps."}};const show=k=>{box.textContent=copy[lang][k]};document.querySelectorAll(".training-tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".training-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");show(b.dataset.step)});show("data")}
function bindSummaryActions(){document.querySelectorAll("[data-review-course]").forEach(b=>b.onclick=()=>{current=0;render();window.scrollTo({top:0,behavior:"smooth"})})}
function bindScenarioChoices(){const copy={uk:{approach:{learn:["ok","Так. Коли ознаки складно описати вручну, а прикладів достатньо, навчання моделі є логічним вибором."],rules:["retry","Ручні правила можуть бути надто крихкими для великої різноманітності зображень."],ignore:["retry","Без навчальних прикладів модель не зможе вивчити потрібні закономірності."]},task:{classification:["ok","Так. Потрібно віднести кожне зображення до відомої категорії — це класифікація."],speech:["retry","Speech працює з аудіоданими, а тут основний вхід — зображення."],database:["retry","Зберігання файлів — це інфраструктурна задача, а не задача розпізнавання."]},oversight:{review:["ok","Так. Людина має перевіряти результати, особливо невпевнені або критичні випадки."],accept:["retry","Автоматичне прийняття будь-якого прогнозу ігнорує можливі помилки моделі."],hide:["retry","Без метрик і помилок складніше оцінити надійність моделі."]}},en:{approach:{learn:["ok","Correct. When features are hard to hand-code and enough examples exist, learning from data is a sensible approach."],rules:["retry","Hand-written rules may be too brittle for a wide variety of images."],ignore:["retry","Without training examples, the model cannot learn the required patterns."]},task:{classification:["ok","Correct. Assigning each image to a known category is a classification task."],speech:["retry","Speech systems use audio data, while the primary input here is imagery."],database:["retry","File storage is an infrastructure task, not a recognition task."]},oversight:{review:["ok","Correct. Human review is important, especially for uncertain or consequential cases."],accept:["retry","Automatically accepting every prediction ignores the possibility of model error."],hide:["retry","Without metrics and error information, reliability is harder to assess."]}}};document.querySelectorAll(".scenario-choice").forEach(b=>b.onclick=()=>{const group=b.dataset.scenario,val=b.dataset.value;document.querySelectorAll('.scenario-choice[data-scenario="'+group+'"]').forEach(x=>x.classList.remove("selected","correct","wrong"));b.classList.add("selected");const [state,msg]=copy[lang][group][val];b.classList.add(state==="ok"?"correct":"wrong");const ids={approach:"scenarioApproachFeedback",task:"scenarioTaskFeedback",oversight:"scenarioOversightFeedback"};const box=document.getElementById(ids[group]);if(box){box.textContent=msg;box.className="scenario-feedback "+state}})}
function bindKnowledgeCheck(){const root=document.getElementById("knowledgeCheck");if(!root)return;const answers={q1:"a",q2:"b",q4:"a",q5:"a"};const feedback={uk:{ok:"Правильно.",wrong:"Потрібно переглянути це поняття ще раз.",matchOk:"Усі відповідності правильні.",matchWrong:"Перевірте відповідності Inputs, Weights і Bias.",result:(s)=>`Результат: ${s}/5. ${s===5?"Відмінно — усі ключові поняття засвоєні.":s>=4?"Добре — можна переходити до Final Assessment.":"Рекомендовано ще раз переглянути відповідні розділи перед Final Assessment."}`},en:{ok:"Correct.",wrong:"Review this concept once more.",matchOk:"All matches are correct.",matchWrong:"Check the Inputs, Weights, and Bias matches.",result:(s)=>`Result: ${s}/5. ${s===5?"Excellent — all key concepts are correct.":s>=4?"Good — you can continue to the Final Assessment.":"Review the relevant sections before continuing to the Final Assessment."}`}};root.querySelectorAll(".kc-card:not(.kc-match) .kc-option").forEach(b=>b.onclick=()=>{const card=b.closest(".kc-card");card.querySelectorAll(".kc-option").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});const submit=root.querySelector("[data-kc-submit]"),retry=root.querySelector("[data-kc-retry]");submit.onclick=()=>{let score=0;root.querySelectorAll(".kc-card:not(.kc-match)").forEach(card=>{const q=card.dataset.kcQ,selected=card.querySelector(".kc-option.selected"),fb=card.querySelector(".kc-feedback"),ok=selected&&selected.dataset.value===answers[q];card.querySelectorAll(".kc-option").forEach(x=>x.classList.remove("correct","wrong"));if(selected)selected.classList.add(ok?"correct":"wrong");fb.textContent=ok?feedback[lang].ok:feedback[lang].wrong;fb.className="kc-feedback "+(ok?"ok":"retry");if(ok)score++});const match=root.querySelector('.kc-card[data-kc-q="q3"]');const vals={inputs:match.querySelector('[data-match="inputs"]').value,weights:match.querySelector('[data-match="weights"]').value,bias:match.querySelector('[data-match="bias"]').value};const mok=vals.inputs==="numbers"&&vals.weights==="importance"&&vals.bias==="shift";const mfb=match.querySelector(".kc-feedback");mfb.textContent=mok?feedback[lang].matchOk:feedback[lang].matchWrong;mfb.className="kc-feedback "+(mok?"ok":"retry");if(mok)score++;const result=document.getElementById("kcResult");result.textContent=feedback[lang].result(score);result.className="kc-result "+(score>=4?"ok":"retry");retry.hidden=false;submit.disabled=true};retry.onclick=()=>{root.querySelectorAll(".kc-option").forEach(x=>x.classList.remove("selected","correct","wrong"));root.querySelectorAll("select").forEach(s=>s.value="");root.querySelectorAll(".kc-feedback").forEach(f=>{f.textContent="";f.className="kc-feedback"});const result=document.getElementById("kcResult");result.textContent="";result.className="kc-result";retry.hidden=true;submit.disabled=false}}
function render(){const d=course[lang],s=d.sections[current];document.documentElement.lang=lang;$("heroTitle").textContent=lang==="uk"?"Основи глибокого навчання":"Fundamentals of Deep Learning";$("heroLead").textContent=lang==="uk"?"Від штучного нейрона до навчання нейронної мережі":"From an artificial neuron to neural-network learning";$("startBtn").textContent=d.start;$("prevLabel").textContent=d.prev;$("nextLabel").textContent=d.next;document.querySelectorAll("[data-lang]").forEach(x=>x.classList.toggle("active",x.dataset.lang===lang));if(!$("lesson").classList.contains("hidden")){$("sectionDots").innerHTML=Array.from({length:10},(_,i)=>`<i class="${i<=current?"done":""}"></i>`).join("");$("lessonNo").textContent=`${lang==="uk"?"РОЗДІЛ":"SECTION"} ${String(current+1).padStart(2,"0")} / 10`;$("lessonTitle").textContent=s.title;$("lessonLead").textContent=s.lead;$("lessonBody").innerHTML=s.body;$("progressBar").style.width=`${(current+1)*10}%`;bindAnswers();bindNeuronParts();bindLayerTabs();bindTrainingTabs();bindScenarioChoices();bindKnowledgeCheck();bindSummaryActions();if(current===8)assessment();}}
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem("courseLang",lang);render()});
$("startBtn").onclick=()=>{$("hero").classList.add("hidden");$("lesson").classList.remove("hidden");current=0;render()};
$("nextBtn").onclick=()=>{if(current<9){current++;render();window.scrollTo({top:0,behavior:"smooth"})}};
$("prevBtn").onclick=()=>{if(current>0){current--;render()}else{$("lesson").classList.add("hidden");$("hero").classList.remove("hidden");$("progressBar").style.width="0"}};
render();