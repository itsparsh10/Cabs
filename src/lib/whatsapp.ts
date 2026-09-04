export const generateWhatsAppQuoteUrl = (data: any) => {
  const phone = "919999999999";
  
  let message = `Hello Lucifer Cabs, I want to book a taxi.\n\n*Booking Inquiry*\n`;
  message += `Name: ${data.name || 'N/A'}\n`;
  message += `Mobile: ${data.mobile || 'N/A'}\n`;
  if (data.alternateMobile) message += `Alternate Mobile: ${data.alternateMobile}\n`;
  
  message += `\nPickup: ${data.pickup || 'N/A'}\n`;
  if (data.drop) message += `Drop: ${data.drop}\n`;
  
  message += `\nTrip Type: ${data.tripType || 'One Way'}\n`;
  
  message += `\nPickup Date: ${data.pickupDate || 'N/A'}\n`;
  message += `Pickup Time: ${data.pickupTime || 'N/A'}\n`;
  
  if (data.tripType === 'Round Trip') {
    message += `\nReturn Date: ${data.returnDate || 'N/A'}\n`;
    message += `Return Time: ${data.returnTime || 'N/A'}\n`;
  }
  
  if (data.adults) message += `\nAdults: ${data.adults}`;
  if (data.children) message += `\nChildren: ${data.children}`;
  
  if (data.vehicle) message += `\n\nVehicle: ${data.vehicle}`;
  if (data.instructions) message += `\n\nSpecial Instructions: ${data.instructions}`;
  
  message += `\n\nPlease share the best available quotation.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
