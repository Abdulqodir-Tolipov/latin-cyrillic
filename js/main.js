var elOpenList = document.querySelector('.sitenav');
var elOpenToglle = document.querySelector('.js-toggler__button');

elOpenToglle.addEventListener('click', function() {
  elOpenList.classList.toggle('sitenav--active')
})

let latin_to_cyrillic = {
  'a': 'а', 'A': 'А',
  'b': 'б', 'B': 'Б',
  'd': 'д', 'D': 'Д',
  'f': 'ф', 'F': 'Ф',
  'g': 'г', 'G': 'Г',
  'h': 'ҳ', 'H': 'Ҳ',
  'i': 'и', 'I': 'И',
  'j': 'ж', 'J': 'Ж',
  'k': 'к', 'K': 'К',
  'l': 'л', 'L': 'Л',
  'm': 'м', 'M': 'М',
  'n': 'н', 'N': 'Н',
  'o': 'о', 'O': 'О',
  'p': 'п', 'P': 'П',
  'q': 'қ', 'Q': 'Қ',
  'r': 'р', 'R': 'Р',
  's': 'с', 'S': 'С',
  't': 'т', 'T': 'Т',
  'u': 'у', 'U': 'У',
  'v': 'в', 'V': 'В',
  'x': 'х', 'X': 'Х',
  'y': 'й', 'Y': 'Й',
  'z': 'з', 'Z': 'З',
  'ʼ': 'ъ', ' ': ' ',
  'ch': 'ч', 'Ch': 'Ч', 'CH': 'Ч',
  'sh': 'ш', 'Sh': 'Ш', 'SH': 'Ш',
  'yo': 'ё', 'Yo': 'Ё', 'YO': 'Ё',
  'yu': 'ю', 'Yu': 'Ю', 'YU': 'Ю',
  'ya': 'я', 'Ya': 'Я', 'YA': 'Я',
  'ye': 'е', 'Ye': 'Е', 'YE': 'Е',
  'o‘': 'ў', 'O‘': 'Ў', 'oʻ': 'ў', 'Oʻ': 'Ў',
  "o'": 'ў', "O'": 'Ў', "o'": 'ў', "O'": 'Ў',
  'o`': 'ў', 'O`': 'Ў', 'o`': 'ў', 'O`': 'Ў',
  'o"': 'ў', 'O"': 'Ў', 'o"': 'ў', 'O"': 'Ў',
  'g‘': 'ғ', 'G‘': 'Ғ', 'gʻ': 'ғ', 'Gʻ': 'Ғ',
  "g'": 'ғ', "G'": 'Ғ', "g'": 'ғ', "G'": 'Ғ',
  'g`': 'ғ', 'G`': 'Ғ', 'g`': 'ғ', 'G`': 'Ғ',
  'g"': 'ғ', 'G"': 'Ғ', 'g"': 'ғ', 'G"': 'Ғ',
  'ts': 'ц', 'Ts': 'Ц', 'TS': 'Ц',
  'e': 'е', 'E': 'Е',
//   'e': 'э', 'E': 'э', 
}

let cyrillic_to_latin = {
  'а': 'a', 'А': 'A',
  'б': 'b', 'Б': 'B',
  'в': 'v', 'В': 'V',
  'г': 'g', 'Г': 'G',
  'д': 'd', 'Д': 'D',
  'е': 'e', 'Е': 'E',
  'ё': 'yo', 'Ё': 'Yo',
  'ж': 'j', 'Ж': 'J',
  'з': 'z', 'З': 'Z',
  'и': 'i', 'И': 'I',
  'й': 'y', 'Й': 'Y',
  'к': 'k', 'К': 'K',
  'л': 'l', 'Л': 'L',
  'м': 'm', 'М': 'M',
  'н': 'n', 'Н': 'N',
  'о': 'o', 'О': 'O',
  'п': 'p', 'П': 'P',
  'р': 'r', 'Р': 'R',
  'с': 's', 'С': 'S',
  'т': 't', 'Т': 'T',
  'у': 'u', 'У': 'U',
  'ф': 'f', 'Ф': 'F',
  'х': 'x', 'Х': 'X',
  'ц': 's', 'Ц': 'S',
  'ч': 'ch', 'Ч': 'Ch',
  'ш': 'sh', 'Ш': 'Sh',
  'ъ': 'ʼ', 'Ъ': 'ʼ',
  'ь': '', 'Ь': '',
  'э': 'e', 'Э': 'E',
  'ю': 'yu', 'Ю': 'Yu',
  'я': 'ya', 'Я': 'Ya',
  'ў': 'oʻ', 'Ў': 'Oʻ',
  'қ': 'q', 'Қ': 'Q',
  'ғ': 'gʻ', 'Ғ': 'Gʻ',
  'ҳ': 'h', 'Ҳ': 'H',
  ' ': ' '
}

// compounds_first = {
//     'ch': 'ч', 'Ch': 'Ч', 'CH': 'Ч',
//     'sh': 'ш', 'Sh': 'Ш', 'SH': 'Ш',
//     'yo‘': 'йў', 'Yo‘': 'Йў', 'YO‘': 'ЙЎ',
//     'yo': 'ё', 'Yo': 'Ё', 'YO': 'Ё',
//     'yu': 'ю', 'Yu': 'Ю', 'YU': 'Ю',
//     'ya': 'я', 'Ya': 'Я', 'YA': 'Я',
//     'ye': 'е', 'Ye': 'Е', 'YE': 'Е',
//     'o‘': 'ў', 'O‘': 'Ў', 'oʻ': 'ў', 'Oʻ': 'Ў',
//     'g‘': 'ғ', 'G‘': 'Ғ', 'gʻ': 'ғ', 'Gʻ': 'Ғ',
//     'ye': 'е', 'Ye': 'Е', 'YE': 'Е',
//     'e': 'э', 'E': 'Э',
//     's': 'ц', 'S': 'Ц',
//     'ts': 'ц', 'Ts': 'Ц', 'TS': 'Ц',
//     'e': 'э', 'E': 'э',
//     'sh': 'сҳ', 'Sh': 'Сҳ', 'SH': 'СҲ',
//     'yo': 'йо', 'Yo': 'Йо', 'YO': 'ЙО',
//     'yu': 'йу', 'Yu': 'Йу', 'YU': 'ЙУ',
//     'ya': 'йа', 'Ya': 'Йа', 'YA': 'ЙА',
// }


function convert_cyrillic () {
  let str = ''
  let text = input_text1.value
  for (let i = 0;  i < text.length; i++){
      let harf = text[i] + text[i+1]
      if (latin_to_cyrillic[harf]){
        str += latin_to_cyrillic[harf]
        i++
      }else if (latin_to_cyrillic[text[i]] === undefined) {
        str += text[i]
      }else if (latin_to_cyrillic[text[i]] === undefined) {
        str += latin_to_cyrillic[text[i]]
      }else{
        str += latin_to_cyrillic[text[i]]
      }
  }
  input_text2.value = str
}

btn_cyrillic.onclick = convert_cyrillic





function convert_latin () {
  let str1 = ''
  let res = input_text2.value
  for (let j = 0; j < res.length; j++) {
    if (cyrillic_to_latin[res[j]] === undefined) {
      str1 += res[j]
    }else if (cyrillic_to_latin[res[j]] === undefined ) {
      str1 += cyrillic_to_latin[res[j]]
    }else{
      str1 += cyrillic_to_latin[res[j]]
    }
  }
input_text1.value = str1

}

btn_latin.onclick = convert_latin


let btnClear = document.querySelector('#btn-clear') 

btnClear.addEventListener('click', () => {
  window.location.reload()
})
