import React from 'react';

let metadata = {
  id: "2018-02-02-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "02.02.2018",
  language: "ru",
  title: "Почему образование в США с 1985 по 2013 подорожало в 6 раз?",
  subtitle: "Гонка вооружений среди ВУЗов",
  abstract: "Это краткий пересказ замечательной главы из книги Кэти О'Нил \"Weapons of Math Destruction\", посящённой" +
  " тому, как большие данные углубляют социальное неравенство, концентрируют власть в руках капиталистов и делают" +
  " обычного человека всё более беспомощным.",
  cover: "https://s.yimg.com/ny/api/res/1.2/Q8pyAsOrsuxyBCwCm.tXQQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/town_country_721/d38b257fda38f3e4c7901c08bb51a026",
  categories: ["how-life-works", "economy"],
  time_to_read: 10,
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
        <p>
          Как-то я наткнулся на <a href="https://money.stackexchange.com/questions/35930/is-it-okay-to-be-married-30-years-old-and-have-no-retirement">любопытный пост на money.stackexchange.com</a>: 31-летняя юристка с зарплатой $130 000 в год
          только что родившая ребёнка жаловалась, что им с мужем не хватает денег, чтобы делать пенсионные накопления,
          поскольку их кредиты на образование составляют $300 000, перевешивая даже ипотеку (скромные по американским
          меркам $220 000).
        </p>
        <p>
          Я только что прочитал книгу математика Кэти О'Нил "Weapons of Math Destruction", где она
          шаг за шагом объясняет, как капиталистический цикл положительной обратной связи привёл к тому, что между
          американскими ВУЗами разразилась гонка вооружений, которая привела к взлёту цен на образование с 1985 по 2013
          в 6 раз (в 4 раза, если нормировать на инфляцию).
        </p>
        <img src="https://cdn.css-tricks.com/wp-content/uploads/2017/03/cathy_oneil-620x412.jpg" className="img-responsive center-block" />
        <p>
          В 1985 году скромный американский новостной журнал U.S. News нашёл хороший способ привлечь к себе внимание зрительской
          аудитории. Они решили ранжировать американские ВУЗы по качеству образования, которое те предоставляют. Канал
          выпустил рейтинг, основанный на опросах экспертов, который очень заинтересовал американцев. На телевизионщиков
          тут же обрушился шквал критики - их рейтинг называли субъективным и волюнтаристским. Впрочем, скандал,
          как известно, только способстует росту популярности. Известность U.S. News достигла национальных масштабов.
        </p>
        <p>
          Раз уж шумиха поднялась и внимание зрителей было завоёвано, журнал решил продолжить доить свою призовую корову.
          Чтобы побороть обвинения в субъективности, они выпустили новую версию рейтинга, на сей раз основанную на данных.
        </p>
        <p>
          Место ВУЗа в нём теперь определялось взвешенным средним по нескольким категориям, таким как средний балл
          студентов на школьном выпускном экзамене SAT (что-то вроде ЕГЭ), соотношение числа студентов и преподавателей,
          конкурс на место, число вылетающих, размеры пожертвований ВУЗу от выпускников (по их логике, если выпускники
          добиваются финансового успеха в жизни и жертвуют много денег alma mater, это в какой-то мере заслуга ВУЗа),
          процент трудоустройства студентов через 9 месяцев после окончания ВУЗа, успехи университетских спортивных
          команд и т.д. т.п. Наконец, 25% рейтинга по-прежнему составляла репутация ВУЗа среди других ВУЗов согласно
          опросу экспертов.
        </p>
        <p>
          При этом, журнал хотел, чтобы его новый рейтинг вызывал доверие, поэтому категории подгонялись так, чтобы
          Гарварды-Стэнфорды-MIT-Йелли оказались наверху. Поэтому такая важная и очевидная вроде бы графа как
          "стоимость обучения" в него включена не была.
        </p>
        <p>
          К новой версии придраться было сложнее. Абитуриенты (и профессора) за неимением ничего лучшего, всё чаще
          обращались к U.S. News, когда речь шла о выборе ВУЗа.
        </p>
        <p>
          Обратите внимание: рейтинг создал положительную обратную связь и неустойчивость. ВУЗы заметили, что
          их позиция в этом списке ощутимо влияет на набор студентов и желание профессоров преподавать в данном ВУЗе.
          Начав сдавать позиции, ВУЗ сталкивался с тем, что ему гораздо труднее привлечь к себе профессоров и студентов
          и откатывался назад ещё дальше - положительная обратная связь делает сильных сильнее, а слабых слабее.
        </p>
        <p>
          В результате, на положение ВУЗа в рейтинге вынуждены были начали смотреть и сами попечительские советы.
        </p>
        <p>
          Например, в 2008 попечительский совет Техасского Христианского Университета (TCU) едва не уволил
          ректора за то, что при том, что все показатели университета росли (!), с каждым годом он откатывался всё
          дальше назад - на 97, 105, 108 и 113 места. Оказалось, что показатели росли, но они росли медленнее, чем у
          конкурентов, в результате чего позиции университета в рейтинге слабели. Между ВУЗами пошла настоящая борьба за
          выживание.
        </p>
        <p>
          Ректоры хотя бы из инстинкта самосохранения (кому охота быть вызванным на ковёр попечительским советом и
          с позором уволенным) начали "химичить", чтобы втащить ВУЗ повыше в списке U.S. News.
        </p>
        <p>
          Как это сделать? Ну, изменить репутацию ВУЗа напрямую может быть непросто, а вот повлиять на
          другие составляющие рейтинга можно: сделать ремонт, построить новые здания, общагу с бассейном, красивые холлы,
          позвать колледжских звезд в баскетбольную команду, устроить кампанию по привлечению пожертвований от
          выпускников...
        </p>
        <p>
          Тот же TCU вынужден был запустить кампанию по сбору средств, запланировав собрать $250 миллионов - в итоге же
          удалось привлечь почти полмиллиарда! Уже сам факт прироста суммы пожертвований поспособствовал росту рейтинга.
          Но дальше и привлечённые деньги начали работать.
        </p>
        <p>
          $100 миллионов из них были немедленно истрачены на центральный молл и здание студенческого союза. Куча денег
          ушла на спортивную программу, так что футбольная команда TCU привлекла в свои ряды лучших атлетов со всей
          страны и завоевала Rose Bowl. Известен другой случай, когда обучение футбольной звезды Дуга Флютье
          (Doug Flutie) в Boston College в 1984 увеличило число поступающих туда на 30%, так что рост
          престижа ВУЗа благодаря присутствию спортивных звёзд получил название "эффекта Флютье".
        </p>
        <p>
          Что ж, абитуре действительно приятно учиться в красивых зданиях и болеть за красавчиков-спортсменов, так что
          это ведет и к росту рейтинга ВУЗа, и приводит к объективному росту интереса у абитуриентов. Кампания
          увенчалась успехом, TCU взлетел на 76 место. К качеству образования, впрочем, ничто из этого отношения не имеет...
        </p>
        <p>
          К тому же, за все это кто-то должен платить. Пожертвования выпускников - это хорошо, но одними ими сыт не
          будешь. Большая часть средств всё-таки извлекалась из карманов родителей студентов.
        </p>
        <p>
          А в Штатах есть государственная программа образовательных кредитов на образование. В 16 лет тебе примерно все
          равно, взять в долг 60 или 80 тысяч долларов, и выбирая между <a href="https://www.urbandictionary.com/define.php?term=fly-over%20state">Flyowa State University</a> за $60 тысяч и приличным частным универсистетом (не из Ivy
          League, но тоже ничего), скажем, за $80 тысяч студенты и родители предпочитали более дорогой, если верили, что более
          дорогой ВУЗ даст их чаду лучший старт, более высокий социальный статус и более высокооплачиваемую работу. И
          цены поползли вверх. И сейчас хорошее юридическое образование стоит около $150 тысяч.
        </p>
        <hr />
        <p>
          Кстати, ректораты пускали в ход и грязные трюки.
        </p>
        <ul>
          <li>Baylor University заплатил первокурсникам за то, чтобы они пересдали SAT (ЕГЭ), надеясь,
          таким образом поднять их средний балл.</li>
          <li>Некоторые университеты по прошествии 9 месяцев с выпускного начали нанимать на временные подработки собственных выпускников, чтобы повысить процент трудоустройства в рейтинге.</li>
          <li>Масса ВУЗов рассылала настоящии рекламные проспекты экспертам из других ВУЗов, которых опрашивали при составлении 25% рейтинга, основанных на мнениях.</li>
          <li>Масса колледжей вроде Iona College просто проврались, завышая все статистические показатели, входящие в рейтинг.</li>
        </ul>
        <p>
          Когда в рейтинг включили и иностранные ВУЗы, произошла интересная неожиданность: Университет Саудовской Аравии
          имени Короля Абдулазиза занял 7-ое место в мире среди математических ВУЗов, обставив признанных лидеров вроде
          Кембриджа и MIT. Лиор Пахтер из Беркли (к слову, биоинформатики, Pachter lab - это его лаба, они пишут Kallisto)
          решил проследить происхождение этих успехов. Выяснилось, что Саудовская Аравия связалась с рядом высокоцитируемых
          математиков, предложив тем $72 тысячи в год за должность приглашённых профессоров. В их обязанности входило
          раз в год прилетать на 3 недели бизнес-классом и читать небольшой курс лекций, проживая в пятизвёздочном отеле.
          Но! В журналах при этом следовало писать affiliation с Университетом имени Короля Абдулазиза. В результате,
          цитируемость его сотрудников в индексе Thompson-Reuters взлетела в небеса. Эту тактику, кстати, до прихода
          Кулешова использовали и чинуши из СколТеха.
        </p>
        <hr />
        <p>
          Что еще хуже, завелись частные ВУЗы очень низкого качества, которые смекнули, что на этом можно подзаработать
          иначе. Вместо того, чтобы вкладываться в facilities и тп, они стали вкладываться в маркетинг. Они отследили,
          что многие бедные люди принимают решение о втором образовании на эмоциях, попав в тяжелую жизненную ситуацию
          (например, бывшие военные после ранения, матери-одиночки, люди понесшие тяжелую утрату или болезнь близких).
          Эти люди понимают, что они в тупике и то что им мешает выбраться - это безденежье из-за низкого социального
          статуса, связанного с недостатком образования.
        </p>
        <p>
          Они начали прицельно бить в этих людей таргетированной рекламой на Facebook'ах и т.п., специально (!)
          инструктируя своих сейлзов искать и дурить уязвимых. Там куча недобросовестных трюков была. Короче, в итоге,
          они убеждали таких людей идти к ним, беря образовательные кредиты на 60 тысяч долларов, когда, по мнению
          работодателей, дипломы таких ВУЗов были ничуть не лучше государственных ВУЗов стоимстью в 10 тысяч долларов -
          просто онм рекламировались активнее, чем государственные и заманивали к себе отчаявшихся людей - бизнес.
        </p>
        <p>
          При этом их расходы на обучение и маркетинг распределялись как $892 на обучение - $2,225 на маркетинг. Директор
          такой компании Apollo выписал себе в 2015 годовой бонус в размере 25 миллионов долларов.
        </p>
        <hr />
        <p>
          В книге Weapons of Math Destruction встречается масса других примеров того, как капиталистические циклы
          положительной обратной связи приводят к социальным катастрофам, концентрируют власть в руках немногих и
          ухудшают жизнь большинства. Дедушка Маркс называл эти процессы первоначальным накоплением капитала
          (ярким историческим примером такого процесса являюстя, например, <a href="/blog/2017-01-05-1">Огораживания в средневековой Англии</a>).
        </p>
        <p>
          Знаете ли вы, например, что большинство работодателей смотрит на вашу кредитную историю, так что пропущенный
          платёж может стоить вам высокооплачиваемой работы? Или что работодатели в США часто проводят тесты
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};