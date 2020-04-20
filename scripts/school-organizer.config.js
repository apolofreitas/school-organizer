{
  const title = {
    backgroundColor: 'rgb(40, 42, 54)',
    color: 'rgb(248,248,242)',
  }

  const OpenGoogleMeets = (code) => window.open(`https://meet.google.com/${code}`)

  function onLoadTimeSlot(object) {
    const { element, timeSlot } = object

    switch (timeSlot.type) {
      case 'period':
        element.classList.add('school-timetable-period')
        if (timeSlot.code) {
          element.onclick = () => {
            window.open(`https://meet.google.com/${timeSlot.code}`)
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
          type: 'day'
        },
        {
          name: 'Inglês',
          code: '',
          type: 'period'
        },
        {
          name: 'PPBD',
          code: 'ddq-mrio-gym',
          type: 'period'
        },
        {
          name: 'Matemática',
          code: 'dus-xyvc-gkf',
          type: 'period'
        },
        {
          name: 'Física',
          code: 'osp-mhcu-scw',
          type: 'period'
        },
        {
          name: 'Filosofia',
          code: '',
          type: 'period'
        },
        {
          name: 'Ed. Física',
          code: 'eme-zkax-dnf',
          type: 'period'
        },
        {
          name: 'Português',
          code: 'crb-brvp-uoj',
          type: 'period'
        },
      ],
      [
        {
          name: 'Terça',
          type: 'day'
        },
        {
          name: 'IMC',
          code: 'zqs-gywn-hst',
          type: 'period'
        },
        {
          name: 'Biologia',
          code: 'jsk-ockc-bhx',
          type: 'period'
        },
        {
          name: 'ONST',
          code: 'agf-fqcs-ren',
          type: 'period'
        },
        {
          name: 'História',
          code: 'tsq-mkni-nud',
          type: 'period'
        },
        {
          name: 'Química',
          code: 'wzd-mwxc-njx',
          type: 'period'
        },
        {
          name: 'Geografia',
          code: 'kwg-bhea-okr',
          type: 'period'
        },
        {
          name: 'Português',
          code: 'crb-brvp-uoj',
          type: 'period'
        },
      ],
      [
        {
          name: 'Quarta',
          type: 'day'
        },
        {
          name: 'Inglês',
          code: '',
          type: 'period'
        },
        {
          name: 'Sociologia',
          code: 'ovi-rftz-tnt',
          type: 'period'
        },
        {
          name: 'Matemática',
          code: 'dus-xyvc-gkf',
          type: 'period'
        },
        {
          name: 'Arte',
          code: 'zar-bonu-xyk',
          type: 'period'
        },
        {
          name: 'LP II',
          code: 'npg-cviw-zda',
          type: 'period'
        },
        {
          name: 'Ed. Física',
          code: 'eme-zkax-dnf',
          type: 'period'
        },
        {
          name: 'Filosofia',
          code: '',
          type: 'period'
        },
      ],
      [
        {
          name: 'Quinta',
          type: 'day'
        },
        {
          name: 'História',
          code: 'wzb-hnwo-ufh',
          type: 'period'
        },
        {
          name: 'Biologia',
          code: 'jsx-ockc-bhx',
          type: 'period'
        },
        {
          name: 'APS',
          code: 'npg-cviw-zda',
          type: 'period'
        },
        {
          name: 'Geografia',
          code: 'pbk-fomz-vih',
          type: 'period'
        },
        {
          name: 'Química',
          code: 'wzd-mwxc-njx',
          type: 'period'
        },
        {
          name: 'Matemática',
          code: 'cqj-yhns-xbt',
          type: 'period'
        },
        {
          name: 'Português',
          code: 'crb-brvp-uoj',
          type: 'period'
        },
      ],
      [
        {
          name: 'Sexta',
          type: 'day'
        },
        {
          name: 'Inglês',
          code: '',
          type: 'period'
        },
        {
          name: 'LP II',
          code: 'myz-zptt-ikt',
          type: 'period'
        },
        {
          name: 'Matemática',
          code: 'dus-xyvc-gkf',
          type: 'period'
        },
        {
          name: 'Arte',
          code: 'zar-bonu-xyk',
          type: 'period'
        },
        {
          name: 'Sociologia',
          code: 'zzm-iirq-wgh',
          type: 'period'
        },
        {
          name: 'Física',
          code: 'pcv-igbb-wku',
          type: 'period'
        },
        {
          name: 'Português',
          code: 'crb-brvp-uoj',
          type: 'period'
        },
      ],
    ],
  })

}
