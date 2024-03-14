import './style.css'

//import { setupCounter } from './calculator.js'

//document.querySelector('#app').innerHTML = ``
class Main {

  constructor(root) {
    this.root = root
  }

  headerContainer = this.createElement('div', '', 'header-container')
  headerContent = this.createElement('div', '', 'header-content')
  mainContainer = this.createElement('div', '', 'main-container')
  mainContent = this.createElement('div', '', 'main-content')
  headerNav = this.createElement('nav', '', 'header-nav')
  headerUl = this.createElement('ul', '', 'header-ul')
  headerLi1 = this.createElement('li', 'Калькулятор', 'header-li')
  headerLi2 = this.createElement('li', 'Чекбоксы', 'header-li')


  generationMain() {
    let calculator = new Calculator().generationCalculate()
    let checkbox = new Checkbox().generationCheckbox()
    this.headerLi1.addEventListener('click', () => {
      this.headerLi2.classList.remove('active-link')
      this.headerLi1.classList.add('active-link')
      this.mainContent.innerHTML = ''
      this.mainContent.append(calculator)
    })

    this.headerLi2.addEventListener('click', () => {
      this.headerLi1.classList.remove('active-link')
      this.headerLi2.classList.add('active-link')
      this.mainContent.innerHTML = ''
      this.mainContent.append(checkbox)
    })
    this.headerLi1.classList.add('active-link')
    this.headerUl.append(this.headerLi1, this.headerLi2)
    this.headerNav.append(this.headerUl)
    this.headerContent.append(this.headerNav)
    this.headerContainer.append(this.headerContent)
    this.mainContent.append(calculator)
    this.mainContainer.append(this.mainContent)
    this.root.append(this.headerContainer, this.mainContainer)
  }

  createElement(tag, text, selector, value = '') {
    let elem = document.createElement(tag);
    if (tag === 'input') {
      elem.type = text
    } else {
      if (text.length) elem.textContent = text;
    }
    if (value.length) elem.value = value
    elem.classList.add(selector)
    return elem;
  }
}

class Calculator extends Main {

  feedData = {
    Shepherd: {
      lessOne: 600,
      oneToFive: 800,
      moreFive: 700
    },
    Labrador: {
      lessOne: 500,
      oneToFive: 700,
      moreFive: 400
    }
  }


  calContainer = this.createElement('div', '', 'calculator-container')
  calContent = this.createElement('div', '', 'calculator-content')
  calSection = this.createElement('div', '', 'calculator-section')
  calTitle = this.createElement('div', 'Калькулятор корма еды', 'calculator-title')
  calSubtitle = this.createElement('div', 'Для расчёта необходимо ввести данные о питомце в форму: порода, возраст, активность, а также вес.', 'calculator-subtitle')
  calSaidbarContainer = this.createElement('div', '', 'calculator-saidbar-container')
  calSaidbarContent = this.createElement('div', '', 'calculator-saidbar-content-form')

  calSaidbarControlBreed = this.createElement('div', '', 'calculator-saidbar-control-breed')
  calSaidbarLabelBreed = this.createElement('label', 'Порода: ', 'calculator-saidbar-lable-breed')
  calSaidbarBreedSelect = this.createElement('select', '', 'calculator-saidbar-select-breed')
  calSaidbarBreedOption0 = this.createElement('option', 'Выбрать', 'calculator-saidbar-option-breed', '.')
  calSaidbarBreedOption1 = this.createElement('option', 'Овчарка', 'calculator-saidbar-option-breed', 'Shepherd')
  calSaidbarBreedOption2 = this.createElement('option', 'Лабрадор', 'calculator-saidbar-option-breed', 'Labrador')



  calSaidbarControlAge = this.createElement('div', '', 'calculator-saidbar-control-age')
  calSaidbarLabelAge = this.createElement('label', 'Возраст: ', 'calculator-saidbar-lable-age')
  calSaidbarAgeSelect = this.createElement('select', '', 'calculator-saidbar-select-age')
  calSaidbarAgeOption0 = this.createElement('option', 'Выбрать', 'calculator-saidbar-option-age', '.')
  calSaidbarAgeOption1 = this.createElement('option', 'Меньше одного  года', 'calculator-saidbar-option-age', 'lessOne')
  calSaidbarAgeOption2 = this.createElement('option', 'от 1 года до 5 лет', 'calculator-saidbar-option-age', 'oneToFive')
  calSaidbarAgeOption3 = this.createElement('option', 'Более 5 лет', 'calculator-saidbar-option-age', 'moreFive')



  calSaidbarControlActivity = this.createElement('div', '', 'calculator-saidbar-control-activity')
  calSaidbarTitleActivity = this.createElement('div', 'Активность:', 'calculator-saidbar-title-activity')
  calSaidbarWrapRadioActivity = this.createElement('div', '', 'calculator-saidbar-wrap-activity')
  calSaidbarLabelActivityModerate = this.createElement('label', 'Умеренный', 'calculator-activity-lable-moderate')
  calSaidbarModerateRadio = this.createElement('input', 'radio', 'calculator-saidbar-radio-moderate', 'moderate')
  calSaidbarLabelActivityActive = this.createElement('label', 'Активный', 'calculator-activity-lable-active')
  calSaidbarActiveRadio = this.createElement('input', 'radio', 'calculator-saidbar-radio-age', 'active')


  calSaidbarControlWeight = this.createElement('div', '', 'calculator-saidbar-control-weight')
  calSaidbarLabelWeight = this.createElement('label', 'Вес: ', 'calculator-weight-lable')
  calSaidbarWeightNumber = this.createElement('input', 'number', 'calculator-saidbar-weight-number')

  calSaidbarMessage = this.createElement('div', 'Заполните все поля формы', 'calculator-saidbar-control-message')


  calSaidbarCalculate = this.createElement('div', '', 'calculator-saidbar-control-сalculate')
  calSaidbarBtnCalculate = this.createElement('button', 'Расчитать', 'calculator-saidbar-btn-сalculate')
  calSaidbarBtnReset = this.createElement('button', 'Сбросить', 'calculator-saidbar-btn-сalculate')

  calSaidbarResult = this.createElement('div', '', 'calculator-saidbar-control-result')
  calSaidbarResultText = this.createElement('div', 'Итог - 0 гр.', 'calculator-saidbar-text-result')

  generationCalculate() {


    this.calSaidbarBtnCalculate.addEventListener('click', (e) => {
      this.checkingForm()
    })


    this.calSaidbarBtnReset.addEventListener('click', (e) => {

      this.resetForm()
    })

    this.calSaidbarWeightNumber.addEventListener('change', (e) => {

      console.log(e.target.value)
      if (Number(e.target.value) > 30) {
        e.target.classList.add('weight-number-disabled')
        //добавить блок с сообщением
      } else {
        e.target.classList.remove('weight-number-disabled')
        //добавить блок с сообщением
      }
    })



    this.calSaidbarLabelBreed.htmlFor = 'breed'
    this.calSaidbarBreedSelect.id = 'breed'
    this.calSaidbarBreedOption0.hidden = true;
    this.calSaidbarBreedOption0.disabled = 'disabled'
    this.calSaidbarBreedOption0.selected = 'selected'
    this.calSaidbarBreedOption0.required = true;
    this.calSaidbarBreedSelect.append(this.calSaidbarBreedOption0, this.calSaidbarBreedOption1, this.calSaidbarBreedOption2)
    this.calSaidbarControlBreed.append(this.calSaidbarLabelBreed, this.calSaidbarBreedSelect)

    this.calSaidbarLabelAge.htmlFor = 'age'
    this.calSaidbarAgeSelect.id = 'age'
    this.calSaidbarAgeOption0.hidden = true;
    this.calSaidbarAgeOption0.disabled = 'disabled'
    this.calSaidbarAgeOption0.selected = 'selected'
    this.calSaidbarAgeOption0.required = true;
    this.calSaidbarAgeSelect.append(this.calSaidbarAgeOption0, this.calSaidbarAgeOption1, this.calSaidbarAgeOption2, this.calSaidbarAgeOption3)
    this.calSaidbarControlAge.append(this.calSaidbarLabelAge, this.calSaidbarAgeSelect)

    this.calSaidbarModerateRadio.id = 'moderate'
    this.calSaidbarModerateRadio.name = 'activity'
    this.calSaidbarLabelActivityModerate.htmlFor = 'moderate'
    this.calSaidbarActiveRadio.id = 'active'
    this.calSaidbarActiveRadio.name = 'activity'
    this.calSaidbarLabelActivityActive.htmlFor = 'active'
    this.calSaidbarWrapRadioActivity.append(this.calSaidbarModerateRadio, this.calSaidbarLabelActivityModerate, this.calSaidbarActiveRadio, this.calSaidbarLabelActivityActive)
    this.calSaidbarControlActivity.append(this.calSaidbarTitleActivity, this.calSaidbarWrapRadioActivity)

    this.calSaidbarLabelWeight.htmlFor = 'weight'
    this.calSaidbarWeightNumber.id = 'weight'
    this.calSaidbarWeightNumber.min = '0'

    this.calSaidbarControlWeight.append(this.calSaidbarLabelWeight, this.calSaidbarWeightNumber)

    this.calSaidbarCalculate.append(this.calSaidbarBtnCalculate)

    this.calSaidbarResult.append(this.calSaidbarResultText)



    this.calSaidbarContent.append(this.calSaidbarControlBreed, this.calSaidbarControlAge, this.calSaidbarControlActivity, this.calSaidbarControlWeight, this.calSaidbarMessage, this.calSaidbarCalculate, this.calSaidbarResult);//!!!!!!!!!!!!!!!!!!!

    this.calSection.append(this.calTitle, this.calSubtitle)
    this.calSaidbarContainer.append(this.calSaidbarContent)
    this.calContent.append(this.calSection, this.calSaidbarContainer)
    this.calContainer.append(this.calContent)
    return this.calContainer
  }

  countingFeed(breed, age, activity, number) {
    let sum = 0;
    console.log(breed, age, activity, number)
    sum = this.feedData[breed][age]
    if (number >= 5 && number <= 10) {
      sum += ((sum / 100) * 20)
    } else if (number >= 11 && number <= 20) {
      sum += ((sum / 100) * 30)
    } else if (number >= 21 && number <= 30) {
      sum += ((sum / 100) * 40)
    }
    if (activity === 'active') sum += (sum / 100) * 30
    this.calSaidbarCalculate.append(this.calSaidbarBtnReset)
    console.log(sum)
    this.calSaidbarResultText.textContent = `Итог - ${sum} гр.`
  }

  checkingForm() {
    let breed = this.calSaidbarBreedSelect.value
    let age = this.calSaidbarAgeSelect.value
    let activity;
    if (this.calSaidbarModerateRadio.checked) {
      activity = this.calSaidbarModerateRadio.value
    } else if (this.calSaidbarActiveRadio.checked) {
      activity = this.calSaidbarActiveRadio.value
    }
    let number = this.calSaidbarWeightNumber.value;
    console.log(breed, age, activity, number)

    if (breed && age && activity && number && number <= 30) {
      this.calSaidbarMessage.classList.remove('show')
      this.countingFeed(breed, age, activity, number)
    } else {
      this.calSaidbarMessage.classList.add('show')
    }
  }

  resetForm() {

    this.calSaidbarBreedSelect.value = '.'
    this.calSaidbarAgeSelect.value = '.'
    this.calSaidbarModerateRadio.checked = false
    this.calSaidbarActiveRadio.checked = false
    this.calSaidbarWeightNumber.value = ''
    this.calSaidbarResultText.textContent = 'Итог - 0 гр.'
    this.calSaidbarBtnReset.remove()
  }

}

class Checkbox extends Main {
  array = [
    {
      name: 'Подготовительные работы',
      status: false,
      list: [
        {
          nameList: 'Подготовительные работы1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'Подготовительные работы2',
          status: true,
          link: 'https://google.com'
        },
        {
          nameList: 'Подготовительные работы3',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'Подготовительные работы4',
          status: false,
          link: 'https://google.com'
        },
      ]
    },
    {
      name: 'SEO-аналитика',
      status: true,
      list: [
        {
          nameList: 'SEO-аналитика1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'SEO-аналитика1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'SEO-аналитика1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'SEO-аналитика1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'SEO-аналитика1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'SEO-аналитика1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'SEO-аналитика2',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'SEO-аналитика3',
          status: true,
          link: 'https://google.com'
        },
        {
          nameList: 'SEO-аналитика4',
          status: true,
          link: 'https://google.com'
        },
      ]
    },
    {
      name: 'Стратегия продвижения',
      status: false,
      list: [
        {
          nameList: 'Стратегия продвижения1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'Стратегия продвижения1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'Стратегия продвижения1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'Стратегия продвижения1',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'Стратегия продвижения2',
          status: false,
          link: 'https://google.com'
        },
        {
          nameList: 'Стратегия продвижения3',
          status: true,
          link: 'https://google.com'
        },
        {
          nameList: 'Стратегия продвижения4',
          status: false,
          link: 'https://google.com'
        },
      ]
    },
  ]


  checkboxContainer = this.createElement('div', '', 'checkbox-container')
  checkboxContent = this.createElement('div', '', 'checkbox-content')

  checkboxSwitch = this.createElement('div', '', 'checkbox-switch')
  checkboxSwitchInput = this.createElement('input', 'checkbox', 'checkbox-switch-input')
  checkboxSwitcLabel = this.createElement('label', 'Admin', 'checkbox-switch-label')
  //checkboxSwitcText = this.createElement('input', 'chekbox', 'checkbox-switch-text')


  checkboxScale = this.createElement('div', '', 'checkbox-scale')
  checkboxScaleBackground = this.createElement('div', '', 'checkbox-scale-background')
  checkboxScaleText = this.createElement('div', 'Продвижение на 0%', 'checkbox-scale-text')

  checkboxItems = this.createElement('div', '', 'checkbox-items')
  checkboxItemsList = this.createElement('ul', '', 'checkbox-items-list')

  progressBar() {
    let arr = JSON.parse(localStorage.getItem('checkbox'))
    let count = 0;
    let allList = 0;
    arr.forEach(e => {
      if (e.status) {
        allList += e.list.length
        count += e.list.length
      } else {
        e.list.forEach(j => {
          allList += 1
          if (j.status) count += 1
        })
      }
    })
    let onePercent = 100 / allList;
    let progres = Math.floor(onePercent * count)
    this.checkboxScaleBackground.style.width = `${progres}%`
    this.checkboxScaleText.textContent = `Продвижение на ${progres}%`
  }


  generationCheckbox() {
    let arr = localStorage.getItem('checkbox')
    if (!arr) localStorage.setItem('checkbox', JSON.stringify(this.array))
    arr = JSON.parse(localStorage.getItem('checkbox'))
    this.progressBar()
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
      let li = this.createElement('li', '', 'checkbox-items-list-li')
      let div = this.createElement('div', '', 'div')
      let ul = this.createElement('ul', '', 'checkbox-items-sublist')
      let div2 = this.createElement('div', '', 'div')
      let div3 = this.createElement('div', '', 'div')
      div3.style.display = 'none'
      let itemInput = this.createElement('input', 'checkbox', 'checkbox-items-input')
      let itemLabel = this.createElement('label', arr[i].name, 'checkbox-items-label')
      itemInput.addEventListener('change', (e) => {
        let arr = JSON.parse(localStorage.getItem('checkbox'))
        console.log(e.target.checked)
        if (e.target.checked) {
          arr[i].status = true
          arr[i].list.forEach(e => {
            e.status = true
          })
          for (const child of ul.children) {
            child.children[0].children[0].checked = true
          }
        } else {
          arr[i].status = false
          arr[i].list.forEach(e => {
            e.status = false
          })
          for (const child of ul.children) {
            child.children[0].children[0].checked = false
          }
        }
        console.log(arr)
        localStorage.setItem('checkbox', JSON.stringify(arr))
        this.progressBar()
      })
      itemInput.checked = arr[i].status

      itemLabel.htmlFor = `name-${i}`
      itemInput.id = `name-${i}`
      let itemEdit = this.createElement('button', 'Редактировать', 'checkbox-items-edit')
      itemEdit.dataset.edit = true

      let itemInputEdit = this.createElement('input', 'text', 'checkbox-items-input-edit', arr[i].name)
      let itemLabelEdit = this.createElement('label', "Название: ", 'checkbox-items-label-edit')
      itemInputEdit.id = `edit${i}`
      itemLabelEdit.htmlFor = `edit${i}`

      itemEdit.addEventListener('click', () => {
        if (itemEdit.dataset.edit === 'true') {
          div3.style.display = 'block'
          div2.style.display = 'none'
          itemEdit.textContent = 'Сохранить'
          itemEdit.dataset.edit = false
        } else {
          let arr = JSON.parse(localStorage.getItem('checkbox'))
          itemLabel.textContent = itemInputEdit.value;
          arr[i].name = itemInputEdit.value;
          div3.style.display = 'none'
          div2.style.display = 'block'
          itemEdit.textContent = 'Редактировать'
          itemEdit.dataset.edit = true
          localStorage.setItem('checkbox', JSON.stringify(arr))
        }


      })

      let itemButton = this.createElement('button', 'Раскрыть', 'checkbox-items-button')
      let editLink = this.createElement('div', '', 'edit-link')
      editLink.append(itemEdit, itemButton)

      itemButton.addEventListener('click', () => {
        ul.classList.toggle('show-sublict')
        if (ul.classList.contains('show-sublict')) { itemButton.textContent = 'Скрыть' } else { itemButton.textContent = 'Раскрыть' }
      })
      div3.append(itemLabelEdit, itemInputEdit)
      div2.append(itemInput, itemLabel)
      div.append(div2, div3, editLink)
      li.append(div, ul)
      this.checkboxItemsList.append(li)


      for (let j = 0; j < arr[i].list.length; j++) {
        let li = this.createElement('li', '', 'checkbox-items-sublist-li')
        let div = this.createElement('div', '', 'div')
        let itemInput2 = this.createElement('input', 'checkbox', 'checkbox-subitems-input')
        itemInput2.addEventListener('change', (e) => {
          let arr = JSON.parse(localStorage.getItem('checkbox'))
          arr[i].list[j].status = e.target.checked
          if (!e.target.checked) {
            arr[i].status = false
            itemInput.checked = false
          } else {
            let res = arr[i].list.filter(e => e.status === true)
            if (res.length === arr[i].list.length) itemInput.checked = true
          }
          localStorage.setItem('checkbox', JSON.stringify(arr))
          this.progressBar()
        })

        itemInput2.checked = arr[i].list[j].status
        let itemLabel = this.createElement('label', arr[i].list[j].nameList, 'checkbox-subitems-label')
        itemLabel.htmlFor = `subname-${i}-${j}`
        itemInput2.id = `subname-${i}-${j}`
        let itemEdit = this.createElement('button', 'Редактировать', 'checkbox-subitems-edit')
        let itemLink = this.createElement('a', 'Прочитать инструкцию', 'checkbox-subitems-link')
        let editLink = this.createElement('div', '', 'edit-link')

        itemLink.href = arr[i].list[j].link
        itemLink.target = 'blank'
        editLink.append(itemEdit, itemLink)
        div.append(itemInput2, itemLabel, editLink)
        li.append(div)
        ul.append(li)


      }

    }
    this.checkboxSwitchInput.id = 'switch'

    this.checkboxSwitcLabel.addEventListener('click', (e) => {

      let elems1 = document.querySelectorAll('.checkbox-items-edit')
      let elems2 = document.querySelectorAll('.checkbox-subitems-edit')

      for (const elem of elems1) {
        if (!this.checkboxSwitchInput.checked) {
          elem.style.display = 'inline-block'
        } else {
          elem.style.display = 'none'

        }
      }
      for (const elem of elems2) {
        if (!this.checkboxSwitchInput.checked) {
          elem.style.display = 'inline-block'
        } else {
          elem.style.display = 'none'
        }
      }

      this.checkboxScale.classList.toggle('hidden-scale')

    })

    this.checkboxSwitcLabel.htmlFor = 'switch'
    this.checkboxItems.append(this.checkboxItemsList)
    this.checkboxScale.append(this.checkboxScaleBackground, this.checkboxScaleText)
    this.checkboxSwitch.append(this.checkboxSwitchInput, this.checkboxSwitcLabel)
    this.checkboxContent.append(this.checkboxSwitch, this.checkboxScale, this.checkboxItems)
    this.checkboxContainer.append(this.checkboxContent)
    return this.checkboxContainer;
  }



}
const start = new Main(document.querySelector('#app'))
start.generationMain()