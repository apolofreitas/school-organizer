{
  function onLoadTimeSlot(object) {
    const { element, timeSlot } = object

    switch (timeSlot.type) {
      case 'period':
        element.classList.add('school-timetable-period')
        if (timeSlot.link) {
          element.onclick = () => {
            window.open(timeSlot.link)
          }
          element.style.cursor = 'pointer'
        }
        break
      case 'day':
        element.classList.add('school-timetable-day')
        break
    }
  }

  school.config({
    onLoadTimeSlot: onLoadTimeSlot,
    classes: {
      ['Português']: {},
      ['Matemática']: {},
      ['História']: {},
      ['Geografia']: {},
      ['Biologia']: {},
      ['Física']: {},
      ['Química']: {},
      ['Arte']: {},
      ['Ed. Física']: {},
      ['Sociologia']: {},
      ['Filosofia']: {},
      ['Inglês']: {},
      ['LP II']: {},
      ['APS']: {},
      ['ONST']: {},
      ['IMC']: {},
      ['PPBD']: {},
    },
    timetable: [
      [
        {
          name: 'Segunda',
          type: 'day',
        },
        {
          name: 'Inglês',
          type: 'period',
        },
        {
          name: 'PPBD',
          type: 'period',
        },
        {
          name: 'Matemática',
          type: 'period',
        },
        {
          name: 'Física',
          type: 'period',
        },
        {
          name: 'Filosofia',
          type: 'period',
        },
        {
          name: 'Ed. Física',
          type: 'period',
        },
        {
          name: 'Português',
          type: 'period',
        },
      ],
      [
        {
          name: 'Terça',
          type: 'day',
        },
        {
          name: 'IMC',
          type: 'period',
        },
        {
          name: 'Biologia',
          type: 'period',
        },
        {
          name: 'ONST',
          type: 'period',
        },
        {
          name: 'História',
          type: 'period',
        },
        {
          name: 'Química',
          type: 'period',
        },
        {
          name: 'Geografia',
          type: 'period',
        },
        {
          name: 'Português',
          type: 'period',
        },
      ],
      [
        {
          name: 'Quarta',
          type: 'day',
        },
        {
          name: 'Inglês',
          type: 'period',
        },
        {
          name: 'Sociologia',
          type: 'period',
        },
        {
          name: 'Matemática',
          type: 'period',
        },
        {
          name: 'Arte',
          type: 'period',
        },
        {
          name: 'LP II',
          type: 'period',
        },
        {
          name: 'Ed. Física',
          type: 'period',
        },
        {
          name: 'Filosofia',
          type: 'period',
        },
      ],
      [
        {
          name: 'Quinta',
          type: 'day',
        },
        {
          name: 'História',
          type: 'period',
        },
        {
          name: 'Biologia',
          type: 'period',
        },
        {
          name: 'APS',
          type: 'period',
        },
        {
          name: 'Geografia',
          type: 'period',
        },
        {
          name: 'Química',
          type: 'period',
        },
        {
          name: 'Matemática',
          type: 'period',
        },
        {
          name: 'Português',
          type: 'period',
        },
      ],
      [
        {
          name: 'Sexta',
          type: 'day',
        },
        {
          name: 'Inglês',
          type: 'period',
        },
        {
          name: 'LP II',
          type: 'period',
        },
        {
          name: 'Matemática',
          type: 'period',
        },
        {
          name: 'Arte',
          type: 'period',
        },
        {
          name: 'Sociologia',
          type: 'period',
        },
        {
          name: 'Física',
          type: 'period',
        },
        {
          name: 'Português',
          type: 'period',
        },
      ],
    ],
  })
}
