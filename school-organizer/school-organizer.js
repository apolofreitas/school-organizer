const school = {
  __data__: {
    timetable: undefined,
    config: {
      classes: {},
      timetable: [],
    },
    style: {},
  },

  config(config) {
    Object.assign(this.__data__.config, config)
  },
  get timetable() {
    if (!this.__data__.timetable) {
      this.__data__.timetable = createTimetable(this.__data__.config)
    }
    return this.__data__.timetable

    function createTimetable(config) {
      const tabela = document.createElement('div')
      const colors = {
        classes: {},
        setColors() {
          const keys = Object.keys(config.classes)
          const hue_step = 360 / (keys.length + 1)
          let hue = 0

          keys.forEach((key) => {
            this.classes[key] = `hsl(${hue}, 75%, 75%)`
            hue += hue_step
          })
        },
      }

      colors.setColors()

      Object.assign(tabela, {
        className: 'school-timetable-main',
      })

      config.timetable.forEach((dayTimetable) => {
        const column = document.createElement('div')

        Object.assign(column, {
          className: 'school-timetable-col',
        })

        dayTimetable.forEach((timeSlot) => {
          Object.assign(timeSlot, config.classes[timeSlot.name])

          const item = document.createElement('div')

          Object.assign(item, {
            className: 'school-timetable-timeslot',
            innerHTML: timeSlot.name,
          })

          if (colors.classes[timeSlot.name]) {
            item.style.backgroundColor = colors.classes[timeSlot.name]
          }

          if (config.onLoadTimeSlot) {
            config.onLoadTimeSlot({ element: item, timeSlot })
          }

          column.appendChild(item)
        })

        tabela.appendChild(column)
      })
      return tabela
    }
  },
}
