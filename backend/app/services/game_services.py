from app.models.game import Game
from app import db

def create_game(player1_id, board_size):
    new_game = Game(player1_id=player1_id, board_size=board_size)
    db.session.add(new_game)
    db.session.commit()
    return new_game

def get_game_by_id(game_id):
    return Game.query.get(game_id)
