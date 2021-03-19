function ativaScrollSuave(selector) {

    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });
}

ativaScrollSuave('a[href*=Sobre]');
ativaScrollSuave('a[href*=Planos]');
ativaScrollSuave('a[href*=Blog]');
ativaScrollSuave('a[href*=Destaques]');
ativaScrollSuave('a[href*=Institucional]');
ativaScrollSuave('a[href*=Contato]');