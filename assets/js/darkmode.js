
let darkModeBtn = document.querySelector('.moon');

let body = document.querySelector('#body');

// let aboutMeContainer = document.querySelector('.aboutMe__containerMiddle');
// let sectionTitle = document.querySelector('.sectionTitle');
// let aboutMeGrid = document.querySelector('.aboutMe__grid');
// let aboutMeItemSub = document.querySelector('.aboutMe__itemSub');
// let aboutMeNumber = document.querySelector('.aboutMe__number');
// let aboutMeExperience = document.querySelector('.aboutMe__experience');
// let aboutMeEmail = document.querySelector('.aboutMe__itemEmail')

darkModeBtn.addEventListener('click', (e) => {
    body.classList.toggle('darkTheme')
})


// if(document.querySelector('#body.darkTheme')){
    //     body.style.backgroundColor = '#202020';
    //     aboutMeNumber.style.color = "#fbfbff";
    // }else{
    // }

// bodyDark.style.backgroundColor = '#202020';
// aboutMeContainer.style.color = '#fbfbff';
// sectionTitle.style.color = '#fbfbff';
// aboutMeGrid.style.color = '#fbfbff';
// aboutMeItemSub.style.color = '#fbfbff';
// aboutMeNumber.style.color = "#fbfbff";
// aboutMeExperience.style.color = '#0050f1';
// aboutMeEmail.style.color = '#fbfbff';