<?php  return array (
  'resourceClass' => 'MODX\\Revolution\\modDocument',
  'resource' => 
  array (
    'id' => 1,
    'type' => 'document',
    'pagetitle' => 'Главная',
    'longtitle' => 'Поздравляем!',
    'description' => '',
    'alias' => 'index',
    'link_attributes' => '',
    'published' => 1,
    'pub_date' => 0,
    'unpub_date' => 0,
    'parent' => 0,
    'isfolder' => 0,
    'introtext' => '',
    'content' => '<p>You have successfully installed MODX Revolution&nbsp;[[++settings_version]]!</p>
<p>Now that MODX is installed you can login to the manager to create your templates, manage content and install third party extras to add functionality to your&nbsp;website.</p>
<h2>New to&nbsp;MODX?</h2>
<p>Pages on a MODX site are called <a href="https://docs.modx.com/3.x/en/building-sites/resources">Resources</a>, and are visible on the left-hand side of the manager in the Resources tab. Resources can be nested under other resources, making it easy to create a tree of resources. There are different types of resources for different use&nbsp;cases.</p>
<p>Building your website is done through a combination of <strong>Templates</strong>, <strong>Template Variables</strong>, <strong>Chunks</strong>, <strong>Snippets</strong> and <strong>Plugins</strong>. Collectively these are known as <strong>Elements</strong>, and can also be found in the left-hand side of the manager, in the Elements&nbsp;tab.</p>
<p><a href="https://docs.modx.com/3.x/en/building-sites/elements/templates">Templates</a> contain the outer markup of any page. Each resource can only be assigned to a single template at a time. By adding <a href="https://docs.modx.com/3.x/en/building-sites/elements/template-variables">Template Variables</a> to a template, you can add custom fields for any resource using that particular&nbsp;template.</p>
<p>With <a href="https://docs.modx.com/3.x/en/building-sites/elements/chunks">Chunks</a> you can share parts of the markup, such as a header, across different templates. <a href="https://docs.modx.com/3.x/en/building-sites/elements/snippets">Snippets</a> are pieces of PHP that return dynamic content, such as summaries of other resources or the current date. With snippets, you will often use Chunks to mark up the pieces of content it returns, instead of mixing the PHP and&nbsp;HTML.</p>
<p>Finally, <a href="https://docs.modx.com/3.x/en/building-sites/elements/plugins">Plugins</a> enable more advanced features by hooking into the extensive events system provided by&nbsp;MODX.</p>
<p>To learn more about MODX, be sure to check out the <a href="https://docs.modx.com/3.x/en/getting-started">Getting Started</a> section in the official&nbsp;documentation.</p>',
    'richtext' => 1,
    'template' => 2,
    'menuindex' => 0,
    'searchable' => 1,
    'cacheable' => 1,
    'createdby' => 1,
    'createdon' => 1689605915,
    'editedby' => 1,
    'editedon' => 1689608712,
    'deleted' => 0,
    'deletedon' => 0,
    'deletedby' => 0,
    'publishedon' => 0,
    'publishedby' => 0,
    'menutitle' => '',
    'donthit' => 0,
    'privateweb' => 0,
    'privatemgr' => 0,
    'content_dispo' => 0,
    'hidemenu' => 0,
    'class_key' => 'MODX\\Revolution\\modDocument',
    'context_key' => 'web',
    'content_type' => 9,
    'uri' => 'index',
    'uri_override' => 0,
    'hide_children_in_tree' => 0,
    'show_in_tree' => 1,
    'properties' => '{"autoredirector":{"old_uri":"index"}}',
    'alias_visible' => 1,
    '_content' => '<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="images/favicon.png">
<meta property="og:image" content="images/dist/preview.jpg">
<title>ProgIN</title>
</head>
<body class="index-body basic-bg">
    <div class="wrapper">
    <header class="header">
  <div class="header__container">
    <div class="header__top">
      <a href="/" class="header__logo logo">
        <img src="new/assets/img/logo-big.svg" alt="Progin.tech — Центр программирования для детей и взрослых" width="204" height="66">
      </a>
      <a href="tel:[[!phone2link? &value=`8 (960) 081 34-34`]]" class="header__contacts">8 (960) 081 34-34</a>
      <button type="button" class="header__button button button-normal button-chance">Бесплатный урок</button>
      <a href="https://progin.tvoyklass.com" target="_blank" class="header__login">Войти</a>
      <button type="button" class="header__burger burger-btn">Открыть меню</button>
    </div>
    <div class="header__body">
      <a href="/" class="header__logo-scroll logo">
        <img src="new/assets/img/logo-big.svg" alt="Логотип" width="204" height="66">
      </a>
      <nav class="header__nav nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="./index.html" class="nav__link">Главная</a>
      </li>
      <li class="nav__item">
        <a href="./courses.html" class="nav__link">Курсы</a>
      </li>
      <li class="nav__item">
        <a href="./about.html" class="nav__link">О центре</a>
      </li>
      <li class="nav__item">
        <a href="./shop.html" class="nav__link">Магазин</a>
      </li>
      <li class="nav__item">
        <a href="./schedule.html" class="nav__link">Расписание</a>
      </li>
      <li class="nav__item">
        <a href="./contacts.html" class="nav__link">Контакты</a>
      </li>
    </ul>
</nav>
      <button type="button" class="header__button header__button-scroll button button-small button-chance">Бесплатный урок</button>
      <a href="https://progin.tvoyklass.com" target="_blank" class="header__login header__login-scroll">Войти</a>
      <button type="button" class="header__close">Закрыть меню</button>
    </div>
  </div>
</header>
    
    <main class="main">
      <article class="quest">
        <h2 class="visually-hidden">Ответы на вопросы</h2>
        <button type="button" class="quest__btn button-quest">Помочь?</button>
      </article>
      <section class="preview">
        <div class="preview__container">
          <div class="preview__body">
            <div class="stars">
              <div class="star star-1 stars-animation"></div>
              <div class="star star-2 stars-animation"></div>
              <div class="star star-3 stars-animation"></div>
              <div class="star star-4 stars-animation"></div>
            </div>
            <div class="parallax-bg preview__bg" data-parallax-speed="-4.5">
              <div class="parallax-inner">
                <picture>
                  <source type="image/webp" media="(max-width: 768px)" srcset="new/assets/img/preview-m.webp">
                  <source media="(max-width: 768px)" srcset="new/assets/img/preview-m.png">
                  <source type="image/webp" srcset="new/assets/img/bg-main.webp">
                  <img src="new/assets/img/bg-main.jpg" alt="Фоновое изображение">
                </picture>
              </div>
            </div>
            <canvas class="my-circle my-circle-3" data-circle-speed="2" data-circle-rad="20" data-circle-quantity="3"></canvas>
            <div class="preview__content">
              <h1 class="preview__title title-1">Программируем БУДУЩЕЕ ВМЕСТЕ!</h1>
              <p class="preview__subtitle">Открываем для ребёнка мир IT. Вдохновляем на создание своих проектов.</p>
              <button type="button" class="preview__button button-chance button-icon button button-large">Записаться на бесплатный урок</button>
            </div>
          </div>
          <div class="preview__bottom">
            <canvas class="my-circle my-circle-1"></canvas>
            <p class="preview__text title-3">Мы поможем Вам подобрать курс с учетом интереса ребенка</p>
            <button class="preview__enroll button button-large button-icon button-chance">Записаться</button>
          </div>
        </div>
      </section>
      <section class="teachers" data-rotate-scale="1.02" data-rotate-speed="90">
        <div class="teachers__container">
          <h2 class="teachers__title title-2">Наставники умеют объяснять сложные вещи простыми словами</h2>
          <div class="teachers__swiper swiper swiper-1">
            <div class="swiper-button-prev swiper-btn" onmousedown="event.preventDefault()"></div>
            <div class="swiper-button-next swiper-btn" onmousedown="event.preventDefault()"></div>
            <div class="teachers__list swiper-wrapper">
              [[!pdoPage?
                    tpl=`tpl.mp_teachers`
                    &limit=`6`
                    &parents=`5`
                    &sortby=`{"menuindex":"ASC"}`
                    &showHidden=`1`
                    &includeTVs=`video,image`
                    &includeContent=`1`
              ]]
            </div>
          </div>
    
          <ul class="teachers__about">
            <li class="teachers__about-item">
              <div class="teachers__item-head">
                <div class="teachers__icon">
                  <img src="new/assets/img/teachers/teachers-descr-1.png" alt="Украшающие изображение" width="60" height="60" loading="lazy">
                </div>
                <h4 class="teachers__item-title title-4">Практики, <br> а не теоретики</h4>
              </div>
              <p class="teachers__item-text">Все учителя работали в IT сфере и на практике применяли свои навыки. </p>
            </li>
            <li class="teachers__about-item">
              <div class="teachers__item-head">
                <div class="teachers__icon">
                  <img src="new/assets/img/teachers/teachers-dscr.png" alt="Украшающие изображение" width="60" height="60" loading="lazy">
                </div>
                <h4 class="teachers__item-title title-4">Большой опыт работы с детьми</h4>
              </div>
              <p class="teachers__item-text">Равным образом реализация намеченных плановых заданий играет важную роль.</p>
            </li>
            <li class="teachers__about-item">
              <div class="teachers__item-head">
                <div class="teachers__icon">
                  <img src="new/assets/img/teachers/teachers-descr-2.png" alt="Украшающие изображение" width="60" height="60" loading="lazy">
                </div>
                <h4 class="teachers__item-title title-4">Любознательные и заинтересованные</h4>
              </div>
              <p class="teachers__item-text">Значимость проблем настолько очевидна, что развитие идет своим полным ходом сегодня.</p>
            </li>
          </ul>
        </div>
      </section>
      <section class="lessons">
        <div class="lessons__container">
          <h2 class="lessons__title title-2">Как проходят наши уроки</h2>
          <div class="lessons__swiper swiper swiper-2">
            <div class="swiper-button-prev swiper-btn" onmousedown="event.preventDefault()"></div>
            <div class="swiper-button-next swiper-btn" onmousedown="event.preventDefault()"></div>
            <div class="lessons__list swiper-wrapper">
              <div class="lessons__item swiper-slide">
                <div class="lessons__body gradient-anime-main">
                  <h3 class="lessons__preview title-3">Ученик знакомится с будущим преподавателем</h3>
                  <p class="lessons__text">Равным образом реализация намеченных плановых заданий играет важную роль.</p>
                  <div class="lessons__video custom-video">
                    <div class="custom-video__bg" style="background-image: url(\'new/assets/img/lessons/lessons-main.jpg\');"></div>
                    <div class="custom-video__controls">
                      <button class="custom-video__play">Старт видео</button>
                      <button type="button" class="custom-video__close">Закрыть видео</button>
                      <div class="custom-video__bottom">
                        <div class="custom-video__wrap">
                          <button type="button" class="custom-video__play-small">Играть видео</button>
                          <button type="button" class="custom-video__audio">Звук</button>
                          <div class="custom-video__time">
                            <span class="custom-video__current-time">00:00</span> /
                            <span class="custom-video__duration">00:00</span>
                          </div>
                          <button type="button" class="custom-video__full">Полноэкранный режим</button>
                        </div>
                        <span class="custom-video__progress">
                    <span class="custom-video__current"></span>
                        </span>
                      </div>
                    </div>
                    <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                  </div>
                </div>
    
                <div class="lessons__right">
                  <div class="lessons__descr">
                    <h3 class="lessons__caption title-3">Сделает свою первую программу, сайт или игру</h3>
                    <p class="lessons__about">В связи с этим нужно подчеркнуть, что процессуальное изменение продолжает фьюжн.</p>
                  </div>
                  <div class="lessons__descr">
                    <h3 class="lessons__caption title-3">Увидит, программировать - интереснее, чем играть</h3>
                    <p class="lessons__about">Струна регрессийно представляет собой нечетный полиряд, таким образом конструктивное состояние всей музыкальной ткани.</p>
                  </div>
                </div>
              </div>
              <div class="lessons__item swiper-slide">
                <div class="lessons__body gradient-anime-main">
                  <h3 class="lessons__preview title-3">Ученик знакомится с будущим преподавателем</h3>
                  <p class="lessons__text">Равным образом реализация намеченных плановых заданий играет важную роль.</p>
                  <div class="lessons__video custom-video">
                    <div class="custom-video__bg" style="background-image: url(\'new/assets/img/lessons/lessons-main.jpg\');"></div>
                    <div class="custom-video__controls">
                      <button class="custom-video__play">Старт видео</button>
                      <button type="button" class="custom-video__close">Закрыть видео</button>
                      <div class="custom-video__bottom">
                        <div class="custom-video__wrap">
                          <button type="button" class="custom-video__play-small">Играть видео</button>
                          <button type="button" class="custom-video__audio">Звук</button>
                          <div class="custom-video__time">
                            <span class="custom-video__current-time">00:00</span> /
                            <span class="custom-video__duration">00:00</span>
                          </div>
                          <button type="button" class="custom-video__full">Полноэкранный режим</button>
                        </div>
                        <span class="custom-video__progress">
                    <span class="custom-video__current"></span>
                        </span>
                      </div>
                    </div>
                    <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                  </div>
                </div>
    
                <div class="lessons__right">
                  <div class="lessons__descr">
                    <h3 class="lessons__caption title-3">Сделает свою первую программу, сайт или игру</h3>
                    <p class="lessons__about">В связи с этим нужно подчеркнуть, что процессуальное изменение продолжает фьюжн.</p>
                  </div>
                  <div class="lessons__descr">
                    <h3 class="lessons__caption title-3">Увидит, программировать - интереснее, чем играть</h3>
                    <p class="lessons__about">Струна регрессийно представляет собой нечетный полиряд, таким образом конструктивное состояние всей музыкальной ткани.</p>
                  </div>
                </div>
              </div>
              <div class="lessons__item swiper-slide">
                <div class="lessons__body gradient-anime-main">
                  <h3 class="lessons__preview title-3">Ученик знакомится с будущим преподавателем</h3>
                  <p class="lessons__text">Равным образом реализация намеченных плановых заданий играет важную роль.</p>
                  <div class="lessons__video custom-video">
                    <div class="custom-video__bg" style="background-image: url(\'new/assets/img/lessons/lessons-main.jpg\');"></div>
                    <div class="custom-video__controls">
                      <button class="custom-video__play">Старт видео</button>
                      <button type="button" class="custom-video__close">Закрыть видео</button>
                      <div class="custom-video__bottom">
                        <div class="custom-video__wrap">
                          <button type="button" class="custom-video__play-small">Играть видео</button>
                          <button type="button" class="custom-video__audio">Звук</button>
                          <div class="custom-video__time">
                            <span class="custom-video__current-time">00:00</span> /
                            <span class="custom-video__duration">00:00</span>
                          </div>
                          <button type="button" class="custom-video__full">Полноэкранный режим</button>
                        </div>
                        <span class="custom-video__progress">
                    <span class="custom-video__current"></span>
                        </span>
                      </div>
                    </div>
                    <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                  </div>
                </div>
    
                <div class="lessons__right">
                  <div class="lessons__descr">
                    <h3 class="lessons__caption title-3">Сделает свою первую программу, сайт или игру</h3>
                    <p class="lessons__about">В связи с этим нужно подчеркнуть, что процессуальное изменение продолжает фьюжн.</p>
                  </div>
                  <div class="lessons__descr">
                    <h3 class="lessons__caption title-3">Увидит, программировать - интереснее, чем играть</h3>
                    <p class="lessons__about">Струна регрессийно представляет собой нечетный полиряд, таким образом конструктивное состояние всей музыкальной ткани.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <article class="program">
        <div class="program__container">
          <div class="program__inner">
            <div class="star star-1 stars-animation"></div>
            <canvas class="my-circle my-circle-2" data-circle-speed="0.5" data-circle-rad="30" data-circle-quantity="6"></canvas>
            <h2 class="program__title title-1">Программа обучения</h2>
    
            <div class="program__body">
              <div class="program__item program__item-1">
                <div class="program__header">
                  <div class="program__block">
                    <h2 class="program__caption title-2">Byte</h2>
                    <span class="program__years">6-9 лет</span>
                  </div>
                  <p class="program__num data-show-help">
                    1
                  </p>
                </div>
                <ul class="program__list">
                  <li class="program__piece">
                    <h4 class="program__name">KODU GAME LAB</h4>
                    <div class="program__icon data-show-help">
                      <img src="new/assets/img/program/small/kodu.png" alt="Kodu" width="44" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Лаборатория игр (CODE.ORG)</h4>
                    <div class="program__icon data-show-help">
                      <img src="new/assets/img/program/small/monkey.png" alt="Лаборатория игр (CODE.ORG)" width="73" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Scratch JR</h4>
                    <div class="program__icon data-show-help">
                      <img src="new/assets/img/program/small/scratch.svg" alt="Scratch JR" width="69" loading="lazy">
                    </div>
                  </li>
                </ul>
              </div>
              <div class="program__item program__item-2 program__item-right">
                <div class="program__header">
                  <div class="program__block">
                    <h2 class="program__caption title-2">Kilo <span>Byte</span></h2>
                    <span class="program__years">7-11 лет</span>
                  </div>
                  <p class="program__num data-show-help">
                    2
                  </p>
                </div>
                <ul class="program__list">
                  <li class="program__piece">
                    <h4 class="program__name">Minecraft Education</h4>
                    <div class="program__icon data-show-help">
                      <img src="new/assets/img/program/small/minecraft.png" alt="Minecraft Education" width="73" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Codeblock Scratch Pro</h4>
                    <div class="program__icon data-show-help">
                      <img src="new/assets/img/program/small/scratch-pro.svg" alt="Codeblock Scratch Pro" width="73" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Scratch Base</h4>
                    <div class="program__icon data-show-help">
                      <img src="new/assets/img/program/small/scratch-base.svg" alt="Scratch Base" width="73" loading="lazy">
                    </div>
                  </li>
                </ul>
              </div>
              <div class="program__item program__item-3">
                <div class="program__header">
                  <div class="program__block">
                    <h2 class="program__caption title-2">Mega <span>byte</span></h2>
                    <span class="program__years">8-12 лет</span>
                  </div>
                  <p class="program__num data-show-help">
                    3
                  </p>
                </div>
                <ul class="program__list">
                  <li class="program__piece">
                    <h4 class="program__name">Цифровая грамотность</h4>
                    <div class="program__icon data-show-help">
                      <img src="new/assets/img/program/small/minecraft.png" alt="Цифровая грамотность" width="73" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Roblox Studio Base</h4>
                    <div class="program__icon data-show-help program__icon-bad">
                      <img src="new/assets/img/program/small/roblox-base.png" alt="Roblox Studio Base" width="92" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Roblox Studio Pro</h4>
                    <div class="program__icon data-show-help program__icon-bad">
                      <img src="new/assets/img/program/small/roblox-pro.png" alt="Roblox Studio Pro" width="92" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Minecraft Python Base (Python)</h4>
                    <div class="program__icon data-show-help program__icon-bad">
                      <img src="new/assets/img/program/small/py.png" alt="Minecraft Python Base (Python)" width="92" loading="lazy">
                    </div>
                  </li>
                </ul>
              </div>
              <div class="program__item program__item-4 program__item-right">
                <div class="program__header">
                  <div class="program__block">
                    <h2 class="program__caption title-2">giga<span>byte</span></h2>
                    <span class="program__years">9-13 лет</span>
                  </div>
                  <p class="program__num data-show-help">
                    4
                  </p>
                </div>
                <ul class="program__list">
                  <li class="program__piece">
                    <h4 class="program__name">3D Rad</h4>
                    <div class="program__icon data-show-help program__icon-bad">
                      <img src="new/assets/img/program/small/3d.png" alt="3D Rad" width="92" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Mitt App Inventor</h4>
                    <div class="program__icon data-show-help">
                      <img src="new/assets/img/program/small/mit-app.png" alt="Mitt App Inventor" width="92" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Pencil Code</h4>
                    <div class="program__icon data-show-help program__icon-bad">
                      <img src="new/assets/img/program/small/penci.png" alt="Pencil Code" width="92" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Small Basic</h4>
                    <div class="program__icon data-show-help program__icon-bad">
                      <img src="new/assets/img/program/small/basic.png" alt="Small Basic" width="92" loading="lazy">
                    </div>
                  </li>
                  <li class="program__piece">
                    <h4 class="program__name">Construct 3</h4>
                    <div class="program__icon data-show-help program__icon-bad">
                      <img src="new/assets/img/program/small/construct.png" alt="Construct 3" width="73" loading="lazy">
                    </div>
                  </li>
                </ul>
              </div>
    
              <div class="program__item program__item-5">
                <div class="program__header">
                  <div class="program__block">
                    <h2 class="program__caption title-2">Tera<span>byte</span></h2>
                    <span class="program__years">10-16 лет</span>
                  </div>
                  <p class="program__num data-show-help">
                    5
                  </p>
                </div>
    
                <div class="program__tree">
                  <div class="program__branch">
                    <h3 class="program__branch-title">WEB</h3>
                    <div class="program__branch-content">
                      <div class="program__branch-preview">
                        <h4 class="program__branch-subtitle">design</h4>
                        <h4 class="program__branch-subtitle t-hidden">Разработка</h4>
                      </div>
                      <ul class="program__branch-list">
                        <li class="program__branch-item">
                          <h4 class="program__name">Inkscape</h4>
                          <div class="program__icon data-show-help">
                            <img src="new/assets/img/program/small/inscape.png" alt="Inkscape" width="64" loading="lazy">
                          </div>
                        </li>
                        <li class="program__branch-item">
                          <h4 class="program__name">Figma Base</h4>
                          <div class="program__icon data-show-help">
                            <img src="new/assets/img/program/small/figma-base.png" alt="Figma Base" width="79" loading="lazy">
                          </div>
                        </li>
                        <li class="program__branch-item">
                          <h4 class="program__name">Figma Pro</h4>
                          <div class="program__icon data-show-help">
                            <img src="new/assets/img/program/small/figma-pro.png" alt="Figma Pro" width="79" loading="lazy">
                          </div>
                        </li>
                      </ul>
                      <h4 class="program__branch-subtitle program__branch-subtitle-hidden">Разработка</h4>
                      <ul class="program__branch-list">
                        <li class="program__branch-item">
                          <h4 class="program__name">Html,CSS</h4>
                          <div class="program__icon data-show-help">
                            <img src="new/assets/img/program/small/html5.png" alt="Html,CSS" width="84" loading="lazy">
                          </div>
                        </li>
                        <li class="program__branch-item">
                          <h4 class="program__name">JS</h4>
                          <div class="program__icon data-show-help">
                            <img src="new/assets/img/program/small/js.png" alt="JS" width="81" loading="lazy">
                          </div>
                        </li>
                        <li class="program__branch-item">
                          <h4 class="program__name">PHP</h4>
                          <div class="program__icon data-show-help">
                            <img src="new/assets/img/program/small/php.png" alt="PHP" width="79" loading="lazy">
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
    
                  <div class="program__branch">
                    <h3 class="program__branch-title">Разработка игр</h3>
                    <ul class="program__branch-list">
                      <li class="program__branch-item">
                        <h4 class="program__name">C# Base</h4>
                        <div class="program__icon data-show-help">
                          <img src="new/assets/img/program/small/sharp.png" alt="C# Base" width="76">
                        </div>
                      </li>
                      <li class="program__branch-item">
                        <h4 class="program__name">C# Pro</h4>
                        <div class="program__icon data-show-help">
                          <img src="new/assets/img/program/small/sharppro.png" alt="C# Pro" width="76">
                        </div>
                      </li>
                      <li class="program__branch-item">
                        <h4 class="program__name">Unity Base</h4>
                        <div class="program__icon data-show-help">
                          <img src="new/assets/img/program/small/unit-base.png" alt="Unity Base" width="78">
                        </div>
                      </li>
                      <li class="program__branch-item">
                        <h4 class="program__name">Unity Pro</h4>
                        <div class="program__icon data-show-help">
                          <img src="new/assets/img/program/small/unit-pro.png" alt="Unity Pro" width="78">
                        </div>
                      </li>
                    </ul>
                  </div>
    
                  <div class="program__branch">
                    <h3 class="program__branch-title">Боты и ии</h3>
                    <ul class="program__branch-list">
                      <li class="program__branch-item">
                        <h4 class="program__name">Python</h4>
                        <div class="program__icon data-show-help">
                          <img src="new/assets/img/program/small/py-base.png" alt="Python" width="80" loading="lazy">
                        </div>
                      </li>
                      <li class="program__branch-item">
                        <h4 class="program__name">Bots</h4>
                        <div class="program__icon data-show-help">
                          <img src="new/assets/img/program/small/bots.svg" alt="Bots" width="80" loading="lazy">
                        </div>
                      </li>
                      <li class="program__branch-item program__icon-bad">
                        <h4 class="program__name">Neural Network</h4>
                        <div class="program__icon data-show-help">
                          <img src="new/assets/img/program/small/netw.png" alt="Neural Network" width="92" loading="lazy">
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
    
              <button type="button" class="program__btn button button-large button-chance">Попробовать бесплатно</button>
            </div>
    
          </div>
          <span class="program__help">
      <span class="program__help-text">Подсказка — элемент графического интерфейса, служит дополнительным средством обучения пользователя.</span>
          <a href="#" class="program__help-link" target="_blank">Подробнее</a>
          </span>
        </div>
      </article>
      <section class="about" data-rotate-scale="1.02">
        <div class="about__container">
          <h2 class="about__title title-2">О центре Progin</h2>
    
          <div class="about__swiper swiper swiper-3">
            <div class="swiper-button-prev swiper-btn" onmousedown="event.preventDefault()"></div>
            <div class="swiper-button-next swiper-btn" onmousedown="event.preventDefault()"></div>
            <div class="about__list swiper-wrapper">
              <div class="about__item swiper-slide">
                <div class="about__video about__video-big custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-1.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-small custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-2.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-small about__video-small-sm custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-3.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-wide custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-4.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
              </div>
              <div class="about__item swiper-slide about__item--right">
                <div class="about__video about__video-big custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-1.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-small custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-2.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-small about__video-small-sm custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-3.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-wide custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-4.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
              </div>
              <div class="about__item swiper-slide">
                <div class="about__video about__video-big custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-1.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-small custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-2.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-small about__video-small-sm custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-3.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
                <div class="about__video about__video-wide custom-video">
                  <div class="custom-video__bg" style="background-image: url(\'new/assets/img/about/about-4.jpg\');"></div>
                  <div class="custom-video__controls">
                    <button class="custom-video__play">Старт видео</button>
                    <button type="button" class="custom-video__close">Закрыть видео</button>
                    <div class="custom-video__bottom">
                      <div class="custom-video__wrap">
                        <button type="button" class="custom-video__play-small">Играть видео</button>
                        <button type="button" class="custom-video__audio">Звук</button>
                        <div class="custom-video__time">
                          <span class="custom-video__current-time">00:00</span> /
                          <span class="custom-video__duration">00:00</span>
                        </div>
                        <button type="button" class="custom-video__full">Полноэкранный режим</button>
                      </div>
                      <span class="custom-video__progress">
                  <span class="custom-video__current"></span>
                      </span>
                    </div>
                  </div>
                  <video src="./video/teachers/teacher.mp4" playsinline="" preload="none"></video>
                </div>
              </div>
            </div>
          </div>
    
          <div class="about__bottom">
            <div class="about__bottom-header">
              <div class="about__logo">
                <img src="new/assets/img/logo-big.svg" alt="Логотип" width="204" loading="lazy">
              </div>
              <p class="about__descr">В нашем центре мы преподаем самые передовые и востребованные языки, благодаря, которым дети получат все необходимые навыки. Занятия проходят в игровой форме, чтобы максимально сильно завлечь ребенка к IT.</p>
              <p class="about__descr">В нашем центре мы преподаем самые передовые и востребованные языки, благодаря, которым дети получат все необходимые навыки.</p>
            </div>
            <div class="about__bottom-img">
              <div class="about__bottom-wrap">
                <picture>
                  <source srcset="new/assets/img/about/about-bg.webp">
                  <img src="new/assets/img/about/about-bg.jpg" alt="Фоновое изображение" width="490" height="478">
                </picture>
              </div>
              <div class="about__bottom-wrap">
                <picture>
                  <source srcset="new/assets/img/about/about-bg-2.webp">
                  <img src="new/assets/img/about/about-bg-2.jpg" alt="Фоновое изображение" width="403" height="254">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="advantages">
        <div class="advantages__container">
          <h2 class="advantages__title title-2">Преимущества обучения в центре progin</h2>
    
          <div class="advantages__body">
            <div class="advantages__row">
              <div class="avdvantages__item advantages__item-1 avdvantages__item-small gradient-anime-main">
                <h3 class="advantages__subtitle title-3">Дети сами придумывают идеи проекта</h3>
              </div>
              <div class="avdvantages__item advantages__item-2 avdvantages__item-big">
                <h3 class="advantages__subtitle advantages__subtitle-black title-2">Индивидуальный план обучения</h3>
                <div class="advantages__img">
                  <img src="new/assets/img/advantages/advantages-2.png" alt="Фоновое изображение" width="290" height="290">
                </div>
              </div>
            </div>
            <div class="advantages__row">
              <div class="avdvantages__item advantages__item-3 avdvantages__item-big">
                <div class="stars">
                  <div class="star star-1 stars-animation"></div>
                </div>
                <h3 class="advantages__subtitle title-2">Учимся выступать и защищать проекты</h3>
              </div>
              <div class="avdvantages__item advantages__item-4 avdvantages__item-small">
                <canvas class="my-circle my-circle-4"></canvas>
                <h3 class="advantages__subtitle title-3">Большой спектр направлений</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="partners">
        <div class="partners__container">
          <h2 class="partners__title title-2">Наши партнеры</h2>
          <div class="partners__swiper swiper swiper-4">
            <div class="swiper-button-prev swiper-btn" onmousedown="event.preventDefault()"></div>
            <div class="swiper-button-next swiper-btn" onmousedown="event.preventDefault()"></div>
            <div class="partners__list swiper-wrapper">
              <div class="partners__item swiper-slide">
                <img src="new/assets/img/partners/nt.png" alt="Ntic" width="206" loading="lazy">
              </div>
              <div class="partners__item swiper-slide">
                <img src="new/assets/img/partners/hex.svg" alt="Хекслет" width="263" loading="lazy">
              </div>
              <div class="partners__item swiper-slide">
                <img src="new/assets/img/partners/iznit.png" alt="Ивмиит" width="138" loading="lazy">
              </div>
              <div class="partners__item swiper-slide">
                <img src="new/assets/img/partners/nt.png" alt="Ntic" width="206" loading="lazy">
              </div>
              <div class="partners__item swiper-slide">
                <img src="new/assets/img/partners/hex.svg" alt="Хекслет" width="263" loading="lazy">
              </div>
              <div class="partners__item swiper-slide">
                <img src="new/assets/img/partners/iznit.png" alt="Ивмиит" width="138" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="discount__container">
        <div class="star star-1 stars-animation"></div>
        <article class="discount discount-general">
          <h2 class="discount__title title-2">Получи скидку за приглашенного друга</h2>
          <button class="discount__button button button-large button-icon">Записаться</button>
        </article>
      </div>
    </main>
    
    <article class="quest-popup popup d-none">
      <div class="popup__wrap">
        <div class="popup__header">
          <h2 class="popup__title title-3">Вопросы<br> и ответы</h2>
          <div class="popup__img">
            <picture>
              <source type="image/webp" srcset="new/assets/img/header-popup-quest.webp">
              <img src="new/assets/img/header-popup-quest.png" alt="Фоновое изображение" width="200">
            </picture>
          </div>
        </div>
    
        <div class="popup__body">
          <div class="quest-popup__item">
            <button type="button" class="quest-popup__subtitle">Как поступить в Школу программистов?</button>
            <p class="quest-popup__text">Выбери отделение, в котором хочешь изучать программирование. Запишись на вступительный экзамен через нашу систему InformaticsСдай экзамен и начни путь настоящего программиста!</p>
          </div>
          <div class="quest-popup__item">
            <button type="button" class="quest-popup__subtitle">Как проходит вступительный экзамен и как к нему подготовиться?</button>
            <p class="quest-popup__text">Выбери отделение, в котором хочешь изучать программирование. Запишись на вступительный экзамен через нашу систему InformaticsСдай экзамен и начни путь настоящего программиста!</p>
          </div>
          <div class="quest-popup__item">
            <button type="button" class="quest-popup__subtitle">Сколько лет длится обучение в Школе программистов?</button>
            <p class="quest-popup__text">Выбери отделение, в котором хочешь изучать программирование. Запишись на вступительный экзамен через нашу систему InformaticsСдай экзамен и начни путь настоящего программиста!</p>
          </div>
          <div class="quest-popup__item">
            <button type="button" class="quest-popup__subtitle">Какие курсы я смогу изучать в Школе программистов?</button>
            <p class="quest-popup__text">Выбери отделение, в котором хочешь изучать программирование. Запишись на вступительный экзамен через нашу систему InformaticsСдай экзамен и начни путь настоящего программиста!</p>
          </div>
          <div class="quest-popup__item">
            <button type="button" class="quest-popup__subtitle">А что если мне не подойдет расписание?</button>
            <p class="quest-popup__text">Выбери отделение, в котором хочешь изучать программирование. Запишись на вступительный экзамен через нашу систему InformaticsСдай экзамен и начни путь настоящего программиста!</p>
          </div>
          <div class="quest-popup__item">
            <button type="button" class="quest-popup__subtitle">Какой документ я получу после окончания Школы программистов?</button>
            <p class="quest-popup__text">Выбери отделение, в котором хочешь изучать программирование. Запишись на вступительный экзамен через нашу систему InformaticsСдай экзамен и начни путь настоящего программиста!</p>
          </div>
        </div>
    
        <button type="button" class="popup__close">Закрыть окно</button>
      </div>
    </article>
    
    <article class="chance-popup popup d-none">
      <div class="popup__wrap">
        <div class="popup__header">
          <h2 class="popup__title title-3">Не упусти свой шанс!</h2>
          <div class="popup__img">
            <picture>
              <source type="image/webp" srcset="new/assets/img/gift.webp">
              <img src="new/assets/img/gift.png" alt="Фоновое изображение" width="200">
            </picture>
          </div>
        </div>
        <div class="popup__body">
          <p class="popup__text">Оставь заявĸу прямо сейчас и получите абсолютно бесплатный первый уроĸ в нашем центре.</p>
    
          <form action="#" method="POST" class="popup__form form-sign">
            <div class="form-sign__item form-sign__name">
              <label for="chance-name" class="visually-hidden">Имя</label>
              <input type="text" id="chance-name" name="Name" value="" placeholder="Как Вас зовут?" minlength="3" required>
            </div>
            <div class="form-sign__item form-sign__phone">
              <div class="form-sign__countries">
                <span class="countries__img countries__img-current">
                <img src="new/assets/img/icons/icons.svg#icon-code-7" alt="Иконка страны" width="18">
              </span>
                <button type="button" class="form-sign__country-btn">Выбрать страну</button>
              </div>
              <ul class="countries__list">
                <li class="countries__item">
                  <a href="#" class="countries__link" data-country-code="7">
                    <span class="countries__img">
                    <img src="new/assets/img/icons/icons.svg#icon-code-7" alt="Иконка страны" width="18">
                  </span>
                    <span>Российская Федерация</span>
                  </a>
                </li>
                <li class="countries__item">
                  <a href="#" class="countries__link" data-country-code="7">
                    <span class="countries__img">
                    <img src="new/assets/img/icons/icons.svg#kazah-flag" alt="Иконка страны" width="18">
                  </span>
                    <span>Казахстан</span>
                  </a>
                </li>
                <li class="countries__item">
                  <a href="#" class="countries__link" data-country-code="998">
                    <span class="countries__img">
                    <img src="new/assets/img/icons/icons.svg#uzbekistan-flag" alt="Иконка страны" width="18">
                  </span>
                    <span>Узбекистан</span>
                  </a>
                </li>
              </ul>
              <label for="chance-phone" class="visually-hidden">Телефон</label>
              <input type="tel" id="chance-phone" name="phone" value="" placeholder="+7 (000) 000-00-00" required>
            </div>
            <div class="form-sign__item form-sign__email">
              <label for="chance-email" class="visually-hidden">Email</label>
              <input type="email" id="chance-email" name="Email" value="" placeholder="Ваш email" required>
            </div>
            <div class="form-sign__item captcha">
    
            </div>
            <button type="submit" class="form-sign__button button button-normal">Отправить</button>
          </form>
    
          <p class="popup__agree">Оставляя заявĸу Вы принимаете условия <a href="#" target="_blank">соглашения</a> об обработĸе персональных данных</p>
        </div>
    
        <button type="button" class="popup__close">Закрыть окно</button>
      </div>
    </article>
    
    <article class="discount-popup popup d-none">
      <div class="popup__wrap">
        <div class="popup__header">
          <h2 class="popup__title title-3">Получи скидку прямо сейчас!</h2>
          <div class="popup__img">
            <picture>
              <source type="image/webp" srcset="new/assets/img/contacts/contacts-bg.webp">
              <img src="new/assets/img/contacts/contacts-bg.png" alt="Фоновое изображение" width="200">
            </picture>
          </div>
        </div>
        <div class="popup__body">
          <p class="popup__text">Оставь заявĸу прямо сейчас и получи сĸидĸу 15% на первый месяц обучения.</p>
          <form action="#" method="POST" class="popup__form form-sign">
            <div class="form-sign__item form-sign__name">
              <label for="discount-popup-name" class="visually-hidden">Имя</label>
              <input type="text" id="discount-popup-name" name="Name" value="" placeholder="Как Вас зовут?" minlength="3" required>
            </div>
            <div class="form-sign__item form-sign__phone">
              <div class="form-sign__countries">
                <span class="countries__img countries__img-current">
                <img src="new/assets/img/icons/icons.svg#icon-code-7" alt="Иконка страны" width="18">
              </span>
                <button type="button" class="form-sign__country-btn">Выбрать страну</button>
              </div>
              <ul class="countries__list">
                <li class="countries__item">
                  <a href="#" class="countries__link" data-country-code="7">
                    <span class="countries__img">
                    <img src="new/assets/img/icons/icons.svg#icon-code-7" alt="Иконка страны" width="18">
                  </span>
                    <span>Российская Федерация</span>
                  </a>
                </li>
                <li class="countries__item">
                  <a href="#" class="countries__link" data-country-code="7">
                    <span class="countries__img">
                    <img src="new/assets/img/icons/icons.svg#kazah-flag" alt="Иконка страны" width="18">
                  </span>
                    <span>Казахстан</span>
                  </a>
                </li>
                <li class="countries__item">
                  <a href="#" class="countries__link" data-country-code="998">
                    <span class="countries__img">
                    <img src="new/assets/img/icons/icons.svg#uzbekistan-flag" alt="Иконка страны" width="18">
                  </span>
                    <span>Узбекистан</span>
                  </a>
                </li>
              </ul>
              <label for="discount-popup-phone" class="visually-hidden">Телефон</label>
              <input type="tel" id="discount-popup-phone" name="phone" value="" placeholder="+7 (000) 000-00-00" required>
            </div>
            <div class="form-sign__item form-sign__email">
              <label for="discount-popup-email" class="visually-hidden">Email</label>
              <input type="email" id="discount-popup-email" name="Email" value="" placeholder="Ваш email" required>
            </div>
            <div class="form-sign__item captcha">
    
            </div>
            <button type="submit" class="form-sign__button button button-normal">Отправить</button>
          </form>
          <p class="popup__agree">Оставляя заявĸу Вы принимаете условия <a href="#" target="_blank">соглашения</a> об обработĸе персональных данных</p>
        </div>
    
        <button type="button" class="popup__close">Закрыть окно</button>
      </div>
    </article>
    
    <footer class="footer">
  <div class="footer__container">
    <div class="footer__logo">
      <img src="new/assets/img/logo-big.svg" alt="Логотип" width="192" height="120">
    </div>

    <div class="footer__body">
      <div class="footer__column">
        <h3 class="footer__preview">Контакты</h3>
        <ul class="footer__contacts">
          <li class="footer__contacts-item">
            <a href="./about.html">О центре</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./courses.html">Курсы</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./shop.html">Магазин</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./schedule.html">Расписание</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./contacts.html">Контакты</a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__preview">Социальные сети</h3>
        <ul class="footer__social social">
          <li class="social__item">
            <a href="https://t.me/progin_tech" class="social__link" target="_blank">
              <p class="social__img social__img-telega">
                <img src="new/assets/img/icons/icons.svg#Telegram" alt="Телеграм" width="12">
              </p>
              <span>
            @progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="https://vk.com/progin_tech" class="social__link" target="_blank">
              <p class="social__img social__img-vk">
                <img src="new/assets/img/icons/icons.svg#vk_logo" alt="Ввконтакте" width="24">
              </p>
              <span>
            progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="https://wa.me/79600813434" class="social__link" target="_blank">
              <p class="social__img social__img-what">
                <img src="new/assets/img/icons/icons.svg#WhatsApp" alt="Ватсап" width="12">
              </p>
              <span>
            8 (960) 081 34-34
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="https://www.instagram.com/progin_tech/" class="social__link" target="_blank">
              <p class="social__img social__img-inst">
                <img src="new/assets/img/icons/icons.svg#Instagram_logo" alt="Инстаграм" width="12">
              </p>
              <span>
            @progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="https://www.facebook.com/ProgIn.tech.official" class="social__link" target="_blank">
              <p class="social__img social__img-face">
                <img src="new/assets/img/icons/icons.svg#Facebook" alt="Фейсбук" width="12">
              </p>
              <span>
            ProgIn.tech.official
          </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__preview">Служба заботы</h3>
        <address class="footer__address">
          <div class="footer__address-item">
            <b class="footer__address-preview">Телефон</b>
            <a href="tel:[[!phone2link? &value=`8 (960) 081 34-34`]]">8 (960) 081 34-34</a>
          </div>
          <div class="footer__address-item">
            <b class="footer__address-preview">Email</b>
            <a href="mailto:support@progin.tech">support@progin.tech</a>
          </div>
        </address>
      </div>
    </div>

    <p class="footer__bottom">© Progin.tech <span class="footer__year">2023</span>. Все права защищены. Любое ĸопирование информации возможно тольĸо с согласия правообладателя ресурса.</p>
  </div>
</footer>
    </div>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
<link rel="stylesheet" href="new/assets/css/style.min.css?v=0.0.1">
    <script src="new/assets/js/app.min.js"></script>
</body>
</html>',
    '_isForward' => false,
  ),
  'contentType' => 
  array (
    'id' => 9,
    'name' => 'no-HTML',
    'description' => 'HTML content without extension',
    'mime_type' => 'text/html',
    'file_extensions' => '',
    'icon' => '',
    'headers' => 'a:0:{}',
    'binary' => 0,
  ),
  'policyCache' => 
  array (
  ),
  'elementCache' => 
  array (
    '[[$head]]' => '<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="images/favicon.png">
<meta property="og:image" content="images/dist/preview.jpg">
<title>ProgIN</title>',
    '[[$nav]]' => '<nav class="header__nav nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="./index.html" class="nav__link">Главная</a>
      </li>
      <li class="nav__item">
        <a href="./courses.html" class="nav__link">Курсы</a>
      </li>
      <li class="nav__item">
        <a href="./about.html" class="nav__link">О центре</a>
      </li>
      <li class="nav__item">
        <a href="./shop.html" class="nav__link">Магазин</a>
      </li>
      <li class="nav__item">
        <a href="./schedule.html" class="nav__link">Расписание</a>
      </li>
      <li class="nav__item">
        <a href="./contacts.html" class="nav__link">Контакты</a>
      </li>
    </ul>
</nav>',
    '[[$header]]' => '<header class="header">
  <div class="header__container">
    <div class="header__top">
      <a href="/" class="header__logo logo">
        <img src="new/assets/img/logo-big.svg" alt="Progin.tech — Центр программирования для детей и взрослых" width="204" height="66">
      </a>
      <a href="tel:[[!phone2link? &value=`8 (960) 081 34-34`]]" class="header__contacts">8 (960) 081 34-34</a>
      <button type="button" class="header__button button button-normal button-chance">Бесплатный урок</button>
      <a href="https://progin.tvoyklass.com" target="_blank" class="header__login">Войти</a>
      <button type="button" class="header__burger burger-btn">Открыть меню</button>
    </div>
    <div class="header__body">
      <a href="/" class="header__logo-scroll logo">
        <img src="new/assets/img/logo-big.svg" alt="Логотип" width="204" height="66">
      </a>
      <nav class="header__nav nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="./index.html" class="nav__link">Главная</a>
      </li>
      <li class="nav__item">
        <a href="./courses.html" class="nav__link">Курсы</a>
      </li>
      <li class="nav__item">
        <a href="./about.html" class="nav__link">О центре</a>
      </li>
      <li class="nav__item">
        <a href="./shop.html" class="nav__link">Магазин</a>
      </li>
      <li class="nav__item">
        <a href="./schedule.html" class="nav__link">Расписание</a>
      </li>
      <li class="nav__item">
        <a href="./contacts.html" class="nav__link">Контакты</a>
      </li>
    </ul>
</nav>
      <button type="button" class="header__button header__button-scroll button button-small button-chance">Бесплатный урок</button>
      <a href="https://progin.tvoyklass.com" target="_blank" class="header__login header__login-scroll">Войти</a>
      <button type="button" class="header__close">Закрыть меню</button>
    </div>
  </div>
</header>',
    '[[$footer]]' => '<footer class="footer">
  <div class="footer__container">
    <div class="footer__logo">
      <img src="new/assets/img/logo-big.svg" alt="Логотип" width="192" height="120">
    </div>

    <div class="footer__body">
      <div class="footer__column">
        <h3 class="footer__preview">Контакты</h3>
        <ul class="footer__contacts">
          <li class="footer__contacts-item">
            <a href="./about.html">О центре</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./courses.html">Курсы</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./shop.html">Магазин</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./schedule.html">Расписание</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./contacts.html">Контакты</a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__preview">Социальные сети</h3>
        <ul class="footer__social social">
          <li class="social__item">
            <a href="https://t.me/progin_tech" class="social__link" target="_blank">
              <p class="social__img social__img-telega">
                <img src="new/assets/img/icons/icons.svg#Telegram" alt="Телеграм" width="12">
              </p>
              <span>
            @progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="https://vk.com/progin_tech" class="social__link" target="_blank">
              <p class="social__img social__img-vk">
                <img src="new/assets/img/icons/icons.svg#vk_logo" alt="Ввконтакте" width="24">
              </p>
              <span>
            progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="https://wa.me/79600813434" class="social__link" target="_blank">
              <p class="social__img social__img-what">
                <img src="new/assets/img/icons/icons.svg#WhatsApp" alt="Ватсап" width="12">
              </p>
              <span>
            8 (960) 081 34-34
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="https://www.instagram.com/progin_tech/" class="social__link" target="_blank">
              <p class="social__img social__img-inst">
                <img src="new/assets/img/icons/icons.svg#Instagram_logo" alt="Инстаграм" width="12">
              </p>
              <span>
            @progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="https://www.facebook.com/ProgIn.tech.official" class="social__link" target="_blank">
              <p class="social__img social__img-face">
                <img src="new/assets/img/icons/icons.svg#Facebook" alt="Фейсбук" width="12">
              </p>
              <span>
            ProgIn.tech.official
          </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__preview">Служба заботы</h3>
        <address class="footer__address">
          <div class="footer__address-item">
            <b class="footer__address-preview">Телефон</b>
            <a href="tel:[[!phone2link? &value=`8 (960) 081 34-34`]]">8 (960) 081 34-34</a>
          </div>
          <div class="footer__address-item">
            <b class="footer__address-preview">Email</b>
            <a href="mailto:support@progin.tech">support@progin.tech</a>
          </div>
        </address>
      </div>
    </div>

    <p class="footer__bottom">© Progin.tech <span class="footer__year">2023</span>. Все права защищены. Любое ĸопирование информации возможно тольĸо с согласия правообладателя ресурса.</p>
  </div>
</footer>',
    '[[$style]]' => '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
<link rel="stylesheet" href="new/assets/css/style.min.css?v=0.0.1">',
    '[[$scripts]]' => '<script src="new/assets/js/app.min.js"></script>',
  ),
  'sourceCache' => 
  array (
    'MODX\\Revolution\\modChunk' => 
    array (
      'head' => 
      array (
        'fields' => 
        array (
          'id' => 17,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'head',
          'description' => '',
          'editor_type' => 0,
          'category' => 12,
          'cache_type' => 0,
          'snippet' => '<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="images/favicon.png">
<meta property="og:image" content="images/dist/preview.jpg">
<title>ProgIN</title>',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="images/favicon.png">
<meta property="og:image" content="images/dist/preview.jpg">
<title>ProgIN</title>',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
        ),
      ),
      'header' => 
      array (
        'fields' => 
        array (
          'id' => 19,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'header',
          'description' => '',
          'editor_type' => 0,
          'category' => 12,
          'cache_type' => 0,
          'snippet' => '<header class="header">
  <div class="header__container">
    <div class="header__top">
      <a href="/" class="header__logo logo">
        <img src="[[++assets_path]]/img/logo-big.svg" alt="[[++site_name]]" width="204" height="66">
      </a>
      <a href="tel:[[!phone2link? &value=`[[++support_phone]]`]]" class="header__contacts">[[++support_phone]]</a>
      <button type="button" class="header__button button button-normal button-chance">Бесплатный урок</button>
      <a href="[[++lk_moyklass]]" target="_blank" class="header__login">Войти</a>
      <button type="button" class="header__burger burger-btn">Открыть меню</button>
    </div>
    <div class="header__body">
      <a href="/" class="header__logo-scroll logo">
        <img src="[[++assets_path]]/img/logo-big.svg" alt="Логотип" width="204" height="66">
      </a>
      [[$nav]]
      <button type="button" class="header__button header__button-scroll button button-small button-chance">Бесплатный урок</button>
      <a href="[[++lk_moyklass]]" target="_blank" class="header__login header__login-scroll">Войти</a>
      <button type="button" class="header__close">Закрыть меню</button>
    </div>
  </div>
</header>',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '<header class="header">
  <div class="header__container">
    <div class="header__top">
      <a href="/" class="header__logo logo">
        <img src="[[++assets_path]]/img/logo-big.svg" alt="[[++site_name]]" width="204" height="66">
      </a>
      <a href="tel:[[!phone2link? &value=`[[++support_phone]]`]]" class="header__contacts">[[++support_phone]]</a>
      <button type="button" class="header__button button button-normal button-chance">Бесплатный урок</button>
      <a href="[[++lk_moyklass]]" target="_blank" class="header__login">Войти</a>
      <button type="button" class="header__burger burger-btn">Открыть меню</button>
    </div>
    <div class="header__body">
      <a href="/" class="header__logo-scroll logo">
        <img src="[[++assets_path]]/img/logo-big.svg" alt="Логотип" width="204" height="66">
      </a>
      [[$nav]]
      <button type="button" class="header__button header__button-scroll button button-small button-chance">Бесплатный урок</button>
      <a href="[[++lk_moyklass]]" target="_blank" class="header__login header__login-scroll">Войти</a>
      <button type="button" class="header__close">Закрыть меню</button>
    </div>
  </div>
</header>',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
        ),
      ),
      'nav' => 
      array (
        'fields' => 
        array (
          'id' => 18,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'nav',
          'description' => '',
          'editor_type' => 0,
          'category' => 12,
          'cache_type' => 0,
          'snippet' => '<nav class="header__nav nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="./index.html" class="nav__link">Главная</a>
      </li>
      <li class="nav__item">
        <a href="./courses.html" class="nav__link">Курсы</a>
      </li>
      <li class="nav__item">
        <a href="./about.html" class="nav__link">О центре</a>
      </li>
      <li class="nav__item">
        <a href="./shop.html" class="nav__link">Магазин</a>
      </li>
      <li class="nav__item">
        <a href="./schedule.html" class="nav__link">Расписание</a>
      </li>
      <li class="nav__item">
        <a href="./contacts.html" class="nav__link">Контакты</a>
      </li>
    </ul>
</nav>',
          'locked' => false,
          'properties' => NULL,
          'static' => false,
          'static_file' => '',
          'content' => '<nav class="header__nav nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="./index.html" class="nav__link">Главная</a>
      </li>
      <li class="nav__item">
        <a href="./courses.html" class="nav__link">Курсы</a>
      </li>
      <li class="nav__item">
        <a href="./about.html" class="nav__link">О центре</a>
      </li>
      <li class="nav__item">
        <a href="./shop.html" class="nav__link">Магазин</a>
      </li>
      <li class="nav__item">
        <a href="./schedule.html" class="nav__link">Расписание</a>
      </li>
      <li class="nav__item">
        <a href="./contacts.html" class="nav__link">Контакты</a>
      </li>
    </ul>
</nav>',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
        ),
      ),
      'footer' => 
      array (
        'fields' => 
        array (
          'id' => 20,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'footer',
          'description' => '',
          'editor_type' => 0,
          'category' => 12,
          'cache_type' => 0,
          'snippet' => '<footer class="footer">
  <div class="footer__container">
    <div class="footer__logo">
      <img src="[[++assets_path]]/img/logo-big.svg" alt="Логотип" width="192" height="120">
    </div>

    <div class="footer__body">
      <div class="footer__column">
        <h3 class="footer__preview">Контакты</h3>
        <ul class="footer__contacts">
          <li class="footer__contacts-item">
            <a href="./about.html">О центре</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./courses.html">Курсы</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./shop.html">Магазин</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./schedule.html">Расписание</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./contacts.html">Контакты</a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__preview">Социальные сети</h3>
        <ul class="footer__social social">
          <li class="social__item">
            <a href="[[++social_telegram]]" class="social__link" target="_blank">
              <p class="social__img social__img-telega">
                <img src="[[++assets_path]]/img/icons/icons.svg#Telegram" alt="Телеграм" width="12">
              </p>
              <span>
            @progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="[[++social_vk]]" class="social__link" target="_blank">
              <p class="social__img social__img-vk">
                <img src="[[++assets_path]]/img/icons/icons.svg#vk_logo" alt="Ввконтакте" width="24">
              </p>
              <span>
            progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="[[++social_whatsapp]]" class="social__link" target="_blank">
              <p class="social__img social__img-what">
                <img src="[[++assets_path]]/img/icons/icons.svg#WhatsApp" alt="Ватсап" width="12">
              </p>
              <span>
            [[++support_phone]]
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="[[++social_instagram]]" class="social__link" target="_blank">
              <p class="social__img social__img-inst">
                <img src="[[++assets_path]]/img/icons/icons.svg#Instagram_logo" alt="Инстаграм" width="12">
              </p>
              <span>
            @progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="[[++social_facebook]]" class="social__link" target="_blank">
              <p class="social__img social__img-face">
                <img src="[[++assets_path]]/img/icons/icons.svg#Facebook" alt="Фейсбук" width="12">
              </p>
              <span>
            ProgIn.tech.official
          </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__preview">Служба заботы</h3>
        <address class="footer__address">
          <div class="footer__address-item">
            <b class="footer__address-preview">Телефон</b>
            <a href="tel:[[!phone2link? &value=`[[++support_phone]]`]]">[[++support_phone]]</a>
          </div>
          <div class="footer__address-item">
            <b class="footer__address-preview">Email</b>
            <a href="mailto:[[++support_email]]">[[++support_email]]</a>
          </div>
        </address>
      </div>
    </div>

    <p class="footer__bottom">© Progin.tech <span class="footer__year">2023</span>. Все права защищены. Любое ĸопирование информации возможно тольĸо с согласия правообладателя ресурса.</p>
  </div>
</footer>',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '<footer class="footer">
  <div class="footer__container">
    <div class="footer__logo">
      <img src="[[++assets_path]]/img/logo-big.svg" alt="Логотип" width="192" height="120">
    </div>

    <div class="footer__body">
      <div class="footer__column">
        <h3 class="footer__preview">Контакты</h3>
        <ul class="footer__contacts">
          <li class="footer__contacts-item">
            <a href="./about.html">О центре</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./courses.html">Курсы</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./shop.html">Магазин</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./schedule.html">Расписание</a>
          </li>
          <li class="footer__contacts-item">
            <a href="./contacts.html">Контакты</a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__preview">Социальные сети</h3>
        <ul class="footer__social social">
          <li class="social__item">
            <a href="[[++social_telegram]]" class="social__link" target="_blank">
              <p class="social__img social__img-telega">
                <img src="[[++assets_path]]/img/icons/icons.svg#Telegram" alt="Телеграм" width="12">
              </p>
              <span>
            @progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="[[++social_vk]]" class="social__link" target="_blank">
              <p class="social__img social__img-vk">
                <img src="[[++assets_path]]/img/icons/icons.svg#vk_logo" alt="Ввконтакте" width="24">
              </p>
              <span>
            progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="[[++social_whatsapp]]" class="social__link" target="_blank">
              <p class="social__img social__img-what">
                <img src="[[++assets_path]]/img/icons/icons.svg#WhatsApp" alt="Ватсап" width="12">
              </p>
              <span>
            [[++support_phone]]
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="[[++social_instagram]]" class="social__link" target="_blank">
              <p class="social__img social__img-inst">
                <img src="[[++assets_path]]/img/icons/icons.svg#Instagram_logo" alt="Инстаграм" width="12">
              </p>
              <span>
            @progin_tech
          </span>
            </a>
          </li>
          <li class="social__item">
            <a href="[[++social_facebook]]" class="social__link" target="_blank">
              <p class="social__img social__img-face">
                <img src="[[++assets_path]]/img/icons/icons.svg#Facebook" alt="Фейсбук" width="12">
              </p>
              <span>
            ProgIn.tech.official
          </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__preview">Служба заботы</h3>
        <address class="footer__address">
          <div class="footer__address-item">
            <b class="footer__address-preview">Телефон</b>
            <a href="tel:[[!phone2link? &value=`[[++support_phone]]`]]">[[++support_phone]]</a>
          </div>
          <div class="footer__address-item">
            <b class="footer__address-preview">Email</b>
            <a href="mailto:[[++support_email]]">[[++support_email]]</a>
          </div>
        </address>
      </div>
    </div>

    <p class="footer__bottom">© Progin.tech <span class="footer__year">2023</span>. Все права защищены. Любое ĸопирование информации возможно тольĸо с согласия правообладателя ресурса.</p>
  </div>
</footer>',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
        ),
      ),
      'style' => 
      array (
        'fields' => 
        array (
          'id' => 22,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'style',
          'description' => '',
          'editor_type' => 0,
          'category' => 12,
          'cache_type' => 0,
          'snippet' => '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
<link rel="stylesheet" href="[[++assets_path]]/css/style.min.css?v=[[++assets_version]]">',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
<link rel="stylesheet" href="[[++assets_path]]/css/style.min.css?v=[[++assets_version]]">',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
        ),
      ),
      'scripts' => 
      array (
        'fields' => 
        array (
          'id' => 21,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'scripts',
          'description' => '',
          'editor_type' => 0,
          'category' => 12,
          'cache_type' => 0,
          'snippet' => '<script src="[[++assets_path]]/js/app.min.js"></script>',
          'locked' => false,
          'properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '<script src="[[++assets_path]]/js/app.min.js"></script>',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
        ),
      ),
    ),
    'MODX\\Revolution\\modSnippet' => 
    array (
      'phone2link' => 
      array (
        'fields' => 
        array (
          'id' => 51,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'phone2link',
          'description' => '',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => '$value = isset($value) ? $value : \'\';

$phone_number = preg_replace(\'/\\D/\', \'\', $value);
if (substr($phone_number, 0, 1) === \'8\') {
    $phone_number = \'7\' . substr($phone_number, 1);
}
return $phone_number;',
          'locked' => false,
          'properties' => 
          array (
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => '$value = isset($value) ? $value : \'\';

$phone_number = preg_replace(\'/\\D/\', \'\', $value);
if (substr($phone_number, 0, 1) === \'8\') {
    $phone_number = \'7\' . substr($phone_number, 1);
}
return $phone_number;',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'MODX\\Revolution\\Sources\\modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'pdoPage' => 
      array (
        'fields' => 
        array (
          'id' => 41,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'pdoPage',
          'description' => '',
          'editor_type' => 0,
          'category' => 7,
          'cache_type' => 0,
          'snippet' => 'use ModxPro\\PdoTools\\Support\\Paginator;
use MODX\\Revolution\\modSnippet;

/** @var array $scriptProperties */
/** @var modX $modx */

// Default variables
if (empty($pageVarKey)) {
    $pageVarKey = \'page\';
}
if (empty($pageNavVar)) {
    $pageNavVar = \'page.nav\';
}
if (empty($pageCountVar)) {
    $pageCountVar = \'pageCount\';
}
if (empty($totalVar)) {
    $totalVar = \'total\';
}
if (empty($page)) {
    $page = 1;
}
if (empty($pageLimit)) {
    $pageLimit = 5;
} else {
    $pageLimit = (integer)$pageLimit;
}
if (!isset($plPrefix)) {
    $plPrefix = \'\';
}
if (!empty($scriptProperties[\'ajaxMode\'])) {
    $scriptProperties[\'ajax\'] = 1;
}

// Convert parameters from getPage if exists
if (!empty($namespace)) {
    $plPrefix = $namespace;
}
if (!empty($pageNavTpl)) {
    $scriptProperties[\'tplPage\'] = $pageNavTpl;
}
if (!empty($pageNavOuterTpl)) {
    $scriptProperties[\'tplPageWrapper\'] = $pageNavOuterTpl;
}
if (!empty($pageActiveTpl)) {
    $scriptProperties[\'tplPageActive\'] = $pageActiveTpl;
}
if (!empty($pageFirstTpl)) {
    $scriptProperties[\'tplPageFirst\'] = $pageFirstTpl;
}
if (!empty($pagePrevTpl)) {
    $scriptProperties[\'tplPagePrev\'] = $pagePrevTpl;
}
if (!empty($pageNextTpl)) {
    $scriptProperties[\'tplPageNext\'] = $pageNextTpl;
}
if (!empty($pageLastTpl)) {
    $scriptProperties[\'tplPageLast\'] = $pageLastTpl;
}
if (!empty($pageSkipTpl)) {
    $scriptProperties[\'tplPageSkip\'] = $pageSkipTpl;
}
if (!empty($pageNavScheme)) {
    $scriptProperties[\'scheme\'] = $pageNavScheme;
}
if (!empty($cache_expires)) {
    $scriptProperties[\'cacheTime\'] = $cache_expires;
}
//---
$strictMode = !empty($strictMode);

$isAjax = !empty($scriptProperties[\'ajax\']) && !empty($_SERVER[\'HTTP_X_REQUESTED_WITH\']) && $_SERVER[\'HTTP_X_REQUESTED_WITH\'] == \'XMLHttpRequest\';
if ($isAjax && !isset($_REQUEST[$pageVarKey])) {
    return;
}

$modx->services[\'pdotools_config\'] = $scriptProperties;
/** @var Paginator $paginator */
$paginator = $modx->services->get(Paginator::class);
$paginator->pdoTools->addTime(\'pdoTools loaded\');

// Script and styles
if (!$isAjax && !empty($scriptProperties[\'ajaxMode\'])) {
    $paginator->loadJsCss();
}
// Removing of default scripts and styles so they do not overwrote nested snippet parameters
if ($snippet = $modx->getObject(modSnippet::class, [\'name\' => \'pdoPage\'])) {
    $properties = $snippet->get(\'properties\');
    if ($scriptProperties[\'frontend_js\'] == $properties[\'frontend_js\'][\'value\']) {
        unset($scriptProperties[\'frontend_js\']);
    }
    if ($scriptProperties[\'frontend_css\'] == $properties[\'frontend_css\'][\'value\']) {
        unset($scriptProperties[\'frontend_css\']);
    }
}

// Page
if (isset($_REQUEST[$pageVarKey]) && $strictMode && (!is_numeric($_REQUEST[$pageVarKey]) || ($_REQUEST[$pageVarKey] <= 1 && !$isAjax))) {
    return $paginator->redirectToFirst($isAjax);
} elseif (!empty($_REQUEST[$pageVarKey])) {
    $page = (integer)$_REQUEST[$pageVarKey];
}
$scriptProperties[\'page\'] = $page;
$scriptProperties[\'request\'] = $_REQUEST;
$scriptProperties[\'setTotal\'] = true;
// Limit
if (isset($_REQUEST[\'limit\'])) {
    if (is_numeric($_REQUEST[\'limit\']) && abs($_REQUEST[\'limit\']) > 0) {
        $scriptProperties[\'limit\'] = abs($_REQUEST[\'limit\']);
    } elseif ($strictMode) {
        unset($_GET[\'limit\']);

        return $paginator->redirectToFirst($isAjax);
    }
}
if (!empty($maxLimit) && !empty($scriptProperties[\'limit\']) && $scriptProperties[\'limit\'] > $maxLimit) {
    $scriptProperties[\'limit\'] = $maxLimit;
}

// Offset
$_offset = !empty($scriptProperties[\'offset\']) && $scriptProperties[\'offset\'] > 0
    ? (int)$scriptProperties[\'offset\']
    : 0;
$scriptProperties[\'offset\'] = $page > 1
    ? $scriptProperties[\'limit\'] * ($page - 1) + $_offset
    : $_offset;
if (!empty($scriptProperties[\'offset\']) && empty($scriptProperties[\'limit\'])) {
    $scriptProperties[\'limit\'] = 10000000;
}

$cache = !empty($cache) || (!$modx->user->id && !empty($cacheAnonymous));
$charset = $modx->getOption(\'modx_charset\', null, \'UTF-8\');
$url = htmlentities($paginator->getBaseUrl(), ENT_QUOTES, $charset);
$output = $pagination = $total = $pageCount = \'\';

$data = $cache
    ? $paginator->pdoTools->getCache($scriptProperties)
    : [];

if (empty($data)) {
    $output = $paginator->pdoTools->runSnippet(\'!\' . $scriptProperties[\'element\'], $scriptProperties);
    if ($output === false) {
        return \'\';
    } elseif (!empty($toPlaceholder)) {
        $output = $modx->getPlaceholder($toPlaceholder);
    }

    // Pagination
    $total = (int)$modx->getPlaceholder($totalVar);
    $pageCount = !empty($scriptProperties[\'limit\']) && $total > $_offset
        ? ceil(($total - $_offset) / $scriptProperties[\'limit\'])
        : 0;

    // Redirect to start if somebody specified incorrect page
    if ($page > 1 && $page > $pageCount && $strictMode) {
        return $paginator->redirectToFirst($isAjax);
    }
    if (!empty($pageCount) && $pageCount > 1) {
        $pagination = [
            \'first\' => $page > 1 && !empty($tplPageFirst)
                ? $paginator->makePageLink($url, 1, $tplPageFirst)
                : \'\',
            \'prev\' => $page > 1 && !empty($tplPagePrev)
                ? $paginator->makePageLink($url, $page - 1, $tplPagePrev)
                : \'\',
            \'pages\' => $pageLimit >= 7 && empty($disableModernPagination)
                ? $paginator->buildModernPagination($page, $pageCount, $url)
                : $paginator->buildClassicPagination($page, $pageCount, $url),
            \'next\' => $page < $pageCount && !empty($tplPageNext)
                ? $paginator->makePageLink($url, $page + 1, $tplPageNext)
                : \'\',
            \'last\' => $page < $pageCount && !empty($tplPageLast)
                ? $paginator->makePageLink($url, $pageCount, $tplPageLast)
                : \'\',
        ];

        if (!empty($pageCount)) {
            foreach ([\'first\', \'prev\', \'next\', \'last\'] as $v) {
                $_tpl = \'tplPage\' . ucfirst($v) . \'Empty\';
                if (!empty(${$_tpl}) && empty($pagination[$v])) {
                    $pagination[$v] = $paginator->pdoTools->getChunk(${$_tpl});
                }
            }
        }
    } else {
        $pagination = [
            \'first\' => \'\',
            \'prev\' => \'\',
            \'pages\' => \'\',
            \'next\' => \'\',
            \'last\' => \'\',
        ];
    }

    $data = [
        \'output\' => $output,
        $pageVarKey => $page,
        $pageCountVar => $pageCount,
        $pageNavVar => !empty($tplPageWrapper)
            ? $paginator->pdoTools->getChunk($tplPageWrapper, $pagination)
            : $paginator->pdoTools->parseChunk(\'\', $pagination),
        $totalVar => $total,
    ];
    if ($cache) {
        $paginator->pdoTools->setCache($data, $scriptProperties);
    }
}
/** @var bool $showLog */
if ($modx->user->isAuthenticated(\'mgr\') && (bool)$showLog) {
    $modx->setPlaceholder(\'pdoPageLog\', print_r($paginator->pdoTools->getTime(), true));
}

if ($isAjax) {
    if ($pageNavVar !== \'pagination\') {
        $data[\'pagination\'] = $data[$pageNavVar];
        unset($data[$pageNavVar]);
    }
    if ($pageCountVar !== \'pages\') {
        $data[\'pages\'] = (int)$data[$pageCountVar];
        unset($data[$pageCountVar]);
    }
    if ($pageVarKey !== \'page\') {
        $data[\'page\'] = (int)$data[$pageVarKey];
        unset($data[$pageVarKey]);
    }
    if ($totalVar !== \'total\') {
        $data[\'total\'] = (int)$data[$totalVar];
        unset($data[$totalVar]);
    }

    $maxIterations = (integer)$modx->getOption(\'parser_max_iterations\', null, 10);
    $modx->getParser()->processElementTags(\'\', $data[\'output\'], false, false, \'[[\', \']]\', [], $maxIterations);
    $modx->getParser()->processElementTags(\'\', $data[\'output\'], true, true, \'[[\', \']]\', [], $maxIterations);

    @session_write_close();
    exit(json_encode($data));
}

if (!empty($setMeta)) {
    $canurl = $paginator->pdoTools->config(\'scheme\') !== \'full\'
        ? $paginator->getCanonicalUrl($url)
        : $url;
    $modx->regClientStartupHTMLBlock(\'<link rel="canonical" href="\' . $canurl . \'"/>\');
    if ($data[$pageVarKey] > 1) {
        $prevUrl = $paginator->makePageLink($canurl, $data[$pageVarKey] - 1);
        $modx->regClientStartupHTMLBlock(
            \'<link rel="prev" href="\' . $prevUrl . \'"/>\'
        );
    }
    if ($data[$pageVarKey] < $data[$pageCountVar]) {
        $nextUrl = $paginator->makePageLink($canurl, $data[$pageVarKey] + 1);
        $modx->regClientStartupHTMLBlock(
            \'<link rel="next" href="\' . $nextUrl . \'"/>\'
        );
    }
}

$modx->setPlaceholders($data, $plPrefix);
if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $data[\'output\']);
} else {
    return $data[\'output\'];
}',
          'locked' => false,
          'properties' => 
          array (
            'plPrefix' => 
            array (
              'name' => 'plPrefix',
              'desc' => 'pdotools_prop_plPrefix',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Префикс для выставляемых плейсхолдеров, по умолчанию "wf.".',
              'area_trans' => '',
            ),
            'limit' => 
            array (
              'name' => 'limit',
              'desc' => 'pdotools_prop_limit',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => 10,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Ограничение количества результатов выборки. Можно использовать "0".',
              'area_trans' => '',
            ),
            'maxLimit' => 
            array (
              'name' => 'maxLimit',
              'desc' => 'pdotools_prop_maxLimit',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => 100,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Максимально возможный лимит выборки. Перекрывает лимит, указанный пользователем через url.',
              'area_trans' => '',
            ),
            'offset' => 
            array (
              'name' => 'offset',
              'desc' => 'pdotools_prop_offset',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Пропуск результатов от начала.',
              'area_trans' => '',
            ),
            'page' => 
            array (
              'name' => 'page',
              'desc' => 'pdotools_prop_page',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Номер страницы для вывода. Перекрывается номером, указанным пользователем через url.',
              'area_trans' => '',
            ),
            'pageVarKey' => 
            array (
              'name' => 'pageVarKey',
              'desc' => 'pdotools_prop_pageVarKey',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'page',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Имя переменной для поиска номера страницы в url.',
              'area_trans' => '',
            ),
            'totalVar' => 
            array (
              'name' => 'totalVar',
              'desc' => 'pdotools_prop_totalVar',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'page.total',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Имя плейсхолдера для сохранения общего количества результатов.',
              'area_trans' => '',
            ),
            'pageLimit' => 
            array (
              'name' => 'pageLimit',
              'desc' => 'pdotools_prop_pageLimit',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => 5,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Количество ссылок на страницы. Если больше или равно 7 - включается продвинутый режим отображения.',
              'area_trans' => '',
            ),
            'element' => 
            array (
              'name' => 'element',
              'desc' => 'pdotools_prop_element',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'pdoResources',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Имя сниппета для запуска.',
              'area_trans' => '',
            ),
            'pageNavVar' => 
            array (
              'name' => 'pageNavVar',
              'desc' => 'pdotools_prop_pageNavVar',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'page.nav',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Имя плейсхолдера для вывода пагинации.',
              'area_trans' => '',
            ),
            'pageCountVar' => 
            array (
              'name' => 'pageCountVar',
              'desc' => 'pdotools_prop_pageCountVar',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'pageCount',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Имя плейсхолдера для вывода количества страниц.',
              'area_trans' => '',
            ),
            'pageLinkScheme' => 
            array (
              'name' => 'pageLinkScheme',
              'desc' => 'pdotools_prop_pageLinkScheme',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Схема генерации ссылки на страницу. Можно использовать плейсхолдеры [[+pageVarKey]] и [[+page]]',
              'area_trans' => '',
            ),
            'tplPage' => 
            array (
              'name' => 'tplPage',
              'desc' => 'pdotools_prop_tplPage',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item"><a class="page-link" href="[[+href]]">[[+pageNo]]</a></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления обычной ссылки на страницу.',
              'area_trans' => '',
            ),
            'tplPageWrapper' => 
            array (
              'name' => 'tplPageWrapper',
              'desc' => 'pdotools_prop_tplPageWrapper',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <ul class="pagination">[[+first]][[+prev]][[+pages]][[+next]][[+last]]</ul>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления всего блока пагинации, содержит плейсхолдеры страниц.',
              'area_trans' => '',
            ),
            'tplPageActive' => 
            array (
              'name' => 'tplPageActive',
              'desc' => 'pdotools_prop_tplPageActive',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item active"><a class="page-link" href="[[+href]]">[[+pageNo]]</a></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления ссылки на текущую страницу.',
              'area_trans' => '',
            ),
            'tplPageFirst' => 
            array (
              'name' => 'tplPageFirst',
              'desc' => 'pdotools_prop_tplPageFirst',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item"><a class="page-link" href="[[+href]]">[[%pdopage_first]]</a></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления ссылки на первую страницу.',
              'area_trans' => '',
            ),
            'tplPageLast' => 
            array (
              'name' => 'tplPageLast',
              'desc' => 'pdotools_prop_tplPageLast',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item"><a class="page-link" href="[[+href]]">[[%pdopage_last]]</a></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления ссылки на последнюю страницу.',
              'area_trans' => '',
            ),
            'tplPagePrev' => 
            array (
              'name' => 'tplPagePrev',
              'desc' => 'pdotools_prop_tplPagePrev',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item"><a class="page-link" href="[[+href]]">&laquo;</a></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления ссылки на предыдущую страницу.',
              'area_trans' => '',
            ),
            'tplPageNext' => 
            array (
              'name' => 'tplPageNext',
              'desc' => 'pdotools_prop_tplPageNext',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item"><a class="page-link" href="[[+href]]">&raquo;</a></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления ссылки на следующую страницу.',
              'area_trans' => '',
            ),
            'tplPageSkip' => 
            array (
              'name' => 'tplPageSkip',
              'desc' => 'pdotools_prop_tplPageSkip',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item disabled"><span class="page-link">...</span></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления пропущенных страниц при продвинутом режиме отображения (&pageLimit >= 7).',
              'area_trans' => '',
            ),
            'tplPageFirstEmpty' => 
            array (
              'name' => 'tplPageFirstEmpty',
              'desc' => 'pdotools_prop_tplPageFirstEmpty',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item disabled"><span class="page-link">[[%pdopage_first]]</span></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк, выводящийся при отсутствии ссылки на первую страницу.',
              'area_trans' => '',
            ),
            'tplPageLastEmpty' => 
            array (
              'name' => 'tplPageLastEmpty',
              'desc' => 'pdotools_prop_tplPageLastEmpty',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item disabled"><span class="page-link">[[%pdopage_last]]</span></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк, выводящийся при отсутствии ссылки на последнюю страницу.',
              'area_trans' => '',
            ),
            'tplPagePrevEmpty' => 
            array (
              'name' => 'tplPagePrevEmpty',
              'desc' => 'pdotools_prop_tplPagePrevEmpty',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item disabled"><span class="page-link">&laquo;</span></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк, выводящийся при отсутствии ссылки на предыдущую страницу.',
              'area_trans' => '',
            ),
            'tplPageNextEmpty' => 
            array (
              'name' => 'tplPageNextEmpty',
              'desc' => 'pdotools_prop_tplPageNextEmpty',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <li class="page-item disabled"><span class="page-link" >&raquo;</span></li>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Чанк, выводящийся при отсутствии ссылки на следующую страницу.',
              'area_trans' => '',
            ),
            'cache' => 
            array (
              'name' => 'cache',
              'desc' => 'pdotools_prop_cache',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => false,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Кэширование результатов работы сниппета.',
              'area_trans' => '',
            ),
            'cacheTime' => 
            array (
              'name' => 'cacheTime',
              'desc' => 'pdotools_prop_cacheTime',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => 3600,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Время актуальности кэша в секундах.',
              'area_trans' => '',
            ),
            'cacheAnonymous' => 
            array (
              'name' => 'cacheAnonymous',
              'desc' => 'pdotools_prop_cacheAnonymous',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => false,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Включить кэширование только для неавторизованных посетителей.',
              'area_trans' => '',
            ),
            'toPlaceholder' => 
            array (
              'name' => 'toPlaceholder',
              'desc' => 'pdotools_prop_toPlaceholder',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Если не пусто, сниппет сохранит все данные в плейсхолдер с этим именем, вместо вывода не экран.',
              'area_trans' => '',
            ),
            'ajax' => 
            array (
              'name' => 'ajax',
              'desc' => 'pdotools_prop_ajax',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => false,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Включить поддержку ajax запросов.',
              'area_trans' => '',
            ),
            'ajaxMode' => 
            array (
              'name' => 'ajaxMode',
              'desc' => 'pdotools_prop_ajaxMode',
              'type' => 'list',
              'options' => 
              array (
                0 => 
                array (
                  'text' => 'None',
                  'value' => '',
                  'name' => 'None',
                ),
                1 => 
                array (
                  'text' => 'Default',
                  'value' => 'default',
                  'name' => 'Default',
                ),
                2 => 
                array (
                  'text' => 'Scroll',
                  'value' => 'scroll',
                  'name' => 'Scroll',
                ),
                3 => 
                array (
                  'text' => 'Button',
                  'value' => 'button',
                  'name' => 'Button',
                ),
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Ajax пагинация "из коробки". Доступны 3 режима: "default", "button" и "scroll".',
              'area_trans' => '',
            ),
            'ajaxElemWrapper' => 
            array (
              'name' => 'ajaxElemWrapper',
              'desc' => 'pdotools_prop_ajaxElemWrapper',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '#pdopage',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'jQuery селектор элемента-обёртки с результатами и пагинацией.',
              'area_trans' => '',
            ),
            'ajaxElemRows' => 
            array (
              'name' => 'ajaxElemRows',
              'desc' => 'pdotools_prop_ajaxElemRows',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '#pdopage .rows',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'jQuery селектор элемента с результатами.',
              'area_trans' => '',
            ),
            'ajaxElemPagination' => 
            array (
              'name' => 'ajaxElemPagination',
              'desc' => 'pdotools_prop_ajaxElemPagination',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '#pdopage .pagination',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'jQuery селектор элемента с пагинацией.',
              'area_trans' => '',
            ),
            'ajaxElemLink' => 
            array (
              'name' => 'ajaxElemLink',
              'desc' => 'pdotools_prop_ajaxElemLink',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '#pdopage .pagination a',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'jQuery селектор ссылки на страницу.',
              'area_trans' => '',
            ),
            'ajaxElemMore' => 
            array (
              'name' => 'ajaxElemMore',
              'desc' => 'pdotools_prop_ajaxElemMore',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '#pdopage .btn-more',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'jQuery селектор кнопки загрузки результатов при ajaxMode = button.',
              'area_trans' => '',
            ),
            'ajaxTplMore' => 
            array (
              'name' => 'ajaxTplMore',
              'desc' => 'pdotools_prop_ajaxTplMore',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '@INLINE <button class="btn btn-primary btn-more">[[%pdopage_more]]</button>',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Шаблон кнопки для загрузки новых результатов при ajaxMode = button. Должен включать селектор, указанный в "ajaxElemMore".',
              'area_trans' => '',
            ),
            'ajaxHistory' => 
            array (
              'name' => 'ajaxHistory',
              'desc' => 'pdotools_prop_ajaxHistory',
              'type' => 'list',
              'options' => 
              array (
                0 => 
                array (
                  'text' => 'Auto',
                  'value' => '',
                  'name' => 'Auto',
                ),
                1 => 
                array (
                  'text' => 'Enabled',
                  'value' => 1,
                  'name' => 'Enabled',
                ),
                2 => 
                array (
                  'text' => 'Disabled',
                  'value' => 0,
                  'name' => 'Disabled',
                ),
              ),
              'value' => '',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Сохранять номер страницы в url при работе в режиме ajax.',
              'area_trans' => '',
            ),
            'frontend_js' => 
            array (
              'name' => 'frontend_js',
              'desc' => 'pdotools_prop_frontend_js',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '[[+assetsUrl]]js/pdopage.min.js',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Ссылка на javascript для подключения сниппетом.',
              'area_trans' => '',
            ),
            'frontend_css' => 
            array (
              'name' => 'frontend_css',
              'desc' => 'pdotools_prop_frontend_css',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '[[+assetsUrl]]css/pdopage.min.css',
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Ссылка на css стили оформления для подключения сниппетом.',
              'area_trans' => '',
            ),
            'setMeta' => 
            array (
              'name' => 'setMeta',
              'desc' => 'pdotools_prop_setMeta',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => true,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Регистрация мета-тегов со ссылками на предыдущую и следующую страницу.',
              'area_trans' => '',
            ),
            'strictMode' => 
            array (
              'name' => 'strictMode',
              'desc' => 'pdotools_prop_strictMode',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => true,
              'lexicon' => 'pdotools:properties',
              'area' => '',
              'desc_trans' => 'Строгий режим работы. pdoPage делает редиректы при загрузке несуществующих страниц.',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => 'core/components/pdotools/elements/snippets/snippet.pdopage.php',
          'content' => 'use ModxPro\\PdoTools\\Support\\Paginator;
use MODX\\Revolution\\modSnippet;

/** @var array $scriptProperties */
/** @var modX $modx */

// Default variables
if (empty($pageVarKey)) {
    $pageVarKey = \'page\';
}
if (empty($pageNavVar)) {
    $pageNavVar = \'page.nav\';
}
if (empty($pageCountVar)) {
    $pageCountVar = \'pageCount\';
}
if (empty($totalVar)) {
    $totalVar = \'total\';
}
if (empty($page)) {
    $page = 1;
}
if (empty($pageLimit)) {
    $pageLimit = 5;
} else {
    $pageLimit = (integer)$pageLimit;
}
if (!isset($plPrefix)) {
    $plPrefix = \'\';
}
if (!empty($scriptProperties[\'ajaxMode\'])) {
    $scriptProperties[\'ajax\'] = 1;
}

// Convert parameters from getPage if exists
if (!empty($namespace)) {
    $plPrefix = $namespace;
}
if (!empty($pageNavTpl)) {
    $scriptProperties[\'tplPage\'] = $pageNavTpl;
}
if (!empty($pageNavOuterTpl)) {
    $scriptProperties[\'tplPageWrapper\'] = $pageNavOuterTpl;
}
if (!empty($pageActiveTpl)) {
    $scriptProperties[\'tplPageActive\'] = $pageActiveTpl;
}
if (!empty($pageFirstTpl)) {
    $scriptProperties[\'tplPageFirst\'] = $pageFirstTpl;
}
if (!empty($pagePrevTpl)) {
    $scriptProperties[\'tplPagePrev\'] = $pagePrevTpl;
}
if (!empty($pageNextTpl)) {
    $scriptProperties[\'tplPageNext\'] = $pageNextTpl;
}
if (!empty($pageLastTpl)) {
    $scriptProperties[\'tplPageLast\'] = $pageLastTpl;
}
if (!empty($pageSkipTpl)) {
    $scriptProperties[\'tplPageSkip\'] = $pageSkipTpl;
}
if (!empty($pageNavScheme)) {
    $scriptProperties[\'scheme\'] = $pageNavScheme;
}
if (!empty($cache_expires)) {
    $scriptProperties[\'cacheTime\'] = $cache_expires;
}
//---
$strictMode = !empty($strictMode);

$isAjax = !empty($scriptProperties[\'ajax\']) && !empty($_SERVER[\'HTTP_X_REQUESTED_WITH\']) && $_SERVER[\'HTTP_X_REQUESTED_WITH\'] == \'XMLHttpRequest\';
if ($isAjax && !isset($_REQUEST[$pageVarKey])) {
    return;
}

$modx->services[\'pdotools_config\'] = $scriptProperties;
/** @var Paginator $paginator */
$paginator = $modx->services->get(Paginator::class);
$paginator->pdoTools->addTime(\'pdoTools loaded\');

// Script and styles
if (!$isAjax && !empty($scriptProperties[\'ajaxMode\'])) {
    $paginator->loadJsCss();
}
// Removing of default scripts and styles so they do not overwrote nested snippet parameters
if ($snippet = $modx->getObject(modSnippet::class, [\'name\' => \'pdoPage\'])) {
    $properties = $snippet->get(\'properties\');
    if ($scriptProperties[\'frontend_js\'] == $properties[\'frontend_js\'][\'value\']) {
        unset($scriptProperties[\'frontend_js\']);
    }
    if ($scriptProperties[\'frontend_css\'] == $properties[\'frontend_css\'][\'value\']) {
        unset($scriptProperties[\'frontend_css\']);
    }
}

// Page
if (isset($_REQUEST[$pageVarKey]) && $strictMode && (!is_numeric($_REQUEST[$pageVarKey]) || ($_REQUEST[$pageVarKey] <= 1 && !$isAjax))) {
    return $paginator->redirectToFirst($isAjax);
} elseif (!empty($_REQUEST[$pageVarKey])) {
    $page = (integer)$_REQUEST[$pageVarKey];
}
$scriptProperties[\'page\'] = $page;
$scriptProperties[\'request\'] = $_REQUEST;
$scriptProperties[\'setTotal\'] = true;
// Limit
if (isset($_REQUEST[\'limit\'])) {
    if (is_numeric($_REQUEST[\'limit\']) && abs($_REQUEST[\'limit\']) > 0) {
        $scriptProperties[\'limit\'] = abs($_REQUEST[\'limit\']);
    } elseif ($strictMode) {
        unset($_GET[\'limit\']);

        return $paginator->redirectToFirst($isAjax);
    }
}
if (!empty($maxLimit) && !empty($scriptProperties[\'limit\']) && $scriptProperties[\'limit\'] > $maxLimit) {
    $scriptProperties[\'limit\'] = $maxLimit;
}

// Offset
$_offset = !empty($scriptProperties[\'offset\']) && $scriptProperties[\'offset\'] > 0
    ? (int)$scriptProperties[\'offset\']
    : 0;
$scriptProperties[\'offset\'] = $page > 1
    ? $scriptProperties[\'limit\'] * ($page - 1) + $_offset
    : $_offset;
if (!empty($scriptProperties[\'offset\']) && empty($scriptProperties[\'limit\'])) {
    $scriptProperties[\'limit\'] = 10000000;
}

$cache = !empty($cache) || (!$modx->user->id && !empty($cacheAnonymous));
$charset = $modx->getOption(\'modx_charset\', null, \'UTF-8\');
$url = htmlentities($paginator->getBaseUrl(), ENT_QUOTES, $charset);
$output = $pagination = $total = $pageCount = \'\';

$data = $cache
    ? $paginator->pdoTools->getCache($scriptProperties)
    : [];

if (empty($data)) {
    $output = $paginator->pdoTools->runSnippet(\'!\' . $scriptProperties[\'element\'], $scriptProperties);
    if ($output === false) {
        return \'\';
    } elseif (!empty($toPlaceholder)) {
        $output = $modx->getPlaceholder($toPlaceholder);
    }

    // Pagination
    $total = (int)$modx->getPlaceholder($totalVar);
    $pageCount = !empty($scriptProperties[\'limit\']) && $total > $_offset
        ? ceil(($total - $_offset) / $scriptProperties[\'limit\'])
        : 0;

    // Redirect to start if somebody specified incorrect page
    if ($page > 1 && $page > $pageCount && $strictMode) {
        return $paginator->redirectToFirst($isAjax);
    }
    if (!empty($pageCount) && $pageCount > 1) {
        $pagination = [
            \'first\' => $page > 1 && !empty($tplPageFirst)
                ? $paginator->makePageLink($url, 1, $tplPageFirst)
                : \'\',
            \'prev\' => $page > 1 && !empty($tplPagePrev)
                ? $paginator->makePageLink($url, $page - 1, $tplPagePrev)
                : \'\',
            \'pages\' => $pageLimit >= 7 && empty($disableModernPagination)
                ? $paginator->buildModernPagination($page, $pageCount, $url)
                : $paginator->buildClassicPagination($page, $pageCount, $url),
            \'next\' => $page < $pageCount && !empty($tplPageNext)
                ? $paginator->makePageLink($url, $page + 1, $tplPageNext)
                : \'\',
            \'last\' => $page < $pageCount && !empty($tplPageLast)
                ? $paginator->makePageLink($url, $pageCount, $tplPageLast)
                : \'\',
        ];

        if (!empty($pageCount)) {
            foreach ([\'first\', \'prev\', \'next\', \'last\'] as $v) {
                $_tpl = \'tplPage\' . ucfirst($v) . \'Empty\';
                if (!empty(${$_tpl}) && empty($pagination[$v])) {
                    $pagination[$v] = $paginator->pdoTools->getChunk(${$_tpl});
                }
            }
        }
    } else {
        $pagination = [
            \'first\' => \'\',
            \'prev\' => \'\',
            \'pages\' => \'\',
            \'next\' => \'\',
            \'last\' => \'\',
        ];
    }

    $data = [
        \'output\' => $output,
        $pageVarKey => $page,
        $pageCountVar => $pageCount,
        $pageNavVar => !empty($tplPageWrapper)
            ? $paginator->pdoTools->getChunk($tplPageWrapper, $pagination)
            : $paginator->pdoTools->parseChunk(\'\', $pagination),
        $totalVar => $total,
    ];
    if ($cache) {
        $paginator->pdoTools->setCache($data, $scriptProperties);
    }
}
/** @var bool $showLog */
if ($modx->user->isAuthenticated(\'mgr\') && (bool)$showLog) {
    $modx->setPlaceholder(\'pdoPageLog\', print_r($paginator->pdoTools->getTime(), true));
}

if ($isAjax) {
    if ($pageNavVar !== \'pagination\') {
        $data[\'pagination\'] = $data[$pageNavVar];
        unset($data[$pageNavVar]);
    }
    if ($pageCountVar !== \'pages\') {
        $data[\'pages\'] = (int)$data[$pageCountVar];
        unset($data[$pageCountVar]);
    }
    if ($pageVarKey !== \'page\') {
        $data[\'page\'] = (int)$data[$pageVarKey];
        unset($data[$pageVarKey]);
    }
    if ($totalVar !== \'total\') {
        $data[\'total\'] = (int)$data[$totalVar];
        unset($data[$totalVar]);
    }

    $maxIterations = (integer)$modx->getOption(\'parser_max_iterations\', null, 10);
    $modx->getParser()->processElementTags(\'\', $data[\'output\'], false, false, \'[[\', \']]\', [], $maxIterations);
    $modx->getParser()->processElementTags(\'\', $data[\'output\'], true, true, \'[[\', \']]\', [], $maxIterations);

    @session_write_close();
    exit(json_encode($data));
}

if (!empty($setMeta)) {
    $canurl = $paginator->pdoTools->config(\'scheme\') !== \'full\'
        ? $paginator->getCanonicalUrl($url)
        : $url;
    $modx->regClientStartupHTMLBlock(\'<link rel="canonical" href="\' . $canurl . \'"/>\');
    if ($data[$pageVarKey] > 1) {
        $prevUrl = $paginator->makePageLink($canurl, $data[$pageVarKey] - 1);
        $modx->regClientStartupHTMLBlock(
            \'<link rel="prev" href="\' . $prevUrl . \'"/>\'
        );
    }
    if ($data[$pageVarKey] < $data[$pageCountVar]) {
        $nextUrl = $paginator->makePageLink($canurl, $data[$pageVarKey] + 1);
        $modx->regClientStartupHTMLBlock(
            \'<link rel="next" href="\' . $nextUrl . \'"/>\'
        );
    }
}

$modx->setPlaceholders($data, $plPrefix);
if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $data[\'output\']);
} else {
    return $data[\'output\'];
}',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'MODX\\Revolution\\Sources\\modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'getImageList' => 
      array (
        'fields' => 
        array (
          'id' => 14,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'getImageList',
          'description' => '',
          'editor_type' => 0,
          'category' => 6,
          'cache_type' => 0,
          'snippet' => '/**
 * getImageList
 *
 * Copyright 2009-2014 by Bruno Perner <b.perner@gmx.de>
 *
 * getImageList is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * getImageList is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * getImageList; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package migx
 */
/**
 * getImageList
 *
 * display Items from outputvalue of TV with custom-TV-input-type MIGX or from other JSON-string for MODx Revolution 
 *
 * @version 1.4
 * @author Bruno Perner <b.perner@gmx.de>
 * @copyright Copyright &copy; 2009-2014
 * @license http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License
 * version 2 or (at your option) any later version.
 * @package migx
 */

/*example: <ul>[[!getImageList? &tvname=`myTV`&tpl=`@CODE:<li>[[+idx]]<img src="[[+imageURL]]"/><p>[[+imageAlt]]</p></li>`]]</ul>*/
/* get default properties */

$allow_request = (bool)$modx->getOption(\'allowRequest\', $scriptProperties, false);
$tvname = $modx->getOption(\'tvname\', $scriptProperties, \'\');
$inherit_children_tvname = $modx->getOption(\'inherit_children_tvname\', $scriptProperties, \'\');
$tpl = $modx->getOption(\'tpl\', $scriptProperties, \'\');
$wrapperTpl = $modx->getOption(\'wrapperTpl\', $scriptProperties, \'\');
$emptyTpl = $modx->getOption(\'emptyTpl\', $scriptProperties, \'\'); 
$limit = $modx->getOption(\'limit\', $scriptProperties, \'0\');
$offset = $modx->getOption(\'offset\', $scriptProperties, 0);
$totalVar = $modx->getOption(\'totalVar\', $scriptProperties, \'total\');
$randomize = $modx->getOption(\'randomize\', $scriptProperties, false);
$preselectLimit = $modx->getOption(\'preselectLimit\', $scriptProperties, 0); // when random preselect important images
$where = $modx->getOption(\'where\', $scriptProperties, \'\');
$where = !empty($where) ? $modx->fromJSON($where) : array();
$sort = $modx->getOption(\'sort\', $scriptProperties, \'\');
$sort = !empty($sort) ? $modx->fromJSON($sort) : array();
$toSeparatePlaceholders = $modx->getOption(\'toSeparatePlaceholders\', $scriptProperties, false);
$toPlaceholder = $modx->getOption(\'toPlaceholder\', $scriptProperties, false);
$outputSeparator = $modx->getOption(\'outputSeparator\', $scriptProperties, \'\');
$splitSeparator = $modx->getOption(\'splitSeparator\', $scriptProperties, \'\');
$placeholdersKeyField = $modx->getOption(\'placeholdersKeyField\', $scriptProperties, \'MIGX_id\');
$toJsonPlaceholder = $modx->getOption(\'toJsonPlaceholder\', $scriptProperties, false);
$jsonVarKey = $modx->getOption(\'jsonVarKey\', $scriptProperties, \'migx_outputvalue\');
$outputvalue = $modx->getOption(\'value\', $scriptProperties, \'\');
if ($allow_request) {
    $outputvalue = isset($_REQUEST[$jsonVarKey]) ? $_REQUEST[$jsonVarKey] : $outputvalue;
}
$docidVarKey = $modx->getOption(\'docidVarKey\', $scriptProperties, \'migx_docid\');
$docid = $modx->getOption(\'docid\', $scriptProperties, (isset($modx->resource) ? $modx->resource->get(\'id\') : 1));
if ($allow_request) {
    $docid = isset($_REQUEST[$docidVarKey]) ? $_REQUEST[$docidVarKey] : $docid;
}
$processTVs = $modx->getOption(\'processTVs\', $scriptProperties, \'1\');
$reverse = $modx->getOption(\'reverse\', $scriptProperties, \'0\');
$sumFields = $modx->getOption(\'sumFields\', $scriptProperties, \'\');
$sumPrefix = $modx->getOption(\'sumPrefix\', $scriptProperties, \'summary_\');
$addfields = $modx->getOption(\'addfields\', $scriptProperties, \'\');
$addfields = !empty($addfields) ? explode(\',\', $addfields) : null;
//split json into parts
$splits = $modx->fromJson($modx->getOption(\'splits\', $scriptProperties, 0));
$splitTpl = $modx->getOption(\'splitTpl\', $scriptProperties, \'\');
$splitSeparator = $modx->getOption(\'splitSeparator\', $scriptProperties, \'\');
$inheritFrom = $modx->getOption(\'inheritFrom\', $scriptProperties, \'\'); //commaseparated list of resource-ids or/and the keyword \'parents\' where to inherit from
$inheritFrom = !empty($inheritFrom) ? explode(\',\', $inheritFrom) : \'\';

$modx->setPlaceholder(\'docid\', $docid);

$base_path = $modx->getOption(\'base_path\', null, MODX_BASE_PATH);
$base_url = $modx->getOption(\'base_url\', null, MODX_BASE_URL);

$migx = $modx->getService(\'migx\', \'Migx\', $modx->getOption(\'migx.core_path\', null, $modx->getOption(\'core_path\') . \'components/migx/\') . \'model/migx/\', $scriptProperties);
if (!($migx instanceof Migx))
    return \'\';
$migx->working_context = isset($modx->resource) ? $modx->resource->get(\'context_key\') : \'web\';

if (!empty($tvname)) {
    if ($tv = $modx->getObject(\'modTemplateVar\', array(\'name\' => $tvname))) {

        /*
        *   get inputProperties
        */


        $properties = $tv->get(\'input_properties\');
        $properties = isset($properties[\'formtabs\']) ? $properties : $tv->getProperties();

        $migx->config[\'configs\'] = $modx->getOption(\'configs\', $properties, \'\');
        if (!empty($migx->config[\'configs\'])) {
            $migx->loadConfigs();
            // get tabs from file or migx-config-table
            $formtabs = $migx->getTabs();
        }
        if (empty($formtabs) && isset($properties[\'formtabs\'])) {
            //try to get formtabs and its fields from properties
            $formtabs = $modx->fromJSON($properties[\'formtabs\']);
        }

        if (!empty($properties[\'basePath\'])) {
            if ($properties[\'autoResourceFolders\'] == \'true\') {
                $scriptProperties[\'base_path\'] = $base_path . $properties[\'basePath\'] . $docid . \'/\';
                $scriptProperties[\'base_url\'] = $base_url . $properties[\'basePath\'] . $docid . \'/\';
            } else {
                $scriptProperties[\'base_path\'] = $base_path . $properties[\'base_path\'];
                $scriptProperties[\'base_url\'] = $base_url . $properties[\'basePath\'];
            }
        }
        if ($jsonVarKey == \'migx_outputvalue\' && !empty($properties[\'jsonvarkey\'])) {
            $jsonVarKey = $properties[\'jsonvarkey\'];
            $outputvalue = $allow_request && isset($_REQUEST[$jsonVarKey]) ? $_REQUEST[$jsonVarKey] : $outputvalue;
        }

        if (empty($outputvalue)) {
            $outputvalue = $tv->renderOutput($docid);
            if (empty($outputvalue) && !empty($inheritFrom)) {
                foreach ($inheritFrom as $from) {
                    if ($from == \'parents\') {
                        if (!empty($inherit_children_tvname)){
                            //try to get items from optional MIGX-TV for children
                            if ($inh_tv = $modx->getObject(\'modTemplateVar\', array(\'name\' => $inherit_children_tvname))) {
                                $outputvalue = $inh_tv->processInheritBinding(\'\', $docid);    
                            }
                        }
                        $outputvalue = empty($outputvalue) ? $tv->processInheritBinding(\'\', $docid) : $outputvalue;
                    } else {
                        $outputvalue = $tv->renderOutput($from);
                    }
                    if (!empty($outputvalue)) {
                        break;
                    }
                }
            }
        }


        /*
        *   get inputTvs 
        */
        $inputTvs = array();
        if (is_array($formtabs)) {

            //multiple different Forms
            // Note: use same field-names and inputTVs in all forms
            $inputTvs = $migx->extractInputTvs($formtabs);
        }
        if ($migx->source = $tv->getSource($migx->working_context, false)) {
            $migx->source->initialize();
        }

    }


}

if (empty($outputvalue)) {
    $modx->setPlaceholder($totalVar, 0);
    return \'\';
}

//echo $outputvalue.\'<br/><br/>\';

$items = $modx->fromJSON($outputvalue);

// where filter
if (is_array($where) && count($where) > 0) {
    $items = $migx->filterItems($where, $items);
}
$modx->setPlaceholder($totalVar, count($items));

if (!empty($reverse)) {
    $items = array_reverse($items);
}

// sort items
if (is_array($sort) && count($sort) > 0) {
    $items = $migx->sortDbResult($items, $sort);
}

$summaries = array();
$output = \'\';
$items = $offset > 0 ? array_slice($items, $offset) : $items;
$count = count($items);

if ($count > 0) {
    $limit = $limit == 0 || $limit > $count ? $count : $limit;
    $preselectLimit = $preselectLimit > $count ? $count : $preselectLimit;
    //preselect important items
    $preitems = array();
    if ($randomize && $preselectLimit > 0) {
        for ($i = 0; $i < $preselectLimit; $i++) {
            $preitems[] = $items[$i];
            unset($items[$i]);
        }
        $limit = $limit - count($preitems);
    }

    //shuffle items
    if ($randomize) {
        shuffle($items);
    }

    //limit items
    $count = count($items);
    $tempitems = array();

    for ($i = 0; $i < $limit; $i++) {
        if ($i >= $count) {
            break;
        }
        $tempitems[] = $items[$i];
    }
    $items = $tempitems;

    //add preselected items and schuffle again
    if ($randomize && $preselectLimit > 0) {
        $items = array_merge($preitems, $items);
        shuffle($items);
    }

    $properties = array();
    foreach ($scriptProperties as $property => $value) {
        $properties[\'property.\' . $property] = $value;
    }

    $idx = 0;
    $output = array();
    $template = array();
    $count = count($items);

    foreach ($items as $key => $item) {
        $formname = isset($item[\'MIGX_formname\']) ? $item[\'MIGX_formname\'] . \'_\' : \'\';
        $fields = array();
        foreach ($item as $field => $value) {
            if (is_array($value)) {
                if (is_array($value[0])) {
                    //nested array - convert to json
                    $value = $modx->toJson($value);
                } else {
                    $value = implode(\'||\', $value); //handle arrays (checkboxes, multiselects)
                }
            }


            $inputTVkey = $formname . $field;

            if ($processTVs && isset($inputTvs[$inputTVkey])) {
                if (isset($inputTvs[$inputTVkey][\'inputTV\']) && $tv = $modx->getObject(\'modTemplateVar\', array(\'name\' => $inputTvs[$inputTVkey][\'inputTV\']))) {

                } else {
                    $tv = $modx->newObject(\'modTemplateVar\');
                    $tv->set(\'type\', $inputTvs[$inputTVkey][\'inputTVtype\']);
                }
                $inputTV = $inputTvs[$inputTVkey];

                $mTypes = $modx->getOption(\'manipulatable_url_tv_output_types\', null, \'image,file\');
                //don\'t manipulate any urls here
                $modx->setOption(\'manipulatable_url_tv_output_types\', \'\');
                $tv->set(\'default_text\', $value);

                // $value = $tv->renderOutput($docid); breaks if the TV used in MIGX is also assigned to this Template,
                // example tv: imageLogo is assigned to the template and imageLogo is assigned to the MIGX TV as a result
                // only the value of the imageLogo is returned for the MIGX TV instance
                // need to override default MODX method: $value = $tv->renderOutput($docid);
                /* process any TV commands in value */
                $tv_value = $tv->processBindings($value, $docid);
                $params = $tv->get(\'output_properties\');
                if (empty($params) || $params === null) {
                    $params = [];
                }
                /* run prepareOutput to allow for custom overriding */
                $tv_value = $tv->prepareOutput($tv_value, $docid);
                /* find the render */
                $outputRenderPaths = $tv->getRenderDirectories(\'OnTVOutputRenderList\',\'output\');
                $value = $tv->getRender($params, $tv_value, $outputRenderPaths, \'output\', $docid, $tv->get(\'display\'));
                // End override of $value = $tv->renderOutput($docid);
				
                //set option back
                $modx->setOption(\'manipulatable_url_tv_output_types\', $mTypes);
                //now manipulate urls
                if ($mediasource = $migx->getFieldSource($inputTV, $tv)) {
                    $mTypes = explode(\',\', $mTypes);
                    if (!empty($value) && in_array($tv->get(\'type\'), $mTypes)) {
                        //$value = $mediasource->prepareOutputUrl($value);
                        $value = str_replace(\'/./\', \'/\', $mediasource->prepareOutputUrl($value));
                    }
                }

            }
            $fields[$field] = $value;

        }

        if (!empty($addfields)) {
            foreach ($addfields as $addfield) {
                $addfield = explode(\':\', $addfield);
                $addname = $addfield[0];
                $adddefault = isset($addfield[1]) ? $addfield[1] : \'\';
                $fields[$addname] = $adddefault;
            }
        }

        if (!empty($sumFields)) {
            $sumFields = is_array($sumFields) ? $sumFields : explode(\',\', $sumFields);
            foreach ($sumFields as $sumField) {
                if (isset($fields[$sumField])) {
                    $summaries[$sumPrefix . $sumField] = $summaries[$sumPrefix . $sumField] + $fields[$sumField];
                    $fields[$sumPrefix . $sumField] = $summaries[$sumPrefix . $sumField];
                }
            }
        }


        if ($toJsonPlaceholder) {
            $output[] = $fields;
        } else {
            $fields[\'_alt\'] = $idx % 2;
            $idx++;
            $fields[\'_first\'] = $idx == 1 ? true : \'\';
            $fields[\'_last\'] = $idx == $limit ? true : \'\';
            $fields[\'idx\'] = $idx;
            $rowtpl = \'\';
            //get changing tpls from field
            if (substr($tpl, 0, 7) == "@FIELD:") {
                $tplField = substr($tpl, 7);
                $rowtpl = $fields[$tplField];
            }

            if ($fields[\'_first\'] && !empty($tplFirst)) {
                $rowtpl = $tplFirst;
            }
            if ($fields[\'_last\'] && empty($rowtpl) && !empty($tplLast)) {
                $rowtpl = $tplLast;
            }
            $tplidx = \'tpl_\' . $idx;
            if (empty($rowtpl) && !empty($$tplidx)) {
                $rowtpl = $$tplidx;
            }
            if ($idx > 1 && empty($rowtpl)) {
                $divisors = $migx->getDivisors($idx);
                if (!empty($divisors)) {
                    foreach ($divisors as $divisor) {
                        $tplnth = \'tpl_n\' . $divisor;
                        if (!empty($$tplnth)) {
                            $rowtpl = $$tplnth;
                            if (!empty($rowtpl)) {
                                break;
                            }
                        }
                    }
                }
            }

            if ($count == 1 && isset($tpl_oneresult)) {
                $rowtpl = $tpl_oneresult;
            }

            $fields = array_merge($fields, $properties);

            if (!empty($rowtpl)) {
                $template = $migx->getTemplate($tpl, $template);
                $fields[\'_tpl\'] = $template[$tpl];
            } else {
                $rowtpl = $tpl;

            }
            $template = $migx->getTemplate($rowtpl, $template);


            if ($template[$rowtpl]) {
                $chunk = $modx->newObject(\'modChunk\');
                $chunk->setCacheable(false);
                $chunk->setContent($template[$rowtpl]);


                if (!empty($placeholdersKeyField) && isset($fields[$placeholdersKeyField])) {
                    $output[$fields[$placeholdersKeyField]] = $chunk->process($fields);
                } else {
                    $output[] = $chunk->process($fields);
                }
            } else {
                if (!empty($placeholdersKeyField)) {
                    $output[$fields[$placeholdersKeyField]] = \'<pre>\' . print_r($fields, 1) . \'</pre>\';
                } else {
                    $output[] = \'<pre>\' . print_r($fields, 1) . \'</pre>\';
                }
            }
        }


    }
}

if (count($summaries) > 0) {
    $modx->toPlaceholders($summaries);
}


if ($toJsonPlaceholder) {
    $modx->setPlaceholder($toJsonPlaceholder, $modx->toJson($output));
    return \'\';
}

if (!empty($toSeparatePlaceholders)) {
    $modx->toPlaceholders($output, $toSeparatePlaceholders);
    return \'\';
}
/*
if (!empty($outerTpl))
$o = parseTpl($outerTpl, array(\'output\'=>implode($outputSeparator, $output)));
else 
*/

if ($count > 0 && $splits > 0) {
    $size = ceil($count / $splits);
    $chunks = array_chunk($output, $size);
    $output = array();
    foreach ($chunks as $chunk) {
        $o = implode($outputSeparator, $chunk);
        $output[] = $modx->getChunk($splitTpl, array(\'output\' => $o));
    }
    $outputSeparator = $splitSeparator;
}

if (is_array($output)) {
    $o = implode($outputSeparator, $output);
} else {
    $o = $output;
}

if (!empty($o) && !empty($wrapperTpl)) {
    $template = $migx->getTemplate($wrapperTpl);
    if ($template[$wrapperTpl]) {
        $chunk = $modx->newObject(\'modChunk\');
        $chunk->setCacheable(false);
        $chunk->setContent($template[$wrapperTpl]);
        $properties[\'output\'] = $o;
        $o = $chunk->process($properties);
    }
}

if (empty($o) && !empty($emptyTpl)) {
    $template = $migx->getTemplate($emptyTpl);
    if ($template[$emptyTpl]) {
        $chunk = $modx->newObject(\'modChunk\');
        $chunk->setCacheable(false);
        $chunk->setContent($template[$emptyTpl]);
        $o = $chunk->process($properties);
    }
}

if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $o);
    return \'\';
}

return $o;',
          'locked' => false,
          'properties' => 
          array (
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => '/**
 * getImageList
 *
 * Copyright 2009-2014 by Bruno Perner <b.perner@gmx.de>
 *
 * getImageList is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * getImageList is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * getImageList; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package migx
 */
/**
 * getImageList
 *
 * display Items from outputvalue of TV with custom-TV-input-type MIGX or from other JSON-string for MODx Revolution 
 *
 * @version 1.4
 * @author Bruno Perner <b.perner@gmx.de>
 * @copyright Copyright &copy; 2009-2014
 * @license http://www.gnu.org/licenses/old-licenses/gpl-2.0.html GNU General Public License
 * version 2 or (at your option) any later version.
 * @package migx
 */

/*example: <ul>[[!getImageList? &tvname=`myTV`&tpl=`@CODE:<li>[[+idx]]<img src="[[+imageURL]]"/><p>[[+imageAlt]]</p></li>`]]</ul>*/
/* get default properties */

$allow_request = (bool)$modx->getOption(\'allowRequest\', $scriptProperties, false);
$tvname = $modx->getOption(\'tvname\', $scriptProperties, \'\');
$inherit_children_tvname = $modx->getOption(\'inherit_children_tvname\', $scriptProperties, \'\');
$tpl = $modx->getOption(\'tpl\', $scriptProperties, \'\');
$wrapperTpl = $modx->getOption(\'wrapperTpl\', $scriptProperties, \'\');
$emptyTpl = $modx->getOption(\'emptyTpl\', $scriptProperties, \'\'); 
$limit = $modx->getOption(\'limit\', $scriptProperties, \'0\');
$offset = $modx->getOption(\'offset\', $scriptProperties, 0);
$totalVar = $modx->getOption(\'totalVar\', $scriptProperties, \'total\');
$randomize = $modx->getOption(\'randomize\', $scriptProperties, false);
$preselectLimit = $modx->getOption(\'preselectLimit\', $scriptProperties, 0); // when random preselect important images
$where = $modx->getOption(\'where\', $scriptProperties, \'\');
$where = !empty($where) ? $modx->fromJSON($where) : array();
$sort = $modx->getOption(\'sort\', $scriptProperties, \'\');
$sort = !empty($sort) ? $modx->fromJSON($sort) : array();
$toSeparatePlaceholders = $modx->getOption(\'toSeparatePlaceholders\', $scriptProperties, false);
$toPlaceholder = $modx->getOption(\'toPlaceholder\', $scriptProperties, false);
$outputSeparator = $modx->getOption(\'outputSeparator\', $scriptProperties, \'\');
$splitSeparator = $modx->getOption(\'splitSeparator\', $scriptProperties, \'\');
$placeholdersKeyField = $modx->getOption(\'placeholdersKeyField\', $scriptProperties, \'MIGX_id\');
$toJsonPlaceholder = $modx->getOption(\'toJsonPlaceholder\', $scriptProperties, false);
$jsonVarKey = $modx->getOption(\'jsonVarKey\', $scriptProperties, \'migx_outputvalue\');
$outputvalue = $modx->getOption(\'value\', $scriptProperties, \'\');
if ($allow_request) {
    $outputvalue = isset($_REQUEST[$jsonVarKey]) ? $_REQUEST[$jsonVarKey] : $outputvalue;
}
$docidVarKey = $modx->getOption(\'docidVarKey\', $scriptProperties, \'migx_docid\');
$docid = $modx->getOption(\'docid\', $scriptProperties, (isset($modx->resource) ? $modx->resource->get(\'id\') : 1));
if ($allow_request) {
    $docid = isset($_REQUEST[$docidVarKey]) ? $_REQUEST[$docidVarKey] : $docid;
}
$processTVs = $modx->getOption(\'processTVs\', $scriptProperties, \'1\');
$reverse = $modx->getOption(\'reverse\', $scriptProperties, \'0\');
$sumFields = $modx->getOption(\'sumFields\', $scriptProperties, \'\');
$sumPrefix = $modx->getOption(\'sumPrefix\', $scriptProperties, \'summary_\');
$addfields = $modx->getOption(\'addfields\', $scriptProperties, \'\');
$addfields = !empty($addfields) ? explode(\',\', $addfields) : null;
//split json into parts
$splits = $modx->fromJson($modx->getOption(\'splits\', $scriptProperties, 0));
$splitTpl = $modx->getOption(\'splitTpl\', $scriptProperties, \'\');
$splitSeparator = $modx->getOption(\'splitSeparator\', $scriptProperties, \'\');
$inheritFrom = $modx->getOption(\'inheritFrom\', $scriptProperties, \'\'); //commaseparated list of resource-ids or/and the keyword \'parents\' where to inherit from
$inheritFrom = !empty($inheritFrom) ? explode(\',\', $inheritFrom) : \'\';

$modx->setPlaceholder(\'docid\', $docid);

$base_path = $modx->getOption(\'base_path\', null, MODX_BASE_PATH);
$base_url = $modx->getOption(\'base_url\', null, MODX_BASE_URL);

$migx = $modx->getService(\'migx\', \'Migx\', $modx->getOption(\'migx.core_path\', null, $modx->getOption(\'core_path\') . \'components/migx/\') . \'model/migx/\', $scriptProperties);
if (!($migx instanceof Migx))
    return \'\';
$migx->working_context = isset($modx->resource) ? $modx->resource->get(\'context_key\') : \'web\';

if (!empty($tvname)) {
    if ($tv = $modx->getObject(\'modTemplateVar\', array(\'name\' => $tvname))) {

        /*
        *   get inputProperties
        */


        $properties = $tv->get(\'input_properties\');
        $properties = isset($properties[\'formtabs\']) ? $properties : $tv->getProperties();

        $migx->config[\'configs\'] = $modx->getOption(\'configs\', $properties, \'\');
        if (!empty($migx->config[\'configs\'])) {
            $migx->loadConfigs();
            // get tabs from file or migx-config-table
            $formtabs = $migx->getTabs();
        }
        if (empty($formtabs) && isset($properties[\'formtabs\'])) {
            //try to get formtabs and its fields from properties
            $formtabs = $modx->fromJSON($properties[\'formtabs\']);
        }

        if (!empty($properties[\'basePath\'])) {
            if ($properties[\'autoResourceFolders\'] == \'true\') {
                $scriptProperties[\'base_path\'] = $base_path . $properties[\'basePath\'] . $docid . \'/\';
                $scriptProperties[\'base_url\'] = $base_url . $properties[\'basePath\'] . $docid . \'/\';
            } else {
                $scriptProperties[\'base_path\'] = $base_path . $properties[\'base_path\'];
                $scriptProperties[\'base_url\'] = $base_url . $properties[\'basePath\'];
            }
        }
        if ($jsonVarKey == \'migx_outputvalue\' && !empty($properties[\'jsonvarkey\'])) {
            $jsonVarKey = $properties[\'jsonvarkey\'];
            $outputvalue = $allow_request && isset($_REQUEST[$jsonVarKey]) ? $_REQUEST[$jsonVarKey] : $outputvalue;
        }

        if (empty($outputvalue)) {
            $outputvalue = $tv->renderOutput($docid);
            if (empty($outputvalue) && !empty($inheritFrom)) {
                foreach ($inheritFrom as $from) {
                    if ($from == \'parents\') {
                        if (!empty($inherit_children_tvname)){
                            //try to get items from optional MIGX-TV for children
                            if ($inh_tv = $modx->getObject(\'modTemplateVar\', array(\'name\' => $inherit_children_tvname))) {
                                $outputvalue = $inh_tv->processInheritBinding(\'\', $docid);    
                            }
                        }
                        $outputvalue = empty($outputvalue) ? $tv->processInheritBinding(\'\', $docid) : $outputvalue;
                    } else {
                        $outputvalue = $tv->renderOutput($from);
                    }
                    if (!empty($outputvalue)) {
                        break;
                    }
                }
            }
        }


        /*
        *   get inputTvs 
        */
        $inputTvs = array();
        if (is_array($formtabs)) {

            //multiple different Forms
            // Note: use same field-names and inputTVs in all forms
            $inputTvs = $migx->extractInputTvs($formtabs);
        }
        if ($migx->source = $tv->getSource($migx->working_context, false)) {
            $migx->source->initialize();
        }

    }


}

if (empty($outputvalue)) {
    $modx->setPlaceholder($totalVar, 0);
    return \'\';
}

//echo $outputvalue.\'<br/><br/>\';

$items = $modx->fromJSON($outputvalue);

// where filter
if (is_array($where) && count($where) > 0) {
    $items = $migx->filterItems($where, $items);
}
$modx->setPlaceholder($totalVar, count($items));

if (!empty($reverse)) {
    $items = array_reverse($items);
}

// sort items
if (is_array($sort) && count($sort) > 0) {
    $items = $migx->sortDbResult($items, $sort);
}

$summaries = array();
$output = \'\';
$items = $offset > 0 ? array_slice($items, $offset) : $items;
$count = count($items);

if ($count > 0) {
    $limit = $limit == 0 || $limit > $count ? $count : $limit;
    $preselectLimit = $preselectLimit > $count ? $count : $preselectLimit;
    //preselect important items
    $preitems = array();
    if ($randomize && $preselectLimit > 0) {
        for ($i = 0; $i < $preselectLimit; $i++) {
            $preitems[] = $items[$i];
            unset($items[$i]);
        }
        $limit = $limit - count($preitems);
    }

    //shuffle items
    if ($randomize) {
        shuffle($items);
    }

    //limit items
    $count = count($items);
    $tempitems = array();

    for ($i = 0; $i < $limit; $i++) {
        if ($i >= $count) {
            break;
        }
        $tempitems[] = $items[$i];
    }
    $items = $tempitems;

    //add preselected items and schuffle again
    if ($randomize && $preselectLimit > 0) {
        $items = array_merge($preitems, $items);
        shuffle($items);
    }

    $properties = array();
    foreach ($scriptProperties as $property => $value) {
        $properties[\'property.\' . $property] = $value;
    }

    $idx = 0;
    $output = array();
    $template = array();
    $count = count($items);

    foreach ($items as $key => $item) {
        $formname = isset($item[\'MIGX_formname\']) ? $item[\'MIGX_formname\'] . \'_\' : \'\';
        $fields = array();
        foreach ($item as $field => $value) {
            if (is_array($value)) {
                if (is_array($value[0])) {
                    //nested array - convert to json
                    $value = $modx->toJson($value);
                } else {
                    $value = implode(\'||\', $value); //handle arrays (checkboxes, multiselects)
                }
            }


            $inputTVkey = $formname . $field;

            if ($processTVs && isset($inputTvs[$inputTVkey])) {
                if (isset($inputTvs[$inputTVkey][\'inputTV\']) && $tv = $modx->getObject(\'modTemplateVar\', array(\'name\' => $inputTvs[$inputTVkey][\'inputTV\']))) {

                } else {
                    $tv = $modx->newObject(\'modTemplateVar\');
                    $tv->set(\'type\', $inputTvs[$inputTVkey][\'inputTVtype\']);
                }
                $inputTV = $inputTvs[$inputTVkey];

                $mTypes = $modx->getOption(\'manipulatable_url_tv_output_types\', null, \'image,file\');
                //don\'t manipulate any urls here
                $modx->setOption(\'manipulatable_url_tv_output_types\', \'\');
                $tv->set(\'default_text\', $value);

                // $value = $tv->renderOutput($docid); breaks if the TV used in MIGX is also assigned to this Template,
                // example tv: imageLogo is assigned to the template and imageLogo is assigned to the MIGX TV as a result
                // only the value of the imageLogo is returned for the MIGX TV instance
                // need to override default MODX method: $value = $tv->renderOutput($docid);
                /* process any TV commands in value */
                $tv_value = $tv->processBindings($value, $docid);
                $params = $tv->get(\'output_properties\');
                if (empty($params) || $params === null) {
                    $params = [];
                }
                /* run prepareOutput to allow for custom overriding */
                $tv_value = $tv->prepareOutput($tv_value, $docid);
                /* find the render */
                $outputRenderPaths = $tv->getRenderDirectories(\'OnTVOutputRenderList\',\'output\');
                $value = $tv->getRender($params, $tv_value, $outputRenderPaths, \'output\', $docid, $tv->get(\'display\'));
                // End override of $value = $tv->renderOutput($docid);
				
                //set option back
                $modx->setOption(\'manipulatable_url_tv_output_types\', $mTypes);
                //now manipulate urls
                if ($mediasource = $migx->getFieldSource($inputTV, $tv)) {
                    $mTypes = explode(\',\', $mTypes);
                    if (!empty($value) && in_array($tv->get(\'type\'), $mTypes)) {
                        //$value = $mediasource->prepareOutputUrl($value);
                        $value = str_replace(\'/./\', \'/\', $mediasource->prepareOutputUrl($value));
                    }
                }

            }
            $fields[$field] = $value;

        }

        if (!empty($addfields)) {
            foreach ($addfields as $addfield) {
                $addfield = explode(\':\', $addfield);
                $addname = $addfield[0];
                $adddefault = isset($addfield[1]) ? $addfield[1] : \'\';
                $fields[$addname] = $adddefault;
            }
        }

        if (!empty($sumFields)) {
            $sumFields = is_array($sumFields) ? $sumFields : explode(\',\', $sumFields);
            foreach ($sumFields as $sumField) {
                if (isset($fields[$sumField])) {
                    $summaries[$sumPrefix . $sumField] = $summaries[$sumPrefix . $sumField] + $fields[$sumField];
                    $fields[$sumPrefix . $sumField] = $summaries[$sumPrefix . $sumField];
                }
            }
        }


        if ($toJsonPlaceholder) {
            $output[] = $fields;
        } else {
            $fields[\'_alt\'] = $idx % 2;
            $idx++;
            $fields[\'_first\'] = $idx == 1 ? true : \'\';
            $fields[\'_last\'] = $idx == $limit ? true : \'\';
            $fields[\'idx\'] = $idx;
            $rowtpl = \'\';
            //get changing tpls from field
            if (substr($tpl, 0, 7) == "@FIELD:") {
                $tplField = substr($tpl, 7);
                $rowtpl = $fields[$tplField];
            }

            if ($fields[\'_first\'] && !empty($tplFirst)) {
                $rowtpl = $tplFirst;
            }
            if ($fields[\'_last\'] && empty($rowtpl) && !empty($tplLast)) {
                $rowtpl = $tplLast;
            }
            $tplidx = \'tpl_\' . $idx;
            if (empty($rowtpl) && !empty($$tplidx)) {
                $rowtpl = $$tplidx;
            }
            if ($idx > 1 && empty($rowtpl)) {
                $divisors = $migx->getDivisors($idx);
                if (!empty($divisors)) {
                    foreach ($divisors as $divisor) {
                        $tplnth = \'tpl_n\' . $divisor;
                        if (!empty($$tplnth)) {
                            $rowtpl = $$tplnth;
                            if (!empty($rowtpl)) {
                                break;
                            }
                        }
                    }
                }
            }

            if ($count == 1 && isset($tpl_oneresult)) {
                $rowtpl = $tpl_oneresult;
            }

            $fields = array_merge($fields, $properties);

            if (!empty($rowtpl)) {
                $template = $migx->getTemplate($tpl, $template);
                $fields[\'_tpl\'] = $template[$tpl];
            } else {
                $rowtpl = $tpl;

            }
            $template = $migx->getTemplate($rowtpl, $template);


            if ($template[$rowtpl]) {
                $chunk = $modx->newObject(\'modChunk\');
                $chunk->setCacheable(false);
                $chunk->setContent($template[$rowtpl]);


                if (!empty($placeholdersKeyField) && isset($fields[$placeholdersKeyField])) {
                    $output[$fields[$placeholdersKeyField]] = $chunk->process($fields);
                } else {
                    $output[] = $chunk->process($fields);
                }
            } else {
                if (!empty($placeholdersKeyField)) {
                    $output[$fields[$placeholdersKeyField]] = \'<pre>\' . print_r($fields, 1) . \'</pre>\';
                } else {
                    $output[] = \'<pre>\' . print_r($fields, 1) . \'</pre>\';
                }
            }
        }


    }
}

if (count($summaries) > 0) {
    $modx->toPlaceholders($summaries);
}


if ($toJsonPlaceholder) {
    $modx->setPlaceholder($toJsonPlaceholder, $modx->toJson($output));
    return \'\';
}

if (!empty($toSeparatePlaceholders)) {
    $modx->toPlaceholders($output, $toSeparatePlaceholders);
    return \'\';
}
/*
if (!empty($outerTpl))
$o = parseTpl($outerTpl, array(\'output\'=>implode($outputSeparator, $output)));
else 
*/

if ($count > 0 && $splits > 0) {
    $size = ceil($count / $splits);
    $chunks = array_chunk($output, $size);
    $output = array();
    foreach ($chunks as $chunk) {
        $o = implode($outputSeparator, $chunk);
        $output[] = $modx->getChunk($splitTpl, array(\'output\' => $o));
    }
    $outputSeparator = $splitSeparator;
}

if (is_array($output)) {
    $o = implode($outputSeparator, $output);
} else {
    $o = $output;
}

if (!empty($o) && !empty($wrapperTpl)) {
    $template = $migx->getTemplate($wrapperTpl);
    if ($template[$wrapperTpl]) {
        $chunk = $modx->newObject(\'modChunk\');
        $chunk->setCacheable(false);
        $chunk->setContent($template[$wrapperTpl]);
        $properties[\'output\'] = $o;
        $o = $chunk->process($properties);
    }
}

if (empty($o) && !empty($emptyTpl)) {
    $template = $migx->getTemplate($emptyTpl);
    if ($template[$emptyTpl]) {
        $chunk = $modx->newObject(\'modChunk\');
        $chunk->setCacheable(false);
        $chunk->setContent($template[$emptyTpl]);
        $o = $chunk->process($properties);
    }
}

if (!empty($toPlaceholder)) {
    $modx->setPlaceholder($toPlaceholder, $o);
    return \'\';
}

return $o;',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
        ),
      ),
      'migxResourceMediaPath' => 
      array (
        'fields' => 
        array (
          'id' => 18,
          'source' => 0,
          'property_preprocess' => false,
          'name' => 'migxResourceMediaPath',
          'description' => '',
          'editor_type' => 0,
          'category' => 6,
          'cache_type' => 0,
          'snippet' => '/**
 * @name migxResourceMediaPath
 * @description Dynamically calculates the upload path for a given resource
 * 
 * This Snippet is meant to dynamically calculate your baseBath attribute
 * for custom Media Sources.  This is useful if you wish to shepard uploaded
 * images to a folder dedicated to a given resource.  E.g. page 123 would 
 * have its own images that page 456 could not reference.
 *
 * USAGE:
 * [[migxResourceMediaPath? &pathTpl=`assets/businesses/{id}/`]]
 * [[migxResourceMediaPath? &pathTpl=`assets/test/{breadcrumb}`]]
 * [[migxResourceMediaPath? &pathTpl=`assets/test/{breadcrumb}` &breadcrumbdepth=`2`]]
 *
 * PARAMETERS
 * &pathTpl string formatting string specifying the file path. 
 *		Relative to MODX base_path
 *		Available placeholders: {id}, {pagetitle}, {parent}
 * &docid (optional) integer page id
 * &createFolder (optional) boolean whether or not to create
 */
$pathTpl = $modx->getOption(\'pathTpl\', $scriptProperties, \'\');
$docid = $modx->getOption(\'docid\', $scriptProperties, \'\');
$createfolder = $modx->getOption(\'createFolder\', $scriptProperties, false);
$tvname = $modx->getOption(\'tvname\', $scriptProperties, \'\');

$path = \'\';
$createpath = false;

if (empty($pathTpl)) {
    $modx->log(MODX_LOG_LEVEL_ERROR, \'[migxResourceMediaPath]: pathTpl not specified.\');
    return;
}

if (empty($docid) && $modx->getPlaceholder(\'mediasource_docid\')) {
    // placeholder was set by some script
    // warning: the parser may not render placeholders, e.g. &docid=`[[*parent]]` may fail
    $docid = $modx->getPlaceholder(\'mediasource_docid\');
}

if (empty($docid) && $modx->getPlaceholder(\'docid\')) {
    // placeholder was set by some script
    // warning: the parser may not render placeholders, e.g. &docid=`[[*parent]]` may fail
    $docid = $modx->getPlaceholder(\'docid\');
}
if (empty($docid)) {

    //on frontend
    if (is_object($modx->resource)) {
        $docid = $modx->resource->get(\'id\');
    }
    //on backend
    else {
        $createpath = $createfolder;
        // We do this to read the &id param from an Ajax request
        $parsedUrl = parse_url($_SERVER[\'HTTP_REFERER\']);
        parse_str($parsedUrl[\'query\'], $parsedQuery);

        if (isset($parsedQuery[\'amp;id\'])) {
            $docid = (int)$parsedQuery[\'amp;id\'];
        } elseif (isset($parsedQuery[\'id\'])) {
            $docid = (int)$parsedQuery[\'id\'];
        }
    }
}

if (empty($docid)) {
    $modx->log(MODX_LOG_LEVEL_ERROR, \'[migxResourceMediaPath]: docid could not be determined.\');
    return;
}

if ($resource = $modx->getObject(\'modResource\', $docid)) {
    $path = $pathTpl;
    $ultimateParent = \'\';
    if (strstr($path, \'{breadcrumb}\') || strstr($path, \'{ultimateparent}\')) {
        $depth = $modx->getOption(\'breadcrumbdepth\', $scriptProperties, 10);
        $ctx = $resource->get(\'context_key\');
        $parentids = $modx->getParentIds($docid, $depth, array(\'context\' => $ctx));
        $breadcrumbdepth = $modx->getOption(\'breadcrumbdepth\', $scriptProperties, count($parentids));
        $breadcrumbdepth = $breadcrumbdepth > count($parentids) ? count($parentids) : $breadcrumbdepth;
        if (count($parentids) > 1) {
            $parentids = array_reverse($parentids);
            $parentids[] = $docid;
            $ultimateParent = $parentids[1];
        } else {
            $ultimateParent = $docid;
            $parentids = array();
            $parentids[] = $docid;
        }
    }

    if (strstr($path, \'{breadcrumb}\')) {
        $breadcrumbpath = \'\';
        for ($i = 1; $i <= $breadcrumbdepth; $i++) {
            $breadcrumbpath .= $parentids[$i] . \'/\';
        }
        $path = str_replace(\'{breadcrumb}\', $breadcrumbpath, $path);
    }
    
    if (!empty($tvname)){
        $path = str_replace(\'{tv_value}\', $resource->getTVValue($tvname), $path);    
    }
    $path = str_replace(\'{id}\', $docid, $path);
    $path = str_replace(\'{pagetitle}\', $resource->get(\'pagetitle\'), $path);
    $path = str_replace(\'{alias}\', $resource->get(\'alias\'), $path);
    $path = str_replace(\'{parent}\', $resource->get(\'parent\'), $path);
    $path = str_replace(\'{context_key}\', $resource->get(\'context_key\'), $path);
    $path = str_replace(\'{ultimateparent}\', $ultimateParent, $path);
    if ($template = $resource->getOne(\'Template\')) {
        $path = str_replace(\'{templatename}\', $template->get(\'templatename\'), $path);
    }
    if ($user = $modx->user) {
        $path = str_replace(\'{username}\', $modx->user->get(\'username\'), $path);
        $path = str_replace(\'{userid}\', $modx->user->get(\'id\'), $path);
    }

    $fullpath = $modx->getOption(\'base_path\') . $path;

    if ($createpath && !file_exists($fullpath)) {

        $permissions = octdec(\'0\' . (int)($modx->getOption(\'new_folder_permissions\', null, \'755\', true)));
        if (!@mkdir($fullpath, $permissions, true)) {
            $modx->log(MODX_LOG_LEVEL_ERROR, sprintf(\'[migxResourceMediaPath]: could not create directory %s).\', $fullpath));
        } else {
            chmod($fullpath, $permissions);
        }
    }

    return $path;
} else {
    $modx->log(MODX_LOG_LEVEL_ERROR, sprintf(\'[migxResourceMediaPath]: resource not found (page id %s).\', $docid));
    return;
}',
          'locked' => false,
          'properties' => 
          array (
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => '/**
 * @name migxResourceMediaPath
 * @description Dynamically calculates the upload path for a given resource
 * 
 * This Snippet is meant to dynamically calculate your baseBath attribute
 * for custom Media Sources.  This is useful if you wish to shepard uploaded
 * images to a folder dedicated to a given resource.  E.g. page 123 would 
 * have its own images that page 456 could not reference.
 *
 * USAGE:
 * [[migxResourceMediaPath? &pathTpl=`assets/businesses/{id}/`]]
 * [[migxResourceMediaPath? &pathTpl=`assets/test/{breadcrumb}`]]
 * [[migxResourceMediaPath? &pathTpl=`assets/test/{breadcrumb}` &breadcrumbdepth=`2`]]
 *
 * PARAMETERS
 * &pathTpl string formatting string specifying the file path. 
 *		Relative to MODX base_path
 *		Available placeholders: {id}, {pagetitle}, {parent}
 * &docid (optional) integer page id
 * &createFolder (optional) boolean whether or not to create
 */
$pathTpl = $modx->getOption(\'pathTpl\', $scriptProperties, \'\');
$docid = $modx->getOption(\'docid\', $scriptProperties, \'\');
$createfolder = $modx->getOption(\'createFolder\', $scriptProperties, false);
$tvname = $modx->getOption(\'tvname\', $scriptProperties, \'\');

$path = \'\';
$createpath = false;

if (empty($pathTpl)) {
    $modx->log(MODX_LOG_LEVEL_ERROR, \'[migxResourceMediaPath]: pathTpl not specified.\');
    return;
}

if (empty($docid) && $modx->getPlaceholder(\'mediasource_docid\')) {
    // placeholder was set by some script
    // warning: the parser may not render placeholders, e.g. &docid=`[[*parent]]` may fail
    $docid = $modx->getPlaceholder(\'mediasource_docid\');
}

if (empty($docid) && $modx->getPlaceholder(\'docid\')) {
    // placeholder was set by some script
    // warning: the parser may not render placeholders, e.g. &docid=`[[*parent]]` may fail
    $docid = $modx->getPlaceholder(\'docid\');
}
if (empty($docid)) {

    //on frontend
    if (is_object($modx->resource)) {
        $docid = $modx->resource->get(\'id\');
    }
    //on backend
    else {
        $createpath = $createfolder;
        // We do this to read the &id param from an Ajax request
        $parsedUrl = parse_url($_SERVER[\'HTTP_REFERER\']);
        parse_str($parsedUrl[\'query\'], $parsedQuery);

        if (isset($parsedQuery[\'amp;id\'])) {
            $docid = (int)$parsedQuery[\'amp;id\'];
        } elseif (isset($parsedQuery[\'id\'])) {
            $docid = (int)$parsedQuery[\'id\'];
        }
    }
}

if (empty($docid)) {
    $modx->log(MODX_LOG_LEVEL_ERROR, \'[migxResourceMediaPath]: docid could not be determined.\');
    return;
}

if ($resource = $modx->getObject(\'modResource\', $docid)) {
    $path = $pathTpl;
    $ultimateParent = \'\';
    if (strstr($path, \'{breadcrumb}\') || strstr($path, \'{ultimateparent}\')) {
        $depth = $modx->getOption(\'breadcrumbdepth\', $scriptProperties, 10);
        $ctx = $resource->get(\'context_key\');
        $parentids = $modx->getParentIds($docid, $depth, array(\'context\' => $ctx));
        $breadcrumbdepth = $modx->getOption(\'breadcrumbdepth\', $scriptProperties, count($parentids));
        $breadcrumbdepth = $breadcrumbdepth > count($parentids) ? count($parentids) : $breadcrumbdepth;
        if (count($parentids) > 1) {
            $parentids = array_reverse($parentids);
            $parentids[] = $docid;
            $ultimateParent = $parentids[1];
        } else {
            $ultimateParent = $docid;
            $parentids = array();
            $parentids[] = $docid;
        }
    }

    if (strstr($path, \'{breadcrumb}\')) {
        $breadcrumbpath = \'\';
        for ($i = 1; $i <= $breadcrumbdepth; $i++) {
            $breadcrumbpath .= $parentids[$i] . \'/\';
        }
        $path = str_replace(\'{breadcrumb}\', $breadcrumbpath, $path);
    }
    
    if (!empty($tvname)){
        $path = str_replace(\'{tv_value}\', $resource->getTVValue($tvname), $path);    
    }
    $path = str_replace(\'{id}\', $docid, $path);
    $path = str_replace(\'{pagetitle}\', $resource->get(\'pagetitle\'), $path);
    $path = str_replace(\'{alias}\', $resource->get(\'alias\'), $path);
    $path = str_replace(\'{parent}\', $resource->get(\'parent\'), $path);
    $path = str_replace(\'{context_key}\', $resource->get(\'context_key\'), $path);
    $path = str_replace(\'{ultimateparent}\', $ultimateParent, $path);
    if ($template = $resource->getOne(\'Template\')) {
        $path = str_replace(\'{templatename}\', $template->get(\'templatename\'), $path);
    }
    if ($user = $modx->user) {
        $path = str_replace(\'{username}\', $modx->user->get(\'username\'), $path);
        $path = str_replace(\'{userid}\', $modx->user->get(\'id\'), $path);
    }

    $fullpath = $modx->getOption(\'base_path\') . $path;

    if ($createpath && !file_exists($fullpath)) {

        $permissions = octdec(\'0\' . (int)($modx->getOption(\'new_folder_permissions\', null, \'755\', true)));
        if (!@mkdir($fullpath, $permissions, true)) {
            $modx->log(MODX_LOG_LEVEL_ERROR, sprintf(\'[migxResourceMediaPath]: could not create directory %s).\', $fullpath));
        } else {
            chmod($fullpath, $permissions);
        }
    }

    return $path;
} else {
    $modx->log(MODX_LOG_LEVEL_ERROR, sprintf(\'[migxResourceMediaPath]: resource not found (page id %s).\', $docid));
    return;
}',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
        ),
      ),
    ),
    'MODX\\Revolution\\modTemplateVar' => 
    array (
    ),
  ),
);