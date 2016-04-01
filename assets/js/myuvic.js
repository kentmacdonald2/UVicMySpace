$(function(){
    $(document).ready(function(){
        //Read the Hash
        if(window.location.hash) {
            var id = window.location.hash;
            if ($('.semester' + id)){
                SetSemester(id);
            }
        }
    });

    $('select[data-toggle="semester"]').each(function(){
        $(this).change(function(){
            SetSemester(this.value);
        });
    });

    function SetSemester(id){
        var $semester = $('.semester' + id);
        if (!$semester.length) throw Error("Semester '" + id + "' not found on page.",id);

        //Hide other Semester
        $('.semester.active').removeClass('active');

        // Show the Current Semester
        $semester.addClass('active');

        // Set the Hash
        if(history.pushState) history.pushState(null, null, id);
        else location.hash = id;

        //Set the selects
        $('select[data-toggle="semester"]').val(id);
    }

});
