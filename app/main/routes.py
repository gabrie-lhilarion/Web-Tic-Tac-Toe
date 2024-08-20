#!/usr/bin/env python3
"""
Routes for the main app functionality.
"""

from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    """
    Home page route.
    """
    return render_template('main/index.html')
