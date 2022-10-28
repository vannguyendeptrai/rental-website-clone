import { Config } from 'lib/config'

const config = Config;

export const getBookedDates = async (prisma) => {
  const bookedDates = []

  const bookings = await prisma.booking.findMany()

  for (const booking of bookings) {
    const dates = getDatesBetweenDates(booking.from, booking.to)

    bookedDates.push(booking.from)

    for (const bookedDay of dates) {
      bookedDates.push(bookedDay)
    }
  }

  return bookedDates
}