const btn= document.querySelector('.btn');
const liste= document.querySelector('.liste');

btn.addEventListener('click', () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    //then cest une promesse
    .then(response => response.json()) //convertir en json
    .then(data =>{   //dire ce quon veut que ca fasse mtn
        data.forEach(element => {
            let newLi = document.createElement('li');
            let newTitreCarte = document.createElement('h2');
            let newBodyCarte =  document.createElement('p');

            newTitreCarte.innerText = element.title;  //afficher la propriete title de lobjet en h2
            newBodyCarte.innerText = element.body;

            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);
            liste.appendChild(newLi);

        });
    }).catch(error=>{ //pour voir si ya des erreurs
        console.error('Erreur:',error)}
    )
});

//wappalyzer pour voir un site est fais avec quoi