
$(document).ready(function(){

    $('#add form').submit(function(){
        var task={item:$('#add-task').val()};
        if(task.item.trim()===""){
            alert('Empty text are not allowed');
            return;
        }

            $.ajax({
                type:'POST',
                url:'/todo',
                data:task,
                success:function(data){
                    location.reload();
                }
            });
        return false;
    });

    $('.remove').on('click',function(e){
       let val= e.target.nextElementSibling.textContent;
       $.ajax({
           type:'DELETE',
           url:'/todo/'+val,
           success:function(data){
               location.reload();
           }
       });
    });

    $('#search-task').on('keyup',function(e){
        let val=e.target.value.toLowerCase();
        let list= $('#tasks div');
        Array.from(list).forEach(div=>{
            let text=div.lastElementChild.textContent.toLowerCase();
            if(text.indexOf(val)===-1){
                  div.hidden=true;
            }
        });
    });

    $('#search-task').on('blur',()=>{
        if($('#search-task').val()===''){
                location.reload();
        }
    });
});