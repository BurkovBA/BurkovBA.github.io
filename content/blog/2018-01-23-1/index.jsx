import React from 'react';

let mastectomy = require('./photo_2018-01-25_23-21-43.jpg');
let team = require('./photo_2018-01-26_18-58-23.jpg');
let GitaAndAmit = require('./photo_2018-01-26_19-48-28.jpg');

let metadata = {
  id: "2018-01-23-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "23.01.2018",
  language: "ru",
  title: "Мир МедТеха",
  subtitle: "С хакатона по медицинской технике",
  abstract: "В конце прошлой недели я был на хакатоне по медицинской технике и получил массу знаний и впечатлений." +
  "Это совершенно другой мир, который живёт под девизом \"Health & Wealth\" и держится на патентах и контактах.",
  cover: "https://www.cambridgenetwork.co.uk/public/news/medtech-accelerator-banner.png",
  categories: ["how-life-works", "biomed", "business", "people"],
  time_to_read: 20,
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
        <p>
          Амит Агравал - врач Cambridge University Hospitals NHS Foundation Trust. Делая рутинные операции
          мастэктомии пациенткам c раком молочной железы, он столкнулся с проблемой. Традиционная процедура
          подразумевает, что ассистент хирурга удерживает кожу пацинетки специальным зажимом. Зажим этот был
          придуман ещё чуть ли не в XIX веке, и его применение часто приводит к некрозу и осложняет заживление
          тканей после операции.
        </p>
        <p>
          Поэтому заботливые врачи его не используют, а сами удерживают кожу жестом, похожим на приветствие Спока.
          Однако делать это каждый день болезненно и травматично уже для врача.
        </p>
        <img src={mastectomy} className="img-responsive center-block" />
        <div className="caption text-center">Слайд из презентации Амита Агравала</div>
        <p>
          Амит обратился к медицинским инженерам своего госпиталя с просьбой изготовить для него фиксатор,
          который бы позволил врачу без усилий удерживать руку в нужном положении. Инженеры сказали, что
          готовы сделать фиксатор по его требованию, но это потребует нескольких месяцев работы, и им хотелось
          бы получить за неё какое-то вознаграждение (ведь рутинных дел у них и так хватает).
        </p>
        <p>
          В России мы бы вздохнули/выпили/плюнули, а Амит Агравал отправился со своей идеей в медицинский
          бизнес-акселератор на хакатон по МедТеху. Туда вечером прошлого четверга занесло и меня.
        </p>
        <p>
          Хакатон проходил в Cambridge Science Park - огромном технопарке на севере Кембриджа - хотел сказать
          "как Сколково", но представил Медведа и поперхнулся (впрочем, какие бы там Медведы ни вертелись, любая движуха
          лучше мёртвого штиля, так что желаю Сколковцам успеха - всяко лучше, чем водку пить).
        </p>
        <img src="http://xn--j1aidcn.org/wp-content/uploads/2015/08/96635.jpg" className="img-responsive center-block" />
        <div className="caption text-center">Наши нанотехнологии - самые большие нанотехнологии в мире!</div>
        <p>
          Мероприятие заняло полтора дня и хакатоном в классическом смысле не было: запиливать ничего не планировалось.
          Требовалось сделать презентацию проекта, которая подавалась в программу акселератора и, в случае успеха,
          должна была получить от 15 до 125 тысяч фунтов посевного финансирования (не грантового, а за долю в компании).
        </p>
        <p>
          Проектов было подано 6, из них 5 - индийцами. Как говорил Гай Кийосаки, на Западе большинство технологических
          предпринимателей - это иммигранты первого или второго поколений, сражающиеся за своё место в жизни.
        </p>
        <p>
          Все индийцы были сравнительно молодыми (в диапазоне 25-35, от силы 40) профессионалами с хорошим образованием
          и некоторым опытом в своих областях специализации. В основном - или врачами, занимающимися наукой, или PhD,
          пытающимися коллаборировать с врачами.
        </p>
        <p>
          Остальные участники хакатона должны были послушать двухминутныые питчи авторов проектов, выбрать себе один
          и присоедниться к нему, чтобы помочь сделать пятиминутную презентацию проекта для коллегии экспертов из
          акселератора.
        </p>
        <p>
          В отличие от софтверных хакатонов, где обычно бывает наоборот, здесь я внезапно оказался
          одним из самых молодых участников. Около половины аудитории были людьми лет 50-60.
        </p>
        <p>
          Состав аудитории был примерно таким:
        </p>
        <ul>
          <li>15% - патентные юристы, ищущие клиентуру;</li>
          <li>15% - разнообразные консалтинги в области медтеха;</li>
          <li>15% - просто разные бизнесовые мужики из биомедицинских компаний средней руки;</li>
          <li>30% были студентами/аспирантами или профессорами университетов, в основном - Кембриджа</li>
          <li>немного хардверных (механических и химических) инженеров (почему-то сплошь женского пола)</li>
          <li>несколько неприкаянных аспирантов-биологов, изучающих что-то абсолютно никому не нужное и пришедших на разведку по типу меня</li>
        </ul>
        <p>
          Посмотрев на ораву патентных юристов, я сделал для себя нехитрый вывод. Скажем, если Амит сделает свой
          фиксатор, то грех будет не поставить его производство на поток, ведь он пригодится и другим врачам. Но тогда
          кто будет получать доход от этого изобретения? Вот тут-то и вступает в силу патентное право, которое закрепит
          право на изобретение за Амитом, а тот, в свою очередь, передаст его компании - и под этот патент инвесторы
          готовы давать деньги.
        </p>
        <p>
          Вот почему основатель Неткрекера Майкл Файнберг, создавая БостонДжин, первым делом принялся
          оформлять патенты на изобретения (хотя комания-то только создавалась). Действительно, в отличие от мира софта,
          в мире хардвера (в том числе, медицинской техники) на интеллектуальной собственности держится всё.
        </p>
        <p>
          <a href="/blog/2017-09-21-1">О том же говорил Энди Ричардс из Congenica</a>, когда речь шла о биоинформатике
          и биотехе вообще: инвесторы в биотехе бывают или IT-шными, или медицинскими, и у первых все мысли про
          масштабируемость, а у вторых - только про патенты и тому подобную отчуждаемую интеллектуальную собственность
          (поэтому, биоинформатики опять "попали", так как у них обычно нет ни того, ни другого).
        </p>
        <p>
          От этого же мира патентных юристов <a href="/blog/2017-09-25-1">старался отгородиться Марк Цукерберг</a>, когда
          распространял фейсбуковский опен-сорс под странной Facebook license, которая немедленно отзывается в случае
          попытки пользователя софта учинить патентный иск против Фейсбука.
        </p>
        <hr />
        <p>
          Я не пошёл в команду к Амиту. Его проект был разумным, но очень простым, и мне там было бы нечего делать с
          моим набором навыков. Вместо этого, я отправился в команду к девушке моего возраста по имени Гита, которая
          упомянула, что ей нужны облачные вычисления и машинное обучение.
        </p>
        <img src={GitaAndAmit} className="img-responsive center-block" />
        <div className="caption text-center">Гита Халили Могаддам и Амит Агравал - победители хакатона МедТех</div>
        <p>
          Гита - специалистка по infrared imaging. Её проект был вот про что.
        </p>
        <p>
          При раке мозга, как вы понимаете, перед врачом стоит проблема баланса ошибок "пропуск цели vs ложная тревога".
          Если не удалишь всю опухоль - будет рецидив и повторная операция, если перестараешься - оставишь пациента
          глубоким инвалидом.
        </p>
        <p>
          Сейчас есть интересная методика определения границы опухоли. Пациенту перед операцией вводят вещество под
          названием 5-LAL (5-аминолевулиновая кислота) - по сути, что-то вроде обычной ацетоуксусной кислоты, только
          на один атом углерода длиннее и с аминогруппой. Поскольку раковые клетки активно размножаются и горзадо более
          прожорливы, чем нормальная ткань, они этой дряни наглатываются в больших количествах. А она со временем
          полимеризуется в порфирин (наподобие гема в нашем гемоглобине) и флуоресцирует. Получается, что врач во время
          операции прямо видит опухоль - яркую и флуоресцирующую - и знает, сколько нужно резать.
        </p>
        <p>
          Но можно действовать и по-другому. Опухоль должна быть теплее нормальной ткани, а значит в ИК-спектре
          её будет видно - она поглощает иначе по сравнению с нормальными тканями. Нехитрый ИК-лазер за $200 позволяет
          увидеть разницу.
        </p>
        <p>
          Гита делала что-то подобное на меланоме и, прикрутив поверх ИК-микроскопии какое-то количество машинного
          обучения, смогла добиться автоматического распознавания клеток меланомы на снимках и опубликовала об этом
          статью в PLoS One. Теперь же она хотела сделать что-то подобное на опухолях мозга.
        </p>
        <p>
          Потом расскажу про другие проекты, но этот, конечно, по соотношению risk-reward выглядел
          наиболее многообещающе, так что помимо меня в эту команду немедленно сбежалось аж четверо солидных седовласых
          бизнесовых дядек, не считая подтянувшегося позднее профессора - научного руководителя Гиты. Присоединилась
          также парочка симпатичных студентов-технарей и молодой сотрудник консалтинга.
        </p>
        <img src={team} className="img-responsive center-block" />
        <div className="caption text-center">Команда Гиты</div>
        <p>
          Бизнесовые дядьки подобрались всех мастей: самый представительный из них был главой средней руки медтеховой
          компании, которая 20 лет выкупала патенты у NHS, доводила их до продукта и продавала этот продукт как правило
          той же NHS.
        </p>
        <p>
          Другой был специалистом по Business Development - то есть всему тому, что нужно сделать, чтобы построить
          вокруг продукта бизнес - продажам, маркетингу, поиску и окучиванию инвесторов, партнёров и т.п.
        </p>
        <p>
          Третий дядька был патентным юристом. Он, например, делал для Wellcome Trust Sanger Institute некий заказ,
          где Сангер распространял какую-то свою базу данных под двойной лицензией - бесплатно для академии и платно
          для бизнеса.
        </p>
        <p>
          Четвёртого дядьку сам акселератор назначил facilitator`ом - эдаким тамадой - он задавал формат дискуссии и
          следил, чтобы к 4:30 вечера была готова бизнес-презентация. Его шкурный интерес в этой деятельности состоял
          в том, что он кое-как наклепал прототип сайтика, который помогает готовить для проектов стандартные бизнесовые
          документы - elevator pitch, 2-минутную презентацию, 5-минутную презентацию, business model canvas и т.п. Теперь
          же он обкатывал этот сайтик на нас. Что-то подобное, только доведённое до ума, я видел и в России.
        </p>
        <p>
          Вся эта компания бизнесовых дядек за несколько часов превратила идею Гиты во что-то напоминающее бизнес-проект,
          а заодно поделилась огромным количеством опыта и примеров.
        </p>
        <p>
          Например, знаете, сколько стоит день полежать в больнице в Англии? От 200 до 400 фунтов. А операционный театр
          обходится в 800-950 фунтов в час (всего в Великобритании их около 3000). Стоимость использования вышеназванной
          5-LAL для подкрашивания опухоли составляет аж 13 тысяч фунтов. Вещество-то само очень простое,
          думаю, <a href="https://lab.whitequark.org/">Петя Зотов</a> сварит на коленке, если попросите, но вот стоимость
          прохождения госрегуляции увеличивает стоимость чего угодно на 6-8 тысяч фунтов, так что дешёвой медицина
          не бывает в принципе.
        </p>
        <p>
          Ежегодно в Великобритании диагностируется 355 тысяч новых случаев рака, из них 11 тысяч (3%) - раки мозга.
          Типичная нейрохирургическая операция длится 8-10 часов, очередь на операцию в NHS составляет порядка 8-10 недель.
          5-летняя выживаемость больных после операции - порядка 75% (что просто шикарно на мой взгляд, учитывая
          серьёзность ситуации, особенно, если сравнить с Россией), 10-летняя выживаемость - 14%, что довольно удручающе.
        </p>
        <p>
          <a href="https://www.kingsfund.org.uk/projects/nhs-in-a-nutshell/nhs-budget">Годовой бюджет NHS составляет порядка 125 миллиардов фунтов</a> (то есть порядка $170 миллиардов),
          для сравнения, <a href="https://finance.rambler.ru/news/2016-11-01/byudzhet-zdravoohraneniya-rf-v-2017-godu/">бюджет здравоохранения в России - $55 миллиардов в год</a>, то есть
          на лечение одного россиянина выделяется в 6 раз меньше денег, чем на одного англичанина. Впрочем,
          сами по себе большие расходы не делают NHS лучше, там тоже, мягко говоря, есть над чем работать.
          Но хотя бы средства для улучшений есть.
        </p>
        <hr />
        <p>
          Вечером каждая команда презентовала свой проект. Было много других интересных предложений.
        </p>
        <p>
          Индийский парень по имени Йешвант предлагал проект по автоматическому отлову ошибок во время операции (например,
          когда врач забывает внутри пациента тампон или, ещё хуже, зажим) методами машинного обучения.
        </p>
        <p>
          Единственный на хакатоне не-индиец представлял проект по логистике внутри госпиталя - часто дорогой операционный
          театр простаивает из-за того, что везут то пациента, то необходимые для операции материалы. Автор проекта
          предлагал сделать что-то вроде внутрибольничного Убера, чтобы все могли отслеживать местоположение всех.
        </p>
        <p>
          Впрочем, проблема внедрения данных проектов представляется серьёзной - с административной точки зрения неочевидно,
          как их протащить в практику. Эти проекты выбивались из формата, принятого в данном акселераторе, и поддержки
          жюри не получили.
        </p>
        <p>
          А вот Гита и Амит оказались данному акселератору ближе и заслуженно победили. Фактически,
          им осталось сделать лишь несколько шагов до получения посевного финансирования (кстати, Гита, по-моему, была
          просто морально не готова к такому исходу и выглядяла несколько растерянной, хоть и обрадованной).
        </p>
        <p>
          Что ж, успеха им обоим в дальнейшем. А вы когда в следующий раз будете в больнице (надеюсь, нескоро) и увидите
          какой-то хитрый прибор, теперь можете представить, как он увидел свет.
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};