import React from 'react';


let metadata = {
  id: "2017-07-05-1",
  author: "Борис Бурков",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "5.07.2017",
  title: "Babraham Institute",
  subtitle: "",
  abstract: "Как устроена жизнь простого российского мол. биолога я примерно представляю. Денег нет - денег нет - денег нет - денег нет - да ну нафиг, пойду в Мерк... \n" +
  "Посмотрел, как она устроена у английского. В каком-то смысле совсем по-другому, в каком-то - точно так же...",
  cover: "https://www.babraham.ac.uk/files/thumb/6f0819afee3db8f4244897096b05058e.png/900/300/fit",  //"http://www.bbsrc.ac.uk/bbsrc/cache/file/88E08F57-8AD0-4735-9AF86EC73E19D8B0.jpg",
  categories: ["how-life-works", "biomed"],
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
            Как устроена жизнь простого российского мол. биолога я примерно представляю. Денег нет - денег нет - денег нет - денег нет - да ну нафиг, пойду в Мерк...
            Посмотрел, как она устроена у английского. В каком-то смысле совсем по-другому, в каком-то - точно так же...
          </p>
          <p>
            Был на полубизнесовом сборище мокрых биологов в Babraham Institute, что в нескольких километрах от Wellcome Genome Campus. Институт (о котором, я грубо говоря, ничего раньше не знал) расположен возле другой английской деревеньки, на территории большого кампуса, может, даже больше чем Wellcome Trust'овский. Десяток зданий минимум.
          </p>
          <p>
            В самом институте живут фундаментальные учёные и исследуют каждый своё - какие-нибудь PI3K и mTOR'ы. В этот период жизненного цикла они обеспечивают своё существование грантами от разнообразных Biotechnology and Biological Sciences Research Council (BBSRC), Wellcome Trust и тому подобных некоммерческих грантодателей.
          </p>
          <p>
            В какой-то момент (в среднем - ближе к пенсии) у многих завлабов возникает желание поиграть в бизнесмена и попытаться коммерциализировать свои наработки (к примеру, сделать ингибитор своей любимой киназы, которую они последние 20 лет изучали). Пожалуйста! Рядом тусуется полчище представительств фармкомпаний вроде GSK, Biogen, AstraZeneca, Abbvie и т.п. Они охотно выделяют маленькие - порядка миллиона долларов - кусочки финансирования мокробиологическим стартапам. Везде шныряют 35-летние менеджеры этих компаний - бывшие аспиранты и постдоки, сменившие халат на пиджак - со всеми общаются и ищут клиентуру.
          </p>
          <p>
            В итоге, только на территории кампуса Babraham Institue находится 60 (!) маленьких стартапчиков (подозреваю, что бывших лабораторных групп). Только в отличие от IT-шников и других технарей, какой-то движухой здесь и близко не пахнет. Для больших компаний - это просто такой sweep, покорми всех, 59 из 60 провалятся и пойдут на заслуженный отдых, один выстрелит и принесёт таблетку, на которой ты заработаешь миллиард.  <img className="img-responsive center-block" src="https://www.ashmanov.com/upload/medialibrary/a49/a4908fc05fddf28f703598cd2bcdd65c.jpg" />
          </p>
          <p>
            Из мировоззренческих моментов узнал о любопытном эксперименте от тамошней бабушки-стартапщицы. Если посмотреть на эмбрионы пожилых мышей (или крыс, могу наврать), то у них по сравнению с молодыми часто случаются аномалии развития. Утверждается, что аномалии у них связаны в первую очередь с тем, что у пожилых матерей плохо функционирует плацента. Если подсаживать оплодотворённую яйцеклетку старой мыши на плаценту молодой, то частота аномалий очень сильно снижается. Дальше эта тётушка стала копать в глубь стека и выяснила, что плацента старой мыши плоха тем, что "слишком мало, слишком поздно" реагирует на изменения гормонального фона. А  это, в свою очередь, связано с накоплением эпигенетических маркеров в ДНК.
          </p>
        </div>
    )
  }
}

export default Content;
export { metadata };