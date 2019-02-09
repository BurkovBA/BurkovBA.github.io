import React from 'react';

let roberto = require('./2019-02-08 09.48.24.jpg');
let christos = require('./2019-02-08 09.48.51.jpg');
let alexa = require('./alexa.png');
let design = require('./2019-02-08 09.50.46.jpg');
let neuralTTS = require('./2019-02-09 14.10.08.jpg');
let contextGeneration = require('./2019-02-08 09.50.00.jpg');
let neuralVocoder = require('./2019-02-08 09.50.12.jpg');
let evaluation = require('./2019-02-08 09.50.18.jpg');
let knowledgeBase = require('./2019-02-08 09.51.28.jpg');
let feverChallenge = require('./2019-02-08 09.51.07.jpg');

let metadata = {
  id: "2019-02-07-2",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "07.02.2019",
  language: "ru",
  title: "Amazon Alexa",
  subtitle: "",
  abstract: "Послушал двух парней из кембриджского офиса Амазона, " +
  "работающих над Алексой. Составил общее впечатление о том, каково оно - работать в Амазон.",
  cover: alexa,
  categories: ["how-life-works", "programming", "math", "business"],
  time_to_read: 15,
  views: "",
  comments: [],
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = metadata;
  }

  render() {
    return (
      <div>
        <h2>Про жизнь и про людей</h2>
        <p>
          Докладчикам, я бы сказал, было около 42 и 36 лет соответственно. Тот что постарше - Roberto Barra-Chicote -
          профессор из Мадрида, поговорили, внезапно, с его женой (мы раньше пришли, и я случайно с ней разговорился).
          Жена работает в Accenture, сейчас они наконец родили детей, и она в отпуске. В консалтинге ее упахивали,
          конец рабочего дня формально в 7, так что в среднем хорошо если добиралась домой к 8:30, но раньше начальника
          уходить не принято, а тот запросто сидел и до 11. Она делала по 13 проектов параллельно.
        </p>
        <img src={roberto} className="img-responsive center-block"/>
        <div className="caption text-center">Роберто Барра-Чикоте (докладчик) и его жена в зале (со светлыми волосами)</div>
        <p>
          Среди top tech-компаний Амазон вообще-то тоже всегда славился плохим обращение с сотрудниками, но
          в Кембриджском офисе вроде бы помягче - английская культура сказывается. Жена говорит, что Роберто
          почти всегда приходит домой строго в 5:30.
        </p>
        <p>
          В кембриджском офисе располагается ряд комманд, отвечающих за Алексу. Есть 2 pizzas rule - в каждой команде
          должно быть не больше людей, чем можно накормить двумя пиццами. Как правило, 6-8. Примерно пополам инженеров
          и ученых, выполняющих взаимодополняющие функции. Проекты обычно небольшие по длительности, около
          полугода-года, что по меркам менеджеров медленно, а по меркам ученых - быстро.
        </p>
        <p>
          Всего над Алексой в разных офисах работает около 9 тысяч (!) человек. По моим прикидкам даже в AWS
          задействовано всего тысяч 20 программистов. Так что проект просто гигантский, и Амазон на него, видимо,
          поставил очень много. Подтягивается и сообщество: со старта "Алексы" в 2014 сторонние разработчики успели
          написать уже 80,000 скиллов.
        </p>
        <p>
          В Кембридже есть несколько очень сильных профессоров, специализирующихся в распознавании
          и синтезе речи, вроде Билла Бирне - главы Apple Siri - или Марка Гейлса - научного руководителя замечательного
          Андрея Малинина, который через полгода будет делать Алису в Яндексе. Помимо Алексы в
          кембриджском офисе находится еще несколько команд: Prime Air (дроны-доставщики), Lab 126, AWS S3 и Shield.
        </p>
        <p>
          Роберто - спец по text2speech. Доклад у него был превосходный, чувствуется опыт преподавания, ничего лишнего
          он не проболтнул, зато ликбез провел очень структурированный и познавательный.
        </p>
        <img src={christos} className="img-responsive center-block"/>
        <div className="caption text-center">Христос Христодулопулос</div>
        <p>
          Другой докладчик - Christos Christodoulopoulos - помоложе и рассказывал похуже. Он спец по knowledge
          representation - его стараниями Алекса умеет выкапывать информацию из интернета и дает какие-то внятные ответы
          на вопросы. Рассказывал про свою последнюю статью - как они заставили аннотаторов из отделения в Бостоне
          собрать датасет с 180,000 фактов + статьями, подтверждающими эти факты.
        </p>
        <h2>Про технологии (возможно, скучновато)</h2>
        <p>
          Насколько я понял, основная часть продакшн-стека у Амазона - на Яве и Спарке.
        </p>
        <p>
          Алекса состоит из доброго десятка подсистем. Каждая подсистема имеет свое API, которое висит
          где-то в Амазоновском облаке и к которому обращается колонка, когда нужно выполнить какую-то
          задачу. По-видимому, за разработку каждой подсистемы отвечает отдельная команда или группа
          команд.
        </p>
        <ol>
          <li>Человек произносит фразу (Utterance)</li>
          <li>Модуль Автоматического Распознавания Речи (Automatic Speech Recognition, ASR) генерирует текст фразы</li>
          <li>Модуль Распознавания Естественного Языка (Natural Language Understanding, NLU) распознает суть запроса</li>
          <li>С помощью Скиллов (Skills) Алекса выполняет запрос и возвращает текст</li>
          <li>Модуль Преобразования Текста в Речь (Text to speech, TTS) читает текст ответа</li>
        </ol>
        <img src={design} className="img-responsive center-block"/>
        <div className="caption text-center">Подсистемы Алексы</div>
        <h2>Text to speech</h2>
        <h3>Roberto Barra-Chicote</h3>
        <p>
          Модуль Text to Speech до эры нейронок работал так: из текста делалась фонетическая транскрипция,
          а по той затем статистическими моделями/Витерби генерировалась речь. Вокодер (модуль, генерирующий речь)
          на марковских цепях работал сравнительно плохо.
        </p>
        <p>
          Сейчас этот пайплайн заменили на нейронки.
        </p>
        <img src={neuralTTS} className="img-responsive center-block"/>
        <div className="caption text-center">Нейронный Text-to-speech</div>
        <img src={contextGeneration} className="img-responsive center-block"/>
        <div className="caption text-center">Генерация контекста</div>
        <img src={neuralVocoder} className="img-responsive center-block"/>
        <div className="caption text-center">Нейронный вокодер</div>
        <p>
          Отдельная проблема - оценивать качество синтезированной речи. Для этой цели есть <a href="https://en.wikipedia.org/wiki/MUSHRA">MUSHRA test</a>.
        </p>
        <img src={evaluation} className="img-responsive center-block"/>
        <div className="caption text-center">
          Оценка качества речи: Алекса очень близка к естественной речи, отставание сокращено на 61%
        </div>
        <p>
          Для тренировки Амазоновского нейронного вокодера используется датасет AWS voices portfolio с более чем 200
          часами аудио.
        </p>
        <h2>Knowledge Representation</h2>
        <h3>Christos Christodoloupoulos</h3>
        <p>
          В базе знаний Алексы хранятся именованные сущности и именованные отношения между ними:
        </p>
        <img src={knowledgeBase} className="img-responsive center-block"/>
        <div className="caption text-center">Струкрура базы знаний Алексы</div>
        <p>
          Проблемы в работе с базой знаний:
        </p>
        <ul>
          <li>storage/retrieval</li>
          <li>consistency: ingestion checks, stale facts</li>
          <li>querying: efficient graph traversal, generated facts</li>
        </ul>
        <p>
          Проблемы исследований
        </p>
        <ul>
          <li>completeness: demand-weighted, defined wrt a given application</li>
          <li>extraction: structured vs unstructured sources, ontology alignment, multiple source languages</li>
          <li>verification: fact correctess assessment, justification in the form of evidence</li>
        </ul>
        <p>
          Зачем автоматизировать верификацию?
          More frequent updates (match the scale/speed of fact extraction), increased number of facts checked,
          wides variety of sources, provide justification of answers.
        </p>
        <p>
          Христос рассказывал про их последнюю статью: они с интерном и толпой аннотаторов в Бостоне
          собрали огромный датасет из 185,000 истинных и ложных утверждений, притом каждое утверждение было
          снабжено фактическими подтверждениями, из которых следовало, что утверждение
          поддерждается/опровергается/недостаточно данных.
        </p>
        <h3>
          FEVER: a Large-scale dataset for Fact Extraction and VERification
        </h3>
        <h3>Thorne et al. (2018), fever.ai</h3>
        <p>
          Утверждения набрали из дампа 5.4 миллионов страниц английской википедии за июнь 2017,
          взяли 50,000 самых популярных статей, взяли только введения из статей, нарезали на предложения,
          с помощью CoreNLP выделили токены. Для генерации фактов использовались только простые предложения
          с одним фактом на предложение.
        </p>
        <p>
          Затем к фактам применяли мутации:
        </p>
        <ul>
          <li>пересказ иными словами</li>
          <li>отрицание</li>
          <li>обобщение</li>
          <li>уточнение</li>
          <li>замена сходными сущностями/отношениями (например, Америка -> Канада)</li>
          <li>замена несходными сущностями/отношениями (например, Америка -> крокодил)</li>
        </ul>
        <p>
          Про измененные факты говорили, верны они или нет. Просили анноторов про каждое утверждение найти гиперссылку
          в интернете. Например, если дан факт "Брэд Питт - актер", надо было найти веб-страницу про фильм, где он
          играет. Получили precision 95.4%, recall 72.4%. Ошибки происходили часто оттого, что трудно было избавиться от
          априорных знаний о мире, вносимых аннотаторами. То есть, к примеру, в ряде ситуаций факт что "Огайо находится
          в США" должен был классифицироваться как "недостаточно данных", но бостонские аннотаторы писали что "верно".
        </p>
        <p>
          После этого они устроили FEVER challenge - и предложили произвольным командам извлечь дополнительные аннотации
          лучше, чем делали они сами. Получилось, 23 команды из разных университетов нашли 1200 дополнительных аннотаций
          и превзошли самих ребят из Амазона на 37%:
        </p>
        <img src={feverChallenge} className="img-responsive center-block"/>
        <div className="caption text-center">Результаты FEVER challenge</div>
        <p>В итоге по итогам всей этой работы точность ответов Алексы должна была сильно возрасти.</p>
      </div>
    )
  }
}

export default Content;
export {metadata};
