from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from backend.config import config_by_name


db = SQLAlchemy()
login_manager = LoginManager()
migrate = Migrate()

def create_app(config_name):
    app = Flask(__name__)

    # Load the configuration
    app.config.from_object(config_by_name[config_name])

    # Initialize extensions
    db.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)

    # Register blueprints
    from backend.app.api.routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    from backend.app.auth.routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    if config_name == 'development':
        app.debug = True


    return app
