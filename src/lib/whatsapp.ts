export const DEFAULT_PHONE = "917069300605"

export const DEFAULT_WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm looking for a cab service with Lucifer Cabs. Can you please help me with quotes and availability?"
)

export const DEFAULT_WHATSAPP_URL = `https://wa.me/${DEFAULT_PHONE}?text=${DEFAULT_WHATSAPP_MESSAGE}`

export interface WhatsAppQuoteData {
  name?: string
  tripType: string
  pickup: string
  drop?: string
  pickupDate?: string
  pickupTime?: string
  dropDate?: string
  journeyDays?: string
  airportTransferType?: string
  airportName?: string
  passengers?: string
}

export const generateWhatsAppQuoteUrl = (data: WhatsAppQuoteData) => {
  const phone = DEFAULT_PHONE
  const nameStr = data.name ? data.name.trim() : ""

  let message = `Hi Lucifer Cabs! 🚕\n\n`
  if (nameStr) {
    message += `My name is *${nameStr}*. `
  }
  message += `I would like to request a quotation for a *${data.tripType}* cab:\n\n`

  if (nameStr) {
    message += `👤 *Name:* ${nameStr}\n`
  }

  if (data.tripType === "Airport") {
    if (data.airportTransferType) message += `✈️ *Transfer Type:* ${data.airportTransferType}\n`
    if (data.airportName) message += `🛫 *Airport:* ${data.airportName}\n`
    if (data.pickup) message += `📍 *Address:* ${data.pickup}\n`
  } else {
    message += `📍 *Pickup Location:* ${data.pickup || 'N/A'}\n`
    if (data.drop) message += `🏁 *Drop Location:* ${data.drop}\n`
  }

  if (data.pickupDate) message += `📅 *Pickup Date:* ${data.pickupDate}\n`
  if (data.pickupTime) message += `⏰ *Pickup Time:* ${data.pickupTime}\n`

  if (data.tripType === "Round Trip" || data.tripType === "Outstation") {
    if (data.dropDate) message += `🗓️ *Return / Drop Date:* ${data.dropDate}\n`
    if (data.journeyDays) message += `⏱️ *Duration:* ${data.journeyDays}\n`
  }

  if (data.passengers) {
    message += `👥 *Passengers:* ${data.passengers}\n`
  }

  message += `\nPlease share available vehicle options and the best price quote. Thank you!`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const getServiceWhatsAppUrl = (serviceTitle: string) => {
  const message = `Hi Lucifer Cabs! 🚕\n\nI want to book a *${serviceTitle}*. Please share available cabs, rates, and booking options with me.`
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
}

export const getRouteWhatsAppUrl = (from: string, to: string) => {
  const message = `Hi Lucifer Cabs! 🚕\n\nI want to book a cab from *${from}* to *${to}*. Please share availability and best price quotes.`
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
}

export const getFleetWhatsAppUrl = (vehicleName: string) => {
  const message = `Hi Lucifer Cabs! 🚕\n\nI am interested in hiring a *${vehicleName}*. Please share availability and rental quotes.`
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
}

export const getPackageWhatsAppUrl = (packageTitle: string, description: string) => {
  const message = `Hi Lucifer Cabs! 🚕\n\nI am interested in the *${packageTitle}* package (${description}). Please share package details and best custom quote.`
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`
}

