from django.contrib import admin
from .models import Cart, CartItem, Order, OrderItem, Category, Product

# Register your models here.
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Category)
admin.site.register(Product)