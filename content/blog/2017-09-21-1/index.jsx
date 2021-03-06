import React from 'react';

let congenica = require('./photo_2018-01-27_00-12-53.jpg');

let metadata = {
  id: "2017-09-21-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "21.09.2017",
  language: "ru",
  title: "Congenica",
  subtitle: "",
  abstract: "Вчера был на семинаре основателей Congenica - компании, занимающейся медицинской генетикой врождённых болезней." +
  " Выступали двое из пяти или шести (!) её основателей: Ник Ленч и Энди Ричардс, и самое мощное впечатление произвёл Ричардс, с которым я после этого побеседовал.",
  cover: "http://www.uk-pgx-stratmed.co.uk/media/com_jbusinessdirectory/pictures/companies/180/cong-1478531631.gif",
  categories: ["how-life-works", "biomed", "business", "people"],
  time_to_read: 12,
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
        <img src="https://www.congenica.com/wp-content/uploads/2015/12/andy-r-200x200.jpg" className="img-responsive center-block" />
        <div className="caption text-center">Энди Ричардс</div>
        <p>
          Он невероятно яркий и энергичный серийный предприниматель, основавший уже около 25 бизнесов. Ему что-то в районе 55-60 лет, он химик-энзимолог по образованию, начавший заниматься биотехнологическим бизнесом ещё в одну из первых волн венчурного инвестирования в биотех в Великобритании в 1991. Говорит, что те компании сожгли кучу инвестиций и с трудом могли сделать что-то реально практически значимое.
        </p><p>
          Он был одним из ранних сотрудников своей компании и, видимо, получил небольшой опцион на долю в собственности. С большим трудом после многих лет, в 1999-ом его компания удачно продалась другому британскому биотеху, образовав крупнейший холдинг в Великобритании. Практический выхлоп у всей этой деятельности в итоге появился, но сейчас их разработки почти 20-летней давности ещё проходят третью стадию клинических испытаний...
        </p><p>
          Энди по итогам того поглощения достался приличный бонус, и он понял, что может себе позволить больше никогда не работать по найму. Было это перед самым крахом доткомов, так что ему вдвойне повезло, что он не успел вложить эти деньги до того, как пузырь лопнул. После краха мая 2000-ого, желающих инвестировать в технологические бизнесы существенно поубавилось, что позволило Энди стать заметной рыбой в маленьком пруду.
        </p><p>
          Сидение в четырёх стенах собственного особняка его не прельстило (ещё бы -  не могу представить себе эту бушующую энергию в состоянии покоя), и вскоре он обнаружил, что является инвестором аж в 4 стартапах сразу, и более того, в 2 из них - исполнительный директор... =)
        </p><p>
          За следующие 10 лет он успел вложиться в добрых два десятка компаний, в  том числе несколько раз достаточно успешно. Но главное, он набил руку в технологическом предпринимательстве, оно стало его професссией.
        </p><p>
          Несколько лет назад к нему пришёл Том Уивер, которому пришла в голову идея создания Congenica. Том обходил знакомых специалистов по медицинской генетике и пытался "продать" им идею своей компании. Энди был нужен Тому как специалист в работе с венчурными капиталистами, способный пробить финансирование и вообще построить бизнесовую сторону компании. Энди "купил".
        </p><p>
          Однако для старта понадобилось аж <a href="https://www.congenica.com/about-us/">5 основателей</a>, не считая технических и бизнесовых директоров:
        </p>
        <img src="http://cdn.frontlinegenomics.com/wp-content/uploads/Congenica_team-300x200.jpg" className="img-responsive center-block" />
        <div className="caption text-center">Энди Ричардс, Ричард Дурбин, Том Уивер, Ник Ленч, Мэттью Хёрлс</div>
        <p></p>
        <ul>
          <li> Ник Ленч был человеком, который умел работать с государственными чиновниками, поскольку он долго трудился в госкомпаниях, имел контакты и знал, как мыслят госслужащие</li>
          <li> Ричард Дурбин - один из самых знаменитых математиков в биоинформатике, воспитавший несколько поколений аспирантов, ставших профессорами и директорами институтов. Авторитет и контакты Дурбина были важным активом для компании</li>
          <li> Мэттью Хёрлс был специалистом по нарушениям развития, лидером группы в Сангере, ответственным за проекты PAGE и DECIPHER, которому предстояло тащить изрядную часть биологической науки</li>
          <li> Фил Билс, ещё один сооснователь, был человеком со стороны медицины, имевшим контакты с врачами</li>
        </ul>
        <p></p>
        <img src="https://www.cicplc.co.uk/media/1168/congenica-team-banner-bottom.jpg" className="img-responsive center-block" />
        <div className="caption text-center">Энди Ричардс, Ричард Дурбин, Том Уивер, Ник Ленч, Мэттью Хёрлс (с молодёжью)</div>
        <p>
          Первое финансирование компании основатели делали из собственных накоплений, однако они сразу знали, что им понадобятся большие деньги. Как думаете, при таком составе участников, трудно ли им было их получить?
        </p><p>
          Да! "Получать финансирование всегда трудно" - говорит Энди. При всём их авторитете и опыте, инвесторы слушали их питчи, но вкладывать не спешили. Прошло 18 месяцев, прежде чем им удалось получить первые полмиллиона долларов! Очень сомнительная бизнес-модель в значительной степени зависела от личных контактов Ленча и Билса с госслужащими и медиками, а у инвесторов не было никакой уверенности, что этого хватит. В общем-то, похоже что и не хватило.
        </p><p>
          "Инвесторы в биотехе бывают 2 видов" - говорит Энди - "это tech investors и life science investors". Первые всегда думают в контексте раннего продукта, оценивают темпы роста числа пользователей и узнаваемости компании. Вторые думают о биг-фарме или медицине, таблетках и пациентах. Вкладывая деньги, они хотят видеть отчуждаемую интеллектуальную собственность - патенты и т.п. - которая послужит гарантией их инвестиций. Congenica попадала куда-то в середину, не удовлетворяя в полной мере ни тех, ни других.
        </p><p>
          В 2014 Congenica наконец запустилась, и сейчас у них 60-65 сотрудников. Большинство в Британии, но они недавно наняли 5 продажников в Штатах и только что наняли директора по продажам в Китае.
        </p><p>
          Про Китай Энди поделился очень интересными мыслями. Если вы приедете в Китай и посмотрите кругом, то практически всё, что вы увидите, было построено в последние 5-15 лет. Волна инвестирования в строительство и недвижимость, захлестнувшая Китай в последние 10 лет, кажется, наконец, достигла своего предела роста и затухает. А рост - это основа существования нынешней власти в Китае, если рост остановится, им тут же предстоит столкнуться с недовольством населения. Так что для коммунистической партии Китая рост - это просто необходимое условие выживания.
        </p><p>
          Зато в стране сформировался средний класс - обеспеченных китайев около 200 миллионов - это, к примеру, больше, чем японцев вообще. Даже по мировым меркам это колоссальный платёжеспособный спрос.
        </p><p>
          Как и положено среднему классу, он стареет и хочет качественного мед. обслуживания. И тут интересный момент: если западные страны могут позволить себе не спешить с внедрением технологиий в медицину и как-то обходиться ручным трудом дорогущих врачей, то у китайцев такого выбора просто нет. Никакими судьбами они не смогут выучить или перекупить необходимые им несколько миллионов медиков в ближайшие несколько лет. Так что они просто вынуждены внедрять машинное обучение в медицину. И китайские инвесторы это осознают.
        </p><p>
          Ещё Энди поделился своими мыслями о рисках в академии, фарме и стартапах. Он считает, что работа в стартапах чуть ли не безопаснее и спокойнее!
        </p><p>
          Так, раунды инвестирования в венчурных проектах мало чем отличаются от грантового финансирования в академии. В академии вы постоянно разбиваете жизнь на отрезки в 3 года - будь то аспирантура, первый и второй постдоки или грант на исследование -  и заранее планируете, что будете делать потом, какие у вас ожидаются результаты на третьем году, как вы распределите ресурсы этого гранта, куда вы двинетесь дальше, как будете решать свою проблему двух тел и так далее.
        </p><p>
          А с виду сытая и стабильная фарма на деле постоянно реорганизуется и сокращает целые отделы. И вы внезапно обнаруживаете себя выброшенным на улицу вместе с сотней человек, составлявших до этого ваш круг общения, и всем вашим мнимым карьерным ростом и социальным статусом.
        </p><p>
          Я для себя сделал ещё один вывод: чёрт возьми, зачем 15 лет строить карьеру в академии, выбиваться из сил в этой унылой, полуголодной и зачастую ужасающе некомпетентной среде лишь затем, чтобы после 15 лет обнаружить себя сорока-пятидесятилетним и осознать, что для вополощения идей тебе нужно ещё всего-то 5 сооснователей и полтора года, чтобы поднять полмиллиона долларов. Которые в программировании или финтехе зачастую удаётся поднять компаниям, основанным тремя 25-летними в гараже уже через год (и, зачастую, отбить через 3-5 лет)?
        </p><p>
          Там никто не будет сдерживать твою фантазию - придумай и делай что хочешь, например, какой-нибудь Sentry, SouceLabs, Hotjar или Docker. Биология - это невозвратные инвестиции - эти знания понижают рыночную стоимость технаря, а не повышают и затрудняют самореализацию, а не облегчают. Спасибо Энди, что окончательно меня в этом убедил.
        </p>
        <img src={congenica} className="img-responsive center-block" />
        <p>
            При этом, на мой взгляд, Congenica безбожно завышает объём рынка в своей презентации: может по Штатам и пишут про 3% людей с врождёнными болезнями (а Congenica - про 1 больного / 17 человек) - но <a href="https://en.wikipedia.org/wiki/Congenital_disorder">частота трёх самых популярных наследственных болезней - порядка пары случаев на тысячу человек</a>.
        </p>
      </div>
    )
  }
}

export default Content;
export { metadata };
