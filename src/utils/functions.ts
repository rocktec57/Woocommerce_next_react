import { Cart, CartItem } from '../types'

export const clearCart = async (key: string) => {
  fetch(`${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/cocart/v1/clear?cart_key=${key}`, {
    method: 'POST',
  })
}

export const cartUpdater = (cart: Cart, data: Response) => {
  const newCart = { ...cart }
  newCart.items = Object.values(data)

  newCart.total = newCart.items.reduce(
    (acc: number, curr: CartItem) => (curr.line_total ? acc + curr.line_total : 0),
    0,
  )
  return newCart
}

export const fetcher = async (url: string, key: string, secret: string) => {
  return fetch(url, {
    headers: new Headers({
      Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64'),
      'Content-Type': 'application/json; charset=utf-8',
    }),
    credentials: 'include',
    mode: 'cors',
  })
}

export const poster = async (
  url: string,
  key: string,
  secret: string,
  data: object,
  method: string,
) => {
  return fetch(url, {
    headers: new Headers({
      Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64'),
      'Content-Type': 'application/json; charset=utf-8',
    }),
    method: method,
    body: JSON.stringify(data),
    credentials: 'include',
    mode: 'cors',
  })
}

export const createOrder = async (items: any, customer: any, payment: any) => {
  const res = await fetch(`/api/orders/create`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items, customer, payment }),
  })
  const json = await res.json()
  return json
}
