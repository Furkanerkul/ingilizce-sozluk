let kelimeArat = document.querySelector('button')
let metinKutusu = document.querySelector('input[type="text"]')
let aratilanKelime = document.querySelector('h3#aratilanKelime')
let kelimesonucu = document.querySelector('h3#kelimesonucu')

kelimeArat.addEventListener('click',checkApi)

function checkApi(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${metinKutusu.value}`)
    .then((data) => data.json())
    .then((sozlukAnlami) => {
        aratilanKelime.textContent = `Aratılan kelime: ${sozlukAnlami[0].word}`;
        kelimesonucu.textContent = `Kelimenin anlamı: ${sozlukAnlami[0].meanings[0].definitions[parseInt(Math.random() * 3)].definition}`
    })
    .catch(aratilanKelime.textContent = 'Böyle bir kelime bulunamadı.')
}