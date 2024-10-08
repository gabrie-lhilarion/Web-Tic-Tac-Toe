import os
from backend.app import create_app

# Get the config name from an environment variable (default to 'development')
config_name = os.getenv('FLASK_CONFIG', 'development')

app = create_app(config_name)

if __name__ == "__main__":
    app.run()
