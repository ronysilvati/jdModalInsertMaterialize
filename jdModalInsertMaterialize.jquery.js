/**
 * Created Rony on 18/08/2016.
 */

/**
 * Created by Rony on 19/11/15.
 * Módulo responsável pela geração de modal automático e personalizado
 * Possui como dependencia o JQuery e Materialize para o correto funcionamento
 *
 * ***************************************************************************
 * Desenvolver: Rony Silva
 * Email: ronysilvati@live.com
 * ***************************************************************************
 * ===========================================================================
 * Dependências
 * ===========================================================================
 * Jquery
 * Materialize
 * ===========================================================================
 */

var jdModalInsertMaterialize   = function(){
    //Configurações default do modal (Private)
    var primaryId           = new Date().getTime();
    var modalIdentificacao  = 'jd-modal-insert-materialize-'+primaryId,//Identificação do modal no DOM
        modalLargura        = '40%',
        modalMaxLargura     = '50%',
        loader              = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc5MnB4JyBoZWlnaHQ9JzkycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZGVmcz48ZmlsdGVyIGlkPSJ1aWwtcmluZy1zaGFkb3ciIHg9Ii0xMDAlIiB5PSItMTAwJSIgd2lkdGg9IjMwMCUiIGhlaWdodD0iMzAwJSI+PGZlT2Zmc2V0IHJlc3VsdD0ib2ZmT3V0IiBpbj0iU291cmNlR3JhcGhpYyIgZHg9IjAiIGR5PSIwIj48L2ZlT2Zmc2V0PjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImJsdXJPdXQiIGluPSJvZmZPdXQiIHN0ZERldmlhdGlvbj0iMCI+PC9mZUdhdXNzaWFuQmx1cj48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyT3V0IiBtb2RlPSJub3JtYWwiPjwvZmVCbGVuZD48L2ZpbHRlcj48L2RlZnM+PHBhdGggZD0iTTEwLDUwYzAsMCwwLDAuNSwwLjEsMS40YzAsMC41LDAuMSwxLDAuMiwxLjdjMCwwLjMsMC4xLDAuNywwLjEsMS4xYzAuMSwwLjQsMC4xLDAuOCwwLjIsMS4yYzAuMiwwLjgsMC4zLDEuOCwwLjUsMi44IGMwLjMsMSwwLjYsMi4xLDAuOSwzLjJjMC4zLDEuMSwwLjksMi4zLDEuNCwzLjVjMC41LDEuMiwxLjIsMi40LDEuOCwzLjdjMC4zLDAuNiwwLjgsMS4yLDEuMiwxLjljMC40LDAuNiwwLjgsMS4zLDEuMywxLjkgYzEsMS4yLDEuOSwyLjYsMy4xLDMuN2MyLjIsMi41LDUsNC43LDcuOSw2LjdjMywyLDYuNSwzLjQsMTAuMSw0LjZjMy42LDEuMSw3LjUsMS41LDExLjIsMS42YzQtMC4xLDcuNy0wLjYsMTEuMy0xLjYgYzMuNi0xLjIsNy0yLjYsMTAtNC42YzMtMiw1LjgtNC4yLDcuOS02LjdjMS4yLTEuMiwyLjEtMi41LDMuMS0zLjdjMC41LTAuNiwwLjktMS4zLDEuMy0xLjljMC40LTAuNiwwLjgtMS4zLDEuMi0xLjkgYzAuNi0xLjMsMS4zLTIuNSwxLjgtMy43YzAuNS0xLjIsMS0yLjQsMS40LTMuNWMwLjMtMS4xLDAuNi0yLjIsMC45LTMuMmMwLjItMSwwLjQtMS45LDAuNS0yLjhjMC4xLTAuNCwwLjEtMC44LDAuMi0xLjIgYzAtMC40LDAuMS0wLjcsMC4xLTEuMWMwLjEtMC43LDAuMS0xLjIsMC4yLTEuN0M5MCw1MC41LDkwLDUwLDkwLDUwczAsMC41LDAsMS40YzAsMC41LDAsMSwwLDEuN2MwLDAuMywwLDAuNywwLDEuMSBjMCwwLjQtMC4xLDAuOC0wLjEsMS4yYy0wLjEsMC45LTAuMiwxLjgtMC40LDIuOGMtMC4yLDEtMC41LDIuMS0wLjcsMy4zYy0wLjMsMS4yLTAuOCwyLjQtMS4yLDMuN2MtMC4yLDAuNy0wLjUsMS4zLTAuOCwxLjkgYy0wLjMsMC43LTAuNiwxLjMtMC45LDJjLTAuMywwLjctMC43LDEuMy0xLjEsMmMtMC40LDAuNy0wLjcsMS40LTEuMiwyYy0xLDEuMy0xLjksMi43LTMuMSw0Yy0yLjIsMi43LTUsNS04LjEsNy4xIGMtMC44LDAuNS0xLjYsMS0yLjQsMS41Yy0wLjgsMC41LTEuNywwLjktMi42LDEuM0w2Niw4Ny43bC0xLjQsMC41Yy0wLjksMC4zLTEuOCwwLjctMi44LDFjLTMuOCwxLjEtNy45LDEuNy0xMS44LDEuOEw0Nyw5MC44IGMtMSwwLTItMC4yLTMtMC4zbC0xLjUtMC4ybC0wLjctMC4xTDQxLjEsOTBjLTEtMC4zLTEuOS0wLjUtMi45LTAuN2MtMC45LTAuMy0xLjktMC43LTIuOC0xTDM0LDg3LjdsLTEuMy0wLjYgYy0wLjktMC40LTEuOC0wLjgtMi42LTEuM2MtMC44LTAuNS0xLjYtMS0yLjQtMS41Yy0zLjEtMi4xLTUuOS00LjUtOC4xLTcuMWMtMS4yLTEuMi0yLjEtMi43LTMuMS00Yy0wLjUtMC42LTAuOC0xLjQtMS4yLTIgYy0wLjQtMC43LTAuOC0xLjMtMS4xLTJjLTAuMy0wLjctMC42LTEuMy0wLjktMmMtMC4zLTAuNy0wLjYtMS4zLTAuOC0xLjljLTAuNC0xLjMtMC45LTIuNS0xLjItMy43Yy0wLjMtMS4yLTAuNS0yLjMtMC43LTMuMyBjLTAuMi0xLTAuMy0yLTAuNC0yLjhjLTAuMS0wLjQtMC4xLTAuOC0wLjEtMS4yYzAtMC40LDAtMC43LDAtMS4xYzAtMC43LDAtMS4yLDAtMS43QzEwLDUwLjUsMTAsNTAsMTAsNTB6IiBmaWxsPSIjY2MwMDAwIiBmaWx0ZXI9InVybCgjdWlsLXJpbmctc2hhZG93KSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNTAgNTAiIHRvPSIzNjAgNTAgNTAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9wYXRoPjwvc3ZnPg==',
        public              = {};

    //==============================================//
    // Métodos do módulo (API Publica)              //
    //==============================================//
    public.initModal    =  function(html,dataLink,modalLarguraE,modalMaxLarguraE,modalIdentificacaoE){
        var self    = this;
        var larguraTela = window.innerWidth;

        try{
            if(modalIdentificacaoE){
                modalIdentificacao = modalIdentificacaoE;
            }

            if(modalLarguraE){
                modalLargura    = modalLarguraE;
            }

            if(modalMaxLarguraE){
                modalMaxLargura    = modalMaxLarguraE;
            }

            if(larguraTela < 750){
                modalLargura    = '90%';
            }

            var layoutModal = "<div id='"+modalIdentificacao+"' class='modal'>"+
                                "<div class='modal-content-"+primaryId+"'><img alt='Embedded Image' src='"+loader+"' /></div>"+
                                "<div class='modal-footer'>"+
                                    "<a href='#!' class='modal-action modal-close waves-effect waves-green btn-flat'>X</a>"+
                                "</div>"+
                              "</div>";


            //Removo qualquer modal anterior com a mesma identificação do DOM
            $('#'+modalIdentificacao).remove();

            if(dataLink || html){
                //Adiciono o novo modal ao DOM
                $('body').append(layoutModal);
                //Exibo o modal
                $('#'+modalIdentificacao).openModal('show');

                if(dataLink){
                    //Carrego os dados da url informada
                    $('.modal-content-'+primaryId).load(dataLink,function(response, status, xhr){
                        if(status == 'error'){
                            $('.modal-content-'+primaryId).html('<h2>Não foi possível exibir a url solicitada. :(</h2>');
                        }
                    });
                }
                else{
                    //Carrego os dados do html informado
                    $('.modal-content-'+primaryId).html(html);
                }
            }
            else{
                throw new Error("Não foi informada uma url/layout para carregamento.");
            }
        }
        catch(err){
            console.log("jdModalInsertMaterialize ERRO: "+err.message);
        }
    }

    return public;
}