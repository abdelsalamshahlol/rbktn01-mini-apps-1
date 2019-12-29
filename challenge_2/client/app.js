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
        $('#result').html(data);
        let file = new Blob([data], { type: 'text/csv' });
        $('#downloader').fadeIn()
          .attr('href', URL.createObjectURL(file))
          .attr('download', 'download.csv');
      },
      fail: function (e) {
        console.error(e);
      }
    });
  });
});

