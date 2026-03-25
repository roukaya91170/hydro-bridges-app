# Django settings for PostgreSQL and PostGIS

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'your_database_name',  # Replace with your database name
        'USER': 'your_username',      # Replace with your database user
        'PASSWORD': 'your_password',  # Replace with your database password
        'HOST': 'localhost',           # Database host
        'PORT': '5432',                # Default port for PostgreSQL
    }
}

# Additional settings...

# Make sure to also add 'django.contrib.gis' to your INSTALLED_APPS in settings.py
