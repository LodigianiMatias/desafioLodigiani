import { Schema, model } from 'mongoose'

const ticketSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    purchase_datetime: { type: Date, default: Date.now(), required: true },
    amount: { type: Number, required: true },
    purchaser: { type: String, required: true, default: 'Anonymous:API' },
    products: [{ idProduct: { type: Object }, _id: false, quantity: { type: Number }, totalPrice: { type: Number } }]
  },
  { versionKey: false }
)

export const TicketModel = model('tickets', ticketSchema)
