#!/usr/bin/env python

import os
import sys
import flask

from flask import Flask
from flask import render_template

import settings

SCRIPT_PATH = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.join(SCRIPT_PATH, ".."))

app = Flask(__name__)
app.config.from_object("atmafate.settings")


@app.route("/")
def fateatma():
    return render_template("fateatma.html");


if __name__ == "__main__":
    app.run(
        host=settings.HOST,
        port=settings.PORT
    )
