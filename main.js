$(function(){
    var audio = document.getElementById("audio");
    audio.volume = 0.5;

    //fullpage
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Entrance','Under','Contact'],
        showActiveTooltip: true,
        easingcss3: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
    });

    $('.contact_wrap').hide();
    $('.profile').hide();
    $('.navi').hide();
    $('.webpf').hide();
    $('.editpf').hide();
    $('.body').click(function(){
        $('.navi').fadeOut(0);
        $('.webpf').fadeOut(0);
        $('.editpf').fadeOut(0);
        $('.profile').fadeIn();

        //스킬바 게이지
        jQuery(document).ready(function(){
            jQuery('.skillbar').each(function(){
                jQuery(this).find('.skillbar-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },1000);
            });
        });
        
        jQuery('.Count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        //스킬바 게이지 끝
    });
    $('.close').click(function(){
        $('.profile').fadeOut();
        $('.navi').fadeOut();
        $('.webpf').fadeOut();

        //스킬바 게이지
        jQuery(document).ready(function(){
            jQuery('.skillbar').each(function(){
                jQuery(this).find('.skillbar-bar').animate({
                    width:0
                },0);
            });
        });
        //스킬바 게이지 끝
    });

    $('.cat').click(function(){
        $('.profile').fadeOut(0);
        $('.webpf').fadeOut(0);
        $('.editpf').fadeOut(0);
        $('.navi').fadeIn();
    });
    $('.close2').click(function(){
        $('.profile').fadeOut();
        $('.navi').fadeOut();
        $('.webpf').fadeOut();
        $('.editpf').fadeOut();
    });

    $('.desk').click(function(){
        $('.profile').fadeOut(0);
        $('.navi').fadeOut(0);
        $('.editpf').fadeOut(0);
        $('.webpf').fadeIn();
    });
    $('.close3').click(function(){
        $('.profile').fadeOut();
        $('.navi').fadeOut();
        $('.webpf').fadeOut();
        $('.editpf').fadeOut();
    });

    $('.book').click(function(){
        $('.profile').fadeOut(0);
        $('.navi').fadeOut(0);
        $('.webpf').fadeOut(0);
        $('.editpf').fadeIn();
        $('.subtitle').delay(700).fadeIn();
        $('.phone_frame').delay(1200).fadeIn();
        $('.phone_frame2').delay(1200).fadeIn();
        $('.phone_frame3').delay(1200).fadeIn();
    });
    $('.close4').click(function(){
        $('.profile').fadeOut();
        $('.navi').fadeOut();
        $('.webpf').fadeOut();
        $('.editpf').fadeOut();
        $('.subtitle').fadeOut();
        $('.phone_frame').fadeOut();
        $('.phone_frame2').fadeOut();
        $('.phone_frame3').fadeOut();
    });
    $('.close5').click(function(){
        $('.contact_wrap').fadeOut(1000);
        $('.scroll').fadeIn(1500);
    });

    //배너 포트폴리오 클릭 확대보기
    $('.b1').click(function(){
        $('.content').css({"background":"url(./img/edit/p1_weped.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b2').click(function(){
        $('.content').css({"background":"url(./img/edit/p2_ek.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b3').click(function(){
        $('.content').css({"background":"url(./img/edit/p3_primal.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b4').click(function(){
        $('.content').css({"background":"url(./img/edit/p4_game.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b5').click(function(){
        $('.content').css({"background":"url(./img/edit/p5_gucci.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b6').click(function(){
        $('.content').css({"background":"url(./img/edit/p6_lays.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b7').click(function(){
        $('.content').css({"background":"url(./img/edit/p7_fila.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b8').click(function(){
        $('.content').css({"background":"url(./img/edit/p8_review.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b9').click(function(){
        $('.content').css({"background":"url(./img/edit/p9_sale.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b10').click(function(){
        $('.content').css({"background":"url(./img/edit/p10_skin.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b11').click(function(){
        $('.content').css({"background":"url(./img/edit/p11_wonder.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.b12').click(function(){
        $('.content').css({"background":"url(./img/edit/p12_winter.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });


    //목업 포트폴리오 클릭 확대보기
    $('.p1').click(function(){
        $('.content2').css({"background":"url(./img/mockup/book_mockup1.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p2').click(function(){
        $('.content2').css({"background":"url(./img/mockup/book_mockup2.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p3').click(function(){
        $('.content2').css({"background":"url(./img/mockup/book_mockup3.jpg)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p4').click(function(){
        $('.content2').css({"background":"url(./img/mockup/CD_mockup1.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p5').click(function(){
        $('.content2').css({"background":"url(./img/mockup/CD_mockup2.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p6').click(function(){
        $('.content2').css({"background":"url(./img/mockup/MOVIE_mockup1.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p7').click(function(){
        $('.content2').css({"background":"url(./img/mockup/MOVIE_mockup2.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p8').click(function(){
        $('.content2').css({"background":"url(./img/mockup/RIP_mockup1.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p9').click(function(){
        $('.content2').css({"background":"url(./img/mockup/RIP_mockup2.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p10').click(function(){
        $('.content2').css({"background":"url(./img/mockup/RIP_mockup3.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.p11').click(function(){
        $('.content2').css({"background":"url(./img/mockup/RIP_mockup4.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });


    //일러스트 포트폴리오 클릭 확대보기
    $('.i1').click(function(){
        $('.content3').css({"background":"url(./img/illust/rabbit.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.i2').click(function(){
        $('.content3').css({"background":"url(./img/illust/catNcar.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });
    $('.i3').click(function(){
        $('.content3').css({"background":"url(./img/illust/siva.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center', 'background-size':'contain'});
    });

    $('.scroll').click(function(){
        $('.scroll').fadeOut(1000)
        $('.contact_wrap').fadeIn(1500)
    })
})
