import React from 'react';

let Enigma = require('./photo_2017-12-29_23-39-24.jpg');

let metadata = {
  id: "2017-10-21-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "21.10.2017",
  language: "ru",
  title: "Энигма",
  subtitle: "Про Блетчли-парк, вотчину Алана Тьюринга, где во Вторую мировую была вскрыта немецкая система шифрования \"Энигма\".",
  abstract: "Все смотрели \"Игру в Имитацию\"? Камбербетч, конечно, прекрасен, а в жизни, конечно, всё было не так. " +
    "Этот пост про математиков и инженеров из GC&CS (Government Code and Cypher School) во главе с Аланом Тьюрингом, " +
    "нашедших уязвимости в немецких шифровальных машинах \"Энигма\" и \"Лоренц\" во Вторую мировую войну, и спасших " +
    "тем самым десятки или даже сотни тысяч соотечественников.",
  cover: Enigma,
  categories: ["history", "programming", "math", "people"],
  time_to_read: 30,
  views: "",
  comments: [],
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = metadata;
  }

  componentDidMount() {
    if (this.props.onload) this.props.onload(this.state);
  }

  render() {
    return (
      <div>
        <h3>Анонс</h3>
        <p>
          Это не про великого рок-пианиста Кита Эмерсона из Emerson, Lake & Palmer, как вы могли подумать, прочитав название. Увы, 71-летний Эмерсон недавно застрелился.
        </p>
        <p>
          Это про математиков и инженеров из GC&CS (Government Code and Cypher School) во главе с Аланом Тьюрингом, нашедших уязвимости в немецких шифровальных машинах "Энигма" и "Лоренц" во Вторую мировую войну, и спасших тем самым десятки или даже сотни тысяч соотечественников.
        </p>
        <p>
          В следующих частях я покажу и расскажу, как работала знаменитая "Энигма" и как её вскрыла криптологическая "Бомба" Мариана Реевского. Многие из тех идей узнаваемы и в современной криптографии. "Бомба" была реализована сотрудниками Блетчли-парк - эдакого оборонного НИИ, где трудились Тьюринг и компания - который мне недавно довелось увидеть своими глазами.
        </p>
        <p>
          Я также расскажу о том, какие последствия эта работа имела для хода Второй мировой (с точки зрения западного мира, во всяком случае). А еще, лично мне было очень интересно и познавательно взглянуть на то, как была устроена организация работы сотрудников Блетчли-парк - просто для понимания того, как может быть организовано решение практически значимых наукоёмких задач.
        </p>
        <h3>Часть 0. Британия во Второй мировой войне</h3>
        <p>
          Но прежде чем перейти собственно к теме повествования, я хотел сказать пару слов об участии Британии в войне - чтобы дать контекст.
        </p>
        <p>
          <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%82%D0%B5%D1%80%D0%B8_%D0%B2%D0%BE_%D0%92%D1%82%D0%BE%D1%80%D0%BE%D0%B9_%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B5">Потери Великобритании во Второй мировой с 1939 по 1945 годы составили около 380 тысяч человек.</a>
        </p>
        <p>
          Нетрудно посчитать, что это чуть больше 1 погибшего на 1000 жителей в год. Население Соединенного Королевства на 1939 год составляло 48 миллионов человек, так что <a href="http://www.cancerresearchuk.org/health-professional/cancer-statistics/risk/tobacco">война за 6 лет унесла жизни меньшего числа британцев, чем курение</a>.
        </p>
        <p>
          Фактически, на земле они воевали 2 месяца и один год. После 8 месяцев Phoney War с сентября 1939 по май 1940, когда война была объявлена, но фактически почти не велась, британцы и немцы впервые по-настоящему вступили в боевые действия лишь в мае-июне 1940-ого во время Французской кампании.
        </p>
        <p>
          Британский экспедиционный корпус, поддерживавший союзников-французов на континенте, потерпел сокрушительное поражение под Дюнкерком, был оттеснён немцами к морю и эвакуирован обратно на Альбион по решению Черчилля. Не могу здесь не порекомендовать свежий одноименный фильм Кристофера Нолана. Посмотрите - не пожалеете.
        </p>
        <p>
          После этого в 1940-1941 годах была авиационная "Битва за Британию", а затем морская "Битва за Атлантику". Гитлер расчитывал завоевать господство над небом Англии и использовать его для прикрытия морского вторжения на острова. Британским лётчикам и морякам, однако, удалось дать немцам решительный отпор. Гитлер понял, что лёгкой победы ему не добиться, и обратил свой взор на восток.
        </p>
        <p>
          В следующий раз на земле британцы и немцы столкнулись друг с другом уже только в 1944-ом во время десанта союзников в Нормандии. Дезинформация британских спецслужб позволила союзникам убедить Гитлера в том, что настоящего десанта в D-day не будет, в результате потери союзников составили лишь 10 тысяч человек.
        </p>

        <h3>Часть 1. Что такое "Энигма"</h3>
        <p>
          Все смотрели "Игру в Имитацию"? Камбербетч, конечно, прекрасен, а в жизни, конечно, всё было не так.
        </p><p>
          Что вообще такое эта знаменитая "Энигма", которую все так стремились взломать, и зачем она была нужна?
        </p><p>
          Сначала про то, зачем нужна. Допустим, вы - капитан немецкой подводной лодки, и вам необоходимо обмениваться сведениями с вашим командованием. При этом радиопередача, отправленная вам, может быть подслушана противником, например, Англией.
        </p><p>
          Значит, передавать ваше сообщение командованию по радио открытым текстом нельзя, и вам необходимо как-то зашифровать его, чтобы только свои смогли его прочитать. Как это сделать, с учётом того, что на дворе - 1930-ые?
        </p><p>
          Для решения этой задачи в 1927 году была создана персональная шифровальная машина "Энигма". Она работала так: вы на берегу договариваетесь с командованем о том, какой ключ шифрования вы будете использовать в каждый следующий день. После этого вы набираете на этой машине (как на обычной печатной машинке) ваше сообщение, которое хотите отправить компандованию.
        </p><p>
          Машина превращает каждую букву вашего исходного текста (называемого plain text) в другую букву. Получается абракадабра - шифротекст (cyper text) - который вы передаёте по радио командованию.
        </p><p>
          Командование, зная каким ключом было зашифровано ваше сообщение использует этот же самый ключ для дешифровки, производя обратную операцию - набирает шифротекст. Из каждой буквы шифротекста при дешифровке получается соответствующая буква исходного текста, и на выходе ваше командование получает исходное сообщение.
        </p><p>
          Например, на этом видео я выставляю на "Энигме" ключ 000, набираю текст "AND" и получаю в результате шифротекст "QYJ". Обратите внимание, что когда я набираю каждую следующую букву, ключ увеличивается на единицу. После этого я (играя роль командования) выставляю исходный ключ 000, набираю шифротекст "QYJ" и получаю исходный текст "AND".
        </p><p>
          Такая система, где один и тот же ключ используется для шифрования и дешфировки, а операции шифрования и дешифровки - это, фактически, одна и та же операция называется симметричным шифрованием. Сейчас оно часто используется наряду с асимметричным шифрованием, где для стороны используют 2 разных ключа для шифрования и дешифровки.
        </p><p>
          Например, когда вы заходите на сайт по https://, ваш браузер сначала договаривается с сайтом о том, какой симметричный ключ использовать (и переговоры об этом ключе ведутся с помощью асимметричного шифрования - оно позволяет избежать необходимости заранее договариваться о симметричном ключе), а когда симметричный ключ выбран, основной поток уже шифруется симмметричным ключом.
        </p><p>
          Идея схемы шифрования, реализованной в "Энигме", была предложена ещё раньше. Её В 1914 году предложил инженер белловских лабораторий AT&T Гилберт Вернам - она назыавалась шифр XOR.
        </p><p>
          Шифт XOR работал совсем просто: вы брали свой исходный текст, договаривались о ключе шифрования, записывали их обоих в бинарном виде - ноликами/единичками. Затем, вы просто прикладывали первую цифру ключа к первой цифре текста и производили логическую операцию исключающее или (XOR) между ними, а затем проделывали то же самое для каждой следующей цифры.
        </p><p>
          Клод Шеннон в войну доказал, что для идеально случайного ключа такой шифр невозможно вскрыть. Проблема, однако, в том, что в реальности идеально случайным ключ никогда не бывает. В "Энигме" было реализовано некоторое неидеальное приближение этого идеального ключа.
        </p>

        <h3>Часть 5. "Бисмарк" и "дебютантка"</h3>
        <p>
          В ходе "Битвы за Атлантику" в 41-ом году немецкий флот пытался отрезать Великобританию от морского сообщения с континентом и Штатами. У немцев было превосходство в военно-морском флоте, и какое-то время им даже удалось установить вокруг островов морскую блокаду.
        </p><p>
          Особую гордость Кригсмарине составлял новенький сверхтяжелый линкор "Бисмарк", спущенный на воду перед самой войной.
        </p><p>
          "Бисмарк" обладал мощнейшими вооружением и броней и мог один на один уничтожить любой корабль его Величества.
        </p><p>
          Когда "Бисмарк" потопил один из лучших кораблей британского флота HMS "Hood"  со всеми его полутора тысячами человек команды, британское правительство решило, что с пропагандистской точки зрения важно побыстрее разделаться с грозным линкором.
        </p><p>
          Корабль был внесен в список объектов стратегического значения, и слово "Бисмарк" сотрудники Блетчли-парк должны были систематически искать в немецкой военно-морской радиопередаче.
        </p><p>
          Около 70% штата Блетчли-парк составляли молодые девушки с хорошим образованием. Именно им приходилось выполнять основную часть рутинной работы по дешфировке перехваченных радиопередач.
        </p><p>
          Поэтому, кстати, GC&CS дали еще шуточное прозвище "boffins and debs" - "ботаны и дебютантки", под "дебютантками" подразумеваются девушки из высших слоев общества, впервые выходящие в свет.
        </p><p>
          Трудились они в плохо оборудованных душных хижинах за рядами столов с шифровальными машинами "Typex" - британским реверс-инженерным клоном "Энигмы", который позволял расшифровывать немецкие телеграммы и сразу печатать их на бумажной ленте.
        </p><p>
          Это была тяжёлая механическая работа; ее было много, срочность предельная, ответственность колоссальная. Все находились в постоянном напряжении.
        </p><p>
          Расшифровкой радиоперехвата морских целей занималась хижина 8 (где трудился Алан Тьюринг), воздушных - хижина 6. Хижине 8 никак не удавалось найти упоминания о "Бисмарке".
        </p><p>
          И вот, в один прекрасный день 19-летняя Джейн Хьюз, дотошная сотрудница хижины 6, обнаруживает, что в ее воздушной (!) радиопередаче попадается заветное название корабля!
        </p><p>
          Оказалось, что какой-то большой чин из Люфтваффе решил справиться у капитана "Бисмарка" о здоровье своего сына, моряка на "Бисмарке", после боя с HMS "Hood".
        </p><p>
          Лучше бы не спрашивал. С "Бисмарка" ответили, что в целом все хорошо, но в бою корабль получил повреждения и направляется в оккупированную Францию, в такой-то порт на ремонт.
        </p><p>
          Британцы немедленно выслали на охоту за ним тучу бомбардировщиков-торпедоносцев и несколько кораблей. Торпедоносцам с большим трудом удалось повредить ходовую часть линкора, и тот оказался обездвижен.
        </p><p>
          После этого его совместно атаковали несколько английских кораблей и несколько часов утюжили из всех орудий, пока не превратили в груду металлолома. Большая часть команды "Бисмарка" погибла.
        </p><p>
          Британское правительство впечатлилось эффективностью Блетчли-парка, и стало полагаться на его данные для проведения более крупных операций.
        </p><p>
          Джейн Хьюз оставила службу в мае 1945-ого года, вышла замуж за офицера королевского флота Теда Фосетта и... стала оперной певицей!
        </p><p>
          Проведя более 15 лет в опере и исполнив несколько крупных ролей, в 1963-ом Джейн Фосетт стала менеджером Викторианского Общества, занимавшегося охраной памятников истории и культуры.
        </p><p>
          Отчасти благодаря усилиям "неистовой миссис Фосетт" уцелело чудесное старое здание вокзала Сан-Панкрас, того самого, где повсюду стоят общественные пианино. =)
        </p><p>
          Но роль Блетчли-парк в обнаружении "Бисмарка" оставалась засекреченной аж до 1990-ых годов.
        </p><p>
          Только тогда 70-летняя Джейн, не проболтавшаяся до того даже мужу, внезапно оказалась вынуждена вновь и вновь пересказывать ее журналистам и историкам (а также ошеломлённым детям и внукам).
        </p><p>
          Джейн Фосетт умерла в 2015 году в возрасте 95 лет.
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};
