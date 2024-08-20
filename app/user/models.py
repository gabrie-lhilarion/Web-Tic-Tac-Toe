#!/usr/bin/env python3
"""
Models for the user functionality.
"""

from app import db
from flask_login import UserMixin

class User(db.Model, UserMixin):
    """
    User model for storing user information.
    """
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'
