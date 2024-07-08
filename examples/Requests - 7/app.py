#! /usr/bin/python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request

app = Flask(__name__, template_folder="templates", static_folder="static")


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/calc", methods=["GET", "POST"])
def calc():
    if request.method == "GET":
        x: int = int(request.args.get("x", 0))
        y: int = int(request.args.get("y", 0))
    else:
        x: int = int(request.form.get("x", 0))
        y: int = int(request.form.get("y", 0))

    return str(x + y)

@app.route("/api/calc", methods=["POST"])
def calc_json():
    x: int = int(request.json.get("x", 0))
    y: int = int(request.json.get("y", 0))

    return str(x + y)


def main():
    app.run(debug=True, port=5000)


if __name__ == "__main__":
    main()
