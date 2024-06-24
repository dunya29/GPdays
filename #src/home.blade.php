@extends('layout.main')

<?php use EvolutionCMS\Main\Helper; ?>

@section('mainContent')

    <!--main-->
    <main class="main">
        <!--intro-->
        <section class="section intro">
            <div class="container">
                <div class="intro__inner">
                    <div class="intro__content">
                        <h5 class="grad-txt">{!! $description !!}</h5>
                        <div class="intro__title">
                            <img src="{{ evo()->getConfig('client_logo') }}" alt="{{ evo()->getConfig('site_name') }}">
                            <p>{!! $introtext !!}</p>
                            <img src="html/img/icons/anim-icon-1.svg" alt="" class="intro__ill-img intro__title--icon">
                        </div>
                        <div class="intro__bottom">
                            <button class="btn main-btn mod-open-btn" data-modal="contacts-mod">регистрация</button>
                            <div class="social">
                                @foreach($networks ?? [] as $item)
                                <a href="{{ $item['link'] }}"><img src="{{ $item['image'] }}" alt="{{ $item['title'] }}"></a>
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <div class="intro__img">
                        <img src="html/img/main-deer.svg" alt="">
                    </div>
                </div>
                <svg class="bg-grad intro__grad" xmlns="http://www.w3.org/2000/svg" width="863" height="813" viewBox="0 0 863 813" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M502.592 96.9742C545.908 119.16 583.878 146.504 621.346 177.571C653.289 204.056 674.63 238.809 706.171 265.772C756.514 308.807 874.483 318.291 862.095 383.373C848.281 455.939 723.077 431.019 665.834 477.672C635.47 502.419 634.987 547.551 617.583 582.653C579.618 659.229 581.678 774.602 502.592 806.933C436.125 834.105 357.697 764.605 316.6 705.696C277.382 649.48 339.749 554.185 291.98 505.036C217.927 428.846 37.603 483.961 3.32007 383.373C-25.0553 300.117 136.308 272.682 188.718 202.058C232.985 142.406 213.773 28.4615 284.192 4.88557C360.408 -20.6312 431.051 60.3321 502.592 96.9742Z" fill="#2D7017"/>
                </svg>
                <div class="intro__ill">
                    <img class="intro__ill-img" src="html/img/icons/anim-icon-2.svg" alt="">
                    <img class="intro__ill-img" src="html/img/icons/anim-icon-3.svg" alt="">
                    <img class="intro__ill-img" src="html/img/icons/anim-icon-4.svg" alt="">
                    <img class="intro__ill-img" src="html/img/icons/anim-icon-5.svg" alt="">
                    <img class="intro__ill-img" src="html/img/icons/anim-icon-6.svg" alt="">
                </div>
            </div>
        </section>


        <!--about-->
        <section class="section about" id="main-about">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">о мероприятии</h5>
                    <div class="sec-inner">
                        <h2 class="about__title about__title--desk">
                            <span class="about__dark">тема конференции:</span>
                            <span class="about__light">Digital Future /</span>
                            <span class="about__light">Цифровая трансформация</span>
                            <span class="about__dark">бизнеса</span>
                        </h2>
                        <h2 class="h2 about__title about__title--tablet">
                            <span class="about__dark">тема конференции:</span>
                            <span class="about__light">Digital Future / Цифровая</span>
                            <span class="about__light">трансформация</span>
                            <span class="about__dark">бизнеса</span>
                        </h2>
                        <h2 class="h2 about__title about__title--mob">
                            <span class="about__dark">тема</span>
                            <span class="about__dark">конференции:</span>
                            <span class="about__light">Digital Future /</span>
                            <span class="about__light">Цифровая</span>
                            <span class="about__dark">трансформация</span>
                            <span class="about__light">бизнеса</span>
                        </h2>
                        <div class="page-content about__content">

                            {!! $content !!}

                        </div>
                    </div>
                </div>
                <svg class="bg-grad about__grad" xmlns="http://www.w3.org/2000/svg" width="813" height="771" viewBox="0 0 813 771" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M185.067 193.855C224.956 165.974 266.899 145.231 311.896 126.676C350.257 110.857 390.958 108.278 429.553 93.038C491.154 68.7127 554.783 -31.0773 606.484 10.3491C664.13 56.5398 583.474 155.492 597.886 227.919C605.53 266.337 645.179 287.901 668.044 319.718C717.921 389.125 820.824 441.339 812.35 526.357C805.229 597.81 707.091 634.555 635.795 643.277C567.758 651.599 512.769 551.864 446.972 571.053C344.973 600.799 309.216 785.937 204.285 769.118C117.436 755.197 168.768 599.775 130.914 520.393C98.9407 453.343 -10.7323 416.953 1.41724 343.693C14.567 264.402 119.187 239.904 185.067 193.855Z" fill="#2D7017"/>
                </svg>
            </div>
        </section>


        @if(!empty($sections))
        <!--main-sec-->
        <section class="section main-sec">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">секции</h5>
                    <div class="sec-inner">
                        <div class="main-sec__row">

                            @foreach($sections as $item)
                            <!--item-sec-->
                            <div class="accordion item-sec">
                                <div class="accordion__header"><h5 class="grad-txt">{{ $item['title'] }}</h5><svg><use xlink:href="html/img/icons/sprite.svg#circle-chevron"></use></svg></div>
                                <div class="accordion__body">
                                    <div class="item-sec__content">
                                        <div class="item-sec__txt">{!! $item['text'] !!}</div>

                                        @if(!empty($item['about']) || !empty($item['position']))
                                        <div class="author">
                                            <div class="media-cover">
                                                @if(!empty($item['image']))
                                                <picture>
                                                    <source srcset="{{ Helper::thumb($item['image'], 'w=129,h=129,far=C,bg=FFFFFF', 1) }}" type="image/webp">
                                                    <img src="{{ Helper::thumb($item['image'], 'w=129,h=129,far=C,bg=FFFFFF') }}" alt="">
                                                </picture>
                                                @endif
                                            </div>
                                            <div class="author__info">
                                                <h6>{{ $item['position'] }}</h6>
                                                <p>{{ $item['about'] }}</p>
                                            </div>
                                        </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </section>
        @endif


        @if(!empty($advantages))
        <!--advant-->
        <section class="section advant">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">преимущества</h5>
                    <div class="sec-inner">
                        <div class="advant__row">

                            @foreach($advantages as $item)
                            <!--item-advant-->
                            <div class="item-advant">
                                <div class="item-advant__icon">
                                    <img src="{{ $item['image'] }}" alt="{{ $item['title'] }}">
                                </div>
                                <h5 class="grad-txt">{{ $item['title'] }}</h5>
                                <p>{!! $item['text'] !!}</p>
                            </div>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </section>
        @endif


        @if(!empty($tickets))
        <!--price-->
        <section class="section prices" id="main-prices">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">цены</h5>
                    <div class="sec-inner">
                        <h2 class="sec-title">
                            {{ count($tickets) }}
                            {{ Helper::plural(count($tickets), ['тип билетов', 'типа билетов', 'типов билетов']) }}</h2>
                    </div>
                </div>
                <div class="swiper2">
                    <div class="swiper">
                        <div class="swiper-wrapper">

                            @foreach($tickets as $item)
                            <!--item-prices-->
                            <div class="swiper-slide item-prices">
                                <div class="item-prices__top">
                                    <h3>«{{ $item['title'] }}»</h3>
                                    <div class="page-content">
                                        {!! $item['content'] !!}
                                    </div>
                                    <span class="h3 rub grad-txt">{{ Helper::formatPrice($item['tv_price']) }}</span>
                                </div>
                                <div class="item-prices__bottom">
                                    <div class="item-prices__code">
                                        <picture>
                                            <source srcset="{{ Helper::webp( $item['tv_qr'] ) }}" type="image/webp">
                                            <img src="{{ $item['tv_qr'] }}" alt="">
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            @endforeach

                        </div>
                    </div>
                    <button class="nav-btn nav-btn--prev"><svg><use xlink:href="html/img/icons/sprite.svg#btn-prev"></use></svg></button>
                    <button class="nav-btn nav-btn--next"><svg><use xlink:href="html/img/icons/sprite.svg#btn-next"></use></svg></button>
                </div>
                <div class="prices__btns">
                    <button class="btn main-btn mod-open-btn" data-modal="sponsor-mod">стать спонсором</button>
                    <button class="btn class stroke-btn mod-open-btn" data-modal="contacts-mod"><span class="link" data-txt="регистрация">регистрация</span></button>
                </div>
                <svg class="bg-grad prices__grad" xmlns="http://www.w3.org/2000/svg" width="815" height="774" viewBox="0 0 815 774" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M631.569 576.27C591.97 604.561 550.242 625.735 505.44 644.753C467.244 660.967 426.572 663.965 388.136 679.603C326.788 704.562 264.192 805.002 212.067 764.111C153.947 718.518 233.579 618.738 218.421 546.464C210.381 508.127 170.511 486.973 147.321 455.394C96.73 386.505 -6.70533 335.354 0.891158 250.253C7.2756 178.731 105.029 140.976 176.231 131.52C244.179 122.496 300.193 221.659 365.789 201.793C467.476 170.997 501.322 -14.5 606.421 1.23634C693.409 14.261 643.682 170.203 682.353 249.191C715.015 315.908 825.058 351.165 813.664 424.547C801.333 503.969 696.971 529.545 631.569 576.27Z" fill="#D2C01B" fill-opacity="0.7"/>
                </svg>
            </div>
        </section>
        @endif


        <!--reports-->
        <section class="section reports" data-grid="8" id="main-reports">
            <div class="reports__grad"></div>
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">секции & доклады</h5>
                    <div class="sec-inner">
                        <div class="reports__top">
                            <h2 class="sec-title">программа</h2>
                            <div class="reports__tabs">
                                @foreach($days ?? [] as $id => $item)
                                <label class="reports__tabs-item">
                                    <input type="radio" name="report-tab-day" value="{{ $id }}" {{ $loop->first ? 'checked' : '' }} data-report-day="{{ $id }}">
                                    <span>{{ Helper::formatDay($item['date']) }}</span>
                                </label>
                                @endforeach
                            </div>
                            <button class="btn stroke-btn mod-open-btn" data-modal="reports-mod"><span class="link" data-txt="все секции">все секции</span><svg><use xlink:href="html/img/icons/sprite.svg#edit"></use></svg></button>
                        </div>
                    </div>
                </div>
                <div class="reports__scroll" id="reports_block">
                    @if(!empty($reports))
                        @include('partials.reportsBlock', [ 'items' => $reports ])
                    @endif
                </div>
            </div>
        </section>


        @if(!empty($parties))
        <!--parties-->
        <section class="section parties">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">вечеринки</h5>
                    <div class="sec-inner">
                        <div class="parties__items">

                            @foreach($parties as $item)
                            <!--item-parties-->
                            <div class="item-parties">
                                <h5 class="grad-txt">{!! $item['title'] !!}</h5>
                                <div class="media-cover">
                                    <picture>
                                        <source srcset="{{ Helper::thumb($item['image'], 'w=539,h=299,zc=1,q=95', 1) }}" type="image/webp">
                                        <img src="{{ Helper::thumb($item['image'], 'w=539,h=299,zc=1,q=95') }}" alt="">
                                    </picture>
                                </div>
                                <div class="h6 page-loc"><svg><use xlink:href="html/img/icons/sprite.svg#location"></use></svg>
                                    {{ $item['address'] }}</div>
                                <div class="h6 page-time"><svg><use xlink:href="html/img/icons/sprite.svg#time"></use></svg>
                                    {{ Helper::formatDate($item['date'], false) }} в
                                    {{ $item['time'] }}</div>
                            </div>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </section>
        @endif


        @if(!empty($reviews))
        <!--reviews-->
        <section class="section reviews">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">о нас говорят</h5>
                    <div class="sec-inner">
                        <h2 class="sec-title">отзывы</h2>
                    </div>
                </div>
                <div class="swiper1">
                    <div class="swiper">
                        <div class="swiper-wrapper">

                            @foreach($reviews as $item)
                            <!--item-reviews-->
                            <div class="swiper-slide item-reviews">
                                <div class="media-cover">
                                    <picture>
                                        <source srcset="{{ Helper::thumb($item['image'], 'w=731,h=567,zc=1,q=95', 1) }}" media="(min-width: 1400.98px)" type="image/webp">
                                        <source srcset="{{ Helper::thumb($item['image'], 'w=731,h=567,zc=1,q=95') }}" media="(min-width: 1400.98px)">
                                        <source srcset="{{ Helper::thumb($item['image'], 'w=437,h=561,zc=1,q=95'), 1 }}"  media="(min-width: 1200.98px)" type="image/webp">
                                        <source srcset="{{ Helper::thumb($item['image'], 'w=437,h=561,zc=1,q=95') }}"  media="(min-width: 1200.98px)">
                                        <source srcset="{{ Helper::thumb($item['image'], 'w=402,h=216,zc=1,q=95', 1) }}" type="image/webp">
                                        <source srcset="{{ Helper::thumb($item['image'], 'w=402,h=216,zc=1,q=95') }}">
                                        <img src="{{ Helper::thumb($item['image'], 'w=731,h=567,zc=1,q=95') }}" alt="">
                                    </picture>
                                </div>
                                <div class="item-reviews__content">
                                    <h3>{{ $item['name'] }}@if(!empty($item['position'])),<br>{{ $item['position'] }}@endif</h3>
                                    <div class="page-content">
                                        {!! $item['text'] !!}
                                    </div>
                                    @if(!empty($item['link']))
                                    <a href="{{ $item['link'] }}" class="btn stroke-btn stroke-btn--dark" target="_blank"><span class="link" data-txt="читать полностью">читать полностью</span></a>
                                    @endif
                                </div>
                            </div>
                            @endforeach

                        </div>
                    </div>
                    <button class="nav-btn nav-btn--prev"><svg><use xlink:href="html/img/icons/sprite.svg#btn-prev"></use></svg></button>
                    <button class="nav-btn nav-btn--next"><svg><use xlink:href="html/img/icons/sprite.svg#btn-next"></use></svg></button>
                </div>
            </div>
        </section>
        @endif


        @if(!empty($galleries))
        <!--gallery-->
        <section class="section switch-block gallery">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">фото & видео</h5>
                    <div class="sec-inner">
                        <div class="gallery__top">
                            <h2 class="sec-title">как это было в</h2>
                            <div class="gallery__tabs">
                                @foreach($galleries as $item)
                                <span data-nav="" class="gallery__tabs-item {{ $loop->first ? 'active' : '' }}"><span>{{ $item['pagetitle'] }}</span></span>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>

                @foreach($galleries as $item)
                <div class="gallery__block {{ $loop->first ? 'active' : '' }}" data-block="">
                    <div class="gallery__items">
                        @if(!empty($item['videoGallery']))
                            @foreach($item['videoGallery'] as $video)
                        <div class="media-cover item-video" data-fancybox="gallery" data-src="{{ $video['link'] }}">
                            <picture>
                                <source srcset="{{ Helper::webp( $video['image'] ) }}" type="image/webp">
                                <img src="{{ $video['image'] }}" alt="">
                            </picture>
                        </div>
                            @endforeach
                        @endif
                        @if(!empty($item['gallery']))
                            @foreach($item['gallery'] as $image)
                        <div class="media-cover" data-fancybox="gallery" data-src="{{ $image['sg_image'] }}">
                            <picture>
                                <source srcset="{{ Helper::webp( $image['sg_image'] ) }}" type="image/webp">
                                <img src="{{ $image['sg_image'] }}" alt="">
                            </picture>
                        </div>
                            @endforeach
                        @endif
                    </div>
                </div>
                @endforeach

            </div>
        </section>
        @endif


        @if(!empty($partners))
        <!--partners-->
        <section class="section partners">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">лого</h5>
                    <div class="sec-inner">
                        <h2 class="sec-title">партнеры</h2>
                        <div class="partners__items">

                            @foreach($partners as $item)
                            <a href="{{ $item['link'] }}" target="_blank"><img src="{{ $item['image'] }}" alt=""></a>
                            @endforeach

                        </div>
                    </div>
                </div>
                <svg class="bg-grad partners__grad" xmlns="http://www.w3.org/2000/svg" width="813" height="771" viewBox="0 0 813 771" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M185.066 193.855C224.954 165.974 266.897 145.231 311.894 126.676C350.255 110.857 390.956 108.278 429.551 93.038C491.152 68.7127 554.781 -31.0773 606.482 10.3491C664.128 56.5398 583.472 155.492 597.884 227.919C605.528 266.337 645.178 287.901 668.042 319.718C717.919 389.125 820.822 441.339 812.348 526.357C805.227 597.81 707.089 634.555 635.793 643.277C567.756 651.599 512.767 551.864 446.97 571.053C344.971 600.799 309.214 785.937 204.283 769.118C117.434 755.197 168.766 599.775 130.912 520.393C98.9388 453.343 -10.7343 416.953 1.41529 343.693C14.565 264.402 119.185 239.904 185.066 193.855Z" fill="#2D7017"/>
                </svg>
            </div>
        </section>
        @endif


        @if(!empty($guide))
        <!--guide-->
        <section class="section switch-block guide" id="main-guide">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">Нижний Новгород</h5>
                    <div class="sec-inner">
                        <h2 class="sec-title">гид по городу</h2>
                        <div class="tabs">
                            @foreach($guide as $item)
                            <span class="{{ $loop->first ? 'active' : '' }}" data-nav="">{{ $item['pagetitle'] }}</span>
                            @endforeach
                        </div>
                    </div>
                </div>

                @foreach($guide as $item)
                <div class="guide__block {{ $loop->first ? 'active' : '' }}" data-block="">
                    <div class="swiper2">
                        <div class="swiper">
                            <div class="swiper-wrapper">

                                @foreach($item['children'] ?? [] as $child)
                                <!--item-guide-->
                                <div class="swiper-slide item-guide">
                                    <div class="media-cover">
                                        <picture>
                                            <source srcset="{{ Helper::thumb($child['tv.image'], 'w=701,h=342,zc=1,q=99', 1) }}" type="image/webp">
                                            <img src="{{ Helper::thumb($child['tv.image'], 'w=701,h=342,zc=1,q=99') }}" alt="">
                                        </picture>
                                    </div>
                                    <h3>{{ $child['pagetitle'] }}</h3>
                                    <div class="page-content">
                                        {!! $child['content'] !!}
                                    </div>
                                    <a @if(!empty($child['tv.link']))) href="{{ $child['tv.link'] }}" target="_blank" @endif class="btn stroke-btn stroke-btn--dark">
                                        <span class="link" data-txt="{{ $child['tv.address'] }}">{{ $child['tv.address'] }}</span>
                                    </a>
                                </div>
                                @endforeach

                            </div>
                        </div>
                        <button class="nav-btn nav-btn--prev"><svg><use xlink:href="html/img/icons/sprite.svg#btn-prev"></use></svg></button>
                        <button class="nav-btn nav-btn--next"><svg><use xlink:href="html/img/icons/sprite.svg#btn-next"></use></svg></button>
                    </div>
                </div>
                @endforeach

            </div>
        </section>
        @endif


        @if(!empty($faq))
        <!--faq-->
        <section class="section faq">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">частые вопросы</h5>
                    <div class="sec-inner">
                        <h2 class="sec-title">FAQ</h2>
                        <div class="faq__items show-all">

                            @foreach($faq as $item)
                            <!--item-faq-->
                            <div class="accordion item-faq {{ $loop->iteration <= 5 ? 'show' : '' }}">
                                <div class="accordion__header">
                                    <span>{{ $loop->iteration }}</span>
                                    <h3>{{ $item['title'] }}</h3>
                                </div>
                                <div class="accordion__body">
                                    <div class="page-content">
                                        {!! $item['text'] !!}
                                    </div>
                                </div>
                            </div>
                            @endforeach

                        </div>
                        @if(count($faq) > 5)
                        <button class="btn stroke-btn faq__btn"><span class="link" data-txt="открыть еще {{ count($faq) - 5 }} {{ Helper::plural((count($faq) - 5), [ 'вопрос', 'вопроса', 'вопросов' ]) }}">открыть еще {{ count($faq) - 5 }} {{ Helper::plural((count($faq) - 5), [ 'вопрос', 'вопроса', 'вопросов' ]) }}</span></button>
                        @endif
                    </div>
                </div>
                <svg class="bg-grad faq__grad" xmlns="http://www.w3.org/2000/svg" width="815" height="774" viewBox="0 0 815 774" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M631.569 576.27C591.97 604.561 550.242 625.735 505.44 644.753C467.244 660.967 426.572 663.965 388.136 679.603C326.788 704.562 264.192 805.002 212.067 764.111C153.947 718.518 233.579 618.738 218.421 546.464C210.381 508.127 170.511 486.973 147.321 455.394C96.73 386.505 -6.70533 335.354 0.891158 250.253C7.2756 178.731 105.029 140.976 176.231 131.52C244.179 122.496 300.193 221.659 365.789 201.793C467.476 170.997 501.322 -14.5 606.421 1.23634C693.409 14.261 643.682 170.203 682.353 249.191C715.015 315.908 825.058 351.165 813.664 424.547C801.333 503.969 696.971 529.545 631.569 576.27Z" fill="#D2C01B" fill-opacity="0.7"/>
                </svg>
            </div>
        </section>
        @endif


        @if(!empty($contacts))
        <!--contacts-->
        <section class="section contacts" id="main-contacts">
            <div class="container">
                <div class="sec-grid">
                    <h5 class="sec-lbl">с кем связаться</h5>
                    <div class="sec-inner">
                        <h2 class="sec-title">контакты</h2>
                        <div class="contacts__row">

                            @foreach($contacts as $item)
                            <!--item-contact-->
                            <div class="item-contact">
                                <div class="item-contact__top">
                                    <h5 class="grad-txt">{{ $item['name'] }}</h5>
                                    <p>{{ $item['position'] }}</p>
                                    <div class="item-contact__img">
                                        <picture>
                                            <source srcset="{{ Helper::webp($item['image']) }}" type="image/webp">
                                            <img src="{{ $item['image'] }}" alt="{{ $item['name'] }}">
                                        </picture>
                                    </div>
                                </div>
                                <div class="item-contact__contact"><a href="tel:{{ Helper::digits( $item['phone'] ) }}" class="h6 link" data-txt="{{ $item['phone'] }}">{{ $item['phone'] }}</a></div>
                                <div class="item-contact__contact"><a href="mailto:{{ $item['email'] }}" class="h6 link" data-txt="{{ $item['email'] }}">{{ $item['email'] }}</a></div>
                            </div>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </section>
        @endif
    </main>

@endsection

