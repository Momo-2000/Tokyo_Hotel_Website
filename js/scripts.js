$(function() {


    $('#navi li').on('mouseenter', function() {
        $(this).find("ul").stop().slideDown(300);
    })
    $('#navi li').on('mouseleave', function() {
        $(this).find("ul").stop().slideUp(300);

        $('#first,#third').css('color', '#394C4A');
        // $('li.five strong').css('color','#394C4A');
        $('li *').css('color', '#D6AF62');
        $('li ').css('color', '#394C4A');
        // $("li:not('.text')").css('color','pink');

        $('#circle').animate({
            'margin-left': '950px',
            'margin-top': '20px',
            'border-radius': '0px'

        }, {
            duration: 3000,
            easing: 'swing'
        });
    });

    $('#contents div:not("#tab1")').hide();

    // タブをクリック
    $('a').on('click', function() {
        // 一度全てのコンテンツを非表示にする
        $('#contents div').hide();

        // 選択されたコンテンツを再表示する
        $($(this).attr('href')).show();

        // 現在のcurrentクラスを削除
        $('.current').removeClass('current');

        // 選択されたタブ（自分自身）にcurrentクラスを追加
        $(this).addClass('current');
        $('figure img').attr('src', $(this).attr('href'));

        return false;
    });

    //li要素内にマウスが入った場合
    $('.photo li').on('mouseenter', function() {
        // キャプション部分の追加
        $(this).append(
            '<div><p>' +
            $(this).children('img').attr('alt') +
            '</p></div>'
        );
        // キャプション部分の表示：フェードイン
        $(this).children('div').stop().fadeIn(300);
        // キャプションのテキスト位置：10pxから0pxへ移動
        $(this).children('div').children('p')
            .stop()
            .animate({ 'top': 0 }, 300);
    });
    // li要素からマウスが離れた場合
    $('.photo li').on('mouseleave', function() {
        // キャプション部分の非表示：フェードアウト
        $(this).children('div').stop().fadeOut(300);
        // キャプションのテキスト位置：0pxから10pxへ移動
        $(this).children('div').children('p')
            .stop().animate({ 'top': '10px' }, 300, function() {
                $(this).parent('div').remove();
            });
    });

    var $aside = $('.page-main');
    var $asidButton = $aside.find('button').on('click', function() {
        $aside.toggleClass('open');
        if ($aside.hasClass('open')) {
            $aside.stop(true).animate({
                left: '-70px'
            }, 300, 'swing');
            $asidButton.find('img').attr('src', 'img/btn_close.png');
        } else {
            $aside.stop(true).animate({
                left: '-350px'
            }, 300, 'swing');
            $asidButton.find('img').attr('src', 'img/btn_open.png');
        };
    });


    var bannerarr = ['img11', 'img12', 'img13', 'img14'];
    var num = Math.random();
    num = num * 4;
    num = Math.floor(num);
    console.log(num);
    $("#tab10 img").attr("src", "img/" + bannerarr[num] + ".jpg");
});