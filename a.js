$(function(){
    //var mySwiper = new Swiper ('.swiper-container', {
    //    direction: 'vertical',
    //    loop: false,
    //
    //    // �����Ҫ��ҳ��
    //    pagination: {
    //        el: '.swiper-pagination',
    //    },
    //
    //    // �����Ҫǰ�����˰�ť
    //    navigation: {
    //        nextEl: '.swiper-button-next',
    //        prevEl: '.swiper-button-prev',
    //    },
    //
    //    // �����Ҫ������
    //    scrollbar: {
    //        el: '.swiper-scrollbar',
    //    },
    //})



    var isDialogTitle=false;

    function down(e){
        if(e.target.className.indexOf('dialog-title')!=-1){
            isDialogTitle=true;
        }
    }

    function move(e){
        var dialog=document.getElementById('dlgTest');
        if(isDialogTitle){//ֻ�е��Dialog Title��ʱ������϶�
            dialog.style.left=e.clientX+'px';
            dialog.style.top=e.clientY+'px';
        }
    }

    function up(e){
        isDialogTitle=false;
    }

    document.addEventListener('mousedown',down);
    document.addEventListener('mousemove',move);
    document.addEventListener('mouseup',up);

});