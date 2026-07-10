import phonenumbers
from phonenumbers import geocoder, carrier, timezone

# Enter the phone number with country code (e.g., +254 for Kenya)
number = phonenumbers.parse("+254 790 104107")

# Fetch Details
location = geocoder.description_for_number(number, "en")
service_provider = carrier.name_for_number(number, "en")
time_zones = timezone.time_zones_for_number(number)

print(f"Location: {location}")
print(f"Carrier: {service_provider}")
print(f"Timezone: {time_zones}")
