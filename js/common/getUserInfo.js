
now = new Date(),hour = now.getHours();
if (hour>=1&&hour <=9){$('.phone p').html("Chào buổi sáng！")} 
else if (hour >=12&&hour <= 14){$('.phone p').html("Chúc bạn buổi trưa vui vẻ！")} 
else if (hour >= 15&&hour <= 17){$('.phone p').html("Chúc bạn buổi chiều vui vẻ！")} 
else if (hour >= 18){$('.phone p').html("Chúc bạn buổi tối vui vẻ！")} 

