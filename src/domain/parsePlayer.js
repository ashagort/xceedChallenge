const agePlayer = (bith) => {
  const today = new Date()
  const bithday = new Date(bith)
  let age = today.getFullYear() - bithday.getFullYear()
  const m = today.getMonth() - bithday.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < bithday.getDate())) {
    age--
  }

  return age
}

export const parsePlayer = config => (
  {
    id: config.id,
    name: config.name,
    nationality: config.nationality,
    age: agePlayer(config.dateOfBirth)
  }
)
