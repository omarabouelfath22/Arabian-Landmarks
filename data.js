let egyptButton = document.querySelector('#egypt');
let saudiButton = document.querySelector('#saudi');
let syriaButton = document.querySelector('#syria');
let palestineButton = document.querySelector('#palestine');
let tunisiaButton = document.querySelector('#tunisia');
let emiratesButton = document.querySelector('#emirates');
let IraqButton = document.querySelector('#Iraq');
let KuwaitButton = document.querySelector('#Kuwait');
let LibyaButton = document.querySelector('#Libya');
let LibanonButton = document.querySelector('#Libanon');
let BahrainButton = document.querySelector('#Bahrain');
let MorocoButton = document.querySelector('#Moroco');
let ComorosButton = document.querySelector('#Comoros');
let AlgeriaButton = document.querySelector('#Algeria');
let OmanButton = document.querySelector('#Oman');
let QatarButton = document.querySelector('#Qatar');
let MauritaniaButton = document.querySelector('#Mauritania');
let JordanButton = document.querySelector('#Jordan');
let DjiboutiButton = document.querySelector('#Djibouti');
let SomaliaButton = document.querySelector('#Somalia');
let SudanButton = document.querySelector('#Sudan');
let YemenButton = document.querySelector('#Yemen');


let allCountries = document.querySelector('#allCountries');

let printCountries = document.querySelector('#printCountries');

let body = document.querySelector('#body');


const navLinks = document.querySelectorAll('.nav-link');
const toggleButton = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            toggleButton.click();
        }
    });
});



egyptButton.addEventListener('click', (e) => {
    e.preventDefault();
    allCountries.innerHTML = '';


    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/eg.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'EGYPT';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);


    /*------------------------------------------------------
    Object.values(landmarksData).forEach(inner =>{
        inner.forEach(data =>{
            img.src=data.Egypt.image;
            name.innerText='Name:';
            textName.innerText=data.Egypt.name;
            history.innerText='Brief History:';
            textHistory.innerText=data.Egypt.history
            location.innerText='Location';
            textLocation.innerText=data.Egypt.location;
        });
    });
    */

    landmarksData.Egypt.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


saudiButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/sa.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'SAUDIA ARABIA';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.SaudiaArabia.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

palestineButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/ps.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'PALESTINE';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Palestine.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

syriaButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/sy.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'SYRIA';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Syria.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

tunisiaButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/tn.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'TUNISIA';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Tunisia.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

emiratesButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/ae.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'EMIRATES';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.UnitedArabEmirates.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

IraqButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/iq.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'IRAQ';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Iraq.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

KuwaitButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/kw.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'KUWAIT';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Quwait.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


LibyaButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/ly.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'LIBYA';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Libya.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


LibanonButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/lb.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'LEBANON';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Lebanon.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


BahrainButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/bh.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'BAHRAIN';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Bahrain.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


MorocoButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/ma.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'MOROCO';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Moroco.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


ComorosButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/km.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'COMOROS';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Comoros.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


AlgeriaButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/dz.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'ALGERIA';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Algeria.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


OmanButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/om.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'OMAN';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);


    landmarksData.Oman.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


QatarButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/qa.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'QATAR';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Qatar.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


SudanButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/sd.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'SUDAN';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Sudan.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})


YemenButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/ye.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'YEMEN';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Yemen.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

MauritaniaButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/mr.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'MAURITANIA';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Mauritania.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

JordanButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/jo.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'JORDAN';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Jordan.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

DjiboutiButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/dj.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'DJIBOUTI';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Djibouti.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})

SomaliaButton.addEventListener('click', (e) => {
    allCountries.innerHTML = '';

    const flagANDname = document.createElement('div');
    flagANDname.id = 'flagANDname';

    const flg = document.createElement('img');
    flg.id = 'Flag';
    flg.src = 'https://flagcdn.com/w160/so.png';
    flagANDname.append(flg);

    const CountryName = document.createElement('div');
    CountryName.id = 'CountryName';
    CountryName.innerText = 'SOMALIA';
    flagANDname.append(CountryName);
    printCountries.append(flagANDname);

    const Landmarks = document.createElement('div');
    Landmarks.id = 'Landmarks';
    Landmarks.innerText = 'LANDMARKS';
    printCountries.append(Landmarks);

    landmarksData.Somalia.forEach(data => {
        const landmarksContainer = document.createElement('div');
        landmarksContainer.id = 'displayContainer';
        const img = document.createElement('img');
        img.id = 'img';
        const name = document.createElement('div');
        name.id = 'name';
        const textName = document.createElement('div');
        textName.id = 'textName';
        const history = document.createElement('div');
        history.id = 'history';
        const textHistory = document.createElement('div');
        textHistory.id = 'textHistory';
        const location = document.createElement('div');
        location.id = 'location';
        const textLocation = document.createElement('div');
        textLocation.id = 'textLocation';
        img.src = data.image;
        name.innerText = 'Name:';
        textName.innerText = data.name;
        history.innerText = 'Brief History:';
        textHistory.innerText = data.history;
        location.innerText = 'Location';
        textLocation.innerText = data.location;
        landmarksContainer.append(img);
        landmarksContainer.append(name);
        landmarksContainer.append(textName);
        landmarksContainer.append(history);
        landmarksContainer.append(textHistory);
        landmarksContainer.append(location);
        landmarksContainer.append(textLocation);
        printCountries.append(landmarksContainer);


    })
})






const landmarksData = {
    Egypt: [
        {
            name: "The Great Pyramids of Giza",
            history: "Built during the 4th Dynasty of the Old Kingdom (c. 2580–2560 BCE) as monumental tombs for the Pharaohs Khufu, Khafre, and Menkaure. The Great Pyramid of Khufu is the oldest and largest of the complex and stands as the only surviving wonder of the Seven Wonders of the Ancient World.",
            location: "Giza Plateau, Giza Governorate (west bank of the Nile, near Cairo), Egypt.",
            image: "images/pyramids.jpg"
        },
        {
            name: "Abu Simbel Temples",
            history: "Carved into a mountain during the 13th century BCE by Pharaoh Ramesses II to commemorate his reign and his victory at the Battle of Kadesh, as well as to honor his queen Nefertari",
            location: "Abu Simbel, Aswan Governorate (near the Sudan border), Egypt.",
            image: "images/Abu Simbel.jpg"
        },
        {
            name: "Bibliotheca Alexandrina",
            history: "Commemorating the ancient Library of Alexandria—one of the largest and most significant libraries of the ancient world—this modern major library and cultural center was inaugurated in 2002 as a joint project between UNESCO and the Egyptian government.",
            location: "El-Shatby, Alexandria Governorate, Egypt.",
            image: "images/library_of_alexandria_01.jpg"
        },
        {
            name: "Citadel of Cairo (Saladin Citadel)",
            history: "A medieval Islamic fortification constructed by Saladin in 1176 CE to defend Cairo against Crusader attacks. It served as the seat of government in Egypt for nearly 700 years.",
            location: "Mokattam Hill, Cairo Governorate, Egypt.",
            image: "images/salah eldin citadel.jpg"
        },
        {
            name: "Egyptian Museum (Tahrir Museum)",
            history: "Opened in 1902 and designed by French architect Marcel Dourgnon, this historic museum housed the world's largest collection of Pharaonic antiquities for over a century.",
            location: "Tahrir Square, Downtown Cairo, Egypt.",
            image: "images/egyptian-museum tahrir.jpg"
        },
        {
            name: "Grand Egyptian Museum",
            history: "Conceived in the late 1990s and constructed over two decades, GEM is the world's largest archaeological museum complex dedicated to a single civilization.",
            location: "Near the Giza Pyramids, Giza Governorate, Egypt.",
            image: "images/Grand-Egyptian-Museum.jpg"
        },
        {
            name: "Karnak Temple Complex",
            history: "Developed over more than 1,500 years (from the Middle Kingdom to the Ptolemaic period), Karnak was the primary place of worship for the Theban Triad, centered around the god Amun-Ra. It is the largest religious complex ever constructed by humans.",
            location: "Luxor (Ancient Thebes), Luxor Governorate, Egypt.",
            image: "images/karnak.jpg"
        },
        {
            name: "Saint Catherine’s Monastery",
            history: "Built between 548 and 565 CE by order of Byzantine Emperor Justinian I at the foot of Mount Sinai. It is one of the oldest continuously operating Christian monasteries in the world.",
            location: "Mount Sinai, South Sinai Governorate, Egypt.",
            image: "images/saint catherine.jpg"
        },
        {
            name: "Siwa Oasis",
            history: "An isolated desert settlement inhabited since ancient times by Amazigh (Berber) people. It became internationally famous when Alexander the Great visited the Temple of the Oracle here in 331 BCE to confirm his divine lineage.",
            location: "Western Desert, Matrouh Governorate, Egypt.",
            image: "images/Siwa-Oasis.jpg"
        },
        {
            name: "Valley of the Kings",
            history: "Serving as the royal burial site during Egypt’s New Kingdom (c. 1550–1069 BCE), this desert valley houses over 60 rock-cut tombs built for pharaohs and powerful nobles, including Tutankhamun and Ramesses II.",
            location: "West Bank of the Nile, Luxor Governorate, Egypt.",
            image: "images/VOK.jpg"
        },
        {
            name: "White Desert (Sahara el Beyda)",
            history: "Formed over millions of years through sea regression and extreme wind erosion, transforming a prehistoric seabed into a surreal landscape of chalk-rock formations.",
            location: "Farafra Oasis, New Valley Governorate, Egypt.",
            image: "images/white dessert.jpg"
        },
        {
            name: "Cairo Tower (Borg El-Qahira)",
            history: "Completed in 1961 during the presidency of Gamal Abdel Nasser, this 187-meter-tall free-standing concrete tower was designed by Egyptian architect Naoum Shebib. It stood as the tallest structure in North Africa for over 50 years.",
            location: "Gezira Island (Zamalek district), Cairo, Egypt.",
            image: "images/cairo tower.jpg"
        }
    ],
    SaudiaArabia: [
        {
            name: "Al-Ahsa Oasis",
            history: "Inhabited since the Neolithic era, Al-Ahsa is one of the oldest human settlements in the Arabian Peninsula and the largest self-contained oasis in the world.",
            location: "Eastern Province (near Al-Hofuf), Saudi Arabia.",
            image: "images/al ahsa.jpg"
        },
        {
            name: "Al-Masjid an-Nabawi",
            history: "Originally built by the Prophet Muhammad in 622 CE adjacent to his home after his migration to Medina. It served as a community center, court, and religious hub, and later became his final burial place under the iconic Green Dome.",
            location: "Medina, Al Madinah Province, Saudi Arabia.",
            image: "images/almasjid alnabawi.jpg"
        },
        {
            name: "Elephant Rock (Jabal Al-Fil)",
            history: "A natural geological formation carved out of golden sandstone by millions of years of wind and water erosion, resembling an elephant with its trunk touching the ground.",
            location: "AlUla Desert, Al Madinah Province, Saudi Arabia.",
            image: "images/elephant rock.jpg"
        },
        {
            name: "At-Turaif District in Diriyah",
            history: "Established in the 15th century, At-Turaif was the original seat of power for the House of Saud and the capital of the First Saudi State (1727–1818).",
            location: "Diriyah (northwest outskirts of Riyadh), Riyadh Province, Saudi Arabia.",
            image: "images/diriyah.jpg"
        },
        {
            name: "Cave of Hira (Ghar Hira)",
            history: "Located on Jabal al-Nour (Mountain of Light), this natural cave is where Prophet Muhammad received the very first revelations of the Quran through the Angel Jibril (Gabriel) in 610 CE.",
            location: "Jabal al-Nour, Mecca, Makkah Province, Saudi Arabia.",
            image: "images/Cave-of-Hira.jpg"
        },
        {
            name: "Cave of Thawr (Ghar Thawr)",
            history: "Situated atop Mount Thawr, this hollow rock cave served as a refuge for Prophet Muhammad and his companion Abu Bakr al-Siddiq for three days during their migration (Hijrah) from Mecca to Medina in 622 CE.",
            location: "Jabal Thawr (south of Mecca), Makkah Province, Saudi Arabia.",
            image: "images/cave of thawr.jpg"
        },
        {
            name: "Edge of the World (Jebel Fihrayn)",
            history: "A dramatic geological feature part of the much larger Tuwaiq Escarpment, formed through tectonic activity and erosion over tens of millions of years.",
            location: "Northwest of Riyadh (approx. 90 km), Riyadh Province, Saudi Arabia.",
            image: "images/edge-of-the-world.jpg"
        },
        {
            name: "Hegra (Mada'in Salih)",
            history: "The southern capital of the Nabataean Kingdom, dating back to the 1st century BCE. It was Saudi Arabia’s first site to be inscribed on the UNESCO World Heritage list in 2008.",
            location: "AlUla, Al Madinah Province, Saudi Arabia.",
            image: "images/Al-Hijr.jpg"
        },
        {
            name: "Al-Balad (Historic Jeddah)",
            history: "Founded in the 7th century CE as a major port for Indian Ocean trade routes and the primary entry gate for Muslim pilgrims traveling to Mecca by sea.",
            location: "Jeddah, Makkah Province, Saudi Arabia.",
            image: "images/jadah balad.jpg"
        },
        {
            name: "Al-Masmak Fortress",
            history: "A clay and mud-brick citadel constructed in 1895. It was the site of the legendary 1902 battle led by King Abdulaziz Al Saud, which recaptured Riyadh and initiated the unification of modern Saudi Arabia.",
            location: "Downtown Riyadh (Al-Dhoho District), Riyadh Province, Saudi Arabia.",
            image: "images/masmak.jpg"
        },
        {
            name: "Masjid al-Haram (The Great Mosque of Mecca)",
            history: "The holiest site in Islam, housing the Kaaba. It was built by Prophet Ibrahim (Abraham) and his son Ismail. It has undergone continuous expansions for centuries under various Islamic empires to accommodate pilgrims.",
            location: "Mecca, Makkah Province, Saudi Arabia.",
            image: "images/kaaba - al masjid alharam.jpg"
        },
        {
            name: "Rijal Almaa Heritage Village",
            history: "A historic trade hub connecting Asir, Yemen, and the Levant, built over 900 years ago in the rugged Sarawat Mountains by local tribes.",
            location: "Asir Region (near Abha), southwestern Saudi Arabia.",
            image: "images/rijal almaa.jpg"
        },
    ],
    Palestine: [
        {
            name: "Al-Aqsa Mosque Compound / Al-Haram al-Sharif",
            history: "The third holiest site in Islam, serving as the original Qibla (direction of prayer) for early Muslims. The compound contains the Silver-Domed Al-Aqsa Congregational Mosque (built in the 7th century CE) and the iconic Gold-Domed Shrine of the Book (Dome of the Rock), constructed under Umayyad Caliph Abd al-Malik in 691 CE.",
            location: "Old City of Jerusalem, Palestine.",
            image: "images/Al-Aqsa-007.jpg"
        },
        {
            name: "Church of the Holy Sepulchre",
            history: "Commissioned in 326 CE by Roman Emperor Constantine the Great after his mother, Empress Helena, identified the location. It encompasses the sites where Jesus is believed to have been crucified (Golgotha) and buried before rising.",
            location: "Christian Quarter, Old City of Jerusalem, Palestine.",
            image: "images/Church_of_the_Holy_Sepulchre.jpg"
        },
        {
            name: "Church of the Nativity",
            history: "Originally completed in 339 CE under Emperor Constantine over the cave identified as the birthplace of Jesus Christ. Rebuilt by Byzantine Emperor Justinian I in 565 CE, it is one of the oldest continuously operating Christian churches in the world.",
            location: "Manger Square, Bethlehem, West Bank, Palestine.",
            image: "images/Church_of_the_Nativity.jpg"
        },
        {
            name: "Hisham’s Palace",
            history: "Built in the 8th century CE during the Umayyad Dynasty as a winter desert retreat for Caliph Hisham ibn Abd al-Malik or his nephew Walid II. It was destroyed by a major earthquake shortly after construction around 749 CE.",
            location: "Jericho, West Bank, Palestine.",
            image: "images/hishampalace.jpg"
        },
        {
            name: "Ibrahimi Mosque / Cave of the Patriarchs",
            history: "Built over a series of subterranean caves purchased by Abraham. Massive outer stone enclosure walls were built by Herod the Great in the 1st century BCE, which were later converted into a mosque during the Islamic conquest.",
            location: "Old City of Hebron (Al-Khalil), West Bank, Palestine.",
            image: "images/Hebron_Cave_of_the_Patriarchs.jpg"
        },
        {
            name: "Mount Gerizim and Jacob's Well",
            history: "Mount Gerizim is the holy center of the ancient Samaritan community, situated near Jacob's Well, a biblical freshwater site.",
            location: "Nablus, West Bank, Palestine.",
            image: "images/Nablus_jacob_well_1912.jpg"
        },
        {
            name: "Old City of Akka (Acre)",
            history: "A continuous port city for over 4,000 years, Akka became the principal stronghold and capital of the Crusader Kingdom of Jerusalem in the 12th century, before being fortified into an Ottoman stronghold under Ahmed Pasha al-Jazzar in the 18th century.",
            location: "Akka (Acre), Northern District, Palestine.",
            image: "images/old city of akka.jpg"
        },
        {
            name: "Sabastiya Archaeological Site",
            history: "Served as the ancient capital of the Kingdom of Israel in the 9th century BCE before being expanded by Alexander the Great and completely rebuilt by Herod the Great.",
            location: "Sabastiya Village (northwest of Nablus), West Bank, Palestine.",
            image: "images/samaria.jpg"
        },
        {
            name: "Tell Sultan",
            history: "Recognized as the oldest fortified city in human history, with archaeological remains dating back over 10,000 years (Neolithic period). Inscribed on the UNESCO World Heritage list in 2023.",
            location: "Jericho (near the Dead Sea), West Bank, Palestine.",
            image: "images/Tell_es-sultan.jpg"
        }
    ],
    Iraq: [
        {
            name: "Ancient City of Babylon",
            history: "The legendary capital of the Babylonian Empire, which reached its peak under Hammurabi (18th century BCE) and Nebuchadnezzar II (6th century BCE). It was famous for the Ishtar Gate, the Code of Hammurabi, and the ancient Hanging Gardens. Inscribed on the UNESCO World Heritage list in 2019.",
            location: "Hillah, Babil Governorate (approx. 85 km south of Baghdad), Iraq.",
            image: "images/ancient_city_of_babylon.jpg"
        },
        {
            name: "Arch of Ctesiphon (Taq Kasra)",
            history: "Built in the 6th century CE during the Sasanian Empire (traditionally attributed to King Khosrow I), this monumental palace complex features the world's largest single-span vault of unreinforced brick masonry ever constructed.",
            location: "Salman Pak (south of Baghdad), Baghdad Governorate, Iraq.",
            image: "images/tag qasra.jpg"
        },
        {
            name: "Great Ziggurat of Ur",
            history: "A massive Neo-Sumerian step pyramid built in the 21st century BCE by King Ur-Nammu in honor of the moon god Nanna. It served as the religious and administrative focal point of the ancient city-state of Ur, the traditional birthplace of Abraham.",
            location: "Dhi Qar Governorate (near Nasiriyah), Southern Iraq.",
            image: "images/great ziggurat.jpg"
        },
        {
            name: "Hatra",
            history: "A heavily fortified caravan city and capital of the first Arab Kingdom, founded in the 3rd or 2nd century BCE. It resisted multiple sieges by the Roman Empire thanks to its thick double walls and towers before falling to the Sasanian Empire in 241 CE.",
            location: "Al-Jazira region, Nineveh Governorate, Iraq.",
            image: "images/hatra.jpg"
        },
        {
            name: "Erbil Citadel (Qalat Erbil)",
            history: "A fortified tell-settlement atop an oval-shaped mound that has been continuously inhabited for over 6,000 years, making it one of the oldest continuously inhabited places in human history. It flourished through the Assyrian, Babylonian, Persian, and Ottoman periods, and was inscribed as a UNESCO World Heritage site in 2014.",
            location: "Erbil, Kurdistan Region, Iraq.",
            image: "images/erbil castle.jpg"
        },
        {
            name: "Spiral Minaret of Samarra (Malwiya Tower)",
            history: "Constructed between 848 and 852 CE under the Abbasid Caliph Al-Mutawakkil as part of the Great Mosque of Samarra, which was once the largest mosque in the Islamic world.",
            location: "Samarra, Saladin Governorate, Iraq.",
            image: "images/spiral minaret samara.jpg"
        },
        {
            name: "The Mesopotamian Marshes (Ahwar of Southern Iraq)",
            history: "One of the world's largest delta systems in an extremely hot and arid environment, formed by the confluence of the Tigris and Euphrates rivers. Inhabited for millennia by the Marsh Arabs (Ma'dan), whose lifestyle traces directly back to ancient Sumerian culture.",
            location: "Spanning Dhi Qar, Maysan, and Basra Governorates, Southern Iraq.",
            image: "images/Marshes+1.jpg"
        }
    ],
    Algeria: [
        {
            name: "Assekrem Plateau & Hermitage of Charles de Foucauld",
            history: "A high-altitude plateau in the Ahaggar Mountains rising nearly 2,700 meters above sea level. It is home to the stone hermitage built in 1911 by French priest Charles de Foucauld, who lived among the native Tuareg people and studied their language.",
            location: "Tamanrasset Province, Southern Algeria.",
            image: "images/assekrem.jpg"
        },
        {
            name: "Djémila (Cuicul)",
            history: "Founded in the 1st century CE as a Roman military garrison, Djémila evolved into a thriving mountain city adapted to rugged topography. It is celebrated as one of the best-preserved examples of Roman urban planning and was designated a UNESCO World Heritage site in 1982.",
            location: "Sétif Province, Northeastern Algeria.",
            image: "images/Djemila.jpg"
        },
        {
            name: "Kasbah of Algiers",
            history: "A historic citadel and traditional quarter built on a steep hill overlooking the Bay of Algiers. It developed into a prominent Ottoman-era stronghold during the 16th and 17th centuries, featuring narrow alleys, Ottoman palaces, and historic mosques.",
            location: "Algiers, Algiers Governorate, Algeria.",
            image: "images/kasbah of algiers.jpg"
        },
        {
            name: "Monument of the Martyr (Makam Echahid)",
            history: "A concrete monument erected in 1982 to commemorate the 20th anniversary of Algeria's independence and honor the lives lost during the Algerian War of Independence (1954–1962). Designed in the shape of three standing palm leaves sheltering an eternal flame underneath.",
            location: "Chemin Omar Kechkar, El Madania, Algeria",
            image: "images/Martyrs_Memorial.jpg"
        },
        {
            name: "M'Zab Valley (Ksar of Ghardaïa)",
            history: "Formed in the 11th century by Ibadi Muslims who constructed five fortified hilltop towns (ksour) along a desert valley floor. The towns were specifically designed to foster community harmony and withstand severe Saharan climate conditions.",
            location: "Ghardaïa Province, Northern Sahara Desert, Algeria.",
            image: "images/mZab-ghardaia.jpg"
        },
        {
            name: "Tassili n'Ajjer National Park",
            history: "A massive plateau in the Algerian Sahara featuring over 15,000 prehistoric cave paintings and engravings dating back as far as 10,000 BCE. The artwork documents the shift of the Sahara from a fertile savannah teeming with wildlife to an arid desert.",
            location: "Illizi and Djanet Provinces, Southeastern Algeria.",
            image: "images/tassii nAjjer.jpg"
        },
        {
            name: "Timgad (Thamugadi)",
            history: "Established around 100 CE by Roman Emperor Trajan as a colony for military veterans. Built from scratch on a strict grid pattern, it stands as a classic architectural model of Roman grid town planning.",
            location: "Batna Province (Aouress Mountains), Algeria.",
            image: "images/Timgad.jpg"
        },
        {
            name: "Tipasa Archaeological Park",
            history: "An ancient Mediterranean trading post originally settled by the Phoenicians before being conquered by Rome and turned into a strategic base. It blends Phoenician, Roman, Paleochristian, and Byzantine ruins along the coastline.",
            location: "Tipaza Province (along the Mediterranean coast), Algeria.",
            image: "images/tipasa park.jpg"
        }
    ],
    Moroco: [
        {
            name: "Jemaa el-Fnaa",
            history: "Founded in the 11th century during the Almoravid Dynasty as a central market and gathering square. Over the centuries, it developed into a vibrant cultural hub for storytellers, musicians, traditional healers, and street performers, recognized as a UNESCO Intangible Cultural Heritage site.",
            location: "Medina of Marrakesh, Marrakesh-Safi, Morocco.",
            image: "images/Djemaa_el_Fna.jpg"
        },
        {
            name: "Koutoubia Mosque",
            history: "Completed in 1199 under the Almohad Caliph Yaqub al-Mansur. Its 77-meter-high minaret served as the architectural prototype for famous towers like the Giralda in Seville and the Hassan Tower in Rabat.",
            location: "Marrakesh, Morocco.",
            image: "images/koutobia.jpg"
        },
        {
            name: "Hassan Tower & Mausoleum of Mohammed V",
            history: "Construction began in 1195 CE intended to be the largest mosque minaret in the world, but came to a halt when Caliph Yaqub al-Mansur died in 1199. Adjacent to the unfinished tower stands the modern marble mausoleum housing the tombs of King Mohammed V and his sons.",
            location: "Rabat, Rabat-Salé-Kénitra, Morocco.",
            image: "images/Mausoleum.jpg"
        },
        {
            name: "Bahia Palace",
            history: "Constructed in the late 19th century by Si Moussa, Grand Vizier of Sultan Hassan I, and expanded by his son Ba Ahmed. It was designed to be the greatest palace of its time, capturing the essence of Islamic and Moroccan architectural styles.",
            location: "Marrakesh, Morocco.",
            image: "images/bahia palace.jpg"
        },
        {
            name: "Chefchaouen (The Blue Pearl)",
            history: "Founded in 1471 as a small fortress (kasbah) by Moulay Ali ibn Rashid to defend against Portuguese invasions. It grew significantly when Jewish and Moorish refugees settled here after fleeing Spain during the Reconquista.",
            location: "Rif Mountains, Tangier-Tetouan-Al Hoceima, Morocco.",
            image: "images/blue pearl.jpg"
        },
        {
            name: "Aït Benhaddou",
            history: "A striking 17th-century earthen clay ksar (fortified village) located along the former trans-Saharan trade route between the Sahara Desert and Marrakesh. Inscribed as a UNESCO World Heritage site in 1987.",
            location: "Ouarzazate Province, Drâa-Tafilalet, Morocco.",
            image: "images/benhaddou.jpg"
        },
        {
            name: "Chouara Tannery",
            history: "Operating continuously since the 11th century, Chouara is the largest of the traditional leather tanneries located in Fes el Bali (the old medina of Fes).",
            location: "Fes, Fes-Meknes, Morocco.",
            image: "images/Chouara_Tannery.jpg"
        },
        {
            name: "Kasbah of the Udayas",
            history: "Kasbah of the Udayas",
            location: "Rabat, Morocco.",
            image: "images/Kasbah_Oudayas_exterior.jpg"
        },
        {
            name: "Volubilis (Walili)",
            history: "Founded in the 3rd century BCE as a Berber-Punic settlement before becoming a major remote outpost of the Roman Empire. It flourished as an agricultural hub producing grain and olive oil until an earthquake destroyed parts of it in the 18th century.",
            location: "Near Meknes, Fes-Meknes, Morocco.",
            image: "images/voluoblis.jpg"
        },
        {
            name: "Todra Gorge (Gorges du Todra)",
            history: "A series of dramatic limestone river canyons carved out by the Todra and Dades rivers over millions of years in the eastern part of the High Atlas Mountains.",
            location: "Near Tinghir, Drâa-Tafilalet, Morocco.",
            image: "images/Todgha-Gorge.jpg"
        },
    ],
    Sudan: [
        {
            name: "Pyramids of Meroë (Royal Cemetery of Meroë)",
            history: "Built between 300 BCE and 300 CE as burial monuments for the rulers of the ancient Kingdom of Kush (Meroitic Kingdom). Sudan houses more pyramids than Egypt, with Meroë standing as its most extensive royal necropolis, listed as a UNESCO World Heritage site in 2011.",
            location: "Near Begrawiya (approx. 200 km northeast of Khartoum), River Nile State, Sudan.",
            image: "images/MeroePyramids30sep2005(2).jpg"
        },
        {
            name: "Jebel Barkal and the Sites of the Napatan Region",
            history: "A sacred sandstone mountain associated with the god Amun since the Egyptian New Kingdom and the Napatan Kingdom (c. 1450–300 BCE). It served as a religious center for the Black Pharaohs of the 25th Dynasty who ruled both Egypt and Nubia.",
            location: "Karima, Northern State, Sudan.",
            image: "images/jebel barkal.jpg"
        },
        {
            name: "Temple of Soleb",
            history: "Constructed in the 14th century BCE by Pharaoh Amenhotep III (the grandfather of King Tutankhamun). It was dedicated to the god Amun-Ra and to Amenhotep III himself as a deified living king.",
            location: "Soleb (near the Third Cataract of the Nile), Northern State, Sudan.",
            image: "images/Soleb1.jpg"
        },
        {
            name: "Naqa and Musawwarat es-Sufra",
            history: "Major ritual and urban centers of the Meroitic Empire dating back to the 4th century BCE. Musawwarat es-Sufra features the Great Enclosure—a vast complex of stone temples, ramps, and courtyards.",
            location: "Shendi District, River Nile State, Sudan.",
            image: "images/Musawwarat_es-sufra.jpg"
        },
        {
            name: "Suakin Old Town (Island of Suakin)",
            history: "An ancient Coral Sea port with origins dating back to Ramses III. It grew into a major Islamic trading hub and Ottoman governor's seat on the Red Sea coast, handling pilgrimage traffic to Mecca and trans-African trade routes.",
            location: "Suakin, Red Sea State, Sudan.",
            image: "images/sukan.jpg"
        },
        {
            name: "Khalifa House Museum & Tomb of the Mahdi",
            history: "Constructed in 1888 as the official residence of Abdallahi ibn Muhammad (The Khalifa), successor to Muhammad Ahmad al-Mahdi who led the Mahdist Revolt against British-Egyptian rule. Adjacent stands the reconstructed white dome of the Mahdi's Tomb.",
            location: "Omdurman, Khartoum State, Sudan.",
            image: "images/KhalifaHouseMuseum1.jpg"
        },
        {
            name: "Sanganeb National Park & Dungonab Bay",
            history: "Sanganeb is an isolated coral atoll structure in the middle of the Red Sea, declared a UNESCO World Heritage site in 2016 alongside Dungonab Bay.",
            location: "Red Sea Coast (approx. 25 km off the coast of Port Sudan), Red Sea State, Sudan.",
            image: "images/sanganeb.jpg"
        },
        {
            name: "The Confluence of the Two Niles (Al-Mugran)",
            history: "The natural geographical point where the White Nile (originating in Lake Victoria) and the Blue Nile (originating in Lake Tana, Ethiopia) merge to form the main Nile River that flows north toward Egypt.",
            location: "Khartoum / Omdurman, Khartoum State, Sudan.",
            image: "images/almogran.jpg"
        }
    ],
    Libya: [
        {
            name: "Leptis Magna",
            history: "Founded by the Phoenicians in the 7th century BCE and heavily expanded under Roman Emperor Septimius Severus (who was born there) in the late 2nd century CE. It became one of the grandest cities of the Roman Empire and was inscribed as a UNESCO World Heritage site in 1982.",
            location: "Khoms (approx. 130 km east of Tripoli), Murqub District, Libya.",
            image: "images/lebtis magna.jpg"
        },
        {
            name: "Sabratha",
            history: "Established as a Phoenician trading post around 500 BCE before evolving into a major Roman colony specializing in the export of African ivory and wild animals.",
            location: "Sabratha, Zawiya District (along the Mediterranean coast), Libya.",
            image: "images/Sabratha,_Libya.jpg"
        },
        {
            name: "Archaeological Site of Cyrene",
            history: "Founded in 631 BCE by Greek colonists from Thera (Santorini), Cyrene became one of the principal cities of the Hellenic world, giving its name to the region of Cyrenaica. It was later expanded during Roman rule.",
            location: "Shahhat, Jabal al Akhdar District, Libya.",
            image: "images/Site_of_Cyrene-109022.jpg"
        },
        {
            name: "Old Town of Ghadamès (Pearl of the Desert)",
            history: "One of the oldest pre-Saharan settlements, inhabited since ancient times (known to the Romans as Cydamus). It grew into a vital fortified oasis hub along trans-Saharan trade routes linking the Mediterranean to Sub-Saharan Africa.",
            location: "Ghadames Oasis (near the borders with Algeria and Tunisia), Nalut District, Libya.",
            image: "images/Old-Town-of-Ghadames-min.jpeg"
        },
        {
            name: "Atiq Mosque of Awjila",
            history: "Originally constructed in the 12th century CE, this ancient mosque stands in one of the oldest oases in North Africa, mentioned by the ancient Greek historian Herodotus.",
            location: "Awjila Oasis, Oasis District (Jalu region), Libya.",
            image: "images/The_Old_mosque,_Awjilah.jpg"
        },
        {
            name: "Red Castle of Tripoli (Assai al-Hamra)",
            history: "A massive 13-hectare fortified palace complex built on the Tripoli coastline over ancient Roman foundations. It served as the seat of power for governors across Byzantine, Islamic, Spanish, Ottoman, and Italian eras.",
            location: "Downtown Tripoli (overlooking Martyrs' Square), Tripoli District, Libya.",
            image: "images/Tripoli.jpg"
        },
        {
            name: "Gurgi Mosque",
            history: "Commissioned in 1834 by Mustafa Gurgi, a naval captain of the Ottoman-era Karamanli Dynasty. It was one of the final major mosques built during the Karamanli rule in Tripoli.",
            location: "Old City (Medina) of Tripoli, Tripoli District, Libya.",
            image: "images/gurgo mosque.jpg"
        },
        {
            name: "Rock-Art Sites of Tadrart Acacus",
            history: "A rugged desert mountain range featuring thousands of cave paintings and rock carvings dating from 12,000 BCE to 100 CE. Inscribed as a UNESCO World Heritage site in 1985.",
            location: "Ghat District, Southwestern Libyan Sahara.",
            image: "images/tadrart-acacus.jpg"
        },
        {
            name: "Ubari Sand Sea & Lakes (Waw an Namus)",
            history: "A vast region of deep Erg sand dunes containing over a dozen natural saltwater lakes fed by subterranean aquifers. Nearby lies Waw an Namus, an extinct volcanic crater surrounding a dark basalt field with three colorful lakes at its center.",
            location: "Wadi al Hayaa District, Fezzan region, Southwestern Libya.",
            image: "images/lakesofubari.jpg"
        }
    ],
    Tunisia: [
        {
            name: "Amphitheatre of El Jem",
            history: "Built around 238 CE during the Roman Empire under Proconsul Gordian, this massive oval arena could hold up to 35,000 spectators. It is one of the best-preserved Roman stone ruins in the world and was inscribed as a UNESCO World Heritage site in 1979.",
            location: "El Jem, Mahdia Governorate, Tunisia.",
            image: "images/eljem.jpg"
        },
        {
            name: "Archaeological Site of Carthage",
            history: "Founded in the 9th century BCE by the Phoenicians (led by Queen Dido), Carthage grew into a dominant maritime trading empire. After being destroyed by Rome in 146 BCE during the Punic Wars, it was rebuilt as a major Roman provincial capital.",
            location: "Tunis Governorate (coastal outskirts of Tunis), Tunisia.",
            image: "images/Archaeological Site of Carthage.jpg"
        },
        {
            name: "Dougga (Thugga)",
            history: "Perched on a hilltop overlooking a fertile valley, Dougga was an ancient Numidian settlement before becoming a thriving Roman city. It stands as the best-preserved small Roman town in North Africa.",
            location: "Béja Governorate, Northwestern Tunisia.",
            image: "images/dougga.jpg"
        },
        {
            name: "Bulla Regia",
            history: "Originally an ancient Numidian city before being integrated into the Roman Empire. It is globally famous for its unique subterranean domestic architecture, built to escape the extreme heat of North African summers.",
            location: "Jendouba Governorate, Northwestern Tunisia.",
            image: "images/bulla-regia.jpg"
        },
        {
            name: "Medina of Tunis",
            history: "Established in the 7th century CE and expanded across Hafsid and Ottoman rules, the Medina served as one of the major trade and cultural centers of the Islamic world. It houses over 700 historic monuments, including palaces, mosques, and mausoleums.",
            location: "Downtown Tunis, Tunis Governorate, Tunisia.",
            image: "images/medinia tunisia.jpg"
        },
        {
            name: "Sidi Bou Said",
            history: "A cliffside village overlooking the Gulf of Tunis, named after a 13th-century Sufi scholar, Abu Said al-Baji. It developed into an artistic sanctuary in the early 20th century, influenced by French painter Baron Rodolphe d'Erlanger.",
            location: "Coastal Tunis Governorate (approx. 20 km from Tunis), Tunisia.",
            image: "images/sidi bou said.jpg"
        },
        {
            name: "Medina of Sousse & Ribat",
            history: "Built during the Aghlabid Dynasty in the 9th century CE, Sousse served as an important coastal military port. Its Ribat—a fortified Islamic monastery and watchtower—is one of the oldest preserved coastal fortresses along the North African coast.",
            location: "Sousse, Sousse Governorate, Tunisia.",
            image: "images/ribbat of sousse.jpg"
        },
        {
            name: "Kairouan (The Holy City)",
            history: "Founded in 670 CE by the Arab general Uqba ibn Nafi, Kairouan became the first capital of Islamic North Africa (Ifriqiya) and a premier center for Islamic learning and scholarship.",
            location: "Kairouan Governorate, Central Tunisia.",
            image: "images/kairouan.jpg"
        },
        {
            name: "Ksar Ouled Soltane",
            history: "A fortified granary (ksar) built by Berber communities in the 15th century. It was designed to store grain and olives across multi-story vaulted storage cells called ghorfas.",
            location: "Near Tataouine, Tataouine Governorate, Southern Tunisia.",
            image: "images/ksar ouled.jpg"
        }
    ],
    Mauritania: [
        {
            name: "Ancient Ksour of Ouadane, Chinguetti, Tichitt, and Oualata",
            history: "Founded between the 11th and 12th centuries to serve major trans-Saharan trade caravans. These four medieval trading and religious hubs became centers of Islamic scholarship, housing world-famous desert libraries. Designated as a collective UNESCO World Heritage site in 1996.",
            location: "Adrar, Tagant, and Hodh Ech Chargui Regions, Mauritania.",
            image: "images/ancient ksour.jpg"
        },
        {
            name: "Richat Structure (Eye of the Sahara)",
            history: "A prominent deeply eroded geological dome spanning 40 kilometers in diameter. Initially believed to be an impact crater, modern geologists classify it as a symmetrical uplifted dome created by volcanic activity and erosion over hundreds of millions of years.",
            location: "Near Ouadane, Adrar Plateau, Central Mauritania.",
            image: "images/Richat_Structure.jpg"
        },
        {
            name: "Banc d'Arguin National Park",
            history: "Established in 1976 and inscribed as a UNESCO World Heritage site in 1989. It comprises sand dunes, coastal swamps, and shallow offshore waters where the Sahara Desert meets the Atlantic Ocean.",
            location: "Between Nouakchott and Nouadhibou (along the Atlantic coast), Mauritania.",
            image: "images/Banc d'Arguin.jpg"
        },
        {
            name: "Ben Amera Monolith",
            history: "Formed millions of years ago through deep granite uplift and subsequent erosion. It is widely recognized as the second-largest natural monolith in the world, trailing only Uluru in Australia.",
            location: "Near the Western Sahara border (along the Mauritania Railway line), Adrar Region, Mauritania.",
            image: "images/Ben-Amira.jpg"
        },
        {
            name: "Port de Pêche (Nouakchott Fish Market)",
            history: "Developed alongside the modern national capital after independence in 1960. It grew into the primary coastal hub for traditional artisanal fishing in West Africa.",
            location: "Nouakchott Coastline, Mauritania.",
            image: "images/port de peche.jpg"
        },
        {
            name: "Terjit Oasis",
            history: "A traditional desert refuge used for centuries by nomadic tribes and caravans traveling through the harsh Saharan interior.",
            location: "Adrar Region (south of Atar), Mauritania.",
            image: "images/terjit.jpg"
        }
    ],
    Somalia: [
        {
            name: "Laas Geel (Laas Gaal)",
            history: "A complex of caves and rock shelters containing some of the earliest known cave paintings in the Horn of Africa, dating back between 9,000 and 3,000 BCE. The vivid Neolihtic rock art depicts wild animals, sacred cows wearing ceremonial robes, and ancient pastoralist communities.",
            location: "Rural outskirts between Hargeisa and Berbera, Maroodi Jeex region.",
            image: "images/Laas_Geel.jpg"
        },
        {
            name: "Old Town of Mogadishu (Hamar Weyne & Shangani)",
            history: "Establhed as a prominent Indian Ocean trading hub between the 10th and 14th centuries CE. It flourished under the Sultanate of Mogadishu as a key center for gold, silk, and spice trade between Africa, Arabia, and Asia.",
            location: "Mogadishu Coastline, Banaadir Region, Somalia.",
            image: "images/shingaani.jpg"
        },
        {
            name: "Fakr ad-Din Mosque",
            history: "Constructed in 1269 CE by Fakr ad-Din, the first Sultan of the Sultanate of Mogadishu, making it one of the oldest standing mosques in East Africa.",
            location: "Hamar Weyne Quarter, Mogadishu, Somalia.",
            image: "images/Fakhreddine.jpg"
        },
        {
            name: "Old Port & Citadel of Berbera",
            history: "A historic deep-water port on the Gulf of Aden mentioned since classical antiquity in the Roman trade guide Periplus of the Erythraean Sea. It later served as a major regional trade outpost under Ottoman, Egyptian, and British administrations.",
            location: "Berbera, Sahil region.",
            image: "images/berrbarra.png"
        },
        {
            name: "Taleh Castle (Taleex Silsilad)",
            history: "Built in the early 20th century (c. 1910–1912) as the principal fortress complex of the Dervish Movement led by Mohammed Abdullah Hassan. It served as the central headquarters for Dervish resistance against British and Italian colonial forces.",
            location: "Taleh, Sool region.",
            image: "images/Taleh_Castle.jpg"
        },
        {
            name: "Zeila (Saylac Archaeological Site)",
            history: "A ancient coastal trade city that served as the primary port for the Kingdom of Aksum and later the capital of the medieval Adal Sultanate.",
            location: "Zeila, Awdal region (near the Djibouti border).",
            image: "images/Zeila_ruins.jpeg"
        },
        {
            name: "Guardafui Lighthouse (Ras Hafun & Cape Guardafui)",
            history: "Perched on the easternmost point of the mainland African continent (the tip of the Horn of Africa). The landmark features an iconic stone lighthouse built in the 1930s during Italian rule.",
            location: "Cape Guardafui, Bari region, Puntland.",
            image: "images/ras hafun.jpg"
        }
    ],
    Djibouti: [
        {
            name: "Lake Assal (Lac Assal)",
            history: "A crater lake formed in a volcanic depression millions of years ago. Situated 155 meters below sea level, it is the lowest point in Africa and the third-lowest point on Earth.",
            location: "Tadjourah and Dikhil Regions, Djibouti.",
            image: "images/Lake_Assal_NASA.jpg"
        },
        {
            name: "Lake Abbe (Lac Abbé)",
            history: "A surreal saltwater lake located on the border between Djibouti and Ethiopia at the intersection of three tectonic plates (the Afar Triple Junction).",
            location: "Dikhil Region, Southwestern Djibouti.",
            image: "images/lake abbe.jpg"
        },
        {
            name: "Day Forest National Park (Parc National du Forêt de Day)",
            history: "Established in 1939 to protect an ancient relict forest ecosystem atop the Goda Mountains, representing the largest forest area in Djibouti.",
            location: "Tadjourah Region (Goda Mountains), Northern Djibouti.",
            image: "images/dayforestnationalpark.png"
        },
        {
            name: "Ardoukoba Volcano",
            history: "A fissure volcano located on the Afar rift floor that last erupted in November 1978 after a brief 1-week period of intense tectonic activity.",
            location: "Between Lake Assal and the Gulf of Tadjoura, Djibouti.",
            image: "images/Ardoukoba.jpg"
        },
        {
            name: "City of Tadjourah (The White City)",
            history: "One of the oldest towns on the East African coast, serving as a major sultanate capital and trading port for centuries, particularly for ivory, spices, and trade routes into the Ethiopian highlands.",
            location: "Northern coast of the Gulf of Tadjoura, Djibouti.",
            image: "images/tadjoura.jpg"
        },
        {
            name: "Moucha and Maskali Islands",
            history: "Small coral islands in the Gulf of Tadjoura used historically as fishing grounds and watchposts along Red Sea shipping channels.",
            location: "Gulf of Tadjoura (approx. 15 km off Djibouti City), Djibouti.",
            image: "images/Moucha_Island.jpg"
        }
    ],
    Comoros: [
        {
            name: "Mount Karthala",
            history: "An active shield volcano rising 2,361 meters above sea level, forming the highest point in the Comoros. It has erupted over 20 times since the 19th century, shaping the island's landscape and ecosystem.",
            location: "Grande Comore (Ngazidja) Island, Comoros.",
            image: "images/karthala.jpg"
        },
        {
            name: "Medina of Moroni",
            history: "Established around the 10th century by Arab and Persian traders, Moroni developed into a thriving Swahili trade hub and sultanate capital along East African trade routes.",
            location: "Moroni, Grande Comore (Ngazidja) Island, Comoros.",
            image: "images/MoroniJorge_01.jpg"
        },
        {
            name: "Sultan's Palace and Citadel of Mutsamudu",
            history: "Built in the 18th century under the regional Swahili sultanates to protect the island of Anjouan from pirate raids and European colonial advances.",
            location: "Mutsamudu, Anjouan (Ndzuwani) Island, Comoros.",
            image: "images/mustamudu.jpg"
        },
        {
            name: "Historic Sultanate Town of Domoni",
            history: "A prominent medieval Swahili trading post and former royal capital of Anjouan, heavily fortified in the 15th century to defend against Malagasy invasions.",
            location: "Domoni, Anjouan (Ndzuwani) Island, Comoros.",
            image: "images/suleiman-2.jpg"
        },
        {
            name: "Mohéli Marine Park (Parc National de Mohéli)",
            history: "Established in 2001 as the first protected marine area in the Comoros, designed in collaboration with local island communities to preserve marine biodiversity.",
            location: "Southern coast of Mohéli (Mwali) Island, Comoros.",
            image: "images/Mohéli-Beach.jpg"
        },
        {
            name: "Lake Dziani Boudouni",
            history: "A freshwater crater lake formed within a volcanic cone, recognized under the Ramsar Convention as a wetland of international importance.",
            location: "Southern region of Mohéli (Mwali) Island, Comoros.",
            image: "images/lake dziani.jpg"
        }
    ],
    UnitedArabEmirates: [
        {
            name: "Burj Khalifa",
            history: "Officially opened in 2010, this mega-tall skyscraper stands as the tallest structure and building in the world at 828 meters (2,717 feet). Designed by architect Adrian Smith at Skidmore, Owings & Merrill, its stepped design is inspired by the geometry of a regional desert flower (Hymenocallis) and Islamic architecture.",
            location: "Downtown Dubai, Emirate of Dubai, UAE.",
            image: "images/nick-fewings-4PDWwUD6g_4-unsplash.jpg"
        },
        {
            name: "Sheikh Zayed Grand Mosque",
            history: "Initiated by the founder of the UAE, Sheikh Zayed bin Sultan Al Nahyan, and completed in 2007. It was designed to unite cultural diversity in the Islamic world with modern architectural craftsmanship.",
            location: "Abu Dhabi, Emirate of Abu Dhabi, UAE.",
            image: "images/juan-camilo-guarin-p-njEXjDmYn8w-unsplash.jpg"
        },
        {
            name: "Al Fahidi Historical Neighbourhood & Al Fahidi Fort (Dubai Museum)",
            history: "Built in 1787, Al Fahidi Fort is the oldest standing building in Dubai. The surrounding neighborhood preserves 19th-century traditional Emirati architecture featuring mud-brick homes and iconic wind towers (Barajeel).",
            location: "Bur Dubai, Emirate of Dubai, UAE.",
            image: "images/alfahidi.jpg"
        },
        {
            name: "Qasr Al Hosn",
            history: "Built around 1761 as a watchtower to protect the island's only freshwater well, it was later expanded into a fortified palace. It served as the ancestral seat of the ruling Al Nahyan family for generations.",
            location: "Downtown Abu Dhabi, Emirate of Abu Dhabi, UAE.",
            image: "images/qasr elhosn.jpg"
        },
        {
            name: "Louvre Abu Dhabi",
            history: "Opened in 2017 on Saadiyat Island under a 30-year agreement between the city of Abu Dhabi and the French government. Designed by Pritzker Prize-winning architect Jean Nouvel as a museum-city in the sea.",
            location: "Saadiyat Cultural District, Abu Dhabi, UAE.",
            image: "images/louvre.jpg"
        },
        {
            name: "Al Badiyah Mosque",
            history: "Dating back to 1446 CE, it is widely recognized as the oldest continuously functioning mosque in the United Arab Emirates.",
            location: "Al Badiyah (north of Fujairah City), Emirate of Fujairah, UAE.",
            image: "images/albidyah.jpg"
        },
        {
            name: "Mleiha Archaeological Centre",
            history: "An essential archaeological region showcasing continuous human habitation from the Paleolithic period (over 130,000 years ago) through the Bronze, Iron, and pre-Islamic periods.",
            location: "Mleiha, Emirate of Sharjah, UAE.",
            image: "images/mleiha.jpg"
        },
        {
            name: "Jebel Hafeet",
            history: "Rising 1,240 meters above sea level, it is the second-highest peak in the UAE. At its base lie the Jebel Hafeet Tombs—5,000-year-old Bronze Age dome-shaped burial chambers constructed out of uncemented stone.",
            location: "Al Ain, Emirate of Abu Dhabi, UAE.",
            image: "images/Jebel_Hafeet_-_Aerial_View.jpg"
        }
    ],
    Syria: [
        {
            name: "Ancient City of Damascus",
            history: "Founded in the 3rd millennium BCE, Damascus is considered one of the oldest continuously inhabited cities in the world. It flourished as the capital of the Umayyad Caliphate (661–750 CE), where traditional Roman street grids blended with centuries of Islamic architecture. Inscribed as a UNESCO World Heritage site in 1979.",
            location: "Damascus, Damascus Governorate, Syria.",
            image: "images/Ancient_City_of_Damascus-107615.jpg"
        },
        {
            name: "Krak des Chevaliers (Qal'at al-Hosn)",
            history: "Constructed and expanded between the 11th and 13th centuries by the Knights Hospitaller, it stands as one of the most famous and best-preserved medieval Crusader castles in the world. Designated as a UNESCO World Heritage site in 2006.",
            location: "Near Homs, Homs Governorate, Syria.",
            image: "images/krak des chevaliers.jpg"
        },
        {
            name: "Citadel of Aleppo",
            history: "A massive fortified palace built on a natural limestone hill rising 50 meters above the city. Occupied since the 3rd millennium BCE by the Hittites, Greeks, Romans, Byzantines, and Ayyubids, its surviving fortifications were largely constructed in the 12th and 13th centuries under Saladin’s son, al-Zahir Ghazi.",
            location: "Ancient City of Aleppo, Aleppo Governorate, Syria.",
            image: "images/Citadel_of_Aleppo.jpg"
        },
        {
            name: "Ancient City of Bosra",
            history: "Once the capital of the Roman province of Arabia and a vital stop along the ancient caravan route to Mecca. It features ruins constructed out of distinct local black basalt stone, including early Christian basilicas and Islamic structures.",
            location: "Bosra, Daraa Governorate, Southern Syria.",
            image: "images/ancient city of bosra.jpg"
        },
        {
            name: "Apamea (Afamia)",
            history: "Founded in 300 BCE by Seleucus I Nicator (one of Alexander the Great's generals) and named after his Persian wife, Apama. It grew into a major Greco-Roman city and military base housing royal war elephants and cavalry.",
            location: "Near Suqaylabiyah, Hama Governorate, Syria.",
            image: "images/apameaa.jpg"
        },
        {
            name: "Norias of Hama",
            history: "A series of massive wooden water wheels built along the Orontes River, with historical origins dating back to the Byzantine era (c. 5th century CE) and expanded during the Ayyubid and Mamluk periods.",
            location: "Hama, Hama Governorate, Syria.",
            image: "images/norias of hama.jpg"
        }
    ],
    Qatar: [
        {
            name: "Al Zubarah Archaeological City & Fort",
            history: "A major 18th-to-19th-century pearl diving and regional trading port that was destroyed in 1811 and eventually abandoned. Its windblown sand preserved ancient urban residential houses, mosques, and markets, making it Qatar's first UNESCO World Heritage site (inscribed in 2013).",
            location: "Al Shamal Municipality (northwestern coast), Qatar.",
            image: "images/zubarah.jpg"
        },
        {
            name: "Barzan Towers",
            history: "Built in the late 19th century under Sheikh Mohammed bin Jassim Al Thani. They served as watchtowers to monitor incoming ships, protect local freshwater wells, and serve as an observatory to track the lunar calendar.",
            location: "Umm Salal Mohammed, Qatar.",
            image: "images/barzan.jpg"
        },
        {
            name: "Al Wajba Fort",
            history: "Constructed in 1893, it stands as one of the oldest forts in Qatar. It is celebrated as the historic site of the Battle of Al Wajba, where Qatari forces defeated the Ottomans to secure regional independence.",
            location: "Al Wajba (west of Doha), Qatar.",
            image: "images/wajibah.jpg"
        },
        {
            name: "Souq Waqif",
            history: "A historic marketplace established over a century ago for Bedouin traders to exchange livestock, spices, and goods. It was extensively restored in 2006 using traditional mud-brick rendering and wood-beam construction.",
            location: "Central Doha, Qatar.",
            image: "images/souq waqif.jpg"
        },
        {
            name: "Sheikh Abdullah bin Jassim Al Thani Palace (The Old Palace)",
            history: "Originally constructed in the early 20th century, serving as the royal residence of Sheikh Abdullah bin Jassim Al Thani and the seat of government.",
            location: "Central Doha, Qatar.",
            image: "images/amirioldpalace.jpg"
        },
        {
            name: "Museum of Islamic Art (MIA)",
            history: "Opened in 2008 and designed by Pritzker Prize-winning architect I. M. Pei. Its geometry is heavily influenced by ancient Islamic architecture, specifically the 13th-century ablution fountain of the Mosque of Ahmad Ibn Tulun in Cairo.",
            location: "Doha Corniche, Doha, Qatar.",
            image: "images/islamicartmuseum.jpg"
        },
        {
            name: "Al Jassasiya Rock Art Site",
            history: "Discovered in 1961, it is Qatar's most extensive rock art site, containing nearly 900 prehistoric petroglyphs carved directly into limestone ridge bedrock.",
            location: "Northeastern Coast (near Al Huwailah), Qatar.",
            image: "images/jassasiya.jpg"
        },
        {
            name: "Khor Al Adaid (The Inland Sea)",
            history: "A dramatic natural reserve where ocean tides penetrate deep into huge sand dunes, creating a rare inland sea ecosystem. Recognized on UNESCO's Tentative List.",
            location: "Southeastern Qatar (bordering Saudi Arabia).",
            image: "images/Dunes_at_Khawr_al_Udayd.jpg"
        }
    ],
    Quwait: [
        {
            name: "Kuwait Towers",
            history: "Officially opened in 1979 and designed by Swedish architects Sune Lindström and Malene Björn. Standing as a global symbol of modern Kuwait, the main tower rises 187 meters and features two iconic spheres covered in over 55,000 enameled steel discs in shades of blue, green, and gray.",
            location: "Kuwait City, Capital Governorate, Kuwait.",
            image: "images/kuwait towers.jpg"
        },
        {
            name: "Al Jahra Red Palace (Al Qasr Al Ahmar)",
            history: "Constructed in 1896 under the reign of Sheikh Mubarak Al-Sabah out of local red clay brick. It gained historical significance as the fortress where Kuwaiti forces successfully defended against the Ikhwan siege during the famous Battle of Jahra in 1920.",
            location: "Al Jahra, Jahra Governorate, Kuwait.",
            image: "images/red palace.jpg"
        },
        {
            name: "Beit Al Sadu (Sadu House)",
            history: "Built in 1936 as a grand merchant home on the seafront before being established in 1979 as a dedicated cultural center. It was founded to preserve traditional Bedouin weaving practices (Sadu), which UNESCO inscribed on its Intangible Cultural Heritage list.",
            location: "Al Sief Waterfront, Kuwait City, Kuwait.",
            image: "images/Beitalsadu.jpg"
        },
        {
            name: "Seif Palace (Qasr Al-Seif)",
            history: "Established in 1904 under Sheikh Mubarak Al-Sabah as the focal seat of government and royal affairs. It was renovated and expanded across successive eras, blending traditional Islamic architecture with modern stonework.",
            location: "Al Sief, Kuwait City, Kuwait.",
            image: "images/Seifpalace.jpg"
        },
        {
            name: "Grand Mosque of Kuwait (Al-Masjid Al-Kabir)",
            history: "Opened in 1986 as the official national mosque of Kuwait. Designed by architect Saleh Abdulrazak Al-Mutawa, it spans 45,000 square meters and can accommodate over 10,000 worshippers in its main hall.",
            location: "Central Kuwait City (opposite Seif Palace), Kuwait.",
            image: "images/Kuwait_City_Grand_Mosque_Exterior_South_Facade_5.jpg"
        },
        {
            name: "Sheikh Jaber Al-Ahmad Cultural Centre (Kuwait Opera House)",
            history: "Opened in 2016 as a multidisciplinary public arts venue. Designed by SSH, the architectural complex consists of four main geometric buildings enveloped in steel and titanium geometric screens.",
            location: "Gulf Road, Kuwait City, Kuwait.",
            image: "images/Jacckuwait.jpg"
        },
        {
            name: "Failaka Island Archaeological Sites (Tell Sa'id & Al-Qusour)",
            history: "Inhabited since the Bronze Age (c. 2000 BCE) as an essential trading post for the Dilmun civilization. Alexander the Great later colonized the island in the 4th century BCE, naming it Ikaros. Inscribed on Kuwait's UNESCO World Heritage Tentative List.",
            location: "Failaka Island (approx. 20 km offshore from Kuwait City), Kuwait.",
            image: "images/Failaka_Island.jpg"
        }
    ],
    Bahrain: [
        {
            name: "Qal'at al-Bahrain (Bahrain Fort)",
            history: "An ancient fort situated on an artificial mound (tell) built over 4,000 years of continuous human occupation (c. 2300 BCE to the 16th century CE). It served as the capital of the ancient Dilmun civilization and later a Portuguese military stronghold. Designated as a UNESCO World Heritage site in 2005.",
            location: "Karbabad, Northern Governorate, Bahrain.",
            image: "images/qalat elbahrain.jpg"
        },
        {
            name: "Arad Fort",
            history: "Built in the 15th century prior to the Portuguese invasion of Bahrain. Constructed in the typical Arabic fortification style, it was strategically positioned to defend the island of Muharraq.",
            location: "Arad, Muharraq Governorate, Bahrain.",
            image: "images/arad fort.jpg"
        },
        {
            name: "Sheikh Isa bin Ali House",
            history: "Constructed around 1800, this historic residence served as the home of Sheikh Isa bin Ali Al Khalifa (who ruled Bahrain from 1869 to 1932) and the seat of government.",
            location: "Old Town of Muharraq, Muharraq Governorate, Bahrain.",
            image: "images/isa bin ali house.jpg"
        },
        {
            name: "Pearling, Testimony of an Island Economy (Pearling Path)",
            history: "A unique cultural landscape inscribed as a UNESCO World Heritage site in 2012. It consists of 17 historic buildings in Muharraq, three offshore oyster beds, a coastal fort, and a waterfront fortress, preserving the history of the Gulf's pearl economy.",
            location: "Muharraq, Muharraq Governorate, Bahrain.",
            image: "images/pearling.jpg"
        },
        {
            name: "Al Fateh Grand Mosque",
            history: "Opened in 1988 by Sheikh Isa bin Salman Al Khalifa and named after Ahmed Al Fateh, the conqueror of Bahrain. It is one of the largest mosques in the world, capable of accommodating over 7,000 worshippers.",
            location: "Juffair, Manama, Bahrain.",
            image: "images/alfateh mosque.jpg"
        },
        {
            name: "Dilmun Burial Mounds",
            history: "Constructed between 2050 and 1750 BCE during the Early and Middle Dilmun periods. Spanning 21 archaeological sites with over 11,000 prehistoric burial mounds, they were inscribed as a UNESCO World Heritage site in 2019.",
            location: "A'ali and various inland sites, Bahrain.",
            image: "images/dilmun.jpg"
        },
        {
            name: "Barbar Temple",
            history: "An ancient archaeological site containing three superimposed temples built between 3000 BCE and 2000 BCE. Dedicated to Enki, the Sumerian god of wisdom and subterranean sweet waters.",
            location: "Barbar village, Northern Governorate, Bahrain.",
            image: "images/barbar temples.jpg"
        },
        {
            name: "Tree of Life (Shajarat-al-Hayat)",
            history: "A 400-year-old Prosopis cineraria (Ghaf) tree standing isolated in the middle of the desert with no obvious freshwater source nearby.",
            location: "Southern Governorate (near Jebel Dukhan), Bahrain.",
            image: "images/tree of life.jpg"
        }
    ],
    Oman: [
        {
            name: "Sultan Qaboos Grand Mosque",
            history: "Commissioned by Sultan Qaboos bin Said to mark his 30th year of reign and opened in 2001. Built over six years using 300,000 tonnes of Indian sandstone, it stands as Oman’s principal Islamic architectural masterpiece.",
            location: "Muscat, Muscat Governorate, Oman.",
            image: "images/qaboos.jpg"
        },
        {
            name: "Nizwa Fort & Castle",
            history: "The castle was originally constructed in the 9th century and expanded in the 1650s by Imam Sultan Bin Saif Al Ya'rubi. It served as the seat of power for the Ya'rubi Dynasty during a period that saw the expulsion of Portuguese forces from coastal Oman.",
            location: "Nizwa, Ad Dakhiliyah Governorate, Oman.",
            image: "images/nizwa fort.jpg"
        },
        {
            name: "Bahla Fort",
            history: "Constructed between the 12th and 15th centuries by the Banu Nebhan tribe, who controlled the interior trade routes. It was inscribed as Oman's first UNESCO World Heritage site in 1987.",
            location: "Bahla, Ad Dakhiliyah Governorate, Oman.",
            image: "images/bahla.jpg"
        },
        {
            name: "Al Mirani & Al Jalali Forts",
            history: "Built by the Portuguese in the late 16th century (completed c. 1587–1588) to protect the strategic harbor of Old Muscat against Ottoman naval invasions.",
            location: "Old Muscat Waterfront, Muscat Governorate, Oman.",
            image: "images/jalali marini.jpg"
        },
        {
            name: "Aflaj Irrigation Systems of Oman (Falaj Daris)",
            history: "Ancient water management systems dating back as early as 500 BCE. Inscribed as a UNESCO World Heritage site in 2006, the property covers five representative aflaj channels still operating today.",
            location: "Across multiple governorates (Falaj Daris is located in Nizwa, Ad Dakhiliyah).",
            image: "images/aflag irrigation.jpg"
        },
        {
            name: "Archaeological Sites of Bat, Al-Khutm and Al-Ayn",
            history: "Dating back to the 3rd millennium BCE (Bronze Age), these settlements and necropolises reflect the thriving trade network of the ancient Magan civilization, which exported copper to Mesopotamia. Inscribed as a UNESCO World Heritage site in 1988.",
            location: "Near Ibri, Ad Dhahirah Governorate, Oman.",
            image: "images/alkhutm alein.jpg"
        },
        {
            name: "Land of Frankincense (Sumhuram & Wadi Dawkah)",
            history: "A collection of ancient trade sites—including the fortified port of Sumhuram (Khor Rori), the caravan oasis of Shisr (Wubar), and the frankincense trees of Wadi Dawkah—that drove the global incense trade route for over a millennium. Inscribed as a UNESCO World Heritage site in 2000.",
            location: "Dhofar Governorate (Southern Oman).",
            image: "images/frankincense.jpg"
        },
        {
            name: "Bimmah Sinkhole (Hawiyat Najm)",
            history: "A spectacular water-filled depression formed by the collapse of underlying limestone surface layers due to natural subterranean erosion.",
            location: "Dabab area (between Dibba and Sur), Muscat Governorate, Oman.",
            image: "images/bimmah sinkhole.jpg"
        }
    ],
    Yemen: [
        {
            name: "Old City of Sana'a",
            history: "Inhabited for over 2,500 years, Sana'a served as a major political and religious center in ancient Arabia. The historic district features over 6,000 multi-story tower houses constructed from rammed earth and burnt brick, adorned with intricate white gypsum friezes and stained-glass windows (qamariyah). Inscribed as a UNESCO World Heritage site in 1986.",
            location: "Sana'a, Amanat al-Asimah Governorate, Yemen.",
            image: "images/San'a03_flickr.jpg"
        },
        {
            name: "Dar al-Hajar (Rock Palace)",
            history: "Perched dramatically atop a massive natural rock spire in Wadi Dhar, it was constructed in the 1930s by Imam Yahya as a summer retreat over the foundations of an ancient 18th-century palace built by scholar Ali bin Saleh Al-Amrani.",
            location: "Wadi Dhar (approx. 15 km northwest of Sana'a), Yemen.",
            image: "images/dar-al-hajar-palace.jpg"
        },
        {
            name: "Old Walled City of Shibam (Manhattan of the Desert)",
            history: "Founded in the 16th century, Shibam stands as one of the oldest examples of urban planning based on the principle of vertical construction. Inscribed as a UNESCO World Heritage site in 1982.",
            location: "Hadhramaut Governorate, Eastern Yemen.",
            image: "images/shibam.jpg"
        },
        {
            name: "Citadel of Sira (Cira Fortress)",
            history: "A 11th-century military fortification built on a volcanic island overlooking the strategic harbor of Aden. It played a crucial defensive role against Portuguese, Ottoman, and British naval forces across centuries.",
            location: "Crater District, Aden, Yemen.",
            image: "images/Sirah_Island.jpg"
        },
        {
            name: "Great Dam of Ma'rib",
            history: "Originally constructed in the 8th century BCE during the Kingdom of Saba (Sheba), it is considered one of the greatest engineering feats of the ancient world. It transformed the surrounding arid plains into a fertile agricultural oasis.",
            location: "Near Ma'rib, Ma'rib Governorate, Yemen.",
            image: "images/TDAA_Marib.jpg"
        },
        {
            name: "Awam Temple (Mahram Bilqis / Temple of the Sun)",
            history: "A monumental Sabaean sanctuary dedicated to Almaqah, the moon god, constructed between the 8th century BCE and the 4th century CE. Associated in regional folklore with the legendary Queen of Sheba (Bilqis).",
            location: "Near Ma'rib, Ma'rib Governorate, Yemen.",
            image: "images/Awwam_Temple.jpg"
        },
        {
            name: "Socotra Archipelago",
            history: "A isolated archipelago in the Indian Ocean that diverged from Gondwana millions of years ago. Due to its extreme geographic isolation, it evolved a unique ecosystem where nearly 37% of its plant species are found nowhere else on Earth. Designated a UNESCO World Natural Heritage site in 2008.",
            location: "Socotra Archipelago Governorate (approx. 340 km south of mainland Yemen).",
            image: "images/socotra.jpg"
        }
    ],
    Jordan: [
        {
            name: "Petra (Al-Khazneh / The Treasury)",
            history: "Capital of the Nabataean Kingdom established around the 4th century BCE. The city thrived as a major trading hub along the incense and spice routes before being annexed by the Roman Empire in 106 CE. Inscribed as a UNESCO World Heritage site in 1985 and named one of the New Seven Wonders of the World.",
            location: "Ma'an Governorate, Southern Jordan.",
            image: "images/khazneh.jpg"
        },
        {
            name: "Ancient City of Jerash (Gerasa)",
            history: "Settled during the Hellenistic period and expanded under Roman rule as one of the prominent cities of the Decapolis League. It reached its peak during the 2nd and 3rd centuries CE before earthquakes led to its gradual decline.",
            location: "Jerash Governorate, Northern Jordan.",
            image: "images/jerash.jpg"
        },
        {
            name: "Ajloun Castle (Qal'at Ar-Rabad)",
            history: "Built in 1184 CE by Izz ad-Din Usama, a general under Saladin (Salah ad-Din), to protect the region against Crusader incursions and secure the iron mines of Ajloun.",
            location: "Ajloun Governorate, Northwestern Jordan.",
            image: "images/ajlun-castle-qala-at.jpg"
        },
        {
            name: "Kerak Castle (Al-Karak)",
            history: "A massive Crusader stronghold construction began in the 1140s under Pagan the Butler. It became the seat of Raynald of Châtillon until it was besieged and captured by Saladin's forces in 1188 CE following the Battle of Hattin.",
            location: "Karak Governorate, Central Jordan.",
            image: "images/kerak.jpg"
        },
        {
            name: "Wadi Rum (Valley of the Moon)",
            history: "Inhabited since prehistoric times by Nabataeans and Thamudic tribes who left thousands of rock inscriptions and petroglyphs. It served as the operational base for T.E. Lawrence during the Arab Revolt (1917–1918). Designated a UNESCO World Heritage site in 2011.",
            location: "Aqaba Governorate, Southern Jordan.",
            image: "images/wadi rum.jpg"
        },
        {
            name: "Dead Sea (Al-Bahr Al-Mayyit)",
            history: "Known since antiquity as a natural spa, supply source for Egyptian mummification asphalt, and location for biblical events. It lies along the Jordan Rift Valley.",
            location: "Bordered by Jordan to the east",
            image: "images/Dead_Sea_beach_00.JPG"
        }
    ],
    Lebanon: [
        {
            name: "Baalbek (Heliopolis)",
            history: "Originally a Phoenician sanctuary dedicated to Baal, it was expanded by the Romans into one of the grandest religious complexes in the empire. Inscribed as a UNESCO World Heritage site in 1984.",
            location: "Beqaa Valley, Eastern Lebanon.",
            image: "images/baalbek.jpg"
        },
        {
            name: "Byblos (Jbeil)",
            history: "Continuously inhabited for over 7,000 years, Byblos was a major Phoenician seaport crucial for exporting cedar wood and papyrus to ancient Egypt. Inscribed as a UNESCO World Heritage site in 1984.",
            location: "Keserwan-Jbeil Governorate, Coastal Lebanon.",
            image: "images/byblos.jpg"
        },
        {
            name: "Sidon Sea Castle (Qal'at al-Bahr)",
            history: "Built in 1228 CE by Crusader forces on a small island connected to the mainland by a narrow stone causeway to fortify the harbor of ancient Sidon.",
            location: "Sidon (Saida), South Governorate, Lebanon.",
            image: "images/SidonSeaCastle.jpg"
        },
        {
            name: "Beiteddine Palace",
            history: "Constructed between 1788 and 1818 by Emir Bashir Shihab II as the seat of the Ottoman-era Mount Lebanon Emirate.",
            location: "Chouf District, Mount Lebanon.",
            image: "images/Courtyard_at_Beiteddine_Palace_-_2009.jpg"
        },
        {
            name: "Jeita Grotto",
            history: "A system of two separate interconnected limestone caves formed over millions of years by natural water erosion, rediscovered in 1836 by Reverend William Thomson.",
            location: "Nahr al-Kalb Valley, Keserwan District, Lebanon.",
            image: "images/jeita-grotto.jpg"
        },
        {
            name: "Forest of the Cedars of God (Horsh Arz el-Rab)",
            history: "One of the last remaining stands of the ancient Lebanon Cedar (Cedrus libani) forests that were harvested in antiquity by Phoenicians, Egyptians, and Babylonians for shipbuilding and temples. Designated a UNESCO World Heritage site in 1998.",
            location: "Kadisha Valley region, Bcharre District, Northern Lebanon.",
            image: "images/Forest_of_The_cedars_of_God.jpg"
        }
    ]
};

