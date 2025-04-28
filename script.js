document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const uploadModalElement = document.getElementById('uploadModal');
    const thankYouModalElement = document.getElementById('thankYouModal');

    const uploadModal = new bootstrap.Modal(uploadModalElement);
    const thankYouModal = new bootstrap.Modal(thankYouModalElement);

    uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();

    uploadModal.hide();
    uploadForm.reset();
    thankYouModal.show();
});

document.querySelectorAll('.btn-detail').forEach(button => {
    button.addEventListener('click', function() {
    const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
    detailModal.show();
    });
});
});
