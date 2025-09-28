from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import CategoryViewSet, ProductViewSet,  CartViewSet, CartItemViewSet,OrderViewSet, OrderItemViewSet


router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'cart', CartViewSet, basename="cart")
router.register(r'cart-items', CartItemViewSet, basename="cart-items")
router.register(r'orders', OrderViewSet, basename="orders")
router.register(r'order-items', OrderItemViewSet, basename="order-items")

urlpatterns = [
    path('', include(router.urls)),
]
