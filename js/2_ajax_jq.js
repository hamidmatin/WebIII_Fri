$(function () {
  /*
    $.ajax({
      url: 'url',
      type: 'GET or POST or DELETE or PUT default GET',
      data: 'value',
      success: function(data, textStatus, jqXHR){},
      error: function(jqXHR, textStatus, errorThrown ){},
      complete: function(jqXHR, textStatus){},
      beforeSend:function(jqXHR, setting){}
    })
  */

  $('#btn1').click(function () {
    $.ajax({
      url: 'data/my-data.txt',
      success: function (data, statusText, jqXHR) {
        console.log(data);
        console.log(statusText);
        console.log(jqXHR);
      },
      error: function (jqXHR) {
        console.log(jqXHR);
      },
    });
  });

  $('#btn2').click(function () {
    $.ajax({
      url: 'data/student_list.json',
      success: function (data, statusText, jqXHR) {
        console.log(data);
        console.log(statusText);
        console.log(jqXHR);
      },
      error: function (jqXHR) {
        console.log(jqXHR);
      },
    });
  });
});