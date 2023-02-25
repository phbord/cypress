function submitForm(e, url) {
  e.preventDefault();

  if (document.getElementById('firstName').value !== '' 
      && document.getElementById('country').value !== '') {
    window.location.href = `${url}`;
    return;
  }

  (document.getElementById('firstName').value === '') && document.getElementById('firstNameErr').classList.add('d-block');
  (document.getElementById('country').value === '') && document.getElementById('countryErr').classList.add('d-block');
}

function displayModal(id) {
  if (document.getElementById(id)) {
    const bodyElt = document.getElementsByTagName('body')[0];
    const modalElt = document.getElementById(id);
    const overlayHtml = '<div id="modal-backdrop" class="modal-backdrop fade show"></div>';

    bodyElt.classList.add('modal-open');
    bodyElt.setAttribute('style', 'overflow: hidden; padding-right: 15px;');
    modalElt.classList.add('show');
    modalElt.setAttribute('style', 'display: block');
    bodyElt.innerHTML += overlayHtml;
  }
}

function hideModal(id) {
  if (document.getElementById(id)) {
    const bodyElt = document.getElementsByTagName('body')[0];
    const modalElt = document.getElementById(id);
    const overlayElt = document.getElementById('modal-backdrop');

    bodyElt.classList.remove('modal-open');
    bodyElt.removeAttribute('style');
    modalElt.classList.remove('show');
    modalElt.setAttribute('style', 'display: none');
    overlayElt.remove();
  }
}