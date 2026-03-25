from rest_framework_gis.serializers import GeoModelSerializer

class BridgeSerializer(GeoModelSerializer):
    class Meta:
        model = YourBridgeModel  # Replace with your actual model
        fields = '__all__'