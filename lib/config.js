export const Config = {
    costs: {
      default_weekday: 30, //default week day price
      default_weekend: 50, //for Friday and Saturday nights
  
      custom: {
        2022: {
          11: {
            default_weekday: 70, //for the entire month of nov, weekends are 70
            default_weekend: 170, //for the entire month of nov, weekends are 70
            24: 100,
            25: 100,
          },
        },
      },

    },
    blocked: {
      2022: {
        11: [20, 21, 22], //block these days
      },
    },

    booked: {
      2022: {
        11: [17, 24, 25], //these days are reserved
      },
    },
  }