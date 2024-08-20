#!/usr/bin/env python3
"""
Configuration module for Flask application.
"""

import os

class Config:
    """
    Configuration class for the Flask app.
    """
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key')
    # Use your MySQL database credentials and database name
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'mysql://codemaster:chisom1984@localhost/tic_tac_toe')
    SQLALCHEMY_TRACK_MODIFICATIONS = False