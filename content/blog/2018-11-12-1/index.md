---
title: Focal loss and Average Precision
date: "2018-11-12T00:00:00.284Z"
tags: ["programming"]
cover: "./loss.png"
description: A simple loss function for multiclass classification with multiple classes that beautifully deals with class imbalance
---

<!-- https://cdn-images-1.medium.com/max/640/1*VPwNdzLC4gzQtI8De6P5HA.png -->
<div>
  <p>
    I've joined a Kaggle competition on classification of protein locations on photographs.
    Разибрался в 2 метриках, которые часто используют для классификации со множеством классов как у нас (например, на одной фотографии клетки белок может быть и в цитоплазме, и в лизосомах, и в аппарате Голдьжи - 3 класса присутствуют) - Focal Loss и Mean Average Precision (mAP) / Average Precision (AP).
  </p>
  <p>
    Идея Focal Loss такая: для задач онлайн-классификации объектов используют 2 подхода.
  </p>
  <ol>
    <li>Более старый R-CNN (2014-2016) делает 2 прохода по видео: сначала сканирующий для выделения потенциальных объектов, а потом основной со сверточной нейронкой. Работает точно, но долго: https://youtu.be/4eIBisqx9_g?t=553</li>
  </ol>
  <ol>
    <li>Более новый подход YOLO (2016-2017) "You Look (Live, кхе-кхе) Only Once" гораздо быстрее, делает только 1 проход. Но проблема в том, что у него AP где-то процентов на 10-20 ниже, что плохо: https://youtu.be/4eIBisqx9_g?t=669</li>
  </ol>
  <p>
    Авторы статьи про Focal Loss (https://arxiv.org/pdf/1708.02002.pdf) заметили, что основная проблема с точностью в YOLO возникает из-за class imbalance - редкие и сложные классы - это там, где он сыпется. Поэтому в феврале 2018 они придумали свою loss function под названием Focal Loss, которая гораздо сильнее штрафует за ошибки в редких классах.
  </p>
  <p>
    Она устроена так:
  </p>
  <p>
    Начинаем с бинарного классификатора: пусть вероятность, что данный москвич - мужчина p(Y=1)=0.45. Давайте посчитаем loss function нашего классификатора мужчина/женщина как cross entropy:
  </p>
  <pre>
    CE(p, Y=1) = -log(0.45),
    CE(p, Y=0) = -log(0.65).
  </pre>
  <p>
    Теперь допустим у нас есть более важный признак: негр ли он? Негры в Москве редки, частота, положим, 0.001 но мы хотим не ошибаться в этом классе. Тогда давайте усложним нашу обычную лосс-функцию, чтобы больше штрафовать за ошибку в цвете коже и меньше - за ошибку мужчина/женщина. Чтобы получить Focal Loss (FL), домножим CE на (1-p)^gamma, где gamma - произвольный параметр, например, 2.
  </p>
  <pre>
    FL(p=0.001, негр=1) = -(1-p)^gamma * log(p) = -0.999^2 * log(0.001) = (-1) *(-7)
  </pre>
  <p>
    в то время как для мужчины/женщины
  </p>
  <pre>
    FL(p=0.45, мужчина=1) = -(1-0.45)^gamma * log(p) = -0.65^2 * log(0.45) = (-0.62) * (-0.8)
  </pre>
  <p>
    Благодаря домножению на (1-p)^gamma получаются худо-бедно величины одного порядка, в то время как обычная кросс-энтропия неграми бы пренебрегла.
  </p>
  <p>
    Отличное объяснение AP/mAP на 2 странички A4 вот тут, даже пересказывать не буду.
  </p>
  <ul>
    <li>http://fastml.com/what-you-wanted-to-know-about-mean-average-precision/</li>
    <li>https://medium.com/@jonathan_hui/map-mean-average-precision-for-object-detection-45c121a31173</li>
  </ul>

</div>