const API_BASE = 'http://localhost:3000'

export const fetchFlowers = async () => {
  const response = await fetch(`${API_BASE}/flowers`)
  if (!response.ok) {
    throw new Error('Hiba a virágok betöltése közben')
  }
  return await response.json()
}

export const fetchFlowerById = async (id) => {
  const response = await fetch(`${API_BASE}/flowers/${id}`)
  if (!response.ok) {
    throw new Error(`Hiba a(z) ${id}. virág betöltése közben`)
  }
  return await response.json()
}

export const addFlower = async (flower) => {
  const response = await fetch(`${API_BASE}/flowers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(flower)
  })
  if (!response.ok) {
    throw new Error('Hiba a virág hozzáadása közben')
  }
  return await response.json()
}

export const updateFlower = async (id, flower) => {
  const response = await fetch(`${API_BASE}/flowers/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(flower)
  })
  if (!response.ok) {
    throw new Error(`Hiba a(z) ${id}. virág frissítése közben`)
  }
  return await response.json()
}

export const deleteFlower = async (id) => {
  const response = await fetch(`${API_BASE}/flowers/${id}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error(`Hiba a(z) ${id}. virág törlése közben`)
  }
  return true
}