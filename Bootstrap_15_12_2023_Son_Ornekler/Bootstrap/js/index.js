
(() => {
    'use strict'
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach(tooltip => {
        new bootstrap.Tooltip(tooltip)
      })
    document.querySelectorAll('[data-bs-toggle="popover"]')
      .forEach(popover => {
        new bootstrap.Popover(popover)
      })
  
    const toastPlacement = document.getElementById('toastPlacement')
    if (toastPlacement) {
      document.getElementById('selectToastPlacement').addEventListener('change', function () {
        if (!toastPlacement.dataset.originalClass) {
          toastPlacement.dataset.originalClass = toastPlacement.className
        }
  
        toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
      })
    }
  
    document.querySelectorAll('.bd-example .toast')
      .forEach(toastNode => {
        const toast = new bootstrap.Toast(toastNode, {
          autohide: false
        })
  
        toast.show()
      })
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
  
    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
  
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
  
      alertPlaceholder.append(wrapper)
    }
  
    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
      })
    }
  
    document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
      .forEach(carousel => {
        bootstrap.Carousel.getOrCreateInstance(carousel)
      })
  
    document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
      .forEach(checkbox => {
        if (checkbox.id.includes('Indeterminate')) {
          checkbox.indeterminate = true
        }
      })
  
  
    document.querySelectorAll('.bd-content [href="#"]')
      .forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault()
        })
      })
  
    // -------------------------------
    // Modal
    // -------------------------------
    // Modal 'Varying modal content' example in docs and StackBlitz
    // js-docs-start varying-modal-content
    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
      exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.
  
        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')
  
        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
      })
    }
    // js-docs-end varying-modal-content
  
    // -------------------------------
    // Offcanvas
    // -------------------------------
    // 'Offcanvas components' example in docs only
    const myOffcanvas = document.querySelectorAll('.bd-example-offcanvas .offcanvas')
    if (myOffcanvas) {
      myOffcanvas.forEach(offcanvas => {
        offcanvas.addEventListener('show.bs.offcanvas', event => {
          event.preventDefault()
        }, false)
      })
    }
  })()