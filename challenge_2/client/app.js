$(function () {
  $('body').on('submit', '#mainForm', function (e) {
    e.preventDefault();
    const src = $(this);
    const formData = new FormData(this);

    $.ajax({
      data: formData,
      url: src.attr('action'),
      method: 'POST',
      enctype: 'multipart/form-data',
      processData: false,
      contentType: false,
      success: function (data) {
        console.log(data);
        $('#result').html(data)
      },
      fail: function (e) {
        console.log(e);
      }
    });
  });
});

