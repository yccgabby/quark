from colorthief import ColorThief
import requests
import json

def palette(url):
    color_thief = ColorThief(url)
    arr = color_thief.get_color(quality=1)
    input_colors = [[arr[0], arr[1], arr[2]], "N", "N", "N", "N"]
    data = {'input': input_colors, "model": "default"}
    data = json.dumps(data)
    response = requests.post('http://colormind.io/api/', data=data)
    print('palette has been found')
    return response.json()