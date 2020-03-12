const movieNameInput = document.querySelector('#input_1');
const addBtn = document.querySelector('#btn-add');
const movieList = document.querySelector('#list_1');
const alertCtrl = document.querySelector('ion-alert-controller');
const numberHTML = document.querySelector('#select_number');

addBtn.addEventListener('click', () => {

    // recuperation des inputs
    const enteredName = movieNameInput.value;
    const numberchoose = numberHTML.value;
  
    
    if (
        enteredName.trim().length <= 0
    ) {
        alertCtrl
            .create({
                header: 'Erreur',
                message: 'Veuillez entrez un film correct',
                buttons: ['Ok']
            })
            .then(alertEl => alertEl.present());
        return;
    }


    // creer l'élement mère
    const newItem = document.createElement('ion-item');
        
    // ajouter des elements html a ion-item
    newItem.innerHTML = `<ion-avatar slot="start">
                            <img src="./star.jpg">
                         </ion-avatar>
                         <ion-label>
                            <h3><strong>${enteredName}</strong></h3>
                            <p> note : ${numberchoose} / 5 </p>
                         </ion-label>`;
  
  // ajouter le ion item a la liste                      
  movieList.appendChild(newItem);

 movieNameInput.value = '';
});

