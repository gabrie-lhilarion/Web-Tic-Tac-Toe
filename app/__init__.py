#!/usr/bin/env python3
"""
Initialization module for the Flask application.
"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from config import Config

db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()

def create_app():
    """
    Create and configure the Flask application.
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)

    from app.main.routes import main_bp
    app.register_blueprint(main_bp)

    from app.user.models import User

    @login_manager.user_loader
    def load_user(user_id):
        """
        Given a user ID, return the corresponding user object.
        """
        return User.query.get(int(user_id))

    return app
