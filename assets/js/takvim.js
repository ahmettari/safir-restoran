
$(document).ready(function() {
  // Bugünün tarihini al
  var today = new Date();

  // Bootstrap Datepicker'ı başlat ve minDate olarak bugünü ayarla
  $('#filterDate2 .input-group.date').datepicker({
    format: 'dd/mm/yyyy',
    startDate: today,  // Bugünden önceki tarihleri devre dışı bırak
    autoclose: true
  });
});


