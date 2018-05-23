function deleteNote(id) {
  var ajaxRequest = {
    url: '/notes/' + id,
    method: 'delete',
    success: window.location.reload()
  };
  $.ajax(ajaxRequest);
}
