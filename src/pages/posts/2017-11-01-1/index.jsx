import React from 'react';

let metadata = {
  id: "2017-11-1-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "01.11.2017",
  language: "ru",
  title: "Энигма, часть 1",
  subtitle: "Что такое \"Энигма\"?",
  abstract: "Что вообще такое эта знаменитая \"Энигма\", которую все так стремились взломать, и зачем она была нужна?",
  cover: "http://wiki.franklinheath.co.uk/images/3/31/PaperEnigmaAssembled.jpg",
  categories: ["history", "programming", "math", "people"],
  time_to_read: 5,
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
        <h3>Часть 1. Что такое "Энигма"?</h3>
        <p>
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
        <a href="/blog/2017-10-25-1">Часть 2</a>
      </div>
    )
  }
}

export default Content;
export {metadata};
