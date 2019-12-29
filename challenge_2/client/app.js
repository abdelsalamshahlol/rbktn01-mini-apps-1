$(function () {
  $('body').on('submit', '#mainForm', function (e) {
    const src = $(this);
    const formData = new FormData(this)
    // console.log(formData, src, this)
    e.preventDefault();
    $.ajax({
      data: formData,
      url: src.attr('action'),
      method: 'POST',
      enctype: 'multipart/form-data',
      processData: false,
      contentType: false,
      success: function (data) {
        console.log(data);
      },
      fail: function (e) {
        console.log(e);
      }
    });
  });
});

