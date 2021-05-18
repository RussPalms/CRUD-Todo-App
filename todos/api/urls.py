from rest_framework import routers, urlpatterns
from .views import TodoViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet, 'todos')
# router.register('<TheURL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls