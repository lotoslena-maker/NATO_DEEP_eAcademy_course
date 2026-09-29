# COURSE DEVELOPMENT PLAYBOOK

Цей документ фіксує **покрокову інструкцію**, за якою далі розвиваємо всі наступні розділи курсу **NATO DEEP eAcademy — Fundamentals of Deep Learning**.

## 1. Загальний принцип

Для кожного розділу працюємо однаково:

1. **Навчальна мета**
2. **Коротке пояснення простими словами**
3. **1–2 реалістичні приклади**
4. **Окремі візуальні assets**
5. **Схема або діаграма, якщо вона потрібна для розуміння**
6. **Інтерактивний елемент**
7. **Мініперевірка**
8. **Перехід до наступного розділу**
9. **UA/EN версії**
10. **Перевірка на GitHub Pages**

---

## 2. Візуальний стандарт

### 2.1. Не робимо готові інфографіки як одну велику картинку
Кожне зображення має бути окремим reusable asset.

### 2.2. Перевага реалістичним зображенням
Для прикладів використовуємо:
- людей;
- військових;
- аналітиків;
- операторів;
- транспорт;
- безпілотні платформи;
- карти;
- командні центри;
- монітори;
- реальні сцени роботи з даними.

### 2.3. Схеми використовуємо тільки для понять
Наприклад:
- AI ⊃ ML ⊃ DL;
- нейрон;
- шари мережі;
- цикл навчання;
- confusion matrix;
- loss curve.

### 2.4. Мінімум тексту всередині картинки
Краще:
- картинка без тексту;
- підпис у HTML;
- ті самі assets для UA та EN.

---

## 3. Структура assets

Для кожного розділу створюємо окрему папку:

```
assets/images/section1/
assets/images/section2/
assets/images/section3/
...
assets/images/section10/
```

Назви файлів — **латиницею**:

```
neural-network.jpg
female-analyst.jpg
drone.jpg
training-loop.svg
loss-curve.svg
```

Не використовуємо кирилицю в назвах файлів.

---

## 4. Стандарт одного розділу

### Блок A — Learning objectives
- 2–4 чіткі результати навчання.
- Починати з «Після цього розділу ви зможете…»

### Блок B — Concept explanation
- 2–4 абзаци.
- Без перевантаження термінами.
- Новий термін одразу пояснюємо.

### Блок C — Main visual
- 1 схема або ключове фото.
- Обов’язково `alt`.
- Обов’язково `figcaption`.

### Блок D — Real-world example
- реалістична ситуація;
- людина або технічний об’єкт;
- 1 коротке пояснення, що саме демонструє зображення.

### Блок E — Interactive explanation
Формат залежить від теми:
- clickable cards;
- stepper;
- slider;
- reveal;
- sequence;
- mini scenario.

### Блок F — Mini-check
- 1 питання;
- 3 варіанти;
- 1 правильний;
- миттєвий feedback.

### Блок G — Transition
- 1 короткий абзац;
- пояснює, навіщо потрібен наступний розділ.

---

## 5. Порядок розділів

### Section 1 — Introduction
Статус: **готово, не переробляємо**.

### Section 2 — AI → ML → Deep Learning
Статус: **у роботі / базове наповнення виконано**.

Перевірити:
- local assets;
- UA/EN;
- реалістичні фото;
- mini-check;
- visual hierarchy.

### Section 3 — Artificial Neuron
Статус: **реалізовано, очікує перевірки GitHub Pages**.

Виконано:
- розширений UA/EN контент;
- окрема схема нейрона;
- окрема схема activation → output;
- реалістичні фото сенсорних/аудіоданих;
- інтерактивні частини нейрона;
- mini-check.

Наступна дія: QA живої сторінки.

Початковий план:
1. пояснити input, weight, bias, sum, activation, output;
2. додати окрему схему нейрона;
3. додати реалістичний приклад сенсорних даних;
4. зробити інтерактив: натиснення на частини нейрона;
5. mini-check.

Assets:
- `artificial-neuron.svg`
- `sensor-inputs.jpg`
- `activation-output.svg`

### Section 4 — Neural Network Architecture
Потрібно:
1. input / hidden / output layers;
2. пояснити, чому «deep»;
3. показати багатошарову мережу;
4. реалістичний приклад image recognition;
5. інтерактивне підсвічування шарів.

Assets:
- `network-layers.svg`
- `image-recognition.jpg`
- `feature-hierarchy.svg`

### Section 5 — How a Neural Network Learns
Потрібно:
1. forward pass;
2. prediction;
3. loss;
4. backpropagation;
5. optimizer;
6. epochs;
7. інтерактивний stepper.

Assets:
- `training-cycle.svg`
- `loss-curve.svg`
- `training-workstation.jpg`

### Section 6 — Applications of Deep Learning
Потрібно:
- Computer Vision;
- Speech;
- Language;
- Signals;
- по реалістичному прикладу на кожен.

Assets:
- `computer-vision.jpg`
- `speech-operator.jpg`
- `language-analysis.jpg`
- `signal-analysis.jpg`

### Section 7 — Interactive Scenario
Потрібно:
1. реальна навчальна ситуація;
2. 2–3 рішення користувача;
3. feedback на кожен вибір;
4. фінальна рекомендація.

Assets:
- `scenario-aerial.jpg`
- `scenario-map.jpg`
- `scenario-analyst.jpg`

### Section 8 — Knowledge Check
Потрібно:
- 4–5 питань;
- multiple choice;
- matching;
- sequence;
- immediate feedback.

### Section 9 — Final Assessment
Потрібно:
- 5–7 питань;
- частина ситуаційних;
- мінімум 80% для проходження;
- показ правильних/неправильних відповідей;
- Try again.

### Section 10 — Summary
Потрібно:
1. course map;
2. 5 ключових тез;
3. AI → ML → DL → Neuron → Network → Training → Applications;
4. кнопка Review course.

Assets:
- `course-map.svg`
- `summary-hero.jpg`

---

## 6. Технічний порядок роботи

Для кожного наступного розділу:

1. Перевірити поточний `js/app.js`.
2. Перевірити поточний `css/style.css`.
3. Створити assets.
4. Завантажити assets у відповідну папку.
5. Оновити UA-контент.
6. Оновити EN-контент.
7. Додати CSS.
8. Перевірити адаптивність.
9. Commit у `main`.
10. Дочекатися GitHub Pages deployment.
11. Перевірити живу сторінку.
12. Тільки після цього переходити до наступного розділу.

---

## 7. QA checklist

Перед переходом далі перевірити:

- [ ] UA працює
- [ ] EN працює
- [ ] зображення локальні
- [ ] немає зовнішніх випадкових URL
- [ ] `alt` заповнені
- [ ] `figcaption` заповнені
- [ ] мобільний вигляд не ламається
- [ ] кнопки працюють
- [ ] mini-check працює
- [ ] progress bar працює
- [ ] Next / Back працюють
- [ ] GitHub Pages deployment — success

---

## 8. Що не робимо

- не створюємо один великий «слайд-картинку» замість вебконтенту;
- не вставляємо український текст усередину asset, якщо картинка має працювати і в EN;
- не використовуємо випадкові зовнішні картинки після появи власних assets;
- не перевантажуємо сторінку текстом;
- не робимо схеми там, де краще працює реалістичне фото;
- не переходимо до наступного розділу, поки попередній не перевірений на живій сторінці.

---

## 9. Робочий принцип

**Один розділ → контент → assets → інтерактив → UA/EN → commit → Pages → QA → наступний розділ.**

Цей файл є основною інструкцією для подальшої розробки курсу.
