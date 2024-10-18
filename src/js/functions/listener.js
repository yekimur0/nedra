
export const listener = () => {
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);
        if (target.hasAttribute('data-modal-open')) openModal(target);
        if(target.classList.contains('modal__close') || target.classList.contains('modal')) closeModal();
        function openModal(target) {
          const modal = document.getElementById('modal');
          modal.classList.add('modal--active');
        }

        function closeModal (target) {
          const modal = document.getElementById('modal');
          modal.classList.remove('modal--active');
        }

    })
}

listener();
